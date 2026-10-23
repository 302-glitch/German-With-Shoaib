import React from 'react';
import { 
  Flame, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  Trophy, 
  ArrowRight, 
  Sparkles, 
  Volume2, 
  Play, 
  RotateCcw, 
  Compass, 
  GraduationCap, 
  Award,
  Layers,
  FileEdit,
  Mic,
  CalendarCheck
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { coursesData } from '../data/coursesData';
import { vocabularyData } from '../data/vocabularyData';
import { AudioPlayerButton } from '../components/AudioPlayerButton';
import { LevelBadge } from '../components/LevelBadge';
import { UrduText } from '../components/UrduText';
import { CEFRLevel } from '../types';

interface DashboardViewProps {
  onNavigate: (tab: string) => void;
  onOpenLesson: (lessonId: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  onNavigate,
  onOpenLesson
}) => {
  const { progress, currentLevel, setCurrentLevel, markLessonComplete } = useProgress();

  // Calculate real metrics
  const allLessons = coursesData.flatMap(m => m.lessons);
  const totalLessonsCount = allLessons.length;
  const completedCount = progress.completedLessonIds.length;
  const overallPercentage = Math.round((completedCount / totalLessonsCount) * 100) || 0;

  // Next recommended lesson: the first uncompleted lesson in current level
  const currentLevelLessons = coursesData
    .filter(m => m.level === currentLevel)
    .flatMap(m => m.lessons);
  
  const nextLesson = currentLevelLessons.find(l => !progress.completedLessonIds.includes(l.id)) || currentLevelLessons[0];

  // Daily German Word & Sentence
  const dailyWord = vocabularyData[11] || vocabularyData[0]; // "Wasser" or "Hallo"
  const dailySentence = {
    german: 'Ich lerne jeden Tag Deutsch, weil ich in Deutschland studieren möchte.',
    english: 'I learn German every day because I want to study in Germany.',
    urdu: 'میں روزانہ جرمن سیکھتا ہوں کیونکہ میں جرمنی میں تعلیم حاصل کرنا چاہتا ہوں۔',
    romanUrdu: 'Main rozana German seekhta hoon kyunki main Germany mein taleem hasil karna chahta hoon.'
  };

  // Quizzes stats
  const completedQuizKeys = Object.keys(progress.completedQuizScores);
  const quizAvgScore = completedQuizKeys.length > 0
    ? Math.round(
        completedQuizKeys.reduce((acc, k) => {
          const item = progress.completedQuizScores[k];
          return acc + (item.score / item.total) * 100;
        }, 0) / completedQuizKeys.length
      )
    : 0;

  const levelProgressMap: Record<CEFRLevel, { total: number; completed: number; percentage: number }> = {
    A1: { total: 0, completed: 0, percentage: 0 },
    A2: { total: 0, completed: 0, percentage: 0 },
    B1: { total: 0, completed: 0, percentage: 0 },
    B2: { total: 0, completed: 0, percentage: 0 },
  };

  (['A1', 'A2', 'B1', 'B2'] as CEFRLevel[]).forEach(lvl => {
    const lvlLessons = coursesData.filter(m => m.level === lvl).flatMap(m => m.lessons);
    const completed = lvlLessons.filter(l => progress.completedLessonIds.includes(l.id)).length;
    levelProgressMap[lvl] = {
      total: lvlLessons.length,
      completed,
      percentage: lvlLessons.length > 0 ? Math.round((completed / lvlLessons.length) * 100) : 0
    };
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Welcome Hero Banner with German flag touch */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white p-6 sm:p-8 md:p-10 shadow-xl border border-slate-800">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-slate-900 via-red-600 to-amber-500" />
        
        {/* Subtle decorative circles */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-amber-300">
              <Sparkles size={14} />
              <span>Willkommen! خوش آمدید • Welcome to German Mastery</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Start Your Journey from <span className="text-amber-400">A1 Beginner</span> to <span className="text-amber-400">B2 German</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Designed specifically for learners from Pakistan. Learn authentic German pronunciation, grammar, and Goethe-Zertifikat exam skills with crystal-clear explanations in English, Urdu, and Roman Urdu.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              {nextLesson ? (
                <button
                  onClick={() => onOpenLesson(nextLesson.id)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition shadow-lg shadow-amber-500/20 active:scale-95"
                >
                  <Play size={16} className="fill-slate-950" />
                  <span>Continue Learning: {nextLesson.title}</span>
                </button>
              ) : (
                <button
                  onClick={() => onNavigate('course-A1')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition shadow-lg active:scale-95"
                >
                  <Play size={16} className="fill-slate-950" />
                  <span>Explore A1 Course</span>
                </button>
              )}

              <button
                onClick={() => onNavigate('sentence-builder')}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition border border-white/10 backdrop-blur-sm"
              >
                <Compass size={16} />
                <span>Sentence Builder Lab</span>
              </button>
            </div>
          </div>

          {/* Key Stat Cards on Hero */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 w-full lg:w-72">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <Flame size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">Streak</span>
              </div>
              <div className="text-2xl font-extrabold text-white">{progress.streakDays} Days</div>
              <div className="text-[11px] text-slate-400">Keep learning daily</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <CheckCircle2 size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">Completed</span>
              </div>
              <div className="text-2xl font-extrabold text-white">{completedCount} Lessons</div>
              <div className="text-[11px] text-slate-400">{overallPercentage}% curriculum</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-blue-400 mb-1">
                <Clock size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">Study Goal</span>
              </div>
              <div className="text-2xl font-extrabold text-white">{progress.todayMinutesStudied} / {progress.dailyGoalMinutes}m</div>
              <div className="text-[11px] text-slate-400">Today&apos;s minutes</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-purple-400 mb-1">
                <Trophy size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">Quiz Avg</span>
              </div>
              <div className="text-2xl font-extrabold text-white">{quizAvgScore}%</div>
              <div className="text-[11px] text-slate-400">{completedQuizKeys.length} quizzes taken</div>
            </div>
          </div>
        </div>
      </div>

      {/* Daily German Word & Daily German Sentence Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Daily Word */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
              <Sparkles size={14} />
              <span>Word of the Day • Wort des Tages</span>
            </span>
            <LevelBadge level={dailyWord.level} size="sm" />
          </div>

          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-baseline gap-2">
                {dailyWord.article && (
                  <span className={`text-sm font-bold ${
                    dailyWord.article === 'der' ? 'text-blue-600 dark:text-blue-400' :
                    dailyWord.article === 'die' ? 'text-rose-600 dark:text-rose-400' :
                    'text-emerald-600 dark:text-emerald-400'
                  }`}>
                    {dailyWord.article}
                  </span>
                )}
                <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {dailyWord.german}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {dailyWord.pronunciationGuide}
                </span>
              </div>

              <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                {dailyWord.english}
              </div>

              <div className="mt-1 font-urdu text-emerald-700 dark:text-emerald-400 text-sm" dir="rtl">
                {dailyWord.urdu} <span className="text-xs text-slate-400">({dailyWord.romanUrdu})</span>
              </div>

              <div className="mt-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs">
                <div className="font-medium text-slate-900 dark:text-slate-100 italic">
                  &ldquo;{dailyWord.exampleSentence}&rdquo;
                </div>
                <div className="text-slate-500 dark:text-slate-400 mt-0.5">
                  {dailyWord.exampleTranslationEn}
                </div>
              </div>
            </div>

            <AudioPlayerButton text={dailyWord.german} iconSize={18} />
          </div>
        </div>

        {/* Daily Sentence */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <Sparkles size={14} />
              <span>Sentence of the Day • Satz des Tages</span>
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300">
              Grammar Highlight
            </span>
          </div>

          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                &ldquo;{dailySentence.german}&rdquo;
              </p>

              <p className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-1">
                {dailySentence.english}
              </p>

              <p className="font-urdu text-emerald-700 dark:text-emerald-400 text-sm mt-1" dir="rtl">
                {dailySentence.urdu}
              </p>

              <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Notice the subordinate clause &ldquo;weil&rdquo; puts the verb &ldquo;möchte&rdquo; at the end!</span>
              </div>
            </div>

            <AudioPlayerButton text={dailySentence.german} iconSize={18} />
          </div>
        </div>

      </div>

      {/* 4 CEFR Level Cards (A1, A2, B1, B2) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Your German Learning Path
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Comprehensive CEFR Curriculum structured for steady mastery
            </p>
          </div>
          <button
            onClick={() => onNavigate('roadmap')}
            className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
          >
            <span>View Full Roadmap</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* A1 Level Card */}
          <div 
            onClick={() => onNavigate('course-A1')}
            className="group cursor-pointer p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-emerald-500 dark:hover:border-emerald-500/50 hover:shadow-md transition-all relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-3">
              <LevelBadge level="A1" size="md" />
              <span className="text-xs font-bold text-slate-500">
                {levelProgressMap.A1.completed} / {levelProgressMap.A1.total}
              </span>
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              A1 Beginner
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
              Alphabet, pronunciation, greetings, basic verbs, articles & sentence order.
            </p>
            {/* Progress Bar */}
            <div className="mt-4 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex justify-between text-[11px] mb-1 font-semibold text-slate-600 dark:text-slate-400">
                <span>Progress</span>
                <span>{levelProgressMap.A1.percentage}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${levelProgressMap.A1.percentage}%` }}
                />
              </div>
            </div>
          </div>

          {/* A2 Level Card */}
          <div 
            onClick={() => onNavigate('course-A2')}
            className="group cursor-pointer p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500 dark:hover:border-blue-500/50 hover:shadow-md transition-all relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-3">
              <LevelBadge level="A2" size="md" />
              <span className="text-xs font-bold text-slate-500">
                {levelProgressMap.A2.completed} / {levelProgressMap.A2.total}
              </span>
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              A2 Elementary
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
              Perfekt past tense, two-way prepositions, housing, travel & subordinate clauses.
            </p>
            <div className="mt-4 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex justify-between text-[11px] mb-1 font-semibold text-slate-600 dark:text-slate-400">
                <span>Progress</span>
                <span>{levelProgressMap.A2.percentage}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div 
                  className="h-full bg-blue-500 rounded-full transition-all duration-500"
                  style={{ width: `${levelProgressMap.A2.percentage}%` }}
                />
              </div>
            </div>
          </div>

          {/* B1 Level Card */}
          <div 
            onClick={() => onNavigate('course-B1')}
            className="group cursor-pointer p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-amber-500 dark:hover:border-amber-500/50 hover:shadow-md transition-all relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-3">
              <LevelBadge level="B1" size="md" />
              <span className="text-xs font-bold text-slate-500">
                {levelProgressMap.B1.completed} / {levelProgressMap.B1.total}
              </span>
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              B1 Intermediate
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
              Relative clauses, Konjunktiv II, infinitive clauses (um...zu) & Goethe B1 prep.
            </p>
            <div className="mt-4 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex justify-between text-[11px] mb-1 font-semibold text-slate-600 dark:text-slate-400">
                <span>Progress</span>
                <span>{levelProgressMap.B1.percentage}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div 
                  className="h-full bg-amber-500 rounded-full transition-all duration-500"
                  style={{ width: `${levelProgressMap.B1.percentage}%` }}
                />
              </div>
            </div>
          </div>

          {/* B2 Level Card */}
          <div 
            onClick={() => onNavigate('course-B2')}
            className="group cursor-pointer p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-purple-500 dark:hover:border-purple-500/50 hover:shadow-md transition-all relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-3">
              <LevelBadge level="B2" size="md" />
              <span className="text-xs font-bold text-slate-500">
                {levelProgressMap.B2.completed} / {levelProgressMap.B2.total}
              </span>
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              B2 Advanced
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
              Passive voice, nominalization, academic German, discussions & presentations.
            </p>
            <div className="mt-4 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex justify-between text-[11px] mb-1 font-semibold text-slate-600 dark:text-slate-400">
                <span>Progress</span>
                <span>{levelProgressMap.B2.percentage}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div 
                  className="h-full bg-purple-500 rounded-full transition-all duration-500"
                  style={{ width: `${levelProgressMap.B2.percentage}%` }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Quick Launch Hub for Core Skills */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Quick Skill Training Labs
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          
          <button
            onClick={() => onNavigate('sentence-builder')}
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-amber-500 dark:hover:border-amber-500 text-left transition group shadow-2xs"
          >
            <Sparkles className="text-amber-500 mb-2 group-hover:scale-110 transition-transform" size={20} />
            <div className="font-bold text-xs text-slate-900 dark:text-white">Sentence Lab</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Interactive V2 Builder</div>
          </button>

          <button
            onClick={() => onNavigate('vocabulary')}
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-emerald-500 dark:hover:border-emerald-500 text-left transition group shadow-2xs"
          >
            <BookOpen className="text-emerald-500 mb-2 group-hover:scale-110 transition-transform" size={20} />
            <div className="font-bold text-xs text-slate-900 dark:text-white">Vocabulary SRS</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Spaced Repetition</div>
          </button>

          <button
            onClick={() => onNavigate('grammar')}
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500 dark:hover:border-blue-500 text-left transition group shadow-2xs"
          >
            <Layers className="text-blue-500 mb-2 group-hover:scale-110 transition-transform" size={20} />
            <div className="font-bold text-xs text-slate-900 dark:text-white">Grammar Rules</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Searchable Library</div>
          </button>

          <button
            onClick={() => onNavigate('writing')}
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-rose-500 dark:hover:border-rose-500 text-left transition group shadow-2xs"
          >
            <FileEdit className="text-rose-500 mb-2 group-hover:scale-110 transition-transform" size={20} />
            <div className="font-bold text-xs text-slate-900 dark:text-white">Guided Writing</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Email & Form Models</div>
          </button>

          <button
            onClick={() => onNavigate('speaking')}
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-purple-500 dark:hover:border-purple-500 text-left transition group shadow-2xs"
          >
            <Mic className="text-purple-500 mb-2 group-hover:scale-110 transition-transform" size={20} />
            <div className="font-bold text-xs text-slate-900 dark:text-white">Speaking Lab</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Roleplay & Timer</div>
          </button>

          <button
            onClick={() => onNavigate('goethe')}
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-red-500 dark:hover:border-red-500 text-left transition group shadow-2xs"
          >
            <Award className="text-red-500 mb-2 group-hover:scale-110 transition-transform" size={20} />
            <div className="font-bold text-xs text-slate-900 dark:text-white">Goethe Portal</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Official Exam Links</div>
          </button>

        </div>
      </div>

    </div>
  );
};
