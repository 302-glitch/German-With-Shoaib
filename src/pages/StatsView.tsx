import React from 'react';
import { 
  BarChart3, 
  Flame, 
  CheckCircle2, 
  Clock, 
  Trophy, 
  BookOpen, 
  Award,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { coursesData } from '../data/coursesData';
import { LevelBadge } from '../components/LevelBadge';
import { CEFRLevel } from '../types';

export const StatsView: React.FC = () => {
  const { progress } = useProgress();

  const allLessons = coursesData.flatMap(m => m.lessons);
  const totalCompleted = progress.completedLessonIds.length;
  const overallPct = Math.round((totalCompleted / allLessons.length) * 100) || 0;

  // Flashcards mastery
  const vocabIds = Object.keys(progress.vocabularyStats);
  const masteredVocab = vocabIds.filter(id => (progress.vocabularyStats[id]?.srsLevel || 0) >= 3).length;

  // Quiz stats
  const quizEntries = Object.entries(progress.completedQuizScores);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-200">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-2">
          <BarChart3 size={14} />
          <span>Real-time Learning Statistics • آپ کی حقیقی کارکردگی</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Study Progress & Performance Analytics
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          Track completed curriculum modules, vocabulary retention strength, study streaks, and quiz results.
        </p>
      </div>

      {/* 4 Big KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider">
            <Flame size={16} />
            <span>Study Streak</span>
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white">
            {progress.streakDays} {progress.streakDays === 1 ? 'Day' : 'Days'}
          </div>
          <div className="text-[11px] text-slate-400">Consecutive learning days</div>
        </div>

        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <div className="flex items-center gap-2 text-emerald-500 text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 size={16} />
            <span>Lessons Done</span>
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white">
            {totalCompleted} / {allLessons.length}
          </div>
          <div className="text-[11px] text-slate-400">{overallPct}% total curriculum</div>
        </div>

        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <div className="flex items-center gap-2 text-blue-500 text-xs font-bold uppercase tracking-wider">
            <BookOpen size={16} />
            <span>Vocab Studied</span>
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white">
            {vocabIds.length} Words
          </div>
          <div className="text-[11px] text-slate-400">{masteredVocab} in long-term memory</div>
        </div>

        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <div className="flex items-center gap-2 text-purple-500 text-xs font-bold uppercase tracking-wider">
            <Trophy size={16} />
            <span>Exams Taken</span>
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white">
            {quizEntries.length} Tests
          </div>
          <div className="text-[11px] text-slate-400">Recorded mock exam attempts</div>
        </div>
      </div>

      {/* Level by Level Progress Bars */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
        <h2 className="text-base font-bold text-slate-900 dark:text-white">
          Curriculum Completion by CEFR Level
        </h2>

        <div className="space-y-4">
          {(['A1', 'A2', 'B1', 'B2'] as CEFRLevel[]).map(lvl => {
            const lvlLessons = coursesData.filter(m => m.level === lvl).flatMap(m => m.lessons);
            const done = lvlLessons.filter(l => progress.completedLessonIds.includes(l.id)).length;
            const pct = lvlLessons.length > 0 ? Math.round((done / lvlLessons.length) * 100) : 0;

            return (
              <div key={lvl} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <div className="flex items-center gap-2">
                    <LevelBadge level={lvl} size="sm" />
                    <span className="text-slate-800 dark:text-slate-200">
                      Level {lvl} ({done} of {lvlLessons.length} lessons)
                    </span>
                  </div>
                  <span className="text-slate-500 font-mono">{pct}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      lvl === 'A1' ? 'bg-emerald-500' :
                      lvl === 'A2' ? 'bg-blue-500' :
                      lvl === 'B1' ? 'bg-amber-500' :
                      'bg-purple-500'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quiz History Table */}
      {quizEntries.length > 0 && (
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            Recent Examination Scores
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-100 dark:bg-slate-800 uppercase font-bold text-[10px] text-slate-500">
                <tr>
                  <th className="p-3">Quiz / Exam ID</th>
                  <th className="p-3">Score</th>
                  <th className="p-3">Percentage</th>
                  <th className="p-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {quizEntries.map(([qId, item]) => {
                  const pct = Math.round((item.score / item.total) * 100);
                  return (
                    <tr key={qId}>
                      <td className="p-3 font-mono font-bold text-slate-900 dark:text-white">{qId}</td>
                      <td className="p-3 font-semibold">{item.score} / {item.total}</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                          pct >= 60
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300'
                            : 'bg-rose-100 text-rose-800 dark:bg-rose-950/70 dark:text-rose-300'
                        }`}>
                          {pct}%
                        </span>
                      </td>
                      <td className="p-3 text-slate-400">
                        {new Date(item.date).toLocaleDateString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
