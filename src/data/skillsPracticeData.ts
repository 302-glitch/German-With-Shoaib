import { ReadingExercise, WritingExercise, SpeakingExercise, GoetheResourceItem } from '../types';

export const readingExercisesData: ReadingExercise[] = [
  {
    id: 'read-a1-1',
    level: 'A1',
    title: 'Mein Name ist Ali aus Lahore (A1 Reading)',
    titleUrdu: 'میرا نام علی ہے اور میرا تعلق لاہور سے ہے',
    germanText: 'Hallo! Mein Name ist Ali Khan. Ich bin 22 Jahre alt und komme aus Pakistan. Jetzt wohne ich in Berlin. Ich bin Student und studiere Informatik an der Technischen Universität. Ich lerne jeden Tag Deutsch, weil ich mit meinen deutschen Freunden sprechen möchte. Am Wochenende koche ich gerne pakistanisches Essen für meine Mitbewohner. Meine Muttersprache ist Urdu, aber ich spreche auch gut Englisch und ein bisschen Deutsch.',
    englishTranslation: 'Hello! My name is Ali Khan. I am 22 years old and come from Pakistan. Now I live in Berlin. I am a student and study computer science at the Technical University. I learn German every day because I want to speak with my German friends. On the weekend I like to cook Pakistani food for my flatmates. My mother tongue is Urdu, but I also speak good English and a little German.',
    urduTranslation: 'ہیلو! میرا نام علی خان ہے۔ میری عمر 22 سال ہے اور میرا تعلق پاکستان سے ہے۔ اب میں برلن میں رہتا ہوں۔ میں ایک طالب علم ہوں اور ٹیکنیکل یونیورسٹی میں کمپیوٹر سائنس پڑھ رہا ہوں۔ میں روزانہ جرمن زبان سیکھتا ہوں کیونکہ میں اپنے جرمن دوستوں سے بات کرنا چاہتا ہوں۔ ویک اینڈ پر میں اپنے فلیٹ کے ساتھیوں کے لیے مزے دار پاکستانی کھانا بناتا ہوں۔ میری مادری زبان اردو ہے، لیکن میں اچھی انگریزی اور تھوڑی جرمن بھی بولتا ہوں۔',
    vocabularyGlossary: [
      { word: 'Informatik', meaningEn: 'Computer Science', meaningUr: 'کمپیوٹر سائنس' },
      { word: 'Mitbewohner', meaningEn: 'Flatmates / Roommates', meaningUr: 'ساتھ رہنے والے دوست' },
      { word: 'Muttersprache', meaningEn: 'Mother tongue / Native language', meaningUr: 'مادری زبان' },
      { word: 'kochen', meaningEn: 'To cook', meaningUr: 'کھانا پکانا' }
    ],
    questions: [
      {
        id: 'rq-1',
        questionEn: 'Where does Ali live right now?',
        questionUrdu: 'علی اس وقت کہاں رہتا ہے؟',
        options: ['Lahore', 'Frankfurt', 'Berlin', 'Munich'],
        correctIndex: 2,
        explanationEn: 'The text states: "Jetzt wohne ich in Berlin."',
        explanationUr: 'عبارت میں لکھا ہے: "Jetzt wohne ich in Berlin" (اب میں برلن میں رہتا ہوں)۔'
      },
      {
        id: 'rq-2',
        questionEn: 'What is Ali\'s native language?',
        questionUrdu: 'علی کی مادری زبان کون سی ہے؟',
        options: ['English', 'German', 'Urdu', 'Punjabi'],
        correctIndex: 2,
        explanationEn: 'The text states: "Meine Muttersprache ist Urdu."',
        explanationUr: 'عبارت میں لکھا ہے: "Meine Muttersprache ist Urdu" (میری مادری زبان اردو ہے)۔'
      }
    ]
  },
  {
    id: 'read-a2-1',
    level: 'A2',
    title: 'Ein Tag auf der Wohnungssuche in Deutschland (A2 Reading)',
    titleUrdu: 'جرمنی میں فلیٹ کی تلاش کا ایک دن',
    germanText: 'Gestern hatte Fatima einen wichtigen Termin. Sie sucht seit zwei Monaten eine kleine Wohnung in München. Um 14 Uhr hat sie eine helle 2-Zimmer-Wohnung besichtigt. Die Wohnung liegt im dritten Stock und hat einen schönen Balkon. Die Miete beträgt 650 Euro warm. Die Vermieterin war sehr freundlich und hat gesagt: "Ihre Bewerbungsunterlagen sind komplett. Ich melde mich bis Freitag."',
    englishTranslation: 'Yesterday Fatima had an important appointment. She has been looking for a small apartment in Munich for two months. At 2:00 PM she viewed a bright 2-room apartment. The apartment is on the third floor and has a nice balcony. The rent is 650 euros warm (including heating). The landlady was very friendly and said: "Your application documents are complete. I will get in touch by Friday."',
    urduTranslation: 'کل فاطمہ کی ایک اہم ملاقات تھی۔ وہ دو ماہ سے میونخ میں ایک چھوٹا فلیٹ تلاش کر رہی ہیں۔ دوپہر 2 بجے انہوں نے ایک روشن دو کمروں کا فلیٹ دیکھا۔ فلیٹ تیسری منزل پر ہے اور اس کے ساتھ ایک خوبصورت بالکونی ہے۔ کرایہ 650 یورو وارم (بمعہ ہیٹنگ) ہے۔ فلیٹ کی مالکن بہت اخلاق سے پیش آئیں اور انہوں نے کہا: "آپ کی فائل مکمل ہے۔ میں جمعہ تک آپ کو مطلع کروں گی۔"',
    vocabularyGlossary: [
      { word: 'Wohnungssuche', meaningEn: 'Apartment search', meaningUr: 'رہائش کی تلاش' },
      { word: 'besichtigen', meaningEn: 'To view / inspect', meaningUr: 'معائنہ کرنا / دیکھنا' },
      { word: 'Warmmiete', meaningEn: 'Rent including utilities/heating', meaningUr: 'مکمل کرایہ بمعہ ہیٹنگ' },
      { word: 'Vermieterin', meaningEn: 'Landlady', meaningUr: 'فلیٹ کی مالکن' }
    ],
    questions: [
      {
        id: 'rq-a2-1',
        questionEn: 'How much is the total warm rent for the apartment?',
        questionUrdu: 'فلیٹ کا کل ماہانہ کرایہ کتنا ہے؟',
        options: ['500 Euro', '650 Euro', '750 Euro', '800 Euro'],
        correctIndex: 1,
        explanationEn: 'The passage explicitly mentions: "Die Miete beträgt 650 Euro warm."',
        explanationUr: 'عبارت میں صاف لکھا ہے: 650 یورو وارم۔'
      }
    ]
  }
];

