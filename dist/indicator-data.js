const sources = {
  inflation: { title: '政府統計處：表 510-60001', url: 'https://www.censtatd.gov.hk/tc/web_table.html?id=510-60001' },
  unemployment: { title: '政府統計處：表 210-06101', url: 'https://www.censtatd.gov.hk/tc/web_table.html?id=210-06101' },
  earnings: { title: '政府統計處：表 210-06319', url: 'https://www.censtatd.gov.hk/tc/web_table.html?id=210-06319' },
  trade: { title: '政府統計處：表 410-50001', url: 'https://www.censtatd.gov.hk/tc/web_table.html?id=410-50001' },
};

const checkedOn = '2026-10-18';
const observation = (period, value, unit, status, basis, source) => ({ period, value, unit, status, basis, source });
const inflation = {
  checkedOn,
  annual: [
    [2020, 0.3], [2021, 1.6], [2022, 1.9], [2023, 2.1], [2024, 1.7], [2025, 1.4],
  ].map(row => Array.isArray(row) ? observation({ year: row[0] }, row[1], '%', '表列數字', '全年平均綜合消費物價指數較上年', sources.inflation) : row),
  latestYoY: observation({ year: 2026, month: 8 }, 1.7, '%', '表列數字', '綜合消費物價指數較2025年8月', sources.inflation),
  latestIndex: observation({ year: 2026, month: 8 }, 110.8, '指數（2019年10月至2020年9月=100）', '表列數字', '2026年8月綜合消費物價指數水平', sources.inflation),
};
const unemployment = {
  checkedOn,
  rolling: [
    [1, 3, 3.7], [2, 4, 3.7], [3, 5, 3.7], [4, 6, 3.7], [5, 7, 3.7], [6, 8, 3.8],
  ].map(row => Array.isArray(row) ? observation(
    { year: 2026, startMonth: row[0], endMonth: row[1] }, row[2], '%', row[1] === 8 ? '臨時數字' : '表列數字',
    '經季節性調整；該三個月期間的失業人口佔勞動人口比例', sources.unemployment,
  ) : row),
};
const earningsBasis = '第一季每月就業收入中位數（不包括農曆年花紅／雙糧，名義金額）';
const earnings = {
  checkedOn,
  total: [
    [2021, 17700], [2022, 18000], [2023, 20000], [2024, 20000], [2025, 20000], [2026, 20900],
  ].map(row => Array.isArray(row) ? observation({ year: row[0], quarter: 1 }, row[1], '港元／月', '表列數字', `${earningsBasis}：合計`, sources.earnings) : row),
  female: observation({ year: 2026, quarter: 1 }, 18000, '港元／月', '表列數字', `${earningsBasis}：女性`, sources.earnings),
  male: observation({ year: 2026, quarter: 1 }, 25000, '港元／月', '表列數字', `${earningsBasis}：男性`, sources.earnings),
};
const trade = {
  checkedOn,
  monthly: [
    [1, 534659, 520564], [2, 472946, 408795], [3, 707484, 618401], [4, 650368, 620884],
    [5, 655377, 611198], [6, 693037, 641085], [7, 677405, 672518], [8, 739093, 667851],
  ].map(row => Array.isArray(row) ? ({
    imports: observation({ year: 2026, month: row[0] }, row[1], '百萬港元', '表列數字', '當月商品進口貨值（到岸價）', sources.trade),
    exports: observation({ year: 2026, month: row[0] }, row[2], '百萬港元', '表列數字', '當月商品整體出口貨值（離岸價）', sources.trade),
  }) : row),
  importYoY: observation({ year: 2026, month: 8 }, 60.0, '%', '表列數字', '與2025年8月比較', sources.trade),
  exportYoY: observation({ year: 2026, month: 8 }, 53.0, '%', '表列數字', '與2025年8月比較', sources.trade),
  balance: observation({ year: 2026, month: 8 }, -71243, '百萬港元', '表列數字', '2026年8月商品整體出口貨值減商品進口貨值（官方表列；分項四捨五入後相減可能相差1百萬港元）', sources.trade),
};

