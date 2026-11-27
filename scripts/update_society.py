"""Refresh selected society indicators from official public datasets."""
import argparse
import csv
from datetime import datetime, timezone
from html import escape, unescape
from io import StringIO
import json
import math
from pathlib import Path
import re
import time
from urllib.error import HTTPError
from urllib.parse import urlsplit
from urllib.request import Request, urlopen

from update_us_economy import download

ROOT = Path(__file__).resolve().parents[1]
TABLE = 'https://www.censtatd.gov.hk/api/get.php?id={}&lang=en&full_series=1'
NOAA = 'https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/national/time-series/110/tavg/12/12/2019-{}.csv'


def fetch(url):
    for attempt in range(3):
        try:
            return download(url)
        except ValueError:
            if attempt == 2:
                raise
            time.sleep(2 ** attempt)


def hk_table(table):
    data = json.loads(fetch(TABLE.format(table)))
    if data['header']['status']['code'] != 0 or not isinstance(data['dataSet'], list):
        raise ValueError(f'Invalid official table {table}')
    return data['dataSet']


def years(rows, **fields):
    result = {}
    for row in rows:
        if row.get('freq') != 'Y' or any(row.get(k) != v for k, v in fields.items()):
            continue
        period, value = str(row.get('period')), row.get('figure')
        if not re.fullmatch(r'\d{4}', period) or not isinstance(value, (float, int)) or isinstance(value, bool) or not math.isfinite(value) or value < 0:
            raise ValueError(f'Invalid observation: {row}')
        if row.get('sd_value') or period in result:
            raise ValueError(f'Unrecognized status or duplicate observation: {row}')
        result[period] = value
    if not result:
        raise ValueError(f'No annual observations for {fields}')
    return result


def group_values(rows, field, codes, **filters):
    series = [years(rows, **{field: code}, **filters) for code in codes]
    common = set.intersection(*(set(s) for s in series))
    if not common:
        raise ValueError('No shared annual period')
    year = max(common)
    if any(max(s) != year for s in series):
        raise ValueError('Source categories have different latest periods')
    return year, [s[year] for s in series]


def bar_card(title, description, unit, entries, period, url, source):
    maximum = max(value for _, value in entries)
    if maximum <= 0:
        raise ValueError('Invalid chart maximum')
    bars = ''.join(f'<li><div class="society-bar-label"><span>{escape(label)}</span><strong>{value:,.1f} {escape(unit)}</strong></div><div class="society-track" aria-hidden="true"><div class="society-fill" style="--width:{value / maximum * 100:.3f}%"></div></div></li>' for label, value in entries)
    rows = ''.join(f'<tr><th scope="row">{escape(label)}</th><td>{value:,.1f} {escape(unit)}</td></tr>' for label, value in entries)
    return f'''<article class="society-card" data-observed-period="{period}"><h3>{title}</h3><p>{description}</p><p>橫條從零開始，最長橫條代表該圖最大數值。</p><ul class="society-bars" aria-label="{title}">{bars}</ul><details><summary>查看數據表及來源</summary><div class="society-table-wrap" tabindex="0" role="region" aria-label="{title}數據表"><table><caption>{title}數據表</caption><thead><tr><th scope="col">項目</th><th scope="col">數值</th></tr></thead><tbody>{rows}</tbody></table></div></details><p><a href="{url}" target="_blank" rel="noopener noreferrer">{source} ↗</a></p><p>官方資料定期檢查；更新需經審核。</p></article>'''


def stat_card(title, value, desc, period, url, source):
    return f'''<article class="society-card" data-observed-period="{period}"><h3>{title}</h3><p class="society-stat">{value}</p><p>{desc}</p><p><a href="{url}" target="_blank" rel="noopener noreferrer">{source} ↗</a></p><p>官方資料定期檢查；更新需經審核。</p></article>'''


