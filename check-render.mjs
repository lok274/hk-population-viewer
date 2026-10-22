import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const root = new URL('./dist/', import.meta.url);
const read = name => readFile(new URL(name, root), 'utf8');
const load = async name => import('data:text/javascript;base64,' + Buffer.from(await read(name)).toString('base64'));
const [{ records }, { economy }, { getIndicator }, markup, app] = await Promise.all([
  load('population-data.js'), load('economic-data.js'), load('indicator-data.js'), read('index.html'), read('app.js'),
]);
const nodes = new Map([...markup.matchAll(/id="([^"]+)"/g)].map(match => [match[1], { innerHTML: '', textContent: '', value: '', listeners: {}, addEventListener(event, callback) { this.listeners[event] = callback; }, querySelectorAll() { return []; } }]));
const errors = [];
const document = {
  querySelector(selector) {
    assert(selector.startsWith('#') && nodes.has(selector.slice(1)), 'renderer target exists: ' + selector);
    return nodes.get(selector.slice(1));
  },
  querySelectorAll() { return []; },
};
const script = app.replace("import { records } from './population-data.js';", '')
  .replace(/import\('\.\/economic-data\.js\?[^']+'\)/, 'Promise.resolve({ economy })')
  .replace(/import\('\.\/indicator-data\.js\?[^']+'\)/, 'Promise.resolve({ getIndicator })');
vm.runInNewContext(script, { records, economy, getIndicator, document, Intl, console: { error: (...args) => errors.push(args) } });
await new Promise(resolve => setImmediate(resolve));
assert.deepEqual(errors, [], 'all nine modules render without errors');
const html = id => nodes.get(id).innerHTML;
for (const id of ['latest-total', 'total-chart', 'age-chart', 'sex-chart', 'residents-chart', 'economy-annual', 'economy-levels', 'economy-quarter', 'inflation-annual', 'inflation-latest', 'unemployment-chart', 'earnings-chart', 'earnings-latest', 'trade-chart', 'trade-latest']) {
  assert(html(id).length > 50 && !html(id).includes('NaN') && !html(id).includes('undefined'), 'populated valid output: ' + id);
}
assert(html('latest-total').includes('7,518,300') && html('latest-total').includes('19,400'), 'hero retains exact latest total and change');
assert.deepEqual([...html('total-chart').matchAll(/data-total-segment="([^"]+)"/g)].map(match => match[1]), ['2024-2025', '2025-2026'], 'no line crosses missing population years');
assert(html('total-chart').includes('2021–2023') && html('total-chart').includes('未由零開始'), 'population chart explains gap and cropped axis');
assert(html('age-chart').includes('23.8%') && html('age-chart').includes('+5.3 個百分點') && html('age-chart').includes('400,200'), 'ageing insight uses source counts and percentage points');
assert(!html('age-chart').includes('2026 年'), 'no unsupported 2026 age data');
assert.deepEqual([...html('sex-year').matchAll(/value="([^"]+)"/g)].map(match => match[1]), ['2020', '2024', '2025'], 'sex selector offers available years only');
assert(nodes.get('sex-year').value === '2025', 'sex view defaults to latest available year');
nodes.get('sex-year').value = '2020';
nodes.get('sex-year').listeners.change();
assert(html('sex-chart').includes('2020 年女性佔比') && html('sex-chart').includes('4,064,500'), 'sex selection updates exact values');
assert(!html('sex-chart').includes('2026 年'), 'no unsupported 2026 sex data');
assert(html('residents-chart').includes('7,252,800') && html('residents-chart').includes('265,500') && html('residents-chart').includes('人口公告經修訂'), 'resident counts and revision retained');
assert(html('trade-latest').includes('逆差 71,243'), 'official trade deficit retained');
assert(html('unemployment-chart').includes('臨時數字') && html('unemployment-chart').includes('重疊'), 'rolling period and provisional metadata retained');
for (const id of ['total-chart', 'age-chart', 'sex-chart', 'residents-chart', 'economy-annual', 'inflation-annual', 'unemployment-chart', 'earnings-chart', 'trade-chart']) {
  assert(html(id).includes('<details') && html(id).includes('censtatd.gov.hk'), 'details and official sources available: ' + id);
}
console.log('Render checks passed for all nine modules, real values, valid years, population gaps, sex selection and metadata.');

