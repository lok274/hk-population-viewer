import { records } from './population-data.js';
import { economy } from './economic-data.js';

const countFormat = new Intl.NumberFormat('zh-HK', { maximumFractionDigits: 0 });
const numberFormat = new Intl.NumberFormat('zh-HK', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const ageGroups = [
  ['under15', '未滿 15 歲', '#d6e07f'],
  ['age15to34', '15–34 歲', '#a6d1c4'],
  ['age35to64', '35–64 歲', '#8099b5'],
  ['age65plus', '65 歲或以上', '#dc987a'],
];
const sexes = [['male', '男性', '#2d7971'], ['female', '女性', '#dc987a']];
const residentTypes = [['usual', '常住居民', '#2d7971'], ['mobile', '流動居民', '#d6b477']];
const persons = thousands => countFormat.format(Math.round(thousands * 1000));
const share = (value, total) => numberFormat.format(value / total * 100);
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const sourceAnchor = source => `<a class="source-link" href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">來源：${escapeHtml(source.title)} ↗</a>`;
const status = (slice, extra = '') => `<span class="status-line"><span class="status-pill ${extra}">${escapeHtml(slice.status)}</span></span>`;

function renderLatest() {
  const latest = records.at(-1);
  const previous = records.at(-2);
  const change = latest.total.thousands - previous.total.thousands;
  document.querySelector('#latest-total').innerHTML = `
    <p class="hero-stat-label">${latest.year} 年年中總人口</p>
    <p class="hero-number">${persons(latest.total.thousands)}<span class="hero-unit"> 人</span></p>
    <span class="hero-status">${escapeHtml(latest.total.status)}</span>`;
  document.querySelector('#latest-change').textContent = `較 ${previous.year} 年增加 ${persons(change)} 人（${share(change, previous.total.thousands)}%）`;
}

function renderTotals() {
  const maximum = 8000;
  const bars = records.map((row, index) => `
    <div class="total-row ${index === records.length - 1 ? 'is-latest' : ''}">
      <div class="total-year">${row.year}<small>年中</small></div>
      <div class="total-bar" role="img" aria-label="${row.year} 年人口 ${persons(row.total.thousands)} 人，橫軸由零至八百萬人">
        <div class="total-fill" style="width:${Math.min(row.total.thousands / maximum * 100, 100)}%"></div>
      </div>
      <div class="total-value">${persons(row.total.thousands)} 人${status(row.total, row.total.status === '暫定估算' ? 'provisional' : '')}</div>
      <div class="total-source">${sourceAnchor(row.total.source)}</div>
    </div>`).join('');
  document.querySelector('#total-chart').innerHTML = `<div class="total-chart">${bars}</div><div class="chart-axis" aria-hidden="true"><span>0</span><span>400 萬</span><span>800 萬</span></div>`;
}

function renderComposition(target, key, groups, totalKey = 'total') {
  const available = records.filter(row => row[key]);
  const cards = available.map(row => {
    const slice = row[key];
    const bar = groups.map(([field, , color]) => `<span class="stacked-segment" style="width:${slice[field] / row[totalKey].thousands * 100}%;background:${color}" aria-hidden="true"></span>`).join('');
    const metrics = groups.map(([field, label, color]) => `
      <div class="metric">
        <span class="metric-name"><span class="metric-swatch" style="background:${color}" aria-hidden="true"></span>${label}</span>
        <span class="metric-value">${persons(slice[field])} <small>人 · ${share(slice[field], row[totalKey].thousands)}%</small></span>
      </div>`).join('');
    return `<article class="composition-card">
      <div class="composition-heading"><strong class="composition-year">${row.year} 年中</strong>${status(slice)}</div>
      <div class="stacked-bar" role="img" aria-label="${row.year} 年${key === 'age' ? '年齡' : '性別'}組成比例">${bar}</div>
      <div class="metric-grid" style="--columns:${groups.length}">${metrics}</div>
      ${sourceAnchor(slice.source)}
    </article>`;
  }).join('');
  document.querySelector(target).innerHTML = `<div class="composition-list">${cards}</div>`;
}

function renderResidents() {
  const available = records.filter(row => row.residents);
  const legend = residentTypes.map(([, label, color]) => `<span><i class="metric-swatch" style="background:${color}" aria-hidden="true"></i>${label}</span>`).join('');
  const cards = available.map(row => {
    const slice = row.residents;
    const parts = residentTypes.map(([field, , color]) => `<span class="stacked-segment" style="width:${slice[field] / row.total.thousands * 100}%;background:${color}" aria-hidden="true"></span>`).join('');
    const metrics = residentTypes.map(([field, label, color]) => `
      <div class="metric">
        <span class="metric-name"><span class="metric-swatch" style="background:${color}" aria-hidden="true"></span>${label}</span>
        <span class="metric-value">${persons(slice[field])} <small>人 · ${share(slice[field], row.total.thousands)}%</small></span>
      </div>`).join('');
    return `<article class="composition-card">
      <div class="composition-heading"><strong class="composition-year">${row.year} 年中</strong>${status(slice, slice.status === '暫定估算' ? 'provisional' : '')}</div>
      <div class="stacked-bar" role="img" aria-label="${row.year} 年常住居民與流動居民佔總人口比例">${parts}</div>
      <div class="metric-grid" style="--columns:2">${metrics}</div>
      ${sourceAnchor(slice.source)}
    </article>`;
  }).join('');
  document.querySelector('#residents-chart').innerHTML = `<div class="residents-key">${legend}</div><div class="composition-list">${cards}</div>`;
}

function renderEconomy() {
  const maximum = Math.max(1, Math.ceil(Math.max(...economy.annualRealGrowth.map(row => Math.abs(row.percent)))));
  const signed = percent => `${percent > 0 ? '+' : percent < 0 ? '−' : ''}${numberFormat.format(Math.abs(percent))}%`;
  const direction = percent => percent < 0 ? '下跌' : percent > 0 ? '增長' : '持平';
  const annualRows = economy.annualRealGrowth.map(row => `
    <div class="economy-row">
      <strong class="economy-year">${row.year} 年</strong>
      <div class="economy-bar" role="img" aria-label="${row.year} 年實質本地生產總值${direction(row.percent)} ${signed(row.percent)}，橫軸由負 ${maximum}% 至正 ${maximum}%">
        <span class="economy-fill ${row.percent < 0 ? 'negative' : 'positive'}" style="width:${Math.abs(row.percent) / maximum * 50}%"></span>
      </div>
      <span class="economy-value">${direction(row.percent)} ${signed(row.percent)}</span>
      <div class="economy-row-meta">${status(row)}${sourceAnchor(row.source)}</div>
    </div>`).join('');
  document.querySelector('#economy-annual').innerHTML = `
    <div class="economy-chart">${annualRows}</div>
    <div class="economy-axis" aria-hidden="true"><span>−${maximum}%</span><span>0%</span><span>+${maximum}%</span></div>`;

  const annual = economy.annualSnapshot;
  document.querySelector('#economy-levels').innerHTML = [
    ['currentPriceGdp', '本地生產總值（現價）'],
    ['perCapitaGdp', '人均本地生產總值（現價）'],
  ].map(([key, label]) => {
    const slice = annual[key];
    return `<article class="economy-card">
      <h4>${label}</h4><p class="economy-period">${annual.year} 年</p>
      <p class="economy-card-value">${countFormat.format(slice.value)} <small>${escapeHtml(slice.unit)}</small></p>
      ${status(slice)}${sourceAnchor(slice.source)}
    </article>`;
  }).join('');

  const quarter = economy.latestQuarter;
  document.querySelector('#economy-quarter').innerHTML = [
    ['yearOnYear', '按年增長', '與上年同季比較'],
    ['seasonallyAdjustedQuarterOnQuarter', '經季節性調整按季增長', '與上一季比較'],
  ].map(([key, label, basis]) => {
    const slice = quarter[key];
    return `<article class="economy-card">
      <h4>${label}</h4><p class="economy-period">${quarter.year} 年第 ${quarter.quarter} 季 · ${basis}</p>
      <p class="economy-card-value">${direction(slice.percent)} ${signed(slice.percent)}</p>
      ${status(slice)}${sourceAnchor(slice.source)}
    </article>`;
  }).join('');
}

renderLatest();
renderTotals();
renderComposition('#age-chart', 'age', ageGroups);
renderComposition('#sex-chart', 'sex', sexes);
renderResidents();
renderEconomy();

