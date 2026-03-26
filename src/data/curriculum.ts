export type VocabularyItem = {
  word: string;
  pinyin: string;
  translation: string;
};

export type GrammarPoint = {
  title: string;
  explanation: string;
  examples: {
    chinese: string;
    pinyin: string;
    english: string;
  }[];
};

export type Exercise = {
  question: string;
  options?: string[];
  answer: string;
  type: 'multiple-choice' | 'translation' | 'speaking';
};

export type Lesson = {
  id: string;
  title: string;
  description: string;
  vocabulary: VocabularyItem[];
  grammar: GrammarPoint[];
  exercises: Exercise[];
};

export type Module = {
  id: string;
  title: string;
  lessons: Lesson[];
};

export type Curriculum = {
  [key: string]: Module[];
};

export const curriculumData: Curriculum = {
  'HSK 1': [
    {
      id: 'hsk1-m1',
      title: 'Greetings and Basics',
      lessons: [
        {
          id: 'hsk1-m1-l1',
          title: 'Hello and Goodbye',
          description: 'Learn basic greetings and how to say goodbye.',
          vocabulary: [
            { word: '你好', pinyin: 'nǐ hǎo', translation: 'hello' },
            { word: '再见', pinyin: 'zàijiàn', translation: 'goodbye' },
            { word: '您', pinyin: 'nín', translation: 'you (polite)' },
            { word: '好', pinyin: 'hǎo', translation: 'good' },
            { word: '谢谢', pinyin: 'xièxie', translation: 'thank you' },
            { word: '不客气', pinyin: 'bú kèqi', translation: "you're welcome" }
          ],
          grammar: [
            {
              title: 'Basic Greeting',
              explanation: 'The most common way to say hello is "你好" (nǐ hǎo).',
              examples: [
                { chinese: '你好！', pinyin: 'Nǐ hǎo!', english: 'Hello!' },
                { chinese: '老师好！', pinyin: 'Lǎoshī hǎo!', english: 'Hello, teacher!' }
              ]
            }
          ],
          exercises: [
            {
              type: 'multiple-choice',
              question: 'How do you say "Goodbye" in Chinese?',
              options: ['你好', '再见', '谢谢', '对不起'],
              answer: '再见'
            }
          ]
        },
        {
          id: 'hsk1-m1-l2',
          title: 'Numbers 1-10',
          description: 'Learn to count from one to ten.',
          vocabulary: [
            { word: '一', pinyin: 'yī', translation: 'one' },
            { word: '二', pinyin: 'èr', translation: 'two' },
            { word: '三', pinyin: 'sān', translation: 'three' },
            { word: '四', pinyin: 'sì', translation: 'four' },
            { word: '五', pinyin: 'wǔ', translation: 'five' },
            { word: '六', pinyin: 'liù', translation: 'six' },
            { word: '七', pinyin: 'qī', translation: 'seven' },
            { word: '八', pinyin: 'bā', translation: 'eight' },
            { word: '九', pinyin: 'jiǔ', translation: 'nine' },
            { word: '十', pinyin: 'shí', translation: 'ten' }
          ],
          grammar: [
            {
              title: 'Numbers as Adjectives',
              explanation: 'Numbers can be used directly before nouns in some cases, but usually require a measure word.',
              examples: [
                { chinese: '一个人', pinyin: 'yī gè rén', english: 'one person' }
              ]
            }
          ],
          exercises: [
            {
              type: 'translation',
              question: 'Translate "Three" to Chinese.',
              answer: '三'
            }
          ]
        }
      ]
    },
    {
      id: 'hsk1-m2',
      title: 'Personal Information',
      lessons: [
        {
          id: 'hsk1-m2-l1',
          title: 'Introducing Yourself',
          description: 'Learn how to say your name and where you are from.',
          vocabulary: [
            { word: '我', pinyin: 'wǒ', translation: 'I, me' },
            { word: '叫', pinyin: 'jiào', translation: 'to be called' },
            { word: '什么', pinyin: 'shénme', translation: 'what' },
            { word: '名字', pinyin: 'míngzi', translation: 'name' },
            { word: '哪', pinyin: 'nǎ', translation: 'which' },
            { word: '国', pinyin: 'guó', translation: 'country' },
            { word: '人', pinyin: 'rén', translation: 'person' }
          ],
          grammar: [
            {
              title: 'Asking for Name',
              explanation: 'Use "你叫什么名字？" to ask someone\'s name.',
              examples: [
                { chinese: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzi?', english: 'What is your name?' },
                { chinese: '我叫李华。', pinyin: 'Wǒ jiào Lǐ Huá.', english: 'My name is Li Hua.' }
              ]
            }
          ],
          exercises: [
            {
              type: 'speaking',
              question: 'Say "My name is [Your Name]" in Chinese.',
              answer: '我叫...'
            }
          ]
        }
      ]
    },
    {
      id: 'hsk1-m3',
      title: 'Family and People',
      lessons: [
        {
          id: 'hsk1-m3-l1',
          title: 'Family Members',
          description: 'Learn the words for family members.',
          vocabulary: [
            { word: '家', pinyin: 'jiā', translation: 'family, home' },
            { word: '爸爸', pinyin: 'bàba', translation: 'father' },
            { word: '妈妈', pinyin: 'māma', translation: 'mother' },
            { word: '哥哥', pinyin: 'gēge', translation: 'older brother' },
            { word: '姐姐', pinyin: 'jiějie', translation: 'older sister' },
            { word: '弟弟', pinyin: 'dìdi', translation: 'younger brother' },
            { word: '妹妹', pinyin: 'mèimei', translation: 'younger sister' }
          ],
          grammar: [
            {
              title: 'Possessive "的" (de)',
              explanation: 'Use "的" to show possession.',
              examples: [
                { chinese: '我的爸爸', pinyin: 'wǒ de bàba', english: 'my father' },
                { chinese: '你的家', pinyin: 'nǐ de jiā', english: 'your home' }
              ]
            }
          ],
          exercises: [
            {
              type: 'multiple-choice',
              question: 'How do you say "Mother" in Chinese?',
              options: ['爸爸', '妈妈', '姐姐', '妹妹'],
              answer: '妈妈'
            }
          ]
        }
      ]
    },
    {
      id: 'hsk1-m4',
      title: 'Time and Date',
      lessons: [
        {
          id: 'hsk1-m4-l1',
          title: 'Days of the Week',
          description: 'Learn how to say the days of the week.',
          vocabulary: [
            { word: '星期一', pinyin: 'xīngqīyī', translation: 'Monday' },
            { word: '星期二', pinyin: "xīngqī'èr", translation: 'Tuesday' },
            { word: '星期三', pinyin: 'xīngqīsān', translation: 'Wednesday' },
            { word: '星期四', pinyin: 'xīngqīsì', translation: 'Thursday' },
            { word: '星期五', pinyin: 'xīngqīwǔ', translation: 'Friday' },
            { word: '星期六', pinyin: 'xīngqīliù', translation: 'Saturday' },
            { word: '星期日', pinyin: 'xīngqīrì', translation: 'Sunday' }
          ],
          grammar: [
            {
              title: 'Asking for the Day',
              explanation: 'Use "今天星期几？" to ask what day it is today.',
              examples: [
                { chinese: '今天星期几？', pinyin: 'Jīntiān xīngqī jǐ?', english: 'What day is it today?' },
                { chinese: '今天星期三。', pinyin: 'Jīntiān xīngqīsān.', english: 'Today is Wednesday.' }
              ]
            }
          ],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk1-m5',
      title: 'Food and Drink',
      lessons: [
        {
          id: 'hsk1-m5-l1',
          title: 'Eating and Drinking',
          description: 'Learn basic words for food and drinks.',
          vocabulary: [
            { word: '米饭', pinyin: 'mǐfàn', translation: 'cooked rice' },
            { word: '面条', pinyin: 'miàntiáo', translation: 'noodles' },
            { word: '茶', pinyin: 'chá', translation: 'tea' },
            { word: '水', pinyin: 'shuǐ', translation: 'water' },
            { word: '喝', pinyin: 'hē', translation: 'to drink' }
          ],
          grammar: [
            {
              title: 'The Verb "想" (xiǎng)',
              explanation: 'Use "想" to express "would like to" or "want to".',
              examples: [
                { chinese: '我想喝茶。', pinyin: 'Wǒ xiǎng hē chá.', english: 'I want to drink tea.' }
              ]
            }
          ],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk1-m6',
      title: 'School and Study',
      lessons: [
        {
          id: 'hsk1-m6-l1',
          title: 'In the Classroom',
          description: 'Learn words for school objects.',
          vocabulary: [
            { word: '书', pinyin: 'shū', translation: 'book' },
            { word: '桌子', pinyin: 'zhuōzi', translation: 'table' },
            { word: '椅子', pinyin: 'yǐzi', translation: 'chair' },
            { word: '电脑', pinyin: 'diànnǎo', translation: 'computer' }
          ],
          grammar: [
            {
              title: 'Measure Word "本" (běn)',
              explanation: 'Used for books and bound items.',
              examples: [
                { chinese: '一本书', pinyin: 'yī běn shū', english: 'one book' }
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'hsk1-m6-l2',
          title: 'Learning Chinese',
          description: 'Talk about your studies.',
          vocabulary: [
            { word: '汉语', pinyin: 'Hànyǔ', translation: 'Chinese language' },
            { word: '写', pinyin: 'xiě', translation: 'to write' },
            { word: '读', pinyin: 'dú', translation: 'to read' },
            { word: '汉字', pinyin: 'Hànzì', translation: 'Chinese character' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk1-m7',
      title: 'Work and Places',
      lessons: [
        {
          id: 'hsk1-m7-l1',
          title: 'Jobs',
          description: 'Learn common job titles.',
          vocabulary: [
            { word: '老师', pinyin: 'lǎoshī', translation: 'teacher' },
            { word: '学生', pinyin: 'xuésheng', translation: 'student' },
            { word: '医生', pinyin: 'yīshēng', translation: 'doctor' }
          ],
          grammar: [],
          exercises: []
        },
        {
          id: 'hsk1-m7-l2',
          title: 'Locations',
          description: 'Learn common places.',
          vocabulary: [
            { word: '学校', pinyin: 'xuéxiào', translation: 'school' },
            { word: '医院', pinyin: 'yīyuàn', translation: 'hospital' },
            { word: '饭馆', pinyin: 'fànguǎn', translation: 'restaurant' },
            { word: '商店', pinyin: 'shāngdiàn', translation: 'shop' }
          ],
          grammar: [
            {
              title: 'The Verb "在" (zài)',
              explanation: 'Used to indicate location.',
              examples: [
                { chinese: '我在学校。', pinyin: 'Wǒ zài xuéxiào.', english: 'I am at school.' }
              ]
            }
          ],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk1-m8',
      title: 'Daily Life',
      lessons: [
        {
          id: 'hsk1-m8-l1',
          title: 'Buying Things',
          description: 'Basic shopping phrases.',
          vocabulary: [
            { word: '买', pinyin: 'mǎi', translation: 'to buy' },
            { word: '多少', pinyin: 'duōshǎo', translation: 'how much' },
            { word: '钱', pinyin: 'qián', translation: 'money' },
            { word: '块', pinyin: 'kuài', translation: 'yuan' }
          ],
          grammar: [],
          exercises: []
        },
        {
          id: 'hsk1-m8-l2',
          title: 'Transportation',
          description: 'How to get around.',
          vocabulary: [
            { word: '坐', pinyin: 'zuò', translation: 'to sit/ride' },
            { word: '出租车', pinyin: 'chūzūchē', translation: 'taxi' },
            { word: '飞机', pinyin: 'fēijī', translation: 'airplane' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk1-m9',
      title: 'Weather and Nature',
      lessons: [
        {
          id: 'hsk1-m9-l1',
          title: 'Weather',
          description: 'Talk about the weather.',
          vocabulary: [
            { word: '天气', pinyin: 'tiānqì', translation: 'weather' },
            { word: '下雨', pinyin: 'xiàyǔ', translation: 'to rain' },
            { word: '冷', pinyin: 'lěng', translation: 'cold' },
            { word: '热', pinyin: 'rè', translation: 'hot' }
          ],
          grammar: [],
          exercises: []
        },
        {
          id: 'hsk1-m9-l2',
          title: 'Nature',
          description: 'Words for the natural world.',
          vocabulary: [
            { word: '山', pinyin: 'shān', translation: 'mountain' },
            { word: '水', pinyin: 'shuǐ', translation: 'water' },
            { word: '月亮', pinyin: 'yuèliang', translation: 'moon' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk1-m10',
      title: 'Directions and Places',
      lessons: [
        {
          id: 'hsk1-m10-l1',
          title: 'Where is it?',
          description: 'Learn how to ask for directions.',
          vocabulary: [
            { word: '在哪儿', pinyin: 'zài nǎr', translation: 'where is' },
            { word: '前面', pinyin: 'qiánmiàn', translation: 'front' },
            { word: '后面', pinyin: 'hòumiàn', translation: 'back' }
          ],
          grammar: [],
          exercises: []
        },
        {
          id: 'hsk1-m10-l2',
          title: 'Inside and Outside',
          description: 'Learn relative positions.',
          vocabulary: [
            { word: '里', pinyin: 'lǐ', translation: 'inside' },
            { word: '上', pinyin: 'shàng', translation: 'up/on' },
            { word: '下', pinyin: 'xià', translation: 'down/under' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk1-m11',
      title: 'Emotions and Health',
      lessons: [
        {
          id: 'hsk1-m11-l1',
          title: 'How are you feeling?',
          description: 'Express basic emotions.',
          vocabulary: [
            { word: '高兴', pinyin: 'gāoxìng', translation: 'happy' },
            { word: '不高兴', pinyin: 'bù gāoxìng', translation: 'unhappy' }
          ],
          grammar: [],
          exercises: []
        },
        {
          id: 'hsk1-m11-l2',
          title: 'Body Parts',
          description: 'Learn basic body parts.',
          vocabulary: [
            { word: '眼睛', pinyin: 'yǎnjing', translation: 'eye' },
            { word: '耳朵', pinyin: 'ěrduo', translation: 'ear' },
            { word: '口', pinyin: 'kǒu', translation: 'mouth' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk1-m12',
      title: 'Numbers and Quantity',
      lessons: [
        {
          id: 'hsk1-m12-l1',
          title: 'Large Numbers',
          description: 'Learn numbers up to 100.',
          vocabulary: [
            { word: '二十', pinyin: 'èrshí', translation: 'twenty' },
            { word: '五十', pinyin: 'wǔshí', translation: 'fifty' },
            { word: '一百', pinyin: 'yībǎi', translation: 'one hundred' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk1-m13',
      title: 'Common Objects',
      lessons: [
        {
          id: 'hsk1-m13-l1',
          title: 'Daily Items',
          description: 'Learn words for things you use every day.',
          vocabulary: [
            { word: '杯子', pinyin: 'bēizi', translation: 'cup/glass' },
            { word: '钱', pinyin: 'qián', translation: 'money' },
            { word: '衣服', pinyin: 'yīfu', translation: 'clothes' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk1-m14',
      title: 'Colors and Shapes',
      lessons: [
        {
          id: 'hsk1-m14-l1',
          title: 'Basic Colors',
          description: 'Learn names of common colors.',
          vocabulary: [
            { word: '红色', pinyin: 'hóngsè', translation: 'red' },
            { word: '蓝色', pinyin: 'lánsè', translation: 'blue' },
            { word: '白色', pinyin: 'báisè', translation: 'white' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk1-m15',
      title: 'Animals and Nature',
      lessons: [
        {
          id: 'hsk1-m15-l1',
          title: 'Common Animals',
          description: 'Learn names of common animals.',
          vocabulary: [
            { word: '猫', pinyin: 'māo', translation: 'cat' },
            { word: '狗', pinyin: 'gǒu', translation: 'dog' },
            { word: '鸟', pinyin: 'niǎo', translation: 'bird' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk1-m16',
      title: 'Hobbies and Interests',
      lessons: [
        {
          id: 'hsk1-m16-l1',
          title: 'What do you like?',
          description: 'Talk about your favorite activities.',
          vocabulary: [
            { word: '喜欢', pinyin: 'xǐhuan', translation: 'to like' },
            { word: '看书', pinyin: 'kànshū', translation: 'to read books' },
            { word: '听音乐', pinyin: 'tīng yīnyuè', translation: 'to listen to music' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk1-m17',
      title: 'Daily Routine',
      lessons: [
        {
          id: 'hsk1-m17-l1',
          title: 'Morning to Night',
          description: 'Describe your typical day.',
          vocabulary: [
            { word: '起床', pinyin: 'qǐchuáng', translation: 'to get up' },
            { word: '睡觉', pinyin: 'shuìjiào', translation: 'to sleep' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk1-m18',
      title: 'Common Verbs',
      lessons: [
        {
          id: 'hsk1-m18-l1',
          title: 'Action Words',
          description: 'Learn common verbs for daily use.',
          vocabulary: [
            { word: '做', pinyin: 'zuò', translation: 'to do' },
            { word: '看', pinyin: 'kàn', translation: 'to look/see' },
            { word: '听', pinyin: 'tīng', translation: 'to listen' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk1-m19',
      title: 'Adjectives',
      lessons: [
        {
          id: 'hsk1-m19-l1',
          title: 'Describing Things',
          description: 'Learn basic adjectives.',
          vocabulary: [
            { word: '大', pinyin: 'dà', translation: 'big' },
            { word: '小', pinyin: 'xiǎo', translation: 'small' },
            { word: '多', pinyin: 'duō', translation: 'many' },
            { word: '少', pinyin: 'shǎo', translation: 'few' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk1-m20',
      title: 'Review and Practice',
      lessons: [
        {
          id: 'hsk1-m20-l1',
          title: 'Final Review',
          description: 'Review everything you have learned in HSK 1.',
          vocabulary: [],
          grammar: [],
          exercises: []
        }
      ]
    }
  ],
  'HSK 2': [
    {
      id: 'hsk2-m1',
      title: 'Daily Routine',
      lessons: [
        {
          id: 'hsk2-m1-l1',
          title: 'Time and Daily Activities',
          description: 'Talk about what you do every day.',
          vocabulary: [
            { word: '起床', pinyin: 'qǐchuáng', translation: 'to get up' },
            { word: '睡觉', pinyin: 'shuìjiào', translation: 'to sleep' },
            { word: '吃', pinyin: 'chī', translation: 'to eat' },
            { word: '早饭', pinyin: 'zǎofàn', translation: 'breakfast' },
            { word: '午饭', pinyin: 'wǔfàn', translation: 'lunch' },
            { word: '晚饭', pinyin: 'wǎnfàn', translation: 'dinner' }
          ],
          grammar: [
            {
              title: 'Time Word Position',
              explanation: 'Time words usually come before the verb.',
              examples: [
                { chinese: '我七点起床。', pinyin: 'Wǒ qī diǎn qǐchuáng.', english: 'I get up at seven o\'clock.' }
              ]
            }
          ],
          exercises: [
            {
              type: 'translation',
              question: 'Translate "I eat breakfast at 8:00" to Chinese.',
              answer: '我八点吃早饭。'
            }
          ]
        }
      ]
    },
    {
      id: 'hsk2-m2',
      title: 'Shopping and Money',
      lessons: [
        {
          id: 'hsk2-m2-l1',
          title: 'Buying Things',
          description: 'Learn how to ask for prices and buy items.',
          vocabulary: [
            { word: '买', pinyin: 'mǎi', translation: 'to buy' },
            { word: '多少', pinyin: 'duōshǎo', translation: 'how much' },
            { word: '钱', pinyin: 'qián', translation: 'money' },
            { word: '块', pinyin: 'kuài', translation: 'yuan (colloquial)' },
            { word: '苹果', pinyin: 'píngguǒ', translation: 'apple' },
            { word: '衣服', pinyin: 'yīfu', translation: 'clothes' }
          ],
          grammar: [
            {
              title: 'Asking for Price',
              explanation: 'Use "多少钱？" to ask how much something costs.',
              examples: [
                { chinese: '这个多少钱？', pinyin: 'Zhège duōshǎo qián?', english: 'How much is this?' },
                { chinese: '五块钱。', pinyin: 'Wǔ kuài qián.', english: 'Five yuan.' }
              ]
            }
          ],
          exercises: [
            {
              type: 'multiple-choice',
              question: 'What does "多少钱" mean?',
              options: ['What is your name?', 'How much money?', 'Where are you from?', 'How are you?'],
              answer: 'How much money?'
            }
          ]
        }
      ]
    },
    {
      id: 'hsk2-m3',
      title: 'Weather and Seasons',
      lessons: [
        {
          id: 'hsk2-m3-l1',
          title: 'Talking about Weather',
          description: 'Learn how to describe the weather.',
          vocabulary: [
            { word: '天气', pinyin: 'tiānqì', translation: 'weather' },
            { word: '晴天', pinyin: 'qíngtiān', translation: 'sunny day' },
            { word: '下雨', pinyin: 'xiàyǔ', translation: 'to rain' },
            { word: '冷', pinyin: 'lěng', translation: 'cold' },
            { word: '热', pinyin: 'rè', translation: 'hot' }
          ],
          grammar: [
            {
              title: 'The "太...了" (tài...le) Structure',
              explanation: 'Used to express "too..." or "extremely...".',
              examples: [
                { chinese: '今天太热了！', pinyin: 'Jīntiān tài rè le!', english: 'Today is too hot!' }
              ]
            }
          ],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk2-m4',
      title: 'Health and Body',
      lessons: [
        {
          id: 'hsk2-m4-l1',
          title: 'Feeling Unwell',
          description: 'Learn how to describe health problems.',
          vocabulary: [
            { word: '生病', pinyin: 'shēngbìng', translation: 'to be sick' },
            { word: '感冒', pinyin: 'gǎnmào', translation: 'to have a cold' },
            { word: '身体', pinyin: 'shēntǐ', translation: 'body' },
            { word: '药', pinyin: 'yào', translation: 'medicine' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk2-m5',
      title: 'Travel and Leisure',
      lessons: [
        {
          id: 'hsk2-m5-l1',
          title: 'Planning a Trip',
          description: 'Talk about where you want to go.',
          vocabulary: [
            { word: '旅游', pinyin: 'lǚyóu', translation: 'to travel' },
            { word: '准备', pinyin: 'zhǔnbèi', translation: 'to prepare' },
            { word: '票', pinyin: 'piào', translation: 'ticket' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk2-m6',
      title: 'Work and Office',
      lessons: [
        {
          id: 'hsk2-m6-l1',
          title: 'Office Objects',
          description: 'Learn words for things in an office.',
          vocabulary: [
            { word: '报纸', pinyin: 'bàozhǐ', translation: 'newspaper' },
            { word: '手表', pinyin: 'shǒubiǎo', translation: 'wristwatch' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk2-m7',
      title: 'Daily Activities',
      lessons: [
        {
          id: 'hsk2-m7-l1',
          title: 'Morning Routine',
          description: 'Talk about your morning.',
          vocabulary: [
            { word: '洗澡', pinyin: 'xǐzǎo', translation: 'to take a shower' },
            { word: '刷牙', pinyin: 'shuāyá', translation: 'to brush teeth' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk2-m8',
      title: 'Food and Dining Out',
      lessons: [
        {
          id: 'hsk2-m8-l1',
          title: 'Ordering Food',
          description: 'Learn how to order at a restaurant.',
          vocabulary: [
            { word: '菜单', pinyin: 'càidān', translation: 'menu' },
            { word: '点菜', pinyin: 'diǎncài', translation: 'to order food' },
            { word: '服务员', pinyin: 'fúwùyuán', translation: 'waiter/waitress' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk2-m9',
      title: 'Feelings and Opinions',
      lessons: [
        {
          id: 'hsk2-m9-l1',
          title: 'Expressing Likes',
          description: 'Talk about what you like and dislike.',
          vocabulary: [
            { word: '意思', pinyin: 'yìsi', translation: 'meaning' },
            { word: '觉得', pinyin: 'juéde', translation: 'to feel/think' },
            { word: '希望', pinyin: 'xīwàng', translation: 'to hope' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk2-m10',
      title: 'Travel and Directions',
      lessons: [
        {
          id: 'hsk2-m10-l1',
          title: 'Asking for Directions',
          description: 'Learn how to find your way around.',
          vocabulary: [
            { word: '路', pinyin: 'lù', translation: 'road/path' },
            { word: '离', pinyin: 'lí', translation: 'away from' },
            { word: '远', pinyin: 'yuǎn', translation: 'far' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk2-m11',
      title: 'Entertainment and Media',
      lessons: [
        {
          id: 'hsk2-m11-l1',
          title: 'Watching TV',
          description: 'Talk about TV shows and movies.',
          vocabulary: [
            { word: '电视', pinyin: 'diànshì', translation: 'TV' },
            { word: '节目', pinyin: 'jiémù', translation: 'program/show' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk2-m12',
      title: 'Social Life',
      lessons: [
        {
          id: 'hsk2-m12-l1',
          title: 'Meeting New People',
          description: 'Learn how to introduce yourself to others.',
          vocabulary: [
            { word: '认识', pinyin: 'rènshi', translation: 'to know/meet' },
            { word: '介绍', pinyin: 'jièshào', translation: 'to introduce' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk2-m13',
      title: 'Technology and Gadgets',
      lessons: [
        {
          id: 'hsk2-m13-l1',
          title: 'Smartphones',
          description: 'Talk about using your phone.',
          vocabulary: [
            { word: '手机', pinyin: 'shǒujī', translation: 'mobile phone' },
            { word: '电脑', pinyin: 'diànnǎo', translation: 'computer' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk2-m14',
      title: 'Environment',
      lessons: [
        {
          id: 'hsk2-m14-l1',
          title: 'Nature and Earth',
          description: 'Discuss the natural world.',
          vocabulary: [
            { word: '环境', pinyin: 'huánjìng', translation: 'environment' },
            { word: '地球', pinyin: 'dìqiú', translation: 'earth' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk2-m15',
      title: 'Review and Practice',
      lessons: [
        {
          id: 'hsk2-m15-l1',
          title: 'HSK 2 Final Review',
          description: 'Review everything you have learned in HSK 2.',
          vocabulary: [],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk2-m16',
      title: 'Health and Fitness',
      lessons: [
        {
          id: 'hsk2-m16-l1',
          title: 'Staying Healthy',
          description: 'Talk about exercise and diet.',
          vocabulary: [
            { word: '锻炼', pinyin: 'duànliàn', translation: 'to exercise' },
            { word: '健康', pinyin: 'jiànkāng', translation: 'healthy' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk2-m17',
      title: 'Shopping and Prices',
      lessons: [
        {
          id: 'hsk2-m17-l1',
          title: 'How much is it?',
          description: 'Learn to ask for prices and bargain.',
          vocabulary: [
            { word: '多少钱', pinyin: 'duōshǎo qián', translation: 'how much money' },
            { word: '便宜', pinyin: 'piányi', translation: 'cheap' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk2-m18',
      title: 'Weather and Seasons',
      lessons: [
        {
          id: 'hsk2-m18-l1',
          title: 'The Four Seasons',
          description: 'Talk about the weather throughout the year.',
          vocabulary: [
            { word: '季节', pinyin: 'jìjié', translation: 'season' },
            { word: '天气', pinyin: 'tiānqì', translation: 'weather' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk2-m19',
      title: 'Travel Planning',
      lessons: [
        {
          id: 'hsk2-m19-l1',
          title: 'Booking a Hotel',
          description: 'Learn vocabulary for travel arrangements.',
          vocabulary: [
            { word: '预订', pinyin: 'yùdìng', translation: 'to book' },
            { word: '宾馆', pinyin: 'bīnguǎn', translation: 'hotel' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk2-m20',
      title: 'Final Assessment',
      lessons: [
        {
          id: 'hsk2-m20-l1',
          title: 'Level 2 Completion',
          description: 'Final test for HSK 2.',
          vocabulary: [],
          grammar: [],
          exercises: []
        }
      ]
    }
  ],
  'HSK 3': [
    {
      id: 'hsk3-m1',
      title: 'Travel and Transportation',
      lessons: [
        {
          id: 'hsk3-m1-l1',
          title: 'Booking a Hotel',
          description: 'Learn how to book a room and ask for services.',
          vocabulary: [
            { word: '预订', pinyin: 'yùdìng', translation: 'to book' },
            { word: '房间', pinyin: 'fángjiān', translation: 'room' },
            { word: '单人间', pinyin: 'dānrénjiān', translation: 'single room' },
            { word: '双人间', pinyin: 'shuāngrénjiān', translation: 'double room' },
            { word: '入住', pinyin: 'rùzhù', translation: 'to check in' }
          ],
          grammar: [
            {
              title: 'Resultative Complements',
              explanation: 'Verbs can be followed by an adjective or another verb to indicate the result of an action.',
              examples: [
                { chinese: '我订好了房间。', pinyin: 'Wǒ dìng hǎo le fángjiān.', english: 'I have successfully booked the room.' }
              ]
            }
          ],
          exercises: [
            {
              type: 'translation',
              question: 'Translate "I want to book a single room."',
              answer: '我想预订一个单人间。'
            }
          ]
        }
      ]
    },
    {
      id: 'hsk3-m2',
      title: 'Hobbies and Leisure',
      lessons: [
        {
          id: 'hsk3-m2-l1',
          title: 'Sports and Activities',
          description: 'Talk about your favorite sports and hobbies.',
          vocabulary: [
            { word: '爱好', pinyin: 'àihào', translation: 'hobby' },
            { word: '打篮球', pinyin: 'dǎ lánqiú', translation: 'to play basketball' },
            { word: '踢足球', pinyin: 'tī zúqiú', translation: 'to play soccer' },
            { word: '游泳', pinyin: 'yóuyǒng', translation: 'to swim' },
            { word: '唱歌', pinyin: 'chànggē', translation: 'to sing' }
          ],
          grammar: [
            {
              title: 'Potential Complements',
              explanation: 'Use "得" (de) or "不" (bu) between a verb and its complement to show ability.',
              examples: [
                { chinese: '我听得懂。', pinyin: 'Wǒ tīng de dǒng.', english: 'I can understand (by listening).' },
                { chinese: '我听不懂。', pinyin: 'Wǒ tīng bù dǒng.', english: 'I cannot understand (by listening).' }
              ]
            }
          ],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk3-m3',
      title: 'Work and Study',
      lessons: [
        {
          id: 'hsk3-m3-l1',
          title: 'Office Life',
          description: 'Learn vocabulary related to working in an office.',
          vocabulary: [
            { word: '办公室', pinyin: 'bàngōngshì', translation: 'office' },
            { word: '同事', pinyin: 'tóngshì', translation: 'colleague' },
            { word: '会议', pinyin: 'huìyì', translation: 'meeting' },
            { word: '加班', pinyin: 'jiābān', translation: 'to work overtime' }
          ],
          grammar: [
            {
              title: 'The "除了...以外" (chúle...yǐwài) Structure',
              explanation: 'Means "except for..." or "besides...".',
              examples: [
                { chinese: '除了他以外，大家都来了。', pinyin: 'Chúle tā yǐwài, dàjiā dōu lái le.', english: 'Except for him, everyone came.' }
              ]
            }
          ],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk3-m4',
      title: 'Technology and Life',
      lessons: [
        {
          id: 'hsk3-m4-l1',
          title: 'Using the Internet',
          description: 'Talk about online activities.',
          vocabulary: [
            { word: '上网', pinyin: 'shàngwǎng', translation: 'to go online' },
            { word: '电子邮件', pinyin: 'diànzǐ yóujiàn', translation: 'email' },
            { word: '手机', pinyin: 'shǒujī', translation: 'mobile phone' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk3-m5',
      title: 'Social Life',
      lessons: [
        {
          id: 'hsk3-m5-l1',
          title: 'Meeting Friends',
          description: 'Talk about hanging out with friends.',
          vocabulary: [
            { word: '聚会', pinyin: 'jùhuì', translation: 'party/gathering' },
            { word: '聊天', pinyin: 'liáotiān', translation: 'to chat' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk3-m6',
      title: 'Shopping and Services',
      lessons: [
        {
          id: 'hsk3-m6-l1',
          title: 'At the Bank',
          description: 'Learn how to handle money and banking.',
          vocabulary: [
            { word: '银行', pinyin: 'yínháng', translation: 'bank' },
            { word: '取钱', pinyin: 'qǔqián', translation: 'to withdraw money' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk3-m7',
      title: 'Environment and Nature',
      lessons: [
        {
          id: 'hsk3-m7-l1',
          title: 'Protecting Nature',
          description: 'Discuss environmental issues.',
          vocabulary: [
            { word: '环境', pinyin: 'huánjìng', translation: 'environment' },
            { word: '保护', pinyin: 'bǎohù', translation: 'to protect' },
            { word: '草', pinyin: 'cǎo', translation: 'grass' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk3-m8',
      title: 'Health and Lifestyle',
      lessons: [
        {
          id: 'hsk3-m8-l1',
          title: 'Staying Fit',
          description: 'Talk about exercise and healthy habits.',
          vocabulary: [
            { word: '锻炼', pinyin: 'duànliàn', translation: 'to exercise' },
            { word: '健康', pinyin: 'jiànkāng', translation: 'health' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk3-m9',
      title: 'Work and Career',
      lessons: [
        {
          id: 'hsk3-m9-l1',
          title: 'Job Hunting',
          description: 'Discuss finding and applying for jobs.',
          vocabulary: [
            { word: '面试', pinyin: 'miànshì', translation: 'interview' },
            { word: '简历', pinyin: 'jiǎnlì', translation: 'resume' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk3-m10',
      title: 'Social Media and Communication',
      lessons: [
        {
          id: 'hsk3-m10-l1',
          title: 'Online Friends',
          description: 'Talk about making friends online.',
          vocabulary: [
            { word: '网友', pinyin: 'wǎngyǒu', translation: 'online friend' },
            { word: '发消息', pinyin: 'fā xiāoxi', translation: 'to send a message' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk3-m11',
      title: 'Culture and Traditions',
      lessons: [
        {
          id: 'hsk3-m11-l1',
          title: 'Traditional Festivals',
          description: 'Learn about major Chinese festivals.',
          vocabulary: [
            { word: '春节', pinyin: 'Chūnjié', translation: 'Spring Festival' },
            { word: '中秋节', pinyin: 'Zhōngqiūjié', translation: 'Mid-Autumn Festival' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk3-m12',
      title: 'Business and Work',
      lessons: [
        {
          id: 'hsk3-m12-l1',
          title: 'Business Meetings',
          description: 'Learn how to conduct yourself in meetings.',
          vocabulary: [
            { word: '会议', pinyin: 'huìyì', translation: 'meeting' },
            { word: '讨论', pinyin: 'tǎolùn', translation: 'to discuss' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk3-m13',
      title: 'Review and Practice',
      lessons: [
        {
          id: 'hsk3-m13-l1',
          title: 'HSK 3 Final Review',
          description: 'Review everything you have learned in HSK 3.',
          vocabulary: [],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk3-m14',
      title: 'Advanced Grammar',
      lessons: [
        {
          id: 'hsk3-m14-l1',
          title: 'Complex Sentences',
          description: 'Learn to use conjunctions.',
          vocabulary: [
            { word: '虽然', pinyin: 'suīrán', translation: 'although' },
            { word: '但是', pinyin: 'dànshì', translation: 'but' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk3-m15',
      title: 'Level 3 Capstone',
      lessons: [
        {
          id: 'hsk3-m15-l1',
          title: 'Final Project',
          description: 'Apply your knowledge in a final project.',
          vocabulary: [],
          grammar: [],
          exercises: []
        }
      ]
    }
  ],
  'HSK 4': [
    {
      id: 'hsk4-m1',
      title: 'Work and Career',
      lessons: [
        {
          id: 'hsk4-m1-l1',
          title: 'Job Interview',
          description: 'Prepare for a professional interview in Chinese.',
          vocabulary: [
            { word: '面试', pinyin: 'miànshì', translation: 'interview' },
            { word: '经验', pinyin: 'jīngyàn', translation: 'experience' },
            { word: '能力', pinyin: 'nénglì', translation: 'ability' },
            { word: '简历', pinyin: 'jiǎnlì', translation: 'resume' },
            { word: '负责', pinyin: 'fùzé', translation: 'to be responsible for' }
          ],
          grammar: [
            {
              title: 'The "把" (bǎ) Construction',
              explanation: 'Used to emphasize the result or influence of an action on a specific object.',
              examples: [
                { chinese: '请把简历给我。', pinyin: 'Qǐng bǎ jiǎnlì gěi wǒ.', english: 'Please give the resume to me.' }
              ]
            }
          ],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk4-m2',
      title: 'Relationships',
      lessons: [
        {
          id: 'hsk4-m2-l1',
          title: 'Friendship and Love',
          description: 'Discuss different types of relationships.',
          vocabulary: [
            { word: '朋友', pinyin: 'péngyou', translation: 'friend' },
            { word: '爱情', pinyin: 'àiqíng', translation: 'love' },
            { word: '信任', pinyin: 'xìnrèn', translation: 'trust' },
            { word: '支持', pinyin: 'zhīchí', translation: 'support' }
          ],
          grammar: [
            {
              title: 'The "被" (bèi) Construction',
              explanation: 'Used for passive voice.',
              examples: [
                { chinese: '他被朋友骗了。', pinyin: 'Tā bèi péngyou piàn le.', english: 'He was cheated by his friend.' }
              ]
            }
          ],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk4-m3',
      title: 'Technology and Internet',
      lessons: [
        {
          id: 'hsk4-m3-l1',
          title: 'Social Media',
          description: 'Talk about apps and online communication.',
          vocabulary: [
            { word: '社交媒体', pinyin: 'shèjiāo méitǐ', translation: 'social media' },
            { word: '下载', pinyin: 'xiàzài', translation: 'to download' },
            { word: '上传', pinyin: 'shàngchuán', translation: 'to upload' },
            { word: '账号', pinyin: 'zhànghào', translation: 'account' }
          ],
          grammar: [
            {
              title: 'Using "既然...就..." (jìrán...jiù...)',
              explanation: 'Means "since... then...".',
              examples: [
                { chinese: '既然你喜欢，就买吧。', pinyin: 'Jìrán nǐ xǐhuan, jiù mǎi ba.', english: 'Since you like it, then buy it.' }
              ]
            }
          ],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk4-m4',
      title: 'Health and Wellness',
      lessons: [
        {
          id: 'hsk4-m4-l1',
          title: 'Healthy Lifestyle',
          description: 'Discuss habits for staying healthy.',
          vocabulary: [
            { word: '健康', pinyin: 'jiànkāng', translation: 'health' },
            { word: '习惯', pinyin: 'xíguàn', translation: 'habit' },
            { word: '锻炼', pinyin: 'duànliàn', translation: 'to exercise' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk4-m5',
      title: 'Nature and Science',
      lessons: [
        {
          id: 'hsk4-m5-l1',
          title: 'Environmental Protection',
          description: 'Talk about protecting the earth.',
          vocabulary: [
            { word: '地球', pinyin: 'dìqiú', translation: 'earth' },
            { word: '保护', pinyin: 'bǎohù', translation: 'to protect' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk4-m6',
      title: 'Travel and Exploration',
      lessons: [
        {
          id: 'hsk4-m6-l1',
          title: 'World Travel',
          description: 'Discuss international travel experiences.',
          vocabulary: [
            { word: '旅游', pinyin: 'lǚyóu', translation: 'to travel' },
            { word: '签证', pinyin: 'qiānzhèng', translation: 'visa' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk4-m7',
      title: 'Society and Life',
      lessons: [
        {
          id: 'hsk4-m7-l1',
          title: 'Social Responsibility',
          description: 'Discuss duties in society.',
          vocabulary: [
            { word: '责任', pinyin: 'zérèn', translation: 'responsibility' },
            { word: '社会', pinyin: 'shèhuì', translation: 'society' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk4-m8',
      title: 'Art and Entertainment',
      lessons: [
        {
          id: 'hsk4-m8-l1',
          title: 'Traditional Arts',
          description: 'Learn about Chinese opera and painting.',
          vocabulary: [
            { word: '艺术', pinyin: 'yìshù', translation: 'art' },
            { word: '京剧', pinyin: 'jīngjù', translation: 'Beijing Opera' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk4-m9',
      title: 'Science and Technology',
      lessons: [
        {
          id: 'hsk4-m9-l1',
          title: 'Modern Innovations',
          description: 'Discuss recent technological advancements.',
          vocabulary: [
            { word: '科技', pinyin: 'kējì', translation: 'science and technology' },
            { word: '发明', pinyin: 'fāmíng', translation: 'invention' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk4-m10',
      title: 'Culture and History',
      lessons: [
        {
          id: 'hsk4-m10-l1',
          title: 'Ancient China',
          description: 'Learn about major dynasties and inventions.',
          vocabulary: [
            { word: '历史', pinyin: 'lìshǐ', translation: 'history' },
            { word: '朝代', pinyin: 'cháodài', translation: 'dynasty' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk4-m11',
      title: 'Philosophy and Life',
      lessons: [
        {
          id: 'hsk4-m11-l1',
          title: 'Life Lessons',
          description: 'Discuss wisdom and life experiences.',
          vocabulary: [
            { word: '智慧', pinyin: 'zhìhuì', translation: 'wisdom' },
            { word: '经验', pinyin: 'jīngyàn', translation: 'experience' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk4-m12',
      title: 'Global Issues',
      lessons: [
        {
          id: 'hsk4-m12-l1',
          title: 'Climate Change',
          description: 'Discuss environmental challenges.',
          vocabulary: [
            { word: '气候', pinyin: 'qìhòu', translation: 'climate' },
            { word: '变化', pinyin: 'biànhuà', translation: 'change' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk4-m13',
      title: 'Review and Practice',
      lessons: [
        {
          id: 'hsk4-m13-l1',
          title: 'HSK 4 Final Review',
          description: 'Review everything you have learned in HSK 4.',
          vocabulary: [],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk4-m14',
      title: 'Literature and Arts',
      lessons: [
        {
          id: 'hsk4-m14-l1',
          title: 'Modern Chinese Literature',
          description: 'Introduction to famous authors.',
          vocabulary: [
            { word: '作家', pinyin: 'zuòjiā', translation: 'author' },
            { word: '小说', pinyin: 'xiǎoshuō', translation: 'novel' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk4-m15',
      title: 'Level 4 Capstone',
      lessons: [
        {
          id: 'hsk4-m15-l1',
          title: 'Final Assessment',
          description: 'Comprehensive test for Level 4.',
          vocabulary: [],
          grammar: [],
          exercises: []
        }
      ]
    }
  ],
  'HSK 5': [
    {
      id: 'hsk5-m1',
      title: 'Social Issues',
      lessons: [
        {
          id: 'hsk5-m1-l1',
          title: 'Environmental Protection',
          description: 'Discuss environmental problems and solutions.',
          vocabulary: [
            { word: '环境', pinyin: 'huánjìng', translation: 'environment' },
            { word: '保护', pinyin: 'bǎohù', translation: 'to protect' },
            { word: '污染', pinyin: 'wūrǎn', translation: 'pollution' },
            { word: '垃圾', pinyin: 'lājī', translation: 'garbage' },
            { word: '回收', pinyin: 'huíshōu', translation: 'to recycle' }
          ],
          grammar: [
            {
              title: 'Conjunctions for Formal Speech',
              explanation: 'Using "从而" (cóng\'ér), "进而" (jìn\'ér) to show progression or result.',
              examples: [
                { chinese: '我们要保护环境，从而造福后代。', pinyin: 'Wǒmen yào bǎohù huánjìng, cóng\'ér zàofú hòudài.', english: 'We must protect the environment, thereby benefiting future generations.' }
              ]
            }
          ],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk5-m2',
      title: 'Economy and Business',
      lessons: [
        {
          id: 'hsk5-m2-l1',
          title: 'Global Trade',
          description: 'Discuss international business and markets.',
          vocabulary: [
            { word: '贸易', pinyin: 'màoyì', translation: 'trade' },
            { word: '市场', pinyin: 'shìchǎng', translation: 'market' },
            { word: '投资', pinyin: 'tóuzī', translation: 'investment' },
            { word: '竞争', pinyin: 'jìngzhēng', translation: 'competition' }
          ],
          grammar: [
            {
              title: 'Using "与其...不如..." (yǔqí...bùrú...)',
              explanation: 'Means "rather than... it is better to...".',
              examples: [
                { chinese: '与其坐车，不如走路。', pinyin: 'Yǔqí zuòchē, bùrú zǒulù.', english: 'Rather than taking a car, it is better to walk.' }
              ]
            }
          ],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk5-m3',
      title: 'Literature and Art',
      lessons: [
        {
          id: 'hsk5-m3-l1',
          title: 'Modern Chinese Literature',
          description: 'Learn about famous modern Chinese writers.',
          vocabulary: [
            { word: '文学', pinyin: 'wénxué', translation: 'literature' },
            { word: '作家', pinyin: 'zuòjiā', translation: 'writer' },
            { word: '小说', pinyin: 'xiǎoshuō', translation: 'novel' },
            { word: '出版', pinyin: 'chūbǎn', translation: 'to publish' }
          ],
          grammar: [
            {
              title: 'Using "哪怕...也..." (nǎpà...yě...)',
              explanation: 'Means "even if... still...".',
              examples: [
                { chinese: '哪怕下雨，我也要去。', pinyin: 'Nǎpà xiàyǔ, wǒ yě yào qù.', english: 'Even if it rains, I will still go.' }
              ]
            }
          ],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk5-m4',
      title: 'History and Traditions',
      lessons: [
        {
          id: 'hsk5-m4-l1',
          title: 'Traditional Festivals',
          description: 'Discuss the meaning of Chinese festivals.',
          vocabulary: [
            { word: '节日', pinyin: 'jiérì', translation: 'festival' },
            { word: '传统', pinyin: 'chuántǒng', translation: 'tradition' },
            { word: '庆祝', pinyin: 'qìngzhù', translation: 'to celebrate' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk5-m5',
      title: 'Geography and Nature',
      lessons: [
        {
          id: 'hsk5-m5-l1',
          title: 'Famous Mountains',
          description: 'Learn about China\'s famous mountains.',
          vocabulary: [
            { word: '名山', pinyin: 'míngshān', translation: 'famous mountain' },
            { word: '风景', pinyin: 'fēngjǐng', translation: 'scenery' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk5-m6',
      title: 'Science and Technology',
      lessons: [
        {
          id: 'hsk5-m6-l1',
          title: 'Space Exploration',
          description: 'Discuss the future of space travel.',
          vocabulary: [
            { word: '太空', pinyin: 'tàikōng', translation: 'space' },
            { word: '航天', pinyin: 'hángtiān', translation: 'aerospace' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk5-m7',
      title: 'Philosophy and Thought',
      lessons: [
        {
          id: 'hsk5-m7-l1',
          title: 'Ancient Wisdom',
          description: 'Explore traditional Chinese philosophy.',
          vocabulary: [
            { word: '哲学', pinyin: 'zhéxué', translation: 'philosophy' },
            { word: '智慧', pinyin: 'zhìhuì', translation: 'wisdom' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk5-m8',
      title: 'Business and Economy',
      lessons: [
        {
          id: 'hsk5-m8-l1',
          title: 'Market Trends',
          description: 'Discuss economic changes and business.',
          vocabulary: [
            { word: '经济', pinyin: 'jīngjì', translation: 'economy' },
            { word: '市场', pinyin: 'shìchǎng', translation: 'market' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk5-m9',
      title: 'Literature and Art',
      lessons: [
        {
          id: 'hsk5-m9-l1',
          title: 'Modern Art',
          description: 'Discuss contemporary art in China.',
          vocabulary: [
            { word: '当代', pinyin: 'dāngdài', translation: 'contemporary' },
            { word: '艺术', pinyin: 'yìshù', translation: 'art' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk5-m10',
      title: 'Global Relations',
      lessons: [
        {
          id: 'hsk5-m10-l1',
          title: 'International Cooperation',
          description: 'Discuss global partnerships.',
          vocabulary: [
            { word: '合作', pinyin: 'hézuò', translation: 'cooperation' },
            { word: '交流', pinyin: 'jiāoliú', translation: 'exchange' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk5-m11',
      title: 'Advanced Science',
      lessons: [
        {
          id: 'hsk5-m11-l1',
          title: 'Genetics',
          description: 'Discuss biological advancements.',
          vocabulary: [
            { word: '基因', pinyin: 'jīyīn', translation: 'gene' },
            { word: '生物', pinyin: 'shēngwù', translation: 'biology' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk5-m12',
      title: 'Review and Practice',
      lessons: [
        {
          id: 'hsk5-m12-l1',
          title: 'HSK 5 Final Review',
          description: 'Review everything you have learned in HSK 5.',
          vocabulary: [],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk5-m13',
      title: 'Economic Trends',
      lessons: [
        {
          id: 'hsk5-m13-l1',
          title: 'The Digital Economy',
          description: 'Discuss modern economic shifts.',
          vocabulary: [
            { word: '数字', pinyin: 'shùzì', translation: 'digital' },
            { word: '趋势', pinyin: 'qūshì', translation: 'trend' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk5-m14',
      title: 'Level 5 Capstone',
      lessons: [
        {
          id: 'hsk5-m14-l1',
          title: 'Advanced Proficiency Test',
          description: 'Final evaluation for Level 5.',
          vocabulary: [],
          grammar: [],
          exercises: []
        }
      ]
    }
  ],
  'HSK 6': [
    {
      id: 'hsk6-m1',
      title: 'Philosophy and Culture',
      lessons: [
        {
          id: 'hsk6-m1-l1',
          title: 'Ancient Chinese Philosophy',
          description: 'Explore the ideas of Confucius and Laozi.',
          vocabulary: [
            { word: '哲学', pinyin: 'zhéxué', translation: 'philosophy' },
            { word: '儒家', pinyin: 'rújiā', translation: 'Confucianism' },
            { word: '道家', pinyin: 'dàojiā', translation: 'Taoism' },
            { word: '仁', pinyin: 'rén', translation: 'benevolence' },
            { word: '无为', pinyin: 'wúwéi', translation: 'non-action' }
          ],
          grammar: [
            {
              title: 'Classical Chinese Influence',
              explanation: 'HSK 6 often includes formal structures derived from Classical Chinese.',
              examples: [
                { chinese: '以人为本', pinyin: 'yǐ rén wéi běn', english: 'people-oriented' }
              ]
            }
          ],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk6-m2',
      title: 'History and Legends',
      lessons: [
        {
          id: 'hsk6-m2-l1',
          title: 'The Great Wall',
          description: 'Discuss the history and significance of the Great Wall.',
          vocabulary: [
            { word: '长城', pinyin: 'Chángchéng', translation: 'The Great Wall' },
            { word: '修建', pinyin: 'xiūjiàn', translation: 'to build' },
            { word: '防御', pinyin: 'fángyù', translation: 'defense' },
            { word: '象征', pinyin: 'xiàngzhēng', translation: 'symbol' }
          ],
          grammar: [
            {
              title: 'Advanced Rhetorical Devices',
              explanation: 'Using metaphors and idioms in formal writing.',
              examples: [
                { chinese: '坚如磐石', pinyin: 'jiān rú pánshí', english: 'solid as a rock' }
              ]
            }
          ],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk6-m3',
      title: 'Modern China',
      lessons: [
        {
          id: 'hsk6-m3-l1',
          title: 'Urbanization',
          description: 'Discuss the rapid growth of Chinese cities.',
          vocabulary: [
            { word: '城市化', pinyin: 'chéngshìhuà', translation: 'urbanization' },
            { word: '人口', pinyin: 'rénkǒu', translation: 'population' },
            { word: '发展', pinyin: 'fāzhǎn', translation: 'development' },
            { word: '挑战', pinyin: 'tiǎozhàn', translation: 'challenge' }
          ],
          grammar: [
            {
              title: 'Using "鉴于" (jiànyú)',
              explanation: 'Means "in view of" or "considering".',
              examples: [
                { chinese: '鉴于目前的情况，我们必须改变计划。', pinyin: 'Jiànyú mùqián de qíngkuàng, wǒmen bìxū gǎibiàn jìhuà.', english: 'In view of the current situation, we must change the plan.' }
              ]
            }
          ],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk6-m4',
      title: 'Science and Innovation',
      lessons: [
        {
          id: 'hsk6-m4-l1',
          title: 'Artificial Intelligence',
          description: 'Discuss the impact of AI on society.',
          vocabulary: [
            { word: '人工智能', pinyin: 'réngōng zhìnéng', translation: 'artificial intelligence' },
            { word: '创新', pinyin: 'chuàngxīn', translation: 'innovation' },
            { word: '领域', pinyin: 'lǐngyù', translation: 'field/domain' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk6-m5',
      title: 'Environmental Ethics',
      lessons: [
        {
          id: 'hsk6-m5-l1',
          title: 'Sustainable Development',
          description: 'Discuss global sustainability.',
          vocabulary: [
            { word: '可持续发展', pinyin: 'kěchíxù fāzhǎn', translation: 'sustainable development' },
            { word: '生态', pinyin: 'shēngtài', translation: 'ecology' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk6-m6',
      title: 'Legal and Political Systems',
      lessons: [
        {
          id: 'hsk6-m6-l1',
          title: 'International Law',
          description: 'Discuss global legal frameworks.',
          vocabulary: [
            { word: '法律', pinyin: 'fǎlǜ', translation: 'law' },
            { word: '政治', pinyin: 'zhèngzhì', translation: 'politics' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk6-m7',
      title: 'Advanced Literature',
      lessons: [
        {
          id: 'hsk6-m7-l1',
          title: 'Classical Poetry',
          description: 'Analyze Tang and Song dynasty poems.',
          vocabulary: [
            { word: '诗歌', pinyin: 'shīgē', translation: 'poetry' },
            { word: '韵律', pinyin: 'yùnlǜ', translation: 'rhythm/meter' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk6-m8',
      title: 'Global Politics',
      lessons: [
        {
          id: 'hsk6-m8-l1',
          title: 'International Relations',
          description: 'Discuss diplomacy and global affairs.',
          vocabulary: [
            { word: '外交', pinyin: 'wàijiāo', translation: 'diplomacy' },
            { word: '关系', pinyin: 'guānxì', translation: 'relation' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk6-m9',
      title: 'Global Issues and Future',
      lessons: [
        {
          id: 'hsk6-m9-l1',
          title: 'Future of Humanity',
          description: 'Discuss potential challenges and opportunities.',
          vocabulary: [
            { word: '人类', pinyin: 'rénlèi', translation: 'humanity' },
            { word: '未来', pinyin: 'wèilái', translation: 'future' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk6-m10',
      title: 'Deep Philosophy',
      lessons: [
        {
          id: 'hsk6-m10-l1',
          title: 'The Meaning of Life',
          description: 'Discuss existential questions.',
          vocabulary: [
            { word: '意义', pinyin: 'yìyì', translation: 'meaning' },
            { word: '生命', pinyin: 'shēngmìng', translation: 'life' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk6-m11',
      title: 'Future Technology',
      lessons: [
        {
          id: 'hsk6-m11-l1',
          title: 'Quantum Computing',
          description: 'Discuss cutting-edge technology.',
          vocabulary: [
            { word: '量子', pinyin: 'liàngzǐ', translation: 'quantum' },
            { word: '计算', pinyin: 'jìsuàn', translation: 'calculation' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk6-m12',
      title: 'Review and Practice',
      lessons: [
        {
          id: 'hsk6-m12-l1',
          title: 'HSK 6 Final Review',
          description: 'Review everything you have learned in HSK 6.',
          vocabulary: [],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk6-m13',
      title: 'Global Ethics',
      lessons: [
        {
          id: 'hsk6-m13-l1',
          title: 'Moral Dilemmas',
          description: 'Discuss complex ethical questions.',
          vocabulary: [
            { word: '道德', pinyin: 'dàodé', translation: 'morality' },
            { word: '困境', pinyin: 'kùnjìng', translation: 'dilemma' }
          ],
          grammar: [],
          exercises: []
        }
      ]
    },
    {
      id: 'hsk6-m14',
      title: 'Level 6 Mastery',
      lessons: [
        {
          id: 'hsk6-m14-l1',
          title: 'Mastery Assessment',
          description: 'Final mastery test for the highest HSK level.',
          vocabulary: [],
          grammar: [],
          exercises: []
        }
      ]
    }
  ]
};

