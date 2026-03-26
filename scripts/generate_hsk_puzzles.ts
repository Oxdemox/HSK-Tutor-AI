import { readFileSync, writeFileSync } from 'fs';

const hskData = readFileSync('./src/data/hsk.ts', 'utf-8');
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

function getEnglish(hanzi: string) {
  const w = vocabDict.get(hanzi);
  if (!w) return hanzi;
  let eng = w.english.split(',')[0].split(';')[0].trim();
  // Remove "to " from verbs for better sentence flow
  if (eng.startsWith('to ')) eng = eng.substring(3);
  return eng;
}

function getWord(hanzi: string) {
  const w = vocabDict.get(hanzi);
  if (!w) throw new Error(`Word not found: ${hanzi}`);
  return {
    id: `w_${Math.random().toString(36).substr(2, 9)}`,
    chinese: w.hanzi,
    pinyin: w.pinyin,
    english: w.english.split(',')[0].trim()
  };
}

const newPuzzles: any[] = [];
let puzzleIdCounter = 2000;

function addPuzzle(level: string, english: string, sentence: string[]) {
  try {
    const words = sentence.map(getWord);
    newPuzzles.push({
      id: `gen-tpl-${puzzleIdCounter++}`,
      level,
      englishTranslation: english,
      words
    });
  } catch (e: any) {
    console.error(e.message);
  }
}

// Helper to pick random element
const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

// HSK 1
const h1_people = ['我', '你', '他', '她', '我们', '老师', '学生', '医生', '朋友', '爸爸', '妈妈', '儿子', '女儿'];
const h1_verbs = ['看', '听', '读', '写', '吃', '喝', '买', '做', '学习', '爱', '喜欢', '想', '认识'];
const h1_food = ['苹果', '米饭', '菜', '水果'];
const h1_drinks = ['水', '茶'];
const h1_items = ['书', '衣服', '东西', '杯子', '钱', '电脑', '电视', '电影'];
const h1_places = ['家', '学校', '饭馆', '商店', '医院', '火车站', '中国', '北京'];
const h1_times = ['今天', '明天', '昨天', '上午', '中午', '下午', '现在'];
const h1_adjs = ['好', '大', '小', '多', '少', '冷', '热', '漂亮', '高兴'];

for (let i = 0; i < 15; i++) {
  const p = pick(h1_people);
  const f = pick(h1_food);
  addPuzzle('HSK 1', `${getEnglish(p)} eats ${getEnglish(f)}.`, [p, '吃', f]);
  addPuzzle('HSK 1', `${getEnglish(p)} likes to eat ${getEnglish(f)}.`, [p, '喜欢', '吃', f]);
  addPuzzle('HSK 1', `Does ${getEnglish(p)} like to eat ${getEnglish(f)}?`, [p, '喜欢', '吃', f, '吗']);
}

for (let i = 0; i < 15; i++) {
  const p = pick(h1_people);
  const d = pick(h1_drinks);
  addPuzzle('HSK 1', `${getEnglish(p)} drinks ${getEnglish(d)}.`, [p, '喝', d]);
  addPuzzle('HSK 1', `${getEnglish(p)} likes to drink ${getEnglish(d)}.`, [p, '喜欢', '喝', d]);
  addPuzzle('HSK 1', `Does ${getEnglish(p)} like to drink ${getEnglish(d)}?`, [p, '喜欢', '喝', d, '吗']);
}

for (let i = 0; i < 30; i++) {
  const p = pick(h1_people);
  const item = pick(h1_items);
  addPuzzle('HSK 1', `${getEnglish(p)} buys ${getEnglish(item)}.`, [p, '买', item]);
  addPuzzle('HSK 1', `${getEnglish(p)} wants to buy ${getEnglish(item)}.`, [p, '想', '买', item]);
  addPuzzle('HSK 1', `${getEnglish(p)} doesn't buy ${getEnglish(item)}.`, [p, '不', '买', item]);
}

for (let i = 0; i < 20; i++) {
  const p = pick(h1_people);
  const place = pick(h1_places);
  const time = pick(h1_times);
  addPuzzle('HSK 1', `${getEnglish(time)} ${getEnglish(p)} goes to ${getEnglish(place)}.`, [time, p, '去', place]);
  addPuzzle('HSK 1', `${getEnglish(p)} is at ${getEnglish(place)}.`, [p, '在', place]);
}

