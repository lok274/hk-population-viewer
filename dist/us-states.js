import snapshot from './us-states-snapshot.js';

const metrics = {
  realGdp: ['實質 GDP', '百萬鏈式美元（2017 年）', '年度實質產出', 'https://www.bea.gov/data/gdp/gdp-state'],
  manufacturing: ['製造業 GDP', '百萬美元', '年度現價行業增加值', 'https://www.bea.gov/data/gdp/gdp-state'],
  information: ['資訊業 GDP', '百萬美元', '年度現價行業增加值', 'https://www.bea.gov/data/gdp/gdp-state'],
  health: ['醫療及社會援助 GDP', '百萬美元', '年度現價行業增加值', 'https://www.bea.gov/data/gdp/gdp-state'],
  construction: ['建造業 GDP', '百萬美元', '年度現價行業增加值', 'https://www.bea.gov/data/gdp/gdp-state'],
  unemployment: ['失業率', '%', '每月經季節性調整，失業人口佔勞動人口', 'https://www.bls.gov/lau/'],
  employed: ['就業人數', '人', '每月經季節性調整的住戶調查就業人數', 'https://www.bls.gov/lau/'],
  income: ['人均個人收入', '美元', '年度現價平均數，並非中位數', 'https://www.bea.gov/data/income-saving/personal-income-state'],
  consumption: ['人均實質消費', '2017 年美元', '年度平均，已調整地區價格水平及全國物價', 'https://www.bea.gov/data/consumer-spending/state'],
  prices: ['地區價格水平', '指數（全美＝100）', '同一年相對全美價格水平，不是通脹率', 'https://www.bea.gov/data/prices-inflation/regional-price-parities-state-and-metro-area'],
  permits: ['住宅建築許可', '住宅單位', '年度估計數，含未回報估算，未季調，非年率', 'https://www.census.gov/construction/bps/'],
};
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
const fmt = value => value === null ? '缺數' : new Intl.NumberFormat('zh-Hant-HK', {maximumFractionDigits: 4}).format(value);
const status = value => ({published:'官方表列', preliminary:'初步數字', revised:'修訂數字', estimate:'估算（含未回報估算）', shutdown:'政府停擺缺數', '(D)':'保密，未公布', '(L)':'少於公布門檻', '(NA)':'未提供', unavailable:'未提供', '':'未提供'})[value] ?? '未提供';

function chart(key, rows) {
  const [label, unit, explanation, source] = metrics[key];
  const rawSource = key === 'permits' ? 'https://www2.census.gov/econ/bps/State/' : ['unemployment', 'employed'].includes(key) ? `https://data.bls.gov/timeseries/LASST${stateSelect.value}00000000000${key === 'unemployment' ? '03' : '05'}` : ['manufacturing', 'information', 'health', 'construction'].includes(key) ? 'https://apps.bea.gov/regional/zip/SAGDP.zip' : 'https://apps.bea.gov/regional/zip/SASUMMARY.zip';
  const available = rows.filter(row => row[1] !== null);
  const latest = available.at(-1);
  const values = available.map(row => row[1]);
  const min = Math.min(...values), max = Math.max(...values);
  const range = max - min || 1;
  let started = false;
  const path = rows.map(([period, value], i) => {
    if (value === null) { started = false; return ''; }
    const x = 8 + i * 284 / Math.max(rows.length - 1, 1);
    const y = 88 - (value - min) / range * 70;
    const command = started ? 'L' : 'M';
    started = true;
    return command + x.toFixed(1) + ' ' + y.toFixed(1);
  }).join(' ');
  const tableRows = [...rows].reverse().map(([period, value, state]) => `<tr><th scope="row">${esc(period)}</th><td>${fmt(value)}</td><td>${esc(status(state))}</td></tr>`).join('');
  return `<article class="state-card"><h3>${esc(label)}</h3><p class="state-value">${latest ? fmt(latest[1]) : '缺數'} <small>${esc(unit)}</small></p><p>${latest ? esc(latest[0]) + ' · ' + esc(status(latest[2])) : '沒有數據'} · ${esc(explanation)}</p>
    <svg class="state-chart" viewBox="0 0 300 100" aria-hidden="true" focusable="false"><path d="${path}" /></svg>
    <p class="state-range">${esc(rows[0][0])} <span>${esc(rows.at(-1)[0])}</span></p><p>圖表範圍：${fmt(min)} 至 ${fmt(max)} ${esc(unit)}</p>
    <details><summary>查看數據與來源</summary><p><a href="${source}">官方資料及定義 ↗</a> · <a href="${rawSource}">官方原始資料 ↗</a></p>
      <div class="state-table" tabindex="0" role="region" aria-label="${esc(label)}數據"><table><caption>${esc(label)} · ${esc(unit)}</caption><thead><tr><th scope="col">期間</th><th scope="col">數值</th><th scope="col">狀態</th></tr></thead><tbody>${tableRows}</tbody></table></div></details></article>`;
}

const stateSelect = document.querySelector('#state-select');
const metricSelect = document.querySelector('#metric-select');
for (const [fips, [abbr, name]] of Object.entries(snapshot.names).sort((a, b) => a[1][0].localeCompare(b[1][0]))) stateSelect.add(new Option(`${name} (${abbr})`, fips));
for (const [key, [name]] of Object.entries(metrics)) metricSelect.add(new Option(name, key));
stateSelect.value = '06';
document.querySelector('#snapshot-date').textContent = `資料核對日期：${snapshot.checkedAt}；各指標按各自發布期間顯示。`;

function renderState() {
  const fips = stateSelect.value;
  const rows = snapshot.states[fips];
  document.querySelector('#state-title').textContent = snapshot.names[fips][1] + ' · 經濟走勢';
  document.querySelector('#state-charts').innerHTML = Object.keys(metrics).map(key => chart(key, rows[key])).join('');
}

function renderComparison() {
  const key = metricSelect.value;
  const [name, unit, explanation, source] = metrics[key];
  const period = Object.values(snapshot.states).map(state => state[key].at(-1)[0]).sort().at(-1);
  const values = Object.entries(snapshot.states).map(([fips, data]) => {
    const row = data[key].find(item => item[0] === period);
    return {fips, row};
  }).sort((a, b) => (b.row?.[1] ?? -Infinity) - (a.row?.[1] ?? -Infinity));
  document.querySelector('#comparison-title').textContent = `${name} · ${period}`;
  document.querySelector('#comparison-description').textContent = `${explanation}；單位：${unit}。所有地區比較同一期間，未公布的數字留空。`;
  document.querySelector('#comparison-source').href = source;
  document.querySelector('#comparison-body').innerHTML = values.map(({fips, row}) => `<tr><th scope="row">${esc(snapshot.names[fips][1])}</th><td>${row ? fmt(row[1]) : '缺數'}</td><td>${row ? esc(status(row[2])) : '未提供'}</td></tr>`).join('');
}
stateSelect.addEventListener('change', renderState);
metricSelect.addEventListener('change', renderComparison);
renderState();
renderComparison();
