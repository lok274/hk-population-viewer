export default {
  "code": "B",
  "title": "採礦及採石",
  "checkedOn": "2026-10-22",
  "classification": {
    "intro": "從自然環境開採礦物，並作碎石、篩選或清洗等處理。",
    "models": [
      {
        "title": "開採與整理",
        "text": "開採原料後處理成可出售的礦物或石料；單純轉售石料屬另一種活動。"
      }
    ],
    "readFor": "先確認實際開採地點，不能把香港上市的海外礦山當成本地採礦業。",
    "printedPage": 84,
    "pdfPage": 88,
    "source": {
      "id": "hsic-manual",
      "title": "香港標準行業分類 2.0 版，第三部分",
      "publisher": "政府統計處",
      "url": "https://www.statistics.gov.hk/pub/B2XX0004012008XXXXB0300.pdf",
      "publicationDate": "2009-07-17"
    }
  },
  "coverage": {
    "section": "B",
    "label": "採礦及採石",
    "status": "no-comparable-ASEA-table",
    "groupIds": [],
    "reason": "本輪官方 ASEA 主力表沒有此 HSIC 主類的可比較年度企業收益、成本及盈餘；不可用零或其他行業代替。"
  },
  "sources": [],
  "groups": [],
  "context": {
    "hsicSection": "B",
    "title": "採礦採石及轉型中的石礦場",
    "coverage": "官方活動定義及石礦場供應背景，加一個相關混合分部實例",
    "caseIds": [
      "wai-kee-quarrying"
    ],
    "context": {
      "text": "HSIC B涵蓋天然礦物開採及作為採礦整體一部分、通常在礦場附近進行的壓碎和篩選。CEDD於2025年11月指藍地是唯一活躍本地石礦場，並說明石礦場兼有回收建造工程剩餘石料、混凝土及瀝青設施等用途。石礦場公司所有收入不能因此自動歸為純開採收入。",
      "sources": [
        {
          "sourceId": "hsic",
          "printedPage": "84-85",
          "pdfPage": 88,
          "table": "Section B and 080000"
        },
        {
          "sourceId": "quarries2025",
          "printedPage": "1-4",
          "pdfPage": 1,
          "table": "Quarries in Hong Kong"
        }
      ]
    },
    "metrics": [
      {
        "key": "active-local-quarries",
        "label": "活躍本地石礦場數目",
        "observations": [
          {
            "period": "2025-11",
            "value": 1,
            "unit": "個",
            "scale": 1,
            "status": "reported",
            "scope": "CEDD所述本地石礦場",
            "basis": "文件發布時點，並非2026年重新普查",
            "sourceId": "quarries2025",
            "printedPage": 3,
            "pdfPage": 3,
            "table": null
          }
        ]
      }
    ],
    "gap": "找到三年真實本地採石相關分部案例，故不聲稱沒有案例。惟未取得官方HSIC單位代碼，且近年運入原石加工與新開採混合，不能確認一個純本地天然礦藏開採的三年獨立公司財務案例。",
    "checkedOn": "2026-10-22",
    "sources": [
      {
        "id": "hsic",
        "title": "Hong Kong Standard Industrial Classification Version 2.0",
        "url": "https://www.statistics.gov.hk/pub/B2XX0004012008XXXXB0300.pdf",
        "publicationDate": null,
        "retrievedOn": "2026-10-22"
      },
      {
        "id": "quarries2025",
        "title": "CEDD Information Note 30/2025 Quarries in Hong Kong",
        "url": "https://www.cedd.gov.hk/filemanager/eng/content_454/IN_2025_30E.pdf",
        "publicationDate": "2025-11",
        "retrievedOn": "2026-10-22"
      }
    ]
  },
  "gap": null,
  "cases": [
    {
      "id": "wai-kee-quarrying",
      "entity": "惠記集團 Wai Kee Holdings，重點為藍地採石分部",
      "hsicSections": [
        "B"
      ],
      "modelType": "mixed-transitional-quarrying-segment",
      "whyThisCase": "惠記直接經營香港藍地石礦場，並有三年採石分部收入及結果。這是真實本地石料供應案例，但近年倚重外來運入石料加工；綜合集團還有建築和內地物業投資，須與採石分部分開閱讀。",
      "geography": "採石分部主要香港藍地；綜合集團及聯營投資含香港、中國內地等",
      "consolidationScope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
      "currency": "HKD",
      "audited": true,
      "auditStatus": "2025年集團核數師給予保留意見，因無法取得充分證據評估路勁聯營公司的持續經營、權益法損益及投資減值；2024年為無保留意見。保留範圍不是獨立採石分部核數意見。",
      "auditSources": [
        {
          "sourceId": "waikee2025",
          "printedPage": "100-101",
          "pdfPage": 101,
          "table": "Qualified opinion and basis"
        },
        {
          "sourceId": "waikee2024",
          "printedPage": 86,
          "pdfPage": 87,
          "table": "Opinion"
        }
      ],
      "coverageStatus": "B相關的混合及轉型石礦場個案，非已確認純B分類公司",
      "classificationBasis": {
        "text": "HSIC B包括天然礦物開採及在礦場附近作為採礦整體的壓碎、篩選等工序。此案例依實際石礦場活動選取，沒有取得惠記或其單位的官方HSIC登記代碼。石礦場加工外來運入原石不能全部稱為本地新開採。",
        "scopeLimit": "天然礦藏開採與輸入原石加工必須分辨。沒有官方單位HSIC代碼，不聲稱採石分部所有活動都屬B；它也可能跨C製造或加工活動。",
        "sources": [
          {
            "sourceId": "hsic",
            "printedPage": "84-85",
            "pdfPage": 88,
            "table": "Section B and 080000"
          },
          {
            "sourceId": "waikee2025",
            "printedPage": 14,
            "pdfPage": 15,
            "table": null
          }
        ]
      },
      "latestReportCheck": {
        "date": "2026-10-22",
        "url": "https://www.waikee.com/Annual%20Report/E6102025AR.pdf",
        "latestLocated": "2025 full audited annual report, complete year ended 31 December 2025"
      },
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
      "sources": [
        {
          "id": "waikee2025",
          "title": "Wai Kee Holdings Annual Report 2025",
          "url": "https://www.waikee.com/Annual%20Report/E6102025AR.pdf",
          "publicationDate": null,
          "localPath": "evidence/raw/waikee2025.pdf",
          "retrievedOn": "2026-10-22",
          "sha256": "9da31def5dd8f2f84a2f41445317ca79308e49ddb6a47858fa11c1c1cb49d1dd"
        },
        {
          "id": "waikee2024",
          "title": "Wai Kee Holdings Annual Report 2024",
          "url": "https://www.waikee.com/Annual%20Report/EWF_610%20%28annual%20report%29.pdf",
          "publicationDate": null,
          "localPath": "evidence/raw/waikee2024.pdf",
          "retrievedOn": "2026-10-22",
          "sha256": "7e3fe47efed93b6ece56c7c8b573ff2366691588abcd131f6ceec69f956a19c7"
        },
        {
          "id": "hsic",
          "title": "Hong Kong Standard Industrial Classification Version 2.0",
          "url": "https://www.statistics.gov.hk/pub/B2XX0004012008XXXXB0300.pdf",
          "publicationDate": null,
          "localPath": "evidence/raw/hsic.pdf",
          "retrievedOn": "2026-10-22",
          "sha256": "cf74e72e8c3e112a05a7d025a47dc018564149e35fc6bb3dd6e5343fc1c19898"
        },
        {
          "id": "quarries2025",
          "title": "CEDD Information Note 30/2025 Quarries in Hong Kong",
          "url": "https://www.cedd.gov.hk/filemanager/eng/content_454/IN_2025_30E.pdf",
          "publicationDate": null,
          "localPath": "evidence/raw/quarries2025.pdf",
          "retrievedOn": "2026-10-22",
          "sha256": "bb029faa4b61f5df0ea621a3b91f5665540c58eaa33918a71d4bcb952803d4e2"
        }
      ],
      "business": {
        "provides": {
          "text": "採石分部在藍地提供骨料等石料，供香港建造用途；建材分部另把骨料等原料製成預拌混凝土，兩者有集團內部交易。",
          "sources": [
            {
              "sourceId": "waikee2025",
              "printedPage": 5,
              "pdfPage": 6,
              "table": null
            },
            {
              "sourceId": "waikee2025",
              "printedPage": 151,
              "pdfPage": 152,
              "table": null
            }
          ]
        },
        "customers": {
          "text": "採石產品交予香港客戶，包括集團其他業務。外部收入先扣除集團內部銷售，所以分部總收益與外部收益不同。",
          "sources": [
            {
              "sourceId": "waikee2025",
              "printedPage": 149,
              "pdfPage": 150,
              "table": null
            },
            {
              "sourceId": "waikee2025",
              "printedPage": 151,
              "pdfPage": 152,
              "table": null
            }
          ]
        },
        "revenueModel": {
          "text": "出售石料及建材在貨品送達指定地點、控制權轉移時確認收入；正常信貸期為交貨後30至60日。採石分部總收益包括內部銷售，分析時同時展示抵銷後外部收益。",
          "sources": [
            {
              "sourceId": "waikee2025",
              "printedPage": 149,
              "pdfPage": 150,
              "table": null
            },
            {
              "sourceId": "waikee2025",
              "printedPage": 151,
              "pdfPage": 152,
              "table": null
            }
          ]
        },
        "costs": {
          "text": "近年石料生產倚重運入藍地的原石，採購價格和供應量直接影響成本及產量，另有生產設備與人手成本。沒有採石分部完整成本表，不能用集團銷售成本當成採石成本。",
          "sources": [
            {
              "sourceId": "waikee2025",
              "printedPage": 14,
              "pdfPage": 15,
              "table": null
            },
            {
              "sourceId": "waikee2024",
              "printedPage": 12,
              "pdfPage": 13,
              "table": null
            }
          ]
        },
        "process": [
          {
            "text": "取得或輸入原石，在石礦場進行破碎及骨料生產；礦藏接近採完時，供應轉向輸入石料。",
            "sources": [
              {
                "sourceId": "waikee2024",
                "printedPage": 12,
                "pdfPage": 13,
                "table": null
              }
            ]
          },
          {
            "text": "把石料交付香港客戶及集團建材業務，按交貨確認收入。",
            "sources": [
              {
                "sourceId": "waikee2025",
                "printedPage": 149,
                "pdfPage": 150,
                "table": null
              },
              {
                "sourceId": "waikee2025",
                "printedPage": 151,
                "pdfPage": 152,
                "table": null
              }
            ]
          },
          {
            "text": "管理生產成本及石礦場復修責任；另準備藍地地下採石新合約，未把未來產量算入歷史。",
            "sources": [
              {
                "sourceId": "waikee2025",
                "printedPage": 16,
                "pdfPage": 17,
                "table": null
              },
              {
                "sourceId": "quarries2025",
                "printedPage": 3,
                "pdfPage": 3,
                "table": null
              }
            ]
          }
        ],
        "influences": {
          "text": "外來運入原石量與價格、骨料需求及售價、生產效率及採石合約階段會影響採石分部表現。集團整體盈虧則另受物業及道路等聯營投資影響，不可把其虧損歸因於採石。",
          "sources": [
            {
              "sourceId": "waikee2025",
              "printedPage": 14,
              "pdfPage": 15,
              "table": null
            },
            {
              "sourceId": "waikee2025",
              "printedPage": 151,
              "pdfPage": 152,
              "table": null
            },
            {
              "sourceId": "waikee2025",
              "printedPage": 106,
              "pdfPage": 107,
              "table": null
            }
          ]
        }
      },
      "metrics": [
        {
          "key": "quarry-gross-revenue",
          "originalLabel": "Quarrying - Gross segment revenue",
          "label": "採石分部總收益，含集團內部銷售",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2023",
              "value": 196583,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記Quarrying採石分部，在香港藍地石礦場經營，包含外來運入石料加工，不等同香港新開採石料總額",
              "sourceId": "waikee2024",
              "printedPage": 138,
              "pdfPage": 139,
              "table": "Note 7 segment revenue and results"
            },
            {
              "year": "2024",
              "value": 170993,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記Quarrying採石分部，在香港藍地石礦場經營，包含外來運入石料加工，不等同香港新開採石料總額",
              "sourceId": "waikee2025",
              "printedPage": 151,
              "pdfPage": 152,
              "table": "Note 7 segment revenue and results"
            },
            {
              "year": "2025",
              "value": 154809,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記Quarrying採石分部，在香港藍地石礦場經營，包含外來運入石料加工，不等同香港新開採石料總額",
              "sourceId": "waikee2025",
              "printedPage": 151,
              "pdfPage": 152,
              "table": "Note 7 segment revenue and results"
            }
          ]
        },
        {
          "key": "quarry-external-revenue",
          "originalLabel": "Quarrying - External segment revenue",
          "label": "採石分部對外收益",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2023",
              "value": 56891,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記Quarrying採石分部，在香港藍地石礦場經營，包含外來運入石料加工，不等同香港新開採石料總額",
              "sourceId": "waikee2024",
              "printedPage": 138,
              "pdfPage": 139,
              "table": "Note 7 segment revenue and results"
            },
            {
              "year": "2024",
              "value": 17220,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記Quarrying採石分部，在香港藍地石礦場經營，包含外來運入石料加工，不等同香港新開採石料總額",
              "sourceId": "waikee2025",
              "printedPage": 151,
              "pdfPage": 152,
              "table": "Note 7 segment revenue and results"
            },
            {
              "year": "2025",
              "value": 55179,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記Quarrying採石分部，在香港藍地石礦場經營，包含外來運入石料加工，不等同香港新開採石料總額",
              "sourceId": "waikee2025",
              "printedPage": 151,
              "pdfPage": 152,
              "table": "Note 7 segment revenue and results"
            }
          ]
        },
        {
          "key": "quarry-segment-result",
          "originalLabel": "Quarrying - Segment profit",
          "label": "採石分部結果，稅後及非控股權益後",
          "unit": "HKD",
          "scale": 1000,
          "basis": "公司定義分部結果，未分配公司項目前",
          "observations": [
            {
              "year": "2023",
              "value": 12303,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記Quarrying採石分部，在香港藍地石礦場經營，包含外來運入石料加工，不等同香港新開採石料總額",
              "sourceId": "waikee2024",
              "printedPage": 138,
              "pdfPage": 139,
              "table": "Note 7 segment revenue and results"
            },
            {
              "year": "2024",
              "value": 19744,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記Quarrying採石分部，在香港藍地石礦場經營，包含外來運入石料加工，不等同香港新開採石料總額",
              "sourceId": "waikee2025",
              "printedPage": 151,
              "pdfPage": 152,
              "table": "Note 7 segment revenue and results"
            },
            {
              "year": "2025",
              "value": 65295,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記Quarrying採石分部，在香港藍地石礦場經營，包含外來運入石料加工，不等同香港新開採石料總額",
              "sourceId": "waikee2025",
              "printedPage": 151,
              "pdfPage": 152,
              "table": "Note 7 segment revenue and results"
            }
          ]
        },
        {
          "key": "group-revenue",
          "originalLabel": "Revenue from goods and services",
          "label": "集團總收益",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2023",
              "value": 12711557,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2024",
              "printedPage": 92,
              "pdfPage": 93,
              "table": "Consolidated statement of profit or loss"
            },
            {
              "year": "2024",
              "value": 14479915,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2025",
              "printedPage": 106,
              "pdfPage": 107,
              "table": "Consolidated statement of profit or loss"
            },
            {
              "year": "2025",
              "value": 13941166,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2025",
              "printedPage": 106,
              "pdfPage": 107,
              "table": "Consolidated statement of profit or loss"
            }
          ]
        },
        {
          "key": "group-cost-of-sales",
          "originalLabel": "Cost of sales",
          "label": "集團銷售成本，負數列示",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2023",
              "value": -11250287,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2024",
              "printedPage": 92,
              "pdfPage": 93,
              "table": "Consolidated statement of profit or loss"
            },
            {
              "year": "2024",
              "value": -13158425,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2025",
              "printedPage": 106,
              "pdfPage": 107,
              "table": "Consolidated statement of profit or loss"
            },
            {
              "year": "2025",
              "value": -12661988,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2025",
              "printedPage": 106,
              "pdfPage": 107,
              "table": "Consolidated statement of profit or loss"
            }
          ]
        },
        {
          "key": "group-gross-profit",
          "originalLabel": "Gross profit",
          "label": "集團毛利",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2023",
              "value": 1461270,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2024",
              "printedPage": 92,
              "pdfPage": 93,
              "table": "Consolidated statement of profit or loss"
            },
            {
              "year": "2024",
              "value": 1321490,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2025",
              "printedPage": 106,
              "pdfPage": 107,
              "table": "Consolidated statement of profit or loss"
            },
            {
              "year": "2025",
              "value": 1279178,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2025",
              "printedPage": 106,
              "pdfPage": 107,
              "table": "Consolidated statement of profit or loss"
            }
          ]
        },
        {
          "key": "attributable-profit",
          "originalLabel": "Loss attributable to owners of the Company",
          "label": "集團股東應佔虧損",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2023",
              "value": -1590096,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2024",
              "printedPage": 92,
              "pdfPage": 93,
              "table": "Consolidated statement of profit or loss"
            },
            {
              "year": "2024",
              "value": -3085591,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2025",
              "printedPage": 106,
              "pdfPage": 107,
              "table": "Consolidated statement of profit or loss"
            },
            {
              "year": "2025",
              "value": -2432985,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2025",
              "printedPage": 106,
              "pdfPage": 107,
              "table": "Consolidated statement of profit or loss"
            }
          ]
        },
        {
          "key": "operating-cash-flow",
          "originalLabel": "Net cash from operating activities",
          "label": "集團營運活動淨現金流",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2023",
              "value": 312126,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2024",
              "printedPage": 98,
              "pdfPage": 99,
              "table": "Consolidated statement of cash flows"
            },
            {
              "year": "2024",
              "value": 741021,
              "status": "reported",
              "restatement": "採2025年報最新2024比較數741,021；2024年報當時為753,534，差12,513。原表未標示Restated，不擅稱正式重列。",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2025",
              "printedPage": 112,
              "pdfPage": 113,
              "table": "Consolidated statement of cash flows, latest comparative"
            },
            {
              "year": "2025",
              "value": 1006515,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2025",
              "printedPage": 112,
              "pdfPage": 113,
              "table": "Consolidated statement of cash flows"
            }
          ]
        },
        {
          "key": "cash",
          "originalLabel": "Bank balances and cash",
          "label": "集團銀行結餘及現金",
          "unit": "HKD",
          "scale": 1000,
          "basis": "期末存量，不含押記存款及代客持有現金",
          "observations": [
            {
              "year": "2023",
              "value": 1664534,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2024",
              "printedPage": "94-95",
              "pdfPage": 95,
              "table": "Consolidated statement of financial position"
            },
            {
              "year": "2024",
              "value": 1973858,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2025",
              "printedPage": "108-109",
              "pdfPage": 109,
              "table": "Consolidated statement of financial position"
            },
            {
              "year": "2025",
              "value": 2796970,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2025",
              "printedPage": "108-109",
              "pdfPage": 109,
              "table": "Consolidated statement of financial position"
            }
          ]
        },
        {
          "key": "bank-borrowings",
          "originalLabel": "Current and non-current bank loans",
          "label": "集團銀行借款，流動及非流動合計",
          "unit": "HKD",
          "scale": 1000,
          "basis": "期末存量，兩項銀行貸款相加",
          "observations": [
            {
              "year": "2023",
              "value": 1358971,
              "status": "calculated",
              "restatement": "未標示重列",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2024",
              "printedPage": "94-95",
              "pdfPage": 95,
              "table": "Consolidated statement of financial position",
              "formula": "381471+977500",
              "componentSources": [
                {
                  "sourceId": "waikee2024",
                  "printedPage": 94,
                  "pdfPage": 95,
                  "table": null
                },
                {
                  "sourceId": "waikee2024",
                  "printedPage": 95,
                  "pdfPage": 96,
                  "table": null
                }
              ]
            },
            {
              "year": "2024",
              "value": 1053196,
              "status": "calculated",
              "restatement": "未標示重列",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2025",
              "printedPage": "108-109",
              "pdfPage": 109,
              "table": "Consolidated statement of financial position",
              "formula": "1053196+0",
              "componentSources": [
                {
                  "sourceId": "waikee2025",
                  "printedPage": 108,
                  "pdfPage": 109,
                  "table": null
                },
                {
                  "sourceId": "waikee2025",
                  "printedPage": 109,
                  "pdfPage": 110,
                  "table": null
                }
              ]
            },
            {
              "year": "2025",
              "value": 558344,
              "status": "calculated",
              "restatement": "未標示重列",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2025",
              "printedPage": "108-109",
              "pdfPage": 109,
              "table": "Consolidated statement of financial position",
              "formula": "88344+470000",
              "componentSources": [
                {
                  "sourceId": "waikee2025",
                  "printedPage": 108,
                  "pdfPage": 109,
                  "table": null
                },
                {
                  "sourceId": "waikee2025",
                  "printedPage": 109,
                  "pdfPage": 110,
                  "table": null
                }
              ]
            }
          ]
        },
        {
          "key": "bonds",
          "originalLabel": "Bonds",
          "label": "集團債券帳面值，另列於銀行借款",
          "unit": "HKD",
          "scale": 1000,
          "basis": "期末存量，並非全部帶票面利息",
          "observations": [
            {
              "year": "2023",
              "value": 96835,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2024",
              "printedPage": 95,
              "pdfPage": 96,
              "table": "Bonds"
            },
            {
              "year": "2024",
              "value": 55636,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2025",
              "printedPage": 109,
              "pdfPage": 110,
              "table": "Bonds"
            },
            {
              "year": "2025",
              "value": 57583,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
              "sourceId": "waikee2025",
              "printedPage": 109,
              "pdfPage": 110,
              "table": "Bonds"
            }
          ]
        },
        {
          "key": "quarry-operating-cash-flow",
          "originalLabel": "Not separately disclosed for quarrying segment",
          "label": "採石分部營運現金流",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2023",
              "value": null,
              "status": "not-disclosed",
              "restatement": "不適用",
              "scope": "惠記Quarrying採石分部，在香港藍地石礦場經營，包含外來運入石料加工，不等同香港新開採石料總額",
              "sourceId": "waikee2024",
              "printedPage": 138,
              "pdfPage": 139,
              "table": "Note 7 segment revenue and results",
              "reason": "分部附註披露收益及分部結果，沒有單獨採石分部現金流量表。"
            },
            {
              "year": "2024",
              "value": null,
              "status": "not-disclosed",
              "restatement": "不適用",
              "scope": "惠記Quarrying採石分部，在香港藍地石礦場經營，包含外來運入石料加工，不等同香港新開採石料總額",
              "sourceId": "waikee2025",
              "printedPage": 151,
              "pdfPage": 152,
              "table": "Note 7 segment revenue and results",
              "reason": "分部附註披露收益及分部結果，沒有單獨採石分部現金流量表。"
            },
            {
              "year": "2025",
              "value": null,
              "status": "not-disclosed",
              "restatement": "不適用",
              "scope": "惠記Quarrying採石分部，在香港藍地石礦場經營，包含外來運入石料加工，不等同香港新開採石料總額",
              "sourceId": "waikee2025",
              "printedPage": 151,
              "pdfPage": 152,
              "table": "Note 7 segment revenue and results",
              "reason": "分部附註披露收益及分部結果，沒有單獨採石分部現金流量表。"
            }
          ]
        },
        {
          "key": "quarry-cash",
          "originalLabel": "Not separately disclosed for quarrying segment",
          "label": "採石分部期末現金",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2023",
              "value": null,
              "status": "not-disclosed",
              "restatement": "不適用",
              "scope": "惠記Quarrying採石分部，在香港藍地石礦場經營，包含外來運入石料加工，不等同香港新開採石料總額",
              "sourceId": "waikee2024",
              "printedPage": 138,
              "pdfPage": 139,
              "table": "Note 7 segment revenue and results",
              "reason": "綜合資產負債表為集團數字，未單獨披露採石分部現金。"
            },
            {
              "year": "2024",
              "value": null,
              "status": "not-disclosed",
              "restatement": "不適用",
              "scope": "惠記Quarrying採石分部，在香港藍地石礦場經營，包含外來運入石料加工，不等同香港新開採石料總額",
              "sourceId": "waikee2025",
              "printedPage": 151,
              "pdfPage": 152,
              "table": "Note 7 segment revenue and results",
              "reason": "綜合資產負債表為集團數字，未單獨披露採石分部現金。"
            },
            {
              "year": "2025",
              "value": null,
              "status": "not-disclosed",
              "restatement": "不適用",
              "scope": "惠記Quarrying採石分部，在香港藍地石礦場經營，包含外來運入石料加工，不等同香港新開採石料總額",
              "sourceId": "waikee2025",
              "printedPage": 151,
              "pdfPage": 152,
              "table": "Note 7 segment revenue and results",
              "reason": "綜合資產負債表為集團數字，未單獨披露採石分部現金。"
            }
          ]
        },
        {
          "key": "quarry-borrowings",
          "originalLabel": "Not separately disclosed for quarrying segment",
          "label": "採石分部借款",
          "unit": "HKD",
          "scale": 1000,
          "basis": "年度流量",
          "observations": [
            {
              "year": "2023",
              "value": null,
              "status": "not-disclosed",
              "restatement": "不適用",
              "scope": "惠記Quarrying採石分部，在香港藍地石礦場經營，包含外來運入石料加工，不等同香港新開採石料總額",
              "sourceId": "waikee2024",
              "printedPage": 138,
              "pdfPage": 139,
              "table": "Note 7 segment revenue and results",
              "reason": "未單獨披露採石分部借款，集團銀行借款不能分攤或直接叫作採石借款。"
            },
            {
              "year": "2024",
              "value": null,
              "status": "not-disclosed",
              "restatement": "不適用",
              "scope": "惠記Quarrying採石分部，在香港藍地石礦場經營，包含外來運入石料加工，不等同香港新開採石料總額",
              "sourceId": "waikee2025",
              "printedPage": 151,
              "pdfPage": 152,
              "table": "Note 7 segment revenue and results",
              "reason": "未單獨披露採石分部借款，集團銀行借款不能分攤或直接叫作採石借款。"
            },
            {
              "year": "2025",
              "value": null,
              "status": "not-disclosed",
              "restatement": "不適用",
              "scope": "惠記Quarrying採石分部，在香港藍地石礦場經營，包含外來運入石料加工，不等同香港新開採石料總額",
              "sourceId": "waikee2025",
              "printedPage": 151,
              "pdfPage": 152,
              "table": "Note 7 segment revenue and results",
              "reason": "未單獨披露採石分部借款，集團銀行借款不能分攤或直接叫作採石借款。"
            }
          ]
        }
      ],
      "analysis": [
        {
          "fromYear": "2023",
          "toYear": "2024",
          "text": "採石分部總收益減少25,590千港元，但分部結果增加7,441千港元。管理層表示骨料銷量減少，但較多低採購成本原石運入藍地，加上生產成本稍降，提高利潤。這是管理層說法，未獨立驗證成本變動的因果。",
          "kind": "management-explanation",
          "scope": "惠記Quarrying採石分部，在香港藍地石礦場經營，包含外來運入石料加工，不等同香港新開採石料總額",
          "sources": [
            {
              "sourceId": "waikee2024",
              "printedPage": 12,
              "pdfPage": 13,
              "table": null
            },
            {
              "sourceId": "waikee2024",
              "printedPage": 138,
              "pdfPage": 139,
              "table": "Note 7 segment revenue and results"
            },
            {
              "sourceId": "waikee2025",
              "printedPage": 151,
              "pdfPage": 152,
              "table": "Note 7 segment revenue and results"
            }
          ],
          "formula": "170993-196583=-25590;19744-12303=7441"
        },
        {
          "fromYear": "2024",
          "toYear": "2025",
          "text": "採石分部總收益再減少16,184千港元，分部結果卻增加45,551千港元。管理層把利潤增加歸因於輸入石料量增加及生產節省。對外收益同時由17,220升至55,179千港元，顯示內部與外部銷售組合亦在變；不能把總收益下降直接當作外部需求下降。",
          "kind": "management-explanation",
          "scope": "惠記Quarrying採石分部，在香港藍地石礦場經營，包含外來運入石料加工，不等同香港新開採石料總額",
          "sources": [
            {
              "sourceId": "waikee2025",
              "printedPage": 14,
              "pdfPage": 15,
              "table": null
            },
            {
              "sourceId": "waikee2025",
              "printedPage": 151,
              "pdfPage": 152,
              "table": "Note 7 segment revenue and results"
            },
            {
              "sourceId": "waikee2025",
              "printedPage": 151,
              "pdfPage": 152,
              "table": "Note 7 segment revenue and results"
            }
          ],
          "formula": "154809-170993=-16184;65295-19744=45551"
        },
        {
          "fromYear": "2024",
          "toYear": "2025",
          "text": "集團股東應佔虧損收窄652,606千港元，但採石分部持續盈利。集團損益包含巨額聯營業務結果和資產減值，不能用集團虧損率來稱採石業虧損。",
          "kind": "interpretation",
          "scope": "惠記集團綜合，包含香港建築、建材、採石，以及內地等物業與道路投資權益；不是採石分部獨立帳目",
          "sources": [
            {
              "sourceId": "waikee2025",
              "printedPage": 106,
              "pdfPage": 107,
              "table": "Consolidated statement of profit or loss"
            },
            {
              "sourceId": "waikee2025",
              "printedPage": 106,
              "pdfPage": 107,
              "table": "Consolidated statement of profit or loss"
            },
            {
              "sourceId": "waikee2025",
              "printedPage": 151,
              "pdfPage": 152,
              "table": "Note 7 segment revenue and results"
            }
          ],
          "formula": "-2432985-(-3085591)=652606"
        }
      ],
      "limits": [
        "2025年核數師保留意見涉及路勁持續經營、權益法及減值證據不足，集團財務數字須連同該意見閱讀。",
        "年報的rock imported to Lam Tei是運入場地，未逐項披露原石地理來源；不能直接稱全為境外進口。",
        "近年石礦場主要加工運入原石，不能僅因分部稱Quarrying便證實其全屬HSIC B；本案例保留為B相關的混合及轉型案例。",
        "採石是惠記的一個分部，集團主要收益還包含建築；集團現金與負債不能當採石分部獨立財務。",
        "分部結果是公司定義的稅後及非控股權益後結果，但未分配公司收支另列；不是與分部外部收入直接配對的標準淨利潤率。",
        "分部總收入含大量集團內部交易，與對外收入不可相加；對外收入才進入綜合收益抵銷後總額。",
        "藍地近年依賴輸入原石加工，不能把所有石料產量當香港天然礦藏新開採量，亦不把地下採石新合約未來產量填入三年歷史。",
        "2025年報的2024營運現金流比較數為741,021，2024年報當時為753,534千港元，採最新值並保留差異；同樣12,513千港元在最新表列為物業項目參與權投資收款，但未找到明示重列註釋，不將該關聯冒充已證明原因。",
        "沒有獨立採石分部現金流、現金或借款數字；已明列空值，不分攤集團金額。",
        "不把此上市集團或單一石礦場當作全香港HSIC B行業總額。"
      ]
    }
  ]
};
