const fs = require('fs');
const path = require('path');

/**
 * 從文本文件中提取被 ** 包圍的重要字
 * 並在同目錄下生成 .gen.txt 文件
 *
 * Usage: node extract_keywords.cjs <filename>
 * Example: node extract_keywords.cjs scripts/example.txt
 */

function extractKeywords(filePath) {
  try {
    // 讀取文件內容
    const content = fs.readFileSync(filePath, 'utf-8');

    // 使用正則表達式提取所有被 ** 包圍的文字
    // 匹配 **...** 格式，並捕獲中間的內容
    const regex = /\*\*([^*]+)\*\*/g;
    const keywords = [];
    let match;

    while ((match = regex.exec(content)) !== null) {
      keywords.push(match[1]);
    }

    if (keywords.length === 0) {
      console.log('⚠️  沒有找到任何重要字（被 ** 包圍的文字）');
      return;
    }

    // 生成編號列表
    const output = keywords
      .map((keyword, index) => `${index + 1}. ${keyword}`)
      .join('\n');

    // 生成輸出文件路徑
    const dir = path.dirname(filePath);
    const ext = path.extname(filePath);
    const basename = path.basename(filePath, ext);
    const outputPath = path.join(dir, `${basename}.gen${ext}`);

    // 寫入文件
    fs.writeFileSync(outputPath, output, 'utf-8');

    console.log(`✅ 成功提取 ${keywords.length} 個重要字`);
    console.log(`📝 輸出文件: ${outputPath}`);
    console.log('\n內容預覽:');
    console.log(output);

  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`❌ 錯誤：找不到文件 "${filePath}"`);
    } else {
      console.error('❌ 錯誤:', error.message);
    }
    process.exit(1);
  }
}

// 從命令行參數獲取文件路徑
const filePath = process.argv[2];

if (!filePath) {
  console.error('❌ 請提供文件路徑');
  console.log('使用方式: node extract_keywords.cjs <filename>');
  console.log('範例: node extract_keywords.cjs scripts/example.txt');
  process.exit(1);
}

extractKeywords(filePath);
