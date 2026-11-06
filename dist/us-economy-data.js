import snapshot from './us-economy-snapshot.js';

const topics = {
  output: {
    gdpNominal: ['年度現價 GDP', 'annual', '百萬美元', '年度總量', '現價', '全年', 'gdpAnnual', 'NIPA 1.1.5／A191RC', 0, 0, 100_000_000],
    gdpAnnual: ['年度實質 GDP 增長', 'annual', '%', '年度總量', '實質', '與上年全年比較', 'gdpAnnual', 'NIPA 1.1.1／A191RL', 0, -100, 100],
    gdpQuarter: ['季度實質 GDP 增長', 'quarterly', '%', '經季節性調整', '實質', '按季變動，年率化', 'gdpQuarter', 'NIPA 1.1.1／A191RL', 0, -100, 100],
  },
  prices: {
    cpi: ['整體 CPI-U', 'monthly', '指數（1982–84 = 100）', '未經季節性調整', '城市消費者物價', '月度指數', 'cpi', 'CUUR0000SA0', 12, 1, 1_000],
    coreCpi: ['核心 CPI-U', 'monthly', '指數（1982–84 = 100）', '未經季節性調整', '城市消費者物價（不計食品和能源）', '月度指數', 'cpi', 'CUUR0000SA0L1E', 12, 1, 1_000],
    pcePrices: ['整體 PCE 物價', 'monthly', '指數（2017 = 100）', '經季節性調整', '個人消費開支鏈式物價指數', '月度指數', 'income', 'NIPA 2.8.4／DPCERG', 12, 1, 1_000],
    corePcePrices: ['核心 PCE 物價', 'monthly', '指數（2017 = 100）', '經季節性調整', '個人消費開支鏈式物價指數（不計食品和能源）', '月度指數', 'income', 'NIPA 2.8.4／DPCCRG', 12, 1, 1_000],
  },
  labour: {
    unemployment: ['失業率 U-3', 'monthly', '%', '經季節性調整', '不適用', '失業人口佔勞動人口比例', 'employment', 'LNS14000000', 0, 0, 100],
    participation: ['勞動人口參與率', 'monthly', '%', '經季節性調整', '不適用', '勞動人口佔 16 歲及以上非機構平民人口比例', 'employment', 'LNS11300000', 0, 0, 100],
    payroll: ['非農就業職位', 'monthly', '千個職位', '經季節性調整', '不適用', '月度職位水平', 'employment', 'CES0000000001', 1, 0, 500_000],
    earnings: ['私營非農平均時薪', 'monthly', '美元／小時', '經季節性調整', '名義工資', '所有私營非農僱員的月度平均時薪', 'employment', 'CES0500000003', 12, 0.01, 1_000],
  },
  households: {
    consumption: ['實質個人消費開支', 'monthly', '百萬鏈式美元（2017 年）', '經季節性調整', '實質，2017 年鏈式美元', '月度水平，按年率表示', 'income', 'NIPA 2.8.6／DPCERX', 0, 0, 100_000_000],
    disposableIncome: ['實質可支配個人收入', 'monthly', '百萬鏈式美元（2017 年）', '經季節性調整', '實質，2017 年鏈式美元', '月度水平，按年率表示', 'income', 'NIPA 2.6／A067RX', 0, 0, 100_000_000],
    saving: ['個人儲蓄率', 'monthly', '%', '經季節性調整', '不適用', '個人儲蓄佔可支配個人收入比例', 'income', 'NIPA 2.6／A072RC', 0, -100, 100],
  },
  retail: {
    retailSales: ['零售及餐飲服務銷售', 'monthly', '百萬美元', '經季節性調整', '現價', '當月銷售額', 'retail', 'MRTS／MARTS 44X72、SM', 0, 0, 5_000_000],
  },
  housing: {
    starts: ['私人住宅動工', 'monthly', '千個單位／年', '經季節性調整', '不適用', '月度估算，按年率表示', 'housing', 'NRC Starts／美國總數', 0, 0, 10_000],
    permits: ['私人住宅建築許可', 'monthly', '千個單位／年', '經季節性調整', '不適用', '月度估算，按年率表示', 'housing', 'NRC Permits／美國總數', 0, 0, 10_000],
  },
  trade: {
    exports: ['商品及服務出口', 'monthly', '百萬美元', '經季節性調整', '現價，國際收支基礎', '當月貨值及服務金額', 'trade', 'FT900 Exhibit 1／Exports', 0, 0, 2_000_000],
    imports: ['商品及服務進口', 'monthly', '百萬美元', '經季節性調整', '現價，國際收支基礎', '當月貨值及服務金額', 'trade', 'FT900 Exhibit 1／Imports', 0, 0, 2_000_000],
    tradeBalance: ['官方貿易差額', 'monthly', '百萬美元', '經季節性調整', '現價，國際收支基礎', '官方公布的當月出口減進口', 'trade', 'FT900 Exhibit 1／Balance', 0, -2_000_000, 2_000_000],
  },
  rates: {
    targetLow: ['聯邦基金目標下限', 'effective', '%', '不適用', '不適用', 'FOMC 政策設定，按年報價', 'policy', 'FOMC／目標下限', 0, 0, 30],
    targetHigh: ['聯邦基金目標上限', 'effective', '%', '不適用', '不適用', 'FOMC 政策設定，按年報價', 'policy', 'FOMC／目標上限', 0, 0, 30],
    yield2: ['兩年期美國國債收益率', 'monthly', '%', '不適用', '名義收益率', '固定到期收益率月平均，按年報價', 'yields', 'H.15／RIFLGFCY02_N.M', 0, -10, 30],
    yield10: ['十年期美國國債收益率', 'monthly', '%', '不適用', '名義收益率', '固定到期收益率月平均，按年報價', 'yields', 'H.15／RIFLGFCY10_N.M', 0, -10, 30],
  },
  production: {
    industry: ['工業生產', 'monthly', '指數（2017 = 100）', '經季節性調整', '實質產量', '月度指數', 'industry', 'G.17／IP.B50001.S', 0, 1, 1_000],
    utilization: ['工業產能使用率', 'monthly', '%', '經季節性調整', '不適用', '實際工業產量佔估計產能比例', 'industry', 'G.17／CAPUTL.B50001.S', 0, 0, 100],
    productivity: ['非農商業勞動生產力增長', 'quarterly', '%', '經季節性調整', '實質產出／工時', '按季變動，年率化', 'productivity', 'PRS85006092', 0, -100, 100],
  },
  fiscal: {
    receipts: ['聯邦政府收入', 'fiscal', '美元', '年度總量', '現價', '財政年度現金收入', 'budget', 'MTS 表 1／Receipts', 0, 0, 100_000_000_000_000],
    outlays: ['聯邦政府支出', 'fiscal', '美元', '年度總量', '現價', '財政年度現金支出', 'budget', 'MTS 表 1／Outlays', 0, 0, 100_000_000_000_000],
    fiscalBalance: ['聯邦政府盈餘或赤字', 'fiscal', '美元', '年度總量', '現價', '官方赤字／盈餘轉為盈餘正數、赤字負數', 'budget', 'MTS 表 1／Deficit or Surplus', 0, -100_000_000_000_000, 100_000_000_000_000],
    publicDebt: ['財年末公眾持有債務', 'fiscal', '美元', '不適用', '現價', '財年末或之前最後有資料的一天', 'debt', 'debt_held_public_amt', 0, 0, 100_000_000_000_000],
    totalDebt: ['財年末總公共債務', 'fiscal', '美元', '不適用', '現價', '財年末或之前最後有資料的一天', 'debt', 'tot_pub_debt_out_amt', 0, 0, 100_000_000_000_000],
    publicDebtDaily: ['每日公眾持有債務', 'daily', '美元', '不適用', '現價', '最新已公布的工作日結餘', 'debt', 'debt_held_public_amt', 0, 0, 100_000_000_000_000],
    totalDebtDaily: ['每日總公共債務', 'daily', '美元', '不適用', '現價', '最新已公布的工作日結餘', 'debt', 'tot_pub_debt_out_amt', 0, 0, 100_000_000_000_000],
  },
};

