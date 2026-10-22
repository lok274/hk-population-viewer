import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const root = new URL('./dist/', import.meta.url);
const read = name => readFile(new URL(name, root), 'utf8');
const load = source => import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));
const [dataSource, renderer, markup, homepage] = await Promise.all([
  read('education-data.js'), read('education.js'), read('education.html'), read('index.html'),
]);
const { education } = await load(dataSource);
assert.equal(education.checkedOn, '2026-10-22');
assert.equal(education.version, '20261022-resources');

const schoolPeriods = ['2020/21', '2024/25', '2025/26'];
const expectedStudents = [[166.8, 127.7, 115.3], [368.3, 323.7, 321.7], [343.5, 353.3, 361.4], [305.2, 330.2, 354.7]];
const expectedSchools = [[1046, 980, 958], [589, 590, 591], [506, 512, 513], [62, 63, 63]];
for (const [series, unit, expected, domain] of [
  [education.students, '千人', expectedStudents, 'censtatd.gov.hk'],
  [education.schools, '所', expectedSchools, 'edb.gov.hk'],
]) {
  assert.equal(series.length, 4);
  series.forEach((item, index) => {
    assert.deepEqual(item.observations.map(row => row.period.label), schoolPeriods);
    assert.deepEqual(item.observations.map(row => row.value), expected[index]);
    for (const row of item.observations) {
      assert.equal(row.unit, unit);
      assert.equal(row.period.kind, 'school-year');
      assert(new URL(row.source.url).hostname.endsWith(domain));
      for (const field of ['status', 'scope', 'basis']) assert(row[field].length > 0);
      assert(row.source.title && row.source.table && row.source.page);
    }
  });
}
assert.equal(education.students[2].observations[2].status, '臨時數字');
assert.equal(education.students[3].observations[2].status, '臨時數字');
assert.equal(education.students[3].observations[0].status, '修訂數字');
assert.equal(education.students.flatMap(item => item.observations).filter(row => row.status === '臨時數字').length, 2);
assert.equal(education.students.flatMap(item => item.observations).filter(row => row.status === '修訂數字').length, 1);
assert(education.schools.every(item => item.observations.every(row => row.status === '表列數字')));
const distribution = education.attainment;
assert.equal(distribution.rounding, 'source-rounded');
assert.equal(distribution.categories.length, 5);
assert.deepEqual(distribution.periods.map(item => item.period.year), [2020, 2024, 2025]);
assert.deepEqual(distribution.periods.map(item => item.shares.map(row => row.value)), [
  [18.0, 47.7, 3.5, 5.5, 25.4], [16.6, 47.7, 3.1, 5.7, 26.9], [16.1, 47.6, 3.1, 5.7, 27.6],
]);
assert.deepEqual(distribution.periods.map(item => item.shares.reduce((sum, row) => sum + Math.round(row.value * 10), 0)), [1001, 1000, 1001]);
for (const { period, shares } of distribution.periods) {
  assert.equal(shares.length, 5);
  for (const row of shares) {
    assert.deepEqual(row.period, period);
    assert.equal(row.unit, '%');
    assert.equal(row.status, '表列數字');
    assert(row.scope.includes('15歲') && row.scope.includes('未完成'));
    assert(row.basis && row.source.table === '表 14.2');
  }
}
assert.equal(education.students.flatMap(item => item.observations).length + education.schools.flatMap(item => item.observations).length + distribution.periods.flatMap(item => item.shares).length, 39);
const ratioPeriods = ['2020/21', '2021/22', '2022/23', '2023/24', '2024/25', '2025/26'];
const expectedRatios = [[8.1, 8.0, 8.0, 8.3, 8.1, 7.9], [13.0, 12.5, 12.1, 12.0, 12.0, 12.0], [11.2, 11.1, 10.9, 11.1, 11.4, 11.5], [4.1, 4.1, 4.1, 4.2, 4.2, 4.3]];
assert.equal(education.teacherRatios.length, 4);
education.teacherRatios.forEach((item, index) => {
  assert.deepEqual(item.observations.map(row => row.value), expectedRatios[index]);
  assert.deepEqual(item.observations.map(row => row.period.label), ratioPeriods);
  for (const row of item.observations) {
    assert.equal(row.period.kind, 'school-year');
    assert.equal(row.unit, '學生／教師');
    assert(new URL(row.source.url).hostname === 'www.edb.gov.hk');
    assert(row.source.table && row.source.page && row.scope && row.basis);
  }
  assert.equal(item.observations.at(-1).status, index === 0 ? '表列數字' : '修訂數字');
});
assert(education.teacherRatios[0].observations[0].scope.includes('半日制等值'));
assert(education.teacherRatios[1].observations[0].scope.includes('不包括國際及特殊學校'));
assert(education.teacherRatios[3].observations[0].scope.includes('不包括英基特殊學校'));
const expenditure = education.expenditure;
const fiscalPeriods = ['2020/21', '2021/22', '2022/23', '2023/24', '2024/25', '2025/26', '2026/27'];
assert.deepEqual(expenditure.total.map(row => row.value), [107040, 106937, 106833, 113541, 113783, 110904, 111975]);
assert.deepEqual(expenditure.recurrent.map(row => row.value), [97297, 97218, 97920, 103683, 105281, 101991, 102308]);
for (const series of [expenditure.total, expenditure.recurrent]) {
  assert.deepEqual(series.map(row => row.period.label), fiscalPeriods);
  assert.deepEqual(series.map(row => row.status), ['實際開支', '實際開支', '實際開支', '實際開支', '實際開支', '修訂預算', '預算']);
  for (const row of series) {
    assert.equal(row.period.kind, 'fiscal-year');
    assert.equal(row.unit, '百萬港元');
    assert(Number.isInteger(row.value));
    assert(row.source.title && row.source.table && row.source.page && row.scope && row.basis);
  }
  assert(series.slice(0, 6).every(row => row.source.url.endsWith('/gov-expenditure.xlsx')));
  assert(series[6].source.url.includes('e_budget_speech_2026-27.pdf'));
}
assert.equal(expenditure.total[0].source.table, '工作表第 5 行（教育開支總額）');
assert.equal(expenditure.recurrent[0].source.table, '工作表第 8 行（經常開支）');
assert.equal(expenditure.total[6].source.page, '印刷第 26 頁');
assert.equal(expenditure.recurrent[6].source.page, '印刷第 23 頁');
assert.equal(expenditure.governmentShare.value, 13.3);
assert.equal(expenditure.governmentShare.unit, '%');
assert.equal(expenditure.governmentShare.status, '預算');
assert.equal(expenditure.governmentShare.period.kind, 'fiscal-year');
assert(expenditure.governmentShare.scope.includes('政府開支總額') && expenditure.governmentShare.basis.includes('843,416'));
assert(expenditure.governmentShare.source.url.includes('Media_Sheet.pdf'));
assert.equal(39 + education.teacherRatios.flatMap(item => item.observations).length + expenditure.total.length + expenditure.recurrent.length + 1, 78);
await assert.rejects(load(dataSource.replace('[166.8, 127.7, 115.3]', '[-166.8, 127.7, 115.3]')), /數值/);
await assert.rejects(load(dataSource.replace('[2020, 2024, 2025]', '[2020, 2020, 2025]')), /遞增/);
await assert.rejects(load(dataSource.replace('[18.0, 47.7, 3.5, 5.5, 25.4]', '[28.0, 47.7, 3.5, 5.5, 25.4]')), /四捨五入/);
await assert.rejects(load(dataSource.replace('[8.1, 8.0, 8.0, 8.3, 8.1, 7.9]', '[-8.1, 8.0, 8.0, 8.3, 8.1, 7.9]')), /數值/);
await assert.rejects(load(dataSource.replace("kind: 'fiscal-year', label: `${startYear}/${String(startYear + 1).slice(2)}`", "kind: 'fiscal-year', label: 'invalid'")), /期間/);
await assert.rejects(load(dataSource.replace("index < 5 ? '實際開支' : index === 5 ? '修訂預算' : '預算'", "index < 5 ? '預算' : index === 5 ? '修訂預算' : '預算'")), /狀態/);
await assert.rejects(load(dataSource.replace('[97297, 97218, 97920, 103683, 105281, 101991, 102308]', '[107041, 97218, 97920, 103683, 105281, 101991, 102308]')), /經常開支/);
await assert.rejects(load(dataSource.replace('[107040, 106937, 106833, 113541, 113783, 110904, 111975]', '[107040.5, 106937, 106833, 113541, 113783, 110904, 111975]')), /數值/);

