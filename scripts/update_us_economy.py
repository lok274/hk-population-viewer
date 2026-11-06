import argparse
import csv
from datetime import date, datetime, timedelta, timezone
from decimal import Decimal, InvalidOperation
from html import unescape
from io import BytesIO, StringIO, TextIOWrapper
import json
import os
from pathlib import Path
import re
import subprocess
import sys
from tempfile import NamedTemporaryFile
from urllib.parse import urlencode, urlsplit
from urllib.request import Request, urlopen
from xml.etree import ElementTree as ET
from zipfile import BadZipFile, ZipFile


ROOT = Path(__file__).resolve().parents[1]
SNAPSHOT = ROOT / "dist/us-economy-snapshot.js"
CONTRACT = ROOT / "scripts/us-economy-contract.mjs"
PREFIX = "export default "
KNOWN_GAPS = {"cpi", "coreCpi", "unemployment", "participation"}
GAP_MONTH = "2025-10"
MONTHS = "January February March April May June July August September October November December".split()
XLSX = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"
TREASURY = "https://api.fiscaldata.treasury.gov"
BLS_API = "https://api.bls.gov/publicAPI/v2/timeseries/data/"


def download(url, payload=None):
    body = json.dumps(payload).encode() if payload is not None else None
    request = Request(url, data=body, headers={
        "User-Agent": "hk-population-viewer (US economy data updater)",
        "Content-Type": "application/json",
    })
    try:
        with urlopen(request, timeout=45) as response:
            original, final = urlsplit(url), urlsplit(response.url)
            domain = ".".join(original.hostname.split(".")[-2:])
            if final.scheme != "https" or not (final.hostname == domain or final.hostname.endswith("." + domain)):
                raise ValueError("Redirect left the source agency: " + response.url)
            data = response.read(100_000_001)
            if not data or len(data) > 100_000_000:
                raise ValueError("Empty or oversized download")
            return data
    except OSError as error:
        raise ValueError(f"{url}: {error}") from error


def observation(value, status=None, release=None, as_of=None, provider=None):
    row = [None if value is None else Decimal(str(value)), status, release, as_of, provider]
    while len(row) > 1 and row[-1] is None:
        row.pop()
    return row


def add(rows, period, value):
    if period in rows:
        raise ValueError(f"Duplicate source period {period}")
    rows[period] = value


def code(spec):
    return spec["code"].split("／")[-1]


def nipa(specs, cutoff):
    result = {key: {} for key in specs}
    codes = {code(spec): key for key, spec in specs.items()}
    url = next(iter(specs.values()))["dataUrl"]
    for series, period, value in csv.reader(StringIO(download(url).decode("utf-8-sig"))):
        key = codes.get(series)
        if key is None:
            continue
        period = period.replace("Q", "-Q").replace("M", "-")
        frequency = specs[key]["frequency"]
        if frequency == "annual" and period >= str(cutoff.year):
            continue
        add(result[key], period, observation(value.replace(",", "")))
    return result


def bls(specs, cutoff, baseline):
    result = {key: {} for key in specs}
    ids = {code(spec): key for key, spec in specs.items()}
    first = min(int(baseline[key][0][0][:4]) for key in specs)
    for start in range(first, cutoff.year + 1, 10):
        data = json.loads(download(BLS_API, {
            "seriesid": list(ids), "startyear": str(start), "endyear": str(min(start + 9, cutoff.year)),
        }))
        if data["status"] != "REQUEST_SUCCEEDED" or data.get("message"):
            raise ValueError(f"BLS API: {data['status']} {data.get('message')}")
        series = data["Results"]["series"]
        if sorted(item["seriesID"] for item in series) != sorted(ids):
            raise ValueError("BLS API did not return each requested series")
        for item in series:
            key = ids[item["seriesID"]]
            for row in item["data"]:
                token = row["period"]
                if token in ("M13", "Q05"):
                    continue
                if not re.fullmatch(r"M(0[1-9]|1[0-2])" if specs[key]["frequency"] == "monthly" else r"Q0[1-4]", token):
                    raise ValueError(f"BLS unexpected period {token} in {key}")
                period = row["year"] + "-" + (token[1:] if token[0] == "M" else f"Q{token[-1]}")
                if period == GAP_MONTH and key in KNOWN_GAPS:
                    if row["value"] not in ("-", ""):
                        raise ValueError(f"BLS published a previously missing value for {key} {period}; review the gap rule")
                    continue
                statuses = {footnote.get("code") for footnote in row["footnotes"]}
                status = "preliminary" if "P" in statuses else "revised" if "R" in statuses else None
                add(result[key], period, observation(row["value"], status))
    for key in specs.keys() & KNOWN_GAPS:
        result[key][GAP_MONTH] = observation(None, "shutdown")
    return result


