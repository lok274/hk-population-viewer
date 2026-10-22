import assert from 'node:assert/strict';
import fs from 'node:fs';
import { catalogue, loadIndustry } from './dist/industry-data.js';

const expectedCases = [
  'kfbg', 'wai-kee-quarrying', 'vtech', 'clp', 'baguio', 'buildking',
  'hktv', 'mtr', 'cafedecoral', 'hkt', 'hsbc', 'aia', 'linkreit', 'aec',
  'manpower', 'hksar-government', 'polyu', 'hospital-authority',
  'ocean-park', 'sausantong', 'bis'
];
const codes = 'ABCDEFGHIJKLMNOPQRSTU'.split('');
assert.deepEqual(catalogue.sections.map(section => section.id), codes);
assert.equal(Object.keys(await import('./dist/industry-data.js')).sort().join(','), 'catalogue,loadIndustry');

const sections = await Promise.all(codes.map(loadIndustry));
const groups = new Map();
const foundCases = [];
let observations = 0;
let negatives = 0;
let zeroes = 0;
let missing = 0;
let calculated = 0;
let caseSeries = 0;
let caseObservations = 0;
let contextObservations = 0;

for (const section of sections) {
  assert.equal(section.coverage.section, section.code);
  assert(section.classification.source.url.startsWith('https://'));
  assert(section.cases.length || section.gap, `${section.code} needs a verified case or documented exception`);
  if (section.context) {
    assert(section.context.coverage && section.context.gap);
    for (const metric of section.context.metrics) for (const row of metric.observations) {
      contextObservations++;
      assert(row.period && row.scope && row.status && Number.isFinite(row.value));
      assert(row.citation?.source?.url.startsWith('https://'));
    }
  }
  for (const group of section.groups) {
    groups.set(group.id, group);
    assert.equal(group.period, '2024');
    for (const metric of group.metrics) {
      observations++;
      assert(metric.source.url.startsWith('https://'), `${group.id}/${metric.key} source`);
      assert.equal(metric.table, metric.sourceId);
      if (metric.value === null) {
        missing++;
        assert(metric.missingReason && metric.status !== 'published');
      } else {
        assert(Number.isFinite(metric.value));
        if (metric.value < 0) negatives++;
        if (metric.value === 0) zeroes++;
      }
    }
    if (group.costBreakdownCompleteForSurplus) {
      assert(group.costComponents.length >= 2, `${group.id} incomplete cost identity`);
      for (const key of group.costComponents) assert(group.metrics.some(metric => metric.key === key));
    }
    if (section.code === 'L') assert.equal(group.costBreakdownCompleteForSurplus, false);
  }
  for (const item of section.cases) {
    foundCases.push(item.id);
    assert.equal(item.fiscalYears.length, 3);
    assert(item.auditStatus || typeof item.audited === 'boolean');
    assert(item.latestReportCheck?.date || item.retrievedAt, `${item.id} report check date`);
    for (const [i, year] of item.fiscalYears.entries()) {
      const start = Date.parse(year.start);
      const end = Date.parse(year.end);
      assert(Number.isFinite(start) && Number.isFinite(end) && end - start > 300 * 86400000 && end - start < 370 * 86400000, `${item.id} complete fiscal year`);
      if (i) assert.equal(start - Date.parse(item.fiscalYears[i - 1].end), 86400000, `${item.id} fiscal continuity`);
    }
    assert(item.metrics.length >= 6, `${item.id} financial breadth`);
    assert(item.metrics.some(metric => ['operatingCashFlow', 'operating-cash-flow'].includes(metric.key)), `${item.id} operating cash flow`);
    assert(item.metrics.some(metric => ['borrowings', 'bank-borrowings', 'debtSecurities', 'currency-deposits'].includes(metric.key)), `${item.id} debt or funding measure`);
    for (const metric of item.metrics) {
      caseSeries++;
      assert(metric.unit && metric.basis && metric.observations.length === 3);
      for (const [i, row] of metric.observations.entries()) {
        caseObservations++;
        assert.equal(row.year, item.fiscalYears[i].year ?? item.fiscalYears[i].label);
        assert(row.citation?.source?.url.startsWith('https://'), `${item.id}/${metric.key}/${i} source`);
        assert(row.citation.pdfPage || row.citation.printedPage || row.citation.table);
        if (row.value === null) {
          missing++;
          assert(row.reason || metric.basis && row.status);
        } else {
          assert(Number.isFinite(row.value));
          if (row.value < 0) negatives++;
          if (row.value === 0) zeroes++;
        }
        if (row.status === 'calculated') {
          calculated++;
          assert(row.formula, `${item.id}/${metric.key}/${i} formula`);
        }
      }
      assert.equal(metric.changes.length, 2);
      for (const [i, result] of metric.changes.entries()) {
        const [old, current] = metric.observations.slice(i, i + 2);
        if (old.value === null || current.value === null || old.scope !== current.scope) {
          assert.equal(result.kind, 'unavailable');
        } else {
          assert.equal(result.kind, 'computed');
          assert.equal(result.difference, current.value - old.value);
          assert.equal(result.percent, old.value > 0 ? (current.value - old.value) / old.value * 100 : null);
        }
      }
    }
    assert([0, 1].every(i => item.analysis.some(explanation => (explanation.fromYear ?? explanation.from) === (item.fiscalYears[i].year ?? item.fiscalYears[i].label) && (explanation.toYear ?? explanation.to) === (item.fiscalYears[i + 1].year ?? item.fiscalYears[i + 1].label))));
  }
}

assert.equal(groups.size, 54);
const uniqueObservations = [...groups.values()].reduce((count, group) => count + group.metrics.length, 0);
assert.equal(uniqueObservations, 420);
assert.equal(observations, 429);
assert.equal(contextObservations, 26);
assert.equal(caseSeries, 222);
assert.equal(caseObservations, 666);
assert.deepEqual(foundCases.sort(), expectedCases.sort());
assert.equal(sections.find(section => section.code === 'K').cases.length, 2);
assert.equal(sections.find(section => section.code === 'T').gap.kind, 'not-applicable');
assert(negatives > 0 && zeroes > 0 && missing > 0 && calculated > 0, 'signed, zero, missing and calculated cases must remain distinct');
assert.match(sections.find(section => section.code === 'R').cases[0].auditStatus, /無法表示意見/);
assert.match(sections.find(section => section.code === 'B').cases[0].coverageStatus, /非已確認純B/);
assert.match(sections.find(section => section.code === 'A').cases[0].auditStatus, /unaudited|未經審計|非經審計/);
await assert.rejects(loadIndustry('Z'), /未知行業主類/);
assert(fs.readFileSync('./dist/index.html', 'utf8').includes('./industry.html'));
assert(fs.readFileSync('./dist/education.html', 'utf8').includes('./industry.html'));
console.log(`Validated 21 sections, ${groups.size} official groups, ${uniqueObservations} official observations, ${contextObservations} public context observations and ${foundCases.length} sourced cases (${caseObservations} fiscal observations).`);
