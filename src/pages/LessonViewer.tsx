import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  Bookmark,
  Clock,
  Volume2,
  HelpCircle,
  ArrowRight,
  Sparkles,
  FileText,
  Save,
  RotateCcw,
  AlertCircle
} from 'lucide-react';
import { coursesData } from '../data/coursesData';
import { useProgress } from '../context/ProgressContext';
import { AudioPlayerButton } from '../components/AudioPlayerButton';
import { LevelBadge } from '../components/LevelBadge';
import { UrduText } from '../components/UrduText';
import { Lesson, LessonExercise } from '../types';

interface LessonViewerProps {
  lessonId: string;
  onBack: () => void;
  onNavigateLesson: (nextId: string) => void;
}

export const LessonViewer: React.FC<LessonViewerProps> = ({
  lessonId,
  onBack,
  onNavigateLesson
}) => {
  const {
    isLessonCompleted,
    markLessonComplete,
    isBookmarked,
    toggleBookmark,
    getLessonNote,
    saveLessonNote,
    languageMode
  } = useProgress();

  // Find lesson across all modules
  const allLessons = coursesData.flatMap(m => m.lessons);
  const currentIndex = allLessons.findIndex(l => l.id === lessonId);
  const lesson = allLessons[currentIndex] || allLessons[0];
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  const isCompleted = isLessonCompleted(lesson.id);
  const bookmarked = isBookmarked(lesson.id);

  // Note state
  const [noteText, setNoteText] = useState(() => getLessonNote(lesson.id));
  const [noteSaved, setNoteSaved] = useState(false);

  // Exercise state for interactive questions inside the lesson
  const [exerciseAnswers, setExerciseAnswers] = useState<Record<string, string>>({});
  const [exerciseSubmitted, setExerciseSubmitted] = useState<Record<string, boolean>>({});

  const handleSaveNote = () => {
    saveLessonNote(lesson.id, noteText);
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 2000);
  };

  const handleSelectAnswer = (exId: string, answer: string) => {
    setExerciseAnswers(prev => ({ ...prev, [exId]: answer }));
  };

  const handleCheckExercise = (exId: string) => {
    setExerciseSubmitted(prev => ({ ...prev, [exId]: true }));
  };

  const handleToggleCompleted = () => {
    markLessonComplete(lesson.id);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-200 pb-16">

      {/* Top Navigation & Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">

        {/* Breadcrumb / Back button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition"
        >
          <ArrowLeft size={16} />
          <span>Back to {lesson.level} Course</span>
        </button>

        {/* Actions: Bookmark & Mark Complete */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleBookmark(lesson.id)}
            className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition ${bookmarked
              ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300'
              : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
          >
            <Bookmark size={15} className={bookmarked ? 'fill-amber-500' : ''} />
            <span className="hidden sm:inline">{bookmarked ? 'Bookmarked' : 'Bookmark'}</span>
          </button>

          <button
            onClick={handleToggleCompleted}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-2xs ${isCompleted
              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700'
              : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
              }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400" />
                <span>Completed</span>
              </>
            ) : (
              <>
                <Circle size={16} />
                <span>Mark as Completed</span>
              </>
            )}
          </button>
        </div>

      </div>

      {/* Lesson Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div className="flex items-center gap-2">
          <LevelBadge level={lesson.level} size="sm" />
          <span className="text-xs font-semibold text-slate-400">
            {lesson.moduleTitle} • Lesson {lesson.lessonNumber}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-400 ml-auto">
            <Clock size={13} />
            <span>{lesson.durationMinutes} min read</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
          {lesson.title}
        </h1>

        <div className="font-urdu text-emerald-700 dark:text-emerald-400 text-lg leading-loose" dir="rtl">
          {lesson.titleUrdu}
        </div>

        <div className="italic text-xs text-emerald-800 dark:text-emerald-300 font-medium">
          {lesson.titleRomanUrdu}
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 pt-1">
          {lesson.description}
        </p>
      </div>

      {/* Lesson Sections */}
      <div className="space-y-8">
        {lesson.sections.map((section, sIdx) => (
          <div
            key={sIdx}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5"
          >
            {/* Section Title */}
            <div className="border-b border-slate-100 dark:border-slate-800/80 pb-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>{section.title}</span>
              </h2>

              {section.titleUrdu && (
                <div className="font-urdu text-emerald-700 dark:text-emerald-400 text-sm mt-1" dir="rtl">
                  {section.titleUrdu}
                </div>
              )}
            </div>

            {/* Explanations in English, Urdu, and Roman Urdu */}
            <div className="space-y-3 leading-relaxed text-sm">
              <div className="text-slate-800 dark:text-slate-200 whitespace-pre-line">
                {section.contentEn}
              </div>

              {languageMode === 'ur' && section.contentUr && (
                <div className="p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 font-urdu text-emerald-900 dark:text-emerald-200 text-base leading-loose" dir="rtl">
                  {section.contentUr}
                </div>
              )}

              {languageMode === 'roman_ur' && section.contentRomanUr && (
                <div className="p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-200 text-xs italic">
                  {section.contentRomanUr}
                </div>
              )}
            </div>

            {/* Cultural Note for Urdu Speakers if available */}
            {section.culturalNote && (
              <div className="p-4 rounded-2xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-1.5 text-xs">
                <div className="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                  <AlertCircle size={15} />
                  <span>{section.culturalNote.title}</span>
                </div>
                <p className="text-amber-800 dark:text-amber-300">
                  {section.culturalNote.contentEn}
                </p>
                <p className="font-urdu text-emerald-900 dark:text-emerald-300 pt-1 text-sm" dir="rtl">
                  {section.culturalNote.contentUr}
                </p>
              </div>
            )}

            {/* Pronunciation Guide Grid / Table */}
            {section.pronunciationGuide && section.pronunciationGuide.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Volume2 size={15} className="text-amber-500" />
                  <span>Pronunciation Sound Guide (with Urdu Phonetics)</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {section.pronunciationGuide.map((item, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-black text-slate-900 dark:text-white">
                            {item.letterOrCombo}
                          </span>
                          <span className="text-xs text-amber-600 dark:text-amber-400 font-mono">
                            {item.germanSound}
                          </span>
                        </div>
                        <AudioPlayerButton text={item.letterOrCombo} iconSize={15} />
                      </div>

                      <div className="text-xs space-y-1">
                        <div className="text-slate-600 dark:text-slate-400">
                          {item.englishEquivalent}
                        </div>
                        <div className="font-urdu text-emerald-800 dark:text-emerald-300 text-sm" dir="rtl">
                          اردو آواز: {item.urduApproximation}
                        </div>
                        <div className="italic text-emerald-700 dark:text-emerald-400 text-[11px]">
                          Roman Urdu: {item.romanUrduApproximation}
                        </div>
                      </div>

                      {/* Sample Words */}
                      <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex flex-wrap gap-2">
                        {item.sampleWords.map((sw, swIdx) => (
                          <div
                            key={swIdx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs shadow-2xs"
                          >
                            <span className="font-bold text-slate-900 dark:text-white">{sw.word}</span>
                            <span className="text-[10px] text-slate-400">({sw.meaning})</span>
                            <AudioPlayerButton text={sw.word} iconSize={12} />
                          </div>
                        ))}
                      </div>

                      {item.importantCaution && (
                        <div className="text-[11px] font-bold text-rose-600 dark:text-rose-400 pt-1">
                          ⚠️ {item.importantCaution}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Conjugation Table */}
            {section.conjugationTable && section.conjugationTable.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Verb Conjugation Table • گردان
                </h3>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 uppercase font-bold text-[10px]">
                      <tr>
                        <th className="p-3">Pronoun (فاعل)</th>
                        <th className="p-3">German Form</th>
                        <th className="p-3">Listen</th>
                        <th className="p-3">English</th>
                        <th className="p-3">Urdu (اردو)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                      {section.conjugationTable.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                          <td className="p-3 font-bold text-slate-900 dark:text-white">{row.pronoun}</td>
                          <td className="p-3 font-mono font-bold text-amber-600 dark:text-amber-400 text-sm">
                            {row.conjugation}
                          </td>
                          <td className="p-3">
                            <AudioPlayerButton text={`${row.pronoun} ${row.conjugation}`} iconSize={13} />
                          </td>
                          <td className="p-3 text-slate-600 dark:text-slate-400">{row.english}</td>
                          <td className="p-3 font-urdu text-emerald-800 dark:text-emerald-300 text-sm" dir="rtl">
                            {row.urdu}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Standard Table Data */}
            {section.tableData && (
              <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 pt-1">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 uppercase font-bold text-[10px]">
                    <tr>
                      {section.tableData.headers.map((h, hIdx) => (
                        <th key={hIdx} className="p-3">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                    {section.tableData.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-3">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* German Examples with Audio */}
            {section.germanExamples && section.germanExamples.length > 0 && (
              <div className="space-y-2.5 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  German Examples & Audio • مثالیں
                </h3>

                <div className="space-y-2">
                  {section.germanExamples.map((ex, exIdx) => (
                    <div
                      key={exIdx}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 flex items-start justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                          {ex.german}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                          {ex.english}
                        </div>
                        <div className="font-urdu text-emerald-800 dark:text-emerald-300 text-sm" dir="rtl">
                          {ex.urdu}
                        </div>
                      </div>

                      <AudioPlayerButton text={ex.german} iconSize={16} />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        ))}
      </div>

      {/* Interactive In-Lesson Practice Exercises */}
      {lesson.sections.some(s => s.exercises && s.exercises.length > 0) && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex items-center gap-2">
            <HelpCircle size={20} className="text-amber-500" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              In-Lesson Check: Test What You Just Learned
            </h2>
          </div>

          <div className="space-y-6">
            {lesson.sections.flatMap(s => s.exercises || []).map((ex) => {
              const selected = exerciseAnswers[ex.id];
              const submitted = exerciseSubmitted[ex.id];
              const isCorrect = selected === ex.correctAnswer;

              return (
                <div key={ex.id} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="font-bold text-sm text-slate-900 dark:text-white">
                    {ex.question}
                  </div>

                  {ex.questionUrdu && (
                    <div className="font-urdu text-emerald-800 dark:text-emerald-300 text-sm" dir="rtl">
                      {ex.questionUrdu}
                    </div>
                  )}

                  {/* Options */}
                  {ex.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {ex.options.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => !submitted && handleSelectAnswer(ex.id, opt)}
                          className={`p-3 rounded-xl text-xs font-semibold text-left transition border ${selected === opt
                            ? 'bg-amber-500 text-white border-amber-600 font-bold shadow-xs'
                            : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-amber-400'
                            }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Action */}
                  {!submitted ? (
                    <button
                      type="button"
                      disabled={!selected}
                      onClick={() => handleCheckExercise(ex.id)}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 disabled:opacity-50 transition"
                    >
                      Check Answer
                    </button>
                  ) : (
                    <div className={`p-4 rounded-xl text-xs space-y-1 ${isCorrect
                      ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/70 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700'
                      : 'bg-rose-100 text-rose-900 dark:bg-rose-950/70 dark:text-rose-200 border border-rose-300 dark:border-rose-700'
                      }`}>
                      <div className="font-bold flex items-center gap-1.5">
                        {isCorrect ? '✅ Ausgezeichnet! Correct!' : '❌ Nicht ganz! Not quite.'}
                      </div>
                      <p>{ex.explanationEn}</p>
                      <p className="font-urdu pt-1" dir="rtl">{ex.explanationUr}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Personal Notes Area */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText size={18} className="text-amber-500" />
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              My Personal Study Notes for this Lesson
            </span>
          </div>
          {noteSaved && (
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold animate-pulse">
              Saved! محفوظ ہو گیا
            </span>
          )}
        </div>

        <textarea
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Write your personal reminders, difficult German words, or Urdu notes here (automatically saved)..."
          rows={3}
          className="w-full p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />

        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSaveNote}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-white text-xs font-bold transition"
          >
            <Save size={13} />
            <span>Save Note</span>
          </button>
        </div>
      </div>

      {/* Previous & Next Navigation */}
      <div className="flex items-center justify-between gap-4 pt-4">
        {prevLesson ? (
          <button
            type="button"
            onClick={() => onNavigateLesson(prevLesson.id)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500 text-xs font-bold text-slate-700 dark:text-slate-300 transition shadow-2xs"
          >
            <ArrowLeft size={15} />
            <span className="truncate max-w-[150px] sm:max-w-xs">{prevLesson.title}</span>
          </button>
        ) : <div />}

        {nextLesson ? (
          <button
            type="button"
            onClick={() => onNavigateLesson(nextLesson.id)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold transition shadow-md"
          >
            <span className="truncate max-w-[150px] sm:max-w-xs">Next: {nextLesson.title}</span>
            <ArrowRight size={15} />
          </button>
        ) : (
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold transition shadow-md"
          >
            <span>Finish Course Section</span>
            <CheckCircle2 size={15} />
          </button>
        )}
      </div>

    </div>
  );
};
