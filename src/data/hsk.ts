export type HSKLevel = 'HSK 1' | 'HSK 2' | 'HSK 3' | 'HSK 4' | 'HSK 5' | 'HSK 6';

export type VocabularyItem = {
  id: string;
  hanzi: string;
  pinyin: string;
  english: string;
  level: HSKLevel;
  lesson: number;
};

const data: any[] = [
  {
    "id": "HSK1-1",
    "hanzi": "爱",
    "pinyin": "ài",
    "english": "to love, affection, to be fond of, to like",
    "level": "HSK 1",
    "lesson": 1
  },
  {
    "id": "HSK1-2",
    "hanzi": "八",
    "pinyin": "bā",
    "english": "eight, 8",
    "level": "HSK 1",
    "lesson": 1
  },
  {
    "id": "HSK1-3",
    "hanzi": "爸爸",
    "pinyin": "bà ba",
    "english": "(informal) father, 位[wèi]",
    "level": "HSK 1",
    "lesson": 1
  },
  {
    "id": "HSK1-4",
    "hanzi": "杯子",
    "pinyin": "bēi zi",
    "english": "cup, glass, 支, 枝[zhī]",
    "level": "HSK 1",
    "lesson": 1
  },
  {
    "id": "HSK1-5",
    "hanzi": "北京",
    "pinyin": "Běi jīng",
    "english": "Beijing, capital of People's Republic of China, Peking, PRC government",
    "level": "HSK 1",
    "lesson": 1
  },
  {
    "id": "HSK1-6",
    "hanzi": "本",
    "pinyin": "běn",
    "english": "roots or stems of plants, origin, source, this, the current, root, foundation, basis, classifier for books, periodicals, files etc, originally",
    "level": "HSK 1",
    "lesson": 1
  },
  {
    "id": "HSK1-7",
    "hanzi": "不客气",
    "pinyin": "bù kè qi",
    "english": "you're welcome, impolite, rude, blunt, don't mention it",
    "level": "HSK 1",
    "lesson": 1
  },
  {
    "id": "HSK1-8",
    "hanzi": "不",
    "pinyin": "bù",
    "english": "(negative prefix), not, no",
    "level": "HSK 1",
    "lesson": 1
  },
  {
    "id": "HSK1-9",
    "hanzi": "菜",
    "pinyin": "cài",
    "english": "dish (type of food), vegetables, vegetable, cuisine, 道[dào]",
    "level": "HSK 1",
    "lesson": 1
  },
  {
    "id": "HSK1-10",
    "hanzi": "茶",
    "pinyin": "chá",
    "english": "tea, tea plant, 壺|壶[hú]",
    "level": "HSK 1",
    "lesson": 1
  },
  {
    "id": "HSK1-11",
    "hanzi": "吃",
    "pinyin": "chī",
    "english": "to eat, to consume, to eat at (a cafeteria etc), to eradicate, to destroy, to absorb, to suffer",
    "level": "HSK 1",
    "lesson": 2
  },
  {
    "id": "HSK1-12",
    "hanzi": "出租车",
    "pinyin": "chū zū chē",
    "english": "taxi, (Taiwan) rental car",
    "level": "HSK 1",
    "lesson": 2
  },
  {
    "id": "HSK1-13",
    "hanzi": "打电话",
    "pinyin": "dǎ diàn huà",
    "english": "to make a telephone call",
    "level": "HSK 1",
    "lesson": 2
  },
  {
    "id": "HSK1-14",
    "hanzi": "大",
    "pinyin": "dà",
    "english": "big, huge, large, major, great, wide, deep, oldest, eldest",
    "level": "HSK 1",
    "lesson": 2
  },
  {
    "id": "HSK1-15",
    "hanzi": "的",
    "pinyin": "de",
    "english": "of, ~'s (possessive particle), (used after an attribute), (used to form a nominal expression), (used at the end of a declarative sentence for emphasis)",
    "level": "HSK 1",
    "lesson": 2
  },
  {
    "id": "HSK1-16",
    "hanzi": "点",
    "pinyin": "diǎn",
    "english": "point, dot, drop, speck, o'clock, point (in space or time), to draw a dot, to check on a list, to choose, to order (food in a restaurant), to touch briefly, to hint, to light, to ignite, to pour a liquid drop by drop, (old) one fifth of a two-hour watch 更[gēng], dot stroke in Chinese characters, classifier for items",
    "level": "HSK 1",
    "lesson": 2
  },
  {
    "id": "HSK1-17",
    "hanzi": "电脑",
    "pinyin": "diàn nǎo",
    "english": "computer",
    "level": "HSK 1",
    "lesson": 2
  },
  {
    "id": "HSK1-18",
    "hanzi": "电视",
    "pinyin": "diàn shì",
    "english": "television, TV, 個|个[gè]",
    "level": "HSK 1",
    "lesson": 2
  },
  {
    "id": "HSK1-19",
    "hanzi": "电影",
    "pinyin": "diàn yǐng",
    "english": "movie, film, 片, 幕, 場|场[chǎng]",
    "level": "HSK 1",
    "lesson": 2
  },
  {
    "id": "HSK1-20",
    "hanzi": "东西",
    "pinyin": "dōng xi",
    "english": "thing, stuff, person, 件[jiàn]",
    "level": "HSK 1",
    "lesson": 2
  },
  {
    "id": "HSK1-21",
    "hanzi": "都",
    "pinyin": "dōu",
    "english": "all, both, entirely, (used for emphasis) even, already, (not) at all",
    "level": "HSK 1",
    "lesson": 3
  },
  {
    "id": "HSK1-22",
    "hanzi": "读",
    "pinyin": "dú",
    "english": "to read, to study, reading of word (i.e. pronunciation), similar to 拼音[pīn yīn]",
    "level": "HSK 1",
    "lesson": 3
  },
  {
    "id": "HSK1-23",
    "hanzi": "对不起",
    "pinyin": "duì bu qǐ",
    "english": "unworthy, to let down, I'm sorry, excuse me, pardon me, if you please, sorry? (please repeat)",
    "level": "HSK 1",
    "lesson": 3
  },
  {
    "id": "HSK1-24",
    "hanzi": "多",
    "pinyin": "duō",
    "english": "many, much, a lot of, numerous, more, in excess, how (to what extent), multi-, Taiwan pr.  when it means \"how\"",
    "level": "HSK 1",
    "lesson": 3
  },
  {
    "id": "HSK1-25",
    "hanzi": "多少",
    "pinyin": "duō shao",
    "english": "how much, how many, which (number), as much as",
    "level": "HSK 1",
    "lesson": 3
  },
  {
    "id": "HSK1-26",
    "hanzi": "儿子",
    "pinyin": "ér zi",
    "english": "son",
    "level": "HSK 1",
    "lesson": 3
  },
  {
    "id": "HSK1-27",
    "hanzi": "二",
    "pinyin": "èr",
    "english": "two, 2, stupid (Beijing dialect)",
    "level": "HSK 1",
    "lesson": 3
  },
  {
    "id": "HSK1-28",
    "hanzi": "饭馆",
    "pinyin": "fàn guǎn",
    "english": "restaurant",
    "level": "HSK 1",
    "lesson": 3
  },
  {
    "id": "HSK1-29",
    "hanzi": "飞机",
    "pinyin": "fēi jī",
    "english": "airplane",
    "level": "HSK 1",
    "lesson": 3
  },
  {
    "id": "HSK1-30",
    "hanzi": "分钟",
    "pinyin": "fēn zhōng",
    "english": "minute",
    "level": "HSK 1",
    "lesson": 3
  },
  {
    "id": "HSK1-31",
    "hanzi": "高兴",
    "pinyin": "gāo xìng",
    "english": "happy, glad, willing (to do sth), in a cheerful mood",
    "level": "HSK 1",
    "lesson": 4
  },
  {
    "id": "HSK1-32",
    "hanzi": "个",
    "pinyin": "gè",
    "english": "variant of 個|个[gè]",
    "level": "HSK 1",
    "lesson": 4
  },
  {
    "id": "HSK1-33",
    "hanzi": "工作",
    "pinyin": "gōng zuò",
    "english": "to work, (of a machine) to operate, job, work, task, 份, 項|项[xiàng]",
    "level": "HSK 1",
    "lesson": 4
  },
  {
    "id": "HSK1-34",
    "hanzi": "狗",
    "pinyin": "gǒu",
    "english": "dog, 條|条[tiáo]",
    "level": "HSK 1",
    "lesson": 4
  },
  {
    "id": "HSK1-35",
    "hanzi": "汉语",
    "pinyin": "Hàn yǔ",
    "english": "Chinese language",
    "level": "HSK 1",
    "lesson": 4
  },
  {
    "id": "HSK1-36",
    "hanzi": "好",
    "pinyin": "hǎo",
    "english": "good, well, proper, good to, easy to, very, so, (suffix indicating completion or readiness)",
    "level": "HSK 1",
    "lesson": 4
  },
  {
    "id": "HSK1-37",
    "hanzi": "喝",
    "pinyin": "hē",
    "english": "to drink, My goodness!",
    "level": "HSK 1",
    "lesson": 4
  },
  {
    "id": "HSK1-38",
    "hanzi": "和",
    "pinyin": "hé",
    "english": "and, together with, with, sum, union, peace, harmony, Japanese related, Taiwan pr. [hàn]",
    "level": "HSK 1",
    "lesson": 4
  },
  {
    "id": "HSK1-39",
    "hanzi": "很",
    "pinyin": "hěn",
    "english": "(adverb of degree), quite, very, awfully",
    "level": "HSK 1",
    "lesson": 4
  },
  {
    "id": "HSK1-40",
    "hanzi": "后面",
    "pinyin": "hòu mian",
    "english": "rear, back, behind, later, afterwards",
    "level": "HSK 1",
    "lesson": 4
  },
  {
    "id": "HSK1-41",
    "hanzi": "回",
    "pinyin": "huí",
    "english": "to curve, to return, to revolve",
    "level": "HSK 1",
    "lesson": 5
  },
  {
    "id": "HSK1-42",
    "hanzi": "会",
    "pinyin": "huì",
    "english": "can, be possible, be able to, will, be likely to, be sure to, to assemble, to meet, to gather, to see, union, group, association, a moment (Taiwan pr. for this sense is )",
    "level": "HSK 1",
    "lesson": 5
  },
  {
    "id": "HSK1-43",
    "hanzi": "火车站",
    "pinyin": "huǒ chē zhàn",
    "english": "train station",
    "level": "HSK 1",
    "lesson": 5
  },
  {
    "id": "HSK1-44",
    "hanzi": "几",
    "pinyin": "jǐ",
    "english": "how much, how many, several, a few",
    "level": "HSK 1",
    "lesson": 5
  },
  {
    "id": "HSK1-45",
    "hanzi": "家",
    "pinyin": "jiā",
    "english": "home, family, classifier for families or businesses, refers to the philosophical schools of pre-Han China, noun suffix for specialists in some activity such as musician or revolutionary, corresponds to English -ist, -er, -ary or -ian",
    "level": "HSK 1",
    "lesson": 5
  },
  {
    "id": "HSK1-46",
    "hanzi": "叫",
    "pinyin": "jiào",
    "english": "to shout, to call, to order, to ask, to be called, by (indicates agent in the passive mood)",
    "level": "HSK 1",
    "lesson": 5
  },
  {
    "id": "HSK1-47",
    "hanzi": "今天",
    "pinyin": "jīn tiān",
    "english": "today, at the present, now",
    "level": "HSK 1",
    "lesson": 5
  },
  {
    "id": "HSK1-48",
    "hanzi": "九",
    "pinyin": "jiǔ",
    "english": "nine, 9",
    "level": "HSK 1",
    "lesson": 5
  },
  {
    "id": "HSK1-49",
    "hanzi": "开",
    "pinyin": "kāi",
    "english": "to open, to start, to turn on, to boil, to write out (a medical prescription), to operate (vehicle), abbr. for 開爾文|开尔文 degrees Kelvin",
    "level": "HSK 1",
    "lesson": 5
  },
  {
    "id": "HSK1-50",
    "hanzi": "看",
    "pinyin": "kàn",
    "english": "to see, to look at, to read, to watch, to consider, to regard as, to view as, to treat as, to judge, (after repeated verb) to give it a try, depending on (how you're judging), to visit, to call on, to treat (an illness), to look after, Watch out! (for a danger)",
    "level": "HSK 1",
    "lesson": 5
  },
  {
    "id": "HSK1-51",
    "hanzi": "看见",
    "pinyin": "kàn jiàn",
    "english": "to see, to catch sight of",
    "level": "HSK 1",
    "lesson": 6
  },
  {
    "id": "HSK1-52",
    "hanzi": "块",
    "pinyin": "kuài",
    "english": "lump (of earth), chunk, piece, classifier for pieces of cloth, cake, soap etc, colloquial word for yuan (or other unit of currency such as Hong Kong or US dollar etc), usually as 塊錢|块钱",
    "level": "HSK 1",
    "lesson": 6
  },
  {
    "id": "HSK1-53",
    "hanzi": "来",
    "pinyin": "lái",
    "english": "to come, to arrive, to come round, ever since, next",
    "level": "HSK 1",
    "lesson": 6
  },
  {
    "id": "HSK1-54",
    "hanzi": "老师",
    "pinyin": "lǎo shī",
    "english": "teacher, 位[wèi]",
    "level": "HSK 1",
    "lesson": 6
  },
  {
    "id": "HSK1-55",
    "hanzi": "了",
    "pinyin": "le",
    "english": "(modal particle intensifying preceding clause), (completed action marker)",
    "level": "HSK 1",
    "lesson": 6
  },
  {
    "id": "HSK1-56",
    "hanzi": "冷",
    "pinyin": "lěng",
    "english": "cold",
    "level": "HSK 1",
    "lesson": 6
  },
  {
    "id": "HSK1-57",
    "hanzi": "里",
    "pinyin": "lǐ",
    "english": "li (Chinese mile), 500 meters (modern), home, hometown, village, neighborhood, administrative unit",
    "level": "HSK 1",
    "lesson": 6
  },
  {
    "id": "HSK1-58",
    "hanzi": "零",
    "pinyin": "líng",
    "english": "zero, nought, zero sign, fractional, fragmentary, odd (of numbers), (placed between two numbers to indicate a smaller quantity followed by a larger one), fraction, (in mathematics) remainder (after division), extra, to wither and fall, to wither",
    "level": "HSK 1",
    "lesson": 6
  },
  {
    "id": "HSK1-59",
    "hanzi": "六",
    "pinyin": "liù",
    "english": "six, 6",
    "level": "HSK 1",
    "lesson": 6
  },
  {
    "id": "HSK1-60",
    "hanzi": "妈妈",
    "pinyin": "mā ma",
    "english": "mama, mommy, mother, 位[wèi]",
    "level": "HSK 1",
    "lesson": 6
  },
  {
    "id": "HSK1-61",
    "hanzi": "吗",
    "pinyin": "ma",
    "english": "(question tag)",
    "level": "HSK 1",
    "lesson": 7
  },
  {
    "id": "HSK1-62",
    "hanzi": "买",
    "pinyin": "mǎi",
    "english": "to buy, to purchase",
    "level": "HSK 1",
    "lesson": 7
  },
  {
    "id": "HSK1-63",
    "hanzi": "猫",
    "pinyin": "māo",
    "english": "cat",
    "level": "HSK 1",
    "lesson": 7
  },
  {
    "id": "HSK1-64",
    "hanzi": "没",
    "pinyin": "méi",
    "english": "(negative prefix for verbs), have not, not",
    "level": "HSK 1",
    "lesson": 7
  },
  {
    "id": "HSK1-65",
    "hanzi": "没关系",
    "pinyin": "méi guān xi",
    "english": "it doesn't matter",
    "level": "HSK 1",
    "lesson": 7
  },
  {
    "id": "HSK1-66",
    "hanzi": "米饭",
    "pinyin": "mǐ fàn",
    "english": "(cooked) rice",
    "level": "HSK 1",
    "lesson": 7
  },
  {
    "id": "HSK1-67",
    "hanzi": "明天",
    "pinyin": "míng tiān",
    "english": "tomorrow",
    "level": "HSK 1",
    "lesson": 7
  },
  {
    "id": "HSK1-68",
    "hanzi": "名字",
    "pinyin": "míng zi",
    "english": "name (of a person or thing)",
    "level": "HSK 1",
    "lesson": 7
  },
  {
    "id": "HSK1-69",
    "hanzi": "哪",
    "pinyin": "nǎ",
    "english": "how, which",
    "level": "HSK 1",
    "lesson": 7
  },
  {
    "id": "HSK1-70",
    "hanzi": "那",
    "pinyin": "nà",
    "english": "that, those, then (in that case), commonly pr.  before a classifier, esp. in Beijing",
    "level": "HSK 1",
    "lesson": 7
  },
  {
    "id": "HSK1-71",
    "hanzi": "呢",
    "pinyin": "ne",
    "english": "particle indicating that a previously asked question is to be applied to the preceding word (\"What about ...?\", \"And ...?\"), particle for inquiring about location (\"Where is ...?\"), particle signaling a pause, to emphasize the preceding words and allow the listener time to take them on board (\"ok?\", \"are you with me?\"), (at the end of a declarative sentence) particle indicating continuation of a state or action, particle indicating strong affirmation",
    "level": "HSK 1",
    "lesson": 8
  },
  {
    "id": "HSK1-72",
    "hanzi": "能",
    "pinyin": "néng",
    "english": "to be able to, to be capable of, ability, capability, able, capable, can possibly, (usually used in the negative) to have the possibility of",
    "level": "HSK 1",
    "lesson": 8
  },
  {
    "id": "HSK1-73",
    "hanzi": "你",
    "pinyin": "nǐ",
    "english": "you (informal, as opposed to courteous 您)",
    "level": "HSK 1",
    "lesson": 8
  },
  {
    "id": "HSK1-74",
    "hanzi": "年",
    "pinyin": "nián",
    "english": "year",
    "level": "HSK 1",
    "lesson": 8
  },
  {
    "id": "HSK1-75",
    "hanzi": "女儿",
    "pinyin": "nǚ ér",
    "english": "daughter",
    "level": "HSK 1",
    "lesson": 8
  },
  {
    "id": "HSK1-76",
    "hanzi": "朋友",
    "pinyin": "péng you",
    "english": "friend, 位[wèi]",
    "level": "HSK 1",
    "lesson": 8
  },
  {
    "id": "HSK1-77",
    "hanzi": "漂亮",
    "pinyin": "piào liang",
    "english": "pretty, beautiful",
    "level": "HSK 1",
    "lesson": 8
  },
  {
    "id": "HSK1-78",
    "hanzi": "苹果",
    "pinyin": "píng guǒ",
    "english": "apple, 顆|颗[kē]",
    "level": "HSK 1",
    "lesson": 8
  },
  {
    "id": "HSK1-79",
    "hanzi": "七",
    "pinyin": "qī",
    "english": "seven, 7",
    "level": "HSK 1",
    "lesson": 8
  },
  {
    "id": "HSK1-80",
    "hanzi": "钱",
    "pinyin": "qián",
    "english": "coin, money, unit of weight, one tenth of a tael 兩|两[liǎng]",
    "level": "HSK 1",
    "lesson": 8
  },
  {
    "id": "HSK1-81",
    "hanzi": "前面",
    "pinyin": "qián miàn",
    "english": "ahead, in front, preceding, above",
    "level": "HSK 1",
    "lesson": 9
  },
  {
    "id": "HSK1-82",
    "hanzi": "请",
    "pinyin": "qǐng",
    "english": "to ask, to invite, please (do sth), to treat (to a meal etc), to request",
    "level": "HSK 1",
    "lesson": 9
  },
  {
    "id": "HSK1-83",
    "hanzi": "去",
    "pinyin": "qù",
    "english": "to go, to go to (a place), to cause to go or send (sb), to remove, to get rid of, (when used either before or after a verb) to go in order to do sth, to be apart from in space or time, (after a verb of motion indicates movement away from the speaker), (used after certain verbs to indicate detachment or separation), (of a time or an event etc) just passed or elapsed",
    "level": "HSK 1",
    "lesson": 9
  },
  {
    "id": "HSK1-84",
    "hanzi": "热",
    "pinyin": "rè",
    "english": "to warm up, to heat up, hot (of weather), heat, fervent",
    "level": "HSK 1",
    "lesson": 9
  },
  {
    "id": "HSK1-85",
    "hanzi": "人",
    "pinyin": "rén",
    "english": "man, person, people, 位[wèi]",
    "level": "HSK 1",
    "lesson": 9
  },
  {
    "id": "HSK1-86",
    "hanzi": "认识",
    "pinyin": "rèn shi",
    "english": "to know, to recognize, to be familiar with, to get acquainted with sb, knowledge, understanding, awareness, cognition",
    "level": "HSK 1",
    "lesson": 9
  },
  {
    "id": "HSK1-87",
    "hanzi": "日",
    "pinyin": "rì",
    "english": "sun, day, date, day of the month, abbr. for 日本 Japan",
    "level": "HSK 1",
    "lesson": 9
  },
  {
    "id": "HSK1-88",
    "hanzi": "三",
    "pinyin": "sān",
    "english": "three, 3",
    "level": "HSK 1",
    "lesson": 9
  },
  {
    "id": "HSK1-89",
    "hanzi": "商店",
    "pinyin": "shāng diàn",
    "english": "store, shop, 個|个[gè]",
    "level": "HSK 1",
    "lesson": 9
  },
  {
    "id": "HSK1-90",
    "hanzi": "上",
    "pinyin": "shàng",
    "english": "on top, upon, above, upper, previous, first (of multiple parts), to climb, to get onto, to go up, to attend (class or university)",
    "level": "HSK 1",
    "lesson": 9
  },
  {
    "id": "HSK1-91",
    "hanzi": "上午",
    "pinyin": "shàng wǔ",
    "english": "morning",
    "level": "HSK 1",
    "lesson": 10
  },
  {
    "id": "HSK1-92",
    "hanzi": "少",
    "pinyin": "shǎo",
    "english": "few, little, lack",
    "level": "HSK 1",
    "lesson": 10
  },
  {
    "id": "HSK1-93",
    "hanzi": "谁",
    "pinyin": "shéi",
    "english": "who, also pr. [shuí]",
    "level": "HSK 1",
    "lesson": 10
  },
  {
    "id": "HSK1-94",
    "hanzi": "什么",
    "pinyin": "shén me",
    "english": "what?, who?, something, anything",
    "level": "HSK 1",
    "lesson": 10
  },
  {
    "id": "HSK1-95",
    "hanzi": "十",
    "pinyin": "shí",
    "english": "ten, 10",
    "level": "HSK 1",
    "lesson": 10
  },
  {
    "id": "HSK1-96",
    "hanzi": "时候",
    "pinyin": "shí hou",
    "english": "time, length of time, moment, period",
    "level": "HSK 1",
    "lesson": 10
  },
  {
    "id": "HSK1-97",
    "hanzi": "是",
    "pinyin": "shì",
    "english": "is, are, am, yes, to be",
    "level": "HSK 1",
    "lesson": 10
  },
  {
    "id": "HSK1-98",
    "hanzi": "书",
    "pinyin": "shū",
    "english": "book, letter, 冊|册, 部[bù], see also 書經|书经 Book of History",
    "level": "HSK 1",
    "lesson": 10
  },
  {
    "id": "HSK1-99",
    "hanzi": "水",
    "pinyin": "shuǐ",
    "english": "water, river, liquid, beverage, additional charges or income, (of clothes) classifier for number of washes",
    "level": "HSK 1",
    "lesson": 10
  },
  {
    "id": "HSK1-100",
    "hanzi": "水果",
    "pinyin": "shuǐ guǒ",
    "english": "fruit",
    "level": "HSK 1",
    "lesson": 10
  },
  {
    "id": "HSK1-101",
    "hanzi": "睡觉",
    "pinyin": "shuì jiào",
    "english": "to go to bed, to sleep",
    "level": "HSK 1",
    "lesson": 11
  },
  {
    "id": "HSK1-102",
    "hanzi": "说话",
    "pinyin": "shuō huà",
    "english": "to speak, to say, to talk, to gossip, to tell stories, talk, word",
    "level": "HSK 1",
    "lesson": 11
  },
  {
    "id": "HSK1-103",
    "hanzi": "四",
    "pinyin": "sì",
    "english": "four, 4",
    "level": "HSK 1",
    "lesson": 11
  },
  {
    "id": "HSK1-104",
    "hanzi": "岁",
    "pinyin": "suì",
    "english": "classifier for years (of age), year, year (of crop harvests)",
    "level": "HSK 1",
    "lesson": 11
  },
  {
    "id": "HSK1-105",
    "hanzi": "他",
    "pinyin": "tā",
    "english": "he or him, (used for either sex when the sex is unknown or unimportant), (used before sb's name for emphasis), (used as a meaningless mock object), other, another",
    "level": "HSK 1",
    "lesson": 11
  },
  {
    "id": "HSK1-106",
    "hanzi": "她",
    "pinyin": "tā",
    "english": "she",
    "level": "HSK 1",
    "lesson": 11
  },
  {
    "id": "HSK1-107",
    "hanzi": "太",
    "pinyin": "tài",
    "english": "highest, greatest, too (much), very, extremely",
    "level": "HSK 1",
    "lesson": 11
  },
  {
    "id": "HSK1-108",
    "hanzi": "天气",
    "pinyin": "tiān qì",
    "english": "weather",
    "level": "HSK 1",
    "lesson": 11
  },
  {
    "id": "HSK1-109",
    "hanzi": "听",
    "pinyin": "tīng",
    "english": "to listen, to hear, to obey, a can (loanword from English \"tin\"), classifier for canned beverages",
    "level": "HSK 1",
    "lesson": 11
  },
  {
    "id": "HSK1-110",
    "hanzi": "同学",
    "pinyin": "tóng xué",
    "english": "to study at the same school, fellow student, classmate, 個|个[gè]",
    "level": "HSK 1",
    "lesson": 11
  },
  {
    "id": "HSK1-111",
    "hanzi": "喂",
    "pinyin": "wèi",
    "english": "to feed",
    "level": "HSK 1",
    "lesson": 12
  },
  {
    "id": "HSK1-112",
    "hanzi": "我",
    "pinyin": "wǒ",
    "english": "I, me, my",
    "level": "HSK 1",
    "lesson": 12
  },
  {
    "id": "HSK1-113",
    "hanzi": "我们",
    "pinyin": "wǒ men",
    "english": "we, us, ourselves, our",
    "level": "HSK 1",
    "lesson": 12
  },
  {
    "id": "HSK1-114",
    "hanzi": "五",
    "pinyin": "wǔ",
    "english": "five, 5",
    "level": "HSK 1",
    "lesson": 12
  },
  {
    "id": "HSK1-115",
    "hanzi": "喜欢",
    "pinyin": "xǐ huan",
    "english": "to like, to be fond of",
    "level": "HSK 1",
    "lesson": 12
  },
  {
    "id": "HSK1-116",
    "hanzi": "下",
    "pinyin": "xià",
    "english": "down, downwards, below, lower, later, next (week etc), second (of two parts), to decline, to go down",
    "level": "HSK 1",
    "lesson": 12
  },
  {
    "id": "HSK1-117",
    "hanzi": "下午",
    "pinyin": "xià wǔ",
    "english": "afternoon, p.m.",
    "level": "HSK 1",
    "lesson": 12
  },
  {
    "id": "HSK1-118",
    "hanzi": "下雨",
    "pinyin": "xià yǔ",
    "english": "to rain, rainy",
    "level": "HSK 1",
    "lesson": 12
  },
  {
    "id": "HSK1-119",
    "hanzi": "先生",
    "pinyin": "xiān sheng",
    "english": "teacher, husband, doctor (topolect)",
    "level": "HSK 1",
    "lesson": 12
  },
  {
    "id": "HSK1-120",
    "hanzi": "现在",
    "pinyin": "xiàn zài",
    "english": "now, at present, at the moment, modern, current, nowadays",
    "level": "HSK 1",
    "lesson": 12
  },
  {
    "id": "HSK1-121",
    "hanzi": "想",
    "pinyin": "xiǎng",
    "english": "to think, to believe, to suppose, to wish, to want, to miss",
    "level": "HSK 1",
    "lesson": 13
  },
  {
    "id": "HSK1-122",
    "hanzi": "小",
    "pinyin": "xiǎo",
    "english": "small, tiny, few, young",
    "level": "HSK 1",
    "lesson": 13
  },
  {
    "id": "HSK1-123",
    "hanzi": "小姐",
    "pinyin": "xiǎo jie",
    "english": "young lady, miss, (slang) prostitute, 位[wèi]",
    "level": "HSK 1",
    "lesson": 13
  },
  {
    "id": "HSK1-124",
    "hanzi": "些",
    "pinyin": "xiē",
    "english": "some, few, several, measure word indicating a small amount or small number (greater than 1)",
    "level": "HSK 1",
    "lesson": 13
  },
  {
    "id": "HSK1-125",
    "hanzi": "写",
    "pinyin": "xiě",
    "english": "to write",
    "level": "HSK 1",
    "lesson": 13
  },
  {
    "id": "HSK1-126",
    "hanzi": "谢谢",
    "pinyin": "xiè xie",
    "english": "to thank, thanks",
    "level": "HSK 1",
    "lesson": 13
  },
  {
    "id": "HSK1-127",
    "hanzi": "星期",
    "pinyin": "xīng qī",
    "english": "week, day of the week, Sunday",
    "level": "HSK 1",
    "lesson": 13
  },
  {
    "id": "HSK1-128",
    "hanzi": "学生",
    "pinyin": "xué sheng",
    "english": "student, schoolchild",
    "level": "HSK 1",
    "lesson": 13
  },
  {
    "id": "HSK1-129",
    "hanzi": "学习",
    "pinyin": "xué xí",
    "english": "to learn, to study",
    "level": "HSK 1",
    "lesson": 13
  },
  {
    "id": "HSK1-130",
    "hanzi": "学校",
    "pinyin": "xué xiào",
    "english": "school",
    "level": "HSK 1",
    "lesson": 13
  },
  {
    "id": "HSK1-131",
    "hanzi": "一",
    "pinyin": "yī",
    "english": "one, 1, single, a (article), as soon as, entire, whole, all, throughout, \"one\" radical in Chinese characters (Kangxi radical 1)",
    "level": "HSK 1",
    "lesson": 14
  },
  {
    "id": "HSK1-132",
    "hanzi": "衣服",
    "pinyin": "yī fu",
    "english": "clothes, 套[tào]",
    "level": "HSK 1",
    "lesson": 14
  },
  {
    "id": "HSK1-133",
    "hanzi": "医生",
    "pinyin": "yī shēng",
    "english": "doctor, 位, 名[míng]",
    "level": "HSK 1",
    "lesson": 14
  },
  {
    "id": "HSK1-134",
    "hanzi": "医院",
    "pinyin": "yī yuàn",
    "english": "hospital, 家, 座[zuò]",
    "level": "HSK 1",
    "lesson": 14
  },
  {
    "id": "HSK1-135",
    "hanzi": "椅子",
    "pinyin": "yǐ zi",
    "english": "chair, 套[tào]",
    "level": "HSK 1",
    "lesson": 14
  },
  {
    "id": "HSK1-136",
    "hanzi": "有",
    "pinyin": "yǒu",
    "english": "to have, there is, there are, to exist, to be",
    "level": "HSK 1",
    "lesson": 14
  },
  {
    "id": "HSK1-137",
    "hanzi": "月",
    "pinyin": "yuè",
    "english": "moon, month, 輪|轮[lún]",
    "level": "HSK 1",
    "lesson": 14
  },
  {
    "id": "HSK1-138",
    "hanzi": "在",
    "pinyin": "zài",
    "english": "(located) at, (to be) in, to exist, in the middle of doing sth, (indicating an action in progress)",
    "level": "HSK 1",
    "lesson": 14
  },
  {
    "id": "HSK1-139",
    "hanzi": "再见",
    "pinyin": "zài jiàn",
    "english": "goodbye, see you again later",
    "level": "HSK 1",
    "lesson": 14
  },
  {
    "id": "HSK1-140",
    "hanzi": "怎么",
    "pinyin": "zěn me",
    "english": "variant of 怎麼|怎么[zěn me]",
    "level": "HSK 1",
    "lesson": 14
  },
  {
    "id": "HSK1-141",
    "hanzi": "怎么样",
    "pinyin": "zěn me yàng",
    "english": "how?, how about?, how was it?, how are things?",
    "level": "HSK 1",
    "lesson": 15
  },
  {
    "id": "HSK1-142",
    "hanzi": "这",
    "pinyin": "zhè",
    "english": "this, these, (commonly pr.  before a classifier, esp. in Beijing)",
    "level": "HSK 1",
    "lesson": 15
  },
  {
    "id": "HSK1-143",
    "hanzi": "中国",
    "pinyin": "Zhōng guó",
    "english": "China, Middle Kingdom",
    "level": "HSK 1",
    "lesson": 15
  },
  {
    "id": "HSK1-144",
    "hanzi": "中午",
    "pinyin": "zhōng wǔ",
    "english": "noon, midday",
    "level": "HSK 1",
    "lesson": 15
  },
  {
    "id": "HSK1-145",
    "hanzi": "住",
    "pinyin": "zhù",
    "english": "to live, to dwell, to stay, to reside, to stop, (suffix indicating firmness, steadiness, or coming to a halt)",
    "level": "HSK 1",
    "lesson": 15
  },
  {
    "id": "HSK1-146",
    "hanzi": "桌子",
    "pinyin": "zhuō zi",
    "english": "table, desk, 套[tào]",
    "level": "HSK 1",
    "lesson": 15
  },
  {
    "id": "HSK1-147",
    "hanzi": "字",
    "pinyin": "zì",
    "english": "letter, symbol, character, word, courtesy or style name traditionally given to males aged 20 in dynastic China",
    "level": "HSK 1",
    "lesson": 15
  },
  {
    "id": "HSK1-148",
    "hanzi": "昨天",
    "pinyin": "zuó tiān",
    "english": "yesterday",
    "level": "HSK 1",
    "lesson": 15
  },
  {
    "id": "HSK1-149",
    "hanzi": "坐",
    "pinyin": "zuò",
    "english": "to sit, to take a seat, to take (a bus, airplane etc), to bear fruit, variant of 座[zuò]",
    "level": "HSK 1",
    "lesson": 15
  },
  {
    "id": "HSK1-150",
    "hanzi": "做",
    "pinyin": "zuò",
    "english": "to do, to make, to produce, to write, to compose, to act as, to engage in, to hold (a party), to be, to become, to function (in some capacity), to serve as, to be used for, to form (a bond or relationship), to pretend, to feign, to act a part, to put on appearance",
    "level": "HSK 1",
    "lesson": 15
  },
  {
    "id": "HSK2-1",
    "hanzi": "吧",
    "pinyin": "ba",
    "english": "(modal particle indicating suggestion or surmise), ...right?, ...OK?, ...I presume.",
    "level": "HSK 2",
    "lesson": 1
  },
  {
    "id": "HSK2-2",
    "hanzi": "白",
    "pinyin": "bái",
    "english": "white, snowy, pure, bright, empty, blank, plain, clear, to make clear, in vain, gratuitous, free of charge, reactionary, anti-communist, funeral, to stare coldly, to write wrong character, to state, to explain, vernacular, spoken lines in opera",
    "level": "HSK 2",
    "lesson": 1
  },
  {
    "id": "HSK2-3",
    "hanzi": "百",
    "pinyin": "bǎi",
    "english": "hundred, numerous, all kinds of",
    "level": "HSK 2",
    "lesson": 1
  },
  {
    "id": "HSK2-4",
    "hanzi": "帮助",
    "pinyin": "bāng zhù",
    "english": "assistance, aid, to help, to assist",
    "level": "HSK 2",
    "lesson": 1
  },
  {
    "id": "HSK2-5",
    "hanzi": "报纸",
    "pinyin": "bào zhǐ",
    "english": "newspaper, newsprint, 期, 張|张[zhāng]",
    "level": "HSK 2",
    "lesson": 1
  },
  {
    "id": "HSK2-6",
    "hanzi": "比",
    "pinyin": "bǐ",
    "english": "(particle used for comparison and \"-er than\"), to compare, to contrast, to gesture (with hands), ratio",
    "level": "HSK 2",
    "lesson": 1
  },
  {
    "id": "HSK2-7",
    "hanzi": "别",
    "pinyin": "bié",
    "english": "to leave, to depart, to separate, to distinguish, to classify, other, another, do not, must not, to pin",
    "level": "HSK 2",
    "lesson": 1
  },
  {
    "id": "HSK2-8",
    "hanzi": "长",
    "pinyin": "cháng",
    "english": "length, long, forever, always, constantly",
    "level": "HSK 2",
    "lesson": 1
  },
  {
    "id": "HSK2-9",
    "hanzi": "唱歌",
    "pinyin": "chàng gē",
    "english": "to sing a song",
    "level": "HSK 2",
    "lesson": 1
  },
  {
    "id": "HSK2-10",
    "hanzi": "出",
    "pinyin": "chū",
    "english": "to go out, to come out, to occur, to produce, to go beyond, to rise, to put forth, to happen, classifier for dramas, plays, operas etc",
    "level": "HSK 2",
    "lesson": 1
  },
  {
    "id": "HSK2-11",
    "hanzi": "穿",
    "pinyin": "chuān",
    "english": "to bore through, to pierce, to perforate, to penetrate, to pass through, to dress, to wear, to put on, to thread",
    "level": "HSK 2",
    "lesson": 2
  },
  {
    "id": "HSK2-12",
    "hanzi": "船",
    "pinyin": "chuán",
    "english": "a boat, vessel, ship, 艘, 隻|只[zhī]",
    "level": "HSK 2",
    "lesson": 2
  },
  {
    "id": "HSK2-13",
    "hanzi": "次",
    "pinyin": "cì",
    "english": "next in sequence, second, the second (day, time etc), secondary, vice-, sub-, infra-, inferior quality, substandard, order, sequence, hypo- (chemistry), classifier for enumerated events: time",
    "level": "HSK 2",
    "lesson": 2
  },
  {
    "id": "HSK2-14",
    "hanzi": "从",
    "pinyin": "cóng",
    "english": "from, via, passing through, through (a gap), past, ever (followed by negative, meaning never), (formerly pr.  and related to 縱|纵) to follow, to comply with, to obey, to join, to engage in, adopting some mode of action or attitude, follower, retainer, accessory, accomplice, related by common paternal grandfather or earlier ancestor",
    "level": "HSK 2",
    "lesson": 2
  },
  {
    "id": "HSK2-15",
    "hanzi": "错",
    "pinyin": "cuò",
    "english": "mistake, wrong, bad, interlocking, complex, to grind, to polish, to alternate, to stagger, to miss, to let slip, to evade, to inlay with gold or silver",
    "level": "HSK 2",
    "lesson": 2
  },
  {
    "id": "HSK2-16",
    "hanzi": "打篮球",
    "pinyin": "dá lán qiú",
    "english": "Play basketball",
    "level": "HSK 2",
    "lesson": 2
  },
  {
    "id": "HSK2-17",
    "hanzi": "大家",
    "pinyin": "dà jiā",
    "english": "everyone, influential family, great expert",
    "level": "HSK 2",
    "lesson": 2
  },
  {
    "id": "HSK2-18",
    "hanzi": "但是",
    "pinyin": "dàn shì",
    "english": "but, however",
    "level": "HSK 2",
    "lesson": 2
  },
  {
    "id": "HSK2-19",
    "hanzi": "到",
    "pinyin": "dào",
    "english": "to (a place), until (a time), up to, to go, to arrive",
    "level": "HSK 2",
    "lesson": 2
  },
  {
    "id": "HSK2-20",
    "hanzi": "得",
    "pinyin": "de",
    "english": "structural particle: used after a verb (or adjective as main verb), linking it to following phrase indicating effect, degree, possibility etc",
    "level": "HSK 2",
    "lesson": 2
  },
  {
    "id": "HSK2-21",
    "hanzi": "得",
    "pinyin": "děi",
    "english": "to have to, must, ought to, to need to",
    "level": "HSK 2",
    "lesson": 3
  },
  {
    "id": "HSK2-22",
    "hanzi": "弟弟",
    "pinyin": "dì di",
    "english": "younger brother, 位[wèi]",
    "level": "HSK 2",
    "lesson": 3
  },
  {
    "id": "HSK2-23",
    "hanzi": "第一",
    "pinyin": "dì yī",
    "english": "first, number one",
    "level": "HSK 2",
    "lesson": 3
  },
  {
    "id": "HSK2-24",
    "hanzi": "懂",
    "pinyin": "dǒng",
    "english": "to understand, to know",
    "level": "HSK 2",
    "lesson": 3
  },
  {
    "id": "HSK2-25",
    "hanzi": "房间",
    "pinyin": "fáng jiān",
    "english": "room",
    "level": "HSK 2",
    "lesson": 3
  },
  {
    "id": "HSK2-26",
    "hanzi": "非常",
    "pinyin": "fēi cháng",
    "english": "unusual, extraordinary, extreme, very, exceptional",
    "level": "HSK 2",
    "lesson": 3
  },
  {
    "id": "HSK2-27",
    "hanzi": "服务员",
    "pinyin": "fú wù yuán",
    "english": "waiter, waitress, attendant, customer service personnel",
    "level": "HSK 2",
    "lesson": 3
  },
  {
    "id": "HSK2-28",
    "hanzi": "高",
    "pinyin": "gāo",
    "english": "high, tall, above average, loud, your (honorific)",
    "level": "HSK 2",
    "lesson": 3
  },
  {
    "id": "HSK2-29",
    "hanzi": "告诉",
    "pinyin": "gào su",
    "english": "to tell, to inform, to let know",
    "level": "HSK 2",
    "lesson": 3
  },
  {
    "id": "HSK2-30",
    "hanzi": "哥哥",
    "pinyin": "gē ge",
    "english": "older brother, 位[wèi]",
    "level": "HSK 2",
    "lesson": 3
  },
  {
    "id": "HSK2-31",
    "hanzi": "给",
    "pinyin": "gěi",
    "english": "to, for, for the benefit of, to give, to allow, to do sth (for sb), (passive particle)",
    "level": "HSK 2",
    "lesson": 4
  },
  {
    "id": "HSK2-32",
    "hanzi": "公共汽车",
    "pinyin": "gōng gòng qì chē",
    "english": "bus, 班[bān]",
    "level": "HSK 2",
    "lesson": 4
  },
  {
    "id": "HSK2-33",
    "hanzi": "公斤",
    "pinyin": "gōng jīn",
    "english": "kilogram (kg)",
    "level": "HSK 2",
    "lesson": 4
  },
  {
    "id": "HSK2-34",
    "hanzi": "公司",
    "pinyin": "gōng sī",
    "english": "(business) company, company, firm, corporation, incorporated",
    "level": "HSK 2",
    "lesson": 4
  },
  {
    "id": "HSK2-35",
    "hanzi": "贵",
    "pinyin": "guì",
    "english": "expensive, noble, your (name), precious",
    "level": "HSK 2",
    "lesson": 4
  },
  {
    "id": "HSK2-36",
    "hanzi": "还",
    "pinyin": "hái",
    "english": "still, still in progress, still more, yet, even more, in addition, fairly, passably (good), as early as, even, also, else",
    "level": "HSK 2",
    "lesson": 4
  },
  {
    "id": "HSK2-37",
    "hanzi": "孩子",
    "pinyin": "hái zi",
    "english": "child",
    "level": "HSK 2",
    "lesson": 4
  },
  {
    "id": "HSK2-38",
    "hanzi": "好吃",
    "pinyin": "hǎo chī",
    "english": "tasty, delicious",
    "level": "HSK 2",
    "lesson": 4
  },
  {
    "id": "HSK2-39",
    "hanzi": "号",
    "pinyin": "hào",
    "english": "ordinal number, day of a month, mark, sign, business establishment, size, ship suffix, horn (wind instrument), bugle call, assumed name, to take a pulse, classifier used to indicate number of people",
    "level": "HSK 2",
    "lesson": 4
  },
  {
    "id": "HSK2-40",
    "hanzi": "黑",
    "pinyin": "hēi",
    "english": "black, dark, (loanword) to hack",
    "level": "HSK 2",
    "lesson": 4
  },
  {
    "id": "HSK2-41",
    "hanzi": "红",
    "pinyin": "hóng",
    "english": "red, popular, revolutionary, bonus",
    "level": "HSK 2",
    "lesson": 5
  },
  {
    "id": "HSK2-42",
    "hanzi": "欢迎",
    "pinyin": "huān yíng",
    "english": "to welcome, welcome",
    "level": "HSK 2",
    "lesson": 5
  },
  {
    "id": "HSK2-43",
    "hanzi": "还",
    "pinyin": "huán",
    "english": "to pay back, to return",
    "level": "HSK 2",
    "lesson": 5
  },
  {
    "id": "HSK2-44",
    "hanzi": "回答",
    "pinyin": "huí dá",
    "english": "to reply, to answer, the answer",
    "level": "HSK 2",
    "lesson": 5
  },
  {
    "id": "HSK2-45",
    "hanzi": "机场",
    "pinyin": "jī chǎng",
    "english": "airport, airfield, 處|处[chù]",
    "level": "HSK 2",
    "lesson": 5
  },
  {
    "id": "HSK2-46",
    "hanzi": "鸡蛋",
    "pinyin": "jī dàn",
    "english": "(chicken) egg, hen's egg, 打[dá]",
    "level": "HSK 2",
    "lesson": 5
  },
  {
    "id": "HSK2-47",
    "hanzi": "件",
    "pinyin": "jiàn",
    "english": "item, component, classifier for events, things, clothes etc",
    "level": "HSK 2",
    "lesson": 5
  },
  {
    "id": "HSK2-48",
    "hanzi": "教室",
    "pinyin": "jiào shì",
    "english": "classroom",
    "level": "HSK 2",
    "lesson": 5
  },
  {
    "id": "HSK2-49",
    "hanzi": "姐姐",
    "pinyin": "jiě jie",
    "english": "older sister",
    "level": "HSK 2",
    "lesson": 5
  },
  {
    "id": "HSK2-50",
    "hanzi": "介绍",
    "pinyin": "jiè shào",
    "english": "to introduce (sb to sb), to give a presentation, to present (sb for a job etc), introduction",
    "level": "HSK 2",
    "lesson": 5
  },
  {
    "id": "HSK2-51",
    "hanzi": "进",
    "pinyin": "jìn",
    "english": "to advance, to enter, to come (or go) into, to receive or admit, to eat or drink, to submit or present, (used after a verb) into, in, to score a goal",
    "level": "HSK 2",
    "lesson": 6
  },
  {
    "id": "HSK2-52",
    "hanzi": "近",
    "pinyin": "jìn",
    "english": "near, close to, approximately",
    "level": "HSK 2",
    "lesson": 6
  },
  {
    "id": "HSK2-53",
    "hanzi": "就",
    "pinyin": "jiù",
    "english": "at once, right away, only, just (emphasis), as early as, already, as soon as, then, in that case, as many as, even if, to approach, to move towards, to undertake, to engage in, to suffer, subjected to, to accomplish, to take advantage of, to go with (of foods), with regard to, concerning",
    "level": "HSK 2",
    "lesson": 6
  },
  {
    "id": "HSK2-54",
    "hanzi": "觉得",
    "pinyin": "jué de",
    "english": "to think, to feel",
    "level": "HSK 2",
    "lesson": 6
  },
  {
    "id": "HSK2-55",
    "hanzi": "咖啡",
    "pinyin": "kā fēi",
    "english": "coffee",
    "level": "HSK 2",
    "lesson": 6
  },
  {
    "id": "HSK2-56",
    "hanzi": "开始",
    "pinyin": "kāi shǐ",
    "english": "to begin, beginning, to start, initial",
    "level": "HSK 2",
    "lesson": 6
  },
  {
    "id": "HSK2-57",
    "hanzi": "考试",
    "pinyin": "kǎo shì",
    "english": "to take an exam, exam",
    "level": "HSK 2",
    "lesson": 6
  },
  {
    "id": "HSK2-58",
    "hanzi": "可能",
    "pinyin": "kě néng",
    "english": "might (happen), possible, probable, possibility, probability, maybe, perhaps",
    "level": "HSK 2",
    "lesson": 6
  },
  {
    "id": "HSK2-59",
    "hanzi": "可以",
    "pinyin": "kě yǐ",
    "english": "can, may, possible, able to",
    "level": "HSK 2",
    "lesson": 6
  },
  {
    "id": "HSK2-60",
    "hanzi": "课",
    "pinyin": "kè",
    "english": "subject, course, class, lesson, 節|节[jié], to levy, tax, form of divination",
    "level": "HSK 2",
    "lesson": 6
  },
  {
    "id": "HSK2-61",
    "hanzi": "快",
    "pinyin": "kuài",
    "english": "rapid, quick, speed, rate, soon, almost, to make haste, clever, sharp (of knives or wits), forthright, plain-spoken, gratified, pleased, pleasant",
    "level": "HSK 2",
    "lesson": 7
  },
  {
    "id": "HSK2-62",
    "hanzi": "快乐",
    "pinyin": "kuài lè",
    "english": "happy, merry",
    "level": "HSK 2",
    "lesson": 7
  },
  {
    "id": "HSK2-63",
    "hanzi": "累",
    "pinyin": "lèi",
    "english": "tired, weary, to strain, to wear out, to work hard",
    "level": "HSK 2",
    "lesson": 7
  },
  {
    "id": "HSK2-64",
    "hanzi": "离",
    "pinyin": "lí",
    "english": "to leave, to part from, to be away from, (in giving distances) from, without (sth), independent of, one of the Eight Trigrams 八卦, symbolizing fire, ☲",
    "level": "HSK 2",
    "lesson": 7
  },
  {
    "id": "HSK2-65",
    "hanzi": "两",
    "pinyin": "liǎng",
    "english": "both, two, ounce, some, a few, tael, weight equal to 50 grams",
    "level": "HSK 2",
    "lesson": 7
  },
  {
    "id": "HSK2-66",
    "hanzi": "路",
    "pinyin": "lù",
    "english": "road, journey, route, line (bus etc), sort, kind",
    "level": "HSK 2",
    "lesson": 7
  },
  {
    "id": "HSK2-67",
    "hanzi": "旅游",
    "pinyin": "lǚ yóu",
    "english": "trip, journey, tourism, travel, tour",
    "level": "HSK 2",
    "lesson": 7
  },
  {
    "id": "HSK2-68",
    "hanzi": "卖",
    "pinyin": "mài",
    "english": "to sell, to betray, to spare no effort, to show off or flaunt",
    "level": "HSK 2",
    "lesson": 7
  },
  {
    "id": "HSK2-69",
    "hanzi": "慢",
    "pinyin": "màn",
    "english": "slow",
    "level": "HSK 2",
    "lesson": 7
  },
  {
    "id": "HSK2-70",
    "hanzi": "忙",
    "pinyin": "máng",
    "english": "busy, hurriedly, to hurry, to rush",
    "level": "HSK 2",
    "lesson": 7
  },
  {
    "id": "HSK2-71",
    "hanzi": "每",
    "pinyin": "měi",
    "english": "each, every",
    "level": "HSK 2",
    "lesson": 8
  },
  {
    "id": "HSK2-72",
    "hanzi": "妹妹",
    "pinyin": "mèi mei",
    "english": "younger sister, fig. younger woman (esp. girl friend or rival)",
    "level": "HSK 2",
    "lesson": 8
  },
  {
    "id": "HSK2-73",
    "hanzi": "门",
    "pinyin": "mén",
    "english": "gate, door, gateway, doorway, opening, valve, switch, way to do something, knack, family, house, (religious) sect, school (of thought), class, category, phylum or division (taxonomy), classifier for large guns, classifier for lessons, subjects, branches of technology",
    "level": "HSK 2",
    "lesson": 8
  },
  {
    "id": "HSK2-74",
    "hanzi": "男人",
    "pinyin": "nán rén",
    "english": "a man, a male, men",
    "level": "HSK 2",
    "lesson": 8
  },
  {
    "id": "HSK2-75",
    "hanzi": "您",
    "pinyin": "nín",
    "english": "you (courteous, as opposed to informal 你)",
    "level": "HSK 2",
    "lesson": 8
  },
  {
    "id": "HSK2-76",
    "hanzi": "牛奶",
    "pinyin": "niú nǎi",
    "english": "cow's milk, 杯[bēi]",
    "level": "HSK 2",
    "lesson": 8
  },
  {
    "id": "HSK2-77",
    "hanzi": "女人",
    "pinyin": "nǚ rén",
    "english": "woman",
    "level": "HSK 2",
    "lesson": 8
  },
  {
    "id": "HSK2-78",
    "hanzi": "旁边",
    "pinyin": "páng biān",
    "english": "lateral, side, to the side, beside",
    "level": "HSK 2",
    "lesson": 8
  },
  {
    "id": "HSK2-79",
    "hanzi": "跑���",
    "pinyin": "pǎo bù",
    "english": "to walk quickly, to march, to run",
    "level": "HSK 2",
    "lesson": 8
  },
  {
    "id": "HSK2-80",
    "hanzi": "便宜",
    "pinyin": "pián yi",
    "english": "small advantages, to let sb off lightly, cheap, inexpensive",
    "level": "HSK 2",
    "lesson": 8
  },
  {
    "id": "HSK2-81",
    "hanzi": "票",
    "pinyin": "piào",
    "english": "ticket, ballot, bank note, person held for ransom, amateur performance of Chinese opera, classifier for shipments and business transactions (topolect)",
    "level": "HSK 2",
    "lesson": 9
  },
  {
    "id": "HSK2-82",
    "hanzi": "妻子",
    "pinyin": "qī zi",
    "english": "wife",
    "level": "HSK 2",
    "lesson": 9
  },
  {
    "id": "HSK2-83",
    "hanzi": "起床",
    "pinyin": "qǐ chuáng",
    "english": "to get out of bed, to get up",
    "level": "HSK 2",
    "lesson": 9
  },
  {
    "id": "HSK2-84",
    "hanzi": "千",
    "pinyin": "qiān",
    "english": "a swing",
    "level": "HSK 2",
    "lesson": 9
  },
  {
    "id": "HSK2-85",
    "hanzi": "晴",
    "pinyin": "qíng",
    "english": "clear, fine (weather)",
    "level": "HSK 2",
    "lesson": 9
  },
  {
    "id": "HSK2-86",
    "hanzi": "去年",
    "pinyin": "qù nián",
    "english": "last year",
    "level": "HSK 2",
    "lesson": 9
  },
  {
    "id": "HSK2-87",
    "hanzi": "让",
    "pinyin": "ràng",
    "english": "to yield, to permit, to let sb do sth, to have sb do sth",
    "level": "HSK 2",
    "lesson": 9
  },
  {
    "id": "HSK2-88",
    "hanzi": "上班",
    "pinyin": "shàng bān",
    "english": "to go to work, to be on duty, to start work, to go to the office",
    "level": "HSK 2",
    "lesson": 9
  },
  {
    "id": "HSK2-89",
    "hanzi": "身体",
    "pinyin": "shēn tǐ",
    "english": "(human) body, health",
    "level": "HSK 2",
    "lesson": 9
  },
  {
    "id": "HSK2-90",
    "hanzi": "生病",
    "pinyin": "shēng bìng",
    "english": "to fall ill",
    "level": "HSK 2",
    "lesson": 9
  },
  {
    "id": "HSK2-91",
    "hanzi": "生日",
    "pinyin": "shēng rì",
    "english": "birthday",
    "level": "HSK 2",
    "lesson": 10
  },
  {
    "id": "HSK2-92",
    "hanzi": "时间",
    "pinyin": "shí jiān",
    "english": "time, period",
    "level": "HSK 2",
    "lesson": 10
  },
  {
    "id": "HSK2-93",
    "hanzi": "事情",
    "pinyin": "shì qing",
    "english": "affair, matter, thing, business, 樁|桩[zhuāng]",
    "level": "HSK 2",
    "lesson": 10
  },
  {
    "id": "HSK2-94",
    "hanzi": "手表",
    "pinyin": "shǒu biǎo",
    "english": "wrist watch, 隻|只, 個|个[gè]",
    "level": "HSK 2",
    "lesson": 10
  },
  {
    "id": "HSK2-95",
    "hanzi": "手机",
    "pinyin": "shǒu jī",
    "english": "cell phone, mobile phone, 支[zhī]",
    "level": "HSK 2",
    "lesson": 10
  },
  {
    "id": "HSK2-96",
    "hanzi": "送",
    "pinyin": "sòng",
    "english": "to deliver, to carry, to give (as a present), to present (with), to see off, to send",
    "level": "HSK 2",
    "lesson": 10
  },
  {
    "id": "HSK2-97",
    "hanzi": "所以",
    "pinyin": "suǒ yǐ",
    "english": "therefore, as a result, so",
    "level": "HSK 2",
    "lesson": 10
  },
  {
    "id": "HSK2-98",
    "hanzi": "它",
    "pinyin": "tā",
    "english": "it",
    "level": "HSK 2",
    "lesson": 10
  },
  {
    "id": "HSK2-99",
    "hanzi": "踢",
    "pinyin": "tī",
    "english": "to kick, to play (e.g. soccer)",
    "level": "HSK 2",
    "lesson": 10
  },
  {
    "id": "HSK2-100",
    "hanzi": "题",
    "pinyin": "tí",
    "english": "topic, problem for discussion, exam question, subject, to inscribe, to mention, 道[dào]",
    "level": "HSK 2",
    "lesson": 10
  },
  {
    "id": "HSK2-101",
    "hanzi": "跳舞",
    "pinyin": "tiào wǔ",
    "english": "to dance",
    "level": "HSK 2",
    "lesson": 11
  },
  {
    "id": "HSK2-102",
    "hanzi": "外",
    "pinyin": "wài",
    "english": "outside, in addition, foreign, external",
    "level": "HSK 2",
    "lesson": 11
  },
  {
    "id": "HSK2-103",
    "hanzi": "完",
    "pinyin": "wán",
    "english": "to finish, to be over, whole, complete, entire",
    "level": "HSK 2",
    "lesson": 11
  },
  {
    "id": "HSK2-104",
    "hanzi": "玩",
    "pinyin": "wán",
    "english": "toy, sth used for amusement, curio or antique (Taiwan pr. ), to play, to have fun, to trifle with, to keep sth for entertainment",
    "level": "HSK 2",
    "lesson": 11
  },
  {
    "id": "HSK2-105",
    "hanzi": "晚上",
    "pinyin": "wǎn shang",
    "english": "evening, night, in the evening",
    "level": "HSK 2",
    "lesson": 11
  },
  {
    "id": "HSK2-106",
    "hanzi": "为",
    "pinyin": "wèi",
    "english": "variant of 為|为, because of, for, to",
    "level": "HSK 2",
    "lesson": 11
  },
  {
    "id": "HSK2-107",
    "hanzi": "问",
    "pinyin": "wèn",
    "english": "to ask",
    "level": "HSK 2",
    "lesson": 11
  },
  {
    "id": "HSK2-108",
    "hanzi": "问题",
    "pinyin": "wèn tí",
    "english": "question, problem, issue, topic",
    "level": "HSK 2",
    "lesson": 11
  },
  {
    "id": "HSK2-109",
    "hanzi": "西瓜",
    "pinyin": "xī guā",
    "english": "watermelon",
    "level": "HSK 2",
    "lesson": 11
  },
  {
    "id": "HSK2-110",
    "hanzi": "希望",
    "pinyin": "xī wàng",
    "english": "to wish for, to desire, hope CL:個|个[gè]",
    "level": "HSK 2",
    "lesson": 11
  },
  {
    "id": "HSK2-111",
    "hanzi": "洗",
    "pinyin": "xǐ",
    "english": "to wash, to bathe, to develop (photo)",
    "level": "HSK 2",
    "lesson": 12
  },
  {
    "id": "HSK2-112",
    "hanzi": "向",
    "pinyin": "xiàng",
    "english": "towards, to face, to turn towards, direction, to support, to side with, shortly before, formerly, always, all along",
    "level": "HSK 2",
    "lesson": 12
  },
  {
    "id": "HSK2-113",
    "hanzi": "小时",
    "pinyin": "xiǎo shí",
    "english": "hour",
    "level": "HSK 2",
    "lesson": 12
  },
  {
    "id": "HSK2-114",
    "hanzi": "笑",
    "pinyin": "xiào",
    "english": "laugh, smile",
    "level": "HSK 2",
    "lesson": 12
  },
  {
    "id": "HSK2-115",
    "hanzi": "新",
    "pinyin": "xīn",
    "english": "new, newly, meso- (chemistry)",
    "level": "HSK 2",
    "lesson": 12
  },
  {
    "id": "HSK2-116",
    "hanzi": "姓",
    "pinyin": "xìng",
    "english": "family name, surname, name",
    "level": "HSK 2",
    "lesson": 12
  },
  {
    "id": "HSK2-117",
    "hanzi": "休息",
    "pinyin": "xiū xi",
    "english": "rest, to rest",
    "level": "HSK 2",
    "lesson": 12
  },
  {
    "id": "HSK2-118",
    "hanzi": "雪",
    "pinyin": "xuě",
    "english": "snow, snowfall, to have the appearance of snow, to wipe away, off or out, to clean",
    "level": "HSK 2",
    "lesson": 12
  },
  {
    "id": "HSK2-119",
    "hanzi": "颜色",
    "pinyin": "yán sè",
    "english": "color",
    "level": "HSK 2",
    "lesson": 12
  },
  {
    "id": "HSK2-120",
    "hanzi": "眼睛",
    "pinyin": "yǎn jing",
    "english": "eye, 雙|双[shuāng]",
    "level": "HSK 2",
    "lesson": 12
  },
  {
    "id": "HSK2-121",
    "hanzi": "羊肉",
    "pinyin": "yáng ròu",
    "english": "mutton",
    "level": "HSK 2",
    "lesson": 13
  },
  {
    "id": "HSK2-122",
    "hanzi": "药",
    "pinyin": "yào",
    "english": "medicine, drug, cure, 服[fù]",
    "level": "HSK 2",
    "lesson": 13
  },
  {
    "id": "HSK2-123",
    "hanzi": "要",
    "pinyin": "yào",
    "english": "important, vital, to want, will, going to (as future auxiliary), may, must, (used in a comparison) must be, probably",
    "level": "HSK 2",
    "lesson": 13
  },
  {
    "id": "HSK2-124",
    "hanzi": "也",
    "pinyin": "yě",
    "english": "also, too, (in Classical Chinese) final particle implying affirmation",
    "level": "HSK 2",
    "lesson": 13
  },
  {
    "id": "HSK2-125",
    "hanzi": "已经",
    "pinyin": "yǐ jīng",
    "english": "already",
    "level": "HSK 2",
    "lesson": 13
  },
  {
    "id": "HSK2-126",
    "hanzi": "一起",
    "pinyin": "yī qǐ",
    "english": "in the same place, together, with, altogether (in total)",
    "level": "HSK 2",
    "lesson": 13
  },
  {
    "id": "HSK2-127",
    "hanzi": "意思",
    "pinyin": "yì si",
    "english": "idea, opinion, meaning, wish, desire",
    "level": "HSK 2",
    "lesson": 13
  },
  {
    "id": "HSK2-128",
    "hanzi": "阴",
    "pinyin": "yīn",
    "english": "overcast (weather), cloudy, shady, Yin (the negative principle of Yin and Yang), negative (electric.), feminine, moon, implicit, hidden, genitalia",
    "level": "HSK 2",
    "lesson": 13
  },
  {
    "id": "HSK2-129",
    "hanzi": "因为",
    "pinyin": "yīn wèi",
    "english": "because, owing to, on account of",
    "level": "HSK 2",
    "lesson": 13
  },
  {
    "id": "HSK2-130",
    "hanzi": "游泳",
    "pinyin": "yóu yǒng",
    "english": "swimming, to swim",
    "level": "HSK 2",
    "lesson": 13
  },
  {
    "id": "HSK2-131",
    "hanzi": "右边",
    "pinyin": "yòu bian",
    "english": "right side, right, to the right",
    "level": "HSK 2",
    "lesson": 14
  },
  {
    "id": "HSK2-132",
    "hanzi": "鱼",
    "pinyin": "yú",
    "english": "fish, 尾[wěi]",
    "level": "HSK 2",
    "lesson": 14
  },
  {
    "id": "HSK2-133",
    "hanzi": "元",
    "pinyin": "yuán",
    "english": "Chinese monetary unit, dollar, primary, first",
    "level": "HSK 2",
    "lesson": 14
  },
  {
    "id": "HSK2-134",
    "hanzi": "远",
    "pinyin": "yuǎn",
    "english": "far, distant, remote",
    "level": "HSK 2",
    "lesson": 14
  },
  {
    "id": "HSK2-135",
    "hanzi": "运动",
    "pinyin": "yùn dòng",
    "english": "to move, to exercise, sports, exercise, motion, movement, campaign",
    "level": "HSK 2",
    "lesson": 14
  },
  {
    "id": "HSK2-136",
    "hanzi": "再",
    "pinyin": "zài",
    "english": "again, once more, re-, second, another, then (after sth, and not until then)",
    "level": "HSK 2",
    "lesson": 14
  },
  {
    "id": "HSK2-137",
    "hanzi": "早上",
    "pinyin": "zǎo shang",
    "english": "early morning",
    "level": "HSK 2",
    "lesson": 14
  },
  {
    "id": "HSK2-138",
    "hanzi": "张",
    "pinyin": "zhāng",
    "english": "to open up, to spread, sheet of paper, classifier for flat objects, sheet, classifier for votes",
    "level": "HSK 2",
    "lesson": 14
  },
  {
    "id": "HSK2-139",
    "hanzi": "长",
    "pinyin": "zhǎng",
    "english": "chief, head, elder, to grow, to develop, to increase, to enhance",
    "level": "HSK 2",
    "lesson": 14
  },
  {
    "id": "HSK2-140",
    "hanzi": "丈夫",
    "pinyin": "zhàng fu",
    "english": "husband",
    "level": "HSK 2",
    "lesson": 14
  },
  {
    "id": "HSK2-141",
    "hanzi": "找",
    "pinyin": "zhǎo",
    "english": "to try to find, to look for, to call on sb, to find, to seek, to return, to give change",
    "level": "HSK 2",
    "lesson": 15
  },
  {
    "id": "HSK2-142",
    "hanzi": "着",
    "pinyin": "zhe",
    "english": "aspect particle indicating action in progress",
    "level": "HSK 2",
    "lesson": 15
  },
  {
    "id": "HSK2-143",
    "hanzi": "真",
    "pinyin": "zhēn",
    "english": "really, truly, indeed, real, true, genuine",
    "level": "HSK 2",
    "lesson": 15
  },
  {
    "id": "HSK2-144",
    "hanzi": "正在",
    "pinyin": "zhèng zài",
    "english": "in the process of (doing something or happening), while (doing)",
    "level": "HSK 2",
    "lesson": 15
  },
  {
    "id": "HSK2-145",
    "hanzi": "知道",
    "pinyin": "zhī dào",
    "english": "to know, to be aware of, also pron. [zhī dao]",
    "level": "HSK 2",
    "lesson": 15
  },
  {
    "id": "HSK2-146",
    "hanzi": "准备",
    "pinyin": "zhǔn bèi",
    "english": "preparation, to prepare, to intend, to be about to, reserve (fund)",
    "level": "HSK 2",
    "lesson": 15
  },
  {
    "id": "HSK2-147",
    "hanzi": "自行车",
    "pinyin": "zì xíng chē",
    "english": "bicycle, bike",
    "level": "HSK 2",
    "lesson": 15
  },
  {
    "id": "HSK2-148",
    "hanzi": "走",
    "pinyin": "zǒu",
    "english": "to walk, to go, to run, to move (of vehicle), to visit, to leave, to go away, to die (euph.), from, through, away (in compound verbs, such as 撤走), to change (shape, form, meaning)",
    "level": "HSK 2",
    "lesson": 15
  },
  {
    "id": "HSK2-149",
    "hanzi": "最",
    "pinyin": "zuì",
    "english": "most, the most, -est (superlative suffix)",
    "level": "HSK 2",
    "lesson": 15
  },
  {
    "id": "HSK2-150",
    "hanzi": "左边",
    "pinyin": "zuǒ bian",
    "english": "left, the left side, to the left of",
    "level": "HSK 2",
    "lesson": 15
  },
  {
    "id": "HSK3-1",
    "hanzi": "阿姨",
    "pinyin": "ā yí",
    "english": "maternal aunt, step-mother, childcare worker, nursemaid, woman of similar age to one's parents (term of address used by child)",
    "level": "HSK 3",
    "lesson": 1
  },
  {
    "id": "HSK3-2",
    "hanzi": "啊",
    "pinyin": "a",
    "english": "modal particle ending sentence, showing affirmation, approval, or consent",
    "level": "HSK 3",
    "lesson": 1
  },
  {
    "id": "HSK3-3",
    "hanzi": "矮",
    "pinyin": "ǎi",
    "english": "low, short (in length)",
    "level": "HSK 3",
    "lesson": 1
  },
  {
    "id": "HSK3-4",
    "hanzi": "爱好",
    "pinyin": "ài hào",
    "english": "to like, to take pleasure in, keen on, fond of, interest, hobby, appetite for",
    "level": "HSK 3",
    "lesson": 1
  },
  {
    "id": "HSK3-5",
    "hanzi": "安静",
    "pinyin": "ān jìng",
    "english": "quiet, peaceful, calm",
    "level": "HSK 3",
    "lesson": 1
  },
  {
    "id": "HSK3-6",
    "hanzi": "把",
    "pinyin": "bǎ",
    "english": "to hold, to contain, to grasp, to take hold of, handle, particle marking the following noun as a direct object, classifier for objects with handle, classifier for small objects: handful",
    "level": "HSK 3",
    "lesson": 1
  },
  {
    "id": "HSK3-7",
    "hanzi": "搬",
    "pinyin": "bān",
    "english": "to move, to shift, to remove, to transport, to apply indiscriminately, to copy mechanically",
    "level": "HSK 3",
    "lesson": 1
  },
  {
    "id": "HSK3-8",
    "hanzi": "班",
    "pinyin": "bān",
    "english": "team, class, squad, work shift, ranking, classifier for groups",
    "level": "HSK 3",
    "lesson": 1
  },
  {
    "id": "HSK3-9",
    "hanzi": "半",
    "pinyin": "bàn",
    "english": "half, semi-, incomplete, (after a number) and a half",
    "level": "HSK 3",
    "lesson": 1
  },
  {
    "id": "HSK3-10",
    "hanzi": "办法",
    "pinyin": "bàn fǎ",
    "english": "means, method, way (of doing sth), 個|个[gè]",
    "level": "HSK 3",
    "lesson": 1
  },
  {
    "id": "HSK3-11",
    "hanzi": "办公室",
    "pinyin": "bàn gōng shì",
    "english": "office, business premises, bureau",
    "level": "HSK 3",
    "lesson": 1
  },
  {
    "id": "HSK3-12",
    "hanzi": "帮忙",
    "pinyin": "bāng máng",
    "english": "to help, to lend a hand, to do a favor, to do a good turn",
    "level": "HSK 3",
    "lesson": 1
  },
  {
    "id": "HSK3-13",
    "hanzi": "包",
    "pinyin": "bāo",
    "english": "to cover, to wrap, to hold, to include, to take charge of, to contract (to or for), package, wrapper, container, bag, to hold or embrace, bundle, packet, 隻|只[zhī]",
    "level": "HSK 3",
    "lesson": 1
  },
  {
    "id": "HSK3-14",
    "hanzi": "饱",
    "pinyin": "bǎo",
    "english": "to eat till full, satisfied",
    "level": "HSK 3",
    "lesson": 1
  },
  {
    "id": "HSK3-15",
    "hanzi": "北方",
    "pinyin": "běi fāng",
    "english": "north, the northern part a country, China north of the Yellow River",
    "level": "HSK 3",
    "lesson": 1
  },
  {
    "id": "HSK3-16",
    "hanzi": "被",
    "pinyin": "bèi",
    "english": "quilt, by, (indicates passive-voice clauses), (literary) to cover, to meet with",
    "level": "HSK 3",
    "lesson": 2
  },
  {
    "id": "HSK3-17",
    "hanzi": "鼻子",
    "pinyin": "bí zi",
    "english": "nose, 隻|只[zhī]",
    "level": "HSK 3",
    "lesson": 2
  },
  {
    "id": "HSK3-18",
    "hanzi": "比较",
    "pinyin": "bǐ jiào",
    "english": "to compare, to contrast, comparatively, relatively, quite, comparison",
    "level": "HSK 3",
    "lesson": 2
  },
  {
    "id": "HSK3-19",
    "hanzi": "比赛",
    "pinyin": "bǐ sài",
    "english": "competition (sports etc), match, 次[cì]",
    "level": "HSK 3",
    "lesson": 2
  },
  {
    "id": "HSK3-20",
    "hanzi": "必须",
    "pinyin": "bì xū",
    "english": "to have to, must, compulsory, necessarily",
    "level": "HSK 3",
    "lesson": 2
  },
  {
    "id": "HSK3-21",
    "hanzi": "变化",
    "pinyin": "biàn huà",
    "english": "change, variation, to change, to vary",
    "level": "HSK 3",
    "lesson": 2
  },
  {
    "id": "HSK3-22",
    "hanzi": "表示",
    "pinyin": "biǎo shì",
    "english": "to express, to show, to say, to state, to indicate, to mean",
    "level": "HSK 3",
    "lesson": 2
  },
  {
    "id": "HSK3-23",
    "hanzi": "表演",
    "pinyin": "biǎo yǎn",
    "english": "play, show, performance, exhibition, to perform, to act, to demonstrate",
    "level": "HSK 3",
    "lesson": 2
  },
  {
    "id": "HSK3-24",
    "hanzi": "别人",
    "pinyin": "bié ren",
    "english": "other people, others, other person",
    "level": "HSK 3",
    "lesson": 2
  },
  {
    "id": "HSK3-25",
    "hanzi": "宾馆",
    "pinyin": "bīn guǎn",
    "english": "guesthouse, lodge, hotel, 家[jiā]",
    "level": "HSK 3",
    "lesson": 2
  },
  {
    "id": "HSK3-26",
    "hanzi": "冰箱",
    "pinyin": "bīng xiāng",
    "english": "icebox, freezer cabinet, refrigerator, 個|个[gè]",
    "level": "HSK 3",
    "lesson": 2
  },
  {
    "id": "HSK3-27",
    "hanzi": "才",
    "pinyin": "cái",
    "english": "a moment ago, just now, (preceded by a clause of condition or reason) not until, (followed by a numerical clause) only",
    "level": "HSK 3",
    "lesson": 2
  },
  {
    "id": "HSK3-28",
    "hanzi": "菜单",
    "pinyin": "cài dān",
    "english": "menu, 張|张[zhāng]",
    "level": "HSK 3",
    "lesson": 2
  },
  {
    "id": "HSK3-29",
    "hanzi": "参加",
    "pinyin": "cān jiā",
    "english": "to participate, to take part, to join",
    "level": "HSK 3",
    "lesson": 2
  },
  {
    "id": "HSK3-30",
    "hanzi": "草",
    "pinyin": "cǎo",
    "english": "grass, straw, manuscript, draft (of a document), careless, rough, 撮, 株, 根[gēn]",
    "level": "HSK 3",
    "lesson": 2
  },
  {
    "id": "HSK3-31",
    "hanzi": "层",
    "pinyin": "céng",
    "english": "layer, stratum, laminated, floor (of a building), storey, classifier for layers, repeated, sheaf (math.)",
    "level": "HSK 3",
    "lesson": 3
  },
  {
    "id": "HSK3-32",
    "hanzi": "差",
    "pinyin": "chà",
    "english": "to differ from, to fall short of, lacking, wrong, inferior",
    "level": "HSK 3",
    "lesson": 3
  },
  {
    "id": "HSK3-33",
    "hanzi": "超市",
    "pinyin": "chāo shì",
    "english": "supermarket (abbr.)",
    "level": "HSK 3",
    "lesson": 3
  },
  {
    "id": "HSK3-34",
    "hanzi": "衬衫",
    "pinyin": "chèn shān",
    "english": "shirt, blouse",
    "level": "HSK 3",
    "lesson": 3
  },
  {
    "id": "HSK3-35",
    "hanzi": "成绩",
    "pinyin": "chéng jì",
    "english": "achievement, performance records, grades, 個|个[gè]",
    "level": "HSK 3",
    "lesson": 3
  },
  {
    "id": "HSK3-36",
    "hanzi": "城市",
    "pinyin": "chéng shì",
    "english": "city, town",
    "level": "HSK 3",
    "lesson": 3
  },
  {
    "id": "HSK3-37",
    "hanzi": "迟到",
    "pinyin": "chí dào",
    "english": "to arrive late",
    "level": "HSK 3",
    "lesson": 3
  },
  {
    "id": "HSK3-38",
    "hanzi": "出现",
    "pinyin": "chū xiàn",
    "english": "to appear, to arise, to emerge, to show up",
    "level": "HSK 3",
    "lesson": 3
  },
  {
    "id": "HSK3-39",
    "hanzi": "除了",
    "pinyin": "chú le",
    "english": "besides, apart from (... also...), in addition to, except (for)",
    "level": "HSK 3",
    "lesson": 3
  },
  {
    "id": "HSK3-40",
    "hanzi": "厨房",
    "pinyin": "chú fáng",
    "english": "kitchen",
    "level": "HSK 3",
    "lesson": 3
  },
  {
    "id": "HSK3-41",
    "hanzi": "春",
    "pinyin": "chūn",
    "english": "spring (time), gay, joyful, youthful, love, lust, life",
    "level": "HSK 3",
    "lesson": 3
  },
  {
    "id": "HSK3-42",
    "hanzi": "词语",
    "pinyin": "cí yǔ",
    "english": "word (general term including monosyllables through to short phrases), term (e.g. technical term), expression",
    "level": "HSK 3",
    "lesson": 3
  },
  {
    "id": "HSK3-43",
    "hanzi": "聪明",
    "pinyin": "cōng ming",
    "english": "acute (of sight and hearing), clever, intelligent, bright, smart",
    "level": "HSK 3",
    "lesson": 3
  },
  {
    "id": "HSK3-44",
    "hanzi": "打扫",
    "pinyin": "dǎ sǎo",
    "english": "to clean, to sweep",
    "level": "HSK 3",
    "lesson": 3
  },
  {
    "id": "HSK3-45",
    "hanzi": "打算",
    "pinyin": "dǎ suàn",
    "english": "to plan, to intend, to calculate, plan, intention, calculation",
    "level": "HSK 3",
    "lesson": 3
  },
  {
    "id": "HSK3-46",
    "hanzi": "带",
    "pinyin": "dài",
    "english": "band, belt, girdle, ribbon, tire, area, zone, region, to wear, to carry, to take along, to bear (i.e. to have), to lead, to bring, to look after, to raise",
    "level": "HSK 3",
    "lesson": 4
  },
  {
    "id": "HSK3-47",
    "hanzi": "担心",
    "pinyin": "dān xīn",
    "english": "anxious, worried, uneasy, to worry, to be anxious",
    "level": "HSK 3",
    "lesson": 4
  },
  {
    "id": "HSK3-48",
    "hanzi": "蛋糕",
    "pinyin": "dàn gāo",
    "english": "cake, 個|个[gè]",
    "level": "HSK 3",
    "lesson": 4
  },
  {
    "id": "HSK3-49",
    "hanzi": "当然",
    "pinyin": "dāng rán",
    "english": "only natural, as it should be, certainly, of course, without doubt",
    "level": "HSK 3",
    "lesson": 4
  },
  {
    "id": "HSK3-50",
    "hanzi": "地",
    "pinyin": "de",
    "english": "-ly, structural particle: used before a verb or adjective, linking it to preceding modifying adverbial adjunct",
    "level": "HSK 3",
    "lesson": 4
  },
  {
    "id": "HSK3-51",
    "hanzi": "灯",
    "pinyin": "dēng",
    "english": "lamp, light, lantern",
    "level": "HSK 3",
    "lesson": 4
  },
  {
    "id": "HSK3-52",
    "hanzi": "低",
    "pinyin": "dī",
    "english": "low, beneath, to lower (one's head), to let droop, to hang down, to incline",
    "level": "HSK 3",
    "lesson": 4
  },
  {
    "id": "HSK3-53",
    "hanzi": "地方",
    "pinyin": "dì fang",
    "english": "area, place, space, room, territory, 個|个, 塊|块[kuài]",
    "level": "HSK 3",
    "lesson": 4
  },
  {
    "id": "HSK3-54",
    "hanzi": "地铁",
    "pinyin": "dì tiě",
    "english": "subway, metro",
    "level": "HSK 3",
    "lesson": 4
  },
  {
    "id": "HSK3-55",
    "hanzi": "地图",
    "pinyin": "dì tú",
    "english": "map, 本[běn]",
    "level": "HSK 3",
    "lesson": 4
  },
  {
    "id": "HSK3-56",
    "hanzi": "电梯",
    "pinyin": "diàn tī",
    "english": "elevator, escalator, 部[bù]",
    "level": "HSK 3",
    "lesson": 4
  },
  {
    "id": "HSK3-57",
    "hanzi": "电子",
    "pinyin": "diàn zǐ",
    "english": "electronic, electron (particle physics)",
    "level": "HSK 3",
    "lesson": 4
  },
  {
    "id": "HSK3-58",
    "hanzi": "冬",
    "pinyin": "dōng",
    "english": "sound of beating a drum, onomatopoeia for rat-a-tat etc",
    "level": "HSK 3",
    "lesson": 4
  },
  {
    "id": "HSK3-59",
    "hanzi": "东",
    "pinyin": "dōng",
    "english": "east, host (i.e. sitting on east side of guest), landlord",
    "level": "HSK 3",
    "lesson": 4
  },
  {
    "id": "HSK3-60",
    "hanzi": "动物",
    "pinyin": "dòng wù",
    "english": "animal, 群, 個|个[gè]",
    "level": "HSK 3",
    "lesson": 4
  },
  {
    "id": "HSK3-61",
    "hanzi": "短",
    "pinyin": "duǎn",
    "english": "short or brief, to lack, weak point, fault",
    "level": "HSK 3",
    "lesson": 5
  },
  {
    "id": "HSK3-62",
    "hanzi": "段",
    "pinyin": "duàn",
    "english": "paragraph, section, segment, stage (of a process), classifier for stories, periods of time, lengths of thread etc",
    "level": "HSK 3",
    "lesson": 5
  },
  {
    "id": "HSK3-63",
    "hanzi": "锻炼",
    "pinyin": "duàn liàn",
    "english": "to engage in physical exercise, to work out, to toughen, to temper",
    "level": "HSK 3",
    "lesson": 5
  },
  {
    "id": "HSK3-64",
    "hanzi": "多么",
    "pinyin": "duō me",
    "english": "how (wonderful etc), what (a great idea etc), however (difficult it may be etc)",
    "level": "HSK 3",
    "lesson": 5
  },
  {
    "id": "HSK3-65",
    "hanzi": "饿",
    "pinyin": "è",
    "english": "to be hungry, hungry",
    "level": "HSK 3",
    "lesson": 5
  },
  {
    "id": "HSK3-66",
    "hanzi": "而且",
    "pinyin": "ér qiě",
    "english": "(not only ...) but also, moreover, in addition, furthermore",
    "level": "HSK 3",
    "lesson": 5
  },
  {
    "id": "HSK3-67",
    "hanzi": "耳朵",
    "pinyin": "ěr duo",
    "english": "ear, 個|个, 對|对[duì]",
    "level": "HSK 3",
    "lesson": 5
  },
  {
    "id": "HSK3-68",
    "hanzi": "发烧",
    "pinyin": "fā shāo",
    "english": "to have a high temperature (from illness), to have a fever",
    "level": "HSK 3",
    "lesson": 5
  },
  {
    "id": "HSK3-69",
    "hanzi": "发现",
    "pinyin": "fā xiàn",
    "english": "to find, to discover",
    "level": "HSK 3",
    "lesson": 5
  },
  {
    "id": "HSK3-70",
    "hanzi": "方便",
    "pinyin": "fāng biàn",
    "english": "convenient, to help out, to make things easy for people, convenience, suitable, having money to spare, (euphemism) to go to the toilet",
    "level": "HSK 3",
    "lesson": 5
  },
  {
    "id": "HSK3-71",
    "hanzi": "放",
    "pinyin": "fàng",
    "english": "to release, to free, to let go, to put, to place, to let out, to set off (fireworks)",
    "level": "HSK 3",
    "lesson": 5
  },
  {
    "id": "HSK3-72",
    "hanzi": "放心",
    "pinyin": "fàng xīn",
    "english": "to feel relieved, to feel reassured, to be at ease",
    "level": "HSK 3",
    "lesson": 5
  },
  {
    "id": "HSK3-73",
    "hanzi": "分",
    "pinyin": "fēn",
    "english": "to divide, to separate, to allocate, to distinguish (good and bad), part or subdivision, fraction, one tenth (of certain units), unit of length equivalent to 0.33 cm, minute, a point (in sports or games), 0.01 yuan (unit of money)",
    "level": "HSK 3",
    "lesson": 5
  },
  {
    "id": "HSK3-74",
    "hanzi": "附近",
    "pinyin": "fù jìn",
    "english": "(in the) vicinity, nearby, neighboring, next to",
    "level": "HSK 3",
    "lesson": 5
  },
  {
    "id": "HSK3-75",
    "hanzi": "复习",
    "pinyin": "fù xí",
    "english": "variant of 復習|复习, to revise, to review, revision",
    "level": "HSK 3",
    "lesson": 5
  },
  {
    "id": "HSK3-76",
    "hanzi": "干净",
    "pinyin": "gān jìng",
    "english": "clean, neat",
    "level": "HSK 3",
    "lesson": 6
  },
  {
    "id": "HSK3-77",
    "hanzi": "敢",
    "pinyin": "gǎn",
    "english": "to dare, daring, (polite) may I venture",
    "level": "HSK 3",
    "lesson": 6
  },
  {
    "id": "HSK3-78",
    "hanzi": "感冒",
    "pinyin": "gǎn mào",
    "english": "to catch cold, (common) cold, 次[cì]",
    "level": "HSK 3",
    "lesson": 6
  },
  {
    "id": "HSK3-79",
    "hanzi": "刚才",
    "pinyin": "gāng cái",
    "english": "(just) a moment ago",
    "level": "HSK 3",
    "lesson": 6
  },
  {
    "id": "HSK3-80",
    "hanzi": "根据",
    "pinyin": "gēn jù",
    "english": "according to, based on, basis, foundation",
    "level": "HSK 3",
    "lesson": 6
  },
  {
    "id": "HSK3-81",
    "hanzi": "跟",
    "pinyin": "gēn",
    "english": "heel, to follow closely, to go with, to marry sb (of woman), with, towards, as (compared to), from (different from), and (in addition to)",
    "level": "HSK 3",
    "lesson": 6
  },
  {
    "id": "HSK3-82",
    "hanzi": "更",
    "pinyin": "gèng",
    "english": "more, even more, further, still, still more",
    "level": "HSK 3",
    "lesson": 6
  },
  {
    "id": "HSK3-83",
    "hanzi": "公园",
    "pinyin": "gōng yuán",
    "english": "public park",
    "level": "HSK 3",
    "lesson": 6
  },
  {
    "id": "HSK3-84",
    "hanzi": "故事",
    "pinyin": "gù shi",
    "english": "narrative, story, tale",
    "level": "HSK 3",
    "lesson": 6
  },
  {
    "id": "HSK3-85",
    "hanzi": "刮",
    "pinyin": "guā",
    "english": "to blow (of the wind)",
    "level": "HSK 3",
    "lesson": 6
  },
  {
    "id": "HSK3-86",
    "hanzi": "关",
    "pinyin": "guān",
    "english": "mountain pass, to close, to shut, to turn off, to concern, to involve",
    "level": "HSK 3",
    "lesson": 6
  },
  {
    "id": "HSK3-87",
    "hanzi": "关系",
    "pinyin": "guān xì",
    "english": "variant of 關係|关系[guān xì]",
    "level": "HSK 3",
    "lesson": 6
  },
  {
    "id": "HSK3-88",
    "hanzi": "关心",
    "pinyin": "guān xīn",
    "english": "to care for sth, caring, concerned",
    "level": "HSK 3",
    "lesson": 6
  },
  {
    "id": "HSK3-89",
    "hanzi": "关于",
    "pinyin": "guān yú",
    "english": "pertaining to, concerning, regarding, with regards to, about, a matter of",
    "level": "HSK 3",
    "lesson": 6
  },
  {
    "id": "HSK3-90",
    "hanzi": "国家",
    "pinyin": "guó jiā",
    "english": "country, nation, state",
    "level": "HSK 3",
    "lesson": 6
  },
  {
    "id": "HSK3-91",
    "hanzi": "果汁",
    "pinyin": "guǒ zhī",
    "english": "fruit juice",
    "level": "HSK 3",
    "lesson": 7
  },
  {
    "id": "HSK3-92",
    "hanzi": "过去",
    "pinyin": "guò qu",
    "english": "(in the) past, former, previous, to go over, to pass by",
    "level": "HSK 3",
    "lesson": 7
  },
  {
    "id": "HSK3-93",
    "hanzi": "还是",
    "pinyin": "hái shi",
    "english": "or, still, nevertheless, had better",
    "level": "HSK 3",
    "lesson": 7
  },
  {
    "id": "HSK3-94",
    "hanzi": "害怕",
    "pinyin": "hài pà",
    "english": "to be afraid, to be scared",
    "level": "HSK 3",
    "lesson": 7
  },
  {
    "id": "HSK3-95",
    "hanzi": "河",
    "pinyin": "hé",
    "english": "river, 道[dào]",
    "level": "HSK 3",
    "lesson": 7
  },
  {
    "id": "HSK3-96",
    "hanzi": "黑板",
    "pinyin": "hēi bǎn",
    "english": "blackboard, 個|个[gè]",
    "level": "HSK 3",
    "lesson": 7
  },
  {
    "id": "HSK3-97",
    "hanzi": "护照",
    "pinyin": "hù zhào",
    "english": "passport, 個|个[gè]",
    "level": "HSK 3",
    "lesson": 7
  },
  {
    "id": "HSK3-98",
    "hanzi": "花",
    "pinyin": "huā",
    "english": "flower, blossom, 支, 束, 把, 盆, 簇[cù], fancy pattern, florid, to spend (money, time)",
    "level": "HSK 3",
    "lesson": 7
  },
  {
    "id": "HSK3-99",
    "hanzi": "花园",
    "pinyin": "huā yuán",
    "english": "garden, 個|个[gè]",
    "level": "HSK 3",
    "lesson": 7
  },
  {
    "id": "HSK3-100",
    "hanzi": "画",
    "pinyin": "huà",
    "english": "to draw, picture, painting, 張|张[zhāng]",
    "level": "HSK 3",
    "lesson": 7
  },
  {
    "id": "HSK3-101",
    "hanzi": "坏",
    "pinyin": "huài",
    "english": "bad, spoiled, broken, to break down",
    "level": "HSK 3",
    "lesson": 7
  },
  {
    "id": "HSK3-102",
    "hanzi": "环境",
    "pinyin": "huán jìng",
    "english": "environment, circumstances, surroundings, ambient",
    "level": "HSK 3",
    "lesson": 7
  },
  {
    "id": "HSK3-103",
    "hanzi": "换",
    "pinyin": "huàn",
    "english": "to change, to exchange",
    "level": "HSK 3",
    "lesson": 7
  },
  {
    "id": "HSK3-104",
    "hanzi": "黄",
    "pinyin": "huáng",
    "english": "yellow, pornographic, to fall through",
    "level": "HSK 3",
    "lesson": 7
  },
  {
    "id": "HSK3-105",
    "hanzi": "会议",
    "pinyin": "huì yì",
    "english": "meeting, conference, 屆|届[jiè]",
    "level": "HSK 3",
    "lesson": 7
  },
  {
    "id": "HSK3-106",
    "hanzi": "或者",
    "pinyin": "huò zhě",
    "english": "or, possibly, maybe, perhaps",
    "level": "HSK 3",
    "lesson": 8
  },
  {
    "id": "HSK3-107",
    "hanzi": "机会",
    "pinyin": "jī huì",
    "english": "opportunity, chance, occasion",
    "level": "HSK 3",
    "lesson": 8
  },
  {
    "id": "HSK3-108",
    "hanzi": "几乎",
    "pinyin": "jī hū",
    "english": "almost, nearly, practically",
    "level": "HSK 3",
    "lesson": 8
  },
  {
    "id": "HSK3-109",
    "hanzi": "极",
    "pinyin": "jí",
    "english": "extremely, pole (geography, physics), utmost, top",
    "level": "HSK 3",
    "lesson": 8
  },
  {
    "id": "HSK3-110",
    "hanzi": "记得",
    "pinyin": "jì de",
    "english": "to remember",
    "level": "HSK 3",
    "lesson": 8
  },
  {
    "id": "HSK3-111",
    "hanzi": "季节",
    "pinyin": "jì jié",
    "english": "time, season, period",
    "level": "HSK 3",
    "lesson": 8
  },
  {
    "id": "HSK3-112",
    "hanzi": "检查",
    "pinyin": "jiǎn chá",
    "english": "inspection, to examine, to inspect",
    "level": "HSK 3",
    "lesson": 8
  },
  {
    "id": "HSK3-113",
    "hanzi": "简单",
    "pinyin": "jiǎn dān",
    "english": "simple, not complicated",
    "level": "HSK 3",
    "lesson": 8
  },
  {
    "id": "HSK3-114",
    "hanzi": "见面",
    "pinyin": "jiàn miàn",
    "english": "to meet, to see sb",
    "level": "HSK 3",
    "lesson": 8
  },
  {
    "id": "HSK3-115",
    "hanzi": "健康",
    "pinyin": "jiàn kāng",
    "english": "health, healthy",
    "level": "HSK 3",
    "lesson": 8
  },
  {
    "id": "HSK3-116",
    "hanzi": "讲",
    "pinyin": "jiǎng",
    "english": "to speak, to explain, to negotiate, to emphasise, to be particular about, as far as sth is concerned, speech, lecture",
    "level": "HSK 3",
    "lesson": 8
  },
  {
    "id": "HSK3-117",
    "hanzi": "教",
    "pinyin": "jiāo",
    "english": "to teach",
    "level": "HSK 3",
    "lesson": 8
  },
  {
    "id": "HSK3-118",
    "hanzi": "脚",
    "pinyin": "jiǎo",
    "english": "foot, leg, base, kick, 隻|只[zhī]",
    "level": "HSK 3",
    "lesson": 8
  },
  {
    "id": "HSK3-119",
    "hanzi": "角",
    "pinyin": "jiǎo",
    "english": "angle, corner, horn, horn-shaped, unit of money equal to 0.1 yuan",
    "level": "HSK 3",
    "lesson": 8
  },
  {
    "id": "HSK3-120",
    "hanzi": "接",
    "pinyin": "jiē",
    "english": "to receive, to answer (the phone), to meet or welcome sb, to connect, to catch, to join, to extend, to take one's turn on duty, to take over for sb",
    "level": "HSK 3",
    "lesson": 8
  },
  {
    "id": "HSK3-121",
    "hanzi": "街道",
    "pinyin": "jiē dào",
    "english": "street, subdistrict, residential district",
    "level": "HSK 3",
    "lesson": 9
  },
  {
    "id": "HSK3-122",
    "hanzi": "节目",
    "pinyin": "jié mù",
    "english": "program, item (on a program), 個|个, 套[tào]",
    "level": "HSK 3",
    "lesson": 9
  },
  {
    "id": "HSK3-123",
    "hanzi": "节日",
    "pinyin": "jié rì",
    "english": "holiday, festival",
    "level": "HSK 3",
    "lesson": 9
  },
  {
    "id": "HSK3-124",
    "hanzi": "结婚",
    "pinyin": "jié hūn",
    "english": "to marry, to get married",
    "level": "HSK 3",
    "lesson": 9
  },
  {
    "id": "HSK3-125",
    "hanzi": "结束",
    "pinyin": "jié shù",
    "english": "termination, to finish, to end, to conclude, to close",
    "level": "HSK 3",
    "lesson": 9
  },
  {
    "id": "HSK3-126",
    "hanzi": "解决",
    "pinyin": "jiě jué",
    "english": "to settle (a dispute), to resolve, to solve, to dispose of, to dispatch",
    "level": "HSK 3",
    "lesson": 9
  },
  {
    "id": "HSK3-127",
    "hanzi": "借",
    "pinyin": "jiè",
    "english": "to lend, to borrow, by means of, to take (an opportunity)",
    "level": "HSK 3",
    "lesson": 9
  },
  {
    "id": "HSK3-128",
    "hanzi": "经常",
    "pinyin": "jīng cháng",
    "english": "day to day, everyday, daily, frequently, constantly, regularly, often",
    "level": "HSK 3",
    "lesson": 9
  },
  {
    "id": "HSK3-129",
    "hanzi": "经过",
    "pinyin": "jīng guò",
    "english": "to pass, to go through, process, course",
    "level": "HSK 3",
    "lesson": 9
  },
  {
    "id": "HSK3-130",
    "hanzi": "经理",
    "pinyin": "jīng lǐ",
    "english": "manager, director, 位, 名[míng]",
    "level": "HSK 3",
    "lesson": 9
  },
  {
    "id": "HSK3-131",
    "hanzi": "久",
    "pinyin": "jiǔ",
    "english": "(long) time, (long) duration of time",
    "level": "HSK 3",
    "lesson": 9
  },
  {
    "id": "HSK3-132",
    "hanzi": "旧",
    "pinyin": "jiù",
    "english": "old, opposite: new 新, former, worn (with age)",
    "level": "HSK 3",
    "lesson": 9
  },
  {
    "id": "HSK3-133",
    "hanzi": "举行",
    "pinyin": "jǔ xíng",
    "english": "to hold (a meeting, ceremony etc)",
    "level": "HSK 3",
    "lesson": 9
  },
  {
    "id": "HSK3-134",
    "hanzi": "句子",
    "pinyin": "jù zi",
    "english": "sentence",
    "level": "HSK 3",
    "lesson": 9
  },
  {
    "id": "HSK3-135",
    "hanzi": "决定",
    "pinyin": "jué dìng",
    "english": "to decide (to do something), to resolve, decision, 項|项[xiàng], certainly",
    "level": "HSK 3",
    "lesson": 9
  },
  {
    "id": "HSK3-136",
    "hanzi": "渴",
    "pinyin": "kě",
    "english": "thirsty",
    "level": "HSK 3",
    "lesson": 10
  },
  {
    "id": "HSK3-137",
    "hanzi": "可爱",
    "pinyin": "kě ài",
    "english": "adorable, cute, lovely",
    "level": "HSK 3",
    "lesson": 10
  },
  {
    "id": "HSK3-138",
    "hanzi": "刻",
    "pinyin": "kè",
    "english": "quarter (hour), moment, to carve, to engrave, to cut, oppressive, classifier for short time intervals",
    "level": "HSK 3",
    "lesson": 10
  },
  {
    "id": "HSK3-139",
    "hanzi": "客人",
    "pinyin": "kè rén",
    "english": "visitor, guest, customer, client",
    "level": "HSK 3",
    "lesson": 10
  },
  {
    "id": "HSK3-140",
    "hanzi": "空调",
    "pinyin": "kōng tiáo",
    "english": "air conditioning",
    "level": "HSK 3",
    "lesson": 10
  },
  {
    "id": "HSK3-141",
    "hanzi": "口",
    "pinyin": "kǒu",
    "english": "mouth, classifier for things with mouths (people, domestic animals, cannons, wells etc), classifier for bites or mouthfuls",
    "level": "HSK 3",
    "lesson": 10
  },
  {
    "id": "HSK3-142",
    "hanzi": "哭",
    "pinyin": "kū",
    "english": "to cry, to weep",
    "level": "HSK 3",
    "lesson": 10
  },
  {
    "id": "HSK3-143",
    "hanzi": "裤子",
    "pinyin": "kù zi",
    "english": "trousers, pants",
    "level": "HSK 3",
    "lesson": 10
  },
  {
    "id": "HSK3-144",
    "hanzi": "筷子",
    "pinyin": "kuài zi",
    "english": "chopsticks, 根, 把, 雙|双[shuāng]",
    "level": "HSK 3",
    "lesson": 10
  },
  {
    "id": "HSK3-145",
    "hanzi": "蓝",
    "pinyin": "lán",
    "english": "blue, indigo plant",
    "level": "HSK 3",
    "lesson": 10
  },
  {
    "id": "HSK3-146",
    "hanzi": "老",
    "pinyin": "lǎo",
    "english": "prefix used before the surname of a person or a numeral indicating the order of birth of the children in a family or to indicate affection or familiarity, old (of people), venerable (person), experienced, of long standing, always, all the time, of the past, very, outdated, (of meat etc) tough",
    "level": "HSK 3",
    "lesson": 10
  },
  {
    "id": "HSK3-147",
    "hanzi": "离开",
    "pinyin": "lí kāi",
    "english": "to depart, to leave",
    "level": "HSK 3",
    "lesson": 10
  },
  {
    "id": "HSK3-148",
    "hanzi": "礼物",
    "pinyin": "lǐ wù",
    "english": "gift, present, 個|个, 份[fèn]",
    "level": "HSK 3",
    "lesson": 10
  },
  {
    "id": "HSK3-149",
    "hanzi": "历史",
    "pinyin": "lì shǐ",
    "english": "history, 段[duàn]",
    "level": "HSK 3",
    "lesson": 10
  },
  {
    "id": "HSK3-150",
    "hanzi": "脸",
    "pinyin": "liǎn",
    "english": "face, 個|个[gè]",
    "level": "HSK 3",
    "lesson": 10
  },
  {
    "id": "HSK3-151",
    "hanzi": "练习",
    "pinyin": "liàn xí",
    "english": "exercise, drill, practice",
    "level": "HSK 3",
    "lesson": 11
  },
  {
    "id": "HSK3-152",
    "hanzi": "辆",
    "pinyin": "liàng",
    "english": "classifier for vehicles",
    "level": "HSK 3",
    "lesson": 11
  },
  {
    "id": "HSK3-153",
    "hanzi": "了解",
    "pinyin": "liǎo jiě",
    "english": "to understand, to realize, to find out",
    "level": "HSK 3",
    "lesson": 11
  },
  {
    "id": "HSK3-154",
    "hanzi": "邻居",
    "pinyin": "lín jū",
    "english": "neighbor, next door",
    "level": "HSK 3",
    "lesson": 11
  },
  {
    "id": "HSK3-155",
    "hanzi": "楼",
    "pinyin": "lóu",
    "english": "house with more than 1 story, storied building, floor, 座, 棟|栋[dòng]",
    "level": "HSK 3",
    "lesson": 11
  },
  {
    "id": "HSK3-156",
    "hanzi": "绿",
    "pinyin": "lǜ",
    "english": "green",
    "level": "HSK 3",
    "lesson": 11
  },
  {
    "id": "HSK3-157",
    "hanzi": "马",
    "pinyin": "mǎ",
    "english": "horse, horse or cavalry piece in Chinese chess, knight in Western chess",
    "level": "HSK 3",
    "lesson": 11
  },
  {
    "id": "HSK3-158",
    "hanzi": "马上",
    "pinyin": "mǎ shàng",
    "english": "at once, right away, immediately, on horseback (i.e. by military force)",
    "level": "HSK 3",
    "lesson": 11
  },
  {
    "id": "HSK3-159",
    "hanzi": "满意",
    "pinyin": "mǎn yì",
    "english": "satisfied, pleased, to one's satisfaction",
    "level": "HSK 3",
    "lesson": 11
  },
  {
    "id": "HSK3-160",
    "hanzi": "帽子",
    "pinyin": "mào zi",
    "english": "hat, cap, (fig.) label, bad name",
    "level": "HSK 3",
    "lesson": 11
  },
  {
    "id": "HSK3-161",
    "hanzi": "米",
    "pinyin": "mǐ",
    "english": "rice, meter (classifier)",
    "level": "HSK 3",
    "lesson": 11
  },
  {
    "id": "HSK3-162",
    "hanzi": "面包",
    "pinyin": "miàn bāo",
    "english": "bread, 袋, 塊|块[kuài]",
    "level": "HSK 3",
    "lesson": 11
  },
  {
    "id": "HSK3-163",
    "hanzi": "面条",
    "pinyin": "miàn tiáo",
    "english": "noodles",
    "level": "HSK 3",
    "lesson": 11
  },
  {
    "id": "HSK3-164",
    "hanzi": "明白",
    "pinyin": "míng bai",
    "english": "clear, obvious, unequivocal, to understand, to realize",
    "level": "HSK 3",
    "lesson": 11
  },
  {
    "id": "HSK3-165",
    "hanzi": "拿",
    "pinyin": "ná",
    "english": "to hold, to seize, to catch, to apprehend, to take",
    "level": "HSK 3",
    "lesson": 11
  },
  {
    "id": "HSK3-166",
    "hanzi": "奶奶",
    "pinyin": "nǎi nai",
    "english": "(informal) grandma (paternal grandmother), (respectful) mistress of the house",
    "level": "HSK 3",
    "lesson": 12
  },
  {
    "id": "HSK3-167",
    "hanzi": "南",
    "pinyin": "nán",
    "english": "south",
    "level": "HSK 3",
    "lesson": 12
  },
  {
    "id": "HSK3-168",
    "hanzi": "难",
    "pinyin": "nán",
    "english": "difficult (to...), problem, difficulty, difficult, not good",
    "level": "HSK 3",
    "lesson": 12
  },
  {
    "id": "HSK3-169",
    "hanzi": "难过",
    "pinyin": "nán guò",
    "english": "to feel sad, to feel unwell, (of life) to be difficult",
    "level": "HSK 3",
    "lesson": 12
  },
  {
    "id": "HSK3-170",
    "hanzi": "年级",
    "pinyin": "nián jí",
    "english": "grade",
    "level": "HSK 3",
    "lesson": 12
  },
  {
    "id": "HSK3-171",
    "hanzi": "年轻",
    "pinyin": "nián qīng",
    "english": "young",
    "level": "HSK 3",
    "lesson": 12
  },
  {
    "id": "HSK3-172",
    "hanzi": "鸟",
    "pinyin": "niǎo",
    "english": "bird, 群[qún]",
    "level": "HSK 3",
    "lesson": 12
  },
  {
    "id": "HSK3-173",
    "hanzi": "努力",
    "pinyin": "nǔ lì",
    "english": "great effort, to strive, to try hard",
    "level": "HSK 3",
    "lesson": 12
  },
  {
    "id": "HSK3-174",
    "hanzi": "爬山",
    "pinyin": "pá shān",
    "english": "to climb a mountain, to mountaineer, hiking, mountaineering",
    "level": "HSK 3",
    "lesson": 12
  },
  {
    "id": "HSK3-175",
    "hanzi": "盘子",
    "pinyin": "pán zi",
    "english": "tray, plate, dish",
    "level": "HSK 3",
    "lesson": 12
  },
  {
    "id": "HSK3-176",
    "hanzi": "胖",
    "pinyin": "pàng",
    "english": "fat, plump",
    "level": "HSK 3",
    "lesson": 12
  },
  {
    "id": "HSK3-177",
    "hanzi": "啤酒",
    "pinyin": "pí jiǔ",
    "english": "beer, 瓶, 罐, 桶, 缸[gāng]",
    "level": "HSK 3",
    "lesson": 12
  },
  {
    "id": "HSK3-178",
    "hanzi": "葡萄",
    "pinyin": "pú tao",
    "english": "grape",
    "level": "HSK 3",
    "lesson": 12
  },
  {
    "id": "HSK3-179",
    "hanzi": "普通话",
    "pinyin": "pǔ tōng huà",
    "english": "Mandarin (common language), Putonghua (common speech of the Chinese language), ordinary speech",
    "level": "HSK 3",
    "lesson": 12
  },
  {
    "id": "HSK3-180",
    "hanzi": "骑",
    "pinyin": "qí",
    "english": "to ride (an animal or bike), to sit astride",
    "level": "HSK 3",
    "lesson": 12
  },
  {
    "id": "HSK3-181",
    "hanzi": "其实",
    "pinyin": "qí shí",
    "english": "actually, in fact, really",
    "level": "HSK 3",
    "lesson": 13
  },
  {
    "id": "HSK3-182",
    "hanzi": "其他",
    "pinyin": "qí tā",
    "english": "other, the others, else, other than (that person), in addition to the person mentioned above",
    "level": "HSK 3",
    "lesson": 13
  },
  {
    "id": "HSK3-183",
    "hanzi": "奇怪",
    "pinyin": "qí guài",
    "english": "strange, odd, to marvel, to be baffled",
    "level": "HSK 3",
    "lesson": 13
  },
  {
    "id": "HSK3-184",
    "hanzi": "铅笔",
    "pinyin": "qiān bǐ",
    "english": "(lead) pencil, 枝, 桿|杆[gǎn]",
    "level": "HSK 3",
    "lesson": 13
  },
  {
    "id": "HSK3-185",
    "hanzi": "清楚",
    "pinyin": "qīng chu",
    "english": "clear, distinct, to understand thoroughly, to be clear about",
    "level": "HSK 3",
    "lesson": 13
  },
  {
    "id": "HSK3-186",
    "hanzi": "秋",
    "pinyin": "qiū",
    "english": "a swing",
    "level": "HSK 3",
    "lesson": 13
  },
  {
    "id": "HSK3-187",
    "hanzi": "裙子",
    "pinyin": "qún zi",
    "english": "skirt",
    "level": "HSK 3",
    "lesson": 13
  },
  {
    "id": "HSK3-188",
    "hanzi": "然后",
    "pinyin": "rán hòu",
    "english": "after, then (afterwards), after that, afterwards",
    "level": "HSK 3",
    "lesson": 13
  },
  {
    "id": "HSK3-189",
    "hanzi": "热情",
    "pinyin": "rè qíng",
    "english": "cordial, enthusiastic, passion, passionate, passionately",
    "level": "HSK 3",
    "lesson": 13
  },
  {
    "id": "HSK3-190",
    "hanzi": "认为",
    "pinyin": "rèn wéi",
    "english": "to believe, to think, to consider, to feel",
    "level": "HSK 3",
    "lesson": 13
  },
  {
    "id": "HSK3-191",
    "hanzi": "认真",
    "pinyin": "rèn zhēn",
    "english": "conscientious, earnest, serious, to take seriously, to take to heart",
    "level": "HSK 3",
    "lesson": 13
  },
  {
    "id": "HSK3-192",
    "hanzi": "容易",
    "pinyin": "róng yì",
    "english": "easy, likely, liable (to)",
    "level": "HSK 3",
    "lesson": 13
  },
  {
    "id": "HSK3-193",
    "hanzi": "如果",
    "pinyin": "rú guǒ",
    "english": "if, in case, in the event that",
    "level": "HSK 3",
    "lesson": 13
  },
  {
    "id": "HSK3-194",
    "hanzi": "伞",
    "pinyin": "sǎn",
    "english": "umbrella, parasol",
    "level": "HSK 3",
    "lesson": 13
  },
  {
    "id": "HSK3-195",
    "hanzi": "上网",
    "pinyin": "shàng wǎng",
    "english": "to be on the internet, to stretch a net (in a sports game or for covering sth), to be netted (of fish)",
    "level": "HSK 3",
    "lesson": 13
  },
  {
    "id": "HSK3-196",
    "hanzi": "生气",
    "pinyin": "shēng qì",
    "english": "angry, mad, offended, animated, to get angry, to be enraged, to take offense, animation",
    "level": "HSK 3",
    "lesson": 14
  },
  {
    "id": "HSK3-197",
    "hanzi": "声音",
    "pinyin": "shēng yīn",
    "english": "voice, sound",
    "level": "HSK 3",
    "lesson": 14
  },
  {
    "id": "HSK3-198",
    "hanzi": "使",
    "pinyin": "shǐ",
    "english": "to make, to cause, to enable, to use, to employ, to send, to instruct sb to do sth, envoy, messenger",
    "level": "HSK 3",
    "lesson": 14
  },
  {
    "id": "HSK3-199",
    "hanzi": "世界",
    "pinyin": "shì jiè",
    "english": "world",
    "level": "HSK 3",
    "lesson": 14
  },
  {
    "id": "HSK3-200",
    "hanzi": "瘦",
    "pinyin": "shòu",
    "english": "thin, to lose weight, (of clothing) tight, (of meat) lean, (of land) unproductive",
    "level": "HSK 3",
    "lesson": 14
  },
  {
    "id": "HSK3-201",
    "hanzi": "舒服",
    "pinyin": "shū fu",
    "english": "comfortable, feeling well",
    "level": "HSK 3",
    "lesson": 14
  },
  {
    "id": "HSK3-202",
    "hanzi": "叔叔",
    "pinyin": "shū shu",
    "english": "father's younger brother, uncle, Taiwan pr. [shú shu]",
    "level": "HSK 3",
    "lesson": 14
  },
  {
    "id": "HSK3-203",
    "hanzi": "树",
    "pinyin": "shù",
    "english": "tree, to cultivate, to set up",
    "level": "HSK 3",
    "lesson": 14
  },
  {
    "id": "HSK3-204",
    "hanzi": "数学",
    "pinyin": "shù xué",
    "english": "mathematics, mathematical",
    "level": "HSK 3",
    "lesson": 14
  },
  {
    "id": "HSK3-205",
    "hanzi": "刷",
    "pinyin": "shuā",
    "english": "to brush, to paint, to daub, to paste up, to skip class (of students), to fire from a job",
    "level": "HSK 3",
    "lesson": 14
  },
  {
    "id": "HSK3-206",
    "hanzi": "双",
    "pinyin": "shuāng",
    "english": "two, double, pair, both",
    "level": "HSK 3",
    "lesson": 14
  },
  {
    "id": "HSK3-207",
    "hanzi": "水平",
    "pinyin": "shuǐ píng",
    "english": "level (of achievement etc), standard, horizontal",
    "level": "HSK 3",
    "lesson": 14
  },
  {
    "id": "HSK3-208",
    "hanzi": "司机",
    "pinyin": "sī jī",
    "english": "chauffeur, driver",
    "level": "HSK 3",
    "lesson": 14
  },
  {
    "id": "HSK3-209",
    "hanzi": "虽然",
    "pinyin": "suī rán",
    "english": "although, even though, even if",
    "level": "HSK 3",
    "lesson": 14
  },
  {
    "id": "HSK3-210",
    "hanzi": "太阳",
    "pinyin": "tài yáng",
    "english": "sun",
    "level": "HSK 3",
    "lesson": 14
  },
  {
    "id": "HSK3-211",
    "hanzi": "糖",
    "pinyin": "táng",
    "english": "sugar, sweets, candy, 塊|块[kuài]",
    "level": "HSK 3",
    "lesson": 15
  },
  {
    "id": "HSK3-212",
    "hanzi": "特别",
    "pinyin": "tè bié",
    "english": "especially, special, particular, unusual",
    "level": "HSK 3",
    "lesson": 15
  },
  {
    "id": "HSK3-213",
    "hanzi": "疼",
    "pinyin": "téng",
    "english": "(it) hurts, sore, to love dearly",
    "level": "HSK 3",
    "lesson": 15
  },
  {
    "id": "HSK3-214",
    "hanzi": "提高",
    "pinyin": "tí gāo",
    "english": "to raise, to increase",
    "level": "HSK 3",
    "lesson": 15
  },
  {
    "id": "HSK3-215",
    "hanzi": "体育",
    "pinyin": "tǐ yù",
    "english": "sports, physical education",
    "level": "HSK 3",
    "lesson": 15
  },
  {
    "id": "HSK3-216",
    "hanzi": "甜",
    "pinyin": "tián",
    "english": "sweet",
    "level": "HSK 3",
    "lesson": 15
  },
  {
    "id": "HSK3-217",
    "hanzi": "条",
    "pinyin": "tiáo",
    "english": "strip, item, article, clause (of law or treaty), classifier for long thin things (ribbon, river, road, trousers etc)",
    "level": "HSK 3",
    "lesson": 15
  },
  {
    "id": "HSK3-218",
    "hanzi": "同事",
    "pinyin": "tóng shì",
    "english": "colleague, co-worker, 位[wèi]",
    "level": "HSK 3",
    "lesson": 15
  },
  {
    "id": "HSK3-219",
    "hanzi": "同意",
    "pinyin": "tóng yì",
    "english": "to agree, to consent, to approve",
    "level": "HSK 3",
    "lesson": 15
  },
  {
    "id": "HSK3-220",
    "hanzi": "头发",
    "pinyin": "tóu fa",
    "english": "hair (on the head)",
    "level": "HSK 3",
    "lesson": 15
  },
  {
    "id": "HSK3-221",
    "hanzi": "突然",
    "pinyin": "tū rán",
    "english": "sudden, abrupt, unexpected",
    "level": "HSK 3",
    "lesson": 15
  },
  {
    "id": "HSK3-222",
    "hanzi": "图书馆",
    "pinyin": "tú shū guǎn",
    "english": "library, 個|个[gè]",
    "level": "HSK 3",
    "lesson": 15
  },
  {
    "id": "HSK3-223",
    "hanzi": "腿",
    "pinyin": "tuǐ",
    "english": "leg",
    "level": "HSK 3",
    "lesson": 15
  },
  {
    "id": "HSK3-224",
    "hanzi": "完成",
    "pinyin": "wán chéng",
    "english": "to complete, to accomplish",
    "level": "HSK 3",
    "lesson": 15
  },
  {
    "id": "HSK3-225",
    "hanzi": "碗",
    "pinyin": "wǎn",
    "english": "bowl, cup, 個|个[gè]",
    "level": "HSK 3",
    "lesson": 15
  },
  {
    "id": "HSK3-226",
    "hanzi": "万",
    "pinyin": "wàn",
    "english": "ten thousand, a great number",
    "level": "HSK 3",
    "lesson": 16
  },
  {
    "id": "HSK3-227",
    "hanzi": "忘记",
    "pinyin": "wàng jì",
    "english": "to forget",
    "level": "HSK 3",
    "lesson": 16
  },
  {
    "id": "HSK3-228",
    "hanzi": "为了",
    "pinyin": "wèi le",
    "english": "in order to, for the purpose of, so as to",
    "level": "HSK 3",
    "lesson": 16
  },
  {
    "id": "HSK3-229",
    "hanzi": "为什么",
    "pinyin": "wèi shén me",
    "english": "why?, for what reason?",
    "level": "HSK 3",
    "lesson": 16
  },
  {
    "id": "HSK3-230",
    "hanzi": "位",
    "pinyin": "wèi",
    "english": "position, location, place, seat, classifier for people (honorific), classifier for binary bits (e.g. 十六位 16-bit or 2 bytes)",
    "level": "HSK 3",
    "lesson": 16
  },
  {
    "id": "HSK3-231",
    "hanzi": "文化",
    "pinyin": "wén huà",
    "english": "culture, civilization, cultural, 種|种[zhǒng]",
    "level": "HSK 3",
    "lesson": 16
  },
  {
    "id": "HSK3-232",
    "hanzi": "西",
    "pinyin": "xī",
    "english": "west",
    "level": "HSK 3",
    "lesson": 16
  },
  {
    "id": "HSK3-233",
    "hanzi": "习惯",
    "pinyin": "xí guàn",
    "english": "habit, custom, usual practice, to be used to",
    "level": "HSK 3",
    "lesson": 16
  },
  {
    "id": "HSK3-234",
    "hanzi": "洗手间",
    "pinyin": "xǐ shǒu jiān",
    "english": "toilet, lavatory, washroom",
    "level": "HSK 3",
    "lesson": 16
  },
  {
    "id": "HSK3-235",
    "hanzi": "洗澡",
    "pinyin": "xǐ zǎo",
    "english": "to bathe, to take a shower",
    "level": "HSK 3",
    "lesson": 16
  },
  {
    "id": "HSK3-236",
    "hanzi": "夏",
    "pinyin": "xià",
    "english": "summer",
    "level": "HSK 3",
    "lesson": 16
  },
  {
    "id": "HSK3-237",
    "hanzi": "先",
    "pinyin": "xiān",
    "english": "early, prior, former, in advance, first",
    "level": "HSK 3",
    "lesson": 16
  },
  {
    "id": "HSK3-238",
    "hanzi": "香蕉",
    "pinyin": "xiāng jiāo",
    "english": "banana, 根, 個|个, 把[bǎ]",
    "level": "HSK 3",
    "lesson": 16
  },
  {
    "id": "HSK3-239",
    "hanzi": "相同",
    "pinyin": "xiāng tóng",
    "english": "identical, same",
    "level": "HSK 3",
    "lesson": 16
  },
  {
    "id": "HSK3-240",
    "hanzi": "相信",
    "pinyin": "xiāng xìn",
    "english": "to be convinced (that sth is true), to believe, to accept sth as true",
    "level": "HSK 3",
    "lesson": 16
  },
  {
    "id": "HSK3-241",
    "hanzi": "像",
    "pinyin": "xiàng",
    "english": "to resemble, to be like, to look as if, such as, appearance, image, portrait, image under a mapping (math.)",
    "level": "HSK 3",
    "lesson": 17
  },
  {
    "id": "HSK3-242",
    "hanzi": "小心",
    "pinyin": "xiǎo xīn",
    "english": "to be careful, to take care",
    "level": "HSK 3",
    "lesson": 17
  },
  {
    "id": "HSK3-243",
    "hanzi": "校长",
    "pinyin": "xiào zhǎng",
    "english": "(college, university) president, headmaster, 位, 名[míng]",
    "level": "HSK 3",
    "lesson": 17
  },
  {
    "id": "HSK3-244",
    "hanzi": "鞋",
    "pinyin": "xié",
    "english": "shoe, 隻|只[zhī]",
    "level": "HSK 3",
    "lesson": 17
  },
  {
    "id": "HSK3-245",
    "hanzi": "新闻",
    "pinyin": "xīn wén",
    "english": "news, 個|个[gè]",
    "level": "HSK 3",
    "lesson": 17
  },
  {
    "id": "HSK3-246",
    "hanzi": "新鲜",
    "pinyin": "xīn xiān",
    "english": "fresh (experience, food etc), freshness, novel, uncommon",
    "level": "HSK 3",
    "lesson": 17
  },
  {
    "id": "HSK3-247",
    "hanzi": "信",
    "pinyin": "xìn",
    "english": "letter, mail, to trust, to believe, to profess faith in, truthful, confidence, trust, at will, at random",
    "level": "HSK 3",
    "lesson": 17
  },
  {
    "id": "HSK3-248",
    "hanzi": "行李箱",
    "pinyin": "xíng li xiāng",
    "english": "suitcase",
    "level": "HSK 3",
    "lesson": 17
  },
  {
    "id": "HSK3-249",
    "hanzi": "兴趣",
    "pinyin": "xìng qù",
    "english": "interest (desire to know about sth), interest (thing in which one is interested), hobby",
    "level": "HSK 3",
    "lesson": 17
  },
  {
    "id": "HSK3-250",
    "hanzi": "熊猫",
    "pinyin": "xióng māo",
    "english": "panda",
    "level": "HSK 3",
    "lesson": 17
  },
  {
    "id": "HSK3-251",
    "hanzi": "需要",
    "pinyin": "xū yào",
    "english": "to need, to want, to demand, to require, requirement, need",
    "level": "HSK 3",
    "lesson": 17
  },
  {
    "id": "HSK3-252",
    "hanzi": "选择",
    "pinyin": "xuǎn zé",
    "english": "to select, to pick, choice, option, alternative",
    "level": "HSK 3",
    "lesson": 17
  },
  {
    "id": "HSK3-253",
    "hanzi": "眼镜",
    "pinyin": "yǎn jìng",
    "english": "spectacles, eyeglasses",
    "level": "HSK 3",
    "lesson": 17
  },
  {
    "id": "HSK3-254",
    "hanzi": "要求",
    "pinyin": "yāo qiú",
    "english": "to request, to require, to stake a claim, to ask, to demand",
    "level": "HSK 3",
    "lesson": 17
  },
  {
    "id": "HSK3-255",
    "hanzi": "爷爷",
    "pinyin": "yé ye",
    "english": "(informal) father's father, paternal grandfather",
    "level": "HSK 3",
    "lesson": 17
  },
  {
    "id": "HSK3-256",
    "hanzi": "一定",
    "pinyin": "yī dìng",
    "english": "surely, certainly, necessarily, fixed, a certain (extent etc), given, particular, must",
    "level": "HSK 3",
    "lesson": 18
  },
  {
    "id": "HSK3-257",
    "hanzi": "一共",
    "pinyin": "yī gòng",
    "english": "altogether",
    "level": "HSK 3",
    "lesson": 18
  },
  {
    "id": "HSK3-258",
    "hanzi": "一会儿",
    "pinyin": "yī huì r",
    "english": "a while, also pr. [yī huǐ r]",
    "level": "HSK 3",
    "lesson": 18
  },
  {
    "id": "HSK3-259",
    "hanzi": "一样",
    "pinyin": "yī yàng",
    "english": "same, like, equal to, the same as, just like",
    "level": "HSK 3",
    "lesson": 18
  },
  {
    "id": "HSK3-260",
    "hanzi": "以后",
    "pinyin": "yǐ hòu",
    "english": "after, later, afterwards, following, later on, in the future",
    "level": "HSK 3",
    "lesson": 18
  },
  {
    "id": "HSK3-261",
    "hanzi": "以前",
    "pinyin": "yǐ qián",
    "english": "before, formerly, previous, ago",
    "level": "HSK 3",
    "lesson": 18
  },
  {
    "id": "HSK3-262",
    "hanzi": "以为",
    "pinyin": "yǐ wéi",
    "english": "to believe, to think, to consider, to be under the impression",
    "level": "HSK 3",
    "lesson": 18
  },
  {
    "id": "HSK3-263",
    "hanzi": "一般",
    "pinyin": "yī bān",
    "english": "same, ordinary, so-so, common, general, generally, in general",
    "level": "HSK 3",
    "lesson": 18
  },
  {
    "id": "HSK3-264",
    "hanzi": "一边",
    "pinyin": "yī biān",
    "english": "one side, either side, on the one hand, on the other hand, doing while",
    "level": "HSK 3",
    "lesson": 18
  },
  {
    "id": "HSK3-265",
    "hanzi": "一直",
    "pinyin": "yī zhí",
    "english": "straight (in a straight line), continuously, always, from the beginning of ... up to ..., all along",
    "level": "HSK 3",
    "lesson": 18
  },
  {
    "id": "HSK3-266",
    "hanzi": "音乐",
    "pinyin": "yīn yuè",
    "english": "music, 曲, 段[duàn]",
    "level": "HSK 3",
    "lesson": 18
  },
  {
    "id": "HSK3-267",
    "hanzi": "银行",
    "pinyin": "yín háng",
    "english": "bank, 個|个[gè]",
    "level": "HSK 3",
    "lesson": 18
  },
  {
    "id": "HSK3-268",
    "hanzi": "应该",
    "pinyin": "yīng gāi",
    "english": "ought to, should, must",
    "level": "HSK 3",
    "lesson": 18
  },
  {
    "id": "HSK3-269",
    "hanzi": "影响",
    "pinyin": "yǐng xiǎng",
    "english": "an influence, an effect, to influence, to affect (usually adversely), to disturb",
    "level": "HSK 3",
    "lesson": 18
  },
  {
    "id": "HSK3-270",
    "hanzi": "用",
    "pinyin": "yòng",
    "english": "to use, to employ, to have to, to eat or drink, expense or outlay, usefulness, hence, therefore",
    "level": "HSK 3",
    "lesson": 18
  },
  {
    "id": "HSK3-271",
    "hanzi": "游戏",
    "pinyin": "yóu xì",
    "english": "game, to play",
    "level": "HSK 3",
    "lesson": 19
  },
  {
    "id": "HSK3-272",
    "hanzi": "有名",
    "pinyin": "yǒu míng",
    "english": "famous, well-known",
    "level": "HSK 3",
    "lesson": 19
  },
  {
    "id": "HSK3-273",
    "hanzi": "又",
    "pinyin": "yòu",
    "english": "(once) again, also, both... and..., and yet, (used for emphasis) anyway",
    "level": "HSK 3",
    "lesson": 19
  },
  {
    "id": "HSK3-274",
    "hanzi": "遇到",
    "pinyin": "yù dào",
    "english": "to meet, to run into, to come across",
    "level": "HSK 3",
    "lesson": 19
  },
  {
    "id": "HSK3-275",
    "hanzi": "愿意",
    "pinyin": "yuàn yì",
    "english": "to wish, to want, ready, willing (to do sth)",
    "level": "HSK 3",
    "lesson": 19
  },
  {
    "id": "HSK3-276",
    "hanzi": "越",
    "pinyin": "yuè",
    "english": "to exceed, to climb over, to surpass, the more... the more",
    "level": "HSK 3",
    "lesson": 19
  },
  {
    "id": "HSK3-277",
    "hanzi": "月亮",
    "pinyin": "yuè liang",
    "english": "moon",
    "level": "HSK 3",
    "lesson": 19
  },
  {
    "id": "HSK3-278",
    "hanzi": "云",
    "pinyin": "yún",
    "english": "cloud",
    "level": "HSK 3",
    "lesson": 19
  },
  {
    "id": "HSK3-279",
    "hanzi": "站",
    "pinyin": "zhàn",
    "english": "station, to stand, to halt, to stop, branch of a company or organization, website",
    "level": "HSK 3",
    "lesson": 19
  },
  {
    "id": "HSK3-280",
    "hanzi": "着急",
    "pinyin": "zháo jí",
    "english": "to worry, to feel anxious, Taiwan pron. [zhāo jí]",
    "level": "HSK 3",
    "lesson": 19
  },
  {
    "id": "HSK3-281",
    "hanzi": "照顾",
    "pinyin": "zhào gu",
    "english": "to take care of, to show consideration, to attend to, to look after",
    "level": "HSK 3",
    "lesson": 19
  },
  {
    "id": "HSK3-282",
    "hanzi": "照片",
    "pinyin": "zhào piàn",
    "english": "photograph, picture, 套, 幅[fú]",
    "level": "HSK 3",
    "lesson": 19
  },
  {
    "id": "HSK3-283",
    "hanzi": "照相机",
    "pinyin": "zhào xiàng jī",
    "english": "camera, 架, 部, 台, 隻|只[zhī]",
    "level": "HSK 3",
    "lesson": 19
  },
  {
    "id": "HSK3-284",
    "hanzi": "只",
    "pinyin": "zhī",
    "english": "classifier for birds and certain animals, one of a pair, some utensils, vessels etc",
    "level": "HSK 3",
    "lesson": 19
  },
  {
    "id": "HSK3-285",
    "hanzi": "只",
    "pinyin": "zhǐ",
    "english": "but, only",
    "level": "HSK 3",
    "lesson": 19
  },
  {
    "id": "HSK3-286",
    "hanzi": "终于",
    "pinyin": "zhōng yú",
    "english": "at last, in the end, finally, eventually",
    "level": "HSK 3",
    "lesson": 20
  },
  {
    "id": "HSK3-287",
    "hanzi": "中间",
    "pinyin": "zhōng jiān",
    "english": "between, intermediate, mid, middle",
    "level": "HSK 3",
    "lesson": 20
  },
  {
    "id": "HSK3-288",
    "hanzi": "种",
    "pinyin": "zhǒng",
    "english": "abbr. for 物種|物种, genus, race, seed, breed, species, strain, kind, type, has guts (i.e. courage), nerve, classifier for types: kind, sort, classifier for languages",
    "level": "HSK 3",
    "lesson": 20
  },
  {
    "id": "HSK3-289",
    "hanzi": "重要",
    "pinyin": "zhòng yào",
    "english": "important, significant, major",
    "level": "HSK 3",
    "lesson": 20
  },
  {
    "id": "HSK3-290",
    "hanzi": "周末",
    "pinyin": "zhōu mò",
    "english": "weekend",
    "level": "HSK 3",
    "lesson": 20
  },
  {
    "id": "HSK3-291",
    "hanzi": "主要",
    "pinyin": "zhǔ yào",
    "english": "main, principal, major, primary",
    "level": "HSK 3",
    "lesson": 20
  },
  {
    "id": "HSK3-292",
    "hanzi": "祝",
    "pinyin": "zhù",
    "english": "to wish, to express good wishes, to pray, (old) wizard",
    "level": "HSK 3",
    "lesson": 20
  },
  {
    "id": "HSK3-293",
    "hanzi": "注意",
    "pinyin": "zhù yì",
    "english": "to take note of, to pay attention to",
    "level": "HSK 3",
    "lesson": 20
  },
  {
    "id": "HSK3-294",
    "hanzi": "字典",
    "pinyin": "zì diǎn",
    "english": "dictionary, character dictionary",
    "level": "HSK 3",
    "lesson": 20
  },
  {
    "id": "HSK3-295",
    "hanzi": "自己",
    "pinyin": "zì jǐ",
    "english": "oneself, one's own",
    "level": "HSK 3",
    "lesson": 20
  },
  {
    "id": "HSK3-296",
    "hanzi": "总是",
    "pinyin": "zǒng shì",
    "english": "always",
    "level": "HSK 3",
    "lesson": 20
  },
  {
    "id": "HSK3-297",
    "hanzi": "最近",
    "pinyin": "zuì jìn",
    "english": "recent, recently, these days, latest, soon, nearest (of locations), shortest (of routes)",
    "level": "HSK 3",
    "lesson": 20
  },
  {
    "id": "HSK3-298",
    "hanzi": "作业",
    "pinyin": "zuò yè",
    "english": "school assignment, homework, work, task, operation, to operate",
    "level": "HSK 3",
    "lesson": 20
  },
  {
    "id": "HSK3-299",
    "hanzi": "作用",
    "pinyin": "zuò yòng",
    "english": "to act on, to affect, action, function, activity, impact, result, effect, purpose, intent, to play a role, corresponds to English -ity, -ism, -ization",
    "level": "HSK 3",
    "lesson": 20
  },
  {
    "id": "HSK4-1",
    "hanzi": "爱情",
    "pinyin": "ài qíng",
    "english": "romance, love (romantic)",
    "level": "HSK 4",
    "lesson": 1
  },
  {
    "id": "HSK4-2",
    "hanzi": "安排",
    "pinyin": "ān pái",
    "english": "to arrange, to plan, to set up",
    "level": "HSK 4",
    "lesson": 1
  },
  {
    "id": "HSK4-3",
    "hanzi": "安全",
    "pinyin": "ān quán",
    "english": "safe, secure, safety, security",
    "level": "HSK 4",
    "lesson": 1
  },
  {
    "id": "HSK4-4",
    "hanzi": "暗",
    "pinyin": "àn",
    "english": "to close (a door), to eclipse, muddled, stupid, ignorant, variant of 暗[àn]",
    "level": "HSK 4",
    "lesson": 1
  },
  {
    "id": "HSK4-5",
    "hanzi": "按时",
    "pinyin": "àn shí",
    "english": "on time, before deadline, on schedule",
    "level": "HSK 4",
    "lesson": 1
  },
  {
    "id": "HSK4-6",
    "hanzi": "按照",
    "pinyin": "àn zhào",
    "english": "according to, in accordance with, in the light of, on the basis of",
    "level": "HSK 4",
    "lesson": 1
  },
  {
    "id": "HSK4-7",
    "hanzi": "包括",
    "pinyin": "bāo kuò",
    "english": "to comprise, to include, to involve, to incorporate, to consist of",
    "level": "HSK 4",
    "lesson": 1
  },
  {
    "id": "HSK4-8",
    "hanzi": "保护",
    "pinyin": "bǎo hù",
    "english": "to protect, to defend, to safeguard, protection",
    "level": "HSK 4",
    "lesson": 1
  },
  {
    "id": "HSK4-9",
    "hanzi": "保证",
    "pinyin": "bǎo zhèng",
    "english": "guarantee, to guarantee, to ensure, to safeguard, to pledge",
    "level": "HSK 4",
    "lesson": 1
  },
  {
    "id": "HSK4-10",
    "hanzi": "抱",
    "pinyin": "bào",
    "english": "to hold, to carry (in one's arms), to hug or embrace, surround, cherish",
    "level": "HSK 4",
    "lesson": 1
  },
  {
    "id": "HSK4-11",
    "hanzi": "抱歉",
    "pinyin": "bào qiàn",
    "english": "to be sorry, to feel apologetic, sorry!",
    "level": "HSK 4",
    "lesson": 1
  },
  {
    "id": "HSK4-12",
    "hanzi": "报道",
    "pinyin": "bào dào",
    "english": "report, 份[fèn]",
    "level": "HSK 4",
    "lesson": 1
  },
  {
    "id": "HSK4-13",
    "hanzi": "报名",
    "pinyin": "bào míng",
    "english": "to sign up, to enter one's name, to apply, to register, to enroll, to enlist",
    "level": "HSK 4",
    "lesson": 1
  },
  {
    "id": "HSK4-14",
    "hanzi": "倍",
    "pinyin": "bèi",
    "english": "(two, three etc) -fold, times (multiplier), double, to increase or multiply",
    "level": "HSK 4",
    "lesson": 1
  },
  {
    "id": "HSK4-15",
    "hanzi": "本来",
    "pinyin": "běn lái",
    "english": "original, originally, at first, it goes without saying, of course",
    "level": "HSK 4",
    "lesson": 1
  },
  {
    "id": "HSK4-16",
    "hanzi": "笨",
    "pinyin": "bèn",
    "english": "stupid, foolish, silly, slow-witted, clumsy",
    "level": "HSK 4",
    "lesson": 1
  },
  {
    "id": "HSK4-17",
    "hanzi": "笔记本",
    "pinyin": "bǐ jì běn",
    "english": "notebook",
    "level": "HSK 4",
    "lesson": 1
  },
  {
    "id": "HSK4-18",
    "hanzi": "毕业",
    "pinyin": "bì yè",
    "english": "graduation, to graduate, to finish school",
    "level": "HSK 4",
    "lesson": 1
  },
  {
    "id": "HSK4-19",
    "hanzi": "遍",
    "pinyin": "biàn",
    "english": "everywhere, all over, classifier for actions: one time",
    "level": "HSK 4",
    "lesson": 1
  },
  {
    "id": "HSK4-20",
    "hanzi": "标准",
    "pinyin": "biāo zhǔn",
    "english": "(an official) standard, norm, criterion",
    "level": "HSK 4",
    "lesson": 1
  },
  {
    "id": "HSK4-21",
    "hanzi": "表达",
    "pinyin": "biǎo dá",
    "english": "to voice (an opinion), to express, to convey",
    "level": "HSK 4",
    "lesson": 2
  },
  {
    "id": "HSK4-22",
    "hanzi": "表格",
    "pinyin": "biǎo gé",
    "english": "form, table, 份[fèn]",
    "level": "HSK 4",
    "lesson": 2
  },
  {
    "id": "HSK4-23",
    "hanzi": "表扬",
    "pinyin": "biǎo yáng",
    "english": "to praise, to commend",
    "level": "HSK 4",
    "lesson": 2
  },
  {
    "id": "HSK4-24",
    "hanzi": "饼干",
    "pinyin": "bǐng gān",
    "english": "biscuit, cracker, cookie, 塊|块[kuài]",
    "level": "HSK 4",
    "lesson": 2
  },
  {
    "id": "HSK4-25",
    "hanzi": "并且",
    "pinyin": "bìng qiě",
    "english": "and, besides, moreover, furthermore, in addition",
    "level": "HSK 4",
    "lesson": 2
  },
  {
    "id": "HSK4-26",
    "hanzi": "博士",
    "pinyin": "bó shì",
    "english": "doctor, court academician (in feudal China), Ph.D.",
    "level": "HSK 4",
    "lesson": 2
  },
  {
    "id": "HSK4-27",
    "hanzi": "不但",
    "pinyin": "bù dàn",
    "english": "not only (... but also...)",
    "level": "HSK 4",
    "lesson": 2
  },
  {
    "id": "HSK4-28",
    "hanzi": "不过",
    "pinyin": "bù guò",
    "english": "only, merely, no more than, but, however, anyway (to get back to a previous topic)",
    "level": "HSK 4",
    "lesson": 2
  },
  {
    "id": "HSK4-29",
    "hanzi": "不得不",
    "pinyin": "bù dé bù",
    "english": "have no choice or option but to, cannot but, have to, can't help it, can't avoid",
    "level": "HSK 4",
    "lesson": 2
  },
  {
    "id": "HSK4-30",
    "hanzi": "不管",
    "pinyin": "bù guǎn",
    "english": "no matter (what, how), regardless of, no matter",
    "level": "HSK 4",
    "lesson": 2
  },
  {
    "id": "HSK4-31",
    "hanzi": "不仅",
    "pinyin": "bù jǐn",
    "english": "not only (this one), not just (...) but also",
    "level": "HSK 4",
    "lesson": 2
  },
  {
    "id": "HSK4-32",
    "hanzi": "部分",
    "pinyin": "bù fèn",
    "english": "part, share, section, piece",
    "level": "HSK 4",
    "lesson": 2
  },
  {
    "id": "HSK4-33",
    "hanzi": "擦",
    "pinyin": "cā",
    "english": "to wipe, to erase, rubbing (brush stroke in painting), to clean, to polish",
    "level": "HSK 4",
    "lesson": 2
  },
  {
    "id": "HSK4-34",
    "hanzi": "猜",
    "pinyin": "cāi",
    "english": "to guess",
    "level": "HSK 4",
    "lesson": 2
  },
  {
    "id": "HSK4-35",
    "hanzi": "材料",
    "pinyin": "cái liào",
    "english": "material, data, makings, stuff, 種|种[zhǒng]",
    "level": "HSK 4",
    "lesson": 2
  },
  {
    "id": "HSK4-36",
    "hanzi": "参观",
    "pinyin": "cān guān",
    "english": "to look around, to tour, to visit",
    "level": "HSK 4",
    "lesson": 2
  },
  {
    "id": "HSK4-37",
    "hanzi": "差不多",
    "pinyin": "chà bu duō",
    "english": "almost, nearly, more or less, about the same, good enough, not bad",
    "level": "HSK 4",
    "lesson": 2
  },
  {
    "id": "HSK4-38",
    "hanzi": "长城",
    "pinyin": "Cháng chéng",
    "english": "the Great Wall",
    "level": "HSK 4",
    "lesson": 2
  },
  {
    "id": "HSK4-39",
    "hanzi": "长江",
    "pinyin": "Cháng Jiāng",
    "english": "Yangtze River, or Chang Jiang",
    "level": "HSK 4",
    "lesson": 2
  },
  {
    "id": "HSK4-40",
    "hanzi": "尝",
    "pinyin": "cháng",
    "english": "to taste",
    "level": "HSK 4",
    "lesson": 2
  },
  {
    "id": "HSK4-41",
    "hanzi": "场",
    "pinyin": "chǎng",
    "english": "large place used for a specific purpose, stage, scene (of a play), classifier for sporting or recreational activities, classifier for number of exams",
    "level": "HSK 4",
    "lesson": 3
  },
  {
    "id": "HSK4-42",
    "hanzi": "超过",
    "pinyin": "chāo guò",
    "english": "to surpass, to exceed, to outstrip",
    "level": "HSK 4",
    "lesson": 3
  },
  {
    "id": "HSK4-43",
    "hanzi": "吵",
    "pinyin": "chǎo",
    "english": "to quarrel, to make a noise, noisy, to disturb by making a noise",
    "level": "HSK 4",
    "lesson": 3
  },
  {
    "id": "HSK4-44",
    "hanzi": "乘坐",
    "pinyin": "chéng zuò",
    "english": "to ride (in a vehicle)",
    "level": "HSK 4",
    "lesson": 3
  },
  {
    "id": "HSK4-45",
    "hanzi": "成功",
    "pinyin": "chéng gōng",
    "english": "success, to succeed, 個|个[gè]",
    "level": "HSK 4",
    "lesson": 3
  },
  {
    "id": "HSK4-46",
    "hanzi": "成熟",
    "pinyin": "chéng shú",
    "english": "mature, ripe, to mature, to ripen, Taiwan pr. [chéng shóu]",
    "level": "HSK 4",
    "lesson": 3
  },
  {
    "id": "HSK4-47",
    "hanzi": "成为",
    "pinyin": "chéng wéi",
    "english": "to become, to turn into",
    "level": "HSK 4",
    "lesson": 3
  },
  {
    "id": "HSK4-48",
    "hanzi": "诚实",
    "pinyin": "chéng shí",
    "english": "honest, honesty, honorable, truthful",
    "level": "HSK 4",
    "lesson": 3
  },
  {
    "id": "HSK4-49",
    "hanzi": "吃惊",
    "pinyin": "chī jīng",
    "english": "to be startled, to be shocked, to be amazed",
    "level": "HSK 4",
    "lesson": 3
  },
  {
    "id": "HSK4-50",
    "hanzi": "重新",
    "pinyin": "chóng xīn",
    "english": "again, once more, re-",
    "level": "HSK 4",
    "lesson": 3
  },
  {
    "id": "HSK4-51",
    "hanzi": "抽烟",
    "pinyin": "chōu yān",
    "english": "to smoke (a cigarette, tobacco)",
    "level": "HSK 4",
    "lesson": 3
  },
  {
    "id": "HSK4-52",
    "hanzi": "出差",
    "pinyin": "chū chāi",
    "english": "to go on an official or business trip",
    "level": "HSK 4",
    "lesson": 3
  },
  {
    "id": "HSK4-53",
    "hanzi": "出发",
    "pinyin": "chū fā",
    "english": "to start out, to set off",
    "level": "HSK 4",
    "lesson": 3
  },
  {
    "id": "HSK4-54",
    "hanzi": "出生",
    "pinyin": "chū shēng",
    "english": "to be born",
    "level": "HSK 4",
    "lesson": 3
  },
  {
    "id": "HSK4-55",
    "hanzi": "传真",
    "pinyin": "chuán zhēn",
    "english": "fax, facsimile",
    "level": "HSK 4",
    "lesson": 3
  },
  {
    "id": "HSK4-56",
    "hanzi": "窗户",
    "pinyin": "chuāng hu",
    "english": "window, 扇[shàn]",
    "level": "HSK 4",
    "lesson": 3
  },
  {
    "id": "HSK4-57",
    "hanzi": "词典",
    "pinyin": "cí diǎn",
    "english": "dictionary (of Chinese compound words), also written 辭典|辞典[cí diǎn], 本[běn]",
    "level": "HSK 4",
    "lesson": 3
  },
  {
    "id": "HSK4-58",
    "hanzi": "从来",
    "pinyin": "cóng lái",
    "english": "always, at all times, never (if used in negative sentence)",
    "level": "HSK 4",
    "lesson": 3
  },
  {
    "id": "HSK4-59",
    "hanzi": "粗心",
    "pinyin": "cū xīn",
    "english": "careless, thoughtless",
    "level": "HSK 4",
    "lesson": 3
  },
  {
    "id": "HSK4-60",
    "hanzi": "答案",
    "pinyin": "dá àn",
    "english": "answer, solution",
    "level": "HSK 4",
    "lesson": 3
  },
  {
    "id": "HSK4-61",
    "hanzi": "打扮",
    "pinyin": "dǎ ban",
    "english": "to decorate, to dress, to make up, to adorn, manner of dressing, style of dress",
    "level": "HSK 4",
    "lesson": 4
  },
  {
    "id": "HSK4-62",
    "hanzi": "打扰",
    "pinyin": "dǎ rǎo",
    "english": "to disturb, to bother, to trouble",
    "level": "HSK 4",
    "lesson": 4
  },
  {
    "id": "HSK4-63",
    "hanzi": "打印",
    "pinyin": "dǎ yìn",
    "english": "to print, to seal, to stamp",
    "level": "HSK 4",
    "lesson": 4
  },
  {
    "id": "HSK4-64",
    "hanzi": "打折",
    "pinyin": "dǎ zhé",
    "english": "to give a discount",
    "level": "HSK 4",
    "lesson": 4
  },
  {
    "id": "HSK4-65",
    "hanzi": "打针",
    "pinyin": "dǎ zhēn",
    "english": "to give or have an injection",
    "level": "HSK 4",
    "lesson": 4
  },
  {
    "id": "HSK4-66",
    "hanzi": "大概",
    "pinyin": "dà gài",
    "english": "roughly, probably, rough, approximate, about",
    "level": "HSK 4",
    "lesson": 4
  },
  {
    "id": "HSK4-67",
    "hanzi": "大使馆",
    "pinyin": "dà shǐ guǎn",
    "english": "embassy, 個|个[gè]",
    "level": "HSK 4",
    "lesson": 4
  },
  {
    "id": "HSK4-68",
    "hanzi": "大约",
    "pinyin": "dà yuē",
    "english": "approximately, about",
    "level": "HSK 4",
    "lesson": 4
  },
  {
    "id": "HSK4-69",
    "hanzi": "戴",
    "pinyin": "dài",
    "english": "to put on or wear (glasses, hat, gloves etc), to respect, to bear, to support",
    "level": "HSK 4",
    "lesson": 4
  },
  {
    "id": "HSK4-70",
    "hanzi": "代表",
    "pinyin": "dài biǎo",
    "english": "representative, delegate, 個|个, 名[míng], to represent, to stand for, on behalf of, in the name of",
    "level": "HSK 4",
    "lesson": 4
  },
  {
    "id": "HSK4-71",
    "hanzi": "代替",
    "pinyin": "dài tì",
    "english": "instead, to replace, to substitute (X for Y, or a number in an algebraic expression)",
    "level": "HSK 4",
    "lesson": 4
  },
  {
    "id": "HSK4-72",
    "hanzi": "大夫",
    "pinyin": "dài fu",
    "english": "doctor, minister of state (in pre-Han states), 位[wèi]",
    "level": "HSK 4",
    "lesson": 4
  },
  {
    "id": "HSK4-73",
    "hanzi": "当",
    "pinyin": "dāng",
    "english": "to be, to act as, manage, withstand, when, during, ought, should, match equally, equal, same, obstruct, just at (a time or place), on the spot, right, just at",
    "level": "HSK 4",
    "lesson": 4
  },
  {
    "id": "HSK4-74",
    "hanzi": "当地",
    "pinyin": "dāng dì",
    "english": "local",
    "level": "HSK 4",
    "lesson": 4
  },
  {
    "id": "HSK4-75",
    "hanzi": "当时",
    "pinyin": "dāng shí",
    "english": "then, at that time, while",
    "level": "HSK 4",
    "lesson": 4
  },
  {
    "id": "HSK4-76",
    "hanzi": "刀",
    "pinyin": "dāo",
    "english": "knife, blade, single-edged sword, cutlass, classifier for sets of one hundred sheets (of paper)",
    "level": "HSK 4",
    "lesson": 4
  },
  {
    "id": "HSK4-77",
    "hanzi": "导游",
    "pinyin": "dǎo yóu",
    "english": "tour guide, guidebook, to conduct a tour",
    "level": "HSK 4",
    "lesson": 4
  },
  {
    "id": "HSK4-78",
    "hanzi": "到处",
    "pinyin": "dào chù",
    "english": "everywhere",
    "level": "HSK 4",
    "lesson": 4
  },
  {
    "id": "HSK4-79",
    "hanzi": "到底",
    "pinyin": "dào dǐ",
    "english": "finally, in the end, when all is said and done, after all, to the end, to the last",
    "level": "HSK 4",
    "lesson": 4
  },
  {
    "id": "HSK4-80",
    "hanzi": "道歉",
    "pinyin": "dào qiàn",
    "english": "to apologize",
    "level": "HSK 4",
    "lesson": 4
  },
  {
    "id": "HSK4-81",
    "hanzi": "得意",
    "pinyin": "dé yì",
    "english": "proud of oneself, pleased with oneself, complacent",
    "level": "HSK 4",
    "lesson": 5
  },
  {
    "id": "HSK4-82",
    "hanzi": "等",
    "pinyin": "děng",
    "english": "class, rank, grade, equal to, same as, to wait for, to await, et cetera, and so on, et al. (and other authors), after, as soon as, once",
    "level": "HSK 4",
    "lesson": 5
  },
  {
    "id": "HSK4-83",
    "hanzi": "等",
    "pinyin": "děng",
    "english": "class, rank, grade, equal to, same as, to wait for, to await, et cetera, and so on, et al. (and other authors), after, as soon as, once",
    "level": "HSK 4",
    "lesson": 5
  },
  {
    "id": "HSK4-84",
    "hanzi": "底",
    "pinyin": "dǐ",
    "english": "background, bottom, base, the end of a period of time, towards the end of (last month)",
    "level": "HSK 4",
    "lesson": 5
  },
  {
    "id": "HSK4-85",
    "hanzi": "地球",
    "pinyin": "dì qiú",
    "english": "the Earth, planet",
    "level": "HSK 4",
    "lesson": 5
  },
  {
    "id": "HSK4-86",
    "hanzi": "地址",
    "pinyin": "dì zhǐ",
    "english": "address",
    "level": "HSK 4",
    "lesson": 5
  },
  {
    "id": "HSK4-87",
    "hanzi": "掉",
    "pinyin": "diào",
    "english": "to fall, to drop, to lag behind, to lose, to go missing, to reduce, fall (in prices), to lose (value, weight etc), to wag, to swing, to turn, to change, to exchange, to swap, to show off, to shed (hair)",
    "level": "HSK 4",
    "lesson": 5
  },
  {
    "id": "HSK4-88",
    "hanzi": "调查",
    "pinyin": "diào chá",
    "english": "investigation, inquiry, to investigate, to survey, survey, (opinion) poll, 個|个[gè]",
    "level": "HSK 4",
    "lesson": 5
  },
  {
    "id": "HSK4-89",
    "hanzi": "丢",
    "pinyin": "diū",
    "english": "to lose, to put aside, to throw",
    "level": "HSK 4",
    "lesson": 5
  },
  {
    "id": "HSK4-90",
    "hanzi": "动作",
    "pinyin": "dòng zuò",
    "english": "movement, motion, action",
    "level": "HSK 4",
    "lesson": 5
  },
  {
    "id": "HSK4-91",
    "hanzi": "堵车",
    "pinyin": "dǔ chē",
    "english": "traffic jam, choking",
    "level": "HSK 4",
    "lesson": 5
  },
  {
    "id": "HSK4-92",
    "hanzi": "肚子",
    "pinyin": "dù zi",
    "english": "belly, abdomen, stomach",
    "level": "HSK 4",
    "lesson": 5
  },
  {
    "id": "HSK4-93",
    "hanzi": "断",
    "pinyin": "duàn",
    "english": "to break, to snap, to cut off, to give up or abstain from sth, to judge, (usu. used in the negative) absolutely, definitely, decidedly",
    "level": "HSK 4",
    "lesson": 5
  },
  {
    "id": "HSK4-94",
    "hanzi": "对",
    "pinyin": "duì",
    "english": "couple, pair, to be opposite, to oppose, to face, versus, for, to, correct (answer), to answer, to reply, to direct (towards sth), right",
    "level": "HSK 4",
    "lesson": 5
  },
  {
    "id": "HSK4-95",
    "hanzi": "对",
    "pinyin": "duì",
    "english": "couple, pair, to be opposite, to oppose, to face, versus, for, to, correct (answer), to answer, to reply, to direct (towards sth), right",
    "level": "HSK 4",
    "lesson": 5
  },
  {
    "id": "HSK4-96",
    "hanzi": "对话",
    "pinyin": "duì huà",
    "english": "dialog",
    "level": "HSK 4",
    "lesson": 5
  },
  {
    "id": "HSK4-97",
    "hanzi": "对面",
    "pinyin": "duì miàn",
    "english": "(sitting) opposite, across (the street), directly in front, to be face to face",
    "level": "HSK 4",
    "lesson": 5
  },
  {
    "id": "HSK4-98",
    "hanzi": "顿",
    "pinyin": "dùn",
    "english": "to stop, to pause, to arrange, to lay out, to kowtow, to stamp (one's foot), at once, classifier for meals, beatings, scoldings etc: time, bout, spell, meal",
    "level": "HSK 4",
    "lesson": 5
  },
  {
    "id": "HSK4-99",
    "hanzi": "朵",
    "pinyin": "duǒ",
    "english": "flower, earlobe, fig. item on both sides, classifier for flowers, clouds etc",
    "level": "HSK 4",
    "lesson": 5
  },
  {
    "id": "HSK4-100",
    "hanzi": "而",
    "pinyin": "ér",
    "english": "and, as well as, and so, but (not), yet (not), (indicates causal relation), (indicates change of state), (indicates contrast)",
    "level": "HSK 4",
    "lesson": 5
  },
  {
    "id": "HSK4-101",
    "hanzi": "儿童",
    "pinyin": "ér tóng",
    "english": "child",
    "level": "HSK 4",
    "lesson": 6
  },
  {
    "id": "HSK4-102",
    "hanzi": "发",
    "pinyin": "fā",
    "english": "to send out, to show (one's feeling), to issue, to develop, classifier for gunshots (rounds)",
    "level": "HSK 4",
    "lesson": 6
  },
  {
    "id": "HSK4-103",
    "hanzi": "发生",
    "pinyin": "fā shēng",
    "english": "to happen, to occur, to take place, to break out",
    "level": "HSK 4",
    "lesson": 6
  },
  {
    "id": "HSK4-104",
    "hanzi": "发展",
    "pinyin": "fā zhǎn",
    "english": "development, growth, to develop, to grow, to expand",
    "level": "HSK 4",
    "lesson": 6
  },
  {
    "id": "HSK4-105",
    "hanzi": "法律",
    "pinyin": "fǎ lǜ",
    "english": "law, 套, 個|个[gè]",
    "level": "HSK 4",
    "lesson": 6
  },
  {
    "id": "HSK4-106",
    "hanzi": "翻译",
    "pinyin": "fān yì",
    "english": "to translate, to interpret, translator, interpreter, translation, interpretation, 位, 名[míng]",
    "level": "HSK 4",
    "lesson": 6
  },
  {
    "id": "HSK4-107",
    "hanzi": "烦恼",
    "pinyin": "fán nǎo",
    "english": "to be worried, to be distressed, worries",
    "level": "HSK 4",
    "lesson": 6
  },
  {
    "id": "HSK4-108",
    "hanzi": "反对",
    "pinyin": "fǎn duì",
    "english": "to fight against, to oppose, to be opposed to, opposition",
    "level": "HSK 4",
    "lesson": 6
  },
  {
    "id": "HSK4-109",
    "hanzi": "反映",
    "pinyin": "fǎn yìng",
    "english": "to mirror, to reflect, mirror image, reflection, fig. to report, to make known, to render, used erroneously for 反應|反应, response or reaction",
    "level": "HSK 4",
    "lesson": 6
  },
  {
    "id": "HSK4-110",
    "hanzi": "范围",
    "pinyin": "fàn wéi",
    "english": "range, scope, limit, extent",
    "level": "HSK 4",
    "lesson": 6
  },
  {
    "id": "HSK4-111",
    "hanzi": "方法",
    "pinyin": "fāng fǎ",
    "english": "method, way, means",
    "level": "HSK 4",
    "lesson": 6
  },
  {
    "id": "HSK4-112",
    "hanzi": "方面",
    "pinyin": "fāng miàn",
    "english": "respect, aspect, field, side",
    "level": "HSK 4",
    "lesson": 6
  },
  {
    "id": "HSK4-113",
    "hanzi": "方向",
    "pinyin": "fāng xiàng",
    "english": "direction, orientation, path to follow",
    "level": "HSK 4",
    "lesson": 6
  },
  {
    "id": "HSK4-114",
    "hanzi": "访问",
    "pinyin": "fǎng wèn",
    "english": "to visit, to call on, to interview",
    "level": "HSK 4",
    "lesson": 6
  },
  {
    "id": "HSK4-115",
    "hanzi": "放弃",
    "pinyin": "fàng qì",
    "english": "to renounce, to abandon, to give up",
    "level": "HSK 4",
    "lesson": 6
  },
  {
    "id": "HSK4-116",
    "hanzi": "放暑假",
    "pinyin": "fàng shǔ jià",
    "english": "The summer holidays",
    "level": "HSK 4",
    "lesson": 6
  },
  {
    "id": "HSK4-117",
    "hanzi": "分之",
    "pinyin": "fēn zhī",
    "english": "(indicating a fraction)",
    "level": "HSK 4",
    "lesson": 6
  },
  {
    "id": "HSK4-118",
    "hanzi": "份",
    "pinyin": "fèn",
    "english": "classifier for gifts, newspaper, magazine, papers, reports, contracts etc, variant of 分[fèn]",
    "level": "HSK 4",
    "lesson": 6
  },
  {
    "id": "HSK4-119",
    "hanzi": "风景",
    "pinyin": "fēng jǐng",
    "english": "scenery, landscape",
    "level": "HSK 4",
    "lesson": 6
  },
  {
    "id": "HSK4-120",
    "hanzi": "丰富",
    "pinyin": "fēng fù",
    "english": "to enrich, rich, plentiful, abundant",
    "level": "HSK 4",
    "lesson": 6
  },
  {
    "id": "HSK4-121",
    "hanzi": "否则",
    "pinyin": "fǒu zé",
    "english": "if not, otherwise, else, or else",
    "level": "HSK 4",
    "lesson": 7
  },
  {
    "id": "HSK4-122",
    "hanzi": "符合",
    "pinyin": "fú hé",
    "english": "in keeping with, in accordance with, tallying with, in line with, to agree with, to accord with, to conform to, to correspond with, to manage, to handle",
    "level": "HSK 4",
    "lesson": 7
  },
  {
    "id": "HSK4-123",
    "hanzi": "富",
    "pinyin": "fù",
    "english": "rich, abundant, wealthy",
    "level": "HSK 4",
    "lesson": 7
  },
  {
    "id": "HSK4-124",
    "hanzi": "负责",
    "pinyin": "fù zé",
    "english": "to be in charge of, to take responsibility for, to be to blame, conscientious",
    "level": "HSK 4",
    "lesson": 7
  },
  {
    "id": "HSK4-125",
    "hanzi": "复印",
    "pinyin": "fù yìn",
    "english": "to photocopy, to duplicate a document",
    "level": "HSK 4",
    "lesson": 7
  },
  {
    "id": "HSK4-126",
    "hanzi": "复杂",
    "pinyin": "fù zá",
    "english": "complicated, complex",
    "level": "HSK 4",
    "lesson": 7
  },
  {
    "id": "HSK4-127",
    "hanzi": "父亲",
    "pinyin": "fù qīn",
    "english": "father, also pr. with light tone [fù qin]",
    "level": "HSK 4",
    "lesson": 7
  },
  {
    "id": "HSK4-128",
    "hanzi": "改变",
    "pinyin": "gǎi biàn",
    "english": "to change, to alter, to transform",
    "level": "HSK 4",
    "lesson": 7
  },
  {
    "id": "HSK4-129",
    "hanzi": "干杯",
    "pinyin": "gān bēi",
    "english": "to drink a toast, Cheers! (proposing a toast), Here's to you!, Bottoms up!, lit. dry cup",
    "level": "HSK 4",
    "lesson": 7
  },
  {
    "id": "HSK4-130",
    "hanzi": "干燥",
    "pinyin": "gān zào",
    "english": "to dry (of weather, paint, cement etc), desiccation, dull, uninteresting, arid",
    "level": "HSK 4",
    "lesson": 7
  },
  {
    "id": "HSK4-131",
    "hanzi": "感动",
    "pinyin": "gǎn dòng",
    "english": "to move (sb), to touch (sb emotionally), moving",
    "level": "HSK 4",
    "lesson": 7
  },
  {
    "id": "HSK4-132",
    "hanzi": "感觉",
    "pinyin": "gǎn jué",
    "english": "to feel, to become aware of, feeling, sense, perception",
    "level": "HSK 4",
    "lesson": 7
  },
  {
    "id": "HSK4-133",
    "hanzi": "感情",
    "pinyin": "gǎn qíng",
    "english": "feeling, emotion, sensation, likes and dislikes, deep affection for sb or sth, relationship (i.e. love affair), 種|种[zhǒng]",
    "level": "HSK 4",
    "lesson": 7
  },
  {
    "id": "HSK4-134",
    "hanzi": "感谢",
    "pinyin": "gǎn xiè",
    "english": "(express) thanks, gratitude, grateful, thankful, thanks",
    "level": "HSK 4",
    "lesson": 7
  },
  {
    "id": "HSK4-135",
    "hanzi": "干",
    "pinyin": "gàn",
    "english": "tree trunk, main part of sth, to manage, to work, to do, capable, cadre, to kill (slang), to fuck (vulgar)",
    "level": "HSK 4",
    "lesson": 7
  },
  {
    "id": "HSK4-136",
    "hanzi": "刚刚",
    "pinyin": "gāng gang",
    "english": "just recently, just a moment ago",
    "level": "HSK 4",
    "lesson": 7
  },
  {
    "id": "HSK4-137",
    "hanzi": "高级",
    "pinyin": "gāo jí",
    "english": "high level, high grade, advanced, high-ranking",
    "level": "HSK 4",
    "lesson": 7
  },
  {
    "id": "HSK4-138",
    "hanzi": "个子",
    "pinyin": "gè zi",
    "english": "height, stature, build, size",
    "level": "HSK 4",
    "lesson": 7
  },
  {
    "id": "HSK4-139",
    "hanzi": "各",
    "pinyin": "gè",
    "english": "each, every",
    "level": "HSK 4",
    "lesson": 7
  },
  {
    "id": "HSK4-140",
    "hanzi": "公里",
    "pinyin": "gōng lǐ",
    "english": "kilometer",
    "level": "HSK 4",
    "lesson": 7
  },
  {
    "id": "HSK4-141",
    "hanzi": "工具",
    "pinyin": "gōng jù",
    "english": "tool, instrument, utensil, means (to achieve a goal etc)",
    "level": "HSK 4",
    "lesson": 8
  },
  {
    "id": "HSK4-142",
    "hanzi": "工资",
    "pinyin": "gōng zī",
    "english": "wages, pay, 份, 月[yuè]",
    "level": "HSK 4",
    "lesson": 8
  },
  {
    "id": "HSK4-143",
    "hanzi": "共同",
    "pinyin": "gòng tóng",
    "english": "common, joint, jointly, together, collaborative",
    "level": "HSK 4",
    "lesson": 8
  },
  {
    "id": "HSK4-144",
    "hanzi": "够",
    "pinyin": "gòu",
    "english": "to reach, to be enough",
    "level": "HSK 4",
    "lesson": 8
  },
  {
    "id": "HSK4-145",
    "hanzi": "购物",
    "pinyin": "gòu wù",
    "english": "shopping",
    "level": "HSK 4",
    "lesson": 8
  },
  {
    "id": "HSK4-146",
    "hanzi": "孤单",
    "pinyin": "gū dān",
    "english": "lone, lonely, loneliness",
    "level": "HSK 4",
    "lesson": 8
  },
  {
    "id": "HSK4-147",
    "hanzi": "估计",
    "pinyin": "gū jì",
    "english": "to estimate, to reckon",
    "level": "HSK 4",
    "lesson": 8
  },
  {
    "id": "HSK4-148",
    "hanzi": "鼓励",
    "pinyin": "gǔ lì",
    "english": "to encourage",
    "level": "HSK 4",
    "lesson": 8
  },
  {
    "id": "HSK4-149",
    "hanzi": "鼓掌",
    "pinyin": "gǔ zhǎng",
    "english": "to applaud, to clap",
    "level": "HSK 4",
    "lesson": 8
  },
  {
    "id": "HSK4-150",
    "hanzi": "顾客",
    "pinyin": "gù kè",
    "english": "client, customer",
    "level": "HSK 4",
    "lesson": 8
  },
  {
    "id": "HSK4-151",
    "hanzi": "故意",
    "pinyin": "gù yì",
    "english": "deliberately, on purpose",
    "level": "HSK 4",
    "lesson": 8
  },
  {
    "id": "HSK4-152",
    "hanzi": "挂",
    "pinyin": "guà",
    "english": "to hang or suspend (from a hook etc), to hang up (the phone), to be worried or concerned, to make a phone call (topolect), to register or record, to hitch, classifier for sets or clusters of objects",
    "level": "HSK 4",
    "lesson": 8
  },
  {
    "id": "HSK4-153",
    "hanzi": "关键",
    "pinyin": "guān jiàn",
    "english": "crucial point, crux, key, crucial, pivotal",
    "level": "HSK 4",
    "lesson": 8
  },
  {
    "id": "HSK4-154",
    "hanzi": "观众",
    "pinyin": "guān zhòng",
    "english": "spectators, audience, visitors (to an exhibition etc)",
    "level": "HSK 4",
    "lesson": 8
  },
  {
    "id": "HSK4-155",
    "hanzi": "管理",
    "pinyin": "guǎn lǐ",
    "english": "to supervise, to manage, to administer, management, administration",
    "level": "HSK 4",
    "lesson": 8
  },
  {
    "id": "HSK4-156",
    "hanzi": "光",
    "pinyin": "guāng",
    "english": "light, ray, bright, only, merely, to use up",
    "level": "HSK 4",
    "lesson": 8
  },
  {
    "id": "HSK4-157",
    "hanzi": "广播",
    "pinyin": "guǎng bō",
    "english": "broadcast, broadcasting, to broadcast, (formal) to propagate, to publicize",
    "level": "HSK 4",
    "lesson": 8
  },
  {
    "id": "HSK4-158",
    "hanzi": "广告",
    "pinyin": "guǎng gào",
    "english": "to advertise, a commercial, advertisement",
    "level": "HSK 4",
    "lesson": 8
  },
  {
    "id": "HSK4-159",
    "hanzi": "逛",
    "pinyin": "guàng",
    "english": "to stroll, to visit",
    "level": "HSK 4",
    "lesson": 8
  },
  {
    "id": "HSK4-160",
    "hanzi": "规定",
    "pinyin": "guī dìng",
    "english": "provision, to fix, to set, to formulate, to stipulate, to provide, regulation, rule",
    "level": "HSK 4",
    "lesson": 8
  },
  {
    "id": "HSK4-161",
    "hanzi": "国际",
    "pinyin": "guó jì",
    "english": "international",
    "level": "HSK 4",
    "lesson": 9
  },
  {
    "id": "HSK4-162",
    "hanzi": "果然",
    "pinyin": "guǒ rán",
    "english": "really, sure enough, as expected, if indeed",
    "level": "HSK 4",
    "lesson": 9
  },
  {
    "id": "HSK4-163",
    "hanzi": "过",
    "pinyin": "guò",
    "english": "(experienced action marker), to cross, to go over, to pass (time), to celebrate (a holiday), to live, to get along, excessively, too-",
    "level": "HSK 4",
    "lesson": 9
  },
  {
    "id": "HSK4-164",
    "hanzi": "过",
    "pinyin": "guò",
    "english": "(experienced action marker), to cross, to go over, to pass (time), to celebrate (a holiday), to live, to get along, excessively, too-",
    "level": "HSK 4",
    "lesson": 9
  },
  {
    "id": "HSK4-165",
    "hanzi": "过程",
    "pinyin": "guò chéng",
    "english": "course of events, process",
    "level": "HSK 4",
    "lesson": 9
  },
  {
    "id": "HSK4-166",
    "hanzi": "海洋",
    "pinyin": "hǎi yáng",
    "english": "ocean",
    "level": "HSK 4",
    "lesson": 9
  },
  {
    "id": "HSK4-167",
    "hanzi": "害羞",
    "pinyin": "hài xiū",
    "english": "shy, embarrassed, bashful",
    "level": "HSK 4",
    "lesson": 9
  },
  {
    "id": "HSK4-168",
    "hanzi": "寒假",
    "pinyin": "hán jià",
    "english": "winter vacation",
    "level": "HSK 4",
    "lesson": 9
  },
  {
    "id": "HSK4-169",
    "hanzi": "汗",
    "pinyin": "hàn",
    "english": "perspiration, sweat, 頭|头, 身[shēn], to be speechless (out of helplessness, embarrassment etc) (Internet slang used as an interjection)",
    "level": "HSK 4",
    "lesson": 9
  },
  {
    "id": "HSK4-170",
    "hanzi": "航班",
    "pinyin": "háng bān",
    "english": "scheduled flight, flight number, plane, scheduled sailing, sailing number, passenger ship",
    "level": "HSK 4",
    "lesson": 9
  },
  {
    "id": "HSK4-171",
    "hanzi": "好处",
    "pinyin": "hǎo chu",
    "english": "benefit, advantage, gain, profit, also pronounced [hǎo chù]",
    "level": "HSK 4",
    "lesson": 9
  },
  {
    "id": "HSK4-172",
    "hanzi": "好像",
    "pinyin": "hǎo xiàng",
    "english": "as if, to seem like",
    "level": "HSK 4",
    "lesson": 9
  },
  {
    "id": "HSK4-173",
    "hanzi": "号码",
    "pinyin": "hào mǎ",
    "english": "number, 個|个[gè]",
    "level": "HSK 4",
    "lesson": 9
  },
  {
    "id": "HSK4-174",
    "hanzi": "合格",
    "pinyin": "hé gé",
    "english": "qualified, meeting a standard, eligible (voter)",
    "level": "HSK 4",
    "lesson": 9
  },
  {
    "id": "HSK4-175",
    "hanzi": "合适",
    "pinyin": "hé shì",
    "english": "suitable, fitting, decent, to fit",
    "level": "HSK 4",
    "lesson": 9
  },
  {
    "id": "HSK4-176",
    "hanzi": "盒子",
    "pinyin": "hé zi",
    "english": "case",
    "level": "HSK 4",
    "lesson": 9
  },
  {
    "id": "HSK4-177",
    "hanzi": "猴子",
    "pinyin": "hóu zi",
    "english": "monkey",
    "level": "HSK 4",
    "lesson": 9
  },
  {
    "id": "HSK4-178",
    "hanzi": "厚",
    "pinyin": "hòu",
    "english": "thick, deep or profound, kind, generous, rich or strong in flavor, to favor, to stress",
    "level": "HSK 4",
    "lesson": 9
  },
  {
    "id": "HSK4-179",
    "hanzi": "后悔",
    "pinyin": "hòu huǐ",
    "english": "to regret, to repent",
    "level": "HSK 4",
    "lesson": 9
  },
  {
    "id": "HSK4-180",
    "hanzi": "后来",
    "pinyin": "hòu lái",
    "english": "afterwards, later",
    "level": "HSK 4",
    "lesson": 9
  },
  {
    "id": "HSK4-181",
    "hanzi": "忽然",
    "pinyin": "hū rán",
    "english": "suddenly, all of a sudden",
    "level": "HSK 4",
    "lesson": 10
  },
  {
    "id": "HSK4-182",
    "hanzi": "互相",
    "pinyin": "hù xiāng",
    "english": "each other, mutually, mutual",
    "level": "HSK 4",
    "lesson": 10
  },
  {
    "id": "HSK4-183",
    "hanzi": "护士",
    "pinyin": "hù shi",
    "english": "nurse",
    "level": "HSK 4",
    "lesson": 10
  },
  {
    "id": "HSK4-184",
    "hanzi": "怀疑",
    "pinyin": "huái yí",
    "english": "to doubt, to suspect, doubt, suspicion, skeptical",
    "level": "HSK 4",
    "lesson": 10
  },
  {
    "id": "HSK4-185",
    "hanzi": "回忆",
    "pinyin": "huí yì",
    "english": "to recall, recollection",
    "level": "HSK 4",
    "lesson": 10
  },
  {
    "id": "HSK4-186",
    "hanzi": "活动",
    "pinyin": "huó dòng",
    "english": "to exercise, to move about, to operate, activity, loose, shaky, active, movable, maneuver, to use connections, 個|个[gè]",
    "level": "HSK 4",
    "lesson": 10
  },
  {
    "id": "HSK4-187",
    "hanzi": "活泼",
    "pinyin": "huó po",
    "english": "lively, vivacious, brisk, active",
    "level": "HSK 4",
    "lesson": 10
  },
  {
    "id": "HSK4-188",
    "hanzi": "火",
    "pinyin": "huǒ",
    "english": "fire, urgent, ammunition, fiery or flaming, internal heat (Chinese medicine), hot (popular), classifier for military units (old)",
    "level": "HSK 4",
    "lesson": 10
  },
  {
    "id": "HSK4-189",
    "hanzi": "获得",
    "pinyin": "huò dé",
    "english": "to obtain, to receive, to get",
    "level": "HSK 4",
    "lesson": 10
  },
  {
    "id": "HSK4-190",
    "hanzi": "基础",
    "pinyin": "jī chǔ",
    "english": "base, foundation, basis, underlying",
    "level": "HSK 4",
    "lesson": 10
  },
  {
    "id": "HSK4-191",
    "hanzi": "激动",
    "pinyin": "jī dòng",
    "english": "to excite, to agitate, exciting",
    "level": "HSK 4",
    "lesson": 10
  },
  {
    "id": "HSK4-192",
    "hanzi": "积极",
    "pinyin": "jī jí",
    "english": "active, energetic, vigorous, positive (outlook), proactive",
    "level": "HSK 4",
    "lesson": 10
  },
  {
    "id": "HSK4-193",
    "hanzi": "积累",
    "pinyin": "jī lěi",
    "english": "to accumulate, accumulation, cumulative, cumulatively",
    "level": "HSK 4",
    "lesson": 10
  },
  {
    "id": "HSK4-194",
    "hanzi": "极其",
    "pinyin": "jí qí",
    "english": "extremely",
    "level": "HSK 4",
    "lesson": 10
  },
  {
    "id": "HSK4-195",
    "hanzi": "即使",
    "pinyin": "jí shǐ",
    "english": "even if, even though, given that",
    "level": "HSK 4",
    "lesson": 10
  },
  {
    "id": "HSK4-196",
    "hanzi": "及时",
    "pinyin": "jí shí",
    "english": "in time, promptly, without delay, timely",
    "level": "HSK 4",
    "lesson": 10
  },
  {
    "id": "HSK4-197",
    "hanzi": "集合",
    "pinyin": "jí hé",
    "english": "to gather, to assemble, set (mathematics)",
    "level": "HSK 4",
    "lesson": 10
  },
  {
    "id": "HSK4-198",
    "hanzi": "寄",
    "pinyin": "jì",
    "english": "to live (in a house), to lodge, to mail, to send, to entrust, to depend",
    "level": "HSK 4",
    "lesson": 10
  },
  {
    "id": "HSK4-199",
    "hanzi": "继续",
    "pinyin": "jì xù",
    "english": "to continue, to proceed with, to go on with",
    "level": "HSK 4",
    "lesson": 10
  },
  {
    "id": "HSK4-200",
    "hanzi": "记者",
    "pinyin": "jì zhě",
    "english": "reporter, journalist",
    "level": "HSK 4",
    "lesson": 10
  },
  {
    "id": "HSK4-201",
    "hanzi": "计划",
    "pinyin": "jì huà",
    "english": "plan, project, program, to plan, to map out, 項|项[xiàng]",
    "level": "HSK 4",
    "lesson": 11
  },
  {
    "id": "HSK4-202",
    "hanzi": "技术",
    "pinyin": "jì shù",
    "english": "technology, technique, skill, 種|种, 項|项[xiàng]",
    "level": "HSK 4",
    "lesson": 11
  },
  {
    "id": "HSK4-203",
    "hanzi": "既然",
    "pinyin": "jì rán",
    "english": "since, as, this being the case",
    "level": "HSK 4",
    "lesson": 11
  },
  {
    "id": "HSK4-204",
    "hanzi": "家具",
    "pinyin": "jiā jù",
    "english": "furniture, 套[tào]",
    "level": "HSK 4",
    "lesson": 11
  },
  {
    "id": "HSK4-205",
    "hanzi": "加班",
    "pinyin": "jiā bān",
    "english": "to work overtime",
    "level": "HSK 4",
    "lesson": 11
  },
  {
    "id": "HSK4-206",
    "hanzi": "加油站",
    "pinyin": "jiā yóu zhàn",
    "english": "gas station",
    "level": "HSK 4",
    "lesson": 11
  },
  {
    "id": "HSK4-207",
    "hanzi": "假",
    "pinyin": "jiǎ",
    "english": "fake, false, artificial, to borrow, if, suppose",
    "level": "HSK 4",
    "lesson": 11
  },
  {
    "id": "HSK4-208",
    "hanzi": "价格",
    "pinyin": "jià gé",
    "english": "price",
    "level": "HSK 4",
    "lesson": 11
  },
  {
    "id": "HSK4-209",
    "hanzi": "坚持",
    "pinyin": "jiān chí",
    "english": "to persevere with, to persist in, to insist on",
    "level": "HSK 4",
    "lesson": 11
  },
  {
    "id": "HSK4-210",
    "hanzi": "减肥",
    "pinyin": "jiǎn féi",
    "english": "to lose weight",
    "level": "HSK 4",
    "lesson": 11
  },
  {
    "id": "HSK4-211",
    "hanzi": "减少",
    "pinyin": "jiǎn shǎo",
    "english": "to lessen, to decrease, to reduce, to lower",
    "level": "HSK 4",
    "lesson": 11
  },
  {
    "id": "HSK4-212",
    "hanzi": "将来",
    "pinyin": "jiāng lái",
    "english": "in the future, future, the future",
    "level": "HSK 4",
    "lesson": 11
  },
  {
    "id": "HSK4-213",
    "hanzi": "奖金",
    "pinyin": "jiǎng jīn",
    "english": "premium, award money, a bonus",
    "level": "HSK 4",
    "lesson": 11
  },
  {
    "id": "HSK4-214",
    "hanzi": "降低",
    "pinyin": "jiàng dī",
    "english": "to reduce, to lower, to bring down",
    "level": "HSK 4",
    "lesson": 11
  },
  {
    "id": "HSK4-215",
    "hanzi": "交",
    "pinyin": "jiāo",
    "english": "to hand over, to deliver, to pay (money), to turn over, to make friends, to intersect (lines)",
    "level": "HSK 4",
    "lesson": 11
  },
  {
    "id": "HSK4-216",
    "hanzi": "交流",
    "pinyin": "jiāo liú",
    "english": "to exchange, exchange, communication, interaction, to have social contact (with sb)",
    "level": "HSK 4",
    "lesson": 11
  },
  {
    "id": "HSK4-217",
    "hanzi": "交通",
    "pinyin": "jiāo tōng",
    "english": "to be connected, traffic, transportation, communications, liaison",
    "level": "HSK 4",
    "lesson": 11
  },
  {
    "id": "HSK4-218",
    "hanzi": "骄傲",
    "pinyin": "jiāo ào",
    "english": "pride, arrogance, conceited, proud of sth",
    "level": "HSK 4",
    "lesson": 11
  },
  {
    "id": "HSK4-219",
    "hanzi": "饺子",
    "pinyin": "jiǎo zi",
    "english": "dumpling, pot-sticker, 隻|只[zhī]",
    "level": "HSK 4",
    "lesson": 11
  },
  {
    "id": "HSK4-220",
    "hanzi": "教授",
    "pinyin": "jiào shòu",
    "english": "professor, to instruct, to lecture on, 位[wèi]",
    "level": "HSK 4",
    "lesson": 11
  },
  {
    "id": "HSK4-221",
    "hanzi": "教育",
    "pinyin": "jiào yù",
    "english": "to educate, to teach, education",
    "level": "HSK 4",
    "lesson": 12
  },
  {
    "id": "HSK4-222",
    "hanzi": "接受",
    "pinyin": "jiē shòu",
    "english": "to accept, to receive",
    "level": "HSK 4",
    "lesson": 12
  },
  {
    "id": "HSK4-223",
    "hanzi": "节约",
    "pinyin": "jié yuē",
    "english": "to economize, to conserve (resources), economy, frugal",
    "level": "HSK 4",
    "lesson": 12
  },
  {
    "id": "HSK4-224",
    "hanzi": "结果",
    "pinyin": "jié guǒ",
    "english": "outcome, result, conclusion, in the end, as a result, to kill, to dispatch",
    "level": "HSK 4",
    "lesson": 12
  },
  {
    "id": "HSK4-225",
    "hanzi": "解释",
    "pinyin": "jiě shì",
    "english": "explanation, to explain, to interpret, to resolve",
    "level": "HSK 4",
    "lesson": 12
  },
  {
    "id": "HSK4-226",
    "hanzi": "紧张",
    "pinyin": "jǐn zhāng",
    "english": "nervous, keyed up, intense, tense, strained, in short supply, scarce",
    "level": "HSK 4",
    "lesson": 12
  },
  {
    "id": "HSK4-227",
    "hanzi": "尽管",
    "pinyin": "jǐn guǎn",
    "english": "despite, although, even though, in spite of, unhesitatingly, do not hesitate (to ask, complain etc), (go ahead and do it) without hesitating",
    "level": "HSK 4",
    "lesson": 12
  },
  {
    "id": "HSK4-228",
    "hanzi": "进行",
    "pinyin": "jìn xíng",
    "english": "to advance, to conduct, underway, in progress, to do, to carry out, to carry on, to execute",
    "level": "HSK 4",
    "lesson": 12
  },
  {
    "id": "HSK4-229",
    "hanzi": "禁止",
    "pinyin": "jìn zhǐ",
    "english": "to prohibit, to forbid, to ban",
    "level": "HSK 4",
    "lesson": 12
  },
  {
    "id": "HSK4-230",
    "hanzi": "精彩",
    "pinyin": "jīng cǎi",
    "english": "brilliant, splendid",
    "level": "HSK 4",
    "lesson": 12
  },
  {
    "id": "HSK4-231",
    "hanzi": "精神",
    "pinyin": "jīng shén",
    "english": "spirit, mind, consciousness, thought, mental, psychological, essence, gist",
    "level": "HSK 4",
    "lesson": 12
  },
  {
    "id": "HSK4-232",
    "hanzi": "经济",
    "pinyin": "jīng jì",
    "english": "economy, economic",
    "level": "HSK 4",
    "lesson": 12
  },
  {
    "id": "HSK4-233",
    "hanzi": "经历",
    "pinyin": "jīng lì",
    "english": "experience, 次[cì], to experience, to go through",
    "level": "HSK 4",
    "lesson": 12
  },
  {
    "id": "HSK4-234",
    "hanzi": "经验",
    "pinyin": "jīng yàn",
    "english": "to experience, experience",
    "level": "HSK 4",
    "lesson": 12
  },
  {
    "id": "HSK4-235",
    "hanzi": "京剧",
    "pinyin": "Jīng jù",
    "english": "Beijing opera, 出[chū]",
    "level": "HSK 4",
    "lesson": 12
  },
  {
    "id": "HSK4-236",
    "hanzi": "警察",
    "pinyin": "jǐng chá",
    "english": "police, policeman, policewoman",
    "level": "HSK 4",
    "lesson": 12
  },
  {
    "id": "HSK4-237",
    "hanzi": "竟然",
    "pinyin": "jìng rán",
    "english": "unexpectedly, to one's surprise, in spite of everything, in that crazy way, actually, to go as far as to",
    "level": "HSK 4",
    "lesson": 12
  },
  {
    "id": "HSK4-238",
    "hanzi": "竞争",
    "pinyin": "jìng zhēng",
    "english": "to compete, competition",
    "level": "HSK 4",
    "lesson": 12
  },
  {
    "id": "HSK4-239",
    "hanzi": "镜子",
    "pinyin": "jìng zi",
    "english": "mirror, 個|个[gè]",
    "level": "HSK 4",
    "lesson": 12
  },
  {
    "id": "HSK4-240",
    "hanzi": "究竟",
    "pinyin": "jiū jìng",
    "english": "after all (when all is said and done), actually, outcome, result",
    "level": "HSK 4",
    "lesson": 12
  },
  {
    "id": "HSK4-241",
    "hanzi": "举办",
    "pinyin": "jǔ bàn",
    "english": "to conduct, to hold",
    "level": "HSK 4",
    "lesson": 13
  },
  {
    "id": "HSK4-242",
    "hanzi": "拒绝",
    "pinyin": "jù jué",
    "english": "to refuse, to decline, to reject",
    "level": "HSK 4",
    "lesson": 13
  },
  {
    "id": "HSK4-243",
    "hanzi": "距离",
    "pinyin": "jù lí",
    "english": "distance, to be apart",
    "level": "HSK 4",
    "lesson": 13
  },
  {
    "id": "HSK4-244",
    "hanzi": "开玩笑",
    "pinyin": "kāi wán xiào",
    "english": "to play a joke, to make fun of, to joke",
    "level": "HSK 4",
    "lesson": 13
  },
  {
    "id": "HSK4-245",
    "hanzi": "看法",
    "pinyin": "kàn fǎ",
    "english": "way of looking at a thing, view, opinion",
    "level": "HSK 4",
    "lesson": 13
  },
  {
    "id": "HSK4-246",
    "hanzi": "考虑",
    "pinyin": "kǎo lǜ",
    "english": "to think over, to consider, consideration",
    "level": "HSK 4",
    "lesson": 13
  },
  {
    "id": "HSK4-247",
    "hanzi": "棵",
    "pinyin": "kē",
    "english": "classifier for trees, cabbages, plants etc",
    "level": "HSK 4",
    "lesson": 13
  },
  {
    "id": "HSK4-248",
    "hanzi": "科学",
    "pinyin": "kē xué",
    "english": "science, scientific knowledge, scientific, 個|个, 種|种[zhǒng]",
    "level": "HSK 4",
    "lesson": 13
  },
  {
    "id": "HSK4-249",
    "hanzi": "咳嗽",
    "pinyin": "ké sou",
    "english": "to cough",
    "level": "HSK 4",
    "lesson": 13
  },
  {
    "id": "HSK4-250",
    "hanzi": "可怜",
    "pinyin": "kě lián",
    "english": "pitiful, pathetic, to have pity on",
    "level": "HSK 4",
    "lesson": 13
  },
  {
    "id": "HSK4-251",
    "hanzi": "可是",
    "pinyin": "kě shì",
    "english": "but, however",
    "level": "HSK 4",
    "lesson": 13
  },
  {
    "id": "HSK4-252",
    "hanzi": "可惜",
    "pinyin": "kě xī",
    "english": "it is a pity, what a pity, unfortunately",
    "level": "HSK 4",
    "lesson": 13
  },
  {
    "id": "HSK4-253",
    "hanzi": "肯定",
    "pinyin": "kěn dìng",
    "english": "to be sure, to be certain, sure, certain, definite, to confirm, to affirm, affirmative, to approve, approval, recognition",
    "level": "HSK 4",
    "lesson": 13
  },
  {
    "id": "HSK4-254",
    "hanzi": "空气",
    "pinyin": "kōng qì",
    "english": "air, atmosphere",
    "level": "HSK 4",
    "lesson": 13
  },
  {
    "id": "HSK4-255",
    "hanzi": "恐怕",
    "pinyin": "kǒng pà",
    "english": "fear, to dread, I'm afraid that..., perhaps, maybe",
    "level": "HSK 4",
    "lesson": 13
  },
  {
    "id": "HSK4-256",
    "hanzi": "苦",
    "pinyin": "kǔ",
    "english": "bitter, hardship, pain, to suffer, to bring suffering to, painstakingly",
    "level": "HSK 4",
    "lesson": 13
  },
  {
    "id": "HSK4-257",
    "hanzi": "宽",
    "pinyin": "kuān",
    "english": "lenient, wide, broad",
    "level": "HSK 4",
    "lesson": 13
  },
  {
    "id": "HSK4-258",
    "hanzi": "困",
    "pinyin": "kùn",
    "english": "sleepy, tired",
    "level": "HSK 4",
    "lesson": 13
  },
  {
    "id": "HSK4-259",
    "hanzi": "困难",
    "pinyin": "kùn nan",
    "english": "difficult, challenging, straitened circumstances, difficult situation",
    "level": "HSK 4",
    "lesson": 13
  },
  {
    "id": "HSK4-260",
    "hanzi": "扩大",
    "pinyin": "kuò dà",
    "english": "to expand, to enlarge, to broaden one's scope",
    "level": "HSK 4",
    "lesson": 13
  },
  {
    "id": "HSK4-261",
    "hanzi": "拉",
    "pinyin": "lā",
    "english": "to pull, to play (a bowed instrument), to drag, to draw, to chat",
    "level": "HSK 4",
    "lesson": 14
  },
  {
    "id": "HSK4-262",
    "hanzi": "垃圾桶",
    "pinyin": "lā jī tǒng",
    "english": "rubbish bin, Taiwan pr. [lè sè tǒng]",
    "level": "HSK 4",
    "lesson": 14
  },
  {
    "id": "HSK4-263",
    "hanzi": "辣",
    "pinyin": "là",
    "english": "hot (spicy), pungent",
    "level": "HSK 4",
    "lesson": 14
  },
  {
    "id": "HSK4-264",
    "hanzi": "来不及",
    "pinyin": "lái bu jí",
    "english": "there's not enough time (to do sth), it's too late (to do sth)",
    "level": "HSK 4",
    "lesson": 14
  },
  {
    "id": "HSK4-265",
    "hanzi": "来得及",
    "pinyin": "lái de jí",
    "english": "there's still time, able to do sth in time",
    "level": "HSK 4",
    "lesson": 14
  },
  {
    "id": "HSK4-266",
    "hanzi": "懒",
    "pinyin": "lǎn",
    "english": "lazy",
    "level": "HSK 4",
    "lesson": 14
  },
  {
    "id": "HSK4-267",
    "hanzi": "浪费",
    "pinyin": "làng fèi",
    "english": "to waste, to squander",
    "level": "HSK 4",
    "lesson": 14
  },
  {
    "id": "HSK4-268",
    "hanzi": "浪漫",
    "pinyin": "làng màn",
    "english": "romantic",
    "level": "HSK 4",
    "lesson": 14
  },
  {
    "id": "HSK4-269",
    "hanzi": "老虎",
    "pinyin": "lǎo hǔ",
    "english": "tiger",
    "level": "HSK 4",
    "lesson": 14
  },
  {
    "id": "HSK4-270",
    "hanzi": "冷静",
    "pinyin": "lěng jìng",
    "english": "calm, cool-headed",
    "level": "HSK 4",
    "lesson": 14
  },
  {
    "id": "HSK4-271",
    "hanzi": "礼貌",
    "pinyin": "lǐ mào",
    "english": "courtesy, manners",
    "level": "HSK 4",
    "lesson": 14
  },
  {
    "id": "HSK4-272",
    "hanzi": "理发",
    "pinyin": "lǐ fà",
    "english": "a barber, hairdressing",
    "level": "HSK 4",
    "lesson": 14
  },
  {
    "id": "HSK4-273",
    "hanzi": "理解",
    "pinyin": "lǐ jiě",
    "english": "to comprehend, to understand, comprehension, understanding",
    "level": "HSK 4",
    "lesson": 14
  },
  {
    "id": "HSK4-274",
    "hanzi": "理想",
    "pinyin": "lǐ xiǎng",
    "english": "a dream, an ideal, perfection, ideal, perfect, desirable",
    "level": "HSK 4",
    "lesson": 14
  },
  {
    "id": "HSK4-275",
    "hanzi": "厉害",
    "pinyin": "lì hai",
    "english": "difficult to deal with, difficult to endure, ferocious, radical, serious, terrible, violent, tremendous, awesome",
    "level": "HSK 4",
    "lesson": 14
  },
  {
    "id": "HSK4-276",
    "hanzi": "力气",
    "pinyin": "lì qi",
    "english": "strength",
    "level": "HSK 4",
    "lesson": 14
  },
  {
    "id": "HSK4-277",
    "hanzi": "例如",
    "pinyin": "lì rú",
    "english": "for example, for instance, such as",
    "level": "HSK 4",
    "lesson": 14
  },
  {
    "id": "HSK4-278",
    "hanzi": "俩",
    "pinyin": "liǎ",
    "english": "two (colloquial equivalent of 兩個|两个), both, some",
    "level": "HSK 4",
    "lesson": 14
  },
  {
    "id": "HSK4-279",
    "hanzi": "连",
    "pinyin": "lián",
    "english": "to link, to join, to connect, continuously, in succession, including, (used with 也, 都 etc) even, company (military)",
    "level": "HSK 4",
    "lesson": 14
  },
  {
    "id": "HSK4-280",
    "hanzi": "联系",
    "pinyin": "lián xì",
    "english": "connection, contact, relation, to get in touch with, to integrate, to link, to touch",
    "level": "HSK 4",
    "lesson": 14
  },
  {
    "id": "HSK4-281",
    "hanzi": "凉快",
    "pinyin": "liáng kuai",
    "english": "nice and cold, pleasantly cool",
    "level": "HSK 4",
    "lesson": 15
  },
  {
    "id": "HSK4-282",
    "hanzi": "亮",
    "pinyin": "liàng",
    "english": "bright, clear, resonant, to shine, to show, to reveal",
    "level": "HSK 4",
    "lesson": 15
  },
  {
    "id": "HSK4-283",
    "hanzi": "聊天",
    "pinyin": "liáo tiān",
    "english": "to chat, to gossip",
    "level": "HSK 4",
    "lesson": 15
  },
  {
    "id": "HSK4-284",
    "hanzi": "另外",
    "pinyin": "lìng wài",
    "english": "additional, in addition, besides, separate, other, moreover, furthermore",
    "level": "HSK 4",
    "lesson": 15
  },
  {
    "id": "HSK4-285",
    "hanzi": "留",
    "pinyin": "liú",
    "english": "to leave (a message etc), to retain, to stay, to remain, to keep, to preserve",
    "level": "HSK 4",
    "lesson": 15
  },
  {
    "id": "HSK4-286",
    "hanzi": "留学",
    "pinyin": "liú xué",
    "english": "to study abroad",
    "level": "HSK 4",
    "lesson": 15
  },
  {
    "id": "HSK4-287",
    "hanzi": "流泪",
    "pinyin": "liú lèi",
    "english": "to shed tears",
    "level": "HSK 4",
    "lesson": 15
  },
  {
    "id": "HSK4-288",
    "hanzi": "流利",
    "pinyin": "liú lì",
    "english": "fluent",
    "level": "HSK 4",
    "lesson": 15
  },
  {
    "id": "HSK4-289",
    "hanzi": "流行",
    "pinyin": "liú xíng",
    "english": "to spread, to rage (of contagious disease), popular, fashionable, prevalent, (math.) manifold",
    "level": "HSK 4",
    "lesson": 15
  },
  {
    "id": "HSK4-290",
    "hanzi": "乱",
    "pinyin": "luàn",
    "english": "in confusion or disorder, in a confused state of mind, disorder, upheaval, riot, illicit sexual relations, to throw into disorder, to mix up, indiscriminate, random, arbitrary",
    "level": "HSK 4",
    "lesson": 15
  },
  {
    "id": "HSK4-291",
    "hanzi": "律师",
    "pinyin": "lǜ shī",
    "english": "lawyer",
    "level": "HSK 4",
    "lesson": 15
  },
  {
    "id": "HSK4-292",
    "hanzi": "麻烦",
    "pinyin": "má fan",
    "english": "inconvenient, troublesome, annoying, to trouble or bother sb, to put sb to trouble",
    "level": "HSK 4",
    "lesson": 15
  },
  {
    "id": "HSK4-293",
    "hanzi": "马虎",
    "pinyin": "mǎ hu",
    "english": "careless, sloppy, negligent, skimpy",
    "level": "HSK 4",
    "lesson": 15
  },
  {
    "id": "HSK4-294",
    "hanzi": "满",
    "pinyin": "mǎn",
    "english": "full, filled, packed, fully, completely, quite, to reach the limit, to satisfy, satisfied, contented, to fill, abbr. for Manchurian",
    "level": "HSK 4",
    "lesson": 15
  },
  {
    "id": "HSK4-295",
    "hanzi": "毛巾",
    "pinyin": "máo jīn",
    "english": "towel",
    "level": "HSK 4",
    "lesson": 15
  },
  {
    "id": "HSK4-296",
    "hanzi": "美丽",
    "pinyin": "měi lì",
    "english": "beautiful",
    "level": "HSK 4",
    "lesson": 15
  },
  {
    "id": "HSK4-297",
    "hanzi": "梦",
    "pinyin": "mèng",
    "english": "dream, 個|个[gè]",
    "level": "HSK 4",
    "lesson": 15
  },
  {
    "id": "HSK4-298",
    "hanzi": "密码",
    "pinyin": "mì mǎ",
    "english": "code, secret code, password, pin number",
    "level": "HSK 4",
    "lesson": 15
  },
  {
    "id": "HSK4-299",
    "hanzi": "免费",
    "pinyin": "miǎn fèi",
    "english": "free (of charge)",
    "level": "HSK 4",
    "lesson": 15
  },
  {
    "id": "HSK4-300",
    "hanzi": "民族",
    "pinyin": "mín zú",
    "english": "nationality, ethnic group",
    "level": "HSK 4",
    "lesson": 15
  },
  {
    "id": "HSK4-301",
    "hanzi": "母亲",
    "pinyin": "mǔ qīn",
    "english": "mother, also pr. with light tone [mǔ qin]",
    "level": "HSK 4",
    "lesson": 16
  },
  {
    "id": "HSK4-302",
    "hanzi": "目的",
    "pinyin": "mù dì",
    "english": "purpose, aim, goal, target, objective",
    "level": "HSK 4",
    "lesson": 16
  },
  {
    "id": "HSK4-303",
    "hanzi": "耐心",
    "pinyin": "nài xīn",
    "english": "to be patient, patience",
    "level": "HSK 4",
    "lesson": 16
  },
  {
    "id": "HSK4-304",
    "hanzi": "难道",
    "pinyin": "nán dào",
    "english": "don't tell me ..., could it be that...?",
    "level": "HSK 4",
    "lesson": 16
  },
  {
    "id": "HSK4-305",
    "hanzi": "难受",
    "pinyin": "nán shòu",
    "english": "to feel unwell, to suffer pain, to be difficult to bear",
    "level": "HSK 4",
    "lesson": 16
  },
  {
    "id": "HSK4-306",
    "hanzi": "内",
    "pinyin": "nèi",
    "english": "inside, inner, internal, within, interior",
    "level": "HSK 4",
    "lesson": 16
  },
  {
    "id": "HSK4-307",
    "hanzi": "内容",
    "pinyin": "nèi róng",
    "english": "content, substance, details, 項|项[xiàng]",
    "level": "HSK 4",
    "lesson": 16
  },
  {
    "id": "HSK4-308",
    "hanzi": "能力",
    "pinyin": "néng lì",
    "english": "capability, capable, able, ability",
    "level": "HSK 4",
    "lesson": 16
  },
  {
    "id": "HSK4-309",
    "hanzi": "年龄",
    "pinyin": "nián líng",
    "english": "(a person's) age, 個|个[gè]",
    "level": "HSK 4",
    "lesson": 16
  },
  {
    "id": "HSK4-310",
    "hanzi": "农村",
    "pinyin": "nóng cūn",
    "english": "rural area, village",
    "level": "HSK 4",
    "lesson": 16
  },
  {
    "id": "HSK4-311",
    "hanzi": "弄",
    "pinyin": "nòng",
    "english": "to do, to manage, to handle, to play with, to fool with, to mess with, to fix, to toy with",
    "level": "HSK 4",
    "lesson": 16
  },
  {
    "id": "HSK4-312",
    "hanzi": "暖和",
    "pinyin": "nuǎn huo",
    "english": "warm, nice and warm",
    "level": "HSK 4",
    "lesson": 16
  },
  {
    "id": "HSK4-313",
    "hanzi": "偶尔",
    "pinyin": "ǒu ěr",
    "english": "occasionally, once in a while, sometimes",
    "level": "HSK 4",
    "lesson": 16
  },
  {
    "id": "HSK4-314",
    "hanzi": "排列",
    "pinyin": "pái liè",
    "english": "array, arrangement, permutation (i.e. ordered choice of n elements out of m)",
    "level": "HSK 4",
    "lesson": 16
  },
  {
    "id": "HSK4-315",
    "hanzi": "判断",
    "pinyin": "pàn duàn",
    "english": "to decide, to determine",
    "level": "HSK 4",
    "lesson": 16
  },
  {
    "id": "HSK4-316",
    "hanzi": "陪",
    "pinyin": "péi",
    "english": "to accompany, to keep sb company, to assist, old variant of 賠|赔[péi]",
    "level": "HSK 4",
    "lesson": 16
  },
  {
    "id": "HSK4-317",
    "hanzi": "批评",
    "pinyin": "pī píng",
    "english": "to criticize, criticism",
    "level": "HSK 4",
    "lesson": 16
  },
  {
    "id": "HSK4-318",
    "hanzi": "皮肤",
    "pinyin": "pí fū",
    "english": "skin, 塊|块[kuài]",
    "level": "HSK 4",
    "lesson": 16
  },
  {
    "id": "HSK4-319",
    "hanzi": "脾气",
    "pinyin": "pí qi",
    "english": "character, temperament, disposition, bad temper",
    "level": "HSK 4",
    "lesson": 16
  },
  {
    "id": "HSK4-320",
    "hanzi": "篇",
    "pinyin": "piān",
    "english": "sheet, piece of writing, bound set of bamboo slips used for record keeping (old), classifier for written items: chapter, article",
    "level": "HSK 4",
    "lesson": 16
  },
  {
    "id": "HSK4-321",
    "hanzi": "骗",
    "pinyin": "piàn",
    "english": "to cheat, to swindle, to deceive, to fool, to hoodwink, to trick",
    "level": "HSK 4",
    "lesson": 17
  },
  {
    "id": "HSK4-322",
    "hanzi": "乒乓球",
    "pinyin": "pīng pāng qiú",
    "english": "table tennis, ping-pong, ping pong, table tennis ball",
    "level": "HSK 4",
    "lesson": 17
  },
  {
    "id": "HSK4-323",
    "hanzi": "平时",
    "pinyin": "píng shí",
    "english": "ordinarily, in normal times, in peacetime",
    "level": "HSK 4",
    "lesson": 17
  },
  {
    "id": "HSK4-324",
    "hanzi": "瓶子",
    "pinyin": "píng zi",
    "english": "bottle",
    "level": "HSK 4",
    "lesson": 17
  },
  {
    "id": "HSK4-325",
    "hanzi": "破",
    "pinyin": "pò",
    "english": "broken, damaged, worn out, to break, split or cleave, to get rid of, to destroy, to break with, to defeat, to capture (a city etc), to expose the truth of",
    "level": "HSK 4",
    "lesson": 17
  },
  {
    "id": "HSK4-326",
    "hanzi": "普遍",
    "pinyin": "pǔ biàn",
    "english": "universal, general, widespread, common",
    "level": "HSK 4",
    "lesson": 17
  },
  {
    "id": "HSK4-327",
    "hanzi": "其次",
    "pinyin": "qí cì",
    "english": "next, secondly",
    "level": "HSK 4",
    "lesson": 17
  },
  {
    "id": "HSK4-328",
    "hanzi": "其中",
    "pinyin": "qí zhōng",
    "english": "among, in, included among these",
    "level": "HSK 4",
    "lesson": 17
  },
  {
    "id": "HSK4-329",
    "hanzi": "起飞",
    "pinyin": "qǐ fēi",
    "english": "to take off (in an airplane)",
    "level": "HSK 4",
    "lesson": 17
  },
  {
    "id": "HSK4-330",
    "hanzi": "起来",
    "pinyin": "qi lai",
    "english": "(after a verb, indicates beginning or completeness)",
    "level": "HSK 4",
    "lesson": 17
  },
  {
    "id": "HSK4-331",
    "hanzi": "气候",
    "pinyin": "qì hòu",
    "english": "climate, atmosphere, situation",
    "level": "HSK 4",
    "lesson": 17
  },
  {
    "id": "HSK4-332",
    "hanzi": "千万",
    "pinyin": "qiān wàn",
    "english": "ten million, countless, many, one must by all means",
    "level": "HSK 4",
    "lesson": 17
  },
  {
    "id": "HSK4-333",
    "hanzi": "签证",
    "pinyin": "qiān zhèng",
    "english": "visa, certificate, to certify",
    "level": "HSK 4",
    "lesson": 17
  },
  {
    "id": "HSK4-334",
    "hanzi": "墙",
    "pinyin": "qiáng",
    "english": "wall, 堵[dǔ]",
    "level": "HSK 4",
    "lesson": 17
  },
  {
    "id": "HSK4-335",
    "hanzi": "敲",
    "pinyin": "qiāo",
    "english": "to hit, to strike, to tap, to rap, to knock, to rip sb off, to overcharge",
    "level": "HSK 4",
    "lesson": 17
  },
  {
    "id": "HSK4-336",
    "hanzi": "桥",
    "pinyin": "qiáo",
    "english": "bridge",
    "level": "HSK 4",
    "lesson": 17
  },
  {
    "id": "HSK4-337",
    "hanzi": "巧克力",
    "pinyin": "qiǎo kè lì",
    "english": "chocolate (loanword)",
    "level": "HSK 4",
    "lesson": 17
  },
  {
    "id": "HSK4-338",
    "hanzi": "亲戚",
    "pinyin": "qīn qi",
    "english": "a relative (i.e. family relation), 個|个, 位[wèi]",
    "level": "HSK 4",
    "lesson": 17
  },
  {
    "id": "HSK4-339",
    "hanzi": "轻",
    "pinyin": "qīng",
    "english": "light, easy, gentle, soft, reckless, unimportant, frivolous, small in number, unstressed, neutral, to disparage",
    "level": "HSK 4",
    "lesson": 17
  },
  {
    "id": "HSK4-340",
    "hanzi": "轻松",
    "pinyin": "qīng sōng",
    "english": "gentle, relaxed",
    "level": "HSK 4",
    "lesson": 17
  },
  {
    "id": "HSK4-341",
    "hanzi": "情况",
    "pinyin": "qíng kuàng",
    "english": "circumstances, state of affairs, situation, 種|种[zhǒng]",
    "level": "HSK 4",
    "lesson": 18
  },
  {
    "id": "HSK4-342",
    "hanzi": "请假",
    "pinyin": "qǐng jià",
    "english": "to request leave of absence",
    "level": "HSK 4",
    "lesson": 18
  },
  {
    "id": "HSK4-343",
    "hanzi": "请客",
    "pinyin": "qǐng kè",
    "english": "to give a dinner party, to entertain guests, to invite to dinner",
    "level": "HSK 4",
    "lesson": 18
  },
  {
    "id": "HSK4-344",
    "hanzi": "穷",
    "pinyin": "qióng",
    "english": "exhausted, poor",
    "level": "HSK 4",
    "lesson": 18
  },
  {
    "id": "HSK4-345",
    "hanzi": "区别",
    "pinyin": "qū bié",
    "english": "difference, to distinguish, to discriminate, to make a distinction",
    "level": "HSK 4",
    "lesson": 18
  },
  {
    "id": "HSK4-346",
    "hanzi": "取",
    "pinyin": "qǔ",
    "english": "to take, to get, to choose, to fetch",
    "level": "HSK 4",
    "lesson": 18
  },
  {
    "id": "HSK4-347",
    "hanzi": "全部",
    "pinyin": "quán bù",
    "english": "whole, entire, complete",
    "level": "HSK 4",
    "lesson": 18
  },
  {
    "id": "HSK4-348",
    "hanzi": "缺点",
    "pinyin": "quē diǎn",
    "english": "weak point, fault, shortcoming",
    "level": "HSK 4",
    "lesson": 18
  },
  {
    "id": "HSK4-349",
    "hanzi": "缺少",
    "pinyin": "quē shǎo",
    "english": "lack, shortage of, shortfall, to be short (of), to lack",
    "level": "HSK 4",
    "lesson": 18
  },
  {
    "id": "HSK4-350",
    "hanzi": "却",
    "pinyin": "què",
    "english": "but, yet, however, while, to go back, to decline, to retreat, nevertheless, even though",
    "level": "HSK 4",
    "lesson": 18
  },
  {
    "id": "HSK4-351",
    "hanzi": "确实",
    "pinyin": "què shí",
    "english": "indeed, really, reliable, real, true",
    "level": "HSK 4",
    "lesson": 18
  },
  {
    "id": "HSK4-352",
    "hanzi": "群",
    "pinyin": "qún",
    "english": "group, crowd, flock, herd, pack etc",
    "level": "HSK 4",
    "lesson": 18
  },
  {
    "id": "HSK4-353",
    "hanzi": "然而",
    "pinyin": "rán ér",
    "english": "however, yet, but",
    "level": "HSK 4",
    "lesson": 18
  },
  {
    "id": "HSK4-354",
    "hanzi": "热闹",
    "pinyin": "rè nao",
    "english": "bustling with noise and excitement, lively",
    "level": "HSK 4",
    "lesson": 18
  },
  {
    "id": "HSK4-355",
    "hanzi": "人民币",
    "pinyin": "rén mín bì",
    "english": "Renminbi (RMB), Chinese Yuan (CNY)",
    "level": "HSK 4",
    "lesson": 18
  },
  {
    "id": "HSK4-356",
    "hanzi": "任何",
    "pinyin": "rèn hé",
    "english": "any, whatever, whichever, whatsoever",
    "level": "HSK 4",
    "lesson": 18
  },
  {
    "id": "HSK4-357",
    "hanzi": "任务",
    "pinyin": "rèn wu",
    "english": "mission, assignment, task, duty, role, 個|个[gè]",
    "level": "HSK 4",
    "lesson": 18
  },
  {
    "id": "HSK4-358",
    "hanzi": "扔",
    "pinyin": "rēng",
    "english": "to throw, to throw away",
    "level": "HSK 4",
    "lesson": 18
  },
  {
    "id": "HSK4-359",
    "hanzi": "仍然",
    "pinyin": "réng rán",
    "english": "still, yet",
    "level": "HSK 4",
    "lesson": 18
  },
  {
    "id": "HSK4-360",
    "hanzi": "日记",
    "pinyin": "rì jì",
    "english": "diary, 本, 篇[piān]",
    "level": "HSK 4",
    "lesson": 18
  },
  {
    "id": "HSK4-361",
    "hanzi": "入口",
    "pinyin": "rù kǒu",
    "english": "entrance",
    "level": "HSK 4",
    "lesson": 19
  },
  {
    "id": "HSK4-362",
    "hanzi": "软",
    "pinyin": "ruǎn",
    "english": "soft, flexible",
    "level": "HSK 4",
    "lesson": 19
  },
  {
    "id": "HSK4-363",
    "hanzi": "散步",
    "pinyin": "sàn bù",
    "english": "to take a walk, to go for a walk",
    "level": "HSK 4",
    "lesson": 19
  },
  {
    "id": "HSK4-364",
    "hanzi": "森林",
    "pinyin": "sēn lín",
    "english": "forest",
    "level": "HSK 4",
    "lesson": 19
  },
  {
    "id": "HSK4-365",
    "hanzi": "沙发",
    "pinyin": "shā fā",
    "english": "sofa, 張|张[zhāng]",
    "level": "HSK 4",
    "lesson": 19
  },
  {
    "id": "HSK4-366",
    "hanzi": "商量",
    "pinyin": "shāng liang",
    "english": "to consult, to talk over, to discuss",
    "level": "HSK 4",
    "lesson": 19
  },
  {
    "id": "HSK4-367",
    "hanzi": "伤心",
    "pinyin": "shāng xīn",
    "english": "to grieve, to be broken-hearted, to feel deeply hurt",
    "level": "HSK 4",
    "lesson": 19
  },
  {
    "id": "HSK4-368",
    "hanzi": "稍微",
    "pinyin": "shāo wēi",
    "english": "a little bit",
    "level": "HSK 4",
    "lesson": 19
  },
  {
    "id": "HSK4-369",
    "hanzi": "社会",
    "pinyin": "shè huì",
    "english": "society",
    "level": "HSK 4",
    "lesson": 19
  },
  {
    "id": "HSK4-370",
    "hanzi": "深",
    "pinyin": "shēn",
    "english": "close, deep, late, profound, dark (of color, water etc)",
    "level": "HSK 4",
    "lesson": 19
  },
  {
    "id": "HSK4-371",
    "hanzi": "申请",
    "pinyin": "shēn qǐng",
    "english": "to apply for sth, application (form etc)",
    "level": "HSK 4",
    "lesson": 19
  },
  {
    "id": "HSK4-372",
    "hanzi": "甚至",
    "pinyin": "shèn zhì",
    "english": "even, so much so that",
    "level": "HSK 4",
    "lesson": 19
  },
  {
    "id": "HSK4-373",
    "hanzi": "生活",
    "pinyin": "shēng huó",
    "english": "life, activity, to live, livelihood",
    "level": "HSK 4",
    "lesson": 19
  },
  {
    "id": "HSK4-374",
    "hanzi": "生命",
    "pinyin": "shēng mìng",
    "english": "life, living, biological",
    "level": "HSK 4",
    "lesson": 19
  },
  {
    "id": "HSK4-375",
    "hanzi": "省",
    "pinyin": "shěng",
    "english": "to save, to economize, to do without, to omit, to leave out, province",
    "level": "HSK 4",
    "lesson": 19
  },
  {
    "id": "HSK4-376",
    "hanzi": "剩",
    "pinyin": "shèng",
    "english": "to remain, to be left, to have as remainder",
    "level": "HSK 4",
    "lesson": 19
  },
  {
    "id": "HSK4-377",
    "hanzi": "失败",
    "pinyin": "shī bài",
    "english": "to be defeated, to lose, to fail (e.g. experiments), failure, defeat",
    "level": "HSK 4",
    "lesson": 19
  },
  {
    "id": "HSK4-378",
    "hanzi": "失望",
    "pinyin": "shī wàng",
    "english": "disappointed, to lose hope, to despair",
    "level": "HSK 4",
    "lesson": 19
  },
  {
    "id": "HSK4-379",
    "hanzi": "师傅",
    "pinyin": "shī fu",
    "english": "master, qualified worker, respectful form of address for older men, 位, 名[míng]",
    "level": "HSK 4",
    "lesson": 19
  },
  {
    "id": "HSK4-380",
    "hanzi": "湿润",
    "pinyin": "shī rùn",
    "english": "moist",
    "level": "HSK 4",
    "lesson": 19
  },
  {
    "id": "HSK4-381",
    "hanzi": "狮子",
    "pinyin": "shī zi",
    "english": "lion, 頭|头[tóu], Leo (star sign)",
    "level": "HSK 4",
    "lesson": 20
  },
  {
    "id": "HSK4-382",
    "hanzi": "十分",
    "pinyin": "shí fēn",
    "english": "to divide into ten equal parts, very, hundred percent, completely, extremely, utterly, absolutely",
    "level": "HSK 4",
    "lesson": 20
  },
  {
    "id": "HSK4-383",
    "hanzi": "实际",
    "pinyin": "shí jì",
    "english": "actual, reality, practice",
    "level": "HSK 4",
    "lesson": 20
  },
  {
    "id": "HSK4-384",
    "hanzi": "实在",
    "pinyin": "shí zài",
    "english": "really, actually, indeed, true, real, honest, dependable, (philosophy) reality",
    "level": "HSK 4",
    "lesson": 20
  },
  {
    "id": "HSK4-385",
    "hanzi": "食品",
    "pinyin": "shí pǐn",
    "english": "foodstuff, food, provisions",
    "level": "HSK 4",
    "lesson": 20
  },
  {
    "id": "HSK4-386",
    "hanzi": "使用",
    "pinyin": "shǐ yòng",
    "english": "to use, to employ, to apply, to make use of",
    "level": "HSK 4",
    "lesson": 20
  },
  {
    "id": "HSK4-387",
    "hanzi": "试",
    "pinyin": "shì",
    "english": "to test, to try, experiment, examination, test",
    "level": "HSK 4",
    "lesson": 20
  },
  {
    "id": "HSK4-388",
    "hanzi": "市场",
    "pinyin": "shì chǎng",
    "english": "marketplace, market (also in abstract)",
    "level": "HSK 4",
    "lesson": 20
  },
  {
    "id": "HSK4-389",
    "hanzi": "世纪",
    "pinyin": "shì jì",
    "english": "century",
    "level": "HSK 4",
    "lesson": 20
  },
  {
    "id": "HSK4-390",
    "hanzi": "适合",
    "pinyin": "shì hé",
    "english": "to fit, to suit",
    "level": "HSK 4",
    "lesson": 20
  },
  {
    "id": "HSK4-391",
    "hanzi": "适应",
    "pinyin": "shì yìng",
    "english": "to adapt, to fit, to suit",
    "level": "HSK 4",
    "lesson": 20
  },
  {
    "id": "HSK4-392",
    "hanzi": "收",
    "pinyin": "shōu",
    "english": "to receive, to accept, to collect, in care of (used on address line after name)",
    "level": "HSK 4",
    "lesson": 20
  },
  {
    "id": "HSK4-393",
    "hanzi": "收入",
    "pinyin": "shōu rù",
    "english": "to take in, income, revenue, 個|个[gè]",
    "level": "HSK 4",
    "lesson": 20
  },
  {
    "id": "HSK4-394",
    "hanzi": "收拾",
    "pinyin": "shōu shi",
    "english": "to put in order, to tidy up, to pack, to repair, to punish (colloquial), to manage",
    "level": "HSK 4",
    "lesson": 20
  },
  {
    "id": "HSK4-395",
    "hanzi": "首都",
    "pinyin": "shǒu dū",
    "english": "capital (city)",
    "level": "HSK 4",
    "lesson": 20
  },
  {
    "id": "HSK4-396",
    "hanzi": "首先",
    "pinyin": "shǒu xiān",
    "english": "first (of all), in the first place",
    "level": "HSK 4",
    "lesson": 20
  },
  {
    "id": "HSK4-397",
    "hanzi": "受不了",
    "pinyin": "shòu bù liǎo",
    "english": "unbearable, unable to endure, can't stand",
    "level": "HSK 4",
    "lesson": 20
  },
  {
    "id": "HSK4-398",
    "hanzi": "受到",
    "pinyin": "shòu dào",
    "english": "to receive, to suffer, obtained, given",
    "level": "HSK 4",
    "lesson": 20
  },
  {
    "id": "HSK4-399",
    "hanzi": "售货员",
    "pinyin": "shòu huò yuán",
    "english": "salesperson",
    "level": "HSK 4",
    "lesson": 20
  },
  {
    "id": "HSK4-400",
    "hanzi": "输",
    "pinyin": "shū",
    "english": "to lose, to transport, to donate, to enter (a password)",
    "level": "HSK 4",
    "lesson": 20
  },
  {
    "id": "HSK4-401",
    "hanzi": "熟悉",
    "pinyin": "shú xī",
    "english": "to be familiar with, to know well",
    "level": "HSK 4",
    "lesson": 21
  },
  {
    "id": "HSK4-402",
    "hanzi": "数量",
    "pinyin": "shù liàng",
    "english": "amount, quantity, quantitative",
    "level": "HSK 4",
    "lesson": 21
  },
  {
    "id": "HSK4-403",
    "hanzi": "数字",
    "pinyin": "shù zì",
    "english": "numeral, digit, number, figure, amount, digital (electronics etc)",
    "level": "HSK 4",
    "lesson": 21
  },
  {
    "id": "HSK4-404",
    "hanzi": "帅",
    "pinyin": "shuài",
    "english": "handsome, graceful, smart, commander in chief",
    "level": "HSK 4",
    "lesson": 21
  },
  {
    "id": "HSK4-405",
    "hanzi": "顺便",
    "pinyin": "shùn biàn",
    "english": "conveniently, in passing, without much extra effort",
    "level": "HSK 4",
    "lesson": 21
  },
  {
    "id": "HSK4-406",
    "hanzi": "顺利",
    "pinyin": "shùn lì",
    "english": "smoothly, without a hitch",
    "level": "HSK 4",
    "lesson": 21
  },
  {
    "id": "HSK4-407",
    "hanzi": "顺序",
    "pinyin": "shùn xù",
    "english": "sequence, order",
    "level": "HSK 4",
    "lesson": 21
  },
  {
    "id": "HSK4-408",
    "hanzi": "说明",
    "pinyin": "shuō míng",
    "english": "to explain, to illustrate, to indicate, to show, to prove, explanation, directions, caption",
    "level": "HSK 4",
    "lesson": 21
  },
  {
    "id": "HSK4-409",
    "hanzi": "硕士",
    "pinyin": "shuò shì",
    "english": "master's degree, learned person",
    "level": "HSK 4",
    "lesson": 21
  },
  {
    "id": "HSK4-410",
    "hanzi": "死",
    "pinyin": "sǐ",
    "english": "to die, impassable, uncrossable, inflexible, rigid, extremely",
    "level": "HSK 4",
    "lesson": 21
  },
  {
    "id": "HSK4-411",
    "hanzi": "速度",
    "pinyin": "sù dù",
    "english": "speed, rate, velocity",
    "level": "HSK 4",
    "lesson": 21
  },
  {
    "id": "HSK4-412",
    "hanzi": "塑料袋",
    "pinyin": "sù liào dài",
    "english": "plastic bag",
    "level": "HSK 4",
    "lesson": 21
  },
  {
    "id": "HSK4-413",
    "hanzi": "酸",
    "pinyin": "suān",
    "english": "sour, sore, ache, acid",
    "level": "HSK 4",
    "lesson": 21
  },
  {
    "id": "HSK4-414",
    "hanzi": "算",
    "pinyin": "suàn",
    "english": "to regard as, to figure, to calculate, to compute",
    "level": "HSK 4",
    "lesson": 21
  },
  {
    "id": "HSK4-415",
    "hanzi": "随便",
    "pinyin": "suí biàn",
    "english": "as one wishes, as one pleases, at random, negligent, casual, wanton",
    "level": "HSK 4",
    "lesson": 21
  },
  {
    "id": "HSK4-416",
    "hanzi": "随着",
    "pinyin": "suí zhe",
    "english": "along with, in the wake of, following",
    "level": "HSK 4",
    "lesson": 21
  },
  {
    "id": "HSK4-417",
    "hanzi": "孙子",
    "pinyin": "sūn zi",
    "english": "grandson, son's son",
    "level": "HSK 4",
    "lesson": 21
  },
  {
    "id": "HSK4-418",
    "hanzi": "所有",
    "pinyin": "suǒ yǒu",
    "english": "all, to have, to possess, to own",
    "level": "HSK 4",
    "lesson": 21
  },
  {
    "id": "HSK4-419",
    "hanzi": "抬",
    "pinyin": "tái",
    "english": "to lift, to raise, (of two or more persons) to carry",
    "level": "HSK 4",
    "lesson": 21
  },
  {
    "id": "HSK4-420",
    "hanzi": "台",
    "pinyin": "tái",
    "english": "typhoon",
    "level": "HSK 4",
    "lesson": 21
  },
  {
    "id": "HSK4-421",
    "hanzi": "态度",
    "pinyin": "tài du",
    "english": "manner, bearing, attitude, approach",
    "level": "HSK 4",
    "lesson": 22
  },
  {
    "id": "HSK4-422",
    "hanzi": "谈",
    "pinyin": "tán",
    "english": "to speak, to talk, to converse, to chat, to discuss",
    "level": "HSK 4",
    "lesson": 22
  },
  {
    "id": "HSK4-423",
    "hanzi": "弹",
    "pinyin": "tán",
    "english": "to pluck (a string), to play (a string instrument), to spring or leap, to shoot (e.g. with a catapult), (of cotton) to fluff or tease, to flick, to flip, to accuse, to impeach, elastic (of materials)",
    "level": "HSK 4",
    "lesson": 22
  },
  {
    "id": "HSK4-424",
    "hanzi": "汤",
    "pinyin": "tāng",
    "english": "soup, hot or boiling water, decoction of medicinal herbs, water in which sth has been boiled",
    "level": "HSK 4",
    "lesson": 22
  },
  {
    "id": "HSK4-425",
    "hanzi": "躺",
    "pinyin": "tǎng",
    "english": "to recline, to lie down",
    "level": "HSK 4",
    "lesson": 22
  },
  {
    "id": "HSK4-426",
    "hanzi": "趟",
    "pinyin": "tàng",
    "english": "classifier for times, round trips or rows, a time, a trip",
    "level": "HSK 4",
    "lesson": 22
  },
  {
    "id": "HSK4-427",
    "hanzi": "讨论",
    "pinyin": "tǎo lùn",
    "english": "to discuss, to talk over",
    "level": "HSK 4",
    "lesson": 22
  },
  {
    "id": "HSK4-428",
    "hanzi": "讨厌",
    "pinyin": "tǎo yàn",
    "english": "to dislike, to loathe, disagreeable, troublesome, annoying",
    "level": "HSK 4",
    "lesson": 22
  },
  {
    "id": "HSK4-429",
    "hanzi": "特点",
    "pinyin": "tè diǎn",
    "english": "characteristic (feature), trait, feature",
    "level": "HSK 4",
    "lesson": 22
  },
  {
    "id": "HSK4-430",
    "hanzi": "提供",
    "pinyin": "tí gōng",
    "english": "to offer, to supply, to provide, to furnish",
    "level": "HSK 4",
    "lesson": 22
  },
  {
    "id": "HSK4-431",
    "hanzi": "提前",
    "pinyin": "tí qián",
    "english": "to shift to an earlier date, to do sth ahead of time, in advance",
    "level": "HSK 4",
    "lesson": 22
  },
  {
    "id": "HSK4-432",
    "hanzi": "提醒",
    "pinyin": "tí xǐng",
    "english": "to remind, to call attention to, to warn of",
    "level": "HSK 4",
    "lesson": 22
  },
  {
    "id": "HSK4-433",
    "hanzi": "填空",
    "pinyin": "tián kòng",
    "english": "to fill a job vacancy, to fill in a blank (e.g. on questionnaire or exam paper)",
    "level": "HSK 4",
    "lesson": 22
  },
  {
    "id": "HSK4-434",
    "hanzi": "条件",
    "pinyin": "tiáo jiàn",
    "english": "condition, circumstances, term, factor, requirement, prerequisite, qualification",
    "level": "HSK 4",
    "lesson": 22
  },
  {
    "id": "HSK4-435",
    "hanzi": "停止",
    "pinyin": "tíng zhǐ",
    "english": "to stop, to halt, to cease",
    "level": "HSK 4",
    "lesson": 22
  },
  {
    "id": "HSK4-436",
    "hanzi": "挺",
    "pinyin": "tǐng",
    "english": "to stick out, to (physically) straighten up, to endure or hold out, straight, stiff, outstanding, extraordinary, rather, quite, very, classifier for machine guns",
    "level": "HSK 4",
    "lesson": 22
  },
  {
    "id": "HSK4-437",
    "hanzi": "通过",
    "pinyin": "tōng guò",
    "english": "by means of, through, via, to pass through, to get through, to adopt, to pass (a bill or inspection etc), to switch over",
    "level": "HSK 4",
    "lesson": 22
  },
  {
    "id": "HSK4-438",
    "hanzi": "通知",
    "pinyin": "tōng zhī",
    "english": "to notify, to inform, notice, notification",
    "level": "HSK 4",
    "lesson": 22
  },
  {
    "id": "HSK4-439",
    "hanzi": "同情",
    "pinyin": "tóng qíng",
    "english": "to sympathize with, sympathy",
    "level": "HSK 4",
    "lesson": 22
  },
  {
    "id": "HSK4-440",
    "hanzi": "推",
    "pinyin": "tuī",
    "english": "to push, to cut, to refuse, to reject, to decline, to shirk (responsibility), to put off, to delay, to push forward, to nominate, to elect",
    "level": "HSK 4",
    "lesson": 22
  },
  {
    "id": "HSK4-441",
    "hanzi": "推迟",
    "pinyin": "tuī chí",
    "english": "to postpone, to put off, to defer",
    "level": "HSK 4",
    "lesson": 23
  },
  {
    "id": "HSK4-442",
    "hanzi": "脱",
    "pinyin": "tuō",
    "english": "to shed, to take off, to escape, to get away from",
    "level": "HSK 4",
    "lesson": 23
  },
  {
    "id": "HSK4-443",
    "hanzi": "袜子",
    "pinyin": "wà zi",
    "english": "socks, stockings, 對|对, 雙|双[shuāng]",
    "level": "HSK 4",
    "lesson": 23
  },
  {
    "id": "HSK4-444",
    "hanzi": "完全",
    "pinyin": "wán quán",
    "english": "complete, whole, totally, entirely",
    "level": "HSK 4",
    "lesson": 23
  },
  {
    "id": "HSK4-445",
    "hanzi": "往",
    "pinyin": "wǎng",
    "english": "to go (in a direction), to, towards, (of a train) bound for, past, previous",
    "level": "HSK 4",
    "lesson": 23
  },
  {
    "id": "HSK4-446",
    "hanzi": "往往",
    "pinyin": "wǎng wǎng",
    "english": "often, frequently",
    "level": "HSK 4",
    "lesson": 23
  },
  {
    "id": "HSK4-447",
    "hanzi": "网球",
    "pinyin": "wǎng qiú",
    "english": "tennis",
    "level": "HSK 4",
    "lesson": 23
  },
  {
    "id": "HSK4-448",
    "hanzi": "网站",
    "pinyin": "wǎng zhàn",
    "english": "website, network station, node",
    "level": "HSK 4",
    "lesson": 23
  },
  {
    "id": "HSK4-449",
    "hanzi": "危险",
    "pinyin": "wēi xiǎn",
    "english": "danger, dangerous",
    "level": "HSK 4",
    "lesson": 23
  },
  {
    "id": "HSK4-450",
    "hanzi": "味道",
    "pinyin": "wèi dao",
    "english": "flavor, smell, hint of",
    "level": "HSK 4",
    "lesson": 23
  },
  {
    "id": "HSK4-451",
    "hanzi": "温度",
    "pinyin": "wēn dù",
    "english": "temperature",
    "level": "HSK 4",
    "lesson": 23
  },
  {
    "id": "HSK4-452",
    "hanzi": "文章",
    "pinyin": "wén zhāng",
    "english": "article, essay, literary works, writings, hidden meaning, 段, 頁|页[yè]",
    "level": "HSK 4",
    "lesson": 23
  },
  {
    "id": "HSK4-453",
    "hanzi": "握手",
    "pinyin": "wò shǒu",
    "english": "to shake hands",
    "level": "HSK 4",
    "lesson": 23
  },
  {
    "id": "HSK4-454",
    "hanzi": "污染",
    "pinyin": "wū rǎn",
    "english": "pollution, contamination",
    "level": "HSK 4",
    "lesson": 23
  },
  {
    "id": "HSK4-455",
    "hanzi": "无",
    "pinyin": "wú",
    "english": "-less, not to have, no, none, not, to lack, un-",
    "level": "HSK 4",
    "lesson": 23
  },
  {
    "id": "HSK4-456",
    "hanzi": "无聊",
    "pinyin": "wú liáo",
    "english": "bored, boring, senseless",
    "level": "HSK 4",
    "lesson": 23
  },
  {
    "id": "HSK4-457",
    "hanzi": "无论",
    "pinyin": "wú lùn",
    "english": "no matter what or how, regardless of whether...",
    "level": "HSK 4",
    "lesson": 23
  },
  {
    "id": "HSK4-458",
    "hanzi": "误会",
    "pinyin": "wù huì",
    "english": "to misunderstand, to mistake, misunderstanding",
    "level": "HSK 4",
    "lesson": 23
  },
  {
    "id": "HSK4-459",
    "hanzi": "西红柿",
    "pinyin": "xī hóng shì",
    "english": "tomato",
    "level": "HSK 4",
    "lesson": 23
  },
  {
    "id": "HSK4-460",
    "hanzi": "吸引",
    "pinyin": "xī yǐn",
    "english": "to attract (interest, investment etc)",
    "level": "HSK 4",
    "lesson": 23
  },
  {
    "id": "HSK4-461",
    "hanzi": "洗衣机",
    "pinyin": "xǐ yī jī",
    "english": "washer, washing machine",
    "level": "HSK 4",
    "lesson": 24
  },
  {
    "id": "HSK4-462",
    "hanzi": "咸",
    "pinyin": "xián",
    "english": "salted, salty, stingy, miserly",
    "level": "HSK 4",
    "lesson": 24
  },
  {
    "id": "HSK4-463",
    "hanzi": "现代",
    "pinyin": "xiàn dài",
    "english": "modern times, modern age, modern era",
    "level": "HSK 4",
    "lesson": 24
  },
  {
    "id": "HSK4-464",
    "hanzi": "羡慕",
    "pinyin": "xiàn mù",
    "english": "to envy, to admire",
    "level": "HSK 4",
    "lesson": 24
  },
  {
    "id": "HSK4-465",
    "hanzi": "限制",
    "pinyin": "xiàn zhì",
    "english": "to restrict, to limit, to confine, restriction, limit",
    "level": "HSK 4",
    "lesson": 24
  },
  {
    "id": "HSK4-466",
    "hanzi": "香",
    "pinyin": "xiāng",
    "english": "fragrant, sweet smelling, aromatic, savory or appetizing, (to eat) with relish, (of sleep) sound, perfume or spice, joss or incense stick",
    "level": "HSK 4",
    "lesson": 24
  },
  {
    "id": "HSK4-467",
    "hanzi": "相反",
    "pinyin": "xiāng fǎn",
    "english": "opposite, contrary",
    "level": "HSK 4",
    "lesson": 24
  },
  {
    "id": "HSK4-468",
    "hanzi": "详细",
    "pinyin": "xiáng xì",
    "english": "detailed, in detail, minute",
    "level": "HSK 4",
    "lesson": 24
  },
  {
    "id": "HSK4-469",
    "hanzi": "响",
    "pinyin": "xiǎng",
    "english": "echo, sound, noise, to make a sound, to sound, to ring, loud, classifier for noises",
    "level": "HSK 4",
    "lesson": 24
  },
  {
    "id": "HSK4-470",
    "hanzi": "消息",
    "pinyin": "xiāo xi",
    "english": "news, information",
    "level": "HSK 4",
    "lesson": 24
  },
  {
    "id": "HSK4-471",
    "hanzi": "小说",
    "pinyin": "xiǎo shuō",
    "english": "novel, fiction, 部[bù]",
    "level": "HSK 4",
    "lesson": 24
  },
  {
    "id": "HSK4-472",
    "hanzi": "笑话",
    "pinyin": "xiào huà",
    "english": "joke, jest, to laugh at, to mock",
    "level": "HSK 4",
    "lesson": 24
  },
  {
    "id": "HSK4-473",
    "hanzi": "效果",
    "pinyin": "xiào guǒ",
    "english": "result, effect, quality",
    "level": "HSK 4",
    "lesson": 24
  },
  {
    "id": "HSK4-474",
    "hanzi": "心情",
    "pinyin": "xīn qíng",
    "english": "mood, frame of mind",
    "level": "HSK 4",
    "lesson": 24
  },
  {
    "id": "HSK4-475",
    "hanzi": "辛苦",
    "pinyin": "xīn kǔ",
    "english": "hard, exhausting, with much toil, thanks for your trouble",
    "level": "HSK 4",
    "lesson": 24
  },
  {
    "id": "HSK4-476",
    "hanzi": "信任",
    "pinyin": "xìn rèn",
    "english": "to trust, to have confidence in",
    "level": "HSK 4",
    "lesson": 24
  },
  {
    "id": "HSK4-477",
    "hanzi": "信心",
    "pinyin": "xìn xīn",
    "english": "confidence, faith (in sb or sth)",
    "level": "HSK 4",
    "lesson": 24
  },
  {
    "id": "HSK4-478",
    "hanzi": "信用卡",
    "pinyin": "xìn yòng kǎ",
    "english": "credit card",
    "level": "HSK 4",
    "lesson": 24
  },
  {
    "id": "HSK4-479",
    "hanzi": "兴奋",
    "pinyin": "xīng fèn",
    "english": "excited, excitement",
    "level": "HSK 4",
    "lesson": 24
  },
  {
    "id": "HSK4-480",
    "hanzi": "行",
    "pinyin": "xíng",
    "english": "to walk, to go, to travel, a visit, temporary, makeshift, current, in circulation, to do, to perform, capable, competent, effective, all right, OK!, will do",
    "level": "HSK 4",
    "lesson": 24
  },
  {
    "id": "HSK4-481",
    "hanzi": "醒",
    "pinyin": "xǐng",
    "english": "to wake up, to awaken, to be awake",
    "level": "HSK 4",
    "lesson": 25
  },
  {
    "id": "HSK4-482",
    "hanzi": "性别",
    "pinyin": "xìng bié",
    "english": "gender, sex, distinguishing between the sexes",
    "level": "HSK 4",
    "lesson": 25
  },
  {
    "id": "HSK4-483",
    "hanzi": "性格",
    "pinyin": "xìng gé",
    "english": "nature, disposition, temperament, character",
    "level": "HSK 4",
    "lesson": 25
  },
  {
    "id": "HSK4-484",
    "hanzi": "幸福",
    "pinyin": "xìng fú",
    "english": "happiness, happy, blessed",
    "level": "HSK 4",
    "lesson": 25
  },
  {
    "id": "HSK4-485",
    "hanzi": "修",
    "pinyin": "xiū",
    "english": "to decorate, to embellish, to repair, to build, to study, to write, to cultivate",
    "level": "HSK 4",
    "lesson": 25
  },
  {
    "id": "HSK4-486",
    "hanzi": "许多",
    "pinyin": "xǔ duō",
    "english": "many, a lot of, much",
    "level": "HSK 4",
    "lesson": 25
  },
  {
    "id": "HSK4-487",
    "hanzi": "血",
    "pinyin": "xuè",
    "english": "blood, informal colloquial and Taiwan pr. [xiě], also pr. [xuě], 片[piàn]",
    "level": "HSK 4",
    "lesson": 25
  },
  {
    "id": "HSK4-488",
    "hanzi": "压力",
    "pinyin": "yā lì",
    "english": "pressure",
    "level": "HSK 4",
    "lesson": 25
  },
  {
    "id": "HSK4-489",
    "hanzi": "牙膏",
    "pinyin": "yá gāo",
    "english": "toothpaste",
    "level": "HSK 4",
    "lesson": 25
  },
  {
    "id": "HSK4-490",
    "hanzi": "亚洲",
    "pinyin": "Yà zhōu",
    "english": "Asia, Asian",
    "level": "HSK 4",
    "lesson": 25
  },
  {
    "id": "HSK4-491",
    "hanzi": "呀",
    "pinyin": "ya",
    "english": "(particle equivalent to 啊 after a vowel, expressing surprise or doubt)",
    "level": "HSK 4",
    "lesson": 25
  },
  {
    "id": "HSK4-492",
    "hanzi": "盐",
    "pinyin": "yán",
    "english": "salt",
    "level": "HSK 4",
    "lesson": 25
  },
  {
    "id": "HSK4-493",
    "hanzi": "严格",
    "pinyin": "yán gé",
    "english": "strict, stringent, tight, rigorous",
    "level": "HSK 4",
    "lesson": 25
  },
  {
    "id": "HSK4-494",
    "hanzi": "严重",
    "pinyin": "yán zhòng",
    "english": "grave, serious, severe, critical",
    "level": "HSK 4",
    "lesson": 25
  },
  {
    "id": "HSK4-495",
    "hanzi": "研究生",
    "pinyin": "yán jiū shēng",
    "english": "graduate student, postgraduate student, research student",
    "level": "HSK 4",
    "lesson": 25
  },
  {
    "id": "HSK4-496",
    "hanzi": "演出",
    "pinyin": "yǎn chū",
    "english": "to act (in a play), to perform, to put on (a performance), performance, concert, show, 次[cì]",
    "level": "HSK 4",
    "lesson": 25
  },
  {
    "id": "HSK4-497",
    "hanzi": "演员",
    "pinyin": "yǎn yuán",
    "english": "actor or actress, performer, 位, 名[míng]",
    "level": "HSK 4",
    "lesson": 25
  },
  {
    "id": "HSK4-498",
    "hanzi": "阳光",
    "pinyin": "yáng guāng",
    "english": "sunshine",
    "level": "HSK 4",
    "lesson": 25
  },
  {
    "id": "HSK4-499",
    "hanzi": "养成",
    "pinyin": "yǎng chéng",
    "english": "to cultivate, to raise, to form (a habit), to acquire",
    "level": "HSK 4",
    "lesson": 25
  },
  {
    "id": "HSK4-500",
    "hanzi": "样子",
    "pinyin": "yàng zi",
    "english": "appearance, manner, pattern, model",
    "level": "HSK 4",
    "lesson": 25
  },
  {
    "id": "HSK4-501",
    "hanzi": "邀请",
    "pinyin": "yāo qǐng",
    "english": "to invite, invitation",
    "level": "HSK 4",
    "lesson": 26
  },
  {
    "id": "HSK4-502",
    "hanzi": "钥匙",
    "pinyin": "yào shi",
    "english": "key",
    "level": "HSK 4",
    "lesson": 26
  },
  {
    "id": "HSK4-503",
    "hanzi": "也许",
    "pinyin": "yě xǔ",
    "english": "perhaps, maybe",
    "level": "HSK 4",
    "lesson": 26
  },
  {
    "id": "HSK4-504",
    "hanzi": "页",
    "pinyin": "yè",
    "english": "page, leaf",
    "level": "HSK 4",
    "lesson": 26
  },
  {
    "id": "HSK4-505",
    "hanzi": "叶子",
    "pinyin": "yè zi",
    "english": "foliage, leaf",
    "level": "HSK 4",
    "lesson": 26
  },
  {
    "id": "HSK4-506",
    "hanzi": "一切",
    "pinyin": "yī qiè",
    "english": "everything, every, all",
    "level": "HSK 4",
    "lesson": 26
  },
  {
    "id": "HSK4-507",
    "hanzi": "以",
    "pinyin": "yǐ",
    "english": "to use, according to, so as to, by means of, in order to, by, with, because",
    "level": "HSK 4",
    "lesson": 26
  },
  {
    "id": "HSK4-508",
    "hanzi": "亿",
    "pinyin": "yì",
    "english": "100 million",
    "level": "HSK 4",
    "lesson": 26
  },
  {
    "id": "HSK4-509",
    "hanzi": "意见",
    "pinyin": "yì jiàn",
    "english": "idea, opinion, suggestion, objection, complaint, 條|条[tiáo]",
    "level": "HSK 4",
    "lesson": 26
  },
  {
    "id": "HSK4-510",
    "hanzi": "艺术",
    "pinyin": "yì shù",
    "english": "art",
    "level": "HSK 4",
    "lesson": 26
  },
  {
    "id": "HSK4-511",
    "hanzi": "因此",
    "pinyin": "yīn cǐ",
    "english": "thus, consequently, as a result",
    "level": "HSK 4",
    "lesson": 26
  },
  {
    "id": "HSK4-512",
    "hanzi": "引起",
    "pinyin": "yǐn qǐ",
    "english": "to give rise to, to lead to, to cause, to arouse",
    "level": "HSK 4",
    "lesson": 26
  },
  {
    "id": "HSK4-513",
    "hanzi": "饮料",
    "pinyin": "yǐn liào",
    "english": "drink, beverage",
    "level": "HSK 4",
    "lesson": 26
  },
  {
    "id": "HSK4-514",
    "hanzi": "印象",
    "pinyin": "yìn xiàng",
    "english": "impression",
    "level": "HSK 4",
    "lesson": 26
  },
  {
    "id": "HSK4-515",
    "hanzi": "赢",
    "pinyin": "yíng",
    "english": "to beat, to win, to profit",
    "level": "HSK 4",
    "lesson": 26
  },
  {
    "id": "HSK4-516",
    "hanzi": "硬",
    "pinyin": "yìng",
    "english": "hard, stiff, strong, firm, resolutely, doggedly, good (quality), able (person)",
    "level": "HSK 4",
    "lesson": 26
  },
  {
    "id": "HSK4-517",
    "hanzi": "勇敢",
    "pinyin": "yǒng gǎn",
    "english": "brave, courageous",
    "level": "HSK 4",
    "lesson": 26
  },
  {
    "id": "HSK4-518",
    "hanzi": "永远",
    "pinyin": "yǒng yuǎn",
    "english": "forever, eternal",
    "level": "HSK 4",
    "lesson": 26
  },
  {
    "id": "HSK4-519",
    "hanzi": "优点",
    "pinyin": "yōu diǎn",
    "english": "merit, benefit, strong point, advantage",
    "level": "HSK 4",
    "lesson": 26
  },
  {
    "id": "HSK4-520",
    "hanzi": "优秀",
    "pinyin": "yōu xiù",
    "english": "outstanding, excellent",
    "level": "HSK 4",
    "lesson": 26
  },
  {
    "id": "HSK4-521",
    "hanzi": "幽默",
    "pinyin": "yōu mò",
    "english": "(loanword) humor, humorous",
    "level": "HSK 4",
    "lesson": 27
  },
  {
    "id": "HSK4-522",
    "hanzi": "由",
    "pinyin": "yóu",
    "english": "to follow, from, it is for...to, reason, cause, because of, due to, to, to leave it (to sb), by (introduces passive verb)",
    "level": "HSK 4",
    "lesson": 27
  },
  {
    "id": "HSK4-523",
    "hanzi": "由于",
    "pinyin": "yóu yú",
    "english": "due to, as a result of, thanks to, owing to, since, because",
    "level": "HSK 4",
    "lesson": 27
  },
  {
    "id": "HSK4-524",
    "hanzi": "尤其",
    "pinyin": "yóu qí",
    "english": "especially, particularly",
    "level": "HSK 4",
    "lesson": 27
  },
  {
    "id": "HSK4-525",
    "hanzi": "有趣",
    "pinyin": "yǒu qù",
    "english": "interesting, fascinating, amusing",
    "level": "HSK 4",
    "lesson": 27
  },
  {
    "id": "HSK4-526",
    "hanzi": "友好",
    "pinyin": "yǒu hǎo",
    "english": "friendly, amicable, close friend",
    "level": "HSK 4",
    "lesson": 27
  },
  {
    "id": "HSK4-527",
    "hanzi": "友谊",
    "pinyin": "yǒu yì",
    "english": "companionship, fellowship, friendship",
    "level": "HSK 4",
    "lesson": 27
  },
  {
    "id": "HSK4-528",
    "hanzi": "愉快",
    "pinyin": "yú kuài",
    "english": "cheerful, cheerily, delightful, pleasant, pleasantly, pleasing, happy, delighted",
    "level": "HSK 4",
    "lesson": 27
  },
  {
    "id": "HSK4-529",
    "hanzi": "于是",
    "pinyin": "yú shì",
    "english": "thereupon, as a result, consequently, thus, hence",
    "level": "HSK 4",
    "lesson": 27
  },
  {
    "id": "HSK4-530",
    "hanzi": "与",
    "pinyin": "yǔ",
    "english": "and, to give, together with",
    "level": "HSK 4",
    "lesson": 27
  },
  {
    "id": "HSK4-531",
    "hanzi": "语法",
    "pinyin": "yǔ fǎ",
    "english": "grammar",
    "level": "HSK 4",
    "lesson": 27
  },
  {
    "id": "HSK4-532",
    "hanzi": "语言",
    "pinyin": "yǔ yán",
    "english": "language, 種|种[zhǒng]",
    "level": "HSK 4",
    "lesson": 27
  },
  {
    "id": "HSK4-533",
    "hanzi": "羽毛球",
    "pinyin": "yǔ máo qiú",
    "english": "shuttlecock, badminton",
    "level": "HSK 4",
    "lesson": 27
  },
  {
    "id": "HSK4-534",
    "hanzi": "预习",
    "pinyin": "yù xí",
    "english": "to prepare a lesson",
    "level": "HSK 4",
    "lesson": 27
  },
  {
    "id": "HSK4-535",
    "hanzi": "圆",
    "pinyin": "yuán",
    "english": "circle, round, circular, spherical, (of the moon) full, unit of Chinese currency (Yuan), tactful, to justify",
    "level": "HSK 4",
    "lesson": 27
  },
  {
    "id": "HSK4-536",
    "hanzi": "原来",
    "pinyin": "yuán lái",
    "english": "original, former, originally, formerly, at first, so, actually, as it turns out",
    "level": "HSK 4",
    "lesson": 27
  },
  {
    "id": "HSK4-537",
    "hanzi": "原谅",
    "pinyin": "yuán liàng",
    "english": "to excuse, to forgive, to pardon",
    "level": "HSK 4",
    "lesson": 27
  },
  {
    "id": "HSK4-538",
    "hanzi": "原因",
    "pinyin": "yuán yīn",
    "english": "cause, origin, root cause, reason",
    "level": "HSK 4",
    "lesson": 27
  },
  {
    "id": "HSK4-539",
    "hanzi": "约会",
    "pinyin": "yuē huì",
    "english": "appointment, engagement, date, 個|个[gè], to arrange to meet",
    "level": "HSK 4",
    "lesson": 27
  },
  {
    "id": "HSK4-540",
    "hanzi": "阅读",
    "pinyin": "yuè dú",
    "english": "to read, reading",
    "level": "HSK 4",
    "lesson": 27
  },
  {
    "id": "HSK4-541",
    "hanzi": "允许",
    "pinyin": "yǔn xǔ",
    "english": "to permit, to allow",
    "level": "HSK 4",
    "lesson": 28
  },
  {
    "id": "HSK4-542",
    "hanzi": "杂志",
    "pinyin": "zá zhì",
    "english": "magazine, 份, 期[qī]",
    "level": "HSK 4",
    "lesson": 28
  },
  {
    "id": "HSK4-543",
    "hanzi": "咱们",
    "pinyin": "zán men",
    "english": "we or us (including both the speaker and the person(s) spoken to), I or me, you",
    "level": "HSK 4",
    "lesson": 28
  },
  {
    "id": "HSK4-544",
    "hanzi": "暂时",
    "pinyin": "zàn shí",
    "english": "temporary, provisional, for the time being",
    "level": "HSK 4",
    "lesson": 28
  },
  {
    "id": "HSK4-545",
    "hanzi": "脏",
    "pinyin": "zāng",
    "english": "dirty, filthy",
    "level": "HSK 4",
    "lesson": 28
  },
  {
    "id": "HSK4-546",
    "hanzi": "责任",
    "pinyin": "zé rèn",
    "english": "responsibility, blame, duty",
    "level": "HSK 4",
    "lesson": 28
  },
  {
    "id": "HSK4-547",
    "hanzi": "增加",
    "pinyin": "zēng jiā",
    "english": "to raise, to increase",
    "level": "HSK 4",
    "lesson": 28
  },
  {
    "id": "HSK4-548",
    "hanzi": "增长",
    "pinyin": "zēng zhǎng",
    "english": "to grow, to increase",
    "level": "HSK 4",
    "lesson": 28
  },
  {
    "id": "HSK4-549",
    "hanzi": "窄",
    "pinyin": "zhǎi",
    "english": "narrow, narrow-minded, badly off",
    "level": "HSK 4",
    "lesson": 28
  },
  {
    "id": "HSK4-550",
    "hanzi": "招聘",
    "pinyin": "zhāo pìn",
    "english": "recruitment, to invite applications for a job",
    "level": "HSK 4",
    "lesson": 28
  },
  {
    "id": "HSK4-551",
    "hanzi": "真正",
    "pinyin": "zhēn zhèng",
    "english": "genuine, real, true, genuinely",
    "level": "HSK 4",
    "lesson": 28
  },
  {
    "id": "HSK4-552",
    "hanzi": "整理",
    "pinyin": "zhěng lǐ",
    "english": "to arrange, to tidy up, to sort out, to straighten out, to list systematically, to collate (data, files), to pack (luggage)",
    "level": "HSK 4",
    "lesson": 28
  },
  {
    "id": "HSK4-553",
    "hanzi": "整齐",
    "pinyin": "zhěng qí",
    "english": "orderly, neat, even, tidy",
    "level": "HSK 4",
    "lesson": 28
  },
  {
    "id": "HSK4-554",
    "hanzi": "正常",
    "pinyin": "zhèng cháng",
    "english": "regular, normal, ordinary",
    "level": "HSK 4",
    "lesson": 28
  },
  {
    "id": "HSK4-555",
    "hanzi": "正好",
    "pinyin": "zhèng hǎo",
    "english": "just (in time), just right, just enough, to happen to, to chance to, by chance, it just so happens that",
    "level": "HSK 4",
    "lesson": 28
  },
  {
    "id": "HSK4-556",
    "hanzi": "正确",
    "pinyin": "zhèng què",
    "english": "correct, proper",
    "level": "HSK 4",
    "lesson": 28
  },
  {
    "id": "HSK4-557",
    "hanzi": "正式",
    "pinyin": "zhèng shì",
    "english": "formal, official",
    "level": "HSK 4",
    "lesson": 28
  },
  {
    "id": "HSK4-558",
    "hanzi": "证明",
    "pinyin": "zhèng míng",
    "english": "proof, certificate, identification, testimonial, to prove, to testify, to confirm the truth of",
    "level": "HSK 4",
    "lesson": 28
  },
  {
    "id": "HSK4-559",
    "hanzi": "之",
    "pinyin": "zhī",
    "english": "(possessive particle, literary equivalent of 的), him, her, it",
    "level": "HSK 4",
    "lesson": 28
  },
  {
    "id": "HSK4-560",
    "hanzi": "支持",
    "pinyin": "zhī chí",
    "english": "to be in favor of, to support, to back, support, backing, to stand by",
    "level": "HSK 4",
    "lesson": 28
  },
  {
    "id": "HSK4-561",
    "hanzi": "知识",
    "pinyin": "zhī shi",
    "english": "intellectual, knowledge-related, knowledge",
    "level": "HSK 4",
    "lesson": 29
  },
  {
    "id": "HSK4-562",
    "hanzi": "直接",
    "pinyin": "zhí jiē",
    "english": "direct, opposite: indirect 間接|间接, immediate, directly, straightforward",
    "level": "HSK 4",
    "lesson": 29
  },
  {
    "id": "HSK4-563",
    "hanzi": "值得",
    "pinyin": "zhí de",
    "english": "to be worth, to deserve",
    "level": "HSK 4",
    "lesson": 29
  },
  {
    "id": "HSK4-564",
    "hanzi": "职业",
    "pinyin": "zhí yè",
    "english": "occupation, profession, vocation, professional",
    "level": "HSK 4",
    "lesson": 29
  },
  {
    "id": "HSK4-565",
    "hanzi": "植物",
    "pinyin": "zhí wù",
    "english": "botanical, plant, vegetation",
    "level": "HSK 4",
    "lesson": 29
  },
  {
    "id": "HSK4-566",
    "hanzi": "指",
    "pinyin": "zhǐ",
    "english": "finger, to point at or to, to indicate or refer to, to depend on, to count on, (of hair) to stand on end",
    "level": "HSK 4",
    "lesson": 29
  },
  {
    "id": "HSK4-567",
    "hanzi": "只好",
    "pinyin": "zhǐ hǎo",
    "english": "without any better option, to have to, to be forced to",
    "level": "HSK 4",
    "lesson": 29
  },
  {
    "id": "HSK4-568",
    "hanzi": "只要",
    "pinyin": "zhǐ yào",
    "english": "if only, so long as",
    "level": "HSK 4",
    "lesson": 29
  },
  {
    "id": "HSK4-569",
    "hanzi": "制造",
    "pinyin": "zhì zào",
    "english": "to manufacture, to make",
    "level": "HSK 4",
    "lesson": 29
  },
  {
    "id": "HSK4-570",
    "hanzi": "至少",
    "pinyin": "zhì shǎo",
    "english": "at least, (to say the) least",
    "level": "HSK 4",
    "lesson": 29
  },
  {
    "id": "HSK4-571",
    "hanzi": "质量",
    "pinyin": "zhì liàng",
    "english": "quality, mass (in physics)",
    "level": "HSK 4",
    "lesson": 29
  },
  {
    "id": "HSK4-572",
    "hanzi": "中文",
    "pinyin": "Zhōng wén",
    "english": "Chinese, Chinese written language, Chinese writing",
    "level": "HSK 4",
    "lesson": 29
  },
  {
    "id": "HSK4-573",
    "hanzi": "重点",
    "pinyin": "zhòng diǎn",
    "english": "important point, main point, focus, key (project etc), to focus on, to put the emphasis on",
    "level": "HSK 4",
    "lesson": 29
  },
  {
    "id": "HSK4-574",
    "hanzi": "重视",
    "pinyin": "zhòng shì",
    "english": "to attach importance to sth, to value",
    "level": "HSK 4",
    "lesson": 29
  },
  {
    "id": "HSK4-575",
    "hanzi": "周围",
    "pinyin": "zhōu wéi",
    "english": "surroundings, environment, to encompass",
    "level": "HSK 4",
    "lesson": 29
  },
  {
    "id": "HSK4-576",
    "hanzi": "猪",
    "pinyin": "zhū",
    "english": "hog, pig, swine, 頭|头[tóu]",
    "level": "HSK 4",
    "lesson": 29
  },
  {
    "id": "HSK4-577",
    "hanzi": "逐渐",
    "pinyin": "zhú jiàn",
    "english": "gradually",
    "level": "HSK 4",
    "lesson": 29
  },
  {
    "id": "HSK4-578",
    "hanzi": "主动",
    "pinyin": "zhǔ dòng",
    "english": "to take the initiative, to do sth of one's own accord, spontaneous, active, opposite: passive 被動|被动[bèi dòng], drive (of gears and shafts etc)",
    "level": "HSK 4",
    "lesson": 29
  },
  {
    "id": "HSK4-579",
    "hanzi": "主意",
    "pinyin": "zhǔ yi",
    "english": "plan, idea, decision",
    "level": "HSK 4",
    "lesson": 29
  },
  {
    "id": "HSK4-580",
    "hanzi": "祝贺",
    "pinyin": "zhù hè",
    "english": "to congratulate, congratulations",
    "level": "HSK 4",
    "lesson": 29
  },
  {
    "id": "HSK4-581",
    "hanzi": "著名",
    "pinyin": "zhù míng",
    "english": "famous, noted, well-known, celebrated",
    "level": "HSK 4",
    "lesson": 30
  },
  {
    "id": "HSK4-582",
    "hanzi": "专门",
    "pinyin": "zhuān mén",
    "english": "specialist, specialized, customized",
    "level": "HSK 4",
    "lesson": 30
  },
  {
    "id": "HSK4-583",
    "hanzi": "专业",
    "pinyin": "zhuān yè",
    "english": "specialty, specialized field, main field of study (at university), major, 個|个[gè], professional",
    "level": "HSK 4",
    "lesson": 30
  },
  {
    "id": "HSK4-584",
    "hanzi": "赚",
    "pinyin": "zhuàn",
    "english": "to earn, to make a profit",
    "level": "HSK 4",
    "lesson": 30
  },
  {
    "id": "HSK4-585",
    "hanzi": "撞",
    "pinyin": "zhuàng",
    "english": "to hit, to strike, to meet by accident, to run into, to bump against, to bump into",
    "level": "HSK 4",
    "lesson": 30
  },
  {
    "id": "HSK4-586",
    "hanzi": "准确",
    "pinyin": "zhǔn què",
    "english": "accurate, exact, precise",
    "level": "HSK 4",
    "lesson": 30
  },
  {
    "id": "HSK4-587",
    "hanzi": "准时",
    "pinyin": "zhǔn shí",
    "english": "on time, punctual, on schedule",
    "level": "HSK 4",
    "lesson": 30
  },
  {
    "id": "HSK4-588",
    "hanzi": "仔细",
    "pinyin": "zǐ xì",
    "english": "careful, attentive, cautious",
    "level": "HSK 4",
    "lesson": 30
  },
  {
    "id": "HSK4-589",
    "hanzi": "自然",
    "pinyin": "zì rán",
    "english": "nature, natural, naturally",
    "level": "HSK 4",
    "lesson": 30
  },
  {
    "id": "HSK4-590",
    "hanzi": "总结",
    "pinyin": "zǒng jié",
    "english": "to sum up, to conclude, summary, résumé",
    "level": "HSK 4",
    "lesson": 30
  },
  {
    "id": "HSK4-591",
    "hanzi": "租",
    "pinyin": "zū",
    "english": "to hire, to rent, to charter, to rent out, to lease out, rent, land tax",
    "level": "HSK 4",
    "lesson": 30
  },
  {
    "id": "HSK4-592",
    "hanzi": "组成",
    "pinyin": "zǔ chéng",
    "english": "to form, to make up, to constitute",
    "level": "HSK 4",
    "lesson": 30
  },
  {
    "id": "HSK4-593",
    "hanzi": "组织",
    "pinyin": "zǔ zhī",
    "english": "to organize, organization, organized system, nerve, tissue",
    "level": "HSK 4",
    "lesson": 30
  },
  {
    "id": "HSK4-594",
    "hanzi": "嘴",
    "pinyin": "zuǐ",
    "english": "mouth, beak, nozzle, spout (of teapot etc), 個|个[gè]",
    "level": "HSK 4",
    "lesson": 30
  },
  {
    "id": "HSK4-595",
    "hanzi": "最好",
    "pinyin": "zuì hǎo",
    "english": "best, (you) had better (do what we suggest)",
    "level": "HSK 4",
    "lesson": 30
  },
  {
    "id": "HSK4-596",
    "hanzi": "最后",
    "pinyin": "zuì hòu",
    "english": "final, last, finally, ultimate",
    "level": "HSK 4",
    "lesson": 30
  },
  {
    "id": "HSK4-597",
    "hanzi": "尊重",
    "pinyin": "zūn zhòng",
    "english": "to esteem, to respect, to honor, to value, eminent, serious, proper",
    "level": "HSK 4",
    "lesson": 30
  },
  {
    "id": "HSK4-598",
    "hanzi": "做生意",
    "pinyin": "zuò shēng yì",
    "english": "to do business",
    "level": "HSK 4",
    "lesson": 30
  },
  {
    "id": "HSK4-599",
    "hanzi": "座",
    "pinyin": "zuò",
    "english": "seat, base, stand, classifier for buildings, mountains and similar immovable objects",
    "level": "HSK 4",
    "lesson": 30
  },
  {
    "id": "HSK4-600",
    "hanzi": "座位",
    "pinyin": "zuò wèi",
    "english": "seat",
    "level": "HSK 4",
    "lesson": 30
  },
  {
    "id": "HSK4-601",
    "hanzi": "作者",
    "pinyin": "zuò zhě",
    "english": "author, writer",
    "level": "HSK 4",
    "lesson": 31
  },
  {
    "id": "HSK5-1",
    "hanzi": "唉",
    "pinyin": "āi",
    "english": "interjection or grunt of agreement or recognition (e.g. yes, it's me!), to sigh",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-2",
    "hanzi": "爱护",
    "pinyin": "ài hù",
    "english": "to cherish, to treasure, to take care of, to love and protect",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-3",
    "hanzi": "爱惜",
    "pinyin": "ài xī",
    "english": "to cherish, to treasure, to use sparingly",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-4",
    "hanzi": "爱心",
    "pinyin": "ài xīn",
    "english": "compassion",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-5",
    "hanzi": "安慰",
    "pinyin": "ān wèi",
    "english": "to comfort, to console",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-6",
    "hanzi": "安装",
    "pinyin": "ān zhuāng",
    "english": "to install, to erect, to fix, to mount, installation",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-7",
    "hanzi": "岸",
    "pinyin": "àn",
    "english": "bank, shore, beach, coast",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-8",
    "hanzi": "把握",
    "pinyin": "bǎ wò",
    "english": "to grasp (also fig.), to seize, to hold, assurance, certainty, sure (of the outcome)",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-9",
    "hanzi": "摆",
    "pinyin": "bǎi",
    "english": "to arrange, to exhibit, to move to and fro, a pendulum",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-10",
    "hanzi": "班主任",
    "pinyin": "bān zhǔ rèn",
    "english": "teacher in charge of a class",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-11",
    "hanzi": "办理",
    "pinyin": "bàn lǐ",
    "english": "to handle, to transact, to conduct",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-12",
    "hanzi": "棒",
    "pinyin": "bàng",
    "english": "a stick, club or cudgel, smart, capable, strong, wonderful, classifier for legs of a relay race",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-13",
    "hanzi": "傍晚",
    "pinyin": "bàng wǎn",
    "english": "in the evening, when night falls, towards evening, at night fall, at dusk",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-14",
    "hanzi": "包裹",
    "pinyin": "bāo guǒ",
    "english": "wrap up, bind up, bundle, parcel, package",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-15",
    "hanzi": "包含",
    "pinyin": "bāo hán",
    "english": "to contain, to embody, to include",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-16",
    "hanzi": "包子",
    "pinyin": "bāo zi",
    "english": "steamed stuffed bun",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-17",
    "hanzi": "薄",
    "pinyin": "báo",
    "english": "thin, cold in manner, indifferent, weak, light, infertile",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-18",
    "hanzi": "宝贝",
    "pinyin": "bǎo bèi",
    "english": "treasured object, treasure, darling, baby, cowry, good-for-nothing or queer character",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-19",
    "hanzi": "宝贵",
    "pinyin": "bǎo guì",
    "english": "valuable, precious, to value, to treasure, to set store by",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-20",
    "hanzi": "保持",
    "pinyin": "bǎo chí",
    "english": "to keep, to maintain, to hold, to preserve",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-21",
    "hanzi": "保存",
    "pinyin": "bǎo cún",
    "english": "to conserve, to preserve, to keep, to save (a file etc) (computing)",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-22",
    "hanzi": "保留",
    "pinyin": "bǎo liú",
    "english": "to retain, to continue to have, to preserve, to maintain, to reserve, reservations, to hold back (approval or acceptance)",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-23",
    "hanzi": "保险",
    "pinyin": "bǎo xiǎn",
    "english": "insurance, to insure, safe, secure, be sure, be bound to",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-24",
    "hanzi": "报告",
    "pinyin": "bào gào",
    "english": "to inform, to report, to make known, speech, talk, lecture, 份, 個|个, 通[tòng]",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-25",
    "hanzi": "悲观",
    "pinyin": "bēi guān",
    "english": "pessimistic",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-26",
    "hanzi": "被子",
    "pinyin": "bèi zi",
    "english": "quilt",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-27",
    "hanzi": "背",
    "pinyin": "bèi",
    "english": "the back of a body or object, to turn one's back, to hide something from, to learn by heart, to recite from memory, unlucky (slang), hard of hearing",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-28",
    "hanzi": "背景",
    "pinyin": "bèi jǐng",
    "english": "background, backdrop, context",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-29",
    "hanzi": "本科",
    "pinyin": "běn kē",
    "english": "undergraduate course, undergraduate (adjective)",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-30",
    "hanzi": "本领",
    "pinyin": "běn lǐng",
    "english": "skill, ability, capability, 個|个[gè]",
    "level": "HSK 5",
    "lesson": 1
  },
  {
    "id": "HSK5-31",
    "hanzi": "本质",
    "pinyin": "běn zhì",
    "english": "essence, nature, innate character, intrinsic quality",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-32",
    "hanzi": "比例",
    "pinyin": "bǐ lì",
    "english": "proportion, scale",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-33",
    "hanzi": "比如",
    "pinyin": "bǐ rú",
    "english": "for example, for instance, such as",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-34",
    "hanzi": "彼此",
    "pinyin": "bǐ cǐ",
    "english": "each other, one another",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-35",
    "hanzi": "必然",
    "pinyin": "bì rán",
    "english": "inevitable, certain, necessity",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-36",
    "hanzi": "必需",
    "pinyin": "bì xū",
    "english": "to need, to require, essential, indispensable",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-37",
    "hanzi": "必要",
    "pinyin": "bì yào",
    "english": "necessary, essential, indispensable, required",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-38",
    "hanzi": "毕竟",
    "pinyin": "bì jìng",
    "english": "after all, all in all, when all is said and done, in the final analysis",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-39",
    "hanzi": "避免",
    "pinyin": "bì miǎn",
    "english": "to avert, to prevent, to avoid, to refrain from",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-40",
    "hanzi": "鞭炮",
    "pinyin": "biān pào",
    "english": "firecrackers, a string of small firecrackers",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-41",
    "hanzi": "编辑",
    "pinyin": "biān jí",
    "english": "to edit, to compile, editor, compiler",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-42",
    "hanzi": "便",
    "pinyin": "biàn",
    "english": "ordinary, plain, convenient, as convenient, when the chance arises, handy, easy, informal, simple, so, thus, to relieve oneself, to urinate, to defecate, equivalent to 就: then, in that case, even if, soon afterwards",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-43",
    "hanzi": "辩论",
    "pinyin": "biàn lùn",
    "english": "debate, argument, to argue over, 次[cì]",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-44",
    "hanzi": "标点",
    "pinyin": "biāo diǎn",
    "english": "punctuation, a punctuation mark, to punctuate",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-45",
    "hanzi": "标志",
    "pinyin": "biāo zhì",
    "english": "sign, mark, symbol, to symbolize, to indicate, to mark",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-46",
    "hanzi": "表面",
    "pinyin": "biǎo miàn",
    "english": "surface, face, outside, appearance",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-47",
    "hanzi": "表明",
    "pinyin": "biǎo míng",
    "english": "to make clear, to make known, to state clearly, to indicate, known",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-48",
    "hanzi": "表情",
    "pinyin": "biǎo qíng",
    "english": "(facial) expression, to express one's feelings, expression",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-49",
    "hanzi": "表现",
    "pinyin": "biǎo xiàn",
    "english": "to show, to show off, to display, to manifest, expression, manifestation, show, display, performance (at work etc), behavior",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-50",
    "hanzi": "丙",
    "pinyin": "bǐng",
    "english": "third of 10 heavenly stems 十天干, third in order, letter \"C\" or roman \"III\" in list \"A, B, C\", or \"I, II, III\" etc, propyl",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-51",
    "hanzi": "病毒",
    "pinyin": "bìng dú",
    "english": "virus",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-52",
    "hanzi": "玻璃",
    "pinyin": "bō li",
    "english": "glass, nylon, plastic, 塊|块[kuài]",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-53",
    "hanzi": "博物馆",
    "pinyin": "bó wù guǎn",
    "english": "museum",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-54",
    "hanzi": "脖子",
    "pinyin": "bó zi",
    "english": "neck",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-55",
    "hanzi": "不必",
    "pinyin": "bù bì",
    "english": "need not, does not have to, not necessarily",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-56",
    "hanzi": "不断",
    "pinyin": "bù duàn",
    "english": "unceasing, uninterrupted, continuous, constant",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-57",
    "hanzi": "不见得",
    "pinyin": "bù jiàn de",
    "english": "not necessarily, not likely",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-58",
    "hanzi": "不耐烦",
    "pinyin": "bù nài fán",
    "english": "impatience, impatient",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-59",
    "hanzi": "不要紧",
    "pinyin": "bù yào jǐn",
    "english": "unimportant, not serious, it doesn't matter, never mind, it looks all right, but",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-60",
    "hanzi": "补充",
    "pinyin": "bǔ chōng",
    "english": "to replenish, to supplement, to complement, additional, supplementary",
    "level": "HSK 5",
    "lesson": 2
  },
  {
    "id": "HSK5-61",
    "hanzi": "不安",
    "pinyin": "bù ān",
    "english": "unpeaceful, unstable, uneasy, disturbed, restless, worried",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-62",
    "hanzi": "不得了",
    "pinyin": "bù dé liǎo",
    "english": "desperately serious, disastrous, extremely, exceedingly",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-63",
    "hanzi": "不好意思",
    "pinyin": "bù hǎo yì si",
    "english": "to feel embarrassed, to find it embarrassing, to be sorry (for inconveniencing sb)",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-64",
    "hanzi": "不免",
    "pinyin": "bù miǎn",
    "english": "inevitably",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-65",
    "hanzi": "不然",
    "pinyin": "bù rán",
    "english": "not so, no, or else, otherwise, if not",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-66",
    "hanzi": "不如",
    "pinyin": "bù rú",
    "english": "not equal to, not as good as, inferior to, it would be better to",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-67",
    "hanzi": "不足",
    "pinyin": "bù zú",
    "english": "insufficient, lacking, deficiency, not enough, inadequate, not worth, cannot, should not",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-68",
    "hanzi": "布",
    "pinyin": "bù",
    "english": "cloth, to declare, to announce, to spread, to make known",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-69",
    "hanzi": "步骤",
    "pinyin": "bù zhòu",
    "english": "procedure, step",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-70",
    "hanzi": "部门",
    "pinyin": "bù mén",
    "english": "department, branch, section, division",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-71",
    "hanzi": "财产",
    "pinyin": "cái chǎn",
    "english": "property",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-72",
    "hanzi": "踩",
    "pinyin": "cǎi",
    "english": "to step on, to tread, to stamp, to press a pedal, to pedal (a bike)",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-73",
    "hanzi": "采访",
    "pinyin": "cǎi fǎng",
    "english": "to interview, to gather news, to hunt for and collect, to cover",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-74",
    "hanzi": "采取",
    "pinyin": "cǎi qǔ",
    "english": "to adopt or carry out (measures, policies, course of action), to take",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-75",
    "hanzi": "彩虹",
    "pinyin": "cǎi hóng",
    "english": "rainbow",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-76",
    "hanzi": "参考",
    "pinyin": "cān kǎo",
    "english": "consultation, reference, to consult, to refer",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-77",
    "hanzi": "参与",
    "pinyin": "cān yù",
    "english": "to participate (in sth)",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-78",
    "hanzi": "餐厅",
    "pinyin": "cān tīng",
    "english": "dining hall, dining room, restaurant, 家[jiā]",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-79",
    "hanzi": "残疾",
    "pinyin": "cán jí",
    "english": "disabled, handicapped, deformity on a person or animal",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-80",
    "hanzi": "惭愧",
    "pinyin": "cán kuì",
    "english": "ashamed",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-81",
    "hanzi": "操场",
    "pinyin": "cāo chǎng",
    "english": "playground, sports field, drill ground",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-82",
    "hanzi": "操心",
    "pinyin": "cāo xīn",
    "english": "to worry about",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-83",
    "hanzi": "册",
    "pinyin": "cè",
    "english": "book, booklet, classifier for books",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-84",
    "hanzi": "测验",
    "pinyin": "cè yàn",
    "english": "test, to test, 個|个[gè]",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-85",
    "hanzi": "厕所",
    "pinyin": "cè suǒ",
    "english": "toilet, lavatory, 處|处[chù]",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-86",
    "hanzi": "曾经",
    "pinyin": "céng jīng",
    "english": "once, already, former, previously, ever, (past tense marker used before verb or clause)",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-87",
    "hanzi": "插",
    "pinyin": "chā",
    "english": "to insert, stick in, pierce, to take part in, to interfere, to interpose",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-88",
    "hanzi": "差别",
    "pinyin": "chā bié",
    "english": "difference, distinction, diversity, disparity",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-89",
    "hanzi": "叉子",
    "pinyin": "chā zi",
    "english": "fork",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-90",
    "hanzi": "拆",
    "pinyin": "chāi",
    "english": "to tear open, to tear down, to tear apart, to open",
    "level": "HSK 5",
    "lesson": 3
  },
  {
    "id": "HSK5-91",
    "hanzi": "产品",
    "pinyin": "chǎn pǐn",
    "english": "goods, merchandise, product",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-92",
    "hanzi": "产生",
    "pinyin": "chǎn shēng",
    "english": "to arise, to come into being, to come about, to give rise to, to bring into being, to bring about, to produce, to engender, to generate, to appear, appearance, emergence, generation, production, yield",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-93",
    "hanzi": "长途",
    "pinyin": "cháng tú",
    "english": "long distance",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-94",
    "hanzi": "常识",
    "pinyin": "cháng shí",
    "english": "common sense, general knowledge",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-95",
    "hanzi": "抄",
    "pinyin": "chāo",
    "english": "to make a copy, to plagiarize, to search and seize, to raid, to grab, to go off with, to take a shortcut, to make a turning move, to fold one's arms",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-96",
    "hanzi": "朝",
    "pinyin": "cháo",
    "english": "imperial or royal court, government, dynasty, reign of a sovereign or emperor, court or assembly held by a sovereign or emperor, to make a pilgrimage to, facing, towards",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-97",
    "hanzi": "朝代",
    "pinyin": "cháo dài",
    "english": "dynasty, reign (of a king)",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-98",
    "hanzi": "炒",
    "pinyin": "chǎo",
    "english": "to sauté, to stir-fry, to speculate, to hype, to fire (sb)",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-99",
    "hanzi": "吵架",
    "pinyin": "chǎo jià",
    "english": "to quarrel, to have a row, quarrel",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-100",
    "hanzi": "车库",
    "pinyin": "chē kù",
    "english": "garage",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-101",
    "hanzi": "车厢",
    "pinyin": "chē xiāng",
    "english": "carriage",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-102",
    "hanzi": "彻底",
    "pinyin": "chè dǐ",
    "english": "thorough, thoroughly, complete",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-103",
    "hanzi": "沉默",
    "pinyin": "chén mò",
    "english": "taciturn, uncommunicative, silent",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-104",
    "hanzi": "趁",
    "pinyin": "chèn",
    "english": "to avail oneself of, to take advantage of",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-105",
    "hanzi": "称",
    "pinyin": "chēng",
    "english": "to weigh, to state, to name, name, appellation, to praise",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-106",
    "hanzi": "称呼",
    "pinyin": "chēng hu",
    "english": "to call, to address as, appellation",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-107",
    "hanzi": "称赞",
    "pinyin": "chēng zàn",
    "english": "to praise, to acclaim, to commend, to compliment",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-108",
    "hanzi": "乘",
    "pinyin": "chéng",
    "english": "to ride, to mount, to make use of, to avail oneself of, to take advantage of, to multiply (mathematics), Buddhist sect or creed",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-109",
    "hanzi": "承担",
    "pinyin": "chéng dān",
    "english": "to undertake, to assume (responsibility etc)",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-110",
    "hanzi": "承认",
    "pinyin": "chéng rèn",
    "english": "to admit, to concede, to recognize, recognition (diplomatic, artistic etc), to acknowledge",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-111",
    "hanzi": "承受",
    "pinyin": "chéng shòu",
    "english": "to bear, to support, to inherit",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-112",
    "hanzi": "成分",
    "pinyin": "chéng fèn",
    "english": "composition, make-up, ingredient, element, component, one's social status",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-113",
    "hanzi": "成果",
    "pinyin": "chéng guǒ",
    "english": "result, achievement, gain, profit",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-114",
    "hanzi": "成就",
    "pinyin": "chéng jiù",
    "english": "accomplishment, success, attain a result, achievement",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-115",
    "hanzi": "成立",
    "pinyin": "chéng lì",
    "english": "to establish, to set up, to be tenable, to hold water",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-116",
    "hanzi": "成语",
    "pinyin": "chéng yǔ",
    "english": "Chinese set expression, often made up of 4 characters or two couplets of 4 characters each, often alluding to a story or historical quotation, idiom; proverb; saying; adage; set expression, 本, 句[jù]",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-117",
    "hanzi": "成长",
    "pinyin": "chéng zhǎng",
    "english": "to mature, to grow, growth",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-118",
    "hanzi": "程度",
    "pinyin": "chéng dù",
    "english": "degree (level or extent), level",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-119",
    "hanzi": "程序",
    "pinyin": "chéng xù",
    "english": "procedures, sequence, order, computer program",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-120",
    "hanzi": "诚恳",
    "pinyin": "chéng kěn",
    "english": "sincere, honest, cordial",
    "level": "HSK 5",
    "lesson": 4
  },
  {
    "id": "HSK5-121",
    "hanzi": "吃亏",
    "pinyin": "chī kuī",
    "english": "to suffer losses, to come to grief, to lose out, to get the worst of it, to be at a disadvantage, unfortunately",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-122",
    "hanzi": "持续",
    "pinyin": "chí xù",
    "english": "to continue, to persist, sustainable, preservation",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-123",
    "hanzi": "池子",
    "pinyin": "chí zi",
    "english": "pond",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-124",
    "hanzi": "尺子",
    "pinyin": "chǐ zi",
    "english": "rule, ruler (measuring instrument)",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-125",
    "hanzi": "翅膀",
    "pinyin": "chì bǎng",
    "english": "wing, 對|对[duì]",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-126",
    "hanzi": "冲",
    "pinyin": "chōng",
    "english": "thoroughfare, to go straight ahead, to rush, to clash",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-127",
    "hanzi": "充电器",
    "pinyin": "chōng diàn qì",
    "english": "battery charger",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-128",
    "hanzi": "充分",
    "pinyin": "chōng fèn",
    "english": "ample, sufficient, adequate, full, fully, to the full",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-129",
    "hanzi": "充满",
    "pinyin": "chōng mǎn",
    "english": "full of, brimming with, very full, permeated",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-130",
    "hanzi": "重复",
    "pinyin": "chóng fù",
    "english": "to repeat, to duplicate",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-131",
    "hanzi": "宠物",
    "pinyin": "chǒng wù",
    "english": "house pet",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-132",
    "hanzi": "抽屉",
    "pinyin": "chōu ti",
    "english": "drawer",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-133",
    "hanzi": "抽象",
    "pinyin": "chōu xiàng",
    "english": "abstract, abstraction",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-134",
    "hanzi": "丑",
    "pinyin": "chǒu",
    "english": "shameful, ugly, disgraceful",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-135",
    "hanzi": "臭",
    "pinyin": "chòu",
    "english": "stench, stink, smelly, to smell (bad)",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-136",
    "hanzi": "出版",
    "pinyin": "chū bǎn",
    "english": "to publish, to come off the press, to put out",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-137",
    "hanzi": "出口",
    "pinyin": "chū kǒu",
    "english": "an exit, to speak, to export, (of a ship) to leave port",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-138",
    "hanzi": "出色",
    "pinyin": "chū sè",
    "english": "remarkable, outstanding",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-139",
    "hanzi": "出席",
    "pinyin": "chū xí",
    "english": "to attend, to participate, present",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-140",
    "hanzi": "初级",
    "pinyin": "chū jí",
    "english": "junior, primary",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-141",
    "hanzi": "除",
    "pinyin": "chú",
    "english": "to get rid of, to remove, to exclude, to eliminate, to wipe out, to divide, except, not including",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-142",
    "hanzi": "除非",
    "pinyin": "chú fēi",
    "english": "only if (..., or otherwise, ...), only when, only in the case that, unless",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-143",
    "hanzi": "除夕",
    "pinyin": "chú xī",
    "english": "(New Year's) Eve",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-144",
    "hanzi": "处理",
    "pinyin": "chǔ lǐ",
    "english": "to handle, to treat, to deal with, to process",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-145",
    "hanzi": "传播",
    "pinyin": "chuán bō",
    "english": "to disseminate, to propagate, to spread",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-146",
    "hanzi": "传递",
    "pinyin": "chuán dì",
    "english": "to transmit, to pass on to sb else",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-147",
    "hanzi": "传染",
    "pinyin": "chuán rǎn",
    "english": "to infect, contagious",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-148",
    "hanzi": "传说",
    "pinyin": "chuán shuō",
    "english": "legend, folklore, tradition, it is said, they say that...",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-149",
    "hanzi": "传统",
    "pinyin": "chuán tǒng",
    "english": "tradition, traditional, convention, conventional",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-150",
    "hanzi": "窗帘",
    "pinyin": "chuāng lián",
    "english": "window curtains",
    "level": "HSK 5",
    "lesson": 5
  },
  {
    "id": "HSK5-151",
    "hanzi": "闯",
    "pinyin": "chuǎng",
    "english": "to rush, to charge, to dash, to break through, to temper oneself (through battling hardships)",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-152",
    "hanzi": "创造",
    "pinyin": "chuàng zào",
    "english": "to create, to bring about, to produce, to set (a record)",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-153",
    "hanzi": "吹",
    "pinyin": "chuī",
    "english": "to blow, to play a wind instrument, to blast, to puff, to boast, to brag, to end in failure, to fall through",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-154",
    "hanzi": "磁带",
    "pinyin": "cí dài",
    "english": "magnetic tape, 盒[hé]",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-155",
    "hanzi": "辞职",
    "pinyin": "cí zhí",
    "english": "to resign",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-156",
    "hanzi": "此外",
    "pinyin": "cǐ wài",
    "english": "besides, in addition, moreover, furthermore",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-157",
    "hanzi": "刺激",
    "pinyin": "cì jī",
    "english": "to provoke, to irritate, to upset, to stimulate, to excite, irritant",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-158",
    "hanzi": "次要",
    "pinyin": "cì yào",
    "english": "secondary",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-159",
    "hanzi": "匆忙",
    "pinyin": "cōng máng",
    "english": "hasty, hurried",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-160",
    "hanzi": "从此",
    "pinyin": "cóng cǐ",
    "english": "from now on, since then, henceforth",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-161",
    "hanzi": "从而",
    "pinyin": "cóng ér",
    "english": "thus, thereby",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-162",
    "hanzi": "从前",
    "pinyin": "cóng qián",
    "english": "previously, formerly, once upon a time",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-163",
    "hanzi": "从事",
    "pinyin": "cóng shì",
    "english": "to go for, to engage in, to undertake, to deal with, to handle, to do",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-164",
    "hanzi": "醋",
    "pinyin": "cù",
    "english": "vinegar",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-165",
    "hanzi": "促进",
    "pinyin": "cù jìn",
    "english": "to promote (an idea or cause), to advance, boost",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-166",
    "hanzi": "促使",
    "pinyin": "cù shǐ",
    "english": "to induce, to promote, to urge, to impel, to bring about, to provoke, to drive (sb to do sth), to catalyze, to actuate, to contribute to (some development)",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-167",
    "hanzi": "催",
    "pinyin": "cuī",
    "english": "to urge, to press, to prompt, to rush sb, to hasten sth, to expedite",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-168",
    "hanzi": "存",
    "pinyin": "cún",
    "english": "to exist, to deposit, to store, to keep, to survive",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-169",
    "hanzi": "存在",
    "pinyin": "cún zài",
    "english": "to exist, to be, existence",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-170",
    "hanzi": "错误",
    "pinyin": "cuò wù",
    "english": "error, mistake, mistaken, false, wrong",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-171",
    "hanzi": "措施",
    "pinyin": "cuò shī",
    "english": "measure, step",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-172",
    "hanzi": "答应",
    "pinyin": "dā ying",
    "english": "to promise, to agree, to reply, to respond",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-173",
    "hanzi": "达到",
    "pinyin": "dá dào",
    "english": "to reach, to achieve, to attain",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-174",
    "hanzi": "打工",
    "pinyin": "dǎ gōng",
    "english": "to work a temporary or casual job, (of students) to have a job outside of class time, or during vacation",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-175",
    "hanzi": "打交道",
    "pinyin": "dǎ jiāo dào",
    "english": "to come into contact with, to have dealings",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-176",
    "hanzi": "打喷嚏",
    "pinyin": "dǎ pēn tì",
    "english": "to sneeze",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-177",
    "hanzi": "打听",
    "pinyin": "dǎ ting",
    "english": "to ask about, to inquire about",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-178",
    "hanzi": "打招呼",
    "pinyin": "dǎ zhāo hu",
    "english": "to greet sb by word or action, to give prior notice",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-179",
    "hanzi": "大方",
    "pinyin": "dà fang",
    "english": "generous, magnanimous, stylish, in good taste, easy-mannered, natural and relaxed",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-180",
    "hanzi": "大象",
    "pinyin": "dà xiàng",
    "english": "elephant",
    "level": "HSK 5",
    "lesson": 6
  },
  {
    "id": "HSK5-181",
    "hanzi": "大型",
    "pinyin": "dà xíng",
    "english": "large, large-scale",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-182",
    "hanzi": "呆",
    "pinyin": "dāi",
    "english": "foolish, stupid, expressionless, blank, to stay",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-183",
    "hanzi": "贷款",
    "pinyin": "dài kuǎn",
    "english": "a loan, to provide a loan (e.g. bank)",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-184",
    "hanzi": "待遇",
    "pinyin": "dài yù",
    "english": "treatment, pay, wages, status, salary",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-185",
    "hanzi": "担任",
    "pinyin": "dān rèn",
    "english": "to hold a governmental office or post, to assume office of, to take charge of, to serve as",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-186",
    "hanzi": "单纯",
    "pinyin": "dān chún",
    "english": "simple, pure, alone, merely",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-187",
    "hanzi": "单调",
    "pinyin": "dān diào",
    "english": "monotonous",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-188",
    "hanzi": "单独",
    "pinyin": "dān dú",
    "english": "alone, by oneself, on one's own",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-189",
    "hanzi": "单位",
    "pinyin": "dān wèi",
    "english": "a unit, unit (of measure), work unit (one's workplace)",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-190",
    "hanzi": "单元",
    "pinyin": "dān yuán",
    "english": "unit, entrance number, staircase (for residential buildings)",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-191",
    "hanzi": "耽误",
    "pinyin": "dān wu",
    "english": "to delay, to hold up, to waste time, to interfere with",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-192",
    "hanzi": "胆小鬼",
    "pinyin": "dǎn xiǎo guǐ",
    "english": "coward",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-193",
    "hanzi": "淡",
    "pinyin": "dàn",
    "english": "insipid, diluted, weak, mild, light in color, tasteless, fresh, indifferent, nitrogen",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-194",
    "hanzi": "当代",
    "pinyin": "dāng dài",
    "english": "the present age, the contemporary era",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-195",
    "hanzi": "挡",
    "pinyin": "dǎng",
    "english": "to resist, to obstruct, to hinder, to keep off, to block (a blow), to get in the way of, cover, gear",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-196",
    "hanzi": "岛",
    "pinyin": "dǎo",
    "english": "island, 座[zuò]",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-197",
    "hanzi": "倒霉",
    "pinyin": "dǎo méi",
    "english": "to have bad luck, to be out of luck",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-198",
    "hanzi": "导演",
    "pinyin": "dǎo yǎn",
    "english": "to direct, director (film etc)",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-199",
    "hanzi": "导致",
    "pinyin": "dǎo zhì",
    "english": "to lead to, to create, to cause, to bring about",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-200",
    "hanzi": "倒",
    "pinyin": "dào",
    "english": "to place upside down, to invert, to pour, to throw out, to move backwards, however, actually, as a matter of fact, contrary to expectation",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-201",
    "hanzi": "到达",
    "pinyin": "dào dá",
    "english": "to reach, to arrive",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-202",
    "hanzi": "道德",
    "pinyin": "dào dé",
    "english": "virtue, morality, ethics",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-203",
    "hanzi": "道理",
    "pinyin": "dào li",
    "english": "reason, argument, sense, principle, basis, justification",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-204",
    "hanzi": "登机牌",
    "pinyin": "dēng jī pái",
    "english": "boarding pass",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-205",
    "hanzi": "登记",
    "pinyin": "dēng jì",
    "english": "to register (one's name)",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-206",
    "hanzi": "等待",
    "pinyin": "děng dài",
    "english": "to wait, to wait for",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-207",
    "hanzi": "等候",
    "pinyin": "děng hòu",
    "english": "to wait, to wait for",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-208",
    "hanzi": "等于",
    "pinyin": "děng yú",
    "english": "to equal, to be tantamount to",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-209",
    "hanzi": "滴",
    "pinyin": "dī",
    "english": "a drop, to drip",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-210",
    "hanzi": "的确",
    "pinyin": "dí què",
    "english": "really, indeed",
    "level": "HSK 5",
    "lesson": 7
  },
  {
    "id": "HSK5-211",
    "hanzi": "敌人",
    "pinyin": "dí rén",
    "english": "enemy",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-212",
    "hanzi": "递",
    "pinyin": "dì",
    "english": "to hand over, to pass on sth, to gradually increase or decrease, progressively",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-213",
    "hanzi": "地道",
    "pinyin": "dì dao",
    "english": "authentic, genuine, typical, from a place known for the product, thorough, conscientious",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-214",
    "hanzi": "地理",
    "pinyin": "dì lǐ",
    "english": "geography",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-215",
    "hanzi": "地区",
    "pinyin": "dì qū",
    "english": "local, regional, district (not necessarily formal administrative unit), region, area, as suffix to city name, means prefecture or county (area administered by a prefecture level city or county level city)",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-216",
    "hanzi": "地毯",
    "pinyin": "dì tǎn",
    "english": "carpet, rug",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-217",
    "hanzi": "地位",
    "pinyin": "dì wèi",
    "english": "position, status, place",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-218",
    "hanzi": "地震",
    "pinyin": "dì zhèn",
    "english": "earthquake",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-219",
    "hanzi": "点头",
    "pinyin": "diǎn tóu",
    "english": "to nod",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-220",
    "hanzi": "点心",
    "pinyin": "diǎn xin",
    "english": "light refreshments, pastry, dimsum (in Cantonese cooking), dessert",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-221",
    "hanzi": "电池",
    "pinyin": "diàn chí",
    "english": "battery, 組|组[zǔ]",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-222",
    "hanzi": "电台",
    "pinyin": "diàn tái",
    "english": "transmitter-receiver, broadcasting station, radio station, 家[jiā]",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-223",
    "hanzi": "钓",
    "pinyin": "diào",
    "english": "to fish with a hook and bait",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-224",
    "hanzi": "丁",
    "pinyin": "dīng",
    "english": "fourth of 10 heavenly stems 十天干, fourth in order, letter \"D\" or roman \"IV\" in list \"A, B, C\", or \"I, II, III\" etc, butyl, cubes (of food)",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-225",
    "hanzi": "顶",
    "pinyin": "dǐng",
    "english": "apex, crown of the head, top, roof, to carry on the head, to push to the top, to go against, most, to replace, to substitute, classifier for headwear, hats, veils etc, to \"bump\" a forum thread to raise its profile (internet slang)",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-226",
    "hanzi": "冻",
    "pinyin": "dòng",
    "english": "to freeze, to feel very cold, aspic or jelly",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-227",
    "hanzi": "洞",
    "pinyin": "dòng",
    "english": "cave, hole, zero (unambiguous spoken form when spelling out numbers)",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-228",
    "hanzi": "动画片",
    "pinyin": "dòng huà piàn",
    "english": "animated film",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-229",
    "hanzi": "逗",
    "pinyin": "dòu",
    "english": "to stay, to stop, to pause (while reading), to tease (play with)",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-230",
    "hanzi": "豆腐",
    "pinyin": "dòu fu",
    "english": "tofu, bean curd",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-231",
    "hanzi": "独立",
    "pinyin": "dú lì",
    "english": "independent, independence, to stand alone",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-232",
    "hanzi": "独特",
    "pinyin": "dú tè",
    "english": "unique, distinct, having special characteristics",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-233",
    "hanzi": "度过",
    "pinyin": "dù guò",
    "english": "to pass, to spend (time), to survive, to get through",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-234",
    "hanzi": "短信",
    "pinyin": "duǎn xìn",
    "english": "text message, SMS",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-235",
    "hanzi": "堆",
    "pinyin": "duī",
    "english": "to pile up, to heap up, a mass, pile, heap, stack, large amount",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-236",
    "hanzi": "对比",
    "pinyin": "duì bǐ",
    "english": "to contrast, contrast, ratio",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-237",
    "hanzi": "对待",
    "pinyin": "duì dài",
    "english": "to treat, treatment",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-238",
    "hanzi": "对方",
    "pinyin": "duì fāng",
    "english": "counterpart, other person involved, opposite side, other side, receiving party",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-239",
    "hanzi": "对手",
    "pinyin": "duì shǒu",
    "english": "opponent, adversary, match",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-240",
    "hanzi": "对象",
    "pinyin": "duì xiàng",
    "english": "target, object, partner, boyfriend, girlfriend",
    "level": "HSK 5",
    "lesson": 8
  },
  {
    "id": "HSK5-241",
    "hanzi": "对于",
    "pinyin": "duì yú",
    "english": "regarding, as far as sth is concerned, with regards to",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-242",
    "hanzi": "吨",
    "pinyin": "dūn",
    "english": "ton, Taiwan pr. [dùn]",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-243",
    "hanzi": "蹲",
    "pinyin": "dūn",
    "english": "to crouch, to squat",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-244",
    "hanzi": "多亏",
    "pinyin": "duō kuī",
    "english": "thanks to, luckily",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-245",
    "hanzi": "多余",
    "pinyin": "duō yú",
    "english": "superfluous, unnecessary, surplus",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-246",
    "hanzi": "躲藏",
    "pinyin": "duǒ cáng",
    "english": "to hide oneself",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-247",
    "hanzi": "恶劣",
    "pinyin": "è liè",
    "english": "vile, nasty, of very poor quality",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-248",
    "hanzi": "发表",
    "pinyin": "fā biǎo",
    "english": "to issue, to publish",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-249",
    "hanzi": "发愁",
    "pinyin": "fā chóu",
    "english": "to worry, to fret, to be anxious, to become sad",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-250",
    "hanzi": "发达",
    "pinyin": "fā dá",
    "english": "developed (country etc), flourishing, to develop",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-251",
    "hanzi": "发抖",
    "pinyin": "fā dǒu",
    "english": "to tremble, to shake, to shiver",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-252",
    "hanzi": "发挥",
    "pinyin": "fā huī",
    "english": "to display, to exhibit, to bring out implicit or innate qualities, to express (a thought or moral), to develop (an idea), to elaborate (on a theme)",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-253",
    "hanzi": "发明",
    "pinyin": "fā míng",
    "english": "to invent, invention",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-254",
    "hanzi": "发票",
    "pinyin": "fā piào",
    "english": "invoice, receipt or bill for purchase",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-255",
    "hanzi": "发言",
    "pinyin": "fā yán",
    "english": "to make a speech, statement, utterance",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-256",
    "hanzi": "罚款",
    "pinyin": "fá kuǎn",
    "english": "(impose a) fine, penalty, fine (monetary)",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-257",
    "hanzi": "法院",
    "pinyin": "fǎ yuàn",
    "english": "court of law, court",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-258",
    "hanzi": "翻",
    "pinyin": "fān",
    "english": "to turn over, to flip over, to overturn, to rummage through, to translate, to decode, to double, to climb over or into, to cross",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-259",
    "hanzi": "繁荣",
    "pinyin": "fán róng",
    "english": "prosperous, booming (economy)",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-260",
    "hanzi": "凡是",
    "pinyin": "fán shì",
    "english": "each and every, every, all, any",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-261",
    "hanzi": "反而",
    "pinyin": "fǎn ér",
    "english": "instead, on the contrary, contrary (to expectations)",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-262",
    "hanzi": "反复",
    "pinyin": "fǎn fù",
    "english": "repeatedly, over and over",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-263",
    "hanzi": "反应",
    "pinyin": "fǎn yìng",
    "english": "to react, to respond, reaction, response, reply, chemical reaction",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-264",
    "hanzi": "反正",
    "pinyin": "fǎn zhèng",
    "english": "anyway, in any case, to come over from the enemy's side",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-265",
    "hanzi": "方",
    "pinyin": "fāng",
    "english": "square, power or involution (mathematics), upright, honest, fair and square, direction, side, party (to a contract, dispute etc), place, method, prescription (medicine), just when, only or just, classifier for square things, abbr. for square or cubic meter",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-266",
    "hanzi": "方案",
    "pinyin": "fāng àn",
    "english": "plan, program (for action etc), proposal, proposed bill, 套[tào]",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-267",
    "hanzi": "方式",
    "pinyin": "fāng shì",
    "english": "way (of life), pattern, style, mode, manner",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-268",
    "hanzi": "妨碍",
    "pinyin": "fáng ài",
    "english": "to hinder, to obstruct",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-269",
    "hanzi": "房东",
    "pinyin": "fáng dōng",
    "english": "landlord",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-270",
    "hanzi": "仿佛",
    "pinyin": "fǎng fú",
    "english": "to seem, as if, alike, similar",
    "level": "HSK 5",
    "lesson": 9
  },
  {
    "id": "HSK5-271",
    "hanzi": "放松",
    "pinyin": "fàng sōng",
    "english": "to loosen, to relax",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-272",
    "hanzi": "非",
    "pinyin": "fēi",
    "english": "to not be, not, wrong, incorrect, non-, un-, in-, to reproach or blame, (colloquial) to insist on, simply must",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-273",
    "hanzi": "肥皂",
    "pinyin": "féi zào",
    "english": "soap, 條|条[tiáo]",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-274",
    "hanzi": "肺",
    "pinyin": "fèi",
    "english": "lung",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-275",
    "hanzi": "废话",
    "pinyin": "fèi huà",
    "english": "nonsense, rubbish, superfluous words, You don't say!, No kidding! (gently sarcastic)",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-276",
    "hanzi": "费用",
    "pinyin": "fèi yòng",
    "english": "cost, expenditure, expense, 個|个[gè]",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-277",
    "hanzi": "分别",
    "pinyin": "fēn bié",
    "english": "to part or leave each other, to distinguish, difference, in different ways, differently, separately or individually",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-278",
    "hanzi": "分布",
    "pinyin": "fēn bù",
    "english": "distributed, to distribute",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-279",
    "hanzi": "分配",
    "pinyin": "fēn pèi",
    "english": "to distribute, to assign, to allocate, to partition (a hard drive)",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-280",
    "hanzi": "分析",
    "pinyin": "fēn xī",
    "english": "to analyze, analysis",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-281",
    "hanzi": "纷纷",
    "pinyin": "fēn fēn",
    "english": "one after another, in succession, one by one, continuously, diverse, in profusion, numerous and confused, pell-mell",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-282",
    "hanzi": "奋斗",
    "pinyin": "fèn dòu",
    "english": "to strive, to struggle",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-283",
    "hanzi": "愤怒",
    "pinyin": "fèn nù",
    "english": "angry, indignant, wrath, ire",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-284",
    "hanzi": "风格",
    "pinyin": "fēng gé",
    "english": "style",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-285",
    "hanzi": "风俗",
    "pinyin": "fēng sú",
    "english": "social custom",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-286",
    "hanzi": "风险",
    "pinyin": "fēng xiǎn",
    "english": "risk, hazard",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-287",
    "hanzi": "疯狂",
    "pinyin": "fēng kuáng",
    "english": "madness, extreme popularity",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-288",
    "hanzi": "讽刺",
    "pinyin": "fěng cì",
    "english": "to satirize, to mock, irony, satire, sarcasm",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-289",
    "hanzi": "否定",
    "pinyin": "fǒu dìng",
    "english": "to negate, to deny, to reject, negative (answer), negation",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-290",
    "hanzi": "否认",
    "pinyin": "fǒu rèn",
    "english": "to declare to be untrue, to deny",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-291",
    "hanzi": "扶",
    "pinyin": "fú",
    "english": "to support with the hand, to help sb up, to support oneself by holding onto something, to help",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-292",
    "hanzi": "幅",
    "pinyin": "fú",
    "english": "width, roll, classifier for textiles or pictures",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-293",
    "hanzi": "服从",
    "pinyin": "fú cóng",
    "english": "to obey (an order), to comply, to defer",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-294",
    "hanzi": "服装",
    "pinyin": "fú zhuāng",
    "english": "dress, clothing, costume, clothes",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-295",
    "hanzi": "辅导",
    "pinyin": "fǔ dǎo",
    "english": "to coach, to tutor, to give advice (in study)",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-296",
    "hanzi": "复制",
    "pinyin": "fù zhì",
    "english": "to duplicate, to make a copy of, to copy, to reproduce, to clone",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-297",
    "hanzi": "付款",
    "pinyin": "fù kuǎn",
    "english": "to pay a sum of money, payment",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-298",
    "hanzi": "妇女",
    "pinyin": "fù nǚ",
    "english": "woman",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-299",
    "hanzi": "改革",
    "pinyin": "gǎi gé",
    "english": "reform, 種|种, 項|项[xiàng], to reform",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-300",
    "hanzi": "改进",
    "pinyin": "gǎi jìn",
    "english": "to improve, to make better",
    "level": "HSK 5",
    "lesson": 10
  },
  {
    "id": "HSK5-301",
    "hanzi": "改善",
    "pinyin": "gǎi shàn",
    "english": "to make better, to improve",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-302",
    "hanzi": "改正",
    "pinyin": "gǎi zhèng",
    "english": "to correct, to amend, to put right, correction",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-303",
    "hanzi": "盖",
    "pinyin": "gài",
    "english": "lid, top, cover, canopy, to cover, to conceal, to build",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-304",
    "hanzi": "概括",
    "pinyin": "gài kuò",
    "english": "to summarize, to generalize, briefly",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-305",
    "hanzi": "概念",
    "pinyin": "gài niàn",
    "english": "concept, idea",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-306",
    "hanzi": "干脆",
    "pinyin": "gān cuì",
    "english": "straightforward, clear-cut, blunt (e.g. statement), you might as well, simply",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-307",
    "hanzi": "感激",
    "pinyin": "gǎn jī",
    "english": "to be grateful, to appreciate, thankful",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-308",
    "hanzi": "感受",
    "pinyin": "gǎn shòu",
    "english": "to sense, perception, to feel (through the senses), a feeling, an impression, an experience",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-309",
    "hanzi": "感想",
    "pinyin": "gǎn xiǎng",
    "english": "impressions, reflections, thoughts, 個|个[gè]",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-310",
    "hanzi": "赶紧",
    "pinyin": "gǎn jǐn",
    "english": "hurriedly, without delay",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-311",
    "hanzi": "赶快",
    "pinyin": "gǎn kuài",
    "english": "at once, immediately",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-312",
    "hanzi": "干活儿",
    "pinyin": "gàn huó r",
    "english": "to work, manual labor",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-313",
    "hanzi": "钢铁",
    "pinyin": "gāng tiě",
    "english": "steel",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-314",
    "hanzi": "高档",
    "pinyin": "gāo dàng",
    "english": "superior quality, high grade, top grade",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-315",
    "hanzi": "高速",
    "pinyin": "gāo sù",
    "english": "high speed",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-316",
    "hanzi": "搞",
    "pinyin": "gǎo",
    "english": "to do, to make, to go in for, to set up, to get hold of, to take care of",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-317",
    "hanzi": "告别",
    "pinyin": "gào bié",
    "english": "to leave, to bid farewell to, to say good-bye to",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-318",
    "hanzi": "胳膊",
    "pinyin": "gē bo",
    "english": "arm, 條|条, 雙|双[shuāng]",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-319",
    "hanzi": "鸽子",
    "pinyin": "gē zi",
    "english": "pigeon, dove, various birds of the species Columbidae",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-320",
    "hanzi": "隔壁",
    "pinyin": "gé bì",
    "english": "next door, neighbor",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-321",
    "hanzi": "格外",
    "pinyin": "gé wài",
    "english": "especially, particularly",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-322",
    "hanzi": "革命",
    "pinyin": "gé mìng",
    "english": "revolution, revolutionary (politics)",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-323",
    "hanzi": "个别",
    "pinyin": "gè bié",
    "english": "individual, specific, respective, just one or two",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-324",
    "hanzi": "个人",
    "pinyin": "gè rén",
    "english": "individual, personal, oneself",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-325",
    "hanzi": "个性",
    "pinyin": "gè xìng",
    "english": "individuality, personality",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-326",
    "hanzi": "各自",
    "pinyin": "gè zì",
    "english": "each, respective, apiece",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-327",
    "hanzi": "根",
    "pinyin": "gēn",
    "english": "root, basis, classifier for long slender objects, e.g. cigarettes, guitar strings, radical (chemistry)",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-328",
    "hanzi": "根本",
    "pinyin": "gēn běn",
    "english": "fundamental, basic, root, simply, absolutely (not), (not) at all",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-329",
    "hanzi": "更加",
    "pinyin": "gèng jiā",
    "english": "more (than sth else), even more",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-330",
    "hanzi": "公布",
    "pinyin": "gōng bù",
    "english": "to announce, to make public, to publish",
    "level": "HSK 5",
    "lesson": 11
  },
  {
    "id": "HSK5-331",
    "hanzi": "公开",
    "pinyin": "gōng kāi",
    "english": "public, to publish, to make public",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-332",
    "hanzi": "公平",
    "pinyin": "gōng píng",
    "english": "fair, impartial",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-333",
    "hanzi": "公寓",
    "pinyin": "gōng yù",
    "english": "apartment building, block of flats",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-334",
    "hanzi": "公元",
    "pinyin": "gōng yuán",
    "english": "CE (Common Era), Christian Era, AD (Anno Domini)",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-335",
    "hanzi": "公主",
    "pinyin": "gōng zhǔ",
    "english": "princess",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-336",
    "hanzi": "工厂",
    "pinyin": "gōng chǎng",
    "english": "factory, 座[zuò]",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-337",
    "hanzi": "工程师",
    "pinyin": "gōng chéng shī",
    "english": "engineer, 位, 名[míng]",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-338",
    "hanzi": "工人",
    "pinyin": "gōng rén",
    "english": "worker, 名[míng]",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-339",
    "hanzi": "工业",
    "pinyin": "gōng yè",
    "english": "industry",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-340",
    "hanzi": "功夫",
    "pinyin": "gōng fu",
    "english": "skill, art, kung fu, labor, effort",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-341",
    "hanzi": "功能",
    "pinyin": "gōng néng",
    "english": "function, capability",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-342",
    "hanzi": "贡献",
    "pinyin": "gòng xiàn",
    "english": "to contribute, to dedicate, to devote, contribution",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-343",
    "hanzi": "沟通",
    "pinyin": "gōu tōng",
    "english": "to join, to connect, to link up, to communicate",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-344",
    "hanzi": "构成",
    "pinyin": "gòu chéng",
    "english": "to constitute, to form, to compose, to make up, to configure (computing)",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-345",
    "hanzi": "姑姑",
    "pinyin": "gū gu",
    "english": "paternal aunt",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-346",
    "hanzi": "姑娘",
    "pinyin": "gū niang",
    "english": "girl, young woman, young lady, daughter, paternal aunt (old)",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-347",
    "hanzi": "古代",
    "pinyin": "gǔ dài",
    "english": "ancient times, olden times",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-348",
    "hanzi": "古典",
    "pinyin": "gǔ diǎn",
    "english": "classical",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-349",
    "hanzi": "古老",
    "pinyin": "gǔ lǎo",
    "english": "ancient, old, age-old",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-350",
    "hanzi": "股票",
    "pinyin": "gǔ piào",
    "english": "share, stock (market)",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-351",
    "hanzi": "鼓舞",
    "pinyin": "gǔ wǔ",
    "english": "heartening (news), boost (morale)",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-352",
    "hanzi": "骨头",
    "pinyin": "gǔ tou",
    "english": "bone, 塊|块[kuài], moral character, bitterness",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-353",
    "hanzi": "固定",
    "pinyin": "gù dìng",
    "english": "fixed, set, regular",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-354",
    "hanzi": "固体",
    "pinyin": "gù tǐ",
    "english": "solid",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-355",
    "hanzi": "雇佣",
    "pinyin": "gù yōng",
    "english": "to employ, to hire",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-356",
    "hanzi": "挂号",
    "pinyin": "guà hào",
    "english": "to register (a letter etc)",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-357",
    "hanzi": "乖",
    "pinyin": "guāi",
    "english": "(of a child) obedient, well-behaved, clever, shrewd, alert, perverse, contrary to reason, irregular, abnormal",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-358",
    "hanzi": "拐弯",
    "pinyin": "guǎi wān",
    "english": "to go round a curve, to turn a corner, fig. a new direction",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-359",
    "hanzi": "怪不得",
    "pinyin": "guài bu de",
    "english": "no wonder!, so that's why!",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-360",
    "hanzi": "关闭",
    "pinyin": "guān bì",
    "english": "to close, to shut",
    "level": "HSK 5",
    "lesson": 12
  },
  {
    "id": "HSK5-361",
    "hanzi": "关怀",
    "pinyin": "guān huái",
    "english": "care, solicitude, to show care for, concerned about, attentive to",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-362",
    "hanzi": "官",
    "pinyin": "guān",
    "english": "official, government, organ of body",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-363",
    "hanzi": "观察",
    "pinyin": "guān chá",
    "english": "to observe, to watch, to survey, to examine, observation, view, perspective",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-364",
    "hanzi": "观点",
    "pinyin": "guān diǎn",
    "english": "point of view, viewpoint, standpoint",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-365",
    "hanzi": "观念",
    "pinyin": "guān niàn",
    "english": "notion, thought, concept, sense, views, ideology, general impressions",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-366",
    "hanzi": "管子",
    "pinyin": "guǎn zi",
    "english": "tube, pipe, drinking straw",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-367",
    "hanzi": "罐头",
    "pinyin": "guàn tou",
    "english": "tin, can",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-368",
    "hanzi": "冠军",
    "pinyin": "guàn jūn",
    "english": "champion",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-369",
    "hanzi": "光滑",
    "pinyin": "guāng hua",
    "english": "glossy, sleek, smooth",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-370",
    "hanzi": "光临",
    "pinyin": "guāng lín",
    "english": "(honorific) Welcome!, You honor us with your presence., It is an honor to have you.",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-371",
    "hanzi": "光明",
    "pinyin": "guāng míng",
    "english": "light, illumination, radiance (esp. glory of Buddha etc), fig. bright prospects, openhearted",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-372",
    "hanzi": "光盘",
    "pinyin": "guāng pán",
    "english": "compact disc, CD or DVD, CD ROM, 張|张[zhāng]",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-373",
    "hanzi": "光荣",
    "pinyin": "guāng róng",
    "english": "honor and glory, glorious",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-374",
    "hanzi": "广场",
    "pinyin": "guǎng chǎng",
    "english": "public square, plaza",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-375",
    "hanzi": "广大",
    "pinyin": "guǎng dà",
    "english": "(of an area) vast or extensive, large-scale, widespread, (of people) numerous",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-376",
    "hanzi": "广泛",
    "pinyin": "guǎng fàn",
    "english": "extensive, wide range",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-377",
    "hanzi": "规矩",
    "pinyin": "guī ju",
    "english": "lit. compass and set square, fig. established standard, rule, customs, practices, fig. upright and honest, well-behaved",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-378",
    "hanzi": "规律",
    "pinyin": "guī lǜ",
    "english": "rule (e.g. of science), law of behavior, regular pattern, rhythm, discipline",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-379",
    "hanzi": "规模",
    "pinyin": "guī mó",
    "english": "scale, scope, extent",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-380",
    "hanzi": "规则",
    "pinyin": "guī zé",
    "english": "rule, regulation, rules and regulations",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-381",
    "hanzi": "柜台",
    "pinyin": "guì tái",
    "english": "sales counter, front desk, bar, over the counter",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-382",
    "hanzi": "滚",
    "pinyin": "gǔn",
    "english": "to boil, to roll, to take a hike, Get lost!",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-383",
    "hanzi": "锅",
    "pinyin": "guō",
    "english": "pot, pan, boiler, 隻|只[zhī]",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-384",
    "hanzi": "国籍",
    "pinyin": "guó jí",
    "english": "nationality",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-385",
    "hanzi": "国庆节",
    "pinyin": "Guó qìng jié",
    "english": "PRC National Day (October 1st)",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-386",
    "hanzi": "果实",
    "pinyin": "guǒ shí",
    "english": "fruit, gains",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-387",
    "hanzi": "过分",
    "pinyin": "guò fèn",
    "english": "excessive, undue, overly",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-388",
    "hanzi": "过敏",
    "pinyin": "guò mǐn",
    "english": "to be allergic, allergy",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-389",
    "hanzi": "过期",
    "pinyin": "guò qī",
    "english": "to be overdue, to exceed the time limit, to expire (as in expiration date)",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-390",
    "hanzi": "哈",
    "pinyin": "hā",
    "english": "laughter, yawn",
    "level": "HSK 5",
    "lesson": 13
  },
  {
    "id": "HSK5-391",
    "hanzi": "海关",
    "pinyin": "hǎi guān",
    "english": "customs (i.e. border crossing inspection)",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-392",
    "hanzi": "海鲜",
    "pinyin": "hǎi xiān",
    "english": "seafood",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-393",
    "hanzi": "喊",
    "pinyin": "hǎn",
    "english": "to yell, to shout, to call out for (a person)",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-394",
    "hanzi": "行业",
    "pinyin": "háng yè",
    "english": "industry, business",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-395",
    "hanzi": "豪华",
    "pinyin": "háo huá",
    "english": "luxurious",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-396",
    "hanzi": "好奇",
    "pinyin": "hào qí",
    "english": "inquisitive, curious, inquisitiveness, curiosity",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-397",
    "hanzi": "和平",
    "pinyin": "hé píng",
    "english": "peace",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-398",
    "hanzi": "何必",
    "pinyin": "hé bì",
    "english": "there is no need, why should",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-399",
    "hanzi": "何况",
    "pinyin": "hé kuàng",
    "english": "let alone, to say nothing of, besides, what's more",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-400",
    "hanzi": "合法",
    "pinyin": "hé fǎ",
    "english": "lawful, legitimate, legal",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-401",
    "hanzi": "合理",
    "pinyin": "hé lǐ",
    "english": "rational, reasonable, fair",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-402",
    "hanzi": "合同",
    "pinyin": "hé tong",
    "english": "(business) contract",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-403",
    "hanzi": "合影",
    "pinyin": "hé yǐng",
    "english": "joint photo, group photo",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-404",
    "hanzi": "合作",
    "pinyin": "hé zuò",
    "english": "to cooperate, to collaborate, to work together, cooperation",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-405",
    "hanzi": "核心",
    "pinyin": "hé xīn",
    "english": "core, nucleus",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-406",
    "hanzi": "恨",
    "pinyin": "hèn",
    "english": "to hate, to regret",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-407",
    "hanzi": "横",
    "pinyin": "héng",
    "english": "horizontal, across, (horizontal character stroke)",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-408",
    "hanzi": "后果",
    "pinyin": "hòu guǒ",
    "english": "consequences, aftermath",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-409",
    "hanzi": "忽视",
    "pinyin": "hū shì",
    "english": "to neglect, to ignore",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-410",
    "hanzi": "呼吸",
    "pinyin": "hū xī",
    "english": "to breathe",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-411",
    "hanzi": "壶",
    "pinyin": "hú",
    "english": "pot, classifier for bottled liquid",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-412",
    "hanzi": "蝴蝶",
    "pinyin": "hú dié",
    "english": "butterfly",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-413",
    "hanzi": "胡说",
    "pinyin": "hú shuō",
    "english": "to talk nonsense, drivel",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-414",
    "hanzi": "胡同",
    "pinyin": "hú tòng",
    "english": "variant of 胡同[hú tòng]",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-415",
    "hanzi": "胡须",
    "pinyin": "hú xū",
    "english": "beard, 綹|绺[liǔ]",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-416",
    "hanzi": "糊涂",
    "pinyin": "hú tu",
    "english": "muddled, silly, confused",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-417",
    "hanzi": "花生",
    "pinyin": "huā shēng",
    "english": "peanut, groundnut",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-418",
    "hanzi": "滑冰",
    "pinyin": "huá bīng",
    "english": "to skate, skating",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-419",
    "hanzi": "划船",
    "pinyin": "huá chuán",
    "english": "to row a boat, rowing boat, rowing (sport)",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-420",
    "hanzi": "华裔",
    "pinyin": "Huá yì",
    "english": "ethnic Chinese, non-Chinese citizen of Chinese ancestry",
    "level": "HSK 5",
    "lesson": 14
  },
  {
    "id": "HSK5-421",
    "hanzi": "化学",
    "pinyin": "huà xué",
    "english": "chemistry, chemical",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-422",
    "hanzi": "话题",
    "pinyin": "huà tí",
    "english": "subject (of a talk or conversation), topic",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-423",
    "hanzi": "怀念",
    "pinyin": "huái niàn",
    "english": "to cherish the memory of, to think of, reminisce",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-424",
    "hanzi": "缓解",
    "pinyin": "huǎn jiě",
    "english": "to blunt, to dull, to ease, to help relieve (a crisis), to alleviate (pain)",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-425",
    "hanzi": "幻想",
    "pinyin": "huàn xiǎng",
    "english": "delusion, fantasy",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-426",
    "hanzi": "慌张",
    "pinyin": "huāng zhāng",
    "english": "confused, flustered",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-427",
    "hanzi": "黄瓜",
    "pinyin": "huáng guā",
    "english": "cucumber",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-428",
    "hanzi": "黄金",
    "pinyin": "huáng jīn",
    "english": "gold",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-429",
    "hanzi": "皇帝",
    "pinyin": "huáng dì",
    "english": "emperor",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-430",
    "hanzi": "皇后",
    "pinyin": "huáng hòu",
    "english": "empress, imperial consort",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-431",
    "hanzi": "灰",
    "pinyin": "huī",
    "english": "ash, dust, lime, gray, discouraged, dejected",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-432",
    "hanzi": "灰尘",
    "pinyin": "huī chén",
    "english": "dust",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-433",
    "hanzi": "灰心",
    "pinyin": "huī xīn",
    "english": "to lose heart, to be discouraged",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-434",
    "hanzi": "挥",
    "pinyin": "huī",
    "english": "to wave, to brandish, to wipe away, to command, to conduct, to scatter, to disperse",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-435",
    "hanzi": "恢复",
    "pinyin": "huī fù",
    "english": "to reinstate, to resume, to restore, to recover, to regain, to rehabilitate",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-436",
    "hanzi": "汇率",
    "pinyin": "huì lǜ",
    "english": "exchange rate",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-437",
    "hanzi": "婚礼",
    "pinyin": "hūn lǐ",
    "english": "wedding ceremony, wedding",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-438",
    "hanzi": "婚姻",
    "pinyin": "hūn yīn",
    "english": "matrimony, wedding, marriage",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-439",
    "hanzi": "活跃",
    "pinyin": "huó yuè",
    "english": "active, vigorous",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-440",
    "hanzi": "火柴",
    "pinyin": "huǒ chái",
    "english": "match (for lighting fire), 盒[hé]",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-441",
    "hanzi": "伙伴",
    "pinyin": "huǒ bàn",
    "english": "partner, companion, comrade",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-442",
    "hanzi": "基本",
    "pinyin": "jī běn",
    "english": "basic, fundamental, main, elementary",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-443",
    "hanzi": "机器",
    "pinyin": "jī qì",
    "english": "machine, 部, 個|个[gè]",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-444",
    "hanzi": "激烈",
    "pinyin": "jī liè",
    "english": "intense, acute, fierce",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-445",
    "hanzi": "肌肉",
    "pinyin": "jī ròu",
    "english": "muscle, flesh",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-446",
    "hanzi": "及格",
    "pinyin": "jí gé",
    "english": "to pass a test",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-447",
    "hanzi": "急忙",
    "pinyin": "jí máng",
    "english": "hastily",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-448",
    "hanzi": "集体",
    "pinyin": "jí tǐ",
    "english": "collective, social, team",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-449",
    "hanzi": "集中",
    "pinyin": "jí zhōng",
    "english": "to concentrate, to centralize, to focus, centralized, concentrated, to put together",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-450",
    "hanzi": "记录",
    "pinyin": "jì lù",
    "english": "to record, record (written account), record (in sports etc)",
    "level": "HSK 5",
    "lesson": 15
  },
  {
    "id": "HSK5-451",
    "hanzi": "记忆",
    "pinyin": "jì yì",
    "english": "to remember, to recall, memory",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-452",
    "hanzi": "计算",
    "pinyin": "jì suàn",
    "english": "to count, to calculate, to compute",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-453",
    "hanzi": "寂寞",
    "pinyin": "jì mò",
    "english": "lonely, lonesome, quiet, silent",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-454",
    "hanzi": "系领带",
    "pinyin": "jì lǐng dài",
    "english": "to tie one's necktie",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-455",
    "hanzi": "纪录",
    "pinyin": "jì lù",
    "english": "record",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-456",
    "hanzi": "纪律",
    "pinyin": "jì lǜ",
    "english": "discipline",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-457",
    "hanzi": "纪念",
    "pinyin": "jì niàn",
    "english": "to commemorate, to remember",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-458",
    "hanzi": "家庭",
    "pinyin": "jiā tíng",
    "english": "family, household, 個|个[gè]",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-459",
    "hanzi": "家务",
    "pinyin": "jiā wù",
    "english": "household duties, housework",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-460",
    "hanzi": "家乡",
    "pinyin": "jiā xiāng",
    "english": "hometown, native place",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-461",
    "hanzi": "嘉宾",
    "pinyin": "jiā bīn",
    "english": "esteemed guest, honored guest, guest (on a show)",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-462",
    "hanzi": "夹子",
    "pinyin": "jiā zi",
    "english": "clip, clamp, tongs, folder, wallet",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-463",
    "hanzi": "甲",
    "pinyin": "jiǎ",
    "english": "first of the ten heavenly stems 十天干[shí tiān gān], (used for an unspecified person or thing), first (in a list, as a party to a contract etc), armor plating, shell or carapace, (of the fingers or toes) nail, bladed leather or metal armor (old), ranking system used in the Imperial examinations (old), civil administration unit (old)",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-464",
    "hanzi": "假如",
    "pinyin": "jiǎ rú",
    "english": "if",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-465",
    "hanzi": "假装",
    "pinyin": "jiǎ zhuāng",
    "english": "to feign, to pretend",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-466",
    "hanzi": "嫁",
    "pinyin": "jià",
    "english": "(of a woman) to marry, to marry off a daughter, to shift (blame etc)",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-467",
    "hanzi": "价值",
    "pinyin": "jià zhí",
    "english": "value, worth, fig. values (ethical, cultural etc)",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-468",
    "hanzi": "驾驶",
    "pinyin": "jià shǐ",
    "english": "to pilot (ship, airplane etc), to drive",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-469",
    "hanzi": "煎",
    "pinyin": "jiān",
    "english": "to pan fry, to sauté",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-470",
    "hanzi": "肩膀",
    "pinyin": "jiān bǎng",
    "english": "shoulder",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-471",
    "hanzi": "坚决",
    "pinyin": "jiān jué",
    "english": "firm, resolute, determined",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-472",
    "hanzi": "坚强",
    "pinyin": "jiān qiáng",
    "english": "staunch, strong",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-473",
    "hanzi": "尖锐",
    "pinyin": "jiān ruì",
    "english": "sharp, intense, penetrating, pointed, acute (illness)",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-474",
    "hanzi": "艰巨",
    "pinyin": "jiān jù",
    "english": "arduous, terrible (task), very difficult, formidable",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-475",
    "hanzi": "艰苦",
    "pinyin": "jiān kǔ",
    "english": "difficult, hard, arduous",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-476",
    "hanzi": "捡",
    "pinyin": "jiǎn",
    "english": "to pick up, to collect, to gather",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-477",
    "hanzi": "剪刀",
    "pinyin": "jiǎn dāo",
    "english": "scissors",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-478",
    "hanzi": "简历",
    "pinyin": "jiǎn lì",
    "english": "Curriculum Vitae (CV), résumé (resume), biographical notes",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-479",
    "hanzi": "简直",
    "pinyin": "jiǎn zhí",
    "english": "simply, at all, practically",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-480",
    "hanzi": "健身房",
    "pinyin": "jiàn shēn fáng",
    "english": "gym, gymnasium",
    "level": "HSK 5",
    "lesson": 16
  },
  {
    "id": "HSK5-481",
    "hanzi": "建立",
    "pinyin": "jiàn lì",
    "english": "to establish, to set up, to found",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-482",
    "hanzi": "建设",
    "pinyin": "jiàn shè",
    "english": "to build, to construct, construction, constructive",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-483",
    "hanzi": "建议",
    "pinyin": "jiàn yì",
    "english": "to propose, to suggest, to recommend, proposal, suggestion, recommendation, 點|点[diǎn]",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-484",
    "hanzi": "建筑",
    "pinyin": "jiàn zhù",
    "english": "to construct, building",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-485",
    "hanzi": "键盘",
    "pinyin": "jiàn pán",
    "english": "keyboard",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-486",
    "hanzi": "讲究",
    "pinyin": "jiǎng jiu",
    "english": "to pay particular attention to, exquisite, aesthetic",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-487",
    "hanzi": "讲座",
    "pinyin": "jiǎng zuò",
    "english": "a course of lectures",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-488",
    "hanzi": "降落",
    "pinyin": "jiàng luò",
    "english": "to descend, to land",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-489",
    "hanzi": "酱油",
    "pinyin": "jiàng yóu",
    "english": "soy sauce",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-490",
    "hanzi": "浇",
    "pinyin": "jiāo",
    "english": "to pour liquid, to irrigate (using waterwheel), to water, to cast (molten metal), to mold",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-491",
    "hanzi": "交换",
    "pinyin": "jiāo huàn",
    "english": "to exchange, to swap, to switch (telecom), commutative (math), to commute",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-492",
    "hanzi": "交际",
    "pinyin": "jiāo jì",
    "english": "communication, social intercourse",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-493",
    "hanzi": "郊区",
    "pinyin": "jiāo qū",
    "english": "suburban district, outskirts, suburbs",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-494",
    "hanzi": "胶水",
    "pinyin": "jiāo shuǐ",
    "english": "glue",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-495",
    "hanzi": "角度",
    "pinyin": "jiǎo dù",
    "english": "angle, point of view",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-496",
    "hanzi": "狡猾",
    "pinyin": "jiǎo huá",
    "english": "crafty, cunning, sly",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-497",
    "hanzi": "教材",
    "pinyin": "jiào cái",
    "english": "teaching material",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-498",
    "hanzi": "教练",
    "pinyin": "jiào liàn",
    "english": "instructor, sports coach, trainer, 位, 名[míng]",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-499",
    "hanzi": "教训",
    "pinyin": "jiào xun",
    "english": "lesson, moral, to chide sb, to lecture sb",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-500",
    "hanzi": "接触",
    "pinyin": "jiē chù",
    "english": "to touch, to contact, access, in touch with",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-501",
    "hanzi": "接待",
    "pinyin": "jiē dài",
    "english": "to receive (a visitor), to admit (allow sb to enter)",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-502",
    "hanzi": "接近",
    "pinyin": "jiē jìn",
    "english": "to approach, to get close to",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-503",
    "hanzi": "接着",
    "pinyin": "jiē zhe",
    "english": "to catch and hold on, to continue, to go on to do sth, to follow, to carry on, then, after that, subsequently, to proceed, to ensue, in turn, in one's turn",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-504",
    "hanzi": "阶段",
    "pinyin": "jiē duàn",
    "english": "stage, section, phase, period",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-505",
    "hanzi": "结实",
    "pinyin": "jiē shi",
    "english": "rugged, sturdy",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-506",
    "hanzi": "节",
    "pinyin": "jié",
    "english": "festival, holiday, node, joint, section, segment, part, to economize, to save, to abridge, moral integrity, classifier for segments, e.g. lessons, train wagons, biblical verses",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-507",
    "hanzi": "节省",
    "pinyin": "jié shěng",
    "english": "saving, to save, to use sparingly, to cut down on",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-508",
    "hanzi": "结构",
    "pinyin": "jié gòu",
    "english": "structure, composition, makeup, architecture, 個|个[gè]",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-509",
    "hanzi": "结合",
    "pinyin": "jié hé",
    "english": "to combine, to link, to integrate, binding",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-510",
    "hanzi": "结论",
    "pinyin": "jié lùn",
    "english": "conclusion, verdict, to conclude, to reach a verdict",
    "level": "HSK 5",
    "lesson": 17
  },
  {
    "id": "HSK5-511",
    "hanzi": "结账",
    "pinyin": "jié zhàng",
    "english": "to pay the bill, to settle accounts, also written 結帳|结帐",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-512",
    "hanzi": "解放",
    "pinyin": "jiě fàng",
    "english": "to liberate, to emancipate, liberation, refers to the Communists' victory over the Nationalists in 1949",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-513",
    "hanzi": "解说员",
    "pinyin": "jiě shuō yuán",
    "english": "commentator",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-514",
    "hanzi": "届",
    "pinyin": "jiè",
    "english": "to arrive at (place or time), period, to become due, classifier for events, meetings, elections, sporting fixtures, years (of graduation)",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-515",
    "hanzi": "借口",
    "pinyin": "jiè kǒu",
    "english": "to use as an excuse, on the pretext, excuse, pretext",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-516",
    "hanzi": "戒烟",
    "pinyin": "jiè yān",
    "english": "to give up smoking",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-517",
    "hanzi": "戒指",
    "pinyin": "jiè zhi",
    "english": "(finger) ring",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-518",
    "hanzi": "金属",
    "pinyin": "jīn shǔ",
    "english": "metal",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-519",
    "hanzi": "紧",
    "pinyin": "jǐn",
    "english": "tight, strict, close at hand, near, urgent, tense, hard up, short of money, to tighten",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-520",
    "hanzi": "紧急",
    "pinyin": "jǐn jí",
    "english": "urgent, emergency",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-521",
    "hanzi": "尽量",
    "pinyin": "jǐn liàng",
    "english": "as much as possible, to the greatest extent",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-522",
    "hanzi": "谨慎",
    "pinyin": "jǐn shèn",
    "english": "cautious, prudent",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-523",
    "hanzi": "进步",
    "pinyin": "jìn bù",
    "english": "progress, improvement, to improve, to progress",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-524",
    "hanzi": "进口",
    "pinyin": "jìn kǒu",
    "english": "to import, imported",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-525",
    "hanzi": "近代",
    "pinyin": "jìn dài",
    "english": "modern times",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-526",
    "hanzi": "尽力",
    "pinyin": "jìn lì",
    "english": "to strive one's hardest, to spare no effort",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-527",
    "hanzi": "精力",
    "pinyin": "jīng lì",
    "english": "energy",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-528",
    "hanzi": "经典",
    "pinyin": "jīng diǎn",
    "english": "the classics, scriptures, classical",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-529",
    "hanzi": "经营",
    "pinyin": "jīng yíng",
    "english": "to engage in (business etc), to run, to operate",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-530",
    "hanzi": "景色",
    "pinyin": "jǐng sè",
    "english": "scenery, scene, landscape, view",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-531",
    "hanzi": "敬爱",
    "pinyin": "jìng ài",
    "english": "respect and love",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-532",
    "hanzi": "酒吧",
    "pinyin": "jiǔ bā",
    "english": "bar, pub, saloon",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-533",
    "hanzi": "救",
    "pinyin": "jiù",
    "english": "to save, to assist, to rescue",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-534",
    "hanzi": "救护车",
    "pinyin": "jiù hù chē",
    "english": "ambulance",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-535",
    "hanzi": "舅舅",
    "pinyin": "jiù jiu",
    "english": "mother's brother, maternal uncle (informal)",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-536",
    "hanzi": "居然",
    "pinyin": "jū rán",
    "english": "unexpectedly, to one's surprise, go so far as to",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-537",
    "hanzi": "桔子",
    "pinyin": "jú zi",
    "english": "tangerine, also written 橘子",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-538",
    "hanzi": "举",
    "pinyin": "jǔ",
    "english": "to lift, to hold up, to cite, to enumerate, to act, to raise, to choose, to elect",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-539",
    "hanzi": "具备",
    "pinyin": "jù bèi",
    "english": "to possess, to have, equipped with, able to fulfill (conditions or requirements)",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-540",
    "hanzi": "具体",
    "pinyin": "jù tǐ",
    "english": "concrete, definite, specific",
    "level": "HSK 5",
    "lesson": 18
  },
  {
    "id": "HSK5-541",
    "hanzi": "巨大",
    "pinyin": "jù dà",
    "english": "huge, immense, very large, tremendous, gigantic, enormous",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-542",
    "hanzi": "聚会",
    "pinyin": "jù huì",
    "english": "party, gathering, to meet, to get together",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-543",
    "hanzi": "俱乐部",
    "pinyin": "jù lè bù",
    "english": "club (i.e. a group or organization) (loanword)",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-544",
    "hanzi": "据说",
    "pinyin": "jù shuō",
    "english": "it is said that, reportedly",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-545",
    "hanzi": "捐",
    "pinyin": "juān",
    "english": "to contribute, to donate, contribution, tax, to abandon",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-546",
    "hanzi": "卷",
    "pinyin": "juǎn",
    "english": "to roll (up), to sweep up, to carry on, roll",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-547",
    "hanzi": "决赛",
    "pinyin": "jué sài",
    "english": "finals (of a competition)",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-548",
    "hanzi": "决心",
    "pinyin": "jué xīn",
    "english": "determination, resolution, determined, firm and resolute, to make up one's mind",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-549",
    "hanzi": "绝对",
    "pinyin": "jué duì",
    "english": "absolute, unconditional",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-550",
    "hanzi": "角色",
    "pinyin": "jué sè",
    "english": "role",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-551",
    "hanzi": "军事",
    "pinyin": "jūn shì",
    "english": "military affairs, military matters, military",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-552",
    "hanzi": "均匀",
    "pinyin": "jūn yún",
    "english": "even, well-distributed, homogeneous",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-553",
    "hanzi": "卡车",
    "pinyin": "kǎ chē",
    "english": "truck",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-554",
    "hanzi": "开发",
    "pinyin": "kāi fā",
    "english": "to exploit (a resource), to open up (for development), to develop",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-555",
    "hanzi": "开放",
    "pinyin": "kāi fàng",
    "english": "to bloom, to open, to be open-minded, to be open (to the public), to open up (to the outside)",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-556",
    "hanzi": "开幕式",
    "pinyin": "kāi mù shì",
    "english": "opening ceremony",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-557",
    "hanzi": "开心",
    "pinyin": "kāi xīn",
    "english": "to feel happy, to rejoice, to have a great time, to make fun of sb",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-558",
    "hanzi": "砍",
    "pinyin": "kǎn",
    "english": "to chop, to cut down, to throw sth at sb",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-559",
    "hanzi": "看不起",
    "pinyin": "kàn bu qǐ",
    "english": "to look down upon, to despise",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-560",
    "hanzi": "看来",
    "pinyin": "kàn lai",
    "english": "apparently, it seems that",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-561",
    "hanzi": "抗议",
    "pinyin": "kàng yì",
    "english": "to protest, protest",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-562",
    "hanzi": "烤鸭",
    "pinyin": "kǎo yā",
    "english": "roast duck",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-563",
    "hanzi": "颗",
    "pinyin": "kē",
    "english": "classifier for small spheres, pearls, corn grains, teeth, hearts, satellites etc",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-564",
    "hanzi": "可见",
    "pinyin": "kě jiàn",
    "english": "it can clearly be seen (that this is the case), it is (thus) clear, clear, visible",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-565",
    "hanzi": "可靠",
    "pinyin": "kě kào",
    "english": "reliable",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-566",
    "hanzi": "可怕",
    "pinyin": "kě pà",
    "english": "awful, dreadful, fearful, formidable, frightful, scary, hideous, horrible, terrible, terribly",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-567",
    "hanzi": "刻苦",
    "pinyin": "kè kǔ",
    "english": "hardworking, assiduous",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-568",
    "hanzi": "课程",
    "pinyin": "kè chéng",
    "english": "course, academic program, 節|节, 門|门[mén]",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-569",
    "hanzi": "克",
    "pinyin": "kè",
    "english": "variant of 克[kè], to subdue, to overthrow, to restrain",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-570",
    "hanzi": "克服",
    "pinyin": "kè fú",
    "english": "(try to) overcome (hardships etc), to conquer, to put up with, to endure",
    "level": "HSK 5",
    "lesson": 19
  },
  {
    "id": "HSK5-571",
    "hanzi": "客观",
    "pinyin": "kè guān",
    "english": "objective, impartial",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-572",
    "hanzi": "客厅",
    "pinyin": "kè tīng",
    "english": "drawing room (room for arriving guests), living room",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-573",
    "hanzi": "空间",
    "pinyin": "kōng jiān",
    "english": "space",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-574",
    "hanzi": "恐怖",
    "pinyin": "kǒng bù",
    "english": "terrible, frightful, frightening, terror, terrorist",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-575",
    "hanzi": "空闲",
    "pinyin": "kòng xián",
    "english": "idle, free time, leisure",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-576",
    "hanzi": "控制",
    "pinyin": "kòng zhì",
    "english": "control, to exercise control over, to contain",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-577",
    "hanzi": "口味",
    "pinyin": "kǒu wèi",
    "english": "a person's preferences, tastes (in food), flavor",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-578",
    "hanzi": "夸",
    "pinyin": "kuā",
    "english": "to boast, to exaggerate, to praise",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-579",
    "hanzi": "会计",
    "pinyin": "kuài jì",
    "english": "accountant, accountancy, accounting",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-580",
    "hanzi": "矿泉水",
    "pinyin": "kuàng quán shuǐ",
    "english": "mineral spring water, 杯[bēi]",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-581",
    "hanzi": "辣椒",
    "pinyin": "là jiāo",
    "english": "hot pepper, chili",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-582",
    "hanzi": "蜡烛",
    "pinyin": "là zhú",
    "english": "candle, 支[zhī]",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-583",
    "hanzi": "来自",
    "pinyin": "lái zì",
    "english": "to come from (a place), From: (in email header)",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-584",
    "hanzi": "拦",
    "pinyin": "lán",
    "english": "to cut off, to hinder",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-585",
    "hanzi": "烂",
    "pinyin": "làn",
    "english": "soft, mushy, well-cooked and soft, to rot, to decompose, rotten, worn out, chaotic, messy, utterly, thoroughly",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-586",
    "hanzi": "狼",
    "pinyin": "láng",
    "english": "wolf, 隻|只, 條|条[tiáo]",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-587",
    "hanzi": "劳动",
    "pinyin": "láo dòng",
    "english": "work, toil, physical labor",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-588",
    "hanzi": "劳驾",
    "pinyin": "láo jià",
    "english": "excuse me",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-589",
    "hanzi": "老百姓",
    "pinyin": "lǎo bǎi xìng",
    "english": "ordinary people, the \"person in the street\"",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-590",
    "hanzi": "老板",
    "pinyin": "lǎo bǎn",
    "english": "boss, business proprietor",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-591",
    "hanzi": "老实",
    "pinyin": "lǎo shí",
    "english": "honest, sincere, open and guileless, naive",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-592",
    "hanzi": "老鼠",
    "pinyin": "lǎo shǔ",
    "english": "rat, mouse",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-593",
    "hanzi": "姥姥",
    "pinyin": "lǎo lao",
    "english": "(informal) mother's mother, maternal grandmother",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-594",
    "hanzi": "乐观",
    "pinyin": "lè guān",
    "english": "optimistic, hopeful",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-595",
    "hanzi": "雷",
    "pinyin": "léi",
    "english": "thunder, (internet slang) terrifying, terrific",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-596",
    "hanzi": "类",
    "pinyin": "lèi",
    "english": "kind, type, class, category, similar, like, to resemble",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-597",
    "hanzi": "梨",
    "pinyin": "lí",
    "english": "pear",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-598",
    "hanzi": "离婚",
    "pinyin": "lí hūn",
    "english": "to divorce, divorced from (one's spouse)",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-599",
    "hanzi": "厘米",
    "pinyin": "lí mǐ",
    "english": "centimeter, also written 厘米",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-600",
    "hanzi": "礼拜天",
    "pinyin": "lǐ bài tiān",
    "english": "Sunday",
    "level": "HSK 5",
    "lesson": 20
  },
  {
    "id": "HSK5-601",
    "hanzi": "理论",
    "pinyin": "lǐ lùn",
    "english": "theory",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-602",
    "hanzi": "理由",
    "pinyin": "lǐ yóu",
    "english": "reason, grounds, justification",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-603",
    "hanzi": "粒",
    "pinyin": "lì",
    "english": "grain, granule, classifier for small round things (peas, bullets, peanuts, pills, grains etc)",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-604",
    "hanzi": "立方",
    "pinyin": "lì fāng",
    "english": "cube",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-605",
    "hanzi": "立即",
    "pinyin": "lì jí",
    "english": "immediately",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-606",
    "hanzi": "立刻",
    "pinyin": "lì kè",
    "english": "forthwith, immediate, prompt, promptly, straightway, thereupon, at once",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-607",
    "hanzi": "力量",
    "pinyin": "lì liang",
    "english": "power, force, strength",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-608",
    "hanzi": "利润",
    "pinyin": "lì rùn",
    "english": "profits",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-609",
    "hanzi": "利息",
    "pinyin": "lì xī",
    "english": "interest (on a loan)",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-610",
    "hanzi": "利益",
    "pinyin": "lì yì",
    "english": "benefit, (in sb's) interest",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-611",
    "hanzi": "利用",
    "pinyin": "lì yòng",
    "english": "exploit, make use of, to use, to take advantage of, to utilize",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-612",
    "hanzi": "连忙",
    "pinyin": "lián máng",
    "english": "promptly, at once",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-613",
    "hanzi": "连续剧",
    "pinyin": "lián xù jù",
    "english": "serialized drama, dramatic series, show in parts",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-614",
    "hanzi": "联合",
    "pinyin": "lián hé",
    "english": "to combine, to join, unite, alliance",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-615",
    "hanzi": "恋爱",
    "pinyin": "liàn ài",
    "english": "(romantic) love, 場|场[chǎng], in love, to have an affair",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-616",
    "hanzi": "良好",
    "pinyin": "liáng hǎo",
    "english": "good, favorable, well, fine",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-617",
    "hanzi": "粮食",
    "pinyin": "liáng shi",
    "english": "foodstuff, cereals",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-618",
    "hanzi": "了不起",
    "pinyin": "liǎo bu qǐ",
    "english": "amazing, terrific, extraordinary",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-619",
    "hanzi": "临时",
    "pinyin": "lín shí",
    "english": "at the instant sth happens, temporary, interim, ad hoc",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-620",
    "hanzi": "铃",
    "pinyin": "líng",
    "english": "(small) bell",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-621",
    "hanzi": "零件",
    "pinyin": "líng jiàn",
    "english": "part, component",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-622",
    "hanzi": "零钱",
    "pinyin": "líng qián",
    "english": "change (of money), small change, pocket money",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-623",
    "hanzi": "零食",
    "pinyin": "líng shí",
    "english": "between-meal nibbles, snacks",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-624",
    "hanzi": "灵活",
    "pinyin": "líng huó",
    "english": "flexible, nimble, agile",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-625",
    "hanzi": "领导",
    "pinyin": "lǐng dǎo",
    "english": "lead, leading, to lead, leadership, leader, 個|个[gè]",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-626",
    "hanzi": "领域",
    "pinyin": "lǐng yù",
    "english": "domain, sphere, field, territory, area",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-627",
    "hanzi": "流传",
    "pinyin": "liú chuán",
    "english": "to spread, to circulate, to hand down",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-628",
    "hanzi": "浏览",
    "pinyin": "liú lǎn",
    "english": "to skim over, to browse",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-629",
    "hanzi": "龙",
    "pinyin": "lóng",
    "english": "dragon, imperial",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-630",
    "hanzi": "漏",
    "pinyin": "lòu",
    "english": "to leak, to divulge, to leave out by mistake, waterclock or hourglass (old)",
    "level": "HSK 5",
    "lesson": 21
  },
  {
    "id": "HSK5-631",
    "hanzi": "露",
    "pinyin": "lù",
    "english": "dew, syrup, nectar, outdoors (not under cover), to show, to reveal, to betray, to expose",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-632",
    "hanzi": "陆地",
    "pinyin": "lù dì",
    "english": "dry land (as opposed to the sea)",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-633",
    "hanzi": "陆续",
    "pinyin": "lù xù",
    "english": "in turn, successively, one after the other, bit by bit",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-634",
    "hanzi": "录取",
    "pinyin": "lù qǔ",
    "english": "to recruit, to enroll",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-635",
    "hanzi": "录音",
    "pinyin": "lù yīn",
    "english": "to record (sound), sound recording",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-636",
    "hanzi": "轮流",
    "pinyin": "lún liú",
    "english": "to alternate, to take turns",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-637",
    "hanzi": "论文",
    "pinyin": "lùn wén",
    "english": "paper, treatise, thesis, to discuss a paper or thesis (old)",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-638",
    "hanzi": "逻辑",
    "pinyin": "luó ji",
    "english": "logic (loanword)",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-639",
    "hanzi": "落后",
    "pinyin": "luò hòu",
    "english": "to fall behind, to lag (in technology etc), backward, to retrogress",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-640",
    "hanzi": "骂",
    "pinyin": "mà",
    "english": "to scold, to abuse, 頓|顿[dùn]",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-641",
    "hanzi": "麦克风",
    "pinyin": "mài kè fēng",
    "english": "microphone (loanword)",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-642",
    "hanzi": "馒头",
    "pinyin": "mán tou",
    "english": "steamed roll, steamed bun, steamed bread",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-643",
    "hanzi": "满足",
    "pinyin": "mǎn zú",
    "english": "to satisfy, to meet (the needs of), satisfied, content",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-644",
    "hanzi": "毛",
    "pinyin": "máo",
    "english": "hair, feather, down, wool, mildew, mold, coarse or semifinished, young, raw, careless, unthinking, nervous, scared, (of currency) to devalue or depreciate, classifier for Chinese fractional monetary unit ( = 角, = 1, 10 yuan or 10 fen 分)",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-645",
    "hanzi": "毛病",
    "pinyin": "máo bìng",
    "english": "fault, defect, shortcomings, ailment",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-646",
    "hanzi": "矛盾",
    "pinyin": "máo dùn",
    "english": "contradictory, contradiction",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-647",
    "hanzi": "冒险",
    "pinyin": "mào xiǎn",
    "english": "to take risks, to take chances, foray, adventure",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-648",
    "hanzi": "贸易",
    "pinyin": "mào yì",
    "english": "(commercial) trade",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-649",
    "hanzi": "眉毛",
    "pinyin": "méi mao",
    "english": "eyebrow",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-650",
    "hanzi": "煤炭",
    "pinyin": "méi tàn",
    "english": "coal",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-651",
    "hanzi": "美术",
    "pinyin": "měi shù",
    "english": "art, fine arts, painting",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-652",
    "hanzi": "魅力",
    "pinyin": "mèi lì",
    "english": "charm, fascination, glamor, charisma",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-653",
    "hanzi": "迷路",
    "pinyin": "mí lù",
    "english": "to lose the way, lost, labyrinth, labyrinthus vestibularis (of the inner ear)",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-654",
    "hanzi": "谜语",
    "pinyin": "mí yǔ",
    "english": "riddle, conundrum",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-655",
    "hanzi": "密切",
    "pinyin": "mì qiè",
    "english": "close, familiar, intimate, closely (related), to foster close ties, to pay close attention",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-656",
    "hanzi": "蜜蜂",
    "pinyin": "mì fēng",
    "english": "bee, honeybee, 群[qún]",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-657",
    "hanzi": "秘密",
    "pinyin": "mì mì",
    "english": "secret",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-658",
    "hanzi": "秘书",
    "pinyin": "mì shū",
    "english": "secretary",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-659",
    "hanzi": "棉花",
    "pinyin": "mián hua",
    "english": "cotton",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-660",
    "hanzi": "面对",
    "pinyin": "miàn duì",
    "english": "to confront, to face",
    "level": "HSK 5",
    "lesson": 22
  },
  {
    "id": "HSK5-661",
    "hanzi": "面积",
    "pinyin": "miàn ji",
    "english": "area (of a floor, piece of land etc), surface area, tract of land",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-662",
    "hanzi": "面临",
    "pinyin": "miàn lín",
    "english": "to face sth, to be confronted with",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-663",
    "hanzi": "描写",
    "pinyin": "miáo xiě",
    "english": "to describe, to depict, to portray, description",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-664",
    "hanzi": "苗条",
    "pinyin": "miáo tiáo",
    "english": "slim, slender, graceful",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-665",
    "hanzi": "秒",
    "pinyin": "miǎo",
    "english": "second (of time), unit of angle or arc equivalent to one sixtieth of a degree",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-666",
    "hanzi": "民主",
    "pinyin": "mín zhǔ",
    "english": "democracy",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-667",
    "hanzi": "明确",
    "pinyin": "míng què",
    "english": "clear-cut, definite, explicit, to clarify, to specify, to make definite",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-668",
    "hanzi": "明显",
    "pinyin": "míng xiǎn",
    "english": "clear, distinct, obvious",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-669",
    "hanzi": "明信片",
    "pinyin": "míng xìn piàn",
    "english": "postcard",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-670",
    "hanzi": "明星",
    "pinyin": "míng xīng",
    "english": "star, celebrity",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-671",
    "hanzi": "名牌",
    "pinyin": "míng pái",
    "english": "famous brand",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-672",
    "hanzi": "名片",
    "pinyin": "míng piàn",
    "english": "(business) card",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-673",
    "hanzi": "名胜",
    "pinyin": "míng shèng",
    "english": "a place famous for its scenery or historical relics, scenic spot",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-674",
    "hanzi": "命令",
    "pinyin": "mìng lìng",
    "english": "order, command, 個|个[gè]",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-675",
    "hanzi": "命运",
    "pinyin": "mìng yùn",
    "english": "fate, destiny",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-676",
    "hanzi": "摸",
    "pinyin": "mō",
    "english": "to feel with the hand, to touch, to stroke, to grope, to feel (one's pulse)",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-677",
    "hanzi": "摩托车",
    "pinyin": "mó tuō chē",
    "english": "motorbike, motorcycle, 部[bù]",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-678",
    "hanzi": "模仿",
    "pinyin": "mó fǎng",
    "english": "to imitate, to copy, to emulate, to mimic, model",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-679",
    "hanzi": "模糊",
    "pinyin": "mó hu",
    "english": "vague, indistinct, fuzzy",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-680",
    "hanzi": "陌生",
    "pinyin": "mò shēng",
    "english": "strange, unfamiliar",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-681",
    "hanzi": "某",
    "pinyin": "mǒu",
    "english": "some, a certain, sb or sth indefinite, such-and-such",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-682",
    "hanzi": "目标",
    "pinyin": "mù biāo",
    "english": "target, goal, objective",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-683",
    "hanzi": "目录",
    "pinyin": "mù lù",
    "english": "catalog, table of contents, directory (on computer hard drive), list, contents",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-684",
    "hanzi": "目前",
    "pinyin": "mù qián",
    "english": "at the present time, currently",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-685",
    "hanzi": "木头",
    "pinyin": "mù tou",
    "english": "slow-witted, blockhead, log (of wood, timber etc), 根[gēn]",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-686",
    "hanzi": "哪怕",
    "pinyin": "nǎ pà",
    "english": "even, even if, even though, no matter how",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-687",
    "hanzi": "难怪",
    "pinyin": "nán guài",
    "english": "(it's) no wonder (that...), (it's) not surprising (that)",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-688",
    "hanzi": "难看",
    "pinyin": "nán kàn",
    "english": "ugly, unsightly",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-689",
    "hanzi": "脑袋",
    "pinyin": "nǎo dài",
    "english": "head, skull, brains, mental capability, 個|个[gè]",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-690",
    "hanzi": "内科",
    "pinyin": "nèi kē",
    "english": "internal medicine, general medicine",
    "level": "HSK 5",
    "lesson": 23
  },
  {
    "id": "HSK5-691",
    "hanzi": "嫩",
    "pinyin": "nèn",
    "english": "tender, soft, delicate, light (color), inexperienced, unskilled",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-692",
    "hanzi": "能干",
    "pinyin": "néng gàn",
    "english": "capable, competent",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-693",
    "hanzi": "能源",
    "pinyin": "néng yuán",
    "english": "energy, power source",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-694",
    "hanzi": "年代",
    "pinyin": "nián dài",
    "english": "a decade of a century (e.g. the Sixties), age, era, period",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-695",
    "hanzi": "年纪",
    "pinyin": "nián jì",
    "english": "age, 個|个[gè]",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-696",
    "hanzi": "念",
    "pinyin": "niàn",
    "english": "to read, to study (a degree course), to read aloud, to miss (sb), idea, remembrance, twenty (banker's anti-fraud numeral corresponding to 廿, 20)",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-697",
    "hanzi": "宁可",
    "pinyin": "nìng kě",
    "english": "preferably, one would prefer to...(or not to...), would rather, (would) be better to, (to pick) the lesser of two evils",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-698",
    "hanzi": "牛仔裤",
    "pinyin": "niú zǎi kù",
    "english": "jeans, also written 牛崽褲|牛崽裤",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-699",
    "hanzi": "浓",
    "pinyin": "nóng",
    "english": "concentrated, dense",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-700",
    "hanzi": "农民",
    "pinyin": "nóng mín",
    "english": "peasant",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-701",
    "hanzi": "农业",
    "pinyin": "nóng yè",
    "english": "agriculture, farming",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-702",
    "hanzi": "女士",
    "pinyin": "nǚ shì",
    "english": "lady, madam, 位[wèi], Miss, Ms",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-703",
    "hanzi": "偶然",
    "pinyin": "ǒu rán",
    "english": "incidentally, occasional, occasionally, by chance, randomly",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-704",
    "hanzi": "拍",
    "pinyin": "pāi",
    "english": "to pat, to clap, to slap, to swat, to take (a photo), to shoot (a film), racket (sports), beat (music)",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-705",
    "hanzi": "排队",
    "pinyin": "pái duì",
    "english": "to line up",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-706",
    "hanzi": "排球",
    "pinyin": "pái qiú",
    "english": "volleyball",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-707",
    "hanzi": "派",
    "pinyin": "pài",
    "english": "clique, school, group, faction, to dispatch, to send, to assign, to appoint, pi (Greek letter Ππ), the circular ratio pi = 3.1415926, (loanword) pie",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-708",
    "hanzi": "盼望",
    "pinyin": "pàn wàng",
    "english": "to hope for, to look forward to",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-709",
    "hanzi": "赔偿",
    "pinyin": "péi cháng",
    "english": "to compensate",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-710",
    "hanzi": "培养",
    "pinyin": "péi yǎng",
    "english": "to cultivate, to breed, to foster, to nurture, to educate, to groom (for a position), education, fostering, culture (biology)",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-711",
    "hanzi": "配合",
    "pinyin": "pèi hé",
    "english": "matching, fitting in with, compatible with, to correspond, to fit, to conform to, rapport, to coordinate with, to act in concert with, to cooperate, to become man and wife, to combine parts of machine",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-712",
    "hanzi": "佩服",
    "pinyin": "pèi fú",
    "english": "to admire",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-713",
    "hanzi": "盆",
    "pinyin": "pén",
    "english": "basin, flower pot, unit of volume equal to 12 斗 and 8 升, approx 128 liters",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-714",
    "hanzi": "碰见",
    "pinyin": "pèng jiàn",
    "english": "to run into, to meet (unexpectedly), to bump into",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-715",
    "hanzi": "披",
    "pinyin": "pī",
    "english": "to drape over one's shoulders, to open, to unroll, to split open, to spread out",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-716",
    "hanzi": "批",
    "pinyin": "pī",
    "english": "to ascertain, to act on, to criticize, to pass on, classifier for batches, lots, military flights, tier (for the ranking of universities and colleges)",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-717",
    "hanzi": "批准",
    "pinyin": "pī zhǔn",
    "english": "to approve, to ratify",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-718",
    "hanzi": "疲劳",
    "pinyin": "pí láo",
    "english": "fatigue, wearily, weariness, weary",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-719",
    "hanzi": "皮鞋",
    "pinyin": "pí xié",
    "english": "leather shoes",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-720",
    "hanzi": "匹",
    "pinyin": "pǐ",
    "english": "classifier for horses, mules etc, Taiwan pr. [pī], ordinary person, classifier for cloth: bolt, horsepower",
    "level": "HSK 5",
    "lesson": 24
  },
  {
    "id": "HSK5-721",
    "hanzi": "片",
    "pinyin": "piàn",
    "english": "thin piece, flake, a slice, film, TV play, to slice, to carve thin, partial, incomplete, one-sided, classifier for slices, tablets, tract of land, area of water, classifier for CDs, movies, DVDs etc, used with numeral 一: classifier for scenario, scene, feeling, atmosphere, sound etc",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-722",
    "hanzi": "片面",
    "pinyin": "piàn miàn",
    "english": "unilateral, one-sided",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-723",
    "hanzi": "飘",
    "pinyin": "piāo",
    "english": "to float",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-724",
    "hanzi": "频道",
    "pinyin": "pín dào",
    "english": "frequency, (television) channel",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-725",
    "hanzi": "品种",
    "pinyin": "pǐn zhǒng",
    "english": "breed, variety",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-726",
    "hanzi": "凭",
    "pinyin": "píng",
    "english": "to lean against, to rely on, on the basis of, no matter (how, what etc), proof",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-727",
    "hanzi": "平",
    "pinyin": "píng",
    "english": "flat, level, equal, to tie (make the same score), to draw (score), calm, peaceful, see also 平聲|平声[píng shēng]",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-728",
    "hanzi": "平常",
    "pinyin": "píng cháng",
    "english": "ordinary, common, usually, ordinarily",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-729",
    "hanzi": "平等",
    "pinyin": "píng děng",
    "english": "equal, equality",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-730",
    "hanzi": "平方",
    "pinyin": "píng fāng",
    "english": "square (as in square foot, square mile, square root)",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-731",
    "hanzi": "平衡",
    "pinyin": "píng héng",
    "english": "balance, equilibrium",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-732",
    "hanzi": "平静",
    "pinyin": "píng jìng",
    "english": "tranquil, undisturbed, serene",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-733",
    "hanzi": "平均",
    "pinyin": "píng jūn",
    "english": "average",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-734",
    "hanzi": "评价",
    "pinyin": "píng jià",
    "english": "to evaluate, to assess",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-735",
    "hanzi": "破产",
    "pinyin": "pò chǎn",
    "english": "to go bankrupt, to become impoverished, bankruptcy",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-736",
    "hanzi": "破坏",
    "pinyin": "pò huài",
    "english": "destruction, damage, to wreck, to break, to destroy",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-737",
    "hanzi": "迫切",
    "pinyin": "pò qiè",
    "english": "urgent, pressing",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-738",
    "hanzi": "朴素",
    "pinyin": "pǔ sù",
    "english": "plain and simple, unadorned, simple living, not frivolous",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-739",
    "hanzi": "期待",
    "pinyin": "qī dài",
    "english": "to look forward to, to await, expectation",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-740",
    "hanzi": "期间",
    "pinyin": "qī jiān",
    "english": "period of time, time, time period, period",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-741",
    "hanzi": "其余",
    "pinyin": "qí yú",
    "english": "the rest, the others, remaining, remainder, apart from them",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-742",
    "hanzi": "奇迹",
    "pinyin": "qí jì",
    "english": "miracle, miraculous, wonder, marvel",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-743",
    "hanzi": "启发",
    "pinyin": "qǐ fā",
    "english": "to enlighten, to explain and arouse interest, to inspire, inspiration, heuristic (attributively), to teach",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-744",
    "hanzi": "企图",
    "pinyin": "qǐ tú",
    "english": "to attempt, to try, attempt",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-745",
    "hanzi": "企业",
    "pinyin": "qǐ yè",
    "english": "company, firm, enterprise, corporation",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-746",
    "hanzi": "气氛",
    "pinyin": "qì fēn",
    "english": "atmosphere, mood",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-747",
    "hanzi": "汽油",
    "pinyin": "qì yóu",
    "english": "gasoline",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-748",
    "hanzi": "牵",
    "pinyin": "qiān",
    "english": "to pull (an animal on a tether), to lead along, to hold hands",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-749",
    "hanzi": "签字",
    "pinyin": "qiān zì",
    "english": "to sign (a signature)",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-750",
    "hanzi": "谦虚",
    "pinyin": "qiān xū",
    "english": "modest, self-effacing, to make modest remarks",
    "level": "HSK 5",
    "lesson": 25
  },
  {
    "id": "HSK5-751",
    "hanzi": "前途",
    "pinyin": "qián tú",
    "english": "prospects, future outlook, journey",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-752",
    "hanzi": "浅",
    "pinyin": "qiǎn",
    "english": "shallow, light (color)",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-753",
    "hanzi": "欠",
    "pinyin": "qiàn",
    "english": "deficient, to owe, to lack, yawn",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-754",
    "hanzi": "枪",
    "pinyin": "qiāng",
    "english": "gun, firearm, rifle, spear, thing with shape or function similar to a gun, 把, 杆, 條|条, 枝[zhī], to substitute for another person in a test, to knock, classifier for rifle shots",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-755",
    "hanzi": "强调",
    "pinyin": "qiáng diào",
    "english": "to emphasize (a statement), to stress",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-756",
    "hanzi": "强烈",
    "pinyin": "qiáng liè",
    "english": "intense, (violently) strong",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-757",
    "hanzi": "抢",
    "pinyin": "qiǎng",
    "english": "to fight over, to rush, to scramble, to grab, to rob, to snatch",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-758",
    "hanzi": "悄悄",
    "pinyin": "qiāo qiāo",
    "english": "quietly, secretly, stealthily, quiet, worried, Taiwan pr. [qiǎo qiǎo]",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-759",
    "hanzi": "瞧",
    "pinyin": "qiáo",
    "english": "to look at, to see, to see (a doctor), to visit",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-760",
    "hanzi": "巧妙",
    "pinyin": "qiǎo miào",
    "english": "ingenious, clever, ingenuity, artifice",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-761",
    "hanzi": "切",
    "pinyin": "qiē",
    "english": "to cut, to slice, tangent (math)",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-762",
    "hanzi": "亲爱",
    "pinyin": "qīn ài",
    "english": "dear, beloved, darling",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-763",
    "hanzi": "亲切",
    "pinyin": "qīn qiè",
    "english": "amiable, cordial, close and dear, familiar",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-764",
    "hanzi": "亲自",
    "pinyin": "qīn zì",
    "english": "personally",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-765",
    "hanzi": "侵略",
    "pinyin": "qīn lvè",
    "english": "invasion, encroachment",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-766",
    "hanzi": "勤奋",
    "pinyin": "qín fèn",
    "english": "hardworking, diligent",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-767",
    "hanzi": "勤劳",
    "pinyin": "qín láo",
    "english": "hardworking, industrious, diligent",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-768",
    "hanzi": "青",
    "pinyin": "qīng",
    "english": "nature's color, green or blue, greenish black, youth, young (of people), abbr. for Qinghai province 青海",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-769",
    "hanzi": "青春",
    "pinyin": "qīng chūn",
    "english": "youth, youthfulness",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-770",
    "hanzi": "青少年",
    "pinyin": "qīng shào nián",
    "english": "adolescent, youth, teenager",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-771",
    "hanzi": "轻视",
    "pinyin": "qīng shì",
    "english": "contempt, contemptuous, to despise, to scorn, scornful",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-772",
    "hanzi": "清淡",
    "pinyin": "qīng dàn",
    "english": "light (of food, not greasy or strongly flavored), insipid, slack (sales)",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-773",
    "hanzi": "情景",
    "pinyin": "qíng jǐng",
    "english": "scene, sight, circumstances",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-774",
    "hanzi": "情绪",
    "pinyin": "qíng xù",
    "english": "mood, state of mind, moodiness",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-775",
    "hanzi": "请求",
    "pinyin": "qǐng qiú",
    "english": "request",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-776",
    "hanzi": "庆祝",
    "pinyin": "qìng zhù",
    "english": "to celebrate",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-777",
    "hanzi": "球迷",
    "pinyin": "qiú mí",
    "english": "soccer fan, crazy about ball sports",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-778",
    "hanzi": "趋势",
    "pinyin": "qū shì",
    "english": "trend, tendency",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-779",
    "hanzi": "娶",
    "pinyin": "qǔ",
    "english": "to take a wife, to marry (a woman)",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-780",
    "hanzi": "取消",
    "pinyin": "qǔ xiāo",
    "english": "to cancel, cancellation",
    "level": "HSK 5",
    "lesson": 26
  },
  {
    "id": "HSK5-781",
    "hanzi": "去世",
    "pinyin": "qù shì",
    "english": "to pass away, to die",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-782",
    "hanzi": "圈",
    "pinyin": "quān",
    "english": "circle, ring, loop, classifier for loops, orbits, laps of race etc, to surround, to circle",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-783",
    "hanzi": "全面",
    "pinyin": "quán miàn",
    "english": "all-around, comprehensive, total, overall",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-784",
    "hanzi": "权力",
    "pinyin": "quán lì",
    "english": "power, authority",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-785",
    "hanzi": "权利",
    "pinyin": "quán lì",
    "english": "power, right, privilege",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-786",
    "hanzi": "劝",
    "pinyin": "quàn",
    "english": "to advise, to urge, to try to persuade, to exhort",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-787",
    "hanzi": "缺乏",
    "pinyin": "quē fá",
    "english": "shortage, be lacking, to be short of, to lack, scarcity",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-788",
    "hanzi": "确定",
    "pinyin": "què dìng",
    "english": "definite, certain, fixed, to fix (on sth), to determine, to be sure, to ensure, to make certain, to ascertain, to clinch, to recognize, to confirm, OK (on computer dialog box)",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-789",
    "hanzi": "确认",
    "pinyin": "què rèn",
    "english": "to confirm, to verify, confirmation",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-790",
    "hanzi": "燃烧",
    "pinyin": "rán shāo",
    "english": "to ignite, to combust, to burn, combustion, flaming",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-791",
    "hanzi": "嚷",
    "pinyin": "rǎng",
    "english": "blurt out, to shout",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-792",
    "hanzi": "绕",
    "pinyin": "rào",
    "english": "to wind, to coil (thread), to rotate around, to spiral, to move around, to go round (an obstacle), to by-pass, to make a detour, to confuse, to perplex",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-793",
    "hanzi": "热爱",
    "pinyin": "rè ài",
    "english": "to love ardently, to adore",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-794",
    "hanzi": "热烈",
    "pinyin": "rè liè",
    "english": "warm (welcome etc)",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-795",
    "hanzi": "热心",
    "pinyin": "rè xīn",
    "english": "enthusiasm, zeal, zealous, zest, enthusiastic, ardent, warmhearted",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-796",
    "hanzi": "人才",
    "pinyin": "rén cái",
    "english": "a person's talent, talented person, distinguished person, a talent (worth head-hunting), person's looks, an attractive woman, used interchangeably with 人材",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-797",
    "hanzi": "人口",
    "pinyin": "rén kǒu",
    "english": "population",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-798",
    "hanzi": "人类",
    "pinyin": "rén lèi",
    "english": "humanity, human race, mankind",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-799",
    "hanzi": "人生",
    "pinyin": "rén shēng",
    "english": "life (one's time on earth)",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-800",
    "hanzi": "人事",
    "pinyin": "rén shì",
    "english": "human affairs, ways of the world, consciousness of the world, what is humanly possible, personnel matters, sexual awareness, sexual passion, facts of life",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-801",
    "hanzi": "人物",
    "pinyin": "rén wù",
    "english": "person, character (in a play, novel etc), protagonist",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-802",
    "hanzi": "人员",
    "pinyin": "rén yuán",
    "english": "staff, crew, personnel",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-803",
    "hanzi": "忍不住",
    "pinyin": "rěn bu zhù",
    "english": "cannot help, unable to bear",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-804",
    "hanzi": "日常",
    "pinyin": "rì cháng",
    "english": "daily, everyday",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-805",
    "hanzi": "日程",
    "pinyin": "rì chéng",
    "english": "schedule, itinerary",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-806",
    "hanzi": "日历",
    "pinyin": "rì lì",
    "english": "calendar, 本[běn]",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-807",
    "hanzi": "日期",
    "pinyin": "rì qī",
    "english": "date",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-808",
    "hanzi": "日用品",
    "pinyin": "rì yòng pǐn",
    "english": "articles for daily use, 個|个[gè]",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-809",
    "hanzi": "融化",
    "pinyin": "róng huà",
    "english": "to melt, to thaw, to dissolve, to blend into, to combine, to fuse",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-810",
    "hanzi": "荣幸",
    "pinyin": "róng xìng",
    "english": "honored",
    "level": "HSK 5",
    "lesson": 27
  },
  {
    "id": "HSK5-811",
    "hanzi": "荣誉",
    "pinyin": "róng yù",
    "english": "honor, credit, glory, (honorable) reputation, honorary",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-812",
    "hanzi": "如何",
    "pinyin": "rú hé",
    "english": "how, what way, what",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-813",
    "hanzi": "如今",
    "pinyin": "rú jīn",
    "english": "nowadays, now",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-814",
    "hanzi": "软件",
    "pinyin": "ruǎn jiàn",
    "english": "(computer) software",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-815",
    "hanzi": "弱",
    "pinyin": "ruò",
    "english": "weak, feeble, young, inferior, (following a decimal or fraction) slightly less than",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-816",
    "hanzi": "洒",
    "pinyin": "sǎ",
    "english": "to sprinkle, to spray, to spill, to shed",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-817",
    "hanzi": "嗓子",
    "pinyin": "sǎng zi",
    "english": "throat, voice",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-818",
    "hanzi": "杀",
    "pinyin": "shā",
    "english": "to kill, to murder, to fight, to weaken or reduce, to smart (topolect), to counteract, (used after a verb) extremely",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-819",
    "hanzi": "沙漠",
    "pinyin": "shā mò",
    "english": "desert",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-820",
    "hanzi": "沙滩",
    "pinyin": "shā tān",
    "english": "beach, sandy shore",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-821",
    "hanzi": "傻",
    "pinyin": "shǎ",
    "english": "foolish",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-822",
    "hanzi": "晒",
    "pinyin": "shài",
    "english": "to dry in the sun, to sunbathe, to share files (loan from \"share\")",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-823",
    "hanzi": "删除",
    "pinyin": "shān chú",
    "english": "to delete, to cancel",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-824",
    "hanzi": "闪电",
    "pinyin": "shǎn diàn",
    "english": "lightning",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-825",
    "hanzi": "善良",
    "pinyin": "shàn liáng",
    "english": "good and honest, kind-hearted",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-826",
    "hanzi": "善于",
    "pinyin": "shàn yú",
    "english": "to be good at, to be adept at",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-827",
    "hanzi": "扇子",
    "pinyin": "shān zi",
    "english": "fan",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-828",
    "hanzi": "商品",
    "pinyin": "shāng pǐn",
    "english": "good, commodity, merchandise",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-829",
    "hanzi": "商业",
    "pinyin": "shāng yè",
    "english": "business, trade, commerce",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-830",
    "hanzi": "上当",
    "pinyin": "shàng dàng",
    "english": "taken in (by sb's deceit), to be fooled, to be duped",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-831",
    "hanzi": "勺子",
    "pinyin": "sháo zi",
    "english": "scoop, ladle",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-832",
    "hanzi": "蛇",
    "pinyin": "shé",
    "english": "snake, serpent",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-833",
    "hanzi": "舌头",
    "pinyin": "shé tou",
    "english": "tongue, enemy soldier captured for the purpose of extracting information",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-834",
    "hanzi": "舍不得",
    "pinyin": "shě bu de",
    "english": "to hate to do sth, to hate to part with, to begrudge",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-835",
    "hanzi": "设备",
    "pinyin": "shè bèi",
    "english": "equipment, facilities, installations",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-836",
    "hanzi": "设计",
    "pinyin": "shè jì",
    "english": "plan, design, to design, to plan",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-837",
    "hanzi": "设施",
    "pinyin": "shè shī",
    "english": "facilities, installation",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-838",
    "hanzi": "射击",
    "pinyin": "shè jī",
    "english": "to shoot, to fire (a gun)",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-839",
    "hanzi": "摄影",
    "pinyin": "shè yǐng",
    "english": "to take a photograph, photography, to shoot (a movie)",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-840",
    "hanzi": "伸",
    "pinyin": "shēn",
    "english": "to stretch, to extend",
    "level": "HSK 5",
    "lesson": 28
  },
  {
    "id": "HSK5-841",
    "hanzi": "深刻",
    "pinyin": "shēn kè",
    "english": "profound, deep, deep-going",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-842",
    "hanzi": "身材",
    "pinyin": "shēn cái",
    "english": "stature, build (height and weight), figure",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-843",
    "hanzi": "身份",
    "pinyin": "shēn fèn",
    "english": "identity, status, capacity, dignity, position, rank",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-844",
    "hanzi": "神话",
    "pinyin": "shén huà",
    "english": "legend, fairy tale, myth, mythology",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-845",
    "hanzi": "神经",
    "pinyin": "shén jīng",
    "english": "nerve",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-846",
    "hanzi": "神秘",
    "pinyin": "shén mì",
    "english": "mysterious, mystery",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-847",
    "hanzi": "升",
    "pinyin": "shēng",
    "english": "variant of 升[shēng]",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-848",
    "hanzi": "生产",
    "pinyin": "shēng chǎn",
    "english": "childbirth, parturition, to produce, manufacture",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-849",
    "hanzi": "生动",
    "pinyin": "shēng dòng",
    "english": "vivid, lively",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-850",
    "hanzi": "声调",
    "pinyin": "shēng diào",
    "english": "tone, note, a tone (on a Chinese syllable)",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-851",
    "hanzi": "绳子",
    "pinyin": "shéng zi",
    "english": "cord, string, rope",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-852",
    "hanzi": "省略",
    "pinyin": "shěng lvè",
    "english": "to leave out, an omission",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-853",
    "hanzi": "胜利",
    "pinyin": "shèng lì",
    "english": "victory",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-854",
    "hanzi": "诗",
    "pinyin": "shī",
    "english": "poem, poetry, verse, abbr. for Book of Songs 詩經|诗经[Shī Jīng]",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-855",
    "hanzi": "失眠",
    "pinyin": "shī mián",
    "english": "to suffer from insomnia",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-856",
    "hanzi": "失去",
    "pinyin": "shī qù",
    "english": "to lose",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-857",
    "hanzi": "失业",
    "pinyin": "shī yè",
    "english": "unemployment, to lose one's job",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-858",
    "hanzi": "时代",
    "pinyin": "shí dài",
    "english": "age, era, epoch, period",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-859",
    "hanzi": "时刻",
    "pinyin": "shí kè",
    "english": "moment, constantly, always",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-860",
    "hanzi": "时髦",
    "pinyin": "shí máo",
    "english": "in vogue, fashionable",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-861",
    "hanzi": "时期",
    "pinyin": "shí qī",
    "english": "period, phase",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-862",
    "hanzi": "时尚",
    "pinyin": "shí shàng",
    "english": "fashion, fad, fashionable",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-863",
    "hanzi": "实话",
    "pinyin": "shí huà",
    "english": "truth",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-864",
    "hanzi": "实践",
    "pinyin": "shí jiàn",
    "english": "to practice, to put into practice, to fulfill",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-865",
    "hanzi": "实习",
    "pinyin": "shí xí",
    "english": "to practice, field work, to intern, internship",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-866",
    "hanzi": "实现",
    "pinyin": "shí xiàn",
    "english": "to achieve, to implement, to realize, to bring about",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-867",
    "hanzi": "实行",
    "pinyin": "shí xíng",
    "english": "to implement, to carry out, to put into practice",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-868",
    "hanzi": "实验",
    "pinyin": "shí yàn",
    "english": "experiment, test, 次[cì], experimental, to experiment",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-869",
    "hanzi": "实用",
    "pinyin": "shí yòng",
    "english": "practical, functional, pragmatic, applied (science)",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-870",
    "hanzi": "食物",
    "pinyin": "shí wù",
    "english": "food",
    "level": "HSK 5",
    "lesson": 29
  },
  {
    "id": "HSK5-871",
    "hanzi": "石头",
    "pinyin": "shí tou",
    "english": "stone",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-872",
    "hanzi": "使劲儿",
    "pinyin": "shǐ jìn ér",
    "english": "Rearing",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-873",
    "hanzi": "始终",
    "pinyin": "shǐ zhōng",
    "english": "from beginning to end, all along",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-874",
    "hanzi": "是否",
    "pinyin": "shì fǒu",
    "english": "whether (or not), if, is or isn't",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-875",
    "hanzi": "试卷",
    "pinyin": "shì juàn",
    "english": "examination paper, test paper, 張|张[zhāng]",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-876",
    "hanzi": "士兵",
    "pinyin": "shì bīng",
    "english": "soldier",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-877",
    "hanzi": "似的",
    "pinyin": "shì de",
    "english": "seems as if, rather like",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-878",
    "hanzi": "事实",
    "pinyin": "shì shí",
    "english": "fact",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-879",
    "hanzi": "事物",
    "pinyin": "shì wù",
    "english": "thing, object",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-880",
    "hanzi": "事先",
    "pinyin": "shì xiān",
    "english": "in advance, before the event, beforehand, prior",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-881",
    "hanzi": "收获",
    "pinyin": "shōu huò",
    "english": "to harvest, to reap, to gain, crop, harvest, profit, gain, bonus, reward",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-882",
    "hanzi": "收据",
    "pinyin": "shōu jù",
    "english": "receipt",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-883",
    "hanzi": "手工",
    "pinyin": "shǒu gōng",
    "english": "handwork, manual",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-884",
    "hanzi": "手术",
    "pinyin": "shǒu shù",
    "english": "(surgical) operation, surgery",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-885",
    "hanzi": "手套",
    "pinyin": "shǒu tào",
    "english": "glove, mitten, 隻|只[zhī]",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-886",
    "hanzi": "手续",
    "pinyin": "shǒu xù",
    "english": "procedure, 個|个[gè], formalities",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-887",
    "hanzi": "手指",
    "pinyin": "shǒu zhǐ",
    "english": "finger, 隻|只[zhī]",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-888",
    "hanzi": "受伤",
    "pinyin": "shòu shāng",
    "english": "to sustain injuries, wounded (in an accident etc), harmed",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-889",
    "hanzi": "寿命",
    "pinyin": "shòu mìng",
    "english": "life span, life expectancy",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-890",
    "hanzi": "书架",
    "pinyin": "shū jià",
    "english": "bookshelf",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-891",
    "hanzi": "输入",
    "pinyin": "shū rù",
    "english": "to import, to input",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-892",
    "hanzi": "蔬菜",
    "pinyin": "shū cài",
    "english": "vegetables, produce",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-893",
    "hanzi": "舒适",
    "pinyin": "shū shì",
    "english": "cozy, snug",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-894",
    "hanzi": "梳子",
    "pinyin": "shū zi",
    "english": "comb",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-895",
    "hanzi": "熟练",
    "pinyin": "shú liàn",
    "english": "practiced, proficient, skilled, skillful",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-896",
    "hanzi": "鼠标",
    "pinyin": "shǔ biāo",
    "english": "mouse (computing)",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-897",
    "hanzi": "属于",
    "pinyin": "shǔ yú",
    "english": "to be classified as, to belong to, to be part of",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-898",
    "hanzi": "数据",
    "pinyin": "shù jù",
    "english": "data, numbers, digital",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-899",
    "hanzi": "数码",
    "pinyin": "shù mǎ",
    "english": "number, numerals, figures, digital, amount, numerical code",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-900",
    "hanzi": "摔",
    "pinyin": "shuāi",
    "english": "to throw down, to fall, to drop and break",
    "level": "HSK 5",
    "lesson": 30
  },
  {
    "id": "HSK5-901",
    "hanzi": "甩",
    "pinyin": "shuǎi",
    "english": "to throw, to fling, to swing, to leave behind, to throw off, to dump (sb)",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-902",
    "hanzi": "双方",
    "pinyin": "shuāng fāng",
    "english": "bilateral, both sides, both parties involved",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-903",
    "hanzi": "税",
    "pinyin": "shuì",
    "english": "taxes, duties",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-904",
    "hanzi": "说不定",
    "pinyin": "shuō bu dìng",
    "english": "can't say for sure, maybe",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-905",
    "hanzi": "说服",
    "pinyin": "shuō fú",
    "english": "to persuade, to convince, to talk sb over, Taiwan pr. [shuì fú]",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-906",
    "hanzi": "撕",
    "pinyin": "sī",
    "english": "to tear",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-907",
    "hanzi": "丝绸",
    "pinyin": "sī chóu",
    "english": "silk cloth, silk",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-908",
    "hanzi": "丝毫",
    "pinyin": "sī háo",
    "english": "the slightest amount or degree, a bit",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-909",
    "hanzi": "思考",
    "pinyin": "sī kǎo",
    "english": "to reflect on, to ponder over",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-910",
    "hanzi": "思想",
    "pinyin": "sī xiǎng",
    "english": "thought, thinking, idea, ideology",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-911",
    "hanzi": "私人",
    "pinyin": "sī rén",
    "english": "private, personal, interpersonal, sb with whom one has a close personal relationship, a member of one's clique",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-912",
    "hanzi": "似乎",
    "pinyin": "sì hū",
    "english": "apparently, to seem, to appear, as if, seemingly",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-913",
    "hanzi": "寺庙",
    "pinyin": "sì miào",
    "english": "temple, monastery, shrine",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-914",
    "hanzi": "宿舍",
    "pinyin": "sù shè",
    "english": "dormitory, dorm room, living quarters, hostel",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-915",
    "hanzi": "随时",
    "pinyin": "suí shí",
    "english": "at any time, at all times, at the right time",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-916",
    "hanzi": "碎",
    "pinyin": "suì",
    "english": "to break down, to break into pieces, fragmentary",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-917",
    "hanzi": "损失",
    "pinyin": "sǔn shī",
    "english": "loss, damage, to lose, to damage",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-918",
    "hanzi": "缩短",
    "pinyin": "suō duǎn",
    "english": "to curtail, to cut down",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-919",
    "hanzi": "缩小",
    "pinyin": "suō xiǎo",
    "english": "to reduce, to decrease, to shrink",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-920",
    "hanzi": "锁",
    "pinyin": "suǒ",
    "english": "to lock up, to lock",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-921",
    "hanzi": "所",
    "pinyin": "suǒ",
    "english": "actually, place, classifier for houses, small buildings, institutions etc, that which, particle introducing a relative clause or passive",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-922",
    "hanzi": "所谓",
    "pinyin": "suǒ wèi",
    "english": "so-called, what is called",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-923",
    "hanzi": "塔",
    "pinyin": "tǎ",
    "english": "pagoda, tower, minaret, stupa (abbr. loanword from Sanskrit tapo)",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-924",
    "hanzi": "台阶",
    "pinyin": "tái jiē",
    "english": "steps, flight of steps, step (over obstacle), fig. way out of an embarrassing situation, bench (geology)",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-925",
    "hanzi": "太极拳",
    "pinyin": "tài jí quán",
    "english": "shadowboxing or Taiji, T'aichi or T'aichichuan, traditional form of physical exercise or relaxation, a martial art",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-926",
    "hanzi": "太太",
    "pinyin": "tài tai",
    "english": "married woman, Mrs., Madam, wife, 位[wèi]",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-927",
    "hanzi": "谈判",
    "pinyin": "tán pàn",
    "english": "to negotiate, negotiation, talks, conference",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-928",
    "hanzi": "坦率",
    "pinyin": "tǎn shuài",
    "english": "frank (discussion), blunt, open",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-929",
    "hanzi": "烫",
    "pinyin": "tàng",
    "english": "to scald, to burn, to iron, hot",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-930",
    "hanzi": "桃",
    "pinyin": "táo",
    "english": "peach",
    "level": "HSK 5",
    "lesson": 31
  },
  {
    "id": "HSK5-931",
    "hanzi": "逃",
    "pinyin": "táo",
    "english": "to escape, to run away, to flee",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-932",
    "hanzi": "逃避",
    "pinyin": "táo bì",
    "english": "to escape, to evade, to avoid, to shirk",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-933",
    "hanzi": "套",
    "pinyin": "tào",
    "english": "cover, sheath, to encase, a case, to overlap, to interleave, bend (of a river or mountain range, in place names), harness, classifier for sets, collections, tau (Greek letter Ττ)",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-934",
    "hanzi": "特殊",
    "pinyin": "tè shū",
    "english": "special, particular, unusual, extraordinary",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-935",
    "hanzi": "特意",
    "pinyin": "tè yì",
    "english": "specially, intentionally",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-936",
    "hanzi": "特征",
    "pinyin": "tè zhēng",
    "english": "characteristic, diagnostic property, distinctive feature, trait",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-937",
    "hanzi": "疼爱",
    "pinyin": "téng ài",
    "english": "to love dearly",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-938",
    "hanzi": "提",
    "pinyin": "tí",
    "english": "to carry (hanging down from the hand), to lift, to put forward, to mention, to raise (an issue), upwards character stroke, lifting brush stroke (in painting), scoop for measuring liquid",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-939",
    "hanzi": "提倡",
    "pinyin": "tí chàng",
    "english": "to promote, to advocate",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-940",
    "hanzi": "提纲",
    "pinyin": "tí gāng",
    "english": "the key point, outline",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-941",
    "hanzi": "提问",
    "pinyin": "tí wèn",
    "english": "to question, to quiz, to grill",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-942",
    "hanzi": "题目",
    "pinyin": "tí mù",
    "english": "subject, title, topic",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-943",
    "hanzi": "体会",
    "pinyin": "tǐ huì",
    "english": "to know from experience, to learn through experience, to realize, understanding, experience",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-944",
    "hanzi": "体积",
    "pinyin": "tǐ jī",
    "english": "volume, bulk",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-945",
    "hanzi": "体贴",
    "pinyin": "tǐ tiē",
    "english": "considerate (of other people's needs)",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-946",
    "hanzi": "体现",
    "pinyin": "tǐ xiàn",
    "english": "to embody, to reflect, to incarnate",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-947",
    "hanzi": "体验",
    "pinyin": "tǐ yàn",
    "english": "to experience for oneself",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-948",
    "hanzi": "天空",
    "pinyin": "tiān kōng",
    "english": "sky",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-949",
    "hanzi": "天真",
    "pinyin": "tiān zhēn",
    "english": "naive, innocent, artless",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-950",
    "hanzi": "田野",
    "pinyin": "tián yě",
    "english": "field, open land",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-951",
    "hanzi": "调皮",
    "pinyin": "tiáo pí",
    "english": "naughty, mischievous, unruly",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-952",
    "hanzi": "调整",
    "pinyin": "tiáo zhěng",
    "english": "to adjust, adjustment, revision",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-953",
    "hanzi": "挑战",
    "pinyin": "tiǎo zhàn",
    "english": "to challenge, challenge",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-954",
    "hanzi": "通常",
    "pinyin": "tōng cháng",
    "english": "regular, usual, normal, usually, normally",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-955",
    "hanzi": "通讯",
    "pinyin": "tōng xùn",
    "english": "communications, news story, dispatch",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-956",
    "hanzi": "铜",
    "pinyin": "tóng",
    "english": "copper (chemistry), see also 紅銅|红铜[hóng tóng]",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-957",
    "hanzi": "同时",
    "pinyin": "tóng shí",
    "english": "at the same time, simultaneously",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-958",
    "hanzi": "统一",
    "pinyin": "tǒng yī",
    "english": "to unify, to unite, to integrate",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-959",
    "hanzi": "统治",
    "pinyin": "tǒng zhì",
    "english": "to rule (a country), to govern, rule, regime",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-960",
    "hanzi": "痛苦",
    "pinyin": "tòng kǔ",
    "english": "pain, suffering, painful",
    "level": "HSK 5",
    "lesson": 32
  },
  {
    "id": "HSK5-961",
    "hanzi": "痛快",
    "pinyin": "tòng kuài",
    "english": "overjoyed, delighted, happily, heartily, enjoying, also pr. [tòng kuai]",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-962",
    "hanzi": "投资",
    "pinyin": "tóu zī",
    "english": "investment, to invest",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-963",
    "hanzi": "透明",
    "pinyin": "tòu míng",
    "english": "transparent, open (non-secretive)",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-964",
    "hanzi": "突出",
    "pinyin": "tū chū",
    "english": "prominent, outstanding, to give prominence to, to protrude, to project",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-965",
    "hanzi": "土地",
    "pinyin": "tǔ dì",
    "english": "land, soil, territory",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-966",
    "hanzi": "土豆",
    "pinyin": "tǔ dòu",
    "english": "potato, peanut (Taiwan)",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-967",
    "hanzi": "吐",
    "pinyin": "tù",
    "english": "to vomit, to throw up",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-968",
    "hanzi": "兔子",
    "pinyin": "tù zi",
    "english": "hare, rabbit",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-969",
    "hanzi": "团",
    "pinyin": "tuán",
    "english": "dumpling",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-970",
    "hanzi": "推辞",
    "pinyin": "tuī cí",
    "english": "to decline (an appointment, invitation etc)",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-971",
    "hanzi": "推广",
    "pinyin": "tuī guǎng",
    "english": "to extend, to spread, to popularize, generalization, promotion (of a product etc)",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-972",
    "hanzi": "推荐",
    "pinyin": "tuī jiàn",
    "english": "to recommend, recommendation",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-973",
    "hanzi": "退",
    "pinyin": "tuì",
    "english": "to retreat, to decline, to move back, to withdraw",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-974",
    "hanzi": "退步",
    "pinyin": "tuì bù",
    "english": "to do less well than before, to make a concession, setback, backward step, leeway, room to maneuver, fallback",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-975",
    "hanzi": "退休",
    "pinyin": "tuì xiū",
    "english": "to retire, retirement (from work)",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-976",
    "hanzi": "歪",
    "pinyin": "wāi",
    "english": "askew, at a crooked angle, devious, noxious",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-977",
    "hanzi": "外交",
    "pinyin": "wài jiāo",
    "english": "diplomacy, diplomatic, foreign affairs",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-978",
    "hanzi": "弯",
    "pinyin": "wān",
    "english": "bend, bent",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-979",
    "hanzi": "完美",
    "pinyin": "wán měi",
    "english": "perfect, perfection, perfectly",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-980",
    "hanzi": "完善",
    "pinyin": "wán shàn",
    "english": "perfect, to make perfect, to improve",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-981",
    "hanzi": "完整",
    "pinyin": "wán zhěng",
    "english": "complete, intact",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-982",
    "hanzi": "玩具",
    "pinyin": "wán jù",
    "english": "plaything, toy",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-983",
    "hanzi": "万一",
    "pinyin": "wàn yī",
    "english": "just in case, if by any chance, contingency",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-984",
    "hanzi": "王子",
    "pinyin": "wáng zǐ",
    "english": "prince, son of a king",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-985",
    "hanzi": "往返",
    "pinyin": "wǎng fǎn",
    "english": "to go back and forth, to go to and fro, round trip",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-986",
    "hanzi": "微笑",
    "pinyin": "wēi xiào",
    "english": "smile, 絲|丝[sī], to smile",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-987",
    "hanzi": "威胁",
    "pinyin": "wēi xié",
    "english": "to threaten, to menace",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-988",
    "hanzi": "危害",
    "pinyin": "wēi hài",
    "english": "to jeopardize, to harm, to endanger",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-989",
    "hanzi": "违反",
    "pinyin": "wéi fǎn",
    "english": "to violate (a law)",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-990",
    "hanzi": "维护",
    "pinyin": "wéi hù",
    "english": "to defend, to safeguard, to protect, to uphold, to maintain",
    "level": "HSK 5",
    "lesson": 33
  },
  {
    "id": "HSK5-991",
    "hanzi": "围巾",
    "pinyin": "wéi jīn",
    "english": "scarf, shawl",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-992",
    "hanzi": "围绕",
    "pinyin": "wéi rào",
    "english": "to revolve around, to center on (an issue)",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-993",
    "hanzi": "唯一",
    "pinyin": "wéi yī",
    "english": "only, sole",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-994",
    "hanzi": "尾巴",
    "pinyin": "wěi ba",
    "english": "tail",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-995",
    "hanzi": "伟大",
    "pinyin": "wěi dà",
    "english": "great, mighty, large",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-996",
    "hanzi": "委屈",
    "pinyin": "wěi qu",
    "english": "to feel wronged, to cause sb to feel wronged, grievance",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-997",
    "hanzi": "委托",
    "pinyin": "wěi tuō",
    "english": "to entrust, to trust, to commission",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-998",
    "hanzi": "胃",
    "pinyin": "wèi",
    "english": "stomach",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-999",
    "hanzi": "位置",
    "pinyin": "wèi zhi",
    "english": "position, place, seat",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-1000",
    "hanzi": "未必",
    "pinyin": "wèi bì",
    "english": "not necessarily, maybe not",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-1001",
    "hanzi": "未来",
    "pinyin": "wèi lái",
    "english": "future, tomorrow, approaching, coming, pending",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-1002",
    "hanzi": "卫生间",
    "pinyin": "wèi shēng jiān",
    "english": "bathroom, toilet, WC",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-1003",
    "hanzi": "温暖",
    "pinyin": "wēn nuǎn",
    "english": "warm",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-1004",
    "hanzi": "温柔",
    "pinyin": "wēn róu",
    "english": "gentle and soft, tender",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-1005",
    "hanzi": "闻",
    "pinyin": "wén",
    "english": "to hear, news, well-known, famous, reputation, fame, to smell, to sniff at",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-1006",
    "hanzi": "文件",
    "pinyin": "wén jiàn",
    "english": "document, file",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-1007",
    "hanzi": "文具",
    "pinyin": "wén jù",
    "english": "stationery, item of stationery (pen, pencil, eraser, pencil sharpener etc)",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-1008",
    "hanzi": "文明",
    "pinyin": "wén míng",
    "english": "civilized, civilization, culture",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-1009",
    "hanzi": "文学",
    "pinyin": "wén xué",
    "english": "literature",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-1010",
    "hanzi": "吻",
    "pinyin": "wěn",
    "english": "kiss, to kiss, mouth",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-1011",
    "hanzi": "稳定",
    "pinyin": "wěn dìng",
    "english": "steady, stable, stability, to stabilize, to pacify",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-1012",
    "hanzi": "问候",
    "pinyin": "wèn hòu",
    "english": "to give one's respects, to send a greeting",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-1013",
    "hanzi": "卧室",
    "pinyin": "wò shì",
    "english": "bedroom",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-1014",
    "hanzi": "屋子",
    "pinyin": "wū zi",
    "english": "house, room",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-1015",
    "hanzi": "无奈",
    "pinyin": "wú nài",
    "english": "helpless, without choice, for lack of better option, grudgingly, willy-nilly, nolens volens, abbr. for 無可奈何|无可奈何[wú kě nài hé]",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-1016",
    "hanzi": "无数",
    "pinyin": "wú shù",
    "english": "countless, numberless, innumerable",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-1017",
    "hanzi": "武器",
    "pinyin": "wǔ qì",
    "english": "weapon, arms",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-1018",
    "hanzi": "武术",
    "pinyin": "wǔ shù",
    "english": "military skill or technique (in former times), all kinds of martial art sports (some claiming spiritual development), self-defense, tradition of choreographed fights from opera and film (recent usage), also called kungfu 功夫",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-1019",
    "hanzi": "雾",
    "pinyin": "wù",
    "english": "fog, mist, 陣|阵[zhèn]",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-1020",
    "hanzi": "物理",
    "pinyin": "wù lǐ",
    "english": "physics, physical",
    "level": "HSK 5",
    "lesson": 34
  },
  {
    "id": "HSK5-1021",
    "hanzi": "物质",
    "pinyin": "wù zhì",
    "english": "matter, substance, material, materialistic",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1022",
    "hanzi": "吸收",
    "pinyin": "xī shōu",
    "english": "to absorb, to assimilate, to ingest, to recruit",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1023",
    "hanzi": "系",
    "pinyin": "xì",
    "english": "to connect, to arrest, to worry",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1024",
    "hanzi": "系统",
    "pinyin": "xì tǒng",
    "english": "system",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1025",
    "hanzi": "细节",
    "pinyin": "xì jié",
    "english": "details, particulars",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1026",
    "hanzi": "戏剧",
    "pinyin": "xì jù",
    "english": "drama, play, theater",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1027",
    "hanzi": "瞎",
    "pinyin": "xiā",
    "english": "blind, groundlessly, foolishly, to no purpose",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1028",
    "hanzi": "吓",
    "pinyin": "xià",
    "english": "to frighten, to scare",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1029",
    "hanzi": "下载",
    "pinyin": "xià zǎi",
    "english": "to download, also pr. [xià zài]",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1030",
    "hanzi": "鲜艳",
    "pinyin": "xiān yàn",
    "english": "bright-colored, gaily-colored",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1031",
    "hanzi": "显得",
    "pinyin": "xiǎn de",
    "english": "to seem, to look, to appear",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1032",
    "hanzi": "显然",
    "pinyin": "xiǎn rán",
    "english": "clear, evident, obvious(ly)",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1033",
    "hanzi": "显示",
    "pinyin": "xiǎn shì",
    "english": "to show, to illustrate, to display, to demonstrate",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1034",
    "hanzi": "县",
    "pinyin": "xiàn",
    "english": "county",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1035",
    "hanzi": "现金",
    "pinyin": "xiàn jīn",
    "english": "cash",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1036",
    "hanzi": "现实",
    "pinyin": "xiàn shí",
    "english": "reality, actuality, real, actual, realistic",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1037",
    "hanzi": "现象",
    "pinyin": "xiàn xiàng",
    "english": "appearance, phenomenon, 種|种[zhǒng]",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1038",
    "hanzi": "相处",
    "pinyin": "xiāng chǔ",
    "english": "to be in contact with, to associate with, to have dealings with",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1039",
    "hanzi": "相当",
    "pinyin": "xiāng dāng",
    "english": "equivalent to, appropriate, considerably, to a certain extent, fairly, quite",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1040",
    "hanzi": "相对",
    "pinyin": "xiāng duì",
    "english": "relatively, opposite, to resist, to oppose, relative, vis-a-vis, counterpart",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1041",
    "hanzi": "相关",
    "pinyin": "xiāng guān",
    "english": "to be interrelated, (statistics) correlation",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1042",
    "hanzi": "相似",
    "pinyin": "xiāng sì",
    "english": "to resemble, similar, like, resemblance, similarity",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1043",
    "hanzi": "想念",
    "pinyin": "xiǎng niàn",
    "english": "to miss, to remember with longing, to long to see again",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1044",
    "hanzi": "想象",
    "pinyin": "xiǎng xiàng",
    "english": "to imagine, to fancy",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1045",
    "hanzi": "享受",
    "pinyin": "xiǎng shòu",
    "english": "to enjoy, to live it up, pleasure",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1046",
    "hanzi": "项",
    "pinyin": "xiàng",
    "english": "back of neck, item, thing, term (in a mathematical formula), sum (of money), classifier for principles, items, clauses, tasks, research projects etc",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1047",
    "hanzi": "项链",
    "pinyin": "xiàng liàn",
    "english": "necklace",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1048",
    "hanzi": "项目",
    "pinyin": "xiàng mù",
    "english": "item, project, sports event",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1049",
    "hanzi": "橡皮",
    "pinyin": "xiàng pí",
    "english": "rubber, an eraser",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1050",
    "hanzi": "象棋",
    "pinyin": "xiàng qí",
    "english": "Chinese chess",
    "level": "HSK 5",
    "lesson": 35
  },
  {
    "id": "HSK5-1051",
    "hanzi": "象征",
    "pinyin": "xiàng zhēng",
    "english": "emblem, symbol, token, badge, to symbolize, to signify, to stand for",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1052",
    "hanzi": "消费",
    "pinyin": "xiāo fèi",
    "english": "to consume",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1053",
    "hanzi": "消化",
    "pinyin": "xiāo huà",
    "english": "to digest, digestion, digestive",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1054",
    "hanzi": "消灭",
    "pinyin": "xiāo miè",
    "english": "to put an end to, to annihilate, to cause to perish, to perish, annihilation (in quantum field theory)",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1055",
    "hanzi": "消失",
    "pinyin": "xiāo shī",
    "english": "to disappear, to fade away",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1056",
    "hanzi": "销售",
    "pinyin": "xiāo shòu",
    "english": "to sell, market, sales",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1057",
    "hanzi": "小吃",
    "pinyin": "xiǎo chī",
    "english": "snack, refreshments",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1058",
    "hanzi": "小伙子",
    "pinyin": "xiǎo huǒ zi",
    "english": "young man, young guy, lad, youngster",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1059",
    "hanzi": "小麦",
    "pinyin": "xiǎo mài",
    "english": "wheat",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1060",
    "hanzi": "小气",
    "pinyin": "xiǎo qì",
    "english": "stingy, petty, miserly, narrow-minded",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1061",
    "hanzi": "小偷",
    "pinyin": "xiǎo tōu",
    "english": "thief",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1062",
    "hanzi": "效率",
    "pinyin": "xiào lǜ",
    "english": "efficiency",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1063",
    "hanzi": "孝顺",
    "pinyin": "xiào shùn",
    "english": "filial piety, to be obedient to one's parents",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1064",
    "hanzi": "歇",
    "pinyin": "xiē",
    "english": "to rest",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1065",
    "hanzi": "斜",
    "pinyin": "xié",
    "english": "inclined, slanting, oblique, tilting",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1066",
    "hanzi": "协调",
    "pinyin": "xié tiáo",
    "english": "to coordinate, to harmonize, negotiation",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1067",
    "hanzi": "心理",
    "pinyin": "xīn lǐ",
    "english": "mental, psychological",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1068",
    "hanzi": "心脏",
    "pinyin": "xīn zàng",
    "english": "heart, 個|个[gè]",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1069",
    "hanzi": "欣赏",
    "pinyin": "xīn shǎng",
    "english": "to appreciate, to enjoy, to admire",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1070",
    "hanzi": "信封",
    "pinyin": "xìn fēng",
    "english": "envelope",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1071",
    "hanzi": "信号",
    "pinyin": "xìn hào",
    "english": "signal",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1072",
    "hanzi": "信息",
    "pinyin": "xìn xī",
    "english": "information, news, message",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1073",
    "hanzi": "行动",
    "pinyin": "xíng dòng",
    "english": "operation, action, to move, mobile",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1074",
    "hanzi": "行人",
    "pinyin": "xíng rén",
    "english": "pedestrian, traveler on foot, passer-by, official responsible for arranging audiences with the emperor",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1075",
    "hanzi": "行为",
    "pinyin": "xíng wéi",
    "english": "action, conduct, behavior, activity",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1076",
    "hanzi": "形成",
    "pinyin": "xíng chéng",
    "english": "to form, to take shape",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1077",
    "hanzi": "形容",
    "pinyin": "xíng róng",
    "english": "to describe, description, appearance, look",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1078",
    "hanzi": "形式",
    "pinyin": "xíng shì",
    "english": "form, shape, situation, circumstance",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1079",
    "hanzi": "形势",
    "pinyin": "xíng shì",
    "english": "circumstances, situation, terrain",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1080",
    "hanzi": "形象",
    "pinyin": "xíng xiàng",
    "english": "image, form, figure, visualization, vivid",
    "level": "HSK 5",
    "lesson": 36
  },
  {
    "id": "HSK5-1081",
    "hanzi": "形状",
    "pinyin": "xíng zhuàng",
    "english": "form, shape",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1082",
    "hanzi": "性质",
    "pinyin": "xìng zhì",
    "english": "nature, characteristic",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1083",
    "hanzi": "幸亏",
    "pinyin": "xìng kuī",
    "english": "fortunately, luckily",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1084",
    "hanzi": "幸运",
    "pinyin": "xìng yùn",
    "english": "fortunate, lucky, fortune, luck",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1085",
    "hanzi": "胸",
    "pinyin": "xiōng",
    "english": "chest, bosom, heart, mind, thorax",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1086",
    "hanzi": "兄弟",
    "pinyin": "xiōng dì",
    "english": "brothers, younger brother, I, me (humble term used by men in public speech), brotherly, fraternal",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1087",
    "hanzi": "雄伟",
    "pinyin": "xióng wěi",
    "english": "grand, imposing, magnificent, majestic",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1088",
    "hanzi": "修改",
    "pinyin": "xiū gǎi",
    "english": "to amend, to alter, to modify",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1089",
    "hanzi": "休闲",
    "pinyin": "xiū xián",
    "english": "leisure, relaxation, not working, idle, to enjoy leisure, to lie fallow",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1090",
    "hanzi": "虚心",
    "pinyin": "xū xīn",
    "english": "modest",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1091",
    "hanzi": "叙述",
    "pinyin": "xù shù",
    "english": "to relate (a story or information), to tell or talk about, to recount, narration, telling, narrative, account",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1092",
    "hanzi": "宣布",
    "pinyin": "xuān bù",
    "english": "to declare, to announce, to proclaim",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1093",
    "hanzi": "宣传",
    "pinyin": "xuān chuán",
    "english": "to disseminate, to give publicity to, propaganda",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1094",
    "hanzi": "选举",
    "pinyin": "xuǎn jǔ",
    "english": "to elect, election, 個|个[gè]",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1095",
    "hanzi": "学期",
    "pinyin": "xué qī",
    "english": "term, semester",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1096",
    "hanzi": "学术",
    "pinyin": "xué shù",
    "english": "learning, science, academic",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1097",
    "hanzi": "学问",
    "pinyin": "xué wèn",
    "english": "learning, knowledge",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1098",
    "hanzi": "寻找",
    "pinyin": "xún zhǎo",
    "english": "to seek, to look for",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1099",
    "hanzi": "询问",
    "pinyin": "xún wèn",
    "english": "to inquire",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1100",
    "hanzi": "训练",
    "pinyin": "xùn liàn",
    "english": "to train, to drill, training",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1101",
    "hanzi": "迅速",
    "pinyin": "xùn sù",
    "english": "rapid, speedy, fast",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1102",
    "hanzi": "延长",
    "pinyin": "yán cháng",
    "english": "to prolong, to extend, to delay",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1103",
    "hanzi": "严肃",
    "pinyin": "yán sù",
    "english": "solemn, grave, serious, earnest, severe",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1104",
    "hanzi": "宴会",
    "pinyin": "yàn huì",
    "english": "banquet, feast, dinner party, 個|个[gè]",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1105",
    "hanzi": "阳台",
    "pinyin": "yáng tái",
    "english": "balcony, porch",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1106",
    "hanzi": "痒",
    "pinyin": "yǎng",
    "english": "to itch, to tickle",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1107",
    "hanzi": "样式",
    "pinyin": "yàng shì",
    "english": "type, style",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1108",
    "hanzi": "腰",
    "pinyin": "yāo",
    "english": "waist, lower back, pocket, middle, loins",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1109",
    "hanzi": "摇",
    "pinyin": "yáo",
    "english": "to shake, to rock, to row",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1110",
    "hanzi": "咬",
    "pinyin": "yǎo",
    "english": "to bite, to nip",
    "level": "HSK 5",
    "lesson": 37
  },
  {
    "id": "HSK5-1111",
    "hanzi": "要不",
    "pinyin": "yào bù",
    "english": "otherwise, or else, how about...?, either... (or...)",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1112",
    "hanzi": "要是",
    "pinyin": "yào shi",
    "english": "if",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1113",
    "hanzi": "夜",
    "pinyin": "yè",
    "english": "night",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1114",
    "hanzi": "液体",
    "pinyin": "yè tǐ",
    "english": "liquid",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1115",
    "hanzi": "业务",
    "pinyin": "yè wù",
    "english": "business, professional work, service",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1116",
    "hanzi": "业余",
    "pinyin": "yè yú",
    "english": "spare time, amateur, extra-curricular",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1117",
    "hanzi": "依然",
    "pinyin": "yī rán",
    "english": "still, as before",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1118",
    "hanzi": "一辈子",
    "pinyin": "yī bèi zi",
    "english": "(for) a lifetime",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1119",
    "hanzi": "一旦",
    "pinyin": "yī dàn",
    "english": "in case (sth happens), if, once (sth happens, then...), when, in a short time, in one day",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1120",
    "hanzi": "一路",
    "pinyin": "yī lù",
    "english": "the whole journey, all the way, going the same way, going in the same direction, of the same kind",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1121",
    "hanzi": "一致",
    "pinyin": "yī zhì",
    "english": "unanimous, identical (views or opinions)",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1122",
    "hanzi": "遗憾",
    "pinyin": "yí hàn",
    "english": "regret, to regret, to be sorry that",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1123",
    "hanzi": "移动",
    "pinyin": "yí dòng",
    "english": "to move, movement, migration, mobile, portable",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1124",
    "hanzi": "移民",
    "pinyin": "yí mín",
    "english": "to immigrate, to migrate, emigrant, immigrant",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1125",
    "hanzi": "疑问",
    "pinyin": "yí wèn",
    "english": "question, interrogation, doubt",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1126",
    "hanzi": "乙",
    "pinyin": "yǐ",
    "english": "second of 10 heavenly stems 十天干, second in order, letter \"B\" or roman \"II\" in list \"A, B, C\", or \"I, II, III\" etc, second party (in legal contract, usually 乙方, as opposed to 甲方), ethyl, bent, winding, radical in Chinese characters (Kangxi radical 5)",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1127",
    "hanzi": "以及",
    "pinyin": "yǐ jí",
    "english": "as well as, too, and",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1128",
    "hanzi": "以来",
    "pinyin": "yǐ lái",
    "english": "since (a previous event)",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1129",
    "hanzi": "意外",
    "pinyin": "yì wài",
    "english": "unexpected, accident, mishap",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1130",
    "hanzi": "意义",
    "pinyin": "yì yì",
    "english": "sense, meaning, significance, importance",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1131",
    "hanzi": "议论",
    "pinyin": "yì lùn",
    "english": "to comment, to talk about, to discuss, discussion",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1132",
    "hanzi": "义务",
    "pinyin": "yì wù",
    "english": "duty, obligation, commitment, volunteer duty, mandatory, voluntary",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1133",
    "hanzi": "因而",
    "pinyin": "yīn ér",
    "english": "therefore, as a result, thus, and as a result, ...",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1134",
    "hanzi": "因素",
    "pinyin": "yīn sù",
    "english": "element, factor",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1135",
    "hanzi": "银",
    "pinyin": "yín",
    "english": "silver, silver-colored, relating to money or currency",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1136",
    "hanzi": "英俊",
    "pinyin": "yīng jùn",
    "english": "handsome",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1137",
    "hanzi": "英雄",
    "pinyin": "yīng xióng",
    "english": "hero",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1138",
    "hanzi": "迎接",
    "pinyin": "yíng jiē",
    "english": "to meet, to welcome, to greet",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1139",
    "hanzi": "营养",
    "pinyin": "yíng yǎng",
    "english": "nutrition, nourishment",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1140",
    "hanzi": "营业",
    "pinyin": "yíng yè",
    "english": "to do business, to trade",
    "level": "HSK 5",
    "lesson": 38
  },
  {
    "id": "HSK5-1141",
    "hanzi": "影子",
    "pinyin": "yǐng zi",
    "english": "shadow, reflection",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1142",
    "hanzi": "硬币",
    "pinyin": "yìng bì",
    "english": "coin",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1143",
    "hanzi": "硬件",
    "pinyin": "yìng jiàn",
    "english": "hardware",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1144",
    "hanzi": "应付",
    "pinyin": "yìng fu",
    "english": "to deal with, to cope",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1145",
    "hanzi": "应聘",
    "pinyin": "yìng pìn",
    "english": "to accept a job offer, to apply for an advertised position",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1146",
    "hanzi": "应用",
    "pinyin": "yìng yòng",
    "english": "to use, to apply, application, applicable",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1147",
    "hanzi": "拥抱",
    "pinyin": "yōng bào",
    "english": "to embrace, to hug",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1148",
    "hanzi": "拥挤",
    "pinyin": "yōng jǐ",
    "english": "crowded, to throng, congestion",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1149",
    "hanzi": "勇气",
    "pinyin": "yǒng qì",
    "english": "courage, valor",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1150",
    "hanzi": "用途",
    "pinyin": "yòng tú",
    "english": "use, application",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1151",
    "hanzi": "优惠",
    "pinyin": "yōu huì",
    "english": "preferential, favorable",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1152",
    "hanzi": "优美",
    "pinyin": "yōu měi",
    "english": "graceful, fine, elegant",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1153",
    "hanzi": "优势",
    "pinyin": "yōu shì",
    "english": "superiority, dominance, advantage",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1154",
    "hanzi": "悠久",
    "pinyin": "yōu jiǔ",
    "english": "established, long",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1155",
    "hanzi": "邮局",
    "pinyin": "yóu jú",
    "english": "post office, 個|个[gè]",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1156",
    "hanzi": "游览",
    "pinyin": "yóu lǎn",
    "english": "to go sight-seeing, to tour, to visit",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1157",
    "hanzi": "油炸",
    "pinyin": "yóu zhá",
    "english": "to deep fry",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1158",
    "hanzi": "犹豫",
    "pinyin": "yóu yù",
    "english": "to hesitate",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1159",
    "hanzi": "有利",
    "pinyin": "yǒu lì",
    "english": "advantageous, to have advantages, favorable",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1160",
    "hanzi": "幼儿园",
    "pinyin": "yòu ér yuán",
    "english": "kindergarten, nursery school",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1161",
    "hanzi": "娱乐",
    "pinyin": "yú lè",
    "english": "to entertain, to amuse, entertainment, recreation, amusement, hobby, fun, joy",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1162",
    "hanzi": "与其",
    "pinyin": "yǔ qí",
    "english": "rather than..., 與其|与其 A 不如 B (rather than A, better to B)",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1163",
    "hanzi": "语气",
    "pinyin": "yǔ qì",
    "english": "tone, manner of speaking, mood",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1164",
    "hanzi": "宇宙",
    "pinyin": "yǔ zhòu",
    "english": "universe, cosmos",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1165",
    "hanzi": "预报",
    "pinyin": "yù bào",
    "english": "forecast",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1166",
    "hanzi": "预订",
    "pinyin": "yù dìng",
    "english": "to place an order, to book ahead",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1167",
    "hanzi": "预防",
    "pinyin": "yù fáng",
    "english": "to prevent, to take precautions against, to protect, to guard against, precautionary, prophylactic",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1168",
    "hanzi": "玉米",
    "pinyin": "yù mǐ",
    "english": "corn, maize",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1169",
    "hanzi": "元旦",
    "pinyin": "yuán dàn",
    "english": "New Year's Day",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1170",
    "hanzi": "原料",
    "pinyin": "yuán liào",
    "english": "raw material",
    "level": "HSK 5",
    "lesson": 39
  },
  {
    "id": "HSK5-1171",
    "hanzi": "原则",
    "pinyin": "yuán zé",
    "english": "principle, doctrine",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1172",
    "hanzi": "缘故",
    "pinyin": "yuán gù",
    "english": "reason, cause",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1173",
    "hanzi": "愿望",
    "pinyin": "yuàn wàng",
    "english": "desire, wish",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1174",
    "hanzi": "晕",
    "pinyin": "yūn",
    "english": "confused, dizzy, giddy, to faint, to swoon, to lose consciousness, to pass out",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1175",
    "hanzi": "运气",
    "pinyin": "yùn qi",
    "english": "luck (good or bad)",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1176",
    "hanzi": "运输",
    "pinyin": "yùn shū",
    "english": "transport, haulage, transit",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1177",
    "hanzi": "运用",
    "pinyin": "yùn yòng",
    "english": "to use, to put to use",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1178",
    "hanzi": "灾害",
    "pinyin": "zāi hài",
    "english": "disastrous damage, scourge",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1179",
    "hanzi": "再三",
    "pinyin": "zài sān",
    "english": "over and over again, again and again",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1180",
    "hanzi": "赞成",
    "pinyin": "zàn chéng",
    "english": "to approve, to endorse, (literary) to assist",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1181",
    "hanzi": "赞美",
    "pinyin": "zàn měi",
    "english": "to admire, to praise, to eulogize",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1182",
    "hanzi": "糟糕",
    "pinyin": "zāo gāo",
    "english": "too bad, how terrible, what bad luck, terrible, bad",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1183",
    "hanzi": "造成",
    "pinyin": "zào chéng",
    "english": "to bring about, to create, to cause",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1184",
    "hanzi": "则",
    "pinyin": "zé",
    "english": "conjunction used to express contrast with a previous sentence or clause, standard, norm, rule, to imitate, to follow, then, principle, classifier for written items (such as an official statement)",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1185",
    "hanzi": "责备",
    "pinyin": "zé bèi",
    "english": "to blame, to criticize, condemnation, reproach",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1186",
    "hanzi": "摘",
    "pinyin": "zhāi",
    "english": "to take, to borrow, to pick (flowers, fruit etc), to pluck, to select, to remove, to take off (glasses, hat etc)",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1187",
    "hanzi": "粘贴",
    "pinyin": "zhān tiē",
    "english": "to stick, to affix, to adhere, to paste (as in cut, copy and paste), Taiwan pr. [nián tiē], also written 黏貼|黏贴",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1188",
    "hanzi": "展开",
    "pinyin": "zhǎn kāi",
    "english": "to unfold, to carry out, to be in full swing, to launch",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1189",
    "hanzi": "展览",
    "pinyin": "zhǎn lǎn",
    "english": "to put on display, to exhibit, exhibition, show, 次[cì]",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1190",
    "hanzi": "战争",
    "pinyin": "zhàn zhēng",
    "english": "war, conflict, 次[cì]",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1191",
    "hanzi": "占线",
    "pinyin": "zhàn xiàn",
    "english": "busy (telephone line)",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1192",
    "hanzi": "涨",
    "pinyin": "zhǎng",
    "english": "to rise (of prices, rivers)",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1193",
    "hanzi": "掌握",
    "pinyin": "zhǎng wò",
    "english": "to grasp (often fig.), to control, to seize (initiative, opportunity, destiny), to master, to know well, to understand sth well and know how to use it, fluency",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1194",
    "hanzi": "账户",
    "pinyin": "zhàng hù",
    "english": "bank account, online account",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1195",
    "hanzi": "招待",
    "pinyin": "zhāo dài",
    "english": "to receive (guests), to entertain, reception",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1196",
    "hanzi": "着凉",
    "pinyin": "zháo liáng",
    "english": "to catch cold",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1197",
    "hanzi": "照常",
    "pinyin": "zhào cháng",
    "english": "(business etc) as usual",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1198",
    "hanzi": "召开",
    "pinyin": "zhào kāi",
    "english": "to convene (a conference or meeting), to convoke, to call together",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1199",
    "hanzi": "哲学",
    "pinyin": "zhé xué",
    "english": "philosophy",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1200",
    "hanzi": "真理",
    "pinyin": "zhēn lǐ",
    "english": "truth",
    "level": "HSK 5",
    "lesson": 40
  },
  {
    "id": "HSK5-1201",
    "hanzi": "真实",
    "pinyin": "zhēn shí",
    "english": "true, real",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1202",
    "hanzi": "针对",
    "pinyin": "zhēn duì",
    "english": "to be directed against, to be aimed at, to counter, in the light of, in connection with",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1203",
    "hanzi": "珍惜",
    "pinyin": "zhēn xī",
    "english": "to treasure, to value, to cherish",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1204",
    "hanzi": "诊断",
    "pinyin": "zhěn duàn",
    "english": "diagnosis, to diagnose",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1205",
    "hanzi": "枕头",
    "pinyin": "zhěn tou",
    "english": "pillow",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1206",
    "hanzi": "阵",
    "pinyin": "zhèn",
    "english": "disposition of troops, wave, spate, burst, spell, short period of time, classifier for events or states of short duration",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1207",
    "hanzi": "振动",
    "pinyin": "zhèn dòng",
    "english": "vibration",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1208",
    "hanzi": "睁",
    "pinyin": "zhēng",
    "english": "to open (one's eyes)",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1209",
    "hanzi": "争论",
    "pinyin": "zhēng lùn",
    "english": "to argue, to debate, to contend, argument, contention, controversy, debate, 場|场[chǎng]",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1210",
    "hanzi": "��取",
    "pinyin": "zhēng qǔ",
    "english": "to fight for, to strive for, to win over",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1211",
    "hanzi": "征求",
    "pinyin": "zhēng qiú",
    "english": "to solicit, to seek, to request (opinions, feedback etc), to petition",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1212",
    "hanzi": "整个",
    "pinyin": "zhěng gè",
    "english": "whole, entire, total",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1213",
    "hanzi": "整体",
    "pinyin": "zhěng tǐ",
    "english": "whole entity, entire body, synthesis, as a whole (situation, construction, team etc), global, macrocosm, integral, holistic, whole",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1214",
    "hanzi": "正",
    "pinyin": "zhèng",
    "english": "just (right), main, upright, straight, correct, positive, greater than zero, principle",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1215",
    "hanzi": "政策",
    "pinyin": "zhèng cè",
    "english": "policy",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1216",
    "hanzi": "政府",
    "pinyin": "zhèng fǔ",
    "english": "government",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1217",
    "hanzi": "政治",
    "pinyin": "zhèng zhì",
    "english": "politics, political",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1218",
    "hanzi": "证件",
    "pinyin": "zhèng jiàn",
    "english": "paperwork, credentials",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1219",
    "hanzi": "证据",
    "pinyin": "zhèng jù",
    "english": "evidence, proof, testimony",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1220",
    "hanzi": "挣钱",
    "pinyin": "zhèng qián",
    "english": "to make money",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1221",
    "hanzi": "支",
    "pinyin": "zhī",
    "english": "to support, to sustain, to erect, to raise, branch, division, to draw money, classifier for rods such as pens and guns, for army divisions and for songs or compositions",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1222",
    "hanzi": "支票",
    "pinyin": "zhī piào",
    "english": "check (bank), cheque",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1223",
    "hanzi": "直",
    "pinyin": "zhí",
    "english": "straight, to straighten, fair and reasonable, frank, straightforward, (indicates continuing motion or action), vertical, vertical downward stroke in Chinese characters",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1224",
    "hanzi": "执行",
    "pinyin": "zhí xíng",
    "english": "to implement, to carry out, to execute, to run",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1225",
    "hanzi": "执照",
    "pinyin": "zhí zhào",
    "english": "a license, a permit",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1226",
    "hanzi": "指导",
    "pinyin": "zhǐ dǎo",
    "english": "to guide, to give directions, to direct, to coach, guidance, tuition",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1227",
    "hanzi": "指挥",
    "pinyin": "zhǐ huī",
    "english": "to conduct, to command, to direct, conductor (of an orchestra)",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1228",
    "hanzi": "制定",
    "pinyin": "zhì dìng",
    "english": "to draw up, to formulate",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1229",
    "hanzi": "制度",
    "pinyin": "zhì dù",
    "english": "system (e.g. political, adminstrative etc), institution",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1230",
    "hanzi": "制作",
    "pinyin": "zhì zuò",
    "english": "to make, to manufacture",
    "level": "HSK 5",
    "lesson": 41
  },
  {
    "id": "HSK5-1231",
    "hanzi": "智慧",
    "pinyin": "zhì huì",
    "english": "wisdom, knowledge, intelligent, intelligence",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1232",
    "hanzi": "至今",
    "pinyin": "zhì jīn",
    "english": "so far, to this day, until now",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1233",
    "hanzi": "至于",
    "pinyin": "zhì yú",
    "english": "as for, as to, to go so far as to",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1234",
    "hanzi": "治疗",
    "pinyin": "zhì liáo",
    "english": "to treat, to cure, medical treatment, cure",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1235",
    "hanzi": "志愿者",
    "pinyin": "zhì yuàn zhě",
    "english": "volunteer",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1236",
    "hanzi": "秩序",
    "pinyin": "zhì xù",
    "english": "order (orderly), order (sequence), social order, the state (of society)",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1237",
    "hanzi": "钟",
    "pinyin": "zhōng",
    "english": "clock, o'clock, time as measured in hours and minutes, bell, 座[zuò]",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1238",
    "hanzi": "中介",
    "pinyin": "zhōng jiè",
    "english": "to act as intermediary, to link, intermediate, inter-, agency, agent",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1239",
    "hanzi": "中心",
    "pinyin": "zhōng xīn",
    "english": "center, heart, core",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1240",
    "hanzi": "中旬",
    "pinyin": "zhōng xún",
    "english": "middle third of a month",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1241",
    "hanzi": "重",
    "pinyin": "zhòng",
    "english": "heavy, serious, to attach importance to",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1242",
    "hanzi": "重量",
    "pinyin": "zhòng liàng",
    "english": "weight",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1243",
    "hanzi": "周到",
    "pinyin": "zhōu dao",
    "english": "thoughtful, considerate, attentive, thorough",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1244",
    "hanzi": "逐步",
    "pinyin": "zhú bù",
    "english": "progressively, step by step",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1245",
    "hanzi": "竹子",
    "pinyin": "zhú zi",
    "english": "bamboo, 支, 根[gēn]",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1246",
    "hanzi": "煮",
    "pinyin": "zhǔ",
    "english": "to cook, to boil",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1247",
    "hanzi": "主持",
    "pinyin": "zhǔ chí",
    "english": "to take charge of, to manage or direct, to preside over, to uphold, to stand for (justice etc), to host (a TV or radio program etc)",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1248",
    "hanzi": "主观",
    "pinyin": "zhǔ guān",
    "english": "subjective",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1249",
    "hanzi": "主人",
    "pinyin": "zhǔ rén",
    "english": "master, host, owner",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1250",
    "hanzi": "主席",
    "pinyin": "zhǔ xí",
    "english": "chairperson, premier, chairman, 位[wèi]",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1251",
    "hanzi": "主张",
    "pinyin": "zhǔ zhāng",
    "english": "to advocate, to stand for, view, position, stand, proposition, viewpoint, assertion",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1252",
    "hanzi": "嘱咐",
    "pinyin": "zhǔ fù",
    "english": "to tell, to exhort, injunction",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1253",
    "hanzi": "祝福",
    "pinyin": "zhù fú",
    "english": "blessings, to wish sb well",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1254",
    "hanzi": "注册",
    "pinyin": "zhù cè",
    "english": "to register, to enroll",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1255",
    "hanzi": "抓紧",
    "pinyin": "zhuā jǐn",
    "english": "to grasp firmly, to pay special attention to, to rush in, to make the most of",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1256",
    "hanzi": "专家",
    "pinyin": "zhuān jiā",
    "english": "expert, specialist",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1257",
    "hanzi": "专心",
    "pinyin": "zhuān xīn",
    "english": "to concentrate, absorption, concentration, engrossed",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1258",
    "hanzi": "转变",
    "pinyin": "zhuǎn biàn",
    "english": "to change, to transform, shift, transformation",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1259",
    "hanzi": "转告",
    "pinyin": "zhuǎn gào",
    "english": "to pass on, to communicate, to transmit",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1260",
    "hanzi": "装",
    "pinyin": "zhuāng",
    "english": "adornment, to adorn, dress, clothing, costume (of an actor in a play), to play a role, to pretend, to install, to fix, to wrap (sth in a bag), to load, to pack",
    "level": "HSK 5",
    "lesson": 42
  },
  {
    "id": "HSK5-1261",
    "hanzi": "装饰",
    "pinyin": "zhuāng shì",
    "english": "to decorate, decoration, decorative, ornamental",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1262",
    "hanzi": "状况",
    "pinyin": "zhuàng kuàng",
    "english": "condition, state, situation",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1263",
    "hanzi": "状态",
    "pinyin": "zhuàng tài",
    "english": "state of affairs, state, mode, situation",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1264",
    "hanzi": "追求",
    "pinyin": "zhuī qiú",
    "english": "to pursue (a goal etc) stubbornly, to seek after, to woo",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1265",
    "hanzi": "资格",
    "pinyin": "zī gé",
    "english": "qualifications",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1266",
    "hanzi": "资金",
    "pinyin": "zī jīn",
    "english": "funds, funding, capital",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1267",
    "hanzi": "资料",
    "pinyin": "zī liào",
    "english": "material, resources, data, information, profile (Internet), 個|个[gè]",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1268",
    "hanzi": "资源",
    "pinyin": "zī yuán",
    "english": "natural resource (such as water or minerals), resource (such as manpower or tourism)",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1269",
    "hanzi": "姿势",
    "pinyin": "zī shì",
    "english": "posture, position",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1270",
    "hanzi": "咨询",
    "pinyin": "zī xún",
    "english": "to consult, to seek advice, consultation, (sales) inquiry (formal)",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1271",
    "hanzi": "紫",
    "pinyin": "zǐ",
    "english": "purple, violet, amethyst, Lithospermum erythrorhizon (flowering plant whose root provides red purple dye), Japanese: murasaki",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1272",
    "hanzi": "字幕",
    "pinyin": "zì mù",
    "english": "caption, subtitle",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1273",
    "hanzi": "自从",
    "pinyin": "zì cóng",
    "english": "since (a time), ever since",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1274",
    "hanzi": "自动",
    "pinyin": "zì dòng",
    "english": "automatic, voluntarily",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1275",
    "hanzi": "自豪",
    "pinyin": "zì háo",
    "english": "(feel a sense of) pride, to be proud of sth (in a good way)",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1276",
    "hanzi": "自觉",
    "pinyin": "zì jué",
    "english": "conscious, aware, on one's own initiative, conscientious",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1277",
    "hanzi": "自私",
    "pinyin": "zì sī",
    "english": "selfish, selfishness",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1278",
    "hanzi": "自信",
    "pinyin": "zì xìn",
    "english": "to have confidence in oneself, self-confidence",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1279",
    "hanzi": "自由",
    "pinyin": "zì yóu",
    "english": "freedom, free, liberty",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1280",
    "hanzi": "自愿",
    "pinyin": "zì yuàn",
    "english": "voluntary",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1281",
    "hanzi": "综合",
    "pinyin": "zōng hé",
    "english": "comprehensive, composite, synthesized, to sum up, to integrate, to synthesize",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1282",
    "hanzi": "宗教",
    "pinyin": "zōng jiào",
    "english": "religion",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1283",
    "hanzi": "总裁",
    "pinyin": "zǒng cái",
    "english": "chairman, director-general (of a company etc)",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1284",
    "hanzi": "总共",
    "pinyin": "zǒng gòng",
    "english": "altogether, in sum, in all, in total",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1285",
    "hanzi": "总理",
    "pinyin": "zǒng lǐ",
    "english": "premier, prime minister, 位, 名[míng]",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1286",
    "hanzi": "总算",
    "pinyin": "zǒng suàn",
    "english": "at long last, finally, on the whole",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1287",
    "hanzi": "总统",
    "pinyin": "zǒng tǒng",
    "english": "president (of a country), 位, 名, 屆|届[jiè]",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1288",
    "hanzi": "总之",
    "pinyin": "zǒng zhī",
    "english": "in a word, in short, in brief",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1289",
    "hanzi": "组合",
    "pinyin": "zǔ hé",
    "english": "to assemble, combination, combinatorial",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1290",
    "hanzi": "阻止",
    "pinyin": "zǔ zhǐ",
    "english": "to prevent, to block",
    "level": "HSK 5",
    "lesson": 43
  },
  {
    "id": "HSK5-1291",
    "hanzi": "祖国",
    "pinyin": "zǔ guó",
    "english": "ancestral land CL:個|个[gè], homeland, used for PRC",
    "level": "HSK 5",
    "lesson": 44
  },
  {
    "id": "HSK5-1292",
    "hanzi": "祖先",
    "pinyin": "zǔ xiān",
    "english": "ancestor, forebears",
    "level": "HSK 5",
    "lesson": 44
  },
  {
    "id": "HSK5-1293",
    "hanzi": "醉",
    "pinyin": "zuì",
    "english": "intoxicated",
    "level": "HSK 5",
    "lesson": 44
  },
  {
    "id": "HSK5-1294",
    "hanzi": "最初",
    "pinyin": "zuì chū",
    "english": "first, primary, initial",
    "level": "HSK 5",
    "lesson": 44
  },
  {
    "id": "HSK5-1295",
    "hanzi": "罪犯",
    "pinyin": "zuì fàn",
    "english": "criminal",
    "level": "HSK 5",
    "lesson": 44
  },
  {
    "id": "HSK5-1296",
    "hanzi": "尊敬",
    "pinyin": "zūn jìng",
    "english": "respect, to revere",
    "level": "HSK 5",
    "lesson": 44
  },
  {
    "id": "HSK5-1297",
    "hanzi": "遵守",
    "pinyin": "zūn shǒu",
    "english": "to comply with, to abide by, to respect (an agreement)",
    "level": "HSK 5",
    "lesson": 44
  },
  {
    "id": "HSK5-1298",
    "hanzi": "作品",
    "pinyin": "zuò pǐn",
    "english": "work (of art), opus, 篇[piān]",
    "level": "HSK 5",
    "lesson": 44
  },
  {
    "id": "HSK5-1299",
    "hanzi": "作为",
    "pinyin": "zuò wéi",
    "english": "one's conduct, deed, activity, accomplishment, achievement, to act as, as (in the capacity of), qua, to view as, to look upon (sth as), to take sth to be",
    "level": "HSK 5",
    "lesson": 44
  },
  {
    "id": "HSK5-1300",
    "hanzi": "作文",
    "pinyin": "zuò wén",
    "english": "to write an essay, composition (student essay)",
    "level": "HSK 5",
    "lesson": 44
  },
  {
    "id": "HSK6-1",
    "hanzi": "哎哟",
    "pinyin": "āi yō",
    "english": "hey, ow, ouch, interjection of pain or surprise",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-2",
    "hanzi": "挨",
    "pinyin": "ái",
    "english": "to suffer, to endure, to pull through (hard times), to delay, to stall, to play for time, to dawdle",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-3",
    "hanzi": "癌症",
    "pinyin": "ái zhèng",
    "english": "cancer",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-4",
    "hanzi": "爱不释手",
    "pinyin": "ài bù shì shǒu",
    "english": "to love sth too much to part with it (idiom); to fondle admiringly",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-5",
    "hanzi": "爱戴",
    "pinyin": "ài dài",
    "english": "to love and respect, love and respect",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-6",
    "hanzi": "暧昧",
    "pinyin": "ài mèi",
    "english": "vague, ambiguous, equivocal, dubious",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-7",
    "hanzi": "安居乐业",
    "pinyin": "ān jū lè yè",
    "english": "live in peace and work happily (idiom)",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-8",
    "hanzi": "安宁",
    "pinyin": "ān níng",
    "english": "peaceful, tranquil, calm, composed, free from worry",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-9",
    "hanzi": "安详",
    "pinyin": "ān xiáng",
    "english": "serene",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-10",
    "hanzi": "安置",
    "pinyin": "ān zhì",
    "english": "to find a place for, to help settle down, to arrange for, to get into bed, placement",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-11",
    "hanzi": "暗示",
    "pinyin": "àn shì",
    "english": "to hint, to suggest, suggestion, hint",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-12",
    "hanzi": "案件",
    "pinyin": "àn jiàn",
    "english": "law case, legal case, judicial case, 樁|桩, 起[qǐ]",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-13",
    "hanzi": "案例",
    "pinyin": "àn lì",
    "english": "case (law)",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-14",
    "hanzi": "按摩",
    "pinyin": "àn mó",
    "english": "massage, to massage",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-15",
    "hanzi": "昂贵",
    "pinyin": "áng guì",
    "english": "expensive, costly",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-16",
    "hanzi": "凹凸",
    "pinyin": "āo tū",
    "english": "bumpy, uneven, slotted and tabbed joint, crenelation",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-17",
    "hanzi": "熬",
    "pinyin": "áo",
    "english": "to cook on a slow fire, to extract by heating, to decoct, to endure",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-18",
    "hanzi": "奥秘",
    "pinyin": "ào mì",
    "english": "secret, mystery",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-19",
    "hanzi": "扒",
    "pinyin": "bā",
    "english": "to hold on to, to cling to, to dig up, to rake, to push aside, to climb, to pull out, to strip off",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-20",
    "hanzi": "疤",
    "pinyin": "bā",
    "english": "scar",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-21",
    "hanzi": "巴不得",
    "pinyin": "bā bù dé",
    "english": "to be eager for, to long for, to look forward to",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-22",
    "hanzi": "巴结",
    "pinyin": "bā jie",
    "english": "to fawn on, to curry favor with, to make up to",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-23",
    "hanzi": "拔苗助长",
    "pinyin": "bá miáo zhù zhǎng",
    "english": "to spoil things through excessive enthusiasm (idiom)",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-24",
    "hanzi": "把关",
    "pinyin": "bǎ guān",
    "english": "to guard a pass, to check on sth",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-25",
    "hanzi": "把手",
    "pinyin": "bǎ shǒu",
    "english": "handle, grip, knob",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-26",
    "hanzi": "把戏",
    "pinyin": "bǎ xì",
    "english": "acrobatics, jugglery, cheap trick, game",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-27",
    "hanzi": "霸道",
    "pinyin": "bà dào",
    "english": "the Way of the Hegemon, abbr. of 霸王之道, despotic rule, rule by might, evil as opposed to the Way of the King 王道, overbearing, tyranny, (of liquor, medicine etc) strong, potent",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-28",
    "hanzi": "罢工",
    "pinyin": "bà gōng",
    "english": "a strike, to go on strike",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-29",
    "hanzi": "掰",
    "pinyin": "bāi",
    "english": "to break with both hands",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-30",
    "hanzi": "百分点",
    "pinyin": "bǎi fēn diǎn",
    "english": "percentage point",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-31",
    "hanzi": "摆脱",
    "pinyin": "bǎi tuō",
    "english": "to break away from, to cast off (old ideas etc), to get rid of, to break away (from), to break out (of), to free oneself from, to extricate oneself",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-32",
    "hanzi": "拜访",
    "pinyin": "bài fǎng",
    "english": "to pay a visit, to call on",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-33",
    "hanzi": "拜年",
    "pinyin": "bài nián",
    "english": "pay a New Year call, wish sb a Happy New Year",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-34",
    "hanzi": "拜托",
    "pinyin": "bài tuō",
    "english": "to request sb to do sth, please!",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-35",
    "hanzi": "败坏",
    "pinyin": "bài huài",
    "english": "to ruin, to corrupt, to undermine",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-36",
    "hanzi": "颁布",
    "pinyin": "bān bù",
    "english": "to issue, to proclaim, to enact (laws, decrees etc)",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-37",
    "hanzi": "颁发",
    "pinyin": "bān fā",
    "english": "to issue, to promulgate, to award",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-38",
    "hanzi": "斑纹",
    "pinyin": "bān wén",
    "english": "stripe, streak",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-39",
    "hanzi": "版本",
    "pinyin": "bǎn běn",
    "english": "version, edition, release",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-40",
    "hanzi": "半途而废",
    "pinyin": "bàn tú ér fèi",
    "english": "to give up halfway (idiom); leave sth unfinished",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-41",
    "hanzi": "伴侣",
    "pinyin": "bàn lǚ",
    "english": "companion, mate, partner",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-42",
    "hanzi": "伴随",
    "pinyin": "bàn suí",
    "english": "to accompany, to follow, to occur together with, concomitant",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-43",
    "hanzi": "扮演",
    "pinyin": "bàn yǎn",
    "english": "to play the role of, to act",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-44",
    "hanzi": "绑架",
    "pinyin": "bǎng jià",
    "english": "to kidnap, to abduct, to hijack, a kidnapping, abduction, staking",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-45",
    "hanzi": "榜样",
    "pinyin": "bǎng yàng",
    "english": "example, model",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-46",
    "hanzi": "磅",
    "pinyin": "bàng",
    "english": "see 磅秤 scale, platform balance, pound (unit of weight, about 454 grams)",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-47",
    "hanzi": "包庇",
    "pinyin": "bāo bì",
    "english": "to shield, to harbor, to cover up",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-48",
    "hanzi": "包袱",
    "pinyin": "bāo fu",
    "english": "cloth-wrapper, a bundle wrapped in cloth, load, weight, burden",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-49",
    "hanzi": "包围",
    "pinyin": "bāo wéi",
    "english": "to surround, to encircle, to hem in",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-50",
    "hanzi": "包装",
    "pinyin": "bāo zhuāng",
    "english": "to pack, to package, to wrap, packaging",
    "level": "HSK 6",
    "lesson": 1
  },
  {
    "id": "HSK6-51",
    "hanzi": "饱和",
    "pinyin": "bǎo hé",
    "english": "saturation",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-52",
    "hanzi": "饱经沧桑",
    "pinyin": "bǎo jīng cāng sāng",
    "english": "having lived through many changes",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-53",
    "hanzi": "保管",
    "pinyin": "bǎo guǎn",
    "english": "to assure, to guarantee, to take care of, to safeguard, certainly, surely",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-54",
    "hanzi": "保密",
    "pinyin": "bǎo mì",
    "english": "to keep sth confidential, to maintain secrecy",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-55",
    "hanzi": "保姆",
    "pinyin": "bǎo mǔ",
    "english": "nanny, housekeeper",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-56",
    "hanzi": "保守",
    "pinyin": "bǎo shǒu",
    "english": "(politically) conservative, to guard, to keep",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-57",
    "hanzi": "保卫",
    "pinyin": "bǎo wèi",
    "english": "to defend, to safeguard",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-58",
    "hanzi": "保养",
    "pinyin": "bǎo yǎng",
    "english": "to take good care of (or conserve) one's health, to keep in good repair, to maintain, maintenance",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-59",
    "hanzi": "保障",
    "pinyin": "bǎo zhàng",
    "english": "to ensure, to guarantee, to safeguard",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-60",
    "hanzi": "保重",
    "pinyin": "bǎo zhòng",
    "english": "to take care of oneself",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-61",
    "hanzi": "抱负",
    "pinyin": "bào fù",
    "english": "aspiration, ambition",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-62",
    "hanzi": "抱怨",
    "pinyin": "bào yuàn",
    "english": "to complain, to grumble",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-63",
    "hanzi": "报仇",
    "pinyin": "bào chóu",
    "english": "to take revenge, to avenge",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-64",
    "hanzi": "报酬",
    "pinyin": "bào chóu",
    "english": "reward, remuneration",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-65",
    "hanzi": "报答",
    "pinyin": "bào dá",
    "english": "to repay, to requite",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-66",
    "hanzi": "报到",
    "pinyin": "bào dào",
    "english": "to report for duty, to check in, to register",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-67",
    "hanzi": "报复",
    "pinyin": "bào fù",
    "english": "to make reprisals, to retaliate, revenge, retaliation",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-68",
    "hanzi": "报社",
    "pinyin": "bào shè",
    "english": "general office of a newspaper, newspaper office",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-69",
    "hanzi": "报销",
    "pinyin": "bào xiāo",
    "english": "to submit an expense account, to apply for reimbursement, to write off, to wipe out",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-70",
    "hanzi": "爆发",
    "pinyin": "bào fā",
    "english": "to break out, to erupt, to explode, to burst out",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-71",
    "hanzi": "爆炸",
    "pinyin": "bào zhà",
    "english": "explosion, to explode, to blow up, to detonate",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-72",
    "hanzi": "曝光",
    "pinyin": "bào guāng",
    "english": "light meter, exposure meter",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-73",
    "hanzi": "暴力",
    "pinyin": "bào lì",
    "english": "violence, (use) force, violent",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-74",
    "hanzi": "暴露",
    "pinyin": "bào lù",
    "english": "to expose, to reveal, to lay bare, also pr. [pù lù]",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-75",
    "hanzi": "悲哀",
    "pinyin": "bēi āi",
    "english": "grieved, sorrowful",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-76",
    "hanzi": "悲惨",
    "pinyin": "bēi cǎn",
    "english": "miserable, tragic",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-77",
    "hanzi": "卑鄙",
    "pinyin": "bēi bǐ",
    "english": "base, mean, contemptible, despicable",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-78",
    "hanzi": "北极",
    "pinyin": "běi jí",
    "english": "the North Pole, the Arctic Pole, the north magnetic pole",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-79",
    "hanzi": "被动",
    "pinyin": "bèi dòng",
    "english": "passive",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-80",
    "hanzi": "被告",
    "pinyin": "bèi gào",
    "english": "defendant",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-81",
    "hanzi": "背叛",
    "pinyin": "bèi pàn",
    "english": "to betray",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-82",
    "hanzi": "背诵",
    "pinyin": "bèi sòng",
    "english": "recite, repeat from memory",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-83",
    "hanzi": "备份",
    "pinyin": "bèi fèn",
    "english": "backup",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-84",
    "hanzi": "备忘录",
    "pinyin": "bèi wàng lù",
    "english": "memorandum, aide-memoire, memorandum book",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-85",
    "hanzi": "贝壳",
    "pinyin": "bèi ké",
    "english": "shell, conch, cowry, mother of pearl, hard outer skin, alternative reading, mostly written",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-86",
    "hanzi": "奔波",
    "pinyin": "bēn bō",
    "english": "to rush about, to be constantly on the move",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-87",
    "hanzi": "奔驰",
    "pinyin": "bēn chí",
    "english": "to run quickly, to speed, to gallop",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-88",
    "hanzi": "本能",
    "pinyin": "běn néng",
    "english": "instinct",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-89",
    "hanzi": "本钱",
    "pinyin": "běn qián",
    "english": "capital",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-90",
    "hanzi": "本人",
    "pinyin": "běn rén",
    "english": "the person himself, I (humble form used in speeches), oneself, myself, in person, personal",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-91",
    "hanzi": "本身",
    "pinyin": "běn shēn",
    "english": "itself, in itself, per se",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-92",
    "hanzi": "本事",
    "pinyin": "běn shi",
    "english": "ability, skill",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-93",
    "hanzi": "本着",
    "pinyin": "běn zhe",
    "english": "based on..., in conformance with.., taking as one's main principle",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-94",
    "hanzi": "笨拙",
    "pinyin": "bèn zhuō",
    "english": "clumsy, awkward, stupid",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-95",
    "hanzi": "崩溃",
    "pinyin": "bēng kuì",
    "english": "to collapse, to crumble, to fall apart",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-96",
    "hanzi": "甭",
    "pinyin": "béng",
    "english": "need not, (contraction of 不 and 用)",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-97",
    "hanzi": "蹦",
    "pinyin": "bèng",
    "english": "to jump, to bounce, to hop",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-98",
    "hanzi": "迸发",
    "pinyin": "bèng fā",
    "english": "to burst forth",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-99",
    "hanzi": "逼迫",
    "pinyin": "bī pò",
    "english": "to force, to compel, to coerce",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-100",
    "hanzi": "鼻涕",
    "pinyin": "bí tì",
    "english": "nasal mucus, snivel",
    "level": "HSK 6",
    "lesson": 2
  },
  {
    "id": "HSK6-101",
    "hanzi": "比方",
    "pinyin": "bǐ fang",
    "english": "analogy, instance",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-102",
    "hanzi": "比喻",
    "pinyin": "bǐ yù",
    "english": "to compare, to liken to, metaphor, analogy, figure of speech, figuratively",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-103",
    "hanzi": "比重",
    "pinyin": "bǐ zhòng",
    "english": "proportion, specific gravity",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-104",
    "hanzi": "臂",
    "pinyin": "bì",
    "english": "arm",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-105",
    "hanzi": "弊病",
    "pinyin": "bì bìng",
    "english": "malady, evil, malpractice, drawback, disadvantage",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-106",
    "hanzi": "弊端",
    "pinyin": "bì duān",
    "english": "malpractice, abuse, corrupt practice",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-107",
    "hanzi": "必定",
    "pinyin": "bì dìng",
    "english": "be bound to, be sure to",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-108",
    "hanzi": "闭塞",
    "pinyin": "bì sè",
    "english": "to stop up, to close up, hard to get to, out of the way, inaccessible, unenlightened, blocking",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-109",
    "hanzi": "碧玉",
    "pinyin": "bì yù",
    "english": "jasper",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-110",
    "hanzi": "鞭策",
    "pinyin": "biān cè",
    "english": "to spur on, to urge on, to encourage sb (e.g. to make progress)",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-111",
    "hanzi": "编织",
    "pinyin": "biān zhī",
    "english": "to weave, to knit, to plait, to braid",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-112",
    "hanzi": "边疆",
    "pinyin": "biān jiāng",
    "english": "border area, borderland, frontier, frontier region",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-113",
    "hanzi": "边界",
    "pinyin": "biān jiè",
    "english": "boundary, border",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-114",
    "hanzi": "边境",
    "pinyin": "biān jìng",
    "english": "frontier, border",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-115",
    "hanzi": "边缘",
    "pinyin": "biān yuán",
    "english": "edge, fringe, verge, brink, periphery, marginal, borderline",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-116",
    "hanzi": "扁",
    "pinyin": "biǎn",
    "english": "flat, (old form of character 匾, horizontal tablet with inscription)",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-117",
    "hanzi": "贬低",
    "pinyin": "biǎn dī",
    "english": "to belittle, to disparage, to play down, to demean, to degrade, to devalue",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-118",
    "hanzi": "贬义",
    "pinyin": "biǎn yì",
    "english": "derogatory sense, negative connotation",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-119",
    "hanzi": "遍布",
    "pinyin": "biàn bù",
    "english": "to cover the whole (area), to be found throughout",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-120",
    "hanzi": "便利",
    "pinyin": "biàn lì",
    "english": "convenient, easy, to facilitate",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-121",
    "hanzi": "便条",
    "pinyin": "biàn tiáo",
    "english": "(informal) note, 個|个[gè]",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-122",
    "hanzi": "便于",
    "pinyin": "biàn yú",
    "english": "easy to, convenient for",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-123",
    "hanzi": "变故",
    "pinyin": "biàn gù",
    "english": "an unforeseen event, accident, misfortune",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-124",
    "hanzi": "变迁",
    "pinyin": "biàn qiān",
    "english": "changes, vicissitudes",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-125",
    "hanzi": "变质",
    "pinyin": "biàn zhì",
    "english": "to degenerate, to go bad, to deteriorate, metamorphosis",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-126",
    "hanzi": "辩护",
    "pinyin": "biàn hù",
    "english": "to speak in defense of, to argue in favor of, to defend, to plead",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-127",
    "hanzi": "辩解",
    "pinyin": "biàn jiě",
    "english": "to explain, to justify, to defend (a point of view etc), to provide an explanation, to try to defend oneself",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-128",
    "hanzi": "辩证",
    "pinyin": "biàn zhèng",
    "english": "to investigate, dialectical",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-129",
    "hanzi": "辨认",
    "pinyin": "biàn rèn",
    "english": "to recognize, to identify",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-130",
    "hanzi": "辫子",
    "pinyin": "biàn zi",
    "english": "plait, braid, pigtail, a mistake or shortcoming that may be exploited by an opponent, handle, 條|条[tiáo]",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-131",
    "hanzi": "标本",
    "pinyin": "biāo běn",
    "english": "specimen, sample, the root cause and symptoms of a disease",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-132",
    "hanzi": "标记",
    "pinyin": "biāo jì",
    "english": "sign, mark, symbol, to mark up",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-133",
    "hanzi": "标题",
    "pinyin": "biāo tí",
    "english": "title, heading, headline, caption, subject",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-134",
    "hanzi": "飙升",
    "pinyin": "biāo shēng",
    "english": "to rise rapidly, to soar",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-135",
    "hanzi": "表决",
    "pinyin": "biǎo jué",
    "english": "to decide by vote, to vote",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-136",
    "hanzi": "表态",
    "pinyin": "biǎo tài",
    "english": "to declare one's position, to say where one stands",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-137",
    "hanzi": "表彰",
    "pinyin": "biǎo zhāng",
    "english": "to honor, to commend, to cite (in dispatches)",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-138",
    "hanzi": "憋",
    "pinyin": "biē",
    "english": "to choke, to stifle, to restrain, to hold back, to hold in (urine), to hold (one's breath)",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-139",
    "hanzi": "别墅",
    "pinyin": "bié shù",
    "english": "villa, 座[zuò]",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-140",
    "hanzi": "别致",
    "pinyin": "bié zhì",
    "english": "variant of 別緻|别致[bié zhì]",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-141",
    "hanzi": "别扭",
    "pinyin": "biè niu",
    "english": "awkward, difficult, uncomfortable, not agreeing, at loggerheads, gauche, awkward (writing or speech)",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-142",
    "hanzi": "濒临",
    "pinyin": "bīn lín",
    "english": "on the verge of, close to",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-143",
    "hanzi": "冰雹",
    "pinyin": "bīng báo",
    "english": "hail, hailstone, 粒[lì]",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-144",
    "hanzi": "并存",
    "pinyin": "bìng cún",
    "english": "to exist at the same time, to coexist",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-145",
    "hanzi": "并非",
    "pinyin": "bìng fēi",
    "english": "really isn't",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-146",
    "hanzi": "并列",
    "pinyin": "bìng liè",
    "english": "to stand side by side, to be juxtaposed",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-147",
    "hanzi": "拨打",
    "pinyin": "bō dǎ",
    "english": "to call, to dial",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-148",
    "hanzi": "播放",
    "pinyin": "bō fàng",
    "english": "to broadcast, to transmit",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-149",
    "hanzi": "播种",
    "pinyin": "bō zhǒng",
    "english": "to sow seeds, sowing, seed",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-150",
    "hanzi": "波浪",
    "pinyin": "bō làng",
    "english": "wave",
    "level": "HSK 6",
    "lesson": 3
  },
  {
    "id": "HSK6-151",
    "hanzi": "波涛汹涌",
    "pinyin": "bō tāo xiōng yǒng",
    "english": "waves surging forth, roaring sea",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-152",
    "hanzi": "剥削",
    "pinyin": "bō xuē",
    "english": "to exploit, exploitation",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-153",
    "hanzi": "博大精深",
    "pinyin": "bó dà jīng shēn",
    "english": "wide-ranging and profound, broad and deep",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-154",
    "hanzi": "博览会",
    "pinyin": "bó lǎn huì",
    "english": "exposition, international fair",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-155",
    "hanzi": "搏斗",
    "pinyin": "bó dòu",
    "english": "to wrestle, to fight, to struggle",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-156",
    "hanzi": "伯母",
    "pinyin": "bó mǔ",
    "english": "wife of father's elder brother, aunt, (polite form of address for a woman who is about the age of one's mother)",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-157",
    "hanzi": "薄弱",
    "pinyin": "bó ruò",
    "english": "weak, frail",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-158",
    "hanzi": "不顾",
    "pinyin": "bù gù",
    "english": "in spite of, regardless of",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-159",
    "hanzi": "不愧",
    "pinyin": "bù kuì",
    "english": "to be worthy of, to deserve to be called, to prove oneself to be",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-160",
    "hanzi": "不料",
    "pinyin": "bù liào",
    "english": "unexpectedly, to one's surprise",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-161",
    "hanzi": "不像话",
    "pinyin": "bù xiàng huà",
    "english": "unreasonable, shocking, outrageous",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-162",
    "hanzi": "不屑一顾",
    "pinyin": "bù xiè yī gù",
    "english": "to disdain as beneath contempt",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-163",
    "hanzi": "补偿",
    "pinyin": "bǔ cháng",
    "english": "to compensate, to make up",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-164",
    "hanzi": "补救",
    "pinyin": "bǔ jiù",
    "english": "to remedy",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-165",
    "hanzi": "补贴",
    "pinyin": "bǔ tiē",
    "english": "to subsidize, subsidy, allowance",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-166",
    "hanzi": "哺乳",
    "pinyin": "bǔ rǔ",
    "english": "breast feeding, to suckle, to nurse",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-167",
    "hanzi": "捕捉",
    "pinyin": "bǔ zhuō",
    "english": "to catch, to seize, to capture",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-168",
    "hanzi": "不得已",
    "pinyin": "bù dé yǐ",
    "english": "to act against one's will, to have no alternative but to, to have to, to have no choice, must",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-169",
    "hanzi": "不妨",
    "pinyin": "bù fáng",
    "english": "there is no harm in, might as well",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-170",
    "hanzi": "不敢当",
    "pinyin": "bù gǎn dāng",
    "english": "lit. I dare not (accept the honor); fig. I don't deserve your praise, you flatter me",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-171",
    "hanzi": "不禁",
    "pinyin": "bù jīn",
    "english": "can't help (doing sth), can't refrain from",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-172",
    "hanzi": "不堪",
    "pinyin": "bù kān",
    "english": "cannot bear, cannot stand, utterly, extremely",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-173",
    "hanzi": "不可思议",
    "pinyin": "bù kě sī yì",
    "english": "inconceivable (idiom); unimaginable, unfathomable",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-174",
    "hanzi": "不时",
    "pinyin": "bù shí",
    "english": "from time to time, now and then, occasionally",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-175",
    "hanzi": "不惜",
    "pinyin": "bù xī",
    "english": "not stint, not spare, not hesitate (to do sth), not scruple (to do sth)",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-176",
    "hanzi": "不相上下",
    "pinyin": "bù xiāng shàng xià",
    "english": "equally matched, about the same",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-177",
    "hanzi": "不言而喻",
    "pinyin": "bù yán ér yù",
    "english": "it goes without saying, it is self-evident",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-178",
    "hanzi": "不由得",
    "pinyin": "bù yóu de",
    "english": "can't help, cannot but",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-179",
    "hanzi": "不择手段",
    "pinyin": "bù zé shǒu duàn",
    "english": "by fair means or foul, by hook or by crook, unscrupulously",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-180",
    "hanzi": "不止",
    "pinyin": "bù zhǐ",
    "english": "incessantly, without end, more than, not limited to",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-181",
    "hanzi": "布告",
    "pinyin": "bù gào",
    "english": "posting on a bulletin board, notice, bulletin, to announce",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-182",
    "hanzi": "布局",
    "pinyin": "bù jú",
    "english": "arrangement, composition, layout, opening (chess jargon)",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-183",
    "hanzi": "布置",
    "pinyin": "bù zhì",
    "english": "to put in order, to arrange, to decorate, to fix up, to deploy",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-184",
    "hanzi": "步伐",
    "pinyin": "bù fá",
    "english": "pace, (measured) step, march",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-185",
    "hanzi": "部署",
    "pinyin": "bù shǔ",
    "english": "to dispose, to deploy, deployment",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-186",
    "hanzi": "部位",
    "pinyin": "bù wèi",
    "english": "position, place",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-187",
    "hanzi": "才干",
    "pinyin": "cái gàn",
    "english": "ability, competence",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-188",
    "hanzi": "财富",
    "pinyin": "cái fù",
    "english": "wealth, riches",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-189",
    "hanzi": "财务",
    "pinyin": "cái wù",
    "english": "financial affairs",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-190",
    "hanzi": "财政",
    "pinyin": "cái zhèng",
    "english": "finances (public), financial",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-191",
    "hanzi": "裁缝",
    "pinyin": "cái féng",
    "english": "tailor, dressmaker",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-192",
    "hanzi": "裁判",
    "pinyin": "cái pàn",
    "english": "judgment, to referee, umpire, judge, referee, 位, 名[míng]",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-193",
    "hanzi": "裁员",
    "pinyin": "cái yuán",
    "english": "to cut staff, to lay off employees",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-194",
    "hanzi": "采购",
    "pinyin": "cǎi gòu",
    "english": "to procure (for an enterprise etc), to purchase",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-195",
    "hanzi": "采集",
    "pinyin": "cǎi jí",
    "english": "to gather, to collect, to harvest",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-196",
    "hanzi": "采纳",
    "pinyin": "cǎi nà",
    "english": "to accept, to adopt",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-197",
    "hanzi": "彩票",
    "pinyin": "cǎi piào",
    "english": "lottery ticket",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-198",
    "hanzi": "参谋",
    "pinyin": "cān móu",
    "english": "staff officer, to give advice",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-199",
    "hanzi": "参照",
    "pinyin": "cān zhào",
    "english": "to consult a reference, to refer to (another document)",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-200",
    "hanzi": "残酷",
    "pinyin": "cán kù",
    "english": "cruel, cruelty",
    "level": "HSK 6",
    "lesson": 4
  },
  {
    "id": "HSK6-201",
    "hanzi": "残留",
    "pinyin": "cán liú",
    "english": "to remain, left over, surplus, remnant",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-202",
    "hanzi": "残忍",
    "pinyin": "cán rěn",
    "english": "cruel, mean, merciless, ruthless",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-203",
    "hanzi": "灿烂",
    "pinyin": "càn làn",
    "english": "to glitter, brilliant, splendid",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-204",
    "hanzi": "舱",
    "pinyin": "cāng",
    "english": "cabin, the hold of a ship or airplane",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-205",
    "hanzi": "苍白",
    "pinyin": "cāng bái",
    "english": "pale, wan",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-206",
    "hanzi": "仓促",
    "pinyin": "cāng cù",
    "english": "all of a sudden, hurriedly",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-207",
    "hanzi": "仓库",
    "pinyin": "cāng kù",
    "english": "depot, storehouse, warehouse",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-208",
    "hanzi": "操劳",
    "pinyin": "cāo láo",
    "english": "to work hard, to look after",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-209",
    "hanzi": "操练",
    "pinyin": "cāo liàn",
    "english": "drill, practice",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-210",
    "hanzi": "操纵",
    "pinyin": "cāo zòng",
    "english": "to operate, to control, to rig, to manipulate",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-211",
    "hanzi": "操作",
    "pinyin": "cāo zuò",
    "english": "to work, to operate, to manipulate",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-212",
    "hanzi": "嘈杂",
    "pinyin": "cáo zá",
    "english": "noisy, clamorous",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-213",
    "hanzi": "草案",
    "pinyin": "cǎo àn",
    "english": "draft (legislation, proposal etc)",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-214",
    "hanzi": "草率",
    "pinyin": "cǎo shuài",
    "english": "careless, negligent, sloppy, not serious",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-215",
    "hanzi": "策划",
    "pinyin": "cè huà",
    "english": "to plot, to scheme, to bring about, to engineer, planning, producer, planner",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-216",
    "hanzi": "策略",
    "pinyin": "cè lvè",
    "english": "tactics, to be tactful",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-217",
    "hanzi": "测量",
    "pinyin": "cè liáng",
    "english": "survey, to measure, to gauge, to determine",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-218",
    "hanzi": "侧面",
    "pinyin": "cè miàn",
    "english": "lateral side, side, aspect, profile",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-219",
    "hanzi": "层出不穷",
    "pinyin": "céng chū bù qióng",
    "english": "more and more emerge, innumerable succession, breeding like flies (idiom)",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-220",
    "hanzi": "层次",
    "pinyin": "céng cì",
    "english": "arrangement of ideas, administrative level, level, stage, phase",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-221",
    "hanzi": "差距",
    "pinyin": "chā jù",
    "english": "disparity, gap",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-222",
    "hanzi": "查获",
    "pinyin": "chá huò",
    "english": "to investigate and capture (a criminal), to ferret out, to hunt down and arrest",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-223",
    "hanzi": "岔",
    "pinyin": "chà",
    "english": "fork in road, bifurcation, branch in road, river, mountain range etc, to branch off, to turn off, to diverge, to stray (from the path), to change the subject, to interrupt, to stagger (times)",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-224",
    "hanzi": "刹那",
    "pinyin": "chà nà",
    "english": "an instant (Sanskrit: ksana), split second, the twinkling of an eye",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-225",
    "hanzi": "诧异",
    "pinyin": "chà yì",
    "english": "flabbergasted, astonished",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-226",
    "hanzi": "柴油",
    "pinyin": "chái yóu",
    "english": "diesel fuel",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-227",
    "hanzi": "搀",
    "pinyin": "chān",
    "english": "to assist by the arm, to mix, to support, to sustain",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-228",
    "hanzi": "馋",
    "pinyin": "chán",
    "english": "gluttonous, greedy, to have a craving",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-229",
    "hanzi": "缠绕",
    "pinyin": "chán rào",
    "english": "twisting, to twine, to wind, to pester, to bother",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-230",
    "hanzi": "产业",
    "pinyin": "chǎn yè",
    "english": "industry, estate, property, industrial",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-231",
    "hanzi": "阐述",
    "pinyin": "chǎn shù",
    "english": "to expound (a position), to elaborate (on a topic), to treat (a subject)",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-232",
    "hanzi": "颤抖",
    "pinyin": "chàn dǒu",
    "english": "to shudder, to shiver, to shake, to tremble",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-233",
    "hanzi": "猖狂",
    "pinyin": "chāng kuáng",
    "english": "savage, furious",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-234",
    "hanzi": "昌盛",
    "pinyin": "chāng shèng",
    "english": "prosperous",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-235",
    "hanzi": "尝试",
    "pinyin": "cháng shì",
    "english": "to try, to attempt",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-236",
    "hanzi": "偿还",
    "pinyin": "cháng huán",
    "english": "to repay, to reimburse",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-237",
    "hanzi": "常年",
    "pinyin": "cháng nián",
    "english": "all year round, for years on end, average year",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-238",
    "hanzi": "常务",
    "pinyin": "cháng wù",
    "english": "routine, everyday business, daily operation (of a company)",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-239",
    "hanzi": "场合",
    "pinyin": "chǎng hé",
    "english": "situation, occasion",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-240",
    "hanzi": "场面",
    "pinyin": "chǎng miàn",
    "english": "scene, spectacle, occasion, situation",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-241",
    "hanzi": "场所",
    "pinyin": "chǎng suǒ",
    "english": "location, place",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-242",
    "hanzi": "敞开",
    "pinyin": "chǎng kāi",
    "english": "to open wide, unrestrictedly",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-243",
    "hanzi": "倡导",
    "pinyin": "chàng dǎo",
    "english": "to advocate, to initiate, to propose, to be a proponent of (an idea or school of thought)",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-244",
    "hanzi": "倡议",
    "pinyin": "chàng yì",
    "english": "to suggest, to initiate, proposal, initiative",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-245",
    "hanzi": "畅通",
    "pinyin": "chàng tōng",
    "english": "unimpeded, free-flowing, straight path, unclogged, move without obstruction",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-246",
    "hanzi": "畅销",
    "pinyin": "chàng xiāo",
    "english": "to sell well, best seller, chart-topping",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-247",
    "hanzi": "超级",
    "pinyin": "chāo jí",
    "english": "super-, ultra-, hyper-",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-248",
    "hanzi": "超越",
    "pinyin": "chāo yuè",
    "english": "to surpass, to exceed, to transcend",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-249",
    "hanzi": "钞票",
    "pinyin": "chāo piào",
    "english": "paper money, a bill (e.g. 100 yuan), 扎[zā]",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-250",
    "hanzi": "潮流",
    "pinyin": "cháo liú",
    "english": "tide, current, trend",
    "level": "HSK 6",
    "lesson": 5
  },
  {
    "id": "HSK6-251",
    "hanzi": "潮湿",
    "pinyin": "cháo shī",
    "english": "damp, moist",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-252",
    "hanzi": "嘲笑",
    "pinyin": "cháo xiào",
    "english": "to jeer at, to deride, to ridicule, mockery, derision",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-253",
    "hanzi": "撤退",
    "pinyin": "chè tuì",
    "english": "to retreat",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-254",
    "hanzi": "撤销",
    "pinyin": "chè xiāo",
    "english": "to repeal, to revoke, to undo (computing)",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-255",
    "hanzi": "沉淀",
    "pinyin": "chén diàn",
    "english": "to settle, to precipitate (solid sediment out of a solution)",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-256",
    "hanzi": "沉闷",
    "pinyin": "chén mèn",
    "english": "oppressive (of weather), heavy, depressed, not happy",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-257",
    "hanzi": "沉思",
    "pinyin": "chén sī",
    "english": "to contemplate, to ponder, contemplation, meditation",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-258",
    "hanzi": "沉重",
    "pinyin": "chén zhòng",
    "english": "heavy, hard, serious, critical",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-259",
    "hanzi": "沉着",
    "pinyin": "chén zhuó",
    "english": "steady, calm and collected, not nervous",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-260",
    "hanzi": "陈旧",
    "pinyin": "chén jiù",
    "english": "old-fashioned",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-261",
    "hanzi": "陈列",
    "pinyin": "chén liè",
    "english": "to display, to exhibit",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-262",
    "hanzi": "陈述",
    "pinyin": "chén shù",
    "english": "an assertion, to declare, to state",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-263",
    "hanzi": "称心如意",
    "pinyin": "chèn xīn rú yì",
    "english": "after one's heart (idiom); gratifying and satisfactory, everything one could wish",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-264",
    "hanzi": "称号",
    "pinyin": "chēng hào",
    "english": "name, term of address, title",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-265",
    "hanzi": "盛",
    "pinyin": "chéng",
    "english": "to hold, to contain, to ladle, to pick up with a utensil",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-266",
    "hanzi": "橙",
    "pinyin": "chéng",
    "english": "orange tree, orange (color)",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-267",
    "hanzi": "乘务员",
    "pinyin": "chéng wù yuán",
    "english": "attendant on an airplane, train, boat etc",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-268",
    "hanzi": "承办",
    "pinyin": "chéng bàn",
    "english": "to undertake, to accept a contract",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-269",
    "hanzi": "承包",
    "pinyin": "chéng bāo",
    "english": "to contract, to undertake (a job)",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-270",
    "hanzi": "承诺",
    "pinyin": "chéng nuò",
    "english": "to promise, to undertake to do something, commitment",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-271",
    "hanzi": "城堡",
    "pinyin": "chéng bǎo",
    "english": "castle, rook (chess piece)",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-272",
    "hanzi": "成本",
    "pinyin": "chéng běn",
    "english": "(manufacturing, production etc) costs",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-273",
    "hanzi": "成交",
    "pinyin": "chéng jiāo",
    "english": "to complete a contract, to reach a deal",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-274",
    "hanzi": "成天",
    "pinyin": "chéng tiān",
    "english": "(coll.) all day long, all the time",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-275",
    "hanzi": "成效",
    "pinyin": "chéng xiào",
    "english": "effect, result",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-276",
    "hanzi": "成心",
    "pinyin": "chéng xīn",
    "english": "intentional, deliberate, on purpose",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-277",
    "hanzi": "成员",
    "pinyin": "chéng yuán",
    "english": "member",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-278",
    "hanzi": "惩罚",
    "pinyin": "chéng fá",
    "english": "penalty, punishment, to punish",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-279",
    "hanzi": "诚挚",
    "pinyin": "chéng zhì",
    "english": "sincere, cordial",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-280",
    "hanzi": "澄清",
    "pinyin": "chéng qīng",
    "english": "clear (of liquid), limpid, to clarify, to make sth clear, to be clear (about the facts)",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-281",
    "hanzi": "呈现",
    "pinyin": "chéng xiàn",
    "english": "to appear, to emerge, to present (a certain appearance), to demonstrate",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-282",
    "hanzi": "秤",
    "pinyin": "chèng",
    "english": "steelyard, Roman balance",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-283",
    "hanzi": "吃苦",
    "pinyin": "chī kǔ",
    "english": "to bear, hardships",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-284",
    "hanzi": "吃力",
    "pinyin": "chī lì",
    "english": "to entail strenuous effort, to toil at a task, strenuous, laborious, strain",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-285",
    "hanzi": "迟缓",
    "pinyin": "chí huǎn",
    "english": "slow, sluggish",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-286",
    "hanzi": "迟疑",
    "pinyin": "chí yí",
    "english": "to hesitate",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-287",
    "hanzi": "持久",
    "pinyin": "chí jiǔ",
    "english": "lasting, enduring, persistent, permanent, protracted, endurance, persistence, to last long",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-288",
    "hanzi": "池塘",
    "pinyin": "chí táng",
    "english": "pool, pond",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-289",
    "hanzi": "赤道",
    "pinyin": "chì dào",
    "english": "equator (of the earth or astronomical body)",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-290",
    "hanzi": "赤字",
    "pinyin": "chì zì",
    "english": "(financial) deficit, red letter",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-291",
    "hanzi": "冲动",
    "pinyin": "chōng dòng",
    "english": "to have an urge, to be impetuous, impulse, urge",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-292",
    "hanzi": "冲击",
    "pinyin": "chōng jī",
    "english": "an attack, under attack, a shock",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-293",
    "hanzi": "冲突",
    "pinyin": "chōng tū",
    "english": "conflict, to conflict, clash of opposing forces, collision (of interests), contention",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-294",
    "hanzi": "充当",
    "pinyin": "chōng dāng",
    "english": "to serve as, to act as, to play the role of",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-295",
    "hanzi": "充沛",
    "pinyin": "chōng pèi",
    "english": "abundant, plentiful, vigorous",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-296",
    "hanzi": "充实",
    "pinyin": "chōng shí",
    "english": "rich, full, substantial, to enrich, to augment, to substantiate (an argument)",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-297",
    "hanzi": "充足",
    "pinyin": "chōng zú",
    "english": "adequate, sufficient, abundant",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-298",
    "hanzi": "崇拜",
    "pinyin": "chóng bài",
    "english": "to worship, adoration",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-299",
    "hanzi": "崇高",
    "pinyin": "chóng gāo",
    "english": "majestic, sublime",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-300",
    "hanzi": "崇敬",
    "pinyin": "chóng jìng",
    "english": "to revere, high esteem",
    "level": "HSK 6",
    "lesson": 6
  },
  {
    "id": "HSK6-301",
    "hanzi": "重叠",
    "pinyin": "chóng dié",
    "english": "to overlap, to superimpose, to telescope, to run together, to duplicate, one over another, superposition, an overlap, redundancy, reduplication (in Chinese grammar, e.g. 散散步 to have a stroll)",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-302",
    "hanzi": "重阳节",
    "pinyin": "Chóng yáng jié",
    "english": "Double Ninth or Yang Festival, 9th day of 9th lunar month",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-303",
    "hanzi": "抽空",
    "pinyin": "chōu kòng",
    "english": "to find the time to do sth",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-304",
    "hanzi": "筹备",
    "pinyin": "chóu bèi",
    "english": "preparations, to get ready for sth",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-305",
    "hanzi": "踌躇",
    "pinyin": "chóu chú",
    "english": "to hesitate",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-306",
    "hanzi": "稠密",
    "pinyin": "chóu mì",
    "english": "dense",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-307",
    "hanzi": "丑恶",
    "pinyin": "chǒu è",
    "english": "ugly, repulsive",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-308",
    "hanzi": "出路",
    "pinyin": "chū lù",
    "english": "a way out (of a difficulty etc)",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-309",
    "hanzi": "出卖",
    "pinyin": "chū mài",
    "english": "to offer for sale, to sell, to sell out or betray",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-310",
    "hanzi": "出身",
    "pinyin": "chū shēn",
    "english": "to be born of, to come from, family background, class origin",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-311",
    "hanzi": "出神",
    "pinyin": "chū shén",
    "english": "entranced, Trance (music genre)",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-312",
    "hanzi": "出息",
    "pinyin": "chū xi",
    "english": "future prospects, profit, to mature, to grow up",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-313",
    "hanzi": "出洋相",
    "pinyin": "chū yáng xiàng",
    "english": "to make a fool of oneself",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-314",
    "hanzi": "初步",
    "pinyin": "chū bù",
    "english": "initial, preliminary, tentative",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-315",
    "hanzi": "储备",
    "pinyin": "chǔ bèi",
    "english": "reserves, to store up",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-316",
    "hanzi": "储存",
    "pinyin": "chǔ cún",
    "english": "stockpile, to store, to stockpile, storage",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-317",
    "hanzi": "储蓄",
    "pinyin": "chǔ xù",
    "english": "to deposit money, to save, savings",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-318",
    "hanzi": "处分",
    "pinyin": "chǔ fèn",
    "english": "to discipline sb, to punish, disciplinary action, to deal with (a matter)",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-319",
    "hanzi": "处境",
    "pinyin": "chǔ jìng",
    "english": "plight, unfavorable situation",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-320",
    "hanzi": "处置",
    "pinyin": "chǔ zhì",
    "english": "to handle, to take care of, to punish",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-321",
    "hanzi": "触犯",
    "pinyin": "chù fàn",
    "english": "to offend",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-322",
    "hanzi": "穿越",
    "pinyin": "chuān yuè",
    "english": "to pass through, to cross, to overcome",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-323",
    "hanzi": "川流不息",
    "pinyin": "chuān liú bù xī",
    "english": "the stream flows without stopping (idiom); unending flow",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-324",
    "hanzi": "船舶",
    "pinyin": "chuán bó",
    "english": "shipping, boats",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-325",
    "hanzi": "传达",
    "pinyin": "chuán dá",
    "english": "to pass on, to convey, to relay, to transmit, transmission",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-326",
    "hanzi": "传单",
    "pinyin": "chuán dān",
    "english": "leaflet, flier, pamphlet",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-327",
    "hanzi": "传授",
    "pinyin": "chuán shòu",
    "english": "to impart, to pass on, to teach",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-328",
    "hanzi": "喘气",
    "pinyin": "chuǎn qì",
    "english": "to breathe deeply, to pant",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-329",
    "hanzi": "串",
    "pinyin": "chuàn",
    "english": "to string together, to mix up, to conspire, to rove, to make a swift or abrupt linear movement (like a bead on an abacus), to move across, bunch or cluster, string (computing), classifier for rows or strings",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-330",
    "hanzi": "床单",
    "pinyin": "chuáng dān",
    "english": "bed sheet, 件, 張|张, 床[chuáng]",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-331",
    "hanzi": "创立",
    "pinyin": "chuàng lì",
    "english": "to establish, to set up, to found",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-332",
    "hanzi": "创新",
    "pinyin": "chuàng xīn",
    "english": "innovation, to bring forth new ideas, to blaze new trails",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-333",
    "hanzi": "创业",
    "pinyin": "chuàng yè",
    "english": "to begin an undertaking, to start a major task, to initiate, to venture, venture, entrepreneurship",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-334",
    "hanzi": "创作",
    "pinyin": "chuàng zuò",
    "english": "to create, to produce, to write, creative work, creation",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-335",
    "hanzi": "吹牛",
    "pinyin": "chuī niú",
    "english": "to talk big, to shoot off one's mouth, to chat (dialect)",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-336",
    "hanzi": "吹捧",
    "pinyin": "chuī pěng",
    "english": "to flatter, to laud sb's accomplishments, adulation",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-337",
    "hanzi": "锤",
    "pinyin": "chuí",
    "english": "hammer, to hammer into shape, weight (e.g. of a steelyard or balance)",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-338",
    "hanzi": "垂直",
    "pinyin": "chuí zhí",
    "english": "perpendicular, vertical",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-339",
    "hanzi": "纯粹",
    "pinyin": "chún cuì",
    "english": "purely",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-340",
    "hanzi": "纯洁",
    "pinyin": "chún jié",
    "english": "pure, clean and honest, to purify",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-341",
    "hanzi": "词汇",
    "pinyin": "cí huì",
    "english": "vocabulary, list of words (e.g. for language teaching purposes)",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-342",
    "hanzi": "慈祥",
    "pinyin": "cí xiáng",
    "english": "kindly, benevolent (often of older person)",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-343",
    "hanzi": "雌雄",
    "pinyin": "cí xióng",
    "english": "male and female",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-344",
    "hanzi": "刺",
    "pinyin": "cì",
    "english": "thorn, sting, thrust, to prick, to pierce, to stab, to assassinate, to murder",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-345",
    "hanzi": "次品",
    "pinyin": "cì pǐn",
    "english": "substandard products, defective, seconds",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-346",
    "hanzi": "次序",
    "pinyin": "cì xù",
    "english": "sequence, order",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-347",
    "hanzi": "伺候",
    "pinyin": "cì hòu",
    "english": "to serve, to wait upon",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-348",
    "hanzi": "丛",
    "pinyin": "cóng",
    "english": "cluster, collection, collection of books, thicket",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-349",
    "hanzi": "从容不迫",
    "pinyin": "cóng róng bù pò",
    "english": "calm, unruffled",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-350",
    "hanzi": "凑合",
    "pinyin": "còu he",
    "english": "to bring together, to make do in a bad situation, to just get by, to improvise, passable, not too bad",
    "level": "HSK 6",
    "lesson": 7
  },
  {
    "id": "HSK6-351",
    "hanzi": "粗鲁",
    "pinyin": "cū lǔ",
    "english": "crude, coarse, rough",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-352",
    "hanzi": "窜",
    "pinyin": "cuàn",
    "english": "to flee, to scuttle, to exile or banish, to amend or edit",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-353",
    "hanzi": "摧残",
    "pinyin": "cuī cán",
    "english": "to ravage, to ruin",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-354",
    "hanzi": "脆弱",
    "pinyin": "cuì ruò",
    "english": "weak, frail",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-355",
    "hanzi": "搓",
    "pinyin": "cuō",
    "english": "to rub or roll between the hands or fingers, to twist",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-356",
    "hanzi": "磋商",
    "pinyin": "cuō shāng",
    "english": "to consult, to discuss seriously, to negotiate, to confer, negotiations, consultations",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-357",
    "hanzi": "挫折",
    "pinyin": "cuò zhé",
    "english": "setback, reverse, check, defeat, frustration, disappointment, to frustrate, to discourage, to set sb back, to blunt, to subdue",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-358",
    "hanzi": "搭",
    "pinyin": "dā",
    "english": "to put up, to build (scaffolding), to hang (clothes on a pole), to connect, to join, to arrange in pairs, to match, to add, to throw in (resources), to take (boat, train)",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-359",
    "hanzi": "搭档",
    "pinyin": "dā dàng",
    "english": "to cooperate, partner",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-360",
    "hanzi": "搭配",
    "pinyin": "dā pèi",
    "english": "to pair up, to match, to arrange in pairs, to add sth into a group",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-361",
    "hanzi": "答辩",
    "pinyin": "dá biàn",
    "english": "to reply (to an accusation), to defend one's dissertation",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-362",
    "hanzi": "答复",
    "pinyin": "dá fù",
    "english": "to answer, to reply, Reply to: (in email header)",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-363",
    "hanzi": "达成",
    "pinyin": "dá chéng",
    "english": "to reach (an agreement), to accomplish",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-364",
    "hanzi": "打包",
    "pinyin": "dǎ bāo",
    "english": "to wrap, to pack, to ask for a doggy bag (at a restaurant)",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-365",
    "hanzi": "打官司",
    "pinyin": "dǎ guān si",
    "english": "to file a lawsuit, to sue, to dispute",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-366",
    "hanzi": "打击",
    "pinyin": "dǎ jī",
    "english": "to hit, to strike, to attack, to crack down on sth, a setback, a blow, percussion (music)",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-367",
    "hanzi": "打架",
    "pinyin": "dǎ jià",
    "english": "to fight, to scuffle, to come to blows",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-368",
    "hanzi": "打量",
    "pinyin": "dǎ liang",
    "english": "to size sb up, to take measure of, to suppose, to reckon",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-369",
    "hanzi": "打猎",
    "pinyin": "dǎ liè",
    "english": "to go hunting",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-370",
    "hanzi": "打仗",
    "pinyin": "dǎ zhàng",
    "english": "to fight a battle, to go to war",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-371",
    "hanzi": "大不了",
    "pinyin": "dà bù liǎo",
    "english": "at worst, if worst comes to worst, serious, alarming",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-372",
    "hanzi": "大臣",
    "pinyin": "dà chén",
    "english": "chancellor (of a monarchy), cabinet minister",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-373",
    "hanzi": "大伙儿",
    "pinyin": "dà huǒ r",
    "english": "erhua variant of 大伙[dà huǒ]",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-374",
    "hanzi": "大厦",
    "pinyin": "dà shà",
    "english": "large building, edifice, mansion",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-375",
    "hanzi": "大肆",
    "pinyin": "dà sì",
    "english": "wantonly, without restraint (of enemy or malefactor), unbridled",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-376",
    "hanzi": "大体",
    "pinyin": "dà tǐ",
    "english": "in general, more or less, in rough terms, basically, on the whole",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-377",
    "hanzi": "大意",
    "pinyin": "dà yi",
    "english": "careless",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-378",
    "hanzi": "大致",
    "pinyin": "dà zhì",
    "english": "more or less, roughly, approximately",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-379",
    "hanzi": "歹徒",
    "pinyin": "dǎi tú",
    "english": "evil-doer, malefactor, gangster, hoodlum",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-380",
    "hanzi": "带领",
    "pinyin": "dài lǐng",
    "english": "to guide, to lead",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-381",
    "hanzi": "代价",
    "pinyin": "dài jià",
    "english": "price, cost, consideration (in share dealing)",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-382",
    "hanzi": "代理",
    "pinyin": "dài lǐ",
    "english": "to act on behalf of sb in a responsible position, to act as an agent or proxy, surrogate",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-383",
    "hanzi": "逮捕",
    "pinyin": "dài bǔ",
    "english": "to arrest, to apprehend, an arrest",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-384",
    "hanzi": "怠慢",
    "pinyin": "dài màn",
    "english": "to slight, to neglect",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-385",
    "hanzi": "担保",
    "pinyin": "dān bǎo",
    "english": "to guarantee, to vouch for",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-386",
    "hanzi": "胆怯",
    "pinyin": "dǎn qiè",
    "english": "timid, cowardly",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-387",
    "hanzi": "淡季",
    "pinyin": "dàn jì",
    "english": "off season, slow business season, see also 旺季[wàng jì]",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-388",
    "hanzi": "淡水",
    "pinyin": "dàn shuǐ",
    "english": "potable water (water with low salt content), fresh water",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-389",
    "hanzi": "蛋白质",
    "pinyin": "dàn bái zhì",
    "english": "protein",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-390",
    "hanzi": "诞辰",
    "pinyin": "dàn chén",
    "english": "birthday",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-391",
    "hanzi": "诞生",
    "pinyin": "dàn shēng",
    "english": "to be born",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-392",
    "hanzi": "当场",
    "pinyin": "dāng chǎng",
    "english": "at the scene, on the spot",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-393",
    "hanzi": "当初",
    "pinyin": "dāng chū",
    "english": "at that time, originally",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-394",
    "hanzi": "当面",
    "pinyin": "dāng miàn",
    "english": "to sb's face, in sb's presence",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-395",
    "hanzi": "当前",
    "pinyin": "dāng qián",
    "english": "current, today's, modern, present, to be facing (us)",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-396",
    "hanzi": "当事人",
    "pinyin": "dāng shì rén",
    "english": "persons involved or implicated, party (to an affair)",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-397",
    "hanzi": "当务之急",
    "pinyin": "dāng wù zhī jí",
    "english": "top priority job, matter of vital importance",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-398",
    "hanzi": "当心",
    "pinyin": "dāng xīn",
    "english": "to take care, to look out",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-399",
    "hanzi": "当选",
    "pinyin": "dāng xuǎn",
    "english": "to be elected",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-400",
    "hanzi": "党",
    "pinyin": "dǎng",
    "english": "party, association, club, society",
    "level": "HSK 6",
    "lesson": 8
  },
  {
    "id": "HSK6-401",
    "hanzi": "档案",
    "pinyin": "dàng àn",
    "english": "file, record, archive",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-402",
    "hanzi": "档次",
    "pinyin": "dàng cì",
    "english": "grade, class, quality, level",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-403",
    "hanzi": "岛屿",
    "pinyin": "dǎo yǔ",
    "english": "island",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-404",
    "hanzi": "倒闭",
    "pinyin": "dǎo bì",
    "english": "to go bankrupt, to close down",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-405",
    "hanzi": "导弹",
    "pinyin": "dǎo dàn",
    "english": "guided missile, cruise missile, missile",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-406",
    "hanzi": "导航",
    "pinyin": "dǎo háng",
    "english": "navigation",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-407",
    "hanzi": "导向",
    "pinyin": "dǎo xiàng",
    "english": "to be oriented towards, orientation",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-408",
    "hanzi": "捣乱",
    "pinyin": "dǎo luàn",
    "english": "to disturb, to look for trouble, to stir up a row, to bother sb intentionally",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-409",
    "hanzi": "稻谷",
    "pinyin": "dào gǔ",
    "english": "rice crops",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-410",
    "hanzi": "盗窃",
    "pinyin": "dào qiè",
    "english": "to steal",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-411",
    "hanzi": "得不偿失",
    "pinyin": "dé bù cháng shī",
    "english": "(saying) the gains do not make up for the losses",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-412",
    "hanzi": "得力",
    "pinyin": "dé lì",
    "english": "able, capable, competent, efficient",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-413",
    "hanzi": "得天独厚",
    "pinyin": "dé tiān dú hòu",
    "english": "(of an area) rich in resources, (of a person) gifted or able (idiom)",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-414",
    "hanzi": "得罪",
    "pinyin": "dé zuì",
    "english": "to commit an offense, to violate the law, excuse me! (formal), see also 得罪[dé zui]",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-415",
    "hanzi": "蹬",
    "pinyin": "dēng",
    "english": "to step on, to tread on, to wear, Taiwan pr. [dèng]",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-416",
    "hanzi": "灯笼",
    "pinyin": "dēng lóng",
    "english": "lantern",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-417",
    "hanzi": "登陆",
    "pinyin": "dēng lù",
    "english": "to land, to come ashore, to make landfall (of typhoon etc), to log in",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-418",
    "hanzi": "登录",
    "pinyin": "dēng lù",
    "english": "to register, to log in",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-419",
    "hanzi": "等级",
    "pinyin": "děng jí",
    "english": "grade, rank, status",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-420",
    "hanzi": "瞪",
    "pinyin": "dèng",
    "english": "to open (one's eyes) wide, to stare at, to glare at",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-421",
    "hanzi": "堤坝",
    "pinyin": "dī bà",
    "english": "dam",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-422",
    "hanzi": "敌视",
    "pinyin": "dí shì",
    "english": "hostile, malevolence, antagonism, to view as enemy, to stand against",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-423",
    "hanzi": "抵达",
    "pinyin": "dǐ dá",
    "english": "to arrive, to reach (a destination)",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-424",
    "hanzi": "抵抗",
    "pinyin": "dǐ kàng",
    "english": "to resist, resistance",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-425",
    "hanzi": "抵制",
    "pinyin": "dǐ zhì",
    "english": "to resist, to boycott, to refuse (to cooperate), to reject, resistance, refusal",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-426",
    "hanzi": "递增",
    "pinyin": "dì zēng",
    "english": "to increase by degrees, in increasing order, incremental, progressive",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-427",
    "hanzi": "地步",
    "pinyin": "dì bù",
    "english": "condition, situation, plight, extent, room for action",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-428",
    "hanzi": "地势",
    "pinyin": "dì shì",
    "english": "terrain, topography relief",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-429",
    "hanzi": "地质",
    "pinyin": "dì zhì",
    "english": "geology",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-430",
    "hanzi": "颠簸",
    "pinyin": "diān bǒ",
    "english": "to shake, to jolt, to bump",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-431",
    "hanzi": "颠倒",
    "pinyin": "diān dǎo",
    "english": "to turn upside-down, to reverse, back-to-front, confused, deranged, crazy",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-432",
    "hanzi": "点缀",
    "pinyin": "diǎn zhuì",
    "english": "to decorate, to adorn, sprinkled, studded, only for show",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-433",
    "hanzi": "典礼",
    "pinyin": "diǎn lǐ",
    "english": "celebration, ceremony",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-434",
    "hanzi": "典型",
    "pinyin": "diǎn xíng",
    "english": "model, typical case, archetype, typical, representative",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-435",
    "hanzi": "垫",
    "pinyin": "diàn",
    "english": "pad, cushion, mat, to pad out, to fill a gap, to pay for sb, to advance (money)",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-436",
    "hanzi": "电源",
    "pinyin": "diàn yuán",
    "english": "electric power source",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-437",
    "hanzi": "奠定",
    "pinyin": "diàn dìng",
    "english": "to establish, to fix, to settle",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-438",
    "hanzi": "惦记",
    "pinyin": "diàn jì",
    "english": "to think of, to keep thinking about, to be concerned about",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-439",
    "hanzi": "叼",
    "pinyin": "diāo",
    "english": "to hold in the mouth",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-440",
    "hanzi": "雕刻",
    "pinyin": "diāo kè",
    "english": "to carve, to engrave, carving",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-441",
    "hanzi": "雕塑",
    "pinyin": "diāo sù",
    "english": "a statue, a Buddhist image, sculpture, to carve",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-442",
    "hanzi": "吊",
    "pinyin": "diào",
    "english": "a string of 100 cash (arch.), to lament, to condole with",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-443",
    "hanzi": "调动",
    "pinyin": "diào dòng",
    "english": "to transfer, to maneuver (troops etc), to mobilize, to bring into play",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-444",
    "hanzi": "跌",
    "pinyin": "diē",
    "english": "to drop, to fall, to tumble, Taiwan pr. [dié]",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-445",
    "hanzi": "盯",
    "pinyin": "dīng",
    "english": "to watch attentively, to fix attention on, to stare, to gaze, to follow, to shadow sb",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-446",
    "hanzi": "叮嘱",
    "pinyin": "dīng zhǔ",
    "english": "to warn repeatedly, to urge, to exhort again and again",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-447",
    "hanzi": "定期",
    "pinyin": "dìng qī",
    "english": "regularly, at regular intervals",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-448",
    "hanzi": "定义",
    "pinyin": "dìng yì",
    "english": "definition",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-449",
    "hanzi": "丢人",
    "pinyin": "diū rén",
    "english": "to lose face",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-450",
    "hanzi": "丢三落四",
    "pinyin": "diū sān là sì",
    "english": "forgetful, empty-headed",
    "level": "HSK 6",
    "lesson": 9
  },
  {
    "id": "HSK6-451",
    "hanzi": "东道主",
    "pinyin": "dōng dào zhǔ",
    "english": "host, official host (e.g. venue for games or a conference)",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-452",
    "hanzi": "东张西望",
    "pinyin": "dōng zhāng xī wàng",
    "english": "to look in all directions (idiom), to glance around",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-453",
    "hanzi": "董事长",
    "pinyin": "dǒng shì zhǎng",
    "english": "chairman of the board, chairman",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-454",
    "hanzi": "栋",
    "pinyin": "dòng",
    "english": "classifier for houses or buildings, ridgepole (old)",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-455",
    "hanzi": "冻结",
    "pinyin": "dòng jié",
    "english": "to freeze (loan, wage, price etc)",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-456",
    "hanzi": "洞穴",
    "pinyin": "dòng xué",
    "english": "cave, cavern",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-457",
    "hanzi": "动荡",
    "pinyin": "dòng dàng",
    "english": "unrest (social or political), turmoil, upheaval, commotion",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-458",
    "hanzi": "动机",
    "pinyin": "dòng jī",
    "english": "motor, locomotive, motive, motivation, intention",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-459",
    "hanzi": "动静",
    "pinyin": "dòng jìng",
    "english": "sound of activity or people talking, news of activity",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-460",
    "hanzi": "动力",
    "pinyin": "dòng lì",
    "english": "power, motion, propulsion, force",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-461",
    "hanzi": "动脉",
    "pinyin": "dòng mài",
    "english": "artery",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-462",
    "hanzi": "动身",
    "pinyin": "dòng shēn",
    "english": "to go on a journey, to leave",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-463",
    "hanzi": "动手",
    "pinyin": "dòng shǒu",
    "english": "to set about (a task), to hit, to punch, to touch",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-464",
    "hanzi": "动态",
    "pinyin": "dòng tài",
    "english": "development, trend, dynamic state, movement, moving",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-465",
    "hanzi": "动员",
    "pinyin": "dòng yuán",
    "english": "to mobilize, to arouse, mobilization, 個|个[gè]",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-466",
    "hanzi": "兜",
    "pinyin": "dōu",
    "english": "pocket, bag, to wrap up or hold in a bag, to move in a circle, to canvas or solicit, to take responsibility for, to disclose in detail, combat armor (old)",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-467",
    "hanzi": "陡峭",
    "pinyin": "dǒu qiào",
    "english": "precipitous",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-468",
    "hanzi": "斗争",
    "pinyin": "dòu zhēng",
    "english": "a struggle, fight, battle",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-469",
    "hanzi": "督促",
    "pinyin": "dū cù",
    "english": "to supervise and urge completion of a task, to urge on",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-470",
    "hanzi": "都市",
    "pinyin": "dū shì",
    "english": "city, metropolis",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-471",
    "hanzi": "独裁",
    "pinyin": "dú cái",
    "english": "dictatorship",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-472",
    "hanzi": "毒品",
    "pinyin": "dú pǐn",
    "english": "drugs, narcotics, poison",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-473",
    "hanzi": "赌博",
    "pinyin": "dǔ bó",
    "english": "to gamble",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-474",
    "hanzi": "堵塞",
    "pinyin": "dǔ sè",
    "english": "to block, to stop, blockage",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-475",
    "hanzi": "杜绝",
    "pinyin": "dù jué",
    "english": "to put an end to",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-476",
    "hanzi": "端",
    "pinyin": "duān",
    "english": "end, extremity, item, port, to hold sth level with both hands, to carry, regular",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-477",
    "hanzi": "端午节",
    "pinyin": "Duān wǔ jié",
    "english": "the Dragon Boat Festival (5th day of the 5th lunar month)",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-478",
    "hanzi": "端正",
    "pinyin": "duān zhèng",
    "english": "upright, regular, proper, correct",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-479",
    "hanzi": "短促",
    "pinyin": "duǎn cù",
    "english": "short in time, fleeting, brief",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-480",
    "hanzi": "断定",
    "pinyin": "duàn dìng",
    "english": "to conclude, to determine, to come to a judgment",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-481",
    "hanzi": "断断续续",
    "pinyin": "duàn duàn xù xù",
    "english": "intermittent, off and on, discontinuous, stop-go, stammering, disjointed, inarticulate",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-482",
    "hanzi": "断绝",
    "pinyin": "duàn jué",
    "english": "to sever, to break off",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-483",
    "hanzi": "��积",
    "pinyin": "duī jī",
    "english": "to pile up, to heap, accumulation",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-484",
    "hanzi": "对策",
    "pinyin": "duì cè",
    "english": "countermeasure for dealing with a situation",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-485",
    "hanzi": "对称",
    "pinyin": "duì chèn",
    "english": "symmetry, symmetrical",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-486",
    "hanzi": "对付",
    "pinyin": "duì fu",
    "english": "to handle, to deal with, to cope, to get by with",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-487",
    "hanzi": "对抗",
    "pinyin": "duì kàng",
    "english": "to withstand, to resist, to stand off, antagonism, confrontation",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-488",
    "hanzi": "对立",
    "pinyin": "duì lì",
    "english": "to oppose, to set sth against, to be antagonistic to, antithetical, relative opposite, opposing, diametrical",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-489",
    "hanzi": "对联",
    "pinyin": "duì lián",
    "english": "rhyming couplet, pair of lines of verse written vertically down the sides of a doorway",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-490",
    "hanzi": "对应",
    "pinyin": "duì yìng",
    "english": "to correspond, a correspondence, corresponding, homologous, matching with sth, counterpart",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-491",
    "hanzi": "对照",
    "pinyin": "duì zhào",
    "english": "to contrast, to compare, to place side by side for comparison (as parallel texts), to check",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-492",
    "hanzi": "兑换",
    "pinyin": "duì huàn",
    "english": "to convert, to exchange",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-493",
    "hanzi": "兑现",
    "pinyin": "duì xiàn",
    "english": "(of a cheque etc) to cash, to honor a commitment",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-494",
    "hanzi": "队伍",
    "pinyin": "duì wǔ",
    "english": "ranks, troops",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-495",
    "hanzi": "顿时",
    "pinyin": "dùn shí",
    "english": "immediately, suddenly",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-496",
    "hanzi": "多元化",
    "pinyin": "duō yuán huà",
    "english": "diversification, pluralism, to diversify",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-497",
    "hanzi": "哆嗦",
    "pinyin": "duō suo",
    "english": "to tremble, to shiver, uncontrolled shaking of the body",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-498",
    "hanzi": "堕落",
    "pinyin": "duò luò",
    "english": "to morally degenerate, to become depraved, a fall from grace, a fall into sin or depravity",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-499",
    "hanzi": "额外",
    "pinyin": "é wài",
    "english": "extra, added, additional",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-500",
    "hanzi": "恶心",
    "pinyin": "è xīn",
    "english": "bad habit, vicious habit, vice",
    "level": "HSK 6",
    "lesson": 10
  },
  {
    "id": "HSK6-501",
    "hanzi": "恶化",
    "pinyin": "è huà",
    "english": "to worsen",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-502",
    "hanzi": "遏制",
    "pinyin": "è zhì",
    "english": "to check, to contain, to hold back, to keep within limits, to constrain, to restrain",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-503",
    "hanzi": "恩怨",
    "pinyin": "ēn yuàn",
    "english": "(feeling of) resentment, (longstanding) grudge",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-504",
    "hanzi": "而已",
    "pinyin": "ér yǐ",
    "english": "that's all, nothing more",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-505",
    "hanzi": "耳环",
    "pinyin": "ěr huán",
    "english": "earring, 對|对[duì]",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-506",
    "hanzi": "二氧化碳",
    "pinyin": "èr yǎng huà tàn",
    "english": "carbon dioxide CO2",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-507",
    "hanzi": "发布",
    "pinyin": "fā bù",
    "english": "to release, to issue, to announce, to distribute",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-508",
    "hanzi": "发财",
    "pinyin": "fā cái",
    "english": "to get rich",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-509",
    "hanzi": "发呆",
    "pinyin": "fā dāi",
    "english": "to stare blankly, to be stunned, to be lost in thought",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-510",
    "hanzi": "发动",
    "pinyin": "fā dòng",
    "english": "to start, to launch, to unleash, to mobilize, to arouse",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-511",
    "hanzi": "发火",
    "pinyin": "fā huǒ",
    "english": "to catch fire, to ignite, to detonate, to get angry",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-512",
    "hanzi": "发觉",
    "pinyin": "fā jué",
    "english": "to find, to detect, to discover",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-513",
    "hanzi": "发射",
    "pinyin": "fā shè",
    "english": "to shoot (a projectile), to fire (a rocket), to launch, to emit (a particle), to discharge, emanation, emission",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-514",
    "hanzi": "发誓",
    "pinyin": "fā shì",
    "english": "to vow, to pledge, to swear",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-515",
    "hanzi": "发行",
    "pinyin": "fā xíng",
    "english": "to publish, to issue (stocks, currency etc), to release, to distribute (a film)",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-516",
    "hanzi": "发炎",
    "pinyin": "fā yán",
    "english": "to become inflamed, inflammation",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-517",
    "hanzi": "发扬",
    "pinyin": "fā yáng",
    "english": "to develop, to make full use of",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-518",
    "hanzi": "发育",
    "pinyin": "fā yù",
    "english": "to develop, growth, development",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-519",
    "hanzi": "法人",
    "pinyin": "fǎ rén",
    "english": "legal person, corporation, see also 自然人[zì rán rén]",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-520",
    "hanzi": "番",
    "pinyin": "fān",
    "english": "foreign, ethnic groups from outside China, (when used after a verb) times or fold, classifier for the number of iterations of an action or deed etc",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-521",
    "hanzi": "繁华",
    "pinyin": "fán huá",
    "english": "flourishing, bustling",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-522",
    "hanzi": "繁忙",
    "pinyin": "fán máng",
    "english": "busy, bustling",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-523",
    "hanzi": "繁体字",
    "pinyin": "fán tǐ zì",
    "english": "traditional Chinese character",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-524",
    "hanzi": "繁殖",
    "pinyin": "fán zhí",
    "english": "to breed, to reproduce, to propagate",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-525",
    "hanzi": "反驳",
    "pinyin": "fǎn bó",
    "english": "to retort, to refute",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-526",
    "hanzi": "反常",
    "pinyin": "fǎn cháng",
    "english": "unusual, abnormal",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-527",
    "hanzi": "反倒",
    "pinyin": "fǎn dào",
    "english": "but on the contrary, but expectedly",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-528",
    "hanzi": "反动",
    "pinyin": "fǎn dòng",
    "english": "reaction, reactionary",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-529",
    "hanzi": "反感",
    "pinyin": "fǎn gǎn",
    "english": "to be disgusted with, to dislike, bad reaction, antipathy",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-530",
    "hanzi": "反抗",
    "pinyin": "fǎn kàng",
    "english": "to resist, to rebel",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-531",
    "hanzi": "反馈",
    "pinyin": "fǎn kuì",
    "english": "to send back information, feedback",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-532",
    "hanzi": "反面",
    "pinyin": "fǎn miàn",
    "english": "reverse side, backside, the other side (of a problem etc), negative, bad",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-533",
    "hanzi": "反射",
    "pinyin": "fǎn shè",
    "english": "to reflect, reflection (from a mirror etc), reflex (i.e. automatic reaction of organism)",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-534",
    "hanzi": "反思",
    "pinyin": "fǎn sī",
    "english": "to think back over sth, to review, to revisit, to rethink, reflection, reassessment",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-535",
    "hanzi": "反问",
    "pinyin": "fǎn wèn",
    "english": "to ask (a question) in reply, to answer a question with a question, rhetorical question",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-536",
    "hanzi": "反之",
    "pinyin": "fǎn zhī",
    "english": "on the other hand..., conversely...",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-537",
    "hanzi": "范畴",
    "pinyin": "fàn chóu",
    "english": "category",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-538",
    "hanzi": "泛滥",
    "pinyin": "fàn làn",
    "english": "to be in flood, to overflow (the banks), to inundate, to spread unchecked",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-539",
    "hanzi": "贩卖",
    "pinyin": "fàn mài",
    "english": "to sell, to peddle, to traffic",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-540",
    "hanzi": "方位",
    "pinyin": "fāng wèi",
    "english": "direction, points of the compass, bearing, position, azimuth",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-541",
    "hanzi": "方言",
    "pinyin": "fāng yán",
    "english": "dialect",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-542",
    "hanzi": "方针",
    "pinyin": "fāng zhēn",
    "english": "policy, guidelines",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-543",
    "hanzi": "防守",
    "pinyin": "fáng shǒu",
    "english": "to defend, to protect (against)",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-544",
    "hanzi": "防疫",
    "pinyin": "fáng yì",
    "english": "disease prevention, protection against epidemic",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-545",
    "hanzi": "防御",
    "pinyin": "fáng yù",
    "english": "defense, to defend",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-546",
    "hanzi": "防止",
    "pinyin": "fáng zhǐ",
    "english": "to prevent, to guard against, to take precautions",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-547",
    "hanzi": "防治",
    "pinyin": "fáng zhì",
    "english": "prevention and cure",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-548",
    "hanzi": "纺织",
    "pinyin": "fǎng zhī",
    "english": "spinning and weaving",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-549",
    "hanzi": "放大",
    "pinyin": "fàng dà",
    "english": "to enlarge, to magnify",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-550",
    "hanzi": "放射",
    "pinyin": "fàng shè",
    "english": "to radiate, radioactive",
    "level": "HSK 6",
    "lesson": 11
  },
  {
    "id": "HSK6-551",
    "hanzi": "放手",
    "pinyin": "fàng shǒu",
    "english": "to let go one's hold, to give up, to have a free hand",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-552",
    "hanzi": "非法",
    "pinyin": "fēi fǎ",
    "english": "illegal",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-553",
    "hanzi": "飞禽走兽",
    "pinyin": "fēi qín zǒu shòu",
    "english": "birds and animals, the beasts of the field and the birds of the air",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-554",
    "hanzi": "飞翔",
    "pinyin": "fēi xiáng",
    "english": "to fly",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-555",
    "hanzi": "飞跃",
    "pinyin": "fēi yuè",
    "english": "to leap",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-556",
    "hanzi": "肥沃",
    "pinyin": "féi wò",
    "english": "fertile",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-557",
    "hanzi": "诽谤",
    "pinyin": "fěi bàng",
    "english": "to slander, to libel",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-558",
    "hanzi": "匪徒",
    "pinyin": "fěi tú",
    "english": "gangster, bandit",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-559",
    "hanzi": "废除",
    "pinyin": "fèi chú",
    "english": "to abolish, to abrogate, to repeal",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-560",
    "hanzi": "废墟",
    "pinyin": "fèi xū",
    "english": "ruins",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-561",
    "hanzi": "沸腾",
    "pinyin": "fèi téng",
    "english": "boiling, ebullition",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-562",
    "hanzi": "分辨",
    "pinyin": "fēn biàn",
    "english": "to distinguish, to differentiate, to resolve",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-563",
    "hanzi": "分寸",
    "pinyin": "fēn cùn",
    "english": "propriety, appropriate behavior, proper speech or action, within the norms",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-564",
    "hanzi": "分红",
    "pinyin": "fēn hóng",
    "english": "a bonus, to award a bonus",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-565",
    "hanzi": "分解",
    "pinyin": "fēn jiě",
    "english": "to resolve, to decompose, to break down",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-566",
    "hanzi": "分裂",
    "pinyin": "fēn liè",
    "english": "to split up, to divide, to break up, fission, schism",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-567",
    "hanzi": "分泌",
    "pinyin": "fēn mì",
    "english": "to secrete, secretion",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-568",
    "hanzi": "分明",
    "pinyin": "fēn míng",
    "english": "clearly demarcated, sharply contoured",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-569",
    "hanzi": "分歧",
    "pinyin": "fēn qí",
    "english": "difference (of opinion, position), bifurcation",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-570",
    "hanzi": "分散",
    "pinyin": "fēn sàn",
    "english": "to scatter, to disperse, to distribute",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-571",
    "hanzi": "分手",
    "pinyin": "fēn shǒu",
    "english": "to split up, to break up",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-572",
    "hanzi": "吩咐",
    "pinyin": "fēn fù",
    "english": "to tell, to instruct, to command",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-573",
    "hanzi": "坟墓",
    "pinyin": "fén mù",
    "english": "sepulcher, tomb",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-574",
    "hanzi": "粉末",
    "pinyin": "fěn mò",
    "english": "fine powder, dust",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-575",
    "hanzi": "粉色",
    "pinyin": "fěn sè",
    "english": "white, light pink, erotic, beautiful woman, powdered (with make-up)",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-576",
    "hanzi": "粉碎",
    "pinyin": "fěn suì",
    "english": "to crush, to smash, to shatter",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-577",
    "hanzi": "分量",
    "pinyin": "fèn liang",
    "english": "quantity, weight, measure",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-578",
    "hanzi": "风暴",
    "pinyin": "fēng bào",
    "english": "storm, violent commotion, fig. crisis (e.g. revolution, uprising, financial crisis etc)",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-579",
    "hanzi": "风度",
    "pinyin": "fēng dù",
    "english": "elegance (for men), elegant demeanor, grace, poise",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-580",
    "hanzi": "风光",
    "pinyin": "fēng guāng",
    "english": "scene, view, sight, landscape, to be well-regarded, to be well-off, grand (topolect), impressive (topolect)",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-581",
    "hanzi": "风气",
    "pinyin": "fēng qì",
    "english": "general mood, atmosphere, common practice",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-582",
    "hanzi": "风趣",
    "pinyin": "fēng qù",
    "english": "humor, wit, humorous, witty",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-583",
    "hanzi": "风土人情",
    "pinyin": "fēng tǔ rén qíng",
    "english": "local conditions and customs (idiom)",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-584",
    "hanzi": "风味",
    "pinyin": "fēng wèi",
    "english": "local flavor, local style",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-585",
    "hanzi": "封闭",
    "pinyin": "fēng bì",
    "english": "to seal, to close, to confine, to seal off, to close down, sealed, confined, closed, unreceptive",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-586",
    "hanzi": "封建",
    "pinyin": "fēng jiàn",
    "english": "system of enfeoffment, feudalism, feudal, feudalistic",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-587",
    "hanzi": "封锁",
    "pinyin": "fēng suǒ",
    "english": "to blockade, to seal off",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-588",
    "hanzi": "丰满",
    "pinyin": "fēng mǎn",
    "english": "ample, well developed, fully rounded",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-589",
    "hanzi": "丰盛",
    "pinyin": "fēng shèng",
    "english": "rich, sumptuous",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-590",
    "hanzi": "丰收",
    "pinyin": "fēng shōu",
    "english": "bumper harvest",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-591",
    "hanzi": "锋利",
    "pinyin": "fēng lì",
    "english": "sharp (e.g. knife blade), incisive, to the point",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-592",
    "hanzi": "逢",
    "pinyin": "féng",
    "english": "to meet by chance, to come across, to fawn upon",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-593",
    "hanzi": "奉献",
    "pinyin": "fèng xiàn",
    "english": "to consecrate, to dedicate, to devote",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-594",
    "hanzi": "否决",
    "pinyin": "fǒu jué",
    "english": "veto",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-595",
    "hanzi": "夫妇",
    "pinyin": "fū fù",
    "english": "a (married) couple, husband and wife",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-596",
    "hanzi": "夫人",
    "pinyin": "fū ren",
    "english": "lady, madam, Mrs.",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-597",
    "hanzi": "敷衍",
    "pinyin": "fū yǎn",
    "english": "to elaborate (on a theme), to expound (the classics), perfunctory, to skimp, to botch, to do sth half-heartedly or just for show, barely enough to get by",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-598",
    "hanzi": "幅度",
    "pinyin": "fú dù",
    "english": "width, extent, range, scope",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-599",
    "hanzi": "服气",
    "pinyin": "fú qì",
    "english": "to be convinced, to accept",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-600",
    "hanzi": "符号",
    "pinyin": "fú hào",
    "english": "symbol, mark, sign",
    "level": "HSK 6",
    "lesson": 12
  },
  {
    "id": "HSK6-601",
    "hanzi": "福利",
    "pinyin": "fú lì",
    "english": "(material) welfare, well-being",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-602",
    "hanzi": "福气",
    "pinyin": "fú qi",
    "english": "good fortune, to enjoy good fortune",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-603",
    "hanzi": "俘虏",
    "pinyin": "fú lǔ",
    "english": "captive",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-604",
    "hanzi": "辐射",
    "pinyin": "fú shè",
    "english": "radiation",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-605",
    "hanzi": "腐败",
    "pinyin": "fǔ bài",
    "english": "corruption, to corrupt, to rot, rotten",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-606",
    "hanzi": "腐烂",
    "pinyin": "fǔ làn",
    "english": "to rot, to become gangrenous",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-607",
    "hanzi": "腐蚀",
    "pinyin": "fǔ shí",
    "english": "corrosion, to corrode (degrade chemically), to rot, corruption",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-608",
    "hanzi": "腐朽",
    "pinyin": "fǔ xiǔ",
    "english": "rotten, decayed, decadent, degenerate",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-609",
    "hanzi": "辅助",
    "pinyin": "fǔ zhù",
    "english": "to assist, to aid, supplementary, auxiliary, subsidiary",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-610",
    "hanzi": "抚养",
    "pinyin": "fǔ yǎng",
    "english": "to foster, to bring up, to raise",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-611",
    "hanzi": "俯仰",
    "pinyin": "fǔ yǎng",
    "english": "lowering and raising of the head, (fig.) small move, pitch (position angle)",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-612",
    "hanzi": "富裕",
    "pinyin": "fù yù",
    "english": "prosperous, well-to-do, well-off",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-613",
    "hanzi": "副",
    "pinyin": "fù",
    "english": "secondary, auxiliary, deputy, assistant, vice-, abbr. for 副詞|副词 adverb, classifier for pairs, sets of things & facial expressions",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-614",
    "hanzi": "副作用",
    "pinyin": "fù zuò yòng",
    "english": "side effect",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-615",
    "hanzi": "负担",
    "pinyin": "fù dān",
    "english": "burden, to bear a burden",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-616",
    "hanzi": "覆盖",
    "pinyin": "fù gài",
    "english": "to cover",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-617",
    "hanzi": "附和",
    "pinyin": "fù hè",
    "english": "to parrot, to crib, to copy sb's action or words, to trail sb's footsteps, copy-cat",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-618",
    "hanzi": "附件",
    "pinyin": "fù jiàn",
    "english": "enclosure, attachment (email), appendix",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-619",
    "hanzi": "附属",
    "pinyin": "fù shǔ",
    "english": "subsidiary, auxiliary, attached, affiliated, subordinate, subordinating",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-620",
    "hanzi": "复活",
    "pinyin": "fù huó",
    "english": "resurrection",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-621",
    "hanzi": "复兴",
    "pinyin": "fù xīng",
    "english": "to revive, to rejuvenate",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-622",
    "hanzi": "腹泻",
    "pinyin": "fù xiè",
    "english": "diarrhea, to have the runs",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-623",
    "hanzi": "赋予",
    "pinyin": "fù yǔ",
    "english": "to assign, to entrust (a task), to give, to bestow",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-624",
    "hanzi": "改良",
    "pinyin": "gǎi liáng",
    "english": "to improve",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-625",
    "hanzi": "盖章",
    "pinyin": "gài zhāng",
    "english": "to affix a seal (to sth)",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-626",
    "hanzi": "干旱",
    "pinyin": "gān hàn",
    "english": "drought, arid, dry",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-627",
    "hanzi": "干扰",
    "pinyin": "gān rǎo",
    "english": "to interfere, obstruction",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-628",
    "hanzi": "干涉",
    "pinyin": "gān shè",
    "english": "to interfere, to meddle, interference",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-629",
    "hanzi": "干预",
    "pinyin": "gān yù",
    "english": "to meddle, to intervene, intervention",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-630",
    "hanzi": "尴尬",
    "pinyin": "gān gà",
    "english": "awkward, embarrassed",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-631",
    "hanzi": "甘心",
    "pinyin": "gān xīn",
    "english": "to be willing to, to resign oneself to",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-632",
    "hanzi": "感慨",
    "pinyin": "gǎn kǎi",
    "english": "to sigh with sorrow, regret etc, rueful, deeply moved",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-633",
    "hanzi": "感染",
    "pinyin": "gǎn rǎn",
    "english": "infection, to infect, to influence",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-634",
    "hanzi": "干劲",
    "pinyin": "gàn jìn",
    "english": "enthusiasm for doing sth",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-635",
    "hanzi": "纲领",
    "pinyin": "gāng lǐng",
    "english": "program, guiding principle",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-636",
    "hanzi": "港口",
    "pinyin": "gǎng kǒu",
    "english": "port, harbor",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-637",
    "hanzi": "港湾",
    "pinyin": "gǎng wān",
    "english": "natural harbor, bay serving as harbor",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-638",
    "hanzi": "岗位",
    "pinyin": "gǎng wèi",
    "english": "a post, a job",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-639",
    "hanzi": "杠杆",
    "pinyin": "gàng gǎn",
    "english": "lever, pry bar, crowbar, financial leverage",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-640",
    "hanzi": "高超",
    "pinyin": "gāo chāo",
    "english": "excellent, superlative",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-641",
    "hanzi": "高潮",
    "pinyin": "gāo cháo",
    "english": "high tide, high water, upsurge, climax, orgasm, chorus (part of a song)",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-642",
    "hanzi": "高峰",
    "pinyin": "gāo fēng",
    "english": "peak, summit, height",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-643",
    "hanzi": "高考",
    "pinyin": "gāo kǎo",
    "english": "college entrance exam (abbr. for 普通高等學校招生全國統一考試|普通高等学校招生全国统一考试), entrance exam for senior government service posts (Taiwan)",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-644",
    "hanzi": "高明",
    "pinyin": "gāo míng",
    "english": "brilliant, superior, tall and bright",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-645",
    "hanzi": "高尚",
    "pinyin": "gāo shàng",
    "english": "noble, lofty, refined, exquisite",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-646",
    "hanzi": "高涨",
    "pinyin": "gāo zhǎng",
    "english": "upsurge, (tensions etc) run high",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-647",
    "hanzi": "稿件",
    "pinyin": "gǎo jiàn",
    "english": "rough draft, material contributing to a final document",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-648",
    "hanzi": "告辞",
    "pinyin": "gào cí",
    "english": "to say goodbye, to take one's leave",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-649",
    "hanzi": "告诫",
    "pinyin": "gào jiè",
    "english": "to warn, to admonish",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-650",
    "hanzi": "割",
    "pinyin": "gē",
    "english": "to cut, to cut apart",
    "level": "HSK 6",
    "lesson": 13
  },
  {
    "id": "HSK6-651",
    "hanzi": "搁",
    "pinyin": "gē",
    "english": "to place, to put aside, to shelve",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-652",
    "hanzi": "疙瘩",
    "pinyin": "gē da",
    "english": "swelling or lump on skin, pimple, knot, preoccupation, problem",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-653",
    "hanzi": "歌颂",
    "pinyin": "gē sòng",
    "english": "to sing the praises of, to extol, to eulogize",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-654",
    "hanzi": "隔阂",
    "pinyin": "gé hé",
    "english": "estrangement",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-655",
    "hanzi": "隔离",
    "pinyin": "gé lí",
    "english": "to separate, to isolate",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-656",
    "hanzi": "格局",
    "pinyin": "gé jú",
    "english": "structure, pattern, layout",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-657",
    "hanzi": "格式",
    "pinyin": "gé shì",
    "english": "form, specification, format",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-658",
    "hanzi": "个体",
    "pinyin": "gè tǐ",
    "english": "individual",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-659",
    "hanzi": "各抒己见",
    "pinyin": "gè shū jǐ jiàn",
    "english": "everyone gives their own view",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-660",
    "hanzi": "根深蒂固",
    "pinyin": "gēn shēn dì gù",
    "english": "deep-rooted (problem etc)",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-661",
    "hanzi": "根源",
    "pinyin": "gēn yuán",
    "english": "origin, root (cause)",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-662",
    "hanzi": "跟前",
    "pinyin": "gēn qián",
    "english": "in front of, close to, nearby, the time just before",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-663",
    "hanzi": "跟随",
    "pinyin": "gēn suí",
    "english": "to follow",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-664",
    "hanzi": "跟踪",
    "pinyin": "gēn zōng",
    "english": "to follow sb's tracks, to tail, to shadow",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-665",
    "hanzi": "耕地",
    "pinyin": "gēng dì",
    "english": "arable land, to plow land",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-666",
    "hanzi": "更新",
    "pinyin": "gēng xīn",
    "english": "to replace the old with new, to renew, to renovate, to upgrade, to update, to regenerate",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-667",
    "hanzi": "更正",
    "pinyin": "gēng zhèng",
    "english": "to correct, to make a correction",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-668",
    "hanzi": "公安局",
    "pinyin": "gōng ān jú",
    "english": "public security bureau",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-669",
    "hanzi": "公道",
    "pinyin": "gōng dao",
    "english": "fair, equitable",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-670",
    "hanzi": "公告",
    "pinyin": "gōng gào",
    "english": "post, announcement",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-671",
    "hanzi": "公关",
    "pinyin": "gōng guān",
    "english": "public relations",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-672",
    "hanzi": "公民",
    "pinyin": "gōng mín",
    "english": "citizen",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-673",
    "hanzi": "公婆",
    "pinyin": "gōng pó",
    "english": "husband's parents, parents-in-law",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-674",
    "hanzi": "公然",
    "pinyin": "gōng rán",
    "english": "openly, publicly, undisguised",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-675",
    "hanzi": "公认",
    "pinyin": "gōng rèn",
    "english": "publicly known (to be), accepted (as)",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-676",
    "hanzi": "公式",
    "pinyin": "gōng shì",
    "english": "formula",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-677",
    "hanzi": "公务",
    "pinyin": "gōng wù",
    "english": "official business",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-678",
    "hanzi": "公正",
    "pinyin": "gōng zhèng",
    "english": "just, fair, equitable",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-679",
    "hanzi": "公证",
    "pinyin": "gōng zhèng",
    "english": "notarization, notarized, acknowledgement",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-680",
    "hanzi": "供不应求",
    "pinyin": "gōng bù yìng qiú",
    "english": "supply does not meet demand",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-681",
    "hanzi": "供给",
    "pinyin": "gōng jǐ",
    "english": "to furnish, to provide, supply (as in supply and demand)",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-682",
    "hanzi": "工夫",
    "pinyin": "gōng fu",
    "english": "time, spare time, skill, labor, effort",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-683",
    "hanzi": "工艺品",
    "pinyin": "gōng yì pǐn",
    "english": "handicraft article, handiwork",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-684",
    "hanzi": "宫殿",
    "pinyin": "gōng diàn",
    "english": "palace",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-685",
    "hanzi": "功课",
    "pinyin": "gōng kè",
    "english": "homework, assignment, task, classwork, lesson, study",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-686",
    "hanzi": "功劳",
    "pinyin": "gōng láo",
    "english": "contribution, meritorious service, credit",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-687",
    "hanzi": "功效",
    "pinyin": "gōng xiào",
    "english": "efficacy",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-688",
    "hanzi": "攻击",
    "pinyin": "gōng jī",
    "english": "to attack, to accuse, to charge, an attack (terrorist or military)",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-689",
    "hanzi": "攻克",
    "pinyin": "gōng kè",
    "english": "to capture, to take, to overcome, to solve",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-690",
    "hanzi": "恭敬",
    "pinyin": "gōng jìng",
    "english": "deferential, respectful",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-691",
    "hanzi": "巩固",
    "pinyin": "gǒng gù",
    "english": "to consolidate, consolidation, to strengthen",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-692",
    "hanzi": "共和国",
    "pinyin": "gòng hé guó",
    "english": "republic",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-693",
    "hanzi": "共计",
    "pinyin": "gòng jì",
    "english": "to sum up to, to total",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-694",
    "hanzi": "共鸣",
    "pinyin": "gòng míng",
    "english": "resonance (physics), sympathetic response to sth",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-695",
    "hanzi": "勾结",
    "pinyin": "gōu jié",
    "english": "to collude with, to collaborate with, to gang up with",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-696",
    "hanzi": "钩子",
    "pinyin": "gōu zi",
    "english": "hook",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-697",
    "hanzi": "构思",
    "pinyin": "gòu sī",
    "english": "to design, to plot, to plan out, to compose, to draw a mental sketch, conception, plan, idea, composition",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-698",
    "hanzi": "孤独",
    "pinyin": "gū dú",
    "english": "lonely, solitary",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-699",
    "hanzi": "孤立",
    "pinyin": "gū lì",
    "english": "isolate, isolated",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-700",
    "hanzi": "辜负",
    "pinyin": "gū fù",
    "english": "to fail to live up (to expectations), unworthy (of trust), to let down, to betray (hopes), to disappoint",
    "level": "HSK 6",
    "lesson": 14
  },
  {
    "id": "HSK6-701",
    "hanzi": "姑且",
    "pinyin": "gū qiě",
    "english": "temporarily, the time being, for the moment, provisional, tentatively",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-702",
    "hanzi": "古董",
    "pinyin": "gǔ dǒng",
    "english": "curio, antique",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-703",
    "hanzi": "古怪",
    "pinyin": "gǔ guài",
    "english": "eccentric, grotesque, oddly, queer",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-704",
    "hanzi": "股东",
    "pinyin": "gǔ dōng",
    "english": "shareholder, stockholder",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-705",
    "hanzi": "股份",
    "pinyin": "gǔ fèn",
    "english": "a share (in a company), stock",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-706",
    "hanzi": "鼓动",
    "pinyin": "gǔ dòng",
    "english": "to agitate, to arouse, to instigate, to encite",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-707",
    "hanzi": "骨干",
    "pinyin": "gǔ gàn",
    "english": "diaphysis (long segment of a bone), fig. backbone",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-708",
    "hanzi": "固然",
    "pinyin": "gù rán",
    "english": "admittedly (it's true that...)",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-709",
    "hanzi": "固有",
    "pinyin": "gù yǒu",
    "english": "intrinsic to sth, inherent, native",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-710",
    "hanzi": "固执",
    "pinyin": "gù zhí",
    "english": "obstinate, stubborn",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-711",
    "hanzi": "顾虑",
    "pinyin": "gù lǜ",
    "english": "misgivings, apprehensions",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-712",
    "hanzi": "顾问",
    "pinyin": "gù wèn",
    "english": "adviser, consultant",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-713",
    "hanzi": "故乡",
    "pinyin": "gù xiāng",
    "english": "home, homeland, native place",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-714",
    "hanzi": "故障",
    "pinyin": "gù zhàng",
    "english": "malfunction, breakdown, defect, shortcoming, fault, failure, impediment, error, bug (in software)",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-715",
    "hanzi": "拐杖",
    "pinyin": "guǎi zhàng",
    "english": "crutches, crutch, walking stick",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-716",
    "hanzi": "关照",
    "pinyin": "guān zhào",
    "english": "to take care, to keep an eye on, to look after, to tell, to remind",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-717",
    "hanzi": "官方",
    "pinyin": "guān fāng",
    "english": "official, (by the) government",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-718",
    "hanzi": "观光",
    "pinyin": "guān guāng",
    "english": "to tour, sightseeing, tourism",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-719",
    "hanzi": "管辖",
    "pinyin": "guǎn xiá",
    "english": "to administer, to have jurisdiction (over)",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-720",
    "hanzi": "罐",
    "pinyin": "guàn",
    "english": "can, jar, pot",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-721",
    "hanzi": "贯彻",
    "pinyin": "guàn chè",
    "english": "to implement, to put into practice, to carry out",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-722",
    "hanzi": "灌溉",
    "pinyin": "guàn gài",
    "english": "to irrigate",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-723",
    "hanzi": "惯例",
    "pinyin": "guàn lì",
    "english": "convention, usual practice",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-724",
    "hanzi": "光彩",
    "pinyin": "guāng cǎi",
    "english": "luster, splendor, radiance, brilliance",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-725",
    "hanzi": "光辉",
    "pinyin": "guāng huī",
    "english": "radiance, glory, brilliant, magnificent",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-726",
    "hanzi": "光芒",
    "pinyin": "guāng máng",
    "english": "rays of light, brilliant rays, radiance",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-727",
    "hanzi": "广阔",
    "pinyin": "guǎng kuò",
    "english": "wide, vast",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-728",
    "hanzi": "规范",
    "pinyin": "guī fàn",
    "english": "norm, standard, specification, regulation, rule, within the rules, to fix rules, to regulate, to specify",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-729",
    "hanzi": "规格",
    "pinyin": "guī gé",
    "english": "standard, norm, specification",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-730",
    "hanzi": "规划",
    "pinyin": "guī huà",
    "english": "to plan (how to do sth), planning, plan, program",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-731",
    "hanzi": "规章",
    "pinyin": "guī zhāng",
    "english": "rule, regulation",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-732",
    "hanzi": "归根到底",
    "pinyin": "guī gēn dào dǐ",
    "english": "(saying) to sum it up...",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-733",
    "hanzi": "归还",
    "pinyin": "guī huán",
    "english": "to return sth, to revert",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-734",
    "hanzi": "归纳",
    "pinyin": "guī nà",
    "english": "to sum up, to summarize, to conclude from facts, induction (method of deduction in logic)",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-735",
    "hanzi": "轨道",
    "pinyin": "guǐ dào",
    "english": "orbit, railway or tram line, fig. conventional way of thinking",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-736",
    "hanzi": "跪",
    "pinyin": "guì",
    "english": "to kneel",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-737",
    "hanzi": "贵族",
    "pinyin": "guì zú",
    "english": "lord, nobility, nobleman, noblewoman, aristocrat, aristocracy",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-738",
    "hanzi": "棍棒",
    "pinyin": "gùn bàng",
    "english": "club",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-739",
    "hanzi": "国防",
    "pinyin": "guó fáng",
    "english": "national defense",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-740",
    "hanzi": "国务院",
    "pinyin": "Guó Wù Yuàn",
    "english": "State Council (PRC), State Department (USA)",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-741",
    "hanzi": "果断",
    "pinyin": "guǒ duàn",
    "english": "firm, decisive",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-742",
    "hanzi": "过度",
    "pinyin": "guò dù",
    "english": "excessive, over-, excess, going too far, extravagant, intemperate, overdue",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-743",
    "hanzi": "过渡",
    "pinyin": "guò dù",
    "english": "to cross over (by ferry), transition, interim, caretaker (administration)",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-744",
    "hanzi": "过奖",
    "pinyin": "guò jiǎng",
    "english": "to over-praise, to flatter",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-745",
    "hanzi": "过滤",
    "pinyin": "guò lǜ",
    "english": "to filter, filter",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-746",
    "hanzi": "过失",
    "pinyin": "guò shī",
    "english": "defect, fault",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-747",
    "hanzi": "过问",
    "pinyin": "guò wèn",
    "english": "to show an interest in, to get involved with",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-748",
    "hanzi": "过瘾",
    "pinyin": "guò yǐn",
    "english": "to satisfy a craving, to get a kick out of sth, gratifying, immensely enjoyable, satisfying, fulfilling",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-749",
    "hanzi": "过于",
    "pinyin": "guò yú",
    "english": "too much, excessively",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-750",
    "hanzi": "嗨",
    "pinyin": "hāi",
    "english": "oh alas, hey!, hi! (loanword)",
    "level": "HSK 6",
    "lesson": 15
  },
  {
    "id": "HSK6-751",
    "hanzi": "海拔",
    "pinyin": "hǎi bá",
    "english": "height above sea level, elevation",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-752",
    "hanzi": "海滨",
    "pinyin": "hǎi bīn",
    "english": "shore, seaside",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-753",
    "hanzi": "含糊",
    "pinyin": "hán hú",
    "english": "obscurity, vague",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-754",
    "hanzi": "含义",
    "pinyin": "hán yì",
    "english": "meaning (implicit in a phrase), implied meaning, hidden meaning, hint, connotation",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-755",
    "hanzi": "寒暄",
    "pinyin": "hán xuān",
    "english": "exchanging conventional greetings, to talk about the weather",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-756",
    "hanzi": "罕见",
    "pinyin": "hǎn jiàn",
    "english": "rare, rarely seen",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-757",
    "hanzi": "捍卫",
    "pinyin": "hàn wèi",
    "english": "to defend, to uphold, to safeguard",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-758",
    "hanzi": "航空",
    "pinyin": "háng kōng",
    "english": "aviation",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-759",
    "hanzi": "航天",
    "pinyin": "háng tiān",
    "english": "space flight",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-760",
    "hanzi": "航行",
    "pinyin": "háng xíng",
    "english": "to sail, to fly, to navigate",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-761",
    "hanzi": "行列",
    "pinyin": "háng liè",
    "english": "procession",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-762",
    "hanzi": "豪迈",
    "pinyin": "háo mài",
    "english": "bold, open-minded, heroic",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-763",
    "hanzi": "毫米",
    "pinyin": "háo mǐ",
    "english": "millimeter",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-764",
    "hanzi": "毫无",
    "pinyin": "háo wú",
    "english": "not in the least, to completely lack",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-765",
    "hanzi": "号召",
    "pinyin": "hào zhào",
    "english": "to call, to appeal",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-766",
    "hanzi": "耗费",
    "pinyin": "hào fèi",
    "english": "to waste, to spend, to consume, to squander",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-767",
    "hanzi": "好客",
    "pinyin": "hào kè",
    "english": "hospitality, to treat guests well, to enjoy having guests, hospitable, friendly",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-768",
    "hanzi": "呵",
    "pinyin": "hē",
    "english": "expel breath, my goodness",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-769",
    "hanzi": "和蔼",
    "pinyin": "hé ǎi",
    "english": "kindly, nice, amiable",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-770",
    "hanzi": "和解",
    "pinyin": "hé jiě",
    "english": "to settle (a dispute out of court), to reconcile, settlement, conciliation, to become reconciled",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-771",
    "hanzi": "和睦",
    "pinyin": "hé mù",
    "english": "peaceful relations, harmonious",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-772",
    "hanzi": "和气",
    "pinyin": "hé qi",
    "english": "friendly, polite, amiable",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-773",
    "hanzi": "和谐",
    "pinyin": "hé xié",
    "english": "harmonious, harmony",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-774",
    "hanzi": "合并",
    "pinyin": "hé bìng",
    "english": "to merge, to annex",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-775",
    "hanzi": "合成",
    "pinyin": "hé chéng",
    "english": "to compose, to constitute, compound, synthesis, mixture, synthetic",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-776",
    "hanzi": "合乎",
    "pinyin": "hé hū",
    "english": "to accord with, conforming to",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-777",
    "hanzi": "合伙",
    "pinyin": "hé huǒ",
    "english": "to act jointly, to form a partnership",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-778",
    "hanzi": "合身",
    "pinyin": "hé shēn",
    "english": "well-fitting (of clothes)",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-779",
    "hanzi": "合算",
    "pinyin": "hé suàn",
    "english": "worthwhile, be a good deal, be a bargain, reckon up, calculate",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-780",
    "hanzi": "嘿",
    "pinyin": "hēi",
    "english": "hey",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-781",
    "hanzi": "痕迹",
    "pinyin": "hén jì",
    "english": "vestige, mark, trace",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-782",
    "hanzi": "狠心",
    "pinyin": "hěn xīn",
    "english": "callous, heartless",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-783",
    "hanzi": "恨不得",
    "pinyin": "hèn bu dé",
    "english": "wishing one could do sth, to hate to be unable, itching to do sth, can't wait for, to wish one could do sth, to desire strongly",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-784",
    "hanzi": "哼",
    "pinyin": "hēng",
    "english": "to groan, to snort, to hum, to croon, humph!",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-785",
    "hanzi": "哄",
    "pinyin": "hōng",
    "english": "roar of laughter (onomatopoeia), hubbub, to roar (as a crowd)",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-786",
    "hanzi": "烘",
    "pinyin": "hōng",
    "english": "to bake, to heat by fire, to set off by contrast",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-787",
    "hanzi": "轰动",
    "pinyin": "hōng dòng",
    "english": "to cause a sensation",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-788",
    "hanzi": "红包",
    "pinyin": "hóng bāo",
    "english": "lit. money wrapped in red as a gift, a bonus payment, a kickback, a bribe",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-789",
    "hanzi": "宏观",
    "pinyin": "hóng guān",
    "english": "macro-, macroscopic, holistic",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-790",
    "hanzi": "宏伟",
    "pinyin": "hóng wěi",
    "english": "grand, imposing, magnificent",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-791",
    "hanzi": "洪水",
    "pinyin": "hóng shuǐ",
    "english": "deluge, flood",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-792",
    "hanzi": "喉咙",
    "pinyin": "hóu lóng",
    "english": "throat, larynx",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-793",
    "hanzi": "吼",
    "pinyin": "hǒu",
    "english": "roar or howl of an animal, bellow of rage",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-794",
    "hanzi": "后代",
    "pinyin": "hòu dài",
    "english": "posterity, later periods, later ages, later generations",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-795",
    "hanzi": "后顾之忧",
    "pinyin": "hòu gù zhī yōu",
    "english": "fears of trouble in the rear (idiom); family worries (obstructing freedom of action), worries about the future consequences, often in negative expressions, meaning \"no worries about anything\"",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-796",
    "hanzi": "后勤",
    "pinyin": "hòu qín",
    "english": "logistics",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-797",
    "hanzi": "候选",
    "pinyin": "hòu xuǎn",
    "english": "candidate",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-798",
    "hanzi": "忽略",
    "pinyin": "hū lvè",
    "english": "to neglect, to overlook, to ignore",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-799",
    "hanzi": "呼啸",
    "pinyin": "hū xiào",
    "english": "to whistle, to scream, to whiz",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-800",
    "hanzi": "呼吁",
    "pinyin": "hū yù",
    "english": "to call on (sb to do sth), to appeal (to), an appeal",
    "level": "HSK 6",
    "lesson": 16
  },
  {
    "id": "HSK6-801",
    "hanzi": "胡乱",
    "pinyin": "hú luàn",
    "english": "careless, reckless, casually, absent-mindedly, at will, at random, any old how",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-802",
    "hanzi": "湖泊",
    "pinyin": "hú pō",
    "english": "lake",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-803",
    "hanzi": "互联网",
    "pinyin": "Hù lián wǎng",
    "english": "the Internet",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-804",
    "hanzi": "花瓣",
    "pinyin": "huā bàn",
    "english": "petal",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-805",
    "hanzi": "华丽",
    "pinyin": "huá lì",
    "english": "gorgeous",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-806",
    "hanzi": "华侨",
    "pinyin": "huá qiáo",
    "english": "overseas Chinese, (in a restricted sense) Chinese emigrant who still retains Chinese nationality, 位, 名[míng]",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-807",
    "hanzi": "画蛇添足",
    "pinyin": "huà shé tiān zú",
    "english": "lit. draw legs on a snake (idiom); fig. to ruin the effect by adding sth superfluous, to overdo it",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-808",
    "hanzi": "化肥",
    "pinyin": "huà féi",
    "english": "fertilizer",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-809",
    "hanzi": "化石",
    "pinyin": "huà shí",
    "english": "fossil",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-810",
    "hanzi": "化验",
    "pinyin": "huà yàn",
    "english": "laboratory test, chemical experiment, assay",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-811",
    "hanzi": "化妆",
    "pinyin": "huà zhuāng",
    "english": "to put on makeup",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-812",
    "hanzi": "划分",
    "pinyin": "huà fēn",
    "english": "to divide",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-813",
    "hanzi": "话筒",
    "pinyin": "huà tǒng",
    "english": "microphone, (telephone) receiver, handset",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-814",
    "hanzi": "怀孕",
    "pinyin": "huái yùn",
    "english": "pregnant, to have conceived, gestation, pregnancy",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-815",
    "hanzi": "欢乐",
    "pinyin": "huān lè",
    "english": "gaiety, gladness, glee, merriment, pleasure, happy, joyous, gay",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-816",
    "hanzi": "还原",
    "pinyin": "huán yuán",
    "english": "to restore to the original state, reduction (chemistry)",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-817",
    "hanzi": "环节",
    "pinyin": "huán jié",
    "english": "round segment, segment (of annelid worms), connection, link, sector, annular ring",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-818",
    "hanzi": "缓和",
    "pinyin": "huǎn hé",
    "english": "to ease (tension), to alleviate, to moderate, to allay, to make more mild",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-819",
    "hanzi": "患者",
    "pinyin": "huàn zhě",
    "english": "patient, sufferer",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-820",
    "hanzi": "荒凉",
    "pinyin": "huāng liáng",
    "english": "desolate",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-821",
    "hanzi": "荒谬",
    "pinyin": "huāng miù",
    "english": "absurd, ridiculous",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-822",
    "hanzi": "荒唐",
    "pinyin": "huāng táng",
    "english": "beyond belief, preposterous, absurd, intemperate, dissipated",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-823",
    "hanzi": "慌忙",
    "pinyin": "huāng máng",
    "english": "in a great rush, in a flurry",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-824",
    "hanzi": "黄昏",
    "pinyin": "huáng hūn",
    "english": "dusk, evening, nightfall",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-825",
    "hanzi": "恍然大悟",
    "pinyin": "huǎng rán dà wù",
    "english": "to suddenly realize, to suddenly see the light",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-826",
    "hanzi": "挥霍",
    "pinyin": "huī huò",
    "english": "to squander money, extravagant, prodigal, free and easy, agile",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-827",
    "hanzi": "辉煌",
    "pinyin": "huī huáng",
    "english": "splendid, glorious",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-828",
    "hanzi": "回报",
    "pinyin": "huí bào",
    "english": "(in) return, reciprocation, payback, retaliation, to report back, to reciprocate",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-829",
    "hanzi": "回避",
    "pinyin": "huí bì",
    "english": "to shun, to avoid (sb), to skirt, to evade (an issue), to step back, to withdraw, to recuse (a judge etc)",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-830",
    "hanzi": "回顾",
    "pinyin": "huí gù",
    "english": "to look back, to review",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-831",
    "hanzi": "回收",
    "pinyin": "huí shōu",
    "english": "to recycle, to reclaim, to retrieve, to recover, to recall (a defective product)",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-832",
    "hanzi": "悔恨",
    "pinyin": "huǐ hèn",
    "english": "remorse, repentance",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-833",
    "hanzi": "毁灭",
    "pinyin": "huǐ miè",
    "english": "to perish, to ruin, to destroy",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-834",
    "hanzi": "会晤",
    "pinyin": "huì wù",
    "english": "to meet, meeting, conference",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-835",
    "hanzi": "汇报",
    "pinyin": "huì bào",
    "english": "to report, to give an account of, report",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-836",
    "hanzi": "贿赂",
    "pinyin": "huì lù",
    "english": "to bribe, a bribe",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-837",
    "hanzi": "昏迷",
    "pinyin": "hūn mí",
    "english": "to lose consciousness, to be in a coma, stupor, coma, stunned, disoriented",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-838",
    "hanzi": "浑身",
    "pinyin": "hún shēn",
    "english": "all over, from head to foot",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-839",
    "hanzi": "混合",
    "pinyin": "hùn hé",
    "english": "to mix, to blend",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-840",
    "hanzi": "混乱",
    "pinyin": "hùn luàn",
    "english": "confusion, chaos, disorder",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-841",
    "hanzi": "混淆",
    "pinyin": "hùn xiáo",
    "english": "to obscure, to confuse, to mix up, to blur, to mislead",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-842",
    "hanzi": "混浊",
    "pinyin": "hùn zhuó",
    "english": "turbid, muddy, dirty",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-843",
    "hanzi": "活该",
    "pinyin": "huó gāi",
    "english": "(coll.) serve sb right, deservedly, ought, should",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-844",
    "hanzi": "活力",
    "pinyin": "huó lì",
    "english": "energy, vitality, vigor, vital force",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-845",
    "hanzi": "火箭",
    "pinyin": "huǒ jiàn",
    "english": "rocket",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-846",
    "hanzi": "火焰",
    "pinyin": "huǒ yàn",
    "english": "blaze, flame",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-847",
    "hanzi": "火药",
    "pinyin": "huǒ yào",
    "english": "gunpowder",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-848",
    "hanzi": "货币",
    "pinyin": "huò bì",
    "english": "currency, monetary, money",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-849",
    "hanzi": "或许",
    "pinyin": "huò xǔ",
    "english": "perhaps, maybe",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-850",
    "hanzi": "基地",
    "pinyin": "jī dì",
    "english": "base (of operations), industrial or military base, al-Qaeda",
    "level": "HSK 6",
    "lesson": 17
  },
  {
    "id": "HSK6-851",
    "hanzi": "基金",
    "pinyin": "jī jīn",
    "english": "fund",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-852",
    "hanzi": "基因",
    "pinyin": "jī yīn",
    "english": "gene (loanword)",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-853",
    "hanzi": "机动",
    "pinyin": "jī dòng",
    "english": "locomotive, motorized, power-driven, adaptable, flexible (use, treatment, timing etc)",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-854",
    "hanzi": "机构",
    "pinyin": "jī gòu",
    "english": "mechanism, structure, organization, agency, institution",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-855",
    "hanzi": "机关",
    "pinyin": "jī guān",
    "english": "mechanism, gear, machine-operated, office, agency, organ, organization, establishment, institution, body, strategum, scheme, intrigue, plot, trick",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-856",
    "hanzi": "机灵",
    "pinyin": "jī líng",
    "english": "clever, quick-witted",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-857",
    "hanzi": "机密",
    "pinyin": "jī mì",
    "english": "secret, classified (information)",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-858",
    "hanzi": "机械",
    "pinyin": "jī xiè",
    "english": "machine, machinery, mechanical, (old) cunning, scheming",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-859",
    "hanzi": "机遇",
    "pinyin": "jī yù",
    "english": "opportunity, favorable circumstance, stroke of luck",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-860",
    "hanzi": "机智",
    "pinyin": "jī zhì",
    "english": "quick-witted, tact, witty, resourceful",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-861",
    "hanzi": "激发",
    "pinyin": "jī fā",
    "english": "to arouse, to excite",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-862",
    "hanzi": "激励",
    "pinyin": "jī lì",
    "english": "to encourage, to urge, motivation, incentive",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-863",
    "hanzi": "激情",
    "pinyin": "jī qíng",
    "english": "passion, fervor, enthusiasm, strong emotion",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-864",
    "hanzi": "饥饿",
    "pinyin": "jī è",
    "english": "hunger, starvation, famine",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-865",
    "hanzi": "讥笑",
    "pinyin": "jī xiào",
    "english": "to sneer",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-866",
    "hanzi": "极端",
    "pinyin": "jí duān",
    "english": "extreme",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-867",
    "hanzi": "极限",
    "pinyin": "jí xiàn",
    "english": "limit, extreme boundary",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-868",
    "hanzi": "即便",
    "pinyin": "jí biàn",
    "english": "even if, even though, right away, immediately",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-869",
    "hanzi": "即将",
    "pinyin": "jí jiāng",
    "english": "on the eve of, to be about to, to be on the verge of",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-870",
    "hanzi": "级别",
    "pinyin": "jí bié",
    "english": "(military) rank, level, grade",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-871",
    "hanzi": "疾病",
    "pinyin": "jí bìng",
    "english": "disease, sickness, ailment",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-872",
    "hanzi": "嫉妒",
    "pinyin": "jí dù",
    "english": "to be jealous, to envy, to hate",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-873",
    "hanzi": "及早",
    "pinyin": "jí zǎo",
    "english": "at the earliest possible time, as soon as possible",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-874",
    "hanzi": "急功近利",
    "pinyin": "jí gōng jìn lì",
    "english": "seeking instant benefit (idiom); shortsighted vision, looking only for fast return",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-875",
    "hanzi": "急剧",
    "pinyin": "jí jù",
    "english": "rapid, sudden",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-876",
    "hanzi": "急切",
    "pinyin": "jí qiè",
    "english": "eager, impatient",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-877",
    "hanzi": "急于求成",
    "pinyin": "jí yú qiú chéng",
    "english": "anxious for quick results (idiom); to demand instant success, impatient for result, impetuous",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-878",
    "hanzi": "急躁",
    "pinyin": "jí zào",
    "english": "irritable, irascible, impetuous",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-879",
    "hanzi": "籍贯",
    "pinyin": "jí guàn",
    "english": "one's native place, place of ancestry, registered birthplace",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-880",
    "hanzi": "集团",
    "pinyin": "jí tuán",
    "english": "group, bloc, corporation, conglomerate",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-881",
    "hanzi": "吉祥",
    "pinyin": "jí xiáng",
    "english": "lucky, auspicious, propitious",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-882",
    "hanzi": "给予",
    "pinyin": "jǐ yǔ",
    "english": "to accord, to give, to show (respect)",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-883",
    "hanzi": "寄托",
    "pinyin": "jì tuō",
    "english": "to have sb look after sb, to entrust the care of sb, to place (hope etc) on",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-884",
    "hanzi": "继承",
    "pinyin": "jì chéng",
    "english": "to inherit, to carry on, to succeed",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-885",
    "hanzi": "继往开来",
    "pinyin": "jì wǎng kāi lái",
    "english": "to follow the past and herald the future (idiom); part of a historical transition, forming a bridge between earlier and later stages",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-886",
    "hanzi": "记性",
    "pinyin": "jì xìng",
    "english": "memory",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-887",
    "hanzi": "记载",
    "pinyin": "jì zǎi",
    "english": "to write down, to record, written account",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-888",
    "hanzi": "季度",
    "pinyin": "jì dù",
    "english": "quarter of a year, season (sports)",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-889",
    "hanzi": "季军",
    "pinyin": "jì jūn",
    "english": "third in a race, bronze medalist",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-890",
    "hanzi": "计较",
    "pinyin": "jì jiào",
    "english": "to bother about, to haggle, to bicker, to argue, plan, stratagem",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-891",
    "hanzi": "忌讳",
    "pinyin": "jì huì",
    "english": "taboo, to avoid as taboo, to abstain from",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-892",
    "hanzi": "寂静",
    "pinyin": "jì jìng",
    "english": "quiet",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-893",
    "hanzi": "纪要",
    "pinyin": "jì yào",
    "english": "minutes, written summary of a meeting",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-894",
    "hanzi": "技能",
    "pinyin": "jì néng",
    "english": "technical ability, skill",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-895",
    "hanzi": "技巧",
    "pinyin": "jì qiǎo",
    "english": "skill, technique",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-896",
    "hanzi": "迹象",
    "pinyin": "jì xiàng",
    "english": "mark, indication, sign, indicator",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-897",
    "hanzi": "家常",
    "pinyin": "jiā cháng",
    "english": "the daily life of a family",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-898",
    "hanzi": "家伙",
    "pinyin": "jiā huo",
    "english": "household dish, implement or furniture, domestic animal, guy (slang), chap",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-899",
    "hanzi": "家属",
    "pinyin": "jiā shǔ",
    "english": "family member, (family) dependent",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-900",
    "hanzi": "家喻户晓",
    "pinyin": "jiā yù hù xiǎo",
    "english": "understood by everyone (idiom); well known, a household name",
    "level": "HSK 6",
    "lesson": 18
  },
  {
    "id": "HSK6-901",
    "hanzi": "加工",
    "pinyin": "jiā gōng",
    "english": "to process, processing, working (of machinery)",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-902",
    "hanzi": "加剧",
    "pinyin": "jiā jù",
    "english": "to intensify, to sharpen, to accelerate, to aggravate, to exacerbate, to embitter",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-903",
    "hanzi": "佳肴",
    "pinyin": "jiā yáo",
    "english": "fine food, delicacies, delicious food",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-904",
    "hanzi": "夹杂",
    "pinyin": "jiā zá",
    "english": "to mix together (disparate substances), to mingle, a mix, to be tangled up with",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-905",
    "hanzi": "假设",
    "pinyin": "jiǎ shè",
    "english": "suppose that..., hypothesis, conjecture",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-906",
    "hanzi": "假使",
    "pinyin": "jiǎ shǐ",
    "english": "if, in case, suppose, given ...",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-907",
    "hanzi": "坚定",
    "pinyin": "jiān dìng",
    "english": "firm, steady, staunch, resolute",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-908",
    "hanzi": "坚固",
    "pinyin": "jiān gù",
    "english": "firm, firmly, hard, stable",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-909",
    "hanzi": "坚韧",
    "pinyin": "jiān rèn",
    "english": "tough and durable, tenacious",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-910",
    "hanzi": "坚实",
    "pinyin": "jiān shí",
    "english": "firm and substantial, solid",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-911",
    "hanzi": "坚硬",
    "pinyin": "jiān yìng",
    "english": "hard, solid",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-912",
    "hanzi": "监督",
    "pinyin": "jiān dū",
    "english": "to control, to supervise, to inspect",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-913",
    "hanzi": "监视",
    "pinyin": "jiān shì",
    "english": "to monitor, to oversee, to keep a close watch over, to spy on",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-914",
    "hanzi": "监狱",
    "pinyin": "jiān yù",
    "english": "prison",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-915",
    "hanzi": "尖端",
    "pinyin": "jiān duān",
    "english": "sharp pointed end, the tip, the cusp, tip-top, most advanced and sophisticated, highest peak, the best",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-916",
    "hanzi": "艰难",
    "pinyin": "jiān nán",
    "english": "difficult, hard, challenging",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-917",
    "hanzi": "兼职",
    "pinyin": "jiān zhí",
    "english": "to hold concurrent posts, concurrent job, moonlighting",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-918",
    "hanzi": "拣",
    "pinyin": "jiǎn",
    "english": "to choose, to pick, to sort out, to pick up",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-919",
    "hanzi": "剪彩",
    "pinyin": "jiǎn cǎi",
    "english": "to cut the ribbon (at a launching or opening ceremony)",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-920",
    "hanzi": "检讨",
    "pinyin": "jiǎn tǎo",
    "english": "to examine or inspect, self-criticism, review",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-921",
    "hanzi": "检验",
    "pinyin": "jiǎn yàn",
    "english": "to inspect, to examine, to test",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-922",
    "hanzi": "简化",
    "pinyin": "jiǎn huà",
    "english": "to simplify",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-923",
    "hanzi": "简陋",
    "pinyin": "jiǎn lòu",
    "english": "simple and crude (of a room or building)",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-924",
    "hanzi": "简体字",
    "pinyin": "jiǎn tǐ zì",
    "english": "simplified Chinese character, as opposed to traditional Chinese character 繁體字|繁体字[fán tǐ zì]",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-925",
    "hanzi": "简要",
    "pinyin": "jiǎn yào",
    "english": "concise, brief",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-926",
    "hanzi": "溅",
    "pinyin": "jiàn",
    "english": "splash",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-927",
    "hanzi": "鉴别",
    "pinyin": "jiàn bié",
    "english": "to differentiate, to distinguish",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-928",
    "hanzi": "鉴定",
    "pinyin": "jiàn dìng",
    "english": "to appraise, to identify, to evaluate",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-929",
    "hanzi": "鉴于",
    "pinyin": "jiàn yú",
    "english": "in view of, seeing that, considering, whereas",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-930",
    "hanzi": "间谍",
    "pinyin": "jiàn dié",
    "english": "spy",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-931",
    "hanzi": "间隔",
    "pinyin": "jiàn gé",
    "english": "compartment, gap, interval, to divide",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-932",
    "hanzi": "间接",
    "pinyin": "jiàn jiē",
    "english": "indirect",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-933",
    "hanzi": "见多识广",
    "pinyin": "jiàn duō shí guǎng",
    "english": "experienced and knowledgeable (idiom)",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-934",
    "hanzi": "见解",
    "pinyin": "jiàn jiě",
    "english": "opinion, view, understanding",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-935",
    "hanzi": "见闻",
    "pinyin": "jiàn wén",
    "english": "what one sees and hears, knowledge, information",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-936",
    "hanzi": "见义勇为",
    "pinyin": "jiàn yì yǒng wéi",
    "english": "to see what is right and act courageously (idiom, from Analects); to stand up bravely for the truth, acting heroically in a just cause",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-937",
    "hanzi": "健全",
    "pinyin": "jiàn quán",
    "english": "robust, sound",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-938",
    "hanzi": "践踏",
    "pinyin": "jiàn tà",
    "english": "to trample",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-939",
    "hanzi": "舰艇",
    "pinyin": "jiàn tǐng",
    "english": "warship, naval vessel",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-940",
    "hanzi": "将近",
    "pinyin": "jiāng jìn",
    "english": "almost, nearly, close to",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-941",
    "hanzi": "将军",
    "pinyin": "jiāng jūn",
    "english": "general, high-ranking military officer, to check or checkmate, fig. to embarrass, to challenge, to put sb on the spot",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-942",
    "hanzi": "僵硬",
    "pinyin": "jiāng yìng",
    "english": "stiff, rigid",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-943",
    "hanzi": "桨",
    "pinyin": "jiǎng",
    "english": "oar, paddle",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-944",
    "hanzi": "奖励",
    "pinyin": "jiǎng lì",
    "english": "to reward, reward (as encouragement)",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-945",
    "hanzi": "奖赏",
    "pinyin": "jiǎng shǎng",
    "english": "reward, prize, award",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-946",
    "hanzi": "降临",
    "pinyin": "jiàng lín",
    "english": "to descend to",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-947",
    "hanzi": "交叉",
    "pinyin": "jiāo chā",
    "english": "to cross, to intersect, to overlap",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-948",
    "hanzi": "交代",
    "pinyin": "jiāo dài",
    "english": "to hand over, to explain, to make clear, to brief (sb), to account for, to justify oneself, to confess, to finish (colloquial)",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-949",
    "hanzi": "交涉",
    "pinyin": "jiāo shè",
    "english": "to negotiate, relating to",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-950",
    "hanzi": "交往",
    "pinyin": "jiāo wǎng",
    "english": "to associate, to contact, association, contact",
    "level": "HSK 6",
    "lesson": 19
  },
  {
    "id": "HSK6-951",
    "hanzi": "交易",
    "pinyin": "jiāo yì",
    "english": "(business) transaction, business deal",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-952",
    "hanzi": "焦点",
    "pinyin": "jiāo diǎn",
    "english": "focus, focal point",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-953",
    "hanzi": "焦急",
    "pinyin": "jiāo jí",
    "english": "anxiety, anxious",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-954",
    "hanzi": "娇气",
    "pinyin": "jiāo qì",
    "english": "delicate, squeamish, finicky",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-955",
    "hanzi": "角落",
    "pinyin": "jiǎo luò",
    "english": "nook, corner",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-956",
    "hanzi": "搅拌",
    "pinyin": "jiǎo bàn",
    "english": "to stir, to agitate",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-957",
    "hanzi": "缴纳",
    "pinyin": "jiǎo nà",
    "english": "to pay (taxes etc)",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-958",
    "hanzi": "教养",
    "pinyin": "jiào yǎng",
    "english": "to train, to educate, to bring up, to nurture, education, culture, upbringing, early conditioning",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-959",
    "hanzi": "较量",
    "pinyin": "jiào liàng",
    "english": "to have a contest with sb, to cross swords, to measure up against, to compete with, to haggle, to quibble",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-960",
    "hanzi": "皆",
    "pinyin": "jiē",
    "english": "all, each and every, in all cases",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-961",
    "hanzi": "接连",
    "pinyin": "jiē lián",
    "english": "on end, in a row, in succession",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-962",
    "hanzi": "阶层",
    "pinyin": "jiē céng",
    "english": "hierarchy, stratum",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-963",
    "hanzi": "揭发",
    "pinyin": "jiē fā",
    "english": "to expose, to bring to light, to disclose, revelation",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-964",
    "hanzi": "揭露",
    "pinyin": "jiē lù",
    "english": "to expose, to unmask, to ferret out, to disclose, disclosure",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-965",
    "hanzi": "节奏",
    "pinyin": "jié zòu",
    "english": "rhythm, tempo, musical pulse, cadence, beat",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-966",
    "hanzi": "杰出",
    "pinyin": "jié chū",
    "english": "outstanding, distinguished, remarkable, prominent, illustrious",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-967",
    "hanzi": "结晶",
    "pinyin": "jié jīng",
    "english": "crystallization, crystalline, crystal",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-968",
    "hanzi": "结局",
    "pinyin": "jié jú",
    "english": "conclusion, ending",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-969",
    "hanzi": "结算",
    "pinyin": "jié suàn",
    "english": "to settle a bill, to close an account",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-970",
    "hanzi": "竭尽全力",
    "pinyin": "jié jìn quán lì",
    "english": "to spare no effort (idiom); to do one's utmost",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-971",
    "hanzi": "截至",
    "pinyin": "jié zhì",
    "english": "up to (a time), by (a time)",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-972",
    "hanzi": "解除",
    "pinyin": "jiě chú",
    "english": "to remove, to sack, to get rid of, to relieve (sb of their duties), to free, to lift (an embargo), to rescind (an agreement)",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-973",
    "hanzi": "解雇",
    "pinyin": "jiě gù",
    "english": "to fire, to sack, to dismiss",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-974",
    "hanzi": "解剖",
    "pinyin": "jiě pōu",
    "english": "to dissect (an animal), to analyze, anatomy",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-975",
    "hanzi": "解散",
    "pinyin": "jiě sàn",
    "english": "to dissolve, to disband",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-976",
    "hanzi": "解体",
    "pinyin": "jiě tǐ",
    "english": "to break up into components, to disintegrate, to collapse, to crumble",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-977",
    "hanzi": "借鉴",
    "pinyin": "jiè jiàn",
    "english": "to use other people's experience, to borrow from a source, to use as reference",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-978",
    "hanzi": "借助",
    "pinyin": "jiè zhù",
    "english": "to draw support from, with the help of",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-979",
    "hanzi": "戒备",
    "pinyin": "jiè bèi",
    "english": "to take precautions, to guard against (emergency)",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-980",
    "hanzi": "界限",
    "pinyin": "jiè xiàn",
    "english": "boundary, marginal",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-981",
    "hanzi": "津津有味",
    "pinyin": "jīn jīn yǒu wèi",
    "english": "with keen interest pleasure (idiom); with gusto, to relish, eagerly, with great interest",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-982",
    "hanzi": "金融",
    "pinyin": "jīn róng",
    "english": "banking, finance, financial",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-983",
    "hanzi": "紧密",
    "pinyin": "jǐn mì",
    "english": "inseparably close",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-984",
    "hanzi": "紧迫",
    "pinyin": "jǐn pò",
    "english": "pressing, urgent",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-985",
    "hanzi": "尽快",
    "pinyin": "jǐn kuài",
    "english": "as quickly as possible, as soon as possible, with all speed",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-986",
    "hanzi": "锦绣前程",
    "pinyin": "jǐn xiù qián chéng",
    "english": "bright future, bright prospects",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-987",
    "hanzi": "进而",
    "pinyin": "jìn ér",
    "english": "and then (what follows next)",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-988",
    "hanzi": "进攻",
    "pinyin": "jìn gōng",
    "english": "to attack, to assault, to go on the offensive, attack, assault, offense (sports)",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-989",
    "hanzi": "进化",
    "pinyin": "jìn huà",
    "english": "evolution",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-990",
    "hanzi": "进展",
    "pinyin": "jìn zhǎn",
    "english": "to make headway, to make progress",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-991",
    "hanzi": "近来",
    "pinyin": "jìn lái",
    "english": "recently, lately",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-992",
    "hanzi": "近视",
    "pinyin": "jìn shì",
    "english": "shortsighted, nearsighted, myopia",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-993",
    "hanzi": "浸泡",
    "pinyin": "jìn pào",
    "english": "to steep, to soak, to immerse",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-994",
    "hanzi": "晋升",
    "pinyin": "jìn shēng",
    "english": "to promote to a higher position",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-995",
    "hanzi": "劲头",
    "pinyin": "jìn tóu",
    "english": "enthusiasm, zeal, vigor, strength",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-996",
    "hanzi": "茎",
    "pinyin": "jīng",
    "english": "stalk, stem",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-997",
    "hanzi": "精打细算",
    "pinyin": "jīng dǎ xì suàn",
    "english": "(saying) meticulous planning and careful accounting",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-998",
    "hanzi": "精华",
    "pinyin": "jīng huá",
    "english": "best feature, most important part of an object, quintessence, essence, soul",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-999",
    "hanzi": "精简",
    "pinyin": "jīng jiǎn",
    "english": "to simplify, to reduce",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-1000",
    "hanzi": "精密",
    "pinyin": "jīng mì",
    "english": "accuracy, exact, precise, refined",
    "level": "HSK 6",
    "lesson": 20
  },
  {
    "id": "HSK6-1001",
    "hanzi": "精确",
    "pinyin": "jīng què",
    "english": "accurate, precise",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1002",
    "hanzi": "精通",
    "pinyin": "jīng tōng",
    "english": "proficient",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1003",
    "hanzi": "精心",
    "pinyin": "jīng xīn",
    "english": "with utmost care, fine, meticulous, detailed",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1004",
    "hanzi": "精益求精",
    "pinyin": "jīng yì qiú jīng",
    "english": "to perfect sth that is already outstanding (idiom); constantly improving",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1005",
    "hanzi": "精致",
    "pinyin": "jīng zhì",
    "english": "delicate, fine, exquisite, refined",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1006",
    "hanzi": "经费",
    "pinyin": "jīng fèi",
    "english": "funds, expenditure",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1007",
    "hanzi": "经商",
    "pinyin": "jīng shāng",
    "english": "to trade, to carry out commercial activities, in business",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1008",
    "hanzi": "经纬",
    "pinyin": "jīng wěi",
    "english": "warp and woof, longitude and latitude, main points",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1009",
    "hanzi": "惊动",
    "pinyin": "jīng dòng",
    "english": "alarm, alert, disturb",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1010",
    "hanzi": "惊奇",
    "pinyin": "jīng qí",
    "english": "to be amazed, to be surprised, to wonder",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1011",
    "hanzi": "惊讶",
    "pinyin": "jīng yà",
    "english": "amazed, astonished, to surprise, amazing, astonishment, awe",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1012",
    "hanzi": "兢兢业业",
    "pinyin": "jīng jīng yè yè",
    "english": "cautious and conscientious",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1013",
    "hanzi": "井",
    "pinyin": "jǐng",
    "english": "a well, neat, orderly",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1014",
    "hanzi": "警告",
    "pinyin": "jǐng gào",
    "english": "to warn, to admonish",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1015",
    "hanzi": "警惕",
    "pinyin": "jǐng tì",
    "english": "to be on the alert, vigilant, alert, on guard, to warn",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1016",
    "hanzi": "颈椎",
    "pinyin": "jǐng zhuī",
    "english": "cervical vertebra, the seven cervical vertebrae in the neck of humans and most mammals",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1017",
    "hanzi": "敬礼",
    "pinyin": "jìng lǐ",
    "english": "to salute, salute",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1018",
    "hanzi": "境界",
    "pinyin": "jìng jiè",
    "english": "boundary, state, realm",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1019",
    "hanzi": "竞赛",
    "pinyin": "jìng sài",
    "english": "race, competition",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1020",
    "hanzi": "竞选",
    "pinyin": "jìng xuǎn",
    "english": "to take part in an election, to run for office",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1021",
    "hanzi": "镜头",
    "pinyin": "jìng tóu",
    "english": "camera lens, camera shot (in a movie etc), scene",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1022",
    "hanzi": "纠纷",
    "pinyin": "jiū fēn",
    "english": "a dispute, entanglement (law)",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1023",
    "hanzi": "纠正",
    "pinyin": "jiū zhèng",
    "english": "to correct, to make right",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1024",
    "hanzi": "酒精",
    "pinyin": "jiǔ jīng",
    "english": "alcohol, ethanol CH3CH2OH, ethyl alcohol, also written 乙醇, grain alcohol",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1025",
    "hanzi": "救济",
    "pinyin": "jiù jì",
    "english": "emergency relief, to help the needy with cash or goods",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1026",
    "hanzi": "就近",
    "pinyin": "jiù jìn",
    "english": "nearby, in a close neighborhood",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1027",
    "hanzi": "就业",
    "pinyin": "jiù yè",
    "english": "looking for employment, getting a job, to start a career",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1028",
    "hanzi": "就职",
    "pinyin": "jiù zhí",
    "english": "to take office, to assume a post",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1029",
    "hanzi": "鞠躬",
    "pinyin": "jū gōng",
    "english": "to bow",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1030",
    "hanzi": "拘留",
    "pinyin": "jū liú",
    "english": "to detain (a prisoner), to keep sb in custody",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1031",
    "hanzi": "拘束",
    "pinyin": "jū shù",
    "english": "to restrict, to restrain, constrained, awkward, ill at ease, uncomfortable, reticent",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1032",
    "hanzi": "居住",
    "pinyin": "jū zhù",
    "english": "to reside, to dwell, to live in a place, resident in",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1033",
    "hanzi": "局部",
    "pinyin": "jú bù",
    "english": "part, local",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1034",
    "hanzi": "局面",
    "pinyin": "jú miàn",
    "english": "aspect, phase, situation",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1035",
    "hanzi": "局势",
    "pinyin": "jú shì",
    "english": "situation, state (of affairs)",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1036",
    "hanzi": "局限",
    "pinyin": "jú xiàn",
    "english": "to limit, to confine, to restrict sth within set boundaries",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1037",
    "hanzi": "举动",
    "pinyin": "jǔ dòng",
    "english": "act, action, activity, move, movement",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1038",
    "hanzi": "举世闻名",
    "pinyin": "jǔ shì wén míng",
    "english": "(saying) world famous",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1039",
    "hanzi": "举世瞩目",
    "pinyin": "jǔ shì zhǔ mù",
    "english": "to receive worldwide attention",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1040",
    "hanzi": "举足轻重",
    "pinyin": "jǔ zú qīng zhòng",
    "english": "a foot's move sways the balance (idiom); to hold the balance of power, to play the decisive role",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1041",
    "hanzi": "咀嚼",
    "pinyin": "jǔ jué",
    "english": "to chew, to think over",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1042",
    "hanzi": "沮丧",
    "pinyin": "jǔ sàng",
    "english": "dispirited, dejected, dismayed",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1043",
    "hanzi": "剧本",
    "pinyin": "jù běn",
    "english": "script for play, opera, movie etc, screenplay, scenario",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1044",
    "hanzi": "剧烈",
    "pinyin": "jù liè",
    "english": "violent, acute, severe, fierce",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1045",
    "hanzi": "聚精会神",
    "pinyin": "jù jīng huì shén",
    "english": "to concentrate one's attention (idiom)",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1046",
    "hanzi": "据悉",
    "pinyin": "jù xī",
    "english": "according to reports, it is reported (that)",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1047",
    "hanzi": "决策",
    "pinyin": "jué cè",
    "english": "strategic decision, decision-making, policy decision, to determine policy",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1048",
    "hanzi": "觉悟",
    "pinyin": "jué wù",
    "english": "consciousness, awareness, Buddhist enlightenment (Sanskrit: cittotpāda)",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1049",
    "hanzi": "觉醒",
    "pinyin": "jué xǐng",
    "english": "to awaken, to come to realize, awakened to the truth, the truth dawns upon one, scales fall from the eyes, to become aware",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1050",
    "hanzi": "绝望",
    "pinyin": "jué wàng",
    "english": "desperation, forlorn, hopeless",
    "level": "HSK 6",
    "lesson": 21
  },
  {
    "id": "HSK6-1051",
    "hanzi": "军队",
    "pinyin": "jūn duì",
    "english": "army troops, 個|个[gè]",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1052",
    "hanzi": "卡通",
    "pinyin": "kǎ tōng",
    "english": "cartoon",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1053",
    "hanzi": "开采",
    "pinyin": "kāi cǎi",
    "english": "to extract (ore or other resource from a mine), to exploit, to mine",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1054",
    "hanzi": "开除",
    "pinyin": "kāi chú",
    "english": "to expel",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1055",
    "hanzi": "开阔",
    "pinyin": "kāi kuò",
    "english": "wide, open (spaces), to open up",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1056",
    "hanzi": "开朗",
    "pinyin": "kāi lǎng",
    "english": "spacious and well-lit, open and clear, to open out (onto a wider vista), optimistic, cheerful, carefree, easy-going, open-minded",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1057",
    "hanzi": "开明",
    "pinyin": "kāi míng",
    "english": "enlightened, open-minded, enlightenment",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1058",
    "hanzi": "开辟",
    "pinyin": "kāi pì",
    "english": "to open up, to set up, to establish",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1059",
    "hanzi": "开水",
    "pinyin": "kāi shuǐ",
    "english": "boiled water, boiling water",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1060",
    "hanzi": "开拓",
    "pinyin": "kāi tuò",
    "english": "to break new ground (for agriculture), to open up (a new seam), to develop (border regions), fig. to open up (new horizons)",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1061",
    "hanzi": "开展",
    "pinyin": "kāi zhǎn",
    "english": "(begin to) develop, unfold, to start, to launch, to open, to carry out",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1062",
    "hanzi": "开支",
    "pinyin": "kāi zhī",
    "english": "expenditures, pay, expenses",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1063",
    "hanzi": "刊登",
    "pinyin": "kān dēng",
    "english": "to carry a story, to publish (in a newspaper or magazine)",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1064",
    "hanzi": "刊物",
    "pinyin": "kān wù",
    "english": "publication",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1065",
    "hanzi": "勘探",
    "pinyin": "kān tàn",
    "english": "exploration",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1066",
    "hanzi": "看待",
    "pinyin": "kàn dài",
    "english": "to look upon, to regard",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1067",
    "hanzi": "看望",
    "pinyin": "kàn wàng",
    "english": "to visit, to pay a call to",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1068",
    "hanzi": "慷慨",
    "pinyin": "kāng kǎi",
    "english": "vehement, fervent, generous, giving, liberal",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1069",
    "hanzi": "扛",
    "pinyin": "káng",
    "english": "to carry on one's shoulder",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1070",
    "hanzi": "考察",
    "pinyin": "kǎo chá",
    "english": "to inspect, to observe and study, on-the-spot investigation",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1071",
    "hanzi": "考古",
    "pinyin": "kǎo gǔ",
    "english": "archaeology",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1072",
    "hanzi": "考核",
    "pinyin": "kǎo hé",
    "english": "to examine, to check up on, to assess, to review, appraisal, review, evaluation",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1073",
    "hanzi": "考验",
    "pinyin": "kǎo yàn",
    "english": "to test, to put to the test",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1074",
    "hanzi": "靠拢",
    "pinyin": "kào lǒng",
    "english": "to draw close to",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1075",
    "hanzi": "磕",
    "pinyin": "kē",
    "english": "to tap, knock",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1076",
    "hanzi": "颗粒",
    "pinyin": "kē lì",
    "english": "kernel, granule, granulated (sugar, chemical product)",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1077",
    "hanzi": "科目",
    "pinyin": "kē mù",
    "english": "subject",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1078",
    "hanzi": "渴望",
    "pinyin": "kě wàng",
    "english": "to thirst for, to long for",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1079",
    "hanzi": "可观",
    "pinyin": "kě guān",
    "english": "considerable, impressive, significant",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1080",
    "hanzi": "可口",
    "pinyin": "kě kǒu",
    "english": "tasty, to taste good",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1081",
    "hanzi": "可恶",
    "pinyin": "kě wù",
    "english": "repulsive, vile, hateful, abominable",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1082",
    "hanzi": "可笑",
    "pinyin": "kě xiào",
    "english": "funny, ridiculous",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1083",
    "hanzi": "可行",
    "pinyin": "kě xíng",
    "english": "feasible",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1084",
    "hanzi": "刻不容缓",
    "pinyin": "kè bù róng huǎn",
    "english": "to brook no delay, to demand immediate action",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1085",
    "hanzi": "课题",
    "pinyin": "kè tí",
    "english": "task, problem, issue",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1086",
    "hanzi": "客户",
    "pinyin": "kè hù",
    "english": "client, customer",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1087",
    "hanzi": "啃",
    "pinyin": "kěn",
    "english": "to gnaw, to nibble, to bite",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1088",
    "hanzi": "恳切",
    "pinyin": "kěn qiè",
    "english": "earnest, sincere",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1089",
    "hanzi": "坑",
    "pinyin": "kēng",
    "english": "hole, pit, tunnel, to defraud",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1090",
    "hanzi": "空洞",
    "pinyin": "kōng dòng",
    "english": "cavity, empty, vacuous",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1091",
    "hanzi": "空前绝后",
    "pinyin": "kōng qián jué hòu",
    "english": "unprecedented and never to be duplicated, the first and the last, unmatched, unique",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1092",
    "hanzi": "空想",
    "pinyin": "kōng xiǎng",
    "english": "daydream, fantasy, to fantasize",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1093",
    "hanzi": "空虚",
    "pinyin": "kōng xū",
    "english": "hollow, emptiness, meaningless",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1094",
    "hanzi": "孔",
    "pinyin": "kǒng",
    "english": "hole, classifier for cave dwellings",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1095",
    "hanzi": "恐吓",
    "pinyin": "kǒng hè",
    "english": "to threaten, to menace",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1096",
    "hanzi": "恐惧",
    "pinyin": "kǒng jù",
    "english": "fear, dread, phobia",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1097",
    "hanzi": "空白",
    "pinyin": "kòng bái",
    "english": "blank space",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1098",
    "hanzi": "空隙",
    "pinyin": "kòng xì",
    "english": "crack, gap between two objects, gap in time between two events",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1099",
    "hanzi": "口气",
    "pinyin": "kǒu qì",
    "english": "tone of voice, the way one speaks, manner of expression, tone",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1100",
    "hanzi": "口腔",
    "pinyin": "kǒu qiāng",
    "english": "oral cavity",
    "level": "HSK 6",
    "lesson": 22
  },
  {
    "id": "HSK6-1101",
    "hanzi": "口头",
    "pinyin": "kǒu tóu",
    "english": "oral, verbal",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1102",
    "hanzi": "口音",
    "pinyin": "kǒu yīn",
    "english": "oral speech sounds (linguistics)",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1103",
    "hanzi": "枯竭",
    "pinyin": "kū jié",
    "english": "used up, dried up, exhausted (of resources)",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1104",
    "hanzi": "枯燥",
    "pinyin": "kū zào",
    "english": "dry and dull, uninteresting, dry-as-dust",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1105",
    "hanzi": "苦尽甘来",
    "pinyin": "kǔ jìn gān lái",
    "english": "bitterness finishes, sweetness begins (idiom); the hard times are over, the good times just beginning",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1106",
    "hanzi": "挎",
    "pinyin": "kuà",
    "english": "to carry (esp. slung over the arm, shoulder or side)",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1107",
    "hanzi": "跨",
    "pinyin": "kuà",
    "english": "to step across, to stride over, to straddle, to span",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1108",
    "hanzi": "快活",
    "pinyin": "kuài huo",
    "english": "happy, cheerful",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1109",
    "hanzi": "宽敞",
    "pinyin": "kuān chang",
    "english": "spacious, wide",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1110",
    "hanzi": "款待",
    "pinyin": "kuǎn dài",
    "english": "to entertain, to be hospitable to",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1111",
    "hanzi": "款式",
    "pinyin": "kuǎn shì",
    "english": "pattern, style, design",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1112",
    "hanzi": "筐",
    "pinyin": "kuāng",
    "english": "basket",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1113",
    "hanzi": "旷课",
    "pinyin": "kuàng kè",
    "english": "to play truant, to cut classes",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1114",
    "hanzi": "框架",
    "pinyin": "kuàng jià",
    "english": "frame, framework, fig. pattern, outline, organizing plan",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1115",
    "hanzi": "况且",
    "pinyin": "kuàng qiě",
    "english": "moreover, besides, in addition, furthermore",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1116",
    "hanzi": "亏待",
    "pinyin": "kuī dài",
    "english": "to treat sb unfairly",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1117",
    "hanzi": "亏损",
    "pinyin": "kuī sǔn",
    "english": "deficit, (financial) loss",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1118",
    "hanzi": "昆虫",
    "pinyin": "kūn chóng",
    "english": "insect, 群, 堆[duī]",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1119",
    "hanzi": "捆绑",
    "pinyin": "kǔn bǎng",
    "english": "to bind",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1120",
    "hanzi": "扩充",
    "pinyin": "kuò chōng",
    "english": "to expand",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1121",
    "hanzi": "扩散",
    "pinyin": "kuò sàn",
    "english": "to spread, to proliferate, to diffuse, spread, proliferation, diffusion",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1122",
    "hanzi": "扩张",
    "pinyin": "kuò zhāng",
    "english": "expansion, dilation, to expand (e.g. one's power or influence), to broaden",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1123",
    "hanzi": "喇叭",
    "pinyin": "lǎ ba",
    "english": "horn (automobile etc), loudspeaker, brass wind instrument, trumpet, suona 鎖吶|锁呐[suǒ nà]",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1124",
    "hanzi": "啦",
    "pinyin": "la",
    "english": "sentence-final particle, contraction of 了啊, indicating exclamation, particle placed after each item in a list of examples",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1125",
    "hanzi": "来历",
    "pinyin": "lái lì",
    "english": "history, antecedents, origin",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1126",
    "hanzi": "来源",
    "pinyin": "lái yuán",
    "english": "source (of information etc), origin",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1127",
    "hanzi": "栏目",
    "pinyin": "lán mù",
    "english": "regular column or segment (in a publication or broadcast program), program (TV or radio)",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1128",
    "hanzi": "懒惰",
    "pinyin": "lǎn duò",
    "english": "idle, lazy",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1129",
    "hanzi": "狼狈",
    "pinyin": "láng bèi",
    "english": "in a difficult situation, to cut a sorry figure, scoundrel! (derogatory)",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1130",
    "hanzi": "朗读",
    "pinyin": "lǎng dú",
    "english": "read aloud, read loudly and clearly",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1131",
    "hanzi": "捞",
    "pinyin": "lāo",
    "english": "to fish up, to dredge up",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1132",
    "hanzi": "唠叨",
    "pinyin": "láo dao",
    "english": "to prattle, to chatter, talkative, garrulous, to nag",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1133",
    "hanzi": "牢固",
    "pinyin": "láo gù",
    "english": "firm, secure",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1134",
    "hanzi": "牢骚",
    "pinyin": "láo sāo",
    "english": "discontent, complaint, to complain",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1135",
    "hanzi": "乐趣",
    "pinyin": "lè qù",
    "english": "delight, pleasure, joy",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1136",
    "hanzi": "乐意",
    "pinyin": "lè yì",
    "english": "to be willing to do sth, to be ready to do sth, to be happy to do sth, content, satisfied",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1137",
    "hanzi": "雷达",
    "pinyin": "léi dá",
    "english": "radar (loanword)",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1138",
    "hanzi": "类似",
    "pinyin": "lèi sì",
    "english": "similar, analogous",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1139",
    "hanzi": "冷淡",
    "pinyin": "lěng dàn",
    "english": "cold, indifferent",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1140",
    "hanzi": "冷酷",
    "pinyin": "lěng kù",
    "english": "grim, unfeeling, callous",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1141",
    "hanzi": "冷却",
    "pinyin": "lěng què",
    "english": "to cool off, cooling",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1142",
    "hanzi": "愣",
    "pinyin": "lèng",
    "english": "to look distracted, to stare blankly, distracted, blank, (coll.) unexpectedly, rash, rashly",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1143",
    "hanzi": "黎明",
    "pinyin": "lí míng",
    "english": "dawn, daybreak",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1144",
    "hanzi": "里程碑",
    "pinyin": "lǐ chéng bēi",
    "english": "milestone",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1145",
    "hanzi": "礼节",
    "pinyin": "lǐ jié",
    "english": "etiquette",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1146",
    "hanzi": "理睬",
    "pinyin": "lǐ cǎi",
    "english": "to heed, to pay attention to",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1147",
    "hanzi": "理所当然",
    "pinyin": "lǐ suǒ dāng rán",
    "english": "as it should be by rights (idiom); proper and to be expected as a matter of course, inevitable and right",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1148",
    "hanzi": "理直气壮",
    "pinyin": "lǐ zhí qì zhuàng",
    "english": "in the right and self-confident (idiom); bold and confident with justice on one's side, to have the courage of one's convictions, just and forceful",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1149",
    "hanzi": "理智",
    "pinyin": "lǐ zhì",
    "english": "reason, intellect, rationality",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1150",
    "hanzi": "立场",
    "pinyin": "lì chǎng",
    "english": "position, standpoint",
    "level": "HSK 6",
    "lesson": 23
  },
  {
    "id": "HSK6-1151",
    "hanzi": "立交桥",
    "pinyin": "lì jiāo qiáo",
    "english": "overpass, flyover",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1152",
    "hanzi": "立体",
    "pinyin": "lì tǐ",
    "english": "three-dimensional, solid, stereoscopic",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1153",
    "hanzi": "立足",
    "pinyin": "lì zú",
    "english": "to stand, to have a footing, to be established, to base oneself on",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1154",
    "hanzi": "历代",
    "pinyin": "lì dài",
    "english": "successive generations, successive dynasties, past dynasties",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1155",
    "hanzi": "历来",
    "pinyin": "lì lái",
    "english": "always, throughout (a period of time), (of) all-time",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1156",
    "hanzi": "利害",
    "pinyin": "lì hài",
    "english": "pros and cons, advantages and disadvantages, gains and losses",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1157",
    "hanzi": "利率",
    "pinyin": "lì lǜ",
    "english": "interest rates",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1158",
    "hanzi": "力所能及",
    "pinyin": "lì suǒ néng jí",
    "english": "as far as one's capabilities extend (idiom); to the best of one's ability, within one's powers",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1159",
    "hanzi": "力图",
    "pinyin": "lì tú",
    "english": "to try hard to, to strive to",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1160",
    "hanzi": "力争",
    "pinyin": "lì zhēng",
    "english": "to work hard for, to do all one can, to contend strongly",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1161",
    "hanzi": "例外",
    "pinyin": "lì wài",
    "english": "(make an) exception",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1162",
    "hanzi": "连年",
    "pinyin": "lián nián",
    "english": "successive years, over many years",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1163",
    "hanzi": "连锁",
    "pinyin": "lián suǒ",
    "english": "to interlock, to be linked, chain (store etc)",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1164",
    "hanzi": "连同",
    "pinyin": "lián tóng",
    "english": "together with, along with",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1165",
    "hanzi": "联欢",
    "pinyin": "lián huān",
    "english": "have a get-together",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1166",
    "hanzi": "联络",
    "pinyin": "lián luò",
    "english": "communication, to get in touch with, to contact, connection (math.)",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1167",
    "hanzi": "联盟",
    "pinyin": "lián méng",
    "english": "alliance, union, coalition",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1168",
    "hanzi": "联想",
    "pinyin": "lián xiǎng",
    "english": "to associate (cognitively), to make an associative connection, mental association, word prediction and auto-complete functions of input method editing programs",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1169",
    "hanzi": "廉洁",
    "pinyin": "lián jié",
    "english": "honest, not coercive, honesty, integrity, incorruptible",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1170",
    "hanzi": "良心",
    "pinyin": "liáng xīn",
    "english": "conscience",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1171",
    "hanzi": "晾",
    "pinyin": "liàng",
    "english": "to dry in the air",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1172",
    "hanzi": "谅解",
    "pinyin": "liàng jiě",
    "english": "to understand, to make allowances for, understanding",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1173",
    "hanzi": "辽阔",
    "pinyin": "liáo kuò",
    "english": "vast, extensive",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1174",
    "hanzi": "列举",
    "pinyin": "liè jǔ",
    "english": "a list, to list, to enumerate",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1175",
    "hanzi": "淋",
    "pinyin": "lín",
    "english": "to drain, to drench, to drip, diseases of the bladder",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1176",
    "hanzi": "临床",
    "pinyin": "lín chuáng",
    "english": "clinical",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1177",
    "hanzi": "吝啬",
    "pinyin": "lìn sè",
    "english": "stingy, mean, miserly",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1178",
    "hanzi": "零星",
    "pinyin": "líng xīng",
    "english": "fragmentary, random, bits and pieces, sporadic",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1179",
    "hanzi": "凌晨",
    "pinyin": "líng chén",
    "english": "very early in the morning, in the wee hours",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1180",
    "hanzi": "灵感",
    "pinyin": "líng gǎn",
    "english": "inspiration, insight, a burst of creativity in scientific or artistic endeavor",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1181",
    "hanzi": "灵魂",
    "pinyin": "líng hún",
    "english": "soul, spirit",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1182",
    "hanzi": "灵敏",
    "pinyin": "líng mǐn",
    "english": "smart, clever, sensitive, keen, quick, sharp",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1183",
    "hanzi": "伶俐",
    "pinyin": "líng lì",
    "english": "clever, witty, intelligent",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1184",
    "hanzi": "领会",
    "pinyin": "lǐng huì",
    "english": "to understand, to comprehend, to grasp",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1185",
    "hanzi": "领事馆",
    "pinyin": "lǐng shì guǎn",
    "english": "consulate",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1186",
    "hanzi": "领土",
    "pinyin": "lǐng tǔ",
    "english": "territory",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1187",
    "hanzi": "领悟",
    "pinyin": "lǐng wù",
    "english": "to understand, to comprehend",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1188",
    "hanzi": "领先",
    "pinyin": "lǐng xiān",
    "english": "to lead, to be in front",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1189",
    "hanzi": "领袖",
    "pinyin": "lǐng xiù",
    "english": "leader, 位, 名[míng]",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1190",
    "hanzi": "溜",
    "pinyin": "liū",
    "english": "to slip away, to escape in stealth, to skate",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1191",
    "hanzi": "留恋",
    "pinyin": "liú liàn",
    "english": "reluctant to leave, to hate to have to go, to recall fondly",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1192",
    "hanzi": "留念",
    "pinyin": "liú niàn",
    "english": "to keep as a souvenir, to recall fondly",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1193",
    "hanzi": "留神",
    "pinyin": "liú shén",
    "english": "to take care, to be careful",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1194",
    "hanzi": "流浪",
    "pinyin": "liú làng",
    "english": "to drift about, to wander, to roam, nomadic, homeless, unsettled (e.g. population), vagrant",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1195",
    "hanzi": "流露",
    "pinyin": "liú lù",
    "english": "to express, to reveal (one's thoughts or feelings)",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1196",
    "hanzi": "流氓",
    "pinyin": "liú máng",
    "english": "rogue, hoodlum, gangster, immoral behavior",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1197",
    "hanzi": "流通",
    "pinyin": "liú tōng",
    "english": "to circulate, to distribute, circulation, distribution",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1198",
    "hanzi": "聋哑",
    "pinyin": "lóng yǎ",
    "english": "deaf and dumb",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1199",
    "hanzi": "隆重",
    "pinyin": "lóng zhòng",
    "english": "grand, prosperous, ceremonious, solemn",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1200",
    "hanzi": "垄断",
    "pinyin": "lǒng duàn",
    "english": "to enjoy market dominance, to monopolize",
    "level": "HSK 6",
    "lesson": 24
  },
  {
    "id": "HSK6-1201",
    "hanzi": "笼罩",
    "pinyin": "lǒng zhào",
    "english": "to envelop, to shroud",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1202",
    "hanzi": "搂",
    "pinyin": "lǒu",
    "english": "to hug, to embrace, to hold in one's arms",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1203",
    "hanzi": "炉灶",
    "pinyin": "lú zào",
    "english": "stove",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1204",
    "hanzi": "轮船",
    "pinyin": "lún chuán",
    "english": "steamship, steamer, ocean liner, ship",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1205",
    "hanzi": "轮廓",
    "pinyin": "lún kuò",
    "english": "an outline, silhouette",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1206",
    "hanzi": "轮胎",
    "pinyin": "lún tāi",
    "english": "tire, pneumatic tire",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1207",
    "hanzi": "论坛",
    "pinyin": "lùn tán",
    "english": "forum (for discussion)",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1208",
    "hanzi": "论证",
    "pinyin": "lùn zhèng",
    "english": "to prove a point, to expound on, to demonstrate or prove (through argument), proof",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1209",
    "hanzi": "啰唆",
    "pinyin": "luō suō",
    "english": "see 囉嗦|啰嗦[luō suo]",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1210",
    "hanzi": "螺丝钉",
    "pinyin": "luó sī dīng",
    "english": "screw",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1211",
    "hanzi": "落成",
    "pinyin": "luò chéng",
    "english": "to complete a construction project",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1212",
    "hanzi": "落实",
    "pinyin": "luò shí",
    "english": "practical, workable, to implement, to carry out, to decide",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1213",
    "hanzi": "络绎不绝",
    "pinyin": "luò yì bù jué",
    "english": "continuously; in an endless stream (idiom)",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1214",
    "hanzi": "屡次",
    "pinyin": "lǚ cì",
    "english": "repeatedly, time and again",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1215",
    "hanzi": "履行",
    "pinyin": "lǚ xíng",
    "english": "to fulfill (one's obligations), to carry out (a task), to implement (an agreement), to perform",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1216",
    "hanzi": "掠夺",
    "pinyin": "lvè duó",
    "english": "to plunder, to rob, also written 略奪|略夺",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1217",
    "hanzi": "略微",
    "pinyin": "lvè wēi",
    "english": "a little bit, slightly",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1218",
    "hanzi": "麻痹",
    "pinyin": "má bì",
    "english": "paralysis, palsy, numbness, to benumb",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1219",
    "hanzi": "麻木",
    "pinyin": "má mù",
    "english": "numb, insensitive, apathetic",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1220",
    "hanzi": "麻醉",
    "pinyin": "má zuì",
    "english": "anesthesia, fig. to poison (sb's mind)",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1221",
    "hanzi": "码头",
    "pinyin": "mǎ tóu",
    "english": "dock, pier, wharf",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1222",
    "hanzi": "嘛",
    "pinyin": "ma",
    "english": "modal particle indicating that sth is obvious, particle indicating a pause for emphasis",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1223",
    "hanzi": "埋伏",
    "pinyin": "mái fú",
    "english": "to ambush, to lie in wait for, to lie low, ambush",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1224",
    "hanzi": "埋没",
    "pinyin": "mái mò",
    "english": "to engulf, to bury, to overlook, to stifle, to neglect, to fall into oblivion",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1225",
    "hanzi": "埋葬",
    "pinyin": "mái zàng",
    "english": "to bury",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1226",
    "hanzi": "迈",
    "pinyin": "mài",
    "english": "take a step",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1227",
    "hanzi": "脉搏",
    "pinyin": "mài bó",
    "english": "a pulse (both medical and figurative)",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1228",
    "hanzi": "埋怨",
    "pinyin": "mán yuàn",
    "english": "to complain, to grumble (about), to reproach, to blame",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1229",
    "hanzi": "慢性",
    "pinyin": "màn xìng",
    "english": "slow and patient, chronic (disease), slow to take effect (e.g. a slow poison)",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1230",
    "hanzi": "漫长",
    "pinyin": "màn cháng",
    "english": "very long, endless",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1231",
    "hanzi": "漫画",
    "pinyin": "màn huà",
    "english": "caricature, cartoon, Japanese manga",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1232",
    "hanzi": "蔓延",
    "pinyin": "màn yán",
    "english": "to extend, to spread",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1233",
    "hanzi": "忙碌",
    "pinyin": "máng lù",
    "english": "busy, bustling",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1234",
    "hanzi": "茫茫",
    "pinyin": "máng máng",
    "english": "boundless, vast and obscure",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1235",
    "hanzi": "茫然",
    "pinyin": "máng rán",
    "english": "blankly, vacantly, at a loss",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1236",
    "hanzi": "盲目",
    "pinyin": "máng mù",
    "english": "blind, blindly, ignorant, lacking understanding",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1237",
    "hanzi": "冒充",
    "pinyin": "mào chōng",
    "english": "to feign, to pretend to be, to pass oneself off as",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1238",
    "hanzi": "茂盛",
    "pinyin": "mào shèng",
    "english": "lush",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1239",
    "hanzi": "枚",
    "pinyin": "méi",
    "english": "classifier for coins, rings, badges, pearls, sporting medals, rockets, satellites etc, tree trunk, whip, wooden peg, used as a gag for marching soldiers (old)",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1240",
    "hanzi": "没辙",
    "pinyin": "méi zhé",
    "english": "(idiom) unable to solve; no way to escape a problem",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1241",
    "hanzi": "媒介",
    "pinyin": "méi jiè",
    "english": "media, medium",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1242",
    "hanzi": "媒体",
    "pinyin": "méi tǐ",
    "english": "media, esp. news media",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1243",
    "hanzi": "美观",
    "pinyin": "měi guān",
    "english": "pleasing to the eye, beautiful, artistic",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1244",
    "hanzi": "美满",
    "pinyin": "měi mǎn",
    "english": "happy, blissful",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1245",
    "hanzi": "美妙",
    "pinyin": "měi miào",
    "english": "beautiful, wonderful, splendid",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1246",
    "hanzi": "门诊",
    "pinyin": "mén zhěn",
    "english": "outpatient service",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1247",
    "hanzi": "蒙",
    "pinyin": "méng",
    "english": "to cover, ignorant, to suffer (misfortune), to receive (a favor), to cheat",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1248",
    "hanzi": "萌芽",
    "pinyin": "méng yá",
    "english": "sprout, germ of a plant",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1249",
    "hanzi": "猛烈",
    "pinyin": "měng liè",
    "english": "fierce, violent (criticism etc)",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1250",
    "hanzi": "梦想",
    "pinyin": "mèng xiǎng",
    "english": "(figuratively) to dream of, dream",
    "level": "HSK 6",
    "lesson": 25
  },
  {
    "id": "HSK6-1251",
    "hanzi": "眯",
    "pinyin": "mī",
    "english": "to narrow one's eyes, to squint",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1252",
    "hanzi": "弥补",
    "pinyin": "mí bǔ",
    "english": "to complement, to make up for a deficiency",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1253",
    "hanzi": "弥漫",
    "pinyin": "mí màn",
    "english": "variant of 彌漫|弥漫[mí màn]",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1254",
    "hanzi": "迷惑",
    "pinyin": "mí huo",
    "english": "to puzzle, to confuse, to baffle",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1255",
    "hanzi": "迷人",
    "pinyin": "mí rén",
    "english": "fascinating, enchanting, charming, tempting",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1256",
    "hanzi": "迷失",
    "pinyin": "mí shī",
    "english": "lost, not knowing one's location",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1257",
    "hanzi": "迷信",
    "pinyin": "mí xìn",
    "english": "superstition, to have a superstitious belief (in sth)",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1258",
    "hanzi": "密度",
    "pinyin": "mì dù",
    "english": "density, thickness",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1259",
    "hanzi": "密封",
    "pinyin": "mì fēng",
    "english": "to seal up",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1260",
    "hanzi": "免得",
    "pinyin": "miǎn de",
    "english": "so as not to, so as to avoid",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1261",
    "hanzi": "免疫",
    "pinyin": "miǎn yì",
    "english": "immunity (to disease)",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1262",
    "hanzi": "勉励",
    "pinyin": "miǎn lì",
    "english": "to encourage",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1263",
    "hanzi": "勉强",
    "pinyin": "miǎn qiǎng",
    "english": "to do with difficulty, to force sb to do sth, reluctant, barely enough",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1264",
    "hanzi": "面貌",
    "pinyin": "miàn mào",
    "english": "appearance, face, features",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1265",
    "hanzi": "面子",
    "pinyin": "miàn zi",
    "english": "outer surface, outside, honor, reputation, face (as in \"losing face\"), self-respect, feelings, (medicinal) powder",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1266",
    "hanzi": "描绘",
    "pinyin": "miáo huì",
    "english": "to describe, to portray",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1267",
    "hanzi": "渺小",
    "pinyin": "miǎo xiǎo",
    "english": "minute, tiny, negligible, insignificant",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1268",
    "hanzi": "蔑视",
    "pinyin": "miè shì",
    "english": "to loathe, to despise, contempt",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1269",
    "hanzi": "灭亡",
    "pinyin": "miè wáng",
    "english": "to be destroyed, to become extinct, to perish, to die out, to destroy, to exterminate",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1270",
    "hanzi": "民间",
    "pinyin": "mín jiān",
    "english": "among the people, popular, folk, non-governmental, involving people rather than governments",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1271",
    "hanzi": "民用",
    "pinyin": "mín yòng",
    "english": "(for) civilian use",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1272",
    "hanzi": "敏感",
    "pinyin": "mǐn gǎn",
    "english": "sensitive, susceptible, politically sensitive (pretext for censorship)",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1273",
    "hanzi": "敏捷",
    "pinyin": "mǐn jié",
    "english": "nimble, quick, shrewd",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1274",
    "hanzi": "敏锐",
    "pinyin": "mǐn ruì",
    "english": "keen, sharp, acute",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1275",
    "hanzi": "明明",
    "pinyin": "míng míng",
    "english": "obviously, plainly, undoubtedly, definitely",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1276",
    "hanzi": "名次",
    "pinyin": "míng cì",
    "english": "position in a ranking of names",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1277",
    "hanzi": "名额",
    "pinyin": "míng é",
    "english": "quota, number of places, place (in an institution, a group etc)",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1278",
    "hanzi": "名副其实",
    "pinyin": "míng fù qí shí",
    "english": "not just in name only, but also in reality (idiom)",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1279",
    "hanzi": "名誉",
    "pinyin": "míng yù",
    "english": "fame, reputation, honor, honorary, emeritus (of retired professor)",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1280",
    "hanzi": "命名",
    "pinyin": "mìng míng",
    "english": "to give a name to, to dub, to christen, to designate, named after, naming",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1281",
    "hanzi": "摸索",
    "pinyin": "mō suo",
    "english": "to feel about, to grope about, to fumble, to do things slowly",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1282",
    "hanzi": "膜",
    "pinyin": "mó",
    "english": "membrane, film",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1283",
    "hanzi": "摩擦",
    "pinyin": "mó cā",
    "english": "friction, rubbing, chafing, fig. disharmony, conflict, same as 磨擦",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1284",
    "hanzi": "磨合",
    "pinyin": "mó hé",
    "english": "to break in, to wear in",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1285",
    "hanzi": "模范",
    "pinyin": "mó fàn",
    "english": "model, fine example",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1286",
    "hanzi": "模式",
    "pinyin": "mó shì",
    "english": "mode, method",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1287",
    "hanzi": "模型",
    "pinyin": "mó xíng",
    "english": "model, mould, matrix, pattern",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1288",
    "hanzi": "魔鬼",
    "pinyin": "mó guǐ",
    "english": "devil",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1289",
    "hanzi": "魔术",
    "pinyin": "mó shù",
    "english": "magic",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1290",
    "hanzi": "抹杀",
    "pinyin": "mǒ shā",
    "english": "to erase, to cover traces, to obliterate evidence, to expunge, to blot out, to suppress",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1291",
    "hanzi": "莫名其妙",
    "pinyin": "mò míng qí miào",
    "english": "unfathomable mystery (idiom); subtle and ineffable, unable to make head or tail of it, boring (e.g. movie)",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1292",
    "hanzi": "默默",
    "pinyin": "mò mò",
    "english": "in silence, not speaking",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1293",
    "hanzi": "墨水儿",
    "pinyin": "mò shuǐ r",
    "english": "erhua variant of 墨水, ink",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1294",
    "hanzi": "谋求",
    "pinyin": "móu qiú",
    "english": "to seek, to strive for",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1295",
    "hanzi": "模样",
    "pinyin": "mú yàng",
    "english": "look, style, appearance, approximation, about",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1296",
    "hanzi": "母语",
    "pinyin": "mǔ yǔ",
    "english": "native language, mother tongue, (linguistics) parent language",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1297",
    "hanzi": "目睹",
    "pinyin": "mù dǔ",
    "english": "to witness, to see at first hand, to see with one's own eyes",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1298",
    "hanzi": "目光",
    "pinyin": "mù guāng",
    "english": "sight, vision, view, gaze, look",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1299",
    "hanzi": "沐浴",
    "pinyin": "mù yù",
    "english": "to take a bath, to bathe, to immerse",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1300",
    "hanzi": "拿手",
    "pinyin": "ná shǒu",
    "english": "expert in, good at",
    "level": "HSK 6",
    "lesson": 26
  },
  {
    "id": "HSK6-1301",
    "hanzi": "纳闷儿",
    "pinyin": "nà mèn r",
    "english": "puzzled, bewildered",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1302",
    "hanzi": "耐用",
    "pinyin": "nài yòng",
    "english": "durable",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1303",
    "hanzi": "难得",
    "pinyin": "nán dé",
    "english": "seldom, rare, hard to come by",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1304",
    "hanzi": "难堪",
    "pinyin": "nán kān",
    "english": "hard to take, embarrassed",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1305",
    "hanzi": "难免",
    "pinyin": "nán miǎn",
    "english": "hard to avoid, difficult to escape from",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1306",
    "hanzi": "难能可贵",
    "pinyin": "nán néng kě guì",
    "english": "rare and precious, valuable, remarkable",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1307",
    "hanzi": "恼火",
    "pinyin": "nǎo huǒ",
    "english": "to get angry, irritated, to annoy, to aggravate, annoying",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1308",
    "hanzi": "内涵",
    "pinyin": "nèi hán",
    "english": "meaning, content, essential properties implied or reflected by a notion, intention, connotation, self-possessed",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1309",
    "hanzi": "内幕",
    "pinyin": "nèi mù",
    "english": "inside story, non-public information, behind the scenes, internal",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1310",
    "hanzi": "内在",
    "pinyin": "nèi zài",
    "english": "intrinsic, innate",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1311",
    "hanzi": "能量",
    "pinyin": "néng liàng",
    "english": "energy, capabilities",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1312",
    "hanzi": "嗯",
    "pinyin": "en",
    "english": "interjection indicating approval, appreciation or agreement",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1313",
    "hanzi": "拟定",
    "pinyin": "nǐ dìng",
    "english": "to draw up, to draft, to formulate",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1314",
    "hanzi": "年度",
    "pinyin": "nián dù",
    "english": "year (e.g. school year, fiscal year), annual",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1315",
    "hanzi": "捏",
    "pinyin": "niē",
    "english": "to pinch (with one's fingers), to knead, to make up",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1316",
    "hanzi": "拧",
    "pinyin": "níng",
    "english": "to pinch, wring",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1317",
    "hanzi": "凝固",
    "pinyin": "níng gù",
    "english": "to freeze, to solidify, to congeal, fig. with rapt attention",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1318",
    "hanzi": "凝聚",
    "pinyin": "níng jù",
    "english": "to condense, to coagulate, coacervation (i.e. form tiny droplets), aggregation, coherent",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1319",
    "hanzi": "凝视",
    "pinyin": "níng shì",
    "english": "to gaze at, to fix one's eyes on",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1320",
    "hanzi": "宁肯",
    "pinyin": "nìng kěn",
    "english": "would rather..., it would be better..., would prefer",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1321",
    "hanzi": "宁愿",
    "pinyin": "nìng yuàn",
    "english": "would rather, better",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1322",
    "hanzi": "纽扣儿",
    "pinyin": "niǔ kòu ér",
    "english": "Buttons children",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1323",
    "hanzi": "扭转",
    "pinyin": "niǔ zhuǎn",
    "english": "to reverse, to turn around (an undesirable situation)",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1324",
    "hanzi": "浓厚",
    "pinyin": "nóng hòu",
    "english": "dense, thick (fog, clouds etc), to have a strong interest in, deep, fully saturated (color)",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1325",
    "hanzi": "农历",
    "pinyin": "nóng lì",
    "english": "the traditional Chinese calendar, the lunar calendar",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1326",
    "hanzi": "奴隶",
    "pinyin": "nú lì",
    "english": "slave",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1327",
    "hanzi": "挪",
    "pinyin": "nuó",
    "english": "to shift, to move",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1328",
    "hanzi": "虐待",
    "pinyin": "nvè dài",
    "english": "to mistreat, to maltreat, to abuse, mistreatment, maltreatment",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1329",
    "hanzi": "哦",
    "pinyin": "ò",
    "english": "oh (interjection indicating that one has just learned sth)",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1330",
    "hanzi": "殴打",
    "pinyin": "ōu dǎ",
    "english": "to beat up, to come to blows, battery (law)",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1331",
    "hanzi": "欧洲",
    "pinyin": "Oū zhōu",
    "english": "Europe, European",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1332",
    "hanzi": "呕吐",
    "pinyin": "ǒu tù",
    "english": "to vomit",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1333",
    "hanzi": "趴",
    "pinyin": "pā",
    "english": "to lie on one's stomach, to lean forward, resting one's upper body (on a desktop etc), (Taiwan) percent",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1334",
    "hanzi": "排斥",
    "pinyin": "pái chì",
    "english": "to reject, to exclude, to eliminate, to remove, to repel",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1335",
    "hanzi": "排除",
    "pinyin": "pái chú",
    "english": "to eliminate, to get rid of, to remove",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1336",
    "hanzi": "排放",
    "pinyin": "pái fàng",
    "english": "emission, discharge, exhaust (gas etc)",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1337",
    "hanzi": "徘徊",
    "pinyin": "pái huái",
    "english": "to dither, to hesitate, to pace back and forth, by ext. to hover around, to linger",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1338",
    "hanzi": "派别",
    "pinyin": "pài bié",
    "english": "denomination, group, school, faction, school of thought",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1339",
    "hanzi": "派遣",
    "pinyin": "pài qiǎn",
    "english": "to send (on a mission), to dispatch",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1340",
    "hanzi": "攀登",
    "pinyin": "pān dēng",
    "english": "to climb, to pull oneself up, to clamber, to scale, fig. to forge ahead in the face of hardships and danger",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1341",
    "hanzi": "盘旋",
    "pinyin": "pán xuán",
    "english": "to spiral, to circle, to go around, to hover, to orbit",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1342",
    "hanzi": "畔",
    "pinyin": "pàn",
    "english": "bank, field-path",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1343",
    "hanzi": "判决",
    "pinyin": "pàn jué",
    "english": "judgment (by a court of law), to pass judgment on, to sentence",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1344",
    "hanzi": "庞大",
    "pinyin": "páng dà",
    "english": "huge, enormous, tremendous",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1345",
    "hanzi": "抛弃",
    "pinyin": "pāo qì",
    "english": "to abandon, to discard, to renounce, to dump (sb)",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1346",
    "hanzi": "泡沫",
    "pinyin": "pào mò",
    "english": "foam, (soap) bubble, (economic) bubble",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1347",
    "hanzi": "培训",
    "pinyin": "péi xùn",
    "english": "to cultivate, to train, to groom, training",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1348",
    "hanzi": "培育",
    "pinyin": "péi yù",
    "english": "to train, to breed",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1349",
    "hanzi": "配备",
    "pinyin": "pèi bèi",
    "english": "to allocate, to provide, to outfit with",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1350",
    "hanzi": "配偶",
    "pinyin": "pèi ǒu",
    "english": "consort, mate, spouse",
    "level": "HSK 6",
    "lesson": 27
  },
  {
    "id": "HSK6-1351",
    "hanzi": "配套",
    "pinyin": "pèi tào",
    "english": "to form a complete set, coherent",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1352",
    "hanzi": "盆地",
    "pinyin": "pén dì",
    "english": "basin (low-lying geographical feature), depression",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1353",
    "hanzi": "烹饪",
    "pinyin": "pēng rèn",
    "english": "cooking, culinary arts",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1354",
    "hanzi": "捧",
    "pinyin": "pěng",
    "english": "to clasp, to cup the hands, to hold up with both hands, to offer (esp. in cupped hands), to praise, to flatter",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1355",
    "hanzi": "劈",
    "pinyin": "pī",
    "english": "to hack, to chop, to split open, (of lightning) to strike",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1356",
    "hanzi": "批发",
    "pinyin": "pī fā",
    "english": "wholesale, bulk trade, distribution",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1357",
    "hanzi": "批判",
    "pinyin": "pī pàn",
    "english": "to criticize, critique",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1358",
    "hanzi": "疲惫",
    "pinyin": "pí bèi",
    "english": "beaten, exhausted, tired",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1359",
    "hanzi": "疲倦",
    "pinyin": "pí juàn",
    "english": "to tire, tired",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1360",
    "hanzi": "皮革",
    "pinyin": "pí gé",
    "english": "leather",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1361",
    "hanzi": "屁股",
    "pinyin": "pì gu",
    "english": "buttocks, bottom, butt, back part",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1362",
    "hanzi": "譬如",
    "pinyin": "pì rú",
    "english": "for example, for instance, such as",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1363",
    "hanzi": "偏差",
    "pinyin": "piān chā",
    "english": "bias, deviation",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1364",
    "hanzi": "偏见",
    "pinyin": "piān jiàn",
    "english": "prejudice",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1365",
    "hanzi": "偏僻",
    "pinyin": "piān pì",
    "english": "remote, desolate, far from the city",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1366",
    "hanzi": "偏偏",
    "pinyin": "piān piān",
    "english": "(indicates that sth turns out just the opposite of what one would expect or what would be normal), unfortunately, against expectations",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1367",
    "hanzi": "片断",
    "pinyin": "piàn duàn",
    "english": "section, fragment, segment",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1368",
    "hanzi": "片刻",
    "pinyin": "piàn kè",
    "english": "short period of time, a moment",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1369",
    "hanzi": "飘扬",
    "pinyin": "piāo yáng",
    "english": "to wave, to flutter, to fly",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1370",
    "hanzi": "漂浮",
    "pinyin": "piāo fú",
    "english": "to float, to hover, to drift (also fig., to lead a wandering life), to rove, showy, superficial",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1371",
    "hanzi": "拼搏",
    "pinyin": "pīn bó",
    "english": "to struggle, to wrestle",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1372",
    "hanzi": "拼命",
    "pinyin": "pīn mìng",
    "english": "to do one's utmost, with all one's might, at all costs, (to work or fight) as if one's life depends on it",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1373",
    "hanzi": "频繁",
    "pinyin": "pín fán",
    "english": "frequently, often",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1374",
    "hanzi": "频率",
    "pinyin": "pín lǜ",
    "english": "frequency",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1375",
    "hanzi": "贫乏",
    "pinyin": "pín fá",
    "english": "lack, incomplete",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1376",
    "hanzi": "贫困",
    "pinyin": "pín kùn",
    "english": "impoverished, poverty",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1377",
    "hanzi": "品尝",
    "pinyin": "pǐn cháng",
    "english": "to taste a small amount, to sample",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1378",
    "hanzi": "品德",
    "pinyin": "pǐn dé",
    "english": "moral character",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1379",
    "hanzi": "品行",
    "pinyin": "pǐn xíng",
    "english": "behavior, moral conduct",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1380",
    "hanzi": "品质",
    "pinyin": "pǐn zhì",
    "english": "quality",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1381",
    "hanzi": "平凡",
    "pinyin": "píng fán",
    "english": "commonplace, ordinary, mediocre",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1382",
    "hanzi": "平面",
    "pinyin": "píng miàn",
    "english": "plane (flat surface), print media",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1383",
    "hanzi": "平坦",
    "pinyin": "píng tǎn",
    "english": "level, even, smooth, flat",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1384",
    "hanzi": "平行",
    "pinyin": "píng xíng",
    "english": "parallel, of equal rank, simultaneous",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1385",
    "hanzi": "平原",
    "pinyin": "píng yuán",
    "english": "field, plain",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1386",
    "hanzi": "评估",
    "pinyin": "píng gū",
    "english": "to evaluate, to assess, assessment, evaluation",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1387",
    "hanzi": "评论",
    "pinyin": "píng lùn",
    "english": "to comment on, to discuss, comment, commentary",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1388",
    "hanzi": "屏障",
    "pinyin": "píng zhàng",
    "english": "protective screen",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1389",
    "hanzi": "坡",
    "pinyin": "pō",
    "english": "slope, sloping, slanted",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1390",
    "hanzi": "泼",
    "pinyin": "pō",
    "english": "to splash, to spill, rough and coarse, brutish",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1391",
    "hanzi": "颇",
    "pinyin": "pō",
    "english": "rather, quite, considerably (Taiwan pr. ), oblique, inclined, slanting",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1392",
    "hanzi": "破例",
    "pinyin": "pò lì",
    "english": "to make an exception",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1393",
    "hanzi": "迫不及待",
    "pinyin": "pò bù jí dài",
    "english": "impatient (idiom); in a hurry, itching to get on with it",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1394",
    "hanzi": "迫害",
    "pinyin": "pò hài",
    "english": "to persecute, persecution",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1395",
    "hanzi": "魄力",
    "pinyin": "pò lì",
    "english": "courage, daring, boldness, resolution, drive",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1396",
    "hanzi": "扑",
    "pinyin": "pū",
    "english": "to throw oneself at, to pounce on, to devote one's energies, to flap, to flutter, to dab, to pat, to bend over",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1397",
    "hanzi": "铺",
    "pinyin": "pū",
    "english": "to spread, to display, to set up, (old) holder for door-knocker",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1398",
    "hanzi": "普及",
    "pinyin": "pǔ jí",
    "english": "popular, to popularize, universal, ubiquitous, pervasive",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1399",
    "hanzi": "朴实",
    "pinyin": "pǔ shí",
    "english": "plain, simple, guileless, down-to-earth, sincere and honest",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1400",
    "hanzi": "瀑布",
    "pinyin": "pù bù",
    "english": "waterfall",
    "level": "HSK 6",
    "lesson": 28
  },
  {
    "id": "HSK6-1401",
    "hanzi": "期望",
    "pinyin": "qī wàng",
    "english": "to have expectations, to earnestly hope, expectation, hope",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1402",
    "hanzi": "期限",
    "pinyin": "qī xiàn",
    "english": "time limit, deadline, allotted time",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1403",
    "hanzi": "欺负",
    "pinyin": "qī fu",
    "english": "to bully",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1404",
    "hanzi": "欺骗",
    "pinyin": "qī piàn",
    "english": "to deceive, to cheat",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1405",
    "hanzi": "凄凉",
    "pinyin": "qī liáng",
    "english": "desolate",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1406",
    "hanzi": "奇妙",
    "pinyin": "qí miào",
    "english": "fantastic, wonderful",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1407",
    "hanzi": "旗袍",
    "pinyin": "qí páo",
    "english": "Chinese-style dress, cheongsam",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1408",
    "hanzi": "旗帜",
    "pinyin": "qí zhì",
    "english": "ensign, flag",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1409",
    "hanzi": "齐全",
    "pinyin": "qí quán",
    "english": "complete",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1410",
    "hanzi": "齐心协力",
    "pinyin": "qí xīn xié lì",
    "english": "to work with a common purpose (idiom); to make concerted efforts, to pull together, to work as one",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1411",
    "hanzi": "歧视",
    "pinyin": "qí shì",
    "english": "to discriminate against, discrimination",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1412",
    "hanzi": "起草",
    "pinyin": "qǐ cǎo",
    "english": "draft (a bill), draw up (plans)",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1413",
    "hanzi": "起初",
    "pinyin": "qǐ chū",
    "english": "originally, at first, at the outset",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1414",
    "hanzi": "起伏",
    "pinyin": "qǐ fú",
    "english": "to move up and down, to undulate, ups and downs",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1415",
    "hanzi": "起哄",
    "pinyin": "qǐ hòng",
    "english": "to heckle, rowdy jeering, to create a disturbance",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1416",
    "hanzi": "起码",
    "pinyin": "qǐ mǎ",
    "english": "at the minimum, at the very least",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1417",
    "hanzi": "起义",
    "pinyin": "qǐ yì",
    "english": "uprising, insurrection, revolt",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1418",
    "hanzi": "起源",
    "pinyin": "qǐ yuán",
    "english": "origin, to originate, to come from",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1419",
    "hanzi": "启程",
    "pinyin": "qǐ chéng",
    "english": "to set out on a journey",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1420",
    "hanzi": "启示",
    "pinyin": "qǐ shì",
    "english": "enlightenment, revelation, apocalypse",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1421",
    "hanzi": "启事",
    "pinyin": "qǐ shì",
    "english": "announcement (written, on billboard, letter, newspaper or website), to post information, a notice",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1422",
    "hanzi": "乞丐",
    "pinyin": "qǐ gài",
    "english": "beggar",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1423",
    "hanzi": "岂有此理",
    "pinyin": "qǐ yǒu cǐ lǐ",
    "english": "how can this be so? (idiom); preposterous, ridiculous, absurd",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1424",
    "hanzi": "器材",
    "pinyin": "qì cái",
    "english": "equipment, material",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1425",
    "hanzi": "器官",
    "pinyin": "qì guān",
    "english": "organ (part of body tissue), apparatus",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1426",
    "hanzi": "气概",
    "pinyin": "qì gài",
    "english": "lofty quality, mettle, spirit",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1427",
    "hanzi": "气功",
    "pinyin": "qì gōng",
    "english": "qigong, a system of deep breathing exercises",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1428",
    "hanzi": "气魄",
    "pinyin": "qì pò",
    "english": "spirit, boldness, positive outlook, imposing attitude",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1429",
    "hanzi": "气色",
    "pinyin": "qì sè",
    "english": "complexion",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1430",
    "hanzi": "气势",
    "pinyin": "qì shì",
    "english": "imposing manner, loftiness, grandeur, energetic looks, vigor",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1431",
    "hanzi": "气味",
    "pinyin": "qì wèi",
    "english": "odor, scent",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1432",
    "hanzi": "气象",
    "pinyin": "qì xiàng",
    "english": "meteorological feature, meteorology, atmosphere, ambience, scene",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1433",
    "hanzi": "气压",
    "pinyin": "qì yā",
    "english": "atmospheric pressure, barometric pressure",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1434",
    "hanzi": "迄今为止",
    "pinyin": "qì jīn wéi zhǐ",
    "english": "so far, up to now, still (not)",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1435",
    "hanzi": "掐",
    "pinyin": "qiā",
    "english": "to pick (flowers), to pinch, to nip, to pinch off, to clutch, (slang) to fight",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1436",
    "hanzi": "恰当",
    "pinyin": "qià dàng",
    "english": "appropriate, suitable",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1437",
    "hanzi": "恰到好处",
    "pinyin": "qià dào hǎo chù",
    "english": "it's just perfect, it's just right",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1438",
    "hanzi": "恰巧",
    "pinyin": "qià qiǎo",
    "english": "fortunately, unexpectedly, by coincidence",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1439",
    "hanzi": "洽谈",
    "pinyin": "qià tán",
    "english": "to discuss",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1440",
    "hanzi": "牵扯",
    "pinyin": "qiān chě",
    "english": "to involve, to implicate",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1441",
    "hanzi": "牵制",
    "pinyin": "qiān zhì",
    "english": "to control, to curb, to restrict, to impede, to pin down (enemy troops)",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1442",
    "hanzi": "千方百计",
    "pinyin": "qiān fāng bǎi jì",
    "english": "lit. thousand ways, a hundred plans (idiom); by every possible means",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1443",
    "hanzi": "签订",
    "pinyin": "qiān dìng",
    "english": "to agree to and sign (a treaty etc)",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1444",
    "hanzi": "签署",
    "pinyin": "qiān shǔ",
    "english": "to sign (an agreement)",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1445",
    "hanzi": "迁就",
    "pinyin": "qiān jiù",
    "english": "to yield, to adapt to, to accommodate to (sth)",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1446",
    "hanzi": "迁徙",
    "pinyin": "qiān xǐ",
    "english": "to migrate, to move",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1447",
    "hanzi": "谦逊",
    "pinyin": "qiān xùn",
    "english": "humble, modest, unpretentious, modesty",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1448",
    "hanzi": "前景",
    "pinyin": "qián jǐng",
    "english": "foreground, vista, (future) prospects, perspective",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1449",
    "hanzi": "前提",
    "pinyin": "qián tí",
    "english": "premise, precondition, prerequisite",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1450",
    "hanzi": "潜力",
    "pinyin": "qián lì",
    "english": "potential, capacity",
    "level": "HSK 6",
    "lesson": 29
  },
  {
    "id": "HSK6-1451",
    "hanzi": "潜水",
    "pinyin": "qián shuǐ",
    "english": "to dive, to go under water, lurker (Internet slang for sb who reads forum posts but never replies)",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1452",
    "hanzi": "潜移默化",
    "pinyin": "qián yí mò huà",
    "english": "imperceptible influence, to influence secretly",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1453",
    "hanzi": "谴责",
    "pinyin": "qiǎn zé",
    "english": "to denounce, to condemn, to criticize, condemnation, criticism",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1454",
    "hanzi": "强制",
    "pinyin": "qiáng zhì",
    "english": "to enforce, enforcement, forcibly, compulsory",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1455",
    "hanzi": "抢劫",
    "pinyin": "qiǎng jié",
    "english": "to rob, looting",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1456",
    "hanzi": "抢救",
    "pinyin": "qiǎng jiù",
    "english": "rescue",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1457",
    "hanzi": "强迫",
    "pinyin": "qiǎng pò",
    "english": "to compel, to force",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1458",
    "hanzi": "桥梁",
    "pinyin": "qiáo liáng",
    "english": "bridge, fig. connection between two areas",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1459",
    "hanzi": "翘",
    "pinyin": "qiào",
    "english": "to stick up, to rise on one end, to tilt",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1460",
    "hanzi": "锲而不舍",
    "pinyin": "qiè ér bù shě",
    "english": "to chip away at a task and not abandon it (idiom); to chisel away at sth, to persevere, unflagging efforts",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1461",
    "hanzi": "切实",
    "pinyin": "qiè shí",
    "english": "feasible, earnestly, conscientiously, realistic, practical",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1462",
    "hanzi": "亲热",
    "pinyin": "qīn rè",
    "english": "affectionate, intimate, warm-hearted",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1463",
    "hanzi": "亲身",
    "pinyin": "qīn shēn",
    "english": "personal, oneself",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1464",
    "hanzi": "侵犯",
    "pinyin": "qīn fàn",
    "english": "to infringe on, to encroach on, to violate",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1465",
    "hanzi": "钦佩",
    "pinyin": "qīn pèi",
    "english": "to admire, to look up to, to respect sb greatly",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1466",
    "hanzi": "勤俭",
    "pinyin": "qín jiǎn",
    "english": "hardworking and frugal",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1467",
    "hanzi": "勤恳",
    "pinyin": "qín kěn",
    "english": "diligent and attentive, assiduous, sincere",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1468",
    "hanzi": "氢",
    "pinyin": "qīng",
    "english": "hydrogen (chemistry)",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1469",
    "hanzi": "轻而易举",
    "pinyin": "qīng ér yì jǔ",
    "english": "easy, with no difficulty",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1470",
    "hanzi": "清澈",
    "pinyin": "qīng chè",
    "english": "clear, limpid",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1471",
    "hanzi": "清晨",
    "pinyin": "qīng chén",
    "english": "early morning",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1472",
    "hanzi": "清除",
    "pinyin": "qīng chú",
    "english": "to eliminate, to get rid of",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1473",
    "hanzi": "清洁",
    "pinyin": "qīng jié",
    "english": "clean",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1474",
    "hanzi": "清理",
    "pinyin": "qīng lǐ",
    "english": "to clear up, to tidy up, to dispose of",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1475",
    "hanzi": "清晰",
    "pinyin": "qīng xī",
    "english": "clear, distinct",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1476",
    "hanzi": "清醒",
    "pinyin": "qīng xǐng",
    "english": "clear-headed, sober, awake",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1477",
    "hanzi": "清真",
    "pinyin": "qīng zhēn",
    "english": "Islamic, Muslim, halal (of food), clean, pure",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1478",
    "hanzi": "倾听",
    "pinyin": "qīng tīng",
    "english": "to listen attentively",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1479",
    "hanzi": "倾向",
    "pinyin": "qīng xiàng",
    "english": "trend, tendency, orientation",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1480",
    "hanzi": "倾斜",
    "pinyin": "qīng xié",
    "english": "to incline, to lean, to slant, to slope, to tilt",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1481",
    "hanzi": "晴朗",
    "pinyin": "qíng lǎng",
    "english": "sunny and cloudless",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1482",
    "hanzi": "情报",
    "pinyin": "qíng bào",
    "english": "(spy) intelligence, information-gathering",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1483",
    "hanzi": "情节",
    "pinyin": "qíng jié",
    "english": "plot, circumstances",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1484",
    "hanzi": "情理",
    "pinyin": "qíng lǐ",
    "english": "reason, sense",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1485",
    "hanzi": "情形",
    "pinyin": "qíng xing",
    "english": "circumstances, situation",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1486",
    "hanzi": "请柬",
    "pinyin": "qǐng jiǎn",
    "english": "invitation card, written invitation",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1487",
    "hanzi": "请教",
    "pinyin": "qǐng jiào",
    "english": "to ask for guidance, to consult",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1488",
    "hanzi": "请示",
    "pinyin": "qǐng shì",
    "english": "to ask for instructions",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1489",
    "hanzi": "请帖",
    "pinyin": "qǐng tiě",
    "english": "invitation card, written invitation",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1490",
    "hanzi": "丘陵",
    "pinyin": "qiū líng",
    "english": "hills",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1491",
    "hanzi": "区分",
    "pinyin": "qū fēn",
    "english": "to differentiate, to find differing aspects",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1492",
    "hanzi": "区域",
    "pinyin": "qū yù",
    "english": "area, region, district",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1493",
    "hanzi": "屈服",
    "pinyin": "qū fú",
    "english": "to surrender, to yield",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1494",
    "hanzi": "曲折",
    "pinyin": "qū zhé",
    "english": "complicated, winding",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1495",
    "hanzi": "驱逐",
    "pinyin": "qū zhú",
    "english": "to expel, to deport, banishment",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1496",
    "hanzi": "渠道",
    "pinyin": "qú dào",
    "english": "irrigation ditch, medium or channel of communication",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1497",
    "hanzi": "取缔",
    "pinyin": "qǔ dì",
    "english": "to ban, to prohibit (publications, customs etc), to outlaw, to suppress (violators)",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1498",
    "hanzi": "曲子",
    "pinyin": "qǔ zi",
    "english": "poem for singing, tune, music",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1499",
    "hanzi": "趣味",
    "pinyin": "qù wèi",
    "english": "fun, interest, delight, taste, liking, preference",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1500",
    "hanzi": "圈套",
    "pinyin": "quān tào",
    "english": "trap, snare, trick",
    "level": "HSK 6",
    "lesson": 30
  },
  {
    "id": "HSK6-1501",
    "hanzi": "全局",
    "pinyin": "quán jú",
    "english": "overall situation",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1502",
    "hanzi": "全力以赴",
    "pinyin": "quán lì yǐ fù",
    "english": "to do at all costs, to make an all-out effort",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1503",
    "hanzi": "权衡",
    "pinyin": "quán héng",
    "english": "to weigh, to consider, to assess, to balance, to trade-off",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1504",
    "hanzi": "权威",
    "pinyin": "quán wēi",
    "english": "authority, authoritative, power and prestige",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1505",
    "hanzi": "权益",
    "pinyin": "quán yì",
    "english": "rights and benefits",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1506",
    "hanzi": "拳头",
    "pinyin": "quán tou",
    "english": "fist, clenched fist, competitive (product)",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1507",
    "hanzi": "犬",
    "pinyin": "quǎn",
    "english": "dog",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1508",
    "hanzi": "缺口",
    "pinyin": "quē kǒu",
    "english": "nick, jag, gap, shortfall",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1509",
    "hanzi": "缺席",
    "pinyin": "quē xí",
    "english": "absence, absent",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1510",
    "hanzi": "缺陷",
    "pinyin": "quē xiàn",
    "english": "defect, flaw, physical defect",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1511",
    "hanzi": "瘸",
    "pinyin": "qué",
    "english": "lame",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1512",
    "hanzi": "确保",
    "pinyin": "què bǎo",
    "english": "to ensure, to guarantee",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1513",
    "hanzi": "确立",
    "pinyin": "què lì",
    "english": "to establish, to institute",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1514",
    "hanzi": "确切",
    "pinyin": "què qiè",
    "english": "definite, exact, precise",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1515",
    "hanzi": "确信",
    "pinyin": "què xìn",
    "english": "to be convinced, to be sure, to firmly believe, to be positive that, definite news",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1516",
    "hanzi": "群众",
    "pinyin": "qún zhòng",
    "english": "mass, multitude, the masses",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1517",
    "hanzi": "染",
    "pinyin": "rǎn",
    "english": "to dye, to catch (a disease), to acquire (bad habits etc), to contaminate, to add colour washes to a painting",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1518",
    "hanzi": "让步",
    "pinyin": "ràng bù",
    "english": "to concede, to give in, to yield, a concession",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1519",
    "hanzi": "饶恕",
    "pinyin": "ráo shù",
    "english": "to forgive, to pardon, to spare",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1520",
    "hanzi": "扰乱",
    "pinyin": "rǎo luàn",
    "english": "to disturb, to perturb, to harass",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1521",
    "hanzi": "惹祸",
    "pinyin": "rě huò",
    "english": "stirring up trouble, to invite disaster",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1522",
    "hanzi": "热泪盈眶",
    "pinyin": "rè lèi yíng kuàng",
    "english": "eyes brimming with tears of excitement (idiom), extremely moved",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1523",
    "hanzi": "热门",
    "pinyin": "rè mén",
    "english": "popular, hot, in vogue",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1524",
    "hanzi": "人道",
    "pinyin": "rén dào",
    "english": "human sympathy, humanitarianism, humane, the \"human way\", one of the stages in the cycle of reincarnation (Buddhism), sexual intercourse",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1525",
    "hanzi": "人格",
    "pinyin": "rén gé",
    "english": "personality, integrity, dignity",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1526",
    "hanzi": "人工",
    "pinyin": "rén gōng",
    "english": "artificial, manpower, manual work",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1527",
    "hanzi": "人家",
    "pinyin": "rén jia",
    "english": "other people, sb else, he, she or they, I, me (referring to oneself as \"one\" or \"people\")",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1528",
    "hanzi": "人间",
    "pinyin": "rén jiān",
    "english": "the human world, the earth",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1529",
    "hanzi": "人士",
    "pinyin": "rén shì",
    "english": "person, figure, public figure",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1530",
    "hanzi": "人为",
    "pinyin": "rén wéi",
    "english": "artificial, man-made, having human cause or origin, human attempt or effort",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1531",
    "hanzi": "人性",
    "pinyin": "rén xìng",
    "english": "human nature, humanity, human, the totality of human attributes",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1532",
    "hanzi": "人质",
    "pinyin": "rén zhì",
    "english": "hostage",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1533",
    "hanzi": "仁慈",
    "pinyin": "rén cí",
    "english": "benevolent, charitable, kind, kindly, kindness, merciful",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1534",
    "hanzi": "忍耐",
    "pinyin": "rěn nài",
    "english": "to show restraint, to repress (anger etc), to exercise patience",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1535",
    "hanzi": "忍受",
    "pinyin": "rěn shòu",
    "english": "to bear, to endure",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1536",
    "hanzi": "认定",
    "pinyin": "rèn dìng",
    "english": "to maintain (that sth is true), to determine (a fact), determination (of an amount), of the firm opinion, to believe firmly, to set one's mind on, to identify with",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1537",
    "hanzi": "认可",
    "pinyin": "rèn kě",
    "english": "to approve, approval, acknowledgment, OK",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1538",
    "hanzi": "任命",
    "pinyin": "rèn mìng",
    "english": "to appoint and nominate, (job) appointment",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1539",
    "hanzi": "任性",
    "pinyin": "rèn xìng",
    "english": "willful, headstrong, uninhibited",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1540",
    "hanzi": "任意",
    "pinyin": "rèn yì",
    "english": "arbitrary, at will, at random",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1541",
    "hanzi": "任重道远",
    "pinyin": "rèn zhòng dào yuǎn",
    "english": "a heavy load and a long road, fig. to bear heavy responsibilities through a long struggle (cf Confucian Analects, 8.7)",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1542",
    "hanzi": "仍旧",
    "pinyin": "réng jiù",
    "english": "still (remaining), to remain (the same), yet",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1543",
    "hanzi": "日新月异",
    "pinyin": "rì xīn yuè yì",
    "english": "daily renewal, monthly change (idiom); every day sees new developments, rapid progress",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1544",
    "hanzi": "日益",
    "pinyin": "rì yì",
    "english": "day by day, more and more, increasingly, more and more with each passing day",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1545",
    "hanzi": "融洽",
    "pinyin": "róng qià",
    "english": "harmonious, friendly relations, on good terms with one another",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1546",
    "hanzi": "溶解",
    "pinyin": "róng jiě",
    "english": "to dissolve",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1547",
    "hanzi": "容貌",
    "pinyin": "róng mào",
    "english": "one's appearance, one's aspect, looks, features",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1548",
    "hanzi": "容纳",
    "pinyin": "róng nà",
    "english": "to hold, to contain, to accommodate, to tolerate (different opinions)",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1549",
    "hanzi": "容器",
    "pinyin": "róng qì",
    "english": "receptacle, vessel",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1550",
    "hanzi": "容忍",
    "pinyin": "róng rěn",
    "english": "to put up with, to tolerate",
    "level": "HSK 6",
    "lesson": 31
  },
  {
    "id": "HSK6-1551",
    "hanzi": "揉",
    "pinyin": "róu",
    "english": "to knead, to massage, to rub",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1552",
    "hanzi": "柔和",
    "pinyin": "róu hé",
    "english": "gentle, soft",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1553",
    "hanzi": "弱点",
    "pinyin": "ruò diǎn",
    "english": "weak point, failing",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1554",
    "hanzi": "若干",
    "pinyin": "ruò gān",
    "english": "a certain number or amount, how many?, how much?",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1555",
    "hanzi": "撒谎",
    "pinyin": "sā huǎng",
    "english": "to tell lies",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1556",
    "hanzi": "腮",
    "pinyin": "sāi",
    "english": "cheek",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1557",
    "hanzi": "三角",
    "pinyin": "sān jiǎo",
    "english": "triangle",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1558",
    "hanzi": "散文",
    "pinyin": "sǎn wén",
    "english": "prose, essay",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1559",
    "hanzi": "散布",
    "pinyin": "sàn bù",
    "english": "to disseminate",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1560",
    "hanzi": "散发",
    "pinyin": "sàn fā",
    "english": "to distribute, to emit, to issue",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1561",
    "hanzi": "丧失",
    "pinyin": "sàng shī",
    "english": "to lose, to forfeit",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1562",
    "hanzi": "嫂子",
    "pinyin": "sǎo zi",
    "english": "(informal) older brother's wife, sister-in-law",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1563",
    "hanzi": "色彩",
    "pinyin": "sè cǎi",
    "english": "tint, coloring, coloration, character",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1564",
    "hanzi": "刹车",
    "pinyin": "shā chē",
    "english": "to brake (when driving), to stop, to switch off, to check (bad habits), a brake",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1565",
    "hanzi": "啥",
    "pinyin": "shá",
    "english": "dialectal equivalent of 什麼|什么[shén me]",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1566",
    "hanzi": "筛选",
    "pinyin": "shāi xuǎn",
    "english": "to filter",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1567",
    "hanzi": "山脉",
    "pinyin": "shān mài",
    "english": "mountain range",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1568",
    "hanzi": "闪烁",
    "pinyin": "shǎn shuò",
    "english": "flickering, twinkling, evasive, vague (of speech)",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1569",
    "hanzi": "擅长",
    "pinyin": "shàn cháng",
    "english": "to be good at, to be expert in",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1570",
    "hanzi": "擅自",
    "pinyin": "shàn zì",
    "english": "without permission, of one's own initiative",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1571",
    "hanzi": "商标",
    "pinyin": "shāng biāo",
    "english": "trademark, logo",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1572",
    "hanzi": "伤脑筋",
    "pinyin": "shāng nǎo jīn",
    "english": "knotty, troublesome, bothersome",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1573",
    "hanzi": "上级",
    "pinyin": "shàng jí",
    "english": "higher authorities, superiors",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1574",
    "hanzi": "上进心",
    "pinyin": "shàng jìn xīn",
    "english": "motivation, ambition",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1575",
    "hanzi": "上任",
    "pinyin": "shàng rèn",
    "english": "to take office",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1576",
    "hanzi": "上瘾",
    "pinyin": "shàng yǐn",
    "english": "to get into a habit, to become addicted",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1577",
    "hanzi": "上游",
    "pinyin": "shàng yóu",
    "english": "upper reaches (of a river), upper level, upper echelon, upstream",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1578",
    "hanzi": "捎",
    "pinyin": "shāo",
    "english": "to bring sth to sb, to deliver",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1579",
    "hanzi": "梢",
    "pinyin": "shāo",
    "english": "tip of branch",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1580",
    "hanzi": "哨",
    "pinyin": "shào",
    "english": "a whistle, sentry",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1581",
    "hanzi": "奢侈",
    "pinyin": "shē chǐ",
    "english": "luxurious, extravagant, wasteful",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1582",
    "hanzi": "设立",
    "pinyin": "shè lì",
    "english": "to set up, to establish",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1583",
    "hanzi": "设想",
    "pinyin": "shè xiǎng",
    "english": "to imagine, to assume, to envisage, tentative plan, to have consideration for",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1584",
    "hanzi": "设置",
    "pinyin": "shè zhì",
    "english": "to set up, to install",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1585",
    "hanzi": "社区",
    "pinyin": "shè qū",
    "english": "community",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1586",
    "hanzi": "涉及",
    "pinyin": "shè jí",
    "english": "to involve, to touch upon (a topic)",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1587",
    "hanzi": "摄取",
    "pinyin": "shè qǔ",
    "english": "absorb (nutrition), take a photo",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1588",
    "hanzi": "摄氏度",
    "pinyin": "shè shì dù",
    "english": "degrees centigrade",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1589",
    "hanzi": "深奥",
    "pinyin": "shēn ào",
    "english": "profound, abstruse, recondite, profoundly",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1590",
    "hanzi": "深沉",
    "pinyin": "shēn chén",
    "english": "deep, extreme, dull, low pitched (sound)",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1591",
    "hanzi": "深情厚谊",
    "pinyin": "shēn qíng hòu yì",
    "english": "deep friendship",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1592",
    "hanzi": "申报",
    "pinyin": "shēn bào",
    "english": "to report (to the authorities), to declare (to customs)",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1593",
    "hanzi": "绅士",
    "pinyin": "shēn shì",
    "english": "gentleman",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1594",
    "hanzi": "呻吟",
    "pinyin": "shēn yín",
    "english": "to moan, to groan",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1595",
    "hanzi": "神奇",
    "pinyin": "shén qí",
    "english": "magical, mystical, miraculous",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1596",
    "hanzi": "神气",
    "pinyin": "shén qì",
    "english": "expression, manner, spirited, vigorous",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1597",
    "hanzi": "神情",
    "pinyin": "shén qíng",
    "english": "look, expression",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1598",
    "hanzi": "神色",
    "pinyin": "shén sè",
    "english": "expression, look",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1599",
    "hanzi": "神圣",
    "pinyin": "shén shèng",
    "english": "divine, hallow, holy, sacred",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1600",
    "hanzi": "神态",
    "pinyin": "shén tài",
    "english": "appearance, manner, bearing, deportment, look, expression, mien",
    "level": "HSK 6",
    "lesson": 32
  },
  {
    "id": "HSK6-1601",
    "hanzi": "神仙",
    "pinyin": "shén xiān",
    "english": "Daoist immortal, supernatural entity, (in modern fiction) fairy, elf, leprechaun etc, fig. lighthearted person",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1602",
    "hanzi": "审查",
    "pinyin": "shěn chá",
    "english": "to examine, to investigate, to censor out, censorship",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1603",
    "hanzi": "审理",
    "pinyin": "shěn lǐ",
    "english": "to hear (a case)",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1604",
    "hanzi": "审美",
    "pinyin": "shěn měi",
    "english": "esthetics, appreciating the arts, taste",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1605",
    "hanzi": "审判",
    "pinyin": "shěn pàn",
    "english": "a trial, to try sb",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1606",
    "hanzi": "渗透",
    "pinyin": "shèn tòu",
    "english": "to permeate, to infiltrate, to pervade, osmosis",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1607",
    "hanzi": "慎重",
    "pinyin": "shèn zhòng",
    "english": "cautious, careful, prudent",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1608",
    "hanzi": "生存",
    "pinyin": "shēng cún",
    "english": "to exist, to survive",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1609",
    "hanzi": "生机",
    "pinyin": "shēng jī",
    "english": "opportunity to live, to reprieve from death, life force, vitality",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1610",
    "hanzi": "生理",
    "pinyin": "shēng lǐ",
    "english": "physiology",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1611",
    "hanzi": "生疏",
    "pinyin": "shēng shū",
    "english": "unfamiliar, strange, out of practice, not accustomed",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1612",
    "hanzi": "生态",
    "pinyin": "shēng tài",
    "english": "way of life, ecology",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1613",
    "hanzi": "生物",
    "pinyin": "shēng wù",
    "english": "organism, living creature, life form, biological",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1614",
    "hanzi": "生效",
    "pinyin": "shēng xiào",
    "english": "to take effect, to go into effect",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1615",
    "hanzi": "生锈",
    "pinyin": "shēng xiù",
    "english": "to rust, to grow rusty, to corrode, oxidization",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1616",
    "hanzi": "生育",
    "pinyin": "shēng yù",
    "english": "to bear, to give birth, to grow, to rear, to bring up (children)",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1617",
    "hanzi": "牲畜",
    "pinyin": "shēng chù",
    "english": "domesticated animals, livestock",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1618",
    "hanzi": "声明",
    "pinyin": "shēng míng",
    "english": "statement, declaration, 份[fèn]",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1619",
    "hanzi": "声势",
    "pinyin": "shēng shì",
    "english": "fame and power, prestige, influence, impetus, momentum",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1620",
    "hanzi": "声誉",
    "pinyin": "shēng yù",
    "english": "reputation, fame",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1621",
    "hanzi": "省会",
    "pinyin": "shěng huì",
    "english": "provincial capital",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1622",
    "hanzi": "盛产",
    "pinyin": "shèng chǎn",
    "english": "superabundant, to teem with, to produce in abundance, to abound in",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1623",
    "hanzi": "盛开",
    "pinyin": "shèng kāi",
    "english": "blooming, in full flower",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1624",
    "hanzi": "盛情",
    "pinyin": "shèng qíng",
    "english": "great kindness, magnificent hospitality",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1625",
    "hanzi": "盛行",
    "pinyin": "shèng xíng",
    "english": "to be in vogue, to be prevalent",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1626",
    "hanzi": "胜负",
    "pinyin": "shèng fù",
    "english": "victory or defeat, the outcome of a battle",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1627",
    "hanzi": "失误",
    "pinyin": "shī wù",
    "english": "lapse, mistake, to make a mistake, fault, service fault (in volleyball, tennis etc)",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1628",
    "hanzi": "失踪",
    "pinyin": "shī zōng",
    "english": "to be missing, to disappear, unaccounted for",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1629",
    "hanzi": "师范",
    "pinyin": "shī fàn",
    "english": "teacher-training, pedagogical, normal (school, e.g. Beijing Normal University)",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1630",
    "hanzi": "施加",
    "pinyin": "shī jiā",
    "english": "to exert (effort or pressure)",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1631",
    "hanzi": "施展",
    "pinyin": "shī zhǎn",
    "english": "to use fully, to put to use",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1632",
    "hanzi": "尸体",
    "pinyin": "shī tǐ",
    "english": "dead body, corpse, carcass",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1633",
    "hanzi": "拾",
    "pinyin": "shí",
    "english": "to pick up, to collate or arrange, ten (banker's anti-fraud numeral)",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1634",
    "hanzi": "十足",
    "pinyin": "shí zú",
    "english": "ample, complete, hundred percent, a pure shade (of some color)",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1635",
    "hanzi": "识别",
    "pinyin": "shí bié",
    "english": "to distinguish, to discern",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1636",
    "hanzi": "时差",
    "pinyin": "shí chā",
    "english": "time difference, time lag, jet lag",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1637",
    "hanzi": "时常",
    "pinyin": "shí cháng",
    "english": "often, frequently",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1638",
    "hanzi": "时而",
    "pinyin": "shí ér",
    "english": "occasionally, from time to time",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1639",
    "hanzi": "时光",
    "pinyin": "shí guāng",
    "english": "time, era, period of time",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1640",
    "hanzi": "时机",
    "pinyin": "shí jī",
    "english": "fortunate timing, occasion, opportunity",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1641",
    "hanzi": "时事",
    "pinyin": "shí shì",
    "english": "current trends, the present situation, how things are going",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1642",
    "hanzi": "时装",
    "pinyin": "shí zhuāng",
    "english": "the latest fashion in clothes, fashionable",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1643",
    "hanzi": "实惠",
    "pinyin": "shí huì",
    "english": "tangible benefit, material advantages, advantageous (deal), substantial (discount)",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1644",
    "hanzi": "实力",
    "pinyin": "shí lì",
    "english": "strength",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1645",
    "hanzi": "实施",
    "pinyin": "shí shī",
    "english": "to implement, to carry out",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1646",
    "hanzi": "实事求是",
    "pinyin": "shí shì qiú shì",
    "english": "to seek truth from facts (idiom), to be practical and realistic",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1647",
    "hanzi": "实质",
    "pinyin": "shí zhì",
    "english": "substance, essence",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1648",
    "hanzi": "石油",
    "pinyin": "shí yóu",
    "english": "oil, petroleum",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1649",
    "hanzi": "使命",
    "pinyin": "shǐ mìng",
    "english": "mission (diplomatic or other), set task",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1650",
    "hanzi": "是非",
    "pinyin": "shì fēi",
    "english": "right and wrong, quarrel",
    "level": "HSK 6",
    "lesson": 33
  },
  {
    "id": "HSK6-1651",
    "hanzi": "试图",
    "pinyin": "shì tú",
    "english": "to attempt, to try",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1652",
    "hanzi": "试验",
    "pinyin": "shì yàn",
    "english": "experiment, test, experimental, 個|个[gè]",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1653",
    "hanzi": "势必",
    "pinyin": "shì bì",
    "english": "to be bound to, undoubtedly will",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1654",
    "hanzi": "势力",
    "pinyin": "shì li",
    "english": "power, (ability to) influence",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1655",
    "hanzi": "世代",
    "pinyin": "shì dài",
    "english": "generation, an era, accumulation of years, passing on from generation to generation",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1656",
    "hanzi": "世界观",
    "pinyin": "shì jiè guān",
    "english": "worldview, world outlook, Weltanschauung",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1657",
    "hanzi": "示范",
    "pinyin": "shì fàn",
    "english": "to demonstrate, to show how to do sth, demonstration, a model example",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1658",
    "hanzi": "示威",
    "pinyin": "shì wēi",
    "english": "to demonstrate (as a protest), a demonstration, a military show of force",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1659",
    "hanzi": "示意",
    "pinyin": "shì yì",
    "english": "to hint, to indicate (an idea to sb)",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1660",
    "hanzi": "释放",
    "pinyin": "shì fàng",
    "english": "to release, to set free, to liberate (a prisoner), to discharge",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1661",
    "hanzi": "事故",
    "pinyin": "shì gù",
    "english": "accident, 起, 次[cì]",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1662",
    "hanzi": "事迹",
    "pinyin": "shì jì",
    "english": "deed, past achievement, important event of the past",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1663",
    "hanzi": "事件",
    "pinyin": "shì jiàn",
    "english": "event, happening, incident",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1664",
    "hanzi": "事态",
    "pinyin": "shì tài",
    "english": "situation, existing state of affairs",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1665",
    "hanzi": "事务",
    "pinyin": "shì wù",
    "english": "(political, economic etc) affairs, work",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1666",
    "hanzi": "事项",
    "pinyin": "shì xiàng",
    "english": "matter, item",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1667",
    "hanzi": "事业",
    "pinyin": "shì yè",
    "english": "undertaking, project, activity, (charitable, political or revolutionary) cause, publicly funded institution, enterprise or foundation, career, occupation",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1668",
    "hanzi": "适宜",
    "pinyin": "shì yí",
    "english": "suitable, appropriate",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1669",
    "hanzi": "视力",
    "pinyin": "shì lì",
    "english": "vision, eyesight",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1670",
    "hanzi": "视线",
    "pinyin": "shì xiàn",
    "english": "line of sight",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1671",
    "hanzi": "视野",
    "pinyin": "shì yě",
    "english": "field of view, horizon",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1672",
    "hanzi": "逝世",
    "pinyin": "shì shì",
    "english": "to pass away, to die",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1673",
    "hanzi": "收藏",
    "pinyin": "shōu cáng",
    "english": "to hoard, to collect, collection, to bookmark (internet)",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1674",
    "hanzi": "收缩",
    "pinyin": "shōu suō",
    "english": "to pull back, to shrink, to contract",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1675",
    "hanzi": "收益",
    "pinyin": "shōu yì",
    "english": "earnings, profit",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1676",
    "hanzi": "收音机",
    "pinyin": "shōu yīn jī",
    "english": "radio",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1677",
    "hanzi": "手法",
    "pinyin": "shǒu fǎ",
    "english": "technique, trick, skill",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1678",
    "hanzi": "手势",
    "pinyin": "shǒu shì",
    "english": "gesture, sign, signal",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1679",
    "hanzi": "手艺",
    "pinyin": "shǒu yì",
    "english": "craftmanship, workmanship, handicraft, trade",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1680",
    "hanzi": "首要",
    "pinyin": "shǒu yào",
    "english": "the most important, of chief importance",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1681",
    "hanzi": "守护",
    "pinyin": "shǒu hù",
    "english": "to guard, to protect",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1682",
    "hanzi": "受罪",
    "pinyin": "shòu zuì",
    "english": "to endure, to suffer, hardships, torments, a hard time, a nuisance",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1683",
    "hanzi": "授予",
    "pinyin": "shòu yǔ",
    "english": "to award, to confer",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1684",
    "hanzi": "书法",
    "pinyin": "shū fǎ",
    "english": "calligraphy, handwriting, penmanship",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1685",
    "hanzi": "书籍",
    "pinyin": "shū jí",
    "english": "books, works",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1686",
    "hanzi": "书记",
    "pinyin": "shū ji",
    "english": "secretary, clerk",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1687",
    "hanzi": "书面",
    "pinyin": "shū miàn",
    "english": "in writing, written",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1688",
    "hanzi": "舒畅",
    "pinyin": "shū chàng",
    "english": "happy, entirely free from worry",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1689",
    "hanzi": "疏忽",
    "pinyin": "shū hu",
    "english": "to neglect, to overlook, negligence, carelessness",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1690",
    "hanzi": "数",
    "pinyin": "shǔ",
    "english": "to count, to enumerate, to criticize (i.e. enumerate shortcomings)",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1691",
    "hanzi": "竖",
    "pinyin": "shù",
    "english": "to erect, vertical, vertical stroke (in Chinese characters)",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1692",
    "hanzi": "束",
    "pinyin": "shù",
    "english": "to bind, bunch, bundle, classifier for bunches, bundles, beams of light etc, to control",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1693",
    "hanzi": "束缚",
    "pinyin": "shù fù",
    "english": "to bind, to restrict, to tie, to commit, fetters",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1694",
    "hanzi": "树立",
    "pinyin": "shù lì",
    "english": "to set up, to establish",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1695",
    "hanzi": "数额",
    "pinyin": "shù é",
    "english": "amount, sum of money, fixed number",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1696",
    "hanzi": "数目",
    "pinyin": "shù mù",
    "english": "amount, number",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1697",
    "hanzi": "耍",
    "pinyin": "shuǎ",
    "english": "to play with, to wield, to act (cool etc), to display (a skill, one's temper etc)",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1698",
    "hanzi": "衰老",
    "pinyin": "shuāi lǎo",
    "english": "to age, to deteriorate with age, old and weak",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1699",
    "hanzi": "衰退",
    "pinyin": "shuāi tuì",
    "english": "to decline, to fall, to drop, to falter, a decline, recession (in economics)",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1700",
    "hanzi": "率领",
    "pinyin": "shuài lǐng",
    "english": "to lead, to command, to head",
    "level": "HSK 6",
    "lesson": 34
  },
  {
    "id": "HSK6-1701",
    "hanzi": "涮",
    "pinyin": "shuàn",
    "english": "to rinse, to trick, to fool sb, to cook by dipping finely sliced ingredients briefly in boiling water or soup (generally done at the dining table)",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1702",
    "hanzi": "双胞胎",
    "pinyin": "shuāng bāo tāi",
    "english": "twin",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1703",
    "hanzi": "爽快",
    "pinyin": "shuǎng kuai",
    "english": "refreshed, rejuvenated, frank and straightforward",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1704",
    "hanzi": "水利",
    "pinyin": "shuǐ lì",
    "english": "water conservancy, irrigation works",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1705",
    "hanzi": "水龙头",
    "pinyin": "shuǐ lóng tóu",
    "english": "faucet, tap",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1706",
    "hanzi": "水泥",
    "pinyin": "shuǐ ní",
    "english": "cement",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1707",
    "hanzi": "司法",
    "pinyin": "sī fǎ",
    "english": "judicial, (administration of) justice",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1708",
    "hanzi": "司令",
    "pinyin": "sī lìng",
    "english": "commanding officer",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1709",
    "hanzi": "思念",
    "pinyin": "sī niàn",
    "english": "to think of, to long for, to miss",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1710",
    "hanzi": "思索",
    "pinyin": "sī suǒ",
    "english": "to think deeply, to ponder",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1711",
    "hanzi": "思维",
    "pinyin": "sī wéi",
    "english": "(line of) thought, thinking",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1712",
    "hanzi": "思绪",
    "pinyin": "sī xù",
    "english": "train of thought, emotional state, mood, feeling",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1713",
    "hanzi": "私自",
    "pinyin": "sī zì",
    "english": "private, personal, secretly, without explicit approval",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1714",
    "hanzi": "斯文",
    "pinyin": "sī wén",
    "english": "refined, educate, cultured, intellectual, polite, gentle",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1715",
    "hanzi": "死亡",
    "pinyin": "sǐ wáng",
    "english": "to die, death",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1716",
    "hanzi": "四肢",
    "pinyin": "sì zhī",
    "english": "the four limbs of the body",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1717",
    "hanzi": "肆无忌惮",
    "pinyin": "sì wú jì dàn",
    "english": "absolutely unrestrained, unbridled, without the slightest scruple",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1718",
    "hanzi": "饲养",
    "pinyin": "sì yǎng",
    "english": "to raise, to rear",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1719",
    "hanzi": "耸",
    "pinyin": "sǒng",
    "english": "to excite, to raise up, to shrug, high, lofty, towering",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1720",
    "hanzi": "艘",
    "pinyin": "sōu",
    "english": "classifier for ships, Taiwan pr. [sāo]",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1721",
    "hanzi": "搜索",
    "pinyin": "sōu suǒ",
    "english": "to search, to look for sth, to scour (search meticulously), to look sth up, internet search, database search",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1722",
    "hanzi": "苏醒",
    "pinyin": "sū xǐng",
    "english": "to wake up, to regain consciousness",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1723",
    "hanzi": "俗话",
    "pinyin": "sú huà",
    "english": "common saying, proverb",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1724",
    "hanzi": "塑造",
    "pinyin": "sù zào",
    "english": "to model, to mould, plastic (arts), flexible, to portray (in sculpture or in words)",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1725",
    "hanzi": "素食",
    "pinyin": "sù shí",
    "english": "vegetables, vegetarian food",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1726",
    "hanzi": "素质",
    "pinyin": "sù zhì",
    "english": "inner quality, basic essence, change over time",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1727",
    "hanzi": "诉讼",
    "pinyin": "sù sòng",
    "english": "lawsuit",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1728",
    "hanzi": "算了",
    "pinyin": "suàn le",
    "english": "let it be, let it pass, forget about it",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1729",
    "hanzi": "算数",
    "pinyin": "suàn shù",
    "english": "to count numbers, to keep to one's word, to hold (i.e. to remain valid), to count (i.e. to be important)",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1730",
    "hanzi": "随即",
    "pinyin": "suí jí",
    "english": "immediately, presently, following which",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1731",
    "hanzi": "随身",
    "pinyin": "suí shēn",
    "english": "to (carry) on one's person, to (take) with one",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1732",
    "hanzi": "随手",
    "pinyin": "suí shǒu",
    "english": "conveniently, without extra trouble, while doing it, in passing",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1733",
    "hanzi": "随意",
    "pinyin": "suí yì",
    "english": "as one wishes, according to one's wishes, at will, voluntary, conscious",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1734",
    "hanzi": "岁月",
    "pinyin": "suì yuè",
    "english": "years, passing of time",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1735",
    "hanzi": "隧道",
    "pinyin": "suì dào",
    "english": "tunnel",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1736",
    "hanzi": "损坏",
    "pinyin": "sǔn huài",
    "english": "to damage, to injure",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1737",
    "hanzi": "索赔",
    "pinyin": "suǒ péi",
    "english": "to ask for compensation, to claim damages, claim for damages",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1738",
    "hanzi": "索性",
    "pinyin": "suǒ xìng",
    "english": "you might as well (do it), simply, just",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1739",
    "hanzi": "塌",
    "pinyin": "tā",
    "english": "collapse",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1740",
    "hanzi": "踏实",
    "pinyin": "tā shi",
    "english": "practical, down-to-earth, realistic, firmly based, steadfast, to have peace of mind, free from anxiety",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1741",
    "hanzi": "台风",
    "pinyin": "tái fēng",
    "english": "hurricane, typhoon",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1742",
    "hanzi": "太空",
    "pinyin": "tài kōng",
    "english": "outer space",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1743",
    "hanzi": "泰斗",
    "pinyin": "tài dǒu",
    "english": "leading scholar of his time, magnate",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1744",
    "hanzi": "瘫痪",
    "pinyin": "tān huàn",
    "english": "paralysis, be paralyzed (body, transportation, etc)",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1745",
    "hanzi": "贪婪",
    "pinyin": "tān lán",
    "english": "avaricious, greedy, rapacious, insatiable, avid",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1746",
    "hanzi": "贪污",
    "pinyin": "tān wū",
    "english": "corruption",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1747",
    "hanzi": "摊儿",
    "pinyin": "tān r",
    "english": "erhua variant of 攤|摊[tān]",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1748",
    "hanzi": "弹性",
    "pinyin": "tán xìng",
    "english": "flexibility, elasticity",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1749",
    "hanzi": "坦白",
    "pinyin": "tǎn bái",
    "english": "honest, forthcoming, to confess",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1750",
    "hanzi": "探测",
    "pinyin": "tàn cè",
    "english": "to probe, to take readings, to explore, exploration",
    "level": "HSK 6",
    "lesson": 35
  },
  {
    "id": "HSK6-1751",
    "hanzi": "探索",
    "pinyin": "tàn suǒ",
    "english": "to explore, to probe",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1752",
    "hanzi": "探讨",
    "pinyin": "tàn tǎo",
    "english": "to investigate, to probe",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1753",
    "hanzi": "探望",
    "pinyin": "tàn wàng",
    "english": "to visit",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1754",
    "hanzi": "叹气",
    "pinyin": "tàn qì",
    "english": "to sigh, to heave a sigh",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1755",
    "hanzi": "糖葫芦",
    "pinyin": "táng hú lu",
    "english": "sugar-coated Chinese hawthorn fruit on a stick, tanghulu",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1756",
    "hanzi": "倘若",
    "pinyin": "tǎng ruò",
    "english": "provided that, supposing that, if",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1757",
    "hanzi": "掏",
    "pinyin": "tāo",
    "english": "variant of 掏[tāo]",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1758",
    "hanzi": "滔滔不绝",
    "pinyin": "tāo tāo bù jué",
    "english": "unceasing torrent (idiom), talking non-stop, gabbling forty to the dozen",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1759",
    "hanzi": "陶瓷",
    "pinyin": "táo cí",
    "english": "pottery and porcelain, ceramics",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1760",
    "hanzi": "淘气",
    "pinyin": "táo qì",
    "english": "naughty, bad",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1761",
    "hanzi": "淘汰",
    "pinyin": "táo tài",
    "english": "to wash out, elimination (by selection), natural selection, to knock out (in a competition), to die out, to phase out",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1762",
    "hanzi": "讨价还价",
    "pinyin": "tǎo jià huán jià",
    "english": "to haggle over price",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1763",
    "hanzi": "特长",
    "pinyin": "tè cháng",
    "english": "personal strength, one's special ability or strong points",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1764",
    "hanzi": "特定",
    "pinyin": "tè dìng",
    "english": "special, specific, designated, particular",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1765",
    "hanzi": "特色",
    "pinyin": "tè sè",
    "english": "characteristic, distinguishing feature or quality",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1766",
    "hanzi": "提拔",
    "pinyin": "tí bá",
    "english": "to promote to a higher job, to select for promotion",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1767",
    "hanzi": "提炼",
    "pinyin": "tí liàn",
    "english": "to extract (ore, minerals etc), to refine, to purify, to process",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1768",
    "hanzi": "提示",
    "pinyin": "tí shì",
    "english": "to prompt, to present, to point out, to draw attention to sth, hint, brief, cue",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1769",
    "hanzi": "提议",
    "pinyin": "tí yì",
    "english": "proposal, suggestion, to propose, to suggest",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1770",
    "hanzi": "题材",
    "pinyin": "tí cái",
    "english": "subject matter",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1771",
    "hanzi": "体谅",
    "pinyin": "tǐ liàng",
    "english": "to empathize, to allow (for something), to show understanding, to appreciate",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1772",
    "hanzi": "体面",
    "pinyin": "tǐ miàn",
    "english": "dignity, face (as in \"losing face\"), honorable, creditable, pretty",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1773",
    "hanzi": "体系",
    "pinyin": "tǐ xì",
    "english": "system, setup",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1774",
    "hanzi": "天才",
    "pinyin": "tiān cái",
    "english": "talent, gift, genius, talented, gifted",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1775",
    "hanzi": "天伦之乐",
    "pinyin": "tiān lún zhī lè",
    "english": "family love and joy, domestic bliss",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1776",
    "hanzi": "天然气",
    "pinyin": "tiān rán qì",
    "english": "natural gas",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1777",
    "hanzi": "天生",
    "pinyin": "tiān shēng",
    "english": "nature, disposition, innate, natural",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1778",
    "hanzi": "天堂",
    "pinyin": "tiān táng",
    "english": "paradise, heaven",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1779",
    "hanzi": "天文",
    "pinyin": "tiān wén",
    "english": "astronomy",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1780",
    "hanzi": "田径",
    "pinyin": "tián jìng",
    "english": "track and field (athletics)",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1781",
    "hanzi": "舔",
    "pinyin": "tiǎn",
    "english": "to lick, to lap",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1782",
    "hanzi": "挑剔",
    "pinyin": "tiāo ti",
    "english": "picky, fussy",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1783",
    "hanzi": "条款",
    "pinyin": "tiáo kuǎn",
    "english": "clause (of contract or law)",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1784",
    "hanzi": "条理",
    "pinyin": "tiáo lǐ",
    "english": "arrangement, order, tidiness",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1785",
    "hanzi": "条约",
    "pinyin": "tiáo yuē",
    "english": "treaty, pact",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1786",
    "hanzi": "调和",
    "pinyin": "tiáo hé",
    "english": "harmonious, to mediate, to reconcile, to compromise, mediation, to mix, to blend, blended, to season, seasoning, to placate",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1787",
    "hanzi": "调剂",
    "pinyin": "tiáo jì",
    "english": "to adjust, to balance, to make up a medical prescription",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1788",
    "hanzi": "调节",
    "pinyin": "tiáo jié",
    "english": "to adjust, to regulate, to harmonize, to reconcile (accountancy etc)",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1789",
    "hanzi": "调解",
    "pinyin": "tiáo jiě",
    "english": "to mediate, to bring parties to an agreement",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1790",
    "hanzi": "调料",
    "pinyin": "tiáo liào",
    "english": "condiment, seasoning, flavoring",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1791",
    "hanzi": "挑拨",
    "pinyin": "tiǎo bō",
    "english": "to incite disharmony, to instigate",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1792",
    "hanzi": "挑衅",
    "pinyin": "tiǎo xìn",
    "english": "to provoke, provocation",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1793",
    "hanzi": "跳跃",
    "pinyin": "tiào yuè",
    "english": "to jump, to leap, to bound, to skip",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1794",
    "hanzi": "停泊",
    "pinyin": "tíng bó",
    "english": "to anchor, anchorage, mooring (of a ship)",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1795",
    "hanzi": "停顿",
    "pinyin": "tíng dùn",
    "english": "to halt, to break off, pause (in speech)",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1796",
    "hanzi": "停滞",
    "pinyin": "tíng zhì",
    "english": "stagnation, at a standstill, bogged down",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1797",
    "hanzi": "亭子",
    "pinyin": "tíng zi",
    "english": "pavilion",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1798",
    "hanzi": "挺拔",
    "pinyin": "tǐng bá",
    "english": "tall and straight",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1799",
    "hanzi": "通货",
    "pinyin": "tōng huò",
    "english": "currency, exchange of goods",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1800",
    "hanzi": "通俗",
    "pinyin": "tōng sú",
    "english": "common, everyday, average",
    "level": "HSK 6",
    "lesson": 36
  },
  {
    "id": "HSK6-1801",
    "hanzi": "通用",
    "pinyin": "tōng yòng",
    "english": "common (use), interchangeable",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1802",
    "hanzi": "铜矿",
    "pinyin": "tóng kuàng",
    "english": "Copper",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1803",
    "hanzi": "同胞",
    "pinyin": "tóng bāo",
    "english": "born of the same parents, sibling, fellow citizen, compatriot",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1804",
    "hanzi": "同志",
    "pinyin": "tóng zhì",
    "english": "comrade, homosexual (slang)",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1805",
    "hanzi": "童话",
    "pinyin": "tóng huà",
    "english": "children's fairy tales",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1806",
    "hanzi": "统筹兼顾",
    "pinyin": "tǒng chóu jiān gù",
    "english": "an overall plan taking into account all factors",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1807",
    "hanzi": "统计",
    "pinyin": "tǒng jì",
    "english": "statistics, to count, to add up",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1808",
    "hanzi": "统统",
    "pinyin": "tǒng tǒng",
    "english": "totally",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1809",
    "hanzi": "投机",
    "pinyin": "tóu jī",
    "english": "to speculate (on financial markets), opportunistic, congenial, agreeable",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1810",
    "hanzi": "投票",
    "pinyin": "tóu piào",
    "english": "to vote, vote",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1811",
    "hanzi": "投降",
    "pinyin": "tóu xiáng",
    "english": "to surrender, surrender",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1812",
    "hanzi": "投掷",
    "pinyin": "tóu zhì",
    "english": "to throw sth a long distance, to hurl, to throw at, to throw (dice etc), to flip (a coin)",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1813",
    "hanzi": "秃",
    "pinyin": "tū",
    "english": "bald, blunt",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1814",
    "hanzi": "突破",
    "pinyin": "tū pò",
    "english": "to break through, to make a breakthrough, to surmount or break the back of (a task etc), (of ball sports) to break through a defense",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1815",
    "hanzi": "图案",
    "pinyin": "tú àn",
    "english": "design, pattern",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1816",
    "hanzi": "徒弟",
    "pinyin": "tú dì",
    "english": "apprentice, disciple",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1817",
    "hanzi": "途径",
    "pinyin": "tú jìng",
    "english": "way, channel",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1818",
    "hanzi": "涂抹",
    "pinyin": "tú mǒ",
    "english": "to paint, to smear, to apply (makeup etc), to doodle, to erase, to obliterate",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1819",
    "hanzi": "土壤",
    "pinyin": "tǔ rǎng",
    "english": "soil",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1820",
    "hanzi": "团结",
    "pinyin": "tuán jié",
    "english": "a rally, to hold a rally, to join forces",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1821",
    "hanzi": "团体",
    "pinyin": "tuán tǐ",
    "english": "group, organization, team",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1822",
    "hanzi": "团圆",
    "pinyin": "tuán yuán",
    "english": "to have a reunion",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1823",
    "hanzi": "推测",
    "pinyin": "tuī cè",
    "english": "speculation, to conjecture, to surmise, to speculate",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1824",
    "hanzi": "推翻",
    "pinyin": "tuī fān",
    "english": "to overthrow",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1825",
    "hanzi": "推理",
    "pinyin": "tuī lǐ",
    "english": "reasoning, speculative, inference",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1826",
    "hanzi": "推论",
    "pinyin": "tuī lùn",
    "english": "to infer, inference, corollary, reasoned conclusion",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1827",
    "hanzi": "推销",
    "pinyin": "tuī xiāo",
    "english": "to market, to sell",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1828",
    "hanzi": "吞咽",
    "pinyin": "tūn yàn",
    "english": "to swallow, to gulp",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1829",
    "hanzi": "脱离",
    "pinyin": "tuō lí",
    "english": "to separate oneself from, to break away from, diastasis (medicine), abscission, abjunction (botany)",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1830",
    "hanzi": "拖延",
    "pinyin": "tuō yán",
    "english": "to adjourn, to delay, to defer, adjournment, procrastination",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1831",
    "hanzi": "托运",
    "pinyin": "tuō yùn",
    "english": "to consign (goods), to check through (baggage)",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1832",
    "hanzi": "妥当",
    "pinyin": "tuǒ dang",
    "english": "appropriate, proper, ready",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1833",
    "hanzi": "妥善",
    "pinyin": "tuǒ shàn",
    "english": "appropriate, proper",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1834",
    "hanzi": "妥协",
    "pinyin": "tuǒ xié",
    "english": "to compromise, to reach terms, a compromise",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1835",
    "hanzi": "椭圆",
    "pinyin": "tuǒ yuán",
    "english": "oval, ellipse, elliptic",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1836",
    "hanzi": "唾沫",
    "pinyin": "tuò mo",
    "english": "spittle, saliva",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1837",
    "hanzi": "挖掘",
    "pinyin": "wā jué",
    "english": "to excavate, to dig, to unearth",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1838",
    "hanzi": "娃娃",
    "pinyin": "wá wa",
    "english": "baby, small child, doll",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1839",
    "hanzi": "瓦解",
    "pinyin": "wǎ jiě",
    "english": "to collapse, to disintegrate, to crumble",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1840",
    "hanzi": "哇",
    "pinyin": "wa",
    "english": "replaces 啊 when following the vowel \"u\" or \"ao\"",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1841",
    "hanzi": "歪曲",
    "pinyin": "wāi qū",
    "english": "to distort, to misrepresent",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1842",
    "hanzi": "外表",
    "pinyin": "wài biǎo",
    "english": "external, outside, outward appearance",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1843",
    "hanzi": "外行",
    "pinyin": "wài háng",
    "english": "layman, amateur",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1844",
    "hanzi": "外界",
    "pinyin": "wài jiè",
    "english": "the outside world, external",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1845",
    "hanzi": "外向",
    "pinyin": "wài xiàng",
    "english": "outward-looking, extrovert, extroverted (personality), export-oriented (economy)",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1846",
    "hanzi": "丸",
    "pinyin": "wán",
    "english": "pill",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1847",
    "hanzi": "完备",
    "pinyin": "wán bèi",
    "english": "faultless, complete, perfect, to leave nothing to be desired",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1848",
    "hanzi": "完毕",
    "pinyin": "wán bì",
    "english": "to finish, to end, to complete",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1849",
    "hanzi": "玩弄",
    "pinyin": "wán nòng",
    "english": "to play with, to toy with, to dally with, to engage in, to resort to",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1850",
    "hanzi": "玩意儿",
    "pinyin": "wán yì r",
    "english": "erhua variant of 玩意[wán yì]",
    "level": "HSK 6",
    "lesson": 37
  },
  {
    "id": "HSK6-1851",
    "hanzi": "顽固",
    "pinyin": "wán gù",
    "english": "stubborn, obstinate",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1852",
    "hanzi": "顽强",
    "pinyin": "wán qiáng",
    "english": "tenacious, hard to defeat",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1853",
    "hanzi": "挽回",
    "pinyin": "wǎn huí",
    "english": "to retrieve, to redeem",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1854",
    "hanzi": "挽救",
    "pinyin": "wǎn jiù",
    "english": "to save, to remedy, to rescue",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1855",
    "hanzi": "惋惜",
    "pinyin": "wǎn xī",
    "english": "to feel sorry for a person over sth that should have happened",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1856",
    "hanzi": "万分",
    "pinyin": "wàn fēn",
    "english": "very much, extremely, one ten thousandth part",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1857",
    "hanzi": "往常",
    "pinyin": "wǎng cháng",
    "english": "habitually (in the past), as one used to do formerly, as it used to be",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1858",
    "hanzi": "往事",
    "pinyin": "wǎng shì",
    "english": "past events, former happenings",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1859",
    "hanzi": "网络",
    "pinyin": "wǎng luò",
    "english": "network (computing, telecommunications, transport etc)",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1860",
    "hanzi": "妄想",
    "pinyin": "wàng xiǎng",
    "english": "to attempt vainly, a vain attempt",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1861",
    "hanzi": "微不足道",
    "pinyin": "wēi bù zú dào",
    "english": "negligible, insignificant",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1862",
    "hanzi": "微观",
    "pinyin": "wēi guān",
    "english": "micro-, sub-atomic",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1863",
    "hanzi": "威风",
    "pinyin": "wēi fēng",
    "english": "might, awe-inspiring authority, impressive",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1864",
    "hanzi": "威力",
    "pinyin": "wēi lì",
    "english": "might, formidable power",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1865",
    "hanzi": "威望",
    "pinyin": "wēi wàng",
    "english": "prestige",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1866",
    "hanzi": "威信",
    "pinyin": "wēi xìn",
    "english": "prestige, reputation, trust, credit with the people",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1867",
    "hanzi": "危机",
    "pinyin": "wēi jī",
    "english": "crisis",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1868",
    "hanzi": "违背",
    "pinyin": "wéi bèi",
    "english": "to violate, to be contrary to",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1869",
    "hanzi": "维持",
    "pinyin": "wéi chí",
    "english": "to keep, to maintain, to preserve",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1870",
    "hanzi": "维生素",
    "pinyin": "wéi shēng sù",
    "english": "vitamin",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1871",
    "hanzi": "维修",
    "pinyin": "wéi xiū",
    "english": "maintenance (of equipment), to protect and maintain",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1872",
    "hanzi": "唯独",
    "pinyin": "wéi dú",
    "english": "only, just (i.e. it is only that...), all except, unique",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1873",
    "hanzi": "为难",
    "pinyin": "wéi nán",
    "english": "to feel embarrassed or awkward, to make things difficult (for someone), to find things difficult (to do or manage)",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1874",
    "hanzi": "为期",
    "pinyin": "wéi qī",
    "english": "(to be done) by (a certain date), lasting (a certain time)",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1875",
    "hanzi": "为首",
    "pinyin": "wéi shǒu",
    "english": "head, be headed by",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1876",
    "hanzi": "委员",
    "pinyin": "wěi yuán",
    "english": "committee member, committee, council",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1877",
    "hanzi": "伪造",
    "pinyin": "wěi zào",
    "english": "to forge, to fake, to counterfeit",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1878",
    "hanzi": "胃口",
    "pinyin": "wèi kǒu",
    "english": "appetite",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1879",
    "hanzi": "位于",
    "pinyin": "wèi yú",
    "english": "to be located at, to be situated at, to lie",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1880",
    "hanzi": "未免",
    "pinyin": "wèi miǎn",
    "english": "unavoidable, a bit too much, over the top (you exaggerate)",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1881",
    "hanzi": "畏惧",
    "pinyin": "wèi jù",
    "english": "to fear, to dread, foreboding",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1882",
    "hanzi": "卫星",
    "pinyin": "wèi xīng",
    "english": "(space) satellite",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1883",
    "hanzi": "慰问",
    "pinyin": "wèi wèn",
    "english": "to express sympathy, greetings, consolation etc",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1884",
    "hanzi": "温带",
    "pinyin": "wēn dài",
    "english": "temperate zone",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1885",
    "hanzi": "温和",
    "pinyin": "wēn hé",
    "english": "mild, gentle, moderate",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1886",
    "hanzi": "文凭",
    "pinyin": "wén píng",
    "english": "diploma",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1887",
    "hanzi": "文物",
    "pinyin": "wén wù",
    "english": "cultural relic, historical relic, 個|个[gè]",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1888",
    "hanzi": "文献",
    "pinyin": "wén xiàn",
    "english": "document",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1889",
    "hanzi": "文雅",
    "pinyin": "wén yǎ",
    "english": "elegant, refined",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1890",
    "hanzi": "文艺",
    "pinyin": "wén yì",
    "english": "literature and art",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1891",
    "hanzi": "问世",
    "pinyin": "wèn shì",
    "english": "to be published, to come out",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1892",
    "hanzi": "窝",
    "pinyin": "wō",
    "english": "nest, pit or hollow on the human body, lair, den, place, to harbor or shelter, to hold in check, to bend, classifier for litters and broods",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1893",
    "hanzi": "乌黑",
    "pinyin": "wū hēi",
    "english": "jet-black, dark",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1894",
    "hanzi": "污蔑",
    "pinyin": "wū miè",
    "english": "to slander, to smear, to tarnish",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1895",
    "hanzi": "诬陷",
    "pinyin": "wū xiàn",
    "english": "to entrap, to frame, to plant false evidence against sb",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1896",
    "hanzi": "无比",
    "pinyin": "wú bǐ",
    "english": "incomparable, matchless",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1897",
    "hanzi": "无偿",
    "pinyin": "wú cháng",
    "english": "free, no charge, at no cost",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1898",
    "hanzi": "无耻",
    "pinyin": "wú chǐ",
    "english": "without any sense of shame, unembarrassed, shameless",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1899",
    "hanzi": "无从",
    "pinyin": "wú cóng",
    "english": "not to have access, beyond one's authority or capability, sth one has no way of doing",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1900",
    "hanzi": "无动于衷",
    "pinyin": "wú dòng yú zhōng",
    "english": "aloof, indifferent, unconcerned",
    "level": "HSK 6",
    "lesson": 38
  },
  {
    "id": "HSK6-1901",
    "hanzi": "无非",
    "pinyin": "wú fēi",
    "english": "only, nothing else",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1902",
    "hanzi": "无精打采",
    "pinyin": "wú jīng dǎ cǎi",
    "english": "dispirited and downcast (idiom); listless, in low spirits, washed out",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1903",
    "hanzi": "无可奉告",
    "pinyin": "wú kě fèng gào",
    "english": "(idiom) \"no comment\"",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1904",
    "hanzi": "无可奈何",
    "pinyin": "wú kě nài hé",
    "english": "have no way out, have no alternative, abbr. to 無奈|无奈[wú nài]",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1905",
    "hanzi": "无赖",
    "pinyin": "wú lài",
    "english": "hoodlum, rascal, rogue, rascally, scoundrelly",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1906",
    "hanzi": "无理取闹",
    "pinyin": "wú lǐ qǔ nào",
    "english": "to make trouble without reason (idiom); to be deliberately provocative",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1907",
    "hanzi": "无能为力",
    "pinyin": "wú néng wéi lì",
    "english": "impotent (idiom), powerless, helpless",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1908",
    "hanzi": "无穷无尽",
    "pinyin": "wú qióng wú jìn",
    "english": "vast and limitless (idiom); endless span of time, no vestige of a beginning, no prospect of an end",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1909",
    "hanzi": "无微不至",
    "pinyin": "wú wēi bù zhì",
    "english": "in every possible way (idiom); meticulous",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1910",
    "hanzi": "无忧无虑",
    "pinyin": "wú yōu wú lǜ",
    "english": "carefree and without worries (idiom)",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1911",
    "hanzi": "无知",
    "pinyin": "wú zhī",
    "english": "ignorant, ignorance",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1912",
    "hanzi": "舞蹈",
    "pinyin": "wǔ dǎo",
    "english": "dance",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1913",
    "hanzi": "武侠",
    "pinyin": "wǔ xiá",
    "english": "martial arts chivalry (Chinese literary, theatrical and cinema genre), knight-errant",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1914",
    "hanzi": "武装",
    "pinyin": "wǔ zhuāng",
    "english": "arms, equipment, to arm, military, armed (forces)",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1915",
    "hanzi": "侮辱",
    "pinyin": "wǔ rǔ",
    "english": "to insult, to humiliate, dishonor",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1916",
    "hanzi": "勿",
    "pinyin": "wù",
    "english": "do not",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1917",
    "hanzi": "务必",
    "pinyin": "wù bì",
    "english": "must, to need to, to be sure to",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1918",
    "hanzi": "务实",
    "pinyin": "wù shí",
    "english": "pragmatic, dealing with concrete issues",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1919",
    "hanzi": "误差",
    "pinyin": "wù chā",
    "english": "difference, error, inaccuracy",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1920",
    "hanzi": "误解",
    "pinyin": "wù jiě",
    "english": "to misunderstand, to misread, misunderstanding",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1921",
    "hanzi": "物美价廉",
    "pinyin": "wù měi jià lián",
    "english": "good quality and cheap, a bargain",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1922",
    "hanzi": "物资",
    "pinyin": "wù zī",
    "english": "goods, supplies",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1923",
    "hanzi": "溪",
    "pinyin": "xī",
    "english": "variant of 溪, creek, rivulet",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1924",
    "hanzi": "膝盖",
    "pinyin": "xī gài",
    "english": "knee",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1925",
    "hanzi": "熄灭",
    "pinyin": "xī miè",
    "english": "to stop burning, to go out (of fire), to die out, extinguished",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1926",
    "hanzi": "吸取",
    "pinyin": "xī qǔ",
    "english": "to absorb, to draw (a lesson, insight etc), to assimilate",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1927",
    "hanzi": "昔日",
    "pinyin": "xī rì",
    "english": "formerly, in olden days",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1928",
    "hanzi": "牺牲",
    "pinyin": "xī shēng",
    "english": "to sacrifice oneself, to lay down one's life, to do sth at the expense of, beast slaughtered for sacrifice, sacrifice",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1929",
    "hanzi": "夕阳",
    "pinyin": "xī yáng",
    "english": "sunset, the setting sun",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1930",
    "hanzi": "媳妇",
    "pinyin": "xí fù",
    "english": "daughter-in-law, wife (of a younger man), young married woman, young woman",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1931",
    "hanzi": "习俗",
    "pinyin": "xí sú",
    "english": "custom, tradition, local tradition, convention",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1932",
    "hanzi": "袭击",
    "pinyin": "xí jī",
    "english": "attack (esp. surprise attack), raid, to attack",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1933",
    "hanzi": "喜闻乐见",
    "pinyin": "xǐ wén lè jiàn",
    "english": "a delight to see (idiom); an attractive spectacle",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1934",
    "hanzi": "喜悦",
    "pinyin": "xǐ yuè",
    "english": "happy, joyous",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1935",
    "hanzi": "系列",
    "pinyin": "xì liè",
    "english": "series",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1936",
    "hanzi": "细胞",
    "pinyin": "xì bāo",
    "english": "cell (biology)",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1937",
    "hanzi": "细菌",
    "pinyin": "xì jūn",
    "english": "bacterium, germ",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1938",
    "hanzi": "细致",
    "pinyin": "xì zhì",
    "english": "delicate, fine, careful, meticulous, painstaking",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1939",
    "hanzi": "霞",
    "pinyin": "xiá",
    "english": "red clouds",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1940",
    "hanzi": "狭隘",
    "pinyin": "xiá ài",
    "english": "narrow, tight, narrow minded, lacking in experience",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1941",
    "hanzi": "狭窄",
    "pinyin": "xiá zhǎi",
    "english": "narrow",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1942",
    "hanzi": "峡谷",
    "pinyin": "xiá gǔ",
    "english": "canyon, gill, ravine",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1943",
    "hanzi": "夏令营",
    "pinyin": "xià lìng yíng",
    "english": "summer camp",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1944",
    "hanzi": "下属",
    "pinyin": "xià shǔ",
    "english": "subordinate, underling",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1945",
    "hanzi": "先进",
    "pinyin": "xiān jìn",
    "english": "advanced (technology), to advance",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1946",
    "hanzi": "先前",
    "pinyin": "xiān qián",
    "english": "before, previously",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1947",
    "hanzi": "鲜明",
    "pinyin": "xiān míng",
    "english": "bright, clear-cut, distinct",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1948",
    "hanzi": "掀起",
    "pinyin": "xiān qǐ",
    "english": "to lift, to raise in height, to begin, upsurge, to set off (a campaign)",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1949",
    "hanzi": "纤维",
    "pinyin": "xiān wéi",
    "english": "fiber",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1950",
    "hanzi": "弦",
    "pinyin": "xián",
    "english": "bow string, string of musical instrument, watchspring, chord (segment of curve), hypotenuse",
    "level": "HSK 6",
    "lesson": 39
  },
  {
    "id": "HSK6-1951",
    "hanzi": "嫌",
    "pinyin": "xián",
    "english": "to dislike, suspicion, resentment, enmity, abbr. for 嫌犯, criminal suspect",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1952",
    "hanzi": "嫌疑",
    "pinyin": "xián yí",
    "english": "suspicion, (be) suspected (of)",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1953",
    "hanzi": "闲话",
    "pinyin": "xián huà",
    "english": "digression, gossip, complaint, scandal",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1954",
    "hanzi": "贤惠",
    "pinyin": "xián huì",
    "english": "chaste, virtuous",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1955",
    "hanzi": "衔接",
    "pinyin": "xián jiē",
    "english": "to join together, to combine",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1956",
    "hanzi": "显著",
    "pinyin": "xiǎn zhù",
    "english": "outstanding, notable, remarkable, statistically significant",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1957",
    "hanzi": "现场",
    "pinyin": "xiàn chǎng",
    "english": "lit. actual location, the scene (of the incident), on-the-spot",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1958",
    "hanzi": "现成",
    "pinyin": "xiàn chéng",
    "english": "ready-made, readily available",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1959",
    "hanzi": "现状",
    "pinyin": "xiàn zhuàng",
    "english": "current situation",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1960",
    "hanzi": "宪法",
    "pinyin": "xiàn fǎ",
    "english": "constitution (of a country)",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1961",
    "hanzi": "陷害",
    "pinyin": "xiàn hài",
    "english": "to entrap, to set up, to frame (up), to make false charges against",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1962",
    "hanzi": "陷入",
    "pinyin": "xiàn rù",
    "english": "to sink into, to get caught up in, to land in (a predicament)",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1963",
    "hanzi": "馅儿",
    "pinyin": "xiàn r",
    "english": "erhua variant of 餡|馅, stuffing, filling, e.g. in 包子 or 饺子[jiǎo zi]",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1964",
    "hanzi": "线索",
    "pinyin": "xiàn suǒ",
    "english": "trail, clues, thread (of a story)",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1965",
    "hanzi": "相差",
    "pinyin": "xiāng chà",
    "english": "to differ, discrepancy between",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1966",
    "hanzi": "相等",
    "pinyin": "xiāng děng",
    "english": "equal, equally, equivalent",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1967",
    "hanzi": "相辅相成",
    "pinyin": "xiāng fǔ xiāng chéng",
    "english": "to complement one another (idiom)",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1968",
    "hanzi": "相应",
    "pinyin": "xiāng yìng",
    "english": "to correspond, answering (one another), to agree (among the part), corresponding, relevant, appropriate, (modify) accordingly",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1969",
    "hanzi": "镶嵌",
    "pinyin": "xiāng qiàn",
    "english": "to inlay, to embed, to set (e.g. a jewel in a ring), tiling, tesselation",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1970",
    "hanzi": "乡镇",
    "pinyin": "xiāng zhèn",
    "english": "village, township",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1971",
    "hanzi": "想方设法",
    "pinyin": "xiǎng fāng shè fǎ",
    "english": "to think up every possible method (idiom); to devise ways and means, to try this, that and the other",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1972",
    "hanzi": "响亮",
    "pinyin": "xiǎng liàng",
    "english": "loud and clear, resounding",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1973",
    "hanzi": "响应",
    "pinyin": "xiǎng yìng",
    "english": "respond to, answer",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1974",
    "hanzi": "巷",
    "pinyin": "xiàng",
    "english": "lane, alley",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1975",
    "hanzi": "向导",
    "pinyin": "xiàng dǎo",
    "english": "guide",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1976",
    "hanzi": "向来",
    "pinyin": "xiàng lái",
    "english": "always (previously)",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1977",
    "hanzi": "向往",
    "pinyin": "xiàng wǎng",
    "english": "to yearn for, to look forward to",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1978",
    "hanzi": "消除",
    "pinyin": "xiāo chú",
    "english": "to eliminate, to remove",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1979",
    "hanzi": "消毒",
    "pinyin": "xiāo dú",
    "english": "to disinfect, to sterilize",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1980",
    "hanzi": "消防",
    "pinyin": "xiāo fáng",
    "english": "fire-fighting, fire control",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1981",
    "hanzi": "消耗",
    "pinyin": "xiāo hào",
    "english": "to use up, to consume",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1982",
    "hanzi": "消极",
    "pinyin": "xiāo jí",
    "english": "negative, passive, inactive",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1983",
    "hanzi": "销毁",
    "pinyin": "xiāo huǐ",
    "english": "to destroy (by melting or burning), to obliterate",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1984",
    "hanzi": "小心翼翼",
    "pinyin": "xiǎo xīn yì yì",
    "english": "cautious and solemn (idiom); very carefully, prudent, gently and cautiously",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1985",
    "hanzi": "效益",
    "pinyin": "xiào yì",
    "english": "benefit, effectiveness, efficiency",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1986",
    "hanzi": "肖像",
    "pinyin": "xiào xiàng",
    "english": "portrait",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1987",
    "hanzi": "携带",
    "pinyin": "xié dài",
    "english": "to carry (on one's person), to support (old), Taiwan pr. [xī dài]",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1988",
    "hanzi": "协会",
    "pinyin": "xié huì",
    "english": "an association, a society, 家[jiā]",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1989",
    "hanzi": "协商",
    "pinyin": "xié shāng",
    "english": "to consult with, to talk things over, agreement",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1990",
    "hanzi": "协议",
    "pinyin": "xié yì",
    "english": "agreement, pact, protocol",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1991",
    "hanzi": "协助",
    "pinyin": "xié zhù",
    "english": "to provide assistance, to aid",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1992",
    "hanzi": "写作",
    "pinyin": "xiě zuò",
    "english": "writing, written works",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1993",
    "hanzi": "屑",
    "pinyin": "xiè",
    "english": "bits, fragments, crumbs, filings, trifling, trivial, to condescend to",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1994",
    "hanzi": "谢绝",
    "pinyin": "xiè jué",
    "english": "to refuse politely",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1995",
    "hanzi": "泄露",
    "pinyin": "xiè lù",
    "english": "to leak (information), to divulge",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1996",
    "hanzi": "泄气",
    "pinyin": "xiè qì",
    "english": "to leak (gas), to be discouraged, to despair, (disparaging) pathetic, to vent one's anger, (of a tire) to be flat",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1997",
    "hanzi": "新陈代谢",
    "pinyin": "xīn chén dài xiè",
    "english": "metabolism (biology), the new replaces the old (idiom)",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1998",
    "hanzi": "新郎",
    "pinyin": "xīn láng",
    "english": "bridegroom, groom",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-1999",
    "hanzi": "新娘",
    "pinyin": "xīn niáng",
    "english": "bride",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-2000",
    "hanzi": "新颖",
    "pinyin": "xīn yǐng",
    "english": "lit. new bud, fig. new and original",
    "level": "HSK 6",
    "lesson": 40
  },
  {
    "id": "HSK6-2001",
    "hanzi": "心得",
    "pinyin": "xīn dé",
    "english": "knowledge gained",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2002",
    "hanzi": "心灵",
    "pinyin": "xīn líng",
    "english": "bright, smart, quick-witted, heart, thoughts, spirit",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2003",
    "hanzi": "心态",
    "pinyin": "xīn tài",
    "english": "attitude (of the heart), state of one's psyche, way of thinking, mentality",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2004",
    "hanzi": "心疼",
    "pinyin": "xīn téng",
    "english": "to love dearly, the pain of love",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2005",
    "hanzi": "心血",
    "pinyin": "xīn xuè",
    "english": "heart's blood, expenditure (for some project), meticulous care",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2006",
    "hanzi": "心眼儿",
    "pinyin": "xīn yǎn r",
    "english": "one's thoughts, mind, intention, willingness to accept new ideas, baseless suspicions",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2007",
    "hanzi": "辛勤",
    "pinyin": "xīn qín",
    "english": "hardworking, industrious",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2008",
    "hanzi": "欣慰",
    "pinyin": "xīn wèi",
    "english": "to be gratified",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2009",
    "hanzi": "欣欣向荣",
    "pinyin": "xīn xīn xiàng róng",
    "english": "luxuriant growth (idiom); flourishing, thriving",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2010",
    "hanzi": "薪水",
    "pinyin": "xīn shuǐ",
    "english": "salary, wage",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2011",
    "hanzi": "信赖",
    "pinyin": "xìn lài",
    "english": "to trust, to have confidence in, to have faith in, to rely on",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2012",
    "hanzi": "信念",
    "pinyin": "xìn niàn",
    "english": "faith, belief, conviction",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2013",
    "hanzi": "信仰",
    "pinyin": "xìn yǎng",
    "english": "to believe in (a religion), firm belief, conviction",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2014",
    "hanzi": "信誉",
    "pinyin": "xìn yù",
    "english": "prestige, distinction, reputation, trust",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2015",
    "hanzi": "腥",
    "pinyin": "xīng",
    "english": "fishy (smell)",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2016",
    "hanzi": "兴隆",
    "pinyin": "xīng lóng",
    "english": "prosperous, thriving, flourishing",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2017",
    "hanzi": "兴旺",
    "pinyin": "xīng wàng",
    "english": "prosperous, thriving, to prosper, to flourish",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2018",
    "hanzi": "行政",
    "pinyin": "xíng zhèng",
    "english": "administrative, executive (adjective)",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2019",
    "hanzi": "形态",
    "pinyin": "xíng tài",
    "english": "shape, form, pattern, morphology",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2020",
    "hanzi": "刑事",
    "pinyin": "xíng shì",
    "english": "criminal, penal",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2021",
    "hanzi": "性感",
    "pinyin": "xìng gǎn",
    "english": "sex appeal, eroticism, sexuality, sexy",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2022",
    "hanzi": "性命",
    "pinyin": "xìng mìng",
    "english": "life",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2023",
    "hanzi": "性能",
    "pinyin": "xìng néng",
    "english": "function, performance",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2024",
    "hanzi": "性情",
    "pinyin": "xìng qíng",
    "english": "nature, temperament",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2025",
    "hanzi": "幸好",
    "pinyin": "xìng hǎo",
    "english": "fortunately",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2026",
    "hanzi": "兴高采烈",
    "pinyin": "xīng gāo cǎi liè",
    "english": "happy and excited (idiom); in high spirits, in great delight",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2027",
    "hanzi": "兴致勃勃",
    "pinyin": "xìng zhì bó bó",
    "english": "to become exhilarated (idiom); in high spirits, full of zest",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2028",
    "hanzi": "胸怀",
    "pinyin": "xiōng huái",
    "english": "one's bosom (the seat of emotions), breast, broad-minded and open, to think about, to cherish",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2029",
    "hanzi": "胸膛",
    "pinyin": "xiōng táng",
    "english": "chest",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2030",
    "hanzi": "凶恶",
    "pinyin": "xiōng è",
    "english": "variant of 兇惡|凶恶, fierce, ferocious, fiendish, frightening",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2031",
    "hanzi": "凶手",
    "pinyin": "xiōng shǒu",
    "english": "murderer, assassin",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2032",
    "hanzi": "雄厚",
    "pinyin": "xióng hòu",
    "english": "robust, strong and solid",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2033",
    "hanzi": "修复",
    "pinyin": "xiū fù",
    "english": "to restore, to renovate, restoration",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2034",
    "hanzi": "修建",
    "pinyin": "xiū jiàn",
    "english": "to build, to construct",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2035",
    "hanzi": "修理",
    "pinyin": "xiū lǐ",
    "english": "to repair, to perform maintenance, to overhaul, to fix, to prune, to trim",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2036",
    "hanzi": "羞耻",
    "pinyin": "xiū chǐ",
    "english": "(a feeling of) shame",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2037",
    "hanzi": "休养",
    "pinyin": "xiū yǎng",
    "english": "to recuperate, to recover, to convalesce",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2038",
    "hanzi": "绣",
    "pinyin": "xiù",
    "english": "to embroider, embroidery",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2039",
    "hanzi": "嗅觉",
    "pinyin": "xiù jué",
    "english": "sense of smell",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2040",
    "hanzi": "虚假",
    "pinyin": "xū jiǎ",
    "english": "false, phony, pretense",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2041",
    "hanzi": "虚荣",
    "pinyin": "xū róng",
    "english": "vanity",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2042",
    "hanzi": "虚伪",
    "pinyin": "xū wěi",
    "english": "false, hypocritical, artificial, sham",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2043",
    "hanzi": "需求",
    "pinyin": "xū qiú",
    "english": "requirement, demand (economics)",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2044",
    "hanzi": "须知",
    "pinyin": "xū zhī",
    "english": "prerequisites, rules that must be known before starting sth",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2045",
    "hanzi": "许可",
    "pinyin": "xǔ kě",
    "english": "to allow, to permit",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2046",
    "hanzi": "酗酒",
    "pinyin": "xù jiǔ",
    "english": "heavy drinking, to get drunk, to drink to excess",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2047",
    "hanzi": "畜牧",
    "pinyin": "xù mù",
    "english": "to raise animals",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2048",
    "hanzi": "序言",
    "pinyin": "xù yán",
    "english": "preface, introductory remarks, preamble, prelude",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2049",
    "hanzi": "宣誓",
    "pinyin": "xuān shì",
    "english": "to swear an oath (of office), to make a vow",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2050",
    "hanzi": "宣扬",
    "pinyin": "xuān yáng",
    "english": "to proclaim, to make public or well known",
    "level": "HSK 6",
    "lesson": 41
  },
  {
    "id": "HSK6-2051",
    "hanzi": "悬挂",
    "pinyin": "xuán guà",
    "english": "to suspend, to hang, suspension (cable car)",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2052",
    "hanzi": "悬念",
    "pinyin": "xuán niàn",
    "english": "suspense in a movie, play etc, concern for sb's welfare",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2053",
    "hanzi": "悬崖峭壁",
    "pinyin": "xuán yá qiào bì",
    "english": "sheer cliffs and precipitous rock faces (idiom)",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2054",
    "hanzi": "旋律",
    "pinyin": "xuán lǜ",
    "english": "melody, rhythm",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2055",
    "hanzi": "旋转",
    "pinyin": "xuán zhuǎn",
    "english": "to rotate, to revolve, to spin, to whirl",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2056",
    "hanzi": "选拔",
    "pinyin": "xuǎn bá",
    "english": "to select the best",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2057",
    "hanzi": "选手",
    "pinyin": "xuǎn shǒu",
    "english": "athlete, contestant",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2058",
    "hanzi": "削弱",
    "pinyin": "xuē ruò",
    "english": "to weaken, to impair, to cripple",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2059",
    "hanzi": "学历",
    "pinyin": "xué lì",
    "english": "educational background, academic qualifications",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2060",
    "hanzi": "学说",
    "pinyin": "xué shuō",
    "english": "theory, doctrine",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2061",
    "hanzi": "学位",
    "pinyin": "xué wèi",
    "english": "academic degree, e.g.: BSc 學士學位|学士学位, MSc 碩士學位|硕士学位, Diploma 學位證書|学位证书, PhD 博士學位|博士学位[bó shì xué wèi]",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2062",
    "hanzi": "雪上加霜",
    "pinyin": "xuě shàng jiā shuāng",
    "english": "to add hail to snow (idiom); one disaster on top of another, to make things worse in a bad situation",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2063",
    "hanzi": "血压",
    "pinyin": "xuè yā",
    "english": "blood pressure",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2064",
    "hanzi": "熏陶",
    "pinyin": "xūn táo",
    "english": "to seep in, to influence, to nurture, influence, training",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2065",
    "hanzi": "循环",
    "pinyin": "xún huán",
    "english": "to cycle, to circulate, circle, loop",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2066",
    "hanzi": "循序渐进",
    "pinyin": "xún xù jiàn jìn",
    "english": "in sequence, step by step (idiom); to make steady progress incrementally",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2067",
    "hanzi": "巡逻",
    "pinyin": "xún luó",
    "english": "to patrol (police, army or navy)",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2068",
    "hanzi": "寻觅",
    "pinyin": "xún mì",
    "english": "to look for",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2069",
    "hanzi": "押金",
    "pinyin": "yā jīn",
    "english": "deposit, down payment",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2070",
    "hanzi": "压迫",
    "pinyin": "yā pò",
    "english": "to oppress, to repress, to constrict, oppression, stress (physics)",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2071",
    "hanzi": "压岁钱",
    "pinyin": "yā suì qián",
    "english": "money given to children as new year present",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2072",
    "hanzi": "压缩",
    "pinyin": "yā suō",
    "english": "to compress, compression",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2073",
    "hanzi": "压抑",
    "pinyin": "yā yì",
    "english": "to constrain or repress emotions, oppressive, stifling, depressing, repression",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2074",
    "hanzi": "压榨",
    "pinyin": "yā zhà",
    "english": "to press, to squeeze, to extract juice, oil etc by squeezing",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2075",
    "hanzi": "压制",
    "pinyin": "yā zhì",
    "english": "to suppress, to inhibit, to stifle",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2076",
    "hanzi": "亚军",
    "pinyin": "yà jūn",
    "english": "second place (in a sports contest), runner-up",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2077",
    "hanzi": "烟花",
    "pinyin": "yān huā",
    "english": "fireworks, prostitute (esp. in Yuan theater)",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2078",
    "hanzi": "淹没",
    "pinyin": "yān mò",
    "english": "to submerge, to drown, to flood, to drown out (also fig.)",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2079",
    "hanzi": "延期",
    "pinyin": "yán qī",
    "english": "to delay, to extend, to postpone, to defer",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2080",
    "hanzi": "延伸",
    "pinyin": "yán shēn",
    "english": "to extend, to spread",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2081",
    "hanzi": "延续",
    "pinyin": "yán xù",
    "english": "to continue, to go on, to last",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2082",
    "hanzi": "严寒",
    "pinyin": "yán hán",
    "english": "bitter cold, severe winter",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2083",
    "hanzi": "严禁",
    "pinyin": "yán jìn",
    "english": "strictly prohibit",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2084",
    "hanzi": "严峻",
    "pinyin": "yán jùn",
    "english": "grim, severe, rigorous",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2085",
    "hanzi": "严厉",
    "pinyin": "yán lì",
    "english": "severe, strict",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2086",
    "hanzi": "严密",
    "pinyin": "yán mì",
    "english": "strict, tight (organization, surveillance etc)",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2087",
    "hanzi": "沿海",
    "pinyin": "yán hǎi",
    "english": "coastal",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2088",
    "hanzi": "言论",
    "pinyin": "yán lùn",
    "english": "speech, expression of opinion, public opinion",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2089",
    "hanzi": "炎热",
    "pinyin": "yán rè",
    "english": "blistering hot, sizzling hot (weather)",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2090",
    "hanzi": "岩石",
    "pinyin": "yán shí",
    "english": "rock",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2091",
    "hanzi": "演变",
    "pinyin": "yǎn biàn",
    "english": "to develop, to evolve",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2092",
    "hanzi": "演讲",
    "pinyin": "yǎn jiǎng",
    "english": "lecture, to make a speech",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2093",
    "hanzi": "演习",
    "pinyin": "yǎn xí",
    "english": "maneuver, exercise, practice, to maneuver",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2094",
    "hanzi": "演绎",
    "pinyin": "yǎn yì",
    "english": "to deduce, to infer",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2095",
    "hanzi": "演奏",
    "pinyin": "yǎn zòu",
    "english": "to play a musical instrument, to perform music",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2096",
    "hanzi": "掩盖",
    "pinyin": "yǎn gài",
    "english": "to conceal, to hide behind, to cover up",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2097",
    "hanzi": "掩护",
    "pinyin": "yǎn hù",
    "english": "to screen, to shield, to cover, protection, cover",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2098",
    "hanzi": "掩饰",
    "pinyin": "yǎn shì",
    "english": "to conceal a fault, to gloss over",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2099",
    "hanzi": "眼光",
    "pinyin": "yǎn guāng",
    "english": "gaze, insight, foresight, vision, way of looking at things",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2100",
    "hanzi": "眼色",
    "pinyin": "yǎn sè",
    "english": "a wink, to signal with one's eyes",
    "level": "HSK 6",
    "lesson": 42
  },
  {
    "id": "HSK6-2101",
    "hanzi": "眼神",
    "pinyin": "yǎn shén",
    "english": "expression or emotion showing in one's eyes, meaningful glance, wink, eyesight (topolect)",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2102",
    "hanzi": "眼下",
    "pinyin": "yǎn xià",
    "english": "now, at present, subocular (medicine)",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2103",
    "hanzi": "验收",
    "pinyin": "yàn shōu",
    "english": "to check on receipt, an inventory of received goods, to verify and accept (a delivery)",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2104",
    "hanzi": "验证",
    "pinyin": "yàn zhèng",
    "english": "to inspect and verify, experimental verification, to validate (a theory), to authenticate",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2105",
    "hanzi": "厌恶",
    "pinyin": "yàn wù",
    "english": "to loathe, to hate, disgusted with sth",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2106",
    "hanzi": "氧气",
    "pinyin": "yǎng qì",
    "english": "oxygen",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2107",
    "hanzi": "样品",
    "pinyin": "yàng pǐn",
    "english": "sample, specimen",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2108",
    "hanzi": "摇摆",
    "pinyin": "yáo bǎi",
    "english": "to sway, to wobble, to waver",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2109",
    "hanzi": "摇滚",
    "pinyin": "yáo gǔn",
    "english": "to shake and boil, rock and roll (music)",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2110",
    "hanzi": "摇晃",
    "pinyin": "yáo huàng",
    "english": "to rock, to shake, to sway",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2111",
    "hanzi": "遥控",
    "pinyin": "yáo kòng",
    "english": "remote control",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2112",
    "hanzi": "遥远",
    "pinyin": "yáo yuǎn",
    "english": "distant, remote",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2113",
    "hanzi": "谣言",
    "pinyin": "yáo yán",
    "english": "rumor",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2114",
    "hanzi": "咬牙切齿",
    "pinyin": "yǎo yá qiè chǐ",
    "english": "gnashing one's teeth (idiom); displaying extreme anger, fuming with rage between gritted teeth",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2115",
    "hanzi": "要不然",
    "pinyin": "yào bù rán",
    "english": "otherwise, or else, or",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2116",
    "hanzi": "要点",
    "pinyin": "yào diǎn",
    "english": "main point, essential",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2117",
    "hanzi": "要命",
    "pinyin": "yào mìng",
    "english": "to cause sb's death, very, extremely, frightening, annoying",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2118",
    "hanzi": "要素",
    "pinyin": "yào sù",
    "english": "essential factor, key constituent",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2119",
    "hanzi": "耀眼",
    "pinyin": "yào yǎn",
    "english": "to dazzle, dazzling",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2120",
    "hanzi": "野蛮",
    "pinyin": "yě mán",
    "english": "barbarous, uncivilized",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2121",
    "hanzi": "野心",
    "pinyin": "yě xīn",
    "english": "ambition, wild schemes, careerism",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2122",
    "hanzi": "一流",
    "pinyin": "yī liú",
    "english": "top quality, front ranking",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2123",
    "hanzi": "依次",
    "pinyin": "yī cì",
    "english": "in order, in succession",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2124",
    "hanzi": "依旧",
    "pinyin": "yī jiù",
    "english": "as before, still",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2125",
    "hanzi": "依据",
    "pinyin": "yī jù",
    "english": "according to, basis, foundation",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2126",
    "hanzi": "依靠",
    "pinyin": "yī kào",
    "english": "to rely on sth (for support etc), to depend on",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2127",
    "hanzi": "依赖",
    "pinyin": "yī lài",
    "english": "to depend on, to be dependent on",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2128",
    "hanzi": "依托",
    "pinyin": "yī tuō",
    "english": "to rely on, to depend on",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2129",
    "hanzi": "衣裳",
    "pinyin": "yī shang",
    "english": "clothes",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2130",
    "hanzi": "一度",
    "pinyin": "yī dù",
    "english": "for a time, at one time, one time, once",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2131",
    "hanzi": "一贯",
    "pinyin": "yī guàn",
    "english": "consistent, constant, from start to finish, all along, persistent",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2132",
    "hanzi": "一律",
    "pinyin": "yī lǜ",
    "english": "same, uniformly, all, without exception",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2133",
    "hanzi": "一目了然",
    "pinyin": "yī mù liǎo rán",
    "english": "obvious at a glance (idiom)",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2134",
    "hanzi": "一向",
    "pinyin": "yī xiàng",
    "english": "always (previously), a period of time in the recent past",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2135",
    "hanzi": "一再",
    "pinyin": "yī zài",
    "english": "repeatedly",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2136",
    "hanzi": "遗产",
    "pinyin": "yí chǎn",
    "english": "heritage, legacy, inheritance, bequest",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2137",
    "hanzi": "遗传",
    "pinyin": "yí chuán",
    "english": "heredity, inheritance, to transmit",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2138",
    "hanzi": "遗留",
    "pinyin": "yí liú",
    "english": "(leave or be a) legacy, left over, hand down (to next generation)",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2139",
    "hanzi": "遗失",
    "pinyin": "yí shī",
    "english": "to lose, lost",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2140",
    "hanzi": "疑惑",
    "pinyin": "yí huò",
    "english": "to doubt, to distrust, unconvincing, to puzzle over, misgivings, suspicions",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2141",
    "hanzi": "仪器",
    "pinyin": "yí qì",
    "english": "instrument, apparatus",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2142",
    "hanzi": "仪式",
    "pinyin": "yí shì",
    "english": "ceremony",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2143",
    "hanzi": "以便",
    "pinyin": "yǐ biàn",
    "english": "so that, so as to, in order to",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2144",
    "hanzi": "以免",
    "pinyin": "yǐ miǎn",
    "english": "in order to avoid, so as not to",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2145",
    "hanzi": "以往",
    "pinyin": "yǐ wǎng",
    "english": "in the past, formerly",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2146",
    "hanzi": "以至",
    "pinyin": "yǐ zhì",
    "english": "down to, up to, to such an extent as to ... (also written 以至於|以至于)",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2147",
    "hanzi": "以致",
    "pinyin": "yǐ zhì",
    "english": "to such an extent as to, down to, up to",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2148",
    "hanzi": "亦",
    "pinyin": "yì",
    "english": "also",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2149",
    "hanzi": "翼",
    "pinyin": "yì",
    "english": "wing, area surrounding the bullseye of a target, to assist, one of the 28 constellations of Chinese astronomy, old variant of 翌",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2150",
    "hanzi": "一帆风顺",
    "pinyin": "yī fān fēng shùn",
    "english": "propitious wind throughout the journey (idiom), plain sailing, to go smoothly, have a nice trip!",
    "level": "HSK 6",
    "lesson": 43
  },
  {
    "id": "HSK6-2151",
    "hanzi": "一举两得",
    "pinyin": "yī jǔ liǎng dé",
    "english": "one move, two gains (idiom); two birds with one stone",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2152",
    "hanzi": "一如既往",
    "pinyin": "yī rú jì wǎng",
    "english": "just as in the past (idiom); as before, continuing as always",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2153",
    "hanzi": "一丝不苟",
    "pinyin": "yī sī bù gǒu",
    "english": "not one thread loose (idiom); strictly according to the rules, meticulous, not one hair out of place",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2154",
    "hanzi": "异常",
    "pinyin": "yì cháng",
    "english": "exceptional, abnormal, an anomaly",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2155",
    "hanzi": "意料",
    "pinyin": "yì liào",
    "english": "to anticipate, to expect",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2156",
    "hanzi": "意识",
    "pinyin": "yì shí",
    "english": "consciousness, awareness, consciously (i.e. deliberately), to be aware",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2157",
    "hanzi": "意图",
    "pinyin": "yì tú",
    "english": "intent, intention, intend, schematic diagram",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2158",
    "hanzi": "意味着",
    "pinyin": "yì wèi zhe",
    "english": "to signify, to mean, to imply",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2159",
    "hanzi": "意向",
    "pinyin": "yì xiàng",
    "english": "intention, purpose, intent, inclination, disposition",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2160",
    "hanzi": "意志",
    "pinyin": "yì zhì",
    "english": "will, willpower, determination",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2161",
    "hanzi": "毅力",
    "pinyin": "yì lì",
    "english": "perseverance, willpower",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2162",
    "hanzi": "毅然",
    "pinyin": "yì rán",
    "english": "firmly, resolutely, without hesitation",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2163",
    "hanzi": "抑制",
    "pinyin": "yì zhì",
    "english": "to inhibit, to keep down, to suppress",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2164",
    "hanzi": "阴谋",
    "pinyin": "yīn móu",
    "english": "plot, conspiracy",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2165",
    "hanzi": "音响",
    "pinyin": "yīn xiǎng",
    "english": "speakers or speaker (electronic), acoustics, sound field (in a room or theater)",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2166",
    "hanzi": "隐蔽",
    "pinyin": "yǐn bì",
    "english": "to conceal, to hide, covert, under cover",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2167",
    "hanzi": "隐患",
    "pinyin": "yǐn huàn",
    "english": "a danger concealed within sth, hidden damage, misfortune not visible from the surface",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2168",
    "hanzi": "隐瞒",
    "pinyin": "yǐn mán",
    "english": "to conceal, to hide (a taboo subject), to cover up the truth",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2169",
    "hanzi": "隐私",
    "pinyin": "yǐn sī",
    "english": "secrets, private business, privacy",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2170",
    "hanzi": "隐约",
    "pinyin": "yǐn yuē",
    "english": "vague, faint, indistinct",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2171",
    "hanzi": "引导",
    "pinyin": "yǐn dǎo",
    "english": "to guide, to lead (around), to conduct, to boot, introduction, primer",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2172",
    "hanzi": "引擎",
    "pinyin": "yǐn qíng",
    "english": "engine (loanword)",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2173",
    "hanzi": "引用",
    "pinyin": "yǐn yòng",
    "english": "to quote, to cite, to recommend, to appoint",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2174",
    "hanzi": "饮食",
    "pinyin": "yǐn shí",
    "english": "food and drink, diet",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2175",
    "hanzi": "印刷",
    "pinyin": "yìn shuā",
    "english": "print",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2176",
    "hanzi": "婴儿",
    "pinyin": "yīng ér",
    "english": "infant, baby, lead (Pb)",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2177",
    "hanzi": "英明",
    "pinyin": "yīng míng",
    "english": "wise, brilliant",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2178",
    "hanzi": "英勇",
    "pinyin": "yīng yǒng",
    "english": "bravery, gallant, valiant",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2179",
    "hanzi": "迎面",
    "pinyin": "yíng miàn",
    "english": "directly, head-on (collision), in one's face (of wind)",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2180",
    "hanzi": "盈利",
    "pinyin": "yíng lì",
    "english": "profit, gain",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2181",
    "hanzi": "荧屏",
    "pinyin": "yíng píng",
    "english": "fluorescent screen, TV screen",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2182",
    "hanzi": "应酬",
    "pinyin": "yìng chou",
    "english": "social niceties, social interaction, a dinner party",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2183",
    "hanzi": "应邀",
    "pinyin": "yìng yāo",
    "english": "at sb's invitation, on invitation",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2184",
    "hanzi": "拥护",
    "pinyin": "yōng hù",
    "english": "to endorse, to support",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2185",
    "hanzi": "拥有",
    "pinyin": "yōng yǒu",
    "english": "to have, to possess",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2186",
    "hanzi": "庸俗",
    "pinyin": "yōng sú",
    "english": "filthy, vulgar, debased",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2187",
    "hanzi": "勇于",
    "pinyin": "yǒng yú",
    "english": "to dare to, to be brave enough to",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2188",
    "hanzi": "永恒",
    "pinyin": "yǒng héng",
    "english": "eternal, everlasting, fig. to pass into eternity (i.e. to die)",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2189",
    "hanzi": "涌现",
    "pinyin": "yǒng xiàn",
    "english": "to emerge in large numbers, to spring up, to emerge prominently",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2190",
    "hanzi": "踊跃",
    "pinyin": "yǒng yuè",
    "english": "to leap, to jump, eager, enthusiastically",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2191",
    "hanzi": "用功",
    "pinyin": "yòng gōng",
    "english": "diligent, industrious (in one's studies), to study hard, to make great effort",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2192",
    "hanzi": "用户",
    "pinyin": "yòng hù",
    "english": "user, consumer, subscriber, customer",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2193",
    "hanzi": "优胜劣汰",
    "pinyin": "yōu shèng liè tài",
    "english": "survival of the fittest (idiom)",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2194",
    "hanzi": "优先",
    "pinyin": "yōu xiān",
    "english": "priority",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2195",
    "hanzi": "优异",
    "pinyin": "yōu yì",
    "english": "exceptional, outstandingly good",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2196",
    "hanzi": "优越",
    "pinyin": "yōu yuè",
    "english": "superior, superiority",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2197",
    "hanzi": "忧郁",
    "pinyin": "yōu yù",
    "english": "sullen, depressed, melancholy, dejected",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2198",
    "hanzi": "油腻",
    "pinyin": "yóu nì",
    "english": "grease, greasy food, oily, rich (of food), fatty, greasy and dirty, a slippery character",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2199",
    "hanzi": "油漆",
    "pinyin": "yóu qī",
    "english": "oil paints, lacquer, to paint",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2200",
    "hanzi": "犹如",
    "pinyin": "yóu rú",
    "english": "similar to, appearing to be",
    "level": "HSK 6",
    "lesson": 44
  },
  {
    "id": "HSK6-2201",
    "hanzi": "有条不紊",
    "pinyin": "yǒu tiáo bù wěn",
    "english": "regular and thorough (idiom); methodically arranged",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2202",
    "hanzi": "幼稚",
    "pinyin": "yòu zhì",
    "english": "young, childish, naive",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2203",
    "hanzi": "诱惑",
    "pinyin": "yòu huò",
    "english": "to entice, to lure, to induce, to attract",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2204",
    "hanzi": "愚蠢",
    "pinyin": "yú chǔn",
    "english": "silly, stupid",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2205",
    "hanzi": "愚昧",
    "pinyin": "yú mèi",
    "english": "ignorant, uneducated",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2206",
    "hanzi": "舆论",
    "pinyin": "yú lùn",
    "english": "public opinion",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2207",
    "hanzi": "渔民",
    "pinyin": "yú mín",
    "english": "fisherman, fisher folk",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2208",
    "hanzi": "与日俱增",
    "pinyin": "yǔ rì jù zēng",
    "english": "to increase steadily, to grow with each passing day",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2209",
    "hanzi": "羽绒服",
    "pinyin": "yǔ róng fú",
    "english": "down-filled garment",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2210",
    "hanzi": "予以",
    "pinyin": "yǔ yǐ",
    "english": "to give, to impose, to apply",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2211",
    "hanzi": "愈",
    "pinyin": "yù",
    "english": "to heal",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2212",
    "hanzi": "预料",
    "pinyin": "yù liào",
    "english": "to forecast, to anticipate, expectation",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2213",
    "hanzi": "预期",
    "pinyin": "yù qī",
    "english": "to expect, to anticipate",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2214",
    "hanzi": "预赛",
    "pinyin": "yù sài",
    "english": "preliminary competition, to hold preliminary heats",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2215",
    "hanzi": "预算",
    "pinyin": "yù suàn",
    "english": "budget",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2216",
    "hanzi": "预先",
    "pinyin": "yù xiān",
    "english": "beforehand, in advance",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2217",
    "hanzi": "预言",
    "pinyin": "yù yán",
    "english": "to predict, prophecy",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2218",
    "hanzi": "预兆",
    "pinyin": "yù zhào",
    "english": "omen, prognosis (in medicine)",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2219",
    "hanzi": "欲望",
    "pinyin": "yù wàng",
    "english": "desire, longing, appetite, craving",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2220",
    "hanzi": "寓言",
    "pinyin": "yù yán",
    "english": "fable",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2221",
    "hanzi": "冤枉",
    "pinyin": "yuān wang",
    "english": "hatred, injustice, bad luck, unjust treatment, wronged, not worthwhile",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2222",
    "hanzi": "元首",
    "pinyin": "yuán shǒu",
    "english": "head of state",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2223",
    "hanzi": "元素",
    "pinyin": "yuán sù",
    "english": "element, element of a set, chemical element",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2224",
    "hanzi": "元宵节",
    "pinyin": "Yuán xiāo jié",
    "english": "Lantern Festival, the final event of the Spring Festival 春節|春节, on 15th of first month of the lunar calendar",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2225",
    "hanzi": "圆满",
    "pinyin": "yuán mǎn",
    "english": "satisfactory, consummate, perfect",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2226",
    "hanzi": "原告",
    "pinyin": "yuán gào",
    "english": "complainant, plaintiff",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2227",
    "hanzi": "原理",
    "pinyin": "yuán lǐ",
    "english": "principle, theory",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2228",
    "hanzi": "原始",
    "pinyin": "yuán shǐ",
    "english": "first, original, primitive, original (document etc)",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2229",
    "hanzi": "原先",
    "pinyin": "yuán xiān",
    "english": "former, original",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2230",
    "hanzi": "园林",
    "pinyin": "yuán lín",
    "english": "gardens, park, landscape garden",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2231",
    "hanzi": "源泉",
    "pinyin": "yuán quán",
    "english": "fountainhead, well-spring, water source, fig. origin",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2232",
    "hanzi": "约束",
    "pinyin": "yuē shù",
    "english": "to restrict, to limit to, to constrain, restriction, constraint",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2233",
    "hanzi": "岳父",
    "pinyin": "yuè fù",
    "english": "wife's father, father-in-law",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2234",
    "hanzi": "乐谱",
    "pinyin": "yuè pǔ",
    "english": "a musical score, sheet music",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2235",
    "hanzi": "熨",
    "pinyin": "yùn",
    "english": "an iron, to iron",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2236",
    "hanzi": "蕴藏",
    "pinyin": "yùn cáng",
    "english": "to hold in store, to contain (untapped reserves etc)",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2237",
    "hanzi": "运算",
    "pinyin": "yùn suàn",
    "english": "(mathematical) operation",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2238",
    "hanzi": "运行",
    "pinyin": "yùn xíng",
    "english": "to be in motion, to move, (of a computer) to run",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2239",
    "hanzi": "酝酿",
    "pinyin": "yùn niàng",
    "english": "(of alcohol) to ferment, (of a crisis) to be brewing, to mull over (an issue), to hold exploratory discussions",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2240",
    "hanzi": "孕育",
    "pinyin": "yùn yù",
    "english": "to be pregnant, to produce offspring, to nurture (a development, school of thought, artwork etc), fig. replete with (culture etc)",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2241",
    "hanzi": "砸",
    "pinyin": "zá",
    "english": "smash, smashed, to fail, to get it wrong",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2242",
    "hanzi": "杂技",
    "pinyin": "zá jì",
    "english": "acrobatics",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2243",
    "hanzi": "杂交",
    "pinyin": "zá jiāo",
    "english": "a hybrid",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2244",
    "hanzi": "咋",
    "pinyin": "zǎ",
    "english": "dialectal equivalent of 怎麼|怎么[zěn me]",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2245",
    "hanzi": "灾难",
    "pinyin": "zāi nàn",
    "english": "disaster, catastrophe",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2246",
    "hanzi": "栽培",
    "pinyin": "zāi péi",
    "english": "to grow, to cultivate, to train, to educate, to patronize",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2247",
    "hanzi": "宰",
    "pinyin": "zǎi",
    "english": "to slaughter livestock, to govern or rule, to cheat customers, Imperial official in dynastic China",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2248",
    "hanzi": "在乎",
    "pinyin": "zài hu",
    "english": "determined by, to care about, to mind",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2249",
    "hanzi": "在意",
    "pinyin": "zài yì",
    "english": "to care about, to mind",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2250",
    "hanzi": "再接再厉",
    "pinyin": "zài jiē zài lì",
    "english": "to continue the struggle (idiom); to persist, unremitting efforts",
    "level": "HSK 6",
    "lesson": 45
  },
  {
    "id": "HSK6-2251",
    "hanzi": "攒",
    "pinyin": "zǎn",
    "english": "to collect, to hoard, to accumulate, to save",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2252",
    "hanzi": "赞叹",
    "pinyin": "zàn tàn",
    "english": "to sigh or gasp in admiration, high praise",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2253",
    "hanzi": "赞同",
    "pinyin": "zàn tóng",
    "english": "to approve of, to endorse, (vote) in favor",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2254",
    "hanzi": "赞扬",
    "pinyin": "zàn yáng",
    "english": "to praise, to approve of, to show approval",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2255",
    "hanzi": "赞助",
    "pinyin": "zàn zhù",
    "english": "to support, to assist, to sponsor",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2256",
    "hanzi": "暂且",
    "pinyin": "zàn qiě",
    "english": "for now, for the time being, temporarily",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2257",
    "hanzi": "糟蹋",
    "pinyin": "zāo tà",
    "english": "to waste, to defile, to abuse, to insult, to defile, to trample on, to wreck, also pr. [zāo ta]",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2258",
    "hanzi": "遭受",
    "pinyin": "zāo shòu",
    "english": "to suffer, to sustain (loss, misfortune)",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2259",
    "hanzi": "遭殃",
    "pinyin": "zāo yāng",
    "english": "to suffer a calamity",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2260",
    "hanzi": "遭遇",
    "pinyin": "zāo yù",
    "english": "to meet with, to encounter, (bitter) experience",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2261",
    "hanzi": "造反",
    "pinyin": "zào fǎn",
    "english": "to rebel, to revolt",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2262",
    "hanzi": "造型",
    "pinyin": "zào xíng",
    "english": "modeling, mold-making, model or mold, molding, pose",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2263",
    "hanzi": "噪音",
    "pinyin": "zào yīn",
    "english": "rumble, noise, static (in a signal)",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2264",
    "hanzi": "责怪",
    "pinyin": "zé guài",
    "english": "to blame, to rebuke",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2265",
    "hanzi": "贼",
    "pinyin": "zéi",
    "english": "thief, traitor, wily, deceitful, evil, extremely",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2266",
    "hanzi": "增添",
    "pinyin": "zēng tiān",
    "english": "to add, to increase",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2267",
    "hanzi": "赠送",
    "pinyin": "zèng sòng",
    "english": "to present as a gift",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2268",
    "hanzi": "渣",
    "pinyin": "zhā",
    "english": "slag (in mining or smelting), dregs",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2269",
    "hanzi": "扎",
    "pinyin": "zhā",
    "english": "to prick, to run or stick (a needle etc) into, jug (a classifier for liquids such as beer)",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2270",
    "hanzi": "扎实",
    "pinyin": "zhā shi",
    "english": "strong, solid, sturdy, firm, practical",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2271",
    "hanzi": "眨",
    "pinyin": "zhǎ",
    "english": "to blink, to wink",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2272",
    "hanzi": "诈骗",
    "pinyin": "zhà piàn",
    "english": "to defraud, to swindle, to blackmail",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2273",
    "hanzi": "摘要",
    "pinyin": "zhāi yào",
    "english": "summary, abstract",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2274",
    "hanzi": "债券",
    "pinyin": "zhài quàn",
    "english": "bond, debenture",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2275",
    "hanzi": "沾光",
    "pinyin": "zhān guāng",
    "english": "to bask in the light, fig. to benefit from association with sb or sth, reflected glory",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2276",
    "hanzi": "瞻仰",
    "pinyin": "zhān yǎng",
    "english": "to revere, to admire",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2277",
    "hanzi": "斩钉截铁",
    "pinyin": "zhǎn dīng jié tiě",
    "english": "to chop the nail and slice the iron (idiom); resolute and decisive, unhesitating, definitely, without any doubt",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2278",
    "hanzi": "展示",
    "pinyin": "zhǎn shì",
    "english": "to reveal, to display, to show, to exhibit sth",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2279",
    "hanzi": "展望",
    "pinyin": "zhǎn wàng",
    "english": "outlook, prospect, to look ahead, to look forward to",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2280",
    "hanzi": "展现",
    "pinyin": "zhǎn xiàn",
    "english": "to come out, to emerge",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2281",
    "hanzi": "崭新",
    "pinyin": "zhǎn xīn",
    "english": "brand new",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2282",
    "hanzi": "战斗",
    "pinyin": "zhàn dòu",
    "english": "to fight, to battle, 次[cì]",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2283",
    "hanzi": "战略",
    "pinyin": "zhàn lvè",
    "english": "strategy",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2284",
    "hanzi": "战术",
    "pinyin": "zhàn shù",
    "english": "tactics",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2285",
    "hanzi": "战役",
    "pinyin": "zhàn yì",
    "english": "military campaign",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2286",
    "hanzi": "占据",
    "pinyin": "zhàn jù",
    "english": "to occupy, to hold",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2287",
    "hanzi": "占领",
    "pinyin": "zhàn lǐng",
    "english": "to occupy (a territory), to hold",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2288",
    "hanzi": "占有",
    "pinyin": "zhàn yǒu",
    "english": "to have, to own, to hold, to possess",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2289",
    "hanzi": "章程",
    "pinyin": "zhāng chéng",
    "english": "rules, regulations, constitution, statute, articles of association (of company), articles of incorporation, charter (of a corporation), by-laws",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2290",
    "hanzi": "长辈",
    "pinyin": "zhǎng bèi",
    "english": "one's elders, older generation",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2291",
    "hanzi": "障碍",
    "pinyin": "zhàng ài",
    "english": "barrier, obstruction, hindrance, impediment, obstacle",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2292",
    "hanzi": "帐篷",
    "pinyin": "zhàng peng",
    "english": "tent, 座[zuò]",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2293",
    "hanzi": "招收",
    "pinyin": "zhāo shōu",
    "english": "to hire, to recruit",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2294",
    "hanzi": "招投标",
    "pinyin": "zhāo tóu biāo",
    "english": "bid inviting and bid offering, bidding, auction",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2295",
    "hanzi": "朝气蓬勃",
    "pinyin": "zhāo qì péng bó",
    "english": "full of youthful energy (idiom); vigorous, energetic, a bright spark",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2296",
    "hanzi": "着迷",
    "pinyin": "zháo mí",
    "english": "to be fascinated, to be captivated",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2297",
    "hanzi": "沼泽",
    "pinyin": "zhǎo zé",
    "english": "marsh, swamp, wetlands, glade",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2298",
    "hanzi": "照料",
    "pinyin": "zhào liào",
    "english": "to tend, to take care of sb",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2299",
    "hanzi": "照样",
    "pinyin": "zhào yàng",
    "english": "as before, (same) as usual",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2300",
    "hanzi": "照耀",
    "pinyin": "zhào yào",
    "english": "to shine, to illuminate",
    "level": "HSK 6",
    "lesson": 46
  },
  {
    "id": "HSK6-2301",
    "hanzi": "照应",
    "pinyin": "zhào yìng",
    "english": "to correlate with, to correspond to",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2302",
    "hanzi": "遮挡",
    "pinyin": "zhē dǎng",
    "english": "to shelter, to shelter from",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2303",
    "hanzi": "折腾",
    "pinyin": "zhē teng",
    "english": "to toss from side to side (e.g. sleeplessly), to repeat sth over and over again, to torment sb, to play crazy",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2304",
    "hanzi": "折",
    "pinyin": "zhé",
    "english": "variant of 折[zhé], to fold",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2305",
    "hanzi": "折磨",
    "pinyin": "zhé mó",
    "english": "to persecute, to torment",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2306",
    "hanzi": "真相",
    "pinyin": "zhēn xiàng",
    "english": "the truth about sth, the actual facts",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2307",
    "hanzi": "真挚",
    "pinyin": "zhēn zhì",
    "english": "sincere, sincerity",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2308",
    "hanzi": "珍贵",
    "pinyin": "zhēn guì",
    "english": "precious",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2309",
    "hanzi": "珍稀",
    "pinyin": "zhēn xī",
    "english": "rare, precious and uncommon",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2310",
    "hanzi": "珍珠",
    "pinyin": "zhēn zhū",
    "english": "pearl",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2311",
    "hanzi": "侦探",
    "pinyin": "zhēn tàn",
    "english": "detective, to do detective work",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2312",
    "hanzi": "斟酌",
    "pinyin": "zhēn zhuó",
    "english": "to consider, to deliberate, to fill up a cup to the brim",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2313",
    "hanzi": "阵地",
    "pinyin": "zhèn dì",
    "english": "position, front",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2314",
    "hanzi": "阵容",
    "pinyin": "zhèn róng",
    "english": "troop arrangement, battle formation, line-up (of a sports team etc)",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2315",
    "hanzi": "镇定",
    "pinyin": "zhèn dìng",
    "english": "calm, unperturbed, cool",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2316",
    "hanzi": "镇静",
    "pinyin": "zhèn jìng",
    "english": "calm, cool",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2317",
    "hanzi": "镇压",
    "pinyin": "zhèn yā",
    "english": "suppression, repression, to suppress, to put down, to quell",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2318",
    "hanzi": "振奋",
    "pinyin": "zhèn fèn",
    "english": "to stir oneself up, to raise one's spirits, to inspire",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2319",
    "hanzi": "振兴",
    "pinyin": "zhèn xīng",
    "english": "to revive, to revitalize, to invigorate, to re-energize",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2320",
    "hanzi": "震惊",
    "pinyin": "zhèn jīng",
    "english": "to shock, to astonish",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2321",
    "hanzi": "争端",
    "pinyin": "zhēng duān",
    "english": "dispute, controversy, conflict",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2322",
    "hanzi": "争夺",
    "pinyin": "zhēng duó",
    "english": "to fight over, to contest, to vie over",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2323",
    "hanzi": "争气",
    "pinyin": "zhēng qì",
    "english": "to work hard for sth, to resolve on improvement, determined not to fall short",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2324",
    "hanzi": "争先恐后",
    "pinyin": "zhēng xiān kǒng hòu",
    "english": "striving to be first and fearing to be last (idiom); outdoing one another",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2325",
    "hanzi": "争议",
    "pinyin": "zhēng yì",
    "english": "controversy, dispute, to dispute",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2326",
    "hanzi": "蒸发",
    "pinyin": "zhēng fā",
    "english": "to evaporate, evaporation",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2327",
    "hanzi": "征服",
    "pinyin": "zhēng fú",
    "english": "to conquer, to subdue, to vanquish",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2328",
    "hanzi": "征收",
    "pinyin": "zhēng shōu",
    "english": "to levy (a fine), to impose (a tariff)",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2329",
    "hanzi": "正月",
    "pinyin": "zhēng yuè",
    "english": "first month of the lunar year",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2330",
    "hanzi": "挣扎",
    "pinyin": "zhēng zhá",
    "english": "to struggle",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2331",
    "hanzi": "整顿",
    "pinyin": "zhěng dùn",
    "english": "to tidy up, to reorganize, to consolidate, to rectify",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2332",
    "hanzi": "正当",
    "pinyin": "zhèng dāng",
    "english": "honest, reasonable, fair, sensible, timely, just (when needed)",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2333",
    "hanzi": "正负",
    "pinyin": "zhèng fù",
    "english": "positive and negative",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2334",
    "hanzi": "正规",
    "pinyin": "zhèng guī",
    "english": "regular, according to standards",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2335",
    "hanzi": "正经",
    "pinyin": "zhèng jīng",
    "english": "decent, honorable, proper, serious, according to standards",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2336",
    "hanzi": "正气",
    "pinyin": "zhèng qì",
    "english": "healthy environment, healthy atmosphere, righteousness, vital energy (in Chinese medicine)",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2337",
    "hanzi": "正义",
    "pinyin": "zhèng yì",
    "english": "justice, righteous, righteousness",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2338",
    "hanzi": "政权",
    "pinyin": "zhèng quán",
    "english": "regime, (wield) political power",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2339",
    "hanzi": "证实",
    "pinyin": "zhèng shí",
    "english": "to confirm (sth to be true), to verify",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2340",
    "hanzi": "证书",
    "pinyin": "zhèng shū",
    "english": "credentials, certificate",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2341",
    "hanzi": "郑重",
    "pinyin": "zhèng zhòng",
    "english": "serious, solemn",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2342",
    "hanzi": "症状",
    "pinyin": "zhèng zhuàng",
    "english": "symptom (of an illness)",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2343",
    "hanzi": "枝",
    "pinyin": "zhī",
    "english": "branch, classifier for sticks, rods, pencils etc",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2344",
    "hanzi": "支撑",
    "pinyin": "zhī chēng",
    "english": "to prop up, to support, strut, brace",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2345",
    "hanzi": "支出",
    "pinyin": "zhī chū",
    "english": "to spend, to pay out, expense",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2346",
    "hanzi": "支流",
    "pinyin": "zhī liú",
    "english": "tributary (river)",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2347",
    "hanzi": "支配",
    "pinyin": "zhī pèi",
    "english": "to control, to dominate, to allocate",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2348",
    "hanzi": "支援",
    "pinyin": "zhī yuán",
    "english": "to provide assistance, to support, to back",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2349",
    "hanzi": "支柱",
    "pinyin": "zhī zhù",
    "english": "mainstay, pillar, prop, backbone",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2350",
    "hanzi": "知觉",
    "pinyin": "zhī jué",
    "english": "perception, consciousness",
    "level": "HSK 6",
    "lesson": 47
  },
  {
    "id": "HSK6-2351",
    "hanzi": "知足常乐",
    "pinyin": "zhī zú cháng lè",
    "english": "satisfied with what one has (idiom)",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2352",
    "hanzi": "脂肪",
    "pinyin": "zhī fáng",
    "english": "body fat",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2353",
    "hanzi": "直播",
    "pinyin": "zhí bō",
    "english": "live broadcast (not recorded), direct internet broadcasting",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2354",
    "hanzi": "值班",
    "pinyin": "zhí bān",
    "english": "to work a shift, on duty",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2355",
    "hanzi": "殖民地",
    "pinyin": "zhí mín dì",
    "english": "colony",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2356",
    "hanzi": "职能",
    "pinyin": "zhí néng",
    "english": "function, role",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2357",
    "hanzi": "职位",
    "pinyin": "zhí wèi",
    "english": "post, office, position",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2358",
    "hanzi": "职务",
    "pinyin": "zhí wù",
    "english": "post, position, job, duties",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2359",
    "hanzi": "指标",
    "pinyin": "zhǐ biāo",
    "english": "norm, index, target",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2360",
    "hanzi": "指定",
    "pinyin": "zhǐ dìng",
    "english": "to appoint, to assign, to indicate clearly and with certainty, designated",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2361",
    "hanzi": "指甲",
    "pinyin": "zhǐ jia",
    "english": "fingernail",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2362",
    "hanzi": "指令",
    "pinyin": "zhǐ lìng",
    "english": "order, command, instruction",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2363",
    "hanzi": "指南针",
    "pinyin": "zhǐ nán zhēn",
    "english": "compass",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2364",
    "hanzi": "指示",
    "pinyin": "zhǐ shì",
    "english": "to point out, to indicate, to instruct, directives, instructions",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2365",
    "hanzi": "指望",
    "pinyin": "zhǐ wàng",
    "english": "to hope for sth, to count on, hope",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2366",
    "hanzi": "指责",
    "pinyin": "zhǐ zé",
    "english": "to criticize, to find fault with, to denounce",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2367",
    "hanzi": "治安",
    "pinyin": "zhì ān",
    "english": "law and order, public security",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2368",
    "hanzi": "治理",
    "pinyin": "zhì lǐ",
    "english": "to govern, to administer, to manage, to control, governance",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2369",
    "hanzi": "制裁",
    "pinyin": "zhì cái",
    "english": "to punish, punishment, sanctions (incl. economic)",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2370",
    "hanzi": "制订",
    "pinyin": "zhì dìng",
    "english": "to work out, to formulate",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2371",
    "hanzi": "制服",
    "pinyin": "zhì fú",
    "english": "to subdue, to check, to bring under control, (in former times) what one is allowed to wear depending on social status, uniform (army, party, school etc), livery (for company employees)",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2372",
    "hanzi": "制约",
    "pinyin": "zhì yuē",
    "english": "to restrict, condition",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2373",
    "hanzi": "制止",
    "pinyin": "zhì zhǐ",
    "english": "to curb, to put a stop to, to stop, to check, to limit",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2374",
    "hanzi": "致辞",
    "pinyin": "zhì cí",
    "english": "to express in words or writing, to make a speech (esp. short introduction, vote of thanks, afterword, funeral homily etc), to address (an audience), same as 致詞|致词",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2375",
    "hanzi": "致力于",
    "pinyin": "zhì lì yú",
    "english": "Committed to",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2376",
    "hanzi": "致使",
    "pinyin": "zhì shǐ",
    "english": "to cause, to result in",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2377",
    "hanzi": "智力",
    "pinyin": "zhì lì",
    "english": "intelligence, intellect",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2378",
    "hanzi": "智能",
    "pinyin": "zhì néng",
    "english": "intelligent, able, smart (phone, system, bomb etc)",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2379",
    "hanzi": "智商",
    "pinyin": "zhì shāng",
    "english": "IQ (intelligence quotient)",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2380",
    "hanzi": "滞留",
    "pinyin": "zhì liú",
    "english": "to detain, retention",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2381",
    "hanzi": "志气",
    "pinyin": "zhì qì",
    "english": "ambition, resolve, backbone, drive, spirit",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2382",
    "hanzi": "忠诚",
    "pinyin": "zhōng chéng",
    "english": "devoted, fidelity, loyal, loyalty",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2383",
    "hanzi": "忠实",
    "pinyin": "zhōng shí",
    "english": "faithful",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2384",
    "hanzi": "终点",
    "pinyin": "zhōng diǎn",
    "english": "the end, end point, finishing line (in a race), destination, terminus",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2385",
    "hanzi": "终究",
    "pinyin": "zhōng jiū",
    "english": "in the end, after all is said and done",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2386",
    "hanzi": "终年",
    "pinyin": "zhōng nián",
    "english": "entire year, throughout the year, age at death",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2387",
    "hanzi": "终身",
    "pinyin": "zhōng shēn",
    "english": "lifelong, all one's life, marriage",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2388",
    "hanzi": "终止",
    "pinyin": "zhōng zhǐ",
    "english": "to stop, to terminate (law)",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2389",
    "hanzi": "中断",
    "pinyin": "zhōng duàn",
    "english": "to cut short, to break off, to discontinue, to interrupt",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2390",
    "hanzi": "中立",
    "pinyin": "zhōng lì",
    "english": "neutral",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2391",
    "hanzi": "中央",
    "pinyin": "zhōng yāng",
    "english": "central, middle, center, central authorities (of a state)",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2392",
    "hanzi": "衷心",
    "pinyin": "zhōng xīn",
    "english": "heartfelt, wholehearted, cordial",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2393",
    "hanzi": "种子",
    "pinyin": "zhǒng zi",
    "english": "seed, 粒[lì]",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2394",
    "hanzi": "种族",
    "pinyin": "zhǒng zú",
    "english": "race, ethnicity",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2395",
    "hanzi": "肿瘤",
    "pinyin": "zhǒng liú",
    "english": "tumor",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2396",
    "hanzi": "重心",
    "pinyin": "zhòng xīn",
    "english": "center of gravity, central core, main part",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2397",
    "hanzi": "众所周知",
    "pinyin": "zhòng suǒ zhōu zhī",
    "english": "see 眾所周知|众所周知[zhòng suǒ zhōu zhī]",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2398",
    "hanzi": "州",
    "pinyin": "zhōu",
    "english": "prefecture, state (e.g. of US), province (old), administrative division (old)",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2399",
    "hanzi": "舟",
    "pinyin": "zhōu",
    "english": "boat",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2400",
    "hanzi": "粥",
    "pinyin": "zhōu",
    "english": "congee, gruel, porridge",
    "level": "HSK 6",
    "lesson": 48
  },
  {
    "id": "HSK6-2401",
    "hanzi": "周边",
    "pinyin": "zhōu biān",
    "english": "periphery, rim, also written 周邊|周边",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2402",
    "hanzi": "周密",
    "pinyin": "zhōu mì",
    "english": "careful, thorough",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2403",
    "hanzi": "周年",
    "pinyin": "zhōu nián",
    "english": "anniversary, annual",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2404",
    "hanzi": "周期",
    "pinyin": "zhōu qī",
    "english": "period, cycle",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2405",
    "hanzi": "周折",
    "pinyin": "zhōu zhé",
    "english": "complication, twists and turns, problem, setback",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2406",
    "hanzi": "周转",
    "pinyin": "zhōu zhuǎn",
    "english": "turnover (in cash or personnel), to have enough resources to cover a need, also written 周轉|周转",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2407",
    "hanzi": "皱纹",
    "pinyin": "zhòu wén",
    "english": "wrinkle",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2408",
    "hanzi": "昼夜",
    "pinyin": "zhòu yè",
    "english": "day and night, period of 24 hours, continuously, without stop",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2409",
    "hanzi": "株",
    "pinyin": "zhū",
    "english": "tree trunk, stump (tree root), a plant, classifier for trees or plants, to involve others (in shady business)",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2410",
    "hanzi": "诸位",
    "pinyin": "zhū wèi",
    "english": "(pron) everyone, Ladies and Gentlemen, Sirs",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2411",
    "hanzi": "逐年",
    "pinyin": "zhú nián",
    "english": "year after year, with each passing year, over the years",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2412",
    "hanzi": "拄",
    "pinyin": "zhǔ",
    "english": "to lean on, to prop on",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2413",
    "hanzi": "主办",
    "pinyin": "zhǔ bàn",
    "english": "to organize, to host (a conference or sports event)",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2414",
    "hanzi": "主导",
    "pinyin": "zhǔ dǎo",
    "english": "to lead, to manage",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2415",
    "hanzi": "主管",
    "pinyin": "zhǔ guǎn",
    "english": "in charge, responsible for",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2416",
    "hanzi": "主流",
    "pinyin": "zhǔ liú",
    "english": "main stream (of a river), fig. the essential point, main viewpoint of a matter, mainstream (culture etc)",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2417",
    "hanzi": "主权",
    "pinyin": "zhǔ quán",
    "english": "sovereignty",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2418",
    "hanzi": "主题",
    "pinyin": "zhǔ tí",
    "english": "theme, subject",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2419",
    "hanzi": "住宅",
    "pinyin": "zhù zhái",
    "english": "residence, tenement",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2420",
    "hanzi": "注射",
    "pinyin": "zhù shè",
    "english": "injection, to inject",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2421",
    "hanzi": "注视",
    "pinyin": "zhù shì",
    "english": "to watch attentively, to gaze",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2422",
    "hanzi": "注释",
    "pinyin": "zhù shì",
    "english": "marginal notes, annotation, to annotate, to add comments to text",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2423",
    "hanzi": "注重",
    "pinyin": "zhù zhòng",
    "english": "to pay attention to, to emphasize",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2424",
    "hanzi": "助理",
    "pinyin": "zhù lǐ",
    "english": "assistant",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2425",
    "hanzi": "助手",
    "pinyin": "zhù shǒu",
    "english": "assistant, helper",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2426",
    "hanzi": "著作",
    "pinyin": "zhù zuò",
    "english": "to write, literary work, book, article, writings",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2427",
    "hanzi": "驻扎",
    "pinyin": "zhù zhā",
    "english": "to station, to garrison (troops)",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2428",
    "hanzi": "铸造",
    "pinyin": "zhù zào",
    "english": "to cast (pour metal into a mold)",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2429",
    "hanzi": "拽",
    "pinyin": "zhuài",
    "english": "to pull, to tug at (sth)",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2430",
    "hanzi": "专长",
    "pinyin": "zhuān cháng",
    "english": "specialty, special knowledge or ability",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2431",
    "hanzi": "专程",
    "pinyin": "zhuān chéng",
    "english": "special-purpose trip",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2432",
    "hanzi": "专科",
    "pinyin": "zhuān kē",
    "english": "specialized subject, branch (of medicine), specialized training school",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2433",
    "hanzi": "专利",
    "pinyin": "zhuān lì",
    "english": "patent",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2434",
    "hanzi": "专题",
    "pinyin": "zhuān tí",
    "english": "special topic",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2435",
    "hanzi": "砖瓦",
    "pinyin": "zhuān wǎ",
    "english": "tiles and bricks",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2436",
    "hanzi": "转达",
    "pinyin": "zhuǎn dá",
    "english": "to pass on, to convey, to communicate",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2437",
    "hanzi": "转让",
    "pinyin": "zhuǎn ràng",
    "english": "transfer (technology, goods etc), conveyancing (property)",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2438",
    "hanzi": "转移",
    "pinyin": "zhuǎn yí",
    "english": "to shift, to divert or distract (attention etc), to change, to transform, metastasis (medicine)",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2439",
    "hanzi": "转折",
    "pinyin": "zhuǎn zhé",
    "english": "shift in the trend of events, plot shift in a book, twists and turns",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2440",
    "hanzi": "传记",
    "pinyin": "zhuàn jì",
    "english": "biography, 部[bù]",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2441",
    "hanzi": "装备",
    "pinyin": "zhuāng bèi",
    "english": "equipment, to equip, to outfit",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2442",
    "hanzi": "装卸",
    "pinyin": "zhuāng xiè",
    "english": "to load or unload, to transfer, to assemble and disassemble",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2443",
    "hanzi": "庄严",
    "pinyin": "zhuāng yán",
    "english": "stately",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2444",
    "hanzi": "庄重",
    "pinyin": "zhuāng zhòng",
    "english": "grave, solemn, dignified",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2445",
    "hanzi": "幢",
    "pinyin": "zhuàng",
    "english": "classifier for buildings, carriage curtain (old)",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2446",
    "hanzi": "壮观",
    "pinyin": "zhuàng guān",
    "english": "spectacular, magnificent sight",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2447",
    "hanzi": "壮丽",
    "pinyin": "zhuàng lì",
    "english": "magnificence, magnificent, majestic, glorious",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2448",
    "hanzi": "壮烈",
    "pinyin": "zhuàng liè",
    "english": "brave, heroic",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2449",
    "hanzi": "追悼",
    "pinyin": "zhuī dào",
    "english": "to mourn, to pay last respects, mourning, memorial (service etc)",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2450",
    "hanzi": "追究",
    "pinyin": "zhuī jiū",
    "english": "to investigate, to look into",
    "level": "HSK 6",
    "lesson": 49
  },
  {
    "id": "HSK6-2451",
    "hanzi": "准则",
    "pinyin": "zhǔn zé",
    "english": "norm, standard, criterion",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2452",
    "hanzi": "琢磨",
    "pinyin": "zhuó mó",
    "english": "to carve and polish (jade), to polish and refine a literary work",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2453",
    "hanzi": "着手",
    "pinyin": "zhuó shǒu",
    "english": "to put one's hand to it, to start out on a task, to set out",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2454",
    "hanzi": "着想",
    "pinyin": "zhuó xiǎng",
    "english": "to give thought (to others), to consider (other people's needs)",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2455",
    "hanzi": "着重",
    "pinyin": "zhuó zhòng",
    "english": "put emphasis on, to stress, to emphasize",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2456",
    "hanzi": "卓越",
    "pinyin": "zhuó yuè",
    "english": "outstanding, surpassing, distinguished, splendid",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2457",
    "hanzi": "资本",
    "pinyin": "zī běn",
    "english": "capital (economics)",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2458",
    "hanzi": "资产",
    "pinyin": "zī chǎn",
    "english": "property, assets",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2459",
    "hanzi": "资深",
    "pinyin": "zī shēn",
    "english": "senior (in terms of depth of accumulated experience), deeply qualified",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2460",
    "hanzi": "资助",
    "pinyin": "zī zhù",
    "english": "to subsidize, to provide financial aid, subsidy",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2461",
    "hanzi": "姿态",
    "pinyin": "zī tài",
    "english": "attitude, posture, stance",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2462",
    "hanzi": "滋味",
    "pinyin": "zī wèi",
    "english": "taste, flavor, feeling",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2463",
    "hanzi": "滋长",
    "pinyin": "zī zhǎng",
    "english": "to grow (usually of abstract things), to yield, to develop",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2464",
    "hanzi": "子弹",
    "pinyin": "zǐ dàn",
    "english": "bullet, 顆|颗, 發|发[fā]",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2465",
    "hanzi": "字母",
    "pinyin": "zì mǔ",
    "english": "letter (of the alphabet)",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2466",
    "hanzi": "自卑",
    "pinyin": "zì bēi",
    "english": "feeling inferior, self-abased",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2467",
    "hanzi": "自发",
    "pinyin": "zì fā",
    "english": "spontaneous",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2468",
    "hanzi": "自力更生",
    "pinyin": "zì lì gēng shēng",
    "english": "regeneration through one's own effort (idiom), self-reliance",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2469",
    "hanzi": "自满",
    "pinyin": "zì mǎn",
    "english": "complacent, self-satisfied",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2470",
    "hanzi": "自主",
    "pinyin": "zì zhǔ",
    "english": "independent, to act for oneself, autonomous",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2471",
    "hanzi": "踪迹",
    "pinyin": "zōng jì",
    "english": "tracks, trail, footprint, trace, vestige",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2472",
    "hanzi": "宗旨",
    "pinyin": "zōng zhǐ",
    "english": "objective, aim, goal",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2473",
    "hanzi": "棕色",
    "pinyin": "zōng sè",
    "english": "brown",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2474",
    "hanzi": "总而言之",
    "pinyin": "zǒng ér yán zhī",
    "english": "in short, in a word, in brief",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2475",
    "hanzi": "总和",
    "pinyin": "zǒng hé",
    "english": "sum",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2476",
    "hanzi": "纵横",
    "pinyin": "zòng héng",
    "english": "lit. warp and weft in weaving; vertically and horizontal, length and breadth, criss-crossed, able to move unhindered, abbr. for 合縱連橫|合纵连横, School of Diplomacy during the Warring States Period (475-221 BC)",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2477",
    "hanzi": "走廊",
    "pinyin": "zǒu láng",
    "english": "corridor, aisle, hallway, colonnade, passageway, piazza, veranda",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2478",
    "hanzi": "走漏",
    "pinyin": "zǒu lòu",
    "english": "to leak (of information, liquid etc), to divulge",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2479",
    "hanzi": "走私",
    "pinyin": "zǒu sī",
    "english": "to smuggle, to have an illicit affair",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2480",
    "hanzi": "揍",
    "pinyin": "zòu",
    "english": "to beat up, to break to pieces",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2481",
    "hanzi": "租赁",
    "pinyin": "zū lìn",
    "english": "to rent, to lease, to hire",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2482",
    "hanzi": "足以",
    "pinyin": "zú yǐ",
    "english": "sufficient to..., so much so that, so that",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2483",
    "hanzi": "组",
    "pinyin": "zǔ",
    "english": "to form, to organize, group, team, classifier for sets, series, groups of people, batteries",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2484",
    "hanzi": "阻碍",
    "pinyin": "zǔ ài",
    "english": "to obstruct, to hinder, to block",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2485",
    "hanzi": "阻拦",
    "pinyin": "zǔ lán",
    "english": "to stop, to obstruct",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2486",
    "hanzi": "阻挠",
    "pinyin": "zǔ náo",
    "english": "to thwart, to obstruct (sth)",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2487",
    "hanzi": "祖父",
    "pinyin": "zǔ fù",
    "english": "father's father, paternal grandfather",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2488",
    "hanzi": "钻研",
    "pinyin": "zuān yán",
    "english": "to study meticulously, to delve into",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2489",
    "hanzi": "钻石",
    "pinyin": "zuàn shí",
    "english": "diamond",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2490",
    "hanzi": "嘴唇",
    "pinyin": "zuǐ chún",
    "english": "lip",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2491",
    "hanzi": "尊严",
    "pinyin": "zūn yán",
    "english": "dignity, sanctity, honor, majesty",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2492",
    "hanzi": "遵循",
    "pinyin": "zūn xún",
    "english": "to follow, to abide by, to comply with, compliance",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2493",
    "hanzi": "左右",
    "pinyin": "zuǒ yòu",
    "english": "left and right, approximately, attendant, to control, to influence",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2494",
    "hanzi": "做东",
    "pinyin": "zuò dōng",
    "english": "to act as host",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2495",
    "hanzi": "做主",
    "pinyin": "zuò zhǔ",
    "english": "make the decision, take charge of, back up, support, be host",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2496",
    "hanzi": "座右铭",
    "pinyin": "zuò yòu míng",
    "english": "motto, maxim",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2497",
    "hanzi": "作弊",
    "pinyin": "zuò bì",
    "english": "to practice fraud, to cheat, to engage in corrupt practices",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2498",
    "hanzi": "作废",
    "pinyin": "zuò fèi",
    "english": "to become invalid, to cancel, to delete, to nullify",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2499",
    "hanzi": "作风",
    "pinyin": "zuò fēng",
    "english": "style, style of work, way",
    "level": "HSK 6",
    "lesson": 50
  },
  {
    "id": "HSK6-2500",
    "hanzi": "作息",
    "pinyin": "zuò xī",
    "english": "work and rest",
    "level": "HSK 6",
    "lesson": 50
  }
];

export const hskVocabulary: VocabularyItem[] = data as VocabularyItem[];
