import { HSKLevel, WordTile, SentencePuzzle } from '../src/data/sentenceBuilderData';
import fs from 'fs';

const newPuzzles: SentencePuzzle[] = [
  // HSK 1
  {
    id: 'hsk1-5',
    level: 'HSK 1',
    englishTranslation: 'I love my family.',
    words: [
      { id: 'w1', chinese: '我', pinyin: 'wǒ', english: 'I' },
      { id: 'w2', chinese: '爱', pinyin: 'ài', english: 'love' },
      { id: 'w3', chinese: '我', pinyin: 'wǒ', english: 'my' },
      { id: 'w4', chinese: '的', pinyin: 'de', english: '(possessive)' },
      { id: 'w5', chinese: '家', pinyin: 'jiā', english: 'family' },
    ]
  },
  {
    id: 'hsk1-6',
    level: 'HSK 1',
    englishTranslation: 'He is reading a book.',
    words: [
      { id: 'w1', chinese: '他', pinyin: 'tā', english: 'he' },
      { id: 'w2', chinese: '在', pinyin: 'zài', english: 'is (doing)' },
      { id: 'w3', chinese: '看书', pinyin: 'kànshū', english: 'reading a book' },
    ]
  },
  {
    id: 'hsk1-7',
    level: 'HSK 1',
    englishTranslation: 'Let\'s go eat.',
    words: [
      { id: 'w1', chinese: '我们', pinyin: 'wǒmen', english: 'we' },
      { id: 'w2', chinese: '去', pinyin: 'qù', english: 'go' },
      { id: 'w3', chinese: '吃饭', pinyin: 'chīfàn', english: 'eat' },
      { id: 'w4', chinese: '吧', pinyin: 'ba', english: '(suggestion)' },
    ]
  },
  {
    id: 'hsk1-8',
    level: 'HSK 1',
    englishTranslation: 'Your clothes are very pretty.',
    words: [
      { id: 'w1', chinese: '你', pinyin: 'nǐ', english: 'your' },
      { id: 'w2', chinese: '的', pinyin: 'de', english: '(possessive)' },
      { id: 'w3', chinese: '衣服', pinyin: 'yīfu', english: 'clothes' },
      { id: 'w4', chinese: '很', pinyin: 'hěn', english: 'very' },
      { id: 'w5', chinese: '漂亮', pinyin: 'piàoliang', english: 'pretty' },
    ]
  },
  {
    id: 'hsk1-9',
    level: 'HSK 1',
    englishTranslation: 'What time is it now?',
    words: [
      { id: 'w1', chinese: '现在', pinyin: 'xiànzài', english: 'now' },
      { id: 'w2', chinese: '几', pinyin: 'jǐ', english: 'how many' },
      { id: 'w3', chinese: '点', pinyin: 'diǎn', english: 'o\'clock' },
      { id: 'w4', chinese: '了', pinyin: 'le', english: '(particle)' },
    ]
  },
  {
    id: 'hsk1-10',
    level: 'HSK 1',
    englishTranslation: 'I bought an apple.',
    words: [
      { id: 'w1', chinese: '我', pinyin: 'wǒ', english: 'I' },
      { id: 'w2', chinese: '买', pinyin: 'mǎi', english: 'bought' },
      { id: 'w3', chinese: '了', pinyin: 'le', english: '(particle)' },
      { id: 'w4', chinese: '一个', pinyin: 'yígè', english: 'one' },
      { id: 'w5', chinese: '苹果', pinyin: 'píngguǒ', english: 'apple' },
    ]
  },
  {
    id: 'hsk1-11',
    level: 'HSK 1',
    englishTranslation: 'She is my good friend.',
    words: [
      { id: 'w1', chinese: '她', pinyin: 'tā', english: 'she' },
      { id: 'w2', chinese: '是', pinyin: 'shì', english: 'is' },
      { id: 'w3', chinese: '我', pinyin: 'wǒ', english: 'my' },
      { id: 'w4', chinese: '的', pinyin: 'de', english: '(possessive)' },
      { id: 'w5', chinese: '好', pinyin: 'hǎo', english: 'good' },
      { id: 'w6', chinese: '朋友', pinyin: 'péngyou', english: 'friend' },
    ]
  },
  {
    id: 'hsk1-12',
    level: 'HSK 1',
    englishTranslation: 'How much is this thing?',
    words: [
      { id: 'w1', chinese: '这个', pinyin: 'zhège', english: 'this' },
      { id: 'w2', chinese: '东西', pinyin: 'dōngxi', english: 'thing' },
      { id: 'w3', chinese: '多少', pinyin: 'duōshao', english: 'how much' },
      { id: 'w4', chinese: '钱', pinyin: 'qián', english: 'money' },
    ]
  },

  // HSK 2
  {
    id: 'hsk2-3',
    level: 'HSK 2',
    englishTranslation: 'I drink milk every morning.',
    words: [
      { id: 'w1', chinese: '我', pinyin: 'wǒ', english: 'I' },
      { id: 'w2', chinese: '每天', pinyin: 'měitiān', english: 'every day' },
      { id: 'w3', chinese: '早上', pinyin: 'zǎoshang', english: 'morning' },
      { id: 'w4', chinese: '喝', pinyin: 'hē', english: 'drink' },
      { id: 'w5', chinese: '牛奶', pinyin: 'niúnǎi', english: 'milk' },
    ]
  },
  {
    id: 'hsk2-4',
    level: 'HSK 2',
    englishTranslation: 'It\'s raining outside, did you bring an umbrella?',
    words: [
      { id: 'w1', chinese: '外面', pinyin: 'wàimiàn', english: 'outside' },
      { id: 'w2', chinese: '在', pinyin: 'zài', english: 'is (doing)' },
      { id: 'w3', chinese: '下雨', pinyin: 'xiàyǔ', english: 'raining' },
      { id: 'w4', chinese: '你', pinyin: 'nǐ', english: 'you' },
      { id: 'w5', chinese: '带', pinyin: 'dài', english: 'bring' },
      { id: 'w6', chinese: '伞', pinyin: 'sǎn', english: 'umbrella' },
      { id: 'w7', chinese: '了', pinyin: 'le', english: '(particle)' },
      { id: 'w8', chinese: '吗', pinyin: 'ma', english: '(question)' },
    ]
  },
  {
    id: 'hsk2-5',
    level: 'HSK 2',
    englishTranslation: 'This piece of clothing is a bit expensive.',
    words: [
      { id: 'w1', chinese: '这', pinyin: 'zhè', english: 'this' },
      { id: 'w2', chinese: '件', pinyin: 'jiàn', english: '(measure word)' },
      { id: 'w3', chinese: '衣服', pinyin: 'yīfu', english: 'clothes' },
      { id: 'w4', chinese: '有点儿', pinyin: 'yǒudiǎnr', english: 'a bit' },
      { id: 'w5', chinese: '贵', pinyin: 'guì', english: 'expensive' },
    ]
  },
  {
    id: 'hsk2-6',
    level: 'HSK 2',
    englishTranslation: 'He is preparing for the exam.',
    words: [
      { id: 'w1', chinese: '他', pinyin: 'tā', english: 'he' },
      { id: 'w2', chinese: '正在', pinyin: 'zhèngzài', english: 'is currently' },
      { id: 'w3', chinese: '准备', pinyin: 'zhǔnbèi', english: 'preparing' },
      { id: 'w4', chinese: '考试', pinyin: 'kǎoshì', english: 'exam' },
    ]
  },
  {
    id: 'hsk2-7',
    level: 'HSK 2',
    englishTranslation: 'Welcome to our company.',
    words: [
      { id: 'w1', chinese: '欢迎', pinyin: 'huānyíng', english: 'welcome' },
      { id: 'w2', chinese: '你', pinyin: 'nǐ', english: 'you' },
      { id: 'w3', chinese: '来', pinyin: 'lái', english: 'come' },
      { id: 'w4', chinese: '我们', pinyin: 'wǒmen', english: 'our' },
      { id: 'w5', chinese: '公司', pinyin: 'gōngsī', english: 'company' },
    ]
  },
  {
    id: 'hsk2-8',
    level: 'HSK 2',
    englishTranslation: 'I think this movie is very interesting.',
    words: [
      { id: 'w1', chinese: '我', pinyin: 'wǒ', english: 'I' },
      { id: 'w2', chinese: '觉得', pinyin: 'juéde', english: 'think/feel' },
      { id: 'w3', chinese: '这个', pinyin: 'zhège', english: 'this' },
      { id: 'w4', chinese: '电影', pinyin: 'diànyǐng', english: 'movie' },
      { id: 'w5', chinese: '非常', pinyin: 'fēicháng', english: 'very' },
      { id: 'w6', chinese: '有意思', pinyin: 'yǒuyìsi', english: 'interesting' },
    ]
  },
  {
    id: 'hsk2-9',
    level: 'HSK 2',
    englishTranslation: 'Do you know how to get to the train station?',
    words: [
      { id: 'w1', chinese: '你', pinyin: 'nǐ', english: 'you' },
      { id: 'w2', chinese: '知道', pinyin: 'zhīdào', english: 'know' },
      { id: 'w3', chinese: '怎么', pinyin: 'zěnme', english: 'how' },
      { id: 'w4', chinese: '去', pinyin: 'qù', english: 'go' },
      { id: 'w5', chinese: '火车站', pinyin: 'huǒchēzhàn', english: 'train station' },
      { id: 'w6', chinese: '吗', pinyin: 'ma', english: '(question)' },
    ]
  },

  // HSK 3
  {
    id: 'hsk3-2',
    level: 'HSK 3',
    englishTranslation: 'He speaks Chinese better and better.',
    words: [
      { id: 'w1', chinese: '他', pinyin: 'tā', english: 'he' },
      { id: 'w2', chinese: '的', pinyin: 'de', english: '(possessive)' },
      { id: 'w3', chinese: '汉语', pinyin: 'hànyǔ', english: 'Chinese' },
      { id: 'w4', chinese: '说', pinyin: 'shuō', english: 'speaks' },
      { id: 'w5', chinese: '得', pinyin: 'de', english: '(complement)' },
      { id: 'w6', chinese: '越来越', pinyin: 'yuèláiyuè', english: 'more and more' },
      { id: 'w7', chinese: '好', pinyin: 'hǎo', english: 'good' },
      { id: 'w8', chinese: '了', pinyin: 'le', english: '(particle)' },
    ]
  },
  {
    id: 'hsk3-3',
    level: 'HSK 3',
    englishTranslation: 'Besides math, he also likes history.',
    words: [
      { id: 'w1', chinese: '除了', pinyin: 'chúle', english: 'besides' },
      { id: 'w2', chinese: '数学', pinyin: 'shùxué', english: 'math' },
      { id: 'w4', chinese: '他', pinyin: 'tā', english: 'he' },
      { id: 'w5', chinese: '还', pinyin: 'hái', english: 'also' },
      { id: 'w6', chinese: '喜欢', pinyin: 'xǐhuān', english: 'likes' },
      { id: 'w7', chinese: '历史', pinyin: 'lìshǐ', english: 'history' },
    ]
  },
  {
    id: 'hsk3-4',
    level: 'HSK 3',
    englishTranslation: 'If it rains tomorrow, we won\'t go mountain climbing.',
    words: [
      { id: 'w1', chinese: '如果', pinyin: 'rúguǒ', english: 'if' },
      { id: 'w2', chinese: '明天', pinyin: 'míngtiān', english: 'tomorrow' },
      { id: 'w3', chinese: '下雨', pinyin: 'xiàyǔ', english: 'rains' },
      { id: 'w5', chinese: '我们', pinyin: 'wǒmen', english: 'we' },
      { id: 'w6', chinese: '就', pinyin: 'jiù', english: 'then' },
      { id: 'w7', chinese: '不去', pinyin: 'bú qù', english: 'won\'t go' },
      { id: 'w8', chinese: '爬山', pinyin: 'páshān', english: 'mountain climbing' },
      { id: 'w9', chinese: '了', pinyin: 'le', english: '(particle)' },
    ]
  },
  {
    id: 'hsk3-5',
    level: 'HSK 3',
    englishTranslation: 'Please turn on the air conditioner, it\'s too hot.',
    words: [
      { id: 'w1', chinese: '请', pinyin: 'qǐng', english: 'please' },
      { id: 'w2', chinese: '你', pinyin: 'nǐ', english: 'you' },
      { id: 'w3', chinese: '把', pinyin: 'bǎ', english: '(object marker)' },
      { id: 'w4', chinese: '空调', pinyin: 'kōngtiáo', english: 'air conditioner' },
      { id: 'w5', chinese: '打开', pinyin: 'dǎkāi', english: 'turn on' },
      { id: 'w7', chinese: '太', pinyin: 'tài', english: 'too' },
      { id: 'w8', chinese: '热', pinyin: 'rè', english: 'hot' },
      { id: 'w9', chinese: '了', pinyin: 'le', english: '(particle)' },
    ]
  },
  {
    id: 'hsk3-6',
    level: 'HSK 3',
    englishTranslation: 'What are your plans for this weekend?',
    words: [
      { id: 'w1', chinese: '这个', pinyin: 'zhège', english: 'this' },
      { id: 'w2', chinese: '周末', pinyin: 'zhōumò', english: 'weekend' },
      { id: 'w3', chinese: '你', pinyin: 'nǐ', english: 'you' },
      { id: 'w4', chinese: '打算', pinyin: 'dǎsuàn', english: 'plan' },
      { id: 'w5', chinese: '做', pinyin: 'zuò', english: 'do' },
      { id: 'w6', chinese: '什么', pinyin: 'shénme', english: 'what' },
    ]
  },

  // HSK 4
  {
    id: 'hsk4-2',
    level: 'HSK 4',
    englishTranslation: 'Since you have already decided, I won\'t say anything more.',
    words: [
      { id: 'w1', chinese: '既然', pinyin: 'jìrán', english: 'since' },
      { id: 'w2', chinese: '你', pinyin: 'nǐ', english: 'you' },
      { id: 'w3', chinese: '已经', pinyin: 'yǐjīng', english: 'already' },
      { id: 'w4', chinese: '决定', pinyin: 'juédìng', english: 'decided' },
      { id: 'w5', chinese: '了', pinyin: 'le', english: '(particle)' },
      { id: 'w7', chinese: '我', pinyin: 'wǒ', english: 'I' },
      { id: 'w8', chinese: '就', pinyin: 'jiù', english: 'then' },
      { id: 'w9', chinese: '不再', pinyin: 'búzài', english: 'no longer' },
      { id: 'w10', chinese: '说', pinyin: 'shuō', english: 'say' },
      { id: 'w11', chinese: '什么', pinyin: 'shénme', english: 'anything' },
      { id: 'w12', chinese: '了', pinyin: 'le', english: '(particle)' },
    ]
  },
  {
    id: 'hsk4-3',
    level: 'HSK 4',
    englishTranslation: 'With the development of the economy, people\'s living standards have improved.',
    words: [
      { id: 'w1', chinese: '随着', pinyin: 'suízhe', english: 'with' },
      { id: 'w2', chinese: '经济', pinyin: 'jīngjì', english: 'economy' },
      { id: 'w3', chinese: '的', pinyin: 'de', english: '(possessive)' },
      { id: 'w4', chinese: '发展', pinyin: 'fāzhǎn', english: 'development' },
      { id: 'w6', chinese: '人们', pinyin: 'rénmen', english: 'people' },
      { id: 'w7', chinese: '的', pinyin: 'de', english: '(possessive)' },
      { id: 'w8', chinese: '生活', pinyin: 'shēnghuó', english: 'living' },
      { id: 'w9', chinese: '水平', pinyin: 'shuǐpíng', english: 'standards' },
      { id: 'w10', chinese: '提高', pinyin: 'tígāo', english: 'improved' },
      { id: 'w11', chinese: '了', pinyin: 'le', english: '(particle)' },
    ]
  },
  {
    id: 'hsk4-4',
    level: 'HSK 4',
    englishTranslation: 'He can not only speak English, but also speak fluent Chinese.',
    words: [
      { id: 'w1', chinese: '他', pinyin: 'tā', english: 'he' },
      { id: 'w2', chinese: '不仅', pinyin: 'bùjǐn', english: 'not only' },
      { id: 'w3', chinese: '会', pinyin: 'huì', english: 'can' },
      { id: 'w4', chinese: '说', pinyin: 'shuō', english: 'speak' },
      { id: 'w5', chinese: '英语', pinyin: 'yīngyǔ', english: 'English' },
      { id: 'w7', chinese: '而且', pinyin: 'érqiě', english: 'but also' },
      { id: 'w8', chinese: '还', pinyin: 'hái', english: 'still/also' },
      { id: 'w9', chinese: '会', pinyin: 'huì', english: 'can' },
      { id: 'w10', chinese: '说', pinyin: 'shuō', english: 'speak' },
      { id: 'w11', chinese: '流利', pinyin: 'liúlì', english: 'fluent' },
      { id: 'w12', chinese: '的', pinyin: 'de', english: '(modifier)' },
      { id: 'w13', chinese: '汉语', pinyin: 'hànyǔ', english: 'Chinese' },
    ]
  },
  {
    id: 'hsk4-5',
    level: 'HSK 4',
    englishTranslation: 'In order to protect the environment, we should reduce the use of plastic bags.',
    words: [
      { id: 'w1', chinese: '为了', pinyin: 'wèile', english: 'in order to' },
      { id: 'w2', chinese: '保护', pinyin: 'bǎohù', english: 'protect' },
      { id: 'w3', chinese: '环境', pinyin: 'huánjìng', english: 'environment' },
      { id: 'w5', chinese: '我们', pinyin: 'wǒmen', english: 'we' },
      { id: 'w6', chinese: '应该', pinyin: 'yīnggāi', english: 'should' },
      { id: 'w7', chinese: '减少', pinyin: 'jiǎnshǎo', english: 'reduce' },
      { id: 'w8', chinese: '使用', pinyin: 'shǐyòng', english: 'use' },
      { id: 'w9', chinese: '塑料袋', pinyin: 'sùliàodài', english: 'plastic bags' },
    ]
  },

  // HSK 5
  {
    id: 'hsk5-2',
    level: 'HSK 5',
    englishTranslation: 'Only by continuously learning can one adapt to the development of society.',
    words: [
      { id: 'w1', chinese: '只有', pinyin: 'zhǐyǒu', english: 'only by' },
      { id: 'w2', chinese: '不断', pinyin: 'búduàn', english: 'continuously' },
      { id: 'w3', chinese: '学习', pinyin: 'xuéxí', english: 'learning' },
      { id: 'w5', chinese: '才能', pinyin: 'cáinéng', english: 'can one' },
      { id: 'w6', chinese: '适应', pinyin: 'shìyìng', english: 'adapt to' },
      { id: 'w7', chinese: '社会', pinyin: 'shèhuì', english: 'society' },
      { id: 'w8', chinese: '的', pinyin: 'de', english: '(possessive)' },
      { id: 'w9', chinese: '发展', pinyin: 'fāzhǎn', english: 'development' },
    ]
  },
  {
    id: 'hsk5-3',
    level: 'HSK 5',
    englishTranslation: 'Rather than complaining about the environment, it is better to work hard to change oneself.',
    words: [
      { id: 'w1', chinese: '与其', pinyin: 'yǔqí', english: 'rather than' },
      { id: 'w2', chinese: '抱怨', pinyin: 'bàoyuàn', english: 'complaining' },
      { id: 'w3', chinese: '环境', pinyin: 'huánjìng', english: 'environment' },
      { id: 'w5', chinese: '不如', pinyin: 'bùrú', english: 'it is better to' },
      { id: 'w6', chinese: '努力', pinyin: 'nǔlì', english: 'work hard' },
      { id: 'w7', chinese: '改变', pinyin: 'gǎibiàn', english: 'change' },
      { id: 'w8', chinese: '自己', pinyin: 'zìjǐ', english: 'oneself' },
    ]
  },
  {
    id: 'hsk5-4',
    level: 'HSK 5',
    englishTranslation: 'This movie not only has high box office, but also has good word-of-mouth.',
    words: [
      { id: 'w1', chinese: '这部', pinyin: 'zhè bù', english: 'this' },
      { id: 'w2', chinese: '电影', pinyin: 'diànyǐng', english: 'movie' },
      { id: 'w3', chinese: '不仅', pinyin: 'bùjǐn', english: 'not only' },
      { id: 'w4', chinese: '票房', pinyin: 'piàofáng', english: 'box office' },
      { id: 'w5', chinese: '高', pinyin: 'gāo', english: 'high' },
      { id: 'w7', chinese: '而且', pinyin: 'érqiě', english: 'but also' },
      { id: 'w8', chinese: '口碑', pinyin: 'kǒubēi', english: 'word-of-mouth' },
      { id: 'w9', chinese: '也', pinyin: 'yě', english: 'also' },
      { id: 'w10', chinese: '很', pinyin: 'hěn', english: 'very' },
      { id: 'w11', chinese: '好', pinyin: 'hǎo', english: 'good' },
    ]
  },

  // HSK 6
  {
    id: 'hsk6-2',
    level: 'HSK 6',
    englishTranslation: 'No matter how times change, this spirit will never be outdated.',
    words: [
      { id: 'w1', chinese: '无论', pinyin: 'wúlùn', english: 'no matter' },
      { id: 'w2', chinese: '时代', pinyin: 'shídài', english: 'times' },
      { id: 'w3', chinese: '如何', pinyin: 'rúhé', english: 'how' },
      { id: 'w4', chinese: '变迁', pinyin: 'biànqiān', english: 'change' },
      { id: 'w6', chinese: '这种', pinyin: 'zhè zhǒng', english: 'this kind of' },
      { id: 'w7', chinese: '精神', pinyin: 'jīngshén', english: 'spirit' },
      { id: 'w8', chinese: '永远', pinyin: 'yǒngyuǎn', english: 'forever' },
      { id: 'w9', chinese: '不会', pinyin: 'bú huì', english: 'will not' },
      { id: 'w10', chinese: '过时', pinyin: 'guòshí', english: 'outdated' },
    ]
  },
  {
    id: 'hsk6-3',
    level: 'HSK 6',
    englishTranslation: 'Only by mastering core technologies can an enterprise remain invincible in competition.',
    words: [
      { id: 'w1', chinese: '只有', pinyin: 'zhǐyǒu', english: 'only by' },
      { id: 'w2', chinese: '掌握', pinyin: 'zhǎngwò', english: 'mastering' },
      { id: 'w3', chinese: '了', pinyin: 'le', english: '(particle)' },
      { id: 'w4', chinese: '核心', pinyin: 'héxīn', english: 'core' },
      { id: 'w5', chinese: '技术', pinyin: 'jìshù', english: 'technologies' },
      { id: 'w7', chinese: '企业', pinyin: 'qǐyè', english: 'enterprise' },
      { id: 'w8', chinese: '才能', pinyin: 'cáinéng', english: 'can' },
      { id: 'w9', chinese: '在', pinyin: 'zài', english: 'in' },
      { id: 'w10', chinese: '竞争', pinyin: 'jìngzhēng', english: 'competition' },
      { id: 'w11', chinese: '中', pinyin: 'zhōng', english: 'middle' },
      { id: 'w12', chinese: '立于不败之地', pinyin: 'lìyúbúbàizhīdì', english: 'remain invincible' },
    ]
  }
];

import { sentencePuzzles as existingPuzzles } from '../src/data/sentenceBuilderData';

const allPuzzles = [...existingPuzzles, ...newPuzzles];

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
