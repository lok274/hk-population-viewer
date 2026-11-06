const statusLabels = {
  published: '官方表列',
  estimate: '估算',
  advance: '初值',
  preliminary: '初步數字',
  revised: '修訂數字',
  effective: '政策生效',
  asOf: '當日結餘',
  shutdown: '缺數',
};
const percent = new Intl.NumberFormat('zh-Hant-HK', {minimumFractionDigits: 1, maximumFractionDigits: 1});
const standard = new Intl.NumberFormat('zh-Hant-HK', {maximumFractionDigits: 4});
const dollar = new Intl.NumberFormat('zh-Hant-HK', {minimumFractionDigits: 2, maximumFractionDigits: 2});
const axis = new Intl.NumberFormat('zh-Hant-HK', {maximumFractionDigits: 2});

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
}

function formatted(value, unit, derived = false) {
  if (value === null) return '—';
  if (unit === '%') return (derived ? percent : standard).format(value) + '%';
  if (unit === '美元' || unit === '美元／小時') return dollar.format(value) + ' ' + unit;
  return standard.format(value) + ' ' + unit;
}

function periodLabel(period, frequency) {
  if (frequency === 'fiscal') return '財年 ' + period;
  if (frequency === 'quarterly') return period.slice(0, 4) + ' 年第 ' + period.at(-1) + ' 季';
  if (frequency === 'monthly') return period.slice(0, 4) + ' 年 ' + Number(period.slice(-2)) + ' 月';
  if (frequency === 'annual') return period + ' 年';
  return period;
}

function visible(series) {
  return series.observations.slice(series.context);
}

function levels(series, unit = series.unit, divisor = 1) {
  return {
    label: series.labelZh,
    unit,
    frequency: series.frequency,
    points: visible(series).map(row => ({...row, value: row.value === null ? null : row.value / divisor})),
  };
}

function changes(series, months) {
  const original = new Map(series.observations.map(row => [row.period, row]));
  const yearOnYear = months === 12;
  return {
    label: series.labelZh + (yearOnYear ? '按年變動' : '按月變化'),
    unit: yearOnYear ? '%' : series.unit,
    frequency: series.frequency,
    derived: true,
    points: visible(series).map(row => {
      const year = Number(row.period.slice(0, 4));
      const month = Number(row.period.slice(5)) - 1;
      const previousPeriod = new Date(Date.UTC(year, month - months, 1)).toISOString().slice(0, 7);
      const previous = original.get(previousPeriod)?.value ?? null;
      const value = row.value === null || previous === null
        ? null
        : yearOnYear ? (row.value / previous - 1) * 100 : row.value - previous;
      return {...row, value, previous, previousPeriod, missingReason: row.missingReason ?? (value === null ? '缺少 ' + previousPeriod + ' 的比較數字。' : null)};
    }),
  };
}

function plotTime(period) {
  if (period.includes('-Q')) return Date.UTC(Number(period.slice(0, 4)), (Number(period.at(-1)) - 1) * 3);
  return Date.parse(period);
}

function lastValue(plot) {
  const row = plot.points.at(-1);
  return escapeHtml(periodLabel(row.period, plot.frequency)) + ' · ' + escapeHtml(formatted(row.value, plot.unit, plot.derived))
    + (row.value === null ? ' · 缺數' : ' · ' + statusLabels[row.status]);
}