const domains = { inflation, unemployment, earnings, trade };
const validYear = year => Number.isInteger(year) && year > 0;
const validMonth = month => Number.isInteger(month) && month >= 1 && month <= 12;
function requirePeriod(period, kind, path) {
  if (!period || !validYear(period.year) ||
      (kind === 'month' && !validMonth(period.month)) ||
      (kind === 'quarter' && (!Number.isInteger(period.quarter) || period.quarter < 1 || period.quarter > 4)) ||
      (kind === 'rolling' && (!validMonth(period.startMonth) || !validMonth(period.endMonth) || period.endMonth - period.startMonth !== 2))) {
    throw new Error(`${path}: invalid calendar period`);
  }
}
function requireObservation(row, kind, unit, source, path) {
  requirePeriod(row?.period, kind, `${path}.period`);
  if (!Number.isFinite(row.value) || row.unit !== unit ||
      typeof row.status !== 'string' || !row.status.trim() ||
      typeof row.basis !== 'string' || !row.basis.trim() ||
      row.source?.url !== source.url || row.source?.title !== source.title) {
    throw new Error(`${path}: invalid value, unit, status, basis or official source`);
  }
}
function requireSeries(rows, kind, unit, source, path) {
  if (!Array.isArray(rows) || rows.length === 0) throw new Error(`${path}: empty series`);
  let previous = -1;
  rows.forEach((row, index) => {
    requireObservation(row, kind, unit, source, `${path}[${index}]`);
    const period = row.period;
    const order = period.year * 100 + (period.month ?? period.quarter ?? period.endMonth ?? 0);
    if (order <= previous) throw new Error(`${path}: periods must be unique and ascending`);
    previous = order;
  });
}
function validate(key, data) {
  if (data.checkedOn !== checkedOn) throw new Error(`${key}: source check date missing`);
  const source = sources[key];
  if (key === 'inflation') {
    requireSeries(data.annual, 'year', '%', source, 'inflation.annual');
    requireObservation(data.latestYoY, 'month', '%', source, 'inflation.latestYoY');
    requireObservation(data.latestIndex, 'month', '指數（2019年10月至2020年9月=100）', source, 'inflation.latestIndex');
    if (data.annual.length !== 6 || data.annual.some((row, index) => row.period.year !== 2020 + index) ||
        data.latestYoY.period.year !== 2026 || data.latestYoY.period.month !== 8 ||
        data.latestIndex.period.year !== 2026 || data.latestIndex.period.month !== 8) {
      throw new Error('inflation: incomplete annual or August series');
    }
  } else if (key === 'unemployment') {
    requireSeries(data.rolling, 'rolling', '%', source, 'unemployment.rolling');
    if (data.rolling.length !== 6 || data.rolling.some((row, index) =>
      row.period.year !== 2026 || row.period.startMonth !== index + 1 || row.period.endMonth !== index + 3)) {
      throw new Error('unemployment: incomplete rolling series');
    }
  } else if (key === 'earnings') {
    requireSeries(data.total, 'quarter', '港元／月', source, 'earnings.total');
    requireObservation(data.female, 'quarter', '港元／月', source, 'earnings.female');
    requireObservation(data.male, 'quarter', '港元／月', source, 'earnings.male');
    if (data.total.length !== 6 || data.total.some((row, index) => row.period.year !== 2021 + index || row.period.quarter !== 1) ||
        data.female.period.year !== 2026 || data.female.period.quarter !== 1 ||
        data.male.period.year !== 2026 || data.male.period.quarter !== 1) {
      throw new Error('earnings: incomplete first-quarter series');
    }
  } else if (key === 'trade') {
    requireSeries(data.monthly.map(row => row.imports), 'month', '百萬港元', source, 'trade.imports');
    requireSeries(data.monthly.map(row => row.exports), 'month', '百萬港元', source, 'trade.exports');
    requireObservation(data.importYoY, 'month', '%', source, 'trade.importYoY');
    requireObservation(data.exportYoY, 'month', '%', source, 'trade.exportYoY');
    requireObservation(data.balance, 'month', '百萬港元', source, 'trade.balance');
    data.monthly.forEach((row, index) => {
      if (row.imports.period.year !== 2026 || row.imports.period.month !== index + 1 ||
          row.exports.period.year !== 2026 || row.exports.period.month !== index + 1) {
        throw new Error(`trade.monthly[${index}]: unmatched periods`);
      }
    });
    if (data.monthly.length !== 8 || [data.importYoY, data.exportYoY, data.balance].some(row =>
      row.period.year !== 2026 || row.period.month !== 8)) {
      throw new Error('trade: incomplete monthly or August observations');
    }
  }
  return data;
}

export function getIndicator(key) {
  if (!Object.hasOwn(domains, key)) throw new Error(`Unknown indicator: ${key}`);
  return validate(key, domains[key]);
}

