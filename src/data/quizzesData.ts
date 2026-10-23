import { QuizQuestion } from '../types';

export const quizzesData: Record<string, { title: string; level: string; description: string; timeLimitMinutes: number; questions: QuizQuestion[] }> = {
  'quiz-a1-basics': {
    title: 'A1 Starter Quiz: Alphabet, Greetings & Articles',
    level: 'A1',
    description: 'Test your foundational knowledge of German sounds, daily greetings, and noun genders.',
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1-1',
        type: 'select-article',
        level: 'A1',
        topic: 'Articles',
        promptEn: 'What is the correct definite article for "Buch" (book)?',
        promptUr: 'لفظ "Buch" (کتاب) کا درست آرٹیکل کیا ہے؟',
        promptRomanUrdu: 'Lafz "Buch" (kitab) ka durust article kya hai?',
        options: ['der', 'die', 'das', 'den'],
        correctAnswer: 'das',
        explanationEn: '"Buch" is grammatically neuter in German: das Buch.',
        explanationUr: 'جرمن میں کتاب (Buch) نیوٹر جنس رکھتی ہے: das Buch۔',
        explanationRomanUrdu: 'German mein kitab (Buch) neuter hai: das Buch.'
      },
      {
        id: 'q1-2',
        type: 'multiple-choice',
        level: 'A1',
        topic: 'Pronunciation',
        promptEn: 'How is the letter "W" pronounced in standard German words like "Wasser"?',
        promptUr: 'جرمن لفظ "Wasser" میں حرف "W" کیسے ادا کیا جاتا ہے؟',
        promptRomanUrdu: 'German lafz "Wasser" mein letter "W" kaisay pronounce hota hai?',
        options: ['Like English "W" (round lips)', 'Like English "V" (teeth on lower lip)', 'Like English "B"', 'Like English "J"'],
        correctAnswer: 'Like English "V" (teeth on lower lip)',
        explanationEn: 'In German, "W" is always pronounced like the English "V" (e.g. Wasser sounds like Vasser).',
        explanationUr: 'جرمن میں "W" ہمیشہ انگریزی "V" کی طرح بولا جاتا ہے (دانت نیچے کے ہونٹ پر رکھ کر)۔',
        explanationRomanUrdu: 'German mein "W" hamesha English "V" ki tarah bola jaata hai.'
      },
      {
        id: 'q1-3',
        type: 'multiple-choice',
        level: 'A1',
        topic: 'Verb Conjugation',
        promptEn: 'Complete the sentence: "Ich ____ aus Pakistan."',
        promptUr: 'جملہ مکمل کریں: "Ich ____ aus Pakistan."',
        promptRomanUrdu: 'Jumla mukammal karein: "Ich ____ aus Pakistan."',
        options: ['kommt', 'komme', 'kommen', 'kommst'],
        correctAnswer: 'komme',
        explanationEn: 'The regular verb ending for "ich" is "-e": Ich komme.',
        explanationUr: 'فاعل "ich" کے ساتھ فعل کا لاحقہ ہمیشہ "-e" ہوتا ہے: Ich komme۔',
        explanationRomanUrdu: 'Subject "ich" ke sath ending "-e" aati hai: Ich komme.'
      },
      {
        id: 'q1-4',
        type: 'true-false',
        level: 'A1',
        topic: 'Nouns',
        promptEn: 'True or False: In German, all nouns must be capitalized, regardless of their position in the sentence.',
        promptUr: 'درست یا غلط: جرمن میں ہر اسم (Noun) کا پہلا حرف بڑا (Capital) لکھا جاتا ہے۔',
        promptRomanUrdu: 'Durust ya Ghalat: German mein har noun capital likha jaata hai.',
        options: ['True (درست)', 'False (غلط)'],
        correctAnswer: 'True (درست)',
        explanationEn: 'In German, every single noun begins with a capital letter, even in the middle of a sentence.',
        explanationUr: 'جرمن میں ہر اسم کا پہلا حرف ہمیشہ بڑا لکھا جاتا ہے۔',
        explanationRomanUrdu: 'German mein har noun ka pehla letter capital hota hai.'
      },
      {
        id: 'q1-5',
        type: 'fill-blank',
        level: 'A1',
        topic: 'Numbers',
        promptEn: 'What is the German word for the number 12?',
        promptUr: 'گنتی کے عدد 12 کو جرمن میں کیا کہتے ہیں؟',
        promptRomanUrdu: 'Number 12 ko German mein kya kehte hain?',
        options: ['zehn', 'elf', 'zwölf', 'zwanzig'],
        correctAnswer: 'zwölf',
        explanationEn: '12 is "zwölf" (pronounced [tsvölf]).',
        explanationUr: 'عدد 12 کو جرمن میں "zwölf" کہتے ہیں۔',
        explanationRomanUrdu: '12 ko German mein "zwölf" kehte hain.'
      }
    ]
  },
  'quiz-a1-mock-exam': {
    title: 'Goethe-Zertifikat A1 Timed Mock Examination',
    level: 'A1',
    description: 'Realistic Goethe Start Deutsch 1 practice covering grammar, syntax, everyday dialogue comprehension, and vocabulary.',
    timeLimitMinutes: 20,
    questions: [
      {
        id: 'a1m-1',
        type: 'multiple-choice',
        level: 'A1',
        topic: 'Sentence Structure',
        promptEn: 'Which sentence has the correct German word order?',
        promptUr: 'کس جملے میں الفاظ کی ترتیب درست ہے؟',
        promptRomanUrdu: 'Kis jumlay mein alfaaz ki tarteeb theek hai?',
        options: [
          'Heute ich lerne Deutsch zu Hause.',
          'Heute lerne ich Deutsch zu Hause.',
          'Heute lerne Deutsch ich zu Hause.',
          'Ich heute lerne Deutsch zu Hause.'
        ],
        correctAnswer: 'Heute lerne ich Deutsch zu Hause.',
        explanationEn: 'Verb Position 2 rule: When "Heute" takes Position 1, the conjugated verb "lerne" MUST be in Position 2, and the subject "ich" inverts to Position 3.',
        explanationUr: 'پوزیشن 2 کا قانون: جب "Heute" شروع میں آئے تو فعل "lerne" لازمی دوسری پوزیشن پر ہوگا اور فاعل "ich" تیسری پوزیشن پر۔',
        explanationRomanUrdu: 'Verb Position 2 rule: Heute (P1) + lerne (P2 Verb) + ich (P3 Subject).'
      },
      {
        id: 'a1m-2',
        type: 'multiple-choice',
        level: 'A1',
        topic: 'Accusative Case',
        promptEn: 'Choose the correct sentence: "Ich kaufe ____ Tisch." (der Tisch, masculine)',
        promptUr: 'درست جملہ منتخب کریں: میز مذکر ہے',
        promptRomanUrdu: 'Durust jumla chunein: Mez masculine hai',
        options: ['ein', 'einen', 'eine', 'einem'],
        correctAnswer: 'einen',
        explanationEn: 'Tisch is masculine (der Tisch). As the direct object in the Accusative case, "ein" becomes "einen".',
        explanationUr: 'میز مذکر ہے (der Tisch)۔ اکیوزیٹو میں مذکر ein سے بدل کر "einen" بنتا ہے۔',
        explanationRomanUrdu: 'Masculine accusative direct object mein "einen" banta hai.'
      },
      {
        id: 'a1m-3',
        type: 'multiple-choice',
        level: 'A1',
        topic: 'Modal Verbs',
        promptEn: 'Fill the blank: "Wir ____ heute nicht ins Kino gehen."',
        promptUr: 'خالی جگہ پر کریں: ہم آج نہیں جا سکتے',
        promptRomanUrdu: 'Khali jagah pur karein: Hum aaj nahi jaa sakte',
        options: ['kann', 'können', 'kannst', 'könnt'],
        correctAnswer: 'können',
        explanationEn: 'The plural pronoun "wir" takes the regular modal plural form "können".',
        explanationUr: 'فاعل "wir" کے ساتھ ماڈل فعل "können" آئے گا۔',
        explanationRomanUrdu: 'Subject "wir" ke sath "können" aata hai.'
      },
      {
        id: 'a1m-4',
        type: 'multiple-choice',
        level: 'A1',
        topic: 'Personal Pronouns',
        promptEn: 'What is the formal respectful German word for "You" (Aap / آپ)?',
        promptUr: 'باادب "آپ" کے لیے جرمن لفظ کیا ہے؟',
        promptRomanUrdu: 'Ba-adab "Aap" ke liye German lafz kya hai?',
        options: ['du', 'ihr', 'Sie (with capital S)', 'sie (with lowercase s)'],
        correctAnswer: 'Sie (with capital S)',
        explanationEn: 'Formal "You" in German is always capitalized: "Sie".',
        explanationUr: 'باادب "آپ" ہمیشہ بڑے حرف سے لکھا جاتا ہے: "Sie"۔',
        explanationRomanUrdu: 'Respectful "Aap" hamesha capital "Sie" hota hai.'
      },
      {
        id: 'a1m-5',
        type: 'multiple-choice',
        level: 'A1',
        topic: 'Everyday Dialogue',
        promptEn: 'At 8:00 AM, how do you greet your colleague politely?',
        promptUr: 'صبح 8 بجے اپنے ساتھی کو کیسے سلام کریں گے؟',
        promptRomanUrdu: 'Subah 8 baje apne colleague ko kaise greet karein gay?',
        options: ['Gute Nacht!', 'Guten Abend!', 'Guten Morgen!', 'Auf Wiedersehen!'],
        correctAnswer: 'Guten Morgen!',
        explanationEn: '"Guten Morgen!" is used until approximately 11:00 AM.',
        explanationUr: 'صبح 11 بجے تک "Guten Morgen!" بولا جاتا ہے۔',
        explanationRomanUrdu: 'Subah 11 baje tak "Guten Morgen!" bola jaata hai.'
      }
    ]
  },
  'quiz-a2-mastery': {
    title: 'A2 Comprehensive Exam: Perfekt & Prepositions',
    level: 'A2',
    description: 'Test your mastery of past tense, two-way prepositions, and subordinate clauses.',
    timeLimitMinutes: 15,
    questions: [
      {
        id: 'a2-q1',
        type: 'multiple-choice',
        level: 'A2',
        topic: 'Perfekt Tense',
        promptEn: 'Which auxiliary verb is used for "fliegen" (to fly)? "Wir ____ nach Frankfurt geflogen."',
        promptUr: 'فعلِ fliegen میں کون سا فعلِ معاون آئے گا؟',
        promptRomanUrdu: 'fliegen ke sath konsa auxiliary verb aayega?',
        options: ['haben', 'sind', 'hat', 'ist'],
        correctAnswer: 'sind',
        explanationEn: 'Fliegen involves movement from one place to another; it requires "sein": Wir sind geflogen.',
        explanationUr: 'پرواز کرنے میں جگہ بدلتی ہے اس لیے فعلِ معاون "sein" (sind) آئے گا۔',
        explanationRomanUrdu: 'Movement ke liye auxiliary "sein" aayega: Wir sind geflogen.'
      },
      {
        id: 'a2-q2',
        type: 'multiple-choice',
        level: 'A2',
        topic: 'Wechselpräpositionen',
        promptEn: '"Das Bild hängt an ____ Wand." (Wo? Location = Dativ; die Wand, feminine)',
        promptUr: 'تصویر دیوار پر لٹکی ہوئی ہے (ساکن حالت = Dativ)',
        promptRomanUrdu: 'Tasweer deewar par latki hai (Wo = Dativ)',
        options: ['die', 'der', 'dem', 'den'],
        correctAnswer: 'der',
        explanationEn: 'The question is "Wo?" (Location), which requires Dative. Feminine "die Wand" becomes "der Wand".',
        explanationUr: 'سوال "Wo?" (کہاں؟) ہے جس میں ڈیٹیو آتا ہے۔ مونث die Wand بدل کر "der Wand" بنتی ہے۔',
        explanationRomanUrdu: 'Wo = Dativ. Feminine die Wand banta hai "der Wand".'
      },
      {
        id: 'a2-q3',
        type: 'multiple-choice',
        level: 'A2',
        topic: 'Subordinate Clauses',
        promptEn: 'Choose the correct sentence with "weil":',
        promptUr: 'لفظ "weil" کے ساتھ درست جملہ منتخب کریں:',
        promptRomanUrdu: 'Lafz "weil" ke sath theek jumla chunein:',
        options: [
          'Er bleibt zu Hause, weil er ist müde.',
          'Er bleibt zu Hause, weil er müde ist.',
          'Er bleibt zu Hause, weil ist er müde.',
          'Er bleibt zu Hause, weil müde er ist.'
        ],
        correctAnswer: 'Er bleibt zu Hause, weil er müde ist.',
        explanationEn: 'In subordinate clauses introduced by "weil", the conjugated verb "ist" goes to the very end.',
        explanationUr: 'ذیلی جملے "weil" میں فعل "ist" جملے کے سب سے آخر میں جائے گا۔',
        explanationRomanUrdu: 'weil clause mein verb "ist" bilkul aakhir mein aayega.'
      }
    ]
  },
  'quiz-b1-exam': {
    title: 'B1 Fluency & Goethe Practice Test',
    level: 'B1',
    description: 'Evaluate relative clauses, Konjunktiv II, and infinitive constructions.',
    timeLimitMinutes: 15,
    questions: [
      {
        id: 'b1-q1',
        type: 'multiple-choice',
        level: 'B1',
        topic: 'Konjunktiv II',
        promptEn: 'How do you formulate a very polite request? "____ Sie mir bitte das Salz reichen?"',
        promptUr: 'انتہائی شائستہ درخواست کیسے بنائیں گے؟',
        promptRomanUrdu: 'Bohat polite request kaise banayein gay?',
        options: ['Können', 'Könnten', 'Müssen', 'Wollen'],
        correctAnswer: 'Könnten',
        explanationEn: '"Könnten Sie..." is the polite subjunctive form (Konjunktiv II) expected at B1 level.',
        explanationUr: '"Könnten Sie..." شائستہ انداز کی علامت ہے جو B1 لیول پر درکار ہوتا ہے۔',
        explanationRomanUrdu: '"Könnten Sie..." nihayat ba-adab Konjunktiv II form hai.'
      },
      {
        id: 'b1-q2',
        type: 'multiple-choice',
        level: 'B1',
        topic: 'Infinitive Constructions',
        promptEn: 'Complete with purpose: "Ich lerne Deutsch, um in Deutschland ____."',
        promptUr: 'مقصد کا اظہار مکمل کریں: um ... zu',
        promptRomanUrdu: 'Maqsad ka izhaar mukammal karein',
        options: ['studieren', 'zu studieren', 'studiere', 'gestudiert'],
        correctAnswer: 'zu studieren',
        explanationEn: 'The construction "um ... zu" requires "zu + Infinitive": um in Deutschland zu studieren.',
        explanationUr: '"um ... zu" میں آخر میں zu + Infinitive آتا ہے: zu studieren۔',
        explanationRomanUrdu: '"um ... zu" mein aakhir mein zu + Infinitive lagta hai.'
      }
    ]
  },
  'quiz-b2-exam': {
    title: 'B2 Advanced & Professional Assessment',
    level: 'B2',
    description: 'Challenging questions on Passive voice, nominalization, and academic German connectors.',
    timeLimitMinutes: 15,
    questions: [
      {
        id: 'b2-q1',
        type: 'multiple-choice',
        level: 'B2',
        topic: 'Passive Voice',
        promptEn: 'Identify the correct passive sentence for: "Die Firma entwickelt eine neue App."',
        promptUr: 'مجہول جملہ منتخب کریں (Passive Voice):',
        promptRomanUrdu: 'Durust passive jumla chunein:',
        options: [
          'Eine neue App wird von der Firma entwickelt.',
          'Eine neue App ist von der Firma entwickeln.',
          'Eine neue App hat die Firma entwickelt.',
          'Eine neue App wird von die Firma entwickeln.'
        ],
        correctAnswer: 'Eine neue App wird von der Firma entwickelt.',
        explanationEn: 'Vorgangspassiv: Subject + wird + von + Dativ (der Firma) + Partizip II (entwickelt).',
        explanationUr: 'ورگانگس پاسیو: wird + von + Dativ (der Firma) + Partizip II (entwickelt)۔',
        explanationRomanUrdu: 'Passive Voice: wird + von der Firma + entwickelt.'
      }
    ]
  }
};