export const writingExercisesData: WritingExercise[] = [
  {
    id: 'write-a1-1',
    level: 'A1',
    title: 'Informal Email: Invitation to a Birthday Party',
    format: 'informal-email',
    promptEn: 'You are celebrating your birthday next Saturday. Write an informal email (approx. 30 words) to your friend Max.',
    promptUr: 'آپ اگلے ہفتے اپنی سالگرہ منا رہے ہیں۔ اپنے دوست میکس کو تقریباً 30 الفاظ کی ایک مختصر ای میل لکھیں۔',
    promptRomanUrdu: 'Aap agle hafte apni saalgirah mana rahe hain. Apne dost Max ko aik mukhtasir email likhein.',
    requiredPoints: [
      'State the reason for writing (Birthday celebration)',
      'Specify date and time (e.g. Saturday at 18:00)',
      'Ask if he can come and bring something'
    ],
    usefulPhrases: [
      { german: 'Lieber Max, / Liebe Sarah,', meaningEn: 'Dear Max / Dear Sarah (informal opening)', meaningUr: 'پیارے دوست میکس (بے تکلف شروعات)' },
      { german: 'Ich lade dich herzlich ein.', meaningEn: 'I warmly invite you.', meaningUr: 'میں تمہیں دلی دعوت دیتا ہوں۔' },
      { german: 'Die Party beginnt um...', meaningEn: 'The party begins at...', meaningUr: 'پارٹی اس وقت شروع ہوگی...' },
      { german: 'Gib mir bitte Bescheid.', meaningEn: 'Please let me know.', meaningUr: 'براہِ کرم مجھے اطلاع دو۔' },
      { german: 'Viele Grüße,', meaningEn: 'Best regards (informal closing)', meaningUr: 'نیک تمناؤں کے ساتھ' }
    ],
    checklist: [
      'Informal greeting used (Lieber... / Liebe...)',
      'All 3 required points addressed',
      'Verbs conjugated correctly in Position 2',
      'Friendly closing formula and first name included'
    ],
    modelAnswer: 'Lieber Max,\n\nich habe am nächsten Samstag Geburtstag und mache eine Party. Die Feier beginnt um 18:00 Uhr bei mir zu Hause. Hast du Zeit? Kannst du bitte Saft mitbringen?\n\nViele Grüße,\nAli',
    wordCountTarget: { min: 25, max: 45 }
  },
  {
    id: 'write-b1-1',
    level: 'B1',
    title: 'Formal Email: Inquiring about a German Language Course',
    format: 'formal-email',
    promptEn: 'You want to register for a B2 intensive German course. Write a formal email to the language school office.',
    promptUr: 'آپ ایک بی 2 جرمن لینگویج کورس میں داخلہ لینا چاہتے ہیں۔ لینگویج اسکول کے دفتر کو باادب دفتری ای میل لکھیں۔',
    promptRomanUrdu: 'Aap B2 German course mein dakhlay ke liye formal email likhein.',
    requiredPoints: [
      'Reason for writing (Course enrollment)',
      'Your current German level (B1 completed)',
      'Ask about start dates, schedule, and fees'
    ],
    usefulPhrases: [
      { german: 'Sehr geehrte Damen und Herren,', meaningEn: 'Dear Sir or Madam (Standard formal greeting)', meaningUr: 'محترم خواتین و حضرات (باادب شروعات)' },
      { german: 'Ich interessiere mich für...', meaningEn: 'I am interested in...', meaningUr: 'میں اس میں دلچسپی رکھتا ہوں...' },
      { german: 'Könnten Sie mir bitte mitteilen...', meaningEn: 'Could you please inform me...', meaningUr: 'کیا آپ مجھے آگاہ کر سکتے ہیں...' },
      { german: 'Mit freundlichen Grüßen,', meaningEn: 'Yours sincerely / Best regards', meaningUr: 'مخلصانہ آداب کے ساتھ' }
    ],
    checklist: [
      'Formal salutation with comma and lowercase first word next line',
      'Polite Konjunktiv II request used',
      'All 3 points covered clearly',
      'Formal closing formula and full name'
    ],
    modelAnswer: 'Sehr geehrte Damen und Herren,\n\nich interessiere mich sehr für Ihren B2-Intensivkurs. Ich habe vor kurzem mein B1-Zertifikat mit der Note "Gut" bestanden.\n\nKönnten Sie mir bitte Informationen über die nächsten Starttermine und die Kursgebühren zusenden? Findet der Unterricht vormittags oder nachmittags statt?\n\nIch freue mich auf Ihre Rückmeldung.\n\nMit freundlichen Grüßen,\nMuhammad Ali',
    wordCountTarget: { min: 70, max: 100 }
  }
];

