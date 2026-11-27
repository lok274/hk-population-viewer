const regions = [
  {
    id: 'hk', label: '香港', english: 'Hong Kong', summary: '人口、經濟、教育、行業及科技', href: './hk-population.html#total',
    map: {longitude: 114.17, latitude: 22.32},
    previewTopics: ['人口', '經濟', '教育', '行業', '科技'], previewButton: '進入香港人口頁 →',
    topics: [
      ['公共衛生', './hk-society.html#health', '醫療 健康 壽命'],
      ['交通與基建', './hk-society.html#transport', '交通 運輸 基建'],
      ['公共安全', './hk-society.html#safety', '罪案 安全'],
      ['政府與公共服務', './hk-society.html#government', '財政 公共開支'],
      ['文化與休閒', './hk-society.html#culture', '圖書館 博物館 文化'],
      ['環境、能源與人口家庭', './hk-society.html', '環境 氣候 能源 住戶 家庭'],
      ['環境與氣候', './hk-society.html#environment', '污染 氣溫 排放'],
      ['能源', './hk-society.html#energy', '用電 電力'],
      ['人口與家庭', './hk-society.html#population', '住戶 家庭'],
      ['人口結構', './hk-population.html#total', '人口 總人口 population'],
      ['年齡分布', './hk-population.html#age', '年齡'],
      ['性別分布', './hk-population.html#sex', '性別'],
      ['居民類別', './hk-population.html#residents', '常住 流動'],
      ['香港經濟', './hk-economy.html', '經濟'],
      ['本地生產總值', './hk-economy.html#economy', 'GDP 經濟產出'],
      ['通脹', './hk-economy.html#inflation', '物價 CPI'],
      ['失業率', './hk-economy.html#unemployment', '勞工 就業'],
      ['就業收入', './hk-economy.html#earnings', '工資 薪酬'],
      ['商品貿易', './hk-economy.html#trade', '進口 出口'],
      ['教育概覽', './education.html', '教育 學校 學生'],
      ['學生人數', './education.html#students', '教育 學生'],
      ['學校數目', './education.html#schools', '教育 學校'],
      ['教育程度', './education.html#attainment', '教育'],
      ['師生比例', './education.html#teacher-ratios', '教育 教師 學生'],
      ['政府教育開支', './education.html#expenditure', '教育 預算'],
      ['行業概覽', './industry.html', '行業 產業'],
      ['科技發展', './technology.html', '科技 技術']
    ]
  },
  {
    id: 'us', label: '美國', english: 'United States', summary: '十個主題的全國經濟數據', href: './us-economy.html',
    map: {longitude: -98.58, latitude: 39.83, shape: 'USA'},
    previewTopics: ['GDP', '物價', '就業', '消費', '貿易', '利率', '財政'], previewButton: '進入美國經濟頁 →',
    topics: [
      ['公共衛生', './us-society.html#health', '醫療 健康 壽命'],
      ['交通與基建', './us-society.html#transport', '交通 運輸 基建'],
      ['公共安全', './us-society.html#safety', '罪案 安全'],
      ['政府與公共服務', './us-society.html#government', '財政 公共開支'],
      ['文化與休閒', './us-society.html#culture', '圖書館 博物館 文化'],
      ['環境、能源與人口家庭', './us-society.html', '環境 氣候 能源 人口 住戶 家庭'],
      ['環境與氣候', './us-society.html#environment', '污染 氣溫 排放'],
      ['能源', './us-society.html#energy', '發電 電力'],
      ['人口與家庭', './us-society.html#population', '住戶 家庭'],
      ['美國經濟', './us-economy.html', '經濟'],
      ['美國各州經濟', './us-states.html', '州份 州 GDP 失業 價格 住宅 比較'],
      ['經濟產出', './us-economy.html#output', 'GDP 消費 投資 政府 淨出口'],
      ['物價', './us-economy.html#prices', '通脹 CPI PCE 食品 居住 住房 能源'],
      ['就業與工資', './us-economy.html#labour', '失業 就業 工資 製造業 醫療 教育 專業 商業 政府'],
      ['收入與消費', './us-economy.html#households', '收入 消費 儲蓄 耐用品 服務'],
      ['零售', './us-economy.html#retail', '銷售 汽車 餐飲 網購 食品'],
      ['住宅', './us-economy.html#housing', '房屋 建築 動工 許可'],
      ['對外貿易', './us-economy.html#trade', '進口 出口 商品 服務'],
      ['利率', './us-economy.html#rates', '聯儲局 國債 收益率'],
      ['工業與生產力', './us-economy.html#production', '工業 生產 製造 採礦 公用事業'],
      ['聯邦財政', './us-economy.html#fiscal', '債務 赤字 所得稅 收入 社會保險']
    ]
  }
];

