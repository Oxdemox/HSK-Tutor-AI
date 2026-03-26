import fs from 'fs';
import { hskGrammar } from '../src/data/hskGrammar';

const newExamples: Record<string, any[]> = {
  "hsk1-1": [
    { chinese: "我是医生。", pinyin: "Wǒ shì yīshēng.", english: "I am a doctor." },
    { chinese: "这是我的书。", pinyin: "Zhè shì wǒ de shū.", english: "This is my book." }
  ],
  "hsk1-2": [
    { chinese: "你喜欢中国吗？", pinyin: "Nǐ xǐhuān Zhōngguó ma?", english: "Do you like China?" },
    { chinese: "他明天来吗？", pinyin: "Tā míngtiān lái ma?", english: "Is he coming tomorrow?" }
  ],
  "hsk1-3": [
    { chinese: "老师的电脑", pinyin: "Lǎoshī de diànnǎo", english: "The teacher's computer" },
    { chinese: "我们的学校", pinyin: "Wǒmen de xuéxiào", english: "Our school" }
  ],
  "hsk1-4": [
    { chinese: "我不喜欢喝茶。", pinyin: "Wǒ bù xǐhuān hē chá.", english: "I do not like drinking tea." },
    { chinese: "他今天不去学校。", pinyin: "Tā jīntiān bú qù xuéxiào.", english: "He is not going to school today." }
  ],
  "hsk1-5": [
    { chinese: "这个苹果很大。", pinyin: "Zhège píngguǒ hěn dà.", english: "This apple is very big." },
    { chinese: "我的猫很可爱。", pinyin: "Wǒ de māo hěn kě'ài.", english: "My cat is very cute." }
  ],
  "hsk1-6": [
    { chinese: "他在学校。", pinyin: "Tā zài xuéxiào.", english: "He is at school." },
    { chinese: "猫在椅子下面。", pinyin: "Māo zài yǐzi xiàmiàn.", english: "The cat is under the chair." }
  ],
  "hsk1-7": [
    { chinese: "房间里有一只狗。", pinyin: "Fángjiān lǐ yǒu yī zhǐ gǒu.", english: "There is a dog in the room." },
    { chinese: "学校里有很多学生。", pinyin: "Xuéxiào lǐ yǒu hěn duō xuéshēng.", english: "There are many students in the school." }
  ],
  "hsk1-8": [
    { chinese: "你喜欢吃什么？", pinyin: "Nǐ xǐhuān chī shénme?", english: "What do you like to eat?" },
    { chinese: "他在看什么书？", pinyin: "Tā zài kàn shénme shū?", english: "What book is he reading?" }
  ],
  "hsk1-9": [
    { chinese: "你的家在哪儿？", pinyin: "Nǐ de jiā zài nǎr?", english: "Where is your home?" },
    { chinese: "我们去哪儿吃饭？", pinyin: "Wǒmen qù nǎr chīfàn?", english: "Where are we going to eat?" }
  ],
  "hsk1-10": [
    { chinese: "我会开车。", pinyin: "Wǒ huì kāichē.", english: "I can drive." },
    { chinese: "你会写汉字吗？", pinyin: "Nǐ huì xiě hànzì ma?", english: "Can you write Chinese characters?" }
  ],
  "hsk1-11": [
    { chinese: "现在是下午三点。", pinyin: "Xiànzài shì xiàwǔ sān diǎn.", english: "It is 3 PM now." },
    { chinese: "我们明天早上八点见。", pinyin: "Wǒmen míngtiān zǎoshang bā diǎn jiàn.", english: "We will meet at 8 AM tomorrow." }
  ],
  "hsk1-12": [
    { chinese: "我们去吃饭吧。", pinyin: "Wǒmen qù chīfàn ba.", english: "Let's go eat." },
    { chinese: "你休息一下吧。", pinyin: "Nǐ xiūxi yīxià ba.", english: "You should take a rest." }
  ],
  "hsk1-13": [
    { chinese: "我喜欢吃苹果和香蕉。", pinyin: "Wǒ xǐhuān chī píngguǒ hé xiāngjiāo.", english: "I like eating apples and bananas." },
    { chinese: "老师和学生都在教室里。", pinyin: "Lǎoshī hé xuéshēng dōu zài jiàoshì lǐ.", english: "The teacher and students are all in the classroom." }
  ],
  "hsk1-14": [
    { chinese: "你买了几本书？", pinyin: "Nǐ mǎi le jǐ běn shū?", english: "How many books did you buy?" },
    { chinese: "现在几点了？", pinyin: "Xiànzài jǐ diǎn le?", english: "What time is it now?" }
  ],
  "hsk1-15": [
    { chinese: "我的生日是八月十号。", pinyin: "Wǒ de shēngrì shì bā yuè shí hào.", english: "My birthday is August 10th." },
    { chinese: "明天是五月二号。", pinyin: "Míngtiān shì wǔ yuè èr hào.", english: "Tomorrow is May 2nd." }
  ],
  "hsk2-1": [
    { chinese: "我昨天去医院了。", pinyin: "Wǒ zuótiān qù yīyuàn le.", english: "I went to the hospital yesterday." },
    { chinese: "他已经回家了。", pinyin: "Tā yǐjīng huíjiā le.", english: "He has already gone home." }
  ],
  "hsk2-2": [
    { chinese: "我吃过北京烤鸭。", pinyin: "Wǒ chī guo Běijīng kǎoyā.", english: "I have eaten Peking duck." },
    { chinese: "你学过法语吗？", pinyin: "Nǐ xué guo fǎyǔ ma?", english: "Have you studied French?" }
  ],
  "hsk2-3": [
    { chinese: "这个西瓜比那个大。", pinyin: "Zhège xīguā bǐ nàge dà.", english: "This watermelon is bigger than that one." },
    { chinese: "哥哥比弟弟胖。", pinyin: "Gēge bǐ dìdi pàng.", english: "The older brother is fatter than the younger brother." }
  ],
  "hsk2-4": [
    { chinese: "因为我生病了，所以没去上班。", pinyin: "Yīnwei wǒ shēngbìng le, suǒyǐ méi qù shàngbān.", english: "Because I was sick, I didn't go to work." },
    { chinese: "因为天气不好，所以我们在家看电视。", pinyin: "Yīnwei tiānqì bù hǎo, suǒyǐ wǒmen zài jiā kàn diànshì.", english: "Because the weather is bad, we are watching TV at home." }
  ],
  "hsk2-5": [
    { chinese: "他汉字写得很漂亮。", pinyin: "Tā hànzì xiě de hěn piàoliang.", english: "He writes Chinese characters very beautifully." },
    { chinese: "我昨天睡得很好。", pinyin: "Wǒ zuótiān shuì de hěn hǎo.", english: "I slept very well yesterday." }
  ],
  "hsk2-6": [
    { chinese: "他拿着一本书。", pinyin: "Tā ná zhe yī běn shū.", english: "He is holding a book." },
    { chinese: "墙上挂着一幅画。", pinyin: "Qiáng shàng guà zhe yī fú huà.", english: "A picture is hanging on the wall." }
  ],
  "hsk2-7": [
    { chinese: "我们要上课了。", pinyin: "Wǒmen yào shàngkè le.", english: "We are about to start class." },
    { chinese: "新年快要到了。", pinyin: "Xīnnián kuàiyào dào le.", english: "The New Year is coming soon." }
  ],
  "hsk2-8": [
    { chinese: "虽然他生病了，但是他还在工作。", pinyin: "Suīrán tā shēngbìng le, dànshì tā hái zài gōngzuò.", english: "Although he is sick, he is still working." },
    { chinese: "虽然这件衣服很贵，但是我买了。", pinyin: "Suīrán zhè jiàn yīfu hěn guì, dànshì wǒ mǎi le.", english: "Although this piece of clothing is expensive, I bought it." }
  ],
  "hsk2-9": [
    { chinese: "他不但会唱歌，而且唱得很好。", pinyin: "Tā bùdàn huì chànggē, érqiě chàng de hěn hǎo.", english: "He not only can sing, but also sings very well." },
    { chinese: "这本字典不但便宜，而且很有用。", pinyin: "Zhè běn zìdiǎn bùdàn piányi, érqiě hěn yǒuyòng.", english: "This dictionary is not only cheap, but also very useful." }
  ],
  "hsk2-10": [
    { chinese: "你怎么去机场？", pinyin: "Nǐ zěnme qù jīchǎng?", english: "How are you going to the airport?" },
    { chinese: "这个菜怎么做？", pinyin: "Zhège cài zěnme zuò?", english: "How do you cook this dish?" }
  ],
  "hsk2-11": [
    { chinese: "别忘了带伞。", pinyin: "Bié wàng le dài sǎn.", english: "Don't forget to bring an umbrella." },
    { chinese: "太晚了，别看电视了。", pinyin: "Tài wǎn le, bié kàn diànshì le.", english: "It's too late, don't watch TV anymore." }
  ],
  "hsk2-12": [
    { chinese: "我想买一点儿水果。", pinyin: "Wǒ xiǎng mǎi yīdiǎnr shuǐguǒ.", english: "I want to buy a little fruit." },
    { chinese: "请给我一点儿时间。", pinyin: "Qǐng gěi wǒ yīdiǎnr shíjiān.", english: "Please give me a little time." }
  ],
  "hsk2-13": [
    { chinese: "我明天再来。", pinyin: "Wǒ míngtiān zài lái.", english: "I will come again tomorrow." },
    { chinese: "你可以再读一遍吗？", pinyin: "Nǐ kěyǐ zài dú yī biàn ma?", english: "Can you read it again?" }
  ],
  "hsk2-14": [
    { chinese: "你可以帮我吗？", pinyin: "Nǐ kěyǐ bāng wǒ ma?", english: "Can you help me?" },
    { chinese: "这里可以拍照吗？", pinyin: "Zhèlǐ kěyǐ pāizhào ma?", english: "Can I take pictures here?" }
  ],
  "hsk2-15": [
    { chinese: "明天有考试，我得复习。", pinyin: "Míngtiān yǒu kǎoshì, wǒ děi fùxí.", english: "There is an exam tomorrow, I have to review." },
    { chinese: "太晚了，我们得回家了。", pinyin: "Tài wǎn le, wǒmen děi huíjiā le.", english: "It's too late, we must go home." }
  ],
  "hsk3-1": [
    { chinese: "请把作业交给我。", pinyin: "Qǐng bǎ zuòyè jiāo gěi wǒ.", english: "Please hand in your homework to me." },
    { chinese: "他把咖啡喝完了。", pinyin: "Tā bǎ kāfēi hē wán le.", english: "He finished drinking the coffee." }
  ],
  "hsk3-2": [
    { chinese: "那本书被借走了。", pinyin: "Nà běn shū bèi jiè zǒu le.", english: "That book was borrowed." },
    { chinese: "我的手机被摔坏了。", pinyin: "Wǒ de shǒujī bèi shuāi huài le.", english: "My phone was dropped and broken." }
  ],
  "hsk3-3": [
    { chinese: "你的汉语越来越好了。", pinyin: "Nǐ de hànyǔ yuè lái yuè hǎo le.", english: "Your Chinese is getting better and better." },
    { chinese: "人越来越多了。", pinyin: "Rén yuè lái yuè duō le.", english: "There are more and more people." }
  ],
  "hsk3-4": [
    { chinese: "除了周末以外，我每天都工作。", pinyin: "Chúle zhōumò yǐwài, wǒ měitiān dōu gōngzuò.", english: "Except for weekends, I work every day." },
    { chinese: "除了苹果，他还买了香蕉。", pinyin: "Chúle píngguǒ, tā hái mǎi le xiāngjiāo.", english: "Besides apples, he also bought bananas." }
  ],
  "hsk3-5": [
    { chinese: "如果你有问题，就问我。", pinyin: "Rúguǒ nǐ yǒu wèntí, jiù wèn wǒ.", english: "If you have questions, ask me." },
    { chinese: "如果太贵了，我们就不买了。", pinyin: "Rúguǒ tài guì le, wǒmen jiù bù mǎi le.", english: "If it's too expensive, we won't buy it." }
  ],
  "hsk3-6": [
    { chinese: "虽然他很忙，但是每天都锻炼。", pinyin: "Suīrán tā hěn máng, dànshì měitiān dōu duànliàn.", english: "Although he is busy, he exercises every day." },
    { chinese: "虽然我没去过北京，但是我很了解它。", pinyin: "Suīrán wǒ méi qù guo Běijīng, dànshì wǒ hěn liǎojiě tā.", english: "Although I haven't been to Beijing, I know a lot about it." }
  ],
  "hsk3-7": [
    { chinese: "他一毕业就找到了工作。", pinyin: "Tā yī bìyè jiù zhǎo dào le gōngzuò.", english: "As soon as he graduated, he found a job." },
    { chinese: "我一看到他就想笑。", pinyin: "Wǒ yī kàndào tā jiù xiǎng xiào.", english: "As soon as I see him, I want to laugh." }
  ],
  "hsk3-8": [
    { chinese: "他不但会说英语，而且会说日语。", pinyin: "Tā bùdàn huì shuō yīngyǔ, érqiě huì shuō rìyǔ.", english: "He not only speaks English, but also speaks Japanese." },
    { chinese: "这个地方不但风景美，而且人很热情。", pinyin: "Zhège dìfāng bùdàn fēngjǐng měi, érqiě rén hěn rèqíng.", english: "Not only is the scenery beautiful here, but the people are also very warm." }
  ],
  "hsk3-9": [
    { chinese: "你可以坐地铁或者打车去。", pinyin: "Nǐ kěyǐ zuò dìtiě huòzhě dǎchē qù.", english: "You can take the subway or take a taxi there." },
    { chinese: "我晚上一般看书或者听音乐。", pinyin: "Wǒ wǎnshang yìbān kànshū huòzhě tīng yīnyuè.", english: "I usually read books or listen to music in the evening." }
  ],
  "hsk3-10": [
    { chinese: "你喜欢吃米饭还是面条？", pinyin: "Nǐ xǐhuān chī mǐfàn háishì miàntiáo?", english: "Do you like to eat rice or noodles?" },
    { chinese: "这是你的书还是他的书？", pinyin: "Zhè shì nǐ de shū háishì tā de shū?", english: "Is this your book or his book?" }
  ],
  "hsk3-11": [
    { chinese: "请先填表，然后去那边排队。", pinyin: "Qǐng xiān tián biǎo, ránhòu qù nàbiān páiduì.", english: "Please fill out the form first, then go line up over there." },
    { chinese: "我先做作业，然后玩游戏。", pinyin: "Wǒ xiān zuò zuòyè, ránhòu wán yóuxì.", english: "I will do my homework first, then play games." }
  ],
  "hsk3-12": [
    { chinese: "我几乎不看电视。", pinyin: "Wǒ jīhū bù kàn diànshì.", english: "I almost never watch TV." },
    { chinese: "这些书我几乎都看过了。", pinyin: "Zhèxiē shū wǒ jīhū dōu kàn guo le.", english: "I have read almost all of these books." }
  ],
  "hsk3-13": [
    { chinese: "你必须在八点前到公司。", pinyin: "Nǐ bìxū zài bā diǎn qián dào gōngsī.", english: "You must arrive at the company before 8 o'clock." },
    { chinese: "学习一门外语必须多练习。", pinyin: "Xuéxí yī mén wàiyǔ bìxū duō liànxí.", english: "To learn a foreign language, one must practice a lot." }
  ],
  "hsk3-14": [
    { chinese: "关于那个计划，大家有什么意见？", pinyin: "Guānyú nàge jìhuà, dàjiā yǒu shénme yìjiàn?", english: "Regarding that plan, what opinions does everyone have?" },
    { chinese: "我想找一些关于中国文化的资料。", pinyin: "Wǒ xiǎng zhǎo yīxiē guānyú Zhōngguó wénhuà de zīliào.", english: "I want to find some materials about Chinese culture." }
  ],
  "hsk3-15": [
    { chinese: "根据我的经验，这个方法很有效。", pinyin: "Gēnjù wǒ de jīngyàn, zhège fāngfǎ hěn yǒuxiào.", english: "According to my experience, this method is very effective." },
    { chinese: "根据调查，很多人喜欢在网上购物。", pinyin: "Gēnjù diàochá, hěn duō rén xǐhuān zài wǎngshàng gòuwù.", english: "According to the survey, many people like to shop online." }
  ],
  "hsk4-1": [
    { chinese: "他很聪明，连这么难的题都会做。", pinyin: "Tā hěn cōngmíng, lián zhème nán de tí dōu huì zuò.", english: "He is very smart, he can even solve such a difficult problem." },
    { chinese: "我太累了，连话都不想说。", pinyin: "Wǒ tài lèi le, lián huà dōu bù xiǎng shuō.", english: "I am so tired that I don't even want to speak." }
  ],
  "hsk4-2": [
    { chinese: "即使失败了，我也不会放弃。", pinyin: "Jíshǐ shībài le, wǒ yě bú huì fàngqì.", english: "Even if I fail, I will not give up." },
    { chinese: "即使你不同意，我也要这么做。", pinyin: "Jíshǐ nǐ bù tóngyì, wǒ yě yào zhème zuò.", english: "Even if you disagree, I will still do it." }
  ],
  "hsk4-3": [
    { chinese: "无论天气怎么样，我们都要出发。", pinyin: "Wúlùn tiānqì zěnmeyàng, wǒmen dōu yào chūfā.", english: "No matter how the weather is, we must set off." },
    { chinese: "无论谁去，结果都一样。", pinyin: "Wúlùn shuí qù, jiéguǒ dōu yíyàng.", english: "No matter who goes, the result is the same." }
  ],
  "hsk4-4": [
    { chinese: "既然你决定了，就去做吧。", pinyin: "Jìrán nǐ juédìng le, jiù qù zuò ba.", english: "Since you have decided, go do it." },
    { chinese: "既然大家都在，我们就开会吧。", pinyin: "Jìrán dàjiā dōu zài, wǒmen jiù kāihuì ba.", english: "Since everyone is here, let's have the meeting." }
  ],
  "hsk4-5": [
    { chinese: "只要有时间，我就会去旅游。", pinyin: "Zhǐyào yǒu shíjiān, wǒ jiù huì qù lǚyóu.", english: "As long as I have time, I will go traveling." },
    { chinese: "只要你坚持，就一定会成功。", pinyin: "Zhǐyào nǐ jiānchí, jiù yídìng huì chénggōng.", english: "As long as you persist, you will definitely succeed." }
  ],
  "hsk4-6": [
    { chinese: "只有互相理解，才能成为好朋友。", pinyin: "Zhǐyǒu hùxiāng lǐjiě, cái néng chéngwéi hǎo péngyou.", english: "Only through mutual understanding can you become good friends." },
    { chinese: "只有经历过失败，才能懂得成功的珍贵。", pinyin: "Zhǐyǒu jīnglì guo shībài, cái néng dǒngdé chénggōng de zhēnguì.", english: "Only by experiencing failure can one understand the preciousness of success." }
  ],
  "hsk4-7": [
    { chinese: "他不但会弹钢琴，而且还会拉小提琴。", pinyin: "Tā bùdàn huì tán gāngqín, érqiě hái huì lā xiǎotíqín.", english: "He can not only play the piano, but also play the violin." },
    { chinese: "这台电脑不但速度快，而且价格便宜。", pinyin: "Zhè tái diànnǎo bùdàn sùdù kuài, érqiě jiàgé piányi.", english: "This computer is not only fast, but also cheap." }
  ],
  "hsk4-8": [
    { chinese: "我帮了他，他反而生我的气。", pinyin: "Wǒ bāng le tā, tā fǎn'ér shēng wǒ de qì.", english: "I helped him, but he got angry with me instead." },
    { chinese: "风不但没停，反而刮得更大了。", pinyin: "Fēng bùdàn méi tíng, fǎn'ér guā de gèng dà le.", english: "Not only did the wind not stop, but it blew even harder." }
  ],
  "hsk4-9": [
    { chinese: "为了提高听力，他每天听中文广播。", pinyin: "Wèile tígāo tīnglì, tā měitiān tīng zhōngwén guǎngbō.", english: "In order to improve his listening, he listens to Chinese broadcasts every day." },
    { chinese: "为了保护环境，我们应该少用塑料袋。", pinyin: "Wèile bǎohù huánjìng, wǒmen yīnggāi shǎo yòng sùliàodài.", english: "In order to protect the environment, we should use fewer plastic bags." }
  ],
  "hsk4-10": [
    { chinese: "由于堵车，我迟到了。", pinyin: "Yóuyú dǔchē, wǒ chídào le.", english: "Due to the traffic jam, I was late." },
    { chinese: "由于缺乏经验，他把事情搞砸了。", pinyin: "Yóuyú quēfá jīngyàn, tā bǎ shìqing gǎo zá le.", english: "Due to lack of experience, he messed things up." }
  ],
  "hsk4-11": [
    { chinese: "不管多累，他每天都坚持看书。", pinyin: "Bùguǎn duō lèi, tā měitiān dōu jiānchí kànshū.", english: "No matter how tired he is, he insists on reading every day." },
    { chinese: "不管别人怎么说，我都会支持你。", pinyin: "Bùguǎn biérén zěnme shuō, wǒ dōu huì zhīchí nǐ.", english: "No matter what others say, I will support you." }
  ],
  "hsk4-12": [
    { chinese: "你最好早点出发，以免迟到。", pinyin: "Nǐ zuìhǎo zǎodiǎn chūfā, yǐmiǎn chídào.", english: "You'd better set off early to avoid being late." },
    { chinese: "出门前检查一下行李，以免忘记带东西。", pinyin: "Chūmén qián jiǎnchá yíxià xíngli, yǐmiǎn wàngjì dài dōngxi.", english: "Check your luggage before leaving to avoid forgetting things." }
  ],
  "hsk4-13": [
    { chinese: "随着经济的发展，人们的生活水平提高了。", pinyin: "Suízhe jīngjì de fāzhǎn, rénmen de shēnghuó shuǐpíng tígāo le.", english: "With the development of the economy, people's living standards have improved." },
    { chinese: "随着时间的推移，他慢慢忘记了那件事。", pinyin: "Suízhe shíjiān de tuīyí, tā mànman wàngjì le nà jiàn shì.", english: "As time went by, he gradually forgot about that matter." }
  ],
  "hsk4-14": [
    { chinese: "他不仅是我的老师，还是我的朋友。", pinyin: "Tā bùjǐn shì wǒ de lǎoshī, hái shì wǒ de péngyou.", english: "He is not only my teacher, but also my friend." },
    { chinese: "这座城市不仅风景优美，而且历史悠久。", pinyin: "Zhè zuò chéngshì bùjǐn fēngjǐng yōuměi, érqiě lìshǐ yōujiǔ.", english: "This city not only has beautiful scenery, but also has a long history." }
  ],
  "hsk4-15": [
    { chinese: "与其在家里睡觉，不如出去散散步。", pinyin: "Yǔqí zài jiālǐ shuìjiào, bùrú chūqù sànsan bù.", english: "Rather than sleeping at home, it's better to go out for a walk." },
    { chinese: "与其抱怨，不如想办法解决问题。", pinyin: "Yǔqí bàoyuàn, bùrú xiǎng bànfǎ jiějué wèntí.", english: "Rather than complaining, it's better to find a way to solve the problem." }
  ],
  "hsk5-1": [
    { chinese: "即使遇到再大的困难，我们也要坚持下去。", pinyin: "Jíshǐ yùdào zài dà de kùnnán, wǒmen yě yào jiānchí xiàqù.", english: "Even if we encounter great difficulties, we must persevere." },
    { chinese: "即使你不想听，我也得把真相告诉你。", pinyin: "Jíshǐ nǐ bù xiǎng tīng, wǒ yě děi bǎ zhēnxiàng gàosu nǐ.", english: "Even if you don't want to hear it, I have to tell you the truth." }
  ],
  "hsk5-2": [
    { chinese: "既然你已经决定了，那就放手去做吧。", pinyin: "Jìrán nǐ yǐjīng juédìng le, nà jiù fàngshǒu qù zuò ba.", english: "Since you have already decided, then go ahead and do it." },
    { chinese: "既然大家意见不一，我们就再讨论一下。", pinyin: "Jìrán dàjiā yìjiàn bù yī, wǒmen jiù zài tǎolùn yíxià.", english: "Since everyone has different opinions, let's discuss it again." }
  ],
  "hsk5-3": [
    { chinese: "无论条件多么艰苦，他都没有退缩。", pinyin: "Wúlùn tiáojiàn duōme jiānkǔ, tā dōu méiyǒu tuìsuō.", english: "No matter how harsh the conditions were, he did not back down." },
    { chinese: "无论发生什么情况，请保持冷静。", pinyin: "Wúlùn fāshēng shénme qíngkuàng, qǐng bǎochí lěngjìng.", english: "No matter what happens, please stay calm." }
  ],
  "hsk5-4": [
    { chinese: "只要我们齐心协力，就没有克服不了的困难。", pinyin: "Zhǐyào wǒmen qíxīn xiélì, jiù méiyǒu kèfú bù liǎo de kùnnán.", english: "As long as we work together, there are no difficulties we cannot overcome." },
    { chinese: "只要你肯努力，梦想总有一天会实现。", pinyin: "Zhǐyào nǐ kěn nǔlì, mèngxiǎng zǒng yǒu yì tiān huì shíxiàn.", english: "As long as you are willing to work hard, your dream will come true one day." }
  ],
  "hsk5-5": [
    { chinese: "只有不断学习，才能跟上时代的步伐。", pinyin: "Zhǐyǒu búduàn xuéxí, cái néng gēn shàng shídài de bùfá.", english: "Only by continuously learning can one keep up with the pace of the times." },
    { chinese: "只有亲身经历过，才能真正体会到其中的艰辛。", pinyin: "Zhǐyǒu qīnshēn jīnglì guo, cái néng zhēnzhèng tǐhuì dào qízhōng de jiānxīn.", english: "Only by experiencing it firsthand can one truly appreciate the hardships involved." }
  ],
  "hsk5-6": [
    { chinese: "他不仅完成了任务，而且做得非常出色。", pinyin: "Tā bùjǐn wánchéng le rènwu, érqiě zuò de fēicháng chūsè.", english: "He not only completed the task, but also did it exceptionally well." },
    { chinese: "这部电影不仅票房高，而且口碑也很好。", pinyin: "Zhè bù diànyǐng bùjǐn piàofáng gāo, érqiě kǒubēi yě hěn hǎo.", english: "This movie not only has high box office, but also has good word-of-mouth." }
  ],
  "hsk5-7": [
    { chinese: "他不但不认错，反而怪别人。", pinyin: "Tā bùdàn bú rèncuò, fǎn'ér guài biérén.", english: "Not only did he not admit his mistake, but he blamed others instead." },
    { chinese: "吃了这种药，病情反而加重了。", pinyin: "Chī le zhè zhǒng yào, bìngqíng fǎn'ér jiāzhòng le.", english: "After taking this medicine, the condition actually worsened." }
  ],
  "hsk5-8": [
    { chinese: "为了实现梦想，他付出了很多汗水。", pinyin: "Wèile shíxiàn mèngxiǎng, tā fùchū le hěn duō hànshuǐ.", english: "In order to realize his dream, he put in a lot of sweat." },
    { chinese: "为了公司的发展，大家都在努力工作。", pinyin: "Wèile gōngsī de fāzhǎn, dàjiā dōu zài nǔlì gōngzuò.", english: "For the development of the company, everyone is working hard." }
  ],
  "hsk5-9": [
    { chinese: "由于天气恶劣，比赛被迫取消。", pinyin: "Yóuyú tiānqì èliè, bǐsài bèi pò qǔxiāo.", english: "Due to severe weather, the match was forced to be canceled." },
    { chinese: "由于资金不足，这个项目暂时搁浅了。", pinyin: "Yóuyú zījīn bùzú, zhège xiàngmù zànshí gēqiǎn le.", english: "Due to lack of funds, this project is temporarily stranded." }
  ],
  "hsk5-10": [
    { chinese: "不管遇到什么挫折，他都保持乐观。", pinyin: "Bùguǎn yùdào shénme cuòzhé, tā dōu bǎochí lèguān.", english: "No matter what setbacks he encounters, he remains optimistic." },
    { chinese: "不管别人怎么评价，我只要做好自己就行了。", pinyin: "Bùguǎn biérén zěnme píngjià, wǒ zhǐyào zuò hǎo zìjǐ jiù xíng le.", english: "No matter how others judge, I just need to be myself." }
  ],
  "hsk5-11": [
    { chinese: "请把重要文件备份，以免丢失。", pinyin: "Qǐng bǎ zhòngyào wénjiàn bèifèn, yǐmiǎn diūshī.", english: "Please back up important files to avoid losing them." },
    { chinese: "我们应该提前做好准备，以免到时候手忙脚乱。", pinyin: "Wǒmen yīnggāi tíqián zuò hǎo zhǔnbèi, yǐmiǎn dào shíhou shǒumángjiǎoluàn.", english: "We should prepare in advance to avoid being in a rush when the time comes." }
  ],
  "hsk5-12": [
    { chinese: "随着科技的进步，人们的沟通方式发生了巨大的变化。", pinyin: "Suízhe kējì de jìnbù, rénmen de gōutōng fāngshì fāshēng le jùdà de biànhuà.", english: "With the advancement of technology, people's communication methods have undergone huge changes." },
    { chinese: "随着年龄的增长，他变得越来越成熟了。", pinyin: "Suízhe niánlíng de zēngzhǎng, tā biàn de yuè lái yuè chéngshú le.", english: "As he grows older, he becomes more and more mature." }
  ],
  "hsk5-13": [
    { chinese: "与其盲目跟风，不如找到适合自己的发展方向。", pinyin: "Yǔqí mángmù gēnfēng, bùrú zhǎodào shìhé zìjǐ de fāzhǎn fāngxiàng.", english: "Rather than blindly following the trend, it's better to find a development direction that suits you." },
    { chinese: "与其把时间浪费在无意义的争吵上，不如多做点实事。", pinyin: "Yǔqí bǎ shíjiān làngfèi zài wú yìyì de zhēngchǎo shàng, bùrú duō zuò diǎn shíshì.", english: "Rather than wasting time on meaningless arguments, it's better to do something practical." }
  ],
  "hsk5-14": [
    { chinese: "宁可自己吃亏，也不要损害别人的利益。", pinyin: "Nìngkě zìjǐ chīkuī, yě búyào sǔnhài biérén de lìyì.", english: "I would rather suffer a loss myself than harm the interests of others." },
    { chinese: "他宁可放弃高薪的工作，也要追求自己的梦想。", pinyin: "Tā nìngkě fàngqì gāoxīn de gōngzuò, yě yào zhuīqiú zìjǐ de mèngxiǎng.", english: "He would rather give up a high-paying job to pursue his dream." }
  ],
  "hsk5-15": [
    { chinese: "哪怕只有一丝希望，我们也要全力以赴。", pinyin: "Nǎpà zhǐyǒu yì sī xīwàng, wǒmen yě yào quánlì yǐ fù.", english: "Even if there is only a glimmer of hope, we must go all out." },
    { chinese: "哪怕再苦再累，他也没有半句怨言。", pinyin: "Nǎpà zài kǔ zài lèi, tā yě méiyǒu bàn jù yuànyán.", english: "Even if it is extremely bitter and tiring, he doesn't have a single word of complaint." }
  ],
  "hsk6-1": [
    { chinese: "既然木已成舟，后悔也没有用了。", pinyin: "Jìrán mù yǐ chéng zhōu, hòuhuǐ yě méiyǒu yòng le.", english: "Since what's done is done, regretting is useless." },
    { chinese: "既然你这么有把握，那就交给你去办吧。", pinyin: "Jìrán nǐ zhème yǒu bǎwò, nà jiù jiāo gěi nǐ qù bàn ba.", english: "Since you are so confident, then I'll leave it to you to handle." }
  ],
  "hsk6-2": [
    { chinese: "无论遇到多大的风浪，他都能从容应对。", pinyin: "Wúlùn yùdào duō dà de fēnglàng, tā dōu néng cóngróng yìngduì.", english: "No matter how big the storm he encounters, he can handle it calmly." },
    { chinese: "无论时代如何变迁，这种精神永远不会过时。", pinyin: "Wúlùn shídài rúhé biànqiān, zhè zhǒng jīngshén yǒngyuǎn bú huì guòshí.", english: "No matter how times change, this spirit will never be outdated." }
  ],
  "hsk6-3": [
    { chinese: "只要有一线生机，医生就不会放弃抢救。", pinyin: "Zhǐyào yǒu yí xiàn shēngjī, yīshēng jiù bú huì fàngqì qiǎngjiù.", english: "As long as there is a glimmer of hope for survival, the doctor will not give up resuscitation." },
    { chinese: "只要大家同心协力，就没有攻不克的难关。", pinyin: "Zhǐyào dàjiā tóngxīnxiélì, jiù méiyǒu gōng bú kè de nánguān.", english: "As long as everyone works together, there is no difficulty that cannot be overcome." }
  ],
  "hsk6-4": [
    { chinese: "只有深入基层，才能了解群众的真实需求。", pinyin: "Zhǐyǒu shēnrù jīcéng, cái néng liǎojiě qúnzhòng de zhēnshí xūqiú.", english: "Only by going deep into the grassroots can we understand the real needs of the masses." },
    { chinese: "只有掌握了核心技术，企业才能在竞争中立于不败之地。", pinyin: "Zhǐyǒu zhǎngwò le héxīn jìshù, qǐyè cái néng zài jìngzhēng zhōng lì yú bú bài zhī dì.", english: "Only by mastering core technologies can an enterprise remain invincible in competition." }
  ],
  "hsk6-5": [
    { chinese: "这不仅关乎个人的荣誉，更关乎国家的利益。", pinyin: "Zhè bùjǐn guānhū gèrén de róngyù, gèng guānhū guójiā de lìyì.", english: "This is not only about personal honor, but more importantly about national interests." },
    { chinese: "他不仅是一位杰出的科学家，还是一位伟大的教育家。", pinyin: "Tā bùjǐn shì yí wèi jiéchū de kēxuéjiā, hái shì yí wèi wěidà de jiàoyùjiā.", english: "He is not only an outstanding scientist, but also a great educator." }
  ],
  "hsk6-6": [
    { chinese: "这种做法不但不能解决问题，反而会激化矛盾。", pinyin: "Zhè zhǒng zuòfǎ bùdàn bù néng jiějué wèntí, fǎn'ér huì jīhuà máodùn.", english: "This approach not only cannot solve the problem, but will actually intensify the contradiction." },
    { chinese: "他不但没有受到惩罚，反而得到了提拔。", pinyin: "Tā bùdàn méiyǒu shòudào chéngfá, fǎn'ér dédào le tíbá.", english: "Not only was he not punished, but he was promoted instead." }
  ],
  "hsk6-7": [
    { chinese: "为了维护世界和平，各国应加强合作。", pinyin: "Wèile wéihù shìjiè hépíng, gè guó yīng jiāqiáng hézuò.", english: "In order to maintain world peace, all countries should strengthen cooperation." },
    { chinese: "为了子孙后代，我们必须保护好生态环境。", pinyin: "Wèile zǐsūnhòudài, wǒmen bìxū bǎohù hǎo shēngtài huánjìng.", english: "For the sake of future generations, we must protect the ecological environment well." }
  ],
  "hsk6-8": [
    { chinese: "由于缺乏长远规划，这个项目最终以失败告终。", pinyin: "Yóuyú quēfá chángyuǎn guīhuà, zhège xiàngmù zuìzhōng yǐ shībài gàozhōng.", english: "Due to the lack of long-term planning, this project ultimately ended in failure." },
    { chinese: "由于不可抗力因素，本次活动被迫延期。", pinyin: "Yóuyú bùkěkànglì yīnsù, běn cì huódòng bèi pò yánqī.", english: "Due to force majeure factors, this event is forced to be postponed." }
  ],
  "hsk6-9": [
    { chinese: "不管前方的路有多么崎岖，我都会坚定地走下去。", pinyin: "Bùguǎn qiánfāng de lù yǒu duōme qíqū, wǒ dōu huì jiāndìng de zǒu xiàqù.", english: "No matter how rugged the road ahead is, I will firmly walk on." },
    { chinese: "不管外界如何喧嚣，他始终保持着内心的宁静。", pinyin: "Bùguǎn wàijiè rúhé xuānxiāo, tā shǐzhōng bǎochí zhe nèixīn de níngjìng.", english: "No matter how noisy the outside world is, he always maintains inner peace." }
  ],
  "hsk6-10": [
    { chinese: "请务必在规定时间内提交申请，以免错失良机。", pinyin: "Qǐng wùbì zài guīdìng shíjiān nèi tíjiāo shēnqǐng, yǐmiǎn cuòshī liángjī.", english: "Please be sure to submit your application within the specified time to avoid missing a good opportunity." },
    { chinese: "操作机器时请严格遵守规程，以免发生意外。", pinyin: "Cāozuò jīqì shí qǐng yángé zūnshǒu guīchéng, yǐmiǎn fāshēng yìwài.", english: "Please strictly follow the procedures when operating the machine to avoid accidents." }
  ],
  "hsk6-11": [
    { chinese: "随着全球化的深入发展，各国之间的联系日益紧密。", pinyin: "Suízhe quánqiúhuà de shēnrù fāzhǎn, gè guó zhījiān de liánxì rìyì jǐnmì.", english: "With the deepening development of globalization, the connections between countries are becoming increasingly close." },
    { chinese: "随着环保意识的增强，越来越多的人开始倡导低碳生活。", pinyin: "Suízhe huánbǎo yìshi de zēngqiáng, yuè lái yuè duō de rén kāishǐ chàngdǎo dītàn shēnghuó.", english: "With the enhancement of environmental awareness, more and more people are beginning to advocate a low-carbon lifestyle." }
  ],
  "hsk6-12": [
    { chinese: "与其坐以待毙，不如主动出击寻找生机。", pinyin: "Yǔqí zuòyǐdàibì, bùrú zhǔdòng chūjī xúnzhǎo shēngjī.", english: "Rather than sitting and waiting for death, it's better to take the initiative to attack and look for a chance of survival." },
    { chinese: "与其临渊羡鱼，不如退而结网。", pinyin: "Yǔqí línyuānxiànyú, bùrú tuì'érjiéwǎng.", english: "Rather than standing by the pond admiring the fish, it's better to go home and weave a net. (Take practical action instead of just wishing)" }
  ],
  "hsk6-13": [
    { chinese: "他宁可玉碎，不为瓦全，坚决不向恶势力低头。", pinyin: "Tā nìngkě yùsuì, bù wéi wǎquán, jiānjué bú xiàng è shìlì dītóu.", english: "He would rather be a broken jade than a whole tile, resolutely refusing to bow to evil forces." },
    { chinese: "我宁可自己多承担一些，也不愿看到团队受损失。", pinyin: "Wǒ nìngkě zìjǐ duō chéngdān yìxiē, yě bú yuàn kàndào tuánduì shòu sǔnshī.", english: "I would rather bear more myself than see the team suffer losses." }
  ],
  "hsk6-14": [
    { chinese: "哪怕前方是万丈深渊，我也绝不退缩。", pinyin: "Nǎpà qiánfāng shì wànzhàng shēnyuān, wǒ yě jué bú tuìsuō.", english: "Even if there is a bottomless abyss ahead, I will absolutely not shrink back." },
    { chinese: "哪怕只有微弱的希望，我们也要付出百分之百的努力。", pinyin: "Nǎpà zhǐyǒu wēiruò de xīwàng, wǒmen yě yào fùchū bǎifēnzhībǎi de nǔlì.", english: "Even if there is only a faint hope, we must put in 100% effort." }
  ],
  "hsk6-15": [
    { chinese: "与其说他是个天才，不如说他是个极其勤奋的人。", pinyin: "Yǔqí shuō tā shì gè tiāncái, bùrú shuō tā shì gè jíqí qínfèn de rén.", english: "Rather than saying he is a genius, it is better to say he is an extremely hardworking person." },
    { chinese: "与其说这是一次失败，不如说这是一次宝贵的教训。", pinyin: "Yǔqí shuō zhè shì yícì shībài, bùrú shuō zhè shì yícì bǎoguì de jiàoxùn.", english: "Rather than saying this is a failure, it is better to say this is a valuable lesson." }
  ]
};

const levels = Object.keys(hskGrammar) as (keyof typeof hskGrammar)[];

for (const level of levels) {
  const points = hskGrammar[level];
  for (const point of points) {
    if (newExamples[point.id]) {
      point.examples.push(...newExamples[point.id]);
    }
  }
}

const fileContent = `export type HSKLevel = 'HSK 1' | 'HSK 2' | 'HSK 3' | 'HSK 4' | 'HSK 5' | 'HSK 6';

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

export const hskGrammar: Record<HSKLevel, GrammarPoint[]> = ${JSON.stringify(hskGrammar, null, 2)};
`;

fs.writeFileSync('./src/data/hskGrammar.ts', fileContent);
console.log('Successfully added new examples to hskGrammar.ts');