for (let i = 0; i < 20; i++) {
  const p = pick(h1_people);
  const adj = pick(h1_adjs);
  addPuzzle('HSK 1', `${getEnglish(p)} is very ${getEnglish(adj)}.`, [p, '很', adj]);
  addPuzzle('HSK 1', `${getEnglish(p)} is not ${getEnglish(adj)}.`, [p, '不', adj]);
}

// HSK 2
const h2_people = ['哥哥', '姐姐', '弟弟', '妹妹', '丈夫', '妻子', '男人', '女人', '服务员'];
const h2_verbs = ['帮助', '准备', '希望', '觉得', '知道', '懂', '觉得', '开始', '介绍', '准备', '休息', '运动', '跑步', '游泳', '打篮球', '踢足球', '上班', '生病', '吃药'];
const h2_food = ['鸡蛋', '西瓜', '羊肉'];
const h2_drinks = ['牛奶', '咖啡'];
const h2_items = ['报纸', '手表', '手机', '自行车', '公共汽车', '票', '门', '雪', '药'];
const h2_places = ['机场', '教室', '房间', '路', '左边', '右边', '旁边', '公司'];
const h2_times = ['早上', '晚上', '去年', '小时', '时间'];
const h2_adjs = ['忙', '累', '远', '近', '快', '慢', '贵', '便宜', '晴', '阴', '错', '对', '新', '快乐'];

for (let i = 0; i < 15; i++) {
  const p = pick([...h1_people, ...h2_people]);
  const f = pick(h2_food);
  addPuzzle('HSK 2', `${getEnglish(p)} eats ${getEnglish(f)}.`, [p, '吃', f]);
  addPuzzle('HSK 2', `${getEnglish(p)} doesn't eat ${getEnglish(f)}.`, [p, '不', '吃', f]);
}

for (let i = 0; i < 15; i++) {
  const p = pick([...h1_people, ...h2_people]);
  const d = pick(h2_drinks);
  addPuzzle('HSK 2', `${getEnglish(p)} drinks ${getEnglish(d)}.`, [p, '喝', d]);
  addPuzzle('HSK 2', `${getEnglish(p)} doesn't drink ${getEnglish(d)}.`, [p, '不', '喝', d]);
}

for (let i = 0; i < 30; i++) {
  const p = pick([...h1_people, ...h2_people]);
  const adj = pick(h2_adjs);
  addPuzzle('HSK 2', `${getEnglish(p)} feels very ${getEnglish(adj)}.`, [p, '觉得', '很', adj]);
  addPuzzle('HSK 2', `${getEnglish(p)} is extremely ${getEnglish(adj)}.`, [p, '非常', adj]);
}

for (let i = 0; i < 20; i++) {
  const p = pick([...h1_people, ...h2_people]);
  const place = pick(h2_places);
  addPuzzle('HSK 2', `${getEnglish(p)} arrives at the ${getEnglish(place)}.`, [p, '到', place, '了']);
  addPuzzle('HSK 2', `${getEnglish(p)} is resting in the ${getEnglish(place)}.`, [p, '在', place, '休息']);
}

for (let i = 0; i < 20; i++) {
  const p = pick([...h1_people, ...h2_people]);
  const item = pick([...h2_items, ...h2_food, ...h2_drinks]);
  addPuzzle('HSK 2', `This ${getEnglish(item)} is very expensive.`, ['这', '个', item, '很', '贵']);
  addPuzzle('HSK 2', `${getEnglish(p)} bought a ${getEnglish(item)}.`, [p, '买', '了', '一', '个', item]);
}

// HSK 3
const h3_people = ['阿姨', '叔叔', '爷爷', '奶奶', '校长', '同事', '邻居', '客人', '司机', '经理'];
const h3_verbs = ['搬', '帮忙', '比较', '比赛', '必须', '变化', '表示', '表演', '参加', '发现', '复习', '改变', '关心', '害怕', '换', '检查', '结婚', '解决', '借', '决定', '离开', '了解', '练习', '明白', '拿', '努力', '爬山', '清楚', '认为', '上网', '生气', '使', '使用', '刷牙', '洗澡', '相信', '需要', '选择', '要求', '以为', '影响', '遇到', '愿意', '越', '站', '长', '着急', '照顾', '祝', '注意'];
const h3_items = ['包', '词典', '地图', '电梯', '护照', '花', '画', '会议', '节日', '节目', '礼物', '历史', '脸', '伞', '声音', '世界', '事情', '树', '数学', '太阳', '腿', '文化', '习惯', '行李箱', '新闻', '信用卡', '熊猫', '眼镜', '音乐', '银行', '游戏', '月亮', '照片', '照相机', '周末', '字典'];
const h3_places = ['办公室', '公园', '国家', '环境', '街道', '超市', '城市', '地方', '北方'];
const h3_adjs = ['矮', '安静', '聪明', '低', '短', '方便', '胖', '瘦', '舒服', '突然', '相同', '新鲜', '一般', '一样', '有名', '重要', '主要', '奇怪', '认真', '容易', '简单', '干净', '旧', '渴', '可爱', '老', '满', '难', '难过', '年轻'];

