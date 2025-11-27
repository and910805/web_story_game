# 後宮·臭寶傳 - GitHub Pages 部署指南

## 📋 部署前檢查清單

確保您有以下文件：
- ✅ index.html
- ✅ style.css
- ✅ game.js
- ✅ README.md
- ✅ .gitignore

## 🚀 快速部署步驟

### 步驟 1：創建 GitHub Repository

1. 前往 https://github.com
2. 登入您的帳號
3. 點擊右上角的 "+" → "New repository"
4. 填寫以下資訊：
   - **Repository name**: `palace-game`（或任何您喜歡的名字）
   - **Description**: "後宮·臭寶傳 - 宮廷戀愛冒險遊戲"
   - **Public** 或 **Private**（選擇 Public 才能使用免費的 GitHub Pages）
   - ⚠️ **不要**勾選 "Add a README file"（我們已經有了）
5. 點擊 "Create repository"

### 步驟 2：上傳文件到 GitHub

#### 方法 A：使用 Git 命令行（推薦）

在您的項目資料夾中打開 PowerShell 或命令提示字元：

```powershell
# 進入項目資料夾
cd "d:\OneDrive - 台灣精材股份有限公司\python\後宮珍還賺"

# 初始化 Git repository
git init

# 添加所有遊戲文件
git add index.html style.css game.js README.md .gitignore 故事背景.txt

# 提交文件
git commit -m "🎮 初始提交：後宮·臭寶傳遊戲"

# 添加遠端 repository（替換成您的 GitHub 用戶名）
git remote add origin https://github.com/您的用戶名/palace-game.git

# 設置主分支名稱
git branch -M main

# 推送到 GitHub
git push -u origin main
```

#### 方法 B：使用 GitHub 網頁界面

1. 在新建的 repository 頁面，點擊 "uploading an existing file"
2. 將以下文件拖曳到頁面：
   - index.html
   - style.css
   - game.js
   - README.md
   - .gitignore
3. 在 "Commit changes" 欄位輸入：`初始提交：後宮·臭寶傳遊戲`
4. 點擊 "Commit changes"

### 步驟 3：啟用 GitHub Pages

1. 在您的 repository 頁面，點擊 "Settings"（設定）
2. 在左側選單中，點擊 "Pages"
3. 在 "Source" 區域：
   - **Branch**：選擇 `main`
   - **Folder**：選擇 `/ (root)`
4. 點擊 "Save"（保存）
5. 等待 1-3 分鐘

### 步驟 4：訪問您的遊戲！

您的遊戲網址將會是：
```
https://您的用戶名.github.io/palace-game/
```

例如，如果您的 GitHub 用戶名是 `alice123`，repository 名稱是 `palace-game`，那麼網址就是：
```
https://alice123.github.io/palace-game/
```

## 🔧 常見問題

### Q1: 頁面顯示 404 Not Found
**A**: 等待 3-5 分鐘，GitHub Pages 需要時間構建。刷新頁面試試。

### Q2: 遊戲畫面顯示不正常
**A**: 確認所有文件都已上傳：
- index.html
- style.css
- game.js

### Q3: 中文顯示為亂碼
**A**: 確保文件編碼為 UTF-8。已在 HTML 中設置 `<meta charset="UTF-8">`。

### Q4: 如何更新遊戲？
**A**: 修改文件後，使用以下命令：
```bash
git add .
git commit -m "更新遊戲內容"
git push
```

### Q5: 可以使用自定義域名嗎？
**A**: 可以！在 Settings → Pages 中設置 Custom domain。

## 📱 分享您的遊戲

遊戲部署完成後，您可以：
1. 分享網址給朋友
2. 在社交媒體上發布
3. 添加到您的個人網站

## 🎨 自定義遊戲

### 修改故事內容
編輯 `game.js` 中的 `gameData` 物件：
```javascript
const gameData = {
    chapters: [
        // 在這裡修改章節和對話
    ],
    endings: {
        // 在這裡修改結局
    }
};
```

### 修改視覺風格
編輯 `style.css` 中的 CSS 變數：
```css
:root {
    --primary-red: #c41e3a;      /* 主題紅色 */
    --primary-gold: #d4af37;     /* 主題金色 */
    --primary-purple: #722f37;   /* 主題紫色 */
}
```

## 📊 查看訪問統計（可選）

可以添加 Google Analytics 來追蹤訪問量：
1. 前往 https://analytics.google.com
2. 創建新的 property
3. 將追蹤代碼添加到 `index.html` 的 `<head>` 區域

## 🎉 恭喜！

您的遊戲已成功部署到 GitHub Pages！

任何人都可以通過網址訪問您的遊戲，無需安裝或下載。

---

**需要幫助？**
- GitHub Pages 文檔: https://docs.github.com/en/pages
- Git 教學: https://git-scm.com/book/zh-tw/v2
