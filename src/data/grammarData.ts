import { GrammarTopic } from '../types';

export const grammarTopicsData: GrammarTopic[] = [
  {
    id: 'gram-articles-der-die-das',
    title: 'Definite & Indefinite Articles (der, die, das, ein, eine)',
    level: 'A1',
    category: 'Nouns & Articles',
    beginnerExplanationEn: 'Every German noun has a gender: Masculine (der), Feminine (die), or Neuter (das). Plural for all genders is die.',
    beginnerExplanationUr: 'جرمن زبان میں ہر اسم کی ایک جنس ہوتی ہے: مذکر (der)، مونث (die)، یا نیوٹر (das)۔ جمع میں سب کے لیے die استعمال ہوتا ہے۔',
    beginnerExplanationRomanUrdu: 'German zaban mein har noun ka aik gender hota hai: Muzakkar (der), Monas (die), Neuter (das). Jama mein sab ke liye "die" lagta hai.',
    detailedExplanationEn: 'Unlike English where every noun uses "the", German distinguishes between 3 grammatical genders in the singular. For indefinite articles ("a/an"), masculine and neuter use "ein", while feminine uses "eine". For negation ("no / not a"), use kein/keine.',
    detailedExplanationUr: 'انگریزی میں ہر چیز کے ساتھ "the" آتا ہے لیکن جرمن میں تین مختلف آرٹیکلز ہوتے ہیں۔ نکرہ اسم (Indefinite: ایک) کے لیے مذکر اور نیوٹر "ein" لیتے ہیں اور مونث "eine"۔ کسی چیز کی نفی کرنی ہو تو kein اور keine لگایا جاتا ہے۔',
    detailedExplanationRomanUrdu: 'English mein har noun ke sath "the" lagta hai magar German mein teen alag articles hote hain. A/an ke liye masculine aur neuter "ein" lete hain, jabke feminine "eine". Na hone ki soorat mein "kein/keine" lagta hai.',
    sentenceFormula: 'Definite: der/die/das + NOUN | Indefinite: ein/eine + NOUN | Negative: kein/keine + NOUN',
    tables: [
      {
        title: 'Articles in the Nominative Case',
        headers: ['Gender', 'Definite (The)', 'Indefinite (A / An)', 'Negative (No / None)'],
        rows: [
          ['Masculine (مذکر)', 'der Tisch (the table)', 'ein Tisch (a table)', 'kein Tisch (no table)'],
          ['Feminine (مونث)', 'die Lampe (the lamp)', 'eine Lampe (a lamp)', 'keine Lampe (no lamp)'],
          ['Neuter (نیوٹر)', 'das Buch (the book)', 'ein Buch (a book)', 'kein Buch (no book)'],
          ['Plural (جمع)', 'die Bücher (the books)', '— (no indefinite plural)', 'keine Bücher (no books)']
        ]
      }
    ],
    examples: [
      { german: 'Der Mann liest ein Buch.', english: 'The man is reading a book.', urdu: 'آدمی ایک کتاب پڑھ رہا ہے۔', romanUrdu: 'Aadmi aik kitab parh raha hai.' },
      { german: 'Das ist keine Katze, das ist ein Hund.', english: 'That is not a cat, that is a dog.', urdu: 'وہ بلی نہیں ہے، وہ ایک کتا ہے۔', romanUrdu: 'Woh billi nahi hai, woh aik kutta hai.' }
    ],
    commonMistakes: [
      {
        incorrect: 'Ich habe ein Auto nicht.',
        correct: 'Ich habe kein Auto.',
        whyEn: 'Do not use "ein ... nicht" to negate a noun with an indefinite article; always use "kein"!',
        whyUr: 'اسم کی نفی کے لیے "ein ... nicht" نہیں بلکہ "kein" بولا جاتا ہے۔',
        whyRomanUrdu: 'Noun ki nafi ke liye "ein ... nicht" nahi, hamesha "kein" bola jaata hai.'
      }
    ],
    practiceQuestions: [
      {
        id: 'gp-1',
        type: 'article-select',
        question: 'Choose the correct article: ____ Sonne scheint. (Sun = feminine)',
        questionUrdu: 'درست آرٹیکل منتخب کریں: سورج مونث ہے',
        questionRomanUrdu: 'Durust article chunein: Suraj monas hai',
        options: ['der', 'die', 'das', 'den'],
        correctAnswer: 'die',
        explanationEn: 'The word "Sonne" (sun) is feminine in German, so it takes "die Sonne".',
        explanationUr: 'جرمن میں سورج (Sonne) مونث ہے اس لیے اس کا آرٹیکل "die" ہے۔',
        explanationRomanUrdu: 'German mein suraj (Sonne) monas hai is liye iska article "die" hai.'
      }
    ]
  },
  {
    id: 'gram-verb-position-2',
    title: 'Word Order: Verb Position 2 Rule',
    level: 'A1',
    category: 'Syntax & Word Order',
    beginnerExplanationEn: 'In a normal German sentence, the conjugated verb MUST ALWAYS sit in Position 2.',
    beginnerExplanationUr: 'عام بیانیہ جرمن جملے میں فعل (Verb) ہمیشہ دوسری پوزیشن پر ہی آئے گا۔',
    beginnerExplanationRomanUrdu: 'Aam bayania German jumlay mein verb hamesha DOOSRI position par hi aayega.',
    detailedExplanationEn: 'German allows great freedom for what comes in Position 1 (Subject, Time, Place, or Object for emphasis). However, Position 2 is locked: the finite verb must stay there. If Position 1 is filled by a time or place, the subject inverts to Position 3 immediately following the verb.',
    detailedExplanationUr: 'جرمن میں پوزیشن 1 پر فاعل، وقت یا جگہ میں سے کوئی بھی لفظ آ سکتا ہے۔ لیکن پوزیشن 2 کا مقام مقفل ہے: وہاں صرف اور صرف فعل آئے گا! اگر پوزیشن 1 پر وقت آ جائے تو فاعل پوزیشن 3 پر چلا جاتا ہے۔',
    detailedExplanationRomanUrdu: 'German mein Position 1 par subject, waqt ya jagah aa sakti hai. Magar Position 2 par sirf aur sirf conjugated verb aayega! Agar Position 1 par waqt aaye to subject foran verb ke baad Position 3 par chala jaata hai.',
    sentenceFormula: '[Position 1: Subject / Time / Place] + [Position 2: CONJUGATED VERB] + [Position 3: Subject (if not in P1)] + ...',
    examples: [
      { german: 'Ich lerne heute Deutsch.', english: 'I learn German today. (Subject in P1, Verb in P2)', urdu: 'میں آج جرمن سیکھتا ہوں۔', romanUrdu: 'Main aaj German seekhta hoon.' },
      { german: 'Heute lerne ich Deutsch.', english: 'Today I learn German. (Time in P1, Verb in P2, Subject in P3)', urdu: 'آج میں جرمن سیکھتا ہوں۔', romanUrdu: 'Aaj main German seekhta hoon.' }
    ],
    commonMistakes: [
      {
        incorrect: 'Heute ich lerne Deutsch.',
        correct: 'Heute lerne ich Deutsch.',
        whyEn: 'In English, you can say "Today I learn", but in German the verb MUST be in Position 2!',
        whyUr: 'جرمن میں وقت شروع میں آنے پر فعل دوسرے نمبر پر آئے گا، فاعل تیسرے پر چلا جائے گا۔',
        whyRomanUrdu: 'German mein waqt pehle aane par verb doosre number par aayega, subject teesre par.'
      }
    ],
    practiceQuestions: [
      {
        id: 'gp-2',
        type: 'reorder',
        question: 'Arrange the words correctly: (morgen / fahren / wir / nach Berlin)',
        questionUrdu: 'الفاظ کو درست پوزیشن پر ترتیب دیں',
        questionRomanUrdu: 'Alfaaz ko durust position par tarteeb dein',
        wordsForReorder: ['Morgen', 'fahren', 'wir', 'nach Berlin.'],
        correctAnswer: 'Morgen fahren wir nach Berlin.',
        explanationEn: 'Morgen (Position 1) + fahren (Position 2 Verb) + wir (Position 3 Subject) + nach Berlin.',
        explanationUr: 'Morgen (پوزیشن 1) + fahren (پوزیشن 2 پر فعل) + wir (پوزیشن 3 پر فاعل) + nach Berlin۔',
        explanationRomanUrdu: 'Morgen (P1) + fahren (P2 Verb) + wir (P3 Subject) + nach Berlin.'
      }
    ]
  },
  {
    id: 'gram-akkusativ-case',
    title: 'The Accusative Case (Direct Object)',
    level: 'A1',
    category: 'Cases',
    beginnerExplanationEn: 'The person or object that directly receives the action of a verb is in the Accusative case. Only masculine (der -> den) changes!',
    beginnerExplanationUr: 'جس چیز یا شخص پر کام براہِ راست واقع ہو وہ مفعولی حالت (Akkusativ) کہلاتی ہے۔ اس میں صرف مذکر (der -> den) تبدیل ہوتا ہے۔',
    beginnerExplanationRomanUrdu: 'Jis cheez par kaam waqey ho woh Akkusativ hoti hai. Is mein SIRF muzakkar (der -> den) badalta hai.',
    detailedExplanationEn: 'Most standard transitive verbs (haben, sehen, kaufen, essen, trinken, brauchen, suchen) require an Accusative direct object. Feminine (die), Neuter (das), and Plural (die) do not change their articles at all! Only masculine "der" turns into "den", and "ein" turns into "einen".',
    detailedExplanationUr: 'زیادہ تر عام افعال (جیسے رکھنا، دیکھنا، خریدنا، کھانا، پینا، ضرورت ہونا) اپنے مفعول کو اکیوزیٹو بناتے ہیں۔ مونث (die)، نیوٹر (das) اور جمع (die) بالکل تبدیل نہیں ہوتے! صرف مذکر (der) بدل کر "den" اور "einen" بن جاتا ہے۔',
    detailedExplanationRomanUrdu: 'Transitive verbs (haben, kaufen, sehen waghera) Akkusativ object lete hain. Feminine, neuter aur plural bilkul nahi badalte, sirf masculine "der" ban jaata hai "den" aur "einen"!',
    sentenceFormula: 'Subject (Nominativ) + Verb + Direct Object (Akkusativ: den/einen/die/das)',
    examples: [
      { german: 'Ich habe einen Apfel.', english: 'I have an apple. (der Apfel -> einen Apfel)', urdu: 'میرے پاس ایک سیب ہے۔ (مذکر اکیوزیٹو)', romanUrdu: 'Mere paas aik saib hai.' },
      { german: 'Er kauft das Buch.', english: 'He buys the book. (das Buch remains das Buch)', urdu: 'وہ کتاب خریدتا ہے۔ (نیوٹر اکیوزیٹو میں تبدیل نہیں ہوتا)', romanUrdu: 'Woh kitab khareedta hai.' }
    ],
    commonMistakes: [
      {
        incorrect: 'Ich sehe der Mann.',
        correct: 'Ich sehe den Mann.',
        whyEn: 'The man is receiving the action of seeing (Direct Object), so masculine "der" must become "den"!',
        whyUr: 'آدمی کو دیکھا جا رہا ہے (مفعول)، اس لیے مذکر der بدل کر den بنے گا۔',
        whyRomanUrdu: 'Aadmi maf\'ool hai, is liye masculine der badal kar den banega.'
      }
    ],
    practiceQuestions: [
      {
        id: 'gp-3',
        type: 'multiple-choice',
        question: 'Which is correct? "Ich brauche ____ Kuli." (Kuli = pen, masculine der)',
        questionUrdu: 'کون سا جملہ درست ہے؟ قلم مذکر ہے',
        questionRomanUrdu: 'Konsa durust hai? Qalam masculine hai',
        options: ['ein', 'einen', 'eine', 'einem'],
        correctAnswer: 'einen',
        explanationEn: 'Kuli is masculine (der Kuli) and is the direct object of brauchen, so it becomes "einen Kuli".',
        explanationUr: 'Kuli مذکر ہے اور brauchen کا مفعول بن رہا ہے، اس لیے "einen Kuli" آئے گا۔',
        explanationRomanUrdu: 'Kuli masculine hai aur direct object hai, is liye "einen Kuli" aayega.'
      }
    ]
  },
  {
    id: 'gram-dativ-case',
    title: 'The Dative Case (Indirect Object & Fixed Prepositions)',
    level: 'A2',
    category: 'Cases',
    beginnerExplanationEn: 'The Dative case indicates the indirect recipient ("to whom?"). Articles change: der/das -> dem, die -> der, plural -> den + n.',
    beginnerExplanationUr: 'حالتِ اضافی (Dativ) یہ بتاتی ہے کہ کام کس کے لیے یا کس کو کیا گیا (کس کو؟)۔ آرٹیکلز یوں بدلتے ہیں: der اور das بنتے ہیں dem، اور die بنتا ہے der۔',
    beginnerExplanationRomanUrdu: 'Dativ case yeh batata hai ke kaam kis ke liye kiya gaya ("Wem?"). der aur das bante hain "dem", die banti hai "der".',
    detailedExplanationEn: 'The Dative case is used for: 1. The indirect object (usually the person receiving something). 2. Verbs that strictly require Dative: helfen (to help), danken (to thank), gefallen (to please), gehören (to belong to). 3. Fixed Dative prepositions: aus, bei, mit, nach, seit, von, zu.',
    detailedExplanationUr: 'ڈیٹیو کیس تین جگہوں پر آتا ہے: 1. بالواسطہ مفعول (جس کو چیز دی جا رہی ہو)۔ 2. مخصوص ڈیٹیو افعال (جیسے مدد کرنا helfen، شکریہ ادا کرنا danken)۔ 3. مخصوص ڈیٹیو حروفِ جار: aus, bei, mit, nach, seit, von, zu۔',
    detailedExplanationRomanUrdu: 'Dativ case teen jaghon par aata hai: Indirect object, Dativ verbs (helfen, danken), aur fixed prepositions (aus, bei, mit, nach, seit, von, zu).',
    sentenceFormula: 'der/das -> dem | die -> der | Plural -> den (+n an Nomen)',
    examples: [
      { german: 'Ich helfe dem Mann.', english: 'I help the man. (helfen requires Dative: dem Mann)', urdu: 'میں آدمی کی مدد کرتا ہوں۔ (helfen کے ساتھ ڈیٹیو dem آتا ہے)', romanUrdu: 'Main aadmi ki madad karta hoon.' },
      { german: 'Ich fahre mit dem Bus.', english: 'I travel by bus. (mit is a fixed Dative preposition)', urdu: 'میں بس سے جاتا ہوں۔ (mit ہمیشہ ڈیٹیو لیتا ہے)', romanUrdu: 'Main bus se jaata hoon.' }
    ],
    commonMistakes: [
      {
        incorrect: 'Ich helfe den Mann.',
        correct: 'Ich helfe dem Mann.',
        whyEn: '"helfen" is a Dative verb in German; it never takes the Accusative "den"!',
        whyUr: 'فعلِ helfen کے بعد ہمیشہ ڈیٹیو (dem) آتا ہے، اکیوزیٹو (den) نہیں۔',
        whyRomanUrdu: 'helfen ke baad hamesha Dativ (dem) aata hai, den nahi.'
      }
    ],
    practiceQuestions: [
      {
        id: 'gp-4',
        type: 'multiple-choice',
        question: 'Choose the correct form: "Wir fahren mit ____ Zug." (Zug = der Zug, masculine)',
        questionUrdu: 'درست آرٹیکل چنیں: mit کے بعد ڈیٹیو آتا ہے',
        questionRomanUrdu: 'Durust article chunein: mit ke baad Dativ aata hai',
        options: ['den', 'der', 'dem', 'das'],
        correctAnswer: 'dem',
        explanationEn: 'The preposition "mit" ALWAYS requires the Dative case. Masculine der Zug becomes "dem Zug".',
        explanationUr: 'حرفِ جار "mit" ہمیشہ ڈیٹیو کیس لیتا ہے، اس لیے مذکر der Zug بدل کر "dem Zug" بنتا ہے۔',
        explanationRomanUrdu: 'Preposition "mit" hamesha Dativ leta hai, is liye der Zug banta hai "dem Zug".'
      }
    ]
  },
  {
    id: 'gram-past-perfekt',
    title: 'The Past Tense: Das Perfekt (haben / sein + Partizip II)',
    level: 'A2',
    category: 'Verbs & Tenses',
    beginnerExplanationEn: 'The Perfekt is the primary past tense used in spoken German. It uses haben or sein in Position 2 and the past participle at the end.',
    beginnerExplanationUr: 'بول چال کی جرمن میں ماضی کے واقعات بیان کرنے کے لیے پرفیکٹ ٹینس استعمال کیا جاتا ہے۔',
    beginnerExplanationRomanUrdu: 'Bol chal ki German mein maazi bayan karne ke liye Perfekt Tense istemal hota hai.',
    detailedExplanationEn: 'Formula: Subject + conjugated auxiliary (haben or sein) in Position 2 + middle information + Partizip II (ge-...-t or ge-...-en) at the END of the sentence. Use "sein" for movement from point A to B (gehen, fahren, fliegen, kommen) or change of condition (aufwachen, sterben), plus sein and bleiben.',
    detailedExplanationUr: 'فارمولا: فاعل + پوزیشن 2 پر haben یا sein + دیگر جملہ + جملے کے بالکل آخر میں Partizip II۔ اگر ایک جگہ سے دوسری جگہ حرکت ہو تو فعلِ معاون "sein" آتا ہے ورنہ عام طور پر "haben" آتا ہے۔',
    detailedExplanationRomanUrdu: 'Formula: Subject + Position 2 par haben/sein + ... + Aakhir mein Partizip II. Harkat (movement A to B) ke liye "sein" lagta hai, aam tor par "haben".',
    sentenceFormula: 'Subject + haben/sein (Position 2) + ... + Partizip II (End of sentence)',
    examples: [
      { german: 'Ich habe gestern Fußball gespielt.', english: 'I played football yesterday. (gespielt at the end)', urdu: 'میں نے کل فٹ بال کھیلا تھا۔', romanUrdu: 'Main ne kal football khela tha.' },
      { german: 'Er ist nach Berlin gefahren.', english: 'He drove to Berlin. (movement -> auxiliary ist)', urdu: 'وہ برلن گیا تھا۔ (حرکت کی وجہ سے ist آیا)', romanUrdu: 'Woh Berlin gaya tha.' }
    ],
    commonMistakes: [
      {
        incorrect: 'Ich habe nach Deutschland gefahren.',
        correct: 'Ich bin nach Deutschland gefahren.',
        whyEn: '"fahren" indicates movement from one place to another; it must take "sein" (bin), not "haben"!',
        whyUr: 'فعلِ fahren میں جگہ بدل رہی ہے اس لیے اس کے ساتھ "sein" (bin) آئے گا، haben نہیں۔',
        whyRomanUrdu: 'fahren mein jagah badal rahi hai is liye "bin" aayega, haben nahi.'
      }
    ],
    practiceQuestions: [
      {
        id: 'gp-5',
        type: 'multiple-choice',
        question: 'Complete: "Gestern ____ ich zu Hause geblieben."',
        questionUrdu: 'خالی جگہ پر کریں: فعلِ bleiben ہمیشہ sein لیتا ہے',
        questionRomanUrdu: 'Khali jagah pur karein: bleiben hamesha sein leta hai',
        options: ['habe', 'bin', 'hat', 'ist'],
        correctAnswer: 'bin',
        explanationEn: 'The verb "bleiben" (to stay) is one of the classic exceptions that always forms its Perfekt with "sein": Ich bin geblieben.',
        explanationUr: 'فعلِ "bleiben" (رہنا) ایک استثنا ہے جو پرفیکٹ میں ہمیشہ sein لیتا ہے: Ich bin geblieben۔',
        explanationRomanUrdu: 'bleiben hamesha sein leta hai: Ich bin geblieben.'
      }
    ]
  },
  {
    id: 'gram-subordinate-clauses',
    title: 'Subordinate Clauses: weil, dass, wenn, obwohl (Verb-Kickers)',
    level: 'A2',
    category: 'Clauses & Connectors',
    beginnerExplanationEn: 'When connecting sentences with words like weil (because) or dass (that), the conjugated verb is pushed to the very end!',
    beginnerExplanationUr: 'جب جملے کو weil (کیونکہ) یا dass (کہ) جیسے الفاظ سے جوڑا جائے تو فعل اڑ کر جملے کے بالکل آخر میں چلا جاتا ہے!',
    beginnerExplanationRomanUrdu: 'Jab jumla weil (kyunki) ya dass (ke) se jurey to conjugated verb bilkul aakhir mein phenk diya jaata hai!',
    detailedExplanationEn: 'Subordinating conjunctions introduce dependent clauses. Unlike English where word order stays "because I want to learn", in German the conjugated verb is kicked to the absolute last position of that clause.',
    detailedExplanationUr: 'انگریزی میں کہا جاتا ہے "because I want to learn" لیکن جرمن میں کہا جاتا ہے "weil ich lernen WILL"۔ گردان شدہ فعل سب سے آخری لفظ بن جاتا ہے۔',
    detailedExplanationRomanUrdu: 'German mein subordinate conjunction aane par verb hamesha clause ka aakhri lafz banta hai: "weil ich Deutsch lerne".',
    sentenceFormula: 'Main Clause, [Subordinating Conjunction: weil/dass/wenn] + Subject + ... + CONJUGATED VERB.',
    examples: [
      { german: 'Ich lerne fleißig, weil ich die Prüfung bestehen will.', english: 'I study hard because I want to pass the exam. (will is at the end)', urdu: 'میں محنت سے پڑھتا ہوں کیونکہ میں امتحان پاس کرنا چاہتا ہوں۔', romanUrdu: 'Main mehnat se parhta hoon kyunki main exam pass karna chahta hoon.' },
      { german: 'Er sagt, dass er morgen kommt.', english: 'He says that he is coming tomorrow. (kommt is at the end)', urdu: 'وہ کہتا ہے کہ وہ کل آ رہا ہے۔', romanUrdu: 'Woh kehta hai ke woh kal aa raha hai.' }
    ],
    commonMistakes: [
      {
        incorrect: 'Ich lerne Deutsch, weil ich will in Deutschland studieren.',
        correct: 'Ich lerne Deutsch, weil ich in Deutschland studieren will.',
        whyEn: 'In a "weil" clause, the conjugated modal verb "will" MUST be at the very end!',
        whyUr: 'ذیلی جملے (weil) میں فعل "will" لازمی طور پر جملے کے بالکل آخر میں ہونا چاہیے۔',
        whyRomanUrdu: 'weil clause mein verb "will" bilkul aakhir mein hona chahiye.'
      }
    ],
    practiceQuestions: [
      {
        id: 'gp-6',
        type: 'reorder',
        question: 'Order the subordinate clause: (weil / er / krank / ist)',
        questionUrdu: 'ذیلی جملے کی ترتیب درست کریں: فعل آخر میں آئے گا',
        questionRomanUrdu: 'Subordinate clause ki tarteeb theek karein',
        wordsForReorder: ['weil', 'er', 'krank', 'ist.'],
        correctAnswer: 'weil er krank ist.',
        explanationEn: 'In a weil-clause: weil + subject (er) + adjective (krank) + verb at the end (ist).',
        explanationUr: 'ذیلی جملے میں فعل (ist) سب سے آخر میں آئے گا۔',
        explanationRomanUrdu: 'Subordinate clause mein verb (ist) sab se aakhir mein aayega.'
      }
    ]
  },
  {
    id: 'gram-konjunktiv-2',
    title: 'Konjunktiv II: Polite Requests & Hypotheticals (würde, hätte, wäre)',
    level: 'B1',
    category: 'Advanced Structures',
    beginnerExplanationEn: 'Konjunktiv II is used for utmost politeness ("Could you please...") and hypothetical dreams ("If I had money, I would...").',
    beginnerExplanationUr: 'کون یونکٹیو 2 انتہائی شائستہ گفتگو اور فرضی خواہشات کے اظہار کے لیے استعمال ہوتا ہے (کاش / اگر ایسا ہوتا)۔',
    beginnerExplanationRomanUrdu: 'Konjunktiv II nihayat ba-adab guzarish aur farzi khwahishaat ke liye use hota hai.',
    detailedExplanationEn: 'The most frequent forms in everyday B1 German are:\n1. würde + Infinitive (e.g. Ich würde gern reisen)\n2. hätte (e.g. Ich hätte gern einen Kaffee / Wenn ich Zeit hätte...)\n3. wäre (e.g. Wenn ich reich wäre...)\n4. könnte (e.g. Könnten Sie mir bitte helfen?)',
    detailedExplanationUr: 'بول چال اور خط و کتابت میں اس کے چار اہم ترین فارم ہیں:\n1. würde + فعل: میں یہ کرنا پسند کروں گا\n2. hätte: کاش میرے پاس ہوتا / مجھے یہ چاہیے\n3. wäre: کاش میں ہوتا\n4. könnte: کیا آپ برائے مہربانی کر سکتے ہیں؟',
    detailedExplanationRomanUrdu: 'Rozmarrah B1 German mein chaar ahem forms hain: würde + infinitive, hätte, wäre, aur könnte.',
    sentenceFormula: 'Polite: Könnten Sie / Würden Sie + ... + Infinitiv? | Wish: Wenn ich ... hätte/wäre, würde ich ...',
    examples: [
      { german: 'Könnten Sie das bitte wiederholen?', english: 'Could you please repeat that? (Polite request)', urdu: 'کیا آپ ازراہِ کرم اسے دہرا سکتے ہیں؟', romanUrdu: 'Kya aap azraah-e-karam isay dohra sakte hain?' },
      { german: 'Wenn ich in Deutschland wäre, würde ich Deutsch sprechen.', english: 'If I were in Germany, I would speak German.', urdu: 'اگر میں جرمنی میں ہوتا تو میں جرمن بولتا۔', romanUrdu: 'Agar main Germany mein hota to main German bolta.' }
    ],
    commonMistakes: [
      {
        incorrect: 'Können Sie mir bitte helfen? (acceptable, but less polite)',
        correct: 'Könnten Sie mir bitte helfen? (much more polite & formal)',
        whyEn: '"Könnten Sie" shows refined German etiquette, especially in exams and official offices.',
        whyUr: '"Könnten Sie" بولنا گوئٹے امتحانات اور جرمن دفاتر میں زیادہ شائستہ مانا جاتا ہے۔',
        whyRomanUrdu: '"Könnten Sie" bolna offices aur exams mein zyada respectful mana jaata hai.'
      }
    ],
    practiceQuestions: [
      {
        id: 'gp-7',
        type: 'multiple-choice',
        question: 'Polite order at a cafe: "Ich ____ gern ein Wasser, bitte."',
        questionUrdu: 'کیفے میں شائستہ آرڈر کے لیے درست لفظ چنیں',
        questionRomanUrdu: 'Cafe mein polite order ke liye durust lafz',
        options: ['habe', 'hätte', 'hatte', 'hast'],
        correctAnswer: 'hätte',
        explanationEn: '"Ich hätte gern..." is the standard polite German formula for ordering food and drinks.',
        explanationUr: 'ریسٹورنٹ یا کیفے میں باادب آرڈر کے لیے ہمیشہ "Ich hätte gern..." بولا جاتا ہے۔',
        explanationRomanUrdu: 'Cafe mein polite order ke liye hamesha "Ich hätte gern..." bola jaata hai.'
      }
    ]
  },
  {
    id: 'gram-passive-voice',
    title: 'The Passive Voice (Vorgangspassiv & Zustandspassiv)',
    level: 'B2',
    category: 'Advanced Structures',
    beginnerExplanationEn: 'The Passive Voice focuses on the action or result rather than who did it: "The letter is being written" (Vorgangspassiv: werden + Partizip II).',
    beginnerExplanationUr: 'فعلِ مجہول (Passive) میں کام کرنے والے سے زیادہ خود کام یا اس کے نتیجے پر توجہ دی جاتی ہے۔',
    beginnerExplanationRomanUrdu: 'Passive Voice mein kaam karne walay ke bajaye kaam par focus hota hai.',
    detailedExplanationEn: 'In German B2, you learn:\n1. Vorgangspassiv (Process): werden + Partizip II (e.g. Das Haus wird gebaut = The house is being built).\n2. Zustandspassiv (State/Result): sein + Partizip II (e.g. Das Haus ist gebaut = The house is built).\n3. Past tense: Das Haus wurde gebaut.\n4. Agent: Use "von + Dativ" for persons and "durch + Akkusativ" for means/causes.',
    detailedExplanationUr: 'جرمن B2 میں دو قسم کے پاسیو پڑھے جاتے ہیں:\n1. ورگانگس پاسیو (عمل جاری ہونا): werden + Partizip II (جیسے مکان تعمیر کیا جا رہا ہے)۔\n2. تسٹینڈز پاسیو (کام مکمل ہو کر نتیجے کی حالت): sein + Partizip II (جیسے مکان تعمیر شدہ ہے)۔\nکام کرنے والے کو ظاہر کرنے کے لیے "von + Dativ" استعمال ہوتا ہے۔',
    detailedExplanationRomanUrdu: 'Vorgangspassiv: werden + Partizip II. Zustandspassiv: sein + Partizip II. Agent ke liye "von + Dativ" lagta hai.',
    sentenceFormula: 'Present: Subject + wird/werden + ... + Partizip II | Past: wurde/wurden + ... + Partizip II',
    examples: [
      { german: 'Der Vertrag wird vom Direktor unterschrieben.', english: 'The contract is being signed by the director.', urdu: 'معاہدے پر ڈائریکٹر کے ذریعے دستخط کیے جا رہے ہیں۔', romanUrdu: 'Contract par director ke zariye dastakhat kiye ja rahe hain.' },
      { german: 'Alle Rechnungen wurden bezahlt.', english: 'All invoices were paid.', urdu: 'تمام بل ادا کر دیے گئے تھے۔', romanUrdu: 'Tamam bills ada kar diye gaye thay.' }
    ],
    commonMistakes: [
      {
        incorrect: 'Das Auto wird repariert von der Mechaniker.',
        correct: 'Das Auto wird von dem Mechaniker repariert.',
        whyEn: '1. "von" requires Dative (dem Mechaniker). 2. The Partizip II (repariert) MUST be at the end of the clause!',
        whyUr: '1. "von" کے بعد ڈیٹیو آئے گا۔ 2. Partizip II جملے کے بالکل آخر میں آئے گا۔',
        whyRomanUrdu: 'von ke baad Dativ aayega aur Partizip II jumlay ke aakhir mein aayega.'
      }
    ],
    practiceQuestions: [
      {
        id: 'gp-8',
        type: 'multiple-choice',
        question: 'Passive construction: "Das Dokument ____ gestern verschickt."',
        questionUrdu: 'ماضی کا مجہول جملہ مکمل کریں',
        questionRomanUrdu: 'Maazi ka passive jumla mukammal karein',
        options: ['wird', 'wurde', 'worden', 'hat'],
        correctAnswer: 'wurde',
        explanationEn: 'For past tense process passive (Präteritum Passiv), use "wurde" + Partizip II (verschickt).',
        explanationUr: 'ماضی کے پاسیو کے لیے "wurde" استعمال ہوتا ہے: Das Dokument wurde verschickt۔',
        explanationRomanUrdu: 'Past passive ke liye "wurde" use hota hai.'
      }
    ]
  }
];