def replace_card(html, title, replacement, year, initial):
    pattern = r'<article class="society-card"(?: data-observed-period="(\d{4})")?>\s*<h3>' + re.escape(title) + r'</h3>.*?</article>'
    matches = list(re.finditer(pattern, html, flags=re.S))
    if len(matches) != 1:
        raise ValueError(f'Expected exactly one card: {title}')
    match = matches[0]
    previous = match.group(1) or initial
    if int(year) < int(previous) or int(year) >= datetime.now(timezone.utc).year:
        raise ValueError(f'Invalid or older period for {title}: {year}')
    return html[:match.start()] + replacement + html[match.end():]


def refresh_hk(html):
    ghg = years(hk_table('950-92054'), sv='TT_GRE_EMI', svDesc='(kilotonnes CO<sub>2</sub>-e) ')
    year = max(ghg)
    card = stat_card('溫室氣體排放總量', f'{ghg[year]:,.0f} 千公噸 CO₂ 當量', f'{year} 年 · 香港全境估算。', year, 'https://www.censtatd.gov.hk/en/web_table.html?id=950-92054', '政府統計處 · 溫室氣體排放')
    html = replace_card(html, '溫室氣體排放總量', card, year, '2024')

    climate = json.loads(fetch('https://www.hko.gov.hk/cis/yearlyExtract/yearlyExtract.xml'))['stn']['yearData']
    readings = {}
    for row in climate:
        if len(row) != 14 or not re.fullmatch(r'\d{4}', row[0]):
            raise ValueError('Unexpected HKO annual data')
        if int(row[0]) < 2020:
            continue
        if row[4] in ('---', '***'):
            continue
        value = float(row[4])
        if not 10 <= value <= 35 or row[0] in readings:
            raise ValueError('Invalid HKO annual temperature')
        if int(row[0]) < datetime.now(timezone.utc).year:
            readings[row[0]] = value
    year = max(readings)
    card = stat_card('全年平均氣溫', f'{readings[year]:.1f} °C', f'{year} 年 · 香港天文台總部記錄。', year, 'https://www.hko.gov.hk/en/cis/yearlyExtract.htm', '香港天文台 · 年度氣象資料')
    html = replace_card(html, '全年平均氣溫', card, year, '2025')

    year, values = group_values(hk_table('950-92062'), 'APE_TYPE', ['SO2', 'Nox', 'RSP', 'FSP', 'VOC', 'CO'], sv='APE', svDesc='Tonnes', APE_SOURCES='TTL_XHILLF')
    card = bar_card('主要空氣污染物排放', f'{year} 年估算，不包括山火。污染物性質不同，不能相加；PM₁₀ 包含 PM₂.₅。', '公噸', list(zip(['二氧化硫', '氮氧化物', 'PM₁₀', 'PM₂.₅', '揮發性有機化合物', '一氧化碳'], values)), year, 'https://www.censtatd.gov.hk/en/web_table.html?id=950-92062', '政府統計處 · 空氣污染物排放')
    html = replace_card(html, '主要空氣污染物排放', card, year, '2024')

    year, values = group_values(hk_table('915-91201'), 'USER_TYPE', [1, 2, 3, 4], sv='ELEC_LOCAL', svDesc='Terajoule')
    card = bar_card('按用戶類別的全年用電量', f'{year} 年 · 包括街燈，不是發電燃料比例；1 太焦耳等於一萬億焦耳。', '太焦耳', list(zip(['住宅', '商業', '工業', '街燈'], values)), year, 'https://www.censtatd.gov.hk/en/web_table.html?id=915-91201', '政府統計處 · 用電統計')
    html = replace_card(html, '按用戶類別的全年用電量', card, year, '2025')

    averages = years(hk_table('130-06102'), sv='ADHS', svDesc='No.')
    year = max(averages)
    selected = sorted(averages)[-6:]
    if len(selected) != 6 or any(int(b) != int(a) + 1 for a, b in zip(selected, selected[1:])):
        raise ValueError('Incomplete household history')
    card = bar_card('家庭住戶平均人數', f'{selected[0]}–{year} 年 · 根據綜合住戶統計調查及年中人口估計編製。家庭住戶成員不一定有親屬關係。', '人', [(y, averages[y]) for y in selected], year, 'https://www.censtatd.gov.hk/en/web_table.html?id=130-06102', '政府統計處 · 家庭住戶統計')
    html = replace_card(html, '家庭住戶平均人數', card, year, '2025')

    year, values = group_values(hk_table('130-06601'), 'HHSIZE', [1, 2, 3, 4, '5_and_over'], sv='DH', svDesc='Percentage share (%)')
    if not 99 <= sum(values) <= 101:
        raise ValueError('Household distribution does not add up')
    card = bar_card('家庭住戶按人數分布', f'{year} 年 · 百分比為官方表列，四捨五入後合計可能有差異。', '%', list(zip(['1 人', '2 人', '3 人', '4 人', '5 人或以上'], values)), year, 'https://www.censtatd.gov.hk/en/web_table.html?id=130-06601', '政府統計處 · 家庭住戶人數')
    return replace_card(html, '家庭住戶按人數分布', card, year, '2025')


