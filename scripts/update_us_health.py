"""Refresh national life expectancy from CDC FastStats."""
import argparse
from pathlib import Path
import re

from update_society import bar_card, fetch, replace_card

ROOT = Path(__file__).resolve().parents[1]
SOURCE = 'https://portugues.cdc.gov/nchs/fastats/life-expectancy.htm'


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--write', action='store_true')
    args = parser.parse_args()
    page = fetch(SOURCE).decode('utf-8')
    sections = re.findall(r'Life expectancy at birth</div>\s*<div class="card-body bg-white">(.*?)</div>', page, flags=re.S)
    if len(sections) != 1:
        raise ValueError('Unexpected CDC life expectancy section')
    section = sections[0]
    source = re.findall(r'href="(https://www\.cdc\.gov/nchs/products/databriefs/db\d+\.htm)"[^>]*>Mortality in the United States,\s*(\d{4}),\s*data tables for figure 1', section)
    male = re.findall(r'<li>Males:\s*([\d.]+) years</li>', section)
    female = re.findall(r'<li>Females:\s*([\d.]+) years</li>', section)
    if len(source) != 1 or len(male) != 1 or len(female) != 1:
        raise ValueError('Unexpected CDC source, year or sex categories')
    url, year = source[0]
    values = [float(male[0]), float(female[0])]
    if any(not 40 <= value <= 110 for value in values):
        raise ValueError('Invalid CDC life expectancy values')
    card = bar_card('出生時預期壽命', f'{year} 年美國最終死亡統計 · 反映當年死亡率，並非對個人壽命的預測。', '歲', list(zip(['男性', '女性'], values)), year, url, 'CDC · 美國死亡統計')
    path = ROOT / 'dist/us-society.html'
    old = path.read_text(encoding='utf-8')
    new = replace_card(old, '出生時預期壽命', card, year, '2024')
    if args.write and new != old:
        path.write_text(new, encoding='utf-8', newline='\n')
    print(f'CDC: year={year}; male={values[0]}; female={values[1]}; changed={new != old}; written={args.write and new != old}')


if __name__ == '__main__':
    main()