for (let i = 0; i < 30; i++) {
  const p = pick(h3_people);
  const item = pick(h3_items);
  addPuzzle('HSK 3', `${getEnglish(p)} needs ${getEnglish(item)}.`, [p, '需要', item]);
  addPuzzle('HSK 3', `${getEnglish(p)} likes this ${getEnglish(item)}.`, [p, '喜欢', '这', '个', item]);
}

for (let i = 0; i < 30; i++) {
  const p = pick(h3_people);
  const adj = pick(h3_adjs);
  addPuzzle('HSK 3', `${getEnglish(p)} is very ${getEnglish(adj)}.`, [p, '很', adj]);
  addPuzzle('HSK 3', `${getEnglish(p)} is relatively ${getEnglish(adj)}.`, [p, '比较', adj]);
}

for (let i = 0; i < 20; i++) {
  const p1 = pick(h3_people);
  const p2 = pick(h1_people);
  addPuzzle('HSK 3', `${getEnglish(p1)} agrees with ${getEnglish(p2)}'s request.`, [p1, '同意', p2, '的', '要求']);
  addPuzzle('HSK 3', `${getEnglish(p1)} cares about ${getEnglish(p2)}.`, [p1, '很', '关心', p2]);
}

for (let i = 0; i < 20; i++) {
  const p = pick(h3_people);
  const place = pick(h3_places);
  addPuzzle('HSK 3', `${getEnglish(p)} left the ${getEnglish(place)}.`, [p, '离开', '了', place]);
  addPuzzle('HSK 3', `${getEnglish(p)} discovered a ${getEnglish(place)}.`, [p, '发现', '了', '一', '个', place]);
}

// HSK 4
const hsk4Words = Array.from(vocabDict.values()).filter(w => w.level === 'HSK 4');
const h4_people = hsk4Words.filter(w => ['作者', '读者', '记者', '观众', '警察', '大夫', '护士', '教授', '校长', '律师', '师傅', '售货员', '顾客', '亲戚', '儿童'].includes(w.hanzi)).map(w => w.hanzi);
const h4_verbs = hsk4Words.filter(w => ['安排', '保护', '保证', '表扬', '参观', '打扰', '代替', '道歉', '放弃', '负责', '改变', '感谢', '鼓励', '管理', '怀疑', '回忆', '计划', '坚持', '建议', '交流', '接受', '解释', '进行', '禁止', '拒绝', '考虑', '联系', '理解', '批评', '骗', '商量', '申请', '适应', '说明', '讨论', '提供', '提醒', '推迟', '吸引', '羡慕', '研究', '邀请', '引起', '原谅', '允许', '增加', '证明', '支持', '重视', '尊重'].includes(w.hanzi)).map(w => w.hanzi);
const h4_items = hsk4Words.filter(w => ['环境', '任务', '质量', '计划', '规定', '密码', '消息', '文章', '小说', '杂志', '网站', '信息', '意见', '原因', '责任', '知识', '重点', '专业', '作用', '座位'].includes(w.hanzi)).map(w => w.hanzi);

for (let i = 0; i < 100; i++) {
  if (h4_people.length === 0 || h4_verbs.length === 0 || h4_items.length === 0) break;
  const p = pick(h4_people);
  const v = pick(h4_verbs);
  const item = pick(h4_items);
  addPuzzle('HSK 4', `The ${getEnglish(p)} ${getEnglish(v)}s the ${getEnglish(item)}.`, [p, v, '了', '这', '个', item]);
  addPuzzle('HSK 4', `The ${getEnglish(p)} doesn't ${getEnglish(v)} the ${getEnglish(item)}.`, [p, '不', v, '这', '个', item]);
}

