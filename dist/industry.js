const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
const number = value => Number(value).toLocaleString('en-HK', { maximumFractionDigits: 10 });
const readable = value => ({
  'HK$ million': '百萬港元', Number: '個', 'published': '官方已公布',
  'published-limited-coverage': '已公布，涵蓋範圍有限', 'not-applicable': '不適用',
  'not-compiled': '未編製', suppressed: '未公布（精確度或保密）',
  reported: '報表列載', calculated: '按列載數字計算', 'not-disclosed': '未獨立披露',
  'management-explanation': '管理層解釋', interpretation: '資料解讀',
  'calculated-change': '由列載數字計算',
  'international-organisation-central-bank': '國際組織及央行合作',
  government: '政府公共行政', 'public-healthcare': '公營醫療',
  'nonprofit-agriculture-conservation': '非牟利農業示範及保育',
  'statutory-nonprofit-recreation': '法定非牟利康樂機構',
  'public-university': '公帑資助大學',
  'mixed-transitional-quarrying-segment': '混合及轉型石礦場分部',
  HKD: '港元', USD: '美元', RMB: '人民幣', CNY: '人民幣', SDR: '特別提款權'
})[value] ?? value;
const sourceUrl = (source, page) => `${source.url}${page && source.url.toLowerCase().includes('.pdf') ? `#page=${page}` : ''}`;
const link = (source, label, page) => `<a href="${escapeHtml(sourceUrl(source, page))}" target="_blank" rel="noreferrer">${escapeHtml(label)} ↗</a>`;
const refs = references => references.map(ref => link(ref.source, `${ref.source.title} · ${ref.printedPage ? `印刷頁 ${ref.printedPage}` : ref.pdfPage ? `PDF 頁 ${ref.pdfPage}` : ref.table}`, ref.pdfPage)).join('、');
const moneyUnit = metric => {
  const unit = metric.unit;
  if (!['HKD', 'USD', 'RMB', 'CNY', 'SDR'].includes(unit)) return unit === '(%)' ? '%' : unit;
  const scale = metric.scale === 1e6 ? '百萬' : metric.scale === 1000 ? '千' : '';
  return `${scale}${{ HKD: '港元', USD: '美元', RMB: '人民幣', CNY: '人民幣', SDR: '特別提款權' }[unit]}`;
};
const valueText = (value, unit) => value === null ? '未有數字' : `${number(value)} ${unit}`;
const officialUnit = metric => metric.unit !== 'Number' ? readable(metric.unit) : metric.key === 'personsEngaged' ? '人' : metric.key === 'companies' ? '家公司' : '個';
const articleTarget = document.querySelector('#industry-article');
const directoryTarget = document.querySelector('#industry-list');
let catalogue;
let loadIndustry;
let serial = 0;
let focusAfterSelection = false;
let currentId = null;

function officialSource(metric, group) {
  const source = metric.source;
  return `${link(source, `原表 ${metric.table} · 「${group.labelEn}」行 · 「${metric.labelEn}」欄`)}${metric.definitionUrl ? ` · ${link({ url: metric.definitionUrl }, `定義 PDF 頁 ${group.definitionPdfPages?.join('、') ?? '見原文'}`, group.definitionPdfPages?.[0])}` : ''}`;
}

function officialTable(group) {
  return `<div class="industry-table-wrap" role="region" aria-label="${escapeHtml(group.label)}官方數據，可橫向捲動" tabindex="0"><table><caption>${escapeHtml(group.label)} · 2024 年 · 香港官方行業統計</caption><thead><tr><th scope="col">指標</th><th scope="col">原表數字</th><th scope="col">狀態</th></tr></thead><tbody>${group.metrics.map(metric => `<tr><th scope="row">${escapeHtml(metric.label)}</th><td>${metric.value === null ? '未有數字' : escapeHtml(valueText(metric.value, officialUnit(metric)))}</td><td>${escapeHtml(readable(metric.status))}${metric.sdValue ? ` · ${escapeHtml(metric.sdValue)}` : ''}</td></tr>`).join('')}</tbody></table></div>`;
}

