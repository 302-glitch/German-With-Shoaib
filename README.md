# Deutsch Master Academy (جرمن ماسٹر اکیڈمی)

> **"Your Journey from A1 Beginner to B2 German Confidence"**  
> Tailored specifically for learners from Pakistan whose first language is Urdu, starting with zero knowledge of German.

---

## 🌟 Key Highlights & Features

1. **Complete A1 to B2 Educational Architecture**:
   - **Level A1**: 11 in-depth modules covering Alphabet & Pronunciation with Urdu phonetics, Greetings (Formal *Sie* vs. Informal *du*), Noun Genders (*der, die, das*), Verb Conjugation (*lernen, kommen, wohnen, sein, haben*), Sentence Structure (*Verb Position 2 rule*), W-Questions, Numbers (0–100 with Urdu inverted similarity), Nominative vs. Accusative, Everyday Vocabulary, and Goethe-Zertifikat A1 exam blueprints.
   - **Level A2**: *Das Perfekt* past tense (*haben* vs. *sein* + *Partizip II*), Two-Way Prepositions (*Wechselpräpositionen*: *Wohin* motion vs. *Wo* location), Subordinate Clauses (*weil, dass, wenn*), Health, Housing, and Travel.
   - **Level B1**: Relative clauses (*Relativsätze*), Polite Subjunctive (*Konjunktiv II: hätte, wäre, würde, könnte*), Purpose Clauses (*um ... zu + Infinitiv*), Guided Writing (formal & informal emails), and B1 Goethe modular preparation.
   - **Level B2**: Passive Voice (*Vorgangspassiv & Zustandspassiv*), Nominal Style (*Nominalstil*), Genitive prepositions, and academic German.

2. **Tailored for Pakistani Students (اردو اور رومن اردو)**:
   - Full trilingual support: **English**, **اردو (Urdu)**, and **Roman Urdu**.
   - Urdu text formatted with Google Fonts' **Noto Nastaliq Urdu** with right-to-left (`dir="rtl"`) layout.
   - Phonetic guide highlighting similarities between German and Urdu (e.g. counting units before tens: *einundzwanzig* = ایک اور بیس = اکیس).

3. **Web Speech API Audio Pronunciation**:
   - Audio playback on German words, letters, examples, and dialogues using native German (`de-DE`) voices.
   - Adjustable playback rates for clear listening comprehension.

4. **Interactive Sentence Builder Lab**:
   - Drag-and-click word builder to assemble German sentences according to grammatical rules (*Verb Position 2*, question inversion, *weil* verb-kicking).
   - Instant grammar feedback, rule hints, and model comparisons.

5. **Vocabulary & Flashcards with Spaced Repetition (SRS)**:
   - SuperMemo SM-2 algorithm: flashcard flip mode with performance grades (*Again, Hard, Good, Easy*).
   - Typing & spelling practice mode with German special character palette (`ä, ö, ü, ß`).
   - Categorized across 15+ real-world themes with article color coding (*der* = blue, *die* = rose, *das* = emerald).

6. **Exam Engine & Goethe-Institut Official Resources**:
   - Timed mock exam runner with countdown timer and instant scoring.
   - Verified official links to Goethe-Institut Karachi, Annemarie-Schimmel-Haus Lahore, and official free model test papers.

7. **Zero-Setup Local Storage & Progress Persistence**:
   - Automatically tracks completed lessons, quiz scores, study streak, bookmarked lessons, and study planner goals.
   - Includes backup export and restore via JSON.

---

## 🚀 How to Run the Website in VS Code

1. Open your terminal in this workspace:
   ```bash
   cd "c:\Users\happy\OneDrive\Desktop\antigravity german"
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000/
   ```

---

## 🛠️ How to Add More Lessons and Vocabulary Later

All curriculum data is separated from UI components in `src/data/`:

