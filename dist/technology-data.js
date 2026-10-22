const requiredThemes = ['ai-data', 'robotics-manufacturing', 'health-medical', 'fintech', 'chips-computing', 'green-energy', 'mobility-low-altitude', 'communications-iot', 'security-privacy', 'space-geospatial', 'quantum'];
const stages = ['research', 'prototype', 'trial', 'applied'];

function requireValue(valid, path) {
  if (!valid) throw new Error(`科技資料不完整或格式錯誤：${path}`);
}
function text(value, path) {
  requireValue(typeof value === 'string' && value.trim().length > 0, path);
}
function dateRange(value, precision, path) {
  requireValue(typeof value === 'string' && ['day', 'month', 'year'].includes(precision), path);
  requireValue(({ day: /^\d{4}-\d{2}-\d{2}$/, month: /^\d{4}-\d{2}$/, year: /^\d{4}$/ })[precision].test(value), path);
  const start = precision === 'day' ? value : precision === 'month' ? `${value}-01` : `${value}-01-01`;
  const parsed = new Date(`${start}T00:00:00Z`);
  requireValue(Number.isFinite(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === start, path);
  const end = precision === 'day' ? start : precision === 'year' ? `${value}-12-31` : new Date(Date.UTC(Number(value.slice(0, 4)), Number(value.slice(5, 7)), 0)).toISOString().slice(0, 10);
  return { start, end };
}
function day(value, maximum, path) {
  dateRange(value, 'day', path);
  requireValue(value <= maximum, path);
}
function industryCodes(value, path) {
  requireValue(Array.isArray(value) && value.length > 0 && value.every(code => typeof code === 'string' && /^[A-U]$/.test(code)) && new Set(value).size === value.length, path);
}

function validateTechnology(raw) {
  dateRange(raw.checkedOn, 'day', '整合核對日期');
  requireValue(raw.recentWindow?.from === '2024-10-22' && raw.recentWindow?.through === '2026-10-22', '收錄進展期間');
  requireValue(Array.isArray(raw.themes) && raw.themes.map(theme => theme.id).join(',') === requiredThemes.join(','), '十一個主題與次序');
  const caseIds = new Set();
  const themes = raw.themes.map(theme => {
    const path = theme.id;
    text(theme.title, `${path}/名稱`); text(theme.introduction, `${path}/介紹`);
    industryCodes(theme.industryCodes, `${path}/行業`);
    requireValue(Array.isArray(theme.sources) && theme.sources.length > 0, `${path}/來源`);
    const sources = new Map();
    for (const source of theme.sources) {
      requireValue(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(source.id) && !sources.has(source.id), `${path}/來源代號`);
      text(source.title, `${path}/來源名稱`); text(source.publisher, `${path}/發布者`);
      const url = new URL(source.url);
      requireValue(url.protocol === 'https:' && !url.username && !url.password, `${path}/來源網址`);
      requireValue(['paper', 'government', 'institution', 'company'].includes(source.type), `${path}/來源類別`);
      day(source.checkedOn, raw.checkedOn, `${path}/來源核對日期`);
      if (source.published === null) text(source.publicationDateNote, `${path}/缺少發布日期原因`);
      else requireValue(dateRange(source.published?.date, source.published?.precision, `${path}/發布日期`).start <= source.checkedOn, `${path}/發布日期晚於核對日期`);
      sources.set(source.id, source);
    }
    function refs(values, label) {
      requireValue(Array.isArray(values) && values.length > 0, `${label}/來源引用`);
      return values.map(ref => {
        requireValue(sources.has(ref.sourceId), `${label}/無法找到來源`);
        text(ref.locator, `${label}/原文位置`);
        return { source: sources.get(ref.sourceId), locator: ref.locator };
      });
    }
    function claim(value, label) {
      text(value?.text, label);
      return { ...value, refs: refs(value.refs, label) };
    }
    requireValue(Array.isArray(theme.cases) && theme.cases.length >= 1 && theme.cases.length <= 2, `${path}/一至兩個案例`);
    const cases = theme.cases.map(item => {
      const label = `${path}/${item.id}`;
      requireValue(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.id) && !caseIds.has(item.id), `${label}/唯一案例代號`);
      caseIds.add(item.id); text(item.title, `${label}/名稱`);
      industryCodes(item.industryCodes, `${label}/行業`);
      requireValue(Array.isArray(item.tags) && item.tags.includes(theme.id) && item.tags.every(tag => requiredThemes.includes(tag)) && new Set(item.tags).size === item.tags.length, `${label}/主題標籤`);
      day(item.checkedOn, raw.checkedOn, `${label}/核對日期`);
      requireValue(['hk-rd', 'hk-application', 'mixed'].includes(item.hkRole?.kind), `${label}/香港角色`);
      requireValue(stages.includes(item.stage?.kind), `${label}/證據階段`);
      day(item.stage.asOf, item.checkedOn, `${label}/階段日期`);
      requireValue(Array.isArray(item.progress) && item.progress.length > 0, `${label}/實際進展`);
      const progress = item.progress.map(event => {
        requireValue(stages.includes(event.kind), `${label}/進展不能是背景`);
        requireValue(dateRange(event.date, event.precision, `${label}/事件日期`).start <= item.checkedOn, `${label}/事件晚於核對日期`);
        return claim(event, `${label}/進展`);
      });
      requireValue(progress.some(event => {
        const range = dateRange(event.date, event.precision, `${label}/事件日期`);
        return range.start >= raw.recentWindow.from && range.end <= raw.recentWindow.through;
      }), `${label}/近兩年實質進展`);
      requireValue(Array.isArray(item.steps) && item.steps.length >= 3 && item.steps.length <= 5, `${label}/三至五個原理步驟`);
      const steps = item.steps.map(step => { text(step.title, `${label}/步驟名稱`); return claim(step, `${label}/步驟`); });
      requireValue(['disclosed', 'not-disclosed'].includes(item.business?.adoptionCosts?.status), `${label}/成本披露狀態`);
      requireValue(Array.isArray(item.limits) && item.limits.length > 0, `${label}/限制`);
      requireValue(Array.isArray(item.metrics), `${label}/數值`);
      const metrics = item.metrics.map(metric => {
        for (const field of ['label', 'unit', 'period', 'scope', 'conditions']) text(metric[field], `${label}/數值/${field}`);
        requireValue(typeof metric.value === 'number' && Number.isFinite(metric.value), `${label}/有限數值`);
        requireValue(['reported', 'calculated'].includes(metric.status), `${label}/數值狀態`);
        if (metric.status === 'calculated') text(metric.formula, `${label}/計算公式`);
        else requireValue(metric.formula === null, `${label}/原報數值不附計算公式`);
        return { ...metric, refs: refs(metric.refs, `${label}/數值`) };
      });
      return { ...item, summary: claim(item.summary, `${label}/摘要`), hkRole: claim(item.hkRole, `${label}/香港角色`), stage: claim(item.stage, `${label}/階段`), progress, principle: claim(item.principle, `${label}/原理`), steps, application: claim(item.application, `${label}/實例`), business: { users: claim(item.business?.users, `${label}/使用者`), fundingModel: claim(item.business?.fundingModel, `${label}/收費或資金`), adoptionCosts: claim(item.business.adoptionCosts, `${label}/採用成本`) }, metrics, limits: item.limits.map(limit => claim(limit, `${label}/限制`)) };
    });
    requireValue(Array.isArray(theme.background), `${path}/獨立背景`);
    const background = theme.background.map(event => {
      requireValue(dateRange(event.date, event.precision, `${path}/背景日期`).start <= raw.checkedOn, `${path}/背景晚於核對日期`);
      return claim(event, `${path}/背景`);
    });
    return { ...theme, cases, background };
  });
  return { ...raw, themes };
}

