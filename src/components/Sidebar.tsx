import React from 'react';
import { 
  LayoutDashboard, 
  Map, 
  GraduationCap, 
  BookOpen, 
  Layers, 
  MessageSquare, 
  FileEdit, 
  Mic, 
  HelpCircle, 
  Award, 
  CalendarCheck, 
  BarChart3, 
  Bookmark, 
  Settings, 
  ChevronRight,
  Sparkles,
  X
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { CEFRLevel } from '../types';
import { BrandLogo } from './BrandLogo';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: any;
  badge?: string;
  levelBadge?: string;
  desc?: string;
  count?: number;
}

interface NavSection {
  heading: string;
  items: NavItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  isMobileOpen,
  onCloseMobile
}) => {
  const { currentLevel, setCurrentLevel, progress } = useProgress();

  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    onCloseMobile();
  };

  const navSections: NavSection[] = [
    {
      heading: 'LEARNING HUB',
      items: [
        { id: 'dashboard', label: 'Main Dashboard', icon: LayoutDashboard },
        { id: 'roadmap', label: 'Learning Roadmap', icon: Map, badge: 'A1-B2' }
      ]
    },
    {
      heading: 'COURSES BY LEVEL',
      items: [
        { 
          id: 'course-A1', 
          label: 'A1 Complete Beginner', 
          icon: GraduationCap, 
          levelBadge: 'A1',
          desc: '11 Comprehensive Modules'
        },
        { 
          id: 'course-A2', 
          label: 'A2 Elementary German', 
          icon: GraduationCap, 
          levelBadge: 'A2',
          desc: 'Perfekt & Two-Way Prepositions'
        },
        { 
          id: 'course-B1', 
          label: 'B1 Intermediate User', 
          icon: GraduationCap, 
          levelBadge: 'B1',
          desc: 'Fluency & Konjunktiv II'
        },
        { 
          id: 'course-B2', 
          label: 'B2 Professional German', 
          icon: GraduationCap, 
          levelBadge: 'B2',
          desc: 'Passiv & Academic Style'
        }
      ]
    },
    {
      heading: 'INTERACTIVE LABS',
      items: [
        { id: 'sentence-builder', label: 'Sentence Builder Lab', icon: Sparkles, badge: 'Interactive' },
        { id: 'vocabulary', label: 'Vocabulary & Flashcards', icon: BookOpen, badge: 'SRS' },
        { id: 'grammar', label: 'Grammar Reference', icon: Layers }
      ]
    },
    {
      heading: '4 SKILLS PRACTICE',
      items: [
        { id: 'reading', label: 'Reading Comprehension', icon: BookOpen },
        { id: 'writing', label: 'Guided Writing & Emails', icon: FileEdit },
        { id: 'speaking', label: 'Speaking & Roleplay', icon: Mic }
      ]
    },
    {
      heading: 'EXAMS & PROGRESS',
      items: [
        { id: 'quizzes', label: 'Quizzes & Mock Exams', icon: HelpCircle },
        { id: 'goethe', label: 'Goethe Exam Resources', icon: Award },
        { id: 'study-planner', label: 'Personal Study Planner', icon: CalendarCheck },
        { id: 'stats', label: 'Statistics & Progress', icon: BarChart3 },
        { 
          id: 'bookmarks', 
          label: 'Bookmarked Lessons', 
          icon: Bookmark, 
          count: progress.bookmarkedLessonIds.length 
        },
        { id: 'settings', label: 'Settings & Data Reset', icon: Settings }
      ]
    }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-50 lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-50 lg:static lg:z-auto transition-transform duration-300 ease-in-out flex flex-col ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded flex flex-col overflow-hidden">
              <div className="h-1/3 bg-slate-950 w-full" />
              <div className="h-1/3 bg-red-600 w-full" />
              <div className="h-1/3 bg-amber-400 w-full" />
            </div>
            <span className="font-bold text-sm">Deutsch Master</span>
          </div>
          <button
            onClick={onCloseMobile}
            className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X size={20} />
          </button>
        </div>

        {/* Current Active Level Switcher Banner */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800/60 bg-gradient-to-r from-amber-500/10 via-red-500/5 to-transparent">
          <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            Current Focus Level
          </div>
          <div className="grid grid-cols-4 gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            {(['A1', 'A2', 'B1', 'B2'] as CEFRLevel[]).map(lvl => (
              <button
                key={lvl}
                onClick={() => setCurrentLevel(lvl)}
                className={`py-1.5 text-xs font-bold rounded-lg transition-all ${
                  currentLevel === lvl
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-extrabold text-amber-600 dark:text-amber-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Nav Links with custom scroll */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          {navSections.map((section, idx) => (
            <div key={idx} className="space-y-1">
              <div className="px-3 text-[10px] font-bold tracking-wider text-slate-600 dark:text-slate-300 uppercase">
                {section.heading}
              </div>

              <div className="space-y-0.5 pt-1">
                {section.items.map(item => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectTab(item.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all group ${
                        isActive
                          ? 'bg-amber-500 text-white shadow-sm font-semibold'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Icon
                          size={16}
                          className={isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400 group-hover:text-amber-500'}
                        />
                        <span className="truncate">{item.label}</span>
                      </div>

                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        {item.levelBadge && (
                          <span
                            className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                              isActive
                                ? 'bg-white/20 text-white'
                                : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            {item.levelBadge}
                          </span>
                        )}

                        {item.badge && (
                          <span
                            className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                              isActive
                                ? 'bg-white/20 text-white'
                                : 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}

                        {typeof item.count === 'number' && item.count > 0 && (
                          <span
                            className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                              isActive
                                ? 'bg-white text-amber-600'
                                : 'bg-amber-500 text-white'
                            }`}
                          >
                            {item.count}
                          </span>
                        )}

                        {!isActive && (
                          <ChevronRight
                            size={13}
                            className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 text-center text-[11px] text-slate-500 dark:text-slate-400">
          <span>Deutsch Master Academy v1.0</span>
          <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-urdu pt-0.5" dir="rtl">
            سیکھو جرمن آسانی کے ساتھ
          </div>
        </div>

      </aside>
    </>
  );
};
