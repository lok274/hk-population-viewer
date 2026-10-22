export const catalogue = {
  checkedOn: '2026-10-22',
  sections: [
    ['A', '農業、林業及漁業', '未有可比較企業統計'],
    ['B', '採礦及採石', '未有可比較企業統計'],
    ['C', '製造', '有行業統計'],
    ['D', '電力及燃氣供應', '有行業統計'],
    ['E', '自來水供應、污水處理、廢棄物管理及污染防治', '部分活動'],
    ['F', '建造', '有行業統計'],
    ['G', '進出口貿易、批發及零售', '有行業統計'],
    ['H', '運輸、倉庫、郵政及速遞', '部分活動'],
    ['I', '住宿及膳食服務', '有行業統計'],
    ['J', '資訊及通訊', '有行業統計'],
    ['K', '金融及保險', '定義有例外'],
    ['L', '地產', '有行業統計'],
    ['M', '專業、科學及技術活動', '分表列載'],
    ['N', '行政及支援服務', '有行業統計'],
    ['O', '公共行政', '未有可比較企業統計'],
    ['P', '教育', '合併數字受保密限制'],
    ['Q', '人類保健及社會工作', '合併數字受保密限制'],
    ['R', '藝術、娛樂及康樂', '合併數字受保密限制'],
    ['S', '其他服務', '合併數字受保密限制'],
    ['T', '家庭住戶內部工作', '未有可比較企業統計'],
    ['U', '享有治外法權的組織及團體', '未有可比較企業統計']
  ].map(([id, title, availability]) => ({ id, title, availability }))
};

const loaders = {
  A: () => import('./industry/section-a.js?v=20261022-industry'), B: () => import('./industry/section-b.js?v=20261022-industry'),
  C: () => import('./industry/section-c.js?v=20261022-industry'), D: () => import('./industry/section-d.js?v=20261022-industry'),
  E: () => import('./industry/section-e.js?v=20261022-industry'), F: () => import('./industry/section-f.js?v=20261022-industry'),
  G: () => import('./industry/section-g.js?v=20261022-industry'), H: () => import('./industry/section-h.js?v=20261022-industry'),
  I: () => import('./industry/section-i.js?v=20261022-industry'), J: () => import('./industry/section-j.js?v=20261022-industry'),
  K: () => import('./industry/section-k.js?v=20261022-industry'), L: () => import('./industry/section-l.js?v=20261022-industry'),
  M: () => import('./industry/section-m.js?v=20261022-industry'), N: () => import('./industry/section-n.js?v=20261022-industry'),
  O: () => import('./industry/section-o.js?v=20261022-industry'), P: () => import('./industry/section-p.js?v=20261022-industry'),
  Q: () => import('./industry/section-q.js?v=20261022-industry'), R: () => import('./industry/section-r.js?v=20261022-industry'),
  S: () => import('./industry/section-s.js?v=20261022-industry'), T: () => import('./industry/section-t.js?v=20261022-industry'),
  U: () => import('./industry/section-u.js?v=20261022-industry')
};

const cached = new Map();
const fail = (where, message) => { throw Error(`${where}: ${message}`); };
const goodUrl = url => typeof url === 'string' && url.startsWith('https://');

function resolve(ref, sources, where) {
  const source = sources.get(ref.sourceId);
  if (!source) fail(where, `未知來源 ${ref.sourceId}`);
  if (ref.pdfPage == null && ref.printedPage == null && !ref.table) fail(where, '缺少頁碼或表格位置');
  return { ...ref, source };
}

function change(metric, index) {
  const old = metric.observations[index];
  const current = metric.observations[index + 1];
  if (old.value == null || current.value == null) return { kind: 'unavailable', reason: '其中一年未有數字' };
  if (old.scope !== current.scope) return { kind: 'unavailable', reason: '兩年涵蓋範圍不同' };
  const difference = current.value - old.value;
  return {
    kind: 'computed', difference, percent: old.value > 0 ? difference / old.value * 100 : null,
    formula: old.value > 0 ? '(新值 − 舊值) ÷ 舊值 × 100%' : '新值 − 舊值；舊值為零或負數，不計百分比',
    from: old.year, to: current.year, unit: metric.unit,
    sourceObservations: [old, current]
  };
}