function officialDetails(group) {
  return `<details class="industry-details"><summary>核對全部 ${group.metrics.length} 項官方數據與來源</summary><div class="industry-table-wrap" role="region" aria-label="${escapeHtml(group.label)}來源明細，可橫向捲動" tabindex="0"><table><caption>${escapeHtml(group.label)} · 原表明細</caption><thead><tr><th scope="col">指標</th><th scope="col">原值及單位</th><th scope="col">期間、範圍與基準</th><th scope="col">狀態、註記與來源</th></tr></thead><tbody>${group.metrics.map(metric => `<tr><th scope="row">${escapeHtml(metric.label)}</th><td>${metric.value === null ? '缺失' : escapeHtml(valueText(metric.rawFigure, officialUnit(metric)))}</td><td>2024 年 · ${escapeHtml(group.scope)}<small>${escapeHtml(metric.basis)}</small></td><td>${escapeHtml(readable(metric.status))}${metric.sdValue ? ` · ${escapeHtml(metric.sdValue)}` : ''}${metric.missingReason ? `<small>${escapeHtml(metric.missingReason)}</small>` : ''}<small>${officialSource(metric, group)}</small></td></tr>`).join('')}</tbody></table></div></details>`;
}

function officialBars(group) {
  if (!group.costBreakdownCompleteForSurplus) return group.costLimitation ? `<p class="industry-note">${escapeHtml(group.costLimitation)}</p>` : '';
  const parts = group.costComponents.map(key => group.metrics.find(metric => metric.key === key)).filter(metric => metric?.value != null && metric.value >= 0);
  if (parts.length < 2) return '';
  const maximum = Math.max(...parts.map(metric => metric.value));
  return `<h4>同一組別的已公布成本項目</h4><p class="industry-muted">各條以最大一項為滿格；項目互不相加成另一個總數。單位：百萬港元，2024 年。</p><div class="industry-bars">${parts.map(metric => `<div class="industry-bar"><span>${escapeHtml(metric.label)}</span><span class="industry-bar-track" aria-hidden="true"><i style="width:${maximum ? metric.value / maximum * 100 : 0}%"></i></span><strong>${number(metric.value)} 百萬港元</strong></div>`).join('')}</div>`;
}

function renderOfficial(section) {
  if (!section.groups.length) return `<p class="industry-warning">${escapeHtml(section.coverage.reason)}</p>`;
  const byId = new Map(section.groups.map(group => [group.id, group]));
  const children = parent => section.groups.filter(group => group.parentGroupingCode === parent).sort((a, b) => Number(a.label.startsWith('其他')) - Number(b.label.startsWith('其他')) || a.id.localeCompare(b.id));
  const visit = (group, parent) => [{ group, parent }, ...children(group.id).flatMap(child => visit(child, group))];
  const ordered = section.groups.filter(group => !byId.has(group.parentGroupingCode)).sort((a, b) => a.id.localeCompare(b.id)).flatMap(group => visit(group, null));
  const selected = ordered[0].group;
  const special = {
    F: '建造業的「工程總值」連同其他業務收益不是一般商品銷售額；分包費也另有官方定義。',
    K: '銀行收益包含利息收入扣除利息支出後的淨額等項目；保險業採承保及輔助服務的特定口徑。兩者均不編製本表的盈餘總額，非銀行融資業的增加價值亦排除投資及控股公司。',
    L: '地產發展在這張表以發展計劃毛利列示，並非物業銷售總額；服務及租項收入屬另一項。計算盈餘總額還涉及未在所選成本欄獨立列出的發展融資利息。'
  }[section.code];
  return `<p class="industry-note"><strong>涵蓋範圍：</strong>${escapeHtml(section.coverage.reason)}</p>${special ? `<p class="industry-warning">${escapeHtml(special)}</p>` : ''}<div class="industry-select"><label for="official-group">查看官方組別</label><select id="official-group">${ordered.map(({ group, parent }) => `<option value="${escapeHtml(group.id)}"${group.id === selected.id ? ' selected' : ''}>${parent ? `　↳ ${escapeHtml(parent.label)} › ` : ''}${escapeHtml(group.label)}</option>`).join('')}</select></div><div id="official-group-panel">${renderGroup(selected)}</div><p class="industry-muted">選單包括本主類所有已公布組別。縮排代表分項；父項與分項重疊，不可相加。公司是調查單位，不是店舖或公司註冊總數。行業增加價值不是 GDP。</p>`;
}

