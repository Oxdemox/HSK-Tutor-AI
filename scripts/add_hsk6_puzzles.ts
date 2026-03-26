import { HSKLevel, WordTile, SentencePuzzle } from '../src/data/sentenceBuilderData';
import fs from 'fs';

const newPuzzles: SentencePuzzle[] = [
  {
    id: 'hsk6-extra-1',
    level: 'HSK 6',
    englishTranslation: 'He is not only smart, but also very diligent.',
    words: [
      { id: 'w1', chinese: '他', pinyin: 'tā', english: 'he' },
      { id: 'w2', chinese: '不但', pinyin: 'bùdàn', english: 'not only' },
      { id: 'w3', chinese: '聪明', pinyin: 'cōngmíng', english: 'smart' },
      { id: 'w4', chinese: '，', pinyin: ',', english: ',' },
      { id: 'w5', chinese: '而且', pinyin: 'érqiě', english: 'but also' },
      { id: 'w6', chinese: '非常', pinyin: 'fēicháng', english: 'very' },
      { id: 'w7', chinese: '勤奋', pinyin: 'qínfèn', english: 'diligent' },
    ]
  },
  {
    id: 'hsk6-extra-2',
    level: 'HSK 6',
    englishTranslation: 'We must protect the environment to leave a better world for our children.',
    words: [
      { id: 'w1', chinese: '我们', pinyin: 'wǒmen', english: 'we' },
      { id: 'w2', chinese: '必须', pinyin: 'bìxū', english: 'must' },
      { id: 'w3', chinese: '保护', pinyin: 'bǎohù', english: 'protect' },
      { id: 'w4', chinese: '环境', pinyin: 'huánjìng', english: 'environment' },
      { id: 'w5', chinese: '，', pinyin: ',', english: ',' },
      { id: 'w6', chinese: '为', pinyin: 'wèi', english: 'for' },
      { id: 'w7', chinese: '子孙后代', pinyin: 'zǐsūnhòudài', english: 'future generations' },
      { id: 'w8', chinese: '留下', pinyin: 'liúxià', english: 'leave behind' },
      { id: 'w9', chinese: '美好', pinyin: 'měihǎo', english: 'beautiful' },
      { id: 'w10', chinese: '的', pinyin: 'de', english: '(possessive)' },
      { id: 'w11', chinese: '世界', pinyin: 'shìjiè', english: 'world' },
    ]
  },
  {
    id: 'hsk6-extra-3',
    level: 'HSK 6',
    englishTranslation: 'In the face of difficulties, we should not easily give up.',
    words: [
      { id: 'w1', chinese: '面对', pinyin: 'miànduì', english: 'face' },
      { id: 'w2', chinese: '困难', pinyin: 'kùnnán', english: 'difficulties' },
      { id: 'w3', chinese: '，', pinyin: ',', english: ',' },
      { id: 'w4', chinese: '我们', pinyin: 'wǒmen', english: 'we' },
      { id: 'w5', chinese: '不', pinyin: 'bù', english: 'not' },
      { id: 'w6', chinese: '应该', pinyin: 'yīnggāi', english: 'should' },
      { id: 'w7', chinese: '轻易', pinyin: 'qīngyì', english: 'easily' },
      { id: 'w8', chinese: '放弃', pinyin: 'fàngqì', english: 'give up' },
    ]
  },
  {
    id: 'hsk6-extra-4',
    level: 'HSK 6',
    englishTranslation: 'This book had a profound impact on me.',
    words: [
      { id: 'w1', chinese: '这', pinyin: 'zhè', english: 'this' },
      { id: 'w2', chinese: '本', pinyin: 'běn', english: 'measure word' },
      { id: 'w3', chinese: '书', pinyin: 'shū', english: 'book' },
      { id: 'w4', chinese: '对', pinyin: 'duì', english: 'to' },
      { id: 'w5', chinese: '我', pinyin: 'wǒ', english: 'me' },
      { id: 'w6', chinese: '产生', pinyin: 'chǎnshēng', english: 'produce' },
      { id: 'w7', chinese: '了', pinyin: 'le', english: 'particle' },
      { id: 'w8', chinese: '深远', pinyin: 'shēnyuǎn', english: 'profound' },
      { id: 'w9', chinese: '的', pinyin: 'de', english: 'particle' },
      { id: 'w10', chinese: '影响', pinyin: 'yǐngxiǎng', english: 'impact' },
    ]
  },
  {
    id: 'hsk6-extra-5',
    level: 'HSK 6',
    englishTranslation: 'The success of this project depends on everyone\'s joint efforts.',
    words: [
      { id: 'w1', chinese: '这个', pinyin: 'zhège', english: 'this' },
      { id: 'w2', chinese: '项目', pinyin: 'xiàngmù', english: 'project' },
      { id: 'w3', chinese: '的', pinyin: 'de', english: 'particle' },
      { id: 'w4', chinese: '成功', pinyin: 'chénggōng', english: 'success' },
      { id: 'w5', chinese: '取决于', pinyin: 'qǔjuéyú', english: 'depends on' },
      { id: 'w6', chinese: '大家', pinyin: 'dàjiā', english: 'everyone' },
      { id: 'w7', chinese: '的', pinyin: 'de', english: 'particle' },
      { id: 'w8', chinese: '共同', pinyin: 'gòngtóng', english: 'joint' },
      { id: 'w9', chinese: '努力', pinyin: 'nǔlì', english: 'efforts' },
    ]
  },
  {
    id: 'hsk6-extra-6',
    level: 'HSK 6',
    englishTranslation: 'He has rich experience in this field.',
    words: [
      { id: 'w1', chinese: '他', pinyin: 'tā', english: 'he' },
      { id: 'w2', chinese: '在', pinyin: 'zài', english: 'in' },
      { id: 'w3', chinese: '这个', pinyin: 'zhège', english: 'this' },
      { id: 'w4', chinese: '领域', pinyin: 'lǐngyù', english: 'field' },
      { id: 'w5', chinese: '拥有', pinyin: 'yōngyǒu', english: 'possess' },
      { id: 'w6', chinese: '丰富', pinyin: 'fēngfù', english: 'rich' },
      { id: 'w7', chinese: '的', pinyin: 'de', english: 'particle' },
      { id: 'w8', chinese: '经验', pinyin: 'jīngyàn', english: 'experience' },
    ]
  },
  {
    id: 'hsk6-extra-7',
    level: 'HSK 6',
    englishTranslation: 'We should maintain an optimistic attitude towards life.',
    words: [
      { id: 'w1', chinese: '我们', pinyin: 'wǒmen', english: 'we' },
      { id: 'w2', chinese: '应该', pinyin: 'yīnggāi', english: 'should' },
      { id: 'w3', chinese: '保持', pinyin: 'bǎochí', english: 'maintain' },
      { id: 'w4', chinese: '乐观', pinyin: 'lèguān', english: 'optimistic' },
      { id: 'w5', chinese: '的', pinyin: 'de', english: 'particle' },
      { id: 'w6', chinese: '生活', pinyin: 'shēnghuó', english: 'life' },
      { id: 'w7', chinese: '态度', pinyin: 'tàidù', english: 'attitude' },
    ]
  }
];

import { sentencePuzzles as existingPuzzles } from '../src/data/sentenceBuilderData';

// Filter out commas and punctuation from words array
const cleanedNewPuzzles = newPuzzles.map(p => ({
  ...p,
  words: p.words.filter(w => !/[，。？！、：；“”‘’（）《》【】]/.test(w.chinese))
}));

const allPuzzles = [...existingPuzzles, ...cleanedNewPuzzles];

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

fs.writeFileSync('./src/data/sentenceBuilderData.ts', fileContent);
console.log('Successfully added new puzzles to sentenceBuilderData.ts');
