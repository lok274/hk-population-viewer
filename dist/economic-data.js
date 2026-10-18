const growthUrl = 'https://www.censtatd.gov.hk/tc/web_table.html?id=310-30001';
const levelsUrl = 'https://www.censtatd.gov.hk/tc/web_table.html?id=310-31001';
const growthSource = { title: '政府統計處：表 310-30001', url: growthUrl };
const levelsSource = { title: '政府統計處：表 310-31001', url: levelsUrl };

function requireYear(year, path) {
  if (!Number.isInteger(year) || year < 1) throw new Error(`${path}: must be a positive integer year`);
}

function requireNumber(value, path, positive = false) {
  if (!Number.isFinite(value) || (positive && value <= 0)) {
    throw new Error(`${path}: must be ${positive ? 'a positive' : 'a finite'} number`);
  }
}

function requireText(value, path) {
  if (typeof value !== 'string' || !value.trim()) throw new Error(`${path}: must be nonblank text`);
}

function requireSlice(slice, path, field, expectedUrl, expectedUnit, positive = false) {
  if (!slice || typeof slice !== 'object') throw new Error(`${path}: missing measure`);
  requireNumber(slice[field], `${path}.${field}`, positive);
  requireText(slice.status, `${path}.status`);
  requireText(slice.source?.title, `${path}.source.title`);
  if (slice.source?.url !== expectedUrl) throw new Error(`${path}.source.url: must be the official C&SD table link`);
  if (slice.unit !== expectedUnit) throw new Error(`${path}.unit: must be ${expectedUnit}`);
}

function validateEconomy(data) {
  if (!Array.isArray(data.annualRealGrowth) || data.annualRealGrowth.length === 0) {
    throw new Error('annualRealGrowth: must be a non-empty array');
  }
  let previousYear = 0;
  data.annualRealGrowth.forEach((row, index) => {
    const path = `annualRealGrowth[${index}]`;
    requireYear(row?.year, `${path}.year`);
    if (row.year <= previousYear) throw new Error(`${path}.year: years must be unique and ascending`);
    previousYear = row.year;
    requireSlice(row, path, 'percent', growthUrl, '%');
  });

  const annual = data.annualSnapshot;
  requireYear(annual?.year, 'annualSnapshot.year');
  requireSlice(annual.currentPriceGdp, 'annualSnapshot.currentPriceGdp', 'value', levelsUrl, '百萬港元', true);
  requireSlice(annual.perCapitaGdp, 'annualSnapshot.perCapitaGdp', 'value', levelsUrl, '港元', true);

  const quarter = data.latestQuarter;
  requireYear(quarter?.year, 'latestQuarter.year');
  if (!Number.isInteger(quarter.quarter) || quarter.quarter < 1 || quarter.quarter > 4) {
    throw new Error('latestQuarter.quarter: must be an integer from 1 to 4');
  }
  requireSlice(quarter.yearOnYear, 'latestQuarter.yearOnYear', 'percent', growthUrl, '%');
  requireSlice(quarter.seasonallyAdjustedQuarterOnQuarter, 'latestQuarter.seasonallyAdjustedQuarterOnQuarter', 'percent', growthUrl, '%');
  return data;
}

export const economy = validateEconomy({
  annualRealGrowth: [
    { year: 2020, percent: -6.5, unit: '%', status: '表列數字', source: growthSource },
    { year: 2021, percent: 6.5, unit: '%', status: '表列數字', source: growthSource },
    { year: 2022, percent: -3.7, unit: '%', status: '表列數字', source: growthSource },
    { year: 2023, percent: 3.2, unit: '%', status: '表列數字', source: growthSource },
    { year: 2024, percent: 2.6, unit: '%', status: '修訂數字', source: growthSource },
    { year: 2025, percent: 3.6, unit: '%', status: '修訂數字', source: growthSource },
  ],
  annualSnapshot: {
    year: 2025,
    currentPriceGdp: { value: 3329843, unit: '百萬港元', status: '修訂數字', source: levelsSource },
    perCapitaGdp: { value: 444044, unit: '港元', status: '修訂數字', source: levelsSource },
  },
  latestQuarter: {
    year: 2026,
    quarter: 2,
    yearOnYear: { percent: 4.3, unit: '%', status: '修訂數字', source: growthSource },
    seasonallyAdjustedQuarterOnQuarter: { percent: -0.6, unit: '%', status: '修訂數字', source: growthSource },
  },
});

