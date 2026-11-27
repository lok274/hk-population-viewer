"""Refresh the national gross-emissions card from EPA's final inventory."""
import argparse
from datetime import datetime, timezone
from io import BytesIO
from pathlib import Path
import re
from urllib.parse import urljoin, urlsplit

from pypdf import PdfReader
from update_society import bar_card, replace_card
from update_us_economy import download

ROOT = Path(__file__).resolve().parents[1]
BASE_YEAR = 2023
BASE_REPORT = 'https://www.epa.gov/system/files/documents/2025-04/us-ghg-inventory-2025-main-text.pdf'
INDEX = 'https://www.epa.gov/ghgemissions/inventory-us-greenhouse-gas-emissions-and-sinks-1990-{}'


def report():
    for year in range(datetime.now(timezone.utc).year - 1, BASE_YEAR, -1):
        index = INDEX.format(year)
        try:
            page = download(index).decode('utf-8')
        except ValueError as error:
            if 'HTTP Error 404' in str(error):
                continue
            raise
        if 'Full, complete Inventory report' not in page or f'1990-{year}' not in page:
            raise ValueError(f'EPA index does not identify a final inventory: {index}')
        paths = set(re.findall(r'href="([^" ]*us-ghg-inventory-[^" ]*main-text[^" ]*\.pdf)"', page, re.I))
        urls = {urljoin(index, path) for path in paths}
        if len(urls) != 1:
            raise ValueError(f'EPA final report link is ambiguous: {index}')
        url = urls.pop()
        if urlsplit(url).hostname != 'www.epa.gov' or 'draft' in url.lower():
            raise ValueError('Unexpected EPA report URL')
        return year, url
    return BASE_YEAR, BASE_REPORT


def gross_emissions(year, url):
    pdf = PdfReader(BytesIO(download(url)))
    matches = []
    for page in pdf.pages[:160]:
        text = page.extract_text()
        if 'Table ES-2:' not in text or 'Total Gross Emissions (Sources)' not in text:
            continue
        if 'Greenhouse Gas Emissions and Sinks (MMT CO2 Eq.)' not in text:
            raise ValueError('Unexpected EPA emissions table units')
        headers = re.findall(r'Gas/Source\s+((?:\d{4}\s+){5,})', text)
        rows = re.findall(r'Total Gross Emissions \(Sources\)[^\n]*', text)
        if len(headers) != 1 or len(rows) != 1:
            raise ValueError('Unexpected EPA summary table')
        periods = [int(value) for value in headers[0].split()]
        values = re.findall(r'\b\d[\d,]*\.\d+', rows[0])
        if (len(values) != len(periods) + 1 or periods != sorted(set(periods))
                or periods[-1] != year or periods[-5:] != list(range(year - 4, year + 1))):
            raise ValueError('Unexpected EPA emissions periods or values')
        values = [float(value.replace(',', '')) for value in values[:len(periods)]]
        if any(not 1000 <= value <= 20000 for value in values):
            raise ValueError('Invalid EPA emissions units or values')
        matches.append(list(zip(periods[-5:], values[-5:])))
    if len(matches) != 1:
        raise ValueError('EPA gross emissions table missing or ambiguous')
    return matches[0]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--write', action='store_true')
    args = parser.parse_args()
    year, url = report()
    observations = gross_emissions(year, url)
    card = bar_card('溫室氣體排放總量', f'EPA 最終排放清單，截至 {year} 年；總排放不包括土地使用、土地使用改變及林業的排放與吸收，不是淨排放。歷史數據可隨清單修訂。', '百萬公噸 CO₂ 當量', [(str(y), value) for y, value in observations], str(year), url, '美國環保署 · 排放清單表 ES-2')
    path = ROOT / 'dist/us-society.html'
    old = path.read_text(encoding='utf-8')
    new = replace_card(old, '溫室氣體排放總量', card, str(year), str(BASE_YEAR))
    if args.write and new != old:
        path.write_text(new, encoding='utf-8', newline='\n')
    print(f'EPA: report={year}; first={observations[0]}; latest={observations[-1]}; changed={new != old}; written={args.write and new != old}')


if __name__ == '__main__':
    main()
