# 更新美國經濟快照

GitHub Actions 每日按香港時間上午 7:17 排程檢查。亦可以在 Actions 選擇 **Refresh U.S. economy data**，在預設分支按 **Run workflow**。有新數字或修訂才建立更新 PR。審查並合併 PR 後，原有 GitHub Pages 流程會發布新快照。

要在本機執行，先準備 Python 3.10 或以上和 Node.js 24，然後從專案根目錄執行：

1. `python scripts/update_us_economy.py --check` 檢查目前快照，無需上網。
2. `python scripts/update_us_economy.py --dry-run` 下載官方資料並驗證候選快照，不寫入檔案。
3. `python scripts/update_us_economy.py --write` 驗證成功且有改動時更新 `dist/us-economy-snapshot.js`。提交前檢查數值、統計期間及發布狀態。

來源下載失敗、回傳過時資料或格式不符，程式會報錯並保留目前快照。若已有更新 PR，新的候選檔仍會保留在該次 Actions 執行的 **Artifacts**，不會再開一個 PR。

若 GitHub 拒絕建立 PR，從該次執行的 **Artifacts** 下載 `us-economy-snapshot`，或到 **Settings → Actions → General → Workflow permissions** 檢查 GitHub Actions 是否獲准建立 PR。排程不需要額外的 API key 或個人存取權杖。
