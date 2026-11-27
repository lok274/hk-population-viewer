"""Refresh national violent-crime estimates from the FBI annual report."""
import argparse
from datetime import datetime, timezone
from io import BytesIO
from pathlib import Path
import re

from pypdf import PdfReader
from update_society import replace_card, stat_card
from update_us_economy import download

ROOT = Path(__file__).resolve().parents[1]
REPORT = 'https://cde.ucr.cjis.gov/LATEST/resources/reports/UCR_Summary_of_Reported_Crimes_in_the_Nation_{}.pdf'


def latest_report():
    for year in range(datetime.now(timezone.utc).year - 1, 2024, -1):
        url = REPORT.format(year)
        try:
            return year, url, download(url)
        except ValueError as error:
            if 'HTTP Error 404' not in str(error):
                raise
    raise ValueError('No FBI annual report available')


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--write', action='store_true')
    args = parser.parse_args()
    year, url, data = latest_report()
    pdf = PdfReader(BytesIO(data))
    matches = []
    for page in pdf.pages:
        text = ' '.join(page.extract_text().split())
        if 'Violent Crime Estimates' not in text:
            continue
        matches.extend(re.findall(r'An estimated ([\d,]+) violent crime offenses were committed in (\d{4})', text))
    if len(matches) != 1 or int(matches[0][1]) != year:
        raise ValueError('Unexpected FBI annual violent-crime estimate')
    value = int(matches[0][0].replace(',', ''))
    if not 100_000 <= value <= 10_000_000:
        raise ValueError('Invalid FBI violent-crime estimate')
    card = stat_card('暴力罪案估計', f'{value:,} 宗', f'{year} 年 · FBI 根據參與機構的報案資料作全國估計；口徑與香港不同。', str(year), url, 'FBI · 全國罪案年度報告')
    path = ROOT / 'dist/us-society.html'
    old = path.read_text(encoding='utf-8')
    new = replace_card(old, '暴力罪案估計', card, str(year), '2025')
    if args.write and new != old:
        path.write_text(new, encoding='utf-8', newline='\n')
    print(f'FBI: year={year}; estimate={value}; changed={new != old}; written={args.write and new != old}')


if __name__ == '__main__':
    main()