function lineChart(title, plots) {
  const points = plots.flatMap(plot => plot.points);
  const times = points.map(point => plotTime(point.period));
  const start = Math.min(...times);
  const end = Math.max(...times);
  const values = points.map(point => point.value).filter(value => value !== null);
  if (!values.length) return '<p class="us-notice">這段期間沒有可用數值。</p>';
  const low = Math.min(...values);
  const high = Math.max(...values);
  const padding = (high - low) * 0.08 || Math.max(Math.abs(low) * 0.05, 0.1);
  const y = value => 154 - (value - low + padding) / (high - low + 2 * padding) * 138;
  const x = period => 62 + (plotTime(period) - start) / (end - start || 1) * 398;
  const seriesMarkup = plots.map((plot, index) => {
    let penDown = false;
    const segments = [];
    const isolated = [];
    for (const [pointIndex, point] of plot.points.entries()) {
      if (point.value === null) {
        penDown = false;
        continue;
      }
      const px = x(point.period).toFixed(2);
      const py = y(point.value).toFixed(2);
      if (!penDown && plot.points[pointIndex + 1]?.value == null) {
        isolated.push('<circle cx="' + px + '" cy="' + py + '" r="2.5"/>');
      }
      segments.push((penDown ? 'L' : 'M') + px + ' ' + py);
      penDown = true;
    }
    return '<g class="us-series-' + index + '"><path d="' + segments.join(' ') + '"/>' + isolated.join('') + '</g>';
  }).join('');
  const ticks = Array.from({length: 4}, (_, index) => {
    const value = low - padding + index / 3 * (high - low + padding * 2);
    const py = y(value).toFixed(2);
    return '<line x1="62" x2="460" y1="' + py + '" y2="' + py + '"/><text x="54" y="' + py + '" text-anchor="end" dominant-baseline="middle">' + axis.format(value) + '</text>';
  }).join('');
  const labels = [start, (start + end) / 2, end].map((time, index) => {
    const date = new Date(time);
    const label = index === 1 ? date.getUTCFullYear() : plots[0].frequency === 'monthly'
      ? date.toISOString().slice(0, 7)
      : date.getUTCFullYear();
    return '<text x="' + [62, 261, 460][index] + '" y="178" text-anchor="' + ['start', 'middle', 'end'][index] + '">' + label + '</text>';
  }).join('');
  return '<figure class="us-chart"><figcaption><h3>' + escapeHtml(title) + '</h3><p>單位 · ' + escapeHtml(plots[0].unit) + '</p></figcaption>'
    + '<svg class="us-plot" viewBox="0 0 480 188" aria-hidden="true" focusable="false"><g class="us-axis">' + ticks + labels + '</g>' + seriesMarkup + '</svg>'
    + '<ul class="us-legend">' + plots.map((plot, index) => '<li><span class="us-key us-series-' + index + '" aria-hidden="true"></span><div><strong>'
      + escapeHtml(plot.label) + '</strong><span>' + lastValue(plot) + '</span></div></li>').join('') + '</ul></figure>';
}

function signedBars(title, plot) {
  const values = plot.points.map(point => point.value).filter(value => value !== null);
  const low = Math.min(0, ...values);
  const high = Math.max(0, ...values);
  const position = value => (value - low) / (high - low || 1) * 100;
  const baseline = position(0);
  const rows = [...plot.points].reverse().map(row => {
    const end = row.value === null ? baseline : position(row.value);
    const offset = Math.min(baseline, end).toFixed(3);
    const width = Math.abs(end - baseline).toFixed(3);
    const value = row.value === null ? '缺數' : (row.value > 0 ? '+' : '') + axis.format(row.value) + (plot.unit === '%' ? '%' : '');
    return '<li><span>' + escapeHtml(periodLabel(row.period, plot.frequency)) + '</span><span class="us-bar-track" aria-hidden="true"><i class="'
      + (row.value < 0 ? 'us-negative' : '') + '" style="--offset:' + offset + '%;--extent:' + width + '%"></i></span><strong>' + value + '</strong></li>';
  }).join('');
  return '<figure class="us-chart"><figcaption><h3>' + escapeHtml(title) + '</h3><p>單位 · ' + escapeHtml(plot.unit)
    + ' · 由最近一期開始，可向下捲動</p></figcaption><div class="us-bars" tabindex="0" role="region" aria-label="' + escapeHtml(title)
    + '" style="--baseline:' + baseline.toFixed(3) + '%"><ol>' + rows + '</ol></div></figure>';
}

