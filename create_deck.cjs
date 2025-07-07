/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

// 從命令列參數獲取檔案名稱
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("請提供檔案名稱作為參數");
  console.error("使用方式: node ./create_deck_csv.cjs <檔案名稱>");
  console.error("範例: node ./create_deck_csv.cjs card_3.cjs");
  console.error("或: node ./create_deck_csv.cjs card_3 (會自動加上 .cjs)");
  process.exit(1);
}

// 處理輸入檔案名稱
let inputFileName = args[0];
if (!inputFileName.endsWith(".cjs")) {
  inputFileName += ".cjs";
}

// 建立檔案路徑
const vocabularyPath = path.resolve(__dirname, "vocabularies", inputFileName);

// 檢查檔案是否存在
if (!fs.existsSync(vocabularyPath)) {
  console.error(`錯誤: 找不到檔案 ${vocabularyPath}`);
  console.error("請確認檔案存在於 vocabularies 目錄中");
  process.exit(1);
}

// 載入卡片資料
let CARDS;
try {
  CARDS = require(vocabularyPath);
  console.log(`成功載入 ${inputFileName}，共 ${CARDS.length} 張卡片`);
} catch (error) {
  console.error(`載入檔案時發生錯誤: ${error.message}`);
  process.exit(1);
}

// 從檔案名稱生成輸出名稱
const baseName = inputFileName.replace(".cjs", "");
const outputFileName = `anki_vocabulary_${baseName}.csv`;

// 準備 CSV 內容
const csvRows = [];
let processedCards = 0;
let failedCards = [];

// 添加 BOM 以支援 UTF-8 編碼
const BOM = "\ufeff";

CARDS.forEach((card, index) => {
  try {
    // 建立背面內容
    const backParts = [
      card.definition ? `Definition: ${card.definition}` : "",
      card.example ? `Example: ${card.example}` : "",
      card.synonyms ? `Synonyms: ${card.synonyms}` : "",
      card.notes ? `Notes: ${card.notes}` : "",
    ].filter(Boolean);

    // 處理特殊字符
    const front = card.word.replace(/"/g, '""');
    const back = backParts.join("<br><br>").replace(/"/g, '""');

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
} catch (error) {
  console.error("寫入 CSV 檔案時發生錯誤:", error);
}