// HSK 5
const hsk5Words = Array.from(vocabDict.values()).filter(w => w.level === 'HSK 5');
const h5_people = hsk5Words.filter(w => ['专家', '老板', '总裁', '秘书', '员工', '领导', '主任', '教授', '学者', '作家', '导演', '演员', '明星', '球迷', '网民', '农民', '工人', '商人', '顾客', '消费者', '患者', '大夫', '护士', '警察', '小偷', '骗子', '英雄', '天才', '傻瓜', '疯子', '单身', '夫妻', '父母', '兄弟', '姐妹', '亲戚', '邻居', '朋友', '敌人', '对手'].includes(w.hanzi)).map(w => w.hanzi);
const h5_verbs = hsk5Words.filter(w => ['安慰', '采访', '称赞', '承担', '承认', '处理', '创造', '促进', '达到', '代表', '代替', '导致', '对待', '发表', '发挥', '发明', '分析', '改进', '改善', '感谢', '公布', '沟通', '构成', '鼓励', '观察', '管理', '规定', '恢复', '获得', '积累', '建立', '建设', '交流', '解决', '解释', '进行', '禁止', '控制', '扩大', '面临', '培养', '破坏', '期待', '强调', '取消', '确认', '热爱', '设计', '实现', '适应', '收集', '熟悉', '说明', '提高', '体会', '体现', '调整', '推广', '推荐', '完善', '维护', '吸收', '吸引', '享受', '想象', '修改', '宣布', '寻找', '询问', '训练', '延长', '要求', '引起', '迎接', '影响', '拥抱', '运用', '造成', '掌握', '珍惜', '争取', '证明', '支持', '指导', '制定', '制造', '制作', '治疗', '主持', '追求', '阻止', '组织', '遵守'].includes(w.hanzi)).map(w => w.hanzi);
const h5_items = hsk5Words.filter(w => ['方案', '方式', '风险', '概念', '工程', '工具', '功能', '贡献', '规模', '规则', '规律', '后果', '机会', '基础', '计划', '技术', '价值', '建议', '经验', '精神', '决定', '困难', '理论', '理由', '力量', '利润', '利益', '麻烦', '矛盾', '秘密', '目标', '能力', '内容', '评价', '气氛', '权力', '权利', '任务', '社会', '生活', '生命', '时间', '事实', '事物', '思想', '态度', '条件', '挑战', '痛苦', '问题', '习惯', '现实', '现象', '项目', '效果', '效率', '心情', '信任', '行动', '行为', '形式', '形势', '形象', '性质', '压力', '要求', '业务', '意见', '意义', '因素', '印象', '优势', '愿望', '责任', '政策', '知识', '制度', '质量', '秩序', '智慧', '主题', '主意', '状况', '状态', '资格', '资金', '资料', '资源', '作用'].includes(w.hanzi)).map(w => w.hanzi);

for (let i = 0; i < 100; i++) {
  if (h5_people.length === 0 || h5_verbs.length === 0 || h5_items.length === 0) break;
  const p = pick(h5_people);
  const v = pick(h5_verbs);
  const item = pick(h5_items);
  addPuzzle('HSK 5', `The ${getEnglish(p)} ${getEnglish(v)}s the ${getEnglish(item)}.`, [p, v, '了', '这', '个', item]);
  addPuzzle('HSK 5', `The ${getEnglish(p)} doesn't ${getEnglish(v)} the ${getEnglish(item)}.`, [p, '没', '有', v, '这', '个', item]);
}