def retail_table(data, program):
    with ZipFile(BytesIO(data)) as archive:
        with TextIOWrapper(archive.open(f"{program}-mf.csv"), encoding="utf-8-sig", newline="") as source:
            rows = list(csv.reader(source))
    months = {}
    for row in rows[rows.index(["per_idx", "per_name"]) + 1:]:
        if len(row) != 2 or not row[0].isdigit():
            break
        month, year = row[1].split("-")
        add(months, row[0], f"{year}-{[name[:3] for name in MONTHS].index(month) + 1:02}")
    result = {}
    for row in rows:
        if len(row) == 7 and row[1:6] == ["1", "1", "0", "1", "1"]:
            add(result, months[row[0]], Decimal(row[-1]))
    return result


def retail(spec):
    historical = retail_table(download(spec["dataUrl"]), "MRTS")
    advance = retail_table(download(spec["advanceUrl"]), "MARTS")
    newest, last_historical = max(advance), max(historical)
    if newest <= last_historical:
        return {period: observation(value) for period, value in historical.items()}
    previous = (date.fromisoformat(newest + "-01") - timedelta(days=1)).isoformat()[:7]
    if last_historical < previous:
        raise ValueError(f"MRTS ends at {last_historical}, before the MARTS comparison month {previous}")
    result = {period: observation(value) for period, value in historical.items()}
    result[previous] = observation(advance[previous], "revised", provider="MARTS")
    result[newest] = observation(advance[newest], "advance", provider="MARTS")
    return result


def sheet(data, number):
    with ZipFile(BytesIO(data)) as archive:
        strings = []
        if "xl/sharedStrings.xml" in archive.namelist():
            strings = ["".join(node.itertext()) for node in ET.fromstring(archive.read("xl/sharedStrings.xml"))]
        table = ET.fromstring(archive.read(f"xl/worksheets/sheet{number}.xml"))
        rows = []
        for element in table.iter(XLSX + "row"):
            row = {}
            for cell in element.iterfind(XLSX + "c"):
                value = cell.findtext(XLSX + "v")
                if cell.get("t") == "s":
                    value = strings[int(value)]
                if cell.get("t") == "inlineStr":
                    value = "".join(cell.find(XLSX + "is").itertext())
                if value is not None:
                    row[re.sub(r"\d+$", "", cell.attrib["r"])] = value.strip()
            rows.append(row)
    return rows


def housing(key, spec):
    table = sheet(download(spec["dataUrl"]), 3)
    title = "New Privately-Owned Housing Units Started" if key == "starts" else "New Privately-Owned Housing Units Authorized by Building Permits"
    if (not table[0]["A"].startswith(title) or "Thousands of units" not in table[1]["A"]
            or [row.get("A") for row in table[2:4]] != ["Seasonally adjusted annual rate", "Month"]
            or [row.get("B") for row in table[3:5]] != ["United States", "Total"]):
        raise ValueError("Unrecognized Census housing table")
    result = {}
    for row in table[5:]:
        if row.get("A", "").isdigit():
            period = (date(1899, 12, 30) + timedelta(days=int(row["A"]))).isoformat()[:7]
            if row.get("B"):
                add(result, period, observation(row["B"]))
    return result


