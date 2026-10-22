export default {
  "code": "F",
  "title": "建造",
  "checkedOn": "2026-10-22",
  "classification": {
    "intro": "按工程合約建造、修繕或改建樓宇及土木設施，可由總承建商分判工序。",
    "models": [
      {
        "title": "承建與分判",
        "text": "負責整個項目的承建商與負責個別工序的分判商，承擔的工作不同。"
      }
    ],
    "readFor": "已確認工程收入不等於已收款，要連同合約資產及經營現金流閱讀。",
    "printedPage": 177,
    "pdfPage": 181,
    "source": {
      "id": "hsic-manual",
      "title": "香港標準行業分類 2.0 版，第三部分",
      "publisher": "政府統計處",
      "url": "https://www.statistics.gov.hk/pub/B2XX0004012008XXXXB0300.pdf",
      "publicationDate": "2009-07-17"
    }
  },
  "coverage": {
    "section": "F",
    "label": "建造",
    "status": "available",
    "groupIds": [
      "ind_ASBCRE_F"
    ],
    "reason": "已收集表列 2024 行業收益、成本及規模資料，須依個別組別口徑。"
  },
  "sources": [
    {
      "id": "615-73001",
      "title": "Selected statistics for all companies in the industry section of construction",
      "url": "https://www.censtatd.gov.hk/en/web_table.html?id=615-73001",
      "urlTc": "https://www.censtatd.gov.hk/tc/web_table.html?id=615-73001",
      "dictionaryUrl": "https://www.censtatd.gov.hk/data/en/table_615-73001_lang.json",
      "dictionaryTcUrl": "https://www.censtatd.gov.hk/data/tc/table_615-73001_lang.json",
      "apiUrl": "https://www.censtatd.gov.hk/api/post.php",
      "reportId": "B10800112024AN24",
      "reportTitle": "Key Statistics on Business Performance and Operating Characteristics of the Building, Construction and Real Estate Sectors",
      "reportUrl": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800112024AN24",
      "termsUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf",
      "rawFile": "raw/615-73001.2024.json",
      "requestFile": "raw/615-73001.request.json",
      "releaseDate": null,
      "lastModifiedDate": "2025-11-27",
      "period": "2024",
      "tableNotes": "The above statistics are compiled based on the Hong Kong Standard Industrial Classification (HSIC) Version 2.0. Users may also download past statistics based on HSIC Version 1.1 for reference.",
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
      "id": "ind_ASBCRE_F",
      "label": "建造業",
      "labelEn": "Construction",
      "hsicSections": [
        "F"
      ],
      "scope": "香港；2024 經濟活動按年統計調查。HSIC F 建造業。從業人數為直接聘用人數；薪酬項目同時包括只供應勞工的分判費用。",
      "period": "2024",
      "metrics": [
        {
          "key": "feeSubcontracting",
          "label": "連工包料的分判承建商費用",
          "labelEn": "Payment for sub-contract works rendered by fee sub-contractors",
          "value": 217016,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73001",
          "table": "615-73001",
          "page": null,
          "basis": "2024 ASEA；香港；Construction；採用原表定義。",
          "sourceSeries": "FEE_SUB",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 217016,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "grossSurplus",
          "label": "盈餘總額",
          "labelEn": "Gross surplus",
          "value": 33621,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73001",
          "table": "615-73001",
          "page": null,
          "basis": "2024 ASEA；香港；Construction；採用原表定義。盈餘總額不是會計淨利潤；以該行業官方定義為準。",
          "sourceSeries": "GS",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 33621,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "grossConstructionWork",
          "label": "建造工程總值",
          "labelEn": "Gross value of construction works performed",
          "value": 463949,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73001",
          "table": "615-73001",
          "page": null,
          "basis": "2024 ASEA；香港；Construction；採用原表定義。",
          "sourceSeries": "GVCW",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 463949,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "companies",
          "label": "公司數目",
          "labelEn": "Number of companies",
          "value": 26019,
          "unit": "Number",
          "status": "published",
          "sourceId": "615-73001",
          "table": "615-73001",
          "page": null,
          "basis": "2024 ASEA；香港；Construction；採用原表定義。公司是統計調查單位，不是門店數或公司註冊處法人總數。",
          "sourceSeries": "HC",
          "sourcePresentation": "Raw_hc_n",
          "sdValue": "",
          "rawFigure": 26019,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "miscellaneousOperatingExpenses",
          "label": "雜項營運開支",
          "labelEn": "Miscellaneous operating expenses",
          "value": 35119,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73001",
          "table": "615-73001",
          "page": null,
          "basis": "2024 ASEA；香港；Construction；採用原表定義。",
          "sourceSeries": "MIS_EXP",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 35119,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "personsDirectlyEngaged",
          "label": "直接聘用的從業人數",
          "labelEn": "Number of persons directly engaged",
          "value": 197454,
          "unit": "Number",
          "status": "published",
          "sourceId": "615-73001",
          "table": "615-73001",
          "page": null,
          "basis": "2024 ASEA；香港；Construction；採用原表定義。按填報年度終結時人數編製；不是住戶調查就業人口。",
          "sourceSeries": "PE_D_ASEA",
          "sourcePresentation": "Raw_per_n",
          "sdValue": "",
          "rawFigure": 197454,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "valueAdded",
          "label": "行業增加價值",
          "labelEn": "Industry value added",
          "value": 138280,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73001",
          "table": "615-73001",
          "page": null,
          "basis": "2024 ASEA；香港；Construction；採用原表定義。這是 ASEA 行業增加價值，不是 GDP 框架數值或 GDP 比重。",
          "sourceSeries": "IVA",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 138280,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "otherBusinessReceipts",
          "label": "其他業務收益",
          "labelEn": "Other business receipts",
          "value": 9751,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73001",
          "table": "615-73001",
          "page": null,
          "basis": "2024 ASEA；香港；Construction；採用原表定義。",
          "sourceSeries": "BR_OTH",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 9751,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "compensationAndLabourSubcontracting",
          "label": "僱員薪酬及付予只供應勞工的分判承建商費用",
          "labelEn": "Compensation of employees and payments to labour-only sub-contractors",
          "value": 108440,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73001",
          "table": "615-73001",
          "page": null,
          "basis": "2024 ASEA；香港；Construction；採用原表定義。",
          "sourceSeries": "COMP_LAB",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 108440,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        },
        {
          "key": "materialsUtilitiesMaintenance",
          "label": "材料物料的消耗，燃料、電力及用水費用，以及維修保養服務",
          "labelEn": "Consumption of materials and supplies; fuels, electricity and water; and maintenance services",
          "value": 79504,
          "unit": "HK$ million",
          "status": "published",
          "sourceId": "615-73001",
          "table": "615-73001",
          "page": null,
          "basis": "2024 ASEA；香港；Construction；採用原表定義。",
          "sourceSeries": "CONSUM",
          "sourcePresentation": "Raw_M_hkd_d",
          "sdValue": "",
          "rawFigure": 79504,
          "definitionSourceId": "B10800112024AN24",
          "definitionUrl": "https://www.censtatd.gov.hk/wbr/B1080011/B10800112024AN24/att/en/59/Terms%20and%20Definitions_14.pdf"
        }
      ],
      "sourceGroupingCode": "ind_ASBCRE_F",
      "parentGroupingCode": null,
      "hsicBoundary": "41-43",
      "sourceTables": [
        "615-73001"
      ],
      "coverageSource": "https://www.censtatd.gov.hk/en/wbr.html?ecode=B10800112024AN24",
      "costComponents": [
        "compensationAndLabourSubcontracting",
        "materialsUtilitiesMaintenance",
        "feeSubcontracting",
        "miscellaneousOperatingExpenses"
      ],
      "costBreakdownCompleteForSurplus": true,
      "surplusFormula": "GVCW + BR_OTH - COMP_LAB - CONSUM - FEE_SUB - MIS_EXP = GS",
      "definitionPdfPages": [
        3,
        4,
        5
      ],
      "definitionPrintedPages": null
    }
  ],
  "context": null,
  "gap": null,
  "cases": [
    {
      "id": "buildking",
      "entity": "利基控股有限公司 Build King Holdings Limited",
      "hsicSections": [
        "F"
      ],
      "modelType": "建造工程承包",
      "whyThisCase": "工程按進度入帳，收款時間與毛利不同，適合解釋合約資產、客戶預付款及現金。",
      "geography": "香港及中國內地",
      "consolidationScope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
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
          "text": "承接樓宇、土木、地基、機電和裝修工程。內地業務另有污水及蒸汽供應。",
          "sources": [
            {
              "sourceId": "buildking2025",
              "printedPage": "7",
              "pdfPage": 8,
              "table": null
            }
          ]
        },
        "customers": {
          "text": "香港政府部門、公營機構、學校及私人發展商等工程業主。",
          "sources": [
            {
              "sourceId": "buildking2025",
              "printedPage": "45",
              "pdfPage": 46,
              "table": null
            }
          ]
        },
        "revenueModel": {
          "text": "與業主簽工程合約，按已完成工程確認收入。未收款的已完成工程可形成合約資產，收入不等於當年收現。",
          "sources": [
            {
              "sourceId": "buildking2025",
              "printedPage": "125-126",
              "pdfPage": 126,
              "table": null
            }
          ]
        },
        "costs": {
          "text": "成本涉及建造工程投入及分包，另有員工、設備折舊、行政及融資費用。",
          "sources": [
            {
              "sourceId": "buildking2025",
              "printedPage": "110",
              "pdfPage": 111,
              "table": null
            },
            {
              "sourceId": "buildking2025",
              "printedPage": "7",
              "pdfPage": 8,
              "table": null
            }
          ]
        },
        "process": [
          {
            "text": "投標取得合約，安排地盤、工人、物料及分包。",
            "sources": [
              {
                "sourceId": "buildking2025",
                "printedPage": "7",
                "pdfPage": 8,
                "table": null
              }
            ]
          },
          {
            "text": "按工程進度施工及申領工程款，完成工程並結算。合約資產及負債反映確認收入與付款的時間差。",
            "sources": [
              {
                "sourceId": "buildking2025",
                "printedPage": "167",
                "pdfPage": 168,
                "table": null
              }
            ]
          }
        ],
        "influences": {
          "text": "管理層指出，新項目早期進度、收地延誤及價格調整指數會影響工程收入和利潤。",
          "sources": [
            {
              "sourceId": "buildking2025",
              "printedPage": "7",
              "pdfPage": 8,
              "table": null
            }
          ]
        }
      },
      "metrics": [
        {
          "key": "revenue",
          "originalLabel": "Revenue from services",
          "label": "服務收入",
          "unit": "千港元",
          "scale": 1000,
          "currency": "HKD",
          "basis": "經審核全年合併財務報表，原列金額",
          "observations": [
            {
              "year": "2023",
              "value": 12507050,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2024",
              "printedPage": "87",
              "pdfPage": 88,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2023-01-01",
              "fiscalEnd": "2023-12-31"
            },
            {
              "year": "2024",
              "value": 14368536,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2025",
              "printedPage": "110",
              "pdfPage": 111,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2024-01-01",
              "fiscalEnd": "2024-12-31"
            },
            {
              "year": "2025",
              "value": 13842704,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2025",
              "printedPage": "110",
              "pdfPage": 111,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2025-01-01",
              "fiscalEnd": "2025-12-31"
            }
          ]
        },
        {
          "key": "grossProfit",
          "originalLabel": "Gross profit",
          "label": "毛利",
          "unit": "千港元",
          "scale": 1000,
          "currency": "HKD",
          "basis": "經審核全年合併財務報表，原列金額",
          "observations": [
            {
              "year": "2023",
              "value": 1306699,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2024",
              "printedPage": "87",
              "pdfPage": 88,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2023-01-01",
              "fiscalEnd": "2023-12-31"
            },
            {
              "year": "2024",
              "value": 1156137,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2025",
              "printedPage": "110",
              "pdfPage": 111,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2024-01-01",
              "fiscalEnd": "2024-12-31"
            },
            {
              "year": "2025",
              "value": 1040639,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2025",
              "printedPage": "110",
              "pdfPage": 111,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2025-01-01",
              "fiscalEnd": "2025-12-31"
            }
          ]
        },
        {
          "key": "attributableProfit",
          "originalLabel": "Owners of the Company",
          "label": "股東應佔溢利",
          "unit": "千港元",
          "scale": 1000,
          "currency": "HKD",
          "basis": "經審核全年合併財務報表，原列金額",
          "observations": [
            {
              "year": "2023",
              "value": 473518,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2024",
              "printedPage": "87",
              "pdfPage": 88,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2023-01-01",
              "fiscalEnd": "2023-12-31"
            },
            {
              "year": "2024",
              "value": 433996,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2025",
              "printedPage": "110",
              "pdfPage": 111,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2024-01-01",
              "fiscalEnd": "2024-12-31"
            },
            {
              "year": "2025",
              "value": 452732,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2025",
              "printedPage": "110",
              "pdfPage": 111,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2025-01-01",
              "fiscalEnd": "2025-12-31"
            }
          ]
        },
        {
          "key": "operatingCashFlow",
          "originalLabel": "Net cash from operating activities",
          "label": "經營活動現金淨流入",
          "unit": "千港元",
          "scale": 1000,
          "currency": "HKD",
          "basis": "經審核全年合併財務報表，原列金額",
          "observations": [
            {
              "year": "2023",
              "value": 253784,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2024",
              "printedPage": "92",
              "pdfPage": 93,
              "table": "Consolidated statement of cash flows",
              "fiscalStart": "2023-01-01",
              "fiscalEnd": "2023-12-31"
            },
            {
              "year": "2024",
              "value": 520240,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2025",
              "printedPage": "115",
              "pdfPage": 116,
              "table": "Consolidated statement of cash flows",
              "fiscalStart": "2024-01-01",
              "fiscalEnd": "2024-12-31"
            },
            {
              "year": "2025",
              "value": 829140,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2025",
              "printedPage": "115",
              "pdfPage": 116,
              "table": "Consolidated statement of cash flows",
              "fiscalStart": "2025-01-01",
              "fiscalEnd": "2025-12-31"
            }
          ]
        },
        {
          "key": "cash",
          "originalLabel": "Bank balances and cash",
          "label": "銀行結餘及現金",
          "unit": "千港元",
          "scale": 1000,
          "currency": "HKD",
          "basis": "年結日結餘，不含另列抵押及長於三個月的定存",
          "observations": [
            {
              "year": "2023",
              "value": 1299649,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2024",
              "printedPage": "89",
              "pdfPage": 90,
              "table": "Consolidated statement of financial position",
              "fiscalStart": "2023-01-01",
              "fiscalEnd": "2023-12-31"
            },
            {
              "year": "2024",
              "value": 1530568,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2025",
              "printedPage": "112",
              "pdfPage": 113,
              "table": "Consolidated statement of financial position",
              "fiscalStart": "2024-01-01",
              "fiscalEnd": "2024-12-31"
            },
            {
              "year": "2025",
              "value": 2586879,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2025",
              "printedPage": "112",
              "pdfPage": 113,
              "table": "Consolidated statement of financial position",
              "fiscalStart": "2025-01-01",
              "fiscalEnd": "2025-12-31"
            }
          ]
        },
        {
          "key": "borrowings",
          "originalLabel": "Bank loans - due within one year",
          "label": "銀行貸款",
          "unit": "千港元",
          "scale": 1000,
          "currency": "HKD",
          "basis": "年結日銀行貸款，表內無非流動銀行貸款，不含租賃及關聯方往來",
          "observations": [
            {
              "year": "2023",
              "value": 215471,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2024",
              "printedPage": "89",
              "pdfPage": 90,
              "table": "Consolidated statement of financial position",
              "fiscalStart": "2023-01-01",
              "fiscalEnd": "2023-12-31"
            },
            {
              "year": "2024",
              "value": 75696,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2025",
              "printedPage": "112",
              "pdfPage": 113,
              "table": "Consolidated statement of financial position",
              "fiscalStart": "2024-01-01",
              "fiscalEnd": "2024-12-31"
            },
            {
              "year": "2025",
              "value": 88344,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2025",
              "printedPage": "112",
              "pdfPage": 113,
              "table": "Consolidated statement of financial position",
              "fiscalStart": "2025-01-01",
              "fiscalEnd": "2025-12-31"
            }
          ]
        },
        {
          "key": "costOfSales",
          "originalLabel": "Cost of sales",
          "label": "銷售成本",
          "unit": "千港元",
          "scale": 1000,
          "currency": "HKD",
          "basis": "經審核全年合併財務報表，原列金額",
          "observations": [
            {
              "year": "2023",
              "value": -11200351,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2024",
              "printedPage": "87",
              "pdfPage": 88,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2023-01-01",
              "fiscalEnd": "2023-12-31"
            },
            {
              "year": "2024",
              "value": -13212399,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2025",
              "printedPage": "110",
              "pdfPage": 111,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2024-01-01",
              "fiscalEnd": "2024-12-31"
            },
            {
              "year": "2025",
              "value": -12802065,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2025",
              "printedPage": "110",
              "pdfPage": 111,
              "table": "Consolidated statement of profit or loss",
              "fiscalStart": "2025-01-01",
              "fiscalEnd": "2025-12-31"
            }
          ]
        },
        {
          "key": "contractAssets",
          "originalLabel": "Contract assets",
          "label": "合約資產",
          "unit": "千港元",
          "scale": 1000,
          "currency": "HKD",
          "basis": "年結日已確認工程但未成為無條件收款權的合約資產",
          "observations": [
            {
              "year": "2023",
              "value": 3658732,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2024",
              "printedPage": "89",
              "pdfPage": 90,
              "table": "Consolidated statement of financial position",
              "fiscalStart": "2023-01-01",
              "fiscalEnd": "2023-12-31"
            },
            {
              "year": "2024",
              "value": 4020830,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2025",
              "printedPage": "112",
              "pdfPage": 113,
              "table": "Consolidated statement of financial position",
              "fiscalStart": "2024-01-01",
              "fiscalEnd": "2024-12-31"
            },
            {
              "year": "2025",
              "value": 3536438,
              "status": "年報財務報表所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
              "sourceId": "buildking2025",
              "printedPage": "112",
              "pdfPage": 113,
              "table": "Consolidated statement of financial position",
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
          "kind": "management-explanation",
          "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
          "text": "2024年收入升而毛利跌。管理層解釋，一項土木工程接近完成，利潤貢獻減少。財務資產公平值變動及稅項亦影響股東溢利，不能只用營業額判斷盈利。",
          "sources": [
            {
              "sourceId": "buildking2024",
              "printedPage": "8",
              "pdfPage": 9,
              "table": null
            }
          ]
        },
        {
          "fromYear": "2024",
          "toYear": "2025",
          "kind": "management-explanation",
          "scope": "利基控股合併集團，主要香港建造工程，另含中國內地環保基建及投資。",
          "text": "2025年新獲合約仍在早期，管理層稱毛利貢獻未充分反映。行政、其他費用及合營虧損減少，令股東溢利回升。經營現金流的改善同時涉及合約資產減少及合約負債增加。",
          "sources": [
            {
              "sourceId": "buildking2025",
              "printedPage": "7",
              "pdfPage": 8,
              "table": null
            },
            {
              "sourceId": "buildking2025",
              "printedPage": "115",
              "pdfPage": 116,
              "table": null
            }
          ]
        }
      ],
      "limits": [
        "香港建造工程與內地環保基建合併在全組現金及淨利中。不可稱為純香港工程利潤。",
        "銀行貸款沒有包括租賃負債、應付款或關聯方往來。",
        "合約資產不等於銀行現金，亦不保證即時收款。",
        "此個案不代表香港整個建造業。"
      ],
      "retrievedAt": "2026-10-22",
      "sources": [
        {
          "id": "buildking2025",
          "title": "Build King Holdings Limited Annual Report 2025",
          "url": "https://www.buildking.hk/uploads/E240_AR_652133bc08.pdf",
          "publicationDate": "2026-04-28"
        },
        {
          "id": "buildking2024",
          "title": "Build King Holdings Limited Annual Report 2024",
          "url": "https://www.buildking.hk/uploads/ew_00240ar_21032025_2704dfeccc.pdf",
          "publicationDate": null
        }
      ]
    }
  ]
};
