export default {
  "code": "S",
  "title": "其他服務",
  "checkedOn": "2026-10-22",
  "classification": {
    "intro": "包括會員組織、維修，以及其他個人服務；不等於所有未列出的商業服務。",
    "models": [
      {
        "title": "個人服務與維修",
        "text": "提供個人服務或維修汽車、電腦及家居用品等。"
      },
      {
        "title": "會員組織",
        "text": "代表會員利益或推廣特定理念，與一般售貨模式不同。"
      }
    ],
    "readFor": "美容服務個案與醫療、化妝品零售或批發分開標示。",
    "printedPage": 355,
    "pdfPage": 359,
    "source": {
      "id": "hsic-manual",
      "title": "香港標準行業分類 2.0 版，第三部分",
      "publisher": "政府統計處",
      "url": "https://www.statistics.gov.hk/pub/B2XX0004012008XXXXB0300.pdf",
      "publicationDate": "2009-07-17"
    }
  },
  "coverage": {
    "section": "S",
    "label": "其他服務",
    "status": "combined-and-suppressed",
    "groupIds": [
      "ind_SMW_ASEA_2018_P-S"
    ],
    "reason": "660-78001 只有有僱員公司之 P-S 合併組，2024 查詢的三項均因精確度或保密考慮不發布；沒有本主類獨立的同形年度盈利表。"
  },
  "sources": [
    {
      "id": "660-78001",
      "title": "Operating characteristics of enterprises analysed by sector (only including companies with employees), 2018 - 2024",
      "url": "https://www.censtatd.gov.hk/en/web_table.html?id=660-78001",
      "rawFile": "raw/660-78001.2024.json",
      "requestFile": "raw/660-78001.request.json",
      "tableNotes": "For detailed statistics on the operating characteristics of enterprises of 2008-2017, please refer to Table 660-78001A .",
      "period": "2024",
      "publisher": "香港政府統計處"
    }
  ],
  "groups": [
    {
      "id": "ind_SMW_ASEA_2018_P-S",
      "label": "社會及個人服務，P-S 合併",
      "labelEn": "Social and personal services",
      "hsicSections": [
        "P",
        "Q",
        "R",
        "S"
      ],
      "scope": "香港；只包括有僱員的公司；P-S 合併而非四個主類各自的數值。2024 三項均不發布。",
      "period": "2024",
      "metrics": [
        {
          "key": "companiesWithEmployees",
          "label": "有僱用員工的公司數目",
          "labelEn": "Number of companies with employees",
          "value": null,
          "unit": "Number",
          "status": "suppressed",
          "sourceId": "660-78001",
          "table": "660-78001",
          "page": null,
          "basis": "香港；只包括有僱員的公司；P-S 合併而非四個主類各自的數值。2024 三項均不發布。",
          "missingReason": "Figure is not released due to precision consideration and/or in order to safeguard confidentiality of information of individual companies.",
          "sourceSeries": "NOE",
          "sdValue": "[*2]",
          "rawFigure": ""
        },
        {
          "key": "medianProfitRatio",
          "label": "盈利率(中位數)",
          "labelEn": "Profit ratio (Median)",
          "value": null,
          "unit": "(%)",
          "status": "suppressed",
          "sourceId": "660-78001",
          "table": "660-78001",
          "page": null,
          "basis": "香港；只包括有僱員的公司；P-S 合併而非四個主類各自的數值。2024 三項均不發布。",
          "missingReason": "Figure is not released due to precision consideration and/or in order to safeguard confidentiality of information of individual companies.",
          "sourceSeries": "PR_M",
          "sdValue": "[*2]",
          "rawFigure": ""
        },
        {
          "key": "compensationShareOfOperatingExpenses",
          "label": "僱員薪酬佔總經營開支的百分比",
          "labelEn": "Share of compensation of employees in total operating expenses",
          "value": null,
          "unit": "(%)",
          "status": "suppressed",
          "sourceId": "660-78001",
          "table": "660-78001",
          "page": null,
          "basis": "香港；只包括有僱員的公司；P-S 合併而非四個主類各自的數值。2024 三項均不發布。",
          "missingReason": "Figure is not released due to precision consideration and/or in order to safeguard confidentiality of information of individual companies.",
          "sourceSeries": "SOCOEITOE",
          "sdValue": "[*2]",
          "rawFigure": ""
        }
      ],
      "sourceTables": [
        "660-78001"
      ],
      "parentGroupingCode": null,
      "costComponents": [],
      "costBreakdownCompleteForSurplus": false,
      "surplusFormula": null
    }
  ],
  "context": null,
  "gap": null,
  "cases": [
    {
      "id": "sausantong",
      "entity": "修身堂控股有限公司 Sau San Tong Holdings Limited",
      "hsicSections": [
        "S"
      ],
      "modelType": "美容、纖體及水療服務，另列混合業務集團財務",
      "geography": "香港美容及纖體服務；集團另有中國內地化妝品分銷及其他業務。",
      "consolidationScope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
      "currency": "HKD",
      "fiscalYears": [
        {
          "label": "2024",
          "start": "2023-04-01",
          "end": "2024-03-31"
        },
        {
          "label": "2025",
          "start": "2024-04-01",
          "end": "2025-03-31"
        },
        {
          "label": "2026",
          "start": "2025-04-01",
          "end": "2026-03-31"
        }
      ],
      "audited": true,
      "retrievedAt": "2026-10-22",
      "whyThisCase": "年報分開披露美容纖體服務分部，可解釋預付套票與實際服務收入的差別。集團主要收入來自化妝品分銷，因此本頁明列美容分部，並將合併財務另作背景。",
      "sources": [
        {
          "id": "sst2025",
          "title": "Sau San Tong Holdings Limited Annual Report 2024/25",
          "url": "https://www1.hkexnews.hk/listedco/listconews/gem/2025/0703/2025070301180.pdf",
          "publicationDate": "2025-07-03"
        },
        {
          "id": "sst2026",
          "title": "Sau San Tong Holdings Limited Annual Report 2025/26",
          "url": "https://www1.hkexnews.hk/listedco/listconews/gem/2026/0703/2026070300922.pdf",
          "publicationDate": "2026-07-03"
        }
      ],
      "business": {
        "provides": {
          "text": "本案例聚焦在香港美容、纖體及水療中心提供的個人服務。化妝品分銷是另一項生意，並非同一種服務。",
          "sources": [
            {
              "sourceId": "sst2026",
              "printedPage": "13",
              "pdfPage": 14,
              "table": "Management discussion and analysis"
            },
            {
              "sourceId": "sst2026",
              "printedPage": "14",
              "pdfPage": 15,
              "table": "Management discussion and analysis"
            },
            {
              "sourceId": "sst2026",
              "printedPage": "81",
              "pdfPage": 82,
              "table": "ESG report reporting scope"
            }
          ]
        },
        "customers": {
          "text": "中心向個人顧客提供美容及纖體療程；中國內地分銷業務則面向零售渠道，兩者客戶不同。",
          "sources": [
            {
              "sourceId": "sst2026",
              "printedPage": "13",
              "pdfPage": 14,
              "table": "Management discussion and analysis"
            },
            {
              "sourceId": "sst2026",
              "printedPage": "14",
              "pdfPage": 15,
              "table": "Management discussion and analysis"
            }
          ]
        },
        "revenueModel": {
          "text": "美容及纖體服務於完成服務時確認收入。部分服務預先收款售出套票，通常服務期為一年；未提供部分先列遞延收入或合約負債，收了現金不等於即時賺到利潤。",
          "sources": [
            {
              "sourceId": "sst2026",
              "printedPage": "186",
              "pdfPage": 187,
              "table": "Note 2(v) revenue recognition"
            }
          ]
        },
        "costs": {
          "text": "管理層指出美容業務承受人手及租金等成本。合併報表的銷售及服務成本同時包括產品分銷，不能當成美容中心單獨成本；另有銷售、行政及減值費用。",
          "sources": [
            {
              "sourceId": "sst2026",
              "printedPage": "13",
              "pdfPage": 14,
              "table": "Management discussion and analysis"
            },
            {
              "sourceId": "sst2026",
              "printedPage": "156",
              "pdfPage": 157,
              "table": "Consolidated statement of profit or loss"
            },
            {
              "sourceId": "sst2026",
              "printedPage": "202",
              "pdfPage": 203,
              "table": "Note 10 segment results"
            }
          ]
        },
        "process": [
          {
            "text": "向顧客銷售療程或預付套票，安排中心、設備及員工。",
            "sources": [
              {
                "sourceId": "sst2026",
                "printedPage": "13",
                "pdfPage": 14,
                "table": "Management discussion and analysis"
              },
              {
                "sourceId": "sst2026",
                "printedPage": "186",
                "pdfPage": 187,
                "table": "Note 2(v) revenue recognition"
              }
            ]
          },
          {
            "text": "按預約提供服務，完成相應療程才確認收入。未用的預付服務仍是公司要向顧客履約的責任。",
            "sources": [
              {
                "sourceId": "sst2026",
                "printedPage": "186",
                "pdfPage": 187,
                "table": "Note 2(v) revenue recognition"
              }
            ]
          }
        ],
        "influences": {
          "text": "管理層指出消費者北上消費、競爭、顧客信心及人手租金成本影響美容服務。集團整體盈利另受化妝品分銷、證券投資及放債減值影響。",
          "sources": [
            {
              "sourceId": "sst2026",
              "printedPage": "13",
              "pdfPage": 14,
              "table": "Management discussion and analysis"
            },
            {
              "sourceId": "sst2026",
              "printedPage": "8",
              "pdfPage": 9,
              "table": "Management discussion and analysis"
            },
            {
              "sourceId": "sst2026",
              "printedPage": "202",
              "pdfPage": 203,
              "table": "Note 10 segment results"
            }
          ]
        }
      },
      "metrics": [
        {
          "key": "beautyRevenue",
          "label": "美容及纖體分部收入",
          "originalLabel": "Reportable segment revenue, provision of beauty and slimming services",
          "unit": "千港元",
          "currency": "HKD",
          "scale": 1000,
          "basis": "美容及纖體服務分部收入，不含化妝品分銷及其他集團收入。",
          "observations": [
            {
              "year": "2024",
              "value": 57465,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂美容及纖體服務分部，與合併化妝品分銷及投資等業務分開。",
              "sourceId": "sst2025",
              "printedPage": "171",
              "pdfPage": 172,
              "table": "Note 10 segment results"
            },
            {
              "year": "2025",
              "value": 60770,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂美容及纖體服務分部，與合併化妝品分銷及投資等業務分開。",
              "sourceId": "sst2026",
              "printedPage": "203",
              "pdfPage": 204,
              "table": "Note 10 segment results"
            },
            {
              "year": "2026",
              "value": 60934,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂美容及纖體服務分部，與合併化妝品分銷及投資等業務分開。",
              "sourceId": "sst2026",
              "printedPage": "202",
              "pdfPage": 203,
              "table": "Note 10 segment results"
            }
          ]
        },
        {
          "key": "beautyResult",
          "label": "美容及纖體分部業績",
          "originalLabel": "Reportable segment results, provision of beauty and slimming services",
          "unit": "千港元",
          "currency": "HKD",
          "scale": 1000,
          "basis": "管理層使用的可呈報分部業績，不是稅後淨利潤。最新報告列明未包括融資成本及未分配公司開支；2024數字沿用2025年報比較披露。",
          "observations": [
            {
              "year": "2024",
              "value": -26398,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂美容及纖體服務分部，與合併化妝品分銷及投資等業務分開。",
              "sourceId": "sst2025",
              "printedPage": "171",
              "pdfPage": 172,
              "table": "Note 10 segment results"
            },
            {
              "year": "2025",
              "value": -11894,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂美容及纖體服務分部，與合併化妝品分銷及投資等業務分開。",
              "sourceId": "sst2026",
              "printedPage": "203",
              "pdfPage": 204,
              "table": "Note 10 segment results"
            },
            {
              "year": "2026",
              "value": -16222,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂美容及纖體服務分部，與合併化妝品分銷及投資等業務分開。",
              "sourceId": "sst2026",
              "printedPage": "202",
              "pdfPage": 203,
              "table": "Note 10 segment results"
            }
          ]
        },
        {
          "key": "revenue",
          "label": "集團合併收益，含分銷及投資業績",
          "originalLabel": "Revenue",
          "unit": "千港元",
          "currency": "HKD",
          "scale": 1000,
          "basis": "合併收益包含化妝品分銷、美容、產品銷售、放債利息及證券投資淨業績，不是美容服務營業額。",
          "observations": [
            {
              "year": "2024",
              "value": 1092735,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2025",
              "printedPage": "124",
              "pdfPage": 125,
              "table": "Consolidated statement of profit or loss"
            },
            {
              "year": "2025",
              "value": 840025,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2026",
              "printedPage": "156",
              "pdfPage": 157,
              "table": "Consolidated statement of profit or loss"
            },
            {
              "year": "2026",
              "value": 897913,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2026",
              "printedPage": "156",
              "pdfPage": 157,
              "table": "Consolidated statement of profit or loss"
            }
          ]
        },
        {
          "key": "costOfServices",
          "label": "集團銷售及服務成本",
          "originalLabel": "Cost of sales and services provided",
          "unit": "千港元",
          "currency": "HKD",
          "scale": 1000,
          "basis": "全年合併財務報表，原列金額。費用保留報表負號。",
          "observations": [
            {
              "year": "2024",
              "value": -988167,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2025",
              "printedPage": "124",
              "pdfPage": 125,
              "table": "Consolidated statement of profit or loss"
            },
            {
              "year": "2025",
              "value": -790428,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2026",
              "printedPage": "156",
              "pdfPage": 157,
              "table": "Consolidated statement of profit or loss"
            },
            {
              "year": "2026",
              "value": -796046,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2026",
              "printedPage": "156",
              "pdfPage": 157,
              "table": "Consolidated statement of profit or loss"
            }
          ]
        },
        {
          "key": "grossProfit",
          "label": "集團毛利",
          "originalLabel": "Gross profit",
          "unit": "千港元",
          "currency": "HKD",
          "scale": 1000,
          "basis": "全年合併財務報表，原列金額。費用保留報表負號。",
          "observations": [
            {
              "year": "2024",
              "value": 104568,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2025",
              "printedPage": "124",
              "pdfPage": 125,
              "table": "Consolidated statement of profit or loss"
            },
            {
              "year": "2025",
              "value": 49597,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2026",
              "printedPage": "156",
              "pdfPage": 157,
              "table": "Consolidated statement of profit or loss"
            },
            {
              "year": "2026",
              "value": 101867,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2026",
              "printedPage": "156",
              "pdfPage": 157,
              "table": "Consolidated statement of profit or loss"
            }
          ]
        },
        {
          "key": "sellingExpenses",
          "label": "集團銷售及分銷成本",
          "originalLabel": "Selling and distribution costs",
          "unit": "千港元",
          "currency": "HKD",
          "scale": 1000,
          "basis": "全年合併財務報表，原列金額。費用保留報表負號。",
          "observations": [
            {
              "year": "2024",
              "value": -42853,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2025",
              "printedPage": "124",
              "pdfPage": 125,
              "table": "Consolidated statement of profit or loss"
            },
            {
              "year": "2025",
              "value": -37881,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2026",
              "printedPage": "156",
              "pdfPage": 157,
              "table": "Consolidated statement of profit or loss"
            },
            {
              "year": "2026",
              "value": -34972,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2026",
              "printedPage": "156",
              "pdfPage": 157,
              "table": "Consolidated statement of profit or loss"
            }
          ]
        },
        {
          "key": "administrativeExpenses",
          "label": "集團一般及行政開支",
          "originalLabel": "General and administrative expenses",
          "unit": "千港元",
          "currency": "HKD",
          "scale": 1000,
          "basis": "全年合併財務報表，原列金額。費用保留報表負號。",
          "observations": [
            {
              "year": "2024",
              "value": -81220,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2025",
              "printedPage": "124",
              "pdfPage": 125,
              "table": "Consolidated statement of profit or loss"
            },
            {
              "year": "2025",
              "value": -71618,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2026",
              "printedPage": "156",
              "pdfPage": 157,
              "table": "Consolidated statement of profit or loss"
            },
            {
              "year": "2026",
              "value": -74103,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2026",
              "printedPage": "156",
              "pdfPage": 157,
              "table": "Consolidated statement of profit or loss"
            }
          ]
        },
        {
          "key": "attributableProfit",
          "label": "集團股東應佔虧損",
          "originalLabel": "Loss attributable to owners of the Company",
          "unit": "千港元",
          "currency": "HKD",
          "scale": 1000,
          "basis": "全年合併財務報表，原列金額。費用保留報表負號。",
          "observations": [
            {
              "year": "2024",
              "value": -14297,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2025",
              "printedPage": "124",
              "pdfPage": 125,
              "table": "Consolidated statement of profit or loss"
            },
            {
              "year": "2025",
              "value": -51981,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2026",
              "printedPage": "156",
              "pdfPage": 157,
              "table": "Consolidated statement of profit or loss"
            },
            {
              "year": "2026",
              "value": -4842,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2026",
              "printedPage": "156",
              "pdfPage": 157,
              "table": "Consolidated statement of profit or loss"
            }
          ]
        },
        {
          "key": "operatingCashFlow",
          "label": "集團經營活動現金淨額",
          "originalLabel": "Net cash generated from/(used in) operating activities",
          "unit": "千港元",
          "currency": "HKD",
          "scale": 1000,
          "basis": "全年合併財務報表，原列金額。費用保留報表負號。",
          "observations": [
            {
              "year": "2024",
              "value": -5550,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2025",
              "printedPage": "130",
              "pdfPage": 131,
              "table": "Consolidated statement of cash flows"
            },
            {
              "year": "2025",
              "value": -25045,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2026",
              "printedPage": "162",
              "pdfPage": 163,
              "table": "Consolidated statement of cash flows"
            },
            {
              "year": "2026",
              "value": 18109,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2026",
              "printedPage": "162",
              "pdfPage": 163,
              "table": "Consolidated statement of cash flows"
            }
          ]
        },
        {
          "key": "cash",
          "label": "集團現金及現金等值物",
          "originalLabel": "Cash and cash equivalents",
          "unit": "千港元",
          "currency": "HKD",
          "scale": 1000,
          "basis": "各財政年度末集團合併現金，並非美容分部獨立現金。",
          "observations": [
            {
              "year": "2024",
              "value": 390265,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2025",
              "printedPage": "126",
              "pdfPage": 127,
              "table": "Consolidated statement of financial position"
            },
            {
              "year": "2025",
              "value": 344080,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2026",
              "printedPage": "158",
              "pdfPage": 159,
              "table": "Consolidated statement of financial position"
            },
            {
              "year": "2026",
              "value": 349680,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2026",
              "printedPage": "158",
              "pdfPage": 159,
              "table": "Consolidated statement of financial position"
            }
          ]
        },
        {
          "key": "borrowings",
          "label": "集團附息借貸",
          "originalLabel": "Interest-bearing borrowings",
          "unit": "千港元",
          "currency": "HKD",
          "scale": 1000,
          "basis": "年末附息借貸。2026年報該行為破折號，表示零；租賃負債另列，沒有併為零。",
          "observations": [
            {
              "year": "2024",
              "value": 1009,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2025",
              "printedPage": "126",
              "pdfPage": 127,
              "table": "Consolidated statement of financial position"
            },
            {
              "year": "2025",
              "value": 1137,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2026",
              "printedPage": "158",
              "pdfPage": 159,
              "table": "Consolidated statement of financial position"
            },
            {
              "year": "2026",
              "value": 0,
              "status": "經審核年報所列數字",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
              "sourceId": "sst2026",
              "printedPage": "158",
              "pdfPage": 159,
              "table": "Consolidated statement of financial position"
            }
          ]
        },
        {
          "key": "beautyOperatingCashFlow",
          "label": "美容分部經營現金流",
          "originalLabel": "Segment operating cash flow",
          "unit": "千港元",
          "currency": "HKD",
          "scale": 1000,
          "basis": "分部附註未分開提供美容服務的經營現金流。不能拿集團現金流冒充。",
          "observations": [
            {
              "year": "2024",
              "value": null,
              "status": "未按美容分部獨立披露",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂美容及纖體服務分部，與合併化妝品分銷及投資等業務分開。",
              "sourceId": "sst2025",
              "printedPage": "171",
              "pdfPage": 172,
              "table": "Note 10 segment results"
            },
            {
              "year": "2025",
              "value": null,
              "status": "未按美容分部獨立披露",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂美容及纖體服務分部，與合併化妝品分銷及投資等業務分開。",
              "sourceId": "sst2026",
              "printedPage": "203",
              "pdfPage": 204,
              "table": "Note 10 segment results"
            },
            {
              "year": "2026",
              "value": null,
              "status": "未按美容分部獨立披露",
              "restatement": "來源未標示本項比較數字重列",
              "scope": "修身堂美容及纖體服務分部，與合併化妝品分銷及投資等業務分開。",
              "sourceId": "sst2026",
              "printedPage": "202",
              "pdfPage": 203,
              "table": "Note 10 segment results"
            }
          ]
        }
      ],
      "analysis": [
        {
          "from": "2024",
          "to": "2025",
          "kind": "management-explanation",
          "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
          "text": "美容服務收入增加，美容分部虧損收窄；但集團股東應佔虧損反而擴大。管理層將整體收益下降歸因於化妝品分銷及產品銷售減少，以及證券投資轉為虧損。這個例子說明混合業務集團的總盈利，不能直接當作旗下美容中心的表現。",
          "sources": [
            {
              "sourceId": "sst2025",
              "printedPage": "8",
              "pdfPage": 9,
              "table": "Management discussion and analysis"
            },
            {
              "sourceId": "sst2025",
              "printedPage": "13",
              "pdfPage": 14,
              "table": "Management discussion and analysis"
            },
            {
              "sourceId": "sst2025",
              "printedPage": "171",
              "pdfPage": 172,
              "table": "Note 10 segment results"
            },
            {
              "sourceId": "sst2026",
              "printedPage": "203",
              "pdfPage": 204,
              "table": "Note 10 comparative segment results"
            }
          ]
        },
        {
          "from": "2025",
          "to": "2026",
          "kind": "management-explanation",
          "scope": "修身堂集團合併，包含化妝品分銷、美容纖體、產品銷售、證券投資及放債。美容纖體分部另列，不能把合併收入及虧損當作香港美容業數字。",
          "text": "美容服務收入大致持平，但美容分部虧損擴大，分部附註亦列有商譽減值。集團股東虧損則大幅收窄，管理層指出主因是證券投資收益帶動毛利增加，以及銷售及分銷成本減少。集團經營現金轉為流入也包含分銷、應收款及貸款等變動，沒有披露美容分部單獨現金流，不能說美容服務已轉虧為盈。",
          "sources": [
            {
              "sourceId": "sst2026",
              "printedPage": "8",
              "pdfPage": 9,
              "table": "Management discussion and analysis"
            },
            {
              "sourceId": "sst2026",
              "printedPage": "13",
              "pdfPage": 14,
              "table": "Management discussion and analysis"
            },
            {
              "sourceId": "sst2026",
              "printedPage": "202",
              "pdfPage": 203,
              "table": "Note 10 segment results"
            },
            {
              "sourceId": "sst2026",
              "printedPage": "203",
              "pdfPage": 204,
              "table": "Note 10 comparative segment results"
            },
            {
              "sourceId": "sst2026",
              "printedPage": "162",
              "pdfPage": 163,
              "table": "Consolidated statement of cash flows"
            }
          ]
        }
      ],
      "limits": [
        "本S類案例只用美容纖體服務說明個人服務模式，沒有把醫療診所自動歸為S類。",
        "集團大部分收益來自中國內地產品分銷，合併收益含證券投資業績。合併毛利率不是美容中心毛利率。",
        "沒有美容分部獨立經營現金流或完整借款表，不能以合併數字替代。",
        "分部業績採管理層口徑，未扣全部集團費用及稅項。比較沿用兩份年報原列金額，不能當作美容業典型淨利率。",
        "預付套票的現金與完成服務後確認的收入時間不同。年末借貸零不表示集團沒有租賃負債。"
      ]
    }
  ]
};