window.siteRegions = regions;
const modules = {
  hk: [
    ['人口結構', './hk-population.html#total'], ['經濟', './hk-economy.html'],
    ['教育', './education.html'], ['行業', './industry.html'], ['科技', './technology.html'],
    ['社會與環境', './hk-society.html']
  ],
  us: [
    ['全國經濟', './us-economy.html'], ['各州經濟', './us-states.html'],
    ['社會與環境', './us-society.html']
  ]
};
const pageRegion = document.body.dataset.region;
const pageModules = modules[pageRegion];
const regionBar = document.querySelector('.global-regions');
if (regionBar) {
  const badge = document.createElement('span');
  badge.className = 'level-badge';
  badge.textContent = 'L1';
  badge.setAttribute('aria-hidden', 'true');
  regionBar.prepend(badge);
}
if (pageModules) {
  const page = location.pathname.split('/').pop();
  const activeModule = pageModules.find(([, href]) => new URL(href, location.href).pathname.split('/').pop() === page);
  const currentRegion = regions.find(region => region.id === pageRegion);
  const breadcrumb = document.createElement('nav');
  breadcrumb.className = 'level-breadcrumb';
  breadcrumb.setAttribute('aria-label', '所在位置');
  const trail = document.createElement('ol');
  const crumbs = [['各地總覽', './index.html#world-economies'], [currentRegion.label, currentRegion.href]];
  if (activeModule) crumbs.push(activeModule);
  for (const [index, [name, href]] of crumbs.entries()) {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = href;
    link.textContent = name;
    if (index === crumbs.length - 1) link.setAttribute('aria-current', 'page');
    item.append(link);
    trail.append(item);
  }
  breadcrumb.append(trail);
  const nav = document.createElement('nav');
  nav.className = 'hk-module-nav';
  nav.setAttribute('aria-label', `${currentRegion.label}主題`);
  const label = document.createElement('span');
  label.textContent = 'L2 主題';
  nav.append(label);
  for (const [name, href] of pageModules) {
    const link = document.createElement('a');
    link.href = href;
    link.textContent = name;
    if (activeModule && href === activeModule[1]) link.setAttribute('aria-current', 'page');
    nav.append(link);
  }
  const oldNav = document.querySelector('.hk-module-nav');
  if (oldNav) oldNav.replaceWith(nav);
  else document.querySelector('.global-header').after(nav);
  nav.before(breadcrumb);
}
for (const chapterNav of document.querySelectorAll('.page-chapters, .us-topics')) {
  if (chapterNav.classList.contains('page-chapters')) {
    const label = chapterNav.querySelector(':scope > span');
    if (label) label.textContent = 'L3 指標';
  } else {
    const label = document.createElement('span');
    label.className = 'level-chapter-label';
    label.textContent = 'L3 指標';
    chapterNav.prepend(label);
  }
  const updateCurrent = () => chapterNav.querySelectorAll('a[href^="#"]').forEach(link => {
    if (location.hash && link.getAttribute('href') === location.hash) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  updateCurrent();
  window.addEventListener('hashchange', updateCurrent);
}
const regionNav = document.querySelector('[data-region-links]');
const currentRegion = document.body.dataset.region;
if (regionNav) {
  regionNav.replaceChildren();
  for (const region of regions) {
    const link = document.createElement('a');
    link.href = region.href;
    link.textContent = region.label;
    if (region.id === currentRegion) link.setAttribute('aria-current', 'location');
    regionNav.append(link);
  }
}

const regionCards = document.querySelector('[data-region-cards]');
if (regionCards) {
  regionCards.replaceChildren();
  for (const region of regions) {
    const link = document.createElement('a');
    const title = document.createElement('strong');
    const description = document.createElement('span');
    const action = document.createElement('span');
    link.href = region.href;
    title.textContent = `${region.label} ${region.english}`;
    description.textContent = region.summary;
    action.textContent = `查看${region.label} →`;
    action.setAttribute('aria-hidden', 'true');
    link.append(title, description, action);
    regionCards.append(link);
  }
}

const worldMap = document.querySelector('[data-world-map]');
if (worldMap) {
  fetch('./world-map.svg?v=20261127')
    .then(response => {
      if (!response.ok) throw new Error('Map unavailable');
      return response.text();
    })
    .then(text => {
      const svg = new DOMParser().parseFromString(text, 'image/svg+xml').documentElement;
      if (svg.localName !== 'svg') throw new Error('Invalid map');
      const svgNs = 'http://www.w3.org/2000/svg';
      const mapContent = document.createElement('div');
      mapContent.className = 'world-map-content';
      for (const region of regions) {
        if (!region.map) continue;
        if (region.map.shape) {
          const shape = [...svg.querySelectorAll('[data-map-code]')].find(path => path.dataset.mapCode === region.map.shape);
          if (shape) {
            const link = document.createElementNS(svgNs, 'a');
            link.setAttribute('href', region.href);
            link.setAttribute('aria-label', `查看${region.label}`);
            link.dataset.mapRegion = region.id;
            link.classList.add('world-region');
            shape.removeAttribute('aria-hidden');
            shape.before(link);
            link.append(shape);
          }
        }
        const marker = document.createElement('a');
        marker.href = region.href;
        marker.className = 'world-marker';
        marker.style.left = `${(region.map.longitude + 180) / 360 * 100}%`;
        marker.style.top = `${(90 - region.map.latitude) / 180 * 100}%`;
        marker.textContent = region.label;
        marker.setAttribute('aria-label', `查看${region.label}`);
        marker.dataset.mapRegion = region.id;
        mapContent.append(marker);
      }
      mapContent.prepend(document.importNode(svg, true));
      worldMap.append(mapContent);
      worldMap.hidden = false;
      const mapStatus = document.querySelector('[data-map-status]');
      if (mapStatus) mapStatus.hidden = true;
      worldMap.dispatchEvent(new Event('map-ready'));
    })
    .catch(() => {
      const mapStatus = document.querySelector('[data-map-status]');
      if (mapStatus) mapStatus.textContent = '地圖暫時未能載入，請使用下方地區卡片。';
    });
}

const dialog = document.querySelector('#site-search');
const openButton = document.querySelector('[data-open-search]');
if (dialog && openButton && typeof dialog.showModal === 'function') {
  const input = dialog.querySelector('input');
  const results = dialog.querySelector('[data-search-results]');
  const status = dialog.querySelector('[data-search-status]');
  const entries = regions.flatMap(region => [
    { label: region.label, href: region.href, terms: region.english, region: region.label },
    ...region.topics.map(([label, href, terms]) => ({ label, href, terms: `${region.english} ${terms}`, region: region.label }))
  ]);
  function renderResults() {
    const words = input.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    const matches = entries.filter(entry => {
      const text = `${entry.region}${entry.label} ${entry.region} ${entry.label} ${entry.terms}`.toLocaleLowerCase();
      return words.every(word => text.includes(word));
    });
    results.replaceChildren();
    for (const entry of matches) {
      const item = document.createElement('li');
      const link = document.createElement('a');
      const name = document.createElement('strong');
      const context = document.createElement('span');
      link.href = entry.href;
      name.textContent = entry.label;
      context.textContent = entry.region;
      link.append(name, context);
      item.append(link);
      results.append(item);
    }
    status.textContent = matches.length ? `${matches.length} 個結果` : '找不到符合的地區或主題。';
  }
  input.addEventListener('input', renderResults);
  results.addEventListener('click', event => {
    if (event.target.closest('a')) dialog.close();
  });
  openButton.addEventListener('click', () => {
    input.value = '';
    renderResults();
    dialog.showModal();
    input.focus();
  });
  openButton.hidden = false;
}
