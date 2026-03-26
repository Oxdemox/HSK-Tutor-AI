import { readFileSync } from 'fs';

// Load vocabulary
const hskData = readFileSync('./src/data/hsk.ts', 'utf-8');
// Extract the data array using regex or eval
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

function segmentSentence(sentence: string) {
  const words = [];
  let i = 0;
  while (i < sentence.length) {
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
      // If no match, just add the character as an unknown word
      const char = sentence[i];
      // Skip punctuation
      if (!/[，。？！、：；“”‘’（）《》【】]/u.test(char)) {
        words.push({ hanzi: char, pinyin: '', english: '' });
      }
      i++;
    }
  }
  return words;
}

console.log(segmentSentence('我是学生。').map(w => w.hanzi));
console.log(segmentSentence('他喜欢吃苹果吗？').map(w => w.hanzi));
