"""Refresh the state snapshot from official public files and the BLS API."""
import argparse
import csv
from datetime import datetime, timezone
from io import BytesIO, StringIO
import json
import math
import os
from pathlib import Path
from tempfile import NamedTemporaryFile
from zipfile import ZipFile

from update_us_economy import BLS_API, download

ROOT = Path(__file__).resolve().parents[1]
SNAPSHOT = ROOT / 'dist/us-states-snapshot.js'
PREFIX = 'export default '
STATES = {
    '01': ('AL', '阿拉巴馬州'), '02': ('AK', '阿拉斯加州'), '04': ('AZ', '亞利桑那州'),
    '05': ('AR', '阿肯色州'), '06': ('CA', '加利福尼亞州'), '08': ('CO', '科羅拉多州'),
    '09': ('CT', '康涅狄格州'), '10': ('DE', '特拉華州'), '11': ('DC', '華盛頓特區'),
    '12': ('FL', '佛羅里達州'), '13': ('GA', '佐治亞州'), '15': ('HI', '夏威夷州'),
    '16': ('ID', '愛達荷州'), '17': ('IL', '伊利諾伊州'), '18': ('IN', '印第安納州'),
    '19': ('IA', '愛荷華州'), '20': ('KS', '堪薩斯州'), '21': ('KY', '肯塔基州'),
    '22': ('LA', '路易斯安那州'), '23': ('ME', '緬因州'), '24': ('MD', '馬里蘭州'),
    '25': ('MA', '麻省'), '26': ('MI', '密歇根州'), '27': ('MN', '明尼蘇達州'),
    '28': ('MS', '密西西比州'), '29': ('MO', '密蘇里州'), '30': ('MT', '蒙大拿州'),
    '31': ('NE', '內布拉斯加州'), '32': ('NV', '內華達州'), '33': ('NH', '新罕布什爾州'),
    '34': ('NJ', '新澤西州'), '35': ('NM', '新墨西哥州'), '36': ('NY', '紐約州'),
    '37': ('NC', '北卡羅來納州'), '38': ('ND', '北達科他州'), '39': ('OH', '俄亥俄州'),
    '40': ('OK', '奧克拉荷馬州'), '41': ('OR', '俄勒岡州'), '42': ('PA', '賓夕凡尼亞州'),
    '44': ('RI', '羅德島州'), '45': ('SC', '南卡羅來納州'), '46': ('SD', '南達科他州'),
    '47': ('TN', '田納西州'), '48': ('TX', '德克薩斯州'), '49': ('UT', '猶他州'),
    '50': ('VT', '佛蒙特州'), '51': ('VA', '維珍尼亞州'), '53': ('WA', '華盛頓州'),
    '54': ('WV', '西維珍尼亞州'), '55': ('WI', '威斯康辛州'), '56': ('WY', '懷俄明州'),
}
SUMMARY = {'realGdp': '1', 'income': '10', 'consumption': '9', 'prices': '13'}
INDUSTRIES = {'manufacturing': '12', 'information': '45', 'health': '70', 'construction': '11'}
EXPECTED_UNITS = {
    'realGdp': 'Millions of chained 2017 dollars', 'income': 'Dollars',
    'consumption': 'Constant 2017 dollars', 'prices': 'Index',
    'manufacturing': 'Millions of current dollars', 'information': 'Millions of current dollars',
    'health': 'Millions of current dollars', 'construction': 'Millions of current dollars',
}


