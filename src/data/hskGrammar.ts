export type HSKLevel = 'HSK 1' | 'HSK 2' | 'HSK 3' | 'HSK 4' | 'HSK 5' | 'HSK 6';

export interface GrammarExample {
  chinese: string;
  pinyin: string;
  english: string;
}

export interface GrammarPoint {
  id: string;
  title: string;
  structure: string;
  explanation: {
    english: string;
    chinese: string;
    pinyin: string;
  };
  examples: GrammarExample[];
}

export const hskGrammar: Record<HSKLevel, GrammarPoint[]> = {
  "HSK 1": [
    {
      "id": "hsk1-1",
      "title": "The verb 是 (shì)",
      "structure": "A + 是 + B",
      "explanation": {
        "english": "Used to connect two nouns, meaning \"A is B\". It is equivalent to the English verb \"to be\".",
        "chinese": "用于连接两个名词，意思是“A是B”。相当于英语动词“to be”。",
        "pinyin": "Yòng yú liánjiē liǎng gè míngcí, yìsi shì “A shì B”. Xiāngdāng yú yīngyǔ dòngcí “to be”."
      },
      "examples": [
        {
          "chinese": "我是学生。",
          "pinyin": "Wǒ shì xuéshēng.",
          "english": "I am a student."
        },
        {
          "chinese": "他是老师。",
          "pinyin": "Tā shì lǎoshī.",
          "english": "He is a teacher."
        },
        {
          "chinese": "我是医生。",
          "pinyin": "Wǒ shì yīshēng.",
          "english": "I am a doctor."
        },
        {
          "chinese": "这是我的书。",
          "pinyin": "Zhè shì wǒ de shū.",
          "english": "This is my book."
        }
      ]
    },
    {
      "id": "hsk1-2",
      "title": "Simple questions with 吗 (ma)",
      "structure": "Statement + 吗？",
      "explanation": {
        "english": "Added to the end of a declarative sentence to turn it into a yes/no question.",
        "chinese": "加在陈述句的末尾，将其变成一般疑问句。",
        "pinyin": "Jiā zài chénshùjù de mòwěi, jiāng qí biànchéng yībān yíwènjù."
      },
      "examples": [
        {
          "chinese": "你是学生吗？",
          "pinyin": "Nǐ shì xuéshēng ma?",
          "english": "Are you a student?"
        },
        {
          "chinese": "他喜欢吃苹果吗？",
          "pinyin": "Tā xǐhuān chī píngguǒ ma?",
          "english": "Does he like eating apples?"
        },
        {
          "chinese": "你喜欢中国吗？",
          "pinyin": "Nǐ xǐhuān Zhōngguó ma?",
          "english": "Do you like China?"
        },
        {
          "chinese": "他明天来吗？",
          "pinyin": "Tā míngtiān lái ma?",
          "english": "Is he coming tomorrow?"
        }
      ]
    },
    {
      "id": "hsk1-3",
      "title": "Expressing possession with 的 (de)",
      "structure": "Noun/Pronoun + 的 + Noun",
      "explanation": {
        "english": "Used to indicate possession, similar to \"'s\" in English.",
        "chinese": "用于表示所属关系，类似于英语中的“'s”。",
        "pinyin": "Yòng yú biǎoshì suǒshǔ guānxì, lèisì yú yīngyǔ zhōng de “'s”."
      },
      "examples": [
        {
          "chinese": "我的书",
          "pinyin": "Wǒ de shū",
          "english": "My book"
        },
        {
          "chinese": "他的名字",
          "pinyin": "Tā de míngzì",
          "english": "His name"
        },
        {
          "chinese": "老师的电脑",
          "pinyin": "Lǎoshī de diànnǎo",
          "english": "The teacher's computer"
        },
        {
          "chinese": "我们的学校",
          "pinyin": "Wǒmen de xuéxiào",
          "english": "Our school"
        }
      ]
    },
    {
      "id": "hsk1-4",
      "title": "Negation with 不 (bù)",
      "structure": "不 + Verb / Adjective",
      "explanation": {
        "english": "Used to negate verbs and adjectives in the present and future.",
        "chinese": "用于否定现在和将来的动词和形容词。",
        "pinyin": "Yòng yú fǒudìng xiànzài hé jiānglái de dòngcí hé xíngróngcí."
      },
      "examples": [
        {
          "chinese": "我不吃肉。",
          "pinyin": "Wǒ bù chī ròu.",
          "english": "I do not eat meat."
        },
        {
          "chinese": "他不是老师。",
          "pinyin": "Tā bú shì lǎoshī.",
          "english": "He is not a teacher."
        },
        {
          "chinese": "我不喜欢喝茶。",
          "pinyin": "Wǒ bù xǐhuān hē chá.",
          "english": "I do not like drinking tea."
        },
        {
          "chinese": "他今天不去学校。",
          "pinyin": "Tā jīntiān bú qù xuéxiào.",
          "english": "He is not going to school today."
        }
      ]
    },
    {
      "id": "hsk1-5",
      "title": "Adverbs of degree 很 (hěn)",
      "structure": "Subject + 很 + Adjective",
      "explanation": {
        "english": "Used to link a noun to an adjective. It translates to \"very\", but is often just a linking word.",
        "chinese": "用于连接名词和形容词。它的意思是“很”，但也常作为连接词。",
        "pinyin": "Yòng yú liánjiē míngcí hé xíngróngcí. Tā de yìsi shì “hěn”, dàn yě cháng zuòwéi liánjiēcí."
      },
      "examples": [
        {
          "chinese": "我很好。",
          "pinyin": "Wǒ hěn hǎo.",
          "english": "I am very good."
        },
        {
          "chinese": "天气很冷。",
          "pinyin": "Tiānqì hěn lěng.",
          "english": "The weather is very cold."
        },
        {
          "chinese": "这个苹果很大。",
          "pinyin": "Zhège píngguǒ hěn dà.",
          "english": "This apple is very big."
        },
        {
          "chinese": "我的猫很可爱。",
          "pinyin": "Wǒ de māo hěn kě'ài.",
          "english": "My cat is very cute."
        }
      ]
    },
    {
      "id": "hsk1-6",
      "title": "Expressing location with 在 (zài)",
      "structure": "Subject + 在 + Place",
      "explanation": {
        "english": "Used to indicate where a person or object is located.",
        "chinese": "用于表示人或物体所在的位置。",
        "pinyin": "Yòng yú biǎoshì rén huò wùtǐ suǒzài de wèizhì."
      },
      "examples": [
        {
          "chinese": "我在家。",
          "pinyin": "Wǒ zài jiā.",
          "english": "I am at home."
        },
        {
          "chinese": "书在桌子上。",
          "pinyin": "Shū zài zhuōzi shàng.",
          "english": "The book is on the table."
        },
        {
          "chinese": "他在学校。",
          "pinyin": "Tā zài xuéxiào.",
          "english": "He is at school."
        },
        {
          "chinese": "猫在椅子下面。",
          "pinyin": "Māo zài yǐzi xiàmiàn.",
          "english": "The cat is under the chair."
        }
      ]
    },
    {
      "id": "hsk1-7",
      "title": "Expressing existence with 有 (yǒu)",
      "structure": "Place + 有 + Object",
      "explanation": {
        "english": "Used to express that something exists in a certain place (there is/are).",
        "chinese": "用于表示某地存在某物（有）。",
        "pinyin": "Yòng yú biǎoshì mǒu dì cúnzài mǒu wù (yǒu)."
      },
      "examples": [
        {
          "chinese": "桌子上有一个苹果。",
          "pinyin": "Zhuōzi shàng yǒu yī gè píngguǒ.",
          "english": "There is an apple on the table."
        },
        {
          "chinese": "我家有三口人。",
          "pinyin": "Wǒ jiā yǒu sān kǒu rén.",
          "english": "There are three people in my family."
        },
        {
          "chinese": "房间里有一只狗。",
          "pinyin": "Fángjiān lǐ yǒu yī zhǐ gǒu.",
          "english": "There is a dog in the room."
        },
        {
          "chinese": "学校里有很多学生。",
          "pinyin": "Xuéxiào lǐ yǒu hěn duō xuéshēng.",
          "english": "There are many students in the school."
        }
      ]
    },
    {
      "id": "hsk1-8",
      "title": "Asking \"what\" with 什么 (shénme)",
      "structure": "Subject + Verb + 什么？",
      "explanation": {
        "english": "Used to ask \"what\" in a question.",
        "chinese": "用于在疑问句中提问“什么”。",
        "pinyin": "Yòng yú zài yíwènjù zhōng tíwèn “shénme”."
      },
      "examples": [
        {
          "chinese": "你叫什么名字？",
          "pinyin": "Nǐ jiào shénme míngzi?",
          "english": "What is your name?"
        },
        {
          "chinese": "这是什么？",
          "pinyin": "Zhè shì shénme?",
          "english": "What is this?"
        },
        {
          "chinese": "你喜欢吃什么？",
          "pinyin": "Nǐ xǐhuān chī shénme?",
          "english": "What do you like to eat?"
        },
        {
          "chinese": "他在看什么书？",
          "pinyin": "Tā zài kàn shénme shū?",
          "english": "What book is he reading?"
        }
      ]
    },
    {
      "id": "hsk1-9",
      "title": "Asking \"where\" with 哪儿 (nǎr)",
      "structure": "Subject + 在 / 去 + 哪儿？",
      "explanation": {
        "english": "Used to ask about a location or destination.",
        "chinese": "用于询问地点或目的地。",
        "pinyin": "Yòng yú xúnwèn dìdiǎn huò mùdìdì."
      },
      "examples": [
        {
          "chinese": "你去哪儿？",
          "pinyin": "Nǐ qù nǎr?",
          "english": "Where are you going?"
        },
        {
          "chinese": "我的书在哪儿？",
          "pinyin": "Wǒ de shū zài nǎr?",
          "english": "Where is my book?"
        },
        {
          "chinese": "你的家在哪儿？",
          "pinyin": "Nǐ de jiā zài nǎr?",
          "english": "Where is your home?"
        },
        {
          "chinese": "我们去哪儿吃饭？",
          "pinyin": "Wǒmen qù nǎr chīfàn?",
          "english": "Where are we going to eat?"
        }
      ]
    },
    {
      "id": "hsk1-10",
      "title": "Expressing ability with 会 (huì)",
      "structure": "Subject + 会 + Verb",
      "explanation": {
        "english": "Used to express a learned skill or ability.",
        "chinese": "用于表达通过学习获得的技能或能力。",
        "pinyin": "Yòng yú biǎodá tōngguò xuéxí huòdé de jìnéng huò nénglì."
      },
      "examples": [
        {
          "chinese": "我会说汉语。",
          "pinyin": "Wǒ huì shuō hànyǔ.",
          "english": "I can speak Chinese."
        },
        {
          "chinese": "他会做饭。",
          "pinyin": "Tā huì zuò fàn.",
          "english": "He knows how to cook."
        },
        {
          "chinese": "我会开车。",
          "pinyin": "Wǒ huì kāichē.",
          "english": "I can drive."
        },
        {
          "chinese": "你会写汉字吗？",
          "pinyin": "Nǐ huì xiě hànzì ma?",
          "english": "Can you write Chinese characters?"
        }
      ]
    },
    {
      "id": "hsk1-11",
      "title": "Expressing time with 点 (diǎn) and 分 (fēn)",
      "structure": "Number + 点 + Number + 分",
      "explanation": {
        "english": "Used to express the time of day (hours and minutes).",
        "chinese": "用于表达一天中的时间（小时和分钟）。",
        "pinyin": "Yòng yú biǎodá yī tiān zhōng de shíjiān (xiǎoshí hé fēnzhōng)."
      },
      "examples": [
        {
          "chinese": "现在是八点。",
          "pinyin": "Xiànzài shì bā diǎn.",
          "english": "It is eight o'clock now."
        },
        {
          "chinese": "十点二十分。",
          "pinyin": "Shí diǎn èrshí fēn.",
          "english": "Ten twenty."
        },
        {
          "chinese": "现在是下午三点。",
          "pinyin": "Xiànzài shì xiàwǔ sān diǎn.",
          "english": "It is 3 PM now."
        },
        {
          "chinese": "我们明天早上八点见。",
          "pinyin": "Wǒmen míngtiān zǎoshang bā diǎn jiàn.",
          "english": "We will meet at 8 AM tomorrow."
        }
      ]
    },
    {
      "id": "hsk1-12",
      "title": "Suggesting with 吧 (ba)",
      "structure": "Statement + 吧",
      "explanation": {
        "english": "Added to the end of a sentence to make a suggestion or soften the tone.",
        "chinese": "加在句末，表示建议或使语气委婉。",
        "pinyin": "Jiā zài jùmò, biǎoshì jiànyì huò shǐ yǔqì wěiwǎn."
      },
      "examples": [
        {
          "chinese": "我们走吧。",
          "pinyin": "Wǒmen zǒu ba.",
          "english": "Let's go."
        },
        {
          "chinese": "你吃苹果吧。",
          "pinyin": "Nǐ chī píngguǒ ba.",
          "english": "You eat the apple."
        },
        {
          "chinese": "我们去吃饭吧。",
          "pinyin": "Wǒmen qù chīfàn ba.",
          "english": "Let's go eat."
        },
        {
          "chinese": "你休息一下吧。",
          "pinyin": "Nǐ xiūxi yīxià ba.",
          "english": "You should take a rest."
        }
      ]
    },
    {
      "id": "hsk1-13",
      "title": "Expressing \"and\" with 和 (hé)",
      "structure": "Noun 1 + 和 + Noun 2",
      "explanation": {
        "english": "Used to connect two nouns or pronouns. Cannot be used to connect sentences.",
        "chinese": "用于连接两个名词或代词。不能用于连接句子。",
        "pinyin": "Yòng yú liánjiē liǎng gè míngcí huò dàicí. Bù néng yòng yú liánjiē jùzi."
      },
      "examples": [
        {
          "chinese": "我和你。",
          "pinyin": "Wǒ hé nǐ.",
          "english": "You and me."
        },
        {
          "chinese": "爸爸和妈妈。",
          "pinyin": "Bàba hé māma.",
          "english": "Dad and mom."
        },
        {
          "chinese": "我喜欢吃苹果和香蕉。",
          "pinyin": "Wǒ xǐhuān chī píngguǒ hé xiāngjiāo.",
          "english": "I like eating apples and bananas."
        },
        {
          "chinese": "老师和学生都在教室里。",
          "pinyin": "Lǎoshī hé xuéshēng dōu zài jiàoshì lǐ.",
          "english": "The teacher and students are all in the classroom."
        }
      ]
    },
    {
      "id": "hsk1-14",
      "title": "Asking \"how many\" with 几 (jǐ)",
      "structure": "几 + Measure Word + Noun",
      "explanation": {
        "english": "Used to ask about a small quantity (usually less than 10).",
        "chinese": "用于询问较小的数量（通常小于10）。",
        "pinyin": "Yòng yú xúnwèn jiào xiǎo de shùliàng (tōngcháng xiǎoyú 10)."
      },
      "examples": [
        {
          "chinese": "你有几个苹果？",
          "pinyin": "Nǐ yǒu jǐ gè píngguǒ?",
          "english": "How many apples do you have?"
        },
        {
          "chinese": "你家有几口人？",
          "pinyin": "Nǐ jiā yǒu jǐ kǒu rén?",
          "english": "How many people are in your family?"
        },
        {
          "chinese": "你买了几本书？",
          "pinyin": "Nǐ mǎi le jǐ běn shū?",
          "english": "How many books did you buy?"
        },
        {
          "chinese": "现在几点了？",
          "pinyin": "Xiànzài jǐ diǎn le?",
          "english": "What time is it now?"
        }
      ]
    },
    {
      "id": "hsk1-15",
      "title": "Expressing dates with 月 (yuè) and 号/日 (hào/rì)",
      "structure": "Number + 月 + Number + 号/日",
      "explanation": {
        "english": "Used to express dates (month and day).",
        "chinese": "用于表达日期（月和日）。",
        "pinyin": "Yòng yú biǎodá rìqī (yuè hé rì)."
      },
      "examples": [
        {
          "chinese": "一月一号。",
          "pinyin": "Yī yuè yī hào.",
          "english": "January 1st."
        },
        {
          "chinese": "今天几月几号？",
          "pinyin": "Jīntiān jǐ yuè jǐ hào?",
          "english": "What is the date today?"
        },
        {
          "chinese": "我的生日是八月十号。",
          "pinyin": "Wǒ de shēngrì shì bā yuè shí hào.",
          "english": "My birthday is August 10th."
        },
        {
          "chinese": "明天是五月二号。",
          "pinyin": "Míngtiān shì wǔ yuè èr hào.",
          "english": "Tomorrow is May 2nd."
        }
      ]
    }
  ],
  "HSK 2": [
    {
      "id": "hsk2-1",
      "title": "The particle 了 (le) for completed action",
      "structure": "Verb + 了",
      "explanation": {
        "english": "Used after a verb to indicate that an action has been completed.",
        "chinese": "用在动词后，表示动作已经完成。",
        "pinyin": "Yòng zài dòngcí hòu, biǎoshì dòngzuò yǐjīng wánchéng."
      },
      "examples": [
        {
          "chinese": "我吃了一个苹果。",
          "pinyin": "Wǒ chī le yī gè píngguǒ.",
          "english": "I ate an apple."
        },
        {
          "chinese": "他买了一本书。",
          "pinyin": "Tā mǎi le yī běn shū.",
          "english": "He bought a book."
        },
        {
          "chinese": "我昨天去医院了。",
          "pinyin": "Wǒ zuótiān qù yīyuàn le.",
          "english": "I went to the hospital yesterday."
        },
        {
          "chinese": "他已经回家了。",
          "pinyin": "Tā yǐjīng huíjiā le.",
          "english": "He has already gone home."
        }
      ]
    },
    {
      "id": "hsk2-2",
      "title": "Past experience with 过 (guo)",
      "structure": "Verb + 过",
      "explanation": {
        "english": "Used to indicate that an action has been experienced in the past.",
        "chinese": "用于表示过去曾经经历过某个动作。",
        "pinyin": "Yòng yú biǎoshì guòqù céngjīng jīnglì guò mǒu gè dòngzuò."
      },
      "examples": [
        {
          "chinese": "我去过中国。",
          "pinyin": "Wǒ qù guo Zhōngguó.",
          "english": "I have been to China."
        },
        {
          "chinese": "我看过这个电影。",
          "pinyin": "Wǒ kàn guo zhège diànyǐng.",
          "english": "I have seen this movie."
        },
        {
          "chinese": "我吃过北京烤鸭。",
          "pinyin": "Wǒ chī guo Běijīng kǎoyā.",
          "english": "I have eaten Peking duck."
        },
        {
          "chinese": "你学过法语吗？",
          "pinyin": "Nǐ xué guo fǎyǔ ma?",
          "english": "Have you studied French?"
        }
      ]
    },
    {
      "id": "hsk2-3",
      "title": "Comparison with 比 (bǐ)",
      "structure": "A + 比 + B + Adjective",
      "explanation": {
        "english": "Used to compare two things, meaning \"A is more [adjective] than B\".",
        "chinese": "用于比较两个事物，意思是“A比B更[形容词]”。",
        "pinyin": "Yòng yú bǐjiào liǎng gè shìwù, yìsi shì “A bǐ B gèng [xíngróngcí]”."
      },
      "examples": [
        {
          "chinese": "今天比昨天冷。",
          "pinyin": "Jīntiān bǐ zuótiān lěng.",
          "english": "Today is colder than yesterday."
        },
        {
          "chinese": "他比我高。",
          "pinyin": "Tā bǐ wǒ gāo.",
          "english": "He is taller than me."
        },
        {
          "chinese": "这个西瓜比那个大。",
          "pinyin": "Zhège xīguā bǐ nàge dà.",
          "english": "This watermelon is bigger than that one."
        },
        {
          "chinese": "哥哥比弟弟胖。",
          "pinyin": "Gēge bǐ dìdi pàng.",
          "english": "The older brother is fatter than the younger brother."
        }
      ]
    },
    {
      "id": "hsk2-4",
      "title": "Cause and effect 因为...所以... (yīnwei... suǒyǐ...)",
      "structure": "因为 + Cause, 所以 + Effect",
      "explanation": {
        "english": "Used to express cause and effect, meaning \"Because... therefore...\".",
        "chinese": "用于表达因果关系，意思是“因为……所以……”。",
        "pinyin": "Yòng yú biǎodá yīnguǒ guānxì, yìsi shì “yīnwei... suǒyǐ...”."
      },
      "examples": [
        {
          "chinese": "因为下雨，所以我没去。",
          "pinyin": "Yīnwei xiàyǔ, suǒyǐ wǒ méi qù.",
          "english": "Because it rained, I didn't go."
        },
        {
          "chinese": "因为我喜欢他，所以我帮他。",
          "pinyin": "Yīnwei wǒ xǐhuān tā, suǒyǐ wǒ bāng tā.",
          "english": "Because I like him, I help him."
        },
        {
          "chinese": "因为我生病了，所以没去上班。",
          "pinyin": "Yīnwei wǒ shēngbìng le, suǒyǐ méi qù shàngbān.",
          "english": "Because I was sick, I didn't go to work."
        },
        {
          "chinese": "因为天气不好，所以我们在家看电视。",
          "pinyin": "Yīnwei tiānqì bù hǎo, suǒyǐ wǒmen zài jiā kàn diànshì.",
          "english": "Because the weather is bad, we are watching TV at home."
        }
      ]
    },
    {
      "id": "hsk2-5",
      "title": "Degree complement 得 (de)",
      "structure": "Verb + 得 + Adjective",
      "explanation": {
        "english": "Used to describe how an action is performed.",
        "chinese": "用于描述动作进行的状态或程度。",
        "pinyin": "Yòng yú miáoshù dòngzuò jìnxíng de zhuàngtài huò chéngdù."
      },
      "examples": [
        {
          "chinese": "他跑得很快。",
          "pinyin": "Tā pǎo de hěn kuài.",
          "english": "He runs very fast."
        },
        {
          "chinese": "你说得对。",
          "pinyin": "Nǐ shuō de duì.",
          "english": "You speak correctly (You are right)."
        },
        {
          "chinese": "他汉字写得很漂亮。",
          "pinyin": "Tā hànzì xiě de hěn piàoliang.",
          "english": "He writes Chinese characters very beautifully."
        },
        {
          "chinese": "我昨天睡得很好。",
          "pinyin": "Wǒ zuótiān shuì de hěn hǎo.",
          "english": "I slept very well yesterday."
        }
      ]
    },
    {
      "id": "hsk2-6",
      "title": "Ongoing state with 着 (zhe)",
      "structure": "Verb + 着",
      "explanation": {
        "english": "Used to indicate an ongoing state or continuous action.",
        "chinese": "用于表示动作的持续或状态的延续。",
        "pinyin": "Yòng yú biǎoshì dòngzuò de chíxù huò zhuàngtài de yánxù."
      },
      "examples": [
        {
          "chinese": "门开着。",
          "pinyin": "Mén kāi zhe.",
          "english": "The door is open."
        },
        {
          "chinese": "他穿着红色的衣服。",
          "pinyin": "Tā chuān zhe hóngsè de yīfu.",
          "english": "He is wearing red clothes."
        },
        {
          "chinese": "他拿着一本书。",
          "pinyin": "Tā ná zhe yī běn shū.",
          "english": "He is holding a book."
        },
        {
          "chinese": "墙上挂着一幅画。",
          "pinyin": "Qiáng shàng guà zhe yī fú huà.",
          "english": "A picture is hanging on the wall."
        }
      ]
    },
    {
      "id": "hsk2-7",
      "title": "About to happen 要...了 (yào... le)",
      "structure": "要 + Verb / Event + 了",
      "explanation": {
        "english": "Used to indicate that an action or event is about to happen soon.",
        "chinese": "用于表示某事即将发生。",
        "pinyin": "Yòng yú biǎoshì mǒu shì jíjiāng fāshēng."
      },
      "examples": [
        {
          "chinese": "要下雨了。",
          "pinyin": "Yào xiàyǔ le.",
          "english": "It is going to rain."
        },
        {
          "chinese": "火车要开了。",
          "pinyin": "Huǒchē yào kāi le.",
          "english": "The train is about to leave."
        },
        {
          "chinese": "我们要上课了。",
          "pinyin": "Wǒmen yào shàngkè le.",
          "english": "We are about to start class."
        },
        {
          "chinese": "新年快要到了。",
          "pinyin": "Xīnnián kuàiyào dào le.",
          "english": "The New Year is coming soon."
        }
      ]
    },
    {
      "id": "hsk2-8",
      "title": "Although... but... 虽然...但是... (suīrán... dànshì...)",
      "structure": "虽然 + Statement 1, 但是 + Statement 2",
      "explanation": {
        "english": "Used to connect two contrasting clauses.",
        "chinese": "用于连接两个转折关系的从句。",
        "pinyin": "Yòng yú liánjiē liǎng gè zhuǎnzhé guānxì de cóngjù."
      },
      "examples": [
        {
          "chinese": "虽然外面很冷，但是他没有穿外套。",
          "pinyin": "Suīrán wàimiàn hěn lěng, dànshì tā méiyǒu chuān wàitào.",
          "english": "Although it is cold outside, he didn't wear a coat."
        },
        {
          "chinese": "虽然很难，但是我喜欢。",
          "pinyin": "Suīrán hěn nán, dànshì wǒ xǐhuān.",
          "english": "Although it is difficult, I like it."
        },
        {
          "chinese": "虽然他生病了，但是他还在工作。",
          "pinyin": "Suīrán tā shēngbìng le, dànshì tā hái zài gōngzuò.",
          "english": "Although he is sick, he is still working."
        },
        {
          "chinese": "虽然这件衣服很贵，但是我买了。",
          "pinyin": "Suīrán zhè jiàn yīfu hěn guì, dànshì wǒ mǎi le.",
          "english": "Although this piece of clothing is expensive, I bought it."
        }
      ]
    },
    {
      "id": "hsk2-9",
      "title": "Not only... but also... 不但...而且... (bùdàn... érqiě...)",
      "structure": "不但 + Statement 1, 而且 + Statement 2",
      "explanation": {
        "english": "Used to connect two clauses that build upon each other.",
        "chinese": "用于连接两个递进关系的从句。",
        "pinyin": "Yòng yú liánjiē liǎng gè dìjìn guānxì de cóngjù."
      },
      "examples": [
        {
          "chinese": "他不但聪明，而且很努力。",
          "pinyin": "Tā bùdàn cōngmíng, érqiě hěn nǔlì.",
          "english": "He is not only smart, but also very hardworking."
        },
        {
          "chinese": "这个菜不但好看，而且好吃。",
          "pinyin": "Zhège cài bùdàn hǎokàn, érqiě hǎochī.",
          "english": "This dish not only looks good, but also tastes good."
        },
        {
          "chinese": "他不但会唱歌，而且唱得很好。",
          "pinyin": "Tā bùdàn huì chànggē, érqiě chàng de hěn hǎo.",
          "english": "He not only can sing, but also sings very well."
        },
        {
          "chinese": "这本字典不但便宜，而且很有用。",
          "pinyin": "Zhè běn zìdiǎn bùdàn piányi, érqiě hěn yǒuyòng.",
          "english": "This dictionary is not only cheap, but also very useful."
        }
      ]
    },
    {
      "id": "hsk2-10",
      "title": "Asking \"how\" with 怎么 (zěnme)",
      "structure": "Subject + 怎么 + Verb？",
      "explanation": {
        "english": "Used to ask about the method or reason for an action.",
        "chinese": "用于询问动作的方法或原因。",
        "pinyin": "Yòng yú xúnwèn dòngzuò de fāngfǎ huò yuányīn."
      },
      "examples": [
        {
          "chinese": "这个字怎么写？",
          "pinyin": "Zhège zì zěnme xiě?",
          "english": "How do you write this character?"
        },
        {
          "chinese": "你怎么没来？",
          "pinyin": "Nǐ zěnme méi lái?",
          "english": "Why didn't you come?"
        },
        {
          "chinese": "你怎么去机场？",
          "pinyin": "Nǐ zěnme qù jīchǎng?",
          "english": "How are you going to the airport?"
        },
        {
          "chinese": "这个菜怎么做？",
          "pinyin": "Zhège cài zěnme zuò?",
          "english": "How do you cook this dish?"
        }
      ]
    },
    {
      "id": "hsk2-11",
      "title": "Expressing \"don't\" with 别 (bié)",
      "structure": "别 + Verb + 了",
      "explanation": {
        "english": "Used to tell someone not to do something.",
        "chinese": "用于告诉别人不要做某事。",
        "pinyin": "Yòng yú gàosu biérén búyào zuò mǒu shì."
      },
      "examples": [
        {
          "chinese": "别哭了。",
          "pinyin": "Bié kū le.",
          "english": "Don't cry."
        },
        {
          "chinese": "别说话。",
          "pinyin": "Bié shuōhuà.",
          "english": "Don't speak."
        },
        {
          "chinese": "别忘了带伞。",
          "pinyin": "Bié wàng le dài sǎn.",
          "english": "Don't forget to bring an umbrella."
        },
        {
          "chinese": "太晚了，别看电视了。",
          "pinyin": "Tài wǎn le, bié kàn diànshì le.",
          "english": "It's too late, don't watch TV anymore."
        }
      ]
    },
    {
      "id": "hsk2-12",
      "title": "Expressing \"a little\" with 一点儿 (yīdiǎnr)",
      "structure": "Verb + 一点儿 + Noun",
      "explanation": {
        "english": "Used to express a small quantity of something.",
        "chinese": "用于表示少量的某物。",
        "pinyin": "Yòng yú biǎoshì shǎoliàng de mǒu wù."
      },
      "examples": [
        {
          "chinese": "我喝了一点儿水。",
          "pinyin": "Wǒ hē le yīdiǎnr shuǐ.",
          "english": "I drank a little water."
        },
        {
          "chinese": "我会说一点儿汉语。",
          "pinyin": "Wǒ huì shuō yīdiǎnr hànyǔ.",
          "english": "I can speak a little Chinese."
        },
        {
          "chinese": "我想买一点儿水果。",
          "pinyin": "Wǒ xiǎng mǎi yīdiǎnr shuǐguǒ.",
          "english": "I want to buy a little fruit."
        },
        {
          "chinese": "请给我一点儿时间。",
          "pinyin": "Qǐng gěi wǒ yīdiǎnr shíjiān.",
          "english": "Please give me a little time."
        }
      ]
    },
    {
      "id": "hsk2-13",
      "title": "Expressing \"again\" with 再 (zài)",
      "structure": "再 + Verb",
      "explanation": {
        "english": "Used to indicate that an action will happen again in the future.",
        "chinese": "用于表示动作将在未来再次发生。",
        "pinyin": "Yòng yú biǎoshì dòngzuò jiāng zài wèilái zàicì fāshēng."
      },
      "examples": [
        {
          "chinese": "再见。",
          "pinyin": "Zàijiàn.",
          "english": "Goodbye (See you again)."
        },
        {
          "chinese": "请再说一次。",
          "pinyin": "Qǐng zài shuō yī cì.",
          "english": "Please say it again."
        },
        {
          "chinese": "我明天再来。",
          "pinyin": "Wǒ míngtiān zài lái.",
          "english": "I will come again tomorrow."
        },
        {
          "chinese": "你可以再读一遍吗？",
          "pinyin": "Nǐ kěyǐ zài dú yī biàn ma?",
          "english": "Can you read it again?"
        }
      ]
    },
    {
      "id": "hsk2-14",
      "title": "Expressing \"can/may\" with 可以 (kěyǐ)",
      "structure": "Subject + 可以 + Verb",
      "explanation": {
        "english": "Used to express permission or possibility.",
        "chinese": "用于表达许可或可能性。",
        "pinyin": "Yòng yú biǎodá xǔkě huò kěnéngxìng."
      },
      "examples": [
        {
          "chinese": "我可以进来吗？",
          "pinyin": "Wǒ kěyǐ jìnlái ma?",
          "english": "May I come in?"
        },
        {
          "chinese": "这里可以吸烟吗？",
          "pinyin": "Zhèlǐ kěyǐ xīyān ma?",
          "english": "Can I smoke here?"
        },
        {
          "chinese": "你可以帮我吗？",
          "pinyin": "Nǐ kěyǐ bāng wǒ ma?",
          "english": "Can you help me?"
        },
        {
          "chinese": "这里可以拍照吗？",
          "pinyin": "Zhèlǐ kěyǐ pāizhào ma?",
          "english": "Can I take pictures here?"
        }
      ]
    },
    {
      "id": "hsk2-15",
      "title": "Expressing \"must/need to\" with 得 (děi)",
      "structure": "Subject + 得 + Verb",
      "explanation": {
        "english": "Used to express necessity or obligation.",
        "chinese": "用于表达必要性或义务。",
        "pinyin": "Yòng yú biǎodá bìyàoxìng huò yìwù."
      },
      "examples": [
        {
          "chinese": "我得走了。",
          "pinyin": "Wǒ děi zǒu le.",
          "english": "I have to go."
        },
        {
          "chinese": "你得去看医生。",
          "pinyin": "Nǐ děi qù kàn yīshēng.",
          "english": "You need to go see a doctor."
        },
        {
          "chinese": "明天有考试，我得复习。",
          "pinyin": "Míngtiān yǒu kǎoshì, wǒ děi fùxí.",
          "english": "There is an exam tomorrow, I have to review."
        },
        {
          "chinese": "太晚了，我们得回家了。",
          "pinyin": "Tài wǎn le, wǒmen děi huíjiā le.",
          "english": "It's too late, we must go home."
        }
      ]
    }
  ],
  "HSK 3": [
    {
      "id": "hsk3-1",
      "title": "The \"ba\" sentence 把 (bǎ)",
      "structure": "Subject + 把 + Object + Verb + Other Element",
      "explanation": {
        "english": "Used to emphasize the disposal or impact of an action on an object.",
        "chinese": "用于强调动作对宾语的处置或影响。",
        "pinyin": "Yòng yú qiángdiào dòngzuò duì bīnyǔ de chǔzhì huò yǐngxiǎng."
      },
      "examples": [
        {
          "chinese": "我把书放在桌子上了。",
          "pinyin": "Wǒ bǎ shū fàng zài zhuōzi shàng le.",
          "english": "I put the book on the table."
        },
        {
          "chinese": "请把门关上。",
          "pinyin": "Qǐng bǎ mén guān shàng.",
          "english": "Please close the door."
        },
        {
          "chinese": "请把作业交给我。",
          "pinyin": "Qǐng bǎ zuòyè jiāo gěi wǒ.",
          "english": "Please hand in your homework to me."
        },
        {
          "chinese": "他把咖啡喝完了。",
          "pinyin": "Tā bǎ kāfēi hē wán le.",
          "english": "He finished drinking the coffee."
        }
      ]
    },
    {
      "id": "hsk3-2",
      "title": "The passive voice 被 (bèi)",
      "structure": "Receiver + 被 + (Doer) + Verb + Other Element",
      "explanation": {
        "english": "Used to form passive sentences, often for negative or undesirable events.",
        "chinese": "用于构成被动句，通常用于消极或不希望发生的事件。",
        "pinyin": "Yòng yú gòuchéng bèidòngjù, tōngcháng yòng yú xiāojí huò bù xīwàng fāshēng de shìjiàn."
      },
      "examples": [
        {
          "chinese": "我的钱包被偷了。",
          "pinyin": "Wǒ de qiánbāo bèi tōu le.",
          "english": "My wallet was stolen."
        },
        {
          "chinese": "杯子被他打破了。",
          "pinyin": "Bēizi bèi tā dǎ pò le.",
          "english": "The cup was broken by him."
        },
        {
          "chinese": "那本书被借走了。",
          "pinyin": "Nà běn shū bèi jiè zǒu le.",
          "english": "That book was borrowed."
        },
        {
          "chinese": "我的手机被摔坏了。",
          "pinyin": "Wǒ de shǒujī bèi shuāi huài le.",
          "english": "My phone was dropped and broken."
        }
      ]
    },
    {
      "id": "hsk3-3",
      "title": "More and more 越来越 (yuè lái yuè)",
      "structure": "越来越 + Adjective / Mental Verb",
      "explanation": {
        "english": "Used to indicate that a state or degree is changing over time.",
        "chinese": "用于表示状态或程度随时间发生变化。",
        "pinyin": "Yòng yú biǎoshì zhuàngtài huò chéngdù suí shíjiān fāshēng biànhuà."
      },
      "examples": [
        {
          "chinese": "天气越来越冷了。",
          "pinyin": "Tiānqì yuè lái yuè lěng le.",
          "english": "The weather is getting colder and colder."
        },
        {
          "chinese": "我越来越喜欢汉语。",
          "pinyin": "Wǒ yuè lái yuè xǐhuān hànyǔ.",
          "english": "I like Chinese more and more."
        },
        {
          "chinese": "你的汉语越来越好了。",
          "pinyin": "Nǐ de hànyǔ yuè lái yuè hǎo le.",
          "english": "Your Chinese is getting better and better."
        },
        {
          "chinese": "人越来越多了。",
          "pinyin": "Rén yuè lái yuè duō le.",
          "english": "There are more and more people."
        }
      ]
    },
    {
      "id": "hsk3-4",
      "title": "Except / Besides 除了...以外 (chúle... yǐwài)",
      "structure": "除了 + Exception + 以外，Subject + 都 / 也...",
      "explanation": {
        "english": "Used to express \"except for\" or \"besides/in addition to\".",
        "chinese": "用于表达“除了……之外”或“除……之外还”。",
        "pinyin": "Yòng yú biǎodá “chúle... zhīwài” huò “chú... zhīwài hái”."
      },
      "examples": [
        {
          "chinese": "除了他以外，我们都去了。",
          "pinyin": "Chúle tā yǐwài, wǒmen dōu qù le.",
          "english": "Except for him, we all went."
        },
        {
          "chinese": "除了英语以外，我也会说法语。",
          "pinyin": "Chúle yīngyǔ yǐwài, wǒ yě huì shuō fǎyǔ.",
          "english": "Besides English, I can also speak French."
        },
        {
          "chinese": "除了周末以外，我每天都工作。",
          "pinyin": "Chúle zhōumò yǐwài, wǒ měitiān dōu gōngzuò.",
          "english": "Except for weekends, I work every day."
        },
        {
          "chinese": "除了苹果，他还买了香蕉。",
          "pinyin": "Chúle píngguǒ, tā hái mǎi le xiāngjiāo.",
          "english": "Besides apples, he also bought bananas."
        }
      ]
    },
    {
      "id": "hsk3-5",
      "title": "If... then... 如果...就... (rúguǒ... jiù...)",
      "structure": "如果 + Condition, Subject + 就 + Result",
      "explanation": {
        "english": "Used to express a conditional relationship.",
        "chinese": "用于表达假设条件关系。",
        "pinyin": "Yòng yú biǎodá jiǎshè tiáojiàn guānxì."
      },
      "examples": [
        {
          "chinese": "如果明天下雨，我们就不去。",
          "pinyin": "Rúguǒ míngtiān xiàyǔ, wǒmen jiù bù qù.",
          "english": "If it rains tomorrow, we will not go."
        },
        {
          "chinese": "如果你喜欢，我就买给你。",
          "pinyin": "Rúguǒ nǐ xǐhuān, wǒ jiù mǎi gěi nǐ.",
          "english": "If you like it, I will buy it for you."
        },
        {
          "chinese": "如果你有问题，就问我。",
          "pinyin": "Rúguǒ nǐ yǒu wèntí, jiù wèn wǒ.",
          "english": "If you have questions, ask me."
        },
        {
          "chinese": "如果太贵了，我们就不买了。",
          "pinyin": "Rúguǒ tài guì le, wǒmen jiù bù mǎi le.",
          "english": "If it's too expensive, we won't buy it."
        }
      ]
    },
    {
      "id": "hsk3-6",
      "title": "Although... but... 虽然...但是... (suīrán... dànshì...)",
      "structure": "虽然 + Statement 1, 但是 + Statement 2",
      "explanation": {
        "english": "Used to connect two contrasting clauses.",
        "chinese": "用于连接两个转折关系的从句。",
        "pinyin": "Yòng yú liánjiē liǎng gè zhuǎnzhé guānxì de cóngjù."
      },
      "examples": [
        {
          "chinese": "虽然外面很冷，但是他没有穿外套。",
          "pinyin": "Suīrán wàimiàn hěn lěng, dànshì tā méiyǒu chuān wàitào.",
          "english": "Although it is cold outside, he didn't wear a coat."
        },
        {
          "chinese": "虽然很难，但是我喜欢。",
          "pinyin": "Suīrán hěn nán, dànshì wǒ xǐhuān.",
          "english": "Although it is difficult, I like it."
        },
        {
          "chinese": "虽然他很忙，但是每天都锻炼。",
          "pinyin": "Suīrán tā hěn máng, dànshì měitiān dōu duànliàn.",
          "english": "Although he is busy, he exercises every day."
        },
        {
          "chinese": "虽然我没去过北京，但是我很了解它。",
          "pinyin": "Suīrán wǒ méi qù guo Běijīng, dànshì wǒ hěn liǎojiě tā.",
          "english": "Although I haven't been to Beijing, I know a lot about it."
        }
      ]
    },
    {
      "id": "hsk3-7",
      "title": "As soon as 一...就... (yī... jiù...)",
      "structure": "Subject + 一 + Action 1 + 就 + Action 2",
      "explanation": {
        "english": "Used to indicate that one action happens immediately after another.",
        "chinese": "用于表示一个动作紧接着另一个动作发生。",
        "pinyin": "Yòng yú biǎoshì yī gè dòngzuò jǐnjiē zhe lìng yī gè dòngzuò fāshēng."
      },
      "examples": [
        {
          "chinese": "我一回家就做饭。",
          "pinyin": "Wǒ yī huíjiā jiù zuò fàn.",
          "english": "As soon as I get home, I cook."
        },
        {
          "chinese": "他一下课就去打篮球。",
          "pinyin": "Tā yī xiàkè jiù qù dǎ lánqiú.",
          "english": "As soon as class is over, he goes to play basketball."
        },
        {
          "chinese": "他一毕业就找到了工作。",
          "pinyin": "Tā yī bìyè jiù zhǎo dào le gōngzuò.",
          "english": "As soon as he graduated, he found a job."
        },
        {
          "chinese": "我一看到他就想笑。",
          "pinyin": "Wǒ yī kàndào tā jiù xiǎng xiào.",
          "english": "As soon as I see him, I want to laugh."
        }
      ]
    },
    {
      "id": "hsk3-8",
      "title": "Not only... but also... 不但...而且... (bùdàn... érqiě...)",
      "structure": "不但 + Statement 1, 而且 + Statement 2",
      "explanation": {
        "english": "Used to connect two clauses that build upon each other.",
        "chinese": "用于连接两个递进关系的从句。",
        "pinyin": "Yòng yú liánjiē liǎng gè dìjìn guānxì de cóngjù."
      },
      "examples": [
        {
          "chinese": "他不但聪明，而且很努力。",
          "pinyin": "Tā bùdàn cōngmíng, érqiě hěn nǔlì.",
          "english": "He is not only smart, but also very hardworking."
        },
        {
          "chinese": "这个菜不但好看，而且好吃。",
          "pinyin": "Zhège cài bùdàn hǎokàn, érqiě hǎochī.",
          "english": "This dish not only looks good, but also tastes good."
        },
        {
          "chinese": "他不但会说英语，而且会说日语。",
          "pinyin": "Tā bùdàn huì shuō yīngyǔ, érqiě huì shuō rìyǔ.",
          "english": "He not only speaks English, but also speaks Japanese."
        },
        {
          "chinese": "这个地方不但风景美，而且人很热情。",
          "pinyin": "Zhège dìfāng bùdàn fēngjǐng měi, érqiě rén hěn rèqíng.",
          "english": "Not only is the scenery beautiful here, but the people are also very warm."
        }
      ]
    },
    {
      "id": "hsk3-9",
      "title": "Expressing \"or\" in statements 或者 (huòzhě)",
      "structure": "Option A + 或者 + Option B",
      "explanation": {
        "english": "Used to present alternatives in a declarative sentence (not a question).",
        "chinese": "用于在陈述句（非疑问句）中提出替代方案。",
        "pinyin": "Yòng yú zài chénshùjù (fēi yíwènjù) zhōng tíchū tìdài fāng'àn."
      },
      "examples": [
        {
          "chinese": "我们周末可以去爬山或者看电影。",
          "pinyin": "Wǒmen zhōumò kěyǐ qù páshān huòzhě kàn diànyǐng.",
          "english": "We can go hiking or watch a movie this weekend."
        },
        {
          "chinese": "你可以喝茶或者喝咖啡。",
          "pinyin": "Nǐ kěyǐ hē chá huòzhě hē kāfēi.",
          "english": "You can drink tea or coffee."
        },
        {
          "chinese": "你可以坐地铁或者打车去。",
          "pinyin": "Nǐ kěyǐ zuò dìtiě huòzhě dǎchē qù.",
          "english": "You can take the subway or take a taxi there."
        },
        {
          "chinese": "我晚上一般看书或者听音乐。",
          "pinyin": "Wǒ wǎnshang yìbān kànshū huòzhě tīng yīnyuè.",
          "english": "I usually read books or listen to music in the evening."
        }
      ]
    },
    {
      "id": "hsk3-10",
      "title": "Expressing \"or\" in questions 还是 (háishì)",
      "structure": "Option A + 还是 + Option B？",
      "explanation": {
        "english": "Used to present alternatives in a question.",
        "chinese": "用于在疑问句中提出替代方案。",
        "pinyin": "Yòng yú zài yíwènjù zhōng tíchū tìdài fāng'àn."
      },
      "examples": [
        {
          "chinese": "你喜欢喝茶还是喝咖啡？",
          "pinyin": "Nǐ xǐhuān hē chá háishì hē kāfēi?",
          "english": "Do you like to drink tea or coffee?"
        },
        {
          "chinese": "我们今天去还是明天去？",
          "pinyin": "Wǒmen jīntiān qù háishì míngtiān qù?",
          "english": "Are we going today or tomorrow?"
        },
        {
          "chinese": "你喜欢吃米饭还是面条？",
          "pinyin": "Nǐ xǐhuān chī mǐfàn háishì miàntiáo?",
          "english": "Do you like to eat rice or noodles?"
        },
        {
          "chinese": "这是你的书还是他的书？",
          "pinyin": "Zhè shì nǐ de shū háishì tā de shū?",
          "english": "Is this your book or his book?"
        }
      ]
    },
    {
      "id": "hsk3-11",
      "title": "First... then... 先...然后... (xiān... ránhòu...)",
      "structure": "先 + Action 1, 然后 + Action 2",
      "explanation": {
        "english": "Used to indicate the sequence of actions.",
        "chinese": "用于表示动作的先后顺序。",
        "pinyin": "Yòng yú biǎoshì dòngzuò de xiānhòu shùnxù."
      },
      "examples": [
        {
          "chinese": "我们先吃饭，然后看电影。",
          "pinyin": "Wǒmen xiān chīfàn, ránhòu kàn diànyǐng.",
          "english": "We will eat first, then watch a movie."
        },
        {
          "chinese": "你先洗手，然后再吃。",
          "pinyin": "Nǐ xiān xǐshǒu, ránhòu zài chī.",
          "english": "You wash your hands first, then eat."
        },
        {
          "chinese": "请先填表，然后去那边排队。",
          "pinyin": "Qǐng xiān tián biǎo, ránhòu qù nàbiān páiduì.",
          "english": "Please fill out the form first, then go line up over there."
        },
        {
          "chinese": "我先做作业，然后玩游戏。",
          "pinyin": "Wǒ xiān zuò zuòyè, ránhòu wán yóuxì.",
          "english": "I will do my homework first, then play games."
        }
      ]
    },
    {
      "id": "hsk3-12",
      "title": "Almost / Nearly 几乎 (jīhū)",
      "structure": "Subject + 几乎 + Verb / Adjective",
      "explanation": {
        "english": "Used to indicate that something is very close to happening or being true.",
        "chinese": "用于表示某事非常接近发生或真实。",
        "pinyin": "Yòng yú biǎoshì mǒu shì fēicháng jiējìn fāshēng huò zhēnshí."
      },
      "examples": [
        {
          "chinese": "我几乎忘了这件事。",
          "pinyin": "Wǒ jīhū wàng le zhè jiàn shì.",
          "english": "I almost forgot about this."
        },
        {
          "chinese": "他几乎每天都去跑步。",
          "pinyin": "Tā jīhū měitiān dōu qù pǎobù.",
          "english": "He goes running almost every day."
        },
        {
          "chinese": "我几乎不看电视。",
          "pinyin": "Wǒ jīhū bù kàn diànshì.",
          "english": "I almost never watch TV."
        },
        {
          "chinese": "这些书我几乎都看过了。",
          "pinyin": "Zhèxiē shū wǒ jīhū dōu kàn guo le.",
          "english": "I have read almost all of these books."
        }
      ]
    },
    {
      "id": "hsk3-13",
      "title": "Must / Have to 必须 (bìxū)",
      "structure": "Subject + 必须 + Verb",
      "explanation": {
        "english": "Used to express a strong necessity or command.",
        "chinese": "用于表达强烈的必要性或命令。",
        "pinyin": "Yòng yú biǎodá qiángliè de bìyàoxìng huò mìnglìng."
      },
      "examples": [
        {
          "chinese": "你必须完成作业。",
          "pinyin": "Nǐ bìxū wánchéng zuòyè.",
          "english": "You must finish your homework."
        },
        {
          "chinese": "我们必须马上走。",
          "pinyin": "Wǒmen bìxū mǎshàng zǒu.",
          "english": "We must leave immediately."
        },
        {
          "chinese": "你必须在八点前到公司。",
          "pinyin": "Nǐ bìxū zài bā diǎn qián dào gōngsī.",
          "english": "You must arrive at the company before 8 o'clock."
        },
        {
          "chinese": "学习一门外语必须多练习。",
          "pinyin": "Xuéxí yī mén wàiyǔ bìxū duō liànxí.",
          "english": "To learn a foreign language, one must practice a lot."
        }
      ]
    },
    {
      "id": "hsk3-14",
      "title": "About / Concerning 关于 (guānyú)",
      "structure": "关于 + Topic, Statement",
      "explanation": {
        "english": "Used to introduce the topic or subject matter of a statement.",
        "chinese": "用于引出陈述的主题或内容。",
        "pinyin": "Yòng yú yǐnchū chénshù de zhǔtí huò nèiróng."
      },
      "examples": [
        {
          "chinese": "关于这个问题，我没有意见。",
          "pinyin": "Guānyú zhège wèntí, wǒ méiyǒu yìjiàn.",
          "english": "Concerning this problem, I have no opinion."
        },
        {
          "chinese": "这是一本关于中国历史的书。",
          "pinyin": "Zhè shì yī běn guānyú Zhōngguó lìshǐ de shū.",
          "english": "This is a book about Chinese history."
        },
        {
          "chinese": "关于那个计划，大家有什么意见？",
          "pinyin": "Guānyú nàge jìhuà, dàjiā yǒu shénme yìjiàn?",
          "english": "Regarding that plan, what opinions does everyone have?"
        },
        {
          "chinese": "我想找一些关于中国文化的资料。",
          "pinyin": "Wǒ xiǎng zhǎo yīxiē guānyú Zhōngguó wénhuà de zīliào.",
          "english": "I want to find some materials about Chinese culture."
        }
      ]
    },
    {
      "id": "hsk3-15",
      "title": "According to 根据 (gēnjù)",
      "structure": "根据 + Source / Basis, Statement",
      "explanation": {
        "english": "Used to state the basis or source of information for a conclusion or action.",
        "chinese": "用于陈述结论或行动的信息来源或依据。",
        "pinyin": "Yòng yú chénshù jiélùn huò xíngdòng de xìnxī láiyuán huò yījù."
      },
      "examples": [
        {
          "chinese": "根据天气预报，明天有雨。",
          "pinyin": "Gēnjù tiānqì yùbào, míngtiān yǒu yǔ.",
          "english": "According to the weather forecast, it will rain tomorrow."
        },
        {
          "chinese": "根据规定，你不能在这里停车。",
          "pinyin": "Gēnjù guīdìng, nǐ bù néng zài zhèlǐ tíngchē.",
          "english": "According to the rules, you cannot park here."
        },
        {
          "chinese": "根据我的经验，这个方法很有效。",
          "pinyin": "Gēnjù wǒ de jīngyàn, zhège fāngfǎ hěn yǒuxiào.",
          "english": "According to my experience, this method is very effective."
        },
        {
          "chinese": "根据调查，很多人喜欢在网上购物。",
          "pinyin": "Gēnjù diàochá, hěn duō rén xǐhuān zài wǎngshàng gòuwù.",
          "english": "According to the survey, many people like to shop online."
        }
      ]
    }
  ],
  "HSK 4": [
    {
      "id": "hsk4-1",
      "title": "Even 连...都/也... (lián... dōu/yě...)",
      "structure": "连 + Extreme Case + 都/也 + Verb",
      "explanation": {
        "english": "Used to emphasize an extreme case to prove a point.",
        "chinese": "用于强调极端情况以证明一个观点。",
        "pinyin": "Yòng yú qiángdiào jíduān qíngkuàng yǐ zhèngmíng yī gè guāndiǎn."
      },
      "examples": [
        {
          "chinese": "这个问题太难了，连老师都不会。",
          "pinyin": "Zhège wèntí tài nán le, lián lǎoshī dōu bù huì.",
          "english": "This question is too difficult, even the teacher doesn't know how to do it."
        },
        {
          "chinese": "他很忙，连吃饭的时间都没有。",
          "pinyin": "Tā hěn máng, lián chīfàn de shíjiān dōu méiyǒu.",
          "english": "He is very busy, he doesn't even have time to eat."
        },
        {
          "chinese": "他很聪明，连这么难的题都会做。",
          "pinyin": "Tā hěn cōngmíng, lián zhème nán de tí dōu huì zuò.",
          "english": "He is very smart, he can even solve such a difficult problem."
        },
        {
          "chinese": "我太累了，连话都不想说。",
          "pinyin": "Wǒ tài lèi le, lián huà dōu bù xiǎng shuō.",
          "english": "I am so tired that I don't even want to speak."
        }
      ]
    },
    {
      "id": "hsk4-2",
      "title": "Even if 即使...也... (jíshǐ... yě...)",
      "structure": "即使 + Condition, Subject + 也 + Result",
      "explanation": {
        "english": "Used to introduce a hypothetical concession.",
        "chinese": "用于引出假设性的让步。",
        "pinyin": "Yòng yú yǐnchū jiǎshèxìng de ràngbù."
      },
      "examples": [
        {
          "chinese": "即使下雨，我也要去。",
          "pinyin": "Jíshǐ xiàyǔ, wǒ yě yào qù.",
          "english": "Even if it rains, I will still go."
        },
        {
          "chinese": "即使很累，他也在工作。",
          "pinyin": "Jíshǐ hěn lèi, tā yě zài gōngzuò.",
          "english": "Even if he is tired, he is still working."
        },
        {
          "chinese": "即使失败了，我也不会放弃。",
          "pinyin": "Jíshǐ shībài le, wǒ yě bú huì fàngqì.",
          "english": "Even if I fail, I will not give up."
        },
        {
          "chinese": "即使你不同意，我也要这么做。",
          "pinyin": "Jíshǐ nǐ bù tóngyì, wǒ yě yào zhème zuò.",
          "english": "Even if you disagree, I will still do it."
        }
      ]
    },
    {
      "id": "hsk4-3",
      "title": "No matter 无论...都... (wúlùn... dōu...)",
      "structure": "无论 + Condition / Question word, Subject + 都 + Result",
      "explanation": {
        "english": "Used to indicate that the result will remain the same regardless of the condition.",
        "chinese": "用于表示无论条件如何，结果都保持不变。",
        "pinyin": "Yòng yú biǎoshì wúlùn tiáojiàn rúhé, jiéguǒ dōu bǎochí bùbiàn."
      },
      "examples": [
        {
          "chinese": "无论发生什么，我都会支持你。",
          "pinyin": "Wúlùn fāshēng shénme, wǒ dōu huì zhīchí nǐ.",
          "english": "No matter what happens, I will support you."
        },
        {
          "chinese": "无论多难，他都不放弃。",
          "pinyin": "Wúlùn duō nán, tā dōu bù fàngqì.",
          "english": "No matter how difficult it is, he does not give up."
        },
        {
          "chinese": "无论天气怎么样，我们都要出发。",
          "pinyin": "Wúlùn tiānqì zěnmeyàng, wǒmen dōu yào chūfā.",
          "english": "No matter how the weather is, we must set off."
        },
        {
          "chinese": "无论谁去，结果都一样。",
          "pinyin": "Wúlùn shuí qù, jiéguǒ dōu yíyàng.",
          "english": "No matter who goes, the result is the same."
        }
      ]
    },
    {
      "id": "hsk4-4",
      "title": "Since 既然...就... (jìrán... jiù...)",
      "structure": "既然 + Fact, Subject + 就 + Suggestion / Result",
      "explanation": {
        "english": "Used to state a fact and then draw a conclusion or make a suggestion based on it.",
        "chinese": "用于陈述一个事实，然后基于此得出结论或提出建议。",
        "pinyin": "Yòng yú chénshù yī gè shìshí, ránhòu jīyú cǐ déchū jiélùn huò tíchū jiànyì."
      },
      "examples": [
        {
          "chinese": "既然你不想去，就别去了。",
          "pinyin": "Jìrán nǐ bù xiǎng qù, jiù bié qù le.",
          "english": "Since you don't want to go, then don't go."
        },
        {
          "chinese": "既然来了，就多玩几天吧。",
          "pinyin": "Jìrán lái le, jiù duō wán jǐ tiān ba.",
          "english": "Since you are here, stay and play for a few more days."
        },
        {
          "chinese": "既然你决定了，就去做吧。",
          "pinyin": "Jìrán nǐ juédìng le, jiù qù zuò ba.",
          "english": "Since you have decided, go do it."
        },
        {
          "chinese": "既然大家都在，我们就开会吧。",
          "pinyin": "Jìrán dàjiā dōu zài, wǒmen jiù kāihuì ba.",
          "english": "Since everyone is here, let's have the meeting."
        }
      ]
    },
    {
      "id": "hsk4-5",
      "title": "As long as 只要...就... (zhǐyào... jiù...)",
      "structure": "只要 + Condition, 就 + Result",
      "explanation": {
        "english": "Used to indicate a sufficient condition.",
        "chinese": "用于表示充分条件。",
        "pinyin": "Yòng yú biǎoshì chōngfèn tiáojiàn."
      },
      "examples": [
        {
          "chinese": "只要你努力，就能成功。",
          "pinyin": "Zhǐyào nǐ nǔlì, jiù néng chénggōng.",
          "english": "As long as you work hard, you can succeed."
        },
        {
          "chinese": "只要不下雨，我们就去爬山。",
          "pinyin": "Zhǐyào bù xiàyǔ, wǒmen jiù qù páshān.",
          "english": "As long as it doesn't rain, we will go hiking."
        },
        {
          "chinese": "只要有时间，我就会去旅游。",
          "pinyin": "Zhǐyào yǒu shíjiān, wǒ jiù huì qù lǚyóu.",
          "english": "As long as I have time, I will go traveling."
        },
        {
          "chinese": "只要你坚持，就一定会成功。",
          "pinyin": "Zhǐyào nǐ jiānchí, jiù yídìng huì chénggōng.",
          "english": "As long as you persist, you will definitely succeed."
        }
      ]
    },
    {
      "id": "hsk4-6",
      "title": "Only if 只有...才... (zhǐyǒu... cái...)",
      "structure": "只有 + Essential Condition, Subject + 才 + Result",
      "explanation": {
        "english": "Used to indicate the only condition that can lead to a specific result.",
        "chinese": "用于表示导致特定结果的唯一条件。",
        "pinyin": "Yòng yú biǎoshì dǎozhì tèdìng jiéguǒ de wéiyī tiáojiàn."
      },
      "examples": [
        {
          "chinese": "只有多练习，才能学好汉语。",
          "pinyin": "Zhǐyǒu duō liànxí, cái néng xuéhǎo hànyǔ.",
          "english": "Only by practicing more can you learn Chinese well."
        },
        {
          "chinese": "只有他才知道密码。",
          "pinyin": "Zhǐyǒu tā cái zhīdào mìmǎ.",
          "english": "Only he knows the password."
        },
        {
          "chinese": "只有互相理解，才能成为好朋友。",
          "pinyin": "Zhǐyǒu hùxiāng lǐjiě, cái néng chéngwéi hǎo péngyou.",
          "english": "Only through mutual understanding can you become good friends."
        },
        {
          "chinese": "只有经历过失败，才能懂得成功的珍贵。",
          "pinyin": "Zhǐyǒu jīnglì guo shībài, cái néng dǒngdé chénggōng de zhēnguì.",
          "english": "Only by experiencing failure can one understand the preciousness of success."
        }
      ]
    },
    {
      "id": "hsk4-7",
      "title": "Not only... but also... 不但...而且... (bùdàn... érqiě...)",
      "structure": "不但 + Statement 1, 而且 + Statement 2",
      "explanation": {
        "english": "Used to connect two clauses that build upon each other.",
        "chinese": "用于连接两个递进关系的从句。",
        "pinyin": "Yòng yú liánjiē liǎng gè dìjìn guānxì de cóngjù."
      },
      "examples": [
        {
          "chinese": "他不但聪明，而且很努力。",
          "pinyin": "Tā bùdàn cōngmíng, érqiě hěn nǔlì.",
          "english": "He is not only smart, but also very hardworking."
        },
        {
          "chinese": "这个菜不但好看，而且好吃。",
          "pinyin": "Zhège cài bùdàn hǎokàn, érqiě hǎochī.",
          "english": "This dish not only looks good, but also tastes good."
        },
        {
          "chinese": "他不但会弹钢琴，而且还会拉小提琴。",
          "pinyin": "Tā bùdàn huì tán gāngqín, érqiě hái huì lā xiǎotíqín.",
          "english": "He can not only play the piano, but also play the violin."
        },
        {
          "chinese": "这台电脑不但速度快，而且价格便宜。",
          "pinyin": "Zhè tái diànnǎo bùdàn sùdù kuài, érqiě jiàgé piányi.",
          "english": "This computer is not only fast, but also cheap."
        }
      ]
    },
    {
      "id": "hsk4-8",
      "title": "On the contrary 反而 (fǎn'ér)",
      "structure": "Statement 1, Subject + 反而 + Unexpected Result",
      "explanation": {
        "english": "Used to indicate a result that is contrary to expectations.",
        "chinese": "用于表示与预期相反的结果。",
        "pinyin": "Yòng yú biǎoshì yǔ yùqī xiāngfǎn de jiéguǒ."
      },
      "examples": [
        {
          "chinese": "吃了药以后，他反而更难受了。",
          "pinyin": "Chī le yào yǐhòu, tā fǎn'ér gèng nánshòu le.",
          "english": "After taking the medicine, he felt even worse."
        },
        {
          "chinese": "雨不但没停，反而下得更大了。",
          "pinyin": "Yǔ bùdàn méi tíng, fǎn'ér xià de gèng dà le.",
          "english": "Not only did the rain not stop, on the contrary, it rained even harder."
        },
        {
          "chinese": "我帮了他，他反而生我的气。",
          "pinyin": "Wǒ bāng le tā, tā fǎn'ér shēng wǒ de qì.",
          "english": "I helped him, but he got angry with me instead."
        },
        {
          "chinese": "风不但没停，反而刮得更大了。",
          "pinyin": "Fēng bùdàn méi tíng, fǎn'ér guā de gèng dà le.",
          "english": "Not only did the wind not stop, but it blew even harder."
        }
      ]
    },
    {
      "id": "hsk4-9",
      "title": "In order to 为了 (wèile)",
      "structure": "为了 + Purpose, Subject + Action",
      "explanation": {
        "english": "Used to indicate the purpose of an action.",
        "chinese": "用于表示动作的目的。",
        "pinyin": "Yòng yú biǎoshì dòngzuò de mùdì."
      },
      "examples": [
        {
          "chinese": "为了学好汉语，他每天都练习。",
          "pinyin": "Wèile xuéhǎo hànyǔ, tā měitiān dōu liànxí.",
          "english": "In order to learn Chinese well, he practices every day."
        },
        {
          "chinese": "为了健康，我开始跑步。",
          "pinyin": "Wèile jiànkāng, wǒ kāishǐ pǎobù.",
          "english": "For the sake of health, I started running."
        },
        {
          "chinese": "为了提高听力，他每天听中文广播。",
          "pinyin": "Wèile tígāo tīnglì, tā měitiān tīng zhōngwén guǎngbō.",
          "english": "In order to improve his listening, he listens to Chinese broadcasts every day."
        },
        {
          "chinese": "为了保护环境，我们应该少用塑料袋。",
          "pinyin": "Wèile bǎohù huánjìng, wǒmen yīnggāi shǎo yòng sùliàodài.",
          "english": "In order to protect the environment, we should use fewer plastic bags."
        }
      ]
    },
    {
      "id": "hsk4-10",
      "title": "Because of / Due to 由于 (yóuyú)",
      "structure": "由于 + Cause, Result",
      "explanation": {
        "english": "A more formal way to express cause, similar to 因为 (yīnwei).",
        "chinese": "一种更正式的表达原因的方式，类似于“因为”。",
        "pinyin": "Yī zhǒng gèng zhèngshì de biǎodá yuányīn de fāngshì, lèisì yú “yīnwei”."
      },
      "examples": [
        {
          "chinese": "由于天气原因，航班取消了。",
          "pinyin": "Yóuyú tiānqì yuányīn, hángbān qǔxiāo le.",
          "english": "Due to weather conditions, the flight was canceled."
        },
        {
          "chinese": "由于他的努力，公司取得了成功。",
          "pinyin": "Yóuyú tā de nǔlì, gōngsī qǔdé le chénggōng.",
          "english": "Because of his hard work, the company achieved success."
        },
        {
          "chinese": "由于堵车，我迟到了。",
          "pinyin": "Yóuyú dǔchē, wǒ chídào le.",
          "english": "Due to the traffic jam, I was late."
        },
        {
          "chinese": "由于缺乏经验，他把事情搞砸了。",
          "pinyin": "Yóuyú quēfá jīngyàn, tā bǎ shìqing gǎo zá le.",
          "english": "Due to lack of experience, he messed things up."
        }
      ]
    },
    {
      "id": "hsk4-11",
      "title": "Even 甚至 (shènzhì)",
      "structure": "Subject + 甚至 + (连) + Extreme Example + 都/也 + Verb",
      "explanation": {
        "english": "Used to emphasize an extreme case, going further than expected.",
        "chinese": "用于强调极端情况，超出预期。",
        "pinyin": "Yòng yú qiángdiào jíduān qíngkuàng, chāochū yùqī."
      },
      "examples": [
        {
          "chinese": "他很生气，甚至不想和我说话。",
          "pinyin": "Tā hěn shēngqì, shènzhì bù xiǎng hé wǒ shuōhuà.",
          "english": "He is very angry, he doesn't even want to talk to me."
        },
        {
          "chinese": "这个地方很偏僻，甚至连手机信号都没有。",
          "pinyin": "Zhège dìfāng hěn piānpì, shènzhì lián shǒujī xìnhào dōu méiyǒu.",
          "english": "This place is very remote, there isn't even a cell phone signal."
        },
        {
          "chinese": "不管多累，他每天都坚持看书。",
          "pinyin": "Bùguǎn duō lèi, tā měitiān dōu jiānchí kànshū.",
          "english": "No matter how tired he is, he insists on reading every day."
        },
        {
          "chinese": "不管别人怎么说，我都会支持你。",
          "pinyin": "Bùguǎn biérén zěnme shuō, wǒ dōu huì zhīchí nǐ.",
          "english": "No matter what others say, I will support you."
        }
      ]
    },
    {
      "id": "hsk4-12",
      "title": "On the contrary / Yet 却 (què)",
      "structure": "Subject + 却 + Verb",
      "explanation": {
        "english": "Used to indicate a turn in meaning, similar to \"but\" or \"yet\", but placed after the subject.",
        "chinese": "用于表示转折，类似于“但是”或“却”，但放在主语之后。",
        "pinyin": "Yòng yú biǎoshì zhuǎnzhé, lèisì yú “dànshì” huò “què”, dàn fàng zài zhǔyǔ zhīhòu."
      },
      "examples": [
        {
          "chinese": "他很有钱，却不快乐。",
          "pinyin": "Tā hěn yǒuqián, què bù kuàilè.",
          "english": "He is rich, yet he is not happy."
        },
        {
          "chinese": "我帮了他，他却不感谢我。",
          "pinyin": "Wǒ bāng le tā, tā què bù gǎnxiè wǒ.",
          "english": "I helped him, but he didn't thank me."
        },
        {
          "chinese": "你最好早点出发，以免迟到。",
          "pinyin": "Nǐ zuìhǎo zǎodiǎn chūfā, yǐmiǎn chídào.",
          "english": "You'd better set off early to avoid being late."
        },
        {
          "chinese": "出门前检查一下行李，以免忘记带东西。",
          "pinyin": "Chūmén qián jiǎnchá yíxià xíngli, yǐmiǎn wàngjì dài dōngxi.",
          "english": "Check your luggage before leaving to avoid forgetting things."
        }
      ]
    },
    {
      "id": "hsk4-13",
      "title": "Anyway / No matter what 反正 (fǎnzhèng)",
      "structure": "反正 + Statement",
      "explanation": {
        "english": "Used to indicate that a result or decision remains the same regardless of other factors.",
        "chinese": "用于表示无论其他因素如何，结果或决定保持不变。",
        "pinyin": "Yòng yú biǎoshì wúlùn qítā yīnsù rúhé, jiéguǒ huò juédìng bǎochí bùbiàn."
      },
      "examples": [
        {
          "chinese": "信不信由你，反正我信了。",
          "pinyin": "Xìn bù xìn yóu nǐ, fǎnzhèng wǒ xìn le.",
          "english": "Believe it or not, anyway I believe it."
        },
        {
          "chinese": "不管你去不去，反正我要去。",
          "pinyin": "Bùguǎn nǐ qù bù qù, fǎnzhèng wǒ yào qù.",
          "english": "Whether you go or not, anyway I am going."
        },
        {
          "chinese": "随着经济的发展，人们的生活水平提高了。",
          "pinyin": "Suízhe jīngjì de fāzhǎn, rénmen de shēnghuó shuǐpíng tígāo le.",
          "english": "With the development of the economy, people's living standards have improved."
        },
        {
          "chinese": "随着时间的推移，他慢慢忘记了那件事。",
          "pinyin": "Suízhe shíjiān de tuīyí, tā mànman wàngjì le nà jiàn shì.",
          "english": "As time went by, he gradually forgot about that matter."
        }
      ]
    },
    {
      "id": "hsk4-14",
      "title": "Originally / At first 本来 (běnlái)",
      "structure": "Subject + 本来 + Verb / Adjective",
      "explanation": {
        "english": "Used to describe a situation that was true in the beginning but has since changed.",
        "chinese": "用于描述最初是真实的但后来发生了变化的情况。",
        "pinyin": "Yòng yú miáoshù zuìchū shì zhēnshí de dàn hòulái fāshēng le biànhuà de qíngkuàng."
      },
      "examples": [
        {
          "chinese": "我本来想去，但是太忙了。",
          "pinyin": "Wǒ běnlái xiǎng qù, dànshì tài máng le.",
          "english": "I originally wanted to go, but I was too busy."
        },
        {
          "chinese": "他本来不会游泳，现在游得很好。",
          "pinyin": "Tā běnlái bù huì yóuyǒng, xiànzài yóu de hěn hǎo.",
          "english": "He originally couldn't swim, but now he swims very well."
        },
        {
          "chinese": "他不仅是我的老师，还是我的朋友。",
          "pinyin": "Tā bùjǐn shì wǒ de lǎoshī, hái shì wǒ de péngyou.",
          "english": "He is not only my teacher, but also my friend."
        },
        {
          "chinese": "这座城市不仅风景优美，而且历史悠久。",
          "pinyin": "Zhè zuò chéngshì bùjǐn fēngjǐng yōuměi, érqiě lìshǐ yōujiǔ.",
          "english": "This city not only has beautiful scenery, but also has a long history."
        }
      ]
    },
    {
      "id": "hsk4-15",
      "title": "It turns out 原来 (yuánlái)",
      "structure": "原来 + Statement",
      "explanation": {
        "english": "Used to indicate a sudden realization of the truth or a previously unknown fact.",
        "chinese": "用于表示突然意识到真相或以前未知的事实。",
        "pinyin": "Yòng yú biǎoshì tūrán yìshí dào zhēnxiàng huò yǐqián wèizhī de shìshí."
      },
      "examples": [
        {
          "chinese": "原来是你啊！",
          "pinyin": "Yuánlái shì nǐ a!",
          "english": "So it was you all along!"
        },
        {
          "chinese": "我找了半天，原来钥匙在口袋里。",
          "pinyin": "Wǒ zhǎo le bàntiān, yuánlái yàoshi zài kǒudài lǐ.",
          "english": "I looked for a long time, it turns out the keys were in my pocket."
        },
        {
          "chinese": "与其在家里睡觉，不如出去散散步。",
          "pinyin": "Yǔqí zài jiālǐ shuìjiào, bùrú chūqù sànsan bù.",
          "english": "Rather than sleeping at home, it's better to go out for a walk."
        },
        {
          "chinese": "与其抱怨，不如想办法解决问题。",
          "pinyin": "Yǔqí bàoyuàn, bùrú xiǎng bànfǎ jiějué wèntí.",
          "english": "Rather than complaining, it's better to find a way to solve the problem."
        }
      ]
    }
  ],
  "HSK 5": [
    {
      "id": "hsk5-1",
      "title": "Would rather 宁可...也不... (nìngkě... yě bù...)",
      "structure": "宁可 + Option A, 也不 + Option B",
      "explanation": {
        "english": "Used to express choosing a lesser evil over a worse option.",
        "chinese": "用于表达在两个不利选项中选择较轻的一个。",
        "pinyin": "Yòng yú biǎodá zài liǎng gè bùlì xuǎnxiàng zhōng xuǎnzé jiào qīng de yī gè."
      },
      "examples": [
        {
          "chinese": "我宁可走路，也不坐他的车。",
          "pinyin": "Wǒ nìngkě zǒulù, yě bù zuò tā de chē.",
          "english": "I would rather walk than take his car."
        },
        {
          "chinese": "他宁可失败，也不放弃。",
          "pinyin": "Tā nìngkě shībài, yě bù fàngqì.",
          "english": "He would rather fail than give up."
        },
        {
          "chinese": "即使遇到再大的困难，我们也要坚持下去。",
          "pinyin": "Jíshǐ yùdào zài dà de kùnnán, wǒmen yě yào jiānchí xiàqù.",
          "english": "Even if we encounter great difficulties, we must persevere."
        },
        {
          "chinese": "即使你不想听，我也得把真相告诉你。",
          "pinyin": "Jíshǐ nǐ bù xiǎng tīng, wǒ yě děi bǎ zhēnxiàng gàosu nǐ.",
          "english": "Even if you don't want to hear it, I have to tell you the truth."
        }
      ]
    },
    {
      "id": "hsk5-2",
      "title": "As for 至于 (zhìyú)",
      "structure": "Statement 1. 至于 + Topic 2, Statement 2",
      "explanation": {
        "english": "Used to introduce a new, related topic.",
        "chinese": "用于引出一个新的、相关的话题。",
        "pinyin": "Yòng yú yǐnchū yī gè xīn de, xiāngguān de huàtí."
      },
      "examples": [
        {
          "chinese": "我同意这个计划。至于资金问题，我们再讨论。",
          "pinyin": "Wǒ tóngyì zhège jìhuà. Zhìyú zījīn wèntí, wǒmen zài tǎolùn.",
          "english": "I agree with this plan. As for the funding issue, we will discuss it later."
        },
        {
          "chinese": "他去不去我不知道，至于我，我肯定去。",
          "pinyin": "Tā qù bù qù wǒ bù zhīdào, zhìyú wǒ, wǒ kěndìng qù.",
          "english": "I don't know if he is going; as for me, I am definitely going."
        },
        {
          "chinese": "既然你已经决定了，那就放手去做吧。",
          "pinyin": "Jìrán nǐ yǐjīng juédìng le, nà jiù fàngshǒu qù zuò ba.",
          "english": "Since you have already decided, then go ahead and do it."
        },
        {
          "chinese": "既然大家意见不一，我们就再讨论一下。",
          "pinyin": "Jìrán dàjiā yìjiàn bù yī, wǒmen jiù zài tǎolùn yíxià.",
          "english": "Since everyone has different opinions, let's discuss it again."
        }
      ]
    },
    {
      "id": "hsk5-3",
      "title": "Thus / Thereby 从而 (cóng'ér)",
      "structure": "Action / Cause, 从而 + Result / Purpose",
      "explanation": {
        "english": "Used to connect a cause or method with its result or purpose.",
        "chinese": "用于连接原因或方法及其结果或目的。",
        "pinyin": "Yòng yú liánjiē yuányīn huò fāngfǎ jí qí jiéguǒ huò mùdì."
      },
      "examples": [
        {
          "chinese": "公司改进了技术，从而提高了产量。",
          "pinyin": "Gōngsī gǎijìn le jìshù, cóng'ér tígāo le chǎnliàng.",
          "english": "The company improved its technology, thereby increasing production."
        },
        {
          "chinese": "多读书可以开阔视野，从而提升自己。",
          "pinyin": "Duō dúshū kěyǐ kāikuò shìyě, cóng'ér tíshēng zìjǐ.",
          "english": "Reading more can broaden one's horizons, thus improving oneself."
        },
        {
          "chinese": "无论条件多么艰苦，他都没有退缩。",
          "pinyin": "Wúlùn tiáojiàn duōme jiānkǔ, tā dōu méiyǒu tuìsuō.",
          "english": "No matter how harsh the conditions were, he did not back down."
        },
        {
          "chinese": "无论发生什么情况，请保持冷静。",
          "pinyin": "Wúlùn fāshēng shénme qíngkuàng, qǐng bǎochí lěngjìng.",
          "english": "No matter what happens, please stay calm."
        }
      ]
    },
    {
      "id": "hsk5-4",
      "title": "Every / All 凡是...都... (fánshì... dōu...)",
      "structure": "凡是 + Category / Condition, 都 + Result",
      "explanation": {
        "english": "Used to state that something applies to every single member of a category without exception.",
        "chinese": "用于表示某事适用于某个类别的每一个成员，毫无例外。",
        "pinyin": "Yòng yú biǎoshì mǒu shì shìyòng yú mǒu gè lèibié de měi yī gè chéngyuán, háo wú lìwài."
      },
      "examples": [
        {
          "chinese": "凡是公司的员工，都能参加这个活动。",
          "pinyin": "Fánshì gōngsī de yuángōng, dōu néng cānjiā zhège huódòng.",
          "english": "Every employee of the company can participate in this activity."
        },
        {
          "chinese": "凡是他做的事，我都支持。",
          "pinyin": "Fánshì tā zuò de shì, wǒ dōu zhīchí.",
          "english": "Whatever he does, I support it."
        },
        {
          "chinese": "只要我们齐心协力，就没有克服不了的困难。",
          "pinyin": "Zhǐyào wǒmen qíxīn xiélì, jiù méiyǒu kèfú bù liǎo de kùnnán.",
          "english": "As long as we work together, there are no difficulties we cannot overcome."
        },
        {
          "chinese": "只要你肯努力，梦想总有一天会实现。",
          "pinyin": "Zhǐyào nǐ kěn nǔlì, mèngxiǎng zǒng yǒu yì tiān huì shíxiàn.",
          "english": "As long as you are willing to work hard, your dream will come true one day."
        }
      ]
    },
    {
      "id": "hsk5-5",
      "title": "Moreover 况且 (kuàngqiě)",
      "structure": "Reason 1, 况且 + Reason 2",
      "explanation": {
        "english": "Used to add an additional, often stronger, reason to support a point.",
        "chinese": "用于补充一个额外的、通常更强有力的理由来支持一个观点。",
        "pinyin": "Yòng yú bǔchōng yī gè èwài de, tōngcháng gèng qiángyǒulì de lǐyóu lái zhīchí yī gè guāndiǎn."
      },
      "examples": [
        {
          "chinese": "这件衣服太贵了，况且颜色也不好看。",
          "pinyin": "Zhè jiàn yīfu tài guì le, kuàngqiě yánsè yě bù hǎokàn.",
          "english": "This piece of clothing is too expensive, moreover, the color is not nice."
        },
        {
          "chinese": "外面下着大雨，况且你还生病了，别去了。",
          "pinyin": "Wàimiàn xià zhe dà yǔ, kuàngqiě nǐ hái shēngbìng le, bié qù le.",
          "english": "It is raining heavily outside, moreover you are sick, don't go."
        },
        {
          "chinese": "只有不断学习，才能跟上时代的步伐。",
          "pinyin": "Zhǐyǒu búduàn xuéxí, cái néng gēn shàng shídài de bùfá.",
          "english": "Only by continuously learning can one keep up with the pace of the times."
        },
        {
          "chinese": "只有亲身经历过，才能真正体会到其中的艰辛。",
          "pinyin": "Zhǐyǒu qīnshēn jīnglì guo, cái néng zhēnzhèng tǐhuì dào qízhōng de jiānxīn.",
          "english": "Only by experiencing it firsthand can one truly appreciate the hardships involved."
        }
      ]
    },
    {
      "id": "hsk5-6",
      "title": "Otherwise 否则 (fǒuzé)",
      "structure": "Condition / Suggestion, 否则 + Bad Result",
      "explanation": {
        "english": "Used to state what will happen if a condition is not met.",
        "chinese": "用于说明如果不满足某个条件会发生什么。",
        "pinyin": "Yòng yú shuōmíng rúguǒ bù mǎnzú mǒu gè tiáojiàn huì fāshēng shénme."
      },
      "examples": [
        {
          "chinese": "快点走，否则我们会迟到的。",
          "pinyin": "Kuàidiǎn zǒu, fǒuzé wǒmen huì chídào de.",
          "english": "Hurry up, otherwise we will be late."
        },
        {
          "chinese": "你必须努力学习，否则考不上大学。",
          "pinyin": "Nǐ bìxū nǔlì xuéxí, fǒuzé kǎo bù shàng dàxué.",
          "english": "You must study hard, otherwise you won't get into college."
        },
        {
          "chinese": "他不仅完成了任务，而且做得非常出色。",
          "pinyin": "Tā bùjǐn wánchéng le rènwu, érqiě zuò de fēicháng chūsè.",
          "english": "He not only completed the task, but also did it exceptionally well."
        },
        {
          "chinese": "这部电影不仅票房高，而且口碑也很好。",
          "pinyin": "Zhè bù diànyǐng bùjǐn piàofáng gāo, érqiě kǒubēi yě hěn hǎo.",
          "english": "This movie not only has high box office, but also has good word-of-mouth."
        }
      ]
    },
    {
      "id": "hsk5-7",
      "title": "Even if 哪怕...也... (nǎpà... yě...)",
      "structure": "哪怕 + Extreme Condition, Subject + 也 + Result",
      "explanation": {
        "english": "Similar to 即使...也..., used to introduce an extreme hypothetical concession.",
        "chinese": "类似于“即使……也……”，用于引出极端的假设性让步。",
        "pinyin": "Lèisì yú “jíshǐ... yě...”, yòng yú yǐnchū jíduān de jiǎshèxìng ràngbù."
      },
      "examples": [
        {
          "chinese": "哪怕再困难，我也要完成任务。",
          "pinyin": "Nǎpà zài kùnnán, wǒ yě yào wánchéng rènwu.",
          "english": "Even if it is extremely difficult, I will complete the task."
        },
        {
          "chinese": "哪怕只有一个人支持我，我也不会放弃。",
          "pinyin": "Nǎpà zhǐyǒu yī gè rén zhīchí wǒ, wǒ yě bù huì fàngqì.",
          "english": "Even if only one person supports me, I will not give up."
        },
        {
          "chinese": "他不但不认错，反而怪别人。",
          "pinyin": "Tā bùdàn bú rèncuò, fǎn'ér guài biérén.",
          "english": "Not only did he not admit his mistake, but he blamed others instead."
        },
        {
          "chinese": "吃了这种药，病情反而加重了。",
          "pinyin": "Chī le zhè zhǒng yào, bìngqíng fǎn'ér jiāzhòng le.",
          "english": "After taking this medicine, the condition actually worsened."
        }
      ]
    },
    {
      "id": "hsk5-8",
      "title": "It can be seen that 可见 (kějiàn)",
      "structure": "Fact / Situation, 可见 + Conclusion",
      "explanation": {
        "english": "Used to draw a conclusion based on a previously stated fact.",
        "chinese": "用于基于前面陈述的事实得出结论。",
        "pinyin": "Yòng yú jīyú qiánmiàn chénshù de shìshí déchū jiélùn."
      },
      "examples": [
        {
          "chinese": "他每天都迟到，可见他不在乎这份工作。",
          "pinyin": "Tā měitiān dōu chídào, kějiàn tā bù zàihu zhè fèn gōngzuò.",
          "english": "He is late every day, it can be seen that he doesn't care about this job."
        },
        {
          "chinese": "大家都同意这个方案，可见这是一个好主意。",
          "pinyin": "Dàjiā dōu tóngyì zhège fāng'àn, kějiàn zhè shì yī gè hǎo zhǔyì.",
          "english": "Everyone agrees with this plan, it can be seen that this is a good idea."
        },
        {
          "chinese": "为了实现梦想，他付出了很多汗水。",
          "pinyin": "Wèile shíxiàn mèngxiǎng, tā fùchū le hěn duō hànshuǐ.",
          "english": "In order to realize his dream, he put in a lot of sweat."
        },
        {
          "chinese": "为了公司的发展，大家都在努力工作。",
          "pinyin": "Wèile gōngsī de fāzhǎn, dàjiā dōu zài nǔlì gōngzuò.",
          "english": "For the development of the company, everyone is working hard."
        }
      ]
    },
    {
      "id": "hsk5-9",
      "title": "In case 万一 (wànyī)",
      "structure": "万一 + Unexpected Situation, Subject + 怎么办 / Result",
      "explanation": {
        "english": "Used to express \"just in case\" or a very small possibility of something bad happening.",
        "chinese": "用于表达“以防万一”或坏事发生的极小可能性。",
        "pinyin": "Yòng yú biǎodá “yǐ fáng wànyī” huò huàishì fāshēng de jí xiǎo kěnéngxìng."
      },
      "examples": [
        {
          "chinese": "带上伞吧，万一下雨呢。",
          "pinyin": "Dàishang sǎn ba, wànyī xiàyǔ ne.",
          "english": "Take an umbrella, just in case it rains."
        },
        {
          "chinese": "万一他没来，我们怎么办？",
          "pinyin": "Wànyī tā méi lái, wǒmen zěnme bàn?",
          "english": "In case he doesn't come, what should we do?"
        },
        {
          "chinese": "由于天气恶劣，比赛被迫取消。",
          "pinyin": "Yóuyú tiānqì èliè, bǐsài bèi pò qǔxiāo.",
          "english": "Due to severe weather, the match was forced to be canceled."
        },
        {
          "chinese": "由于资金不足，这个项目暂时搁浅了。",
          "pinyin": "Yóuyú zījīn bùzú, zhège xiàngmù zànshí gēqiǎn le.",
          "english": "Due to lack of funds, this project is temporarily stranded."
        }
      ]
    },
    {
      "id": "hsk5-10",
      "title": "Not necessarily 不见得 (bùjiànde)",
      "structure": "Subject + 不见得 + Verb / Adjective",
      "explanation": {
        "english": "Used to express that something is not necessarily true or likely.",
        "chinese": "用于表达某事不一定真实或可能。",
        "pinyin": "Yòng yú biǎodá mǒu shì bù yīdìng zhēnshí huò kěnéng."
      },
      "examples": [
        {
          "chinese": "贵的东西不见得好。",
          "pinyin": "Guì de dōngxi bùjiànde hǎo.",
          "english": "Expensive things are not necessarily good."
        },
        {
          "chinese": "他虽然聪明，但不见得能解决这个问题。",
          "pinyin": "Tā suīrán cōngmíng, dàn bùjiànde néng jiějué zhège wèntí.",
          "english": "Although he is smart, he can't necessarily solve this problem."
        },
        {
          "chinese": "不管遇到什么挫折，他都保持乐观。",
          "pinyin": "Bùguǎn yùdào shénme cuòzhé, tā dōu bǎochí lèguān.",
          "english": "No matter what setbacks he encounters, he remains optimistic."
        },
        {
          "chinese": "不管别人怎么评价，我只要做好自己就行了。",
          "pinyin": "Bùguǎn biérén zěnme píngjià, wǒ zhǐyào zuò hǎo zìjǐ jiù xíng le.",
          "english": "No matter how others judge, I just need to be myself."
        }
      ]
    },
    {
      "id": "hsk5-11",
      "title": "To one's heart's content 尽情 (jìnqíng)",
      "structure": "尽情 + Verb",
      "explanation": {
        "english": "Used to express doing something as much as one likes, without restraint.",
        "chinese": "用于表达尽情地做某事，不受约束。",
        "pinyin": "Yòng yú biǎodá jìnqíng de zuò mǒu shì, bù shòu yuēshù."
      },
      "examples": [
        {
          "chinese": "大家尽情地跳舞吧！",
          "pinyin": "Dàjiā jìnqíng de tiàowǔ ba!",
          "english": "Everyone, dance to your heart's content!"
        },
        {
          "chinese": "在海边，我们可以尽情享受阳光。",
          "pinyin": "Zài hǎibiān, wǒmen kěyǐ jìnqíng xiǎngshòu yángguāng.",
          "english": "At the beach, we can enjoy the sunshine to our heart's content."
        },
        {
          "chinese": "请把重要文件备份，以免丢失。",
          "pinyin": "Qǐng bǎ zhòngyào wénjiàn bèifèn, yǐmiǎn diūshī.",
          "english": "Please back up important files to avoid losing them."
        },
        {
          "chinese": "我们应该提前做好准备，以免到时候手忙脚乱。",
          "pinyin": "Wǒmen yīnggāi tíqián zuò hǎo zhǔnbèi, yǐmiǎn dào shíhou shǒumángjiǎoluàn.",
          "english": "We should prepare in advance to avoid being in a rush when the time comes."
        }
      ]
    },
    {
      "id": "hsk5-12",
      "title": "In short / In a word 总之 (zǒngzhī)",
      "structure": "总之，Conclusion",
      "explanation": {
        "english": "Used to summarize previously stated points into a brief conclusion.",
        "chinese": "用于将前面陈述的观点总结为一个简短的结论。",
        "pinyin": "Yòng yú jiāng qiánmiàn chénshù de guāndiǎn zǒngjié wèi yī gè jiǎnduǎn de jiélùn."
      },
      "examples": [
        {
          "chinese": "总之，这个计划不可行。",
          "pinyin": "Zǒngzhī, zhège jìhuà bù kěxíng.",
          "english": "In short, this plan is not feasible."
        },
        {
          "chinese": "他聪明、努力、有责任心，总之，是个好员工。",
          "pinyin": "Tā cōngmíng, nǔlì, yǒu zérènxīn, zǒngzhī, shì gè hǎo yuángōng.",
          "english": "He is smart, hardworking, and responsible; in a word, he is a good employee."
        },
        {
          "chinese": "随着科技的进步，人们的沟通方式发生了巨大的变化。",
          "pinyin": "Suízhe kējì de jìnbù, rénmen de gōutōng fāngshì fāshēng le jùdà de biànhuà.",
          "english": "With the advancement of technology, people's communication methods have undergone huge changes."
        },
        {
          "chinese": "随着年龄的增长，他变得越来越成熟了。",
          "pinyin": "Suízhe niánlíng de zēngzhǎng, tā biàn de yuè lái yuè chéngshú le.",
          "english": "As he grows older, he becomes more and more mature."
        }
      ]
    },
    {
      "id": "hsk5-13",
      "title": "To take advantage of an opportunity 趁 (chèn)",
      "structure": "趁 + Opportunity / Time, Subject + Action",
      "explanation": {
        "english": "Used to indicate taking advantage of a favorable situation or time to do something.",
        "chinese": "用于表示利用有利的情况或时间做某事。",
        "pinyin": "Yòng yú biǎoshì lìyòng yǒulì de qíngkuàng huò shíjiān zuò mǒu shì."
      },
      "examples": [
        {
          "chinese": "趁着天气好，我们出去玩吧。",
          "pinyin": "Chèn zhe tiānqì hǎo, wǒmen chūqù wán ba.",
          "english": "Taking advantage of the good weather, let's go out and play."
        },
        {
          "chinese": "趁他还没走，你快去问问他。",
          "pinyin": "Chèn tā hái méi zǒu, nǐ kuài qù wènwen tā.",
          "english": "While he hasn't left yet, go ask him quickly."
        },
        {
          "chinese": "与其盲目跟风，不如找到适合自己的发展方向。",
          "pinyin": "Yǔqí mángmù gēnfēng, bùrú zhǎodào shìhé zìjǐ de fāzhǎn fāngxiàng.",
          "english": "Rather than blindly following the trend, it's better to find a development direction that suits you."
        },
        {
          "chinese": "与其把时间浪费在无意义的争吵上，不如多做点实事。",
          "pinyin": "Yǔqí bǎ shíjiān làngfèi zài wú yìyì de zhēngchǎo shàng, bùrú duō zuò diǎn shíshì.",
          "english": "Rather than wasting time on meaningless arguments, it's better to do something practical."
        }
      ]
    },
    {
      "id": "hsk5-14",
      "title": "Simply / Absolutely 简直 (jiǎnzhí)",
      "structure": "Subject + 简直 + Verb / Adjective",
      "explanation": {
        "english": "Used to add strong emphasis, often expressing surprise or exaggeration.",
        "chinese": "用于加强语气，通常表达惊讶或夸张。",
        "pinyin": "Yòng yú jiāqiáng yǔqì, tōngcháng biǎodá jīngyà huò kuāzhāng."
      },
      "examples": [
        {
          "chinese": "这简直是个奇迹！",
          "pinyin": "Zhè jiǎnzhí shì gè qíjì!",
          "english": "This is simply a miracle!"
        },
        {
          "chinese": "我简直不敢相信自己的眼睛。",
          "pinyin": "Wǒ jiǎnzhí bù gǎn xiāngxìn zìjǐ de yǎnjing.",
          "english": "I simply couldn't believe my eyes."
        },
        {
          "chinese": "宁可自己吃亏，也不要损害别人的利益。",
          "pinyin": "Nìngkě zìjǐ chīkuī, yě búyào sǔnhài biérén de lìyì.",
          "english": "I would rather suffer a loss myself than harm the interests of others."
        },
        {
          "chinese": "他宁可放弃高薪的工作，也要追求自己的梦想。",
          "pinyin": "Tā nìngkě fàngqì gāoxīn de gōngzuò, yě yào zhuīqiú zìjǐ de mèngxiǎng.",
          "english": "He would rather give up a high-paying job to pursue his dream."
        }
      ]
    },
    {
      "id": "hsk5-15",
      "title": "Bound to / Inevitable 必然 (bìrán)",
      "structure": "Subject + 必然 + 会 / 要 + Verb",
      "explanation": {
        "english": "Used to indicate that an outcome is certain or inevitable based on objective laws.",
        "chinese": "用于表示基于客观规律，某种结果是必然的。",
        "pinyin": "Yòng yú biǎoshì jīyú kèguān guīlǜ, mǒuzhǒng jiéguǒ shì bìrán de."
      },
      "examples": [
        {
          "chinese": "缺乏沟通必然会导致误解。",
          "pinyin": "Quēfá gōutōng bìrán huì dǎozhì wùjiě.",
          "english": "Lack of communication will inevitably lead to misunderstandings."
        },
        {
          "chinese": "社会的发展必然带来新的挑战。",
          "pinyin": "Shèhuì de fāzhǎn bìrán dàilái xīn de tiǎozhàn.",
          "english": "The development of society will inevitably bring new challenges."
        },
        {
          "chinese": "哪怕只有一丝希望，我们也要全力以赴。",
          "pinyin": "Nǎpà zhǐyǒu yì sī xīwàng, wǒmen yě yào quánlì yǐ fù.",
          "english": "Even if there is only a glimmer of hope, we must go all out."
        },
        {
          "chinese": "哪怕再苦再累，他也没有半句怨言。",
          "pinyin": "Nǎpà zài kǔ zài lèi, tā yě méiyǒu bàn jù yuànyán.",
          "english": "Even if it is extremely bitter and tiring, he doesn't have a single word of complaint."
        }
      ]
    }
  ],
  "HSK 6": [
    {
      "id": "hsk6-1",
      "title": "Rather than... it is better to... 与其...不如... (yǔqí... bùrú...)",
      "structure": "与其 + Option A, 不如 + Option B",
      "explanation": {
        "english": "Used to compare two options and choose the second one as the better alternative.",
        "chinese": "用于比较两个选项，并选择第二个作为更好的替代方案。",
        "pinyin": "Yòng yú bǐjiào liǎng gè xuǎnxiàng, bìng xuǎnzé dì èr gè zuòwéi gèng hǎo de tìdài fāng'àn."
      },
      "examples": [
        {
          "chinese": "与其抱怨，不如想办法解决。",
          "pinyin": "Yǔqí bàoyuàn, bùrú xiǎng bànfǎ jiějué.",
          "english": "Rather than complaining, it is better to find a way to solve it."
        },
        {
          "chinese": "与其在家里看电视，不如出去走走。",
          "pinyin": "Yǔqí zài jiālǐ kàn diànshì, bùrú chūqù zǒuzǒu.",
          "english": "Rather than watching TV at home, it is better to go out for a walk."
        },
        {
          "chinese": "既然木已成舟，后悔也没有用了。",
          "pinyin": "Jìrán mù yǐ chéng zhōu, hòuhuǐ yě méiyǒu yòng le.",
          "english": "Since what's done is done, regretting is useless."
        },
        {
          "chinese": "既然你这么有把握，那就交给你去办吧。",
          "pinyin": "Jìrán nǐ zhème yǒu bǎwò, nà jiù jiāo gěi nǐ qù bàn ba.",
          "english": "Since you are so confident, then I'll leave it to you to handle."
        }
      ]
    },
    {
      "id": "hsk6-2",
      "title": "Exactly / Precisely 恰恰 (qiàqià)",
      "structure": "Subject + 恰恰 + Verb / Adjective",
      "explanation": {
        "english": "Used to emphasize that something is exactly the case, often contrary to expectations.",
        "chinese": "用于强调某事恰好如此，通常与预期相反。",
        "pinyin": "Yòng yú qiángdiào mǒu shì qiàhǎo rúcǐ, tōngcháng yǔ yùqī xiāngfǎn."
      },
      "examples": [
        {
          "chinese": "他恰恰在这个时候出现了。",
          "pinyin": "Tā qiàqià zài zhège shíhòu chūxiàn le.",
          "english": "He appeared at exactly this moment."
        },
        {
          "chinese": "这恰恰证明了我的观点。",
          "pinyin": "Zhè qiàqià zhèngmíng le wǒ de guāndiǎn.",
          "english": "This exactly proves my point."
        },
        {
          "chinese": "无论遇到多大的风浪，他都能从容应对。",
          "pinyin": "Wúlùn yùdào duō dà de fēnglàng, tā dōu néng cóngróng yìngduì.",
          "english": "No matter how big the storm he encounters, he can handle it calmly."
        },
        {
          "chinese": "无论时代如何变迁，这种精神永远不会过时。",
          "pinyin": "Wúlùn shídài rúhé biànqiān, zhè zhǒng jīngshén yǒngyuǎn bú huì guòshí.",
          "english": "No matter how times change, this spirit will never be outdated."
        }
      ]
    },
    {
      "id": "hsk6-3",
      "title": "Bound to 势必 (shìbì)",
      "structure": "Subject + 势必 + Verb",
      "explanation": {
        "english": "Used to indicate that a certain outcome is inevitable based on current conditions.",
        "chinese": "用于表示基于当前条件，某种结果是不可避免的。",
        "pinyin": "Yòng yú biǎoshì jīyú dāngqián tiáojiàn, mǒuzhǒng jiéguǒ shì bùkě bìmiǎn de."
      },
      "examples": [
        {
          "chinese": "这种做法势必会引起大家的不满。",
          "pinyin": "Zhèzhǒng zuòfǎ shìbì huì yǐnqǐ dàjiā de bùmǎn.",
          "english": "This approach is bound to cause dissatisfaction among everyone."
        },
        {
          "chinese": "如果不改变策略，公司势必面临破产。",
          "pinyin": "Rúguǒ bù gǎibiàn cèlüè, gōngsī shìbì miànlín pòchǎn.",
          "english": "If the strategy is not changed, the company is bound to face bankruptcy."
        },
        {
          "chinese": "只要有一线生机，医生就不会放弃抢救。",
          "pinyin": "Zhǐyào yǒu yí xiàn shēngjī, yīshēng jiù bú huì fàngqì qiǎngjiù.",
          "english": "As long as there is a glimmer of hope for survival, the doctor will not give up resuscitation."
        },
        {
          "chinese": "只要大家同心协力，就没有攻不克的难关。",
          "pinyin": "Zhǐyào dàjiā tóngxīnxiélì, jiù méiyǒu gōng bú kè de nánguān.",
          "english": "As long as everyone works together, there is no difficulty that cannot be overcome."
        }
      ]
    },
    {
      "id": "hsk6-4",
      "title": "And even 乃至 (nǎizhì)",
      "structure": "A, B, 乃至 + C",
      "explanation": {
        "english": "Used to extend the scope of something, meaning \"and even\" or \"going so far as to\".",
        "chinese": "用于扩大某事的范围，意思是“甚至”或“以至于”。",
        "pinyin": "Yòng yú kuòdà mǒu shì de fànwéi, yìsi shì “shènzhì” huò “yǐzhìyú”."
      },
      "examples": [
        {
          "chinese": "这影响了整个城市，乃至整个国家。",
          "pinyin": "Zhè yǐngxiǎng le zhěnggè chéngshì, nǎizhì zhěnggè guójiā.",
          "english": "This affected the whole city, and even the whole country."
        },
        {
          "chinese": "他的行为让朋友、家人乃至陌生人都感到惊讶。",
          "pinyin": "Tā de xíngwéi ràng péngyou, jiārén nǎizhì mòshēngrén dōu gǎndào jīngyà.",
          "english": "His behavior surprised his friends, family, and even strangers."
        },
        {
          "chinese": "只有深入基层，才能了解群众的真实需求。",
          "pinyin": "Zhǐyǒu shēnrù jīcéng, cái néng liǎojiě qúnzhòng de zhēnshí xūqiú.",
          "english": "Only by going deep into the grassroots can we understand the real needs of the masses."
        },
        {
          "chinese": "只有掌握了核心技术，企业才能在竞争中立于不败之地。",
          "pinyin": "Zhǐyǒu zhǎngwò le héxīn jìshù, qǐyè cái néng zài jìngzhēng zhōng lì yú bú bài zhī dì.",
          "english": "Only by mastering core technologies can an enterprise remain invincible in competition."
        }
      ]
    },
    {
      "id": "hsk6-5",
      "title": "In view of 鉴于 (jiànyú)",
      "structure": "鉴于 + Fact / Situation, Result / Decision",
      "explanation": {
        "english": "Used in formal contexts to introduce the reason or basis for a decision.",
        "chinese": "用于正式语境中，引出决定的原因或依据。",
        "pinyin": "Yòng yú zhèngshì yǔjìng zhōng, yǐnchū juédìng de yuányīn huò yījù."
      },
      "examples": [
        {
          "chinese": "鉴于目前的情况，我们决定推迟会议。",
          "pinyin": "Jiànyú mùqián de qíngkuàng, wǒmen juédìng tuīchí huìyì.",
          "english": "In view of the current situation, we have decided to postpone the meeting."
        },
        {
          "chinese": "鉴于他过去的表现，公司决定给他升职。",
          "pinyin": "Jiànyú tā guòqù de biǎoxiàn, gōngsī juédìng gěi tā shēngzhí.",
          "english": "In view of his past performance, the company decided to promote him."
        },
        {
          "chinese": "这不仅关乎个人的荣誉，更关乎国家的利益。",
          "pinyin": "Zhè bùjǐn guānhū gèrén de róngyù, gèng guānhū guójiā de lìyì.",
          "english": "This is not only about personal honor, but more importantly about national interests."
        },
        {
          "chinese": "他不仅是一位杰出的科学家，还是一位伟大的教育家。",
          "pinyin": "Tā bùjǐn shì yí wèi jiéchū de kēxuéjiā, hái shì yí wèi wěidà de jiàoyùjiā.",
          "english": "He is not only an outstanding scientist, but also a great educator."
        }
      ]
    },
    {
      "id": "hsk6-6",
      "title": "Admittedly... but... 固然...但是... (gùrán... dànshì...)",
      "structure": "Subject + 固然 + Adjective / Verb, 但是...",
      "explanation": {
        "english": "Used to concede a point before introducing a contrasting or more important point.",
        "chinese": "用于在引出对比或更重要的观点之前让步。",
        "pinyin": "Yòng yú zài yǐnchū duìbǐ huò gèng zhòngyào de guāndiǎn zhīqián ràngbù."
      },
      "examples": [
        {
          "chinese": "钱固然重要，但是健康更重要。",
          "pinyin": "Qián gùrán zhòngyào, dànshì jiànkāng gèng zhòngyào.",
          "english": "Money is admittedly important, but health is more important."
        },
        {
          "chinese": "这个方法固然好，但是成本太高了。",
          "pinyin": "Zhège fāngfǎ gùrán hǎo, dànshì chéngběn tài gāo le.",
          "english": "This method is admittedly good, but the cost is too high."
        },
        {
          "chinese": "这种做法不但不能解决问题，反而会激化矛盾。",
          "pinyin": "Zhè zhǒng zuòfǎ bùdàn bù néng jiějué wèntí, fǎn'ér huì jīhuà máodùn.",
          "english": "This approach not only cannot solve the problem, but will actually intensify the contradiction."
        },
        {
          "chinese": "他不但没有受到惩罚，反而得到了提拔。",
          "pinyin": "Tā bùdàn méiyǒu shòudào chéngfá, fǎn'ér dédào le tíbá.",
          "english": "Not only was he not punished, but he was promoted instead."
        }
      ]
    },
    {
      "id": "hsk6-7",
      "title": "Easily / Frequently 动辄 (dòngzhé)",
      "structure": "Subject + 动辄 + Verb (Negative outcome)",
      "explanation": {
        "english": "Used to indicate that something happens easily or frequently, usually with a negative connotation.",
        "chinese": "用于表示某事容易或频繁发生，通常带有贬义。",
        "pinyin": "Yòng yú biǎoshì mǒu shì róngyì huò pínfán fāshēng, tōngcháng dài yǒu biǎnyì."
      },
      "examples": [
        {
          "chinese": "他脾气不好，动辄发火。",
          "pinyin": "Tā píqì bù hǎo, dòngzhé fāhuǒ.",
          "english": "He has a bad temper and easily gets angry."
        },
        {
          "chinese": "现在的电子产品动辄几千块钱。",
          "pinyin": "Xiànzài de diànzǐ chǎnpǐn dòngzhé jǐ qiān kuài qián.",
          "english": "Nowadays, electronic products easily cost several thousand yuan."
        },
        {
          "chinese": "为了维护世界和平，各国应加强合作。",
          "pinyin": "Wèile wéihù shìjiè hépíng, gè guó yīng jiāqiáng hézuò.",
          "english": "In order to maintain world peace, all countries should strengthen cooperation."
        },
        {
          "chinese": "为了子孙后代，我们必须保护好生态环境。",
          "pinyin": "Wèile zǐsūnhòudài, wǒmen bìxū bǎohù hǎo shēngtài huánjìng.",
          "english": "For the sake of future generations, we must protect the ecological environment well."
        }
      ]
    },
    {
      "id": "hsk6-8",
      "title": "At the same time / Meanwhile 届时 (jièshí)",
      "structure": "Event 1, 届时 + Event 2",
      "explanation": {
        "english": "Used in formal contexts to mean \"when the time comes\" or \"at that time\".",
        "chinese": "用于正式语境中，意思是“到时候”或“届时”。",
        "pinyin": "Yòng yú zhèngshì yǔjìng zhōng, yìsi shì “dào shíhòu” huò “jièshí”."
      },
      "examples": [
        {
          "chinese": "会议将于下周举行，届时将宣布新政策。",
          "pinyin": "Huìyì jiāng yú xià zhōu jǔxíng, jièshí jiāng xuānbù xīn zhèngcè.",
          "english": "The meeting will be held next week, at which time the new policy will be announced."
        },
        {
          "chinese": "工程预计年底完工，届时交通将大大改善。",
          "pinyin": "Gōngchéng yùjì niándǐ wángōng, jièshí jiāotōng jiāng dàdà gǎishàn.",
          "english": "The project is expected to be completed by the end of the year, at which time traffic will be greatly improved."
        },
        {
          "chinese": "由于缺乏长远规划，这个项目最终以失败告终。",
          "pinyin": "Yóuyú quēfá chángyuǎn guīhuà, zhège xiàngmù zuìzhōng yǐ shībài gàozhōng.",
          "english": "Due to the lack of long-term planning, this project ultimately ended in failure."
        },
        {
          "chinese": "由于不可抗力因素，本次活动被迫延期。",
          "pinyin": "Yóuyú bùkěkànglì yīnsù, běn cì huódòng bèi pò yánqī.",
          "english": "Due to force majeure factors, this event is forced to be postponed."
        }
      ]
    },
    {
      "id": "hsk6-9",
      "title": "To be bound to / Unavoidably 免不了 (miǎnbuliǎo)",
      "structure": "Subject + 免不了 + (要/会) + Verb",
      "explanation": {
        "english": "Used to express that a certain situation or action is unavoidable.",
        "chinese": "用于表达某种情况或动作是不可避免的。",
        "pinyin": "Yòng yú biǎodá mǒuzhǒng qíngkuàng huò dòngzuò shì bùkě bìmiǎn de."
      },
      "examples": [
        {
          "chinese": "刚到一个新环境，免不了会有些不习惯。",
          "pinyin": "Gāng dào yī gè xīn huánjìng, miǎnbuliǎo huì yǒu xiē bù xíguàn.",
          "english": "When you first arrive in a new environment, it is unavoidable to feel a bit unaccustomed."
        },
        {
          "chinese": "两个人在一起工作，免不了会有摩擦。",
          "pinyin": "Liǎng gè rén zài yīqǐ gōngzuò, miǎnbuliǎo huì yǒu mócā.",
          "english": "When two people work together, friction is unavoidable."
        },
        {
          "chinese": "不管前方的路有多么崎岖，我都会坚定地走下去。",
          "pinyin": "Bùguǎn qiánfāng de lù yǒu duōme qíqū, wǒ dōu huì jiāndìng de zǒu xiàqù.",
          "english": "No matter how rugged the road ahead is, I will firmly walk on."
        },
        {
          "chinese": "不管外界如何喧嚣，他始终保持着内心的宁静。",
          "pinyin": "Bùguǎn wàijiè rúhé xuānxiāo, tā shǐzhōng bǎochí zhe nèixīn de níngjìng.",
          "english": "No matter how noisy the outside world is, he always maintains inner peace."
        }
      ]
    },
    {
      "id": "hsk6-10",
      "title": "To be based on / According to 本着 (běnzhe)",
      "structure": "本着 + Principle / Spirit + 的原则 / 精神，Subject + Action",
      "explanation": {
        "english": "Used in formal contexts to indicate the principle or spirit guiding an action.",
        "chinese": "用于正式语境中，表示指导动作的原则或精神。",
        "pinyin": "Yòng yú zhèngshì yǔjìng zhōng, biǎoshì zhǐdǎo dòngzuò de yuánzé huò jīngshén."
      },
      "examples": [
        {
          "chinese": "我们本着互利共赢的原则进行合作。",
          "pinyin": "Wǒmen běnzhe hùlì gòngyíng de yuánzé jìnxíng hézuò.",
          "english": "We cooperate based on the principle of mutual benefit and win-win."
        },
        {
          "chinese": "法官本着公平公正的精神审理了此案。",
          "pinyin": "Fǎguān běnzhe gōngpíng gōngzhèng de jīngshén shěnlǐ le cǐ àn.",
          "english": "The judge heard the case in the spirit of fairness and justice."
        },
        {
          "chinese": "请务必在规定时间内提交申请，以免错失良机。",
          "pinyin": "Qǐng wùbì zài guīdìng shíjiān nèi tíjiāo shēnqǐng, yǐmiǎn cuòshī liángjī.",
          "english": "Please be sure to submit your application within the specified time to avoid missing a good opportunity."
        },
        {
          "chinese": "操作机器时请严格遵守规程，以免发生意外。",
          "pinyin": "Cāozuò jīqì shí qǐng yángé zūnshǒu guīchéng, yǐmiǎn fāshēng yìwài.",
          "english": "Please strictly follow the procedures when operating the machine to avoid accidents."
        }
      ]
    },
    {
      "id": "hsk6-11",
      "title": "Nothing but / Simply 无非 (wúfēi)",
      "structure": "Subject + 无非 + 是 / 就是 + Noun / Verb",
      "explanation": {
        "english": "Used to downplay something, meaning \"it is nothing more than\" or \"simply\".",
        "chinese": "用于淡化某事，意思是“只不过是”或“无非”。",
        "pinyin": "Yòng yú dànhuà mǒu shì, yìsi shì “zhǐbuguò shì” huò “wúfēi”."
      },
      "examples": [
        {
          "chinese": "他这么做，无非是想引起你的注意。",
          "pinyin": "Tā zhème zuò, wúfēi shì xiǎng yǐnqǐ nǐ de zhùyì.",
          "english": "He did this simply to get your attention."
        },
        {
          "chinese": "这无非是个误会，解释清楚就好了。",
          "pinyin": "Zhè wúfēi shì gè wùhuì, jiěshì qīngchu jiù hǎo le.",
          "english": "This is nothing but a misunderstanding; it will be fine once it's explained clearly."
        },
        {
          "chinese": "随着全球化的深入发展，各国之间的联系日益紧密。",
          "pinyin": "Suízhe quánqiúhuà de shēnrù fāzhǎn, gè guó zhījiān de liánxì rìyì jǐnmì.",
          "english": "With the deepening development of globalization, the connections between countries are becoming increasingly close."
        },
        {
          "chinese": "随着环保意识的增强，越来越多的人开始倡导低碳生活。",
          "pinyin": "Suízhe huánbǎo yìshi de zēngqiáng, yuè lái yuè duō de rén kāishǐ chàngdǎo dītàn shēnghuó.",
          "english": "With the enhancement of environmental awareness, more and more people are beginning to advocate a low-carbon lifestyle."
        }
      ]
    },
    {
      "id": "hsk6-12",
      "title": "To disdain to do / Not worth doing 不屑 (búxiè)",
      "structure": "Subject + 不屑 + (于) + Verb",
      "explanation": {
        "english": "Used to express that someone thinks something is beneath them or not worth doing.",
        "chinese": "用于表达某人认为某事低于他们的身份或不值得做。",
        "pinyin": "Yòng yú biǎodá mǒurén rènwéi mǒu shì dī yú tāmen de shēnfèn huò bù zhídé zuò."
      },
      "examples": [
        {
          "chinese": "他对此不屑一顾。",
          "pinyin": "Tā duì cǐ búxiè yī gù.",
          "english": "He dismissed it with a disdainful glance."
        },
        {
          "chinese": "这种小事，他根本不屑去做。",
          "pinyin": "Zhèzhǒng xiǎoshì, tā gēnběn búxiè qù zuò.",
          "english": "He disdains to do such trivial things."
        },
        {
          "chinese": "与其坐以待毙，不如主动出击寻找生机。",
          "pinyin": "Yǔqí zuòyǐdàibì, bùrú zhǔdòng chūjī xúnzhǎo shēngjī.",
          "english": "Rather than sitting and waiting for death, it's better to take the initiative to attack and look for a chance of survival."
        },
        {
          "chinese": "与其临渊羡鱼，不如退而结网。",
          "pinyin": "Yǔqí línyuānxiànyú, bùrú tuì'érjiéwǎng.",
          "english": "Rather than standing by the pond admiring the fish, it's better to go home and weave a net. (Take practical action instead of just wishing)"
        }
      ]
    },
    {
      "id": "hsk6-13",
      "title": "In vain / For nothing 白白 (báibái)",
      "structure": "Subject + 白白 + (地) + Verb",
      "explanation": {
        "english": "Used to indicate that an action was done in vain, without achieving the desired result.",
        "chinese": "用于表示动作是徒劳的，没有达到预期的结果。",
        "pinyin": "Yòng yú biǎoshì dòngzuò shì túláo de, méiyǒu dádào yùqī de jiéguǒ."
      },
      "examples": [
        {
          "chinese": "我白白等了两个小时。",
          "pinyin": "Wǒ báibái děng le liǎng gè xiǎoshí.",
          "english": "I waited in vain for two hours."
        },
        {
          "chinese": "不能让他的心血白白浪费。",
          "pinyin": "Bù néng ràng tā de xīnxuè báibái làngfèi.",
          "english": "We cannot let his hard work go to waste."
        },
        {
          "chinese": "他宁可玉碎，不为瓦全，坚决不向恶势力低头。",
          "pinyin": "Tā nìngkě yùsuì, bù wéi wǎquán, jiānjué bú xiàng è shìlì dītóu.",
          "english": "He would rather be a broken jade than a whole tile, resolutely refusing to bow to evil forces."
        },
        {
          "chinese": "我宁可自己多承担一些，也不愿看到团队受损失。",
          "pinyin": "Wǒ nìngkě zìjǐ duō chéngdān yìxiē, yě bú yuàn kàndào tuánduì shòu sǔnshī.",
          "english": "I would rather bear more myself than see the team suffer losses."
        }
      ]
    },
    {
      "id": "hsk6-14",
      "title": "At a loss / Blankly 茫然 (mángrán)",
      "structure": "Subject + 茫然 + (地) + Verb",
      "explanation": {
        "english": "Used to describe a state of being completely at a loss, confused, or ignorant of something.",
        "chinese": "用于描述一种完全不知所措、困惑或对某事一无所知的状态。",
        "pinyin": "Yòng yú miáoshù yī zhǒng wánquán bùzhī suǒ cuò, kùnhuò huò duì mǒu shì yīwúsuǒzhī de zhuàngtài."
      },
      "examples": [
        {
          "chinese": "听到这个消息，他茫然不知所措。",
          "pinyin": "Tīngdào zhège xiāoxi, tā mángrán bùzhī suǒ cuò.",
          "english": "Hearing this news, he was completely at a loss."
        },
        {
          "chinese": "她茫然地看着我，似乎没听懂。",
          "pinyin": "Tā mángrán de kàn zhe wǒ, sìhū méi tīng dǒng.",
          "english": "She looked at me blankly, seemingly not understanding."
        },
        {
          "chinese": "哪怕前方是万丈深渊，我也绝不退缩。",
          "pinyin": "Nǎpà qiánfāng shì wànzhàng shēnyuān, wǒ yě jué bú tuìsuō.",
          "english": "Even if there is a bottomless abyss ahead, I will absolutely not shrink back."
        },
        {
          "chinese": "哪怕只有微弱的希望，我们也要付出百分之百的努力。",
          "pinyin": "Nǎpà zhǐyǒu wēiruò de xīwàng, wǒmen yě yào fùchū bǎifēnzhībǎi de nǔlì.",
          "english": "Even if there is only a faint hope, we must put in 100% effort."
        }
      ]
    },
    {
      "id": "hsk6-15",
      "title": "Difficult to / Hard to 难以 (nányǐ)",
      "structure": "难以 + Verb (usually a two-character verb)",
      "explanation": {
        "english": "Used to express that something is difficult to do or achieve.",
        "chinese": "用于表达某事难以做到或实现。",
        "pinyin": "Yòng yú biǎodá mǒu shì nányǐ zuòdào huò shíxiàn."
      },
      "examples": [
        {
          "chinese": "这个决定让人难以接受。",
          "pinyin": "Zhège juédìng ràng rén nányǐ jiēshòu.",
          "english": "This decision is hard to accept."
        },
        {
          "chinese": "当时的惨状难以用语言描述。",
          "pinyin": "Dāngshí de cǎnzhuàng nányǐ yòng yǔyán miáoshù.",
          "english": "The tragic situation at that time is difficult to describe in words."
        },
        {
          "chinese": "与其说他是个天才，不如说他是个极其勤奋的人。",
          "pinyin": "Yǔqí shuō tā shì gè tiāncái, bùrú shuō tā shì gè jíqí qínfèn de rén.",
          "english": "Rather than saying he is a genius, it is better to say he is an extremely hardworking person."
        },
        {
          "chinese": "与其说这是一次失败，不如说这是一次宝贵的教训。",
          "pinyin": "Yǔqí shuō zhè shì yícì shībài, bùrú shuō zhè shì yícì bǎoguì de jiàoxùn.",
          "english": "Rather than saying this is a failure, it is better to say this is a valuable lesson."
        }
      ]
    }
  ]
};
