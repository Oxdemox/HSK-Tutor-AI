
import { hskVocabulary } from '../src/data/hsk';

const CHARACTERS_BY_LEVEL: Record<string, any[]> = {
  'HSK 1': [],
  'HSK 2': [],
  'HSK 3': [],
  'HSK 4': [],
  'HSK 5': [],
  'HSK 6': []
};

const charMap = new Map();

// First pass: collect all single characters to have a base dictionary
hskVocabulary.forEach(item => {
  if (item.hanzi.length === 1) {
    if (!charMap.has(item.hanzi)) {
      charMap.set(item.hanzi, {
        pinyin: item.pinyin,
        meaning: item.english.split(',')[0].split(';')[0].trim()
      });
    }
  }
});

// Second pass: extract characters from all words
hskVocabulary.forEach(item => {
  const chars = item.hanzi.split('');
  const pinyins = item.pinyin.split(' ');
  
  chars.forEach((char, i) => {
    if (!char.match(/[\u4e00-\u9fa5]/)) return; // Skip non-chinese characters
    
    if (!charMap.has(char)) {
      // Try to infer pinyin if it's a multi-character word with space-separated pinyin
      let inferredPinyin = pinyins[i] || '';
      charMap.set(char, {
        pinyin: inferredPinyin,
        meaning: 'Part of ' + item.hanzi + ' (' + item.english.split(',')[0].trim() + ')'
      });
    }
    
    // Add to the level if not already added
    const levelList = CHARACTERS_BY_LEVEL[item.level];
    if (!levelList.find(c => c.char === char)) {
      const info = charMap.get(char);
      levelList.push({
        char: char,
        pinyin: info.pinyin,
        meaning: info.meaning
      });
    }
  });
});

console.log(JSON.stringify(CHARACTERS_BY_LEVEL, null, 2));
