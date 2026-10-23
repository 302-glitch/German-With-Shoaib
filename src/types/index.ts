export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2';

export type LanguageMode = 'en' | 'ur' | 'roman_ur';

export type ArticleType = 'der' | 'die' | 'das' | 'plural' | 'none';

export interface VocabularyItem {
  id: string;
  german: string;
  article?: 'der' | 'die' | 'das';
  plural?: string;
  english: string;
  urdu: string;
  romanUrdu: string;
  pronunciationGuide: string;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'preposition' | 'phrase' | 'pronoun' | 'conjunction';
  level: CEFRLevel;
  category: string;
  exampleSentence: string;
  exampleTranslationEn: string;
  exampleTranslationUr: string;
  exampleTranslationRomanUr: string;
  // SRS properties
  repetition?: number;
  interval?: number; // days
  easeFactor?: number;
  nextReviewDate?: string;
  isFavorite?: boolean;
  isDifficult?: boolean;
  isLearned?: boolean;
}

export interface ConjugationRow {
  pronoun: string;
  conjugation: string;
  english: string;
  urdu: string;
  romanUrdu: string;
}

export interface LessonExercise {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'reorder' | 'translate' | 'article-select';
  question: string;
  questionUr?: string;
  questionUrdu?: string;
  questionRomanUrdu?: string;
  options?: string[];
  correctAnswer: string | string[];
  explanationEn: string;
  explanationUr: string;
  explanationRomanUr?: string;
  explanationRomanUrdu?: string;
  wordsForReorder?: string[];
}

export interface ContentSection {
  title: string;
  titleUrdu?: string;
  titleRomanUrdu?: string;
  contentEn: string;
  contentUr: string;
  contentRomanUr?: string;
  contentRomanUrdu?: string;
  germanExamples?: {
    german: string;
    english: string;
    urdu: string;
    romanUrdu: string;
    grammarNote?: string;
    audioText?: string;
  }[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  conjugationTable?: ConjugationRow[];
  pronunciationGuide?: {
    letterOrCombo: string;
    germanSound: string;
    urduApproximation: string;
    romanUrduApproximation: string;
    englishEquivalent: string;
    sampleWords: { word: string; meaning: string; ipa?: string }[];
    importantCaution?: string;
  }[];
  exercises?: LessonExercise[];
  culturalNote?: {
    title: string;
    contentEn: string;
    contentUr: string;
  };
}

export interface Lesson {
  id: string;
  moduleId: string;
  moduleTitle: string;
  level: CEFRLevel;
  lessonNumber: number;
  title: string;
  titleUrdu: string;
  titleRomanUrdu: string;
  description: string;
  durationMinutes: number;
  sections: ContentSection[];
  vocabularyList?: string[];
  practiceQuizId?: string;
}

export interface CourseModule {
  id: string;
  level: CEFRLevel;
  moduleNumber: number;
  title: string;
  titleUrdu: string;
  titleRomanUrdu: string;
  description: string;
  iconName: string;
  lessons: Lesson[];
}

export interface GrammarTopic {
  id: string;
  title: string;
  level: CEFRLevel;
  category: 'Basics' | 'Verbs & Tenses' | 'Nouns & Articles' | 'Cases' | 'Syntax & Word Order' | 'Clauses & Connectors' | 'Advanced Structures';
  beginnerExplanationEn: string;
  beginnerExplanationUr: string;
  beginnerExplanationRomanUr?: string;
  beginnerExplanationRomanUrdu?: string;
  detailedExplanationEn: string;
  detailedExplanationUr: string;
  detailedExplanationRomanUr?: string;
  detailedExplanationRomanUrdu?: string;
  sentenceFormula?: string;
  tables?: {
    title: string;
    headers: string[];
    rows: string[][];
  }[];
  examples: {
    german: string;
    english: string;
    urdu: string;
    romanUrdu: string;
    highlightWord?: string;
  }[];
  commonMistakes: {
    incorrect: string;
    correct: string;
    whyEn: string;
    whyUr: string;
    whyRomanUr?: string;
    whyRomanUrdu?: string;
  }[];
  practiceQuestions: LessonExercise[];
  relatedTopicIds?: string[];
}

export interface SentenceBuilderChallenge {
  id: string;
  level: CEFRLevel;
  category: 'Present Tense V2' | 'Questions (W & Ja/Nein)' | 'Negation (nicht vs kein)' | 'Modal Verbs' | 'Perfekt (Past)' | 'Wechselpräpositionen' | 'Subordinate Clauses (weil/dass/wenn)' | 'Relative Clauses' | 'Konjunktiv II' | 'Passive Voice';
  targetEnglish: string;
  targetUrdu: string;
  targetRomanUrdu: string;
  explanationEn: string;
  explanationUr: string;
  explanationRomanUr?: string;
  explanationRomanUrdu?: string;
  ruleHint: string;
  availableWords: string[];
  acceptedSentences: string[];
}

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'select-article' | 'reorder-words';
  level: CEFRLevel;
  topic: string;
  promptEn: string;
  promptUr: string;
  promptRomanUr?: string;
  promptRomanUrdu?: string;
  audioPrompt?: string;
  options?: string[];
  correctAnswer: string | string[];
  explanationEn: string;
  explanationUr: string;
  explanationRomanUr?: string;
  explanationRomanUrdu?: string;
  words?: string[];
}