function targetSteps(lowSeries, highSeries, cutoffAt) {
  const start = (Number(cutoffAt.slice(0, 4)) - 5) + cutoffAt.slice(4);
  const startTime = plotTime(start);
  const endTime = plotTime(cutoffAt);
  const low = lowSeries.observations;
  const high = highSeries.observations;
  const top = Math.ceil(Math.max(...high.map(row => row.value)) / 2) * 2;
  const y = value => 154 - value / top * 138;
  const x = period => 62 + (Math.max(startTime, plotTime(period)) - startTime) / (endTime - startTime) * 398;
  const corners = rows => {
    const positions = [[x(rows[0].period), y(rows[0].value)]];
    for (const [index, row] of rows.slice(1).entries()) {
      positions.push([x(row.period), y(rows[index].value)], [x(row.period), y(row.value)]);
    }
    return [...positions, [460, y(rows.at(-1).value)]];
  };
  const path = positions => positions.map(point => point.map(value => value.toFixed(2)).join(',')).join(' ');
  const lows = corners(low);
  const highs = corners(high);
  const ticks = [0, top / 3, top * 2 / 3, top].map(value => {
    const py = y(value).toFixed(2);
    return '<line x1="62" x2="460" y1="' + py + '" y2="' + py + '"/><text x="54" y="' + py + '" text-anchor="end" dominant-baseline="middle">' + axis.format(value) + '</text>';
  }).join('');
  const value = dollar.format(low.at(-1).value) + '–' + dollar.format(high.at(-1).value) + '%';
  return '<figure class="us-chart"><figcaption><h3>聯邦基金目標區間</h3><p>單位 · % · 按生效日期</p></figcaption>'
    + '<svg class="us-plot" viewBox="0 0 480 188" aria-hidden="true" focusable="false"><g class="us-axis">' + ticks
    + '<text x="62" y="178">' + start + '</text><text x="460" y="178" text-anchor="end">' + cutoffAt + '</text></g>'
    + '<polygon class="us-band" points="' + path([...lows, ...highs.slice().reverse()]) + '"/>'
    + '<polyline class="us-series-0" points="' + path(lows) + '"/><polyline class="us-series-0" points="' + path(highs) + '"/></svg>'
    + '<p class="us-latest">最新設定 <strong>' + value + '</strong> · ' + low.at(-1).period + ' 生效</p></figure>';
}

function sourceTable(series, comparison) {
  const rows = visible(series).map((row, index) => {
    const changed = comparison?.points[index];
    const status = statusLabels[row.status] + (row.asOf ? ' · ' + row.asOf : '');
    const note = changed?.missingReason ?? row.missingReason;
    const time = row.releaseDate ?? '—';
    return '<tr><th scope="row">' + escapeHtml(periodLabel(row.period, series.frequency)) + '</th><td>' + escapeHtml(formatted(row.value, series.unit)) + '</td>'
      + (comparison ? '<td>' + escapeHtml(formatted(changed.previous, series.unit)) + '</td><td>' + escapeHtml(formatted(changed.value, comparison.unit, true)) + '</td>' : '')
      + '<td>' + escapeHtml(status) + (note ? '<br><small>' + escapeHtml(note) + '</small>' : '') + '</td><td>' + time + '</td></tr>';
  }).reverse().join('');
  const source = series.source;
  const extraSources = [...new Set(series.observations.map(row => row.sourceUrl).filter(url => url !== source.dataUrl))];
  return '<section class="us-table-section"><h3 id="us-table-' + series.id + '">' + escapeHtml(series.labelZh) + '</h3>'
    + '<p>' + [series.geography, series.unit, series.seasonalAdjustment, series.priceBasis, series.annualization].map(escapeHtml).join(' · ') + '</p>'
    + '<p class="us-sources"><a href="' + escapeHtml(source.url) + '">' + escapeHtml(source.agency) + ' 官方資料 ↗</a>'
    + '<a href="' + escapeHtml(source.dataUrl) + '">' + escapeHtml(source.code) + ' 原表 ↗</a>'
    + extraSources.map(url => '<a href="' + escapeHtml(url) + '">' + (series.id === 'retailSales' ? 'MARTS 初值原表' : '缺數說明') + ' ↗</a>').join('')
    + '</p><p>來源核對於 ' + source.retrievedAt + '。未核實個別發布日期的欄位以「—」顯示。</p>'
    + '<div class="us-table-scroll" tabindex="0" role="region" aria-labelledby="us-table-' + series.id + '"><table aria-labelledby="us-table-' + series.id + '">'
    + '<thead><tr><th scope="col">統計期間</th><th scope="col">原始數值</th>'
    + (comparison ? '<th scope="col">' + (comparison.unit === '%' ? '上年同月' : '上月') + '原值</th><th scope="col">' + (comparison.unit === '%' ? '按年變動' : '按月變化') + '</th>' : '')
    + '<th scope="col">資料狀態</th><th scope="col">發布日期</th></tr></thead><tbody>' + rows + '</tbody></table></div></section>';
}

