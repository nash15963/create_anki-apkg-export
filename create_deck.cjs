/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const AnkiExport = require("anki-apkg-export").default;
const CARDS = require("./cards.cjs"); // first : fix import path

const deckName = "Vocabulary Cards";
const apkg = new AnkiExport(deckName);

CARDS.forEach((card) => {
  const back = [
    `<b>Definition:</b> ${card.definition}`,
    `<b>Example:</b> ${card.example}`,
    card.synonyms ? `<b>Synonyms:</b> ${card.synonyms}` : "",
    card.notes ? `<b>Notes:</b> ${card.notes}` : "",
  ]
    .filter(Boolean)
    .join("<br>");

  apkg.addCard(card.word, back);
});

// Second: fix the output path
const outPath = path.resolve(__dirname, "anki_vocabulary_cards.apkg");

apkg
  .save()
  .then((zip) => {
    fs.writeFileSync(outPath, zip, "binary");
    console.log("Deck generated:", outPath);
  })
  .catch(console.error);