export const speakingExercisesData: SpeakingExercise[] = [
  {
    id: 'speak-a1-1',
    level: 'A1',
    title: 'Self-Introduction (Sich vorstellen)',
    situationEn: 'You are introducing yourself in the Goethe A1 speaking exam (Part 1).',
    situationUr: 'گوئٹے اے 1 بولنے کے امتحان (حصہ اول) میں اپنا تعارف کروانا۔',
    roleplayPrompt: 'Introduce yourself mentioning your Name, Age, Country of Origin, Living City, Languages, and Hobby. Spell your last name when asked.',
    modelAudioText: 'Guten Tag. Ich heiße Ali Khan. Ich bin zweiundzwanzig Jahre alt. Ich komme aus Pakistan und wohne jetzt in Berlin. Ich spreche Urdu, Englisch und ein bisschen Deutsch. Mein Hobby ist Fußball spielen.',
    keyPhrases: [
      { german: 'Ich heiße...', meaningEn: 'My name is...', meaningUr: 'میرا نام ہے...' },
      { german: 'Ich komme aus...', meaningEn: 'I come from...', meaningUr: 'میرا تعلق ہے...' },
      { german: 'Ich wohne in...', meaningEn: 'I live in...', meaningUr: 'میں رہتا ہوں...' },
      { german: 'Meine Hobbys sind...', meaningEn: 'My hobbies are...', meaningUr: 'میرے مشاغل ہیں...' }
    ],
    timerSeconds: 60
  },
  {
    id: 'speak-a1-2',
    level: 'A1',
    title: 'Ordering at a German Bakery (Bäckerei)',
    situationEn: 'You are entering a traditional bakery in Germany to buy bread rolls and a coffee.',
    situationUr: 'جرمنی کی ایک بیکری میں جا کر بریڈ رولز اور کافی خریدنا۔',
    roleplayPrompt: 'Greet the baker, order two Brötchen and one coffee, ask for the total price, pay, and say goodbye.',
    modelAudioText: 'Guten Morgen! Ich hätte gern zwei Brötchen und einen Kaffee mit Milch, bitte. Was kostet das zusammen? Hier sind fünf Euro. Vielen Dank und einen schönen Tag! Tschüss!',
    keyPhrases: [
      { german: 'Ich hätte gern...', meaningEn: 'I would like to have...', meaningUr: 'مجھے یہ چاہیے ہوگا...' },
      { german: 'Was kostet das zusammen?', meaningEn: 'How much is that in total?', meaningUr: 'کل ملا کر کتنے پیسے ہوئے؟' },
      { german: 'Stimmt so.', meaningEn: 'Keep the change.', meaningUr: 'باقی پیسے رہنے دیں۔' }
    ],
    timerSeconds: 60
  }
];