def refresh_us(html):
    text = fetch(NOAA.format(datetime.now(timezone.utc).year)).decode('utf-8-sig')
    if 'Contiguous U.S. January-December Average Temperature' not in text or 'Degrees Fahrenheit' not in text:
        raise ValueError('Unexpected NOAA geography or units')
    data = list(csv.DictReader(StringIO('\n'.join(line for line in text.splitlines() if not line.startswith('#')))))
    observations = {}
    for row in data:
        date, value = row['Date'], float(row['Value'])
        if not re.fullmatch(r'\d{4}12', date) or not 30 <= value <= 80 or date in observations:
            raise ValueError('Unexpected NOAA annual observation')
        if int(date[:4]) < datetime.now(timezone.utc).year:
            observations[date] = value
    date = max(observations)
    year = date[:4]
    card = stat_card('美國本土 48 州全年平均氣溫', f'{observations[date]:.1f} °F', f'{year} 年 · 本土 48 州，不包括阿拉斯加及夏威夷。', year, NOAA.format(datetime.now(timezone.utc).year), 'NOAA · 本土氣溫數據')
    html = replace_card(html, '美國本土 48 州全年平均氣溫', card, year, '2025')

    url = 'https://www.eia.gov/kids/energy-sources/electricity/electricity-in-the-us.php'
    source = unescape(fetch(url).decode('utf-8'))
    pattern = (r'A diagram showing the sources of total U\.S\. electricity generation in (\d{4}): '
               r'Renewables ([\d.]+)%, Petroleum and other ([\d.]+)%, nuclear ([\d.]+)%, '
               r'coal ([\d.]+)%, natural gas ([\d.]+)%')
    matches = set(re.findall(pattern, source, flags=re.I))
    if len(matches) != 1 or 'utility-scale electricity generation' not in source:
        raise ValueError('Unexpected EIA generation breakdown')
    year, renewable, other, nuclear, coal, gas = next(iter(matches))
    values = [float(gas), float(coal), float(nuclear), float(renewable), float(other)]
    if any(not math.isfinite(v) or not 0 <= v <= 100 for v in values) or not 99 <= sum(values) <= 101:
        raise ValueError('Invalid EIA generation shares')
    card = bar_card('發電來源比例', f'{year} 年 · 電力事業規模發電設施；不包括小型屋頂太陽能發電。各數字按官方圖表四捨五入。', '%', list(zip(['天然氣', '煤', '核能', '可再生能源', '石油及其他'], values)), year, url, '美國能源資訊署 · 電力來源')
    html = replace_card(html, '發電來源比例', card, year, '2025')

    for vintage in range(datetime.now(timezone.utc).year - 1, 2024, -1):
        census = f'https://www2.census.gov/programs-surveys/popest/datasets/2020-{vintage}/national/asrh/nc-est{vintage}-agesex-res.csv'
        try:
            raw = download(census).decode('utf-8-sig')
            break
        except ValueError as error:
            if 'HTTP Error 404' not in str(error):
                raise
    else:
        raise ValueError('No Census population vintage available')
    rows = list(csv.DictReader(StringIO(raw)))
    column = f'POPESTIMATE{vintage}'
    national = [row for row in rows if row['SEX'] == '0']
    if len(national) != 102 or {row['AGE'] for row in national} != {str(n) for n in range(101)} | {'999'}:
        raise ValueError('Unexpected Census age categories')
    by_age = {int(row['AGE']): int(row[column]) for row in national}
    total = by_age[999]
    if total < 1 or any(value < 0 for value in by_age.values()) or sum(by_age[i] for i in range(101)) != total:
        raise ValueError('Census population totals do not match')
    year = str(vintage)
    card = stat_card('全國人口', f'{total:,} 人', f'{year} 年 7 月 1 日 · V{year} 人口估計。', year, census, '美國人口普查局 · 全國人口估計')
    html = replace_card(html, '全國人口', card, year, '2025')
    young = sum(by_age[i] for i in range(18)) / total * 100
    older = sum(by_age[i] for i in range(65, 101)) / total * 100
    card = bar_card('人口年齡組別', f'{year} 年 7 月 1 日人口估計 · 按官方年齡人數計算比例；只展示兩個年齡組，並非完整年齡分布。', '%', [('18 歲以下', young), ('65 歲或以上', older)], year, census, '美國人口普查局 · 全國人口估計')
    html = replace_card(html, '人口年齡組別', card, year, '2025')

    for acs_year in range(datetime.now(timezone.utc).year - 1, 2023, -1):
        acs = f'https://www2.census.gov/programs-surveys/acs/summary_file/{acs_year}/table-based-SF/data/5YRData/acsdt5y{acs_year}-b25010.dat'
        try:
            request = Request(acs, headers={'User-Agent': 'hk-population-viewer', 'Range': 'bytes=0-4095'})
            with urlopen(request, timeout=45) as response:
                if urlsplit(response.url).hostname != 'www2.census.gov' or urlsplit(response.url).scheme != 'https':
                    raise ValueError('Unexpected ACS redirect')
                lines = response.read(4096).decode('utf-8-sig').splitlines()
            break
        except HTTPError as error:
            if error.code not in (401, 403, 404):
                raise
    else:
        raise ValueError('No accessible ACS household data')
    rows = list(csv.DictReader(lines[:2], delimiter='|'))
    if len(rows) != 1 or rows[0].get('GEO_ID') != '0100000US':
        raise ValueError('ACS national household row not found')
    average = float(rows[0]['B25010_E001'])
    if not math.isfinite(average) or not 1 <= average <= 10:
        raise ValueError('Invalid ACS household estimate')
    period = str(acs_year)
    card = stat_card('平均住戶人數', f'{average:.2f} 人', f'{acs_year - 4}–{acs_year} 年美國社區調查五年期估計，並非 {acs_year} 年單年數字。', period, acs, '美國人口普查局 · ACS 表 B25010')
    return replace_card(html, '平均住戶人數', card, period, '2024')


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--region', choices=['hk', 'us'], required=True)
    parser.add_argument('--write', action='store_true')
    args = parser.parse_args()
    path = ROOT / 'dist' / f'{args.region}-society.html'
    old = path.read_text(encoding='utf-8')
    new = (refresh_hk if args.region == 'hk' else refresh_us)(old)
    if args.write and new != old:
        path.write_text(new, encoding='utf-8', newline='\n')
    print(f'{args.region}: candidate validated; changed={new != old}; written={args.write and new != old}')


if __name__ == '__main__':
    main()
