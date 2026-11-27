# 更新美國經濟快照

GitHub Actions 每日按香港時間上午 7:17 排程檢查。亦可以在 Actions 選擇 **Refresh U.S. economy data**，在預設分支按 **Run workflow**。有新數字或修訂才建立更新 PR。審查並合併 PR 後，原有 GitHub Pages 流程會發布新快照。

要在本機執行，先準備 Python 3.10 或以上和 Node.js 24，然後從專案根目錄執行：

1. `python scripts/update_us_economy.py --check` 檢查目前快照，無需上網。
2. `python scripts/update_us_economy.py --dry-run` 下載官方資料並驗證候選快照，不寫入檔案。
3. `python scripts/update_us_economy.py --write` 驗證成功且有改動時更新 `dist/us-economy-snapshot.js`。提交前檢查數值、統計期間及發布狀態。

來源下載失敗、回傳過時資料或格式不符，程式會報錯並保留目前快照。若已有更新 PR，新的候選檔仍會保留在該次 Actions 執行的 **Artifacts**，不會再開一個 PR。

若 GitHub 拒絕建立 PR，從該次執行的 **Artifacts** 下載 `us-economy-snapshot`，或到 **Settings → Actions → General → Workflow permissions** 檢查 GitHub Actions 是否獲准建立 PR。排程不需要額外的 API key 或個人存取權杖。

## 更新美國各州快照

GitHub Actions 的 **Refresh U.S. state data** 每日香港時間上午 7:37 執行，也可手動執行。有變化時建立 PR，經審核合併後發布。州份排程與全國及財政部來源分開，失敗時不改寫快照。

在專案根目錄執行 `python scripts/update_us_states.py --check` 檢查目前快照；`--dry-run` 下載及驗證候選資料但不寫檔；`--write` 在所有來源成功且資料改變時更新快照。BEA 和 Census 使用官方下載檔，BLS 使用公開 API；BLS 可能限制每日請求數，配額不足時重試排程，不可用舊數字冒充新數字。

## 更新環境、能源及人口家庭

GitHub Actions 每日香港時間早上 7:57 分別檢查香港及美國資料，有變動才建立地區 PR，審核合併後由 Pages 發布。香港涵蓋溫室氣體、天文台氣溫、非山火空氣污染、用電、住戶、出生時預期壽命、警方整體罪案及公共圖書館借出資料；美國涵蓋溫室氣體、本土 48 州全年平均氣溫、電力事業規模發電來源、全國人口、年齡分布、五年期住戶人數、公共交通、預期壽命、暴力罪案及國家公園系統休閒到訪人次。國家公園採 NPS 年度摘要的曆年休閒到訪估算及原有百萬人次精度，涵蓋歷史景點及紀念地，不是獨立訪客人數；檢查摘要標題年份與數值所屬年份一致。交通數字加總運輸部 NTD 同一報告年度的 `Annual Total` 登車人次，各機構使用自身財政年度；核對所有列都有數值，不能把平均日人次一併加總。香港交通及政府開支、美國史密森學會到訪人次仍為手動快照；美國政府財政卡另連至既有經濟數據排程。執行 `python scripts/update_society.py --region hk` 或 `--region us` 下載及核對候選資料；加 `--write` 才寫入該地頁面。來源故障、期間倒退、單位或欄位不符時失敗並保留原頁面。

美國排放、罪案及預期壽命由獨立工作檢查：`python -m pip install pypdf==6.1.0`，然後分別執行 `python scripts/update_us_ghg.py`、`python scripts/update_us_crime.py` 和 `python scripts/update_us_health.py`；加 `--write` 才更新頁面。排放讀取 EPA 最終清單表 ES-2 的總排放，保留最近五個實際年份並重新核對歷史修訂；不含土地使用及林業的排放與吸收。2025 年最終報告截至 2023 年，EPA 年度索引仍指向舊版時保留該報告。程式檢查 EPA 的 `1990-YYYY` 年度索引尋找較新的最終完整報告；罪案從 FBI 相同命名的年度報告擷取全國暴力罪案估計；預期壽命由 CDC FastStats 官方葡萄牙語網域讀取最終死亡統計及來源。若機構改變網址、表格或只在其他位置發布，需要人工更新程式。報告工作與其他資料分開，但共用美國頁面及 PR；已有美國資料 PR 時新候選檔保留為 Actions artifact，待現有 PR 合併後再檢查。
