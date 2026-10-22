const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const roleLabels = { 'hk-rd': '香港研發', 'hk-application': '香港使用', mixed: '香港研發及使用' };
const stageLabels = { research: '研究', prototype: '原型', trial: '試行', applied: '已應用' };
const formatDate = (date, precision = 'day') => precision === 'month' ? `${date.slice(0, 4)} 年 ${Number(date.slice(5))} 月` : precision === 'year' ? `${date} 年` : date;
const dated = event => `<time datetime="${escapeHtml(event.date)}">${escapeHtml(formatDate(event.date, event.precision))}</time>`;

function caseSources(item) {
  const sources = new Map();
  const claims = [item.summary, item.hkRole, item.stage, ...item.progress, item.principle, ...item.steps, item.application, ...Object.values(item.business), ...item.metrics, ...item.limits];
  for (const value of claims) for (const ref of value.refs) {
    if (!sources.has(ref.source.id)) sources.set(ref.source.id, { source: ref.source, locators: new Set() });
    sources.get(ref.source.id).locators.add(ref.locator);
  }
  return [...sources.values()];
}
function sourceDates(source) {
  return `來源發布：${source.published ? escapeHtml(formatDate(source.published.date, source.published.precision)) : `未列明（${escapeHtml(source.publicationDateNote)}）`}；來源核對：${escapeHtml(source.checkedOn)}`;
}
function renderCase(item, themes) {
  const sources = caseSources(item);
  const cite = refs => refs.map(ref => `<a class="technology-citation" href="#source-${escapeHtml(item.id)}-${escapeHtml(ref.source.id)}" aria-label="來源：${escapeHtml(ref.source.title)}；${escapeHtml(ref.locator)}">[來源 ${sources.findIndex(entry => entry.source.id === ref.source.id) + 1}]</a>`).join(' ');
  const claim = value => `${escapeHtml(value.text)} ${cite(value.refs)}`;
  const latest = [...item.progress].sort((a, b) => a.date.localeCompare(b.date)).at(-1);
  const industryLinks = item.industryCodes.map(code => `<a href="./industry.html#industry=${escapeHtml(code)}">了解 ${escapeHtml(code)} 類行業與機構帳目 ↗</a>`).join('');
  const topicLinks = item.tags.filter(id => id !== themes.find(theme => theme.cases.includes(item)).id).map(id => `<a href="#theme-${escapeHtml(id)}">相關主題：${escapeHtml(themes.find(theme => theme.id === id).title)}</a>`).join('');
  return `<article class="technology-case" id="case-${escapeHtml(item.id)}" data-case="${escapeHtml(item.id)}" aria-labelledby="title-${escapeHtml(item.id)}">
    <div class="technology-badges"><span class="technology-badge">香港角色 · ${roleLabels[item.hkRole.kind]}</span><span class="technology-badge technology-stage">證據階段 · ${stageLabels[item.stage.kind]}</span></div>
    <h3 id="title-${escapeHtml(item.id)}" tabindex="-1">${escapeHtml(item.title)} <a class="technology-permalink" href="#case-${escapeHtml(item.id)}" aria-label="${escapeHtml(item.title)}的固定連結">連結 ↗</a></h3>
    <p class="technology-summary">${claim(item.summary)}</p>
    <dl class="technology-facts"><div><dt>香港實際參與</dt><dd>${claim(item.hkRole)}</dd></div><div><dt>目前證據 · ${escapeHtml(item.stage.asOf)}</dt><dd>${claim(item.stage)}</dd></div><div><dt>最近進展 · ${dated(latest)}</dt><dd>${claim(latest)}</dd></div></dl>
    <p class="technology-preview"><strong>閱讀時留意：</strong>${claim(item.limits[0])}</p>
    <div class="technology-related">${industryLinks}${topicLinks}</div>
    <details><summary>深入了解原理、實例與生意方式：${escapeHtml(item.title)}</summary><div class="technology-detail">
      <section><h4>怎樣運作？</h4><p>${claim(item.principle)}</p><figure class="technology-process"><figcaption>原理示意，並非量度數據。按步驟閱讀：</figcaption><ol>${item.steps.map(step => `<li><strong>${escapeHtml(step.title)}</strong><p>${claim(step)}</p></li>`).join('')}</ol></figure></section>
      <section><h4>香港實際做了甚麼？</h4><p>${claim(item.application)}</p><h4>事件日期與進展</h4><ol class="technology-timeline">${item.progress.map(event => `<li>${dated(event)} · ${stageLabels[event.kind]}<p>${claim(event)}</p></li>`).join('')}</ol></section>
      <section><h4>有哪些實際數字？</h4>${item.metrics.length ? `<div class="technology-metrics">${item.metrics.map(metric => `<div class="technology-metric" data-metric="${escapeHtml(item.id)}"><h5>${escapeHtml(metric.label)}</h5><strong>${escapeHtml(new Intl.NumberFormat('zh-HK', { maximumSignificantDigits: 15 }).format(metric.value))} <span>${escapeHtml(metric.unit)}</span></strong><dl><dt>期間</dt><dd>${escapeHtml(metric.period)}</dd><dt>涵蓋範圍</dt><dd>${escapeHtml(metric.scope)}</dd><dt>測試條件及適用限制</dt><dd>${escapeHtml(metric.conditions)}</dd><dt>數值狀態</dt><dd>${metric.status === 'reported' ? '來源原報數值' : `按來源計算：${escapeHtml(metric.formula)}`} ${cite(metric.refs)}</dd></dl></div>`).join('')}</div>` : '<p>本案例沒有列入可在適用條件下核對的量化指標；不補估數值。</p>'}</section>
      <section><h4>誰使用、誰付款、要付出甚麼？</h4><dl class="technology-business"><div><dt>使用者或研究所指的潛在用途</dt><dd>${claim(item.business.users)}</dd></div><div><dt>收費、收入或資金來源</dt><dd>${claim(item.business.fundingModel)}</dd></div><div><dt>採用成本<span class="technology-disclosure">${item.business.adoptionCosts.status === 'disclosed' ? '有已披露資料，範圍見下文' : '所查來源未披露完整價格'}</span></dt><dd>${claim(item.business.adoptionCosts)}</dd></div></dl></section>
      <section><h4>限制與仍未知道的事</h4><ul class="technology-limits">${item.limits.map(limit => `<li>${claim(limit)}</li>`).join('')}</ul></section>
      <section><h4>原始來源與日期</h4><p>數字旁的來源連結會跳到這裏。事件發生日期見上方；以下是來源自身的發布日期和實際核對日期。</p><ol class="technology-sources">${sources.map(entry => `<li id="source-${escapeHtml(item.id)}-${escapeHtml(entry.source.id)}" tabindex="-1"><a href="${escapeHtml(entry.source.url)}" target="_blank" rel="noreferrer">${escapeHtml(entry.source.title)} ↗</a><p>${escapeHtml(entry.source.publisher)} · ${sourceDates(entry.source)}</p><p class="technology-source-locators">原文位置：${escapeHtml([...entry.locators].join('；'))}</p></li>`).join('')}</ol></section>
    </div></details><p class="technology-check-date">個案核對：${escapeHtml(item.checkedOn)} · 階段只適用於上方列明的證據範圍</p>
  </article>`;
}

