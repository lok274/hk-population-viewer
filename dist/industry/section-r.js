export default {
  "code": "R",
  "title": "藝術、娛樂及康樂",
  "checkedOn": "2026-10-22",
  "classification": {
    "intro": "提供文化、表演、體育、娛樂及康樂活動，亦包括相關場地營運。",
    "models": [
      {
        "title": "內容及活動",
        "text": "製作表演、展覽或其他文化活動。"
      },
      {
        "title": "場地及康樂",
        "text": "營運文化、體育或遊樂設施。"
      }
    ],
    "readFor": "票務、其他消費與資助分開看，折舊亦可能令盈虧與現金流不同。",
    "printedPage": 349,
    "pdfPage": 353,
    "source": {
      "id": "hsic-manual",
      "title": "香港標準行業分類 2.0 版，第三部分",
      "publisher": "政府統計處",
      "url": "https://www.statistics.gov.hk/pub/B2XX0004012008XXXXB0300.pdf",
      "publicationDate": "2009-07-17"
    }
  },
  "coverage": {
    "section": "R",
    "label": "藝術、娛樂及康樂",
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
  "context": {
    "hsicSection": "R",
    "title": "公共文化服務的使用背景",
    "coverage": "康文署兩所博物館到訪人次，只是藝術康樂的一部分",
    "caseIds": [
      "ocean-park"
    ],
    "context": {
      "text": "康樂並非只有收門票的主題公園。公共博物館也提供文化服務。以下是各館到訪人次，並非獨立訪客人數、入場收入或整個藝術娛樂康樂業的總需求。",
      "sources": [
        {
          "sourceId": "lcsd-cultural-statistics",
          "printedPage": null,
          "pdfPage": null,
          "table": "Museums"
        }
      ]
    },
    "metrics": [
      {
        "key": "hk-museum-history",
        "label": "香港歷史博物館",
        "observations": [
          {
            "period": "2023/24",
            "value": 586000,
            "unit": "人次",
            "scale": 1,
            "status": "reported",
            "scope": "香港歷史博物館單一場館",
            "basis": "財政年度到訪人次；原公布單位千人次",
            "sourceId": "lcsd-cultural-statistics",
            "printedPage": null,
            "pdfPage": null,
            "table": "Museums, attendance thousands"
          },
          {
            "period": "2024/25",
            "value": 944000,
            "unit": "人次",
            "scale": 1,
            "status": "reported",
            "scope": "香港歷史博物館單一場館",
            "basis": "財政年度到訪人次；原公布單位千人次",
            "sourceId": "lcsd-cultural-statistics",
            "printedPage": null,
            "pdfPage": null,
            "table": "Museums, attendance thousands"
          },
          {
            "period": "2025/26",
            "value": 1102000,
            "unit": "人次",
            "scale": 1,
            "status": "reported",
            "scope": "香港歷史博物館單一場館",
            "basis": "財政年度到訪人次；原公布單位千人次",
            "sourceId": "lcsd-cultural-statistics",
            "printedPage": null,
            "pdfPage": null,
            "table": "Museums, attendance thousands"
          }
        ]
      },
      {
        "key": "hk-museum-art",
        "label": "香港藝術館",
        "observations": [
          {
            "period": "2023/24",
            "value": 1558000,
            "unit": "人次",
            "scale": 1,
            "status": "reported",
            "scope": "香港藝術館單一場館",
            "basis": "財政年度到訪人次；原公布單位千人次",
            "sourceId": "lcsd-cultural-statistics",
            "printedPage": null,
            "pdfPage": null,
            "table": "Museums, attendance thousands"
          },
          {
            "period": "2024/25",
            "value": 1692000,
            "unit": "人次",
            "scale": 1,
            "status": "reported",
            "scope": "香港藝術館單一場館",
            "basis": "財政年度到訪人次；原公布單位千人次",
            "sourceId": "lcsd-cultural-statistics",
            "printedPage": null,
            "pdfPage": null,
            "table": "Museums, attendance thousands"
          },
          {
            "period": "2025/26",
            "value": 1273000,
            "unit": "人次",
            "scale": 1,
            "status": "reported",
            "scope": "香港藝術館單一場館",
            "basis": "財政年度到訪人次；原公布單位千人次",
            "sourceId": "lcsd-cultural-statistics",
            "printedPage": null,
            "pdfPage": null,
            "table": "Museums, attendance thousands"
          }
        ]
      }
    ],
    "gap": "沒有把兩館或海洋公園合計為全行業總額。館舍開放、展覽與閉館會改變人次，不能直接推論收入或盈利。",
    "checkedOn": "2026-10-22",
    "sources": [
      {
        "id": "lcsd-cultural-statistics",
        "title": "LCSD Cultural Services Statistics",
        "url": "https://www.lcsd.gov.hk/en/aboutlcsd/ppr/statistics/cultural.html",
        "publicationDate": null,
        "retrievedOn": "2026-10-22"
      }
    ]
  },
  "gap": null,
  "cases": [
    {
      "id": "ocean-park",
      "entity": "海洋公園公司 Ocean Park Corporation",
      "hsicSections": [
        "R"
      ],
      "modelType": "statutory-nonprofit-recreation",
      "whyThisCase": "示範收門票、園內消費及政府保育教育資助共同支持的非牟利主題公園。折舊、資產減值和補貼會使入場收入、營運結果及年度盈虧出現不同方向。",
      "geography": "香港",
      "consolidationScope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
      "currency": "HKD",
      "audited": true,
      "auditStatus": "已進行審計，但2024/25及2023/24核數師均無法表示意見，涉及水上樂園減值評估證據及海洋公園比較數的減值撥回與折舊。這不等同無保留意見，也不等同沒有進行審計。",
      "auditSources": [
        {
          "sourceId": "op2025",
          "printedPage": "14-17",
          "pdfPage": 9,
          "table": "Independent auditor report, disclaimer and basis"
        },
        {
          "sourceId": "op2024",
          "printedPage": "2-5",
          "pdfPage": 3,
          "table": "Independent auditor report, disclaimer and basis"
        }
      ],
      "latestReportCheck": {
        "date": "2026-10-22",
        "url": "https://www.oceanpark.com.hk/en/corporate-information/annual-report",
        "latestListed": "2024/25"
      },
      "fiscalYears": [
        {
          "label": "2022/23",
          "start": "2022-07-01",
          "end": "2023-06-30"
        },
        {
          "label": "2023/24",
          "start": "2023-07-01",
          "end": "2024-06-30"
        },
        {
          "label": "2024/25",
          "start": "2024-07-01",
          "end": "2025-06-30"
        }
      ],
      "sources": [
        {
          "id": "op2025",
          "title": "Ocean Park Corporation Annual Report 2024-2025 financial report",
          "url": "https://media.oceanpark.com.hk/files/s3fs-public/ophk_ar24-25_fr.pdf",
          "publicationDate": null,
          "localPath": "evidence/raw/op2025.pdf",
          "retrievedOn": "2026-10-22",
          "sha256": "cdeeeb01aed2b0e7025a948f222213bfe2840192cea7cd808eed079b7182090f"
        },
        {
          "id": "op2024",
          "title": "Ocean Park Corporation Annual Report 2023-2024 financial report",
          "url": "https://media.oceanpark.com.hk/files/s3fs-public/ophk_ar23-24_fr.pdf",
          "publicationDate": null,
          "localPath": "evidence/raw/op2024.pdf",
          "retrievedOn": "2026-10-22",
          "sha256": "8aff5adccbcaeb231d4d39cc36cab8d39695d829012b889db385189ac7bc4b4e"
        },
        {
          "id": "opbr2025",
          "title": "Ocean Park Corporation Annual Report 2024-2025 business review",
          "url": "https://media.oceanpark.com.hk/files/s3fs-public/ophk_ar24-25_br.pdf",
          "publicationDate": null,
          "localPath": "evidence/raw/opbr2025.pdf",
          "retrievedOn": "2026-10-22",
          "sha256": "37990146ef9000f87ab6f63463c88ce998ccaba491edb36d233668645ab715da"
        },
        {
          "id": "opbr2024",
          "title": "Ocean Park Corporation Annual Report 2023-2024 business review",
          "url": "https://media.oceanpark.com.hk/files/s3fs-public/ophk_ar23-24_br.pdf",
          "publicationDate": null,
          "localPath": "evidence/raw/opbr2024.pdf",
          "retrievedOn": "2026-10-22",
          "sha256": "aa97449451bdd85d6c17a04fb99bb3bbc6df096c2a8620b892140da6ef3ee08e"
        }
      ],
      "business": {
        "provides": {
          "text": "經營海洋公園及水上樂園，提供遊樂、動物展示、教育及保育活動。公司收入亦包括商品、餐飲、園內體驗及特許經營權費。",
          "sources": [
            {
              "sourceId": "op2025",
              "printedPage": "76-77",
              "pdfPage": 40,
              "table": "Note 16"
            }
          ]
        },
        "customers": {
          "text": "入園訪客支付門票及園內消費；商戶或酒店營運者按協議支付特許經營費；政府另提供保育及教育資助。",
          "sources": [
            {
              "sourceId": "op2025",
              "printedPage": "76-79",
              "pdfPage": 40,
              "table": "Notes 16-17"
            },
            {
              "sourceId": "op2025",
              "printedPage": 83,
              "pdfPage": 43,
              "table": "Note 22"
            }
          ]
        },
        "revenueModel": {
          "text": "單次門票在入場時確認收入，年票按有效期間分攤；貨品與餐飲在售出時確認，特許費按協議及銷售等基礎計算。政府保育教育資助用來抵減營運成本，沒有包含在Revenue這一欄，不能重複加到收入再用補貼後成本扣一次。",
          "sources": [
            {
              "sourceId": "op2025",
              "printedPage": "78-79",
              "pdfPage": 41,
              "table": "Notes 16-17"
            },
            {
              "sourceId": "op2025",
              "printedPage": 83,
              "pdfPage": 43,
              "table": "Note 22"
            }
          ]
        },
        "costs": {
          "text": "主要現金相關成本包括員工、維修、能源及售出貨品成本；另有重大折舊。資產減值或撥回會改變年度損益，即使沒有相同金額的現金進出。",
          "sources": [
            {
              "sourceId": "op2025",
              "printedPage": 79,
              "pdfPage": 41,
              "table": "Note 17"
            },
            {
              "sourceId": "op2025",
              "printedPage": 82,
              "pdfPage": 43,
              "table": "Note 20"
            }
          ]
        },
        "process": [
          {
            "text": "管理動物、設施及活動，吸引訪客入園並參與教育體驗。",
            "sources": [
              {
                "sourceId": "opbr2025",
                "printedPage": "6-7",
                "pdfPage": 5,
                "table": null
              }
            ]
          },
          {
            "text": "以門票、商品餐飲、體驗及特許費收取收入，再以保育教育資助抵減合資格支出。",
            "sources": [
              {
                "sourceId": "op2025",
                "printedPage": "76-79",
                "pdfPage": 40,
                "table": null
              },
              {
                "sourceId": "op2025",
                "printedPage": 83,
                "pdfPage": 43,
                "table": null
              }
            ]
          },
          {
            "text": "持續投入維修及資本設施，按年確認折舊及檢視資產減值。",
            "sources": [
              {
                "sourceId": "op2025",
                "printedPage": 22,
                "pdfPage": 13,
                "table": null
              },
              {
                "sourceId": "op2025",
                "printedPage": 14,
                "pdfPage": 9,
                "table": null
              }
            ]
          }
        ],
        "influences": {
          "text": "訪客需求、園內消費、薪酬能源維修成本、政府資助是否延續，以及大型設施減值估算，均可影響結果。核數師對減值證據無法取得足夠支持，令淨資產和損益存在重要不確定性。",
          "sources": [
            {
              "sourceId": "op2025",
              "printedPage": 14,
              "pdfPage": 9,
              "table": null
            },
            {
              "sourceId": "op2024",
              "printedPage": "66-67",
              "pdfPage": 35,
              "table": null
            },
            {
              "sourceId": "op2025",
              "printedPage": 79,
              "pdfPage": 41,
              "table": null
            }
          ]
        }
      },
      "metrics": [
        {
          "key": "income",
          "originalLabel": "Revenue",
          "label": "收入，未包含另行抵減成本的政府資助",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": 839.1,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2024",
              "printedPage": 7,
              "pdfPage": 5,
              "table": "Income and expenditure account",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2023/24",
              "value": 1181,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2025",
              "printedPage": 19,
              "pdfPage": 11,
              "table": "Income and expenditure account",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2024/25",
              "value": 1288.1,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2025",
              "printedPage": 19,
              "pdfPage": 11,
              "table": "Income and expenditure account",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            }
          ]
        },
        {
          "key": "government-funding",
          "originalLabel": "Conservation and Education Subvention",
          "label": "保育及教育資助，抵減成本",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": 280,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2024",
              "printedPage": 69,
              "pdfPage": 36,
              "table": "Note 22",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2023/24",
              "value": 280,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2025",
              "printedPage": 83,
              "pdfPage": 43,
              "table": "Note 22",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2024/25",
              "value": 280,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2025",
              "printedPage": 83,
              "pdfPage": 43,
              "table": "Note 22",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            }
          ]
        },
        {
          "key": "rethink-funding",
          "originalLabel": "Rethink Funding Support",
          "label": "營運重塑資助，抵減成本",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": 569.5,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2024",
              "printedPage": 67,
              "pdfPage": 35,
              "table": "Note 17(c)",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2023/24",
              "value": 0,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2024",
              "printedPage": 67,
              "pdfPage": 35,
              "table": "Note 17(c)",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2024/25",
              "value": 0,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2025",
              "printedPage": 83,
              "pdfPage": 43,
              "table": "Note 22",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            }
          ]
        },
        {
          "key": "operating-costs-before-funding",
          "originalLabel": "Expenses included in operating costs",
          "label": "未扣另列資助的營運成本，不含另列折舊",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "年度流量；未扣附註17另列的營運重塑及保育教育資助，並非未扣所有政府資助。2022/23仍已扣除教育旅遊項目24.9百萬及臨時就業安排10.9百萬港元（2023/24年報附註22，印刷69頁／PDF36頁）。",
          "observations": [
            {
              "year": "2022/23",
              "value": 1265,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2024",
              "printedPage": 65,
              "pdfPage": 34,
              "table": "Note 17",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2023/24",
              "value": 1478.2,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2025",
              "printedPage": 79,
              "pdfPage": 41,
              "table": "Note 17",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2024/25",
              "value": 1525.2,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2025",
              "printedPage": 79,
              "pdfPage": 41,
              "table": "Note 17",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            }
          ]
        },
        {
          "key": "operating-costs-after-funding",
          "originalLabel": "Operating costs",
          "label": "補貼後營運成本，負數列示",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": -415.5,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2024",
              "printedPage": 7,
              "pdfPage": 5,
              "table": "Income and expenditure account",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2023/24",
              "value": -1198.2,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2025",
              "printedPage": 19,
              "pdfPage": 11,
              "table": "Income and expenditure account",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2024/25",
              "value": -1245.7,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2025",
              "printedPage": 19,
              "pdfPage": 11,
              "table": "Income and expenditure account",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            }
          ]
        },
        {
          "key": "staff-costs",
          "originalLabel": "Employee costs",
          "label": "員工成本，已包含在營運成本",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": 638.6,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2024",
              "printedPage": 65,
              "pdfPage": 34,
              "table": "Note 17",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2023/24",
              "value": 767.4,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2025",
              "printedPage": 79,
              "pdfPage": 41,
              "table": "Note 17",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2024/25",
              "value": 810.1,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2025",
              "printedPage": 79,
              "pdfPage": 41,
              "table": "Note 17",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            }
          ]
        },
        {
          "key": "operating-balance",
          "originalLabel": "Surplus/(deficit) from operations",
          "label": "補貼後及折舊等前營運盈餘或赤字",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": 423.6,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2024",
              "printedPage": 7,
              "pdfPage": 5,
              "table": "Income and expenditure account",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2023/24",
              "value": -17.2,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2025",
              "printedPage": 19,
              "pdfPage": 11,
              "table": "Income and expenditure account",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2024/25",
              "value": 42.4,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2025",
              "printedPage": 19,
              "pdfPage": 11,
              "table": "Income and expenditure account",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            }
          ]
        },
        {
          "key": "annual-balance",
          "originalLabel": "(Deficit)/surplus for the year",
          "label": "年度盈餘或赤字",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": 118.5,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2024",
              "printedPage": 7,
              "pdfPage": 5,
              "table": "Income and expenditure account",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2023/24",
              "value": -71.6,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2025",
              "printedPage": 19,
              "pdfPage": 11,
              "table": "Income and expenditure account",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2024/25",
              "value": -274.7,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2025",
              "printedPage": 19,
              "pdfPage": 11,
              "table": "Income and expenditure account",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            }
          ]
        },
        {
          "key": "operating-cash-flow",
          "originalLabel": "Net cash flows from/(used in) operating activities",
          "label": "營運活動淨現金流",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": 385.7,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2024",
              "printedPage": 10,
              "pdfPage": 7,
              "table": "Statement of cash flows",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2023/24",
              "value": -11,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2025",
              "printedPage": 22,
              "pdfPage": 13,
              "table": "Statement of cash flows",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2024/25",
              "value": 71.8,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2025",
              "printedPage": 22,
              "pdfPage": 13,
              "table": "Statement of cash flows",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            }
          ]
        },
        {
          "key": "cash",
          "originalLabel": "Bank balances and cash",
          "label": "銀行結餘及現金，含較長期存款",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "期末存量",
          "observations": [
            {
              "year": "2022/23",
              "value": 1680.5,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2024",
              "printedPage": 6,
              "pdfPage": 5,
              "table": "Balance sheet",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2023/24",
              "value": 1660.9,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2025",
              "printedPage": 18,
              "pdfPage": 11,
              "table": "Balance sheet",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2024/25",
              "value": 1698,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2025",
              "printedPage": 18,
              "pdfPage": 11,
              "table": "Balance sheet",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            }
          ]
        },
        {
          "key": "borrowings",
          "originalLabel": "Government loans",
          "label": "政府貸款帳面值，另列應付利息",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "期末存量",
          "observations": [
            {
              "year": "2022/23",
              "value": 1418.2,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2024",
              "printedPage": 6,
              "pdfPage": 5,
              "table": "Balance sheet",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2023/24",
              "value": 1467.8,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2025",
              "printedPage": 18,
              "pdfPage": 11,
              "table": "Balance sheet",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2024/25",
              "value": 1519.2,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2025",
              "printedPage": 18,
              "pdfPage": 11,
              "table": "Balance sheet",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            }
          ]
        },
        {
          "key": "loan-interest-payable",
          "originalLabel": "Interest payable on Government loans",
          "label": "政府貸款應付利息，與本金分列",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "期末存量",
          "observations": [
            {
              "year": "2022/23",
              "value": 666.6,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2024",
              "printedPage": 6,
              "pdfPage": 5,
              "table": "Balance sheet",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2023/24",
              "value": 689.9,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2025",
              "printedPage": 18,
              "pdfPage": 11,
              "table": "Balance sheet",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            },
            {
              "year": "2024/25",
              "value": 714.1,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
              "sourceId": "op2025",
              "printedPage": 18,
              "pdfPage": 11,
              "table": "Balance sheet",
              "auditCaveat": "公開報表數字；所引2023/24及2024/25報表核數師無法表示意見，詳見auditStatus"
            }
          ]
        }
      ],
      "analysis": [
        {
          "fromYear": "2022/23",
          "toYear": "2023/24",
          "text": "收入增加341.9百萬港元，但年度結果由盈餘118.5變為赤字71.6百萬港元，減少190.1百萬港元。2022/23的營運重塑資助569.5百萬港元在2023/24不再出現，而保育教育資助仍為280百萬港元；因此不能把收入增長直接當作盈餘增長。減值撥回增加又抵銷了部分不利影響。",
          "kind": "calculated-change",
          "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
          "sources": [
            {
              "sourceId": "op2024",
              "printedPage": 7,
              "pdfPage": 5,
              "table": "Income and expenditure account"
            },
            {
              "sourceId": "op2025",
              "printedPage": 19,
              "pdfPage": 11,
              "table": "Income and expenditure account"
            },
            {
              "sourceId": "op2024",
              "printedPage": "66-67",
              "pdfPage": 35,
              "table": null
            }
          ],
          "formula": "1181.0-839.1=341.9;-71.6-118.5=-190.1"
        },
        {
          "fromYear": "2023/24",
          "toYear": "2024/25",
          "text": "收入再增加107.1百萬港元，補貼後及折舊等前營運結果由赤字17.2轉為盈餘42.4百萬港元；但年度赤字由71.6擴至274.7百萬港元。物業設備及使用權資產減值撥回由275.5降至34.4百萬港元，是兩種結果方向不同的重要報表項目。這是算術分解，並非對減值估值可靠性的保證。",
          "kind": "interpretation",
          "scope": "海洋公園公司本身，香港海洋公園及水上樂園；不包含另附帳目的海洋公園信託基金或全港康樂業",
          "sources": [
            {
              "sourceId": "op2025",
              "printedPage": 19,
              "pdfPage": 11,
              "table": "Income and expenditure account"
            },
            {
              "sourceId": "op2025",
              "printedPage": 19,
              "pdfPage": 11,
              "table": "Income and expenditure account"
            }
          ],
          "formula": "1288.1-1181.0=107.1;42.4-(-17.2)=59.6;-274.7-(-71.6)=-203.1;(34.2+0.2)-(275.1+0.4)=-241.1"
        }
      ],
      "limits": [
        "2024/25及2023/24核數師無法表示意見，年度結果及淨資產受資產減值評估證據不足限制；不得淡化成普通無保留審計財務數字。",
        "此為單一非牟利主題公園模式，不能代表全港體育、藝術、博物館及娛樂業。",
        "營運成本已扣政府資助；未扣另列資助的成本仍可能扣除其他補貼，不能重複扣除。2022/23已抵減教育旅遊項目24.9百萬及臨時就業安排10.9百萬港元，不是還原全部補貼的成本。",
        "Surplus from operations尚未扣除另列折舊等，不能把42.4百萬港元標為年度淨利潤。",
        "政府貸款帳面值及應付利息分列，租賃負債亦是獨立項目；不以全部負債當作貸款。",
        "銀行結餘及現金包括原到期日超過三個月定期存款，不等同現金流量表現金等價物。",
        "2024/25比較數採最新表，主要指標未標示重列，但審計意見指出比較基礎仍有重要不確定性。"
      ]
    }
  ]
};
