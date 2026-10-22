import { records } from './population-data.js';

const countFormat = new Intl.NumberFormat('zh-HK', { maximumFractionDigits: 0 });
const numberFormat = new Intl.NumberFormat('zh-HK', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const persons = thousands => countFormat.format(Math.round(thousands * 1000));
const share = (value, total) => numberFormat.format(value / total * 100);
const signed = value => `${value > 0 ? '+' : value < 0 ? '−' : ''}${numberFormat.format(Math.abs(value))}`;
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const sourceAnchor = source => `<a class="source-link" href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.title)} ↗</a>`;
const status = slice => `<span class="status-pill ${/暫定|臨時/.test(slice.status) ? 'provisional' : /修訂/.test(slice.status) ? 'revised' : ''}">${escapeHtml(slice.status)}</span>`;
const ageGroups = [['under15', '未滿 15 歲', '#009b76'], ['age15to34', '15–34 歲', '#199fd1'], ['age35to64', '35–64 歲', '#396ce5'], ['age65plus', '65 歲或以上', '#d48b08']];
const sexes = [['female', '女性', '#e947a0'], ['male', '男性', '#2296b7']];
const residentTypes = [['usual', '常住居民'], ['mobile', '流動居民']];
const periodLabel = period => period.startMonth ? `${period.year} 年 ${period.startMonth}–${period.endMonth} 月` : period.quarter ? `${period.year} 年第 ${period.quarter} 季` : period.month ? `${period.year} 年 ${period.month} 月` : `${period.year} 年`;
const formattedValue = row => row.unit === '%' || row.unit.startsWith('指數') ? numberFormat.format(row.value) : countFormat.format(row.value);
const svg = (title, width, height, content) => `<svg class="chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHtml(title)}">${content}</svg>`;
const details = (headers, rows) => `<details class="data-details"><summary>詳細數據與來源</summary><div class="table-scroll" role="region" aria-label="詳細數據表格" tabindex="0"><table class="data-table"><thead><tr>${headers.map(label => `<th scope="col">${escapeHtml(label)}</th>`).join('')}</tr></thead><tbody>${rows.map(cells => `<tr>${cells.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div></details>`;
const observationDetails = rows => details(['期間／項目', '數值', '單位', '資料狀態', '比較基準', '官方來源'], rows.map(([label, row]) => [escapeHtml(label), formattedValue(row), escapeHtml(row.unit), escapeHtml(row.status), `<span class="table-basis">${escapeHtml(row.basis)}</span>`, sourceAnchor(row.source)]));
const indicatorMeta = row => `<p class="indicator-basis">${escapeHtml(row.basis)}</p><div class="indicator-meta">${status(row)}${sourceAnchor(row.source)}</div>`;
const indicatorCard = (title, row, display = formattedValue(row)) => `<article class="economy-card ${row.value < 0 ? 'negative' : ''}"><h4>${escapeHtml(title)}</h4><p class="economy-period">${escapeHtml(periodLabel(row.period))}</p><p class="economy-card-value">${display}<small>${escapeHtml(row.unit)}</small></p>${indicatorMeta(row)}</article>`;

function renderLatest() {
  const latest = records.at(-1);
  const previous = records.at(-2);
  const change = latest.total.thousands - previous.total.thousands;
  const changeText = `較 ${previous.year} 年增加 ${persons(change)} 人（+${share(change, previous.total.thousands)}%）`;
  document.querySelector('#latest-total').innerHTML = `<div class="hero-stat-top"><p class="hero-stat-label">${latest.year} 年年中總人口</p><span class="hero-status">${escapeHtml(latest.total.status)}</span></div><p class="hero-number">${persons(latest.total.thousands)}<span class="hero-unit">人</span></p><p class="stat-change">↗ ${changeText}</p>`;
  document.querySelector('#latest-change').textContent = '● 保留各項資料狀態及政府統計處來源';
}

function renderTotals() {
  const minimum = 7460;
  const maximum = 7540;
  const firstYear = records[0].year;
  const lastYear = records.at(-1).year;
  const x = year => 85 + (year - firstYear) / (lastYear - firstYear) * 830;
  const y = value => 235 - (value - minimum) / (maximum - minimum) * 185;
  const ticks = [7460, 7480, 7500, 7520, 7540].map(value => `<line class="gridline" x1="85" y1="${y(value)}" x2="915" y2="${y(value)}"/><text class="axis-label" x="69" y="${y(value) + 4}" text-anchor="end">${persons(value)}</text>`).join('');
  const gaps = records.slice(1).filter((row, index) => row.year - records[index].year > 1).map(row => {
    const index = records.indexOf(row);
    const left = x(records[index - 1].year) + 35;
    const right = x(row.year) - 35;
    return `<rect x="${left}" y="38" width="${right - left}" height="198" rx="10" fill="#eaf0e9"/><text x="${(left + right) / 2}" y="123" text-anchor="middle">${records[index - 1].year + 1}–${row.year - 1} 年</text><text x="${(left + right) / 2}" y="146" text-anchor="middle">來源未列載 · 不連線</text>`;
  }).join('');
  const lines = records.slice(1).map((row, index) => row.year === records[index].year + 1 ? `<line data-total-segment="${records[index].year}-${row.year}" x1="${x(records[index].year)}" y1="${y(records[index].total.thousands)}" x2="${x(row.year)}" y2="${y(row.total.thousands)}" stroke="#00a980" stroke-width="4" stroke-linecap="round"/>` : '').join('');
  const points = records.map((row, index) => `<line class="gridline" x1="${x(row.year)}" x2="${x(row.year)}" y1="${y(row.total.thousands) + 8}" y2="242"/><circle cx="${x(row.year)}" cy="${y(row.total.thousands)}" r="${index === records.length - 1 ? 7 : 6}" fill="#fff" stroke="${row.total.status === '暫定估算' ? '#009b76' : index === 2 ? '#e8a421' : '#00a980'}" stroke-width="3"/><text class="value-label ${index === records.length - 1 ? 'latest-label' : ''}" x="${x(row.year)}" y="${y(row.total.thousands) - 19}" text-anchor="middle">${persons(row.total.thousands)}</text><text x="${x(row.year)}" y="266" text-anchor="middle">${row.year} 年${row.total.status === '暫定估算' ? ' 暫定' : ''}</text>`).join('');
  const cards = records.map((row, index) => {
    const previous = records[index - 1];
    const change = previous ? row.total.thousands - previous.total.thousands : 0;
    return `<article class="total-card ${index === records.length - 1 ? 'latest' : ''}"><div class="card-year"><span>${row.year} <small>年中</small></span>${status(row.total)}</div><p class="card-value">${persons(row.total.thousands)}<small>人</small></p><p class="card-change ${change > 0 ? 'positive' : change < 0 ? 'negative' : ''}">${previous ? `較 ${previous.year} 年 ${change > 0 ? '+' : '−'}${persons(Math.abs(change))} 人<br>（${signed(change / previous.total.thousands * 100)}%）` : '此圖最早列載年份<br>作為比較起點'}</p><div class="card-foot">${index === 1 ? '與 2020 年相隔 4 年' : index > 1 ? '與上一年比較' : '年報列載數字'}</div></article>`;
  }).join('');
  document.querySelector('#total-chart').innerHTML = `<div class="total-plot chart-scroll">${svg('年中總人口，縱軸由7,460,000至7,540,000人，未由零開始。2020年獨立顯示，2021至2023年缺少資料，只有2024至2026年連線。', 1000, 291, gaps + ticks + lines + points)}</div><p class="chart-explainer">縱軸由 7,460,000 人開始，用來看清小幅變化。2021–2023 年沒有列載數據，不推算中間走勢。手機可左右捲動圖表。</p><div class="total-cards">${cards}</div>${details(['年份', '年中人口（人）', '資料狀態', '統計項目', '官方來源'], records.map(row => [`${row.year} 年`, persons(row.total.thousands), escapeHtml(row.total.status), '全香港年中總人口', sourceAnchor(row.total.source)]))}`;
}

function renderAge() {
  const available = records.filter(row => row.age);
  const first = available[0];
  const latest = available.at(-1);
  const initialShare = first.age.age65plus / first.total.thousands * 100;
  const latestShare = latest.age.age65plus / latest.total.thousands * 100;
  const cards = ageGroups.map(([field, label, color]) => `<article class="age-card" style="--chart-color:${color}"><div class="age-card-head"><h3>${label}</h3><span class="age-share">${share(latest.age[field], latest.total.thousands)}%<small>${latest.year} 年</small></span></div><div class="age-visual" aria-hidden="true">${available.map(row => `<span class="age-column"><span class="column-fill" style="--height:${row.age[field] / row.total.thousands * 100 / 50 * 100}%"></span></span>`).join('')}</div><div class="age-labels" aria-hidden="true">${available.map(row => `<span>${row.year}</span>`).join('')}</div><div class="mini-data">${available.map(row => `<div><span>${row.year}</span><b>${persons(row.age[field])}</b><em>${share(row.age[field], row.total.thousands)}%</em></div>`).join('')}</div></article>`).join('');
  const rows = available.flatMap(row => ageGroups.map(([field, label]) => [`${row.year} 年 · ${label}`, persons(row.age[field]), `${share(row.age[field], row.total.thousands)}%`, escapeHtml(row.age.status), `人數 ÷ ${row.year} 年總人口`, sourceAnchor(row.age.source)]));
  document.querySelector('#age-chart').innerHTML = `<aside class="age-insight"><span class="insight-symbol" aria-hidden="true">△</span><div><h3>65 歲或以上佔比：${numberFormat.format(initialShare)}% → ${numberFormat.format(latestShare)}%</h3><p>${first.year} 至 ${latest.year} 年，人數由 ${persons(first.age.age65plus)} 人增至 ${persons(latest.age.age65plus)} 人，增加 ${persons(latest.age.age65plus - first.age.age65plus)} 人。</p></div><span class="insight-change">+${numberFormat.format(latestShare - initialShare)} 個百分點</span></aside><div class="chart-panel"><div class="age-scale"><span>每組直條均以 0–50% 為刻度，方便比較大小。</span><div class="chart-legend"><span><i class="legend-dot" style="--legend-color:#cbd7df"></i>2020</span><span>淺色 2024</span><span>深色 2025</span></div></div><div class="age-grid">${cards}</div><div class="source-foot"><span>下方數字為人數及佔該年總人口比例 · 年報列載</span>${sourceAnchor(latest.age.source)}</div>${details(['年份／年齡組別', '人數（人）', '佔比', '資料狀態', '計算基準', '官方來源'], rows)}</div>`;
}

function renderSex(year) {
  const available = records.filter(row => row.sex);
  const row = available.find(record => record.year === Number(year)) || available.at(-1);
  const femaleShare = row.sex.female / row.total.thousands * 100;
  const ratioRows = available.map(record => `<div class="ratio-row"><span>${record.year} 年中<small>男 ${persons(record.sex.male)} · 女 ${persons(record.sex.female)}</small></span><strong>${countFormat.format(Math.round(record.sex.male / record.sex.female * 1000))}<small> 名男性</small></strong></div>`).join('');
  const metrics = sexes.map(([field, label]) => `<div class="sex-metric ${field}"><div class="metric-label"><span>${label}</span><strong>${share(row.sex[field], row.total.thousands)}%</strong></div><p>${persons(row.sex[field])} <small>人</small></p></div>`).join('');
  const rows = available.flatMap(record => sexes.map(([field, label]) => [`${record.year} 年 · ${label}`, persons(record.sex[field]), `${share(record.sex[field], record.total.thousands)}%`, escapeHtml(record.sex.status), `人數 ÷ ${record.year} 年總人口`, sourceAnchor(record.sex.source)]));
  document.querySelector('#sex-chart').innerHTML = `<div class="sex-layout"><div class="chart-panel"><div class="donut-layout"><div class="donut" role="img" aria-label="${row.year} 年女性佔 ${numberFormat.format(femaleShare)}%，男性佔 ${share(row.sex.male, row.total.thousands)}%"><svg viewBox="0 0 220 220" aria-hidden="true"><circle cx="110" cy="110" r="86" fill="none" stroke="#eaf3f5" stroke-width="29"/><circle cx="110" cy="110" r="86" fill="none" stroke="#e947a0" stroke-width="29" pathLength="100" stroke-dasharray="${femaleShare} ${100 - femaleShare}"/></svg><div class="donut-center"><span>${row.year} 年女性佔比</span><strong>${numberFormat.format(femaleShare)}%</strong><small>女性人口</small></div></div><div class="sex-metrics"><p class="sex-total">${row.year} 年年中總人口<br><strong>${persons(row.total.thousands)} 人</strong> · ${status(row.sex)}</p>${metrics}</div></div><div class="source-foot"><span>單位 · 人及佔總人口比例</span>${sourceAnchor(row.sex.source)}</div>${details(['年份／性別', '人數（人）', '佔比', '資料狀態', '計算基準', '官方來源'], rows)}</div><div class="chart-panel"><div class="panel-heading"><h3>每千名女性對應男性數目</h3></div><p class="ratio-explainer">將女性人數固定為 1,000 人，比較男性人數。</p><div class="ratio-list">${ratioRows}</div><p class="ratio-explainer">計算方式為男性人數 ÷ 女性人數 × 1,000，再四捨五入至整數。每年均使用同年性別分項。</p></div></div>`;
}

function renderResidents() {
  const available = records.filter(row => row.residents);
  const latest = available.at(-1);
  const usualShare = latest.residents.usual / latest.total.thousands * 100;
  const cards = [...available].reverse().map((row, index) => `<article class="resident-card ${index === 0 ? 'latest' : ''}"><div class="resident-heading"><h3>${row.year} 年中居民分布</h3>${status(row.residents)}<small>總計 ${persons(row.total.thousands)} 人</small></div><div class="resident-metrics">${residentTypes.map(([field, label]) => `<div class="resident-metric ${field}"><h4>${label}<span>${share(row.residents[field], row.total.thousands)}%</span></h4><p>${persons(row.residents[field])} <small>人</small></p><small>佔同年總人口比例</small></div>`).join('')}</div>${sourceAnchor(row.residents.source)}</article>`).join('');
  const rows = available.flatMap(row => residentTypes.map(([field, label]) => [`${row.year} 年 · ${label}`, persons(row.residents[field]), `${share(row.residents[field], row.total.thousands)}%`, escapeHtml(row.residents.status), `人數 ÷ ${row.year} 年總人口`, sourceAnchor(row.residents.source)]));
  document.querySelector('#residents-chart').innerHTML = `<div class="residents-layout"><div class="chart-panel gauge-card"><div class="panel-heading"><h3>${latest.year} 年居民結構</h3>${status(latest.residents)}</div><div class="gauge" role="img" aria-label="${latest.year} 年常住居民 ${numberFormat.format(usualShare)}%，流動居民 ${share(latest.residents.mobile, latest.total.thousands)}%"><svg viewBox="0 0 340 195" aria-hidden="true"><path d="M 35 165 A 135 135 0 0 1 305 165" fill="none" stroke="#efa71d" stroke-width="30" stroke-linecap="round"/><path d="M 35 165 A 135 135 0 0 1 305 165" fill="none" stroke="#009b76" stroke-width="30" stroke-linecap="round" pathLength="100" stroke-dasharray="${usualShare} 100"/></svg><div class="gauge-center"><strong>${numberFormat.format(usualShare)}%</strong><span>常住居民佔總人口</span></div></div><div class="gauge-key"><span>0%</span><b>常住 ${numberFormat.format(usualShare)}%</b><b class="mobile">流動 ${share(latest.residents.mobile, latest.total.thousands)}%</b><span>100%</span></div></div><div class="resident-cards">${cards}</div></div><div class="chart-panel" style="margin-top:16px;padding-top:0;padding-bottom:16px">${details(['年份／居民類別', '人數（人）', '佔比', '資料狀態', '計算基準', '官方來源'], rows)}</div>`;
}

function renderEconomy(economy) {
  const maximum = Math.max(1, Math.ceil(Math.max(...economy.annualRealGrowth.map(row => Math.abs(row.percent)))));
  document.querySelector('#economy-annual').innerHTML = `<div class="gdp-chart">${economy.annualRealGrowth.map(row => `<div class="gdp-row"><strong>${row.year}</strong><div class="diverging-bar" aria-hidden="true"><span class="${row.percent < 0 ? 'negative' : ''}" style="width:${Math.abs(row.percent) / maximum * 50}%"></span></div><span class="${row.percent < 0 ? 'negative' : ''}">${signed(row.percent)}%</span></div>`).join('')}</div><div class="gdp-axis" aria-hidden="true"><span>−${maximum}%</span><span>0%</span><span>+${maximum}%</span></div><p class="series-note">左右刻度相同，向左為負增長。</p>${details(['年份', '實質增長率', '單位', '資料狀態', '比較基準', '官方來源'], economy.annualRealGrowth.map(row => [`${row.year} 年`, signed(row.percent), '%', escapeHtml(row.status), '與上年全年比較', sourceAnchor(row.source)]))}`;
  const annual = economy.annualSnapshot;
  document.querySelector('#economy-levels').innerHTML = [['currentPriceGdp', '本地生產總值'], ['perCapitaGdp', '人均本地生產總值']].map(([key, label]) => indicatorCard(label, { ...annual[key], period: { year: annual.year }, basis: '全年現價金額' })).join('');
  const quarter = economy.latestQuarter;
  document.querySelector('#economy-quarter').innerHTML = [['yearOnYear', '按年', '與上年同季比較'], ['seasonallyAdjustedQuarterOnQuarter', '經季節性調整按季', '與上一季比較']].map(([key, label, basis]) => indicatorCard(label, { ...quarter[key], value: quarter[key].percent, period: { year: quarter.year, quarter: quarter.quarter }, basis }, `${signed(quarter[key].percent)}`)).join('');
}

function columnsChart(rows, maximum, ticks, color, valueLabel, periodTitle) {
  const width = 560;
  const height = 265;
  const left = 48;
  const right = 532;
  const top = 35;
  const bottom = 215;
  const x = index => left + (index + 0.5) * (right - left) / rows.length;
  const y = value => bottom - value / maximum * (bottom - top);
  const grid = ticks.map(value => `<line class="gridline" x1="${left}" y1="${y(value)}" x2="${right}" y2="${y(value)}"/><text class="axis-label" x="${left - 9}" y="${y(value) + 4}" text-anchor="end">${countFormat.format(value)}</text>`).join('');
  const bars = rows.map((row, index) => `<rect x="${x(index) - 20}" y="${y(row.value)}" width="40" height="${bottom - y(row.value)}" rx="5" fill="${index === rows.length - 1 ? color : '#c8dbe2'}"/><text class="value-label" x="${x(index)}" y="${y(row.value) - 11}" text-anchor="middle">${escapeHtml(valueLabel(row))}</text><text x="${x(index)}" y="241" text-anchor="middle">${row.period.year}</text>`).join('');
  return `<div class="chart-scroll column-chart">${svg(periodTitle, width, height, grid + bars)}</div>`;
}

function renderInflation(data) {
  document.querySelector('#inflation-annual').innerHTML = columnsChart(data.annual, 3, [0, 1, 2, 3], '#3276e9', row => `${numberFormat.format(row.value)}%`, '2020至2025年全年平均綜合消費物價指數按年變動，縱軸0至3%。') + observationDetails(data.annual.map(row => [periodLabel(row.period), row]));
  document.querySelector('#inflation-latest').innerHTML = indicatorCard('綜合消費物價指數按年變動', data.latestYoY, signed(data.latestYoY.value)) + indicatorCard('綜合消費物價指數水平', data.latestIndex);
}

function renderUnemployment(data) {
  const width = 1000;
  const bottom = 200;
  const x = index => 80 + index * 166;
  const y = value => bottom - value / 5 * 150;
  const grid = [0, 1, 2, 3, 4, 5].map(value => `<line class="gridline" x1="80" x2="910" y1="${y(value)}" y2="${y(value)}"/><text class="axis-label" x="61" y="${y(value) + 4}" text-anchor="end">${value}%</text>`).join('');
  const line = `<polyline points="${data.rolling.map((row, index) => `${x(index)},${y(row.value)}`).join(' ')}" fill="none" stroke="#009b76" stroke-width="3"/>`;
  const points = data.rolling.map((row, index) => `<circle cx="${x(index)}" cy="${y(row.value)}" r="5" fill="#fff" stroke="#009b76" stroke-width="3"/><text class="value-label" x="${x(index)}" y="${y(row.value) - 18}" text-anchor="middle">${numberFormat.format(row.value)}%</text><text x="${x(index)}" y="229" text-anchor="middle">${row.period.startMonth}–${row.period.endMonth} 月${row.status === '臨時數字' ? ' *' : ''}</text>`).join('');
  document.querySelector('#unemployment-chart').innerHTML = `<div class="panel-heading"><h3>2026 年三個月期間</h3><span>${numberFormat.format(data.rolling.at(-1).value)}% · ${status(data.rolling.at(-1))}</span></div><div class="chart-scroll unemployment-chart">${svg('2026年經季節性調整失業率，連續三個月期間，縱軸0至5%。', width, 250, grid + line + points)}</div><p class="series-note">* 6–8 月為臨時數字。相鄰期間重疊，連線只表示各三個月期間的變化。</p>${observationDetails(data.rolling.map(row => [periodLabel(row.period), row]))}`;
}

function renderEarnings(data) {
  document.querySelector('#earnings-chart').innerHTML = columnsChart(data.total, 25000, [0, 10000, 20000, 25000], '#3276e9', row => countFormat.format(row.value), '2021至2026年第一季每月就業收入中位數，單位港元每月，縱軸0至25,000。') + observationDetails(data.total.map(row => [periodLabel(row.period), row]));
  document.querySelector('#earnings-latest').innerHTML = [indicatorCard('合計', data.total.at(-1)), indicatorCard('女性', data.female), indicatorCard('男性', data.male)].join('');
}

function renderTrade(data) {
  const maximum = 800000;
  const bottom = 230;
  const y = value => bottom - value / maximum * 180;
  const grid = [0, 200000, 400000, 600000, 800000].map(value => `<line class="gridline" x1="80" x2="964" y1="${y(value)}" y2="${y(value)}"/><text class="axis-label" x="66" y="${y(value) + 4}" text-anchor="end">${countFormat.format(value)}</text>`).join('');
  const bars = data.monthly.map((pair, index) => {
    const x = 136 + index * 109;
    return `${[['imports', '#009b76', -23], ['exports', '#efb54c', 4]].map(([key, color, offset]) => `<rect x="${x + offset}" y="${y(pair[key].value)}" width="20" height="${bottom - y(pair[key].value)}" rx="4" fill="${color}"/>`).join('')}<text x="${x}" y="256" text-anchor="middle">${pair.imports.period.month} 月</text>`;
  }).join('');
  document.querySelector('#trade-chart').innerHTML = `<div class="panel-heading"><h3>2026 年每月貨值</h3><div class="chart-legend"><span><i class="legend-dot" style="--legend-color:#009b76"></i>進口</span><span><i class="legend-dot" style="--legend-color:#efb54c"></i>整體出口</span></div></div><div class="chart-scroll trade-chart">${svg('2026年1至8月進口及整體出口貨值，單位百萬港元，兩系列共用0至800,000的刻度。', 1000, 278, grid + bars)}</div><p class="series-note">單位 · 百萬港元。展開下方表格可查看每月確實貨值。</p>${observationDetails(data.monthly.flatMap(pair => [['進口', pair.imports], ['整體出口', pair.exports]].map(([label, row]) => [`${periodLabel(row.period)} · ${label}`, row])))}`;
  document.querySelector('#trade-latest').innerHTML = [indicatorCard('進口貨值按年變動', data.importYoY, signed(data.importYoY.value)), indicatorCard('整體出口貨值按年變動', data.exportYoY, signed(data.exportYoY.value)), indicatorCard('商品貿易差額（官方表列）', data.balance, `逆差 ${countFormat.format(Math.abs(data.balance.value))}`)].join('');
}

function showIndicatorError(key, error) {
  console.error(`${key} indicator failed`, error);
  const section = document.querySelector(`#${key}`);
  section.querySelectorAll('.loading').forEach(node => {
    node.outerHTML = '<p class="loading">此項數據暫時無法顯示，請使用本節的政府統計處原表連結。</p>';
  });
}

const indicatorRenderers = [['inflation', renderInflation], ['unemployment', renderUnemployment], ['earnings', renderEarnings], ['trade', renderTrade]];
renderLatest();
renderTotals();
renderAge();
const sexYear = document.querySelector('#sex-year');
sexYear.innerHTML = records.filter(row => row.sex).map(row => `<option value="${row.year}">${row.year}</option>`).join('');
sexYear.value = String(records.filter(row => row.sex).at(-1).year);
sexYear.addEventListener('change', () => renderSex(sexYear.value));
renderSex(sexYear.value);
renderResidents();
import('./economic-data.js?v=20261022-simple').then(({ economy }) => renderEconomy(economy)).catch(error => {
  console.error('GDP failed', error);
  document.querySelectorAll('#economy .loading').forEach(node => {
    node.outerHTML = '<p class="loading">本地生產總值數據暫時無法顯示，請使用本節的政府統計處原表連結。</p>';
  });
});
import('./indicator-data.js?v=20261022-simple').then(({ getIndicator }) => {
  for (const [key, render] of indicatorRenderers) {
    try { render(getIndicator(key)); } catch (error) { showIndicatorError(key, error); }
  }
}).catch(error => {
  for (const [key] of indicatorRenderers) showIndicatorError(key, error);
});


