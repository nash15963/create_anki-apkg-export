# Vocabulary Anki Deck Generator

一個將英文單字清單轉換為 Anki 字卡的 Node.js 應用程式。

## 功能特色

- 將單字清單轉換為可匯入 Anki 的 CSV 格式
- 支援多個字卡檔案管理
- 自動格式化定義、例句、同義詞和筆記
- UTF-8 編碼支援，確保中文顯示正常

## 安裝與設定

1. 確保已安裝 Node.js
2. 下載或複製此專案
3. 在專案目錄中執行：
```bash
npm install
```

## 使用方法

### 1. 使用 AI 生成單字表

#### 方法一：傳統格式（適用現有系統）

當你有一串英文單字需要製作成字卡時，可以使用以下提示詞與 AI（如 ChatGPT、Claude）對話：

```
請幫我將以下英文單字製作成字卡格式。請為每個單字提供：
1. 英文單字
2. 中文定義或英文定義
3. 例句（英文）
4. 同義詞（如果有的話）
5. 額外筆記（詞根、記憶技巧等）

請使用以下 JavaScript 格式輸出：

const CARDS = [
  {
    word: "example",
    definition: "定義內容",
    example: "例句內容",
    synonyms: "同義詞",
    notes: "額外筆記"
  },
  // 更多單字...
];

module.exports = CARDS;

單字清單：
[在這裡貼上你的英文單字，用空格或換行分隔]
```

#### 方法二：詳細 Markdown 格式（推薦）

如果你想要更詳細的字卡內容，可以使用以下提示詞：

```
請幫我為以下英文單字製作詳細的語言學習字卡。對於每個單字，請提供：

1. **多種定義和使用情境**：按照最常用到最不常用的順序，每個定義包含：
   - 定義說明
   - 2個實用例句
   - 使用情境說明

2. **常見搭配**：列出該單字的慣用搭配

3. **語法提醒**：包含詞性變化、時態等

請使用以下 Markdown 格式，每個單字輸出為一個完整的 markdown 段落：

```markdown
# [單字]

### 1. **[最常用義]**
- **定義**：[定義內容]
- **英英定義**：[定義內容]
- **例句**："[例句1]"
- **例句**："[例句2]"
- **使用情境**：[何時使用]

### 2. **[第二常用義]**
- **定義**：[定義內容]
- **英英定義**：[定義內容]
- **例句**："[例句1]"
- **例句**："[例句2]"

### 常見搭配：
- [搭配1]（[中文意思]）
- [搭配2]（[中文意思]）

### 語法提醒：
- 原形：[原形]
- 第三人稱單數：[變化]
- 過去式：[變化]
- 現在分詞：[變化]
```

單字清單：
[在這裡貼上你的英文單字，用空格或換行分隔]
```

### 2. 建立字卡檔案

#### 傳統格式 (.cjs 檔案)
1. 將 AI 生成的內容儲存為 `.cjs` 檔案
2. 將檔案放入 `vocabularies/` 目錄
3. 檔案命名建議：`card_1.cjs`, `card_2.cjs` 等

#### Markdown 格式 (.md 檔案) - 推薦
1. 將 AI 生成的 markdown 內容儲存為 `.md` 檔案
2. 將檔案放入 `vocabularies/` 目錄
3. 檔案命名建議：`vocab_1.md`, `vocab_2.md` 等

### 3. 生成 Anki CSV 檔案

#### 傳統格式 (.cjs 檔案)
使用以下指令生成 CSV 檔案：

```bash
npm run create <檔案名稱>
```

**使用範例：**
```bash
# 處理 vocabularies/card_1.cjs
npm run create card_1.cjs

# 或者省略 .cjs 副檔名
npm run create card_1

# 處理 vocabularies/card_3.cjs
npm run create card_3
```

#### Markdown 格式 (.md 檔案) - 推薦
使用以下指令生成詳細的 CSV 檔案：

```bash
npm run create-md <檔案名稱>
```

**使用範例：**
```bash
# 處理 vocabularies/vocab_1.md
npm run create-md vocab_1.md

# 或者省略 .md 副檔名
npm run create-md vocab_1

# 處理 vocabularies/encompasses.md
npm run create-md encompasses
```