def trade(specs):
    table = sheet(download(next(iter(specs.values()))["dataUrl"]), 1)
    if (not table[0]["A"].startswith("U.S. International Trade in Goods and Services")
            or not table[1]["A"].startswith("In millions of dollars. Seasonally adjusted")
            or [table[2].get(col) for col in "CFI"] != ["Balance", "Exports", "Imports"]
            or [table[3].get(col) for col in "BEH"] != ["Total", "Total", "Total"]
            or not any("Balance of Payments (BOP) Basis" in row.get("A", "") for row in table)):
        raise ValueError("Unrecognized Census goods and services table")
    year = None
    result = {key: {} for key in specs}
    for row in table[4:]:
        label = row.get("A", "")
        if re.fullmatch(r"\d{4}", label):
            year = label
        if label in MONTHS and any(col in row for col in "BEH"):
            period = f"{year}-{MONTHS.index(label) + 1:02}"
            for key, col in zip(("tradeBalance", "exports", "imports"), "BEH"):
                add(result[key], period, observation(row[col]))
    return result


def fed_xml(specs, release, cutoff):
    codes = {code(spec): key for key, spec in specs.items()}
    result = {}
    url = next(iter(specs.values()))["dataUrl"]
    with ZipFile(BytesIO(download(url))) as archive, archive.open(f"{release}_data.xml") as source:
        for _, element in ET.iterparse(source, events=("end",)):
            if not element.tag.endswith("}Series"):
                continue
            key = codes.get(element.get("SERIES_NAME"))
            if key is not None:
                rows = {}
                for row in element:
                    if not row.tag.endswith("}Obs") or row.get("OBS_STATUS") != "A":
                        continue
                    period = row.attrib["TIME_PERIOD"][:7]
                    if period < cutoff.isoformat()[:7]:
                        add(rows, period, observation(row.attrib["OBS_VALUE"]))
                if key in result and rows != result[key]:
                    raise ValueError(f"Conflicting Federal Reserve XML series {key}")
                result[key] = rows
            element.clear()
    return result


def policy(url, earliest, cutoff):
    html = download(url).decode("utf-8")
    lows, highs = {}, {}
    for year, table in re.findall(r"<h4>\s*(\d{4})\s*</h4>\s*<div\b[^>]*>\s*<table\b[^>]*>(.*?)</table>", html, re.S):
        if int(year) < int(earliest[:4]):
            continue
        if "Level (%)" not in table:
            raise ValueError(f"Unrecognized FOMC rate table in {year}")
        for cells in re.findall(r"<tr\b[^>]*>(.*?)</tr>", table, re.S):
            cells = [unescape(re.sub(r"<[^>]*>", "", cell)).strip() for cell in re.findall(r"<td\b[^>]*>(.*?)</td>", cells, re.S)]
            if not cells:
                continue
            day, _, _, bounds = cells
            month, day = day.split()
            period = date(int(year), MONTHS.index(month) + 1, int(day.rstrip("*"))).isoformat()
            if earliest <= period <= cutoff.isoformat():
                low, high = re.split(r"\s*[-–]\s*", bounds)
                add(lows, period, observation(low, "effective"))
                add(highs, period, observation(high, "effective"))
    return {"targetLow": lows, "targetHigh": highs}


def treasury(url, **params):
    document = json.loads(download(url + "?" + urlencode(params)))
    rows = document["data"]
    if not rows or document["meta"]["total-pages"] != 1:
        raise ValueError("Treasury returned no data or an incomplete page")
    return rows


