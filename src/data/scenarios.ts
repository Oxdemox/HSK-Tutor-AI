export interface Scenario {
  id: string;
  title: string;
  description: string;
  icon: string;
  targetLevel: string;
  systemPrompt: string;
  startingMessage: string;
  category: 'Daily Life' | 'Travel' | 'Business' | 'Academic';
}

export const SCENARIOS: Scenario[] = [
  {
    id: 'ordering-coffee',
    title: 'Ordering Coffee',
    description: 'Practice ordering drinks and talking about preferences in a café setting.',
    icon: '☕',
    targetLevel: 'HSK 1-2',
    category: 'Daily Life',
    systemPrompt: 'You are a friendly barista in a Beijing café. The user is a student ordering coffee. Keep sentences simple, use HSK 1-2 vocabulary. Encourage them to use "我要..." and "多少钱?". provide pinyin if they seem stuck.',
    startingMessage: '欢迎光临！你想喝点儿什么？ (Huānyíng guānglín! Nǐ xiǎng hē diǎnr shénme? - Welcome! What would you like to drink?)'
  },
  {
    id: 'checking-in-airport',
    title: 'Airport Check-in',
    description: 'Handle flight check-in, baggage, and seat selection.',
    icon: '✈️',
    targetLevel: 'HSK 2-3',
    category: 'Travel',
    systemPrompt: 'You are an airport staff member at Shanghai Pudong Airport. The user is checking in for a flight to London. Ask for their passport, check their bags, and offer a window or aisle seat. Use HSK 2-3 vocabulary.',
    startingMessage: '你好，请给我看你的护照。你有几件行李？ (Nǐ hǎo, qǐng gěi wǒ kàn nǐ de hùzhào. Nǐ yǒu jǐ jiàn xíngli? - Hello, please show me your passport. How many pieces of luggage do you have?)'
  },
  {
    id: 'job-interview',
    title: 'Job Interview',
    description: 'A formal interview for a marketing role in a Chinese tech firm.',
    icon: '💼',
    targetLevel: 'HSK 4+',
    category: 'Business',
    systemPrompt: 'You are an HR Manager at a major tech company. Conduct a formal job interview in Mandarin. Ask about work experience, skills, and why they want to work in China. Use formal HSK 4+ vocabulary.',
    startingMessage: '你好，很高兴认识你。请先简单地自我介绍一下，说说你的工作经历。 (Nǐ hǎo, hěn gāoxìng rènshi nǐ. Qǐng xiān jiǎndān de zìwǒ jièshào yíxià, shuōshuo nǐ de gōngzuò jīnglì. - Hello, nice to meet you. Please give a brief self-introduction and tell me about your work experience.)'
  },
  {
    id: 'doctor-visit',
    title: 'Visiting the Doctor',
    description: 'Expressing symptoms and understanding medical advice.',
    icon: '🏥',
    targetLevel: 'HSK 3',
    category: 'Daily Life',
    systemPrompt: 'You are a doctor in a Chinese hospital. The user feels unwell. Ask about their symptoms (fever, cough, etc.) and give advice on rest and medicine. Use HSK 3 vocabulary.',
    startingMessage: '你好，你哪里不舒服？发烧了吗？ (Nǐ hǎo, nǐ nǎlǐ bù shūfu? Fāshāo le ma? - Hello, where do you feel unwell? Do you have a fever?)'
  },
  {
    id: 'renting-apartment',
    title: 'Renting an Apartment',
    description: 'Negotiating rent and asking about facilities with a landlord.',
    icon: '🏠',
    targetLevel: 'HSK 3-4',
    category: 'Daily Life',
    systemPrompt: 'You are a landlord in Beijing. The user is interested in renting your apartment. Discuss the rent, utilities, and location. Be slightly firm but helpful. Use HSK 3-4 vocabulary.',
    startingMessage: '你好，你是来看房子的吗？这个房子每个月三千块，不包括水电费。 (Nǐ hǎo, nǐ shì lái kàn fángzi de ma? Zhè ge fángzi měi ge yuè sān qiān kuài, bù bāokuò shuǐdiànfèi. - Hello, are you here to see the house? It costs 3,000 yuan a month, excluding utilities.)'
  }
];
