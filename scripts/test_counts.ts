import { sentencePuzzles } from '../src/data/sentenceBuilderData';
const counts = sentencePuzzles.reduce((acc, p) => { acc[p.level] = (acc[p.level] || 0) + 1; return acc; }, {} as Record<string, number>);
console.log(counts);
