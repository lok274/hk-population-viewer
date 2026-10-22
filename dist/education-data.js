const schoolYears = [2020, 2024, 2025].map(startYear => ({
  kind: 'school-year', label: `${startYear}/${String(startYear + 1).slice(2)}`, startYear,
}));
const ratioYears = Array.from({ length: 6 }, (_, index) => {
  const startYear = 2020 + index;
  return { kind: 'school-year', label: `${startYear}/${String(startYear + 1).slice(2)}`, startYear };
});
const fiscalYears = Array.from({ length: 7 }, (_, index) => {
  const startYear = 2020 + index;
  return { kind: 'fiscal-year', label: `${startYear}/${String(startYear + 1).slice(2)}`, startYear };
});
const figuresUrl = 'https://www.censtatd.gov.hk/en/data/stat_report/product/B1010006/att/B10100062026AN26B0100.pdf';
const studentSource = { title: '政府統計處《香港統計數字一覽2026年版》', url: figuresUrl, table: '表 14.1', page: '印刷第 40 頁' };
const schoolSource = { title: '教育局《2025/26學年學生人數統計》', url: 'https://www.edb.gov.hk/attachment/en/about-edb/publications-stat/figures/Enrol_2025.pdf', table: '表 1.1', page: '印刷第 11 頁' };
const attainmentSource = { ...studentSource, table: '表 14.2' };
const studentBasis = '全日制及兼讀制的一年或以上長課程；專上教育一般以該年12月底計，其他學段一般以學年開始時計';
const schoolBasis = '按註冊學校計算，不是校舍或上午／下午班數目；學年開始時的學校數目';
const attainmentScope = '15歲及以上陸上非住院人口，不限於勞動人口；最高曾就讀的正式課程，包括未完成的課程';
const attainmentBasis = '全年綜合住戶統計調查及年中人口估計；佔同年15歲及以上陸上非住院人口的百分比';
const ratioBasis = '2020/21 學年以10月中為準，其後以9月中為準；採用教育局直接公布的比例，並非由本頁其他學生人數重算';
const teacherSource = (file, row, notes) => ({ title: '教育局《教育統計數字》', url: `https://www.edb.gov.hk/attachment/en/about-edb/publication-stat/figures/${file}.xlsx`, table: `${file}.xlsx 工作表第 ${row} 行`, page: `註 ${notes}` });
const spendingSource = { title: '教育局《教育統計數字：政府教育開支》', url: 'https://www.edb.gov.hk/attachment/en/about-edb/publication-stat/figures/gov-expenditure.xlsx', page: '財政年度 4月1日至翌年3月31日' };
const budgetSource = (page, kind) => ({ title: '《2026–27年度財政預算案》', url: 'https://www.budget.gov.hk/2026/eng/pdf/e_budget_speech_2026-27.pdf', table: `附錄 B 政府${kind}`, page: `印刷第 ${page} 頁` });
const shareSource = { title: '《2026–27年度財政預算案》媒體資料', url: 'https://www.budget.gov.hk/2026/eng/pdf/2026-27_Media_Sheet.pdf', table: '附錄 3「教育」', page: '第 1 段' };
const spendingScope = '全香港政府教育開支；不包括私人及家庭自行支付的教育費用';
const spendingBasis = '當時價格；財政年度由4月1日至翌年3月31日；經常開支已包括在總額內';

function schoolSeries(id, label, values, unit, source, scope, basis, statuses = {}) {
  return {
    id, label,
    observations: values.map((value, index) => ({
      period: schoolYears[index], value, unit, status: statuses[index] || '表列數字', source, scope, basis,
    })),
  };
}

function ratioSeries(id, label, values, source, scope, revisedLatest = true) {
  return {
    id, label,
    observations: values.map((value, index) => ({
      period: ratioYears[index], value, unit: '學生／教師',
      status: revisedLatest && index === 5 ? '修訂數字' : '表列數字',
      source, scope, basis: ratioBasis,
    })),
  };
}

function expenditureSeries(label, values, row, budgetPage) {
  return values.map((value, index) => ({
    period: fiscalYears[index], value, unit: '百萬港元',
    status: index < 5 ? '實際開支' : index === 5 ? '修訂預算' : '預算',
    source: index < 6 ? { ...spendingSource, table: `工作表第 ${row} 行（${label}）` } : budgetSource(budgetPage, label),
    scope: spendingScope, basis: spendingBasis,
  }));
}