**輸出位置：**
生成的 CSV 檔案會儲存在 `dist/` 目錄中，檔名格式為 `anki_vocabulary_<檔案名>.csv`

### 4. 匯入 Anki

1. 開啟 Anki 應用程式
2. 選擇「檔案」→「匯入...」
3. 選擇生成的 CSV 檔案（在 `dist/` 目錄中）
4. 匯入設定：
   - **類型**：基本
   - **牌組**：選擇現有牌組或建立新牌組
   - **欄位分隔符號**：逗號
   - **允許 HTML**：✅ 勾選
5. 點擊「匯入」

## 專案結構

```
vocabulary/
├── package.json              # 專案配置
├── create_deck.cjs           # 傳統格式處理程式
├── create_deck_from_md.cjs   # Markdown 格式處理程式 (推薦)
├── vocabularies/             # 單字檔案目錄
│   ├── card_1.cjs           # 傳統格式
│   ├── card_2.cjs
│   ├── vocab_1.md           # Markdown 格式 (推薦)
│   ├── encompasses.md
│   └── ...
└── dist/                     # 輸出目錄
    ├── anki_vocabulary_card_1.csv
    ├── anki_vocabulary_vocab_1.csv
    └── ...
```

## 單字檔案格式

### 傳統格式 (.cjs 檔案)

每個單字檔案需要匯出一個包含單字物件的陣列：

```javascript
const CARDS = [
  {
    word: "grainy",
    definition: "If an image, film, or photograph is grainy...",
    example: "The low-light photo looked grainy because I set the ISO too high.",
    synonyms: "rocky, gritty",
    notes: "Root: grain (wheat is a grain that is grown in Kansas)"
  },
  // 更多單字...
];

module.exports = CARDS;
```

### Markdown 格式 (.md 檔案) - 推薦

每個 markdown 檔案可以包含多個單字，每個單字以 `# 單字名稱` 開頭：

```markdown
# encompasses

### 1. **包含/包括（最常用）**
- **定義**：全面地包含或涵蓋
- **例句**："The course encompasses all aspects of digital marketing."
- **例句**："The job encompasses a wide range of responsibilities."
- **使用情境**：學術、工作、項目描述

### 2. **組成/構成**
- **定義**：由多個部分組成整體
- **例句**："Her responsibilities encompass managing staff, budgeting, and strategic planning."
- **例句**："The curriculum encompasses both theoretical and practical components."

### 常見搭配：
- encompasses everything（包含一切）
- encompasses a wide range of（涵蓋廣泛的...）
- fully encompasses（完全包含）

### 語法提醒：
- 原形：encompass
- 第三人稱單數：encompasses
- 過去式：encompassed
- 現在分詞：encompassing

# another-word

### 1. **另一個單字的定義**
- **定義**：定義內容
- ...
```

## 範例工作流程

### 推薦流程（Markdown 格式）
1. **收集單字**：從閱讀材料中收集不熟悉的英文單字
2. **AI 生成**：使用 "方法二：詳細 Markdown 格式" 的提示詞請 AI 生成詳細字卡
3. **儲存檔案**：將結果儲存為 `vocabularies/vocab_X.md`
4. **生成 CSV**：執行 `npm run create-md vocab_X`
5. **匯入 Anki**：將生成的 CSV 檔案匯入 Anki

### 傳統流程（JavaScript 格式）
1. **收集單字**：從閱讀材料中收集不熟悉的英文單字
2. **AI 生成**：使用 "方法一：傳統格式" 的提示詞請 AI 生成字卡
3. **儲存檔案**：將結果儲存為 `vocabularies/card_X.cjs`
4. **生成 CSV**：執行 `npm run create card_X`
5. **匯入 Anki**：將生成的 CSV 檔案匯入 Anki

## 注意事項

- 檔案必須放在 `vocabularies/` 目錄中
- 確保 JavaScript 語法正確，特別是物件和陣列格式
- CSV 檔案支援 HTML 格式，可在定義中使用 `<b>`, `<i>` 等標籤
- 生成的檔案會自動處理特殊字符轉義

## 疑難排解

如果遇到錯誤，請檢查：
1. 檔案是否存在於 `vocabularies/` 目錄
2. 檔案格式是否正確（JavaScript 語法）
3. 是否有遺漏的逗號或括號
4. 字串中的引號是否正確轉義