const sources = {
  gdpAnnual: ['BEA', 'https://www.bea.gov/data/gdp/gross-domestic-product', 'https://apps.bea.gov/national/Release/TXT/NipaDataA.txt'],
  gdpQuarter: ['BEA', 'https://www.bea.gov/data/gdp/gross-domestic-product', 'https://apps.bea.gov/national/Release/TXT/NipaDataQ.txt'],
  income: ['BEA', 'https://www.bea.gov/data/income-saving/personal-income', 'https://apps.bea.gov/national/Release/TXT/NipaDataM.txt'],
  cpi: ['BLS', 'https://www.bls.gov/news.release/cpi.nr0.htm'],
  employment: ['BLS', 'https://www.bls.gov/news.release/empsit.nr0.htm'],
  productivity: ['BLS', 'https://www.bls.gov/news.release/prod2.nr0.htm'],
  retail: ['Census', 'https://www.census.gov/retail/index.html', 'https://www.census.gov/econ_getzippedfile/?programCode=MRTS', 'https://www.census.gov/econ_getzippedfile/?programCode=MARTS'],
  housing: ['Census', 'https://www.census.gov/construction/nrc/data/series.html'],
  trade: ['Census／BEA', 'https://www.bea.gov/data/intl-trade-investment/international-trade-goods-and-services', 'https://www.census.gov/foreign-trade/statistics/historical/exhibit_history.xlsx'],
  policy: ['Federal Reserve', 'https://www.federalreserve.gov/monetarypolicy/openmarket.htm'],
  yields: ['Federal Reserve', 'https://www.federalreserve.gov/releases/h15/', 'https://www.federalreserve.gov/releases/h15/data/FRB_h15_xml.zip'],
  industry: ['Federal Reserve', 'https://www.federalreserve.gov/releases/g17/current/default.htm', 'https://www.federalreserve.gov/releases/g17/data/FRB_g17_xml.zip'],
  budget: ['Treasury', 'https://fiscaldata.treasury.gov/datasets/monthly-treasury-statement/', 'https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/mts/mts_table_1'],
  debt: ['Treasury', 'https://fiscaldata.treasury.gov/datasets/debt-to-the-penny/', 'https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny'],
};

