/* cards.cjs
   ──────────
   將單字清單宣告成常數，並以 CommonJS 匿名匯出。
   其他檔案只要 `require('./cards.cjs')` 就能取得整個陣列。 */
// 追加到既有 CARDS 陣列的內容
const CARDS = [
  {
    word: "canteen",
    definition:
      "1) A cafeteria or small restaurant (often in a school, military base, or workplace). 2) A portable container for carrying drinking water.",
    example:
      "We grabbed lunch at the company canteen before heading back to our desks.",
    synonyms: "cafeteria, mess hall; (container) water bottle, flask",
    notes:
      "⚠️ 英式英文中可指『飯盒』；此處著重於『公共食堂』與『水壺』兩義。"
  },
  {
    word: "converge",
    definition:
      "To move toward the same point and eventually meet or come together.",
    example:
      "Rivers from the surrounding hills converge in the valley before flowing to the sea.",
    synonyms: "meet, intersect, unite",
    notes: ""
  },
  {
    word: "plates",
    definition:
      "In geology, the large, rigid pieces of Earth’s lithosphere that move and interact at their boundaries.",
    example:
      "The movement of tectonic plates is responsible for earthquakes and mountain formation.",
    synonyms: "tectonic plates, slabs",
    notes: "單數作 *plate*；地質學常稱 *tectonic plates*。"
  },
  {
    word: "collide",
    definition:
      "To crash into or strike something or each other with force.",
    example:
      "Two cars collided at the intersection during the heavy rain.",
    synonyms: "crash, smash, hit",
    notes: ""
  },
  {
    word: "head on",
    definition:
      "With the front or face first; in a direct or frontal manner (often describing collisions or approaches).",
    example:
      "Instead of avoiding the issue, she decided to tackle the problem head on.",
    synonyms: "directly, frontally",
    notes: ""
  },
  {
    word: "convergent boundaries",
    definition:
      "Tectonic plate margins where two plates move toward each other, often causing subduction or continental collision.",
    example:
      "The Himalayas formed at a convergent boundary where the Indian and Eurasian plates collide.",
    synonyms: "collisional margins, destructive boundaries",
    notes:
      "三類板塊邊界之一（另有 *divergent*、*transform*）。"
  },
  {
    word: "profusion",
    definition:
      "An extremely large quantity or abundance of something.",
    example:
      "Spring brought a profusion of wildflowers to the meadow.",
    synonyms: "abundance, plethora, cornucopia",
    notes: ""
  },
  {
    word: "geologic",
    definition:
      "Relating to the science of geology or the structure of the Earth’s crust.",
    example:
      "Geologic evidence shows that the region experienced volcanic activity millions of years ago.",
    synonyms: "geological (BrE variant)",
    notes: "形容詞；名詞為 *geology*。"
  },
  {
    word: "collision",
    definition:
      "The act of colliding; a violent impact or crash between two or more bodies.",
    example:
      "The collision of the two continental plates uplifted the mountain range.",
    synonyms: "impact, crash, smash",
    notes: ""
  },
  {
    word: "subduction",
    definition:
      "The process in plate tectonics where one tectonic plate moves under another and sinks into the mantle.",
    example:
      "Deep ocean trenches mark zones of active subduction.",
    synonyms: "underthrusting (technical)",
    notes: "通常發生於 *oceanic–continental* 或 *oceanic–oceanic* 交界。"
  },
];

module.exports = CARDS; // 匯出更新後的陣列

