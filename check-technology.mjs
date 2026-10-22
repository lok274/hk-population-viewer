import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import { catalogue } from './dist/industry-data.js';

const read = name => readFile(new URL(`./dist/${name}`, import.meta.url), 'utf8');
const [dataSource, renderer, markup, ...oldPages] = await Promise.all(['technology-data.js', 'technology.js', 'technology.html', 'index.html', 'education.html', 'industry.html'].map(read));
const load = source => import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));
const { technology } = await load(dataSource);
assert.deepEqual(Object.keys(await load(dataSource)), ['technology']);
assert.equal(technology.themes.length, 11);
assert.deepEqual(technology.recentWindow, { from: '2024-10-22', through: '2026-10-22' });
const cases = technology.themes.flatMap(theme => theme.cases);
const industryCodes = new Set(catalogue.sections.map(section => section.id));
for (const theme of technology.themes) {
  assert(theme.cases.length >= 1 && theme.cases.length <= 2);
  for (const item of theme.cases) {
    assert(item.summary.refs.every(ref => ref.source.url && ref.locator));
    assert(item.industryCodes.every(code => industryCodes.has(code)), 'Existing industry routes only');
  }
}

const rawStart = dataSource.indexOf('const raw = ');
const rawEnd = dataSource.lastIndexOf('\n\nexport const technology');
const original = JSON.parse(dataSource.slice(rawStart + 'const raw = '.length, rawEnd).trim().replace(/;$/, ''));
async function rejected(change, pattern) {
  const raw = structuredClone(original);
  change(raw);
  await assert.rejects(load(dataSource.slice(0, rawStart) + `const raw = ${JSON.stringify(raw)};` + dataSource.slice(rawEnd)), pattern);
}
await rejected(raw => { raw.themes[0].cases[0].summary.refs = []; }, /摘要.*來源引用/);
await rejected(raw => { raw.themes[0].cases[0].summary.refs[0].sourceId = 'absent'; }, /無法找到來源/);
await rejected(raw => { raw.themes[0].cases[0].stage.asOf = '2026-02-30'; }, /階段日期/);
await rejected(raw => { raw.themes[0].cases[0].progress = [{ ...raw.themes[0].cases[0].progress[0], date: '2024', precision: 'year' }]; }, /近兩年實質進展/);
await rejected(raw => { raw.themes[0].cases[0].progress = [{ ...raw.themes[0].cases[0].progress[0], date: '2026-10', precision: 'month' }]; }, /近兩年實質進展/);
await rejected(raw => { raw.themes[0].sources[0].url = 'http://example.com'; }, /來源網址/);
await rejected(raw => { delete raw.themes[0].cases[0].business.adoptionCosts.status; }, /成本披露狀態/);
await rejected(raw => { raw.themes[1].cases[0].id = raw.themes[0].cases[0].id; }, /唯一案例代號/);
await rejected(raw => { raw.themes.pop(); }, /十一個主題/);