const missingSources = {
  cpi: 'https://www.bls.gov/cpi/additional-resources/2025-federal-government-shutdown-impact-cpi-faq.htm',
  unemployment: 'https://www.bls.gov/cps/methods/2025-federal-government-shutdown-impact-cps.htm',
};

const statuses = new Set(['published', 'estimate', 'advance', 'preliminary', 'revised', 'effective', 'asOf', 'shutdown']);
const displayCounts = {annual: 10, fiscal: 10, quarterly: 40, monthly: 60, daily: 1};
const agencyHosts = {
  BEA: ['bea.gov'],
  BLS: ['bls.gov'],
  Census: ['census.gov'],
  'Census／BEA': ['census.gov', 'bea.gov'],
  'Federal Reserve': ['federalreserve.gov'],
  Treasury: ['treasury.gov'],
};

function officialUrl(value, agency) {
  const url = new URL(value);
  return url.protocol === 'https:' && !url.username && !url.password && !url.port
    && agencyHosts[agency]?.some(host => url.hostname === host || url.hostname.endsWith('.' + host));
}

function isDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const time = Date.parse(value);
  return Number.isFinite(time) && new Date(time).toISOString().slice(0, 10) === value;
}

function ordinal(period, frequency) {
  if (typeof period !== 'string') return NaN;
  if (frequency === 'effective' || frequency === 'daily') return isDate(period) ? Date.parse(period) : NaN;
  if (frequency === 'monthly' && /^\d{4}-(0[1-9]|1[0-2])$/.test(period)) {
    return Number(period.slice(0, 4)) * 12 + Number(period.slice(5));
  }
  if (frequency === 'quarterly' && /^\d{4}-Q[1-4]$/.test(period)) {
    return Number(period.slice(0, 4)) * 4 + Number(period.slice(-1));
  }
  if ((frequency === 'annual' || frequency === 'fiscal') && /^\d{4}$/.test(period)) return Number(period);
  return NaN;
}

function seriesSource(id, sourceId, code) {
  const [agency, url, download] = sources[sourceId];
  const dataUrl = sourceId === 'housing'
    ? 'https://www.census.gov/construction/nrc/xls/' + id + '_cust.xlsx'
    : sourceId === 'cpi' || sourceId === 'employment' || sourceId === 'productivity'
      ? 'https://data.bls.gov/timeseries/' + code
      : download ?? url;
  const advanceUrl = id === 'retailSales' ? sources.retail[3] : undefined;
  return {agency, code, url, dataUrl, advanceUrl};
}

