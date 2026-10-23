import { SentenceBuilderChallenge } from '../types';

export const sentenceBuilderChallenges: SentenceBuilderChallenge[] = [
  // A1: PRESENT TENSE V2
  {
    id: 'sb-1',
    level: 'A1',
    category: 'Present Tense V2',
    targetEnglish: 'I learn German today.',
    targetUrdu: 'میں آج جرمن سیکھتا ہوں۔',
    targetRomanUrdu: 'Main aaj German seekhta hoon.',
    explanationEn: 'Verb Position 2 rule: You can start with "Ich" (Subject in P1, Verb in P2) OR "Heute" (Time in P1, Verb in P2, Subject in P3)! Both are completely correct German.',
    explanationUr: 'پوزیشن 2 کا سنہری قانون: آپ فاعل "Ich" سے بھی شروع کر سکتے ہیں (Ich lerne heute Deutsch) اور وقت "Heute" سے بھی (Heute lerne ich Deutsch)۔ دونوں میں فعل "lerne" پوزیشن 2 پر رہے گا!',
    explanationRomanUrdu: 'Verb Position 2 rule: Aap "Ich" se bhi shuru kar sakte hain (Ich lerne heute Deutsch) ya "Heute" se (Heute lerne ich Deutsch). Dono theek hain!',
    ruleHint: 'Keep the conjugated verb "lerne" strictly in Position 2.',
    availableWords: ['Ich', 'lerne', 'heute', 'Deutsch', 'Heute', 'lernt', 'wir'],
    acceptedSentences: [
      'Ich lerne heute Deutsch',
      'Heute lerne ich Deutsch'
    ]
  },
  {
    id: 'sb-2',
    level: 'A1',
    category: 'Questions (W & Ja/Nein)',
    targetEnglish: 'Where do you live?',
    targetUrdu: 'تم کہاں رہتے ہو؟',
    targetRomanUrdu: 'Tum kahan rehte ho?',
    explanationEn: 'In a W-Question: Question word "Wo" is in Position 1, followed immediately by conjugated verb "wohnst" in Position 2, followed by subject "du".',
    explanationUr: 'ڈبلیو سوال میں: سوالیہ لفظ "Wo" پوزیشن 1 پر آئے گا، اس کے فوراً بعد فعل "wohnst" پوزیشن 2 پر، اور آخر میں فاعل "du"۔',
    explanationRomanUrdu: 'W-Frage: Sawalia lafz "Wo" P1 par, verb "wohnst" P2 par, aur subject "du" baad mein.',
    ruleHint: 'Question word (Wo) + Verb (wohnst) + Subject (du)?',
    availableWords: ['Wo', 'wohnst', 'du', 'wohnen', 'Sie', 'woher'],
    acceptedSentences: [
      'Wo wohnst du',
      'Wo wohnst du?'
    ]
  },
  {
    id: 'sb-3',
    level: 'A1',
    category: 'Negation (nicht vs kein)',
    targetEnglish: 'I do not have a car.',
    targetUrdu: 'میرے پاس کوئی گاڑی نہیں ہے۔',
    targetRomanUrdu: 'Mere paas koi gaari nahi hai.',
    explanationEn: 'Use "kein" to negate a noun that would otherwise take an indefinite article. Auto is neuter (das Auto / ein Auto), so the accusative negation is "kein Auto".',
    explanationUr: 'اسم کی نفی کے لیے "kein" استعمال ہوتا ہے۔ چونکہ گاڑی نیوٹر ہے (das Auto) اس لیے "kein Auto" آئے گا، "nicht" نہیں۔',
    explanationRomanUrdu: 'Noun ki nafi ke liye "kein" lagta hai: Ich habe kein Auto.',
    ruleHint: 'Subject + habe + kein Auto.',
    availableWords: ['Ich', 'habe', 'kein', 'Auto', 'nicht', 'ein', 'hat'],
    acceptedSentences: [
      'Ich habe kein Auto',
      'Ich habe kein Auto.'
    ]
  },
  {
    id: 'sb-4',
    level: 'A1',
    category: 'Modal Verbs',
    targetEnglish: 'I can speak German.',
    targetUrdu: 'میں جرمن بول سکتا ہوں۔',
    targetRomanUrdu: 'Main German bol sakta hoon.',
    explanationEn: 'Modal verb bracket: The conjugated modal verb "kann" stays in Position 2, while the main action verb "sprechen" is placed at the VERY END in infinitive form!',
    explanationUr: 'ماڈل فعل کا بریکٹ: ماڈل فعل "kann" پوزیشن 2 پر رہے گا اور مرکزی فعل "sprechen" جملے کے بالکل آخر میں مصدری حالت میں جائے گا!',
    explanationRomanUrdu: 'Modal verb "kann" Position 2 par rahega, aur main verb "sprechen" bilkul aakhir mein aayega!',
    ruleHint: 'Subject (Ich) + modal (kann) + object (Deutsch) + infinitive at end (sprechen).',
    availableWords: ['Ich', 'kann', 'Deutsch', 'sprechen', 'spricht', 'können'],
    acceptedSentences: [
      'Ich kann Deutsch sprechen',
      'Ich kann Deutsch sprechen.'
    ]
  },

  // A2: SUBORDINATE & PERFEKT
  {
    id: 'sb-5',
    level: 'A2',
    category: 'Perfekt (Past)',
    targetEnglish: 'Ali played football yesterday.',
    targetUrdu: 'علی نے کل فٹ بال کھیلا تھا۔',
    targetRomanUrdu: 'Ali ne kal football khela tha.',
    explanationEn: 'Perfekt tense: Auxiliary "hat" is in Position 2, and the Partizip II "gespielt" goes to the very end.',
    explanationUr: 'پرفیکٹ ٹینس: فعلِ معاون "hat" پوزیشن 2 پر آئے گا اور Partizip II "gespielt" جملے کے بالکل آخر میں جائے گا۔',
    explanationRomanUrdu: 'Perfekt: Auxiliary "hat" P2 par aur Partizip II "gespielt" aakhir mein.',
    ruleHint: 'Ali + hat + gestern + Fußball + gespielt.',
    availableWords: ['Ali', 'hat', 'gestern', 'Fußball', 'gespielt', 'ist', 'spielt'],
    acceptedSentences: [
      'Ali hat gestern Fußball gespielt',
      'Ali hat gestern Fußball gespielt.',
      'Gestern hat Ali Fußball gespielt',
      'Gestern hat Ali Fußball gespielt.'
    ]
  },
  {
    id: 'sb-6',
    level: 'A2',
    category: 'Subordinate Clauses (weil/dass/wenn)',
    targetEnglish: 'I learn German because I want to study in Germany.',
    targetUrdu: 'میں جرمن سیکھتا ہوں کیونکہ میں جرمنی میں پڑھنا چاہتا ہوں۔',
    targetRomanUrdu: 'Main German seekhta hoon kyunki main Germany mein parhna chahta hoon.',
    explanationEn: 'In a weil-clause, the conjugated modal verb "möchte" is kicked all the way to the very end after the infinitive "studieren"!',
    explanationUr: 'ذیلی جملے (weil) میں گردان شدہ فعل "möchte" جملے کے بالکل آخر میں مصدری فعل کے بعد آئے گا!',
    explanationRomanUrdu: 'weil clause mein conjugated verb "möchte" bilkul aakhir mein chala jaata hai!',
    ruleHint: 'Main clause + weil + ich + in Deutschland + studieren + möchte.',
    availableWords: ['Ich', 'lerne', 'Deutsch,', 'weil', 'ich', 'in Deutschland', 'studieren', 'möchte.', 'möchte', 'lernt'],
    acceptedSentences: [
      'Ich lerne Deutsch, weil ich in Deutschland studieren möchte',
      'Ich lerne Deutsch, weil ich in Deutschland studieren möchte.'
    ]
  },

  // B1: RELATIVE CLAUSE & KONJUNKTIV II
  {
    id: 'sb-7',
    level: 'B1',
    category: 'Relative Clauses',
    targetEnglish: 'That is the man who helped me.',
    targetUrdu: 'یہ وہ آدمی ہے جس نے میری مدد کی تھی۔',
    targetRomanUrdu: 'Yeh woh aadmi hai jis ne meri madad ki thi.',
    explanationEn: 'The relative pronoun for masculine subject is "der", and the auxiliary "hat" is placed at the very end of the relative clause.',
    explanationUr: 'مذکر فاعل کے لیے موصولی اسم "der" ہے اور ریلیٹو کلاز کا فعل "hat" جملے کے آخر میں جائے گا۔',
    explanationRomanUrdu: 'Masculine relative pronoun "der" hai aur verb "hat" relative clause ke aakhir mein aayega.',
    ruleHint: 'Das ist der Mann, der mir geholfen hat.',
    availableWords: ['Das', 'ist', 'der Mann,', 'der', 'mir', 'geholfen', 'hat.', 'den', 'dem'],
    acceptedSentences: [
      'Das ist der Mann, der mir geholfen hat',
      'Das ist der Mann, der mir geholfen hat.'
    ]
  },
  {
    id: 'sb-8',
    level: 'B1',
    category: 'Konjunktiv II',
    targetEnglish: 'Could you please help me?',
    targetUrdu: 'کیا آپ ازراہِ کرم میری مدد کر سکتے ہیں؟',
    targetRomanUrdu: 'Kya aap azraah-e-karam meri madad kar sakte hain?',
    explanationEn: 'Polite request with Konjunktiv II: "Könnten Sie" in Position 1 (question) and the infinitive "helfen" at the end.',
    explanationUr: 'شائستہ درخواست: "Könnten Sie" شروع میں اور مصدری فعل "helfen" آخر میں۔',
    explanationRomanUrdu: 'Polite request: Könnten Sie mir bitte helfen?',
    ruleHint: 'Könnten Sie + mir + bitte + helfen?',
    availableWords: ['Könnten', 'Sie', 'mir', 'bitte', 'helfen?', 'Können', 'helfe', 'mich'],
    acceptedSentences: [
      'Könnten Sie mir bitte helfen?',
      'Könnten Sie mir bitte helfen'
    ]
  },

  // B2: PASSIVE VOICE
  {
    id: 'sb-9',
    level: 'B2',
    category: 'Passive Voice',
    targetEnglish: 'The problem is being solved immediately.',
    targetUrdu: 'مسئلہ فوراً حل کیا جا رہا ہے۔',
    targetRomanUrdu: 'Masla foran hal kiya ja raha hai.',
    explanationEn: 'Process Passive (Vorgangspassiv): Subject "Das Problem" + "wird" in Position 2 + adverb "sofort" + Partizip II "gelöst" at the end.',
    explanationUr: 'ورگانگس پاسیو: فاعل "Das Problem" + پوزیشن 2 پر "wird" + صفت "sofort" + آخر میں Partizip II "gelöst"۔',
    explanationRomanUrdu: 'Vorgangspassiv: Das Problem wird sofort gelöst.',
    ruleHint: 'Das Problem + wird + sofort + gelöst.',
    availableWords: ['Das Problem', 'wird', 'sofort', 'gelöst.', 'wurde', 'gelöst', 'hat'],
    acceptedSentences: [
      'Das Problem wird sofort gelöst',
      'Das Problem wird sofort gelöst.'
    ]
  }
];
