# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Node.js project for creating Anki flashcard decks from vocabulary word lists. The project converts JavaScript card definitions into CSV files that can be imported into Anki for language learning.

## Architecture

- **Main Script**: `create_deck.cjs` - The primary script that processes vocabulary files and generates CSV output
- **Data Files**: `vocabularies/` directory contains card definition files (card_1.cjs, card_2.cjs, etc.)
- **Output**: `dist/` directory contains generated CSV files for Anki import

### Card Data Structure

Each vocabulary file exports an array of card objects with this structure:
```javascript
{
  word: "example",
  definition: "A detailed explanation",
  example: "Usage in a sentence",
  synonyms: "similar words",
  notes: "Additional notes or root words"
}
```

## Common Commands

### Create Anki Deck
```bash
npm run create <filename>
```
or
```bash
node create_deck.cjs <filename>
```

Examples:
- `npm run create card_1.cjs`
- `npm run create card_1` (auto-adds .cjs extension)

### Project Structure
- Input files: `vocabularies/card_X.cjs`
- Output files: `dist/anki_vocabulary_card_X.csv`

## Development Notes

- The project uses CommonJS modules (.cjs files)
- CSV output includes UTF-8 BOM for proper encoding
- Generated CSV format: front side (word) and back side (definition, example, synonyms, notes)
- HTML formatting is used in CSV output (`<br><br>` for line breaks)
- Error handling includes validation for missing files and malformed card data

## File Processing

The main script processes vocabulary files by:
1. Loading card data from specified file
2. Formatting each card into CSV-compatible format
3. Handling special characters and escaping quotes
4. Writing to dist/ directory with UTF-8 encoding
5. Providing import instructions for Anki

## Dependencies

The project uses basic Node.js built-in modules (fs, path) and does not require external dependencies beyond what's specified in package.json.