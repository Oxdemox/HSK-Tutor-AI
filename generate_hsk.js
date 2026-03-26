import fs from 'fs';
import https from 'https';

const fetchJson = (url) => new Promise((resolve, reject) => {
  https.get(url, { headers: { 'User-Agent': 'node.js' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => resolve(JSON.parse(data)));
  }).on('error', reject);
});

async function main() {
  const levels = [1, 2, 3, 4, 5, 6];
  let allVocab = [];
  
  for (const level of levels) {
    console.log(`Fetching HSK ${level}...`);
    const data = await fetchJson(`https://raw.githubusercontent.com/clem109/hsk-vocabulary/master/hsk-vocab-json/hsk-level-${level}.json`);
    
    const wordsPerLesson = level <= 3 ? (level === 3 ? 15 : 10) : (level === 4 ? 20 : (level === 5 ? 30 : 50));
    
    const formatted = data.map((item, index) => {
      const english = item.translations.filter(t => !t.startsWith('CL:')).join(', ');
      return {
        id: `HSK${level}-${index + 1}`,
        hanzi: item.hanzi,
        pinyin: item.pinyin,
        english: english,
        level: `HSK ${level}`,
        lesson: Math.floor(index / wordsPerLesson) + 1
      };
    });
    
    allVocab = allVocab.concat(formatted);
  }
  
  const tsContent = `export type HSKLevel = 'HSK 1' | 'HSK 2' | 'HSK 3' | 'HSK 4' | 'HSK 5' | 'HSK 6';

export type VocabularyItem = {
  id: string;
  hanzi: string;
  pinyin: string;
  english: string;
  level: HSKLevel;
  lesson: number;
};

const data: any[] = ${JSON.stringify(allVocab, null, 2)};

export const hskVocabulary: VocabularyItem[] = data as VocabularyItem[];
`;

  fs.writeFileSync('src/data/hsk.ts', tsContent);
  console.log('Successfully generated src/data/hsk.ts');
}

main().catch(console.error);