def bea(zip_url, table, lines, target):
    with ZipFile(BytesIO(download(zip_url))) as archive:
        for fips, (abbr, _) in STATES.items():
            names = [n for n in archive.namelist() if n.startswith(f'{table}_{abbr}_') and n.endswith('.csv')]
            if len(names) != 1:
                raise ValueError(f'{table}: missing or duplicate {abbr}')
            records = list(csv.DictReader(StringIO(archive.read(names[0]).decode('utf-8-sig'))))
            chosen = {r['LineCode']: r for r in records if r.get('LineCode') in lines.values()}
            if set(chosen) != set(lines.values()):
                raise ValueError(f'{table}: missing lines for {abbr}')
            for key, line in lines.items():
                row = chosen[line]
                if row['GeoFIPS'].strip(' "') != fips + '000' or row['TableName'] != table:
                    raise ValueError(f'{table}: unexpected geography for {abbr}')
                if row['Unit'] != EXPECTED_UNITS[key]:
                    raise ValueError(f'{table}: unexpected unit for {abbr} {key}')
                years = sorted(y for y in row if y and len(y) == 4 and y.isdigit())
                valid = [y for y in years if row[y].strip() not in ('', '(NA)', '(D)', '(L)')]
                if not valid:
                    raise ValueError(f'{abbr} {key}: no published observations')
                end = valid[-1]
                rows = []
                for year in years:
                    if year > end or int(year) < int(end) - 9:
                        continue
                    raw = row[year].strip().replace(',', '')
                    value = None if raw in ('', '(NA)', '(D)', '(L)') else float(raw)
                    rows.append([year, value, raw if value is None else 'published'])
                target[fips][key] = rows


def bls(target, year):
    ids = {f'LASST{fips}00000000000{code}': (fips, key)
           for fips in STATES for key, code in [('unemployment', '03'), ('employed', '05')]}
    keys = list(ids)
    for start in range(0, len(keys), 25):
        batch = keys[start:start + 25]
        data = json.loads(download(BLS_API, {'seriesid': batch, 'startyear': str(year - 6), 'endyear': str(year)}))
        if data.get('status') != 'REQUEST_SUCCEEDED' or data.get('message'):
            raise ValueError(f'BLS request failed: {data.get("message")}')
        series = data['Results']['series']
        if {item['seriesID'] for item in series} != set(batch):
            raise ValueError('BLS did not return every state series')
        for item in series:
            fips, key = ids[item['seriesID']]
            rows = []
            for obs in item['data']:
                if not obs['period'].startswith('M') or obs['period'] == 'M13':
                    continue
                period = obs['year'] + '-' + obs['period'][1:]
                raw = obs['value']
                codes = {f.get('code') for f in obs.get('footnotes', [])}
                if raw in ('-', ''):
                    status = 'shutdown' if period == '2025-10' and 'X' in codes else 'unavailable'
                    value = None
                else:
                    value = float(raw)
                    status = 'preliminary' if 'P' in codes else 'revised' if 'R' in codes else 'published'
                rows.append([period, value, status])
            rows = sorted(rows)
            if not rows:
                raise ValueError(f'{fips} {key}: no BLS observations')
            by_period = {r[0]: r for r in rows}
            if len(by_period) != len(rows):
                raise ValueError(f'{fips} {key}: duplicate BLS period')
            end_year, end_month = map(int, rows[-1][0].split('-'))
            end = end_year * 12 + end_month - 1
            target[fips][key] = [by_period.get(f'{month // 12:04}-{month % 12 + 1:02}',
                [f'{month // 12:04}-{month % 12 + 1:02}', None, 'unavailable']) for month in range(end - 59, end + 1)]


def permits(target, today):
    # Published annual files cover completed calendar years. January–May may lack the prior year.
    for yr in range(today.year - 11, today.year):
        url = f'https://www2.census.gov/econ/bps/State/st{yr}a.txt'
        try:
            raw = download(url).decode('utf-8-sig')
        except ValueError as exc:
            if yr == today.year - 1 and today.month <= 5 and 'HTTP Error 404' in str(exc):
                continue
            raise
        seen = set()
        for row in csv.reader(StringIO(raw)):
            if len(row) < 17 or row[1] not in STATES or not row[0].startswith(str(yr)):
                continue
            fips = row[1]
            if fips in seen:
                raise ValueError(f'duplicate Census state {fips} {yr}')
            seen.add(fips)
            units = sum(int(row[i]) for i in (6, 9, 12, 15))
            target[fips].setdefault('permits', []).append([str(yr), units, 'estimate'])
        if seen != set(STATES):
            raise ValueError(f'Census annual file {yr} is missing states')
    for fips in STATES:
        target[fips]['permits'] = target[fips]['permits'][-10:]