function makeDom() {
  const nodes = new Map();
  const events = {};
  const dom = { focused: null, scrolled: null, nodes, events };
  const node = id => ({ id, innerHTML: '', textContent: '', hidden: id === 'technology-error', open: false, listeners: {},
    addEventListener(name, callback) { this.listeners[name] = callback; },
    closest() { return this.article || null; },
    querySelector(selector) {
      if (selector === 'details') return this.details || null;
      return nodes.get(this.id === 'main' ? 'reading-note-title' : this.id.startsWith('case-') ? `title-${this.id.slice(5)}` : this.id.startsWith('theme-') ? `theme-title-${this.id.slice(6)}` : '') || null;
    },
    scrollIntoView() { dom.scrolled = this.id; },
    setAttribute() {},
    focus() { dom.focused = this.id; },
  });
  for (const [, id] of markup.matchAll(/id="([^"]+)"/g)) nodes.set(id, node(id));
  let rendered = '';
  Object.defineProperty(nodes.get('technology-content'), 'innerHTML', {
    get: () => rendered,
    set(value) {
      rendered = value;
      for (const [, id] of value.matchAll(/id="([^"]+)"/g)) nodes.set(id, node(id));
      for (const article of value.matchAll(/<article class="technology-case" id="([^"]+)"[\s\S]*?<\/article>/g)) {
        const owner = nodes.get(article[1]); owner.details = node(`${owner.id}-details`);
        for (const [, id] of article[0].matchAll(/id="([^"]+)"/g)) nodes.get(id).article = owner;
      }
    },
  });
  dom.document = { getElementById: id => nodes.get(id) || null };
  dom.window = { addEventListener: (name, callback) => { events[name] = callback; } };
  return dom;
}
async function render(hash = '', fail = false, corpus = technology) {
  const dom = makeDom();
  const errors = [];
  const location = { hash };
  const script = renderer.replace(/import\('\.\/technology-data\.js\?[^']+'\)/, fail ? 'Promise.reject(new Error("offline"))' : 'Promise.resolve({ technology })');
  assert.notEqual(script, renderer, 'Exercise actual page bootstrap');
  vm.runInNewContext(script, { technology: corpus, document: dom.document, window: dom.window, location, Intl, console: { error: (...args) => errors.push(args) } });
  await new Promise(resolve => setImmediate(resolve));
  return { ...dom, errors, location, html: dom.nodes.get('technology-content').innerHTML, state: dom };
}
const result = await render();
assert.deepEqual(result.errors, []);
assert.equal(result.state.focused, null, 'No focus theft on ordinary load');
const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const ids = [...result.html.matchAll(/id="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, 'Unique rendered IDs');
assert.equal([...result.html.matchAll(/data-case=/g)].length, cases.length, 'Every canonical case exactly once');
assert.equal([...result.html.matchAll(/<details>/g)].length, cases.length);
assert(!/NaN|undefined/.test(result.html));
for (const [, target] of result.html.matchAll(/href="#([^"]+)"/g)) assert(ids.includes(target), `Fragment resolves: ${target}`);
for (const theme of technology.themes) assert(result.html.includes(`id="theme-${theme.id}"`));
for (const item of cases) {
  assert(result.html.includes(escape(item.summary.text)) && result.html.includes(escape(item.business.adoptionCosts.text)) && result.html.includes(item.checkedOn));
  for (const metric of item.metrics) assert(result.html.includes(escape(metric.conditions)) && result.html.includes(escape(metric.scope)) && result.html.includes(escape(metric.period)));
  assert(result.html.includes(`href="./industry.html#industry=${item.industryCodes[0]}"`));
}
const firstId = cases[0].id;
const direct = await render(`#case-${firstId}`);
assert.equal(direct.nodes.get(`case-${firstId}`).details.open, true);
assert.equal(direct.state.focused, `title-${firstId}`);
const directMain = await render('#main');
assert.equal(directMain.state.focused, 'main', 'Direct main fragment keeps the landmark as its focus target');
const article = result.nodes.get(`case-${firstId}`);
function clickHash(hash) {
  let prevented = false;
  const link = { getAttribute: () => hash };
  result.nodes.get('main').listeners.click({ target: { closest: () => link }, button: 0, preventDefault() { prevented = true; } });
  assert(prevented);
}
clickHash(`#case-${firstId}`); article.details.open = false; clickHash(`#case-${firstId}`);
assert.equal(article.details.open, true, 'Repeated same-hash link reopens details');
const sourceId = ids.find(id => id.startsWith(`source-${firstId}-`));
article.details.open = false; clickHash(`#${sourceId}`);
assert.equal(article.details.open, true, 'Summary source citation reveals full metadata');
assert.equal(result.state.focused, sourceId);
result.location.hash = `#theme-${technology.themes[1].id}`; result.events.hashchange();
assert.equal(result.state.scrolled, `theme-${technology.themes[1].id}`);
assert.equal(article.details.open, true, 'History navigation preserves expanded cases');
for (const hash of ['#unknown-case', '#%E0%A4%A']) {
  const bad = await render(hash);
  assert(bad.nodes.get('technology-status').textContent && bad.html.includes('technology-index'));
  assert.deepEqual(bad.errors, []);
}
const poisoned = structuredClone(technology); poisoned.themes[0].cases[0].summary.text = '<img src=x onerror=alert(1)> & "';
const safe = await render('', false, poisoned);
assert(safe.html.includes('&lt;img') && !safe.html.includes('<img src=x'));
const failed = await render('', true);
assert.equal(failed.errors.length, 1);
assert.equal(failed.html, '');
assert.equal(failed.nodes.get('technology-error').hidden, false);
assert(failed.nodes.get('technology-error').innerHTML.includes('重新載入科技發展'));
for (const page of oldPages) assert(page.includes('href="./technology.html"'), 'Original pages link to technology');
assert(markup.includes('<noscript>') && markup.includes('tabindex="-1"'));
assert(markup.includes('./technology.js?v=20261022-technology') && renderer.includes('./technology-data.js?v=20261022-technology'));
console.log(`Technology checks passed: 11 themes, ${cases.length} canonical cases, sourced summaries, conditions, date/source rejection, navigation, escaping and failure recovery.`);
