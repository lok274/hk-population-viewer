export default {
  "code": "H",
  "title": "運輸、倉庫、郵政及速遞",
  "checkedOn": "2026-10-22",
  "classification": {
    "intro": "運送乘客或貨物，並提供倉庫、裝卸、郵政、速遞等相關服務。",
    "models": [
      {
        "title": "客運與貨運",
        "text": "以鐵路、公路、水路或航空完成運送。"
      },
      {
        "title": "倉儲與配送",
        "text": "保管、處理及交付貨物，與單純載客的運作不同。"
      }
    ],
    "readFor": "混合鐵路、商場及物業發展的集團，不能只用票務收入解釋全部盈利。",
    "printedPage": 267,
    "pdfPage": 271,
    "source": {
      "id": "hsic-manual",
      "title": "香港標準行業分類 2.0 版，第三部分",
      "publisher": "政府統計處",
      "url": "https://www.statistics.gov.hk/pub/B2XX0004012008XXXXB0300.pdf",
      "publicationDate": "2009-07-17"
    }
  },
  "coverage": {
    "section": "H",
    "label": "運輸、倉庫、郵政及速遞",
    "status": "partial",
    "groupIds": [
      "ind_AST_491_4921_4922_4923_4924_4925_4926",
      "ind_AST_4927_4928",
      "ind_AST_501",
      "ind_AST_502",
      "ind_AST_51_5223",
      "ind_AST_521",
      "ind_AST_5221_499",
      "ind_AST_5222",
      "ind_AST_5229",
      "ind_AST_532",
      "ind_AST_H"
    ],
    "reason": "635-74002 不包括 HSIC531 郵政活動。"
  },
  "sources": [
    {
      "id": "635-74002",
      "title": "Principal statistics for all companies by industry grouping (transportation, storage and courier services sector)",
      "url": "https://www.censtatd.gov.hk/en/web_table.html?id=635-74002",
      "urlTc": "https://www.censtatd.gov.hk/tc/web_table.html?id=635-74002",
      "dictionaryUrl": "https://www.censtatd.gov.hk/data/en/table_635-74002_lang.json",
      "dictionaryTcUrl": "https://www.censtatd.gov.hk/data/tc/table_635-74002_lang.json",
      "apiUrl": "https://www.censtatd.gov.hk/api/post.php",
      "reportId": "B10800102024AN24",
      "reportTitle": "Key Statistics on Business Performance and Operating Characteristics of the Transportation, Storage and Courier Services Sector",
      "reportUrl": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800102024AN24",
      "termsUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf",
      "rawFile": "raw/635-74002.2024.json",
      "requestFile": "raw/635-74002.request.json",
      "releaseDate": "2025-11-27 00:00:00.000",
      "lastModifiedDate": "2026-05-29",
      "period": "2024",
      "tableNotes": "Figures may not add up to the total due to rounding.",
      "publisher": "香港政府統計處",
      "webTableHasPrintedPages": false,
      "dictionaryHeadingsWithoutData": []
    },
    {
      "id": "B10800102024AN24",
      "title": "Key Statistics on Business Performance and Operating Characteristics of the Transportation, Storage and Courier Services Sector",
      "url": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800102024AN24",
      "rawFile": "raw/B10800102024AN24.report.json",
      "termsFile": "raw/B10800102024AN24.terms0.pdf",
      "termsUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf",
      "coverageSection": "Survey methodology / Survey coverage",
      "publisher": "香港政府統計處",
      "period": "2024"
    }
  ],
  "groups": [
    {
      "id": "ind_AST_491_4921_4922_4923_4924_4925_4926",
      "label": "陸路客運",
      "labelEn": "Land passenger transport",
      "hsicSections": [
        "H"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。HSIC 49-53 的表列運輸、倉庫及速遞活動，不包括 HSIC 531 郵政活動。",
      "period": "2024",
      "metrics": [
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 18050,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Land passenger transport；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 18050,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 13245,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Land passenger transport；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 13245,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "companies",
          "label": "公司數目",
          "labelEn": "Number of companies",
          "value": 11238,
          "unit": "Number",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Land passenger transport；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 11238,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "operatingExpenses",
          "label": "營運開支",
          "labelEn": "Operating expenses",
          "value": 31400,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Land passenger transport；採用原表定義。",
          "sourceSeries": "OE",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 31400,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Number of persons engaged",
          "value": 61524,
          "unit": "Number",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Land passenger transport；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 61524,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 32104,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Land passenger transport；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 32104,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "totalReceipts",
          "label": "總收益",
          "labelEn": "Total receipts",
          "value": 62695,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Land passenger transport；採用原表定義。",
          "sourceSeries": "TR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 62695,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        }
      ],
      "sourceGroupingCode": "ind_AST_491_4921_4922_4923_4924_4925_4926",
      "parentGroupingCode": "ind_AST_H",
      "hsicBoundary": "491, 4921-4926",
      "sourceTables": [
        "635-74002"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800102024AN24",
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
      "id": "ind_AST_4927_4928",
      "label": "陸路貨運",
      "labelEn": "Land freight transport",
      "hsicSections": [
        "H"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。HSIC 49-53 的表列運輸、倉庫及速遞活動，不包括 HSIC 531 郵政活動。",
      "period": "2024",
      "metrics": [
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 7254,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Land freight transport；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 7254,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 2430,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Land freight transport；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 2430,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "companies",
          "label": "公司數目",
          "labelEn": "Number of companies",
          "value": 8093,
          "unit": "Number",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Land freight transport；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 8093,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "operatingExpenses",
          "label": "營運開支",
          "labelEn": "Operating expenses",
          "value": 17102,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Land freight transport；採用原表定義。",
          "sourceSeries": "OE",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 17102,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Number of persons engaged",
          "value": 31874,
          "unit": "Number",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Land freight transport；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 31874,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 10664,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Land freight transport；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 10664,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "totalReceipts",
          "label": "總收益",
          "labelEn": "Total receipts",
          "value": 26786,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Land freight transport；採用原表定義。",
          "sourceSeries": "TR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 26786,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        }
      ],
      "sourceGroupingCode": "ind_AST_4927_4928",
      "parentGroupingCode": "ind_AST_H",
      "hsicBoundary": "4927, 4928",
      "sourceTables": [
        "635-74002"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800102024AN24",
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
      "id": "ind_AST_501",
      "label": "跨境水上運輸",
      "labelEn": "Cross-border water transport",
      "hsicSections": [
        "H"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。HSIC 49-53 的表列運輸、倉庫及速遞活動，不包括 HSIC 531 郵政活動。",
      "period": "2024",
      "metrics": [
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 5929,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Cross-border water transport；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 5929,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 37949,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Cross-border water transport；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 37949,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "companies",
          "label": "公司數目",
          "labelEn": "Number of companies",
          "value": 519,
          "unit": "Number",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Cross-border water transport；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 519,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "operatingExpenses",
          "label": "營運開支",
          "labelEn": "Operating expenses",
          "value": 114006,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Cross-border water transport；採用原表定義。",
          "sourceSeries": "OE",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 114006,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Number of persons engaged",
          "value": 9869,
          "unit": "Number",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Cross-border water transport；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 9869,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 40589,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Cross-border water transport；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 40589,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "totalReceipts",
          "label": "總收益",
          "labelEn": "Total receipts",
          "value": 157884,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Cross-border water transport；採用原表定義。",
          "sourceSeries": "TR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 157884,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        }
      ],
      "sourceGroupingCode": "ind_AST_501",
      "parentGroupingCode": "ind_AST_H",
      "hsicBoundary": "501",
      "sourceTables": [
        "635-74002"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800102024AN24",
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
      "id": "ind_AST_502",
      "label": "港內水上運輸",
      "labelEn": "Inland water transport",
      "hsicSections": [
        "H"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。HSIC 49-53 的表列運輸、倉庫及速遞活動，不包括 HSIC 531 郵政活動。",
      "period": "2024",
      "metrics": [
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 942,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Inland water transport；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 942,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 431,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Inland water transport；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 431,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "companies",
          "label": "公司數目",
          "labelEn": "Number of companies",
          "value": 254,
          "unit": "Number",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Inland water transport；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 254,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "operatingExpenses",
          "label": "營運開支",
          "labelEn": "Operating expenses",
          "value": 1183,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Inland water transport；採用原表定義。",
          "sourceSeries": "OE",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 1183,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Number of persons engaged",
          "value": 2654,
          "unit": "Number",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Inland water transport；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 2654,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 1176,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Inland water transport；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 1176,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "totalReceipts",
          "label": "總收益",
          "labelEn": "Total receipts",
          "value": 2556,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Inland water transport；採用原表定義。",
          "sourceSeries": "TR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 2556,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        }
      ],
      "sourceGroupingCode": "ind_AST_502",
      "parentGroupingCode": "ind_AST_H",
      "hsicBoundary": "502",
      "sourceTables": [
        "635-74002"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800102024AN24",
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
      "id": "ind_AST_51_5223",
      "label": "航空運輸及航空運輸輔助服務活動",
      "labelEn": "Air transport and service activities incidental to air transportation",
      "hsicSections": [
        "H"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。HSIC 49-53 的表列運輸、倉庫及速遞活動，不包括 HSIC 531 郵政活動。",
      "period": "2024",
      "metrics": [
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 22838,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Air transport and service activities incidental to air transportation；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 22838,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 33655,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Air transport and service activities incidental to air transportation；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 33655,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "companies",
          "label": "公司數目",
          "labelEn": "Number of companies",
          "value": 149,
          "unit": "Number",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Air transport and service activities incidental to air transportation；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 149,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "operatingExpenses",
          "label": "營運開支",
          "labelEn": "Operating expenses",
          "value": 109353,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Air transport and service activities incidental to air transportation；採用原表定義。",
          "sourceSeries": "OE",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 109353,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Number of persons engaged",
          "value": 36765,
          "unit": "Number",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Air transport and service activities incidental to air transportation；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 36765,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 62642,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Air transport and service activities incidental to air transportation；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 62642,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "totalReceipts",
          "label": "總收益",
          "labelEn": "Total receipts",
          "value": 165846,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Air transport and service activities incidental to air transportation；採用原表定義。",
          "sourceSeries": "TR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 165846,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        }
      ],
      "sourceGroupingCode": "ind_AST_51_5223",
      "parentGroupingCode": "ind_AST_H",
      "hsicBoundary": "510, 5223",
      "sourceTables": [
        "635-74002"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800102024AN24",
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
      "id": "ind_AST_521",
      "label": "貨倉及倉庫服務",
      "labelEn": "Warehousing and storage",
      "hsicSections": [
        "H"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。HSIC 49-53 的表列運輸、倉庫及速遞活動，不包括 HSIC 531 郵政活動。",
      "period": "2024",
      "metrics": [
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 3179,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Warehousing and storage；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 3179,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 2617,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Warehousing and storage；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 2617,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "companies",
          "label": "公司數目",
          "labelEn": "Number of companies",
          "value": 858,
          "unit": "Number",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Warehousing and storage；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 858,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "operatingExpenses",
          "label": "營運開支",
          "labelEn": "Operating expenses",
          "value": 8638,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Warehousing and storage；採用原表定義。",
          "sourceSeries": "OE",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 8638,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Number of persons engaged",
          "value": 11159,
          "unit": "Number",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Warehousing and storage；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 11159,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 5871,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Warehousing and storage；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 5871,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "totalReceipts",
          "label": "總收益",
          "labelEn": "Total receipts",
          "value": 14434,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Warehousing and storage；採用原表定義。",
          "sourceSeries": "TR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 14434,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        }
      ],
      "sourceGroupingCode": "ind_AST_521",
      "parentGroupingCode": "ind_AST_H",
      "hsicBoundary": "521",
      "sourceTables": [
        "635-74002"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800102024AN24",
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
      "id": "ind_AST_5221_499",
      "label": "陸路運輸輔助服務活動及其他陸路運輸服務",
      "labelEn": "Service activities incidental to land transportation and other land transport services",
      "hsicSections": [
        "H"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。HSIC 49-53 的表列運輸、倉庫及速遞活動，不包括 HSIC 531 郵政活動。",
      "period": "2024",
      "metrics": [
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 1735,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Service activities incidental to land transportation and other land transport services；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 1735,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 2267,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Service activities incidental to land transportation and other land transport services；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 2267,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "companies",
          "label": "公司數目",
          "labelEn": "Number of companies",
          "value": 475,
          "unit": "Number",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Service activities incidental to land transportation and other land transport services；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 475,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "operatingExpenses",
          "label": "營運開支",
          "labelEn": "Operating expenses",
          "value": 3708,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Service activities incidental to land transportation and other land transport services；採用原表定義。",
          "sourceSeries": "OE",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 3708,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Number of persons engaged",
          "value": 6838,
          "unit": "Number",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Service activities incidental to land transportation and other land transport services；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 6838,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 4144,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Service activities incidental to land transportation and other land transport services；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 4144,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "totalReceipts",
          "label": "總收益",
          "labelEn": "Total receipts",
          "value": 7710,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Service activities incidental to land transportation and other land transport services；採用原表定義。",
          "sourceSeries": "TR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 7710,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        }
      ],
      "sourceGroupingCode": "ind_AST_5221_499",
      "parentGroupingCode": "ind_AST_H",
      "hsicBoundary": "5221, 499",
      "sourceTables": [
        "635-74002"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800102024AN24",
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
      "id": "ind_AST_5222",
      "label": "水上運輸輔助服務活動",
      "labelEn": "Service activities incidental to water transportation",
      "hsicSections": [
        "H"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。HSIC 49-53 的表列運輸、倉庫及速遞活動，不包括 HSIC 531 郵政活動。",
      "period": "2024",
      "metrics": [
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 2203,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Service activities incidental to water transportation；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 2203,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 3052,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Service activities incidental to water transportation；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 3052,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "companies",
          "label": "公司數目",
          "labelEn": "Number of companies",
          "value": 359,
          "unit": "Number",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Service activities incidental to water transportation；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 359,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "operatingExpenses",
          "label": "營運開支",
          "labelEn": "Operating expenses",
          "value": 5391,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Service activities incidental to water transportation；採用原表定義。",
          "sourceSeries": "OE",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 5391,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Number of persons engaged",
          "value": 5736,
          "unit": "Number",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Service activities incidental to water transportation；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 5736,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 5053,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Service activities incidental to water transportation；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 5053,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "totalReceipts",
          "label": "總收益",
          "labelEn": "Total receipts",
          "value": 10645,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Service activities incidental to water transportation；採用原表定義。",
          "sourceSeries": "TR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 10645,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        }
      ],
      "sourceGroupingCode": "ind_AST_5222",
      "parentGroupingCode": "ind_AST_H",
      "hsicBoundary": "5222",
      "sourceTables": [
        "635-74002"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800102024AN24",
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
      "id": "ind_AST_5229",
      "label": "其他運輸輔助活動",
      "labelEn": "Other transportation support activities",
      "hsicSections": [
        "H"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。HSIC 49-53 的表列運輸、倉庫及速遞活動，不包括 HSIC 531 郵政活動。",
      "period": "2024",
      "metrics": [
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 12104,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Other transportation support activities；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 12104,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 27106,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Other transportation support activities；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 27106,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "companies",
          "label": "公司數目",
          "labelEn": "Number of companies",
          "value": 4714,
          "unit": "Number",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Other transportation support activities；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 4714,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "operatingExpenses",
          "label": "營運開支",
          "labelEn": "Operating expenses",
          "value": 225123,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Other transportation support activities；採用原表定義。",
          "sourceSeries": "OE",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 225123,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Number of persons engaged",
          "value": 30571,
          "unit": "Number",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Other transportation support activities；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 30571,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 26722,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Other transportation support activities；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 26722,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "totalReceipts",
          "label": "總收益",
          "labelEn": "Total receipts",
          "value": 264332,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Other transportation support activities；採用原表定義。",
          "sourceSeries": "TR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 264332,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        }
      ],
      "sourceGroupingCode": "ind_AST_5229",
      "parentGroupingCode": "ind_AST_H",
      "hsicBoundary": "5229",
      "sourceTables": [
        "635-74002"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800102024AN24",
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
      "id": "ind_AST_532",
      "label": "速遞活動",
      "labelEn": "Courier activities",
      "hsicSections": [
        "H"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。HSIC 49-53 的表列運輸、倉庫及速遞活動，不包括 HSIC 531 郵政活動。",
      "period": "2024",
      "metrics": [
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 4508,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Courier activities；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 4508,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 1972,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Courier activities；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 1972,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "companies",
          "label": "公司數目",
          "labelEn": "Number of companies",
          "value": 672,
          "unit": "Number",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Courier activities；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 672,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "operatingExpenses",
          "label": "營運開支",
          "labelEn": "Operating expenses",
          "value": 36261,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Courier activities；採用原表定義。",
          "sourceSeries": "OE",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 36261,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Number of persons engaged",
          "value": 12928,
          "unit": "Number",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Courier activities；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 12928,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 8372,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Courier activities；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 8372,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "totalReceipts",
          "label": "總收益",
          "labelEn": "Total receipts",
          "value": 42741,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Courier activities；採用原表定義。",
          "sourceSeries": "TR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 42741,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        }
      ],
      "sourceGroupingCode": "ind_AST_532",
      "parentGroupingCode": "ind_AST_H",
      "hsicBoundary": "532",
      "sourceTables": [
        "635-74002"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800102024AN24",
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
      "id": "ind_AST_H",
      "label": "運輸、倉庫及速遞服務業",
      "labelEn": "Transportation, storage and courier services sector",
      "hsicSections": [
        "H"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。HSIC 49-53 的表列運輸、倉庫及速遞活動，不包括 HSIC 531 郵政活動。",
      "period": "2024",
      "metrics": [
        {
          "key": "compensation",
          "label": "僱員薪酬",
          "labelEn": "Compensation of employees",
          "value": 78742,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Transportation, storage and courier services sector；採用原表定義。",
          "sourceSeries": "COMP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 78742,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 124723,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Transportation, storage and courier services sector；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 124723,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "companies",
          "label": "公司數目",
          "labelEn": "Number of companies",
          "value": 27330,
          "unit": "Number",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Transportation, storage and courier services sector；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 27330,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "operatingExpenses",
          "label": "營運開支",
          "labelEn": "Operating expenses",
          "value": 552164,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Transportation, storage and courier services sector；採用原表定義。",
          "sourceSeries": "OE",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 552164,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "personsEngaged",
          "label": "從業人數",
          "labelEn": "Number of persons engaged",
          "value": 209918,
          "unit": "Number",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Transportation, storage and courier services sector；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 209918,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 197337,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Transportation, storage and courier services sector；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 197337,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        },
        {
          "key": "totalReceipts",
          "label": "總收益",
          "labelEn": "Total receipts",
          "value": 755629,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "635-74002",
          "table": "635-74002",
          "page": null,
          "basis": "2024 ASEA；香港；Transportation, storage and courier services sector；採用原表定義。",
          "sourceSeries": "TR",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 755629,
          "definitionSourceId": "B10800102024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080010/B10800102024AN24/att/en/62/Terms%20and%20definitions_5.pdf"
        }
      ],
      "sourceGroupingCode": "ind_AST_H",
      "parentGroupingCode": null,
      "hsicBoundary": "49-53 的表列運輸、倉庫及速遞活動，未包括 531 郵政活動",
      "sourceTables": [
        "635-74002"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800102024AN24",
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
      "id": "mtr",
      "entity": "香港鐵路有限公司 MTR Corporation Limited",
      "hsicSections": [
        "H"
      ],
      "modelType": "鐵路加物業",
      "whyThisCase": "同一集團兼有票務、站內商務及物業開發，能解釋公共運輸與資產投資的資金來源。",
      "geography": "香港、中國內地及海外",
      "consolidationScope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
      "currency": "HKD",
      "fiscalYears": [
        {
          "label": "2023",
          "start": "2023-01-01",
          "end": "2023-12-31"
        },
        {
          "label": "2024",
          "start": "2024-01-01",
          "end": "2024-12-31"
        },
        {
          "label": "2025",
          "start": "2025-01-01",
          "end": "2025-12-31"
        }
      ],
      "audited": true,
      "business": {
        "provides": {
          "text": "提供鐵路及相關接駁服務，出租車站商舖與廣告位置，經營物業租賃及開發。",
          "sources": [
            {
              "sourceId": "mtr2025",
              "printedPage": "192",
              "pdfPage": 194,
              "table": null
            }
          ]
        },
        "customers": {
          "text": "乘客購買車程，商戶及廣告客戶租用位置，物業用戶及發展合作方參與其他業務。",
          "sources": [
            {
              "sourceId": "mtr2025",
              "printedPage": "192",
              "pdfPage": 194,
              "table": null
            }
          ]
        },
        "revenueModel": {
          "text": "票務、站內商務和物業租賃產生持續收入，物業開發則按項目完成及協議確認利潤。全組盈利不能稱為單靠車票賺取。",
          "sources": [
            {
              "sourceId": "mtr2025",
              "printedPage": "172",
              "pdfPage": 174,
              "table": null
            },
            {
              "sourceId": "mtr2025",
              "printedPage": "192",
              "pdfPage": 194,
              "table": null
            }
          ]
        },
        "costs": {
          "text": "運輸主要成本包括人手、維修、能源及設備折舊。新鐵路及更新列車訊號另需大量資本投資。",
          "sources": [
            {
              "sourceId": "mtr2025",
              "printedPage": "172",
              "pdfPage": 174,
              "table": null
            },
            {
              "sourceId": "mtr2025",
              "printedPage": "176",
              "pdfPage": 178,
              "table": null
            }
          ]
        },
        "process": [
          {
            "text": "投資和維護鐵路、列車及車站，安排每日班次運作。",
            "sources": [
              {
                "sourceId": "mtr2025",
                "printedPage": "55",
                "pdfPage": 57,
                "table": null
              }
            ]
          },
          {
            "text": "接載乘客及收取車資，同時管理站內商業位置與物業項目。",
            "sources": [
              {
                "sourceId": "mtr2025",
                "printedPage": "192",
                "pdfPage": 194,
                "table": null
              }
            ]
          }
        ],
        "influences": {
          "text": "客量、資產折舊、物業項目入帳時間及海外合約均會影響全組業績。",
          "sources": [
            {
              "sourceId": "mtr2025",
              "printedPage": "12",
              "pdfPage": 14,
              "table": null
            },
            {
              "sourceId": "mtr2025",
              "printedPage": "55",
              "pdfPage": 57,
              "table": null
            }
          ]
        }
      },
      "metrics": [
        {
          "key": "revenue",
          "originalLabel": "Total revenue",
          "label": "合併收入",
          "unit": "百萬港元",
          "scale": 1000000,
          "currency": "HKD",
          "basis": "經審核合併財務報表原列金額",
          "observations": [
            {
              "year": "2023",
              "value": 56982,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2024",
              "printedPage": "180",
              "pdfPage": 182,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2023-01-01",
              "fiscalEnd": "2023-12-31"
            },
            {
              "year": "2024",
              "value": 60011,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2025",
              "printedPage": "172",
              "pdfPage": 174,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2024-01-01",
              "fiscalEnd": "2024-12-31"
            },
            {
              "year": "2025",
              "value": 55465,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2025",
              "printedPage": "172",
              "pdfPage": 174,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2025-01-01",
              "fiscalEnd": "2025-12-31"
            }
          ]
        },
        {
          "key": "operatingProfit",
          "originalLabel": "Operating profit before depreciation, amortisation and variable annual payment",
          "label": "扣折舊、攤銷及浮動年付款前營運溢利",
          "unit": "百萬港元",
          "scale": 1000000,
          "currency": "HKD",
          "basis": "報表明確命名的小計，含物業開發及投資物業估值，未扣折舊等，非純票務營運利潤",
          "observations": [
            {
              "year": "2023",
              "value": 19025,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2024",
              "printedPage": "180",
              "pdfPage": 182,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2023-01-01",
              "fiscalEnd": "2023-12-31"
            },
            {
              "year": "2024",
              "value": 28386,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2025",
              "printedPage": "172",
              "pdfPage": 174,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2024-01-01",
              "fiscalEnd": "2024-12-31"
            },
            {
              "year": "2025",
              "value": 28862,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2025",
              "printedPage": "172",
              "pdfPage": 174,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2025-01-01",
              "fiscalEnd": "2025-12-31"
            }
          ]
        },
        {
          "key": "attributableProfit",
          "originalLabel": "Shareholders of the Company",
          "label": "股東應佔溢利",
          "unit": "百萬港元",
          "scale": 1000000,
          "currency": "HKD",
          "basis": "經審核合併財務報表原列金額",
          "observations": [
            {
              "year": "2023",
              "value": 7784,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2024",
              "printedPage": "180",
              "pdfPage": 182,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2023-01-01",
              "fiscalEnd": "2023-12-31"
            },
            {
              "year": "2024",
              "value": 15772,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2025",
              "printedPage": "172",
              "pdfPage": 174,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2024-01-01",
              "fiscalEnd": "2024-12-31"
            },
            {
              "year": "2025",
              "value": 14677,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2025",
              "printedPage": "172",
              "pdfPage": 174,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2025-01-01",
              "fiscalEnd": "2025-12-31"
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
              "year": "2023",
              "value": 11197,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2024",
              "printedPage": "184",
              "pdfPage": 186,
              "table": "Consolidated statement of cash flows",
              "fiscalStart": "2023-01-01",
              "fiscalEnd": "2023-12-31"
            },
            {
              "year": "2024",
              "value": 18491,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2025",
              "printedPage": "176",
              "pdfPage": 178,
              "table": "Consolidated statement of cash flows",
              "fiscalStart": "2024-01-01",
              "fiscalEnd": "2024-12-31"
            },
            {
              "year": "2025",
              "value": 11874,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2025",
              "printedPage": "176",
              "pdfPage": 178,
              "table": "Consolidated statement of cash flows",
              "fiscalStart": "2025-01-01",
              "fiscalEnd": "2025-12-31"
            }
          ]
        },
        {
          "key": "cash",
          "originalLabel": "Cash and cash equivalents at 31 December",
          "label": "現金及現金等價物",
          "unit": "百萬港元",
          "scale": 1000000,
          "currency": "HKD",
          "basis": "年結日現金流量表結餘，不含另列較長或受限制銀行存款",
          "observations": [
            {
              "year": "2023",
              "value": 15575,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2024",
              "printedPage": "184",
              "pdfPage": 186,
              "table": "Consolidated statement of cash flows",
              "fiscalStart": "2023-01-01",
              "fiscalEnd": "2023-12-31"
            },
            {
              "year": "2024",
              "value": 21836,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2025",
              "printedPage": "176",
              "pdfPage": 178,
              "table": "Consolidated statement of cash flows",
              "fiscalStart": "2024-01-01",
              "fiscalEnd": "2024-12-31"
            },
            {
              "year": "2025",
              "value": 38608,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2025",
              "printedPage": "176",
              "pdfPage": 178,
              "table": "Consolidated statement of cash flows",
              "fiscalStart": "2025-01-01",
              "fiscalEnd": "2025-12-31"
            }
          ]
        },
        {
          "key": "borrowings",
          "originalLabel": "Total loans and other obligations",
          "label": "貸款及其他責任",
          "unit": "百萬港元",
          "scale": 1000000,
          "currency": "HKD",
          "basis": "公司披露貸款及其他責任總額，不是總負債，也不含2025另列權益的永續證券",
          "observations": [
            {
              "year": "2023",
              "value": 59491,
              "status": "年報財務摘要所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2024",
              "printedPage": "55",
              "pdfPage": 57,
              "table": "Consolidated financial position review",
              "fiscalStart": "2023-01-01",
              "fiscalEnd": "2023-12-31"
            },
            {
              "year": "2024",
              "value": 77568,
              "status": "年報財務摘要所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2025",
              "printedPage": "54",
              "pdfPage": 56,
              "table": "Consolidated financial position review",
              "fiscalStart": "2024-01-01",
              "fiscalEnd": "2024-12-31"
            },
            {
              "year": "2025",
              "value": 88923,
              "status": "年報財務摘要所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2025",
              "printedPage": "54",
              "pdfPage": 56,
              "table": "Consolidated financial position review",
              "fiscalStart": "2025-01-01",
              "fiscalEnd": "2025-12-31"
            }
          ]
        },
        {
          "key": "operatingExpenses",
          "originalLabel": "Operating expenses before depreciation, amortisation and variable annual payment",
          "label": "扣折舊等前營運開支",
          "unit": "百萬港元",
          "scale": 1000000,
          "currency": "HKD",
          "basis": "經審核合併財務報表原列金額",
          "observations": [
            {
              "year": "2023",
              "value": -41672,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2024",
              "printedPage": "180",
              "pdfPage": 182,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2023-01-01",
              "fiscalEnd": "2023-12-31"
            },
            {
              "year": "2024",
              "value": -42107,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2025",
              "printedPage": "172",
              "pdfPage": 174,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2024-01-01",
              "fiscalEnd": "2024-12-31"
            },
            {
              "year": "2025",
              "value": -37755,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2025",
              "printedPage": "172",
              "pdfPage": 174,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2025-01-01",
              "fiscalEnd": "2025-12-31"
            }
          ]
        },
        {
          "key": "hkTransportRevenue",
          "originalLabel": "Revenue from Hong Kong transport operations",
          "label": "香港運輸收入",
          "unit": "百萬港元",
          "scale": 1000000,
          "currency": "HKD",
          "basis": "香港運輸業務收入，非全組",
          "observations": [
            {
              "year": "2023",
              "value": 20131,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "香港運輸分部",
              "sourceId": "mtr2024",
              "printedPage": "180",
              "pdfPage": 182,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2023-01-01",
              "fiscalEnd": "2023-12-31"
            },
            {
              "year": "2024",
              "value": 23013,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "香港運輸分部",
              "sourceId": "mtr2025",
              "printedPage": "172",
              "pdfPage": 174,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2024-01-01",
              "fiscalEnd": "2024-12-31"
            },
            {
              "year": "2025",
              "value": 23595,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "香港運輸分部",
              "sourceId": "mtr2025",
              "printedPage": "172",
              "pdfPage": 174,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2025-01-01",
              "fiscalEnd": "2025-12-31"
            }
          ]
        },
        {
          "key": "hkPropertyDevelopmentProfit",
          "originalLabel": "Hong Kong property development profit from share of surplus, income and interest in unsold properties",
          "label": "香港物業開發利潤",
          "unit": "百萬港元",
          "scale": 1000000,
          "currency": "HKD",
          "basis": "獨立的香港物業開發項目利潤，不屬香港票務收入",
          "observations": [
            {
              "year": "2023",
              "value": 2329,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "香港物業開發",
              "sourceId": "mtr2024",
              "printedPage": "180",
              "pdfPage": 182,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2023-01-01",
              "fiscalEnd": "2023-12-31"
            },
            {
              "year": "2024",
              "value": 12185,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "香港物業開發",
              "sourceId": "mtr2025",
              "printedPage": "172",
              "pdfPage": 174,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2024-01-01",
              "fiscalEnd": "2024-12-31"
            },
            {
              "year": "2025",
              "value": 13212,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "香港物業開發",
              "sourceId": "mtr2025",
              "printedPage": "172",
              "pdfPage": 174,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2025-01-01",
              "fiscalEnd": "2025-12-31"
            }
          ]
        },
        {
          "key": "capitalExpenditure",
          "originalLabel": "Capital expenditure",
          "label": "現金資本開支",
          "unit": "百萬港元",
          "scale": 1000000,
          "currency": "HKD",
          "basis": "經審核合併財務報表原列金額",
          "observations": [
            {
              "year": "2023",
              "value": -12576,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2024",
              "printedPage": "184",
              "pdfPage": 186,
              "table": "Consolidated statement of cash flows",
              "fiscalStart": "2023-01-01",
              "fiscalEnd": "2023-12-31"
            },
            {
              "year": "2024",
              "value": -19416,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2025",
              "printedPage": "176",
              "pdfPage": 178,
              "table": "Consolidated statement of cash flows",
              "fiscalStart": "2024-01-01",
              "fiscalEnd": "2024-12-31"
            },
            {
              "year": "2025",
              "value": -19594,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
              "sourceId": "mtr2025",
              "printedPage": "176",
              "pdfPage": 178,
              "table": "Consolidated statement of cash flows",
              "fiscalStart": "2025-01-01",
              "fiscalEnd": "2025-12-31"
            }
          ]
        }
      ],
      "analysis": [
        {
          "fromYear": "2023",
          "toYear": "2024",
          "kind": "interpretation",
          "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
          "text": "2024年股東溢利增至15,772百萬港元。報表顯示香港物業開發利潤由2,329增至12,185百萬港元，遠大於票務收入的變動，故不能只解讀為乘客增加。管理層稱經營現金流改善亦來自經常業務復甦。",
          "sources": [
            {
              "sourceId": "mtr2024",
              "printedPage": "180",
              "pdfPage": 182,
              "table": null
            },
            {
              "sourceId": "mtr2024",
              "printedPage": "56",
              "pdfPage": 58,
              "table": null
            }
          ]
        },
        {
          "fromYear": "2024",
          "toYear": "2025",
          "kind": "management-explanation",
          "scope": "港鐵合併集團，包含香港運輸、車站商務、物業及中國內地與海外業務。",
          "text": "2025年全組收入及股東溢利下跌，但香港運輸收入上升。管理層稱經營現金流下降主要涉及物業盈利的稅款及英國Elizabeth Line交接後向債權人付款。年結現金增加亦包含發行永續資本證券的資金，不能當作乘車業務多賺的現金。",
          "sources": [
            {
              "sourceId": "mtr2025",
              "printedPage": "54-55",
              "pdfPage": 56,
              "table": null
            },
            {
              "sourceId": "mtr2025",
              "printedPage": "55",
              "pdfPage": 57,
              "table": null
            }
          ]
        }
      ],
      "limits": [
        "集團混合運輸及房地產，不能以全組利潤率代表香港鐵路票務利潤率。",
        "營運溢利小計尚未扣折舊、攤銷及浮動年付款，保留完整名稱。",
        "2025永續資本證券列作權益，與貸款分開。",
        "個案不代表航空、貨運或整個H門類。"
      ],
      "retrievedAt": "2026-10-22",
      "sources": [
        {
          "id": "mtr2025",
          "title": "MTR Corporation Limited Annual Report 2025",
          "url": "https://www.mtr.com.hk/archive/corporate/en/investor/annual2025/EMTRAR25.pdf",
          "publicationDate": "2026-04-16"
        },
        {
          "id": "mtr2024",
          "title": "MTR Corporation Limited Annual Report 2024",
          "url": "https://www.mtr.com.hk/archive/corporate/en/investor/annual2024/EMTRAR24.pdf",
          "publicationDate": null
        }
      ]
    }
  ]
};