function topicContent(charts, tables) {
  return '<div class="us-chart-grid">' + charts.join('') + '</div><details class="us-details"><summary>查看完整數據、定義與來源</summary>'
    + tables.map(entry => sourceTable(...(Array.isArray(entry) ? entry : [entry]))).join('') + '</details>';
}

function headline(id, value, period) {
  document.getElementById('headline-' + id).textContent = value;
  document.getElementById('period-' + id).textContent = period;
}

function renderOutput({gdpNominal, gdpAnnual, gdpQuarter}) {
  const latest = gdpQuarter.observations.at(-1);
  headline('gdp', formatted(latest.value, '%'), periodLabel(latest.period, gdpQuarter.frequency) + ' · 按季年率化 · ' + statusLabels[latest.status]);
  return topicContent([
    signedBars('季度實質 GDP · 按季年率化', levels(gdpQuarter)),
    signedBars('年度實質 GDP · 按年增長', levels(gdpAnnual)),
    lineChart('年度現價 GDP', [levels(gdpNominal, '萬億美元', 1_000_000)]),
  ], [gdpQuarter, gdpAnnual, gdpNominal]);
}

function renderPrices({cpi, coreCpi, pcePrices, corePcePrices}) {
  const cpiChange = changes(cpi, 12);
  const coreCpiChange = changes(coreCpi, 12);
  const pceChange = changes(pcePrices, 12);
  const corePceChange = changes(corePcePrices, 12);
  const latest = cpiChange.points.at(-1);
  headline('cpi', formatted(latest.value, '%', true), periodLabel(latest.period, cpi.frequency) + ' · 按年');
  return topicContent([
    lineChart('CPI-U · 按年變動', [cpiChange, coreCpiChange]),
    lineChart('PCE 物價 · 按年變動', [pceChange, corePceChange]),
  ], [[cpi, cpiChange], [coreCpi, coreCpiChange], [pcePrices, pceChange], [corePcePrices, corePceChange]]);
}

function renderLabour({unemployment, participation, payroll, earnings}) {
  const payrollChange = changes(payroll, 1);
  const wageChange = changes(earnings, 12);
  const latest = unemployment.observations.at(-1);
  headline('jobs', formatted(latest.value, '%'), periodLabel(latest.period, unemployment.frequency) + ' · 住戶調查');
  return topicContent([
    lineChart('失業率 U-3', [levels(unemployment)]),
    lineChart('勞動人口參與率', [levels(participation)]),
    signedBars('非農就業職位 · 按月變化', payrollChange),
    lineChart('私營非農平均時薪', [levels(earnings)]),
    lineChart('平均時薪 · 按年變動', [wageChange]),
  ], [unemployment, participation, [payroll, payrollChange], [earnings, wageChange]]);
}

function renderHouseholds({consumption, disposableIncome, saving}) {
  return topicContent([
    lineChart('實質消費與可支配收入 · 季調年率', [levels(consumption, '萬億鏈式美元（2017 年）', 1_000_000), levels(disposableIncome, '萬億鏈式美元（2017 年）', 1_000_000)]),
    lineChart('個人儲蓄率', [levels(saving)]),
  ], [consumption, disposableIncome, saving]);
}

