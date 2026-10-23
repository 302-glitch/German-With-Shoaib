import React from 'react';
import { Bookmark, ArrowRight, BookOpen, Clock, Trash2 } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { coursesData } from '../data/coursesData';
import { LevelBadge } from '../components/LevelBadge';

interface BookmarksViewProps {
  onOpenLesson: (lessonId: string) => void;
}

export const BookmarksView: React.FC<BookmarksViewProps> = ({ onOpenLesson }) => {
  const { progress, toggleBookmark, getLessonNote } = useProgress();

  const allLessons = coursesData.flatMap(m => m.lessons);
  const bookmarkedLessons = allLessons.filter(l => 
    progress.bookmarkedLessonIds.includes(l.id)
  );

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-200">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-bold mb-2">
          <Bookmark size={14} className="fill-amber-600" />
          <span>Bookmarked Lessons • محفوظ کردہ اسباق</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Saved Lessons & Revision Notes
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          Quickly access difficult topics you have bookmarked for review along with your saved study notes.
        </p>
      </div>

      {bookmarkedLessons.length === 0 ? (
        <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
            <Bookmark size={24} />
          </div>
          <h2 className="text-base font-bold text-slate-800 dark:text-slate-200">
            No Bookmarked Lessons Yet
          </h2>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Click the bookmark icon on any lesson to save it here for fast review and revision.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {bookmarkedLessons.map(lesson => {
            const note = getLessonNote(lesson.id);

            return (
              <div
                key={lesson.id}
                className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-amber-400 transition"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <LevelBadge level={lesson.level} size="sm" />
                    <span className="text-xs font-semibold text-slate-400">
                      {lesson.moduleTitle} • Lesson {lesson.lessonNumber}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    {lesson.title}
                  </h3>

                  <div className="font-urdu text-emerald-700 dark:text-emerald-400 text-xs" dir="rtl">
                    {lesson.titleUrdu}
                  </div>

                  {note && (
                    <div className="mt-2 p-2.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-xs text-amber-900 dark:text-amber-200 italic">
                      Note: &ldquo;{note}&rdquo;
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => toggleBookmark(lesson.id)}
                    className="p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    title="Remove from bookmarks"
                  >
                    <Trash2 size={16} />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenLesson(lesson.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition shadow-2xs"
                  >
                    <span>Open Lesson</span>
                    <ArrowRight size={13} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
