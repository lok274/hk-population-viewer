export default {
  "code": "O",
  "title": "公共行政",
  "checkedOn": "2026-10-22",
  "classification": {
    "intro": "制定及執行公共政策、一般政府行政，以及維持公共秩序和安全。",
    "models": [
      {
        "title": "公共行政",
        "text": "按公共職能提供行政及監管服務；教學和醫療本身另歸教育及保健類。"
      }
    ],
    "readFor": "政府綜合帳目範圍比 O 更廣；政府收入及開支不能當作公共行政業銷售和利潤。",
    "printedPage": 333,
    "pdfPage": 337,
    "source": {
      "id": "hsic-manual",
      "title": "香港標準行業分類 2.0 版，第三部分",
      "publisher": "政府統計處",
      "url": "https://www.statistics.gov.hk/pub/B2XX0004012008XXXXB0300.pdf",
      "publicationDate": "2009-07-17"
    }
  },
  "coverage": {
    "section": "O",
    "label": "公共行政",
    "status": "no-comparable-ASEA-table",
    "groupIds": [],
    "reason": "本輪官方 ASEA 主力表沒有此 HSIC 主類的可比較年度企業收益、成本及盈餘；不可用零或其他行業代替。"
  },
  "sources": [],
  "groups": [],
  "context": {
    "hsicSection": "O",
    "title": "公共行政的人手背景",
    "coverage": "公務員實際員額，範圍由CSB定義，不是整個O行業僱員總數或政府整體綜合帳目範圍",
    "caseIds": [
      "hksar-government"
    ],
    "context": {
      "text": "編制是可設職位，實際員額是已有人任職的職位，兩者不同。下列採實際公務員員額，包括借調至資助或公帑機構者及正放取最後假期者。不能用政府整體綜合收入除以此人數當作每名行政人員產值。",
      "sources": [
        {
          "sourceId": "csb-strength",
          "printedPage": null,
          "pdfPage": null,
          "table": "Establishment and Strength, notes 1-4"
        }
      ]
    },
    "metrics": [
      {
        "key": "civil-service-strength",
        "label": "公務員實際員額",
        "observations": [
          {
            "period": "2026-03-31",
            "value": 170193,
            "unit": "人",
            "scale": 1,
            "status": "reported",
            "scope": "CSB公務員定義",
            "basis": "時點存量",
            "sourceId": "csb-strength",
            "printedPage": null,
            "pdfPage": null,
            "table": "Strength of the Civil Service"
          },
          {
            "period": "2026-06-30",
            "value": 169127,
            "unit": "人",
            "scale": 1,
            "status": "reported",
            "scope": "CSB公務員定義",
            "basis": "時點存量",
            "sourceId": "csb-strength",
            "printedPage": null,
            "pdfPage": null,
            "table": "Strength of the Civil Service"
          }
        ]
      }
    ],
    "gap": "這不是O行業全體財務表，也不把公務員人數等同所有公共服務機構員工。",
    "checkedOn": "2026-10-22",
    "sources": [
      {
        "id": "csb-strength",
        "title": "CSB Establishment and Strength",
        "url": "https://www.csb.gov.hk/english/publications_stat/stat/quarterly/540.html",
        "publicationDate": null,
        "retrievedOn": "2026-10-22"
      }
    ]
  },
  "gap": null,
  "cases": [
    {
      "id": "hksar-government",
      "entity": "香港特別行政區政府",
      "hsicSections": [
        "O"
      ],
      "modelType": "government",
      "whyThisCase": "以實際政府綜合財務報表解釋公共服務如何籌資、使用資源及形成赤字。政府整體報表只是一個公共財政例子，不是公共行政行業損益表。",
      "geography": "香港",
      "consolidationScope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
      "currency": "HKD",
      "audited": null,
      "auditStatus": "本組政府應計制報表由庫務署編製；所取完整報表沒有附獨立核數意見，不把它稱為無保留審計報表。",
      "latestReportCheck": {
        "date": "2026-10-22",
        "url": "https://www.try.gov.hk/internet/ehpubl_acco_annual.html",
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
          "id": "gov2025",
          "title": "Accrual-based consolidated financial statements of the Government 2024-25",
          "url": "https://www.try.gov.hk/cinternet/pdc_abac2425_fullset.pdf",
          "publicationDate": "2025-12-24",
          "localPath": "evidence/raw/gov2025.pdf",
          "retrievedOn": "2026-10-22",
          "sha256": "318ece88e92760a214066cbd17d77a225e2e800076f699afb407294566099d6f"
        },
        {
          "id": "gov2024",
          "title": "Accrual-based consolidated financial statements of the Government 2023-24",
          "url": "https://www.try.gov.hk/cinternet/pdc_abac2324_fullset.pdf",
          "publicationDate": null,
          "localPath": "evidence/raw/gov2024.pdf",
          "retrievedOn": "2026-10-22",
          "sha256": "f0f4e198df521e0a796da73245910b774063a6c2a5deb19df1f65775e9874dad"
        }
      ],
      "business": {
        "provides": {
          "text": "政府運用公共資源提供公共服務、社會保障與資助；此綜合報表還納入房屋、外匯基金和政府企業的相關權益，不能狹義等同政府辦公室的行政開支。",
          "sources": [
            {
              "sourceId": "gov2025",
              "printedPage": 49,
              "pdfPage": 49,
              "table": "Notes 1 and 2"
            }
          ]
        },
        "customers": {
          "text": "公共服務的受惠者包括市民及社會機構。稅款、差餉及徵費是主要營運收入，付款並不等同購買一份對價相等的商品。",
          "sources": [
            {
              "sourceId": "gov2025",
              "printedPage": 44,
              "pdfPage": 44,
              "table": null
            },
            {
              "sourceId": "gov2025",
              "printedPage": 49,
              "pdfPage": 49,
              "table": null
            }
          ]
        },
        "revenueModel": {
          "text": "營運收入包括稅項、差餉、徵費、租金和服務收費；地價及投資收入另列非營運項目。發債屬融資，應計制表不把借入本金當作收入。",
          "sources": [
            {
              "sourceId": "gov2025",
              "printedPage": 44,
              "pdfPage": 44,
              "table": null
            },
            {
              "sourceId": "gov2025",
              "printedPage": 46,
              "pdfPage": 46,
              "table": null
            },
            {
              "sourceId": "gov2025",
              "printedPage": 48,
              "pdfPage": 48,
              "table": null
            }
          ]
        },
        "costs": {
          "text": "營運開支包括員工薪酬、經常資助金、社會保障、折舊及其他營運開支。非營運項目另包括資本及利息開支、退休金精算變動與投資結果。",
          "sources": [
            {
              "sourceId": "gov2025",
              "printedPage": 44,
              "pdfPage": 44,
              "table": null
            }
          ]
        },
        "process": [
          {
            "text": "收取稅項、租金及服務收費，並管理政府投資。",
            "sources": [
              {
                "sourceId": "gov2025",
                "printedPage": 44,
                "pdfPage": 44,
                "table": null
              }
            ]
          },
          {
            "text": "透過部門直接提供服務，或向機構支付資助金購買公共服務。",
            "sources": [
              {
                "sourceId": "gov2025",
                "printedPage": 49,
                "pdfPage": 49,
                "table": "Note 2.2"
              }
            ]
          },
          {
            "text": "按應計制確認主要收入、成本、資產和負債，另以現金流量表核對資金進出。",
            "sources": [
              {
                "sourceId": "gov2025",
                "printedPage": 49,
                "pdfPage": 49,
                "table": null
              },
              {
                "sourceId": "gov2025",
                "printedPage": 50,
                "pdfPage": 50,
                "table": null
              }
            ]
          }
        ],
        "influences": {
          "text": "稅收、地價、公共服務需求、薪酬和資助水平、利率、投資回報及退休金估算均會改變結果。這些項目影響不同，單看年度赤字不足以判斷某個部門效率。",
          "sources": [
            {
              "sourceId": "gov2025",
              "printedPage": 44,
              "pdfPage": 44,
              "table": null
            },
            {
              "sourceId": "gov2025",
              "printedPage": 48,
              "pdfPage": 48,
              "table": null
            }
          ]
        }
      },
      "metrics": [
        {
          "key": "operating-income",
          "originalLabel": "Total operating revenue",
          "label": "營運收入",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "年度流量，應計制",
          "observations": [
            {
              "year": "2022/23",
              "value": 469572,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2024",
              "printedPage": 42,
              "pdfPage": 42,
              "table": "Consolidated statement of financial performance"
            },
            {
              "year": "2023/24",
              "value": 455463,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 44,
              "pdfPage": 44,
              "table": "Consolidated statement of financial performance"
            },
            {
              "year": "2024/25",
              "value": 497181,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 44,
              "pdfPage": 44,
              "table": "Consolidated statement of financial performance"
            }
          ]
        },
        {
          "key": "taxes",
          "originalLabel": "Taxes, rates and duties",
          "label": "稅項、差餉及徵費",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "年度流量，應計制",
          "observations": [
            {
              "year": "2022/23",
              "value": 402457,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2024",
              "printedPage": 42,
              "pdfPage": 42,
              "table": "Consolidated statement of financial performance"
            },
            {
              "year": "2023/24",
              "value": 380026,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 44,
              "pdfPage": 44,
              "table": "Consolidated statement of financial performance"
            },
            {
              "year": "2024/25",
              "value": 416917,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 44,
              "pdfPage": 44,
              "table": "Consolidated statement of financial performance"
            }
          ]
        },
        {
          "key": "operating-expenditure",
          "originalLabel": "Total operating expenses",
          "label": "營運開支，費用以負數列示",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "年度流量，應計制",
          "observations": [
            {
              "year": "2022/23",
              "value": -716036,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2024",
              "printedPage": 42,
              "pdfPage": 42,
              "table": "Consolidated statement of financial performance"
            },
            {
              "year": "2023/24",
              "value": -613824,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 44,
              "pdfPage": 44,
              "table": "Consolidated statement of financial performance"
            },
            {
              "year": "2024/25",
              "value": -614246,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 44,
              "pdfPage": 44,
              "table": "Consolidated statement of financial performance"
            }
          ]
        },
        {
          "key": "staff-costs",
          "originalLabel": "Salaries, allowances and other employee benefits",
          "label": "薪酬津貼及其他員工福利",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "年度流量，應計制",
          "observations": [
            {
              "year": "2022/23",
              "value": -129131,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2024",
              "printedPage": 42,
              "pdfPage": 42,
              "table": "Consolidated statement of financial performance"
            },
            {
              "year": "2023/24",
              "value": -132507,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 44,
              "pdfPage": 44,
              "table": "Consolidated statement of financial performance"
            },
            {
              "year": "2024/25",
              "value": -135815,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 44,
              "pdfPage": 44,
              "table": "Consolidated statement of financial performance"
            }
          ]
        },
        {
          "key": "recurrent-subventions",
          "originalLabel": "Recurrent subventions",
          "label": "經常資助金",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "年度流量，應計制",
          "observations": [
            {
              "year": "2022/23",
              "value": -209752,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2024",
              "printedPage": 42,
              "pdfPage": 42,
              "table": "Consolidated statement of financial performance"
            },
            {
              "year": "2023/24",
              "value": -214745,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 44,
              "pdfPage": 44,
              "table": "Consolidated statement of financial performance"
            },
            {
              "year": "2024/25",
              "value": -223023,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 44,
              "pdfPage": 44,
              "table": "Consolidated statement of financial performance"
            }
          ]
        },
        {
          "key": "operating-balance",
          "originalLabel": "Deficit from operating activities",
          "label": "營運活動赤字",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "年度流量，應計制",
          "observations": [
            {
              "year": "2022/23",
              "value": -246464,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2024",
              "printedPage": 42,
              "pdfPage": 42,
              "table": "Consolidated statement of financial performance"
            },
            {
              "year": "2023/24",
              "value": -158361,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 44,
              "pdfPage": 44,
              "table": "Consolidated statement of financial performance"
            },
            {
              "year": "2024/25",
              "value": -117065,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 44,
              "pdfPage": 44,
              "table": "Consolidated statement of financial performance"
            }
          ]
        },
        {
          "key": "exchange-fund-result",
          "originalLabel": "Surplus / (Deficit) of the Exchange Fund",
          "label": "所納入外匯基金盈餘或赤字",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "年度流量，應計制",
          "observations": [
            {
              "year": "2022/23",
              "value": -69599,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2024",
              "printedPage": 42,
              "pdfPage": 42,
              "table": "Consolidated statement of financial performance"
            },
            {
              "year": "2023/24",
              "value": 30486,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 44,
              "pdfPage": 44,
              "table": "Consolidated statement of financial performance"
            },
            {
              "year": "2024/25",
              "value": 110919,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 44,
              "pdfPage": 44,
              "table": "Consolidated statement of financial performance"
            }
          ]
        },
        {
          "key": "annual-balance",
          "originalLabel": "Net deficit for the year",
          "label": "年度赤字，並非股東損失",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "年度流量，應計制",
          "observations": [
            {
              "year": "2022/23",
              "value": -294329,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2024",
              "printedPage": 42,
              "pdfPage": 42,
              "table": "Consolidated statement of financial performance"
            },
            {
              "year": "2023/24",
              "value": -85716,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 44,
              "pdfPage": 44,
              "table": "Consolidated statement of financial performance"
            },
            {
              "year": "2024/25",
              "value": -14087,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 44,
              "pdfPage": 44,
              "table": "Consolidated statement of financial performance"
            }
          ]
        },
        {
          "key": "operating-cash-flow",
          "originalLabel": "Net cash outflow from operating activities",
          "label": "營運活動淨現金流",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "年度現金流量",
          "observations": [
            {
              "year": "2022/23",
              "value": -263507,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2024",
              "printedPage": 44,
              "pdfPage": 44,
              "table": "Consolidated cash flow statement"
            },
            {
              "year": "2023/24",
              "value": -171711,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 46,
              "pdfPage": 46,
              "table": "Consolidated cash flow statement"
            },
            {
              "year": "2024/25",
              "value": -132010,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 46,
              "pdfPage": 46,
              "table": "Consolidated cash flow statement"
            }
          ]
        },
        {
          "key": "cash",
          "originalLabel": "Cash and cash equivalents",
          "label": "現金及現金等價物",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "期末存量，不等於財政儲備",
          "observations": [
            {
              "year": "2022/23",
              "value": 36767,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2024",
              "printedPage": 43,
              "pdfPage": 43,
              "table": "Consolidated statement of financial position"
            },
            {
              "year": "2023/24",
              "value": 32477,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 45,
              "pdfPage": 45,
              "table": "Consolidated statement of financial position"
            },
            {
              "year": "2024/25",
              "value": 21550,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 45,
              "pdfPage": 45,
              "table": "Consolidated statement of financial position"
            }
          ]
        },
        {
          "key": "borrowings",
          "originalLabel": "Bonds issued",
          "label": "已發行債券",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "期末存量，帳面值",
          "observations": [
            {
              "year": "2022/23",
              "value": 336441,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2024",
              "printedPage": 43,
              "pdfPage": 43,
              "table": "Consolidated statement of financial position"
            },
            {
              "year": "2023/24",
              "value": 445583,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 45,
              "pdfPage": 45,
              "table": "Consolidated statement of financial position"
            },
            {
              "year": "2024/25",
              "value": 483462,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 45,
              "pdfPage": 45,
              "table": "Consolidated statement of financial position"
            }
          ]
        },
        {
          "key": "net-assets",
          "originalLabel": "Net assets",
          "label": "淨資產",
          "unit": "HKD",
          "scale": 1000000,
          "basis": "期末存量，不等於現金",
          "observations": [
            {
              "year": "2022/23",
              "value": 1739625,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2024",
              "printedPage": 43,
              "pdfPage": 43,
              "table": "Consolidated statement of financial position"
            },
            {
              "year": "2023/24",
              "value": 1649057,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 45,
              "pdfPage": 45,
              "table": "Consolidated statement of financial position"
            },
            {
              "year": "2024/25",
              "value": 1636210,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
              "sourceId": "gov2025",
              "printedPage": 45,
              "pdfPage": 45,
              "table": "Consolidated statement of financial position"
            }
          ]
        }
      ],
      "analysis": [
        {
          "fromYear": "2022/23",
          "toYear": "2023/24",
          "text": "年度赤字由 294,329 減至 85,716 百萬港元，改善 208,613 百萬港元。營運赤字改善 88,103 百萬港元，非營運結果改善 120,510 百萬港元；外匯基金由虧損 69,599 轉為盈餘 30,486 百萬港元。這是報表項目分解，不是某項政策效果的因果證明。",
          "kind": "calculated-change",
          "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
          "sources": [
            {
              "sourceId": "gov2024",
              "printedPage": 42,
              "pdfPage": 42,
              "table": "Consolidated statement of financial performance"
            },
            {
              "sourceId": "gov2025",
              "printedPage": 44,
              "pdfPage": 44,
              "table": "Consolidated statement of financial performance"
            }
          ],
          "formula": "-85716-(-294329)=208613; -158361-(-246464)=88103;72645-(-47865)=120510"
        },
        {
          "fromYear": "2023/24",
          "toYear": "2024/25",
          "text": "年度赤字再改善 71,629 百萬港元，至 14,087 百萬港元。營運收入增加 41,718，而營運開支增加 422 百萬港元；所納入外匯基金盈餘增加 80,433 百萬港元，但其餘非營運項目合計抵銷部分改善。不能把較小赤字全解讀為政府行政更有效率。",
          "kind": "interpretation",
          "scope": "香港特別行政區政府按應計制綜合報表，含一般收入及指定基金、房委會，並以權益法納入外匯基金與政府企業；範圍遠超HSIC O公共行政",
          "sources": [
            {
              "sourceId": "gov2025",
              "printedPage": 44,
              "pdfPage": 44,
              "table": "Consolidated statement of financial performance"
            },
            {
              "sourceId": "gov2025",
              "printedPage": 44,
              "pdfPage": 44,
              "table": "Consolidated statement of financial performance"
            }
          ],
          "formula": "-14087-(-85716)=71629;497181-455463=41718;614246-613824=422;110919-30486=80433"
        }
      ],
      "limits": [
        "政府綜合範圍跨越多個行業，絕不是HSIC O行業營業額、利潤率或產值。",
        "外匯基金及政府企業採權益法，主要表中的收入不是這些機構所有收入的逐項相加。",
        "政府向非部門公共機構支付資助時，通常在本表記為資助開支，該機構不因此整體逐項綜合；不應與HA或PolyU再相加。",
        "應計制年度赤字與現金制財政赤字範圍和會計方法不同，報表第48頁提供調節，兩者不可混用。",
        "期末現金只包含原到期日不多於三個月的現金及存款；財政儲備另包括投資。",
        "2024/25比較數採最新表，主要指標未標示重列；不以預算或修訂估算冒充2025/26決算。"
      ]
    }
  ]
};