const raw = {
  "checkedOn": "2026-10-22",
  "recentWindow": {
    "from": "2024-10-22",
    "through": "2026-10-22"
  },
  "themes": [
    {
      "id": "ai-data",
      "title": "AI與數據技術",
      "introduction": "AI把資料轉成可用的文字、判斷或工具操作。香港的一個實例，是把大語言模型調整至本地語言及工作需要，再放進學校和政府的試用流程。",
      "industryCodes": [
        "J",
        "M",
        "P"
      ],
      "sources": [
        {
          "id": "ai-v1-paper",
          "title": "HKGAI-V1: Towards Regional Sovereign Large Language Model for Hong Kong",
          "publisher": "HKGAI及香港科技大學研究團隊，arXiv預印本",
          "url": "https://arxiv.org/pdf/2507.11502",
          "type": "paper",
          "published": {
            "date": "2025-07-14",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        },
        {
          "id": "ai-hkust-trial",
          "title": "Chat with HKGAI V1: HKUST Introduces First Homegrown AI Tool to Drive Innovative Education",
          "publisher": "香港科技大學",
          "url": "https://hkust.edu.hk/news/chat-hkgai-v1-hkust-introduces-first-homegrown-ai-tool-drive-innovative-education",
          "type": "institution",
          "published": {
            "date": "2025-04-22",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        },
        {
          "id": "ai-gov-document-trial",
          "title": "Innovation and Technology leadership series thematic seminar held to explore Hong Kong locally developed generative AI model technology and application (with photos)",
          "publisher": "香港特別行政區政府",
          "url": "https://www.info.gov.hk/gia/general/202506/13/P2025061300655.htm",
          "type": "government",
          "published": {
            "date": "2025-06-13",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        },
        {
          "id": "ai-gov-v3",
          "title": "創新科技及工業局局長出席「Agentic HK：HKGAI V3大模型發佈暨生態合作大會」致辭（只有中文）（附圖）",
          "publisher": "香港特別行政區政府",
          "url": "https://www.info.gov.hk/gia/general/202606/03/P2026060300659.htm",
          "type": "government",
          "published": {
            "date": "2026-06-03",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        }
      ],
      "cases": [
        {
          "id": "hk-local-llm",
          "title": "本地大語言模型與文件助理試用",
          "tags": [
            "ai-data"
          ],
          "industryCodes": [
            "J",
            "M",
            "P"
          ],
          "summary": {
            "text": "大語言模型會按輸入內容產生回答。HKGAI團隊以DeepSeek技術作基礎，再用本地資料與回饋調整模型，支援粵語、普通話和英文。2025年的HKGAI V1已供科大師生及政府人員試用，文件助理可協助起草、翻譯和摘要。2026年6月3日，HKGAI發布V3，官方稱新版本具智能體能力，讓系統按工作目標安排及執行步驟。以下技術流程取自公開的V1論文，不能直接當作V3的完整規格。",
            "refs": [
              {
                "sourceId": "ai-v1-paper",
                "locator": "PDF第1頁摘要及第5節5.1"
              },
              {
                "sourceId": "ai-hkust-trial",
                "locator": "正文第1至3段"
              },
              {
                "sourceId": "ai-gov-document-trial",
                "locator": "HKPilot試用及用途段落"
              },
              {
                "sourceId": "ai-gov-v3",
                "locator": "致辭第3至5段"
              }
            ]
          },
          "hkRole": {
            "kind": "mixed",
            "text": "香港科技大學牽頭的跨院校HKGAI團隊負責本地模型調整及應用研發，V1使用DeepSeek技術並作全參數微調。香港政府及科大亦有實際試用。這證明本地研發和本地試用，沒有證明所有底層技術均由香港原創。",
            "refs": [
              {
                "sourceId": "ai-hkust-trial",
                "locator": "正文第1至3段，2025-04-22"
              },
              {
                "sourceId": "ai-gov-document-trial",
                "locator": "正文介紹HKPilot試用的段落"
              }
            ]
          },
          "stage": {
            "kind": "trial",
            "text": "2025年4月科大公告及同年6月政府公告的已核實使用狀態為試用。2026年6月V3已發布，但所查來源未交代上述試用在核對日是否持續，亦未披露V3的個別部署完成日期、獨立實測、付費客戶或商業收入。",
            "asOf": "2025-06-13",
            "refs": [
              {
                "sourceId": "ai-hkust-trial",
                "locator": "正文第1至4段，pilot trial"
              },
              {
                "sourceId": "ai-gov-document-trial",
                "locator": "正文HKPilot currently in trial use段落"
              },
              {
                "sourceId": "ai-gov-v3",
                "locator": "致辭第3至5段"
              }
            ]
          },
          "progress": [
            {
              "date": "2025-04-22",
              "precision": "day",
              "kind": "trial",
              "text": "科大宣布師生可以免費試用HKGAI V1聊天工具，並宣布將向教師提供培訓支援。",
              "refs": [
                {
                  "sourceId": "ai-hkust-trial",
                  "locator": "正文第1至4段"
                }
              ]
            },
            {
              "date": "2025-06-13",
              "precision": "day",
              "kind": "trial",
              "text": "政府公布HKPilot正由不同局及部門試用，協助起草、翻譯及製作文件摘要。這是當日公布的試用狀態，非試用首日。",
              "refs": [
                {
                  "sourceId": "ai-gov-document-trial",
                  "locator": "正文介紹HKGAI V1及HKPilot用途的段落"
                }
              ]
            },
            {
              "date": "2026-06-03",
              "precision": "day",
              "kind": "prototype",
              "text": "HKGAI發布具智能體能力的V3。官方致辭提出優化港文通及港話通等應用，未交代這些升級的個別部署完成日期。",
              "refs": [
                {
                  "sourceId": "ai-gov-v3",
                  "locator": "致辭第3至5段"
                }
              ]
            }
          ],
          "principle": {
            "text": "公開V1論文描述兩件事。先微調模型，使回答較切合香港語言及情境。再讓系統先搜尋相關資料，把找到的內容交給模型整理。搜尋可補充模型原有知識，但仍要檢查答案及來源。",
            "refs": [
              {
                "sourceId": "ai-v1-paper",
                "locator": "PDF第1頁摘要；第5節5.1 Modular RAG framework"
              }
            ]
          },
          "steps": [
            {
              "title": "理解問題",
              "text": "V1系統先判斷查詢意圖，整理或補充查詢內容。",
              "refs": [
                {
                  "sourceId": "ai-v1-paper",
                  "locator": "第5節5.1，第2段及圖3"
                }
              ]
            },
            {
              "title": "尋找資料",
              "text": "檢索模組從自有資料庫、外部知識來源或搜尋工具取回相關內容。",
              "refs": [
                {
                  "sourceId": "ai-v1-paper",
                  "locator": "第5節5.1，第2段及圖3"
                }
              ]
            },
            {
              "title": "檢查輸入和輸出",
              "text": "論文設計包含輸入驗證、輸出審核及安全對齊，按應用領域處理內容。這是系統設計，不能保證每次答案正確。",
              "refs": [
                {
                  "sourceId": "ai-v1-paper",
                  "locator": "第5節5.1，第2段；第6節討論"
                }
              ]
            },
            {
              "title": "組織回答",
              "text": "最後把檢索及審核後的內容整理成回答，並可在多輪對話中使用短期記憶及工具。",
              "refs": [
                {
                  "sourceId": "ai-v1-paper",
                  "locator": "第5節5.1，第1至2段"
                }
              ]
            }
          ],
          "application": {
            "text": "2025年4月科大公告及6月政府公告記錄的香港使用者包括參與試用的師生及政府人員。政府當時公布的文件用途是起草、翻譯及摘要，未公布可供本頁核實的節省工時或準確率。這些公告沒有交代試用在2026年核對日是否持續。",
            "refs": [
              {
                "sourceId": "ai-hkust-trial",
                "locator": "正文第1至4段"
              },
              {
                "sourceId": "ai-gov-document-trial",
                "locator": "HKPilot用途段落"
              }
            ]
          },
          "business": {
            "users": {
              "text": "2025年4月及6月公告記錄的使用者是參與試用的科大師生及政府部門。這些試用者不等於付費客戶，也不能憑舊公告判斷試用在核對日是否仍持續。",
              "refs": [
                {
                  "sourceId": "ai-hkust-trial",
                  "locator": "正文第1至4段"
                },
                {
                  "sourceId": "ai-gov-document-trial",
                  "locator": "HKPilot試用段落"
                }
              ]
            },
            "fundingModel": {
              "text": "HKGAI由政府InnoHK計劃資助，屬研發資金。所查原始資料未披露本案例的授權費、銷售收入或盈利，不能把政府資助當作產品收入。",
              "refs": [
                {
                  "sourceId": "ai-hkust-trial",
                  "locator": "正文第2段"
                },
                {
                  "sourceId": "ai-gov-v3",
                  "locator": "致辭HKGAI由InnoHK資助成立段落"
                }
              ]
            },
            "adoptionCosts": {
              "status": "disclosed",
              "text": "科大2025年公布師生聊天工具試用免費，並安排教師培訓。這只披露該批使用者的試用收費，沒有披露企業部署價格、運算和資料整合成本；免費試用不代表營運成本為零。",
              "refs": [
                {
                  "sourceId": "ai-hkust-trial",
                  "locator": "正文第1段及第4段"
                }
              ]
            }
          },
          "metrics": [],
          "limits": [
            {
              "text": "V1論文是團隊提交的預印本，使用自建評估題集。作者亦承認一般指令攻擊及標註者代表性方面仍有限制，因此本頁沒有把局部評分當作通用排名。",
              "refs": [
                {
                  "sourceId": "ai-v1-paper",
                  "locator": "第4節4.5；第6節6.1 Critical Reflections，PDF第11頁"
                }
              ]
            },
            {
              "text": "本頁核實的是V1的公開技術說明和試用，以及V3的發布。V3的完整架構、獨立效益評估和商業收入未在所查資料中披露。",
              "refs": [
                {
                  "sourceId": "ai-v1-paper",
                  "locator": "標題、摘要及第5節"
                },
                {
                  "sourceId": "ai-gov-v3",
                  "locator": "致辭第3至5段"
                }
              ]
            }
          ],
          "checkedOn": "2026-10-22"
        }
      ],
      "background": []
    },
    {
      "id": "robotics-manufacturing",
      "title": "機械人與先進製造",
      "introduction": "機械人把部分體力工作交給可移動設備。智能製造則把感測、控制和生產資料接在一起。以下分別看香港公共衞生現場和已投產的微工廠。",
      "industryCodes": [
        "C",
        "N",
        "O"
      ],
      "sources": [
        {
          "id": "fehd-robot-2026",
          "title": "食環署引入新科技持續提升清潔工人職業安全與健康和改善工作環境（附圖）",
          "publisher": "食物環境衞生署",
          "url": "https://www.fehd.gov.hk/tc_chi/news/details/20260430_12362.html",
          "type": "government",
          "published": {
            "date": "2026-04-30",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        },
        {
          "id": "yee-hop-ar-2025",
          "title": "Yee Hop Holdings Limited Annual Report 2024/25",
          "publisher": "義合控股有限公司",
          "url": "https://www1.hkexnews.hk/listedco/listconews/sehk/2025/0724/2025072401281.pdf",
          "type": "company",
          "published": {
            "date": "2025-07-24",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        },
        {
          "id": "hkpc-ar-2025",
          "title": "Hong Kong Productivity Council Annual Report 2024-25",
          "publisher": "香港生產力促進局，立法會提交版本",
          "url": "https://www.legco.gov.hk/yr2025/chinese/counmtg/papers/cm20251015-sp089-ec.pdf",
          "type": "institution",
          "published": {
            "date": "2025-10",
            "precision": "month"
          },
          "checkedOn": "2026-10-22"
        }
      ],
      "cases": [
        {
          "id": "fehd-robot-dog-fogging",
          "title": "機械狗協助搬運與霧化滅蚊",
          "tags": [
            "robotics-manufacturing"
          ],
          "industryCodes": [
            "N",
            "O"
          ],
          "summary": {
            "text": "食環署在2025年引入工業級機械狗，應付偏遠地方和崎嶇地形的搬運工作。2026年公布亦已用於霧化滅蚊，目的是減輕人員穿全套防護裝備在叢林工作的負擔。這是指定工作已使用設備的例子，公布沒有證明全自主巡邏或全港普及。",
            "refs": [
              {
                "sourceId": "fehd-robot-2026",
                "locator": "新型電動設備第（三）項「工業級機械狗」及第三張圖片說明"
              }
            ]
          },
          "hkRole": {
            "kind": "hk-application",
            "text": "香港的證據是食環署引入及實際使用機械狗。來源沒有交代機體供應商、原產地或香港研發貢獻，因此不標作香港研發。",
            "refs": [
              {
                "sourceId": "fehd-robot-2026",
                "locator": "新型電動設備第（三）項「工業級機械狗」及第三張圖片說明"
              }
            ]
          },
          "stage": {
            "kind": "applied",
            "asOf": "2026-04-30",
            "text": "已在特定公共衞生工作使用，包括霧化滅蚊。這不等於所有路況可自主執行，公布沒有交代自主程度。",
            "refs": [
              {
                "sourceId": "fehd-robot-2026",
                "locator": "新型電動設備第（三）項「工業級機械狗」及第三張圖片說明"
              }
            ]
          },
          "progress": [
            {
              "date": "2025",
              "precision": "year",
              "kind": "applied",
              "text": "食環署2026年公布表示上一年引入工業級機械狗搬運垃圾；同一公布確認亦已用於霧化滅蚊。來源只列引入年份，沒有提供首次滅蚊日期。",
              "refs": [
                {
                  "sourceId": "fehd-robot-2026",
                  "locator": "新型電動設備第（三）項「工業級機械狗」及第三張圖片說明"
                }
              ]
            }
          ],
          "principle": {
            "text": "以可在斜坡行走的機械載具承載物資或滅蚊設備，讓設備進入崎嶇地形。這裏解釋的是載具輔助作業；來源沒有提供其導航演算法或遙控方式。",
            "refs": [
              {
                "sourceId": "fehd-robot-2026",
                "locator": "新型電動設備第（三）項「工業級機械狗」及第三張圖片說明"
              }
            ]
          },
          "steps": [
            {
              "title": "承載工作物資",
              "text": "機械狗分擔搬運垃圾或滅蚊作業的設備負擔。",
              "refs": [
                {
                  "sourceId": "fehd-robot-2026",
                  "locator": "新型電動設備第（三）項「工業級機械狗」及第三張圖片說明"
                }
              ]
            },
            {
              "title": "進入崎嶇地形",
              "text": "利用可以在斜坡行走的機體，應付偏遠及崎嶇地點。",
              "refs": [
                {
                  "sourceId": "fehd-robot-2026",
                  "locator": "新型電動設備第（三）項「工業級機械狗」及第三張圖片說明"
                }
              ]
            },
            {
              "title": "協助現場滅蚊",
              "text": "食環署把機械狗用於霧化滅蚊，以減輕防治蟲鼠人員的工作負擔。流程不表示全自動噴藥。",
              "refs": [
                {
                  "sourceId": "fehd-robot-2026",
                  "locator": "新型電動設備第（三）項「工業級機械狗」及第三張圖片說明"
                }
              ]
            }
          ],
          "application": {
            "text": "實際使用者是食環署清潔及防治蟲鼠工作人員，場景包括偏遠地方、斜坡和叢林。",
            "refs": [
              {
                "sourceId": "fehd-robot-2026",
                "locator": "新型電動設備第（三）項「工業級機械狗」及第三張圖片說明"
              }
            ]
          },
          "business": {
            "users": {
              "text": "公共衞生部門是本案例的採用者。來源沒有列出其他機構客戶。",
              "refs": [
                {
                  "sourceId": "fehd-robot-2026",
                  "locator": "新型電動設備第（三）項「工業級機械狗」及第三張圖片說明"
                }
              ]
            },
            "fundingModel": {
              "text": "這是政府部門引入設備提供公共服務的個案。新聞稿沒有披露購買、租用或服務合約方式，亦沒有供應商收入數字。",
              "refs": [
                {
                  "sourceId": "fehd-robot-2026",
                  "locator": "新型電動設備第（三）項「工業級機械狗」及第三張圖片說明"
                }
              ]
            },
            "adoptionCosts": {
              "status": "not-disclosed",
              "text": "未披露每台價格、維修、訓練及整體採用成本，不能用設備已使用推算節省金額或回本期。",
              "refs": [
                {
                  "sourceId": "fehd-robot-2026",
                  "locator": "新型電動設備第（三）項「工業級機械狗」及第三張圖片說明"
                }
              ]
            }
          },
          "metrics": [],
          "limits": [
            {
              "text": "食環署描述機體負重、斜坡行走及續航能力，但沒有公布對應載重、地形和測試條件。本頁不把設備規格轉成整天工作的實測成效。",
              "refs": [
                {
                  "sourceId": "fehd-robot-2026",
                  "locator": "新型電動設備第（三）項「工業級機械狗」及第三張圖片說明"
                }
              ]
            },
            {
              "text": "沒有公開自主程度、故障率、實際覆蓋面積或節省工時，不能聲稱取代前線人員。",
              "refs": [
                {
                  "sourceId": "fehd-robot-2026",
                  "locator": "新型電動設備第（三）項「工業級機械狗」及第三張圖片說明"
                }
              ]
            }
          ],
          "checkedOn": "2026-10-22"
        },
        {
          "id": "apel-smart-microfactory",
          "title": "APEL智能微工廠與生產監控",
          "tags": [
            "robotics-manufacturing",
            "communications-iot"
          ],
          "industryCodes": [
            "C"
          ],
          "summary": {
            "text": "APEL與生產力局合作的Wisepura Aquapura微工廠於2025年6月投產。工廠把混合時的溫度控制、機械自動化及即時用電監測接在一起，支援有限空間內的小批量生產。投產是實際進展；年報提到的下一步預測分析仍屬發展方向。",
            "refs": [
              {
                "sourceId": "yee-hop-ar-2025",
                "locator": "印刷頁5，PDF第6頁，Chairman’s Statement，Wisepura Aquapura smart micro factory 三段"
              }
            ]
          },
          "hkRole": {
            "kind": "mixed",
            "text": "生產力局年報確認為APEL客製化智能可調節多孔結構的矽微囊生產線，公司年報亦確認香港微工廠投產。香港貢獻是定制產線開發及應用，不代表所有感測器、控制器或材料專利均由香港原創。",
            "refs": [
              {
                "sourceId": "hkpc-ar-2025",
                "locator": "年報印刷頁09，PDF第10頁，How We Serve，APEL生產線段"
              },
              {
                "sourceId": "yee-hop-ar-2025",
                "locator": "印刷頁5，PDF第6頁，Chairman’s Statement，Wisepura Aquapura smart micro factory 三段"
              }
            ]
          },
          "stage": {
            "kind": "applied",
            "asOf": "2025-07-24",
            "text": "公司年報確認微工廠已於2025年6月投產。這是指定產線已應用，沒有足夠資料判斷其產能利用率或盈利。",
            "refs": [
              {
                "sourceId": "yee-hop-ar-2025",
                "locator": "印刷頁5，PDF第6頁，Chairman’s Statement，Wisepura Aquapura smart micro factory 三段"
              }
            ]
          },
          "progress": [
            {
              "date": "2025-06",
              "precision": "month",
              "kind": "applied",
              "text": "Wisepura Aquapura智能微工廠正式投產。年報只提供月份，本頁不補上日期。",
              "refs": [
                {
                  "sourceId": "yee-hop-ar-2025",
                  "locator": "印刷頁5，PDF第6頁，Chairman’s Statement，Wisepura Aquapura smart micro factory 三段"
                }
              ]
            }
          ],
          "principle": {
            "text": "微工廠把控制設備和生產資料集中在較小空間。混合過程需要控制溫度以維持微膠囊結構及性能，再配合可編程控制器、人機介面、清洗及用電監測，協助管理生產。",
            "refs": [
              {
                "sourceId": "yee-hop-ar-2025",
                "locator": "印刷頁5，PDF第6頁，Chairman’s Statement，Wisepura Aquapura smart micro factory 三段"
              }
            ]
          },
          "steps": [
            {
              "title": "監察混合溫度",
              "text": "定制溫控系統處理混合時突然升溫對微膠囊結構及性能的影響。",
              "refs": [
                {
                  "sourceId": "yee-hop-ar-2025",
                  "locator": "印刷頁5，PDF第6頁，Chairman’s Statement，Wisepura Aquapura smart micro factory 三段"
                }
              ]
            },
            {
              "title": "控制生產設備",
              "text": "可編程邏輯控制器與人機介面協助自動化管理及操作。這是原理示意，沒有公開完整配方或控制程式。",
              "refs": [
                {
                  "sourceId": "yee-hop-ar-2025",
                  "locator": "印刷頁5，PDF第6頁，Chairman’s Statement，Wisepura Aquapura smart micro factory 三段"
                }
              ]
            },
            {
              "title": "清洗與監測",
              "text": "產線配備就地清洗系統，工業物聯網系統則即時監測用電。",
              "refs": [
                {
                  "sourceId": "yee-hop-ar-2025",
                  "locator": "印刷頁5，PDF第6頁，Chairman’s Statement，Wisepura Aquapura smart micro factory 三段"
                }
              ]
            },
            {
              "title": "按需要安排生產",
              "text": "年報描述小批量定制及即時生產應用，以管理庫存與資源。沒有公開節省比例。",
              "refs": [
                {
                  "sourceId": "yee-hop-ar-2025",
                  "locator": "印刷頁5，PDF第6頁，Chairman’s Statement，Wisepura Aquapura smart micro factory 三段"
                }
              ]
            }
          ],
          "application": {
            "text": "實際例子是Wisepura Aquapura產線。公司另披露向香港科技大學供應控釋芳香及消毒產品的合約，產品面向水體衞生及空氣淨化場景；合約不是工廠成本。",
            "refs": [
              {
                "sourceId": "yee-hop-ar-2025",
                "locator": "印刷頁5，PDF第6頁，Chairman’s Statement，Wisepura Aquapura smart micro factory 三段"
              },
              {
                "sourceId": "yee-hop-ar-2025",
                "locator": "印刷頁9，PDF第10頁，Management Discussion and Analysis，APEL產品及2024年12月供應合約段"
              }
            ]
          },
          "business": {
            "users": {
              "text": "公司披露香港科技大學為Wisepura Aquapura產品供應合約的客戶。年報沒有將該合約拆成每個最終使用地點的採購額。",
              "refs": [
                {
                  "sourceId": "yee-hop-ar-2025",
                  "locator": "印刷頁9，PDF第10頁，Management Discussion and Analysis，APEL產品及2024年12月供應合約段"
                }
              ]
            },
            "fundingModel": {
              "text": "已披露的模式包括產品供應合約。2024年12月APEL取得約350萬港元科大合約，不能視為已確認收入、產線售價或盈利。",
              "refs": [
                {
                  "sourceId": "yee-hop-ar-2025",
                  "locator": "印刷頁9，PDF第10頁，Management Discussion and Analysis，APEL產品及2024年12月供應合約段"
                }
              ]
            },
            "adoptionCosts": {
              "status": "not-disclosed",
              "text": "來源交代溫控、控制器、清洗及用電監測等整合內容，但沒有披露微工廠總投資、每批成本或售價。產品合約金額不能代替建廠成本。",
              "refs": [
                {
                  "sourceId": "yee-hop-ar-2025",
                  "locator": "印刷頁5，PDF第6頁，Chairman’s Statement，Wisepura Aquapura smart micro factory 三段"
                },
                {
                  "sourceId": "yee-hop-ar-2025",
                  "locator": "印刷頁9，PDF第10頁，Management Discussion and Analysis，APEL產品及2024年12月供應合約段"
                }
              ]
            }
          },
          "metrics": [
            {
              "label": "科大產品供應合約約值",
              "value": 3500000,
              "unit": "港元",
              "period": "2024年12月取得的合約",
              "scope": "APEL向香港科技大學供應Wisepura Aquapura產品的指定合約",
              "conditions": "約數。合約值不等於當年收入、微工廠投資、利潤或全部訂單；合約早於2025年6月投產。",
              "status": "reported",
              "formula": null,
              "refs": [
                {
                  "sourceId": "yee-hop-ar-2025",
                  "locator": "印刷頁9，PDF第10頁，Management Discussion and Analysis，APEL產品及2024年12月供應合約段"
                }
              ]
            }
          ],
          "limits": [
            {
              "text": "公開年報沒有該產線的良率、節能實測、產能利用率或獨立盈利。本頁不轉述「全球首個」或推算回本期。",
              "refs": [
                {
                  "sourceId": "yee-hop-ar-2025",
                  "locator": "印刷頁5，PDF第6頁，Chairman’s Statement，Wisepura Aquapura smart micro factory 三段"
                }
              ]
            },
            {
              "text": "年報把利用AI和算力進一步分析及預測生產資料列作持續發展方向，不應把未來功能全部寫成已運作。",
              "refs": [
                {
                  "sourceId": "yee-hop-ar-2025",
                  "locator": "印刷頁5，PDF第6頁，Chairman’s Statement，Wisepura Aquapura smart micro factory 三段"
                }
              ]
            },
            {
              "text": "產品用途及供應合約不證明對所有病原或臨床疾病有效。本頁沒有採用缺乏測試條件的殺菌比例。",
              "refs": [
                {
                  "sourceId": "yee-hop-ar-2025",
                  "locator": "印刷頁9，PDF第10頁，Management Discussion and Analysis，APEL產品及2024年12月供應合約段"
                }
              ]
            }
          ],
          "checkedOn": "2026-10-22"
        }
      ],
      "background": []
    },
    {
      "id": "health-medical",
      "title": "生命健康與醫療",
      "introduction": "醫療科技要看實際使用方式及臨床證據。這裏用香港的機械人輔助微外科說明，也交代證據目前能回答甚麼。",
      "industryCodes": [
        "Q"
      ],
      "sources": [
        {
          "id": "health-hku",
          "title": "HKUMed pioneers robot-assisted microsurgery in Hong Kong",
          "publisher": "香港大學李嘉誠醫學院",
          "url": "https://www.med.hku.hk/en/news/press/20260624-hkumed-pioneers-robot-assisted-microsurgery-in-hong-kong",
          "type": "institution",
          "published": {
            "date": "2026-06-24",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        },
        {
          "id": "health-paper",
          "title": "Trans-hairline robotic neck dissection and robotic microvascular free flap reconstruction in oral cavity cancer",
          "publisher": "Oral Oncology，原作者摘要收錄於 PubMed",
          "url": "https://pubmed.ncbi.nlm.nih.gov/41401590/",
          "type": "paper",
          "published": {
            "date": "2025-12-15",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        }
      ],
      "cases": [
        {
          "id": "robot-assisted-microsurgery",
          "title": "由醫生操控的機械人輔助微外科",
          "tags": [
            "health-medical",
            "robotics-manufacturing"
          ],
          "industryCodes": [
            "Q"
          ],
          "summary": {
            "text": "港大團隊自2025年6月在瑪麗醫院引入臨床應用。醫生操控機械臂，系統減少手震並縮小動作，幫助縫合細小血管。這是已有特定臨床使用的技術，仍須分開看個案成果與比較研究。",
            "refs": [
              {
                "sourceId": "health-hku",
                "locator": "Extending surgical capability beyond human limits，平台功能及臨床應用段落"
              }
            ]
          },
          "hkRole": {
            "kind": "hk-application",
            "text": "港大及瑪麗醫院團隊在香港進行手術。臨床論文摘要列出使用 Symani 作微血管吻合，但沒有證明硬件由香港研發。",
            "refs": [
              {
                "sourceId": "health-hku",
                "locator": "About the research team"
              },
              {
                "sourceId": "health-paper",
                "locator": "Abstract，Results；Affiliations"
              }
            ]
          },
          "stage": {
            "kind": "applied",
            "asOf": "2026-06-24",
            "text": "特定醫院團隊已作臨床應用。新聞稿列出程序總數，沒有提供全港使用率或隨機比較試驗。",
            "refs": [
              {
                "sourceId": "health-hku",
                "locator": "Extending surgical capability beyond human limits；About the research team"
              }
            ]
          },
          "progress": [
            {
              "date": "2025-06",
              "precision": "month",
              "kind": "applied",
              "text": "團隊開始機械人輔助微外科的臨床應用。",
              "refs": [
                {
                  "sourceId": "health-hku",
                  "locator": "Extending surgical capability beyond human limits，introduced ... in June 2025"
                }
              ]
            },
            {
              "date": "2026-04",
              "precision": "month",
              "kind": "applied",
              "text": "團隊將機械人輔助微外科用於活體肝臟移植。",
              "refs": [
                {
                  "sourceId": "health-hku",
                  "locator": "Extending surgical capability beyond human limits，April 2026；World-first robot-assisted liver transplantation"
                }
              ]
            }
          ],
          "principle": {
            "text": "醫生看放大的手術視野並控制器械。系統過濾手震、按比例縮小動作，再以機械臂帶動微型器械。",
            "refs": [
              {
                "sourceId": "health-hku",
                "locator": "Extending surgical capability beyond human limits，平台功能段落"
              }
            ]
          },
          "steps": [
            {
              "title": "看清細部",
              "text": "醫生在放大的視野下辨認需要處理的細小結構。",
              "refs": [
                {
                  "sourceId": "health-hku",
                  "locator": "導言，Microsurgery is one ... magnification"
                }
              ]
            },
            {
              "title": "控制機械臂",
              "text": "系統過濾手震並縮小醫生動作，機械臂連接微型器械。",
              "refs": [
                {
                  "sourceId": "health-hku",
                  "locator": "Extending surgical capability beyond human limits，平台功能段落"
                }
              ]
            },
            {
              "title": "完成微血管吻合",
              "text": "香港口腔癌個案以機械人輔助縫合重建組織的血管，建立血液供應。",
              "refs": [
                {
                  "sourceId": "health-paper",
                  "locator": "Abstract，Material and methods、Results"
                }
              ]
            }
          ],
          "application": {
            "text": "已有肝移植及頭頸癌重建等香港手術應用。論文摘要示範一名舌癌病人的經髮線切口重建。",
            "refs": [
              {
                "sourceId": "health-hku",
                "locator": "Extending surgical capability beyond human limits；World-first robot-assisted liver transplantation"
              },
              {
                "sourceId": "health-paper",
                "locator": "Abstract，Material and methods、Results"
              }
            ]
          },
          "business": {
            "users": {
              "text": "使用者是外科醫生及手術團隊，患者接受相應手術。現有證據來自瑪麗醫院團隊。",
              "refs": [
                {
                  "sourceId": "health-hku",
                  "locator": "About the research team；Extending surgical capability beyond human limits"
                }
              ]
            },
            "fundingModel": {
              "text": "所查新聞稿及論文摘要沒有公布本項目的資金分工或服務收入，不能由手術數量推算收入。",
              "refs": [
                {
                  "sourceId": "health-hku",
                  "locator": "全文，未列財務資料"
                },
                {
                  "sourceId": "health-paper",
                  "locator": "Abstract；Conflict of interest statement"
                }
              ]
            },
            "adoptionCosts": {
              "status": "not-disclosed",
              "text": "資料未公布這項應用的設備購入、耗材、維護及培訓費用，也沒有足夠資料計算每宗手術成本。",
              "refs": [
                {
                  "sourceId": "health-hku",
                  "locator": "全文，未列採購或成本數字"
                },
                {
                  "sourceId": "health-paper",
                  "locator": "Abstract，未列成本數字"
                }
              ]
            }
          },
          "metrics": [
            {
              "label": "團隊報告已完成程序",
              "value": 48,
              "unit": "宗程序",
              "period": "截至2026-06-24",
              "scope": "港大及瑪麗醫院機械人輔助微外科團隊",
              "conditions": "機構新聞稿的程序總數。未列逐項手術分布、完整跟進期或比較組，不能當成48名病人或普遍療效。",
              "status": "reported",
              "formula": null,
              "refs": [
                {
                  "sourceId": "health-hku",
                  "locator": "導言；Extending surgical capability beyond human limits"
                }
              ]
            }
          ],
          "limits": [
            {
              "text": "新聞稿描述的結果不能證明所有患者的風險較低。已讀臨床論文摘要只示範一名病人，全文為訂閱內容，未據此推算療效。",
              "refs": [
                {
                  "sourceId": "health-hku",
                  "locator": "導言；Extending surgical capability beyond human limits"
                },
                {
                  "sourceId": "health-paper",
                  "locator": "Abstract，Material and methods；Publication types"
                }
              ]
            },
            {
              "text": "由醫生操控的輔助系統不等於自行決定治療或獨立完成手術的機械人。",
              "refs": [
                {
                  "sourceId": "health-hku",
                  "locator": "Extending surgical capability beyond human limits，surgeon operates 及平台功能段落"
                }
              ]
            }
          ],
          "checkedOn": "2026-10-22"
        }
      ],
      "background": []
    },
    {
      "id": "fintech",
      "title": "金融科技",
      "introduction": "金融科技可以改變資產如何記錄、買賣及交收。這裏用數碼債券說明，並分清融資金額、技術供應商收入及試行範圍。",
      "industryCodes": [
        "K",
        "J"
      ],
      "sources": [
        {
          "id": "fintech-bonds",
          "title": "HKSAR Government’s Fourth Digital Green Bonds Offering",
          "publisher": "香港金融管理局",
          "url": "https://www.hkma.gov.hk/eng/news-and-media/press-releases/2026/09/20260929-6/",
          "type": "government",
          "published": {
            "date": "2026-09-29",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        },
        {
          "id": "fintech-ensemble",
          "title": "HKMA announces new phase of Project Ensemble to support real-value transactions in tokenised deposits and digital assets",
          "publisher": "香港金融管理局，政府新聞公報",
          "url": "https://www.info.gov.hk/gia/general/202511/13/P2025111300366.htm",
          "type": "government",
          "published": {
            "date": "2025-11-13",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        },
        {
          "id": "fintech-hsbc",
          "title": "HSBC supports HKSAR government on world’s largest digital bond issuance",
          "publisher": "香港上海滙豐銀行",
          "url": "https://www.about.hsbc.com.hk/news-and-media/hsbc-supports-hksar-government-on-worlds-largest-digital-bond-issuance",
          "type": "company",
          "published": {
            "date": "2026-09-29",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        },
        {
          "id": "fintech-report",
          "title": "Bond Tokenisation in Hong Kong",
          "publisher": "香港金融管理局",
          "url": "https://www.hkma.gov.hk/media/eng/doc/key-information/press-release/2023/20230824e3a1.pdf",
          "type": "government",
          "published": {
            "date": "2023-08-24",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        }
      ],
      "cases": [
        {
          "id": "digital-green-bonds-settlement",
          "title": "數碼債券與代幣化資金交收",
          "tags": [
            "fintech"
          ],
          "industryCodes": [
            "K",
            "J"
          ],
          "summary": {
            "text": "政府2026年第四批數碼綠色債券已完成定價。新進展是港元部分的首次發行交收加入代幣化存款選項，連接 HSBC Orion 與 EnsembleTX。這項具體交易已有應用，EnsembleTX 整體仍屬受控試行。",
            "refs": [
              {
                "sourceId": "fintech-bonds",
                "locator": "定價及 Building on three successful issuances 段落"
              },
              {
                "sourceId": "fintech-hsbc",
                "locator": "David Liao 引述，Orion connection to EnsembleTX"
              },
              {
                "sourceId": "fintech-ensemble",
                "locator": "首段，controlled pilot environment"
              }
            ]
          },
          "hkRole": {
            "kind": "hk-application",
            "text": "香港政府發行，金管局 CMU 負責結算，HSBC Orion 提供平台。這證明技術在香港交易中使用，不代表底層分散式帳本由香港獨家發明。",
            "refs": [
              {
                "sourceId": "fintech-bonds",
                "locator": "Key features，Clearing and Settlement System、Platform、Platform Provider"
              }
            ]
          },
          "stage": {
            "kind": "applied",
            "asOf": "2026-09-29",
            "text": "已用於這批債券的定價及首次發行流程。代幣化存款經 EnsembleTX 接入，不能由此推定所有銀行交易已全面轉用此系統。",
            "refs": [
              {
                "sourceId": "fintech-bonds",
                "locator": "首段及 tokenised deposits ... primary issuance settlement process 段落"
              },
              {
                "sourceId": "fintech-ensemble",
                "locator": "首段及新試行階段說明"
              }
            ]
          },
          "progress": [
            {
              "date": "2026-09-28",
              "precision": "day",
              "kind": "applied",
              "text": "第四批數碼綠色債券完成定價。",
              "refs": [
                {
                  "sourceId": "fintech-bonds",
                  "locator": "Following a virtual roadshow，priced on 28 September"
                }
              ]
            }
          ],
          "principle": {
            "text": "分散式帳本讓獲授權參與者使用一致的資產紀錄。債券與支付安排再連接交收流程。金管局2023年報告解釋原理，2026年的實際平台及支付選項以本次公告為準。",
            "refs": [
              {
                "sourceId": "fintech-report",
                "locator": "印刷第7頁 Table 1；第8至9頁 Network type、Participation model"
              },
              {
                "sourceId": "fintech-bonds",
                "locator": "Key features 及首次發行交收段落"
              }
            ]
          },
          "steps": [
            {
              "title": "訂立債券條款",
              "text": "發行人確定貨幣、期限及價格，並以標準化資料描述債券。",
              "refs": [
                {
                  "sourceId": "fintech-bonds",
                  "locator": "定價列表；BDT Version 2.0 段落及註1"
                }
              ]
            },
            {
              "title": "平台記錄債券",
              "text": "HSBC Orion 是本次數碼資產平台，CMU 是結算系統。",
              "refs": [
                {
                  "sourceId": "fintech-bonds",
                  "locator": "Key features，Platform、Clearing and Settlement System"
                }
              ]
            },
            {
              "title": "選擇支付安排",
              "text": "港元部分加入 EnsembleTX 代幣化存款選項，同時保留其他交收渠道。",
              "refs": [
                {
                  "sourceId": "fintech-bonds",
                  "locator": "Building on three successful issuances 段落"
                },
                {
                  "sourceId": "fintech-hsbc",
                  "locator": "Orion connection ... alongside traditional settlement rails"
                }
              ]
            },
            {
              "title": "完成交收及融資用途",
              "text": "公告列明交收周期及綠色項目的資金用途。債券籌款屬發行人的融資。",
              "refs": [
                {
                  "sourceId": "fintech-bonds",
                  "locator": "Key features，Settlement cycle、Use of proceeds"
                }
              ]
            }
          ],
          "application": {
            "text": "本次交易連接政府、銀行、數碼平台及 CMU。這是指定債券的應用，並非向所有公眾開放的通用支付系統。",
            "refs": [
              {
                "sourceId": "fintech-bonds",
                "locator": "Key features，參與機構及 Platform Direct Participants"
              },
              {
                "sourceId": "fintech-ensemble",
                "locator": "參與銀行及 controlled pilot environment"
              }
            ]
          },
          "business": {
            "users": {
              "text": "發行人及參與銀行使用發行、託管及交收服務，投資者透過相應渠道持有債券。",
              "refs": [
                {
                  "sourceId": "fintech-bonds",
                  "locator": "Key features，參與機構、CMU、Platform Direct Participants"
                },
                {
                  "sourceId": "fintech-report",
                  "locator": "印刷第15至17頁 Investor access and custody arrangement，原理背景"
                }
              ]
            },
            "fundingModel": {
              "text": "政府以發債融資，款項用於合資格綠色項目。HSBC 提供平台及代理等服務，但公告未分列其技術服務費或收入，發債總額不是供應商營業額。",
              "refs": [
                {
                  "sourceId": "fintech-bonds",
                  "locator": "Use of proceeds；Platform Provider、Principal Paying Agent"
                },
                {
                  "sourceId": "fintech-hsbc",
                  "locator": "首段及全文，未披露本次服務費"
                }
              ]
            },
            "adoptionCosts": {
              "status": "not-disclosed",
              "text": "本次平台費及系統接入成本未公開。金管局的原理報告指出，自行運行節點涉及軟硬件、頻寬、維護及保安；這不是本次交易的成本報價。",
              "refs": [
                {
                  "sourceId": "fintech-bonds",
                  "locator": "全文，未列技術成本"
                },
                {
                  "sourceId": "fintech-report",
                  "locator": "印刷第9頁第15至16段"
                }
              ]
            }
          },
          "metrics": [
            {
              "label": "本批債券規模，約數",
              "value": 200,
              "unit": "億港元等值",
              "period": "2026-09-28定價；2026-09-29公布",
              "scope": "2026年政府第四批數碼綠色債券",
              "conditions": "四種貨幣合計的公告約數。屬債券融資規模，並非技術收入、利潤、成本節省或全部經代幣化存款交收的金額。",
              "status": "reported",
              "formula": null,
              "refs": [
                {
                  "sourceId": "fintech-bonds",
                  "locator": "首段；Key features，Issue size"
                }
              ]
            }
          ],
          "limits": [
            {
              "text": "EnsembleTX 是受控實值試行。2025年公告說銀行間交收初期經港元 RTGS，日後再升級，不應將計劃當成已全天候完成的功能。",
              "refs": [
                {
                  "sourceId": "fintech-ensemble",
                  "locator": "首段；To establish a strong foundation 段落"
                }
              ]
            },
            {
              "text": "各交收選項實際使用金額及本次成本節省未在公告中分列，不能用債券總額推算採用率或效率。",
              "refs": [
                {
                  "sourceId": "fintech-bonds",
                  "locator": "全文及首次發行交收選項段落"
                },
                {
                  "sourceId": "fintech-hsbc",
                  "locator": "全文及交收選項段落"
                }
              ]
            }
          ],
          "checkedOn": "2026-10-22"
        }
      ],
      "background": [
        {
          "date": "2025-11-13",
          "precision": "day",
          "text": "EnsembleTX 啟動受控實值試行，初期重點包括代幣化貨幣市場基金交易及流動性管理。",
          "refs": [
            {
              "sourceId": "fintech-ensemble",
              "locator": "首兩段"
            }
          ]
        },
        {
          "date": "2023-08-24",
          "precision": "day",
          "text": "金管局的債券代幣化報告提供技術及法律設計背景，早於本頁的新進展窗口。",
          "refs": [
            {
              "sourceId": "fintech-report",
              "locator": "印刷第3至4頁，Foreword、Overview"
            }
          ]
        }
      ]
    },
    {
      "id": "chips-computing",
      "title": "晶片與運算硬件",
      "introduction": "運算速度除了取決於計算，亦取決於資料要搬多遠。記憶體內搜尋嘗試讓資料留在儲存位置直接比較，減少處理器反覆搬運資料的需要。",
      "industryCodes": [
        "C",
        "J",
        "M"
      ],
      "sources": [
        {
          "id": "chips-paper-preview",
          "title": "Sb-contacted MoS2 flash memory for analogue in-memory searches",
          "publisher": "Nature Nanotechnology",
          "url": "https://www.nature.com/articles/s41565-025-02089-7?error=cookies_not_supported",
          "type": "paper",
          "published": {
            "date": "2025-12-15",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        },
        {
          "id": "chips-hku-news",
          "title": "HKU Engineering develops atomically thin “Analogue In-Memory Search” chip to redefine AI computing limits with minimalist architecture",
          "publisher": "香港大學電機電子工程系",
          "url": "https://ece.hku.hk/20260908-02/",
          "type": "institution",
          "published": {
            "date": "2026-08-31",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        }
      ],
      "cases": [
        {
          "id": "hku-mos2-in-memory-search",
          "title": "二維材料記憶體內搜尋晶片",
          "tags": [
            "chips-computing",
            "ai-data"
          ],
          "industryCodes": [
            "C",
            "J",
            "M"
          ],
          "summary": {
            "text": "一般電腦要把記憶體的資料送到處理器比較。港大團隊用很薄的二硫化鉬材料製作快閃記憶體，讓搜尋條件直接與儲存資料比較。研究亦示範以資料相似程度作機器學習分類。這是實驗室硬件原型，還有封裝及量產工程問題。論文在2025年12月已上線，2026年8月的大學新聞是較後的介紹，不能當作另一項新發明。",
            "refs": [
              {
                "sourceId": "chips-paper-preview",
                "locator": "Abstract；About this article日期"
              },
              {
                "sourceId": "chips-hku-news",
                "locator": "正文首4段及最後應用段"
              }
            ]
          },
          "hkRole": {
            "kind": "hk-rd",
            "text": "港大Can Li及Lain-Jong Li等研究者參與構思及指導，港大研究者參與製作、量度和分析。原論文列出復旦及新加坡國立大學合作者。部分製作在港大及科大設施完成，因此可確定有香港研發貢獻，並非全由單一機構完成。",
            "refs": [
              {
                "sourceId": "chips-paper-preview",
                "locator": "Author information，Authors and Affiliations、Contributions及Acknowledgements"
              }
            ]
          },
          "stage": {
            "kind": "prototype",
            "text": "團隊已製成記憶體陣列並示範搜尋及分類。大學明言大規模商業化仍要解決封裝工程挑戰，沒有提供量產或香港客戶採用證據。",
            "asOf": "2026-10-22",
            "refs": [
              {
                "sourceId": "chips-paper-preview",
                "locator": "Abstract"
              },
              {
                "sourceId": "chips-hku-news",
                "locator": "正文最後應用段，While large-scale commercialisation..."
              }
            ]
          },
          "progress": [
            {
              "date": "2025-12-15",
              "precision": "day",
              "kind": "prototype",
              "text": "原論文正式上線，報告製成二維材料類比內容定址記憶體陣列，並示範記憶體內搜尋及分類。期刊卷期為2026年2月，與上線日不同。",
              "refs": [
                {
                  "sourceId": "chips-paper-preview",
                  "locator": "Abstract及About this article，Published、Version of record、Issue date"
                }
              ]
            }
          ],
          "principle": {
            "text": "內容定址記憶體按內容搜尋。輸入搜尋條件後，多個儲存位置可同時比較。這個原型使用二硫化鉬快閃記憶體，並以銻接觸電極改善電子流通，讓元件適合搜尋操作。",
            "refs": [
              {
                "sourceId": "chips-paper-preview",
                "locator": "Abstract"
              },
              {
                "sourceId": "chips-hku-news",
                "locator": "正文CAM並行比較及Sb接觸電極段落"
              }
            ]
          },
          "steps": [
            {
              "title": "製作儲存元件",
              "text": "使用二硫化鉬快閃記憶體，配合銻接觸電極，製作可儲存資料的元件。",
              "refs": [
                {
                  "sourceId": "chips-paper-preview",
                  "locator": "Abstract；Contributions"
                }
              ]
            },
            {
              "title": "輸入搜尋條件",
              "text": "搜尋條件交給記憶體陣列，與多個位置的儲存資料同時比較。",
              "refs": [
                {
                  "sourceId": "chips-hku-news",
                  "locator": "正文Content-addressable memories段落"
                }
              ]
            },
            {
              "title": "讀取比較結果",
              "text": "陣列在儲存位置完成搜尋操作，減少把原始資料送到外部處理器逐項比較的需要。",
              "refs": [
                {
                  "sourceId": "chips-paper-preview",
                  "locator": "Abstract；Fig.4及Fig.5標題"
                },
                {
                  "sourceId": "chips-hku-news",
                  "locator": "正文第2至4段"
                }
              ]
            },
            {
              "title": "按相似程度分類",
              "text": "研究以類比漢明距離計算配合近鄰分類，示範如何把搜尋結果用於機器學習。",
              "refs": [
                {
                  "sourceId": "chips-paper-preview",
                  "locator": "Abstract；Fig.6標題"
                }
              ]
            }
          ],
          "application": {
            "text": "已完成的是陣列搜尋與機器學習分類示範。團隊提出探索大型AI搜尋及在裝置上處理資料，這些是研發方向，所查來源未證明已裝進商用手機或大型AI服務。",
            "refs": [
              {
                "sourceId": "chips-paper-preview",
                "locator": "Abstract；Fig.6"
              },
              {
                "sourceId": "chips-hku-news",
                "locator": "正文Professor LI引述及edge devices段落"
              }
            ]
          },
          "business": {
            "users": {
              "text": "可服務的方向是需要搜尋或相似程度比較的AI硬件研發者。原始來源描述研究用途及潛在應用，沒有披露付費客戶。",
              "refs": [
                {
                  "sourceId": "chips-paper-preview",
                  "locator": "Abstract"
                },
                {
                  "sourceId": "chips-hku-news",
                  "locator": "正文應用展望段落"
                }
              ]
            },
            "fundingModel": {
              "text": "論文列出香港研資局、ACCESS InnoHK中心、裘槎基金等研發支持。這些是研究資金；未披露晶片售價、授權收入或產品營收。",
              "refs": [
                {
                  "sourceId": "chips-paper-preview",
                  "locator": "Acknowledgements"
                }
              ]
            },
            "adoptionCosts": {
              "status": "not-disclosed",
              "text": "所查來源未披露可供採購的價格、量產成本或客戶整合費。大學確認封裝工程仍是大規模商業化的待解問題，因此不能用實驗元件的能耗推算整部電腦的成本。",
              "refs": [
                {
                  "sourceId": "chips-hku-news",
                  "locator": "正文最後應用段，packaging限制"
                },
                {
                  "sourceId": "chips-paper-preview",
                  "locator": "Abstract，陣列搜尋測量範圍"
                }
              ]
            }
          },
          "metrics": [
            {
              "label": "原型陣列的實體記憶體元件數",
              "value": 256,
              "unit": "個MoS2快閃記憶體元件",
              "period": "2025-12-15上線論文所報原型",
              "scope": "8×16類比內容定址記憶體陣列",
              "conditions": "實驗室研究陣列；邏輯記憶格與實體元件數不同。這個數量不是量產產能或客戶出貨量。",
              "status": "reported",
              "formula": null,
              "refs": [
                {
                  "sourceId": "chips-paper-preview",
                  "locator": "Abstract，8×16 array featuring 256 devices"
                }
              ]
            }
          ],
          "limits": [
            {
              "text": "可公開核對的是原論文摘要、作者資料、圖題及附加資料入口；完整主文屬訂閱內容。本頁沒有把新聞中的CPU比較倍數寫成整部電腦的效能。",
              "refs": [
                {
                  "sourceId": "chips-paper-preview",
                  "locator": "Abstract、Access options、Fig.5標題"
                },
                {
                  "sourceId": "chips-hku-news",
                  "locator": "正文analogue Hamming distance比較段落"
                }
              ]
            },
            {
              "text": "元件及搜尋陣列的實驗結果不能證明整套AI系統已有相同比例的省電或加速。封裝與大規模商業化仍需工程驗證。",
              "refs": [
                {
                  "sourceId": "chips-paper-preview",
                  "locator": "Abstract，search per cell及array範圍"
                },
                {
                  "sourceId": "chips-hku-news",
                  "locator": "正文最後應用段"
                }
              ]
            }
          ],
          "checkedOn": "2026-10-22"
        }
      ],
      "background": []
    },
    {
      "id": "green-energy",
      "title": "綠色能源與環境",
      "introduction": "能源技術要分清實驗室元件與可長期使用的產品。這個案例看太陽能電池的材料接面，數字保留測試條件。",
      "industryCodes": [
        "C",
        "D",
        "M"
      ],
      "sources": [
        {
          "id": "energy-paper",
          "title": "Self-assembled 1D/3D heterojunction enables all-inorganic perovskite 4-terminal tandem solar cells with 21.54% certified efficiency",
          "publisher": "Nature Communications",
          "url": "https://www.nature.com/articles/s41467-026-72099-z",
          "type": "paper",
          "published": {
            "date": "2026-04-27",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        }
      ],
      "cases": [
        {
          "id": "perovskite-protective-interface",
          "title": "以分子接面改善鈣鈦礦太陽能電池",
          "tags": [
            "green-energy"
          ],
          "industryCodes": [
            "C",
            "D",
            "M"
          ],
          "summary": {
            "text": "合作團隊用 TTFS 分子處理太陽能電池表面，減少水分影響及電荷損失，再組合上下層電池。科大參與研究及光學分析。成果是實驗室元件，仍未證明香港量產或長期戶外使用。",
            "refs": [
              {
                "sourceId": "energy-paper",
                "locator": "Abstract；Author information、Contributions；Methods"
              }
            ]
          },
          "hkRole": {
            "kind": "hk-rd",
            "text": "論文列出科大共同作者。Yen-Hung Lin 參與構思及監督；Qingqing Zhang、Fion Sze Yan Yeung 及 Yen-Hung Lin 為發光及相關光學映射提供指導。研究亦有內地院校及機構參與。",
            "refs": [
              {
                "sourceId": "energy-paper",
                "locator": "Authors and Affiliations；Contributions"
              }
            ]
          },
          "stage": {
            "kind": "prototype",
            "asOf": "2026-04-27",
            "text": "已製作及測試太陽能電池元件，屬實驗室原型。論文未提供商業模組或香港戶外電站的運行證據。",
            "refs": [
              {
                "sourceId": "energy-paper",
                "locator": "Results；Methods，Device fabrication、Characterizations；Discussion"
              }
            ]
          },
          "progress": [
            {
              "date": "2026-04-27",
              "precision": "day",
              "kind": "prototype",
              "text": "論文公開已製作元件及四端疊層電池的認證測試成果；這是發表日期，實驗進行的日期未逐項公開。",
              "refs": [
                {
                  "sourceId": "energy-paper",
                  "locator": "Published；Abstract；Certification details for 4-terminal tandem cells"
                }
              ]
            }
          ],
          "principle": {
            "text": "表面缺陷會令電荷流失，水分亦可破壞材料。TTFS 在表面形成保護接面，同時減少缺陷並幫助電荷離開吸光層。",
            "refs": [
              {
                "sourceId": "energy-paper",
                "locator": "Abstract；Discussion"
              }
            ]
          },
          "steps": [
            {
              "title": "製作吸光層",
              "text": "研究先製作鈣鈦礦薄膜。",
              "refs": [
                {
                  "sourceId": "energy-paper",
                  "locator": "Methods，WBG CsPbI3−xBrx solar cells"
                }
              ]
            },
            {
              "title": "處理表面",
              "text": "塗上 TTFS 並加熱，形成表面異質接面。",
              "refs": [
                {
                  "sourceId": "energy-paper",
                  "locator": "Methods，WBG CsPbI3−xBrx solar cells"
                }
              ]
            },
            {
              "title": "保護與取出電荷",
              "text": "接面阻隔水分、處理缺陷，改善電荷提取。",
              "refs": [
                {
                  "sourceId": "energy-paper",
                  "locator": "Discussion"
                }
              ]
            },
            {
              "title": "疊合兩個子電池",
              "text": "半透明上層透過部分光線給下層。四端設計讓兩個子電池獨立取電。",
              "refs": [
                {
                  "sourceId": "energy-paper",
                  "locator": "Introduction，4-T architecture；Certification details for 4-terminal tandem cells"
                }
              ]
            }
          ],
          "application": {
            "text": "現階段用途是下一代太陽能元件研發，沒有在本論文證實商業客戶或香港大規模部署。",
            "refs": [
              {
                "sourceId": "energy-paper",
                "locator": "Discussion；Methods"
              }
            ]
          },
          "business": {
            "users": {
              "text": "目前是光伏材料及元件研究團隊的技術成果，未公布採購客戶。",
              "refs": [
                {
                  "sourceId": "energy-paper",
                  "locator": "Authors and Affiliations；Discussion"
                }
              ]
            },
            "fundingModel": {
              "text": "論文列出國家自然科學基金等研究資助。沒有公開本技術的產品售價或授權收入。",
              "refs": [
                {
                  "sourceId": "energy-paper",
                  "locator": "Acknowledgements；全文，未列產品收入"
                }
              ]
            },
            "adoptionCosts": {
              "status": "not-disclosed",
              "text": "沒有量產或每瓦成本報價。製程包括塗膜、熱處理及電極沉積，實驗室成功仍需另證量產可行性。",
              "refs": [
                {
                  "sourceId": "energy-paper",
                  "locator": "Methods，Device fabrication；Discussion"
                }
              ]
            }
          },
          "metrics": [
            {
              "label": "四端疊層認證轉換效率",
              "value": 21.54,
              "unit": "%",
              "period": "2026-04-27發表",
              "scope": "本論文全無機四端疊層元件",
              "conditions": "按認證方法，把上層及經上層濾光後的下層各自認證效率相加。屬實驗室光照測試，不是電站全年發電效率。",
              "status": "reported",
              "formula": null,
              "refs": [
                {
                  "sourceId": "energy-paper",
                  "locator": "Abstract；Table 1；Certification details for 4-terminal tandem cells"
                }
              ]
            },
            {
              "label": "上層元件的 T80",
              "value": 1210,
              "unit": "小時",
              "period": "2026-04-27發表",
              "scope": "TTFS 處理的半透明寬帶隙上層元件",
              "conditions": "未封裝，65°C、約10%相對濕度、連續一個太陽光照及最大功率點追蹤，效率降至初值80%。不是整組疊層或戶外壽命。",
              "status": "reported",
              "formula": null,
              "refs": [
                {
                  "sourceId": "energy-paper",
                  "locator": "Enhancing the device stability by hydrophobic passivation；Fig.5g；Characterizations"
                }
              ]
            }
          ],
          "limits": [
            {
              "text": "上層耐久度不能當成整組壽命。論文另測下層元件，85°C測試的 T50 為190小時，仍需封裝及接面改良。",
              "refs": [
                {
                  "sourceId": "energy-paper",
                  "locator": "Enhancing the device stability by hydrophobic passivation，Supplementary Fig.24 說明"
                }
              ]
            },
            {
              "text": "效率、耐久度是指定元件及實驗條件的結果，不能直接換算香港戶外發電量或多年保養期。",
              "refs": [
                {
                  "sourceId": "energy-paper",
                  "locator": "Methods，Device fabrication、Characterizations；Fig.5"
                }
              ]
            }
          ],
          "checkedOn": "2026-10-22"
        }
      ],
      "background": []
    },
    {
      "id": "mobility-low-altitude",
      "title": "智慧交通與低空技術",
      "introduction": "自動駕駛在地面處理路況，低空技術則用無人機收集資料或運送物品。香港的實例要連同路線、場地及後備安排一起看，試行並不等於全港服務。",
      "industryCodes": [
        "H",
        "F",
        "M",
        "O"
      ],
      "sources": [
        {
          "id": "td-av-2026",
          "title": "TD's Autonomous Vehicle Applications Promotion Working Group visits trial in Tung Chung, North Lantau (with photos/video)",
          "publisher": "運輸署",
          "url": "https://www.info.gov.hk/gia/general/202610/10/P2026100900583p.htm",
          "type": "government",
          "published": {
            "date": "2026-10-10",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        },
        {
          "id": "td-av-july-2026",
          "title": "TD approves expansion of autonomous vehicles trial in North Lantau and commencement of driverless trial on Airport Island (with photos/video)",
          "publisher": "運輸署",
          "url": "https://www.info.gov.hk/gia/general/202607/23/P2026072300217p.htm",
          "type": "government",
          "published": {
            "date": "2026-07-23",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        },
        {
          "id": "td-av-feb-2026",
          "title": "TD approves pilot licence for autonomous vehicles in cross-district trial connecting Airport Island in North Lantau with Tung Chung Town Centre and Sunny Bay",
          "publisher": "運輸署",
          "url": "https://www.info.gov.hk/gia/general/202602/23/P2026022300418p.htm",
          "type": "government",
          "published": {
            "date": "2026-02-23",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        },
        {
          "id": "td-av-code-2024",
          "title": "Code of Practice for Trial and Pilot Use of Autonomous Vehicles",
          "publisher": "運輸署",
          "url": "https://www.td.gov.hk/filemanager/en/content_5198/CoP%20for%20AV%20Trial%20and%20Pilot%20Use%20March%202024_ENG.pdf",
          "type": "government",
          "published": {
            "date": "2024-03",
            "precision": "month"
          },
          "checkedOn": "2026-10-22"
        },
        {
          "id": "td-av-trials",
          "title": "Trials of Autonomous Vehicles",
          "publisher": "運輸署",
          "url": "https://www.td.gov.hk/en/public_services/taoav/index.html",
          "type": "government",
          "published": null,
          "checkedOn": "2026-10-22",
          "publicationDateNote": "動態專題頁沒有獨立發布日期。牌照有效期不是頁面發布日期。"
        },
        {
          "id": "smart-eye-2025",
          "title": "New horizons in smart construction",
          "publisher": "政府新聞處，發展局受訪說明",
          "url": "https://www.news.gov.hk/eng/2025/08/20250808/20250808_145256_786.html",
          "type": "government",
          "published": {
            "date": "2025-08-10",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        },
        {
          "id": "tlb-drone-reply-2026",
          "title": "LCQ21: Progress of promoting development of low-altitude economy",
          "publisher": "運輸及物流局",
          "url": "https://www.tlb.gov.hk/eng/legislative/transport/replies/2026/20260624a.html",
          "type": "government",
          "published": {
            "date": "2026-06-24",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        }
      ],
      "cases": [
        {
          "id": "north-lantau-autonomous-trial",
          "title": "北大嶼山自動駕駛與遙距後備",
          "tags": [
            "mobility-low-altitude",
            "ai-data"
          ],
          "industryCodes": [
            "H"
          ],
          "summary": {
            "text": "北大嶼山試驗在2026年擴至東涌及欣澳。機場島於7月獲准以遙距後備取代車內後備人員進行無人駕駛測試；東涌及欣澳則仍把車內與遙距後備並用。這是按指定路線和條件試行，沒有證明全港無人駕駛收費服務已推出。",
            "refs": [
              {
                "sourceId": "td-av-feb-2026",
                "locator": "擴展措施第（1）至（3）項"
              },
              {
                "sourceId": "td-av-july-2026",
                "locator": "正文第1至3段，機場島無車內後備操作員測試及東涌／欣澳雙重保障"
              },
              {
                "sourceId": "td-av-2026",
                "locator": "正文第2至3段，2026年2月擴線及7月底引入遠程後備操作員的說明"
              }
            ]
          },
          "hkRole": {
            "kind": "hk-application",
            "text": "運輸署列出的北大嶼山先導牌照持有人為Baidu Apollo International Limited。香港證據是本地道路試行及監管安排，不是香港研發整套自動駕駛系統的證明。",
            "refs": [
              {
                "sourceId": "td-av-trials",
                "locator": "新監管制度已發出先導牌照表，Baidu Apollo International Limited，North Lantau列及表下注解"
              }
            ]
          },
          "stage": {
            "kind": "trial",
            "asOf": "2026-10-10",
            "text": "指定路線試行持續進行。機場島獲准全遙距後備測試；10月實地更新確認東涌仍有車內及遙距後備人員，兩者不可混為同一條件。",
            "refs": [
              {
                "sourceId": "td-av-july-2026",
                "locator": "正文第1至3段，機場島無車內後備操作員測試及東涌／欣澳雙重保障"
              },
              {
                "sourceId": "td-av-2026",
                "locator": "正文第2至3段，2026年2月擴線及7月底引入遠程後備操作員的說明"
              }
            ]
          },
          "progress": [
            {
              "date": "2026-02-23",
              "precision": "day",
              "kind": "trial",
              "text": "運輸署批准北大嶼山跨區試驗擴至東涌市中心及欣澳，並提高同時試行車輛上限。",
              "refs": [
                {
                  "sourceId": "td-av-feb-2026",
                  "locator": "擴展措施第（1）至（3）項"
                }
              ]
            },
            {
              "date": "2026-07-23",
              "precision": "day",
              "kind": "trial",
              "text": "運輸署批准機場島開始沒有車內後備操作員的全遙距測試；東涌及欣澳增加遙距保障但保留車內人員。這是批准條件的更新，不當成所有路線已完成測試。",
              "refs": [
                {
                  "sourceId": "td-av-july-2026",
                  "locator": "正文第1至3段，機場島無車內後備操作員測試及東涌／欣澳雙重保障"
                }
              ]
            },
            {
              "date": "2026-10-10",
              "precision": "day",
              "kind": "trial",
              "text": "工作組在東涌實地乘坐試驗車，運輸署確認遙距及車內後備並行以收集數據。參觀日期用作運作狀態核證，不當成技術發明日。",
              "refs": [
                {
                  "sourceId": "td-av-2026",
                  "locator": "正文第2至3段，2026年2月擴線及7月底引入遠程後備操作員的說明"
                }
              ]
            }
          ],
          "principle": {
            "text": "自動駕駛系統在指定運作範圍內控制車輛，感測設備及控制系統應對路況。後備操作員監察環境，在需要時接管。法規指引說明安全要求，沒有公開本案例的完整感知模型。",
            "refs": [
              {
                "sourceId": "td-av-code-2024",
                "locator": "第5.1.1節，印刷頁30至31，PDF第35至36頁；第4.7.4節，印刷頁28，PDF第33頁"
              }
            ]
          },
          "steps": [
            {
              "title": "限定路線和條件",
              "text": "先導計劃須界定系統的運作範圍，運輸署按功能、標準及路試情況審批。",
              "refs": [
                {
                  "sourceId": "td-av-feb-2026",
                  "locator": "正文末段，以The TD welcomes interested organisations開首的先導牌照審批要求"
                }
              ]
            },
            {
              "title": "系統控制行車",
              "text": "系統在自動模式控制車輛，車輛須具備應對道路使用者、危險及切換人工控制的能力。這是原理示意，不是特定公司的演算法圖。",
              "refs": [
                {
                  "sourceId": "td-av-code-2024",
                  "locator": "第5.1.1節，印刷頁30至31，PDF第35至36頁；第4.7.4節，印刷頁28，PDF第33頁"
                }
              ]
            },
            {
              "title": "後備人員監察",
              "text": "遙距控制中心監察車輛；機場島與東涌、欣澳的車內後備安排不同。",
              "refs": [
                {
                  "sourceId": "td-av-july-2026",
                  "locator": "正文第1至3段，機場島無車內後備操作員測試及東涌／欣澳雙重保障"
                },
                {
                  "sourceId": "td-av-2026",
                  "locator": "正文第2至3段，2026年2月擴線及7月底引入遠程後備操作員的說明"
                }
              ]
            },
            {
              "title": "需要時接管",
              "text": "操作員須持續監察運作和環境，當系統不適合自動駕駛或發出警告時接管。",
              "refs": [
                {
                  "sourceId": "td-av-code-2024",
                  "locator": "第5.1.1節，印刷頁30至31，PDF第35至36頁；第4.7.4節，印刷頁28，PDF第33頁"
                }
              ]
            }
          ],
          "application": {
            "text": "本地用途是機場島及東涌、欣澳指定道路的載客試驗，並收集遙距操作及道路運作數據。",
            "refs": [
              {
                "sourceId": "td-av-feb-2026",
                "locator": "擴展措施第（1）至（3）項"
              },
              {
                "sourceId": "td-av-2026",
                "locator": "正文第2至3段，2026年2月擴線及7月底引入遠程後備操作員的說明"
              }
            ]
          },
          "business": {
            "users": {
              "text": "當前直接採用者是先導牌照持有人及參與試乘的人員。牌照有效不等於車輛每天營運，運輸署亦提醒實際路試須待準備完成。",
              "refs": [
                {
                  "sourceId": "td-av-trials",
                  "locator": "新監管制度已發出先導牌照表，Baidu Apollo International Limited，North Lantau列及表下注解"
                },
                {
                  "sourceId": "td-av-2026",
                  "locator": "正文第2至3段，2026年2月擴線及7月底引入遠程後備操作員的說明"
                }
              ]
            },
            "fundingModel": {
              "text": "現有資料交代試驗及先導牌照，沒有披露本地車費、收入分成或經營收入，因此不能當作香港商業營運收入案例。",
              "refs": [
                {
                  "sourceId": "td-av-feb-2026",
                  "locator": "擴展措施第（1）至（3）項"
                },
                {
                  "sourceId": "td-av-july-2026",
                  "locator": "正文第1至3段，機場島無車內後備操作員測試及東涌／欣澳雙重保障"
                }
              ]
            },
            "adoptionCosts": {
              "status": "not-disclosed",
              "text": "沒有公布本試驗的總投資或每程成本。運輸署指引要求保險、操作員訓練及遙距控制設施，採用負擔不只是一部車。",
              "refs": [
                {
                  "sourceId": "td-av-code-2024",
                  "locator": "第3.11節保險，PDF第25頁；第4.2及4.3節訓練與考試，PDF第29至31頁；第6.3節控制中心，PDF第45至46頁"
                }
              ]
            }
          },
          "metrics": [
            {
              "label": "批准擴展路線最長",
              "value": 43.2,
              "unit": "公里",
              "period": "2026年2月23日擴線批准",
              "scope": "北大嶼山機場島連接東涌市中心及欣澳的試驗路線",
              "conditions": "這是批准路線範圍上限，不是每程距離、累計行駛里程或全港覆蓋率。",
              "status": "reported",
              "formula": null,
              "refs": [
                {
                  "sourceId": "td-av-feb-2026",
                  "locator": "擴展措施第（1）至（3）項"
                }
              ]
            }
          ],
          "limits": [
            {
              "text": "機場島獲准無車內後備測試，東涌及欣澳仍保留車內與遙距人員。不能把某一路線的批准推到全港。",
              "refs": [
                {
                  "sourceId": "td-av-july-2026",
                  "locator": "正文第1至3段，機場島無車內後備操作員測試及東涌／欣澳雙重保障"
                },
                {
                  "sourceId": "td-av-2026",
                  "locator": "正文第2至3段，2026年2月擴線及7月底引入遠程後備操作員的說明"
                }
              ]
            },
            {
              "text": "工作組指某次試乘平穩，並不等於已公布可比較的事故率、安全優於人類的結果或全氣候能力。",
              "refs": [
                {
                  "sourceId": "td-av-2026",
                  "locator": "正文第2至3段，2026年2月擴線及7月底引入遠程後備操作員的說明"
                }
              ]
            },
            {
              "text": "本地收費、商業回本及每程成本未披露。遙距後備仍是人員參與的安全安排。",
              "refs": [
                {
                  "sourceId": "td-av-feb-2026",
                  "locator": "擴展措施第（1）至（3）項"
                },
                {
                  "sourceId": "td-av-july-2026",
                  "locator": "正文第1至3段，機場島無車內後備操作員測試及東涌／欣澳雙重保障"
                }
              ]
            }
          ],
          "checkedOn": "2026-10-22"
        },
        {
          "id": "smart-eye-drone-survey",
          "title": "無人機巡查與SmartEye工程分析",
          "tags": [
            "mobility-low-altitude",
            "space-geospatial"
          ],
          "industryCodes": [
            "F",
            "M",
            "O"
          ],
          "summary": {
            "text": "發展局在女婆山工程現場試用無人機收集影像與空間資料。按預設航線巡查，再由自行開發的SmartEye比較不同時間資料，協助量度土石方、斜坡及建築物狀況。自動換電機庫支援重複出勤，但這仍是指定場地的沙盒試點。",
            "refs": [
              {
                "sourceId": "smart-eye-2025",
                "locator": "正文首兩段及High payload、Enhanced efficiency、Extensive applicability三節"
              }
            ]
          },
          "hkRole": {
            "kind": "mixed",
            "text": "政府明確稱SmartEye為發展局自行開發的平台，並記錄女婆山工程現場的實際試點。香港研發貢獻是分析平台，來源沒有證明整部無人機或機庫由香港原創。",
            "refs": [
              {
                "sourceId": "smart-eye-2025",
                "locator": "正文首兩段及High payload、Enhanced efficiency、Extensive applicability三節"
              }
            ]
          },
          "stage": {
            "kind": "trial",
            "asOf": "2025-08-10",
            "text": "已在女婆山工程現場用作進度及安全監察，是低空經濟監管沙盒試點。報道另述將推至其他場地，不能把未來安排全部當作已完成。",
            "refs": [
              {
                "sourceId": "smart-eye-2025",
                "locator": "正文首兩段及High payload、Enhanced efficiency、Extensive applicability三節"
              }
            ]
          },
          "progress": [
            {
              "date": "2025",
              "precision": "year",
              "kind": "trial",
              "text": "2025年首批低空經濟沙盒中，女婆山現場已部署無人機巡查及SmartEye分析。8月10日的報道確認現場試用；首次飛行日未公開，因此只列試點年份，不把新聞日期當成首飛或發明日。",
              "refs": [
                {
                  "sourceId": "smart-eye-2025",
                  "locator": "正文首兩段及High payload、Enhanced efficiency、Extensive applicability三節"
                },
                {
                  "sourceId": "tlb-drone-reply-2026",
                  "locator": "答覆第（1）部分，首批監管沙盒於2025年3月公布及試點進度"
                }
              ]
            }
          ],
          "principle": {
            "text": "無人機搭載影像及測量設備，定時沿預設航線收集資料。SmartEye比較不同時間的資料，估算土石體積、坡度及結構垂直度；機庫自動換電，減少等待充電的中斷。",
            "refs": [
              {
                "sourceId": "smart-eye-2025",
                "locator": "正文首兩段及High payload、Enhanced efficiency、Extensive applicability三節"
              }
            ]
          },
          "steps": [
            {
              "title": "定時沿航線巡查",
              "text": "試點使用預設飛行路徑及時間，並在核准沙盒場景測試超視距自動操作。",
              "refs": [
                {
                  "sourceId": "smart-eye-2025",
                  "locator": "正文首兩段及High payload、Enhanced efficiency、Extensive applicability三節"
                }
              ]
            },
            {
              "title": "收集空間及熱影像",
              "text": "無人機可搭載激光掃描器及紅外線熱像設備，記錄工程現場資料。",
              "refs": [
                {
                  "sourceId": "smart-eye-2025",
                  "locator": "正文首兩段及High payload、Enhanced efficiency、Extensive applicability三節"
                }
              ]
            },
            {
              "title": "比較工程變化",
              "text": "SmartEye比較不同時間資料，協助量度土石量、坡度和結構垂直度，供人員跟進。",
              "refs": [
                {
                  "sourceId": "smart-eye-2025",
                  "locator": "正文首兩段及High payload、Enhanced efficiency、Extensive applicability三節"
                }
              ]
            },
            {
              "title": "返回機庫換電",
              "text": "機庫自動更換電池，支援後續巡查任務。這不代表無需人員管理。",
              "refs": [
                {
                  "sourceId": "smart-eye-2025",
                  "locator": "正文首兩段及High payload、Enhanced efficiency、Extensive applicability三節"
                }
              ]
            }
          ],
          "application": {
            "text": "已確認的現場是女婆山把污水處理設施遷入岩洞的工程，用於遠程監察進度及安全。其他工地、資產管理及緊急事故用途在報道中部分仍屬擴展目標。",
            "refs": [
              {
                "sourceId": "smart-eye-2025",
                "locator": "正文首兩段及High payload、Enhanced efficiency、Extensive applicability三節"
              }
            ]
          },
          "business": {
            "users": {
              "text": "採用者是發展局及工程部門，女婆山項目管理人員是本案例使用者。不是面向乘客的空中的士服務。",
              "refs": [
                {
                  "sourceId": "smart-eye-2025",
                  "locator": "正文首兩段及High payload、Enhanced efficiency、Extensive applicability三節"
                }
              ]
            },
            "fundingModel": {
              "text": "這是政府工程管理試點。原始報道未交代承辦商收費、軟件授權方式或項目收入，不能推算私營服務市場規模。",
              "refs": [
                {
                  "sourceId": "smart-eye-2025",
                  "locator": "正文首兩段及High payload、Enhanced efficiency、Extensive applicability三節"
                }
              ]
            },
            "adoptionCosts": {
              "status": "not-disclosed",
              "text": "報道列出無人機、測量設備、分析平台及換電機庫，但沒有公開整合費、每次飛行成本或節省金額。",
              "refs": [
                {
                  "sourceId": "smart-eye-2025",
                  "locator": "正文首兩段及High payload、Enhanced efficiency、Extensive applicability三節"
                }
              ]
            }
          },
          "metrics": [
            {
              "label": "報道所列最大載荷",
              "value": 6,
              "unit": "公斤",
              "period": "2025年8月10日報道",
              "scope": "發展局該沙盒試點所用無人機",
              "conditions": "設備負載上限，並非每次實際載重。來源未列載荷、天氣與續航的聯合實測條件。",
              "status": "reported",
              "formula": null,
              "refs": [
                {
                  "sourceId": "smart-eye-2025",
                  "locator": "正文首兩段及High payload、Enhanced efficiency、Extensive applicability三節"
                }
              ]
            },
            {
              "label": "機庫自動換電約需",
              "value": 1,
              "unit": "分鐘",
              "period": "2025年8月10日報道",
              "scope": "該試點的自動換電機庫",
              "conditions": "政府受訪者所述約數，沒有公開重複測試樣本、故障率或全氣候結果，不等於整個巡查任務時間。",
              "status": "reported",
              "formula": null,
              "refs": [
                {
                  "sourceId": "smart-eye-2025",
                  "locator": "正文首兩段及High payload、Enhanced efficiency、Extensive applicability三節"
                }
              ]
            }
          ],
          "limits": [
            {
              "text": "超視距及一人管理多機是在指定沙盒場景下的能力，不能當作香港所有空域均可自由飛行。",
              "refs": [
                {
                  "sourceId": "smart-eye-2025",
                  "locator": "正文首兩段及High payload、Enhanced efficiency、Extensive applicability三節"
                }
              ]
            },
            {
              "text": "報道沒有SmartEye量測誤差、相對人工的對照測試或完整成本資料，因此不量化省人或省錢成效。",
              "refs": [
                {
                  "sourceId": "smart-eye-2025",
                  "locator": "正文首兩段及High payload、Enhanced efficiency、Extensive applicability三節"
                }
              ]
            },
            {
              "text": "報道的其他試點場地屬推行安排，本頁只把女婆山寫為已確認的現場使用。",
              "refs": [
                {
                  "sourceId": "smart-eye-2025",
                  "locator": "正文首兩段及High payload、Enhanced efficiency、Extensive applicability三節"
                }
              ]
            }
          ],
          "checkedOn": "2026-10-22"
        }
      ],
      "background": []
    },
    {
      "id": "communications-iot",
      "title": "通訊與物聯網",
      "introduction": "通訊把資料從一個裝置送到另一個裝置，物聯網再把感測器、設備和系統接起來。這裏選取香港參與的原子接收器研究，說明未來接收硬件的探索，與現有商用網絡分開理解。",
      "industryCodes": [
        "J",
        "C",
        "M"
      ],
      "sources": [
        {
          "id": "communications-paper-v3",
          "title": "Rydberg Atomic Receivers for Multi-Band Communications and Sensing",
          "publisher": "香港大學及北京理工大學研究團隊，arXiv預印本v3",
          "url": "https://arxiv.org/html/2505.24168v3",
          "type": "paper",
          "published": {
            "date": "2026-01-19",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        },
        {
          "id": "communications-metadata",
          "title": "[2505.24168] Rydberg Atomic Receivers for Multi-Band Communications and Sensing",
          "publisher": "arXiv",
          "url": "https://arxiv.org/abs/2505.24168",
          "type": "paper",
          "published": {
            "date": "2025-05-30",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        }
      ],
      "cases": [
        {
          "id": "hku-multiband-atomic-receiver",
          "title": "多頻段里德堡原子接收器",
          "tags": [
            "communications-iot",
            "quantum"
          ],
          "industryCodes": [
            "J",
            "C",
            "M"
          ],
          "summary": {
            "text": "一般無線接收器使用天線及電子電路。這項研究使用受激發的原子感受無線電場，再把光線變化讀成電訊號。港大與北京理工團隊研究如何讓同一接收器兼顧多個頻段，並用實驗平台驗證不同頻段之間的靈敏度分配。實物實驗只驗證部分物理機制，通訊及感測整體效能主要來自模擬。這並非已在香港部署的下一代流動網絡。",
            "refs": [
              {
                "sourceId": "communications-paper-v3",
                "locator": "作者機構註腳；II System Model；VI導言及VI-A"
              }
            ]
          },
          "hkRole": {
            "kind": "hk-rd",
            "text": "原論文列出港大的Mingyao Cui、Qunsong Zeng、Zhanwei Wang和Kaibin Huang，以及北京理工大學三名合作者。港大研究者參與此多頻段接收模型及驗證研究，通訊作者包括港大Qunsong Zeng及Kaibin Huang。論文未逐機構交代實驗分工或平台所在城市，不能把整個實驗都稱為在香港完成。",
            "refs": [
              {
                "sourceId": "communications-paper-v3",
                "locator": "標題下作者及機構註腳；Abstract；VI Validation Results"
              }
            ]
          },
          "stage": {
            "kind": "prototype",
            "text": "v3有實體雙頻段原理驗證平台，用於檢查靈敏度分配機制。訊號模型及整體通訊感測表現另以數值模擬驗證，未有香港場外試用或商業服務證據。",
            "asOf": "2026-10-22",
            "refs": [
              {
                "sourceId": "communications-paper-v3",
                "locator": "VI導言；VI-A Experimental Validation；VI-B及VI-C標題"
              }
            ]
          },
          "progress": [
            {
              "date": "2025-05-30",
              "precision": "day",
              "kind": "research",
              "text": "團隊首次提交多頻段接收器預印本，提出可分析接收反應及分配靈敏度的理論模型。這是公開研究紀錄日期，實際實驗完成日未披露。",
              "refs": [
                {
                  "sourceId": "communications-metadata",
                  "locator": "Submission history，v1；Abstract"
                }
              ]
            },
            {
              "date": "2026-01-19",
              "precision": "day",
              "kind": "prototype",
              "text": "v3修訂版加入實體雙頻段平台及量測，驗證頻段間靈敏度分配的關係。這是報告這項實驗的版本日期，並非聲稱當天才完成實驗。",
              "refs": [
                {
                  "sourceId": "communications-metadata",
                  "locator": "Submission history，v3"
                },
                {
                  "sourceId": "communications-paper-v3",
                  "locator": "VI-A1 Hardware Platform及VI-A2 Experiment results"
                }
              ]
            }
          ],
          "principle": {
            "text": "雷射先把蒸氣盒中的原子推到容易受無線電場影響的狀態。不同頻率的電場影響不同能階，改變穿過原子的探測光。光偵測器把光變化轉為電訊號。研究模型分析如何調整參考訊號，把有限的靈敏度分配給不同頻段。",
            "refs": [
              {
                "sourceId": "communications-paper-v3",
                "locator": "II System Model；III-B Transfer Function；IV-A及VI-A1"
              }
            ]
          },
          "steps": [
            {
              "title": "用光準備原子",
              "text": "探測雷射和耦合雷射穿過銫原子蒸氣盒，使原子進入研究所需的能階狀態。",
              "refs": [
                {
                  "sourceId": "communications-paper-v3",
                  "locator": "II-B；VI-A1 Hardware Platform"
                }
              ]
            },
            {
              "title": "接收多頻段電場",
              "text": "不同頻段的訊號與較強的參考訊號作用於原子，產生可讀取的較低頻率變化。",
              "refs": [
                {
                  "sourceId": "communications-paper-v3",
                  "locator": "II-A；III-B1 Transfer function at the IF band"
                }
              ]
            },
            {
              "title": "把光變成電訊號",
              "text": "原子的反應改變探測光，光偵測器把透過光轉為電壓，實驗以示波器記錄。",
              "refs": [
                {
                  "sourceId": "communications-paper-v3",
                  "locator": "VI-A1 Hardware Platform，photodetector及oscilloscope段落"
                }
              ]
            },
            {
              "title": "分配頻段靈敏度",
              "text": "模型把整體增益與各頻段分配分開處理。提高某頻段的分配會影響其他頻段，實驗檢查這項關係，模擬再評估通訊及感測用途。",
              "refs": [
                {
                  "sourceId": "communications-paper-v3",
                  "locator": "IV-A，Remark 3；VI-A2；VI-C"
                }
              ]
            }
          ],
          "application": {
            "text": "作者研究的用途是多頻段無線通訊及位移感測。當中的實物結果是雙頻段原理驗證，整體傳輸及感測表現有模擬條件，所查來源沒有公布電訊商或物聯網營運者的實地採用。",
            "refs": [
              {
                "sourceId": "communications-paper-v3",
                "locator": "V Applications；VI-A及VI-C"
              }
            ]
          },
          "business": {
            "users": {
              "text": "潛在使用者是研究新型無線接收與感測硬件的團隊。通訊、感測用途由作者提出，尚未披露付費客戶。",
              "refs": [
                {
                  "sourceId": "communications-paper-v3",
                  "locator": "V Applications；VII Conclusions and Future Directions"
                }
              ]
            },
            "fundingModel": {
              "text": "這是大學合作的研究成果。所查論文及版本資料未披露本系統的商業售價、授權收入、產品營收或可核實的專案資助金額，不能推算商業回報。",
              "refs": [
                {
                  "sourceId": "communications-paper-v3",
                  "locator": "作者機構註腳及全文"
                },
                {
                  "sourceId": "communications-metadata",
                  "locator": "Abstract及Comments"
                }
              ]
            },
            "adoptionCosts": {
              "status": "not-disclosed",
              "text": "未披露整套採用成本。實驗需要銫原子蒸氣盒、雷射、參考訊號源、光偵測器及示波器，並在微波暗室量測。這些是已描述的實驗條件，沒有公開價格可相加成部署報價。",
              "refs": [
                {
                  "sourceId": "communications-paper-v3",
                  "locator": "VI-A1 Hardware Platform"
                }
              ]
            }
          },
          "metrics": [
            {
              "label": "實體原理驗證的頻段數",
              "value": 2,
              "unit": "個非連續頻段",
              "period": "2026-01-19版論文所報實驗",
              "scope": "銫-133原子接收器雙頻段平台",
              "conditions": "頻率為3.212 GHz及30.618 GHz；在微波暗室內量度，發射天線距蒸氣盒20厘米。結果驗證靈敏度分配機制，不代表整套多頻段商用網絡通過場測。",
              "status": "reported",
              "formula": null,
              "refs": [
                {
                  "sourceId": "communications-paper-v3",
                  "locator": "VI-A1 Hardware Platform；VI-A2 Experiment results"
                }
              ]
            }
          ],
          "limits": [
            {
              "text": "實驗只驗證雙頻段的靈敏度分配機制。論文的其他頻段數量、傳輸效能和位移感測表現包含數值模擬，不能全部稱為實測。",
              "refs": [
                {
                  "sourceId": "communications-paper-v3",
                  "locator": "VI導言；VI-A、VI-B及VI-C"
                }
              ]
            },
            {
              "text": "模型未納入所有實作噪聲，例如雷射強度、光偵測器電噪聲及參考源相位噪聲。任意偏振及多天線整合亦列為後續研究，會影響場外應用。",
              "refs": [
                {
                  "sourceId": "communications-paper-v3",
                  "locator": "III-C Multi-Band Noise Characterization末段；VII Conclusions and Future Directions"
                }
              ]
            },
            {
              "text": "本頁技術細節取自可讀全文的arXiv v3。這份版本註明提交待刊，實驗日期本身沒有列出，本頁保留公開版本日期，不猜測實驗日。",
              "refs": [
                {
                  "sourceId": "communications-metadata",
                  "locator": "Comments及Submission history"
                }
              ]
            }
          ],
          "checkedOn": "2026-10-22"
        }
      ],
      "background": []
    },
    {
      "id": "security-privacy",
      "title": "網絡安全與私隱",
      "introduction": "AI可以協助找系統漏洞，也可能成為需要檢查的應用。香港已有把AI和網絡安全專才一起用於機構檢測的服務；參與數字不能當作AI單獨成效。",
      "industryCodes": [
        "J",
        "M"
      ],
      "sources": [
        {
          "id": "legco-security-2025",
          "title": "Panel on Information Technology and Broadcasting: Work Related to Safeguarding Information Security",
          "publisher": "創新科技及工業局、數字政策辦公室，立法會文件",
          "url": "https://www.legco.gov.hk/yr2025/english/panels/itb/papers/itb20251013cb2-1860-1-e.pdf",
          "type": "government",
          "published": {
            "date": "2025-10",
            "precision": "month"
          },
          "checkedOn": "2026-10-22"
        },
        {
          "id": "police-bughunt-2025",
          "title": "「狩網運動2025」圓滿結束",
          "publisher": "香港警務處《警聲》第1291期",
          "url": "https://www.police.gov.hk/offbeat/1291/chi/9006.html",
          "type": "government",
          "published": {
            "date": "2025-10-22",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        }
      ],
      "cases": [
        {
          "id": "ai-assisted-bug-hunting",
          "title": "AI協助漏洞檢測與AI應用安全審查",
          "tags": [
            "security-privacy",
            "ai-data"
          ],
          "industryCodes": [
            "J",
            "M"
          ],
          "summary": {
            "text": "2025年狩網運動把AI技術與網絡安全專才結合，為香港機構檢查系統漏洞，亦審查它們的AI應用。參與者獲檢測報告及專業建議，再跟進修補。這是已完成的服務個案，不能解讀成AI能自動找出所有漏洞。",
            "refs": [
              {
                "sourceId": "legco-security-2025",
                "locator": "印刷頁6，PDF第6頁，Bug Hunting Campaign段"
              },
              {
                "sourceId": "police-bughunt-2025",
                "locator": "「狩網運動2025」圓滿結束，正文第1至2段"
              }
            ]
          },
          "hkRole": {
            "kind": "hk-application",
            "text": "香港警務處、Cyberbay及私隱專員公署合作向本地機構提供檢測。資料確認香港應用，沒有公開AI模型或整套偵測系統的研發來源。",
            "refs": [
              {
                "sourceId": "legco-security-2025",
                "locator": "印刷頁6，PDF第6頁，Bug Hunting Campaign段"
              },
              {
                "sourceId": "police-bughunt-2025",
                "locator": "「狩網運動2025」圓滿結束，正文第1至2段"
              }
            ]
          },
          "stage": {
            "kind": "applied",
            "asOf": "2025-10-22",
            "text": "2025年6月至8月的服務已舉行，10月公布參與及漏洞結果。這是特定檢測服務已應用，不是保證機構之後不會受攻擊。",
            "refs": [
              {
                "sourceId": "legco-security-2025",
                "locator": "印刷頁6，PDF第6頁，Bug Hunting Campaign段"
              },
              {
                "sourceId": "police-bughunt-2025",
                "locator": "「狩網運動2025」圓滿結束，正文第1至2段"
              }
            ]
          },
          "progress": [
            {
              "date": "2025-06",
              "precision": "month",
              "kind": "applied",
              "text": "第三屆狩網運動於2025年6月展開，至8月期間利用AI協助漏洞測試及審查AI應用。來源提供月份範圍，未列逐間測試日期。",
              "refs": [
                {
                  "sourceId": "legco-security-2025",
                  "locator": "印刷頁6，PDF第6頁，Bug Hunting Campaign段"
                }
              ]
            }
          ],
          "principle": {
            "text": "把系統漏洞測試與專家檢查結合，並檢查AI應用自身的安全風險。輸出報告和一對一諮詢，讓機構按建議修補。主辦方沒有公開AI如何判斷漏洞，故不聲稱能全自動完成測試。",
            "refs": [
              {
                "sourceId": "legco-security-2025",
                "locator": "印刷頁6，PDF第6頁，Bug Hunting Campaign段"
              },
              {
                "sourceId": "police-bughunt-2025",
                "locator": "「狩網運動2025」圓滿結束，正文第1至2段"
              }
            ]
          },
          "steps": [
            {
              "title": "機構參與檢測",
              "text": "為參與計劃的企業及機構提供系統漏洞測試，服務亦涵蓋AI應用安全審查。",
              "refs": [
                {
                  "sourceId": "legco-security-2025",
                  "locator": "印刷頁6，PDF第6頁，Bug Hunting Campaign段"
                }
              ]
            },
            {
              "title": "AI配合安全專才",
              "text": "以AI技術及安全專才協作發現漏洞。已公布結果沒有拆分AI與人工各自發現多少。",
              "refs": [
                {
                  "sourceId": "police-bughunt-2025",
                  "locator": "「狩網運動2025」圓滿結束，正文第1至2段"
                }
              ]
            },
            {
              "title": "報告與修補跟進",
              "text": "機構獲得詳細安全報告及一對一諮詢，再按建議跟進修補。警方亦表揚積極修補的參與機構。",
              "refs": [
                {
                  "sourceId": "legco-security-2025",
                  "locator": "印刷頁6，PDF第6頁，Bug Hunting Campaign段"
                },
                {
                  "sourceId": "police-bughunt-2025",
                  "locator": "「狩網運動2025」圓滿結束，正文第1至2段"
                }
              ]
            }
          ],
          "application": {
            "text": "主要服務資源有限的中小企，也有其他機構參與。檢查對象包括企業系統和AI應用，目標是降低漏洞及資料外洩風險。",
            "refs": [
              {
                "sourceId": "legco-security-2025",
                "locator": "印刷頁6，PDF第6頁，Bug Hunting Campaign段"
              },
              {
                "sourceId": "police-bughunt-2025",
                "locator": "「狩網運動2025」圓滿結束，正文第1至2段"
              }
            ]
          },
          "business": {
            "users": {
              "text": "本次採用者是參加狩網運動的企業及機構；立法會文件特別提到資源有限的中小企。",
              "refs": [
                {
                  "sourceId": "legco-security-2025",
                  "locator": "印刷頁6，PDF第6頁，Bug Hunting Campaign段"
                },
                {
                  "sourceId": "police-bughunt-2025",
                  "locator": "「狩網運動2025」圓滿結束，正文第1至2段"
                }
              ]
            },
            "fundingModel": {
              "text": "本次活動向機構免費提供漏洞檢測及專業諮詢。資料沒有披露主辦方、合作夥伴之間的資金分擔或商業服務收入。免費活動不等於一般檢測服務沒有成本。",
              "refs": [
                {
                  "sourceId": "legco-security-2025",
                  "locator": "印刷頁6，PDF第6頁，Bug Hunting Campaign段"
                }
              ]
            },
            "adoptionCosts": {
              "status": "not-disclosed",
              "text": "參加者的檢測及諮詢費用在本次活動中獲豁免，但沒有公布機構自行修補、系統更新或後續服務的總成本，不能填成零。",
              "refs": [
                {
                  "sourceId": "legco-security-2025",
                  "locator": "印刷頁6，PDF第6頁，Bug Hunting Campaign段"
                },
                {
                  "sourceId": "police-bughunt-2025",
                  "locator": "「狩網運動2025」圓滿結束，正文第1至2段"
                }
              ]
            }
          },
          "metrics": [
            {
              "label": "活動參與機構",
              "value": 185,
              "unit": "間機構",
              "period": "2025年狩網運動，2025年10月公布",
              "scope": "該屆活動參與者",
              "conditions": "自願參與計劃的機構數，不是香港所有企業的代表樣本，也不等於185個AI應用。",
              "status": "reported",
              "formula": null,
              "refs": [
                {
                  "sourceId": "police-bughunt-2025",
                  "locator": "「狩網運動2025」圓滿結束，正文第1至2段"
                }
              ]
            },
            {
              "label": "AI及專才協作發現漏洞",
              "value": 223,
              "unit": "個漏洞",
              "period": "2025年狩網運動，2025年10月公布",
              "scope": "主辦方指在逾九成參與機構發現的漏洞總數",
              "conditions": "AI與專家協作的合計結果，沒有AI單獨對照組或檢出率分母。不能歸因於AI單獨能力或當作全港漏洞總量。",
              "status": "reported",
              "formula": null,
              "refs": [
                {
                  "sourceId": "police-bughunt-2025",
                  "locator": "「狩網運動2025」圓滿結束，正文第1至2段"
                }
              ]
            }
          ],
          "limits": [
            {
              "text": "沒有公開使用的AI模型、測試覆蓋面、漏報率或人工對照，不能聲稱AI比傳統測試準確多少。",
              "refs": [
                {
                  "sourceId": "legco-security-2025",
                  "locator": "印刷頁6，PDF第6頁，Bug Hunting Campaign段"
                },
                {
                  "sourceId": "police-bughunt-2025",
                  "locator": "「狩網運動2025」圓滿結束，正文第1至2段"
                }
              ]
            },
            {
              "text": "發現漏洞和提出建議不等於每個漏洞已修補。警方只公布部分積極修補機構獲表揚，沒有逐項完整修補結果。",
              "refs": [
                {
                  "sourceId": "police-bughunt-2025",
                  "locator": "「狩網運動2025」圓滿結束，正文第1至2段"
                }
              ]
            },
            {
              "text": "參加計劃的機構不是全港企業隨機樣本，活動數字不應推算成香港企業受攻擊比例。",
              "refs": [
                {
                  "sourceId": "police-bughunt-2025",
                  "locator": "「狩網運動2025」圓滿結束，正文第1至2段"
                }
              ]
            }
          ],
          "checkedOn": "2026-10-22"
        }
      ],
      "background": []
    },
    {
      "id": "space-geospatial",
      "title": "太空與地理資訊",
      "introduction": "遙感是用感測器觀察地面，再把資料變成可用的空間資訊。這裏分清已發射的衛星、機構公布的規格與尚待驗證的服務。",
      "industryCodes": [
        "J",
        "M",
        "O"
      ],
      "sources": [
        {
          "id": "space-cuhk",
          "title": "CUHK-developed satellite CUHK Sat-1 launches with mission to advance smart city development",
          "publisher": "香港中文大學 CUHK in Focus",
          "url": "https://www.focus.cuhk.edu.hk/en/20260312/cuhk-developed-satellite-launches-with-mission-to-advance-smart-city-development/077-environmental-science-en/",
          "type": "institution",
          "published": {
            "date": "2026-03-12",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        },
        {
          "id": "space-budget",
          "title": "The 2026-27 Budget，International Innovation and Technology Hub",
          "publisher": "香港特區政府",
          "url": "https://www.budget.gov.hk/2026/eng/budget11.html",
          "type": "government",
          "published": {
            "date": "2026-02-25",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        }
      ],
      "cases": [
        {
          "id": "cuhksat-one-onboard-ai",
          "title": "港中大一號的星上 AI 遙感",
          "tags": [
            "space-geospatial",
            "ai-data"
          ],
          "industryCodes": [
            "J",
            "M",
            "O"
          ],
          "summary": {
            "text": "港中大一號在2026年2月發射並進入預定軌道。中大團隊把 AI 模型調整至衛星可用，嘗試在軌辨認地面目標，減少所有資料都要先傳回地面處理的需要。已發射不等於已有商業服務成績。",
            "refs": [
              {
                "sourceId": "space-cuhk",
                "locator": "首兩段；Professor Ma Peifeng 引述"
              }
            ]
          },
          "hkRole": {
            "kind": "hk-rd",
            "text": "中大帶領設計、研發及應用，與物流及供應鏈多元技術研發中心、魔方衛星及土木工程拓展署合作。中大團隊調整 DeepSeek 模型權重及工作流程以配合星上運算。",
            "refs": [
              {
                "sourceId": "space-cuhk",
                "locator": "The project represents ... 段落；Professor Ma Peifeng 引述"
              }
            ]
          },
          "stage": {
            "kind": "prototype",
            "asOf": "2026-03-12",
            "text": "衛星原型已進入軌道，公開資料說明星上分析設計及目標用途。未提供足以判定常規商業服務成熟度的持續運行、客戶及準確度資料。",
            "refs": [
              {
                "sourceId": "space-cuhk",
                "locator": "首兩段；Professor Ma Peifeng 引述"
              },
              {
                "sourceId": "space-budget",
                "locator": "第75段"
              }
            ]
          },
          "progress": [
            {
              "date": "2026-02-12",
              "precision": "day",
              "kind": "prototype",
              "text": "衛星由捷龍三號火箭發射，並進入預定軌道。",
              "refs": [
                {
                  "sourceId": "space-cuhk",
                  "locator": "首兩段"
                },
                {
                  "sourceId": "space-budget",
                  "locator": "第75段"
                }
              ]
            }
          ],
          "principle": {
            "text": "多光譜相機記錄不同波段的地面訊息。經調整的 AI 在衛星上辨認目標及提取特徵，目標是較早取得可用資訊。",
            "refs": [
              {
                "sourceId": "space-cuhk",
                "locator": "Engineered to deal ... 段落；Professor Ma Peifeng 引述"
              }
            ]
          },
          "steps": [
            {
              "title": "拍攝多光譜資料",
              "text": "相機記錄近紫外至近紅外波段的地面資料。",
              "refs": [
                {
                  "sourceId": "space-cuhk",
                  "locator": "Engineered to deal ... 段落"
                }
              ]
            },
            {
              "title": "配合星上限制",
              "text": "團隊調整 AI 模型權重及流程，配合有限運算能力與穩定運行要求。",
              "refs": [
                {
                  "sourceId": "space-cuhk",
                  "locator": "Professor Ma Peifeng 引述"
                }
              ]
            },
            {
              "title": "在軌辨認與提取",
              "text": "設計在衛星上辨認目標並提取多光譜資料特徵。",
              "refs": [
                {
                  "sourceId": "space-cuhk",
                  "locator": "Professor Ma Peifeng 引述"
                }
              ]
            },
            {
              "title": "連接地面用途",
              "text": "計劃以空間資訊支援環境監測、交通及應急。這些是公布的用途，沒有逐項客戶成效數據。",
              "refs": [
                {
                  "sourceId": "space-cuhk",
                  "locator": "第二段及相機用途段落"
                }
              ]
            }
          ],
          "application": {
            "text": "中大公布用途包括環境監測、智慧交通及應急，擬服務大灣區等城市。資料未逐項證實已交付的付費服務。",
            "refs": [
              {
                "sourceId": "space-cuhk",
                "locator": "第二段及相機用途段落"
              }
            ]
          },
          "business": {
            "users": {
              "text": "公布的目標用途面向城市管理及相關研究。合作機構包括土木工程拓展署，但合作身份不能直接當成已付費客戶。",
              "refs": [
                {
                  "sourceId": "space-cuhk",
                  "locator": "第二至四段"
                }
              ]
            },
            "fundingModel": {
              "text": "項目獲創新科技署及創新及科技基金支持。已查資料沒有公布服務收費、授權模式或項目收入。",
              "refs": [
                {
                  "sourceId": "space-cuhk",
                  "locator": "The project represents ... 段落"
                },
                {
                  "sourceId": "space-budget",
                  "locator": "第75段"
                }
              ]
            },
            "adoptionCosts": {
              "status": "not-disclosed",
              "text": "衛星研發、發射、地面系統及資料服務的個別成本未在所查資料列出，不能拿政府整體航天資助當作本衛星成本。",
              "refs": [
                {
                  "sourceId": "space-cuhk",
                  "locator": "全文，未列成本"
                },
                {
                  "sourceId": "space-budget",
                  "locator": "第75段，資助涉及多個項目"
                }
              ]
            }
          },
          "metrics": [
            {
              "label": "公布相機空間分辨率",
              "value": 1,
              "unit": "米",
              "period": "2026-03-12機構公布",
              "scope": "港中大一號搭載的多光譜遙感相機",
              "conditions": "機構公布的相機規格，不是目標辨認準確率、地圖定位誤差或全天候服務承諾，未提供獨立在軌驗證條件。",
              "status": "reported",
              "formula": null,
              "refs": [
                {
                  "sourceId": "space-cuhk",
                  "locator": "Engineered to deal ... 段落"
                }
              ]
            },
            {
              "label": "公布光譜波段數",
              "value": 10,
              "unit": "個波段",
              "period": "2026-03-12機構公布",
              "scope": "港中大一號多光譜相機",
              "conditions": "覆蓋近紫外至近紅外。是感測器波段規格，不能當成影像更新頻率或模型準確度。",
              "status": "reported",
              "formula": null,
              "refs": [
                {
                  "sourceId": "space-cuhk",
                  "locator": "Engineered to deal ... 段落"
                }
              ]
            }
          ],
          "limits": [
            {
              "text": "星上運算能力有限，模型需作權重及流程調整，長期穩定運行也是工程要求。",
              "refs": [
                {
                  "sourceId": "space-cuhk",
                  "locator": "Professor Ma Peifeng 引述"
                }
              ]
            },
            {
              "text": "原文未列在軌辨認準確率、端到端處理時間及服務收入，不採用未核對的「全球第一」或商業成熟度推論。",
              "refs": [
                {
                  "sourceId": "space-cuhk",
                  "locator": "全文及首兩段"
                }
              ]
            }
          ],
          "checkedOn": "2026-10-22"
        }
      ],
      "background": []
    },
    {
      "id": "quantum",
      "title": "量子技術",
      "introduction": "量子技術可以用微小粒子的狀態來量度環境，不一定是量子電腦。香港參與的金剛石感測研究，探索在短暫高溫下控制自旋，為研究材料的磁性與熱效應提供工具。",
      "industryCodes": [
        "M",
        "C"
      ],
      "sources": [
        {
          "id": "quantum-paper-fulltext",
          "title": "Quantum Coherence Control at Temperatures up to 1400 K",
          "publisher": "作者原論文，Europe PMC全文存檔PMC11583336",
          "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11583336/fullTextXML",
          "type": "paper",
          "published": {
            "date": "2024-11-12",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        },
        {
          "id": "quantum-cuhk-record",
          "title": "Quantum Coherence Control at Temperatures up to 1400 K",
          "publisher": "香港中文大學研究紀錄",
          "url": "https://research.cuhk.edu.hk/en/publications/quantum-coherence-control-at-temperatures-up-to-1400-k/",
          "type": "institution",
          "published": {
            "date": "2024-11-20",
            "precision": "day"
          },
          "checkedOn": "2026-10-22"
        }
      ],
      "cases": [
        {
          "id": "cuhk-high-temperature-diamond-sensing",
          "title": "高溫金剛石自旋控制與感測研究",
          "tags": [
            "quantum"
          ],
          "industryCodes": [
            "M",
            "C"
          ],
          "summary": {
            "text": "金剛石中的微小缺陷可充當感測器。研究者用光準備及讀取其自旋，再用微波控制。高溫會很快抹去狀態，所以團隊把納米金剛石放在還原氧化石墨烯上，快速加熱和降溫。論文分別報告高溫自旋共振讀出與量子相干振盪，兩者的最高溫度不同，而且讀取在降回室溫後完成。這是感測方法的實驗研究，未證明有可持續在該高溫工作的商用量子設備。",
            "refs": [
              {
                "sourceId": "quantum-paper-fulltext",
                "locator": "正文第1至4段；圖3及圖5及相鄰正文"
              }
            ]
          },
          "hkRole": {
            "kind": "hk-rd",
            "text": "原論文列中大Quan Li及Ren-Bao Liu負責設計專案和監督實驗。Jing-Wei Fan設計及搭建裝置並量測，Shuai-Wei Guo使用還原氧化石墨烯加熱並進行量測和模擬；兩人均列有中大機構身分。團隊另有合肥工大、華中科技大學及中科院等合作機構。",
            "refs": [
              {
                "sourceId": "quantum-paper-fulltext",
                "locator": "front/article-meta作者機構；Author Contributions"
              }
            ]
          },
          "stage": {
            "kind": "research",
            "text": "論文驗證納米金剛石自旋在短脈衝高溫下的控制與讀取方法，並提出材料感測用途。所查原始資料未披露商用設備、客戶或香港現場部署。",
            "asOf": "2026-10-22",
            "refs": [
              {
                "sourceId": "quantum-paper-fulltext",
                "locator": "正文圖2至圖5及最後兩段"
              }
            ]
          },
          "progress": [
            {
              "date": "2024-11-12",
              "precision": "day",
              "kind": "research",
              "text": "論文網上發表，報告以還原氧化石墨烯改善加熱和冷卻，擴大納米金剛石高溫自旋控制範圍。期刊期次日期為2024-11-20，兩個日期分開保留；實驗完成日未披露。",
              "refs": [
                {
                  "sourceId": "quantum-paper-fulltext",
                  "locator": "front/article-meta/pub-date；Abstract及正文"
                },
                {
                  "sourceId": "quantum-cuhk-record",
                  "locator": "Publication status"
                }
              ]
            }
          ],
          "principle": {
            "text": "金剛石的氮空位缺陷帶有可控制的自旋，可理解為有不同方向狀態的微小磁性探針。微波影響其狀態，螢光把狀態變化顯示出來。這項方法先在室溫準備狀態，短暫加熱時控制，再降回室溫讀取，以趕在高溫把訊號抹去前完成程序。",
            "refs": [
              {
                "sourceId": "quantum-paper-fulltext",
                "locator": "正文開首兩段；圖2、圖3及圖5脈衝程序"
              }
            ]
          },
          "steps": [
            {
              "title": "準備探針",
              "text": "把納米金剛石放在還原氧化石墨烯薄膜上，在室溫以綠光準備氮空位自旋狀態。",
              "refs": [
                {
                  "sourceId": "quantum-paper-fulltext",
                  "locator": "正文Reading out spin states...段；圖2"
                }
              ]
            },
            {
              "title": "短暫加熱",
              "text": "近紅外線脈衝讓薄膜吸光加熱。薄膜同時協助快速散熱，縮短加熱和冷卻時間。",
              "refs": [
                {
                  "sourceId": "quantum-paper-fulltext",
                  "locator": "正文rGO heating/cooling段；圖1及圖2"
                }
              ]
            },
            {
              "title": "施加微波控制",
              "text": "在高溫階段施加微波脈衝，量度自旋共振，或改變脈衝時間觀察相干振盪。這是兩種不同測試。",
              "refs": [
                {
                  "sourceId": "quantum-paper-fulltext",
                  "locator": "圖3 HiT-ODMR；圖5 Rabi oscillations及相鄰正文"
                }
              ]
            },
            {
              "title": "降溫後讀取",
              "text": "降回室溫後用綠光讀取螢光，與參考程序比較，推斷高溫期間的自旋變化。",
              "refs": [
                {
                  "sourceId": "quantum-paper-fulltext",
                  "locator": "圖3a、圖4a及圖5a脈衝程序"
                }
              ]
            }
          ],
          "application": {
            "text": "作者提出用於研究材料高溫磁性、磁性相變及熱歷史等現象。本論文實際完成的是自旋控制和量測方法驗證，並未展示已出售的工業檢測服務或醫療用途。",
            "refs": [
              {
                "sourceId": "quantum-paper-fulltext",
                "locator": "正文開首應用段及結尾We managed...段"
              }
            ]
          },
          "business": {
            "users": {
              "text": "現階段的直接使用者是研究高溫材料及量子感測的實驗團隊。論文列出的其他材料用途是研究方向，沒有披露商業客戶。",
              "refs": [
                {
                  "sourceId": "quantum-paper-fulltext",
                  "locator": "正文最後兩段"
                }
              ]
            },
            "fundingModel": {
              "text": "原論文列出香港研資局多個計劃、國家量子科技計劃、裘槎及新基石等研究支持。這些是研發資助，沒有披露產品銷售、授權收入或營收。",
              "refs": [
                {
                  "sourceId": "quantum-paper-fulltext",
                  "locator": "Author Information後的Funding Statement，This work was supported..."
                }
              ]
            },
            "adoptionCosts": {
              "status": "not-disclosed",
              "text": "未披露採購價或完整實驗成本。原文的裝置需要雷射、微波、真空腔、抽氣設備及光偵測，還須校準溫度。這些條件說明採用負擔，不能轉成沒有來源的報價。",
              "refs": [
                {
                  "sourceId": "quantum-paper-fulltext",
                  "locator": "正文The optical setup...段；圖1；圖3溫度校準段"
                }
              ]
            }
          },
          "metrics": [
            {
              "label": "觀察到自旋共振的最高溫度約值",
              "value": 1429,
              "unit": "K",
              "period": "2024-11-12上線論文所報實驗",
              "scope": "納米金剛石NV自旋的高溫光偵測磁共振實驗，圖3",
              "conditions": "原文為約1429±11 K。真空中的短脈衝加熱，冷卻後在室溫讀出；高於700 K的溫度用冷卻曲線外推及逐段校準。不是持續高溫讀出，也不是相干振盪最高溫度。",
              "status": "reported",
              "formula": null,
              "refs": [
                {
                  "sourceId": "quantum-paper-fulltext",
                  "locator": "正文To observe HiT-ODMR...段及圖3"
                }
              ]
            },
            {
              "label": "觀察到Rabi相干振盪的最高溫度",
              "value": 1280,
              "unit": "K",
              "period": "2024-11-12上線論文所報實驗",
              "scope": "納米金剛石NV集體自旋，圖5的ND3及ND61樣品",
              "conditions": "圖5中低於1200 K資料來自ND3，高於1200 K來自ND61；施加103 G磁場。先室溫準備、加熱時施加微波、冷卻後讀出。振盪可見度及壽命隨溫度上升而下降。",
              "status": "reported",
              "formula": null,
              "refs": [
                {
                  "sourceId": "quantum-paper-fulltext",
                  "locator": "正文To demonstrate quantum coherence...段及圖5圖說"
                }
              ]
            }
          ],
          "limits": [
            {
              "text": "標題的1400 K不能理解為所有量子相干操作均在該溫度完成。論文的高溫自旋共振約達1429 K，Rabi相干振盪則觀察至1280 K，且螢光讀取在冷卻後進行。",
              "refs": [
                {
                  "sourceId": "quantum-paper-fulltext",
                  "locator": "圖3、圖5及相鄰正文"
                }
              ]
            },
            {
              "text": "快速自旋鬆弛限制更高溫操作。高溫校準需要冷卻曲線外推，作者亦指出更高溫時的溫度漂移和雷射波動原因仍須研究。",
              "refs": [
                {
                  "sourceId": "quantum-paper-fulltext",
                  "locator": "圖3溫度校準段；圖5相鄰討論；正文最後一段"
                }
              ]
            },
            {
              "text": "這項成果屬量子感測方法研究。它沒有量子電腦運算或量子通訊網絡的部署證據，也沒有可供計算商業回報的收入及價格。",
              "refs": [
                {
                  "sourceId": "quantum-paper-fulltext",
                  "locator": "Abstract、正文結尾及Funding Statement"
                }
              ]
            }
          ],
          "checkedOn": "2026-10-22"
        }
      ],
      "background": []
    }
  ]
};

export const technology = validateTechnology(raw);