function readSeries(id, definition, data) {
  const [labelZh, frequency, unit, seasonalAdjustment, priceBasis, annualization, sourceId, code, context, min, max] = definition;
  const source = seriesSource(id, sourceId, code);
  const {agency, url, dataUrl} = source;
  const rows = data.rowsBySeries[id];
  const count = displayCounts[frequency];
  const fixed = count !== undefined;
  if (![labelZh, unit, seasonalAdjustment, priceBasis, annualization, code].every(value => typeof value === 'string' && value.trim())
    || !officialUrl(url, agency) || !officialUrl(dataUrl, agency)
    || !Array.isArray(rows) || !Number.isFinite(min) || !Number.isFinite(max) || min >= max
    || !Number.isInteger(context) || context < 0
    || (fixed ? rows.length !== count + context : frequency !== 'effective' || rows.length < 2 || context !== 0)) {
    throw new Error('Invalid U.S. series metadata: ' + id);
  }

  let previous;
  const periodLimit = frequency === 'quarterly'
    ? data.cutoffAt.slice(0, 4) + '-Q' + Math.ceil(Number(data.cutoffAt.slice(5, 7)) / 3)
    : data.cutoffAt.slice(0, {annual: 4, fiscal: 4, monthly: 7}[frequency] ?? 10);
  const observations = rows.map(row => {
    if (!Array.isArray(row) || row.length < 2 || row.length > 6) throw new Error('Invalid row: ' + id);
    const [period, value, status = 'published', releaseDate = null, asOf = null, provider = null] = row;
    const position = ordinal(period, frequency);
    const missing = status === 'shutdown';
    const expectedGap = period === '2025-10' && ['cpi', 'coreCpi', 'unemployment', 'participation'].includes(id);
    const missingUrl = id === 'cpi' || id === 'coreCpi' ? missingSources.cpi : missingSources.unemployment;
    if (!Number.isFinite(position) || period > periodLimit || (previous !== undefined && (position <= previous || (fixed && position !== previous + 1)))
      || !statuses.has(status) || missing !== expectedGap
      || (missing ? value !== null || !officialUrl(missingUrl, agency) : !Number.isFinite(value) || value < min || value > max)
      || (releaseDate !== null && (!isDate(releaseDate) || releaseDate > data.cutoffAt))
      || (asOf !== null && (!isDate(asOf) || frequency !== 'fiscal' || !asOf.startsWith(period + '-09-') || asOf > data.cutoffAt))
      || (provider !== null && (id !== 'retailSales' || provider !== 'MARTS' || !['advance', 'revised'].includes(status)))
      || (id === 'retailSales' && status === 'advance' && provider !== 'MARTS')) {
      throw new Error('Invalid U.S. observation: ' + id + ' ' + period);
    }
    previous = position;
    const sourceUrl = missing ? missingUrl
      : provider === 'MARTS'
        ? sources.retail[3]
        : dataUrl;
    return {period, value, status, releaseDate, missingReason: missing ? '2025 年聯邦政府撥款中斷，BLS 沒有這個月的數字。' : null, asOf, sourceUrl};
  });

  return {
    id, labelZh, geography: '美國全國', frequency, unit, seasonalAdjustment, priceBasis, annualization,
    source: {...source, retrievedAt: data.checkedAt}, observations, context,
  };
}

export function getSnapshotMeta() {
  return {checkedAt: snapshot.checkedAt, cutoffAt: snapshot.cutoffAt};
}

function readTopic(id, data) {
  if (!Object.hasOwn(topics, id)) throw new Error('Unknown U.S. topic: ' + id);
  const series = Object.fromEntries(Object.entries(topics[id]).map(([key, definition]) => [key, readSeries(key, definition, data)]));
  if (id === 'rates') {
    const lows = series.targetLow.observations;
    const highs = series.targetHigh.observations;
    const start = (Number(data.cutoffAt.slice(0, 4)) - 5) + data.cutoffAt.slice(4).replace('-02-29', '-02-28');
    const startIndex = lows.findLastIndex(row => row.period <= start);
    if (lows.length !== highs.length || startIndex === -1
      || lows.some((low, index) => low.period !== highs[index].period || low.value > highs[index].value || low.period > data.cutoffAt)) {
      throw new Error('Invalid federal funds target history');
    }
    series.targetLow.windowStart = start;
    series.targetLow.observations = lows.slice(startIndex);
    series.targetHigh.observations = highs.slice(startIndex);
  }
  return {id, series};
}

export function getTopic(id) {
  return readTopic(id, snapshot);
}

export function getUpdateSpecs() {
  return Object.fromEntries(Object.values(topics).flatMap(topic => Object.entries(topic).map(([id, definition]) => {
    const [, frequency, , , , , sourceId, code, context] = definition;
    return [id, {frequency, count: displayCounts[frequency] ?? null, context, sourceId, ...seriesSource(id, sourceId, code)}];
  })));
}

export function validateSnapshot(data) {
  if (!isDate(data.checkedAt) || !isDate(data.cutoffAt) || data.cutoffAt > data.checkedAt) {
    throw new Error('Invalid U.S. snapshot dates');
  }
  const keys = Object.keys(getUpdateSpecs());
  if (Object.keys(data.rowsBySeries).length !== keys.length || keys.some(id => !Object.hasOwn(data.rowsBySeries, id))) {
    throw new Error('U.S. snapshot must contain every reviewed series');
  }
  for (const id of Object.keys(topics)) readTopic(id, data);
}
