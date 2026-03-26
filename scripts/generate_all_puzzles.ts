import { readFileSync, writeFileSync } from 'fs';

// Load vocabulary
const hskData = readFileSync('./src/data/hsk.ts', 'utf-8');
const dataMatch = hskData.match(/const data: any\[\] = (\[[\s\S]*?\]);/);
if (!dataMatch) {
  console.error('Could not find data array');
  process.exit(1);
}
const vocabList = eval(dataMatch[1]);
const vocabDict = new Map();
vocabList.forEach((v: any) => {
  vocabDict.set(v.hanzi, v);
});

// Load grammar
const grammarDataStr = readFileSync('./src/data/hskGrammar.ts', 'utf-8');
const grammarMatch = grammarDataStr.match(/export const hskGrammar: Record<HSKLevel, GrammarPoint\[\]> = (\{[\s\S]*?\});/);
if (!grammarMatch) {
  console.error('Could not find grammar object');
  process.exit(1);
}
const hskGrammar = eval('(' + grammarMatch[1] + ')');

const allPuzzles: any[] = [];
let puzzleIdCounter = 1;

function segmentSentence(sentence: string) {
  const words = [];
  let i = 0;
  let allMatched = true;
  while (i < sentence.length) {
    const char = sentence[i];
    // Skip punctuation
    if (/[，。？！、：；“”‘’（）《》【】\s]/u.test(char)) {
      i++;
      continue;
    }

    let matchFound = false;
    // Try to match the longest word possible (up to 4 characters)
    for (let len = 4; len > 0; len--) {
      if (i + len <= sentence.length) {
        const word = sentence.substring(i, i + len);
        if (vocabDict.has(word)) {
          words.push(vocabDict.get(word));
          i += len;
          matchFound = true;
          break;
        }
      }
    }
    if (!matchFound) {
      allMatched = false;
      break;
    }
  }
  return { words, allMatched };
}

for (const level of Object.keys(hskGrammar)) {
  const points = hskGrammar[level];
  for (const point of points) {
    for (const example of point.examples) {
      const { words, allMatched } = segmentSentence(example.chinese);
      if (allMatched && words.length > 1) {
        const puzzle = {
          id: `gen-${puzzleIdCounter++}`,
          level: level,
          englishTranslation: example.english,
          words: words.map((w, idx) => ({
            id: `w${idx + 1}`,
            chinese: w.hanzi,
            pinyin: w.pinyin,
            english: w.english.split(',')[0].trim() // Use only the first meaning for brevity
          }))
        };
        allPuzzles.push(puzzle);
      }
    }
  }
}

console.log(`Generated ${allPuzzles.length} puzzles.`);

const fileContent = `export type HSKLevel = 'HSK 1' | 'HSK 2' | 'HSK 3' | 'HSK 4' | 'HSK 5' | 'HSK 6';

export interface WordTile {
  id: string;
  chinese: string;
  pinyin: string;
  english: string;
}

export interface SentencePuzzle {
  id: string;
  level: HSKLevel;
  englishTranslation: string;
  words: WordTile[];
}

export const sentencePuzzles: SentencePuzzle[] = ${JSON.stringify(allPuzzles, null, 2)};
`;

writeFileSync('./src/data/sentenceBuilderData.ts', fileContent);
console.log('Successfully wrote to sentenceBuilderData.ts');