export const education = {
  version: '20261022-resources',
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
  teacherRatios: [
    ratioSeries('local-kindergarten', '本地幼稚園', [8.1, 8.0, 8.0, 8.3, 8.1, 7.9], teacherSource('kg', 15, '2、5'), '本地幼稚園（幼兒班至高班，包括幼稚園暨幼兒中心）；不包括非本地幼稚園及社署特殊幼兒中心；全日及半日制學生以半日制等值計算', false),
    ratioSeries('local-primary', '本地普通小學', [13.0, 12.5, 12.1, 12.0, 12.0, 12.0], teacherSource('pri', 14, '1、3、*'), '本地普通小學；不包括國際及特殊學校；教師包括校長及常額／合約教師，不包括臨時／代課教師'),
    ratioSeries('local-secondary', '本地普通中學（日校）', [11.2, 11.1, 10.9, 11.1, 11.4, 11.5], teacherSource('sec', 17, '2、4、*'), '本地普通中學日校；不包括國際、夜校、特殊學校及補習／職業／成人私立日間課程；教師包括校長及常額／合約教師，不包括臨時／代課教師'),
    ratioSeries('special', '特殊學校', [4.1, 4.1, 4.1, 4.2, 4.2, 4.3], teacherSource('special', 19, '2、*'), '特殊學校，不包括英基特殊學校；教師包括校長及編制內常額／合約教師，不包括以津貼／計劃聘用及臨時／代課教師'),
  ],
  expenditure: {
    total: expenditureSeries('教育開支總額', [107040, 106937, 106833, 113541, 113783, 110904, 111975], 5, 26),
    recurrent: expenditureSeries('經常開支', [97297, 97218, 97920, 103683, 105281, 101991, 102308], 8, 23),
    governmentShare: {
      period: fiscalYears[6], value: 13.3, unit: '%', status: '預算', source: shareSource,
      scope: '2026/27年度政府教育開支總額佔政府開支總額的比例；分母是政府開支，並非公共開支',
      basis: '原來預算；教育開支總額 111,975 百萬港元，政府開支總額 843,416 百萬港元',
    },
  },
};

function requireObservation(observation, unit, kind) {
  const { period, value, status, source, scope, basis } = observation;
  const allowedStatuses = kind === 'fiscal-year' ? ['實際開支', '修訂預算', '預算'] : ['表列數字', '臨時數字', '修訂數字'];
  if (!Number.isFinite(value) || value < 0 || observation.unit !== unit ||
      !allowedStatuses.includes(status) ||
      !source?.title || !source.table || !source.page ||
      !/^https:\/\/www\.(censtatd\.gov\.hk|edb\.gov\.hk|budget\.gov\.hk)\//.test(source.url) || !scope || !basis) {
    throw new Error('教育資料缺少數值、單位、狀態或官方來源');
  }
  const year = kind === 'year' ? period?.year : period?.startYear;
  const label = kind === 'year' ? String(year) : `${year}/${String(year + 1).slice(2)}`;
  if (period?.kind !== kind || !Number.isInteger(year) || year < 1900 || period.label !== label) {
    throw new Error('教育資料的期間不正確');
  }
  if ((['所', '百萬港元'].includes(unit) && !Number.isInteger(value)) || (unit === '%' && value > 100) || (unit === '學生／教師' && value <= 0)) {
    throw new Error('教育資料的數值超出單位範圍');
  }
  return year;
}
if (education.teacherRatios.length !== 4 || new Set(education.teacherRatios.map(item => item.id)).size !== 4) throw new Error('師生比例分類不完整或重複');
for (const item of education.teacherRatios) {
  if (!item.label || item.observations.length !== 6) throw new Error('師生比例缺少分類或期間');
  item.observations.forEach((row, index) => {
    if (requireObservation(row, '學生／教師', 'school-year') !== 2020 + index || row.status !== (item.id === 'local-kindergarten' || index < 5 ? '表列數字' : '修訂數字')) throw new Error('師生比例的學年或狀態不正確');
  });
}
const { total, recurrent, governmentShare } = education.expenditure;
if (total.length !== 7 || recurrent.length !== 7) throw new Error('教育開支缺少財政年度');
for (let index = 0; index < 7; index++) {
  const expectedStatus = index < 5 ? '實際開支' : index === 5 ? '修訂預算' : '預算';
  for (const row of [total[index], recurrent[index]]) {
    if (requireObservation(row, '百萬港元', 'fiscal-year') !== 2020 + index || row.status !== expectedStatus) throw new Error('教育開支的財政年度或狀態不正確');
  }
  if (recurrent[index].value > total[index].value) throw new Error('經常開支不可高於開支總額');
}
if (requireObservation(governmentShare, '%', 'fiscal-year') !== 2026 || governmentShare.status !== '預算') throw new Error('教育開支佔比的財政年度或狀態不正確');

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
