import React from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  BookOpen, 
  Bookmark, 
  ArrowRight, 
  Play, 
  GraduationCap,
  Sparkles,
  Layers,
  Activity,
  MessageSquare,
  Users,
  GitBranch,
  ListFilter,
  Compass,
  History,
  Link,
  Maximize2,
  HeartHandshake,
  ShieldAlert,
  FileText
} from 'lucide-react';
import { coursesData } from '../data/coursesData';
import { useProgress } from '../context/ProgressContext';
import { LevelBadge } from '../components/LevelBadge';
import { CEFRLevel, CourseModule } from '../types';

interface CourseViewProps {
  level: CEFRLevel;
  onSelectLesson: (lessonId: string) => void;
}

// Icon helper mapping
const getIcon = (name: string) => {
  switch (name) {
    case 'SpellCheck': return BookOpen;
    case 'MessageSquare': return MessageSquare;
    case 'BookMarked': return BookOpen;
    case 'Users': return Users;
    case 'Activity': return Activity;
    case 'GitBranch': return GitBranch;
    case 'Clock': return Clock;
    case 'Layers': return Layers;
    case 'ListFilter': return ListFilter;
    case 'Compass': return Compass;
    case 'GraduationCap': return GraduationCap;
    case 'History': return History;
    case 'Link': return Link;
    case 'Maximize2': return Maximize2;
    case 'HeartHandshake': return HeartHandshake;
    case 'ShieldAlert': return ShieldAlert;
    case 'FileText': return FileText;
    default: return BookOpen;
  }
};

export const CourseView: React.FC<CourseViewProps> = ({ level, onSelectLesson }) => {
  const { progress, isLessonCompleted, isBookmarked, toggleBookmark } = useProgress();

  const levelModules = coursesData.filter(m => m.level === level);
  const allLevelLessons = levelModules.flatMap(m => m.lessons);
  const completedCount = allLevelLessons.filter(l => isLessonCompleted(l.id)).length;
  const progressPct = allLevelLessons.length > 0
    ? Math.round((completedCount / allLevelLessons.length) * 100)
    : 0;

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Course Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white border border-slate-800 relative overflow-hidden shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <LevelBadge level={level} size="lg" />
              <span className="text-xs font-semibold text-amber-300">
                Official CEFR Level Curriculum
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              {level === 'A1' && 'German A1: Complete Beginner Course'}
              {level === 'A2' && 'German A2: Elementary Language Mastery'}
              {level === 'B1' && 'German B1: Intermediate Fluency & Goethe Prep'}
              {level === 'B2' && 'German B2: Advanced & Professional German'}
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
              {level === 'A1' && 'Master pronunciation, the alphabet, noun genders (der, die, das), sentence word order (V2 rule), greetings, and daily vocabulary with Urdu and Roman Urdu support.'}
              {level === 'A2' && 'Deep dive into the Perfekt past tense (haben vs. sein), two-way prepositions (Akkusativ vs. Dativ), and subordinate clauses (weil, dass, wenn).'}
              {level === 'B1' && 'Gain independent fluency with relative clauses, Konjunktiv II courtesy, purpose clauses (um...zu), and official Goethe B1 exam training.'}
              {level === 'B2' && 'Achieve university and professional workplace fluency with the passive voice, nominal style, and advanced argumentation.'}
            </p>
          </div>

          {/* Progress Pill */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm sm:w-56 flex-shrink-0">
            <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
              <span>Completed</span>
              <span className="text-amber-400 font-bold">{completedCount} / {allLevelLessons.length}</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden mb-2">
              <div 
                className="h-full bg-amber-500 rounded-full transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-400 text-right">
              {progressPct}% Completed
            </div>
          </div>
        </div>
      </div>

      {/* Modules & Lessons List */}
      <div className="space-y-6">
        {levelModules.map((module) => {
          const Icon = getIcon(module.iconName);
          const moduleLessons = module.lessons;
          const moduleCompleted = moduleLessons.filter(l => isLessonCompleted(l.id)).length;

          return (
            <div
              key={module.id}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden"
            >
              {/* Module Header */}
              <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-800/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800 flex-shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        Module {module.moduleNumber}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {moduleCompleted} / {moduleLessons.length} Lessons done
                      </span>
                    </div>

                    <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">
                      {module.title}
                    </h2>

                    <div className="font-urdu text-emerald-700 dark:text-emerald-400 text-sm mt-0.5" dir="rtl">
                      {module.titleUrdu}
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400 max-w-xs">
                  {module.description}
                </div>
              </div>

              {/* Lessons Grid / List */}
              <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {moduleLessons.map((lesson) => {
                  const completed = isLessonCompleted(lesson.id);
                  const bookmarked = isBookmarked(lesson.id);

                  return (
                    <div
                      key={lesson.id}
                      className="p-4 sm:px-6 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                    >
                      <div className="flex items-start sm:items-center gap-3">
                        <button
                          type="button"
                          onClick={() => onSelectLesson(lesson.id)}
                          className="pt-0.5 sm:pt-0"
                          title={completed ? "Completed lesson" : "Uncompleted lesson"}
                        >
                          {completed ? (
                            <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0" />
                          ) : (
                            <Circle size={20} className="text-slate-300 dark:text-slate-700 hover:text-amber-500 transition-colors flex-shrink-0" />
                          )}
                        </button>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-400">
                              Lesson {lesson.lessonNumber}:
                            </span>
                            <button
                              onClick={() => onSelectLesson(lesson.id)}
                              className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors text-left"
                            >
                              {lesson.title}
                            </button>
                          </div>

                          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            <span className="font-urdu text-emerald-700 dark:text-emerald-400" dir="rtl">
                              {lesson.titleUrdu}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock size={12} />
                              <span>{lesson.durationMinutes} min</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-auto">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleBookmark(lesson.id);
                          }}
                          className={`p-2 rounded-xl transition-colors ${
                            bookmarked
                              ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300'
                              : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                          title={bookmarked ? "Remove bookmark" : "Bookmark this lesson"}
                        >
                          <Bookmark size={16} className={bookmarked ? 'fill-amber-500' : ''} />
                        </button>

                        <button
                          type="button"
                          onClick={() => onSelectLesson(lesson.id)}
                          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition shadow-2xs ${
                            completed
                              ? 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200'
                              : 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold'
                          }`}
                        >
                          {completed ? (
                            <>
                              <span>Review</span>
                              <ArrowRight size={13} />
                            </>
                          ) : (
                            <>
                              <Play size={12} className="fill-slate-950" />
                              <span>Start</span>
                            </>
                          )}
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