def budget(specs, cutoff):
    fields = {
        "receipts": "current_month_gross_rcpt_amt",
        "outlays": "current_month_gross_outly_amt",
        "fiscalBalance": "current_month_dfct_sur_amt",
    }
    url = next(iter(specs.values()))["dataUrl"]
    records = treasury(url, filter=f"record_calendar_month:eq:09,record_date:gte:{cutoff.year - 12}-09-30,record_date:lte:{cutoff}", sort="record_date", **{"page[size]": 1000})
    result = {key: {} for key in specs}
    for row in records:
        line = row["line_code_nbr"]
        if row["classification_desc"] != "Year-to-Date" or line not in ("140", "280"):
            continue
        year = str(int(row["record_fiscal_year"]) - (line == "140"))
        for key, field in fields.items():
            value = Decimal(row[field])
            result[key][year] = observation(-value if key == "fiscalBalance" else value)
    return result


def debt(specs, cutoff):
    url = specs["totalDebt"]["dataUrl"]
    fields = {"publicDebt": "debt_held_public_amt", "totalDebt": "tot_pub_debt_out_amt"}
    records = treasury(url, filter=f"record_date:gte:{cutoff.year - 10}-09-23,record_date:lte:{cutoff}", sort="-record_date", **{"page[size]": 3000})
    result = {key: {} for key in specs}
    final_year = cutoff.year - (cutoff < date(cutoff.year, 9, 30))
    for key, field in fields.items():
        latest = records[0]
        result[key + "Daily"][latest["record_date"]] = observation(latest[field], "asOf")
        for year in range(final_year - 9, final_year + 1):
            close = date(year, 9, 30)
            record = next((row for row in records if row["record_date"] <= close.isoformat()), None)
            if record is None or date.fromisoformat(record["record_date"]) < close - timedelta(days=7):
                raise ValueError(f"Treasury has no timely year-end debt record for FY {year}")
            result[key][str(year)] = observation(record[field], "asOf", as_of=record["record_date"])
    return result


def fetch_all(specs, cutoff, baseline):
    groups = {}
    for key, spec in specs.items():
        groups.setdefault(spec["sourceId"], {})[key] = spec
    adapters = {
        "gdpAnnual": lambda: nipa(groups["gdpAnnual"], cutoff),
        "gdpQuarter": lambda: nipa(groups["gdpQuarter"], cutoff),
        "income": lambda: nipa(groups["income"], cutoff),
        "BLS": lambda: bls(groups["cpi"] | groups["employment"] | groups["productivity"], cutoff, baseline),
        "retail": lambda: {"retailSales": retail(specs["retailSales"])},
        "housing": lambda: {key: housing(key, spec) for key, spec in groups["housing"].items()},
        "trade": lambda: trade(groups["trade"]),
        "yields": lambda: fed_xml(groups["yields"], "H15", cutoff),
        "industry": lambda: fed_xml(groups["industry"], "G17", cutoff),
        "policy": lambda: policy(specs["targetLow"]["url"], baseline["targetLow"][0][0], cutoff),
        "budget": lambda: budget(groups["budget"], cutoff),
        "debt": lambda: debt(groups["debt"], cutoff),
    }
    result = {}
    for agency, fetch in adapters.items():
        try:
            result.update(fetch())
        except (ValueError, KeyError, IndexError, TypeError, InvalidOperation, BadZipFile, ET.ParseError) as error:
            raise ValueError(f"{agency}: {error}") from error
    if result.keys() != specs.keys():
        raise ValueError(f"Source adapters returned the wrong series: {sorted(result.keys() ^ specs.keys())}")
    return result


def merge_rows(key, spec, current, previous):
    if not current or max(current) < previous[-1][0]:
        raise ValueError(f"{key}: source is missing or older than the committed snapshot")
    periods = sorted(current)
    if spec["count"] is not None:
        periods = periods[-(spec["count"] + spec["context"]):]
    elif not all(row[0] in current for row in previous):
        raise ValueError(f"{key}: a previously published effective date disappeared")
    old = {row[0]: row[1:] for row in previous}
    result = []
    for period in periods:
        item = current[period]
        prior = old.get(period)
        # Keep independently verified release metadata when the source value and explicit flags agree.
        if prior and item[0] == prior[0]:
            current_fields, prior_fields = item + [None] * 5, prior + [None] * 5
            same_provider = current_fields[4] == prior_fields[4]
            matching_metadata = all(new is None or new == old for new, old in zip(current_fields[1:4], prior_fields[1:4]))
            if same_provider and matching_metadata:
                item = prior
        result.append([period, *item])
    return result


