export default {
  "code": "C",
  "title": "製造",
  "checkedOn": "2026-10-22",
  "classification": {
    "intro": "把原材料或零件加工成新產品，也包括部分工業設備維修。",
    "models": [
      {
        "title": "生產產品",
        "text": "可自行加工，也可委託其他生產單位加工。"
      }
    ],
    "readFor": "收入扣除生產成本所得的毛利，仍未扣齊其他費用。",
    "printedPage": 87,
    "pdfPage": 91,
    "source": {
      "id": "hsic-manual",
      "title": "香港標準行業分類 2.0 版，第三部分",
      "publisher": "政府統計處",
      "url": "https://www.statistics.gov.hk/pub/B2XX0004012008XXXXB0300.pdf",
      "publicationDate": "2009-07-17"
    }
  },
  "coverage": {
    "section": "C",
    "label": "製造",
    "status": "available",
    "groupIds": [
      "ind_ASIP_10_11_12",
      "ind_ASIP_13_14",
      "ind_ASIP_15_16_31_32",
      "ind_ASIP_17_18",
      "ind_ASIP_19_20_21_22_23",
      "ind_ASIP_24_25_28_29_30_33",
      "ind_ASIP_26_27",
      "ind_ASIP_C"
    ],
    "reason": "已收集表列 2024 行業收益、成本及規模資料，須依個別組別口徑。"
  },
  "sources": [
    {
      "id": "610-72001",
      "title": "Principal statistics for all companies in the manufacturing, energy supply and waste management sectors",
      "url": "https://www.censtatd.gov.hk/en/web_table.html?id=610-72001",
      "urlTc": "https://www.censtatd.gov.hk/tc/web_table.html?id=610-72001",
      "dictionaryUrl": "https://www.censtatd.gov.hk/data/en/table_610-72001_lang.json",
      "dictionaryTcUrl": "https://www.censtatd.gov.hk/data/tc/table_610-72001_lang.json",
      "apiUrl": "https://www.censtatd.gov.hk/api/post.php",
      "reportId": "B10800122024AN24",
      "reportTitle": "Key Statistics on Business Performance and Operating Characteristics of the Manufacturing, Energy Supply and Waste Management Sectors",
      "reportUrl": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800122024AN24",
      "termsUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf",
      "rawFile": "raw/610-72001.2024.json",
      "requestFile": "raw/610-72001.request.json",
      "releaseDate": null,
      "lastModifiedDate": "2025-11-27",
      "period": "2024",
      "tableNotes": "Figures in the table may not add up to the total due to rounding.",
      "publisher": "香港政府統計處",
      "webTableHasPrintedPages": false,
      "dictionaryHeadingsWithoutData": []
    },
    {
      "id": "B10800122024AN24",
      "title": "Key Statistics on Business Performance and Operating Characteristics of the Manufacturing, Energy Supply and Waste Management Sectors",
      "url": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800122024AN24",
      "rawFile": "raw/B10800122024AN24.report.json",
      "termsFile": "raw/B10800122024AN24.terms0.pdf",
      "termsUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf",
      "coverageSection": "Survey methodology / Survey coverage",
      "publisher": "香港政府統計處",
      "period": "2024"
    }
  ],
  "groups": [
    {
      "id": "ind_ASIP_10_11_12",
      "label": "食品、飲品及煙草製品",
      "labelEn": "Food, beverages and tobacco",
      "hsicSections": [
        "C"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。製造業、電力及燃氣供應，或污水、廢棄物管理及污染防治的表列組別。E 組的公布名稱未包括自來水供應，不能當成完整 HSIC E。",
      "period": "2024",
      "metrics": [
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 8478,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Food, beverages and tobacco；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 8478,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 5950,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Food, beverages and tobacco；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 5950,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "companies",
          "label": "公司",
          "labelEn": "Companies",
          "value": 1342,
          "unit": "Number",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Food, beverages and tobacco；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 1342,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "operatingExpenses",
          "label": "營運開支",
          "labelEn": "Operating expenses",
          "value": 32545,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Food, beverages and tobacco；採用原表定義。",
          "sourceSeries": "OE",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 32545,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Persons engaged",
          "value": 32042,
          "unit": "Number",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Food, beverages and tobacco；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 32042,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 13095,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Food, beverages and tobacco；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 13095,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "totalReceipts",
          "label": "總收益",
          "labelEn": "Total receipts",
          "value": 46973,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Food, beverages and tobacco；採用原表定義。",
          "sourceSeries": "TR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 46973,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        }
      ],
      "sourceGroupingCode": "ind_ASIP_10_11_12",
      "parentGroupingCode": "ind_ASIP_C",
      "hsicBoundary": "10-12",
      "sourceTables": [
        "610-72001"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800122024AN24",
      "costComponents": [
        "compensation",
        "operatingExpenses"
      ],
      "costBreakdownCompleteForSurplus": true,
      "surplusFormula": "TR - COMP - OE = GS",
      "definitionPdfPages": [
        2,
        3
      ],
      "definitionPrintedPages": null
    },
    {
      "id": "ind_ASIP_13_14",
      "label": "紡織製品及成衣",
      "labelEn": "Textiles and wearing apparel",
      "hsicSections": [
        "C"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。製造業、電力及燃氣供應，或污水、廢棄物管理及污染防治的表列組別。E 組的公布名稱未包括自來水供應，不能當成完整 HSIC E。",
      "period": "2024",
      "metrics": [
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 648,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Textiles and wearing apparel；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 648,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 492,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Textiles and wearing apparel；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 492,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "companies",
          "label": "公司",
          "labelEn": "Companies",
          "value": 480,
          "unit": "Number",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Textiles and wearing apparel；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 480,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "operatingExpenses",
          "label": "營運開支",
          "labelEn": "Operating expenses",
          "value": 1847,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Textiles and wearing apparel；採用原表定義。",
          "sourceSeries": "OE",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 1847,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Persons engaged",
          "value": 3101,
          "unit": "Number",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Textiles and wearing apparel；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 3101,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 1131,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Textiles and wearing apparel；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 1131,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "totalReceipts",
          "label": "總收益",
          "labelEn": "Total receipts",
          "value": 2988,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Textiles and wearing apparel；採用原表定義。",
          "sourceSeries": "TR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 2988,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        }
      ],
      "sourceGroupingCode": "ind_ASIP_13_14",
      "parentGroupingCode": "ind_ASIP_C",
      "hsicBoundary": "13-14",
      "sourceTables": [
        "610-72001"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800122024AN24",
      "costComponents": [
        "compensation",
        "operatingExpenses"
      ],
      "costBreakdownCompleteForSurplus": true,
      "surplusFormula": "TR - COMP - OE = GS",
      "definitionPdfPages": [
        2,
        3
      ],
      "definitionPrintedPages": null
    },
    {
      "id": "ind_ASIP_15_16_31_32",
      "label": "其他製造行業",
      "labelEn": "Other manufacturing industries",
      "hsicSections": [
        "C"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。製造業、電力及燃氣供應，或污水、廢棄物管理及污染防治的表列組別。E 組的公布名稱未包括自來水供應，不能當成完整 HSIC E。",
      "period": "2024",
      "metrics": [
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 1166,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Other manufacturing industries；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 1166,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 268,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Other manufacturing industries；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 268,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "companies",
          "label": "公司",
          "labelEn": "Companies",
          "value": 948,
          "unit": "Number",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Other manufacturing industries；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 948,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "operatingExpenses",
          "label": "營運開支",
          "labelEn": "Operating expenses",
          "value": 4073,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Other manufacturing industries；採用原表定義。",
          "sourceSeries": "OE",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 4073,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Persons engaged",
          "value": 4780,
          "unit": "Number",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Other manufacturing industries；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 4780,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 1469,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Other manufacturing industries；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 1469,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "totalReceipts",
          "label": "總收益",
          "labelEn": "Total receipts",
          "value": 5507,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Other manufacturing industries；採用原表定義。",
          "sourceSeries": "TR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 5507,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        }
      ],
      "sourceGroupingCode": "ind_ASIP_15_16_31_32",
      "parentGroupingCode": "ind_ASIP_C",
      "hsicBoundary": "15, 16, 31, 32",
      "sourceTables": [
        "610-72001"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800122024AN24",
      "costComponents": [
        "compensation",
        "operatingExpenses"
      ],
      "costBreakdownCompleteForSurplus": true,
      "surplusFormula": "TR - COMP - OE = GS",
      "definitionPdfPages": [
        2,
        3
      ],
      "definitionPrintedPages": null
    },
    {
      "id": "ind_ASIP_17_18",
      "label": "紙製品、印刷及已儲錄資料媒體的複製",
      "labelEn": "Paper products, printing and reproduction of recorded media",
      "hsicSections": [
        "C"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。製造業、電力及燃氣供應，或污水、廢棄物管理及污染防治的表列組別。E 組的公布名稱未包括自來水供應，不能當成完整 HSIC E。",
      "period": "2024",
      "metrics": [
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 2453,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Paper products, printing and reproduction of recorded media；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 2453,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 1159,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Paper products, printing and reproduction of recorded media；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 1159,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "companies",
          "label": "公司",
          "labelEn": "Companies",
          "value": 1458,
          "unit": "Number",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Paper products, printing and reproduction of recorded media；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 1458,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "operatingExpenses",
          "label": "營運開支",
          "labelEn": "Operating expenses",
          "value": 6909,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Paper products, printing and reproduction of recorded media；採用原表定義。",
          "sourceSeries": "OE",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 6909,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Persons engaged",
          "value": 9564,
          "unit": "Number",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Paper products, printing and reproduction of recorded media；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 9564,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 3579,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Paper products, printing and reproduction of recorded media；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 3579,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "totalReceipts",
          "label": "總收益",
          "labelEn": "Total receipts",
          "value": 10521,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Paper products, printing and reproduction of recorded media；採用原表定義。",
          "sourceSeries": "TR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 10521,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        }
      ],
      "sourceGroupingCode": "ind_ASIP_17_18",
      "parentGroupingCode": "ind_ASIP_C",
      "hsicBoundary": "17-18",
      "sourceTables": [
        "610-72001"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800122024AN24",
      "costComponents": [
        "compensation",
        "operatingExpenses"
      ],
      "costBreakdownCompleteForSurplus": true,
      "surplusFormula": "TR - COMP - OE = GS",
      "definitionPdfPages": [
        2,
        3
      ],
      "definitionPrintedPages": null
    },
    {
      "id": "ind_ASIP_19_20_21_22_23",
      "label": "化學、橡膠、塑膠及非金屬礦產製品",
      "labelEn": "Chemicals, rubber, plastics and non-metallic mineral products",
      "hsicSections": [
        "C"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。製造業、電力及燃氣供應，或污水、廢棄物管理及污染防治的表列組別。E 組的公布名稱未包括自來水供應，不能當成完整 HSIC E。",
      "period": "2024",
      "metrics": [
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 2849,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Chemicals, rubber, plastics and non-metallic mineral products；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 2849,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 4391,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Chemicals, rubber, plastics and non-metallic mineral products；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 4391,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "companies",
          "label": "公司",
          "labelEn": "Companies",
          "value": 569,
          "unit": "Number",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Chemicals, rubber, plastics and non-metallic mineral products；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 569,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "operatingExpenses",
          "label": "營運開支",
          "labelEn": "Operating expenses",
          "value": 22190,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Chemicals, rubber, plastics and non-metallic mineral products；採用原表定義。",
          "sourceSeries": "OE",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 22190,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Persons engaged",
          "value": 8904,
          "unit": "Number",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Chemicals, rubber, plastics and non-metallic mineral products；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 8904,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 6853,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Chemicals, rubber, plastics and non-metallic mineral products；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 6853,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "totalReceipts",
          "label": "總收益",
          "labelEn": "Total receipts",
          "value": 29430,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Chemicals, rubber, plastics and non-metallic mineral products；採用原表定義。",
          "sourceSeries": "TR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 29430,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        }
      ],
      "sourceGroupingCode": "ind_ASIP_19_20_21_22_23",
      "parentGroupingCode": "ind_ASIP_C",
      "hsicBoundary": "19-23",
      "sourceTables": [
        "610-72001"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800122024AN24",
      "costComponents": [
        "compensation",
        "operatingExpenses"
      ],
      "costBreakdownCompleteForSurplus": true,
      "surplusFormula": "TR - COMP - OE = GS",
      "definitionPdfPages": [
        2,
        3
      ],
      "definitionPrintedPages": null
    },
    {
      "id": "ind_ASIP_24_25_28_29_30_33",
      "label": "金屬製品、機械及設備",
      "labelEn": "Metal products, machinery and equipment",
      "hsicSections": [
        "C"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。製造業、電力及燃氣供應，或污水、廢棄物管理及污染防治的表列組別。E 組的公布名稱未包括自來水供應，不能當成完整 HSIC E。",
      "period": "2024",
      "metrics": [
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 7196,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Metal products, machinery and equipment；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 7196,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 3827,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Metal products, machinery and equipment；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 3827,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "companies",
          "label": "公司",
          "labelEn": "Companies",
          "value": 1403,
          "unit": "Number",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Metal products, machinery and equipment；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 1403,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "operatingExpenses",
          "label": "營運開支",
          "labelEn": "Operating expenses",
          "value": 188048,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Metal products, machinery and equipment；採用原表定義。",
          "sourceSeries": "OE",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 188048,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Persons engaged",
          "value": 16499,
          "unit": "Number",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Metal products, machinery and equipment；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 16499,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 10376,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Metal products, machinery and equipment；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 10376,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "totalReceipts",
          "label": "總收益",
          "labelEn": "Total receipts",
          "value": 199071,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Metal products, machinery and equipment；採用原表定義。",
          "sourceSeries": "TR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 199071,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        }
      ],
      "sourceGroupingCode": "ind_ASIP_24_25_28_29_30_33",
      "parentGroupingCode": "ind_ASIP_C",
      "hsicBoundary": "24, 25, 28, 29, 30, 33",
      "sourceTables": [
        "610-72001"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800122024AN24",
      "costComponents": [
        "compensation",
        "operatingExpenses"
      ],
      "costBreakdownCompleteForSurplus": true,
      "surplusFormula": "TR - COMP - OE = GS",
      "definitionPdfPages": [
        2,
        3
      ],
      "definitionPrintedPages": null
    },
    {
      "id": "ind_ASIP_26_27",
      "label": "電器、電子及光學製品",
      "labelEn": "Electrical, electronic and optical products",
      "hsicSections": [
        "C"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。製造業、電力及燃氣供應，或污水、廢棄物管理及污染防治的表列組別。E 組的公布名稱未包括自來水供應，不能當成完整 HSIC E。",
      "period": "2024",
      "metrics": [
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 628,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Electrical, electronic and optical products；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 628,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 615,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Electrical, electronic and optical products；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 615,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "companies",
          "label": "公司",
          "labelEn": "Companies",
          "value": 139,
          "unit": "Number",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Electrical, electronic and optical products；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 139,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "operatingExpenses",
          "label": "營運開支",
          "labelEn": "Operating expenses",
          "value": 4304,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Electrical, electronic and optical products；採用原表定義。",
          "sourceSeries": "OE",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 4304,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Persons engaged",
          "value": 2227,
          "unit": "Number",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Electrical, electronic and optical products；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 2227,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 1143,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Electrical, electronic and optical products；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 1143,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "totalReceipts",
          "label": "總收益",
          "labelEn": "Total receipts",
          "value": 5548,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Electrical, electronic and optical products；採用原表定義。",
          "sourceSeries": "TR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 5548,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        }
      ],
      "sourceGroupingCode": "ind_ASIP_26_27",
      "parentGroupingCode": "ind_ASIP_C",
      "hsicBoundary": "26-27",
      "sourceTables": [
        "610-72001"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800122024AN24",
      "costComponents": [
        "compensation",
        "operatingExpenses"
      ],
      "costBreakdownCompleteForSurplus": true,
      "surplusFormula": "TR - COMP - OE = GS",
      "definitionPdfPages": [
        2,
        3
      ],
      "definitionPrintedPages": null
    },
    {
      "id": "ind_ASIP_C",
      "label": "製造",
      "labelEn": "Manufacturing",
      "hsicSections": [
        "C"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。製造業、電力及燃氣供應，或污水、廢棄物管理及污染防治的表列組別。E 組的公布名稱未包括自來水供應，不能當成完整 HSIC E。",
      "period": "2024",
      "metrics": [
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 23418,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Manufacturing；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 23418,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 16702,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Manufacturing；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 16702,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "companies",
          "label": "公司",
          "labelEn": "Companies",
          "value": 6338,
          "unit": "Number",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Manufacturing；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 6338,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "operatingExpenses",
          "label": "營運開支",
          "labelEn": "Operating expenses",
          "value": 259917,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Manufacturing；採用原表定義。",
          "sourceSeries": "OE",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 259917,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Persons engaged",
          "value": 77117,
          "unit": "Number",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Manufacturing；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 77117,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 37648,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Manufacturing；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 37648,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        },
        {
          "key": "totalReceipts",
          "label": "總收益",
          "labelEn": "Total receipts",
          "value": 300038,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "610-72001",
          "table": "610-72001",
          "page": null,
          "basis": "2024 ASEA；香港；Manufacturing；採用原表定義。",
          "sourceSeries": "TR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 300038,
          "definitionSourceId": "B10800122024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080012/B10800122024AN24/att/en/60/Terms%20and%20definitions_9.pdf"
        }
      ],
      "sourceGroupingCode": "ind_ASIP_C",
      "parentGroupingCode": null,
      "hsicBoundary": "10-33",
      "sourceTables": [
        "610-72001"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800122024AN24",
      "costComponents": [
        "compensation",
        "operatingExpenses"
      ],
      "costBreakdownCompleteForSurplus": true,
      "surplusFormula": "TR - COMP - OE = GS",
      "definitionPdfPages": [
        2,
        3
      ],
      "definitionPrintedPages": null
    }
  ],
  "context": null,
  "gap": null,
  "cases": [
    {
      "id": "vtech",
      "entity": "偉易達集團有限公司 VTech Holdings Limited",
      "hsicSections": [
        "C"
      ],
      "modelType": "電子產品設計製造及代工",
      "whyThisCase": "同時銷售自有電子產品及代客製造，可解釋材料、研發、存貨與訂單收款。",
      "geography": "全球業務，美洲、歐洲及亞洲",
      "consolidationScope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
      "currency": "USD",
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
          "text": "設計、生產及銷售電子學習產品、通訊產品，並提供電子產品代工服務。",
          "sources": [
            {
              "sourceId": "vtech2026",
              "printedPage": "2",
              "pdfPage": 4,
              "table": null
            }
          ]
        },
        "customers": {
          "text": "自有產品經零售商、網購平台和分銷商銷售予家庭及商業用戶，代工客戶委託生產。",
          "sources": [
            {
              "sourceId": "vtech2026",
              "printedPage": "2",
              "pdfPage": 4,
              "table": null
            }
          ]
        },
        "revenueModel": {
          "text": "主要按交付產品並轉移控制權確認貨品收入。研發及生產先要花錢，存貨未賣出前不等同收入。",
          "sources": [
            {
              "sourceId": "vtech2026",
              "printedPage": "122",
              "pdfPage": 124,
              "table": null
            }
          ]
        },
        "costs": {
          "text": "主要有材料、生產人工、運輸、銷售推廣、研發及行政費用。",
          "sources": [
            {
              "sourceId": "vtech2026",
              "printedPage": "10-11",
              "pdfPage": 12,
              "table": null
            },
            {
              "sourceId": "vtech2026",
              "printedPage": "116",
              "pdfPage": 118,
              "table": null
            }
          ]
        },
        "process": [
          {
            "text": "研發產品或按客戶要求設計，採購材料及安排工廠生產。",
            "sources": [
              {
                "sourceId": "vtech2026",
                "printedPage": "2",
                "pdfPage": 4,
                "table": null
              }
            ]
          },
          {
            "text": "交付產品予零售或代工客戶，確認收入及收款，處理保養和退貨。",
            "sources": [
              {
                "sourceId": "vtech2026",
                "printedPage": "122",
                "pdfPage": 124,
                "table": null
              }
            ]
          }
        ],
        "influences": {
          "text": "管理層指出，產品組合、材料及運費、匯率、最低工資與關稅會影響毛利。",
          "sources": [
            {
              "sourceId": "vtech2026",
              "printedPage": "10",
              "pdfPage": 12,
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
          "unit": "百萬美元",
          "scale": 1000000,
          "currency": "USD",
          "basis": "經審核IFRS合併財務報表原列金額",
          "observations": [
            {
              "year": "2024",
              "value": 2145.7,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2025",
              "printedPage": "102",
              "pdfPage": 104,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2023-04-01",
              "fiscalEnd": "2024-03-31"
            },
            {
              "year": "2025",
              "value": 2177.2,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2026",
              "printedPage": "116",
              "pdfPage": 118,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2024-04-01",
              "fiscalEnd": "2025-03-31"
            },
            {
              "year": "2026",
              "value": 2027.5,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2026",
              "printedPage": "116",
              "pdfPage": 118,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2025-04-01",
              "fiscalEnd": "2026-03-31"
            }
          ]
        },
        {
          "key": "grossProfit",
          "originalLabel": "Gross profit",
          "label": "毛利",
          "unit": "百萬美元",
          "scale": 1000000,
          "currency": "USD",
          "basis": "經審核IFRS合併財務報表原列金額",
          "observations": [
            {
              "year": "2024",
              "value": 634.9,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2025",
              "printedPage": "102",
              "pdfPage": 104,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2023-04-01",
              "fiscalEnd": "2024-03-31"
            },
            {
              "year": "2025",
              "value": 686.8,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2026",
              "printedPage": "116",
              "pdfPage": 118,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2024-04-01",
              "fiscalEnd": "2025-03-31"
            },
            {
              "year": "2026",
              "value": 663.4,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2026",
              "printedPage": "116",
              "pdfPage": 118,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2025-04-01",
              "fiscalEnd": "2026-03-31"
            }
          ]
        },
        {
          "key": "operatingProfit",
          "originalLabel": "Operating profit",
          "label": "營運溢利",
          "unit": "百萬美元",
          "scale": 1000000,
          "currency": "USD",
          "basis": "經審核IFRS合併財務報表原列金額",
          "observations": [
            {
              "year": "2024",
              "value": 196.2,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2025",
              "printedPage": "102",
              "pdfPage": 104,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2023-04-01",
              "fiscalEnd": "2024-03-31"
            },
            {
              "year": "2025",
              "value": 188.7,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2026",
              "printedPage": "116",
              "pdfPage": 118,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2024-04-01",
              "fiscalEnd": "2025-03-31"
            },
            {
              "year": "2026",
              "value": 171,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2026",
              "printedPage": "116",
              "pdfPage": 118,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2025-04-01",
              "fiscalEnd": "2026-03-31"
            }
          ]
        },
        {
          "key": "attributableProfit",
          "originalLabel": "Profit for the year and attributable to shareholders of the Company",
          "label": "股東應佔溢利",
          "unit": "百萬美元",
          "scale": 1000000,
          "currency": "USD",
          "basis": "經審核IFRS合併財務報表原列金額",
          "observations": [
            {
              "year": "2024",
              "value": 166.6,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2025",
              "printedPage": "102",
              "pdfPage": 104,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2023-04-01",
              "fiscalEnd": "2024-03-31"
            },
            {
              "year": "2025",
              "value": 156.8,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2026",
              "printedPage": "116",
              "pdfPage": 118,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2024-04-01",
              "fiscalEnd": "2025-03-31"
            },
            {
              "year": "2026",
              "value": 134.1,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2026",
              "printedPage": "116",
              "pdfPage": 118,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2025-04-01",
              "fiscalEnd": "2026-03-31"
            }
          ]
        },
        {
          "key": "operatingCashFlow",
          "originalLabel": "Net cash generated from operating activities",
          "label": "經營活動現金淨流入",
          "unit": "百萬美元",
          "scale": 1000000,
          "currency": "USD",
          "basis": "經審核IFRS合併財務報表原列金額",
          "observations": [
            {
              "year": "2024",
              "value": 355.2,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2025",
              "printedPage": "106",
              "pdfPage": 108,
              "table": "Consolidated statement of cash flows",
              "fiscalStart": "2023-04-01",
              "fiscalEnd": "2024-03-31"
            },
            {
              "year": "2025",
              "value": 225.3,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2026",
              "printedPage": "120",
              "pdfPage": 122,
              "table": "Consolidated statement of cash flows",
              "fiscalStart": "2024-04-01",
              "fiscalEnd": "2025-03-31"
            },
            {
              "year": "2026",
              "value": 123.9,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2026",
              "printedPage": "120",
              "pdfPage": 122,
              "table": "Consolidated statement of cash flows",
              "fiscalStart": "2025-04-01",
              "fiscalEnd": "2026-03-31"
            }
          ]
        },
        {
          "key": "cash",
          "originalLabel": "Deposits and cash",
          "label": "存款及現金",
          "unit": "百萬美元",
          "scale": 1000000,
          "currency": "USD",
          "basis": "年結日結餘，現金流量表亦列作現金及現金等價物",
          "observations": [
            {
              "year": "2024",
              "value": 322.1,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2025",
              "printedPage": "103",
              "pdfPage": 105,
              "table": "Consolidated statement of financial position",
              "fiscalStart": "2023-04-01",
              "fiscalEnd": "2024-03-31"
            },
            {
              "year": "2025",
              "value": 335.6,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2026",
              "printedPage": "117",
              "pdfPage": 119,
              "table": "Consolidated statement of financial position",
              "fiscalStart": "2024-04-01",
              "fiscalEnd": "2025-03-31"
            },
            {
              "year": "2026",
              "value": 264,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2026",
              "printedPage": "117",
              "pdfPage": 119,
              "table": "Consolidated statement of financial position",
              "fiscalStart": "2025-04-01",
              "fiscalEnd": "2026-03-31"
            }
          ]
        },
        {
          "key": "borrowings",
          "originalLabel": "The Group had no borrowings",
          "label": "借款",
          "unit": "百萬美元",
          "scale": 1000000,
          "currency": "USD",
          "basis": "管理層明確披露年結日無借款，不含表內另列租賃負債",
          "observations": [
            {
              "year": "2024",
              "value": 0,
              "status": "年報管理層資金披露，明確列示無借款",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2025",
              "printedPage": "14",
              "pdfPage": 16,
              "table": "Liquidity and financial resources",
              "fiscalStart": "2023-04-01",
              "fiscalEnd": "2024-03-31"
            },
            {
              "year": "2025",
              "value": 0,
              "status": "年報管理層資金披露，明確列示無借款",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2026",
              "printedPage": "12",
              "pdfPage": 14,
              "table": "Liquidity and financial resources",
              "fiscalStart": "2024-04-01",
              "fiscalEnd": "2025-03-31"
            },
            {
              "year": "2026",
              "value": 0,
              "status": "年報管理層資金披露，明確列示無借款",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2026",
              "printedPage": "12",
              "pdfPage": 14,
              "table": "Liquidity and financial resources",
              "fiscalStart": "2025-04-01",
              "fiscalEnd": "2026-03-31"
            }
          ]
        },
        {
          "key": "costOfSales",
          "originalLabel": "Cost of sales",
          "label": "銷售成本",
          "unit": "百萬美元",
          "scale": 1000000,
          "currency": "USD",
          "basis": "經審核IFRS合併財務報表原列金額",
          "observations": [
            {
              "year": "2024",
              "value": -1510.8,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2025",
              "printedPage": "102",
              "pdfPage": 104,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2023-04-01",
              "fiscalEnd": "2024-03-31"
            },
            {
              "year": "2025",
              "value": -1490.4,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2026",
              "printedPage": "116",
              "pdfPage": 118,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2024-04-01",
              "fiscalEnd": "2025-03-31"
            },
            {
              "year": "2026",
              "value": -1364.1,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2026",
              "printedPage": "116",
              "pdfPage": 118,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2025-04-01",
              "fiscalEnd": "2026-03-31"
            }
          ]
        },
        {
          "key": "research",
          "originalLabel": "Research and development expenses",
          "label": "研發費用",
          "unit": "百萬美元",
          "scale": 1000000,
          "currency": "USD",
          "basis": "經審核IFRS合併財務報表原列金額",
          "observations": [
            {
              "year": "2024",
              "value": -81.7,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2025",
              "printedPage": "102",
              "pdfPage": 104,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2023-04-01",
              "fiscalEnd": "2024-03-31"
            },
            {
              "year": "2025",
              "value": -91.9,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2026",
              "printedPage": "116",
              "pdfPage": 118,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2024-04-01",
              "fiscalEnd": "2025-03-31"
            },
            {
              "year": "2026",
              "value": -82.9,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2026",
              "printedPage": "116",
              "pdfPage": 118,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2025-04-01",
              "fiscalEnd": "2026-03-31"
            }
          ]
        },
        {
          "key": "inventory",
          "originalLabel": "Stocks",
          "label": "存貨",
          "unit": "百萬美元",
          "scale": 1000000,
          "currency": "USD",
          "basis": "年結日結餘",
          "observations": [
            {
              "year": "2024",
              "value": 348,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2025",
              "printedPage": "103",
              "pdfPage": 105,
              "table": "Consolidated statement of financial position",
              "fiscalStart": "2023-04-01",
              "fiscalEnd": "2024-03-31"
            },
            {
              "year": "2025",
              "value": 360.8,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2026",
              "printedPage": "117",
              "pdfPage": 119,
              "table": "Consolidated statement of financial position",
              "fiscalStart": "2024-04-01",
              "fiscalEnd": "2025-03-31"
            },
            {
              "year": "2026",
              "value": 402.9,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
              "sourceId": "vtech2026",
              "printedPage": "117",
              "pdfPage": 119,
              "table": "Consolidated statement of financial position",
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
          "kind": "management-explanation",
          "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
          "text": "2024/25年收入及毛利上升，營運溢利卻下降。管理層指出納入Gigaset業務後，銷售、行政及研發費用增加。現金流量表亦顯示存貨及應收款增加，經營現金淨流入少於上年。",
          "sources": [
            {
              "sourceId": "vtech2025",
              "printedPage": "13",
              "pdfPage": 15,
              "table": null
            },
            {
              "sourceId": "vtech2025",
              "printedPage": "106",
              "pdfPage": 108,
              "table": null
            }
          ]
        },
        {
          "fromYear": "2025",
          "toYear": "2026",
          "kind": "management-explanation",
          "scope": "偉易達全球合併集團，跨國研發、生產及銷售，不是香港製造業或香港分部。",
          "text": "2025/26年各地收入均下跌。管理層稱材料、運費及產品組合改善，抵銷部分關稅與人工壓力，故毛利率仍提高；收入下降及有效稅率提高，令股東溢利減少。存貨進一步增加，現金流不能只看毛利率。",
          "sources": [
            {
              "sourceId": "vtech2026",
              "printedPage": "10-12",
              "pdfPage": 12,
              "table": null
            },
            {
              "sourceId": "vtech2026",
              "printedPage": "120",
              "pdfPage": 122,
              "table": null
            }
          ]
        }
      ],
      "limits": [
        "美元全球合併數字，不能當作香港製造產值或香港利潤。",
        "沒有香港製造分部的三年獨立現金流或淨利。",
        "借款為零仍有租賃負債及應付款，不代表公司沒有負債。",
        "個案只示範電子製造，不代表所有製造業。"
      ],
      "retrievedAt": "2026-10-22",
      "sources": [
        {
          "id": "vtech2026",
          "title": "VTech Holdings Limited Annual Report 2026",
          "url": "https://www.hkexnews.hk/listedco/listconews/sehk/2026/0618/2026061800748.pdf",
          "publicationDate": "2026-06-18"
        },
        {
          "id": "vtech2025",
          "title": "VTech Holdings Limited Annual Report 2025",
          "url": "https://www.hkexnews.hk/listedco/listconews/sehk/2025/0612/2025061200426.pdf",
          "publicationDate": "2025-06-12"
        }
      ]
    }
  ]
};
