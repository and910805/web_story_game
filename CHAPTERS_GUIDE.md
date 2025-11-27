# 章節文件更新指南

## 📁 新的文件結構

遊戲已重構為模塊化結構，方便您單獨更新每個章節：

```
後宮珍還賺/
├── index.html              # 主HTML文件
├── style.css               # 樣式文件
├── game.js                 # 遊戲核心邏輯（引擎）
├── chapters/               # 📂 章節內容目錄
│   ├── chapter0.js         # 序章：選秀風雲
│   ├── chapter1.js         # 第一章：初入宮闈與「椒房獨寵」
│   ├── chapter2.js         # 第二章：後宮風波 - 綠茶的陷阱
│   ├── chapter3.js         # 第三章：冷宮（？）與真心
│   ├── chapter4.js         # 第四章：封后大典前夕
│   └── endings.js          # 所有結局內容
├── README.md               # 項目說明
├── DEPLOYMENT.md           # 部署指南
└── 故事背景.txt            # 原始故事設定
```

## ✏️ 如何更新章節內容

### 1. 更新單個章節

例如要更新第一章的內容：

1. 打開 `chapters/chapter1.js`
2. 修改 `scenes` 陣列中的內容
3. 保存文件
4. 刷新瀏覽器即可看到更新

### 2. 章節文件結構說明

每個章節文件的基本結構：

```javascript
const chapter1 = {
    name: '章節名稱',
    scenes: [
        {
            type: 'narration',  // 或 'dialogue' 或 'choice'
            text: '內容文字'
        },
        {
            type: 'dialogue',
            speaker: '角色名稱',
            text: '對話內容'
        },
        {
            type: 'choice',
            question: '選擇問題',
            choices: [
                {
                    text: '選項A',
                    effect: { lovePoints: 10 },  // 屬性變化
                    response: '選擇後的回應',
                    flag: 'flag_name'  // 可選：設置標記
                }
            ]
        }
    ]
};
```

### 3. 場景類型

#### narration（旁白）
```javascript
{
    type: 'narration',
    text: '旁白內容'
}
```

#### dialogue（對話）
```javascript
{
    type: 'dialogue',
    speaker: '角色名稱',
    text: '對話內容'
}
```

#### choice（選擇）
```javascript
{
    type: 'choice',
    question: '選擇問題',
    choices: [
        {
            text: '選項文字',
            effect: {
                lovePoints: 10,      // 寵愛值變化
                beauty: 5,           // 美貌變化（可選）
                intelligence: 3,     // 智慧變化（可選）
                stamina: -10,        // 體力變化（可選）
                title: '新封號'      // 封號變化（可選）
            },
            response: '選擇後的回應文字',
            flag: '標記名稱',        // 可選：用於追蹤選擇
            ending: 'empress'        // 可選：直接進入結局
        }
    ]
}
```

## 🎯 快速修改範例

### 範例1：修改對話內容

**原始（chapter1.js）：**
```javascript
{
    type: 'dialogue',
    speaker: '臭咘咘',
    text: '大膽嬪妃，竟敢獨食？'
}
```

**修改後：**
```javascript
{
    type: 'dialogue',
    speaker: '臭咘咘',
    text: '秀兒，在吃什麼好吃的？也給朕嚐嚐。'
}
```

### 範例2：調整寵愛值

**原始：**
```javascript
effect: { lovePoints: 10 }
```

**修改後（讓這個選擇更有價值）：**
```javascript
effect: { lovePoints: 25 }
```

### 範例3：添加新場景

在任何章節的 `scenes` 陣列中添加：

```javascript
{
    type: 'narration',
    text: '新增的劇情場景內容……'
},
{
    type: 'dialogue',
    speaker: '吳芃秀',
    text: '新增的對話……'
}
```

## 🎬 修改結局

打開 `chapters/endings.js`，修改三種結局：

- `empress` - 聖母皇太后結局
- `escape` - 私奔到月球結局
- `true` - 完美結局

```javascript
empress: {
    title: '結局標題',
    content: `結局內容文字
    
可以分多行書寫`,
    image: '👑'  // emoji 圖示
}
```

## 🔧 添加新章節

如果想添加第五章：

1. 創建 `chapters/chapter5.js`
2. 按照現有格式編寫內容
3. 在 `index.html` 中添加：
   ```html
   <script src="chapters/chapter5.js"></script>
   ```
4. 在 `game.js` 的 `gameData.chapters` 陣列中添加：
   ```javascript
   chapter5  // 第五章
   ```

## ⚠️ 注意事項

1. **必須保持變數名稱一致**：
   - `chapter0`, `chapter1`, ... 等變數名不要改
   - `endings` 變數名不要改

2. **JavaScript 語法**：
   - 字串用單引號 `'` 或反引號 `` ` ``
   - 陣列最後一項後面不要加逗號
   - 物件屬性用逗號分隔

3. **測試更新**：
   - 每次修改後刷新瀏覽器測試
   - 打開瀏覽器控制台（F12）查看錯誤

## 💡 最佳實踐

- **備份**：修改前先備份原文件
- **小步修改**：一次只改一點，測試後再繼續
- **命名規範**：flag 命名要有意義，如 `honest_answer`, `shared_snack`

## 🚀 部署更新

修改章節後部署到 GitHub Pages：

```bash
git add chapters/
git commit -m "更新章節內容"
git push
```

等待幾分鐘，GitHub Pages 會自動更新。

---

**現在您可以輕鬆修改任何章節，而不用在一個大文件中翻找！** 🎉