def contract(mode, payload=None):
    result = subprocess.run(["node", str(CONTRACT), mode], input=payload, capture_output=True, encoding="utf-8")
    if result.returncode:
        raise ValueError(result.stderr.strip() or "Snapshot validation failed")
    return result.stdout.strip()


def snapshot_json(snapshot):
    def row_json(row):
        period, value, *metadata = row
        amount = "null" if value is None else format(value.normalize(), "f")
        return "[" + ",".join([json.dumps(period), amount, *(json.dumps(item) for item in metadata)]) + "]"

    lines = ["{", f'  "checkedAt": {json.dumps(snapshot["checkedAt"])},',
             f'  "cutoffAt": {json.dumps(snapshot["cutoffAt"])},', '  "rowsBySeries": {']
    series = []
    for key, rows in snapshot["rowsBySeries"].items():
        chunks = [", ".join(row_json(row) for row in rows[index:index + 6]) for index in range(0, len(rows), 6)]
        series.append(f'    {json.dumps(key)}: [\n      ' + ",\n      ".join(chunks) + "\n    ]")
    lines.extend([",\n".join(series), "  }", "}"])
    return "\n".join(lines)


def write_snapshot(candidate):
    file = NamedTemporaryFile(mode="w", dir=SNAPSHOT.parent, encoding="utf-8", newline="\n", delete=False)
    temporary = Path(file.name)
    try:
        with file:
            file.write(PREFIX + candidate + ";\n")
        os.replace(temporary, SNAPSHOT)
    finally:
        temporary.unlink(missing_ok=True)


def main():
    parser = argparse.ArgumentParser(description="Refresh the static U.S. economy snapshot from official sources.")
    modes = parser.add_mutually_exclusive_group(required=True)
    modes.add_argument("--check", action="store_true", help="validate the committed snapshot without downloads")
    modes.add_argument("--dry-run", action="store_true", help="download and validate without writing a file")
    modes.add_argument("--write", action="store_true", help="write the snapshot only after all checks pass")
    args = parser.parse_args()
    try:
        raw = SNAPSHOT.read_text(encoding="utf-8")
        if not raw.startswith(PREFIX) or not raw.endswith(";\n"):
            raise ValueError("Snapshot must be a JSON-backed JavaScript module")
        previous = json.loads(raw[len(PREFIX):-2], parse_float=Decimal, parse_int=Decimal)
        print(contract("--check"))
        if args.check:
            return 0
        cutoff = datetime.now(timezone.utc).date()
        if cutoff.isoformat() < previous["cutoffAt"]:
            raise ValueError("System date is older than the committed snapshot")
        baseline = previous["rowsBySeries"]
        specs = json.loads(contract("--specs"))
        raw_rows = fetch_all(specs, cutoff, baseline)
        rows = {key: merge_rows(key, specs[key], raw_rows[key], old) for key, old in baseline.items()}
        if rows == baseline:
            print("No source data changed.")
            return 0
        candidate = snapshot_json({"checkedAt": cutoff.isoformat(), "cutoffAt": cutoff.isoformat(), "rowsBySeries": rows})
        print(contract("--candidate", candidate))
        for key, values in rows.items():
            if values != baseline[key]:
                print(f"{key}: {baseline[key][-1][0]} to {values[-1][0]} (observations or release metadata changed)")
        if args.write:
            write_snapshot(candidate)
        return 0
    except (OSError, ValueError, KeyError, InvalidOperation) as error:
        print(f"U.S. snapshot unchanged: {error}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