function renderGroup(group) {
  const highlights = ['totalReceipts', 'grossConstructionWork', 'serviceAndRentalIncome', 'grossSurplus', 'companies', 'personsEngaged'].map(key => group.metrics.find(metric => metric.key === key && metric.value !== null)).filter(Boolean).slice(0, 3);
  return `<h4>${escapeHtml(group.label)}</h4><p class="industry-muted">${escapeHtml(group.scope)}</p>${highlights.length ? `<div class="industry-stat-cards">${highlights.map(metric => `<div><span>${escapeHtml(metric.label)} · 2024 年</span><strong>${escapeHtml(valueText(metric.value, officialUnit(metric)))}</strong><small>${escapeHtml(readable(metric.status))} · 香港 · ${escapeHtml(metric.table)}</small></div>`).join('')}</div>` : ''}${officialBars(group)}${officialTable(group)}${officialDetails(group)}`;
}

function renderBusiness(item) {
  const labels = [['provides', '提供甚麼'], ['customers', '誰使用／受惠'], ['revenueModel', '誰付款、錢從哪裏來'], ['costs', '主要成本'], ['influences', '哪些因素影響營運']];
  return `<dl class="industry-facts">${labels.map(([key, title]) => `<div><dt>${title}</dt><dd>${escapeHtml(item.business[key].text)}<small class="industry-source">${refs(item.business[key].sources)}</small></dd></div>`).join('')}</dl><h4>實際流程</h4><ol class="industry-analysis">${item.business.process.map(step => `<li>${escapeHtml(step.text)}<small class="industry-source"> ${refs(step.sources)}</small></li>`).join('')}</ol>`;
}

