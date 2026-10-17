const yearbookUrl = 'https://www.censtatd.gov.hk/en/data/stat_report/product/B1010006/att/B10100062026AN26B0100.pdf';
const releaseUrl = 'https://www.censtatd.gov.hk/en/press_release_detail.html?id=5792&r=rss';
const residentsRevisionUrl = 'https://www.censtatd.gov.hk/en/press_release_detail.html?id=5728';

const rows = [
  {
    year: 2020,
    total: { thousands: 7481.0, status: '年報列載', source: { title: 'Hong Kong in Figures 2026 Edition', url: yearbookUrl } },
    sex: { male: 3416.5, female: 4064.5, status: '年報列載', source: { title: 'Hong Kong in Figures 2026 Edition', url: yearbookUrl } },
    age: { under15: 835.9, age15to34: 1662.5, age35to64: 3601.2, age65plus: 1381.4, status: '年報列載', source: { title: 'Hong Kong in Figures 2026 Edition', url: yearbookUrl } },
  },
  {
    year: 2024,
    total: { thousands: 7524.1, status: '年報列載', source: { title: 'Hong Kong in Figures 2026 Edition', url: yearbookUrl } },
    sex: { male: 3417.9, female: 4106.2, status: '年報列載', source: { title: 'Hong Kong in Figures 2026 Edition', url: yearbookUrl } },
    age: { under15: 750.8, age15to34: 1516.3, age35to64: 3538.1, age65plus: 1718.9, status: '年報列載', source: { title: 'Hong Kong in Figures 2026 Edition', url: yearbookUrl } },
  },
  {
    year: 2025,
    total: { thousands: 7498.9, status: '年報列載', source: { title: 'Hong Kong in Figures 2026 Edition', url: yearbookUrl } },
    sex: { male: 3400.1, female: 4098.8, status: '年報列載', source: { title: 'Hong Kong in Figures 2026 Edition', url: yearbookUrl } },
    age: { under15: 714.8, age15to34: 1474.9, age35to64: 3527.6, age65plus: 1781.6, status: '年報列載', source: { title: 'Hong Kong in Figures 2026 Edition', url: yearbookUrl } },
    residents: { usual: 7232.9, mobile: 266.0, status: '人口公告經修訂', source: { title: '政府統計處：2025 年終人口數字（內含年中修訂）', url: residentsRevisionUrl } },
  },
  {
    year: 2026,
    total: { thousands: 7518.3, status: '暫定估算', source: { title: '2026 年中人口公告', url: releaseUrl } },
    residents: { usual: 7252.8, mobile: 265.5, status: '暫定估算', source: { title: '2026 年中人口公告', url: releaseUrl } },
  },
];

function validateSlice(slice, fields, year, name, total) {
  if (!slice || typeof slice.status !== 'string' || !slice.status.trim()) {
    throw new Error(`${year} ${name}: missing data status`);
  }
  const source = slice.source;
  let url;
  try { url = new URL(source?.url); } catch { throw new Error(`${year} ${name}: invalid source URL`); }
  if (url.protocol !== 'https:' || url.hostname !== 'www.censtatd.gov.hk' || typeof source.title !== 'string' || !source.title.trim()) {
    throw new Error(`${year} ${name}: source must be an official C&SD link`);
  }
  for (const field of fields) {
    if (!Number.isFinite(slice[field]) || slice[field] < 0) throw new Error(`${year} ${name}.${field}: invalid count`);
  }
  // Counts are rounded to 0.1 thousand; 0.3 thousand covers rounding across four parts plus the total.
  if (Math.abs(fields.reduce((sum, field) => sum + slice[field], 0) - total) > 0.3) {
    throw new Error(`${year} ${name}: subtotals do not match total within 0.3 thousand`);
  }
}

function validateRecords(data) {
  if (!Array.isArray(data) || data.length === 0) throw new Error('Population data must be a non-empty array');
  let previousYear = 0;
  for (const row of data) {
    if (!Number.isInteger(row.year) || row.year <= previousYear) throw new Error('Population years must be unique and ascending');
    previousYear = row.year;
    if (!row.total || !Number.isFinite(row.total.thousands) || row.total.thousands < 0) throw new Error(`${row.year}: invalid total`);
    validateSlice(row.total, ['thousands'], row.year, 'total', row.total.thousands);
    if (row.sex) validateSlice(row.sex, ['male', 'female'], row.year, 'sex', row.total.thousands);
    if (row.age) validateSlice(row.age, ['under15', 'age15to34', 'age35to64', 'age65plus'], row.year, 'age', row.total.thousands);
    if (row.residents) validateSlice(row.residents, ['usual', 'mobile'], row.year, 'residents', row.total.thousands);
  }
  return data;
}

export const records = validateRecords(rows);
