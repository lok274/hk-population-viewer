const regions = [
  {
    id: 'hk', label: '香港', english: 'Hong Kong', summary: '人口、經濟、教育、行業及科技', href: './index.html#total',
    topics: [
      ['人口結構', './index.html#total', '人口 總人口 population'],
      ['年齡分布', './index.html#age', '年齡'],
      ['性別分布', './index.html#sex', '性別'],
      ['居民類別', './index.html#residents', '常住 流動'],
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
    topics: [
      ['美國經濟', './us-economy.html', '經濟'],
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