function renderCaseTable(item) {
  return `<div class="industry-table-wrap" role="region" aria-label="${escapeHtml(item.entity)}三年財務資料，可橫向捲動" tabindex="0"><table><caption>${escapeHtml(item.entity)} · 原報告三個完整財政年度</caption><thead><tr><th scope="col">指標</th>${item.fiscalYears.map(year => `<th scope="col">${escapeHtml(year.label)}<small>${escapeHtml(year.start)} 至 ${escapeHtml(year.end)}</small></th>`).join('')}</tr></thead><tbody>${item.metrics.map(metric => `<tr><th scope="row">${escapeHtml(metric.label)}<small>${escapeHtml(moneyUnit(metric))}</small></th>${metric.observations.map(observation => `<td>${observation.value === null ? '未披露' : escapeHtml(number(observation.value))}<small>${escapeHtml(readable(observation.status))}</small></td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

function caseDetails(item) {
  return `<details class="industry-details"><summary>核對各年原值、計算方式、頁碼與來源</summary><div class="industry-table-wrap" role="region" aria-label="${escapeHtml(item.entity)}詳細來源，可橫向捲動" tabindex="0"><table><caption>${escapeHtml(item.entity)} · 財務數據來源</caption><thead><tr><th scope="col">原報告項目</th><th scope="col">年度與原值</th><th scope="col">範圍與狀態</th><th scope="col">精確來源</th></tr></thead><tbody>${item.metrics.flatMap(metric => metric.observations.map(observation => `<tr><th scope="row">${escapeHtml(metric.label)}<small>${escapeHtml(metric.originalLabel)} · ${escapeHtml(metric.basis)}</small></th><td>${escapeHtml(observation.year)} · ${observation.value === null ? '缺失' : escapeHtml(valueText(observation.value, moneyUnit(metric)))}${observation.formula ? `<small>計算：${escapeHtml(observation.formula)}</small>` : ''}</td><td>${escapeHtml(observation.scope)}<small>${escapeHtml(readable(observation.status))} · ${escapeHtml(observation.restatement ?? '')}</small>${observation.reason ? `<small>${escapeHtml(observation.reason)}</small>` : ''}${observation.auditCaveat ? `<small>${escapeHtml(observation.auditCaveat)}</small>` : ''}</td><td>${refs([observation.citation])}</td></tr>`)).join('')}</tbody></table></div></details>`;
}

function caseBars(item) {
  const metric = item.metrics.find(row => ['revenue', 'income', 'operating-income'].includes(row.key));
  if (!metric || metric.observations.some(observation => observation.value === null || observation.value < 0 || observation.scope !== metric.observations[0].scope)) return '';
  const maximum = Math.max(...metric.observations.map(observation => observation.value));
  return `<h4>${escapeHtml(metric.label)}的三年變化</h4><p class="industry-muted">只比較這家機構同一指標。每條由零開始，最大值為滿格；原值及範圍見下表。單位：${escapeHtml(moneyUnit(metric))}。</p><div class="industry-bars">${metric.observations.map((observation, i) => `<div class="industry-bar"><span>${escapeHtml(item.fiscalYears[i].label)}</span><span class="industry-bar-track" aria-hidden="true"><i style="width:${maximum ? observation.value / maximum * 100 : 0}%"></i></span><strong>${number(observation.value)}</strong></div>`).join('')}</div><p class="industry-muted">${metric.changes.map(result => result.kind === 'computed' ? `${escapeHtml(result.from)} 至 ${escapeHtml(result.to)}：${result.difference < 0 ? '減少' : '增加'} ${number(Math.abs(result.difference))} ${escapeHtml(moneyUnit(metric))}${result.percent === null ? '；前期值為零或負數，不計百分比' : `（${result.percent < 0 ? '−' : '+'}${number(Math.abs(Math.round(result.percent * 10) / 10))}%）`}` : `${escapeHtml(result.reason)}`).join('；')}</p>`;
}

function renderCase(item) {
  const audit = item.auditStatus ?? (item.audited ? '財務報表經審計；部分營運指標或管理層摘錄另有基準，詳見逐項狀態。' : '不是經審計的完整財務報表；請逐項閱讀資料狀態。');
  const latest = item.fiscalYears.at(-1);
  return `<section class="industry-case" aria-labelledby="case-${escapeHtml(item.id)}"><p class="article-kicker">真實機構個案 · ${escapeHtml(readable(item.modelType))}</p><h4 id="case-${escapeHtml(item.id)}">${escapeHtml(item.entity)}</h4><p>${escapeHtml(item.whyThisCase)}</p>${item.coverageStatus ? `<p class="industry-warning"><strong>分類界線：</strong>${escapeHtml(item.coverageStatus)}${item.classificationBasis ? ` ${escapeHtml(item.classificationBasis)}` : ''}</p>` : ''}<div class="industry-case-meta"><p><strong>地域與帳目：</strong>${escapeHtml(item.geography)}；${escapeHtml(item.consolidationScope)}</p><p><strong>最新完整年度：</strong>${escapeHtml(latest.label)}（${escapeHtml(latest.start)} 至 ${escapeHtml(latest.end)}）· 貨幣 ${escapeHtml(readable(item.currency))} · 資料核對 ${escapeHtml(item.latestReportCheck?.date ?? item.retrievedAt ?? '見年報來源')}${item.latestReportCheck?.url ? ` · ${link({ url: item.latestReportCheck.url }, '最新年報目錄')}` : ''}</p></div><div class="${item.auditStatus ? 'industry-warning' : 'industry-note'}"><strong>審計與資料基準：</strong>${escapeHtml(audit)}${item.auditSources?.length ? `<small class="industry-source"> ${refs(item.auditSources.map(ref => ({ ...ref, source: item.sources.find(source => source.id === ref.sourceId) })))}</small>` : ''}</div>${renderBusiness(item)}${caseBars(item)}${renderCaseTable(item)}<p class="industry-muted">財政年度的「收入」和「盈餘／利潤」不同；營運現金流是實際現金進出，並非當年會計利潤。現金是年末存量；借款是需償還的融資，不等於所有負債。個別指標的名稱、範圍和狀態以來源明細為準。</p>${caseDetails(item)}<h4>兩段年度變化與來源解釋</h4><ol class="industry-analysis">${item.analysis.map(explanation => `<li><strong>${escapeHtml(explanation.fromYear ?? explanation.from)} → ${escapeHtml(explanation.toYear ?? explanation.to)}</strong> · ${escapeHtml(readable(explanation.kind ?? '資料解讀'))}<br>${escapeHtml(explanation.text)}<small class="industry-source"> ${refs(explanation.sources)}</small></li>`).join('')}</ol><p><strong>個案限制</strong></p><ul>${item.limits.map(limit => `<li>${escapeHtml(limit)}</li>`).join('')}</ul></section>`;
}

function renderGap(gap) {
  const labels = [['provides', '提供甚麼'], ['customers', '誰使用／受惠'], ['revenueModel', '誰付款、錢從哪裏來'], ['costs', '主要成本'], ['influences', '哪些因素影響營運']];
  const citation = link(gap.source, `${gap.source.title} · 印刷頁 ${gap.source.printedPage}／PDF 頁 ${gap.source.pdfPage}`, gap.source.pdfPage);
  return `<div class="industry-case"><h4>${escapeHtml(gap.title)}</h4><p class="industry-warning">${escapeHtml(gap.explanation)}</p><dl class="industry-facts">${labels.map(([key, title]) => `<div><dt>${title}</dt><dd>${escapeHtml(gap.business[key])}</dd></div>`).join('')}</dl><h4>實際流程</h4><ol class="industry-analysis">${gap.business.process.map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ol><p class="industry-source">分類來源：${citation} · 核對 ${escapeHtml(gap.checkedOn)}</p></div>`;
}

function renderContext(context) {
  const rows = context.metrics.flatMap(metric => metric.observations.map(observation => ({ metric, observation })));
  return `<section class="article-section"><h3>其他官方背景資料</h3><p class="industry-note"><strong>${escapeHtml(context.title)}：</strong>${escapeHtml(context.coverage)}</p><p>${escapeHtml(context.context.text)}</p><p class="industry-source">說明來源：${refs(context.context.sources)}</p>${rows.length ? `<div class="industry-table-wrap" role="region" aria-label="${escapeHtml(context.title)}補充官方資料，可橫向捲動" tabindex="0"><table><caption>${escapeHtml(context.title)} · 與企業財務分開閱讀</caption><thead><tr><th scope="col">指標</th><th scope="col">期間與原值</th><th scope="col">範圍、狀態與來源</th></tr></thead><tbody>${rows.map(({ metric, observation }) => `<tr><th scope="row">${escapeHtml(metric.label)}</th><td>${escapeHtml(observation.period)} · ${observation.value === null ? '未有數字' : escapeHtml(valueText(observation.value, moneyUnit(observation)))}</td><td>${escapeHtml(observation.scope)}<small>${escapeHtml(observation.basis)} · ${escapeHtml(readable(observation.status))}</small><small>${refs([observation.citation])}</small></td></tr>`).join('')}</tbody></table></div>` : ''}<p class="industry-muted">${escapeHtml(context.gap)} · 核對 ${escapeHtml(context.checkedOn)}</p></section>`;
}

function renderArticle(section) {
  const manual = section.classification;
  const manualLink = link(manual.source, `香港標準行業分類手冊 · 印刷頁 ${manual.printedPage}／PDF 頁 ${manual.pdfPage}`, manual.pdfPage);
  return `<p class="article-kicker">香港標準行業分類 · ${section.code} 類</p><h2 id="article-title" tabindex="-1">${escapeHtml(section.title)}</h2><p class="article-lead">${escapeHtml(manual.intro)}</p><p class="industry-source">分類說明：${manualLink}</p><section class="article-section"><h3>這類活動怎樣運作？</h3><div class="industry-models">${manual.models.map(model => `<div><h4>${escapeHtml(model.title)}</h4><p>${escapeHtml(model.text)}</p></div>`).join('')}</div><p class="industry-muted">以上是分類手冊支持的活動描述。客戶、收費和成本因機構而異；下方個案說明其中一家機構的實際做法。${escapeHtml(manual.readFor)}</p></section><section class="article-section"><h3>香港官方行業統計</h3><p>以下來自政府統計處 2024 年經濟活動按年統計調查。只讀這個組別的定義，不把不同表格或父子組別自行湊成「整個行業」。</p>${renderOfficial(section)}</section>${section.context ? renderContext(section.context) : ''}<section class="article-section"><h3>機構個案與三年帳目</h3>${section.cases.map(renderCase).join('')}${section.gap ? renderGap(section.gap) : ''}</section>`;
}

function selectedId() {
  if (['#main', '#top'].includes(location.hash)) return currentId;
  const id = new URLSearchParams(location.hash.slice(1)).get('industry');
  return catalogue.sections.some(section => section.id === id) ? id : null;
}

async function selectFromHash() {
  const id = selectedId();
  currentId = id;
  const thisRequest = ++serial;
  for (const anchor of directoryTarget.querySelectorAll('a')) {
    if (anchor.dataset.industry === id) anchor.setAttribute('aria-current', 'page');
    else anchor.removeAttribute('aria-current');
  }
  if (!id) {
    articleTarget.innerHTML = '<h2 id="article-title">請選擇一個行業</h2><p>由目錄選擇 A 至 U 類，查看官方統計和實際個案。</p>';
    return;
  }
  articleTarget.innerHTML = `<h2 id="article-title">${escapeHtml(id)} 類載入中…</h2><p class="industry-loading" role="status">正在載入資料。</p>`;
  try {
    const section = await loadIndustry(id);
    if (thisRequest !== serial) return;
    articleTarget.innerHTML = renderArticle(section);
    document.querySelector('#official-group')?.addEventListener('change', event => {
      const group = section.groups.find(item => item.id === event.target.value);
      if (group) document.querySelector('#official-group-panel').innerHTML = renderGroup(group);
    });
    if (focusAfterSelection) document.querySelector('#article-title').focus();
  } catch (error) {
    if (thisRequest !== serial) return;
    console.error('行業資料載入失敗', error);
    articleTarget.innerHTML = '<h2 id="article-title">行業資料暫時未能載入</h2><div class="industry-error"><p>請檢查網絡後重新載入。目錄仍可選擇其他行業。</p><button type="button">重新載入這一頁</button></div>';
    articleTarget.querySelector('button').addEventListener('click', () => location.reload());
  }
  focusAfterSelection = false;
}

import('./industry-data.js?v=20261022-industry').then(module => {
  ({ catalogue, loadIndustry } = module);
  document.querySelector('.skip-link').addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('#main').focus();
  });
  document.querySelector('#back-to-top').addEventListener('click', () => document.querySelector('#top').scrollIntoView());
  directoryTarget.innerHTML = catalogue.sections.map(section => `<a href="#industry=${section.id}" data-industry="${section.id}"><strong>${section.id} · ${escapeHtml(section.title)}</strong><small>${escapeHtml(section.availability)}</small></a>`).join('');
  document.querySelector('#industry-version').textContent = `資料核對 ${catalogue.checkedOn}`;
  directoryTarget.addEventListener('click', event => {
    const anchor = event.target.closest('a[data-industry]');
    if (!anchor) return;
    focusAfterSelection = true;
    if (location.hash === anchor.getAttribute('href')) selectFromHash();
  });
  window.addEventListener('hashchange', selectFromHash);
  selectFromHash();
}).catch(error => {
  console.error('行業目錄載入失敗', error);
  document.querySelector('#industry-error').hidden = false;
  document.querySelector('#industry-error').className = 'industry-error';
  document.querySelector('#industry-error').innerHTML = '<p>行業資料暫時未能載入。請檢查網絡後重新載入，或查看<a href="https://www.censtatd.gov.hk/en/wbr.html">政府統計處來源</a>。</p><button type="button">重新載入行業概覽</button>';
  document.querySelector('#industry-error button').addEventListener('click', () => location.reload());
  document.querySelector('#industry-version').textContent = '資料未能載入';
});