def validate(data, previous=None):
    if set(data['states']) != set(STATES):
        raise ValueError('Expected 50 states and DC')
    if data.get('names') != {fips: list(value) for fips, value in STATES.items()}:
        raise ValueError('State labels do not match the official geography list')
    expected = set(SUMMARY) | set(INDUSTRIES) | {'unemployment', 'employed', 'permits'}
    for fips, series in data['states'].items():
        if set(series) != expected:
            raise ValueError(f'{fips}: incorrect indicator set')
        for key, rows in series.items():
            periods = [r[0] for r in rows]
            if len(rows) != (60 if key in ('unemployment', 'employed') else 10) or periods != sorted(set(periods)):
                raise ValueError(f'{fips} {key}: incomplete or out-of-order series')
            if key in ('unemployment', 'employed'):
                positions = [int(p[:4]) * 12 + int(p[5:]) for p in periods]
            else:
                positions = [int(p) for p in periods]
            if any(b != a + 1 for a, b in zip(positions, positions[1:])):
                raise ValueError(f'{fips} {key}: missing period')
            if any((v is not None and (not math.isfinite(v) or v < 0)) or (v is None and status not in ('shutdown', 'unavailable', '(NA)', '(D)', '(L)', '')) for _, v, status in rows):
                raise ValueError(f'{fips} {key}: invalid observation')
            if previous and periods[-1] < previous['states'][fips][key][-1][0]:
                raise ValueError(f'{fips} {key}: source older than current snapshot')


def serialize(data):
    compact = lambda value: json.dumps(value, ensure_ascii=False, separators=(',', ':'))
    lines = ['{', f'  "checkedAt": {compact(data["checkedAt"])},',
             f'  "names": {compact(data["names"])},', '  "states": {']
    states = []
    for fips, series in data['states'].items():
        entries = [f'      {compact(key)}: {compact(rows)}' for key, rows in series.items()]
        states.append(f'    {compact(fips)}: {{\n' + ',\n'.join(entries) + '\n    }')
    lines.extend([',\n'.join(states), '  }', '}'])
    return '\n'.join(lines)


def main():
    parser = argparse.ArgumentParser()
    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument('--check', action='store_true')
    mode.add_argument('--dry-run', action='store_true')
    mode.add_argument('--write', action='store_true')
    args = parser.parse_args()
    previous = None
    if SNAPSHOT.exists():
        text = SNAPSHOT.read_text(encoding='utf-8')
        if not text.startswith(PREFIX) or not text.endswith(';\n'):
            raise ValueError('Invalid snapshot module')
        previous = json.loads(text[len(PREFIX):-2])
        validate(previous)
    if args.check:
        if previous is None:
            raise ValueError('Snapshot is missing')
        print('Validated 51 state snapshots.')
        return
    today = datetime.now(timezone.utc).date()
    states = {fips: {} for fips in STATES}
    bea('https://apps.bea.gov/regional/zip/SASUMMARY.zip', 'SASUMMARY', SUMMARY, states)
    bea('https://apps.bea.gov/regional/zip/SAGDP.zip', 'SAGDP2', INDUSTRIES, states)
    bls(states, today.year)
    permits(states, today)
    result = {'checkedAt': today.isoformat(), 'names': {fips: list(value) for fips, value in STATES.items()}, 'states': states}
    validate(result, previous)
    if previous and result['states'] == previous['states']:
        print('No observations changed.')
        return
    print(f'Validated {len(states)} states; BEA, BLS and Census observations available.')
    if args.write:
        with NamedTemporaryFile(mode='w', encoding='utf-8', newline='\n', dir=SNAPSHOT.parent, delete=False) as out:
            temp = Path(out.name)
            try:
                out.write(PREFIX + serialize(result) + ';\n')
            except Exception:
                temp.unlink(missing_ok=True)
                raise
        os.replace(temp, SNAPSHOT)


if __name__ == '__main__':
    try:
        main()
    except (ValueError, KeyError, OSError) as exc:
        raise SystemExit(f'State snapshot unchanged: {exc}') from exc