function renderRetail({retailSales}) {
  return topicContent([lineChart('零售及餐飲服務銷售', [levels(retailSales, '十億美元', 1_000)])], [retailSales]);
}

function renderHousing({starts, permits}) {
  return topicContent([lineChart('私人住宅動工與建築許可 · 季調年率', [levels(starts), levels(permits)])], [starts, permits]);
}

function renderTrade({exports, imports, tradeBalance}) {
  return topicContent([
    lineChart('商品及服務進出口', [levels(exports, '十億美元', 1_000), levels(imports, '十億美元', 1_000)]),
    signedBars('官方貿易差額', levels(tradeBalance, '十億美元', 1_000)),
  ], [exports, imports, tradeBalance]);
}

function renderRates({targetLow, targetHigh, yield2, yield10}, cutoffAt) {
  const low = targetLow.observations.at(-1);
  const high = targetHigh.observations.at(-1);
  headline('policy', dollar.format(low.value) + '–' + dollar.format(high.value) + '%', low.period + ' 生效');
  return topicContent([
    targetSteps(targetLow, targetHigh, cutoffAt),
    lineChart('兩年期與十年期國債收益率 · 月平均', [levels(yield2), levels(yield10)]),
  ], [targetLow, targetHigh, yield2, yield10]);
}

function renderProduction({industry, utilization, productivity}) {
  return topicContent([
    lineChart('工業生產指數', [levels(industry)]),
    lineChart('工業產能使用率', [levels(utilization)]),
    signedBars('非農商業勞動生產力 · 按季年率化', levels(productivity)),
  ], [industry, utilization, productivity]);
}

function renderFiscal({receipts, outlays, fiscalBalance, publicDebt, totalDebt, publicDebtDaily, totalDebtDaily}) {
  const daily = [totalDebtDaily, publicDebtDaily].map(series => {
    const plot = levels(series, '萬億美元', 1_000_000_000_000);
    return '<li><strong>' + escapeHtml(plot.label) + '</strong><span>' + lastValue(plot) + '</span></li>';
  }).join('');
  return topicContent([
    lineChart('聯邦政府財年收入與支出', [levels(receipts, '萬億美元', 1_000_000_000_000), levels(outlays, '萬億美元', 1_000_000_000_000)]),
    signedBars('財政年度盈餘或赤字', levels(fiscalBalance, '萬億美元', 1_000_000_000_000)),
    lineChart('財政年度末債務', [levels(totalDebt, '萬億美元', 1_000_000_000_000), levels(publicDebt, '萬億美元', 1_000_000_000_000)]),
    '<div class="us-chart"><h3>最新每日債務</h3><ul class="us-legend">' + daily + '</ul></div>',
  ], [receipts, outlays, fiscalBalance, totalDebt, publicDebt, totalDebtDaily, publicDebtDaily]);
}

const renderers = {
  output: renderOutput, prices: renderPrices, labour: renderLabour, households: renderHouseholds,
  retail: renderRetail, housing: renderHousing, trade: renderTrade, rates: renderRates,
  production: renderProduction, fiscal: renderFiscal,
};

const unavailable = '<p class="us-notice">這個主題的快照暫時無法顯示。你仍可查看下方的官方來源。</p>';

async function showDashboard() {
  let data;
  let meta;
  try {
    data = await import('./us-economy-data.js');
    meta = data.getSnapshotMeta();
  } catch (error) {
    console.error('Unable to load the U.S. economy snapshot', error);
  }
  if (meta) {
    document.getElementById('snapshot-version').textContent = '固定快照 · 資料核對於 ' + meta.checkedAt + ' · 各指標按實際發布期間顯示';
  }
  for (const [id, render] of Object.entries(renderers)) {
    const target = document.querySelector('#' + id + ' [data-topic-content]');
    if (!meta) {
      target.innerHTML = unavailable;
      continue;
    }
    try {
      target.innerHTML = render(data.getTopic(id).series, meta.cutoffAt);
    } catch (error) {
      console.error('Unable to display U.S. economy topic ' + id, error);
      target.innerHTML = unavailable;
    }
  }
}

showDashboard();
