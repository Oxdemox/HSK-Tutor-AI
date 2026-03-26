const segmenter = new Intl.Segmenter('zh', { granularity: 'word' });
const segments = Array.from(segmenter.segment('我是学生。')).filter(s => s.isWordLike);
console.log(segments.map(s => s.segment));