- **Add Lessons**: Open [`src/data/coursesData.ts`](file:///c:/Users/happy/OneDrive/Desktop/antigravity%20german/src/data/coursesData.ts) and add a new `Lesson` object to any module.
- **Add Vocabulary**: Open [`src/data/vocabularyData.ts`](file:///c:/Users/happy/OneDrive/Desktop/antigravity%20german/src/data/vocabularyData.ts) and append a `VocabularyItem` with its German word, article, plural, English, Urdu, and Roman Urdu.
- **Add Grammar Rules**: Open [`src/data/grammarData.ts`](file:///c:/Users/happy/OneDrive/Desktop/antigravity%20german/src/data/grammarData.ts) to expand the searchable library.
- **Add Sentence Builder Challenges**: Open [`src/data/sentenceBuilderData.ts`](file:///c:/Users/happy/OneDrive/Desktop/antigravity%20german/src/data/sentenceBuilderData.ts).
- **Add Quizzes**: Open [`src/data/quizzesData.ts`](file:///c:/Users/happy/OneDrive/Desktop/antigravity%20german/src/data/quizzesData.ts).

---

## 📂 Project Directory Structure

```
c:\Users\happy\OneDrive\Desktop\antigravity german\
├── index.html                     # Main entry HTML with German favicon & Google Fonts (Inter + Noto Nastaliq Urdu)
├── package.json                   # Dependencies (React 18, Vite 6, Tailwind CSS, Lucide icons)
├── tailwind.config.js             # Tailwind config with German flag palette & Urdu font
├── tsconfig.json                  # TypeScript compiler settings
├── vite.config.ts                 # Vite bundler configuration (port 3000)
└── src/
    ├── App.tsx                    # Main navigation router & layout
    ├── main.tsx                   # React root mount with ProgressProvider
    ├── index.css                  # Custom scrollbars, glassmorphism, and article color tokens
    ├── types/
    │   └── index.ts               # Complete TypeScript types (CEFRLevel, Lesson, Vocab, Quiz, SRS)
    ├── context/
    │   └── ProgressContext.tsx    # localStorage persistence, streak calculation, and SRS scheduling
    ├── utils/
    │   └── speech.ts              # Web Speech API audio synthesis wrapper
    ├── components/
    │   ├── Navbar.tsx             # Top bar with logo, language selector, streak, search trigger & theme toggle
    │   ├── Sidebar.tsx            # Desktop navigation & mobile drawer
    │   ├── AudioPlayerButton.tsx  # Interactive audio pronunciation button
    │   ├── LevelBadge.tsx         # CEFR level badges (A1, A2, B1, B2)
    │   ├── UrduText.tsx           # Trilingual text renderer (English / RTL Urdu / Roman Urdu)
    │   └── GlobalSearchModal.tsx  # Ctrl+K global search across lessons, grammar, and vocabulary
    ├── data/
    │   ├── coursesData.ts         # Structured modules & lessons for A1 through B2
    │   ├── grammarData.ts         # Searchable German grammar library
    │   ├── vocabularyData.ts      # Flashcard vocabulary dataset
    │   ├── sentenceBuilderData.ts # Sentence construction laboratory challenges
    │   ├── quizzesData.ts         # Timed mock exams and chapter tests
    │   └── skillsPracticeData.ts  # Reading passages, email templates, and Goethe links
    └── pages/
        ├── DashboardView.tsx      # Welcome hero, streak, level cards, daily word/sentence
        ├── RoadmapView.tsx        # Interactive CEFR roadmap & exam timeline
        ├── CourseView.tsx         # Level module browser with lesson status
        ├── LessonViewer.tsx       # In-depth lesson reader with audio, tables & exercises
        ├── GrammarLibraryView.tsx # Searchable grammar reference library
        ├── SentenceBuilderView.tsx# Interactive sentence builder lab
        ├── VocabularyFlashcardsView.tsx # SRS flashcards & spelling practice
        ├── SkillsPracticeView.tsx # Reading, Writing, Speaking & Listening
        ├── QuizzesView.tsx        # Timed Goethe mock exam runner
        ├── GoetheResourcesView.tsx# Official Goethe portals & Pakistan test centers
        ├── StudyPlannerView.tsx   # Personalized schedule generator
        ├── StatsView.tsx          # Analytics, mastery rates, and quiz history
        ├── BookmarksView.tsx      # Starred lessons & revision notes
        └── SettingsView.tsx       # Preferences, theme, and JSON backup/restore
```
