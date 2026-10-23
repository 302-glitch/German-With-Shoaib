import { CourseModule } from '../types';

export const coursesData: CourseModule[] = [
  // ==========================================
  // LEVEL A1: COMPLETE COMPREHENSIVE CURRICULUM
  // ==========================================
  {
    id: 'a1-mod-1',
    level: 'A1',
    moduleNumber: 1,
    title: 'German Alphabet, Umlauts & Pronunciation Rules',
    titleUrdu: 'جرمن حروفِ تہجی، املاؤٹ اور تلفظ کے بنیادی اصول',
    titleRomanUrdu: 'German Huroof-e-Tahajji, Umlauts aur Talaffuz ke Usool',
    description: 'Master the 26 standard letters, 3 Umlauts (ä, ö, ü), the Eszett (ß), diphthongs, and special letter combinations with Urdu phonetics.',
    iconName: 'SpellCheck',
    lessons: [
      {
        id: 'a1-l1',
        moduleId: 'a1-mod-1',
        moduleTitle: 'Alphabet & Pronunciation',
        level: 'A1',
        lessonNumber: 1,
        title: 'The German Alphabet (A to Z) & Sounds',
        titleUrdu: 'جرمن الفابیٹ (A تا Z) اور ان کی آوازیں',
        titleRomanUrdu: 'German Alphabet (A se Z) aur unki Awaazein',
        description: 'Learn how to pronounce every single letter from A to Z with English and Urdu phonetics.',
        durationMinutes: 15,
        sections: [
          {
            title: 'Welcome to German Pronunciation',
            titleUrdu: 'جرمن تلفظ کا تعارف',
            titleRomanUrdu: 'German Talaffuz ka Taaruf',
            contentEn: 'German is largely a phonetic language: once you master the spelling and sound rules, you can pronounce almost any written German word accurately! Unlike English, where spelling often contradicts pronunciation, German is consistent.',
            contentUr: 'جرمن زبان کی سب سے بڑی خوبصورتی یہ ہے کہ یہ زیادہ تر ویسی ہی پڑھی جاتی ہے جیسی لکھی جاتی ہے۔ اگر آپ ایک بار اس کے تلفظ کے بنیادی اصول سمجھ لیں تو آپ کوئی بھی نیا جرمن لفظ آسانی سے درست پڑھ سکتے ہیں۔',
            contentRomanUrdu: 'German zaban ki sab se bari khoobsurti ye hai ke ye zyadatar waisi hi parhi jaati hai jaisi likhi jaati hai. Agar aap aik baar iske talaffuz ke bunyadi usool samajh lein to koi bhi naya German lafz ba-asaani theek bol sakte hain.',
            culturalNote: {
              title: 'Note for Urdu Speakers / اردو بولنے والوں کے لیے اہم وضاحت',
              contentEn: 'Roman Urdu phonetic guides in this course are intended as practical learning stepping stones, not 100% acoustic substitutes. Always click the audio button to hear authentic German audio!',
              contentUr: 'رومن اردو رہنمائی آپ کی آسانی کے لیے ہے تاکہ آپ کو سمجھنے میں رکاوٹ نہ آئے۔ جرمن آوازوں کے اصل لہجے کو سمجھنے کے لیے ہر لفظ کے ساتھ دیے گئے آڈیو بٹن کو ضرور سنیں۔'
            }
          },
          {
            title: 'Alphabet Table with Audio & Phonetics',
            titleUrdu: 'الفابیٹ ٹیبل بمعہ تلفظ اور صوتی رہنمائی',
            titleRomanUrdu: 'Alphabet Table ba-ma Talaffuz aur Phonetics',
            contentEn: 'Review the alphabet table below. Click on any letter to hear the German pronunciation.',
            contentUr: 'نیچے دیے گئے حروف کو دیکھیں اور تلفظ سمجھیں۔ ہر حرف کی اردو اور رومن اردو آواز دی گئی ہے۔',
            contentRomanUrdu: 'Neeche diye gaye huroof ko dekhein aur talaffuz samjhein. Har harf ki Urdu aur Roman Urdu aawaz di gayi hai.',
            pronunciationGuide: [
              { letterOrCombo: 'A a', germanSound: '[ah]', urduApproximation: 'آ (جیسے آپ، عام)', romanUrduApproximation: 'Aa (jaise Aam ya Aap)', englishEquivalent: 'like "a" in father', sampleWords: [{ word: 'Abend', meaning: 'Evening', ipa: '[ˈaːbn̩t]' }, { word: 'Apfel', meaning: 'Apple', ipa: '[ˈapfl̩]' }] },
              { letterOrCombo: 'B b', germanSound: '[beh]', urduApproximation: 'بے (جیسے بال)', romanUrduApproximation: 'Bay (jaise Baal)', englishEquivalent: 'like "b" in bed', sampleWords: [{ word: 'Buch', meaning: 'Book' }, { word: 'Brot', meaning: 'Bread' }] },
              { letterOrCombo: 'C c', germanSound: '[tseh]', urduApproximation: 'تسئے (ت اور س کا ملاپ)', romanUrduApproximation: 'Tsay (T aur S ka milaap)', englishEquivalent: 'like "ts" in tsunami before e/i', sampleWords: [{ word: 'Café', meaning: 'Café' }, { word: 'Cent', meaning: 'Cent' }] },
              { letterOrCombo: 'D d', germanSound: '[deh]', urduApproximation: 'دے (نرم دال، انگریزی سخت D نہیں)', romanUrduApproximation: 'Day (naram Daal, English hard D nahi)', englishEquivalent: 'dental d, softer than English d', sampleWords: [{ word: 'Danke', meaning: 'Thank you' }, { word: 'Deutschland', meaning: 'Germany' }] },
              { letterOrCombo: 'E e', germanSound: '[eh]', urduApproximation: 'اے (جیسے ایک، بیٹا)', romanUrduApproximation: 'Ay (jaise Aik ya Beta)', englishEquivalent: 'like "ay" in say (without glide)', sampleWords: [{ word: 'Essen', meaning: 'To eat / Food' }, { word: 'Eltern', meaning: 'Parents' }] },
              { letterOrCombo: 'F f', germanSound: '[eff]', urduApproximation: 'ایف (ف کی آواز)', romanUrduApproximation: 'Eff (Fay ki aawaz)', englishEquivalent: 'like "f" in father', sampleWords: [{ word: 'Freund', meaning: 'Friend' }, { word: 'Frau', meaning: 'Woman / Mrs.' }] },
              { letterOrCombo: 'G g', germanSound: '[geh]', urduApproximation: 'گے (ہمیشہ گاف، کبھی جیم نہیں)', romanUrduApproximation: 'Gay (hamesha Gaaf, kabhi Jeem nahi)', englishEquivalent: 'always hard "g" as in get', sampleWords: [{ word: 'Guten Tag', meaning: 'Good day' }, { word: 'Geld', meaning: 'Money' }] },
              { letterOrCombo: 'H h', germanSound: '[hah]', urduApproximation: 'ہا (ہ کی صاف آواز)', romanUrduApproximation: 'Haa (Heh ki saaf aawaz)', englishEquivalent: 'like "h" in house', sampleWords: [{ word: 'Hallo', meaning: 'Hello' }, { word: 'Haus', meaning: 'House' }] },
              { letterOrCombo: 'I i', germanSound: '[ee]', urduApproximation: 'ای (جیسے اینٹ یا تیر)', romanUrduApproximation: 'Ee (jaise Eent ya Teer)', englishEquivalent: 'like "ee" in see', sampleWords: [{ word: 'Ich', meaning: 'I' }, { word: 'Igel', meaning: 'Hedgehog' }] },
              { letterOrCombo: 'J j', germanSound: '[yot]', urduApproximation: 'یوٹ (آواز ہمیشہ یے "Y" کی ہوتی ہے)', romanUrduApproximation: 'Yot (aawaz hamesha "Y" ki hoti hai)', englishEquivalent: 'pronounced like "y" in yes', sampleWords: [{ word: 'Ja', meaning: 'Yes' }, { word: 'Jahr', meaning: 'Year' }, { word: 'Jugend', meaning: 'Youth' }], importantCaution: 'CRITICAL: Never pronounce German "J" as English "J" (ج)! "Ja" sounds like "Yaa", not "Jaa"!' },
              { letterOrCombo: 'K k', germanSound: '[kah]', urduApproximation: 'کا (کاف کی آواز)', romanUrduApproximation: 'Kaa (Kaaf ki aawaz)', englishEquivalent: 'like "k" in kite', sampleWords: [{ word: 'Kind', meaning: 'Child' }, { word: 'Kaffee', meaning: 'Coffee' }] },
              { letterOrCombo: 'L l', germanSound: '[ell]', urduApproximation: 'ایل (لام کی نرم اور صاف آواز)', romanUrduApproximation: 'Ell (Laam ki saaf aawaz)', englishEquivalent: 'clear European "l"', sampleWords: [{ word: 'Lernen', meaning: 'To learn' }, { word: 'Land', meaning: 'Country' }] },
              { letterOrCombo: 'M m', germanSound: '[emm]', urduApproximation: 'ایم (میم کی آواز)', romanUrduApproximation: 'Emm (Meem ki aawaz)', englishEquivalent: 'like "m" in man', sampleWords: [{ word: 'Mutter', meaning: 'Mother' }, { word: 'Mann', meaning: 'Man' }] },
              { letterOrCombo: 'N n', germanSound: '[enn]', urduApproximation: 'این (نون کی آواز)', romanUrduApproximation: 'Enn (Noon ki aawaz)', englishEquivalent: 'like "n" in name', sampleWords: [{ word: 'Nein', meaning: 'No' }, { word: 'Name', meaning: 'Name' }] },
              { letterOrCombo: 'O o', germanSound: '[oh]', urduApproximation: 'او (گول واؤ کی لمبی یا چھوٹی آواز)', romanUrduApproximation: 'Oh (Gol Wao ki aawaz)', englishEquivalent: 'pure rounded "o"', sampleWords: [{ word: 'Oma', meaning: 'Grandmother' }, { word: 'Opa', meaning: 'Grandfather' }] },
              { letterOrCombo: 'P p', germanSound: '[peh]', urduApproximation: 'پے (پ کی آواز)', romanUrduApproximation: 'Pay (Pay ki aawaz)', englishEquivalent: 'like "p" in pen', sampleWords: [{ word: 'Pakistan', meaning: 'Pakistan' }, { word: 'Pass', meaning: 'Passport' }] },
              { letterOrCombo: 'Q q', germanSound: '[koo]', urduApproximation: 'کوو (عموماً Qu = "کِو" کی آواز دیتا ہے)', romanUrduApproximation: 'Koo (Qu = "Kv" ki aawaz)', englishEquivalent: 'always "qu" pronounced as "kv"', sampleWords: [{ word: 'Quelle', meaning: 'Source' }, { word: 'Bequem', meaning: 'Comfortable' }] },
              { letterOrCombo: 'R r', germanSound: '[err]', urduApproximation: 'ایر (حلق سے نکلنے والا نرم غین یا ہلکا ر)', romanUrduApproximation: 'Err (halq se nikalne wala naram Ghain ya R)', englishEquivalent: 'guttural r (voiced uvular fricative) or tapped', sampleWords: [{ word: 'Rot', meaning: 'Red' }, { word: 'Reise', meaning: 'Trip' }] },
              { letterOrCombo: 'S s', germanSound: '[ess]', urduApproximation: 'لفظ کے شروع میں ز "Z"، آخر میں س "S"', romanUrduApproximation: 'Lafz ke shuru mein Z, aakhir mein S', englishEquivalent: '"z" before vowels, "s" at end of words', sampleWords: [{ word: 'Sonne', meaning: 'Sun (sounds like Zonne)' }, { word: 'Haus', meaning: 'House (sounds like Haws)' }] },
              { letterOrCombo: 'T t', germanSound: '[teh]', urduApproximation: 'تے (نرم تالوی تے، انگریزی سخت ٹ نہیں)', romanUrduApproximation: 'Tay (naram Te, English hard T nahi)', englishEquivalent: 'dental t', sampleWords: [{ word: 'Tag', meaning: 'Day' }, { word: 'Tee', meaning: 'Tea' }] },
              { letterOrCombo: 'U u', germanSound: '[ooh]', urduApproximation: 'اوو (جیسے اونٹ یا دور)', romanUrduApproximation: 'Ooh (jaise Oont ya Door)', englishEquivalent: 'like "oo" in boot', sampleWords: [{ word: 'Uhr', meaning: 'Clock / O\'clock' }, { word: 'Und', meaning: 'And' }] },
              { letterOrCombo: 'V v', germanSound: '[fow]', urduApproximation: 'فاؤ (جرمن الفاظ میں یہ فے "F" کی آواز دیتا ہے!)', romanUrduApproximation: 'Fow (German lafzon mein ye "F" ki aawaz deta hai)', englishEquivalent: 'pronounced like "f" in native German words!', sampleWords: [{ word: 'Vater', meaning: 'Father (pronounced Fah-ter)' }, { word: 'Vier', meaning: 'Four (pronounced Feer)' }], importantCaution: 'CRITICAL: German "V" is pronounced like "F" (ف)! "Vater" is read "Fater", NOT "Water"!' },
              { letterOrCombo: 'W w', germanSound: '[veh]', urduApproximation: 'وے (انگریزی "V" یا اردو واؤ کی آواز)', romanUrduApproximation: 'Vay (English V ki aawaz)', englishEquivalent: 'always pronounced like English "v"!', sampleWords: [{ word: 'Wasser', meaning: 'Water (sounds like Vasser)' }, { word: 'Wo', meaning: 'Where (sounds like Voh)' }], importantCaution: 'German "W" is pronounced like English "V" (دانت اور ہونٹ ملا کر)!' },
              { letterOrCombo: 'X x', germanSound: '[iks]', urduApproximation: 'اکس (ک اور س کا ملاپ)', romanUrduApproximation: 'Iks (K aur S)', englishEquivalent: 'like "x" in box', sampleWords: [{ word: 'Taxi', meaning: 'Taxi' }, { word: 'Text', meaning: 'Text' }] },
              { letterOrCombo: 'Y y', germanSound: '[üpsilon]', urduApproximation: 'اِپسیلون (ہونٹ گول کر کے ادا کی جانے والی آواز)', romanUrduApproximation: 'Ypsilon (rounded sound)', englishEquivalent: 'sounds like German ü or i', sampleWords: [{ word: 'Typ', meaning: 'Type' }, { word: 'Gymnasium', meaning: 'Grammar school' }] },
              { letterOrCombo: 'Z z', germanSound: '[tsett]', urduApproximation: 'تسیٹ (ت اور س کا فوری ملاپ: Ts)', romanUrduApproximation: 'Tsett (Ts ki aawaz, kabhi Zeen nahi!)', englishEquivalent: 'always pronounced "ts" like cats or tsunami!', sampleWords: [{ word: 'Zug', meaning: 'Train (pronounced Tsoog)' }, { word: 'Zimmer', meaning: 'Room (pronounced Tsimmer)' }], importantCaution: 'CRITICAL: Never pronounce German "Z" as English "Z" (ز)! It is ALWAYS "TS" (تس)!' }
            ]
          }
        ]
      },
      {
        id: 'a1-l2',
        moduleId: 'a1-mod-1',
        moduleTitle: 'Alphabet & Pronunciation',
        level: 'A1',
        lessonNumber: 2,
        title: 'The 3 Umlauts (Ä, Ö, Ü) and the Eszett (ß)',
        titleUrdu: 'تین املاؤٹ (Ä, Ö, Ü) اور ایس-سیٹ (ß) کی ادائیگی',
        titleRomanUrdu: 'Teen Umlauts (Ä, Ö, Ü) aur Eszett (ß) ki Adayegi',
        description: 'Discover the unique German vowels with dots and the special double-s letter with accurate acoustic positioning.',
        durationMinutes: 20,
        sections: [
          {
            title: 'What are Umlauts? / املاؤٹ کیا ہیں؟',
            titleUrdu: 'املاؤٹ کی وضاحت',
            titleRomanUrdu: 'Umlaut ki wazahat',
            contentEn: 'The two dots over vowels (ä, ö, ü) are called Umlauts. They change the vowel sound by modifying mouth and tongue positions. When German keyboards lack these letters, they are written as ae, oe, and ue.',
            contentUr: 'جرمن میں حروفِ علت (a, o, u) کے اوپر جو دو نقطے لگائے جاتے ہیں انہیں "املاؤٹ" (Umlaut) کہتے ہیں۔ یہ منہ کے زاویے اور ہونٹوں کی ساخت بدل کر نئی منفرد آوازیں پیدا کرتے ہیں۔ اگر کی بورڈ پر یہ نہ ہوں تو انہیں ae, oe, ue کے طور پر لکھا جاتا ہے۔',
            contentRomanUrdu: 'German mein vowels (a, o, u) ke ooper jo do nuqtay lagaye jaate hain unhein "Umlaut" kehte hain. Ye munh ke zawiye aur honton ki shakl badal kar nayi aawazein paida karte hain. Keyboard par na hon to ae, oe, ue likha jaata hai.',
            pronunciationGuide: [
              {
                letterOrCombo: 'Ä ä',
                germanSound: '[ɛː] or [ɛ]',
                urduApproximation: 'بڑی یے کی کھلی آواز (جیسے "بَیٹ" یا "پَیگ")',
                romanUrduApproximation: 'Bari Yay ki khuli aawaz (jaise "Bait" ya "Sair")',
                englishEquivalent: 'like "ai" in air or "e" in bed',
                sampleWords: [
                  { word: 'Mädchen', meaning: 'Girl' },
                  { word: 'Äpfel', meaning: 'Apples' },
                  { word: 'Käse', meaning: 'Cheese' }
                ]
              },
              {
                letterOrCombo: 'Ö ö',
                germanSound: '[øː] or [œ]',
                urduApproximation: 'ہونٹ گول کر کے او کی پوزیشن بنائیں مگر زبان سے "اے" بولنے کی کوشش کریں!',
                romanUrduApproximation: 'Hont gol kar ke "O" banayein magar zaban se "Ay" bolne ki koshish karein!',
                englishEquivalent: 'round your lips for "o", then try to say "ay"',
                sampleWords: [
                  { word: 'Österreich', meaning: 'Austria' },
                  { word: 'Öl', meaning: 'Oil' },
                  { word: 'Können', meaning: 'Can / To be able to' }
                ]
              },
              {
                letterOrCombo: 'Ü ü',
                germanSound: '[yː] or [ʏ]',
                urduApproximation: 'ہونٹ سیٹی بجانے کی طرح گول کریں اور اندر سے "ای" (ee) کی آواز نکالیں!',
                romanUrduApproximation: 'Hont seeti bajane ki tarah gol karein aur andar se "Ee" bolne ki koshish karein!',
                englishEquivalent: 'round lips as if whistling "oo", then pronounce "ee"',
                sampleWords: [
                  { word: 'Über', meaning: 'Over / About' },
                  { word: 'Übung', meaning: 'Exercise' },
                  { word: 'Tschüss', meaning: 'Bye' }
                ]
              },
              {
                letterOrCombo: 'ß (Eszett)',
                germanSound: '[s]',
                urduApproximation: 'سخت سین (Double S) کی آواز۔ یہ کبھی لفظ کے شروع میں نہیں آتا۔',
                romanUrduApproximation: 'Sakht Seen (Double S) ki aawaz. Ye kabhi lafz ke shuru mein nahi aata.',
                englishEquivalent: 'sharp "s" sound as in "mass". Written as "ss" in Swiss German.',
                sampleWords: [
                  { word: 'Straße', meaning: 'Street' },
                  { word: 'Heißen', meaning: 'To be called' },
                  { word: 'Groß', meaning: 'Big / Tall' }
                ],
                importantCaution: 'Note: ß is NOT the Greek letter Beta (β)! It is a ligature of "s" and "z" (scharfes S).'
              }
            ]
          },
          {
            title: 'Crucial Letter Combinations / اہم صوتی جوڑے',
            titleUrdu: 'جرمن زبان کے اہم جوڑے اور مرکب آوازیں',
            titleRomanUrdu: 'German zaban ke ahem joray aur murakkab aawazein',
            contentEn: 'German has recurring vowel and consonant pairs that every learner must know by heart.',
            contentUr: 'جرمن میں کچھ مخصوص حروف کا جوڑا مل کر ہمیشہ ایک مستقل آواز بناتا ہے۔ ان کو یاد کرنا انتہائی ضروری ہے۔',
            contentRomanUrdu: 'German mein kuch makhsoos huroof ka jora mil kar hamesha aik mustaqil aawaz banata hai. Inhein yaad rakhna lazmi hai.',
            pronunciationGuide: [
              {
                letterOrCombo: 'EI',
                germanSound: '[aɪ]',
                urduApproximation: 'آئی (جیسے مائی، ہائی، بھائی)',
                romanUrduApproximation: 'Aai (jaise Bhai ya High)',
                englishEquivalent: 'like "eye" or "buy"',
                sampleWords: [{ word: 'Mein', meaning: 'My' }, { word: 'Nein', meaning: 'No' }, { word: 'Eis', meaning: 'Ice cream' }]
              },
              {
                letterOrCombo: 'IE',
                germanSound: '[iː]',
                urduApproximation: 'لمبی ای (جیسے تیر، میر، پیٹ)',
                romanUrduApproximation: 'Lambi Ee (jaise Teer ya Peer)',
                englishEquivalent: 'long "ee" like see or meet',
                sampleWords: [{ word: 'Sie', meaning: 'You / She / They' }, { word: 'Hier', meaning: 'Here' }, { word: 'Liebe', meaning: 'Love' }],
                importantCaution: 'Golden Rule: When EI and IE confuse you, remember: the SECOND letter tells you the sound! In "ei", "i" makes "eye". In "ie", "e" makes long "ee"!'
              },
              {
                letterOrCombo: 'EU / ÄU',
                germanSound: '[ɔɪ]',
                urduApproximation: 'اوئے (جیسے انگریزی Boy یا Toy)',
                romanUrduApproximation: 'Oy (jaise Boy ya Toy)',
                englishEquivalent: 'like "oy" in boy',
                sampleWords: [{ word: 'Euro', meaning: 'Euro (pronounced Oy-ro)' }, { word: 'Deutsch', meaning: 'German (pronounced Doy-tsh)' }, { word: 'Häuser', meaning: 'Houses (pronounced Hoy-zer)' }]
              },
              {
                letterOrCombo: 'SCH',
                germanSound: '[ʃ]',
                urduApproximation: 'ش (شین کی صاف آواز)',
                romanUrduApproximation: 'Sh (Sheen ki aawaz)',
                englishEquivalent: 'like "sh" in shoe',
                sampleWords: [{ word: 'Schule', meaning: 'School' }, { word: 'Schön', meaning: 'Beautiful' }]
              },
              {
                letterOrCombo: 'SP / ST (at syllable start)',
                germanSound: '[ʃp] / [ʃt]',
                urduApproximation: 'شپ / شت (شین + پ / شین + ت)',
                romanUrduApproximation: 'Shp / Sht (Sheen + P / Sheen + T)',
                englishEquivalent: 'sounds like "shp" and "sht"!',
                sampleWords: [{ word: 'Sprechen', meaning: 'To speak (sounds like Shprechen)' }, { word: 'Stadt', meaning: 'City (sounds like Shtadt)' }],
                importantCaution: 'Beginner trap: At the start of words, SP is pronounced SHP and ST is pronounced SHT!'
              },
              {
                letterOrCombo: 'CH (ich-Laut & ach-Laut)',
                germanSound: '[ç] or [x]',
                urduApproximation: 'حلق سے خ (ach کے بعد) یا باریک ش/خ ملاپ (ich کے بعد)',
                romanUrduApproximation: 'Halq se Kh (ach ke baad) ya bareek Sh/Kh (ich ke baad)',
                englishEquivalent: 'soft hissing sound after e/i; throat sound (like loch) after a/o/u',
                sampleWords: [{ word: 'Ich', meaning: 'I (soft ich-Laut)' }, { word: 'Buch', meaning: 'Book (throat ach-Laut)' }]
              }
            ]
          }
        ]
      }
    ]
  },
  // MODULE 2: GREETINGS & INTRODUCTIONS
  {
    id: 'a1-mod-2',
    level: 'A1',
    moduleNumber: 2,
    title: 'Greetings, Farewells & Introductions',
    titleUrdu: 'سلام، دعا، الوداعی کلمات اور تعارف',
    titleRomanUrdu: 'Salam, Dua, Alwidai Kalmaat aur Taaruf',
    description: 'Learn everyday German greetings, formal vs. informal etiquette, saying where you are from (Pakistan), your languages, and living place.',
    iconName: 'MessageSquare',
    lessons: [
      {
        id: 'a1-l3',
        moduleId: 'a1-mod-2',
        moduleTitle: 'Greetings & Introductions',
        level: 'A1',
        lessonNumber: 3,
        title: 'German Greetings: Formal Sie vs. Informal du',
        titleUrdu: 'جرمن سلام: باادب "آپ" (Sie) بمقابلہ بے تکلف "تم" (du)',
        titleRomanUrdu: 'German Salam: Ba-adab "Aap" (Sie) vs Be-takalluf "Tum" (du)',
        description: 'Understand when to use formal greetings and how culture influences German conversations.',
        durationMinutes: 15,
        sections: [
          {
            title: 'Everyday Greetings / روزمرہ سلام کے طریقے',
            titleUrdu: 'جرمن میں سلام اور خیر مقدم کے کلمات',
            titleRomanUrdu: 'German mein Salam aur Khush-amdeed ke kalmaat',
            contentEn: 'Germans greet according to the time of day and the relationship between speakers. In professional life, always start with formal speech (Sie / Ihnen).',
            contentUr: 'جرمنی میں دن کے اوقات اور رشتے کے لحاظ سے سلام کیا جاتا ہے۔ دفتری اور اجنبی افراد کے ساتھ ہمیشہ باادب (آپ / Sie) لہجہ استعمال کریں۔',
            contentRomanUrdu: 'Germany mein waqt aur talluq ke mutabiq salam kiya jaata hai. Ajnabiyon aur daftari maahol mein hamesha ba-adab (Aap / Sie) istemal karein.',
            germanExamples: [
              { german: 'Hallo!', english: 'Hello / Hi (Universal)', urdu: 'ہیلو! (ہر جگہ بولا جانے والا)', romanUrdu: 'Hallo! (Har jagah bola jaane wala)' },
              { german: 'Guten Morgen!', english: 'Good morning! (until ~11 AM)', urdu: 'صبح بخیر! (صبح 11 بجے تک)', romanUrdu: 'Guten Morgen! (Subah 11 baje tak)' },
              { german: 'Guten Tag!', english: 'Good day / Hello! (Daytime)', urdu: 'دن بخیر! / آداب! (دن بھر)', romanUrdu: 'Guten Tag! / Aadaab! (Din bhar)' },
              { german: 'Guten Abend!', english: 'Good evening! (from ~6 PM)', urdu: 'شام بخیر! (شام 6 بجے کے بعد)', romanUrdu: 'Guten Abend! (Shaam 6 baje ke baad)' },
              { german: 'Gute Nacht!', english: 'Good night! (Only right before sleep)', urdu: 'شب بخیر! (صرف سونے سے پہلے)', romanUrdu: 'Gute Nacht! (Sirf sone se pehle)' },
              { german: 'Auf Wiedersehen!', english: 'Goodbye! (Formal / face-to-face)', urdu: 'الوداع! / پھر ملیں گے! (باادب، روبرو)', romanUrdu: 'Auf Wiedersehen! (Ba-adab)' },
              { german: 'Tschüss!', english: 'Bye! (Casual / friendly)', urdu: 'خدا حافظ! / بائے! (دوستانہ)', romanUrdu: 'Tschüss! (Dostana / Casual)' }
            ]
          },
          {
            title: 'Asking "How are you?" / مزاج پرسی کرنا',
            titleUrdu: 'حال احوال پوچھنا',
            titleRomanUrdu: 'Haal Ahwaal Poochna',
            contentEn: 'Notice the huge distinction between formal (Ihnen = Aap) and informal (dir = Tum):',
            contentUr: 'جرمن میں "آپ کا کیا حال ہے؟" اور "تمہارا کیا حال ہے؟" میں واضح فرق ہوتا ہے:',
            contentRomanUrdu: 'German mein "Aap ka kya haal hai?" aur "Tumhara kya haal hai?" mein wazeh farq hota hai:',
            tableData: {
              headers: ['Context / سیاق', 'German Phrase', 'English Translation', 'Urdu Meaning', 'Roman Urdu'],
              rows: [
                ['Formal (آپ)', 'Wie geht es Ihnen?', 'How are you? (polite)', 'آپ کا مزاج کیسا ہے؟', 'Aap ka mizaaj kaisa hai?'],
                ['Informal (تم)', 'Wie geht es dir?', 'How are you? (casual)', 'تم کیسے ہو؟ / کیسی ہو؟', 'Tum kaisay ho?'],
                ['Short / Slang', 'Wie geht\'s?', 'How\'s it going?', 'کیا حال ہے؟', 'Kya haal hai?'],
                ['Answer: Good', 'Sehr gut, danke!', 'Very good, thank you!', 'بہت اچھا، شکریہ!', 'Bohat acha, shukriya!'],
                ['Answer: So-so', 'Es geht.', 'It goes / So-so.', 'بس ٹھیک ٹھاک چل رہا ہے۔', 'Bas theek thaak chal raha hai.'],
                ['Counter-ask (Formal)', 'Und Ihnen?', 'And you? (formal)', 'اور آپ کا؟', 'Aur Aap ka?'],
                ['Counter-ask (Casual)', 'Und dir?', 'And you? (casual)', 'اور تم بتاؤ؟', 'Aur tum batao?']
              ]
            }
          }
        ]
      },
      {
        id: 'a1-l4',
        moduleId: 'a1-mod-2',
        moduleTitle: 'Greetings & Introductions',
        level: 'A1',
        lessonNumber: 4,
        title: 'Introducing Yourself (Name, Origin, Language)',
        titleUrdu: 'اپنا مکمل تعارف کروانا (نام، وطن، زبانیں اور رہائش)',
        titleRomanUrdu: 'Apna Mukammal Taaruf Karwana (Naam, Watan, Zubanein aur Rihaish)',
        description: 'Learn the exact sentences to introduce yourself as a student from Pakistan in German.',
        durationMinutes: 20,
        sections: [
          {
            title: 'Key Sentences for Pakistani Students / پاکستانی طلبا کے لیے بنیادی جملے',
            titleUrdu: 'تعارفی جملے',
            titleRomanUrdu: 'Taarufi Jumlay',
            contentEn: 'Study these essential patterns to introduce yourself smoothly:',
            contentUr: 'ان جملوں کو اچھی طرح یاد کریں تاکہ آپ اعتماد سے اپنا تعارف کروا سکیں:',
            contentRomanUrdu: 'In jumlon ko achi tarah yaad karein taake aap aitemad se apna taaruf karwa sakein:',
            germanExamples: [
              { german: 'Ich heiße Ali.', english: 'My name is Ali. (Literally: I am called Ali.)', urdu: 'میرا نام علی ہے۔ (لفظی: مجھے علی کہا جاتا ہے۔)', romanUrdu: 'Mera naam Ali hai. (Ich heisse Ali)' },
              { german: 'Mein Name ist Sara.', english: 'My name is Sara.', urdu: 'میرا نام سارہ ہے۔', romanUrdu: 'Mein Name ist Sara.' },
              { german: 'Ich komme aus Pakistan.', english: 'I come from Pakistan.', urdu: 'میں پاکستان سے ہوں۔ (میرا تعلق پاکستان سے ہے)', romanUrdu: 'Main Pakistan se hoon. (Ich komme aus Pakistan)' },
              { german: 'Ich wohne in Lahore / Berlin.', english: 'I live in Lahore / Berlin.', urdu: 'میں لاہور / برلن میں رہتا ہوں۔', romanUrdu: 'Main Lahore / Berlin mein rehta hoon.' },
              { german: 'Ich spreche Urdu, Englisch und ein bisschen Deutsch.', english: 'I speak Urdu, English and a little German.', urdu: 'میں اردو، انگریزی اور تھوڑی سی جرمن بولتا ہوں۔', romanUrdu: 'Main Urdu, English aur thori si German bolta hoon.' },
              { german: 'Ich bin Student / Studentin.', english: 'I am a student (male / female).', urdu: 'میں طالبعلم / طالبہ ہوں۔', romanUrdu: 'Main student / talib-e-ilm hoon.' },
              { german: 'Ich lerne Deutsch.', english: 'I am learning German.', urdu: 'میں جرمن زبان سیکھ رہا ہوں۔', romanUrdu: 'Main German zaban seekh raha hoon.' }
            ]
          }
        ]
      }
    ]
  },
  // MODULE 3: GERMAN ARTICLES & NOUNS
  {
    id: 'a1-mod-3',
    level: 'A1',
    moduleNumber: 3,
    title: 'Articles & Nouns: der, die, das',
    titleUrdu: 'جرمن آرٹیکلز اور اسم (der, die, das) کا نظام',
    titleRomanUrdu: 'German Articles aur Asma (der, die, das) ka Nizam',
    description: 'Learn the grammatical genders: Masculine (der), Feminine (die), Neuter (das), indefinite (ein/eine), negative (kein/keine), and German noun capitalization rules.',
    iconName: 'BookMarked',
    lessons: [
      {
        id: 'a1-l5',
        moduleId: 'a1-mod-3',
        moduleTitle: 'Articles & Nouns',
        level: 'A1',
        lessonNumber: 5,
        title: 'The Three Genders: der, die, das & Capitalization',
        titleUrdu: 'تین جنسیں: مذکر، مونث، نیوٹر اور کیپٹلائزیشن کا قانون',
        titleRomanUrdu: 'Teen Jins: Muzakkar, Monas, Neuter aur Capitalization ka Qanoon',
        description: 'Understand why all German nouns are capitalized and how grammatical gender works.',
        durationMinutes: 20,
        sections: [
          {
            title: 'The Golden Rule of German Nouns / جرمن اسم کا سنہری قانون',
            titleUrdu: 'ہر اسم کا پہلا حرف ہمیشہ بڑا (Capital) ہوگا',
            titleRomanUrdu: 'Har Noun ka pehla harf hamesha Capital hoga',
            contentEn: 'RULE 1: In German, EVERY single noun is ALWAYS written with a CAPITAL first letter! Whether it is in the beginning, middle, or end of a sentence.\nRULE 2: Every German noun has a grammatical gender: Masculine (der - blue), Feminine (die - red), or Neuter (das - green). In the plural, ALL genders use "die" (yellow/orange).',
            contentUr: 'پہلا سنہری قانون: جرمن میں ہر اسم (Noun) کا پہلا حرف ہمیشہ بڑا (Capital) لکھا جاتا ہے، چاہے وہ جملے کے شروع میں ہو، درمیان میں ہو یا آخر میں!\nدوسرا قانون: ہر اسم کا ایک آرٹیکل ہوتا ہے: مذکر کے لیے der، مونث کے لیے die، اور بے جنس / نیوٹر کے لیے das۔ جمع (Plural) میں تمام اسماء کا آرٹیکل die بن جاتا ہے۔',
            contentRomanUrdu: 'Pehla Golden Rule: German mein har noun ka pehla letter hamesha CAPITAL hoga, chahe wo jumlay ke shuru, darmian ya aakhir mein ho!\nDoosra Rule: Har noun ka aik article hota hai: Muzakkar = der, Monas = die, Neuter = das. Jama (Plural) mein sab ka article "die" ho jaata hai.',
            tableData: {
              headers: ['Gender / جنس', 'Definite Article', 'Indefinite Article', 'Negative Article', 'Example German', 'English', 'Urdu Meaning'],
              rows: [
                ['Masculine (مذکر)', 'der', 'ein', 'kein', 'der Mann / ein Mann / kein Mann', 'the man / a man / no man', 'آدمی / ایک آدمی / کوئی آدمی نہیں'],
                ['Feminine (مونث)', 'die', 'eine', 'keine', 'die Frau / eine Frau / keine Frau', 'the woman / a woman / no woman', 'عورت / ایک عورت / کوئی عورت نہیں'],
                ['Neuter (نیوٹر)', 'das', 'ein', 'kein', 'das Kind / ein Kind / kein Kind', 'the child / a child / no child', 'بچہ / ایک بچہ / کوئی بچہ نہیں'],
                ['Plural (جمع)', 'die', '— (no indefinite)', 'keine', 'die Bücher / keine Bücher', 'the books / no books', 'کتابیں / کوئی کتابیں نہیں']
              ]
            }
          },
          {
            title: 'Urdu Comparison & Warning / اردو بولنے والوں کے لیے وضاحت',
            titleUrdu: 'قدرتی جنس بمقابلہ گرائماتی جنس',
            titleRomanUrdu: 'Qudrati Jins vs Grammatical Jins',
            contentEn: 'Warning: Grammatical gender in German does NOT equal biological gender! For example: "das Mädchen" (the girl) is neuter (das), because diminutives ending in -chen are always grammatically neuter. Never guess by appearance—always memorize the article together with the noun as a single unit (e.g. not just "Tisch", but "der Tisch"!).',
            contentUr: 'خبردار: جرمن میں گرائماتی جنس حقیقی حیاتیاتی جنس سے میل نہیں کھاتی۔ مثال کے طور پر "das Mädchen" (لڑکی) نیوٹر (das) ہے کیونکہ جرمن میں -chen پر ختم ہونے والے تمام الفاظ نیوٹر ہوتے ہیں۔ اس لیے جب بھی کوئی نیا لفظ یاد کریں تو اس کا آرٹیکل ساتھ جوڑ کر یاد کریں، جیسے صرف "Tisch" نہیں بلکہ "der Tisch" یاد کریں!',
            contentRomanUrdu: 'Khabardaar: German mein grammatical gender qudrati gender jaisa nahi hota. Misaal ke taur par "das Mädchen" (larki) neuter (das) hai kyunki -chen par khatam hone walay alfaz neuter hote hain. Is liye hamesha lafz ko uske article ke sath mila kar yaad karein: "der Tisch", "die Sonne", "das Buch"!'
          }
        ]
      }
    ]
  },
  // MODULE 4: PERSONAL PRONOUNS
  {
    id: 'a1-mod-4',
    level: 'A1',
    moduleNumber: 4,
    title: 'Personal Pronouns (Personalpronomen)',
    titleUrdu: 'ضمائرِ شخصی (میں، تم، آپ، وہ، ہم وغیرہ)',
    titleRomanUrdu: 'Zameer-e-Shakhsi (Ich, du, er, sie, es, wir, ihr, sie, Sie)',
    description: 'Master all German subject pronouns: ich, du, er, sie, es, wir, ihr, sie (they), and capital Sie (formal you).',
    iconName: 'Users',
    lessons: [
      {
        id: 'a1-l6',
        moduleId: 'a1-mod-4',
        moduleTitle: 'Personal Pronouns',
        level: 'A1',
        lessonNumber: 6,
        title: 'Subject Pronouns & Formal Sie vs. Informal du/ihr',
        titleUrdu: 'فاعلی ضمائر اور احترام کا فرق',
        titleRomanUrdu: 'Faeli Zameerein aur Ahtaram ka Farq',
        description: 'Learn the exact pronouns in German with direct comparisons to Urdu.',
        durationMinutes: 15,
        sections: [
          {
            title: 'All German Pronouns Explained / تمام ضمائر کی تفصیل',
            titleUrdu: 'جرمن پرسنل پروناؤنز ٹیبل',
            titleRomanUrdu: 'German Personal Pronouns Table',
            contentEn: 'Here is the complete overview of German nominative personal pronouns:',
            contentUr: 'جرمن میں استعمال ہونے والے تمام ذاتی ضمائر کی فہرست درج ذیل ہے:',
            contentRomanUrdu: 'German mein istemal hone walay tamam zameeron ki fehrist darj zail hai:',
            tableData: {
              headers: ['German Pronoun', 'Grammar Person', 'English', 'Urdu Equivalent', 'Roman Urdu Explanation'],
              rows: [
                ['ich', '1st Singular', 'I', 'میں', 'Main (always lowercase unless start of sentence)'],
                ['du', '2nd Singular (Informal)', 'you (singular casual)', 'تو / تم (ایک شخص، بے تکلف)', 'Tum (aik shakhs, dost ya bacha)'],
                ['er', '3rd Singular (Masculine)', 'he / it (der)', 'وہ (مذکر)', 'Woh (muzakkar noun ya mard)'],
                ['sie', '3rd Singular (Feminine)', 'she / it (die)', 'وہ (مونث)', 'Woh (monas noun ya aurat)'],
                ['es', '3rd Singular (Neuter)', 'it (das)', 'یہ / وہ (نیوٹر)', 'Yeh/Woh (neuter noun ya bacha)'],
                ['wir', '1st Plural', 'we', 'ہم', 'Hum (sab mil kar)'],
                ['ihr', '2nd Plural (Informal)', 'you all (guys)', 'تم سب (بے تکلف دوست)', 'Tum sab (zyada log)'],
                ['sie', '3rd Plural', 'they', 'وہ سب', 'Woh sab (lowercase "s")'],
                ['Sie', 'Formal (Singular & Plural)', 'You (Polite / Respectful)', 'آپ (خواہ ایک شخص ہو یا کئی لوگ)', 'Aap (hamesha CAPITAL "S" ke sath)']
              ]
            }
          }
        ]
      }
    ]
  },
  // MODULE 5: PRESENT-TENSE VERBS
  {
    id: 'a1-mod-5',
    level: 'A1',
    moduleNumber: 5,
    title: 'Present-Tense Verbs & Conjugation',
    titleUrdu: 'فعلِ حال اور افعال کی گردان (Verb Conjugation)',
    titleRomanUrdu: 'Fe\'l-e-Haal aur Af\'aal ki Gardaan (Präsens Conjugation)',
    description: 'Learn regular verb endings (-e, -st, -t, -en, -t, -en) and essential irregular verbs: sein, haben, werden, sprechen, fahren, essen, etc.',
    iconName: 'Activity',
    lessons: [
      {
        id: 'a1-l7',
        moduleId: 'a1-mod-5',
        moduleTitle: 'Present-Tense Verbs',
        level: 'A1',
        lessonNumber: 7,
        title: 'Regular Verb Conjugation Rules (lernen, kommen, wohnen)',
        titleUrdu: 'باقاعدہ افعال کی گردان کے اصول',
        titleRomanUrdu: 'Baa-qaida Af\'aal ki Gardaan ke Usool',
        description: 'Understand the stem and endings system for standard German verbs.',
        durationMinutes: 20,
        sections: [
          {
            title: 'How German Verbs Work / جرمن افعال کا بنیادی فارمولا',
            titleUrdu: 'فعل کا مادہ اور لاحقہ (Stem + Ending)',
            titleRomanUrdu: 'Fe\'l ka Maada aur Lahiqa (Stem + Ending)',
            contentEn: 'Every German infinitive verb ends in -en (or occasionally -n). To conjugate in present tense:\n1. Remove the "-en" to get the verb stem (e.g. lernen -> lern-).\n2. Add the regular person ending: ich (-e), du (-st), er/sie/es (-t), wir (-en), ihr (-t), sie/Sie (-en).',
            contentUr: 'جرمن کے تمام بنیادی افعال کے آخر میں "-en" آتا ہے۔ گردان بنانے کے لیے:\n1. پہلے "-en" ہٹا کر فعل کا مادہ (Stem) حاصل کریں (جیسے lernen بن گیا lern-)۔\n2. پھر فاعل کے مطابق یہ لاحقے جوڑیں: ich کے ساتھ -e، du کے ساتھ -st، er/sie/es کے ساتھ -t، wir کے ساتھ -en، ihr کے ساتھ -t، اور sie/Sie کے ساتھ -en۔',
            contentRomanUrdu: 'German ke tamam basic verbs ke aakhir mein "-en" aata hai. Gardaan banane ke liye pehle "-en" hata kar stem nikaalein (lernen -> lern-), phir endings lagayein: ich (-e), du (-st), er/sie/es (-t), wir (-en), ihr (-t), sie/Sie (-en).',
            conjugationTable: [
              { pronoun: 'ich', conjugation: 'lerne', english: 'I learn / am learning', urdu: 'میں سیکھتا ہوں', romanUrdu: 'Main seekhta hoon' },
              { pronoun: 'du', conjugation: 'lernst', english: 'you learn', urdu: 'تم سیکھتے ہو', romanUrdu: 'Tum seekhte ho' },
              { pronoun: 'er / sie / es', conjugation: 'lernt', english: 'he / she / it learns', urdu: 'وہ سیکھتا / سیکھتی ہے', romanUrdu: 'Woh seekhta / seekhti hai' },
              { pronoun: 'wir', conjugation: 'lernen', english: 'we learn', urdu: 'ہم سیکھتے ہیں', romanUrdu: 'Hum seekhte hain' },
              { pronoun: 'ihr', conjugation: 'lernt', english: 'you all learn', urdu: 'تم سب سیکھتے ہو', romanUrdu: 'Tum sab seekhte ho' },
              { pronoun: 'sie / Sie', conjugation: 'lernen', english: 'they learn / You learn (polite)', urdu: 'وہ سب سیکھتے ہیں / آپ سیکھتے ہیں', romanUrdu: 'Woh sab seekhte hain / Aap seekhte hain' }
            ]
          }
        ]
      },
      {
        id: 'a1-l8',
        moduleId: 'a1-mod-5',
        moduleTitle: 'Present-Tense Verbs',
        level: 'A1',
        lessonNumber: 8,
        title: 'Crucial Irregular Verbs: sein (to be) & haben (to have)',
        titleUrdu: 'انتہائی اہم غیر باقاعدہ افعال: sein (ہونا) اور haben (پاس ہونا)',
        titleRomanUrdu: 'Ahem Ghair-Baaqaida Af\'aal: sein (hona) aur haben (paas hona)',
        description: 'Master the two most important auxiliary verbs in the German language.',
        durationMinutes: 25,
        sections: [
          {
            title: 'Conjugation of "sein" (To Be) / فعل "ہونا"',
            titleUrdu: 'فعل "sein" کی گردان',
            titleRomanUrdu: 'Fe\'l "sein" ki gardaan',
            contentEn: 'The verb "sein" (to be) is completely irregular and must be memorized thoroughly:',
            contentUr: 'فعل "sein" (ہونا) مکمل طور پر بے قاعدہ ہے اور جرمن کا سب سے اہم فعل ہے:',
            contentRomanUrdu: 'Fe\'l "sein" (to be / hona) mukammal taur par irregular hai aur dil se yaad karna zaroori hai:',
            conjugationTable: [
              { pronoun: 'ich', conjugation: 'bin', english: 'I am', urdu: 'میں ہوں', romanUrdu: 'Main hoon (e.g. Ich bin Ali)' },
              { pronoun: 'du', conjugation: 'bist', english: 'you are (casual)', urdu: 'تم ہو', romanUrdu: 'Tum ho (e.g. Du bist nett)' },
              { pronoun: 'er / sie / es', conjugation: 'ist', english: 'he / she / it is', urdu: 'وہ ہے', romanUrdu: 'Woh hai (e.g. Er ist Student)' },
              { pronoun: 'wir', conjugation: 'sind', english: 'we are', urdu: 'ہم ہیں', romanUrdu: 'Hum hain (e.g. Wir sind hier)' },
              { pronoun: 'ihr', conjugation: 'seid', english: 'you all are', urdu: 'تم سب ہو', romanUrdu: 'Tum sab ho (e.g. Ihr seid fleißig)' },
              { pronoun: 'sie / Sie', conjugation: 'sind', english: 'they are / You are (polite)', urdu: 'وہ ہیں / آپ ہیں', romanUrdu: 'Woh hain / Aap hain (e.g. Sie sind Lehrer)' }
            ]
          },
          {
            title: 'Conjugation of "haben" (To Have) / فعل "رکھنا یا پاس ہونا"',
            titleUrdu: 'فعل "haben" کی گردان',
            titleRomanUrdu: 'Fe\'l "haben" ki gardaan',
            contentEn: 'The verb "haben" (to have) drops the "b" in the "du" and "er/sie/es" forms:',
            contentUr: 'فعل "haben" (پاس ہونا / رکھنا) میں du اور er/sie/es کے فارم میں \'b\' غائب ہو جاتا ہے:',
            contentRomanUrdu: 'Fe\'l "haben" (to have) mein du aur er/sie/es ke form mein \'b\' drop ho jaata hai:',
            conjugationTable: [
              { pronoun: 'ich', conjugation: 'habe', english: 'I have', urdu: 'میرے پاس ہے / میں رکھتا ہوں', romanUrdu: 'Mere paas hai' },
              { pronoun: 'du', conjugation: 'hast', english: 'you have (casual)', urdu: 'تمہارے پاس ہے', romanUrdu: 'Tumhare paas hai' },
              { pronoun: 'er / sie / es', conjugation: 'hat', english: 'he / she / it has', urdu: 'اس کے پاس ہے', romanUrdu: 'Uske paas hai' },
              { pronoun: 'wir', conjugation: 'haben', english: 'we have', urdu: 'ہمارے پاس ہے', romanUrdu: 'Hamare paas hai' },
              { pronoun: 'ihr', conjugation: 'habt', english: 'you all have', urdu: 'تم سب کے پاس ہے', romanUrdu: 'Tum sab ke paas hai' },
              { pronoun: 'sie / Sie', conjugation: 'haben', english: 'they have / You have (polite)', urdu: 'ان کے پاس ہے / آپ کے پاس ہے', romanUrdu: 'Unke paas hai / Aap ke paas hai' }
            ]
          }
        ]
      }
    ]
  },
  // MODULE 6: SENTENCE CONSTRUCTION & WORD ORDER
  {
    id: 'a1-mod-6',
    level: 'A1',
    moduleNumber: 6,
    title: 'Sentence Construction & Word Order',
    titleUrdu: 'جملے کی بناوٹ اور الفاظ کی ترتیب (Word Order)',
    titleRomanUrdu: 'Jumlay ki Banawat aur Alfaaz ki Tarteeb (Satzbau)',
    description: 'Learn the sacred Verb Position 2 rule, W-Questions, Yes/No questions, sentence expansion step by step, and negation with nicht vs. kein.',
    iconName: 'GitBranch',
    lessons: [
      {
        id: 'a1-l9',
        moduleId: 'a1-mod-6',
        moduleTitle: 'Sentence Construction',
        level: 'A1',
        lessonNumber: 9,
        title: 'The Sacred Verb Position 2 Rule & Sentence Building',
        titleUrdu: 'فعل پوزیشن 2 کا مقدس قانون اور قدم بہ قدم جملہ سازی',
        titleRomanUrdu: 'Verb Position 2 ka Muqaddas Qanoon aur Qadam ba Qadam Jumla Saazi',
        description: 'Understand how statements are formed and expanded from zero in German.',
        durationMinutes: 25,
        sections: [
          {
            title: 'Verb Position 2: The Core Rule of German / پوزیشن 2 کا قانون',
            titleUrdu: 'جرمن بیانیہ جملے میں فعل ہمیشہ دوسری پوزیشن پر ہوتا ہے',
            titleRomanUrdu: 'German Bayania Jumlay mein Fe\'l hamesha Doosri Position par hota hai',
            contentEn: 'In standard German main clauses (statements), the CONJUGATED VERB MUST ALWAYS BE IN POSITION 2! Position 1 can be the subject, or a time word, or a place. If something else takes Position 1, the subject moves immediately after the verb (Inversion)!',
            contentUr: 'جرمن گرامر کا سب سے اہم قانون: عام بیانیہ جملے میں گردان شدہ فعل (Conjugated Verb) ہمیشہ پوزیشن نمبر 2 پر آئے گا! پوزیشن 1 پر فاعل (Subject) بھی آ سکتا ہے اور وقت یا جگہ بھی۔ اگر پوزیشن 1 پر وقت آ جائے تو فاعل فوراً فعل کے بعد پوزیشن 3 پر چلا جاتا ہے۔',
            contentRomanUrdu: 'German grammar ka sab se ahem qanoon: Aam statement mein conjugated verb hamesha POSITION 2 par aayega! Position 1 par subject ya waqt aa sakta hai. Agar Position 1 par waqt aaye to subject foran verb ke baad chala jaata hai.',
            tableData: {
              headers: ['Position 1 (Topic)', 'Position 2 (CONJUGATED VERB)', 'Position 3 (Subject/Time)', 'Other Information', 'English Translation', 'Urdu Meaning'],
              rows: [
                ['Ich (Subject)', 'lerne (Verb)', 'heute (Time)', 'Deutsch.', 'I learn German today.', 'میں آج جرمن سیکھتا ہوں۔'],
                ['Heute (Time)', 'lerne (Verb)', 'ich (Subject)', 'Deutsch.', 'Today I learn German.', 'آج میں جرمن سیکھتا ہوں۔'],
                ['In Berlin (Place)', 'wohnen (Verb)', 'wir (Subject)', 'gerne.', 'In Berlin we like to live.', 'ہم برلن میں خوشی سے رہتے ہیں۔']
              ]
            }
          },
          {
            title: 'Step-by-Step Sentence Expansion / جملے کو قدم بہ قدم بڑا کرنا',
            titleUrdu: 'جملے کی مرحلہ وار توسیع',
            titleRomanUrdu: 'Jumlay ki Marhala-waar Tausee',
            contentEn: 'See how a sentence grows naturally in German without violating the rules:',
            contentUr: 'دیکھیں کہ کس طرح ایک سادہ جملہ آہستہ آہستہ وسیع ہوتا جاتا ہے:',
            contentRomanUrdu: 'Dekhein ke kis tarah aik saada jumla aahista aahista lamba hota jaata hai:',
            germanExamples: [
              { german: 'Ich lerne Deutsch.', english: 'Step 1: I learn German.', urdu: 'مرحلہ 1: میں جرمن سیکھتا ہوں۔', romanUrdu: 'Step 1: Main German seekhta hoon.' },
              { german: 'Ich lerne heute Deutsch.', english: 'Step 2: I learn German today.', urdu: 'مرحلہ 2: میں آج جرمن سیکھتا ہوں۔', romanUrdu: 'Step 2: Main aaj German seekhta hoon.' },
              { german: 'Ich lerne heute zu Hause Deutsch.', english: 'Step 3: I learn German at home today.', urdu: 'مرحلہ 3: میں آج گھر پر جرمن سیکھتا ہوں۔', romanUrdu: 'Step 3: Main aaj ghar par German seekhta hoon.' },
              { german: 'Ich lerne heute zu Hause fleißig Deutsch.', english: 'Step 4: I study German diligently at home today.', urdu: 'مرحلہ 4: میں آج گھر پر محنت سے جرمن پڑھتا ہوں۔', romanUrdu: 'Step 4: Main aaj ghar par mehnat se German parhta hoon.' }
            ]
          }
        ]
      },
      {
        id: 'a1-l10',
        moduleId: 'a1-mod-6',
        moduleTitle: 'Sentence Construction',
        level: 'A1',
        lessonNumber: 10,
        title: 'Asking Questions: W-Fragen & Ja/Nein Fragen',
        titleUrdu: 'سوالات پوچھنا: ڈبلیو سوالات اور ہاں/نا سوالات',
        titleRomanUrdu: 'Sawalaat Poochna: W-Fragen aur Ja/Nein Fragen',
        description: 'Master wer, was, wo, woher, wohin, wann, warum, wie, and verb-first questions.',
        durationMinutes: 20,
        sections: [
          {
            title: 'The Two Types of German Questions / سوالات کی دو اقسام',
            titleUrdu: 'سوالات کی ساخت',
            titleRomanUrdu: 'Sawalaat ki saakht',
            contentEn: '1. W-Fragen (Question-Word Questions): Question word in Position 1, Conjugated Verb in Position 2!\n2. Ja/Nein Fragen (Yes/No Questions): Conjugated Verb moves to Position 1!',
            contentUr: '1. W-Fragen: سوالیہ لفظ (کیا، کہاں، کب وغیرہ) پوزیشن 1 پر اور فعل پوزیشن 2 پر ہوتا ہے۔\n2. Ja/Nein Fragen (ہاں یا نا والے سوالات): فعل جملے کے سب سے شروع یعنی پوزیشن 1 پر آ جاتا ہے!',
            contentRomanUrdu: '1. W-Fragen: Sawalia lafz Position 1 par aur Verb Position 2 par!\n2. Ja/Nein Fragen: Verb Position 1 par aa jaata hai!',
            tableData: {
              headers: ['Question Word', 'German Example', 'English Translation', 'Urdu Meaning', 'Answer Structure'],
              rows: [
                ['Wer? (Who)', 'Wer ist das?', 'Who is that?', 'یہ کون ہے؟', 'Das ist Ali.'],
                ['Was? (What)', 'Was machst du?', 'What are you doing?', 'تم کیا کر رہے ہو؟', 'Ich lerne Deutsch.'],
                ['Wo? (Where - static)', 'Wo wohnst du?', 'Where do you live?', 'تم کہاں رہتے ہو؟', 'Ich wohne in Karachi.'],
                ['Woher? (Where from)', 'Woher kommen Sie?', 'Where are you from? (formal)', 'آپ کہاں سے تشریف لائے ہیں؟', 'Ich komme aus Pakistan.'],
                ['Wohin? (Where to - motion)', 'Wohin gehst du?', 'Where are you going?', 'تم کدھر جا رہے ہو؟', 'Ich gehe nach Hause.'],
                ['Wann? (When)', 'Wann beginnt der Kurs?', 'When does the course begin?', 'کورس کب شروع ہوتا ہے؟', 'Um 9 Uhr.'],
                ['Warum? (Why)', 'Warum lernst du Deutsch?', 'Why do you learn German?', 'تم جرمن کیوں سیکھتے ہو؟', 'Weil ich in Deutschland studieren möchte.'],
                ['Wie? (How)', 'Wie heißen Sie?', 'What is your name? (How are you called?)', 'آپ کا کیا نام ہے؟', 'Ich heiße Ahmad.']
              ]
            }
          }
        ]
      }
    ]
  },
  // MODULE 7: NUMBERS, DATES & TIME
  {
    id: 'a1-mod-7',
    level: 'A1',
    moduleNumber: 7,
    title: 'Numbers, Dates, Days & Telling Time',
    titleUrdu: 'گنتی، تاریخیں، دن، مہینے اور وقت بتانا',
    titleRomanUrdu: 'Ginti, Tareekhein, Din, Maheenay aur Waqt Batana',
    description: 'Learn German numbers from 0 to 100+ (with the inverted unit-ten rule like Urdu!), days, months, and official vs. informal time.',
    iconName: 'Clock',
    lessons: [
      {
        id: 'a1-l11',
        moduleId: 'a1-mod-7',
        moduleTitle: 'Numbers, Dates & Time',
        level: 'A1',
        lessonNumber: 11,
        title: 'German Numbers 0 to 100 & The Urdu Similarity!',
        titleUrdu: 'جرمن گنتی 0 تا 100 اور اردو کے ساتھ حیران کن مماثلت!',
        titleRomanUrdu: 'German Ginti 0 se 100 aur Urdu ke sath Hairan-kun Mumasilat!',
        description: 'Discover how German numbers 21 to 99 say units before tens, exactly like Urdu (ایکیس = ایک اور بیس)!',
        durationMinutes: 20,
        sections: [
          {
            title: 'Numbers 0 to 20 / صفر سے بیس تک',
            titleUrdu: 'بنیادی اعداد',
            titleRomanUrdu: 'Bunyadi Aadaad',
            contentEn: 'Memorize 0 to 12 as individual roots, then 13 to 19 add "-zehn" (ten):',
            contentUr: '0 سے 12 تک کے الفاظ الگ یاد کریں، پھر 13 سے 19 تک لفظ کے ساتھ "-zehn" (دس) کا اضافہ ہوتا ہے:',
            contentRomanUrdu: '0 se 12 tak alag yaad karein, 13 se 19 tak aakhir mein "-zehn" lagta hai:',
            tableData: {
              headers: ['Number', 'German', 'Pronunciation', 'Urdu', 'Number', 'German', 'Pronunciation', 'Urdu'],
              rows: [
                ['0', 'null', '[nool]', 'صفر', '11', 'elf', '[elf]', 'گیارہ'],
                ['1', 'eins', '[aynz]', 'ایک', '12', 'zwölf', '[tsvölf]', 'بارہ'],
                ['2', 'zwei', '[tsvay]', 'دو', '13', 'dreizehn', '[dray-tsehn]', 'تیرہ'],
                ['3', 'drei', '[dray]', 'تین', '14', 'vierzehn', '[feer-tsehn]', 'چودہ'],
                ['4', 'vier', '[feer]', 'چار', '15', 'fünfzehn', '[fünf-tsehn]', 'پندرہ'],
                ['5', 'fünf', '[fünf]', 'پانچ', '16', 'sechzehn', '[zekh-tsehn]', 'سولہ'],
                ['6', 'sechs', '[zeks]', 'چھ', '17', 'siebzehn', '[zeeb-tsehn]', 'سترہ'],
                ['7', 'sieben', '[zeeben]', 'سات', '18', 'achtzehn', '[akht-tsehn]', 'اٹھارہ'],
                ['8', 'acht', '[akht]', 'آٹھ', '19', 'neunzehn', '[noyn-tsehn]', 'انیس'],
                ['9', 'neun', '[noyn]', 'نو', '20', 'zwanzig', '[tsvan-tsikh]', 'بیس'],
                ['10', 'zehn', '[tsehn]', 'دس', '100', 'hundert', '[hoon-dert]', 'سو']
              ]
            }
          },
          {
            title: 'Fascinating Insight for Urdu Speakers / اردو بولنے والوں کے لیے زبردست آسانی!',
            titleUrdu: 'اکائی پہلے، دہائی بعد میں (جیسے اردو میں!)',
            titleRomanUrdu: 'Ikayi pehle, Dahayi baad mein (Urdu jaisa!)',
            contentEn: 'In English, you say twenty-one (tens first, then units). BUT in German, you say "einundzwanzig" = ONE-AND-TWENTY! This is identical to Urdu: ایک اور بیس = اکیس! Exactly like Urdu: vierundzwanzig = 24 (چار اور بیس = چوبیس).',
            contentUr: 'انگریزی میں آپ 21 کو twenty-one (پہلے بیس، پھر ایک) کہتے ہیں۔ لیکن جرمن میں اردو کی طرح پہلے اکائی اور پھر دہائی بولی جاتی ہے! "einundzwanzig" کا مطلب ہے "ایک اور بیس" (اکیس)! اسی طرح fünfunddreißig = پانچ اور تیس (پینتیس)!',
            contentRomanUrdu: 'English mein 21 ko twenty-one kehte hain. Magar German mein bilkul Urdu ki tarah pehle aik phir bees bola jaata hai: "einundzwanzig" (aik aur bees = ikkees)! Ye Urdu bolne walon ke liye bohot bari aasaani hai!'
          }
        ]
      }
    ]
  },
  // MODULE 8: BASIC GRAMMAR & CASES
  {
    id: 'a1-mod-8',
    level: 'A1',
    moduleNumber: 8,
    title: 'Basic Grammar: Nominative, Accusative & Modals',
    titleUrdu: 'بنیادی گرامر: فاعلی حالت (Nominativ)، مفعولی حالت (Akkusativ) اور ماڈل افعال',
    titleRomanUrdu: 'Bunyadi Grammar: Nominativ, Akkusativ aur Modal Verbs',
    description: 'Understand the German case system from scratch: Nominative (Subject) vs. Accusative (Direct Object), and modal verbs (können, müssen, möchten, wollen).',
    iconName: 'Layers',
    lessons: [
      {
        id: 'a1-l12',
        moduleId: 'a1-mod-8',
        moduleTitle: 'Basic Grammar & Cases',
        level: 'A1',
        lessonNumber: 12,
        title: 'Nominative vs. Accusative Case (der -> den)',
        titleUrdu: 'فاعلی اور مفعولی حالت کا فرق (صرف مذکر der بنتا ہے den)',
        titleRomanUrdu: 'Nominativ vs Akkusativ ka Farq (Sirf Muzakkar der banta hai den)',
        description: 'Understand direct objects and why only masculine changes in the Accusative case.',
        durationMinutes: 25,
        sections: [
          {
            title: 'What is a Case in German? / کیس (حالت) کیا ہے؟',
            titleUrdu: 'جرمن کیس کا تعارف',
            titleRomanUrdu: 'German Case ka Taaruf',
            contentEn: 'In German, the article of a noun changes depending on the job the noun is doing in the sentence.\n- Nominativ: The Subject (who is doing the action?)\n- Akkusativ: The Direct Object (who or what is receiving the action?)',
            contentUr: 'جرمن میں جملے کے اندر اسم کے کردار کے مطابق اس کا آرٹیکل تبدیل ہو جاتا ہے۔\n- فاعلی حالت (Nominativ): کام کرنے والا (فاعل)۔\n- مفعولی حالت (Akkusativ): جس پر کام واقع ہو (مفعول)۔\nخوشخبری: اکیوزیٹو (Akkusativ) میں صرف اور صرف مذکر (Masculine) تبدیل ہو کر "den" یا "einen" بنتا ہے! مونث، نیوٹر اور جمع بالکل ویسے ہی رہتے ہیں!',
            contentRomanUrdu: 'German mein jumlay ke andar noun ke role ke mutabiq uska article badal jaata hai. Nominativ = Faael (Subject), Akkusativ = Maf\'ool (Direct Object). Khushkhabri: Akkusativ mein SIRF muzakkar (der) badal kar "den" aur "einen" banta hai! Feminine, neuter aur plural same rehte hain!',
            tableData: {
              headers: ['Gender', 'Nominativ (Subject)', 'Akkusativ (Direct Object)', 'Indefinite Akkusativ', 'Negative Akkusativ', 'Example Sentence'],
              rows: [
                ['Masculine (مذکر)', 'der Mann / Tisch', 'den Mann / Tisch', 'einen Mann / Tisch', 'keinen Mann / Tisch', 'Ich habe einen Tisch. (I have a table)'],
                ['Feminine (مونث)', 'die Frau / Lampe', 'die Frau / Lampe (Unchanged!)', 'eine Frau / Lampe', 'keine Frau / Lampe', 'Ich sehe die Lampe. (I see the lamp)'],
                ['Neuter (نیوٹر)', 'das Kind / Buch', 'das Kind / Buch (Unchanged!)', 'ein Kind / Buch', 'kein Kind / Buch', 'Ich lese ein Buch. (I read a book)'],
                ['Plural (جمع)', 'die Bücher', 'die Bücher (Unchanged!)', '— (no indefinite)', 'keine Bücher', 'Ich habe keine Bücher. (I have no books)']
              ]
            }
          }
        ]
      }
    ]
  },
  // MODULE 9: EVERYDAY VOCABULARY
  {
    id: 'a1-mod-9',
    level: 'A1',
    moduleNumber: 9,
    title: 'Essential A1 Everyday Vocabulary Themes',
    titleUrdu: 'روزمرہ زندگی کا بنیادی A1 ذخیرہ الفاظ',
    titleRomanUrdu: 'Rozmarrah Zindagi ka Bunyadi A1 Zakheera Alfaaz',
    description: 'Learn over 15 high-frequency themes: family, food & drinks, shopping, housing, professions, body parts, and travel.',
    iconName: 'ListFilter',
    lessons: [
      {
        id: 'a1-l13',
        moduleId: 'a1-mod-9',
        moduleTitle: 'Everyday Vocabulary',
        level: 'A1',
        lessonNumber: 13,
        title: 'Family, Relations & Home Life',
        titleUrdu: 'خاندان، رشتے اور گھریلو زندگی کے الفاظ',
        titleRomanUrdu: 'Khandan, Rishte aur Gharelu Zindagi ke Alfaaz',
        description: 'Learn parents, siblings, children, and possessive pronouns (mein / dein).',
        durationMinutes: 15,
        sections: [
          {
            title: 'Family Members Vocabulary / خاندان کے افراد',
            titleUrdu: 'خاندانی رشتے',
            titleRomanUrdu: 'Khandani Rishtay',
            contentEn: 'Study these essential family words with their articles and plural endings:',
            contentUr: 'خاندان کے تمام اہم الفاظ ان کے آرٹیکلز اور جمع کے ساتھ یاد کریں:',
            contentRomanUrdu: 'Khandan ke tamam ahem alfaz unke articles aur jama ke sath yaad karein:',
            tableData: {
              headers: ['German Word & Article', 'Plural Form', 'English', 'Urdu Meaning', 'Roman Urdu'],
              rows: [
                ['die Familie', 'die Familien', 'Family', 'خاندان', 'Khandan'],
                ['der Vater', 'die Väter', 'Father', 'والد / باپ', 'Walid / Baap'],
                ['die Mutter', 'die Mütter', 'Mother', 'والدہ / ماں', 'Walida / Maa'],
                ['die Eltern (Plural)', '—', 'Parents', 'والدین', 'Walidain'],
                ['der Sohn', 'die Söhne', 'Son', 'بیٹا', 'Beta'],
                ['die Tochter', 'die Töchter', 'Daughter', 'بیٹی', 'Beti'],
                ['der Bruder', 'die Brüder', 'Brother', 'بھائی', 'Bhai'],
                ['die Schwester', 'die Schwestern', 'Sister', 'بہن', 'Behan'],
                ['der Großvater (Opa)', 'die Großväter', 'Grandfather', 'دادا / نانا', 'Dada / Nana'],
                ['die Großmutter (Oma)', 'die Großmütter', 'Grandmother', 'دادی / نانی', 'Dadi / Nani']
              ]
            }
          }
        ]
      }
    ]
  },
  // MODULE 10: 4 SKILLS INTEGRATION
  {
    id: 'a1-mod-10',
    level: 'A1',
    moduleNumber: 10,
    title: 'A1 Reading, Listening, Speaking & Writing',
    titleUrdu: 'چاروں صلاحیتوں کی عملی مشق: پڑھنا، سننا، بولنا اور لکھنا',
    titleRomanUrdu: 'Chaaron Salahiyaton ki Mashq: Parhna, Sunna, Bolna aur Likhna',
    description: 'Read short dialogs, practice listening with Web Speech API audio, fill out official German forms, and write short emails.',
    iconName: 'Compass',
    lessons: [
      {
        id: 'a1-l14',
        moduleId: 'a1-mod-10',
        moduleTitle: '4 Skills Integration',
        level: 'A1',
        lessonNumber: 14,
        title: 'Filling Out Official German Forms & Short Emails',
        titleUrdu: 'جرمن دفتری فارم بھرنا اور مختصر ای میلز لکھنا',
        titleRomanUrdu: 'German Daftari Forms Bharna aur Mukhtasir Emails Likhna',
        description: 'Crucial for real life in Germany and the Goethe-Zertifikat A1 writing module.',
        durationMinutes: 20,
        sections: [
          {
            title: 'Standard Form Fields in Germany / جرمن فارم کے اہم خانے',
            titleUrdu: 'فارم فیلڈز کی اصطلاحات',
            titleRomanUrdu: 'Form fields ki istilahat',
            contentEn: 'Whenever you register in Germany (Anmeldung), rent an apartment, or take an exam, you must fill out a form (Formular).',
            contentUr: 'جب بھی آپ جرمنی میں رجسٹریشن، بینک اکاؤنٹ کھولنے یا امتحان دینے کے لیے فارم بھرتے ہیں تو یہ اصطلاحات استعمال ہوتی ہیں:',
            contentRomanUrdu: 'Jab bhi aap Germany mein registration, bank account ya exam ke liye form bharte hain to ye alfaz aate hain:',
            tableData: {
              headers: ['German Form Term', 'Meaning in English', 'Urdu Meaning', 'Example Entry'],
              rows: [
                ['Vorname', 'First name', 'پہلا نام / ذاتی نام', 'Muhammad'],
                ['Familienname / Nachname', 'Last name / Surname', 'خاندانی نام / کنیت', 'Khan'],
                ['Geburtsdatum', 'Date of birth', 'تاریخِ پیدائش', '15.08.1998'],
                ['Geburtsort', 'Place of birth', 'جائے پیدائش', 'Lahore'],
                ['Staatsangehörigkeit', 'Nationality', 'قومیت', 'pakistanisch'],
                ['Wohnort', 'City of residence', 'رہائشی شہر', 'Berlin'],
                ['Postleitzahl (PLZ)', 'Postal code', 'ڈاک کا کوڈ', '10115'],
                ['Unterschrift', 'Signature', 'دستخط', '[Your Signature]']
              ]
            }
          }
        ]
      }
    ]
  },
  // MODULE 11: A1 TEST PREPARATION
  {
    id: 'a1-mod-11',
    level: 'A1',
    moduleNumber: 11,
    title: 'A1 Goethe-Zertifikat Test Preparation',
    titleUrdu: 'گوئٹے سرٹیفیکیٹ A1 امتحان کی مکمل تیاری اور فرضی امتحان',
    titleRomanUrdu: 'Goethe-Zertifikat A1 Imtehan ki Mukammal Tayyari aur Mock Exam',
    description: 'Learn the exact 4-part Goethe-Zertifikat format (Hören, Lesen, Schreiben, Sprechen), grading scales, tips, and timed practice.',
    iconName: 'GraduationCap',
    lessons: [
      {
        id: 'a1-l15',
        moduleId: 'a1-mod-11',
        moduleTitle: 'A1 Test Prep',
        level: 'A1',
        lessonNumber: 15,
        title: 'Goethe A1 Exam Structure, Strategies & Passing Tips',
        titleUrdu: 'A1 امتحان کا ڈھانچہ، حکمتِ عملی اور کامیابی کے اصول',
        titleRomanUrdu: 'A1 Exam ka Dhancha, Hikmat-e-Amli aur Kamyabi ke Usool',
        description: 'Understand how the 60 points are distributed and how Pakistani students can score 85%+.',
        durationMinutes: 20,
        sections: [
          {
            title: 'Exam Breakdown / امتحان کے چاروں حصے',
            titleUrdu: 'امتحان کے 4 ماڈیولز',
            titleRomanUrdu: 'Imtehan ke 4 Modules',
            contentEn: 'The Goethe-Zertifikat A1: Start Deutsch 1 exam consists of 4 parts. Total points: 60 (scaled to 100). Passing score is 60% (36 points out of 60).',
            contentUr: 'گوئٹے انسٹیٹیوٹ کا A1 امتحان چار حصوں پر مشتمل ہوتا ہے۔ کل 60 پوائنٹس ہوتے ہیں جن میں پاس ہونے کے لیے کم از کم 60٪ (یعنی 36 پوائنٹس) درکار ہوتے ہیں۔',
            contentRomanUrdu: 'Goethe A1 exam 4 hisson par mushtamil hota hai. Total 60 points hote hain, pass hone ke liye kam az kam 36 points (60%) zaroori hain.',
            tableData: {
              headers: ['Module', 'Duration', 'Tasks & Format', 'Max Score', 'Pass Strategy'],
              rows: [
                ['Hören (Listening)', 'approx. 20 min', 'Short daily announcements, telephone messages, conversations (played 1-2 times)', '15 points', 'Listen for keywords, numbers and times'],
                ['Lesen (Reading)', '25 min', 'Short notes, classifieds, signage, short informational notices', '15 points', 'Scan for exact names, dates, and forbidden actions'],
                ['Schreiben (Writing)', '20 min', 'Part 1: Fill out a 5-field form. Part 2: Write a short 30-word email.', '15 points', 'Memorize standard greeting and sign-off formulas!'],
                ['Sprechen (Speaking)', 'approx. 15 min', 'Part 1: Self-introduction & spelling. Part 2: Ask & answer with word cards. Part 3: Formulate requests with picture cards.', '15 points', 'Practice spelling your name and numbers smoothly!']
              ]
            }
          }
        ]
      }
    ]
  },

  // ==========================================
  // LEVEL A2: ELEMENTARY MASTERY
  // ==========================================
  {
    id: 'a2-mod-1',
    level: 'A2',
    moduleNumber: 1,
    title: 'A2 Past Tense: Das Perfekt (haben vs. sein)',
    titleUrdu: 'فعلِ ماضی: پرفیکٹ ٹینس اور Partizip II',
    titleRomanUrdu: 'Fe\'l-e-Maazi: Perfekt Tense aur Partizip II',
    description: 'Learn spoken German past tense: when to use haben vs sein and regular/irregular past participles (ge-...-t / ge-...-en).',
    iconName: 'History',
    lessons: [
      {
        id: 'a2-l1',
        moduleId: 'a2-mod-1',
        moduleTitle: 'Past Tense: Das Perfekt',
        level: 'A2',
        lessonNumber: 1,
        title: 'Mastering the Perfekt Tense with haben & sein',
        titleUrdu: 'پرفیکٹ ٹینس میں haben اور sein کا درست استعمال',
        titleRomanUrdu: 'Perfekt Tense mein haben aur sein ka durust istemal',
        description: 'In spoken German, past events are almost always expressed using the Perfekt tense.',
        durationMinutes: 25,
        sections: [
          {
            title: 'The Golden Perfekt Bracket / ماضی کا سنہری فارمولا',
            titleUrdu: 'پرفیکٹ ٹینس کا سٹرکچر',
            titleRomanUrdu: 'Perfekt Tense ka Structure',
            contentEn: 'Structure: Subject + conjugated auxiliary (haben/sein) in Position 2 + ... + Partizip II at the VERY END of the sentence!\nRule for "sein": Use "sein" as auxiliary ONLY when there is a change of location (gehen, fahren, fliegen, kommen) or a change of state (aufwachen, sterben), plus the verbs sein and bleiben!',
            contentUr: 'فارمولا: فاعل + پوزیشن 2 پر haben یا sein + دیگر معلومات + جملے کے بالکل آخر میں Partizip II!\n"sein" کا قانون: فعلِ معاون کے طور پر "sein" صرف تب آتا ہے جب جگہ کی تبدیلی ہو (جیسے جانا، آنا، اڑنا) یا حالت بدلے، نیز sein اور bleiben کے ساتھ!',
            contentRomanUrdu: 'Formula: Subject + Position 2 par haben/sein + ... + Jumlay ke bilkul AAKHIR mein Partizip II!\nSein ka rule: Jab jagah ya halat badlay (movement from A to B: gehen, fahren, kommen) to auxiliary "sein" aayega!',
            germanExamples: [
              { german: 'Ich habe gestern Deutsch gelernt.', english: 'I studied German yesterday. (haben + gelernt)', urdu: 'میں نے کل جرمن سیکھی تھی۔', romanUrdu: 'Main ne kal German seekhi thi.' },
              { german: 'Ali ist nach Deutschland geflogen.', english: 'Ali flew to Germany. (ist + geflogen - movement!)', urdu: 'علی جرمنی گیا تھا۔ (پرواز کی تھی)', romanUrdu: 'Ali Germany gaya tha.' },
              { german: 'Wir sind zu Hause geblieben.', english: 'We stayed at home. (sind + geblieben)', urdu: 'ہم گھر پر ہی رہے تھے۔', romanUrdu: 'Hum ghar par hi rahe thay.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'a2-mod-2',
    level: 'A2',
    moduleNumber: 2,
    title: 'Two-Way Prepositions (Wechselpräpositionen)',
    titleUrdu: 'دو طرفہ حروفِ جار (حالتِ مفعولی بمقابلہ حالتِ اضافی: Akkusativ vs. Dativ)',
    titleRomanUrdu: 'Do-tarfa Huroof-e-Jaar (Wechselpräpositionen: Wohin vs. Wo)',
    description: 'Master the 9 two-way prepositions: an, auf, hinter, in, neben, über, unter, vor, zwischen with Wohin? (Motion = Akkusativ) vs. Wo? (Location = Dativ).',
    iconName: 'Compass',
    lessons: [
      {
        id: 'a2-l2',
        moduleId: 'a2-mod-2',
        moduleTitle: 'Two-Way Prepositions',
        level: 'A2',
        lessonNumber: 2,
        title: 'The 9 Wechselpräpositionen: Motion vs. Location',
        titleUrdu: 'حرکت بمقابلہ ساکن حالت کا سنہری فرق',
        titleRomanUrdu: 'Harkat vs Saakin Halat ka farq (Wohin vs Wo)',
        description: 'Learn the most famous grammar topic of level A2 with crystal-clear rules.',
        durationMinutes: 25,
        sections: [
          {
            title: 'The Wohin (Akkusativ) vs. Wo (Dativ) Principle',
            titleUrdu: 'کہاں جانا ہے؟ (حرکت) بمقابلہ کہاں ہے؟ (ساکن)',
            titleRomanUrdu: 'Kidhar jaana hai? (Akkusativ) vs Kahan hai? (Dativ)',
            contentEn: 'The 9 prepositions are: an, auf, hinter, in, neben, über, unter, vor, zwischen.\n- Question WOHIN? (Movement towards a destination) -> AKKUSATIV!\n- Question WO? (Static position / location) -> DATIV!',
            contentUr: 'یہ 9 حروفِ جار ہیں: an, auf, hinter, in, neben, über, unter, vor, zwischen۔\n1. اگر حرکت کسی منزل کی طرف ہو (Wohin? کدھر جا رہے ہو؟) تو اکیوزیٹو (Akkusativ) آئے گا۔\n2. اگر ساکن جگہ پر موجودگی ہو (Wo? کہاں ہے؟) تو ڈیٹیو (Dativ) آئے گا!',
            contentRomanUrdu: 'Wohin? (Destination / Harkat) = AKKUSATIV.\nWo? (Location / Saakin mojoodgi) = DATIV.',
            germanExamples: [
              { german: 'Ich stelle das Buch auf den Tisch. (Wohin? -> Akkusativ: den Tisch)', english: 'I put the book onto the table. (Action of placing)', urdu: 'میں کتاب میز پر رکھتا ہوں۔ (حرکت / اکیوزیٹو)', romanUrdu: 'Main kitab mez par rakhta hoon.' },
              { german: 'Das Buch liegt auf dem Tisch. (Wo? -> Dativ: dem Tisch)', english: 'The book is lying on the table. (Static location)', urdu: 'کتاب میز پر پڑی ہے۔ (ساکن / ڈیٹیو)', romanUrdu: 'Kitab mez par pari hai.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'a2-mod-3',
    level: 'A2',
    moduleNumber: 3,
    title: 'Subordinate Clauses with weil, dass, wenn',
    titleUrdu: 'ذیلی جملے (Nebensätze): weil، dass اور wenn کے ساتھ فعل کا آخر میں جانا',
    titleRomanUrdu: 'Zeili Jumlay (Nebensätze): weil, dass, wenn ke sath verb aakhir mein',
    description: 'Learn how subordinating conjunctions kick the conjugated verb all the way to the end of the sentence.',
    iconName: 'ArrowRightCircle',
    lessons: [
      {
        id: 'a2-l3',
        moduleId: 'a2-mod-3',
        moduleTitle: 'Subordinate Clauses',
        level: 'A2',
        lessonNumber: 3,
        title: 'The Verb-Kicker Conjunctions: weil, dass, wenn',
        titleUrdu: 'فعل کو جملے کے آخر میں پھینکنے والے حروفِ عطف',
        titleRomanUrdu: 'Verb ko jumlay ke aakhir mein phenkne walay connectors',
        description: 'Understand the sentence structure of German subordinate clauses.',
        durationMinutes: 20,
        sections: [
          {
            title: 'Subordinate Clause Rule: Verb at the END! / فعل سب سے آخر میں',
            titleUrdu: 'ذیلی جملے کا سنہری قانون',
            titleRomanUrdu: 'Nebensatz ka Golden Rule: Verb at the END',
            contentEn: 'Whenever a subordinate clause begins with weil (because), dass (that), or wenn (if/when), the CONJUGATED VERB MUST BE PLACED AT THE VERY END OF THAT CLAUSE.',
            contentUr: 'جب بھی کوئی جملہ weil (کیونکہ)، dass (کہ)، یا wenn (اگر / جب) سے شروع ہو تو اس حصے کا گردان شدہ فعل اٹھ کر بالکل آخری لفظ بن جاتا ہے!',
            contentRomanUrdu: 'Jab bhi jumla weil (kyunki), dass (ke), ya wenn (agar) se shuru ho to verb bilkul aakhir mein chala jaata hai!',
            germanExamples: [
              { german: 'Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.', english: 'I study German because I want to work in Germany. (möchte goes to end!)', urdu: 'میں جرمن سیکھتا ہوں کیونکہ میں جرمنی میں کام کرنا چاہتا ہوں۔', romanUrdu: 'Main German seekhta hoon kyunki main Germany mein kaam karna chahta hoon.' },
              { german: 'Ich weiß, dass du fleißig bist.', english: 'I know that you are hardworking. (bist goes to end!)', urdu: 'مجھے معلوم ہے کہ تم محنتی ہو۔', romanUrdu: 'Mujhe maloom hai ke tum mehnti ho.' }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // LEVEL B1: INDEPENDENT USER & FLUENCY
  // ==========================================
  {
    id: 'b1-mod-1',
    level: 'B1',
    moduleNumber: 1,
    title: 'Relative Clauses (Relativsätze)',
    titleUrdu: 'صلہ دار جملے (Relative Clauses): der, die, das بحیثیت موصولی اسم',
    titleRomanUrdu: 'Sila-daar Jumlay (Relativsätze): der, die, das ka rabt',
    description: 'Learn how to connect clauses and describe people and things precisely using relative pronouns in Nominative, Accusative, and Dative.',
    iconName: 'Link',
    lessons: [
      {
        id: 'b1-l1',
        moduleId: 'b1-mod-1',
        moduleTitle: 'Relative Clauses',
        level: 'B1',
        lessonNumber: 1,
        title: 'Mastering German Relative Clauses with Cases',
        titleUrdu: 'جرمن ریلیٹو کلازز کی بناوٹ اور کیسز کا انتخاب',
        titleRomanUrdu: 'German Relative Clauses ki Banawat aur Cases ka Intikhab',
        description: 'Provide richer details in your sentences without repeating nouns.',
        durationMinutes: 25,
        sections: [
          {
            title: 'How Relative Pronouns Work / موصولی ضمائر کا طریقہ کار',
            titleUrdu: 'ریلیٹو پروناؤن کا استعمال',
            titleRomanUrdu: 'Relative Pronoun ka istemal',
            contentEn: 'A relative clause gives extra information about a noun. The gender and number come from the antecedent noun, while the CASE comes from the relative clause\'s internal grammar. The verb goes to the END of the relative clause!',
            contentUr: 'ریلیٹو کلاز کسی اسم کے بارے میں مزید تفصیل بیان کرتی ہے۔ اس کا آرٹیکل پچھلے اسم کی جنس سے اور اس کا کیس (Nominativ/Akkusativ/Dativ) اس ریلیٹو کلاز کے اپنے فعل سے طے ہوتا ہے۔ فعل جملے کے آخر میں آتا ہے!',
            contentRomanUrdu: 'Relative clause kisi noun ki mazeed wazahat karti hai. Iska verb hamesha clause ke aakhir mein aata hai!',
            germanExamples: [
              { german: 'Das ist der Mann, der mir geholfen hat. (Nominative subject who helped me)', english: 'That is the man who helped me.', urdu: 'یہ وہ آدمی ہے جس نے میری مدد کی تھی۔', romanUrdu: 'Yeh woh aadmi hai jis ne meri madad ki thi.' },
              { german: 'Das ist das Buch, das ich gestern gelesen habe. (Accusative direct object)', english: 'That is the book that I read yesterday.', urdu: 'یہ وہ کتاب ہے جو میں نے کل پڑھی تھی۔', romanUrdu: 'Yeh woh kitab hai jo main ne kal parhi thi.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'b1-mod-2',
    level: 'B1',
    moduleNumber: 2,
    title: 'Infinitive Constructions: um... zu, ohne... zu, anstatt... zu',
    titleUrdu: 'مصدری تراکیب (Infinitive Clauses): um... zu (تاکہ / کے لیے)',
    titleRomanUrdu: 'Masdari Tarkeeb: um... zu (taake / ke liye)',
    description: 'Master expressing intentions, conditions, and purposes with infinitive verbs with "zu".',
    iconName: 'Maximize2',
    lessons: [
      {
        id: 'b1-l2',
        moduleId: 'b1-mod-2',
        moduleTitle: 'Infinitive Constructions',
        level: 'B1',
        lessonNumber: 2,
        title: 'Expressing Purpose with "um ... zu + Infinitive"',
        titleUrdu: 'مقصد اور ارادے کا اظہار "um ... zu" کے ساتھ',
        titleRomanUrdu: 'Maqsad aur Irade ka Izhaar "um ... zu" ke sath',
        description: 'Learn the most common way to say "in order to" when the subject in both clauses is identical.',
        durationMinutes: 20,
        sections: [
          {
            title: 'Formula for um ... zu / فارمولا اور استعمال',
            titleUrdu: 'ارادے کا سنہری جملہ',
            titleRomanUrdu: 'Formula for um... zu',
            contentEn: 'When the subject of both clauses is the same, use: Main clause, um + [other information] + zu + Infinitive verb at the very end.',
            contentUr: 'جب دونوں جملوں کا فاعل ایک ہی ہو تو "تاکہ / کرنے کے لیے" کے معنی کے لیے um ... zu استعمال ہوتا ہے:',
            contentRomanUrdu: 'Jab dono hisson ka subject aik hi ho to "um ... zu" use karein:',
            germanExamples: [
              { german: 'Ich lerne Deutsch, um in Deutschland zu studieren.', english: 'I learn German in order to study in Germany.', urdu: 'میں جرمن سیکھتا ہوں تاکہ جرمنی میں تعلیم حاصل کر سکوں۔', romanUrdu: 'Main German seekhta hoon taake Germany mein taleem hasil kar sakoon.' },
              { german: 'Er spart Geld, um ein Auto zu kaufen.', english: 'He saves money in order to buy a car.', urdu: 'وہ پیسے بچاتا ہے تاکہ گاڑی خرید سکے۔', romanUrdu: 'Woh paise bachata hai taake gaari khareed sakay.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'b1-mod-3',
    level: 'B1',
    moduleNumber: 3,
    title: 'Polite Requests & Wishes: Konjunktiv II (hätte, wäre, würde)',
    titleUrdu: 'شائستہ فرمائش اور فرضی خواہشات: کون یونکٹیو 2 (کاش / اگر)',
    titleRomanUrdu: 'Shayasta Farmaish aur Farzi Khwahishaat: Konjunktiv II',
    description: 'Learn polite requests ("Könnten Sie bitte...", "Ich hätte gern...") and unreal hypothetical wishes with wäre, hätte, and würde + Infinitiv.',
    iconName: 'HeartHandshake',
    lessons: [
      {
        id: 'b1-l3',
        moduleId: 'b1-mod-3',
        moduleTitle: 'Konjunktiv II',
        level: 'B1',
        lessonNumber: 3,
        title: 'Expressing Courtesy & Unreal Wishes with Konjunktiv II',
        titleUrdu: 'انتہائی باادب فرمائش اور تمناؤں کا اظہار',
        titleRomanUrdu: 'Ba-adab Farmaish aur Tamannaon ka Izhaar',
        description: 'Essential for cafe orders, polite emails, and conditional daydreams.',
        durationMinutes: 20,
        sections: [
          {
            title: 'Forms of Konjunktiv II / کون یونکٹیو 2 کی بنیادی اشکال',
            titleUrdu: 'اہم اشکال',
            titleRomanUrdu: 'Ahem Ashkaal',
            contentEn: '1. "hätte" = would have (from haben)\n2. "wäre" = would be (from sein)\n3. "könnte" = could (polite request)\n4. "würde + Infinitive" = would do something',
            contentUr: '1. hätte = کاش میرے پاس ہوتا\n2. wäre = کاش میں ہوتا\n3. könnte = کیا آپ ازراہِ کرم کر سکتے ہیں؟\n4. würde + فعل = شائستہ درخواست یا تمنا',
            contentRomanUrdu: '1. hätte = kaash mere paas hota\n2. wäre = kaash main hota\n3. könnte = kya aap azraah-e-karam kar sakte hain?\n4. würde + verb = shaiysta guzarish',
            germanExamples: [
              { german: 'Ich hätte gern einen Kaffee, bitte.', english: 'I would like to have a coffee, please. (Polite ordering)', urdu: 'براہِ کرم مجھے ایک کافی چاہیے ہوگی۔ (نہایت شائستہ)', romanUrdu: 'Barah-e-karam mujhe aik coffee chahiye hogi.' },
              { german: 'Könnten Sie mir bitte helfen?', english: 'Could you please help me?', urdu: 'کیا آپ ازراہِ کرم میری مدد کر سکتے ہیں؟', romanUrdu: 'Kya aap azraah-e-karam meri madad kar sakte hain?' },
              { german: 'Wenn ich viel Zeit hätte, würde ich nach Deutschland reisen.', english: 'If I had a lot of time, I would travel to Germany.', urdu: 'اگر میرے پاس کافی وقت ہوتا تو میں جرمنی کا سفر کرتا۔', romanUrdu: 'Agar mere paas kafi waqt hota to main Germany ka safar karta.' }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // LEVEL B2: ADVANCED & PROFESSIONAL GERMAN
  // ==========================================
  {
    id: 'b2-mod-1',
    level: 'B2',
    moduleNumber: 1,
    title: 'The Passive Voice & Passive Alternatives (Passiv)',
    titleUrdu: 'فعلِ مجہول (Passive Voice) اور اس کے جدید متبادل',
    titleRomanUrdu: 'Fe\'l-e-Majhool (Passive Voice) aur uske Jadeed Mutabadil',
    description: 'Learn Vorgangspassiv (werden + Partizip II), Zustandspassiv (sein + Partizip II), and B2 academic alternatives (lässt sich, ist zu + Infinitiv, -bar).',
    iconName: 'ShieldAlert',
    lessons: [
      {
        id: 'b2-l1',
        moduleId: 'b2-mod-1',
        moduleTitle: 'The Passive Voice',
        level: 'B2',
        lessonNumber: 1,
        title: 'Mastering the Process Passive (werden + Partizip II)',
        titleUrdu: 'ورگانگس پاسیو کی مکمل ساخت اور دفتری استعمال',
        titleRomanUrdu: 'Vorgangspassiv ki Mukammal Saakht aur Daftari Istemal',
        description: 'Crucial for university lectures, technical reports, and professional German correspondence.',
        durationMinutes: 25,
        sections: [
          {
            title: 'Passive Voice Formula & Usage / فعلِ مجہول کا طریقہ کار',
            titleUrdu: 'پاسیو وائس کا سنہری اصول',
            titleRomanUrdu: 'Passive Voice ka Golden Rule',
            contentEn: 'Active: Der Mechaniker repariert das Auto.\nPassive: Das Auto wird (vom Mechaniker) repariert.\nFormula: Subject (former object) + conjugated form of "werden" + [von/durch agent] + Partizip II at the end.',
            contentUr: 'معروف جملہ: مکینک گاڑی ٹھیک کرتا ہے۔\nمجہول جملہ: گاڑی (مکینک کے ذریعے) ٹھیک کی جاتی ہے۔\nفارمولا: مفعول بن گیا نیا فاعل + فعلِ werden کی گردان + دیگر الفاظ + آخر میں Partizip II۔',
            contentRomanUrdu: 'Active: Der Mechaniker repariert das Auto.\nPassive: Das Auto wird (vom Mechaniker) repariert.\nFormula: Subject + werden + Partizip II aakhir mein.',
            germanExamples: [
              { german: 'Die Bewerbung wird heute abgeschickt.', english: 'The job application is being sent today.', urdu: 'ملازمت کی درخواست آج بھیجی جا رہی ہے۔', romanUrdu: 'Naukri ki darkhwast aaj bheji ja rahi hai.' },
              { german: 'Das Problem wurde sofort gelöst. (Präteritum Passiv)', english: 'The problem was solved immediately.', urdu: 'مسئلہ فوراً حل کر دیا گیا تھا۔', romanUrdu: 'Masla foran hal kar diya gaya tha.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'b2-mod-2',
    level: 'B2',
    moduleNumber: 2,
    title: 'Nominalization & Formal Academic Style (Nominalstil)',
    titleUrdu: 'اسم سازی (Nominalization) اور اعلیٰ علمی اندازِ تحریر',
    titleRomanUrdu: 'Ism-saazi (Nominalization) aur Aala Ilmi Andaz-e-Tehreer',
    description: 'Transform verbal sentences into concise noun phrases using prepositions with Genitive (während, wegen, trotz, infolge) for C1/B2 academic writing.',
    iconName: 'FileText',
    lessons: [
      {
        id: 'b2-l2',
        moduleId: 'b2-mod-2',
        moduleTitle: 'Nominal Style',
        level: 'B2',
        lessonNumber: 2,
        title: 'Verbal Style to Nominal Style Conversions',
        titleUrdu: 'فعل والے جملوں کو مختصر اور علمی اسمی انداز میں بدلنا',
        titleRomanUrdu: 'Verbal Style ko Ilmi Nominal Style mein tabdeel karna',
        description: 'How university texts and quality German newspapers condense complex ideas.',
        durationMinutes: 25,
        sections: [
          {
            title: 'Verbal vs. Nominal Style Comparison / تقابلی جائزہ',
            titleUrdu: 'عام بمقابلہ علمی انداز',
            titleRomanUrdu: 'Aam vs Ilmi Andaz',
            contentEn: 'Verbal style uses subordinate clauses (e.g. "Als wir ankamen..."). Nominal style condenses this with a preposition + noun (e.g. "Bei unserer Ankunft...").',
            contentUr: 'عام بول چال میں لمبے ذیلی جملے بولے جاتے ہیں جبکہ باوقار دفتری اور اخباری جرمن میں انہیں حرفِ جار اور اسم کے ساتھ نہایت مختصر کر دیا جاتا ہے:',
            contentRomanUrdu: 'Aam bol chal mein lambe clauses bole jaate hain jabke daftari aur scientific German mein unhein preposition + noun se concise kiya jaata hai:',
            germanExamples: [
              { german: 'Verbal: Weil es stark geregnet hat, fiel das Spiel aus.', english: 'Because it rained heavily, the match was canceled.', urdu: 'چونکہ شدید بارش ہوئی اس لیے میچ منسوخ ہو گیا۔', romanUrdu: 'Kyunki shadeed barish hui is liye match cancel ho gaya.' },
              { german: 'Nominal: Wegen des starken Regens fiel das Spiel aus.', english: 'Due to the heavy rain, the match was canceled. (Wegen + Genitive)', urdu: 'شدید بارش کے سبب میچ منسوخ ہو گیا۔ (علمی انداز)', romanUrdu: 'Shadeed barish ke sabab match cancel ho gaya.' }
            ]
          }
        ]
      }
    ]
  }
];
