export default {
  "code": "Q",
  "title": "人類保健及社會工作",
  "checkedOn": "2026-10-22",
  "classification": {
    "intro": "提供醫療、保健及社會支援，包括有住宿或沒有住宿的服務。",
    "models": [
      {
        "title": "醫療保健",
        "text": "醫院、診所及其他獲認可的保健活動。"
      },
      {
        "title": "社會工作",
        "text": "照顧及支援有需要人士，可附帶住宿服務。"
      }
    ],
    "readFor": "使用者、付款者及資助者可能不同；醫管局個案不代表所有私營醫療或社福機構。",
    "printedPage": 341,
    "pdfPage": 345,
    "source": {
      "id": "hsic-manual",
      "title": "香港標準行業分類 2.0 版，第三部分",
      "publisher": "政府統計處",
      "url": "https://www.statistics.gov.hk/pub/B2XX0004012008XXXXB0300.pdf",
      "publicationDate": "2009-07-17"
    }
  },
  "coverage": {
    "section": "Q",
    "label": "人類保健及社會工作",
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
    "hsicSection": "Q",
    "title": "醫療服務的供給背景",
    "coverage": "香港病床及註冊醫護人員，與HA帳目分開，並非社會工作活動全範圍",
    "caseIds": [
      "hospital-authority"
    ],
    "context": {
      "text": "官方病床數同時包括醫管局、私家醫院及懲教院所；與只列醫管局資源的個案不同。正式註冊醫生包含本地與非本地名單，並不等於目前在香港提供全職診症的人數。",
      "sources": [
        {
          "sourceId": "hkfigures2026",
          "printedPage": 42,
          "pdfPage": 49,
          "table": "Table 15.4 and notes 1,3,4"
        }
      ]
    },
    "metrics": [
      {
        "key": "hospital-beds",
        "label": "病床，醫管局、私家及懲教院所",
        "observations": [
          {
            "period": "2024",
            "value": 36796,
            "unit": "張",
            "scale": 1,
            "status": "reported",
            "scope": "香港醫管局、私家及懲教院所病床",
            "basis": "年末數，私家醫院含住院及日間床",
            "sourceId": "hkfigures2026",
            "printedPage": 42,
            "pdfPage": 49,
            "table": "Table 15.4"
          },
          {
            "period": "2025",
            "value": 37142,
            "unit": "張",
            "scale": 1,
            "status": "reported",
            "scope": "香港醫管局、私家及懲教院所病床",
            "basis": "年末數，私家醫院含住院及日間床",
            "sourceId": "hkfigures2026",
            "printedPage": 42,
            "pdfPage": 49,
            "table": "Table 15.4"
          }
        ]
      },
      {
        "key": "registered-doctors",
        "label": "正式註冊醫生",
        "observations": [
          {
            "period": "2024",
            "value": 16533,
            "unit": "人",
            "scale": 1,
            "status": "reported",
            "scope": "正式註冊醫生本地及非本地名單，不含有限度註冊",
            "basis": "年末數，不等於活躍全職醫生",
            "sourceId": "hkfigures2026",
            "printedPage": 42,
            "pdfPage": 49,
            "table": "Table 15.4 notes 3 and 4"
          },
          {
            "period": "2025",
            "value": 16905,
            "unit": "人",
            "scale": 1,
            "status": "reported",
            "scope": "正式註冊醫生本地及非本地名單，不含有限度註冊",
            "basis": "年末數，不等於活躍全職醫生",
            "sourceId": "hkfigures2026",
            "printedPage": 42,
            "pdfPage": 49,
            "table": "Table 15.4 notes 3 and 4"
          }
        ]
      }
    ],
    "gap": "沒有用這些供給數推算醫療收入或利潤；仍未包含Q所有社會工作活動的同口徑財務。",
    "checkedOn": "2026-10-22",
    "sources": [
      {
        "id": "hkfigures2026",
        "title": "Hong Kong in Figures 2026 Edition",
        "url": "https://www.censtatd.gov.hk/en/data/stat_report/product/B1010006/att/B10100062026AN26B0100.pdf",
        "publicationDate": null,
        "retrievedOn": "2026-10-22"
      }
    ]
  },
  "gap": null,
  "cases": [
    {
      "id": "hospital-authority",
      "entity": "醫院管理局 Hospital Authority",
      "hsicSections": [
        "Q"
      ],
      "modelType": "public-healthcare",
      "whyThisCase": "示範以政府資助為主的公立醫療服務如何承擔人員、藥物及設施成本。案例使用醫管局本身的綜合帳目，沒有把撒瑪利亞基金或醫管局慈善基金當作醫管局。",
      "geography": "香港",
      "consolidationScope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
      "currency": "HKD",
      "audited": true,
      "latestReportCheck": {
        "date": "2026-10-22",
        "url": "https://www.ha.org.hk/visitor/template106.asp?Change_Page=1&Content_ID=212441&Dimension=100&Lang=ENG&Parent_ID=10221&Ver=HTML",
        "latestListed": "2024/25"
      },
      "fiscalYears": [
        {
          "label": "2022/23",
          "start": "2022-04-01",
          "end": "2023-03-31"
        },
        {
          "label": "2023/24",
          "start": "2023-04-01",
          "end": "2024-03-31"
        },
        {
          "label": "2024/25",
          "start": "2024-04-01",
          "end": "2025-03-31"
        }
      ],
      "sources": [
        {
          "id": "ha2025",
          "title": "Hospital Authority Annual Report 2024-2025",
          "url": "https://www3.ha.org.hk/CC_Publication/HA_Annual_Report_2024-25.pdf",
          "publicationDate": null,
          "localPath": "evidence/raw/ha2025.pdf",
          "retrievedOn": "2026-10-22",
          "sha256": "ca6be45ef8b713025f5f2a3aaea1c11fe862fccbc5edb093ecc9ccc22eacae9f",
          "archiveDownloadURL": "https://www.ha.org.hk/visitor/ha_view_content.asp?Content_ID=282050&Parent_ID=212441&Ver=HTML",
          "responseEvidence": "evidence/raw/ha2025-response-headers.json"
        },
        {
          "id": "ha2024",
          "title": "Hospital Authority Annual Report 2023-2024",
          "url": "https://www.ha.org.hk/haho/ho/cc/HA_Annual_Report_2023-24_en.pdf",
          "publicationDate": null,
          "localPath": "evidence/raw/ha2024.pdf",
          "retrievedOn": "2026-10-22",
          "sha256": "14c3a52345709dc2e75fa696d310ec2c41a1c2cd46ceca152f4406161b2c325f"
        }
      ],
      "business": {
        "provides": {
          "text": "管理及發展香港公立醫院系統，提供醫院與診所服務，並進行相關培訓與研究。",
          "sources": [
            {
              "sourceId": "ha2025",
              "printedPage": 126,
              "pdfPage": 128,
              "table": "Note 1"
            }
          ]
        },
        "customers": {
          "text": "病人接受醫療服務；政府資助承擔大部分財政來源，病人另付醫院與診所費用，付款者與服務使用者不完全相同。",
          "sources": [
            {
              "sourceId": "ha2025",
              "printedPage": 122,
              "pdfPage": 124,
              "table": null
            }
          ]
        },
        "revenueModel": {
          "text": "收入以經常政府資助為主，另有診症費、由指定基金轉入的款項、資本資助攤銷、投資收入及其他收入。限制用途或資本撥款可能先列遞延收入，不能把所有已收資金都當成當年可用盈餘。",
          "sources": [
            {
              "sourceId": "ha2025",
              "printedPage": 122,
              "pdfPage": 124,
              "table": null
            },
            {
              "sourceId": "ha2025",
              "printedPage": 120,
              "pdfPage": 122,
              "table": null
            }
          ]
        },
        "costs": {
          "text": "人員成本是最大支出，另有藥物、醫療用品及設備、維修、能源、折舊及其他營運費用。年度盈餘只表示該會計期間收入超過支出，不是股東利潤。",
          "sources": [
            {
              "sourceId": "ha2025",
              "printedPage": 122,
              "pdfPage": 124,
              "table": null
            }
          ]
        },
        "process": [
          {
            "text": "按公共醫療需要、政府及醫管局優次作年度服務及資源規劃。",
            "sources": [
              {
                "sourceId": "ha2025",
                "printedPage": 54,
                "pdfPage": 56,
                "table": null
              }
            ]
          },
          {
            "text": "聘用醫護人員、採購藥物與設備、維持醫院設施並提供診治。",
            "sources": [
              {
                "sourceId": "ha2025",
                "printedPage": 122,
                "pdfPage": 124,
                "table": null
              }
            ]
          },
          {
            "text": "按資助條件及會計政策記錄資助、服務收入和支出，餘額保留於基金及收入儲備。",
            "sources": [
              {
                "sourceId": "ha2025",
                "printedPage": 120,
                "pdfPage": 122,
                "table": null
              },
              {
                "sourceId": "ha2025",
                "printedPage": 54,
                "pdfPage": 56,
                "table": null
              }
            ]
          }
        ],
        "influences": {
          "text": "人口增長及老化帶來服務需求，政府撥款安排、疫情相關措施、員工成本和藥物支出改變年度資金需要。儲備用於未來及突發需要，並非全部可自由分配現金。",
          "sources": [
            {
              "sourceId": "ha2025",
              "printedPage": 54,
              "pdfPage": 56,
              "table": null
            },
            {
              "sourceId": "ha2024",
              "printedPage": 53,
              "pdfPage": 55,
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
              "value": 95407063,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2024",
              "printedPage": 104,
              "pdfPage": 106,
              "table": "Consolidated statement of income and expenditure"
            },
            {
              "year": "2023/24",
              "value": 98379127,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 122,
              "pdfPage": 124,
              "table": "Consolidated statement of income and expenditure"
            },
            {
              "year": "2024/25",
              "value": 101249311,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 122,
              "pdfPage": 124,
              "table": "Consolidated statement of income and expenditure"
            }
          ]
        },
        {
          "key": "government-funding",
          "originalLabel": "Recurrent Government subvention",
          "label": "經常政府資助",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": 83426071,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2024",
              "printedPage": 104,
              "pdfPage": 106,
              "table": "Consolidated statement of income and expenditure"
            },
            {
              "year": "2023/24",
              "value": 84773807,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 122,
              "pdfPage": 124,
              "table": "Consolidated statement of income and expenditure"
            },
            {
              "year": "2024/25",
              "value": 87533531,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 122,
              "pdfPage": 124,
              "table": "Consolidated statement of income and expenditure"
            }
          ]
        },
        {
          "key": "service-fees",
          "originalLabel": "Hospital / clinic fees and charges",
          "label": "醫院及診所費用",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": 5236123,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2024",
              "printedPage": 104,
              "pdfPage": 106,
              "table": "Consolidated statement of income and expenditure"
            },
            {
              "year": "2023/24",
              "value": 5865712,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 122,
              "pdfPage": 124,
              "table": "Consolidated statement of income and expenditure"
            },
            {
              "year": "2024/25",
              "value": 6255344,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 122,
              "pdfPage": 124,
              "table": "Consolidated statement of income and expenditure"
            }
          ]
        },
        {
          "key": "expenditure",
          "originalLabel": "Total expenditure",
          "label": "總支出，負數列示",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": -94929044,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2024",
              "printedPage": 104,
              "pdfPage": 106,
              "table": "Consolidated statement of income and expenditure"
            },
            {
              "year": "2023/24",
              "value": -97392845,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 122,
              "pdfPage": 124,
              "table": "Consolidated statement of income and expenditure"
            },
            {
              "year": "2024/25",
              "value": -100725311,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 122,
              "pdfPage": 124,
              "table": "Consolidated statement of income and expenditure"
            }
          ]
        },
        {
          "key": "staff-costs",
          "originalLabel": "Staff costs",
          "label": "員工成本",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": -59419009,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2024",
              "printedPage": 104,
              "pdfPage": 106,
              "table": "Consolidated statement of income and expenditure"
            },
            {
              "year": "2023/24",
              "value": -62414171,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 122,
              "pdfPage": 124,
              "table": "Consolidated statement of income and expenditure"
            },
            {
              "year": "2024/25",
              "value": -65822525,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 122,
              "pdfPage": 124,
              "table": "Consolidated statement of income and expenditure"
            }
          ]
        },
        {
          "key": "drugs",
          "originalLabel": "Drugs",
          "label": "藥物支出",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": -12451347,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2024",
              "printedPage": 104,
              "pdfPage": 106,
              "table": "Consolidated statement of income and expenditure"
            },
            {
              "year": "2023/24",
              "value": -13126702,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 122,
              "pdfPage": 124,
              "table": "Consolidated statement of income and expenditure"
            },
            {
              "year": "2024/25",
              "value": -12749878,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 122,
              "pdfPage": 124,
              "table": "Consolidated statement of income and expenditure"
            }
          ]
        },
        {
          "key": "surplus",
          "originalLabel": "Surplus for the year",
          "label": "年度盈餘",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": 478019,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2024",
              "printedPage": 104,
              "pdfPage": 106,
              "table": "Consolidated statement of income and expenditure"
            },
            {
              "year": "2023/24",
              "value": 986282,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 122,
              "pdfPage": 124,
              "table": "Consolidated statement of income and expenditure"
            },
            {
              "year": "2024/25",
              "value": 524000,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 122,
              "pdfPage": 124,
              "table": "Consolidated statement of income and expenditure"
            }
          ]
        },
        {
          "key": "operating-cash-flow",
          "originalLabel": "Net cash generated from operating activities",
          "label": "營運活動淨現金流入",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": 9139487,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2024",
              "printedPage": 106,
              "pdfPage": 108,
              "table": "Consolidated statement of cash flows"
            },
            {
              "year": "2023/24",
              "value": 10279500,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 124,
              "pdfPage": 126,
              "table": "Consolidated statement of cash flows"
            },
            {
              "year": "2024/25",
              "value": 9950625,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 124,
              "pdfPage": 126,
              "table": "Consolidated statement of cash flows"
            }
          ]
        },
        {
          "key": "cash",
          "originalLabel": "Cash and bank balances",
          "label": "現金及銀行結餘，含長期存款",
          "unit": "HKD",
          "scale": 1000,
          "basis": "期末存量",
          "observations": [
            {
              "year": "2022/23",
              "value": 41594804,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2024",
              "printedPage": 102,
              "pdfPage": 104,
              "table": "Consolidated balance sheet"
            },
            {
              "year": "2023/24",
              "value": 51892607,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 120,
              "pdfPage": 122,
              "table": "Consolidated balance sheet"
            },
            {
              "year": "2024/25",
              "value": 57833006,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 120,
              "pdfPage": 122,
              "table": "Consolidated balance sheet"
            }
          ]
        },
        {
          "key": "cash-equivalents",
          "originalLabel": "Cash and cash equivalents at the end of the year",
          "label": "現金流量表年終現金及現金等價物",
          "unit": "HKD",
          "scale": 1000,
          "basis": "期末存量",
          "observations": [
            {
              "year": "2022/23",
              "value": 2107109,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2024",
              "printedPage": 106,
              "pdfPage": 108,
              "table": "Consolidated statement of cash flows"
            },
            {
              "year": "2023/24",
              "value": 8464372,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 124,
              "pdfPage": 126,
              "table": "Consolidated statement of cash flows"
            },
            {
              "year": "2024/25",
              "value": 23519324,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 124,
              "pdfPage": 126,
              "table": "Consolidated statement of cash flows"
            }
          ]
        },
        {
          "key": "borrowings",
          "originalLabel": "Interest-bearing bank borrowings not separately presented",
          "label": "銀行借款，無獨立披露金額",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2022/23",
              "value": null,
              "status": "not-disclosed",
              "restatement": "不適用",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2024",
              "printedPage": 102,
              "pdfPage": 104,
              "table": "Consolidated balance sheet",
              "reason": "綜合資產負債表沒有獨立銀行借款項目；融資現金流只列租賃本金及財務費用。不能把全部負債或與撒瑪利亞基金的往來款叫借款。"
            },
            {
              "year": "2023/24",
              "value": null,
              "status": "not-disclosed",
              "restatement": "不適用",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 120,
              "pdfPage": 122,
              "table": "Consolidated balance sheet",
              "reason": "綜合資產負債表沒有獨立銀行借款項目；融資現金流只列租賃本金及財務費用。不能把全部負債或與撒瑪利亞基金的往來款叫借款。"
            },
            {
              "year": "2024/25",
              "value": null,
              "status": "not-disclosed",
              "restatement": "不適用",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 120,
              "pdfPage": 122,
              "table": "Consolidated balance sheet",
              "reason": "綜合資產負債表沒有獨立銀行借款項目；融資現金流只列租賃本金及財務費用。不能把全部負債或與撒瑪利亞基金的往來款叫借款。"
            }
          ]
        },
        {
          "key": "lease-liabilities",
          "originalLabel": "Current and non-current lease liabilities",
          "label": "租賃負債，流動及非流動合計",
          "unit": "HKD",
          "scale": 1000,
          "basis": "期末存量，由兩項租賃負債相加",
          "observations": [
            {
              "year": "2022/23",
              "value": 673032,
              "status": "calculated",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2024",
              "printedPage": 102,
              "pdfPage": 104,
              "table": "Consolidated balance sheet",
              "formula": "343368+329664"
            },
            {
              "year": "2023/24",
              "value": 515553,
              "status": "calculated",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 120,
              "pdfPage": 122,
              "table": "Consolidated balance sheet",
              "formula": "258225+257328"
            },
            {
              "year": "2024/25",
              "value": 394362,
              "status": "calculated",
              "restatement": "未標示重列",
              "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
              "sourceId": "ha2025",
              "printedPage": 120,
              "pdfPage": 122,
              "table": "Consolidated balance sheet",
              "formula": "195294+199068"
            }
          ]
        }
      ],
      "analysis": [
        {
          "fromYear": "2022/23",
          "toYear": "2023/24",
          "text": "年度盈餘由478,019升至986,282千港元，增加508,263千港元。管理層說明疫情平息、抗疫措施結束後部分營運支出下降，並獲政府同意保留部分年度資金應付未來需要。這是管理層解釋，不能單憑總盈餘判斷醫療質素。",
          "kind": "management-explanation",
          "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
          "sources": [
            {
              "sourceId": "ha2024",
              "printedPage": 53,
              "pdfPage": 55,
              "table": null
            },
            {
              "sourceId": "ha2024",
              "printedPage": 104,
              "pdfPage": 106,
              "table": "Consolidated statement of income and expenditure"
            },
            {
              "sourceId": "ha2025",
              "printedPage": 122,
              "pdfPage": 124,
              "table": "Consolidated statement of income and expenditure"
            }
          ]
        },
        {
          "fromYear": "2023/24",
          "toYear": "2024/25",
          "text": "收入增加2,870,184千港元，支出增加3,332,466千港元，年度盈餘因而減少462,282千港元。管理層表示年度資源仍按服務優次和準備情況安排，保留盈餘是應付未來及突發需要的保障；沒有把盈餘下降解讀為提供較少醫療服務。",
          "kind": "calculated-change",
          "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
          "sources": [
            {
              "sourceId": "ha2025",
              "printedPage": 122,
              "pdfPage": 124,
              "table": "Consolidated statement of income and expenditure"
            },
            {
              "sourceId": "ha2025",
              "printedPage": 122,
              "pdfPage": 124,
              "table": "Consolidated statement of income and expenditure"
            },
            {
              "sourceId": "ha2025",
              "printedPage": 54,
              "pdfPage": 56,
              "table": null
            }
          ],
          "formula": "101249311-98379127;100725311-97392845;524000-986282"
        },
        {
          "fromYear": "2023/24",
          "toYear": "2024/25",
          "text": "現金等價物大增包含原到期日超過三個月銀行存款減少9,119,898千港元的投資現金流影響。這是資金期限調配，不能與年度盈餘或新政府資助混為一談。",
          "kind": "interpretation",
          "scope": "醫院管理局及其附屬機構綜合帳目，香港公立醫院及診所服務，並非全港醫療及社會工作行業",
          "sources": [
            {
              "sourceId": "ha2025",
              "printedPage": 124,
              "pdfPage": 126,
              "table": "Consolidated statement of cash flows"
            }
          ]
        }
      ],
      "limits": [
        "醫管局涵蓋公立醫院及診所，不包括全體私營醫療和所有社會工作。",
        "年報中的綜合體與醫管局單體表並列，本案例始終取綜合體欄。",
        "撒瑪利亞基金及醫管局慈善基金有各自帳目，不以它們替代醫管局的財政結果。",
        "現金及銀行結餘含原到期日超過三個月存款，與現金流量表現金等價物不同。",
        "指定基金、遞延資助及往來款限制資金用途，不能把現金結餘全當自由儲備。",
        "銀行借款未獨立披露金額，保持空值並另外呈現租賃負債，不推測為零。",
        "2024/25比較數採最新表，所列主要指標未標示重列。"
      ]
    }
  ]
};