function validate(raw, entry) {
  if (raw.code !== entry.id || raw.title !== entry.title) fail(entry.id, '主類與目錄不符');
  if (!raw.classification?.intro || !goodUrl(raw.classification.source?.url) || !raw.classification.pdfPage) fail(entry.id, '分類說明來源不完整');
  if (raw.coverage?.section !== entry.id || !Array.isArray(raw.coverage.groupIds)) fail(entry.id, '官方覆蓋資料不完整');
  const expected = new Set(raw.coverage.groupIds);
  if (expected.size !== raw.groups.length || raw.groups.some(group => !expected.has(group.id))) fail(entry.id, '官方組別與覆蓋表不符');
  if (raw.gap && (raw.gap.kind !== 'not-applicable' || !goodUrl(raw.gap.source?.url) || !raw.gap.source.pdfPage || !raw.gap.explanation)) fail(entry.id, '非企業個案說明無效');
  if (!raw.cases.length && !raw.gap) fail(entry.id, '缺少真實個案或有來源的例外');
  const officialSources = new Map(raw.sources.map(source => [source.id, source]));
  for (const source of officialSources.values()) if (!goodUrl(source.url)) fail(entry.id, `來源網址無效 ${source.id}`);
  if (raw.context) {
    const contextSources = new Map(raw.context.sources.map(source => [source.id, source]));
    if (raw.context.hsicSection !== entry.id || !raw.context.coverage || !raw.context.gap) fail(entry.id, '補充背景範圍不完整');
    raw.context.context.sources = raw.context.context.sources.map(ref => resolve(ref, contextSources, `${entry.id}/背景`));
    for (const metric of raw.context.metrics) for (const observation of metric.observations) {
      if (!observation.period || !observation.scope || !observation.status || observation.value !== null && !Number.isFinite(observation.value)) fail(entry.id, '補充背景觀測無效');
      observation.citation = resolve(observation, contextSources, `${entry.id}/${metric.key}`);
    }
  }
  for (const group of raw.groups) {
    if (group.period !== '2024' || !group.scope || !Array.isArray(group.metrics)) fail(group.id, '官方期間或範圍不完整');
    for (const metric of group.metrics) {
      const where = `${group.id}/${metric.key}`;
      if (!officialSources.has(metric.sourceId) || metric.definitionUrl && !goodUrl(metric.definitionUrl)) fail(where, '來源無效');
      if (metric.value === null) {
        if (metric.status === 'published' || !metric.missingReason) fail(where, '缺失值欠原因');
      } else if (!Number.isFinite(metric.value) || !metric.status.startsWith('published')) fail(where, '數值或狀態無效');
      metric.source = officialSources.get(metric.sourceId);
    }
  }
  const caseIds = new Set();
  for (const item of raw.cases) {
    if (caseIds.has(item.id) || !item.hsicSections.includes(entry.id)) fail(entry.id, '個案重複或主類錯誤');
    caseIds.add(item.id);
    if (item.fiscalYears.length !== 3 || item.fiscalYears.some((year, i) => !year.label || !year.start || !year.end || year.start > year.end || i && year.start <= item.fiscalYears[i - 1].end)) fail(item.id, '三個完整財政年度日期無效');
    const sources = new Map(item.sources.map(source => [source.id, source]));
    for (const source of sources.values()) if (!goodUrl(source.url)) fail(item.id, `來源網址無效 ${source.id}`);
    for (const ref of item.auditSources ?? []) resolve(ref, sources, `${item.id}/審計基準`);
    for (const field of ['provides', 'customers', 'revenueModel', 'costs', 'influences']) {
      const claim = item.business?.[field];
      if (!claim?.text || !claim.sources?.length) fail(item.id, `營運說明 ${field} 缺來源`);
      claim.sources = claim.sources.map(ref => resolve(ref, sources, `${item.id}/${field}`));
    }
    if (!item.business.process?.length) fail(item.id, '缺少服務過程');
    for (const step of item.business.process) {
      if (!step.text || !step.sources?.length) fail(item.id, '過程缺來源');
      step.sources = step.sources.map(ref => resolve(ref, sources, `${item.id}/過程`));
    }
    const keys = new Set();
    for (const metric of item.metrics) {
      if (keys.has(metric.key) || !metric.label || !metric.unit || metric.observations.length !== 3) fail(item.id, `指標 ${metric.key} 不完整`);
      keys.add(metric.key);
      for (const [i, observation] of metric.observations.entries()) {
        const where = `${item.id}/${metric.key}/${i}`;
        if (observation.year !== (item.fiscalYears[i].year ?? item.fiscalYears[i].label) || !observation.scope || !observation.status) fail(where, '年度、範圍或狀態無效');
        if (observation.fiscalStart && observation.fiscalStart !== item.fiscalYears[i].start || observation.fiscalEnd && observation.fiscalEnd !== item.fiscalYears[i].end) fail(where, '觀測期間與財政年度不符');
        if (observation.value === null ? !(observation.reason || metric.basis && observation.status) : !Number.isFinite(observation.value)) fail(where, '缺失原因或數值無效');
        observation.citation = resolve(observation, sources, where);
      }
      metric.changes = [change(metric, 0), change(metric, 1)];
    }
    if (![0, 1].every(i => item.analysis.some(explanation => (explanation.fromYear ?? explanation.from) === (item.fiscalYears[i].year ?? item.fiscalYears[i].label) && (explanation.toYear ?? explanation.to) === (item.fiscalYears[i + 1].year ?? item.fiscalYears[i + 1].label)))) fail(item.id, '需要兩段年度變化說明');
    for (const explanation of item.analysis) {
      if (!explanation.text || !explanation.sources?.length) fail(item.id, '年度變化說明不完整');
      explanation.sources = explanation.sources.map(ref => resolve(ref, sources, `${item.id}/年度變化`));
    }
  }
  return raw;
}

export function loadIndustry(id) {
  const entry = catalogue.sections.find(section => section.id === id);
  if (!entry) return Promise.reject(Error(`未知行業主類：${id}`));
  if (!cached.has(id)) cached.set(id, loaders[id]().then(module => validate(module.default, entry)));
  return cached.get(id);
}