// HSK 6
const hsk6Words = Array.from(vocabDict.values()).filter(w => w.level === 'HSK 6');
const h6_people = hsk6Words.filter(w => ['总统', '总理', '主席', '部长', '市长', '局长', '长官', '军官', '士兵', '警察', '法官', '律师', '罪犯', '凶手', '小偷', '骗子', '强盗', '英雄', '烈士', '天才', '傻瓜', '疯子', '专家', '学者', '教授', '科学家', '工程师', '医生', '护士', '患者', '病人', '老板', '总裁', '经理', '秘书', '员工', '工人', '农民', '商人', '顾客', '消费者', '作家', '诗人', '记者', '编辑', '导演', '演员', '明星', '歌手', '画家', '音乐家', '运动员', '教练', '裁判', '球迷', '网民', '观众', '听众', '读者', '作者', '单身', '夫妻', '父母', '兄弟', '姐妹', '亲戚', '邻居', '朋友', '敌人', '对手', '伙伴', '同事', '同学', '校友', '老乡', '同胞', '华侨', '华人', '外国人', '本地人', '外地人', '城里人', '乡下人', '穷人', '富人', '好人', '坏人', '男人', '女人', '老人', '孩子', '青年', '少年', '儿童', '婴儿'].includes(w.hanzi)).map(w => w.hanzi);
const h6_verbs = hsk6Words.filter(w => ['暗示', '剥夺', '操纵', '策划', '惩罚', '澄清', '挫折', '达成', '打破', '颠覆', '调动', '遏制', '发掘', '粉碎', '干涉', '捍卫', '化解', '唤醒', '激发', '践踏', '揭露', '解剖', '开辟', '跨越', '垄断', '弥补', '藐视', '凝聚', '扭转', '培育', '抨击', '破解', '欺骗', '牵制', '谴责', '侵犯', '驱逐', '取缔', '确立', '渗透', '审视', '施加', '释放', '收复', '疏导', '束缚', '塑造', '淘汰', '挑衅', '妥协', '挖掘', '挽救', '违背', '伪造', '维护', '消耗', '协调', '压制', '掩盖', '衍生', '抑制', '引领', '迎合', '拥护', '诱导', '孕育', '赞助', '增添', '展现', '彰显', '整合', '拯救', '制裁', '制约', '致使', '中断', '终结', '重组', '主导', '注入', '铸造', '转化', '转移', '追究', '遵循'].includes(w.hanzi)).map(w => w.hanzi);
const h6_items = hsk6Words.filter(w => ['奥秘', '霸权', '败局', '版图', '壁垒', '弊端', '变局', '波折', '财富', '策略', '差距', '产业', '常态', '潮流', '沉淀', '成见', '冲突', '创伤', '传统', '传奇', '底线', '定律', '动力', '动态', '恩怨', '法则', '反差', '风波', '风气', '风险', '锋芒', '格局', '根基', '共识', '轨迹', '规律', '鸿沟', '幻觉', '辉煌', '机密', '机遇', '极限', '纪元', '枷锁', '僵局', '焦点', '结晶', '界限', '禁区', '纠纷', '局限', '绝境', '空白', '狂热', '蓝图', '烙印', '理念', '立场', '利弊', '裂痕', '灵魂', '垄断', '盲区', '魅力', '迷宫', '谜团', '面貌', '模式', '默契', '内涵', '内幕', '纽带', '泡沫', '偏见', '瓶颈', '奇迹', '契机', '前景', '潜力', '前提', '情结', '趋势', '权衡', '权益', '缺陷', '热潮', '荣誉', '软肋', '色彩', '生态', '神话', '使命', '视野', '势头', '事态', '枢纽', '曙光', '束缚', '缩影', '态势', '特权', '体面', '体系', '天机', '挑战', '铁律', '通病', '突破', '危机', '威信', '伪装', '温床', '误区', '先机', '先例', '陷阱', '线索', '限度', '象征', '效应', '协议', '心血', '信念', '信仰', '悬念', '旋律', '血统', '压力', '眼界', '要素', '隐患', '阴影', '印记', '优势', '渊源', '原则', '远景', '怨恨', '灾难', '障碍', '真谛', '真相', '阵营', '症结', '支柱', '秩序', '智慧', '制约', '质量', '重心', '主权', '专利', '准则', '资本', '资质', '尊严'].includes(w.hanzi)).map(w => w.hanzi);

for (let i = 0; i < 100; i++) {
  if (h6_people.length === 0 || h6_verbs.length === 0 || h6_items.length === 0) break;
  const p = pick(h6_people);
  const v = pick(h6_verbs);
  const item = pick(h6_items);
  addPuzzle('HSK 6', `The ${getEnglish(p)} ${getEnglish(v)}s the ${getEnglish(item)}.`, [p, v, '了', '这', '个', item]);
  addPuzzle('HSK 6', `The ${getEnglish(p)} doesn't ${getEnglish(v)} the ${getEnglish(item)}.`, [p, '没', '有', v, '这', '个', item]);
}

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

writeFileSync('./src/data/sentenceBuilderData.ts', fileContent);
console.log(`Successfully added ${newPuzzles.length} new puzzles to sentenceBuilderData.ts`);