export interface ReadingExercise {
  id: string;
  level: CEFRLevel;
  title: string;
  titleUrdu: string;
  germanText: string;
  englishTranslation: string;
  urduTranslation: string;
  vocabularyGlossary: { word: string; meaningEn: string; meaningUr: string }[];
  questions: {
    id: string;
    questionEn: string;
    questionUr?: string;
    questionUrdu?: string;
    options: string[];
    correctIndex: number;
    explanationEn: string;
    explanationUr: string;
  }[];
}

export interface WritingExercise {
  id: string;
  level: CEFRLevel;
  title: string;
  format: 'informal-email' | 'formal-email' | 'registration-form' | 'complaint' | 'opinion-essay';
  promptEn: string;
  promptUr: string;
  promptRomanUr?: string;
  promptRomanUrdu?: string;
  requiredPoints: string[];
  usefulPhrases: { german: string; meaningEn: string; meaningUr: string }[];
  checklist: string[];
  modelAnswer: string;
  wordCountTarget: { min: number; max: number };
}

export interface SpeakingExercise {
  id: string;
  level: CEFRLevel;
  title: string;
  situationEn: string;
  situationUr: string;
  roleplayPrompt: string;
  partnerLines?: { speaker: string; german: string; translationEn: string; translationUr: string }[];
  modelAudioText: string;
  keyPhrases: { german: string; meaningEn: string; meaningUr: string }[];
  timerSeconds: number;
}

export interface GoetheResourceItem {
  id: string;
  level: CEFRLevel;
  title: string;
  publisher: string;
  type: 'Official Exam Guideline' | 'Free Model Test' | 'Vocabulary List' | 'Audio Practice' | 'Study Guide';
  officialUrl: string;
  descriptionEn: string;
  descriptionUr: string;
  isExternalOfficial: boolean;
}

export interface UserProgressState {
  currentLevel: CEFRLevel;
  languageMode: LanguageMode;
  theme: 'light' | 'dark';
  completedLessonIds: string[];
  completedQuizScores: Record<string, { score: number; total: number; date: string }>;
  vocabularyStats: Record<string, { srsLevel: number; nextReview: string; isFavorite?: boolean }>;
  streakDays: number;
  lastActiveDate: string;
  dailyGoalMinutes: number;
  todayMinutesStudied: number;
  bookmarkedLessonIds: string[];
  notes: Record<string, string>;
  studyPlan?: {
    targetLevel: CEFRLevel;
    dailyMinutes: number;
    targetExamDate: string;
    studyDays: string[];
  };
}