function renderTechnology(technology) {
  const cases = technology.themes.flatMap(theme => theme.cases);
  const dates = [...cases.map(item => item.checkedOn), ...technology.themes.flatMap(theme => theme.sources.map(source => source.checkedOn))].sort();
  const html = `<nav class="technology-index" aria-labelledby="technology-index-title"><h2 id="technology-index-title">由你感興趣的主題開始</h2><p>每題先讀摘要；想知道原理、成本與來源，再展開詳情。</p><ol>${technology.themes.map((theme, index) => `<li><a href="#theme-${escapeHtml(theme.id)}"><span aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>${escapeHtml(theme.title)}</a></li>`).join('')}</ol></nav>${technology.themes.map((theme, index) => {
    const related = cases.filter(item => item.tags.includes(theme.id) && !theme.cases.includes(item));
    return `<section class="technology-theme" id="theme-${escapeHtml(theme.id)}" aria-labelledby="theme-title-${escapeHtml(theme.id)}"><header><p class="section-kicker">${String(index + 1).padStart(2, '0')} / 科技主題</p><h2 id="theme-title-${escapeHtml(theme.id)}" tabindex="-1">${escapeHtml(theme.title)}</h2><p>${escapeHtml(theme.introduction)}</p></header>${theme.cases.map(item => renderCase(item, technology.themes)).join('')}${related.length ? `<div class="technology-related"><span>亦可參閱：</span>${related.map(item => `<a href="#case-${escapeHtml(item.id)}">${escapeHtml(item.title)}</a>`).join('')}</div>` : ''}${theme.background.length ? `<aside class="technology-background"><h3>政策與設施背景</h3><ul>${theme.background.map(event => `<li>${dated(event)} · ${escapeHtml(event.text)}${event.refs.map(ref => `<p><a href="${escapeHtml(ref.source.url)}" target="_blank" rel="noreferrer">${escapeHtml(ref.source.publisher)}：${escapeHtml(ref.source.title)} ↗</a><br>${sourceDates(ref.source)}<br>原文位置：${escapeHtml(ref.locator)}</p>`).join('')}</li>`).join('')}</ul></aside>` : ''}</section>`;
  }).join('')}`;
  document.getElementById('technology-content').innerHTML = html;
  document.getElementById('technology-version').textContent = `來源與個案核對：${dates[0]}${dates[0] === dates.at(-1) ? '' : ` 至 ${dates.at(-1)}`}；整合核對：${technology.checkedOn}`;
}

