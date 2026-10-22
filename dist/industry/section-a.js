export default {
  "code": "A",
  "title": "農業、林業及漁業",
  "checkedOn": "2026-10-22",
  "classification": {
    "intro": "生產農作物、飼養動物、培育林木及養殖或捕撈水產。",
    "models": [
      {
        "title": "種植與飼養",
        "text": "把土地、植物和動物的生長轉化為農產品。"
      },
      {
        "title": "林業與漁業",
        "text": "涵蓋林木培育及採伐、水產養殖與捕撈。"
      }
    ],
    "readFor": "個案兼做保育及教育時，先分清農業收入與捐款。",
    "printedPage": 79,
    "pdfPage": 83,
    "source": {
      "id": "hsic-manual",
      "title": "香港標準行業分類 2.0 版，第三部分",
      "publisher": "政府統計處",
      "url": "https://www.statistics.gov.hk/pub/B2XX0004012008XXXXB0300.pdf",
      "publicationDate": "2009-07-17"
    }
  },
  "coverage": {
    "section": "A",
    "label": "農業、林業及漁業",
    "status": "no-comparable-ASEA-table",
    "groupIds": [],
    "reason": "本輪官方 ASEA 主力表沒有此 HSIC 主類的可比較年度企業收益、成本及盈餘；不可用零或其他行業代替。"
  },
  "sources": [],
  "groups": [],
  "context": {
    "hsicSection": "A",
    "title": "農林漁業的農業部分",
    "coverage": "農業實際產值及農地用途；不包括林業及漁業，亦非企業收入成本或純利",
    "caseIds": [
      "kfbg"
    ],
    "context": {
      "text": "農業生產與保育教育機構的資助收入是不同概念。漁農署公布2025年本地農業產值861百萬港元，其中農作物354、牲畜198及家禽309百萬港元。不能把嘉道理農場的整體收入拿來代替全港農業產值。",
      "sources": [
        {
          "sourceId": "afcd-agriculture",
          "printedPage": null,
          "pdfPage": null,
          "table": "Agricultural production"
        }
      ]
    },
    "metrics": [
      {
        "key": "agricultural-production",
        "label": "本地農業產值",
        "observations": [
          {
            "period": "2025",
            "value": 861000000,
            "unit": "HKD",
            "scale": 1,
            "status": "reported",
            "scope": "香港本地農業，不含林漁",
            "basis": "按曆年生產價值，不是會計淨利潤",
            "sourceId": "afcd-agriculture",
            "printedPage": null,
            "pdfPage": null,
            "table": "Agricultural production"
          }
        ]
      },
      {
        "key": "crop-production",
        "label": "農作物產值",
        "observations": [
          {
            "period": "2025",
            "value": 354000000,
            "unit": "HKD",
            "scale": 1,
            "status": "reported",
            "scope": "香港農作物",
            "basis": "",
            "sourceId": "afcd-agriculture",
            "printedPage": null,
            "pdfPage": null,
            "table": "Agricultural production"
          }
        ]
      },
      {
        "key": "livestock-production",
        "label": "牲畜產值",
        "observations": [
          {
            "period": "2025",
            "value": 198000000,
            "unit": "HKD",
            "scale": 1,
            "status": "reported",
            "scope": "香港牲畜",
            "basis": "",
            "sourceId": "afcd-agriculture",
            "printedPage": null,
            "pdfPage": null,
            "table": "Agricultural production"
          }
        ]
      },
      {
        "key": "poultry-production",
        "label": "家禽產值",
        "observations": [
          {
            "period": "2025",
            "value": 309000000,
            "unit": "HKD",
            "scale": 1,
            "status": "reported",
            "scope": "香港家禽",
            "basis": "",
            "sourceId": "afcd-agriculture",
            "printedPage": null,
            "pdfPage": null,
            "table": "Agricultural production"
          }
        ]
      }
    ],
    "gap": "沒有把此產值拆成完整HSIC A的可比收入、成本及盈餘表；亦不推算全行業利潤。",
    "checkedOn": "2026-10-22",
    "sources": [
      {
        "id": "afcd-agriculture",
        "title": "AFCD Agriculture in Hong Kong",
        "url": "https://www.afcd.gov.hk/english/agriculture/agr_hk/agr_hk.html",
        "publicationDate": "2026-05-21",
        "retrievedOn": "2026-10-22"
      }
    ]
  },
  "gap": null,
  "cases": [
    {
      "id": "kfbg",
      "entity": "嘉道理農場暨植物園 Kadoorie Farm and Botanic Garden",
      "hsicSections": [
        "A"
      ],
      "modelType": "nonprofit-agriculture-conservation",
      "whyThisCase": "真實農業示範及保育非牟利模式，示範農場如何結合私人基金、專項資助、訪客及活動收入。它包含保育教育和區域項目，不能代表全港農林漁業或農戶利潤。",
      "geography": "香港主要場地，加上中國內地及區域保育活動",
      "consolidationScope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
      "currency": "HKD",
      "audited": false,
      "auditStatus": "最新2025/26財務摘要欄題明示unaudited，2024/25比較欄題明示audited；但同頁*與**腳註對應相反。依明確年度欄題保留狀態，同時完整揭露原報告矛盾，不自行更正為已審計。2023/24取2024/25報告的audited比較欄。",
      "latestReportCheck": {
        "date": "2026-10-22",
        "url": "https://www.kfbg.org/en/annual-report",
        "latestListed": "2025/26",
        "fullStatements": "公開年報檔提供財務摘要，未包含完整經審計財務報表；檢查官方年報檔及其全部財務頁未找到完整報表下載。"
      },
      "fiscalYears": [
        {
          "label": "2023/24",
          "start": "2023-04-01",
          "end": "2024-03-31",
          "auditStatus": "audited per comparative column heading; footnote conflict"
        },
        {
          "label": "2024/25",
          "start": "2024-04-01",
          "end": "2025-03-31",
          "auditStatus": "audited per comparative column heading; footnote conflict"
        },
        {
          "label": "2025/26",
          "start": "2025-04-01",
          "end": "2026-03-31",
          "auditStatus": "unaudited per column heading; footnote conflict"
        }
      ],
      "sources": [
        {
          "id": "kfbg2026",
          "title": "KFBG Annual Report 2025-2026",
          "url": "https://www.kfbg.org/images/ar/report/kfbg_annual_report_2025_26.pdf",
          "publicationDate": null,
          "localPath": "evidence/raw/kfbg2026.pdf",
          "retrievedOn": "2026-10-22",
          "sha256": "2640269ff9edfd0b4825d4d740606d591ee0ca5b28c63609d3743472d0c60301"
        },
        {
          "id": "kfbg2025",
          "title": "KFBG Annual Report 2024-2025",
          "url": "https://www.kfbg.org/images/ar/report/kfbg_layout_eng_web.pdf",
          "publicationDate": null,
          "localPath": "evidence/raw/kfbg2025.pdf",
          "retrievedOn": "2026-10-22",
          "sha256": "22a149a8bfdf285db58ad45d0e907caf641611bff8947f47106e48f850159467"
        },
        {
          "id": "kfbg2024",
          "title": "KFBG Annual Report 2023-2024",
          "url": "https://www.kfbg.org/images/ar/report/kfbg%20ar2023-24_250924_eng_fa_web.pdf",
          "publicationDate": null,
          "localPath": "evidence/raw/kfbg2024.pdf",
          "retrievedOn": "2026-10-22",
          "sha256": "01047fd0ac419c60277b00230fd1afd040f6169a356e88775a727d0a0afa4862"
        }
      ],
      "business": {
        "provides": {
          "text": "在香港提供再生農業示範、農場工作坊及與農民交流，另有物種保育、野生動物救護、自然教育及可持續生活活動。",
          "sources": [
            {
              "sourceId": "kfbg2026",
              "printedPage": "65-66",
              "pdfPage": 35,
              "table": null
            },
            {
              "sourceId": "kfbg2024",
              "printedPage": "1-2",
              "pdfPage": 2,
              "table": null
            }
          ]
        },
        "customers": {
          "text": "訪客和學員參與活動；私人基金、企業、政府及公眾捐助支持保育及公共教育。受惠者不一定是付款者。",
          "sources": [
            {
              "sourceId": "kfbg2025",
              "printedPage": "70-71",
              "pdfPage": 36,
              "table": null
            },
            {
              "sourceId": "kfbg2026",
              "printedPage": "115-116",
              "pdfPage": 60,
              "table": null
            }
          ]
        },
        "revenueModel": {
          "text": "主要依靠嘉道理相關基金支持，並收取門票、課程、農場商店及其他收入，另接受政府及企業專項資助。2025/26摘要圓圖把嘉道理資助列為78%，但只公布四捨五入比例，沒有以此反推精確資助金額。",
          "sources": [
            {
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": null
            },
            {
              "sourceId": "kfbg2025",
              "printedPage": 70,
              "pdfPage": 36,
              "table": null
            }
          ]
        },
        "costs": {
          "text": "資源用於農業、保育、教育、場地及行政工作；新保育中心另有大型資本投入。摘要把資本及營運支出合列並排除折舊，因此適合看資源用途，不能直接算正式會計盈餘率。",
          "sources": [
            {
              "sourceId": "kfbg2025",
              "printedPage": 72,
              "pdfPage": 37,
              "table": null
            },
            {
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": null
            }
          ]
        },
        "process": [
          {
            "text": "由私人基金、專項資助及訪客活動取得資源。",
            "sources": [
              {
                "sourceId": "kfbg2026",
                "printedPage": "115-116",
                "pdfPage": 60,
                "table": null
              }
            ]
          },
          {
            "text": "種植及示範再生農業，安排學習活動並執行保育和救護項目。",
            "sources": [
              {
                "sourceId": "kfbg2026",
                "printedPage": "65-66",
                "pdfPage": 35,
                "table": null
              },
              {
                "sourceId": "kfbg2025",
                "printedPage": 72,
                "pdfPage": 37,
                "table": null
              }
            ]
          },
          {
            "text": "按捐助用途投入營運和設施，公布年度資金來源與支出摘要。",
            "sources": [
              {
                "sourceId": "kfbg2026",
                "printedPage": "115-116",
                "pdfPage": 60,
                "table": null
              }
            ]
          }
        ],
        "influences": {
          "text": "大型建築項目的資助時點會令總收入波動；聘員、場地維護、農場及保育項目則有持續開支。最新報告指出新保育中心完成後，相關賽馬會資助下降。",
          "sources": [
            {
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": null
            },
            {
              "sourceId": "kfbg2025",
              "printedPage": 72,
              "pdfPage": 37,
              "table": null
            }
          ]
        }
      },
      "metrics": [
        {
          "key": "income",
          "originalLabel": "Income - Total",
          "label": "總收入，年報財務摘要",
          "unit": "HKD",
          "scale": 1,
          "basis": "年度數字，財務摘要不含折舊",
          "observations": [
            {
              "year": "2023/24",
              "value": 183165628,
              "status": "reported",
              "restatement": "採2024/25報告更新比較數，與2023/24當時摘要不同；見limits",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2025",
              "printedPage": 70,
              "pdfPage": 36,
              "table": "Financial figures excluding depreciation, audited comparative heading",
              "auditStatus": "audited comparative heading; contradictory star footnote"
            },
            {
              "year": "2024/25",
              "value": 245147679,
              "status": "reported",
              "restatement": "採2025/26報告更新比較數，與2024/25未審計摘要不同；見limits",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": "Financial figures excluding depreciation, audited comparative heading",
              "auditStatus": "audited comparative heading; contradictory star footnote"
            },
            {
              "year": "2025/26",
              "value": 206835359,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": "Financial figures excluding depreciation, unaudited current-year heading",
              "auditStatus": "unaudited current-year heading; contradictory star footnote"
            }
          ]
        },
        {
          "key": "operating-expenditure",
          "originalLabel": "Operating expenditure excluding depreciation",
          "label": "營運支出，不含折舊",
          "unit": "HKD",
          "scale": 1,
          "basis": "年度數字，財務摘要不含折舊",
          "observations": [
            {
              "year": "2023/24",
              "value": 138309504,
              "status": "reported",
              "restatement": "採2024/25報告更新比較數，與2023/24當時摘要不同；見limits",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2025",
              "printedPage": 70,
              "pdfPage": 36,
              "table": "Financial figures excluding depreciation, audited comparative heading",
              "auditStatus": "audited comparative heading; contradictory star footnote"
            },
            {
              "year": "2024/25",
              "value": 144859595,
              "status": "reported",
              "restatement": "採2025/26報告更新比較數，與2024/25未審計摘要不同；見limits",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": "Financial figures excluding depreciation, audited comparative heading",
              "auditStatus": "audited comparative heading; contradictory star footnote"
            },
            {
              "year": "2025/26",
              "value": 159581524,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": "Financial figures excluding depreciation, unaudited current-year heading",
              "auditStatus": "unaudited current-year heading; contradictory star footnote"
            }
          ]
        },
        {
          "key": "capital-expenditure",
          "originalLabel": "Capital plus separately presented Capital - Jockey Club Nature Conservation Centre",
          "label": "資本開支，含另列JCNCC項目",
          "unit": "HKD",
          "scale": 1,
          "basis": "年度資本開支；2025及2026由分列項相加，不是損益費用",
          "observations": [
            {
              "year": "2023/24",
              "value": 51692774,
              "status": "reported",
              "restatement": "採2024/25報告更新比較數，與2023/24當時摘要不同；見limits",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2025",
              "printedPage": 70,
              "pdfPage": 36,
              "table": "Financial figures excluding depreciation, audited comparative heading",
              "auditStatus": "audited comparative heading; contradictory star footnote"
            },
            {
              "year": "2024/25",
              "value": 101193899,
              "status": "calculated",
              "restatement": "採2025/26報告更新比較數，與2024/25未審計摘要不同；見limits",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": "Financial figures excluding depreciation, audited comparative heading",
              "formula": "18212093+82981806",
              "auditStatus": "audited comparative heading; contradictory star footnote"
            },
            {
              "year": "2025/26",
              "value": 34344400,
              "status": "calculated",
              "restatement": "未標示重列",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": "Financial figures excluding depreciation, unaudited current-year heading",
              "formula": "24863700+9480700",
              "auditStatus": "unaudited current-year heading; contradictory star footnote"
            }
          ]
        },
        {
          "key": "total-resource-spend",
          "originalLabel": "Total expenditure plus separately presented JCNCC capital expenditure",
          "label": "營運與資本支出合計，不含折舊",
          "unit": "HKD",
          "scale": 1,
          "basis": "年度資源支出，包含資本開支；不可當作會計損益表總費用",
          "observations": [
            {
              "year": "2023/24",
              "value": 190002278,
              "status": "reported",
              "restatement": "採2024/25報告更新比較數，與2023/24當時摘要不同；見limits",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2025",
              "printedPage": 70,
              "pdfPage": 36,
              "table": "Financial figures excluding depreciation, audited comparative heading",
              "auditStatus": "audited comparative heading; contradictory star footnote"
            },
            {
              "year": "2024/25",
              "value": 246053494,
              "status": "calculated",
              "restatement": "採2025/26報告更新比較數，與2024/25未審計摘要不同；見limits",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": "Financial figures excluding depreciation, audited comparative heading",
              "formula": "163071688+82981806",
              "auditStatus": "audited comparative heading; contradictory star footnote"
            },
            {
              "year": "2025/26",
              "value": 193925924,
              "status": "calculated",
              "restatement": "未標示重列",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": "Financial figures excluding depreciation, unaudited current-year heading",
              "formula": "184445224+9480700",
              "auditStatus": "unaudited current-year heading; contradictory star footnote"
            }
          ]
        },
        {
          "key": "government-funding",
          "originalLabel": "Income - Government funding total",
          "label": "政府專項資助收入",
          "unit": "HKD",
          "scale": 1,
          "basis": "年度數字，財務摘要不含折舊",
          "observations": [
            {
              "year": "2023/24",
              "value": 1814395,
              "status": "reported",
              "restatement": "採2024/25報告更新比較數，與2023/24當時摘要不同；見limits",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2025",
              "printedPage": 70,
              "pdfPage": 36,
              "table": "Financial figures excluding depreciation, audited comparative heading",
              "auditStatus": "audited comparative heading; contradictory star footnote"
            },
            {
              "year": "2024/25",
              "value": 1748959,
              "status": "reported",
              "restatement": "採2025/26報告更新比較數，與2024/25未審計摘要不同；見limits",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": "Financial figures excluding depreciation, audited comparative heading",
              "auditStatus": "audited comparative heading; contradictory star footnote"
            },
            {
              "year": "2025/26",
              "value": 1637022,
              "status": "reported",
              "restatement": "未標示重列",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": "Financial figures excluding depreciation, unaudited current-year heading",
              "auditStatus": "unaudited current-year heading; contradictory star footnote"
            }
          ]
        },
        {
          "key": "surplus",
          "originalLabel": "Statutory surplus/deficit not disclosed in annual-report financial snapshot",
          "label": "正式損益盈餘或赤字",
          "unit": "HKD",
          "scale": 1,
          "basis": "未披露",
          "observations": [
            {
              "year": "2023/24",
              "value": null,
              "status": "not-disclosed",
              "restatement": "採2024/25報告更新比較數，與2023/24當時摘要不同；見limits",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2025",
              "printedPage": 70,
              "pdfPage": 36,
              "table": "Financial figures excluding depreciation, audited comparative heading",
              "reason": "所引年度報告只提供不含折舊、並包括資本開支的收入與支出摘要，未列正式收支結算表；兩者相減不能冒充會計盈餘。",
              "auditStatus": "audited comparative heading; contradictory star footnote"
            },
            {
              "year": "2024/25",
              "value": null,
              "status": "not-disclosed",
              "restatement": "採2025/26報告更新比較數，與2024/25未審計摘要不同；見limits",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": "Financial figures excluding depreciation, audited comparative heading",
              "reason": "所引年度報告只提供不含折舊、並包括資本開支的收入與支出摘要，未列正式收支結算表；兩者相減不能冒充會計盈餘。",
              "auditStatus": "audited comparative heading; contradictory star footnote"
            },
            {
              "year": "2025/26",
              "value": null,
              "status": "not-disclosed",
              "restatement": "不適用",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": "Financial figures excluding depreciation, unaudited current-year heading",
              "reason": "所引年度報告只提供不含折舊、並包括資本開支的收入與支出摘要，未列正式收支結算表；兩者相減不能冒充會計盈餘。",
              "auditStatus": "unaudited current-year heading; contradictory star footnote"
            }
          ]
        },
        {
          "key": "operating-cash-flow",
          "originalLabel": "Operating cash flow not disclosed",
          "label": "營運活動現金流",
          "unit": "HKD",
          "scale": 1,
          "basis": "未披露",
          "observations": [
            {
              "year": "2023/24",
              "value": null,
              "status": "not-disclosed",
              "restatement": "採2024/25報告更新比較數，與2023/24當時摘要不同；見limits",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2025",
              "printedPage": 70,
              "pdfPage": 36,
              "table": "Financial figures excluding depreciation, audited comparative heading",
              "reason": "所引年度報告財務摘要沒有現金流量表；支出明言包含已應計但未支付項目，不能當作現金支出。",
              "auditStatus": "audited comparative heading; contradictory star footnote"
            },
            {
              "year": "2024/25",
              "value": null,
              "status": "not-disclosed",
              "restatement": "採2025/26報告更新比較數，與2024/25未審計摘要不同；見limits",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": "Financial figures excluding depreciation, audited comparative heading",
              "reason": "所引年度報告財務摘要沒有現金流量表；支出明言包含已應計但未支付項目，不能當作現金支出。",
              "auditStatus": "audited comparative heading; contradictory star footnote"
            },
            {
              "year": "2025/26",
              "value": null,
              "status": "not-disclosed",
              "restatement": "不適用",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": "Financial figures excluding depreciation, unaudited current-year heading",
              "reason": "所引年度報告財務摘要沒有現金流量表；支出明言包含已應計但未支付項目，不能當作現金支出。",
              "auditStatus": "unaudited current-year heading; contradictory star footnote"
            }
          ]
        },
        {
          "key": "cash",
          "originalLabel": "Cash balances not disclosed",
          "label": "期末現金",
          "unit": "HKD",
          "scale": 1,
          "basis": "未披露",
          "observations": [
            {
              "year": "2023/24",
              "value": null,
              "status": "not-disclosed",
              "restatement": "採2024/25報告更新比較數，與2023/24當時摘要不同；見limits",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2025",
              "printedPage": 70,
              "pdfPage": 36,
              "table": "Financial figures excluding depreciation, audited comparative heading",
              "reason": "所引年度報告財務摘要沒有資產負債表或現金附註，未披露可核對的年終現金。",
              "auditStatus": "audited comparative heading; contradictory star footnote"
            },
            {
              "year": "2024/25",
              "value": null,
              "status": "not-disclosed",
              "restatement": "採2025/26報告更新比較數，與2024/25未審計摘要不同；見limits",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": "Financial figures excluding depreciation, audited comparative heading",
              "reason": "所引年度報告財務摘要沒有資產負債表或現金附註，未披露可核對的年終現金。",
              "auditStatus": "audited comparative heading; contradictory star footnote"
            },
            {
              "year": "2025/26",
              "value": null,
              "status": "not-disclosed",
              "restatement": "不適用",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": "Financial figures excluding depreciation, unaudited current-year heading",
              "reason": "所引年度報告財務摘要沒有資產負債表或現金附註，未披露可核對的年終現金。",
              "auditStatus": "unaudited current-year heading; contradictory star footnote"
            }
          ]
        },
        {
          "key": "borrowings",
          "originalLabel": "Borrowings not disclosed",
          "label": "期末借款",
          "unit": "HKD",
          "scale": 1,
          "basis": "未披露",
          "observations": [
            {
              "year": "2023/24",
              "value": null,
              "status": "not-disclosed",
              "restatement": "採2024/25報告更新比較數，與2023/24當時摘要不同；見limits",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2025",
              "printedPage": 70,
              "pdfPage": 36,
              "table": "Financial figures excluding depreciation, audited comparative heading",
              "reason": "所引年度報告財務摘要沒有負債及借款附註，不能因未列借款而假定零。",
              "auditStatus": "audited comparative heading; contradictory star footnote"
            },
            {
              "year": "2024/25",
              "value": null,
              "status": "not-disclosed",
              "restatement": "採2025/26報告更新比較數，與2024/25未審計摘要不同；見limits",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": "Financial figures excluding depreciation, audited comparative heading",
              "reason": "所引年度報告財務摘要沒有負債及借款附註，不能因未列借款而假定零。",
              "auditStatus": "audited comparative heading; contradictory star footnote"
            },
            {
              "year": "2025/26",
              "value": null,
              "status": "not-disclosed",
              "restatement": "不適用",
              "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": "Financial figures excluding depreciation, unaudited current-year heading",
              "reason": "所引年度報告財務摘要沒有負債及借款附註，不能因未列借款而假定零。",
              "auditStatus": "unaudited current-year heading; contradictory star footnote"
            }
          ]
        }
      ],
      "analysis": [
        {
          "fromYear": "2023/24",
          "toYear": "2024/25",
          "text": "採用最新比較數後，總收入由183,165,628增至245,147,679港元，增加61,982,051港元。2024/25年報管理層把當時收入上升主要歸因於新JCNCC的賽馬會資助增加；但該年報當時2024/25未審計收入241,656,474，與後來比較數不同，不能把其原來58.4百萬變幅照搬為最新數字的精確分解。",
          "kind": "management-explanation",
          "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
          "sources": [
            {
              "sourceId": "kfbg2025",
              "printedPage": 70,
              "pdfPage": 36,
              "table": "Financial figures excluding depreciation, audited comparative heading"
            },
            {
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": "Financial figures excluding depreciation, audited comparative heading"
            },
            {
              "sourceId": "kfbg2025",
              "printedPage": 70,
              "pdfPage": 36,
              "table": null
            }
          ],
          "formula": "245147679-183165628=61982051"
        },
        {
          "fromYear": "2024/25",
          "toYear": "2025/26",
          "text": "總收入減少38,312,320港元。管理層說明新自然保育大樓完工、相關賽馬會資助減少。營運支出卻增加14,721,929港元；資本支出減少，反映項目階段及收入來源變動，不能以收入減少判斷農產品銷量或農業利潤下降。",
          "kind": "management-explanation",
          "scope": "嘉道理農場暨植物園整體，混合香港農業示範、保育、教育、Green Hub及區域保育項目，不是純農產品銷售企業",
          "sources": [
            {
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": "Financial figures excluding depreciation, audited comparative heading"
            },
            {
              "sourceId": "kfbg2026",
              "printedPage": 115,
              "pdfPage": 60,
              "table": "Financial figures excluding depreciation, unaudited current-year heading"
            }
          ],
          "formula": "206835359-245147679=-38312320;159581524-144859595=14721929"
        }
      ],
      "limits": [
        "2025/26為完整財年但財務摘要尚未審計；年度欄題與星號腳註有矛盾，原文及渲染圖均已保留。",
        "2024/25最新比較數收入245,147,679，較前一年未審計241,656,474修訂；營運支出144,859,595亦不同於原148,069,665。這是後續報告比較數更新，未擅稱正式HKAS8重列。",
        "2024/25及2025/26把JCNCC資本支出另列在Total下面，本資料相加的資本及總資源支出均保留公式，避免漏算或把不同總計口徑直接連線。",
        "2023/24取2024/25報告的最新比較數；收入183,165,628不同於2023/24年報當時183,714,661。",
        "沒有完整公開資產負債表、現金流量表及正式收支表，因此盈餘、現金流、現金及借款均為具體說明的空值。",
        "整體收入包含保育教育和建築專項資助，不能作農業銷售額；沒有把混合機構收入當成香港A業界總額。"
      ]
    }
  ]
};
