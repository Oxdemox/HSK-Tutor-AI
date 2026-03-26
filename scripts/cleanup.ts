import { readFileSync, writeFileSync } from 'fs';
import { sentencePuzzles } from '../src/data/sentenceBuilderData';

const cleanedPuzzles = sentencePuzzles.filter(p => !p.id.startsWith('gen-tpl-'));

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

export const sentencePuzzles: SentencePuzzle[] = ${JSON.stringify(cleanedPuzzles, null, 2)};
`;

writeFileSync('./src/data/sentenceBuilderData.ts', fileContent);
console.log(`Cleaned up generated puzzles. Remaining puzzles: ${cleanedPuzzles.length}`);