function revealFragment(hash, focus = false) {
  const status = document.getElementById('technology-status');
  status.textContent = '';
  if (!hash || hash === '#') return;
  let id;
  try { id = decodeURIComponent(hash.slice(1)); } catch { status.textContent = '這個連結的格式不完整，請由主題目錄選擇。'; return; }
  const target = /^(theme-|case-|source-)/.test(id) || ['main', 'top'].includes(id) ? document.getElementById(id) : null;
  if (!target) { status.textContent = '找不到這個主題或個案連結，請由主題目錄選擇。'; return; }
  const article = target.closest('.technology-case');
  if (article) article.querySelector('details').open = true;
  target.scrollIntoView({ block: 'start', behavior: 'instant' });
  if (focus) {
    const heading = /^(theme-|case-)/.test(id) ? target.querySelector('h2, h3') || target : target;
    heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
  }
}

function showLoadError(error) {
  console.error('科技資料載入失敗', error);
  document.getElementById('technology-content').innerHTML = '';
  document.getElementById('technology-version').textContent = '資料未能載入';
  const target = document.getElementById('technology-error');
  target.hidden = false;
  target.innerHTML = '<h2>科技資料暫時未能載入</h2><p>請檢查網絡後<a href="./technology.html">重新載入科技發展</a>，或先閱讀<a href="./industry.html">香港行業概覽</a>及<a href="./index.html">人口與經濟首頁</a>。</p>';
}

import('./technology-data.js?v=20261022-technology')
  .then(({ technology }) => {
    renderTechnology(technology);
    revealFragment(location.hash, Boolean(location.hash));
    window.addEventListener('hashchange', () => revealFragment(location.hash));
    document.getElementById('main').addEventListener('click', event => {
      const link = event.target.closest('a[href^="#"]');
      if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const hash = link.getAttribute('href');
      if (location.hash !== hash) location.hash = hash;
      revealFragment(hash, true);
    });
  })
  .catch(showLoadError);