export const goetheResourcesData: GoetheResourceItem[] = [
  {
    id: 'goethe-a1-official',
    level: 'A1',
    title: 'Goethe-Zertifikat A1: Start Deutsch 1 (Official Portal)',
    publisher: 'Goethe-Institut e.V.',
    type: 'Official Exam Guideline',
    officialUrl: 'https://www.goethe.de/de/spr/kup/prf/prf/sd1.html',
    descriptionEn: 'The official Goethe-Institut overview for the Start Deutsch 1 exam, including exam requirements, rules, and local test center dates.',
    descriptionUr: 'گوئٹے انسٹیٹیوٹ کا سرکاری پورٹل برائے Start Deutsch 1 امتحان، جس میں ٹیسٹ سنٹرز اور ضروری ہدایات شامل ہیں۔',
    isExternalOfficial: true
  },
  {
    id: 'goethe-a1-model-test',
    level: 'A1',
    title: 'Official Goethe A1 Practice & Model Papers',
    publisher: 'Goethe-Institut e.V.',
    type: 'Free Model Test',
    officialUrl: 'https://www.goethe.de/de/spr/kup/prf/prf/sd1/ueb.html',
    descriptionEn: 'Official accessible model tests with original audio files and answer keys directly provided by the Goethe-Institut for free practice.',
    descriptionUr: 'گوئٹے انسٹیٹیوٹ کے سرکاری نمونہ امتحانی پرچے معہ اصل آڈیو فائلز اور حل شدہ جوابات۔',
    isExternalOfficial: true
  },
  {
    id: 'goethe-a2-official',
    level: 'A2',
    title: 'Goethe-Zertifikat A2 Overview & Practice Materials',
    publisher: 'Goethe-Institut e.V.',
    type: 'Official Exam Guideline',
    officialUrl: 'https://www.goethe.de/de/spr/kup/prf/prf/gzA2.html',
    descriptionEn: 'Official description of the Goethe-Zertifikat A2 exam, sample tests, and audio exercises.',
    descriptionUr: 'اے 2 سرٹیفیکیٹ کی سرکاری معلومات، ماڈل پیپرز اور آڈیو مشقیں۔',
    isExternalOfficial: true
  },
  {
    id: 'goethe-b1-official',
    level: 'B1',
    title: 'Goethe-Zertifikat B1 Modular Examination Portal',
    publisher: 'Goethe-Institut e.V.',
    type: 'Official Exam Guideline',
    officialUrl: 'https://www.goethe.de/de/spr/kup/prf/prf/gzb1.html',
    descriptionEn: 'Detailed guidelines on the 4 modular sections of the B1 exam: Reading, Listening, Writing, and Speaking.',
    descriptionUr: 'بی 1 امتحان کے چاروں الگ الگ ماڈیولز (پڑھنا، سننا، لکھنا اور بولنا) کی سرکاری گائیڈ۔',
    isExternalOfficial: true
  },
  {
    id: 'goethe-b2-official',
    level: 'B2',
    title: 'Goethe-Zertifikat B2 Advanced Examination Portal',
    publisher: 'Goethe-Institut e.V.',
    type: 'Official Exam Guideline',
    officialUrl: 'https://www.goethe.de/de/spr/kup/prf/prf/gzb2.html',
    descriptionEn: 'Official B2 examination requirements for university admission and healthcare/work visa recognition in Germany.',
    descriptionUr: 'جرمنی میں یونیورسٹی داخلے اور ویزا کے لیے بی 2 امتحان کی سرکاری تفصیلات۔',
    isExternalOfficial: true
  }
];
