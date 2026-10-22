const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
const fixed = value => value.toLocaleString('en-HK', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const integer = value => value.toLocaleString('en-HK');
const status = value => `<span class="status-pill${value === '臨時數字' ? ' provisional' : value === '修訂數字' ? ' revised' : ''}">${escapeHtml(value)}</span>`;
const sourceLink = source => `<a class="source-link" href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.title)} · ${escapeHtml(source.table)} · ${escapeHtml(source.page)} ↗</a>`;
const observationRows = series => series.flatMap(item => item.observations.map(observation => ({ label: item.label, observation })));

function dataDetails(caption, rows) {
  return `<details class="data-details"><summary>詳細數據與來源（${rows.length} 項觀測）</summary><div class="table-scroll" role="region" aria-label="${escapeHtml(caption)}，可橫向捲動" tabindex="0"><table class="data-table"><caption>${escapeHtml(caption)}</caption><thead><tr><th scope="col">分類</th><th scope="col">期間</th><th scope="col">數值</th><th scope="col">單位</th><th scope="col">狀態</th><th scope="col">範圍及基準</th><th scope="col">官方來源</th></tr></thead><tbody>${rows.map(({ label, observation: row }) => `<tr data-observation="${escapeHtml(label)}-${escapeHtml(row.period.label)}"><th scope="row">${escapeHtml(label)}</th><td>${escapeHtml(row.period.label)}${row.period.kind === 'school-year' ? ' 學年' : ' 年'}</td><td>${row.unit === '所' ? integer(row.value) : fixed(row.value)}</td><td>${escapeHtml(row.unit)}</td><td>${status(row.status)}</td><td class="table-basis">${escapeHtml(row.scope)}<br>${escapeHtml(row.basis)}</td><td>${sourceLink(row.source)}</td></tr>`).join('')}</tbody></table></div></details>`;
}

function renderStudents(series) {
  const maximum = Math.ceil(Math.max(...series.flatMap(item => item.observations.map(row => row.value))) / 100) * 100;
  const firstPeriod = series[0].observations[0].period.label;
  return `<p class="education-chart-note">四個學段共用 0 至 ${maximum} 千人刻度，柱高可直接比較。每個學年獨立顯示。</p><div class="education-student-grid">${series.map(item => {
    const first = item.observations[0];
    const latest = item.observations.at(-1);
    const change = latest.value - first.value;
    return `<article class="education-student-card"><h3>${escapeHtml(item.label)}</h3><p class="education-comparison">${escapeHtml(latest.period.label)} 較 ${escapeHtml(firstPeriod)} <strong>${change < 0 ? '少' : '多'} ${fixed(Math.abs(change))} 千人</strong></p><div class="education-columns"><div class="education-column-grid" aria-hidden="true">${[maximum, maximum * .75, maximum * .5, maximum * .25, 0].map(value => `<span><i>${integer(value)}</i></span>`).join('')}</div>${item.observations.map((row, index) => `<div class="education-column education-year-${index}"><div class="education-column-plot"><div class="education-column-fill" style="height:${row.value / maximum * 100}%"><strong>${fixed(row.value)}</strong></div></div><p class="education-column-period">${escapeHtml(row.period.label)}<small>學年</small></p><div class="education-column-status">${status(row.status)}</div></div>`).join('')}</div></article>`;
  }).join('')}</div><p class="education-chart-note">學生統計包括普通學校以外的部分課程及特殊教育。專上教育一般以該年 12 月底計，其他學段一般以學年開始時計，並非同一天的總人數。</p><div class="source-foot">${sourceLink(series[0].observations[0].source)}</div>${dataDetails('各學段學生人數，單位為千人', observationRows(series))}`;
}

function renderSchools(series) {
  const maximum = Math.ceil(Math.max(...series.map(item => item.observations.at(-1).value)) / 200) * 200;
  const latestPeriod = series[0].observations.at(-1).period.label;
  return `<p class="education-highlight">按註冊學校計算。部分學校同時設有小學和中學，所以各類數目不相加成全港學校總數。</p><div class="education-school-bars">${series.map(item => {
    const latest = item.observations.at(-1);
    return `<div class="education-school-row"><h3>${escapeHtml(item.label)}</h3><div class="education-school-track" aria-hidden="true"><span style="width:${latest.value / maximum * 100}%"></span></div><p><strong>${integer(latest.value)}</strong> 所</p></div>`;
  }).join('')}<div class="education-school-axis" aria-hidden="true"><span>0</span><span>${maximum / 2}</span><span>${maximum} 所</span></div></div><p class="education-chart-note">${escapeHtml(latestPeriod)} 學年，全部為表列數字。特殊學校數目不代表所有有特殊教育需要學生的教育安排。</p><div class="education-school-history">${series.map(item => `<article><h3>${escapeHtml(item.label)}</h3><dl>${item.observations.map(row => `<div><dt>${escapeHtml(row.period.label)} 學年</dt><dd>${integer(row.value)} <small>所</small></dd></div>`).join('')}</dl></article>`).join('')}</div><p class="education-chart-note">幼稚園統計不包括社會福利署特殊幼兒中心。學校數目與上方學生統計的涵蓋範圍不同，不能直接相除。</p><div class="source-foot">${sourceLink(series[0].observations[0].source)}</div>${dataDetails('各類註冊學校數目，單位為所', observationRows(series))}`;
}

function renderAttainment(distribution) {
  const { categories, periods } = distribution;
  const degreeIndex = categories.findIndex(item => item.id === 'degree');
  const first = periods[0];
  const latest = periods.at(-1);
  const change = latest.shares[degreeIndex].value - first.shares[degreeIndex].value;
  const rows = periods.flatMap(item => item.shares.map((observation, index) => ({ label: categories[index].label, observation })));
  return `<div class="education-definition"><h3>「讀過」與「畢業」有分別</h3><p>這裏統計 15 歲及以上陸上非住院人口，即不包括院舍住院人士及水上居民。數字表示最高曾就讀哪一級正式課程，包括未完成的課程。讀過大學但未完成課程，也可能列入學位課程組別；學位課程包括本地及非本地院校的學士及研究生課程。</p><a class="source-link" href="https://www.census2021.gov.hk/tc/terms_and_definitions.html" target="_blank" rel="noreferrer">人口普查教育程度定義 ↗</a><a class="source-link" href="https://www.censtatd.gov.hk/en/web_table.html?id=110-06812" target="_blank" rel="noreferrer">綜合住戶統計調查及人口範圍 ↗</a></div><p class="education-attainment-insight">最高曾就讀學位課程的比例，由 ${first.period.year} 年的 <strong>${fixed(first.shares[degreeIndex].value)}%</strong> 變為 ${latest.period.year} 年的 <strong>${fixed(latest.shares[degreeIndex].value)}%</strong>，${change < 0 ? '減少' : '增加'} <strong>${fixed(Math.abs(change))} 個百分點</strong>。</p><div class="education-attainment-legend">${categories.map((item, index) => `<span><i class="education-category-${index}" aria-hidden="true"></i>${escapeHtml(item.label)}</span>`).join('')}</div><div class="education-attainment-grid">${periods.map(({ period, shares }) => {
    const sum = shares.reduce((total, row) => total + row.value, 0);
    return `<article class="education-attainment-card"><h3>${period.year} 年 <small>15 歲及以上人口</small></h3><div class="education-stacked-bar" aria-hidden="true">${shares.map((row, index) => `<span class="education-category-${index}" style="width:${row.value / sum * 100}%"></span>`).join('')}</div><dl>${shares.map((row, index) => `<div><dt><i class="education-category-${index}" aria-hidden="true"></i>${escapeHtml(categories[index].label)}</dt><dd>${fixed(row.value)}%</dd></div>`).join('')}</dl></article>`;
  }).join('')}</div><p class="education-chart-note">比例保留官方的一位小數。2020 及 2025 年分項相加為 100.1%，屬四捨五入差異；色帶按各年分項總和換算寬度以填滿整條，標示數值保持不變。所有年份均為表列數字。</p><div class="source-foot">${sourceLink(rows[0].observation.source)}</div>${dataDetails('15歲及以上人口最高就讀程度，單位為百分比', rows)}`;
}

function renderEducation(education) {
  document.querySelector('#students-chart').innerHTML = renderStudents(education.students);
  document.querySelector('#schools-chart').innerHTML = renderSchools(education.schools);
  document.querySelector('#attainment-chart').innerHTML = renderAttainment(education.attainment);
  document.querySelector('#education-version').textContent = `資料核對 ${education.checkedOn} · 版本 ${education.version}`;
}

function showLoadError(error) {
  console.error('教育資料載入失敗', error);
  for (const id of ['students-chart', 'schools-chart', 'attainment-chart']) document.querySelector(`#${id}`).innerHTML = '';
  const target = document.querySelector('#education-error');
  target.hidden = false;
  target.className = 'education-error';
  target.innerHTML = '<h2>教育資料暫時未能載入</h2><p>請檢查網絡後<a href="./education.html">重新載入教育概覽</a>。你亦可先閱讀上方說明，或<a href="./index.html">返回人口與經濟首頁</a>。</p>';
  document.querySelector('#education-version').textContent = '資料未能載入';
}

import('./education-data.js?v=20261022-education')
  .then(({ education }) => renderEducation(education))
  .catch(showLoadError);
