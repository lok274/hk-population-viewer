export default {
  "code": "P",
  "title": "教育",
  "checkedOn": "2026-10-22",
  "classification": {
    "intro": "提供教育、培訓及相關支援，涵蓋學校、大學及不同授課方式。",
    "models": [
      {
        "title": "教育及培訓",
        "text": "可透過課室、網上或其他渠道傳授知識及技能。"
      }
    ],
    "readFor": "公營資助、學費和捐款的確認方式不同；亦可到教育概覽看學生及資源。",
    "printedPage": 335,
    "pdfPage": 339,
    "source": {
      "id": "hsic-manual",
      "title": "香港標準行業分類 2.0 版，第三部分",
      "publisher": "政府統計處",
      "url": "https://www.statistics.gov.hk/pub/B2XX0004012008XXXXB0300.pdf",
      "publicationDate": "2009-07-17"
    }
  },
  "coverage": {
    "section": "P",
    "label": "教育",
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
    "hsicSection": "P",
    "title": "學校教育的規模背景",
    "coverage": "教育局公布的學校數量，不包括大學、補習與所有教育活動",
    "caseIds": [
      "polyu"
    ],
    "context": {
      "text": "香港教育活動包括不同學段及辦學模式。教育局所列2025/26學年學校數字，可用來理解一所資助大學只是整個教育範圍的一部分；校數不是公司數，更不能用它推算平均學校利潤。",
      "sources": [
        {
          "sourceId": "edb-schools",
          "printedPage": null,
          "pdfPage": null,
          "table": "School education in Hong Kong"
        }
      ]
    },
    "metrics": [
      {
        "key": "primary-schools",
        "label": "小學",
        "observations": [
          {
            "period": "2025/26",
            "value": 591,
            "unit": "所",
            "scale": 1,
            "status": "reported",
            "scope": "香港小學",
            "basis": "學年學校數量",
            "sourceId": "edb-schools",
            "printedPage": null,
            "pdfPage": null,
            "table": "School education in Hong Kong"
          }
        ]
      },
      {
        "key": "secondary-day-schools",
        "label": "日間中學",
        "observations": [
          {
            "period": "2025/26",
            "value": 513,
            "unit": "所",
            "scale": 1,
            "status": "reported",
            "scope": "香港日間中學",
            "basis": "學年學校數量",
            "sourceId": "edb-schools",
            "printedPage": null,
            "pdfPage": null,
            "table": "School education in Hong Kong"
          }
        ]
      },
      {
        "key": "special-schools",
        "label": "特殊學校",
        "observations": [
          {
            "period": "2025/26",
            "value": 63,
            "unit": "所",
            "scale": 1,
            "status": "reported",
            "scope": "香港特殊學校",
            "basis": "學年學校數量",
            "sourceId": "edb-schools",
            "printedPage": null,
            "pdfPage": null,
            "table": "School education in Hong Kong"
          }
        ]
      }
    ],
    "gap": "只描述學校服務規模，不是P行業收益成本總額。PolyU帳目不能代替全部教育機構。",
    "checkedOn": "2026-10-22",
    "sources": [
      {
        "id": "edb-schools",
        "title": "EDB Primary School Education",
        "url": "https://www.edb.gov.hk/en/edu-system/primary-secondary/primary/",
        "publicationDate": null,
        "retrievedOn": "2026-10-22"
      }
    ]
  },
  "gap": null,
  "cases": [
    {
      "id": "polyu",
      "entity": "香港理工大學 The Hong Kong Polytechnic University",
      "hsicSections": [
        "P"
      ],
      "modelType": "public-university",
      "whyThisCase": "示範資助大學如何把政府撥款、學費、捐贈及投資收入投入教學與研究；綜合體亦有酒店及其他附屬業務，不能代表所有學校。",
      "geography": "主要為香港，附屬公司包括中國內地活動",
      "consolidationScope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
      "currency": "HKD",
      "audited": true,
      "latestReportCheck": {
        "date": "2026-10-22",
        "url": "https://www.polyu.edu.hk/fo/financial-information/financial-reports/?sc_lang=en",
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
          "id": "polyu2025",
          "title": "PolyU Financial Report 2024/25",
          "url": "https://www.polyu.edu.hk/fo/docdrive/Financial_Information/Financial_Reports/FR24-25.pdf?t=0",
          "publicationDate": null,
          "localPath": "evidence/raw/polyu2025.pdf",
          "retrievedOn": "2026-10-22",
          "sha256": "bf31c3b57a4bec4e66fed98094df6e47d71196e3666bb7eb43a647e022c4635f"
        },
        {
          "id": "polyu2024",
          "title": "PolyU Financial Report 2023/24",
          "url": "https://www.polyu.edu.hk/fo/docdrive/Financial_Information/Financial_Reports/FR23-24.pdf?t=0",
          "publicationDate": null,
          "localPath": "evidence/raw/polyu2024.pdf",
          "retrievedOn": "2026-10-22",
          "sha256": "784aed1494e16ae75b018915c7e0061c804745da87741d7a615050039b219794"
        }
      ],
      "business": {
        "provides": {
          "text": "提供大學教育、專業與持續教育、科研及知識轉移。附屬公司亦經營 Hotel ICON 酒店及餐飲業務。",
          "sources": [
            {
              "sourceId": "polyu2024",
              "printedPage": 5,
              "pdfPage": 8,
              "table": null
            }
          ]
        },
        "customers": {
          "text": "學生接受課程；政府、科研資助機構和捐助者提供部分資金。付款者與受惠者可以是不同的人。",
          "sources": [
            {
              "sourceId": "polyu2025",
              "printedPage": 24,
              "pdfPage": 27,
              "table": null
            },
            {
              "sourceId": "polyu2025",
              "printedPage": 3,
              "pdfPage": 6,
              "table": null
            }
          ]
        },
        "revenueModel": {
          "text": "政府撥款、學費及其他收費、利息與投資收益、捐贈及其他收入共同支持服務。政府撥款按相關開支確認；未用撥款及特定捐款列作遞延收入，不能把收款全當當年收入。",
          "sources": [
            {
              "sourceId": "polyu2025",
              "printedPage": 24,
              "pdfPage": 27,
              "table": null
            },
            {
              "sourceId": "polyu2024",
              "printedPage": 30,
              "pdfPage": 33,
              "table": null
            }
          ]
        },
        "costs": {
          "text": "支出主要按教學及科研、校舍、管理及學生服務列報。人手和薪酬增加會提高成本；建築和設備通常逐年以折舊計入支出。",
          "sources": [
            {
              "sourceId": "polyu2025",
              "printedPage": 3,
              "pdfPage": 6,
              "table": null
            },
            {
              "sourceId": "polyu2025",
              "printedPage": 24,
              "pdfPage": 27,
              "table": null
            },
            {
              "sourceId": "polyu2025",
              "printedPage": 29,
              "pdfPage": 32,
              "table": null
            }
          ]
        },
        "process": [
          {
            "text": "取得政府及科研撥款、學費和捐助。",
            "sources": [
              {
                "sourceId": "polyu2025",
                "printedPage": 24,
                "pdfPage": 27,
                "table": null
              }
            ]
          },
          {
            "text": "聘請教研人員、提供課程和研究設施，並按資助條件執行項目。",
            "sources": [
              {
                "sourceId": "polyu2025",
                "printedPage": 3,
                "pdfPage": 6,
                "table": null
              }
            ]
          },
          {
            "text": "在服務及支出發生時確認收入和成本，保留基金及遞延收入紀錄。",
            "sources": [
              {
                "sourceId": "polyu2024",
                "printedPage": 30,
                "pdfPage": 33,
                "table": null
              }
            ]
          }
        ],
        "influences": {
          "text": "學生人數與收費、教研人員數目與薪酬、投資市場回報及撥款用途限制會影響年度結果。投資升值不是學生繳交的學費。",
          "sources": [
            {
              "sourceId": "polyu2025",
              "printedPage": 3,
              "pdfPage": 6,
              "table": null
            },
            {
              "sourceId": "polyu2024",
              "printedPage": 5,
              "pdfPage": 8,
              "table": null
            },
            {
              "sourceId": "polyu2025",
              "printedPage": 24,
              "pdfPage": 27,
              "table": null
            }
          ]
        }
      },
      "metrics": [
        {
          "key": "income",
          "originalLabel": "Total income",
          "label": "總收入",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": 9004989,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2024",
              "printedPage": 27,
              "pdfPage": 30,
              "table": "Income and expenditure statement"
            },
            {
              "year": "2023/24",
              "value": 10050962,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 24,
              "pdfPage": 27,
              "table": "Income and expenditure statements"
            },
            {
              "year": "2024/25",
              "value": 10748269,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 24,
              "pdfPage": 27,
              "table": "Income and expenditure statements"
            }
          ]
        },
        {
          "key": "government-funding",
          "originalLabel": "Government Subventions",
          "label": "政府撥款",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": 4507067,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2024",
              "printedPage": 27,
              "pdfPage": 30,
              "table": "Income and expenditure statement"
            },
            {
              "year": "2023/24",
              "value": 4809429,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 24,
              "pdfPage": 27,
              "table": "Income and expenditure statements"
            },
            {
              "year": "2024/25",
              "value": 4474543,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 24,
              "pdfPage": 27,
              "table": "Income and expenditure statements"
            }
          ]
        },
        {
          "key": "tuition-fees",
          "originalLabel": "Tuition and Other Fees",
          "label": "學費及其他收費",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": 3031141,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2024",
              "printedPage": 27,
              "pdfPage": 30,
              "table": "Income and expenditure statement"
            },
            {
              "year": "2023/24",
              "value": 3388490,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 24,
              "pdfPage": 27,
              "table": "Income and expenditure statements"
            },
            {
              "year": "2024/25",
              "value": 4064309,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 24,
              "pdfPage": 27,
              "table": "Income and expenditure statements"
            }
          ]
        },
        {
          "key": "investment-income",
          "originalLabel": "Interest and Investment Gain",
          "label": "利息及投資收益",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": 389738,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2024",
              "printedPage": 27,
              "pdfPage": 30,
              "table": "Income and expenditure statement"
            },
            {
              "year": "2023/24",
              "value": 620251,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 24,
              "pdfPage": 27,
              "table": "Income and expenditure statements"
            },
            {
              "year": "2024/25",
              "value": 862827,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 24,
              "pdfPage": 27,
              "table": "Income and expenditure statements"
            }
          ]
        },
        {
          "key": "expenditure",
          "originalLabel": "Total expenditure including finance costs",
          "label": "總開支，含財務費用",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": 7985333,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2024",
              "printedPage": 27,
              "pdfPage": 30,
              "table": "Income and expenditure statement"
            },
            {
              "year": "2023/24",
              "value": 9370160,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 24,
              "pdfPage": 27,
              "table": "Income and expenditure statements"
            },
            {
              "year": "2024/25",
              "value": 10036895,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 24,
              "pdfPage": 27,
              "table": "Income and expenditure statements"
            }
          ]
        },
        {
          "key": "teaching-research-costs",
          "originalLabel": "Teaching and Research",
          "label": "教學及科研開支",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": 5055945,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2024",
              "printedPage": 27,
              "pdfPage": 30,
              "table": "Income and expenditure statement"
            },
            {
              "year": "2023/24",
              "value": 6159065,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 24,
              "pdfPage": 27,
              "table": "Income and expenditure statements"
            },
            {
              "year": "2024/25",
              "value": 6675627,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 24,
              "pdfPage": 27,
              "table": "Income and expenditure statements"
            }
          ]
        },
        {
          "key": "operating-surplus",
          "originalLabel": "Surplus from Operations",
          "label": "營運盈餘",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": 1019656,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2024",
              "printedPage": 27,
              "pdfPage": 30,
              "table": "Income and expenditure statement"
            },
            {
              "year": "2023/24",
              "value": 680802,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 24,
              "pdfPage": 27,
              "table": "Income and expenditure statements"
            },
            {
              "year": "2024/25",
              "value": 711374,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 24,
              "pdfPage": 27,
              "table": "Income and expenditure statements"
            }
          ]
        },
        {
          "key": "surplus",
          "originalLabel": "Surplus for the Year",
          "label": "年度盈餘，並非股東利潤",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": 1019339,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2024",
              "printedPage": 27,
              "pdfPage": 30,
              "table": "Income and expenditure statement"
            },
            {
              "year": "2023/24",
              "value": 677890,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 24,
              "pdfPage": 27,
              "table": "Income and expenditure statements"
            },
            {
              "year": "2024/25",
              "value": 708244,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 24,
              "pdfPage": 27,
              "table": "Income and expenditure statements"
            }
          ]
        },
        {
          "key": "operating-cash-flow",
          "originalLabel": "Net Cash Generated from Operating Activities",
          "label": "營運活動淨現金流入",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": 622373,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2024",
              "printedPage": 32,
              "pdfPage": 35,
              "table": "Statement of cash flows"
            },
            {
              "year": "2023/24",
              "value": 320659,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 29,
              "pdfPage": 32,
              "table": "Statements of cash flows"
            },
            {
              "year": "2024/25",
              "value": 655751,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 29,
              "pdfPage": 32,
              "table": "Statements of cash flows"
            }
          ]
        },
        {
          "key": "cash",
          "originalLabel": "Cash and Deposits with Banks",
          "label": "現金及銀行存款，含較長存款期",
          "unit": "HKD",
          "scale": 1000,
          "basis": "期末存量",
          "observations": [
            {
              "year": "2022/23",
              "value": 4437904,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2024",
              "printedPage": 29,
              "pdfPage": 32,
              "table": "Statement of financial position"
            },
            {
              "year": "2023/24",
              "value": 4769905,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 26,
              "pdfPage": 29,
              "table": "Statements of financial position"
            },
            {
              "year": "2024/25",
              "value": 5332459,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 26,
              "pdfPage": 29,
              "table": "Statements of financial position"
            }
          ]
        },
        {
          "key": "borrowings",
          "originalLabel": "Government Loans",
          "label": "政府貸款，按附註25列報",
          "unit": "HKD",
          "scale": 1000,
          "basis": "期末存量",
          "observations": [
            {
              "year": "2022/23",
              "value": 420171,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2024",
              "printedPage": 106,
              "pdfPage": 109,
              "table": "Note 25"
            },
            {
              "year": "2023/24",
              "value": 420171,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 105,
              "pdfPage": 108,
              "table": "Note 25"
            },
            {
              "year": "2024/25",
              "value": 376030,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 105,
              "pdfPage": 108,
              "table": "Note 25"
            }
          ]
        },
        {
          "key": "staff-onlending-bank-loans",
          "originalLabel": "Bank Loans for On-lending to Staff",
          "label": "轉貸予教職員之銀行貸款，另外列示",
          "unit": "HKD",
          "scale": 1000,
          "basis": "期末存量",
          "observations": [
            {
              "year": "2022/23",
              "value": 9940,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2024",
              "printedPage": 29,
              "pdfPage": 32,
              "table": "Statement of financial position"
            },
            {
              "year": "2023/24",
              "value": 8680,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 26,
              "pdfPage": 29,
              "table": "Statements of financial position"
            },
            {
              "year": "2024/25",
              "value": 5660,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
              "sourceId": "polyu2025",
              "printedPage": 26,
              "pdfPage": 29,
              "table": "Statements of financial position"
            }
          ]
        }
      ],
      "analysis": [
        {
          "fromYear": "2022/23",
          "toYear": "2023/24",
          "text": "綜合體總收入增加 1,045,973 千港元，總開支增加 1,384,827 千港元，年度盈餘減少 341,449 千港元。這是財務報表的算術比較。",
          "kind": "calculated-change",
          "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
          "sources": [
            {
              "sourceId": "polyu2024",
              "printedPage": 27,
              "pdfPage": 30,
              "table": "Income and expenditure statement"
            },
            {
              "sourceId": "polyu2025",
              "printedPage": 24,
              "pdfPage": 27,
              "table": "Income and expenditure statements"
            }
          ],
          "formula": "10050962-9004989;9370160-7985333;677890-1019339"
        },
        {
          "fromYear": "2022/23",
          "toYear": "2023/24",
          "text": "管理層就大學本部說明，學費、政府撥款及投資收益增加，但聘用更多教研人員、調薪及教研項目投入亦增加開支。這段說明屬大學本部，不能直接當作整個綜合體每項變動的原因。",
          "kind": "management-explanation",
          "scope": "大學本部，與主要三年綜合體表的範圍不同",
          "sources": [
            {
              "sourceId": "polyu2024",
              "printedPage": 5,
              "pdfPage": 8,
              "table": null
            }
          ]
        },
        {
          "fromYear": "2023/24",
          "toYear": "2024/25",
          "text": "綜合體年度盈餘增加 30,354 千港元；營運現金流增加 335,092 千港元。現金流量表顯示應付賬款增加額由 135,484 升至 641,549 千港元，因此現金流改善包含付款時點影響，不能只解讀為教學服務更賺錢。",
          "kind": "interpretation",
          "scope": "香港理工大學綜合體，包含附屬公司及中國內地業務，並非全香港教育業",
          "sources": [
            {
              "sourceId": "polyu2025",
              "printedPage": 24,
              "pdfPage": 27,
              "table": "Income and expenditure statements"
            },
            {
              "sourceId": "polyu2025",
              "printedPage": 24,
              "pdfPage": 27,
              "table": "Income and expenditure statements"
            },
            {
              "sourceId": "polyu2025",
              "printedPage": 29,
              "pdfPage": 32,
              "table": "Statements of cash flows"
            },
            {
              "sourceId": "polyu2025",
              "printedPage": 29,
              "pdfPage": 32,
              "table": "Statements of cash flows"
            }
          ],
          "formula": "708244-677890;655751-320659"
        },
        {
          "fromYear": "2023/24",
          "toYear": "2024/25",
          "text": "管理層就大學本部指出學費及投資收益增加，教研人員數目與薪酬上升則推高開支；就附屬公司指出專業及持續教育學院的學費及學生人數增加。這是管理層說法，未作獨立因果驗證。",
          "kind": "management-explanation",
          "scope": "大學本部及附屬公司分別說明",
          "sources": [
            {
              "sourceId": "polyu2025",
              "printedPage": 3,
              "pdfPage": 6,
              "table": null
            }
          ]
        }
      ],
      "limits": [
        "一所大學的綜合體不能代表全香港教育業；含附屬公司的酒店及內地研究活動。",
        "盈餘可包括投資收益和限制用途基金，並非可自由派發的股東利潤。",
        "現金及銀行存款不等同現金等價物；現金流量表另有三個月期限的現金等價物定義。",
        "政府貸款按附註25列示，另有轉貸予教職員的銀行貸款；不把全部負債稱為借貸。",
        "2024/25比較數採最新報表；所列主要指標未標示重列。",
        "截至檢查日官方財務報告清單最新為2024/25，沒有把已完結但未公布報表的2025/26填入歷史。"
      ]
    }
  ]
};
