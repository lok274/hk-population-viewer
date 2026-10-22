export default {
  "code": "L",
  "title": "地產",
  "checkedOn": "2026-10-22",
  "classification": {
    "intro": "包括物業發展、買賣、出租、代理及管理。",
    "models": [
      {
        "title": "發展及出售",
        "text": "取得土地、安排設計及融資，委聘承建商建造，再出售或出租。"
      },
      {
        "title": "出租物業",
        "text": "經營自置或租入物業，提供長期使用空間。"
      },
      {
        "title": "代理及管理",
        "text": "促成物業交易或提供物業管理服務。"
      }
    ],
    "readFor": "租金、物業估值變動、會計盈利和可分派收入各有定義。",
    "printedPage": 304,
    "pdfPage": 308,
    "source": {
      "id": "hsic-manual",
      "title": "香港標準行業分類 2.0 版，第三部分",
      "publisher": "政府統計處",
      "url": "https://www.statistics.gov.hk/pub/B2XX0004012008XXXXB0300.pdf",
      "publicationDate": "2009-07-17"
    }
  },
  "coverage": {
    "section": "L",
    "label": "地產",
    "status": "available",
    "groupIds": [
      "ind_ASBCRE_L",
      "ind_ASBCRE_681",
      "ind_ASBCRE_682",
      "ind_ASBCRE_6821_6829",
      "ind_ASBCRE_6822"
    ],
    "reason": "已收集表列 2024 行業收益、成本及規模資料，須依個別組別口徑。"
  },
  "sources": [
    {
      "id": "615-73031",
      "title": "Principal statistics for all companies in the real estate activities industry by industry group/class",
      "url": "https://www.censtatd.gov.hk/en/web_table.html?id=615-73031",
      "urlTc": "https://www.censtatd.gov.hk/tc/web_table.html?id=615-73031",
      "dictionaryUrl": "https://www.censtatd.gov.hk/data/en/table_615-73031_lang.json",
      "dictionaryTcUrl": "https://www.censtatd.gov.hk/data/tc/table_615-73031_lang.json",
      "apiUrl": "https://www.censtatd.gov.hk/api/post.php",
      "reportId": "B10800112024AN24",
      "reportTitle": "Key Statistics on Business Performance and Operating Characteristics of the Building, Construction and Real Estate Sectors",
      "reportUrl": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800112024AN24",
      "termsUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf",
      "rawFile": "raw/615-73031.2024.json",
      "requestFile": "raw/615-73031.request.json",
      "releaseDate": null,
      "lastModifiedDate": "2025-12-23",
      "period": "2024",
      "tableNotes": "Figures in the table may not add up to the total due to rounding.",
      "publisher": "香港政府統計處",
      "webTableHasPrintedPages": false,
      "dictionaryHeadingsWithoutData": []
    },
    {
      "id": "B10800112024AN24",
      "title": "Key Statistics on Business Performance and Operating Characteristics of the Building, Construction and Real Estate Sectors",
      "url": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800112024AN24",
      "rawFile": "raw/B10800112024AN24.report.json",
      "termsFile": "raw/B10800112024AN24.terms0.pdf",
      "termsUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf",
      "coverageSection": "Survey methodology / Survey coverage",
      "publisher": "香港政府統計處",
      "period": "2024"
    }
  ],
  "groups": [
    {
      "id": "ind_ASBCRE_L",
      "label": "地產活動業",
      "labelEn": "Real Estate Activities Industry",
      "hsicSections": [
        "L"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。HSIC 68 地產活動的表列組別；發展計劃採用毛利而非物業銷售總額。",
      "period": "2024",
      "metrics": [
        {
          "key": "developmentGrossMargin",
          "label": "地產發展計劃的毛利",
          "labelEn": "Gross margin of real estate development projects",
          "value": 30729,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real Estate Activities Industry；採用原表定義。",
          "sourceSeries": "GROSS_MAR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 30729,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 71457,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real Estate Activities Industry；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 71457,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "companies",
          "label": "公司數目",
          "labelEn": "Number of companies",
          "value": 11549,
          "unit": "Number",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real Estate Activities Industry；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 11549,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "miscellaneousOperatingExpenses",
          "label": "雜項營運開支",
          "labelEn": "Miscellaneous operating expenses",
          "value": 50123,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real Estate Activities Industry；採用原表定義。",
          "sourceSeries": "MIS_EXP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 50123,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Number of persons engaged",
          "value": 125522,
          "unit": "Number",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real Estate Activities Industry；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 125522,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "serviceAndRentalIncome",
          "label": "服務及租項收入",
          "labelEn": "Service and rental income",
          "value": 130517,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real Estate Activities Industry；採用原表定義。",
          "sourceSeries": "SERV_RENT",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 130517,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 115973,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real Estate Activities Industry；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 115973,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "otherBusinessReceipts",
          "label": "其他業務收益",
          "labelEn": "Other business receipts",
          "value": 18800,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real Estate Activities Industry；採用原表定義。",
          "sourceSeries": "BR_OTH",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 18800,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 37287,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real Estate Activities Industry；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 37287,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "materialsUtilitiesMaintenance",
          "label": "材料物料的消耗，燃料、電力及用水費用，以及維修保養服務",
          "labelEn": "Consumption of materials and supplies; fuels, electricity and water; and maintenance services",
          "value": 9897,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real Estate Activities Industry；採用原表定義。",
          "sourceSeries": "CONSUM",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 9897,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        }
      ],
      "sourceGroupingCode": "ind_ASBCRE_L",
      "parentGroupingCode": null,
      "hsicBoundary": "68",
      "sourceTables": [
        "615-73003",
        "615-73031"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800112024AN24",
      "costComponents": [
        "compensation",
        "materialsUtilitiesMaintenance",
        "miscellaneousOperatingExpenses"
      ],
      "costBreakdownCompleteForSurplus": false,
      "surplusFormula": "Total receipts - COMP - CONSUM - MIS_EXP - interest payments to finance real estate development projects = GS",
      "costLimitation": "615-73031 公布其他業務收益；選取的數值表未獨立列出發展計劃利息支付。不可把本表三個成本欄位當成完整總成本。總收益包含發展計劃毛利，並非物業銷售收入。",
      "definitionPdfPages": [
        6,
        7,
        8
      ],
      "definitionPrintedPages": null
    },
    {
      "id": "ind_ASBCRE_681",
      "label": "地產發展兼╱或租賃",
      "labelEn": "Real estate development and/or leasing",
      "hsicSections": [
        "L"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。HSIC 68 地產活動的表列組別；發展計劃採用毛利而非物業銷售總額。",
      "period": "2024",
      "metrics": [
        {
          "key": "developmentGrossMargin",
          "label": "地產發展計劃的毛利",
          "labelEn": "Gross margin of real estate development projects",
          "value": 30729,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate development and/or leasing；採用原表定義。",
          "sourceSeries": "GROSS_MAR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 30729,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 65535,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate development and/or leasing；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 65535,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "companies",
          "label": "公司數目",
          "labelEn": "Number of companies",
          "value": 7957,
          "unit": "Number",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate development and/or leasing；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 7957,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "miscellaneousOperatingExpenses",
          "label": "雜項營運開支",
          "labelEn": "Miscellaneous operating expenses",
          "value": 33012,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate development and/or leasing；採用原表定義。",
          "sourceSeries": "MIS_EXP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 33012,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Number of persons engaged",
          "value": 16611,
          "unit": "Number",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate development and/or leasing；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 16611,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "serviceAndRentalIncome",
          "label": "服務及租項收入",
          "labelEn": "Service and rental income",
          "value": 76392,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate development and/or leasing；採用原表定義。",
          "sourceSeries": "SERV_RENT",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 76392,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 83084,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate development and/or leasing；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 83084,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "otherBusinessReceipts",
          "label": "其他業務收益",
          "labelEn": "Other business receipts",
          "value": 14507,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate development and/or leasing；採用原表定義。",
          "sourceSeries": "BR_OTH",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 14507,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 7655,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate development and/or leasing；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 7655,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "materialsUtilitiesMaintenance",
          "label": "材料物料的消耗，燃料、電力及用水費用，以及維修保養服務",
          "labelEn": "Consumption of materials and supplies; fuels, electricity and water; and maintenance services",
          "value": 4145,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate development and/or leasing；採用原表定義。",
          "sourceSeries": "CONSUM",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 4145,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        }
      ],
      "sourceGroupingCode": "ind_ASBCRE_681",
      "parentGroupingCode": "ind_ASBCRE_L",
      "hsicBoundary": "681",
      "sourceTables": [
        "615-73031"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800112024AN24",
      "costComponents": [
        "compensation",
        "materialsUtilitiesMaintenance",
        "miscellaneousOperatingExpenses"
      ],
      "costBreakdownCompleteForSurplus": false,
      "surplusFormula": "Total receipts - COMP - CONSUM - MIS_EXP - interest payments to finance real estate development projects = GS",
      "costLimitation": "615-73031 公布其他業務收益；選取的數值表未獨立列出發展計劃利息支付。不可把本表三個成本欄位當成完整總成本。總收益包含發展計劃毛利，並非物業銷售收入。",
      "definitionPdfPages": [
        6,
        7,
        8
      ],
      "definitionPrintedPages": null
    },
    {
      "id": "ind_ASBCRE_682",
      "label": "按收費或以合約形式進行的地產活動",
      "labelEn": "Real estate activities on a fee or contract basis",
      "hsicSections": [
        "L"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。HSIC 68 地產活動的表列組別；發展計劃採用毛利而非物業銷售總額。",
      "period": "2024",
      "metrics": [
        {
          "key": "developmentGrossMargin",
          "label": "地產發展計劃的毛利",
          "labelEn": "Gross margin of real estate development projects",
          "value": null,
          "unit": "HK$ million",
          "status": "not-applicable",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate activities on a fee or contract basis；採用原表定義。 不適用",
          "sourceSeries": "GROSS_MAR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "-",
          "rawFigure": "",
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf",
          "statusNote": "Not applicable",
          "missingReason": "Not applicable"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 5922,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate activities on a fee or contract basis；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 5922,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "companies",
          "label": "公司數目",
          "labelEn": "Number of companies",
          "value": 3591,
          "unit": "Number",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate activities on a fee or contract basis；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 3591,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "miscellaneousOperatingExpenses",
          "label": "雜項營運開支",
          "labelEn": "Miscellaneous operating expenses",
          "value": 17111,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate activities on a fee or contract basis；採用原表定義。",
          "sourceSeries": "MIS_EXP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 17111,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Number of persons engaged",
          "value": 108911,
          "unit": "Number",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate activities on a fee or contract basis；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 108911,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "serviceAndRentalIncome",
          "label": "服務及租項收入",
          "labelEn": "Service and rental income",
          "value": 54125,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate activities on a fee or contract basis；採用原表定義。",
          "sourceSeries": "SERV_RENT",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 54125,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 32888,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate activities on a fee or contract basis；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 32888,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "otherBusinessReceipts",
          "label": "其他業務收益",
          "labelEn": "Other business receipts",
          "value": 4293,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate activities on a fee or contract basis；採用原表定義。",
          "sourceSeries": "BR_OTH",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 4293,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 29632,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate activities on a fee or contract basis；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 29632,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "materialsUtilitiesMaintenance",
          "label": "材料物料的消耗，燃料、電力及用水費用，以及維修保養服務",
          "labelEn": "Consumption of materials and supplies; fuels, electricity and water; and maintenance services",
          "value": 5752,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate activities on a fee or contract basis；採用原表定義。",
          "sourceSeries": "CONSUM",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 5752,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        }
      ],
      "sourceGroupingCode": "ind_ASBCRE_682",
      "parentGroupingCode": "ind_ASBCRE_L",
      "hsicBoundary": "682",
      "sourceTables": [
        "615-73031"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800112024AN24",
      "costComponents": [
        "compensation",
        "materialsUtilitiesMaintenance",
        "miscellaneousOperatingExpenses"
      ],
      "costBreakdownCompleteForSurplus": false,
      "surplusFormula": "Total receipts - COMP - CONSUM - MIS_EXP - interest payments to finance real estate development projects = GS",
      "costLimitation": "615-73031 公布其他業務收益；選取的數值表未獨立列出發展計劃利息支付。不可把本表三個成本欄位當成完整總成本。總收益包含發展計劃毛利，並非物業銷售收入。",
      "definitionPdfPages": [
        6,
        7,
        8
      ],
      "definitionPrintedPages": null
    },
    {
      "id": "ind_ASBCRE_6821_6829",
      "label": "地產經紀及代理以及其他地產服務",
      "labelEn": "Real estate brokerage and agency, and other real estate services not elsewhere classified",
      "hsicSections": [
        "L"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。HSIC 68 地產活動的表列組別；發展計劃採用毛利而非物業銷售總額。",
      "period": "2024",
      "metrics": [
        {
          "key": "developmentGrossMargin",
          "label": "地產發展計劃的毛利",
          "labelEn": "Gross margin of real estate development projects",
          "value": null,
          "unit": "HK$ million",
          "status": "not-applicable",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate brokerage and agency, and other real estate services not elsewhere classified；採用原表定義。 不適用",
          "sourceSeries": "GROSS_MAR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "-",
          "rawFigure": "",
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf",
          "statusNote": "Not applicable",
          "missingReason": "Not applicable"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 3647,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate brokerage and agency, and other real estate services not elsewhere classified；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 3647,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "companies",
          "label": "公司數目",
          "labelEn": "Number of companies",
          "value": 2705,
          "unit": "Number",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate brokerage and agency, and other real estate services not elsewhere classified；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 2705,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "miscellaneousOperatingExpenses",
          "label": "雜項營運開支",
          "labelEn": "Miscellaneous operating expenses",
          "value": 7473,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate brokerage and agency, and other real estate services not elsewhere classified；採用原表定義。",
          "sourceSeries": "MIS_EXP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 7473,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Number of persons engaged",
          "value": 21636,
          "unit": "Number",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate brokerage and agency, and other real estate services not elsewhere classified；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 21636,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "serviceAndRentalIncome",
          "label": "服務及租項收入",
          "labelEn": "Service and rental income",
          "value": 18590,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate brokerage and agency, and other real estate services not elsewhere classified；採用原表定義。",
          "sourceSeries": "SERV_RENT",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 18590,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 11370,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate brokerage and agency, and other real estate services not elsewhere classified；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 11370,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "otherBusinessReceipts",
          "label": "其他業務收益",
          "labelEn": "Other business receipts",
          "value": 2702,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate brokerage and agency, and other real estate services not elsewhere classified；採用原表定義。",
          "sourceSeries": "BR_OTH",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 2702,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 9942,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate brokerage and agency, and other real estate services not elsewhere classified；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 9942,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "materialsUtilitiesMaintenance",
          "label": "材料物料的消耗，燃料、電力及用水費用，以及維修保養服務",
          "labelEn": "Consumption of materials and supplies; fuels, electricity and water; and maintenance services",
          "value": 230,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate brokerage and agency, and other real estate services not elsewhere classified；採用原表定義。",
          "sourceSeries": "CONSUM",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 230,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        }
      ],
      "sourceGroupingCode": "ind_ASBCRE_6821_6829",
      "parentGroupingCode": "ind_ASBCRE_682",
      "hsicBoundary": "6821, 6829",
      "sourceTables": [
        "615-73031"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800112024AN24",
      "costComponents": [
        "compensation",
        "materialsUtilitiesMaintenance",
        "miscellaneousOperatingExpenses"
      ],
      "costBreakdownCompleteForSurplus": false,
      "surplusFormula": "Total receipts - COMP - CONSUM - MIS_EXP - interest payments to finance real estate development projects = GS",
      "costLimitation": "615-73031 公布其他業務收益；選取的數值表未獨立列出發展計劃利息支付。不可把本表三個成本欄位當成完整總成本。總收益包含發展計劃毛利，並非物業銷售收入。",
      "definitionPdfPages": [
        6,
        7,
        8
      ],
      "definitionPrintedPages": null
    },
    {
      "id": "ind_ASBCRE_6822",
      "label": "地產保養管理服務",
      "labelEn": "Real estate maintenance management",
      "hsicSections": [
        "L"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。HSIC 68 地產活動的表列組別；發展計劃採用毛利而非物業銷售總額。",
      "period": "2024",
      "metrics": [
        {
          "key": "developmentGrossMargin",
          "label": "地產發展計劃的毛利",
          "labelEn": "Gross margin of real estate development projects",
          "value": null,
          "unit": "HK$ million",
          "status": "not-applicable",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate maintenance management；採用原表定義。 不適用",
          "sourceSeries": "GROSS_MAR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "-",
          "rawFigure": "",
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf",
          "statusNote": "Not applicable",
          "missingReason": "Not applicable"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 2276,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate maintenance management；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 2276,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "companies",
          "label": "公司數目",
          "labelEn": "Number of companies",
          "value": 886,
          "unit": "Number",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate maintenance management；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 886,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "miscellaneousOperatingExpenses",
          "label": "雜項營運開支",
          "labelEn": "Miscellaneous operating expenses",
          "value": 9638,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate maintenance management；採用原表定義。",
          "sourceSeries": "MIS_EXP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 9638,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Number of persons engaged",
          "value": 87275,
          "unit": "Number",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate maintenance management；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 87275,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "serviceAndRentalIncome",
          "label": "服務及租項收入",
          "labelEn": "Service and rental income",
          "value": 35535,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate maintenance management；採用原表定義。",
          "sourceSeries": "SERV_RENT",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 35535,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 21518,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate maintenance management；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 21518,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "otherBusinessReceipts",
          "label": "其他業務收益",
          "labelEn": "Other business receipts",
          "value": 1591,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate maintenance management；採用原表定義。",
          "sourceSeries": "BR_OTH",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 1591,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 19690,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate maintenance management；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 19690,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "materialsUtilitiesMaintenance",
          "label": "材料物料的消耗，燃料、電力及用水費用，以及維修保養服務",
          "labelEn": "Consumption of materials and supplies; fuels, electricity and water; and maintenance services",
          "value": 5522,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73031",
          "table": "615-73031",
          "page": null,
          "basis": "2024 ASEA；香港；Real estate maintenance management；採用原表定義。",
          "sourceSeries": "CONSUM",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 5522,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        }
      ],
      "sourceGroupingCode": "ind_ASBCRE_6822",
      "parentGroupingCode": "ind_ASBCRE_682",
      "hsicBoundary": "6822",
      "sourceTables": [
        "615-73031"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800112024AN24",
      "costComponents": [
        "compensation",
        "materialsUtilitiesMaintenance",
        "miscellaneousOperatingExpenses"
      ],
      "costBreakdownCompleteForSurplus": false,
      "surplusFormula": "Total receipts - COMP - CONSUM - MIS_EXP - interest payments to finance real estate development projects = GS",
      "costLimitation": "615-73031 公布其他業務收益；選取的數值表未獨立列出發展計劃利息支付。不可把本表三個成本欄位當成完整總成本。總收益包含發展計劃毛利，並非物業銷售收入。",
      "definitionPdfPages": [
        6,
        7,
        8
      ],
      "definitionPrintedPages": null
    }
  ],
  "context": null,
  "gap": null,
  "cases": [
    {
      "id": "linkreit",
      "entity": "領展房地產投資信託 Link Real Estate Investment Trust",
      "hsicSections": [
        "L"
      ],
      "modelType": "持有及管理收租物業",
      "whyThisCase": "租金、物業營運收入、估值虧損和分派分開披露，可避免把樓價估值變動當成當年現金租金。",
      "geography": "香港、中國內地、澳洲、新加坡及英國等",
      "consolidationScope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
      "currency": "HKD",
      "fiscalYears": [
        {
          "label": "2023/24",
          "start": "2023-04-01",
          "end": "2024-03-31",
          "year": "2024"
        },
        {
          "label": "2024/25",
          "start": "2024-04-01",
          "end": "2025-03-31",
          "year": "2025"
        },
        {
          "label": "2025/26",
          "start": "2025-04-01",
          "end": "2026-03-31",
          "year": "2026"
        }
      ],
      "audited": true,
      "business": {
        "provides": {
          "text": "持有並管理商場、停車場及其他投資物業，向租戶及泊車用戶提供空間和管理服務。",
          "sources": [
            {
              "sourceId": "link2026strategic",
              "printedPage": "128",
              "pdfPage": 170,
              "table": null
            }
          ]
        },
        "customers": {
          "text": "商舖及辦公室租戶、停車場用戶支付租金及服務費，購物消費者主要向商戶付款。",
          "sources": [
            {
              "sourceId": "link2026strategic",
              "printedPage": "128",
              "pdfPage": 170,
              "table": null
            }
          ]
        },
        "revenueModel": {
          "text": "租約有每月基本租金及部分按租戶營業額計的租金，另收管理、冷氣及其他服務費。租戶銷售額不全屬領展收入。",
          "sources": [
            {
              "sourceId": "link2026strategic",
              "printedPage": "128",
              "pdfPage": 170,
              "table": null
            },
            {
              "sourceId": "link2026strategic",
              "printedPage": "18",
              "pdfPage": 20,
              "table": null
            }
          ]
        },
        "costs": {
          "text": "物業管理、保安清潔、人手、維修、能源及差餉等扣除後形成物業收入淨額，之後仍有公司行政和融資成本。",
          "sources": [
            {
              "sourceId": "link2026strategic",
              "printedPage": "112, 131",
              "pdfPage": 154,
              "table": null
            },
            {
              "sourceId": "link2026strategic",
              "printedPage": "131",
              "pdfPage": 173,
              "table": null
            }
          ]
        },
        "process": [
          {
            "text": "購入或持有物業，招租、訂租約及安排商戶組合。",
            "sources": [
              {
                "sourceId": "link2026strategic",
                "printedPage": "11",
                "pdfPage": 13,
                "table": null
              }
            ]
          },
          {
            "text": "收租、管理及維修物業，按年重估投資物業價值，按信託規則計算可分派收入。",
            "sources": [
              {
                "sourceId": "link2026strategic",
                "printedPage": "128",
                "pdfPage": 170,
                "table": null
              },
              {
                "sourceId": "link2026strategic",
                "printedPage": "114",
                "pdfPage": 156,
                "table": null
              }
            ]
          }
        ],
        "influences": {
          "text": "續租租金、空置率、租戶銷售、營運成本、利息及估值假設影響結果，估值變動可以沒有當期現金流。",
          "sources": [
            {
              "sourceId": "link2026strategic",
              "printedPage": "18",
              "pdfPage": 20,
              "table": null
            },
            {
              "sourceId": "link2026strategic",
              "printedPage": "128",
              "pdfPage": 170,
              "table": null
            }
          ]
        }
      },
      "metrics": [
        {
          "key": "revenue",
          "originalLabel": "Revenue",
          "label": "收入",
          "unit": "百萬港元",
          "scale": 1000000,
          "currency": "HKD",
          "basis": "經審核合併財務報表原列金額",
          "observations": [
            {
              "year": "2024",
              "value": 13578,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2025",
              "printedPage": "109",
              "pdfPage": 111,
              "table": "Consolidated income statement",
              "fiscalStart": "2023-04-01",
              "fiscalEnd": "2024-03-31"
            },
            {
              "year": "2025",
              "value": 14223,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2026strategic",
              "printedPage": "112",
              "pdfPage": 154,
              "table": "Consolidated income statement",
              "fiscalStart": "2024-04-01",
              "fiscalEnd": "2025-03-31"
            },
            {
              "year": "2026",
              "value": 13938,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2026strategic",
              "printedPage": "112",
              "pdfPage": 154,
              "table": "Consolidated income statement",
              "fiscalStart": "2025-04-01",
              "fiscalEnd": "2026-03-31"
            }
          ]
        },
        {
          "key": "netPropertyIncome",
          "originalLabel": "Net property income",
          "label": "物業收入淨額",
          "unit": "百萬港元",
          "scale": 1000000,
          "currency": "HKD",
          "basis": "收入減物業營運開支，尚未扣公司行政、融資及估值等",
          "observations": [
            {
              "year": "2024",
              "value": 10070,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2025",
              "printedPage": "109",
              "pdfPage": 111,
              "table": "Consolidated income statement",
              "fiscalStart": "2023-04-01",
              "fiscalEnd": "2024-03-31"
            },
            {
              "year": "2025",
              "value": 10619,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2026strategic",
              "printedPage": "112",
              "pdfPage": 154,
              "table": "Consolidated income statement",
              "fiscalStart": "2024-04-01",
              "fiscalEnd": "2025-03-31"
            },
            {
              "year": "2026",
              "value": 10230,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2026strategic",
              "printedPage": "112",
              "pdfPage": 154,
              "table": "Consolidated income statement",
              "fiscalStart": "2025-04-01",
              "fiscalEnd": "2026-03-31"
            }
          ]
        },
        {
          "key": "attributableProfit",
          "originalLabel": "Loss for the year, before transactions with Unitholders attributable to Unitholders",
          "label": "基金單位持有人應佔年度虧損",
          "unit": "百萬港元",
          "scale": 1000000,
          "currency": "HKD",
          "basis": "與持有人交易前的年度虧損，不包含分派",
          "observations": [
            {
              "year": "2024",
              "value": -1983,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2025",
              "printedPage": "109",
              "pdfPage": 111,
              "table": "Consolidated income statement",
              "fiscalStart": "2023-04-01",
              "fiscalEnd": "2024-03-31"
            },
            {
              "year": "2025",
              "value": -8863,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2026strategic",
              "printedPage": "112",
              "pdfPage": 154,
              "table": "Consolidated income statement",
              "fiscalStart": "2024-04-01",
              "fiscalEnd": "2025-03-31"
            },
            {
              "year": "2026",
              "value": -7397,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2026strategic",
              "printedPage": "112",
              "pdfPage": 154,
              "table": "Consolidated income statement",
              "fiscalStart": "2025-04-01",
              "fiscalEnd": "2026-03-31"
            }
          ]
        },
        {
          "key": "operatingCashFlow",
          "originalLabel": "Net cash generated from operating activities",
          "label": "經營活動現金淨流入",
          "unit": "百萬港元",
          "scale": 1000000,
          "currency": "HKD",
          "basis": "經審核合併財務報表原列金額",
          "observations": [
            {
              "year": "2024",
              "value": 8481,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2025",
              "printedPage": "114",
              "pdfPage": 116,
              "table": "Consolidated statement of cash flows",
              "fiscalStart": "2023-04-01",
              "fiscalEnd": "2024-03-31"
            },
            {
              "year": "2025",
              "value": 9013,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2026strategic",
              "printedPage": "117",
              "pdfPage": 159,
              "table": "Consolidated statement of cash flows",
              "fiscalStart": "2024-04-01",
              "fiscalEnd": "2025-03-31"
            },
            {
              "year": "2026",
              "value": 8461,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2026strategic",
              "printedPage": "117",
              "pdfPage": 159,
              "table": "Consolidated statement of cash flows",
              "fiscalStart": "2025-04-01",
              "fiscalEnd": "2026-03-31"
            }
          ]
        },
        {
          "key": "cash",
          "originalLabel": "Cash and cash equivalents",
          "label": "現金及現金等價物",
          "unit": "百萬港元",
          "scale": 1000000,
          "currency": "HKD",
          "basis": "年結日結餘，不含另列銀行存款",
          "observations": [
            {
              "year": "2024",
              "value": 7184,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2025",
              "printedPage": "112",
              "pdfPage": 114,
              "table": "Consolidated statement of financial position",
              "fiscalStart": "2023-04-01",
              "fiscalEnd": "2024-03-31"
            },
            {
              "year": "2025",
              "value": 3343,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2026strategic",
              "printedPage": "115",
              "pdfPage": 157,
              "table": "Consolidated statement of financial position",
              "fiscalStart": "2024-04-01",
              "fiscalEnd": "2025-03-31"
            },
            {
              "year": "2026",
              "value": 3664,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2026strategic",
              "printedPage": "115",
              "pdfPage": 157,
              "table": "Consolidated statement of financial position",
              "fiscalStart": "2025-04-01",
              "fiscalEnd": "2026-03-31"
            }
          ]
        },
        {
          "key": "borrowings",
          "originalLabel": "Borrowings",
          "label": "借款",
          "unit": "百萬港元",
          "scale": 1000000,
          "currency": "HKD",
          "basis": "年結日借款，不包括另列可換股債券",
          "observations": [
            {
              "year": "2024",
              "value": 55223,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2025",
              "printedPage": "112",
              "pdfPage": 114,
              "table": "Consolidated statement of financial position",
              "fiscalStart": "2023-04-01",
              "fiscalEnd": "2024-03-31"
            },
            {
              "year": "2025",
              "value": 49659,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2026strategic",
              "printedPage": "115",
              "pdfPage": 157,
              "table": "Consolidated statement of financial position",
              "fiscalStart": "2024-04-01",
              "fiscalEnd": "2025-03-31"
            },
            {
              "year": "2026",
              "value": 53029,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2026strategic",
              "printedPage": "115",
              "pdfPage": 157,
              "table": "Consolidated statement of financial position",
              "fiscalStart": "2025-04-01",
              "fiscalEnd": "2026-03-31"
            }
          ]
        },
        {
          "key": "convertibleBonds",
          "originalLabel": "Convertible bonds",
          "label": "可換股債券",
          "unit": "百萬港元",
          "scale": 1000000,
          "currency": "HKD",
          "basis": "年結日可換股債券負債，與借款分開",
          "observations": [
            {
              "year": "2024",
              "value": 4036,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2025",
              "printedPage": "112",
              "pdfPage": 114,
              "table": "Consolidated statement of financial position",
              "fiscalStart": "2023-04-01",
              "fiscalEnd": "2024-03-31"
            },
            {
              "year": "2025",
              "value": 3249,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2026strategic",
              "printedPage": "115",
              "pdfPage": 157,
              "table": "Consolidated statement of financial position",
              "fiscalStart": "2024-04-01",
              "fiscalEnd": "2025-03-31"
            },
            {
              "year": "2026",
              "value": 3262,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2026strategic",
              "printedPage": "115",
              "pdfPage": 157,
              "table": "Consolidated statement of financial position",
              "fiscalStart": "2025-04-01",
              "fiscalEnd": "2026-03-31"
            }
          ]
        },
        {
          "key": "propertyExpenses",
          "originalLabel": "Property operating expenses",
          "label": "物業營運開支",
          "unit": "百萬港元",
          "scale": 1000000,
          "currency": "HKD",
          "basis": "經審核合併財務報表原列金額",
          "observations": [
            {
              "year": "2024",
              "value": -3508,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2025",
              "printedPage": "109",
              "pdfPage": 111,
              "table": "Consolidated income statement",
              "fiscalStart": "2023-04-01",
              "fiscalEnd": "2024-03-31"
            },
            {
              "year": "2025",
              "value": -3604,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2026strategic",
              "printedPage": "112",
              "pdfPage": 154,
              "table": "Consolidated income statement",
              "fiscalStart": "2024-04-01",
              "fiscalEnd": "2025-03-31"
            },
            {
              "year": "2026",
              "value": -3708,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2026strategic",
              "printedPage": "112",
              "pdfPage": 154,
              "table": "Consolidated income statement",
              "fiscalStart": "2025-04-01",
              "fiscalEnd": "2026-03-31"
            }
          ]
        },
        {
          "key": "fairValueChange",
          "originalLabel": "Change in fair values of investment properties",
          "label": "投資物業公平值變動",
          "unit": "百萬港元",
          "scale": 1000000,
          "currency": "HKD",
          "basis": "估值變動，非當年租金或現金支出",
          "observations": [
            {
              "year": "2024",
              "value": -7361,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2025",
              "printedPage": "109",
              "pdfPage": 111,
              "table": "Consolidated income statement",
              "fiscalStart": "2023-04-01",
              "fiscalEnd": "2024-03-31"
            },
            {
              "year": "2025",
              "value": -16280,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2026strategic",
              "printedPage": "112",
              "pdfPage": 154,
              "table": "Consolidated income statement",
              "fiscalStart": "2024-04-01",
              "fiscalEnd": "2025-03-31"
            },
            {
              "year": "2026",
              "value": -14491,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2026strategic",
              "printedPage": "112",
              "pdfPage": 154,
              "table": "Consolidated income statement",
              "fiscalStart": "2025-04-01",
              "fiscalEnd": "2026-03-31"
            }
          ]
        },
        {
          "key": "distributableAmount",
          "originalLabel": "Total distributable amount",
          "label": "可分派總額",
          "unit": "百萬港元",
          "scale": 1000000,
          "currency": "HKD",
          "basis": "按信託契約調整部分非現金項目後的可分派總額，非經營現金流",
          "observations": [
            {
              "year": "2024",
              "value": 6718,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2025",
              "printedPage": "111",
              "pdfPage": 113,
              "table": "Consolidated statement of distributions",
              "fiscalStart": "2023-04-01",
              "fiscalEnd": "2024-03-31"
            },
            {
              "year": "2025",
              "value": 7025,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2026strategic",
              "printedPage": "114",
              "pdfPage": 156,
              "table": "Consolidated statement of distributions",
              "fiscalStart": "2024-04-01",
              "fiscalEnd": "2025-03-31"
            },
            {
              "year": "2026",
              "value": 6577,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
              "sourceId": "link2026strategic",
              "printedPage": "114",
              "pdfPage": 156,
              "table": "Consolidated statement of distributions",
              "fiscalStart": "2025-04-01",
              "fiscalEnd": "2026-03-31"
            }
          ]
        }
      ],
      "analysis": [
        {
          "fromYear": "2024",
          "toYear": "2025",
          "kind": "interpretation",
          "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
          "text": "2024/25年租金相關收入及物業收入淨額增加，但基金持有人應佔虧損擴大。報表的投資物業估值虧損由7,361增至16,280百萬港元，解釋為何收租和現金流增加仍可能錄得會計虧損。可分派總額另按契約調整非現金項目。",
          "sources": [
            {
              "sourceId": "link2025",
              "printedPage": "109",
              "pdfPage": 111,
              "table": null
            },
            {
              "sourceId": "link2025",
              "printedPage": "111",
              "pdfPage": 113,
              "table": null
            },
            {
              "sourceId": "link2025",
              "printedPage": "114",
              "pdfPage": 116,
              "table": null
            }
          ]
        },
        {
          "fromYear": "2025",
          "toYear": "2026",
          "kind": "interpretation",
          "scope": "領展房地產投資信託合併集團，包含香港、中國內地及海外物業。",
          "text": "2025/26年收入、物業收入淨額及經營現金流均下降，估值虧損減少，故會計虧損反而收窄。香港零售租金及續租租金下降可在營運表看到，不能因虧損收窄就判斷租務改善。",
          "sources": [
            {
              "sourceId": "link2026strategic",
              "printedPage": "18",
              "pdfPage": 20,
              "table": null
            },
            {
              "sourceId": "link2026strategic",
              "printedPage": "112",
              "pdfPage": 154,
              "table": null
            },
            {
              "sourceId": "link2026strategic",
              "printedPage": "117",
              "pdfPage": 159,
              "table": null
            }
          ]
        }
      ],
      "limits": [
        "跨地域的合併數字，不能稱為香港租金市場總數。",
        "物業收入淨額不是最後淨利，可分派總額不是經營現金流。",
        "借款與可換股債券分開呈列，勿把借款一欄當成全部利息負債。",
        "只示範收租物業信託，不代表地產發展商或代理業。"
      ],
      "retrievedAt": "2026-10-22",
      "sources": [
        {
          "id": "link2026strategic",
          "title": "Link REIT Annual Report 2025/2026, combined strategic and financial report",
          "url": "https://www.linkreit.com/-/media/linkreit/investor-relations/financial-reports-and-presentations/financial-report/2026/fy2526-annual-report_strategic-report.pdf?rev=eda60db51e3f4ba6837b172614824f78",
          "publicationDate": "2026-06-11"
        },
        {
          "id": "link2025",
          "title": "Link REIT Annual Report 2024/2025, Governance, Disclosures and Financial Statements",
          "url": "https://www.linkreit.com/-/media/linkreit/investor-relations/financial-reports-and-presentations/financial-report/2025/annual-report-2425-e-book-2.pdf",
          "publicationDate": null
        }
      ]
    }
  ]
};
