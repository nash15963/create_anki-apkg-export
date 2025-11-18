/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

// 從命令列參數獲取檔案名稱
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("請提供 markdown 檔案名稱或路徑作為參數");
  console.error("使用方式: node ./create_deck_from_md.cjs <檔案名稱或路徑>");
  console.error("範例:");
  console.error("  - node ./create_deck_from_md.cjs vocab_1.md");
  console.error("  - node ./create_deck_from_md.cjs vocab_1 (會自動加上 .md)");
  console.error("  - node ./create_deck_from_md.cjs vocabularies/card_22.md");
  process.exit(1);
}

// 處理輸入檔案名稱
let inputFileName = args[0];
let markdownPath;

// 檢查是否為完整路徑（包含路徑分隔符號）
if (inputFileName.includes("/") || inputFileName.includes("\\")) {
  // 使用完整路徑
  markdownPath = path.resolve(__dirname, inputFileName);
} else {
  // 只有檔案名稱，使用預設的 vocabularies 目錄
  if (!inputFileName.endsWith(".md")) {
    inputFileName += ".md";
  }
  markdownPath = path.resolve(__dirname, "vocabularies", inputFileName);
}

// 檢查檔案是否存在
if (!fs.existsSync(markdownPath)) {
  console.error(`錯誤: 找不到檔案 ${markdownPath}`);
  console.error("請確認檔案存在於 vocabularies 目錄中");
  process.exit(1);
}

// 讀取 markdown 檔案
let markdownContent;
try {
  markdownContent = fs.readFileSync(markdownPath, "utf8");
  console.log(`成功載入 ${path.basename(markdownPath)}`);
} catch (error) {
  console.error(`讀取檔案時發生錯誤: ${error.message}`);
  process.exit(1);
}

// 解析 markdown 內容，提取單字卡片
function parseMarkdownCards(content) {
  const cards = [];
  
  // 按照 # 開頭的行分割單字
  const wordSections = content.split(/\n(?=^# )/m).filter(section => section.trim());
  
  wordSections.forEach((section, index) => {
    try {
      // 提取單字名稱（第一行的 # 後面的內容）
      const wordMatch = section.match(/^# (.+)$/m);
      if (!wordMatch) {
        console.warn(`警告: 第 ${index + 1} 個段落找不到單字標題`);
        return;
      }
      
      const word = wordMatch[1].trim();
      
      // 將整個段落內容作為背面內容（移除第一行的標題）
      const backContent = section.replace(/^# .+\n?/m, '').trim();
      
      if (backContent) {
        cards.push({
          word: word,
          backContent: backContent
        });
      }
    } catch (error) {
      console.error(`解析第 ${index + 1} 個段落時發生錯誤: ${error.message}`);
    }
  });
  
  return cards;
}

// 解析卡片
const cards = parseMarkdownCards(markdownContent);
console.log(`解析完成，共找到 ${cards.length} 張卡片`);

if (cards.length === 0) {
  console.error("錯誤: 沒有找到任何有效的卡片內容");
  console.error("請確認 markdown 檔案格式正確，每個單字應該以 '# 單字名稱' 開頭");
  process.exit(1);
}

// 從檔案名稱生成輸出名稱
const baseName = path.basename(markdownPath, path.extname(markdownPath));
const outputFileName = `anki_vocabulary_${baseName}.csv`;

// 準備 CSV 內容
const csvRows = [];
let processedCards = 0;
let failedCards = [];

// 添加 BOM 以支援 UTF-8 編碼
const BOM = "\ufeff";

cards.forEach((card, index) => {
  try {
    // 處理特殊字符和換行
    const front = card.word.replace(/"/g, '""');
    
    // 將 markdown 格式轉換為 HTML 以在 Anki 中正確顯示
    let back = card.backContent
      .replace(/"/g, '""')  // 轉義雙引號
      .replace(/\n\n/g, '<br><br>')  // 段落間距
      .replace(/\n/g, '<br>')  // 單行換行
      .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')  // 粗體
      .replace(/\*(.+?)\*/g, '<i>$1</i>')  // 斜體
      .replace(/^### (.+)$/gm, '<h3>$1</h3>')  // 三級標題
      .replace(/^- (.+)$/gm, '• $1')  // 項目符號
      .replace(/`(.+?)`/g, '<code>$1</code>');  // 代碼格式
    
    // 加入 CSV 行
    csvRows.push(`"${front}","${back}"`);
    processedCards++;
  } catch (error) {
    console.error(`處理第 ${index + 1} 張卡片時發生錯誤 (${card.word}): ${error.message}`);
    failedCards.push({ index: index + 1, word: card.word, error: error.message });
  }
});

// 確保 dist 目錄存在
const distDir = path.resolve(__dirname, "dist");
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
  console.log("建立 dist 目錄");
}

// 設定輸出路徑
const outPath = path.resolve(distDir, outputFileName);

// 寫入 CSV 檔案
try {
  const csvContent = BOM + csvRows.join("\n");
  fs.writeFileSync(outPath, csvContent, "utf8");

  console.log(`✅ CSV 檔案生成成功！`);
  console.log(`📁 檔案位置: ${outPath}`);
  console.log(`📊 卡片數量: ${processedCards}`);

  if (failedCards.length > 0) {
    console.log(`\n⚠️ 失敗 ${failedCards.length} 張卡片:`);
    failedCards.forEach(({ index, word, error }) => {
      console.log(`  - 第 ${index} 張 (${word}): ${error}`);
    });
  }

  console.log("\n📝 匯入 Anki 的步驟:");
  console.log("1. 開啟 Anki");
  console.log("2. 選擇 檔案 > 匯入...");
  console.log("3. 選擇生成的 CSV 檔案");
  console.log("4. 設定:");
  console.log("   - 類型: 基本");
  console.log("   - 牌組: 選擇或建立新牌組");
  console.log("   - 欄位分隔符號: 逗號");
  console.log("   - 允許 HTML: 勾選");
  console.log("5. 點擊匯入");
  
  console.log("\n💡 提示: 這些卡片包含詳細的定義、例句和語法說明，");
  console.log("   建議在 Anki 中設定較大的字體以便閱讀。");
} catch (error) {
  console.error("寫入 CSV 檔案時發生錯誤:", error);
}