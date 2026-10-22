const schoolYears = [2020, 2024, 2025].map(startYear => ({
  kind: 'school-year', label: `${startYear}/${String(startYear + 1).slice(2)}`, startYear,
}));
const figuresUrl = 'https://www.censtatd.gov.hk/en/data/stat_report/product/B1010006/att/B10100062026AN26B0100.pdf';
const studentSource = { title: '政府統計處《香港統計數字一覽2026年版》', url: figuresUrl, table: '表 14.1', page: '印刷第 40 頁' };
const schoolSource = { title: '教育局《2025/26學年學生人數統計》', url: 'https://www.edb.gov.hk/attachment/en/about-edb/publications-stat/figures/Enrol_2025.pdf', table: '表 1.1', page: '印刷第 11 頁' };
const attainmentSource = { ...studentSource, table: '表 14.2' };
const studentBasis = '全日制及兼讀制的一年或以上長課程；專上教育一般以該年12月底計，其他學段一般以學年開始時計';
const schoolBasis = '按註冊學校計算，不是校舍或上午／下午班數目；學年開始時的學校數目';
const attainmentScope = '15歲及以上陸上非住院人口，不限於勞動人口；最高曾就讀的正式課程，包括未完成的課程';
const attainmentBasis = '全年綜合住戶統計調查及年中人口估計；佔同年15歲及以上陸上非住院人口的百分比';

function schoolSeries(id, label, values, unit, source, scope, basis, statuses = {}) {
  return {
    id, label,
    observations: values.map((value, index) => ({
      period: schoolYears[index], value, unit, status: statuses[index] || '表列數字', source, scope, basis,
    })),
  };
}

export const education = {
  version: '20261022-education',
  checkedOn: '2026-10-22',
  students: [
    schoolSeries('pre-primary', '學前教育', [166.8, 127.7, 115.3], '千人', studentSource, '包括幼稚園及特殊幼兒中心', studentBasis),
    schoolSeries('primary', '小學教育', [368.3, 323.7, 321.7], '千人', studentSource, '包括普通小學及特殊學校的小學課程', studentBasis),
    schoolSeries('secondary', '中學教育', [343.5, 353.3, 361.4], '千人', studentSource, '包括特殊學校、中學夜校、工藝課程及應用教育文憑等課程', studentBasis, { 2: '臨時數字' }),
    schoolSeries('post-secondary', '專上教育', [305.2, 330.2, 354.7], '千人', studentSource, '包括文憑／證書、副學位、學士及研究生課程，以及與非本地院校合辦的註冊或獲豁免課程', studentBasis, { 0: '修訂數字', 2: '臨時數字' }),
  ],
  schools: [
    schoolSeries('kindergarten', '幼稚園', [1046, 980, 958], '所', schoolSource, '包括幼稚園暨幼兒中心的幼稚園班，不包括社會福利署特殊幼兒中心', schoolBasis),
    schoolSeries('ordinary-primary', '普通小學', [589, 590, 591], '所', schoolSource, '包括官立、資助、直資、國際及其他私立小學，不包括特殊學校；部分學校兼設中學', schoolBasis),
    schoolSeries('ordinary-secondary', '普通中學（日校）', [506, 512, 513], '所', schoolSource, '包括官立、資助、按額津貼、直資、國際及其他私立中學日校，不包括特殊學校；部分學校兼設小學', schoolBasis),
    schoolSeries('special', '特殊學校', [62, 63, 63], '所', schoolSource, '特殊學校數目，不代表所有有特殊教育需要學生的教育安排', schoolBasis),
  ],
  attainment: {
    rounding: 'source-rounded',
    categories: [
      { id: 'primary-below', label: '小學及以下' },
      { id: 'secondary', label: '中學' },
      { id: 'diploma-certificate', label: '專上文憑／證書' },
      { id: 'sub-degree', label: '專上副學位' },
      { id: 'degree', label: '專上學位課程' },
    ],
    periods: [
      [2020, [18.0, 47.7, 3.5, 5.5, 25.4]],
      [2024, [16.6, 47.7, 3.1, 5.7, 26.9]],
      [2025, [16.1, 47.6, 3.1, 5.7, 27.6]],
    ].map(([year, values]) => {
      const period = { kind: 'year', label: String(year), year };
      return {
        period,
        shares: values.map(value => ({
          period, value, unit: '%', status: '表列數字', source: attainmentSource,
          scope: attainmentScope, basis: attainmentBasis,
        })),
      };
    }),
  },
};

function requireObservation(observation, unit, kind) {
  const { period, value, status, source, scope, basis } = observation;
  if (!Number.isFinite(value) || value < 0 || observation.unit !== unit ||
      !['表列數字', '臨時數字', '修訂數字'].includes(status) ||
      !source?.title || !source.table || !source.page ||
      !/^https:\/\/www\.(censtatd\.gov\.hk|edb\.gov\.hk)\//.test(source.url) || !scope || !basis) {
    throw new Error('教育資料缺少數值、單位、狀態或官方來源');
  }
  const year = kind === 'school-year' ? period?.startYear : period?.year;
  const label = kind === 'school-year' ? `${year}/${String(year + 1).slice(2)}` : String(year);
  if (period?.kind !== kind || !Number.isInteger(year) || year < 1900 || period.label !== label) {
    throw new Error('教育資料的期間不正確');
  }
  if ((unit === '所' && !Number.isInteger(value)) || (unit === '%' && value > 100)) {
    throw new Error('教育資料的數值超出單位範圍');
  }
  return year;
}

for (const [series, unit] of [[education.students, '千人'], [education.schools, '所']]) {
  if (series.length !== 4 || new Set(series.map(item => item.id)).size !== series.length) throw new Error('教育分類不完整或重複');
  for (const item of series) {
    let previous = 0;
    if (!item.label || item.observations.length !== 3) throw new Error('教育系列缺少分類或期間');
    for (const observation of item.observations) {
      const year = requireObservation(observation, unit, 'school-year');
      if (year <= previous) throw new Error('學年必須遞增而且不重複');
      previous = year;
    }
  }
}
if (education.attainment.categories.length !== 5 || new Set(education.attainment.categories.map(item => item.id)).size !== 5) throw new Error('教育程度分類不完整或重複');
let previousYear = 0;
for (const { period, shares } of education.attainment.periods) {
  if (shares.length !== education.attainment.categories.length || period.year <= previousYear) throw new Error('教育程度分類或年份不正確');
  let sumTenths = 0;
  for (const share of shares) {
    if (requireObservation(share, '%', 'year') !== period.year) throw new Error('教育程度分項年份不一致');
    sumTenths += Math.round(share.value * 10);
  }
  if (Math.abs(sumTenths - 1000) > 2) throw new Error('教育程度比例總和超出四捨五入範圍');
  previousYear = period.year;
}
