export default {
  "code": "T",
  "title": "家庭住戶內部工作",
  "checkedOn": "2026-10-22",
  "classification": {
    "intro": "住戶直接僱用家居人員，或家庭為自己使用而生產貨品及服務。",
    "models": [
      {
        "title": "住戶直接僱用",
        "text": "服務由僱主住戶享用；向獨立公司購買家居服務不屬同一分類。"
      }
    ],
    "readFor": "家庭付薪並非一間公司的銷售生意，不強行填入企業盈利案例。",
    "printedPage": 365,
    "pdfPage": 369,
    "source": {
      "id": "hsic-manual",
      "title": "香港標準行業分類 2.0 版，第三部分",
      "publisher": "政府統計處",
      "url": "https://www.statistics.gov.hk/pub/B2XX0004012008XXXXB0300.pdf",
      "publicationDate": "2009-07-17"
    }
  },
  "coverage": {
    "section": "T",
    "label": "家庭住戶內部工作",
    "status": "no-comparable-ASEA-table",
    "groupIds": [],
    "reason": "本輪官方 ASEA 主力表沒有此 HSIC 主類的可比較年度企業收益、成本及盈餘；不可用零或其他行業代替。"
  },
  "sources": [],
  "groups": [],
  "context": {
    "hsicSection": "T",
    "title": "家庭直接聘人及家庭自用生產",
    "coverage": "家庭作為僱主的活動，不是家傭中介公司的業務",
    "caseIds": [],
    "context": {
      "text": "HSIC T包括家庭直接僱用家傭、廚師、司機、園丁、保姆或私人補習教師，及家庭為自用生產商品和服務。獨立公司提供烹調或園藝等服務被明確排除。家庭支付工資並自行享用服務，通常沒有對外售貨收入，因此普通公司利潤表不是合適案例。",
      "sources": [
        {
          "sourceId": "hsic",
          "printedPage": "365-366",
          "pdfPage": 369,
          "table": "Section T, divisions 97 and 98"
        }
      ]
    },
    "metrics": [
      {
        "key": "foreign-domestic-helpers",
        "label": "在港外籍家庭傭工，約數",
        "observations": [
          {
            "period": "2024-12",
            "value": 368000,
            "unit": "人",
            "scale": 1,
            "status": "reported-rounded",
            "scope": "香港外籍家庭傭工，不等同T全體從業者",
            "basis": "指定月份時點約數",
            "sourceId": "t-domestic-helpers",
            "printedPage": null,
            "pdfPage": null,
            "table": "Reply part (1)"
          },
          {
            "period": "2025-12",
            "value": 379000,
            "unit": "人",
            "scale": 1,
            "status": "reported-rounded",
            "scope": "香港外籍家庭傭工，不等同T全體從業者",
            "basis": "指定月份時點約數",
            "sourceId": "t-domestic-helpers",
            "printedPage": null,
            "pdfPage": null,
            "table": "Reply part (1)"
          },
          {
            "period": "2026-06",
            "value": 382000,
            "unit": "人",
            "scale": 1,
            "status": "reported-rounded",
            "scope": "香港外籍家庭傭工，不等同T全體從業者",
            "basis": "指定月份時點約數",
            "sourceId": "t-domestic-helpers",
            "printedPage": null,
            "pdfPage": null,
            "table": "Reply part (1)"
          }
        ]
      },
      {
        "key": "households-employing-fdh",
        "label": "僱用外傭的家庭住戶",
        "observations": [
          {
            "period": "2024-Q4",
            "value": 315300,
            "unit": "戶",
            "scale": 1,
            "status": "reported",
            "scope": "香港僱用外傭的家庭住戶，不等同公司數",
            "basis": "該季住戶統計",
            "sourceId": "t-domestic-helpers",
            "printedPage": null,
            "pdfPage": null,
            "table": "Reply part (1)"
          },
          {
            "period": "2025-Q4",
            "value": 322300,
            "unit": "戶",
            "scale": 1,
            "status": "reported",
            "scope": "香港僱用外傭的家庭住戶，不等同公司數",
            "basis": "該季住戶統計",
            "sourceId": "t-domestic-helpers",
            "printedPage": null,
            "pdfPage": null,
            "table": "Reply part (1)"
          },
          {
            "period": "2026-Q2",
            "value": 325400,
            "unit": "戶",
            "scale": 1,
            "status": "reported",
            "scope": "香港僱用外傭的家庭住戶，不等同公司數",
            "basis": "該季住戶統計",
            "sourceId": "t-domestic-helpers",
            "printedPage": null,
            "pdfPage": null,
            "table": "Reply part (1)"
          }
        ]
      }
    ],
    "gap": "公司不是家庭僱主。沒有把家傭中介、清潔承辦商或人力資源公司的帳目錯配到T；本項保留真實活動及官方家庭僱傭背景，不杜撰三年家庭損益表。",
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
        "id": "t-domestic-helpers",
        "title": "LCQ16 Management of foreign domestic helpers",
        "url": "https://www.info.gov.hk/gia/general/202610/21/P2026102100251.htm",
        "publicationDate": "2026-10-21",
        "retrievedOn": "2026-10-22"
      }
    ]
  },
  "gap": {
    "kind": "not-applicable",
    "title": "住戶直接僱用與自用生產，沒有企業盈利案例",
    "explanation": "這個分類的服務由僱主住戶自己享用，也包括家庭為自用而生產的貨品及服務。它沒有一間向外銷售的公司作為共同財務主體，因此不強行套用上市公司的三年收入及利潤。家居服務公司或自僱服務提供者不會只因在家中工作便歸入 T。",
    "business": {
      "provides": "住戶直接僱用的人員提供家居服務，或家庭為自己使用而生產貨品及服務。",
      "customers": "僱主住戶及其成員是服務使用者。",
      "revenueModel": "直接僱用模式由住戶支付薪酬；家庭自用生產未必涉及市場銷售，不能填一個虛構營業額。",
      "costs": "住戶是僱主時承擔僱用開支；這不是服務公司的成本及利潤報表。",
      "process": [
        "住戶直接僱用家居人員。",
        "人員提供服務，由該住戶享用。"
      ],
      "influences": "分類手冊說明活動範圍，沒有提供企業盈利或盈利變化因素；本頁不據此推斷。"
    },
    "source": {
      "id": "hsic-t",
      "title": "香港標準行業分類 2.0 版，主類 T 及大類 97",
      "url": "https://www.statistics.gov.hk/pub/B2XX0004012008XXXXB0300.pdf",
      "printedPage": 365,
      "pdfPage": 369
    },
    "checkedOn": "2026-10-22"
  },
  "cases": []
};