async function render(fail = false) {
  const nodes = new Map([...markup.matchAll(/id="([^"]+)"/g)].map(match => [match[1], { innerHTML: '', textContent: '', hidden: match[1] === 'education-error', className: '' }]));
  const errors = [];
  const document = { querySelector(selector) {
    assert(selector.startsWith('#') && nodes.has(selector.slice(1)), 'target exists ' + selector);
    return nodes.get(selector.slice(1));
  } };
  const script = renderer.replace(/import\('\.\/education-data\.js\?[^']+'\)/, fail ? 'Promise.reject(new Error("network unavailable"))' : 'Promise.resolve({ education })');
  assert.notEqual(script, renderer, 'check uses the actual renderer import');
  vm.runInNewContext(script, { education, document, Intl, console: { error: (...args) => errors.push(args) } });
  await new Promise(resolve => setImmediate(resolve));
  return { nodes, errors, html: id => nodes.get(id).innerHTML };
}
const rendered = await render();
assert.deepEqual(rendered.errors, []);
for (const [id, count] of [['students-chart', 12], ['schools-chart', 12], ['attainment-chart', 15], ['teacher-ratios-chart', 24], ['expenditure-chart', 15]]) {
  const html = rendered.html(id);
  assert(!/NaN|undefined|載入/.test(html), 'valid output ' + id);
  assert.equal([...html.matchAll(/data-observation=/g)].length, count);
  assert.equal([...html.matchAll(/<details /g)].length, 1);
  assert.equal([...html.matchAll(/<table /g)].length, 1);
  assert(html.includes('tabindex="0"') && html.includes('scope="col"') && html.includes('scope="row"'));
  assert(html.includes('官方來源') && html.includes('範圍及基準'));
}
assert(rendered.html('students-chart').includes('51.5 千人'));
assert(rendered.html('students-chart').includes('49.5 千人'));
assert(rendered.html('students-chart').includes('臨時數字') && rendered.html('students-chart').includes('修訂數字'));
assert(rendered.html('schools-chart').includes('1,046') && rendered.html('schools-chart').includes('958'));
assert(rendered.html('schools-chart').includes('不相加成全港學校總數'));
assert(rendered.html('attainment-chart').includes('2.2 個百分點'));
assert(rendered.html('attainment-chart').includes('100.1%') && rendered.html('attainment-chart').includes('27.6%'));
assert(rendered.html('attainment-chart').includes('不包括院舍住院人士及水上居民'));
assert(rendered.html('attainment-chart').includes('110-06812'));
assert(rendered.html('teacher-ratios-chart').includes('1 位教師對應 7.9 名學生'));
assert(rendered.html('teacher-ratios-chart').includes('不包括英基特殊學校'));
assert(rendered.html('expenditure-chart').includes('1,137.83 億'));
assert(rendered.html('expenditure-chart').includes('1,119.75 億港元'));
assert(rendered.html('expenditure-chart').includes('113,783') && rendered.html('expenditure-chart').includes('105,281'));
assert(rendered.html('expenditure-chart').includes('13.3%') && rendered.html('expenditure-chart').includes('政府開支總額'));
assert(!rendered.html('expenditure-chart').includes('人均') && !rendered.html('expenditure-chart').includes('GDP'));
assert(rendered.nodes.get('education-version').textContent.includes(education.checkedOn));
assert.equal(rendered.nodes.get('education-error').hidden, true);
const failed = await render(true);
assert.equal(failed.errors.length, 1);
assert.equal(failed.nodes.get('education-error').hidden, false);
assert(failed.html('education-error').includes('重新載入教育概覽') && failed.html('education-error').includes('href="./education.html"'));
for (const id of ['students-chart', 'schools-chart', 'attainment-chart', 'teacher-ratios-chart', 'expenditure-chart']) assert.equal(failed.html(id), '');
assert(markup.includes('<noscript>') && markup.includes('href="./index.html"'));
assert(homepage.includes('href="./education.html"'));
assert(!markup.includes('./app.js'), 'education never runs homepage renderer');
assert(markup.includes('./styles.css?v=20261022-resources') && homepage.includes('./styles.css?v=20261022-resources'));
assert(markup.includes('./education.js?v=20261022-resources') && renderer.includes('./education-data.js?v=20261022-resources'));
assert(markup.includes('href="#teacher-ratios"') && markup.includes('href="#expenditure"'));
console.log('Education checks passed for 78 official observations, statuses, periods, five tables, metadata, navigation and load failure.');
