import React from 'react';
import { 
  Sun, 
  Moon, 
  Search, 
  Flame, 
  Menu, 
  Languages, 
  BookOpen, 
  CheckCircle2,
  Bookmark
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { LanguageMode } from '../types';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenSearch: () => void;
  onToggleMobileSidebar: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onToggleMobileSidebar,
  activeTab,
  setActiveTab
}) => {
  const { 
    progress, 
    languageMode, 
    setLanguageMode, 
    theme, 
    toggleTheme 
  } = useProgress();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguageMode(e.target.value as LanguageMode);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-colors duration-200">
      <div className="flex items-center justify-between px-4 lg:px-6 h-16 max-w-7xl mx-auto">
        
        {/* Left: Mobile hamburger & Logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleMobileSidebar}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label="Toggle navigation menu"
          >
            <Menu size={22} />
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center text-left group"
          >
            <BrandLogo size="md" showText={true} />
          </button>
        </div>

        {/* Center: Quick Search Trigger */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
          <button
            type="button"
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/60 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs transition shadow-2xs"
          >
            <span className="flex items-center gap-2">
              <Search size={15} className="text-slate-400" />
              <span>Search lessons, grammar rules, vocabulary...</span>
            </span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md text-slate-500 font-mono">
              Ctrl+K
            </kbd>
          </button>
        </div>

        {/* Right: Streak, Language Selector, Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Mobile Search Button */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            title="Search"
          >
            <Search size={18} />
          </button>

          {/* Real Study Streak Badge */}
          <div 
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-bold"
            title={`${progress.streakDays} day study streak!`}
          >
            <Flame size={15} className="text-amber-500 fill-amber-500 animate-pulse" />
            <span>{progress.streakDays} {progress.streakDays === 1 ? 'Day' : 'Days'}</span>
          </div>

          {/* Bookmarks quick count */}
          <button
            type="button"
            onClick={() => setActiveTab('bookmarks')}
            className={`p-2 rounded-lg relative text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition ${activeTab === 'bookmarks' ? 'bg-slate-100 dark:bg-slate-800 text-amber-600' : ''}`}
            title="Bookmarked Lessons"
          >
            <Bookmark size={18} />
            {progress.bookmarkedLessonIds.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                {progress.bookmarkedLessonIds.length}
              </span>
            )}
          </button>

          {/* Language Selector */}
          <div className="relative flex items-center">
            <label htmlFor="language-select" className="sr-only">Explanation Language</label>
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-2.5 py-1 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700">
              <Languages size={15} className="text-emerald-600 dark:text-emerald-400" />
              <select
                id="language-select"
                value={languageMode}
                onChange={handleLanguageChange}
                className="bg-transparent border-none text-xs font-semibold focus:outline-none cursor-pointer pr-1"
              >
                <option value="en" className="dark:bg-slate-900 text-slate-900 dark:text-slate-100">English</option>
                <option value="ur" className="dark:bg-slate-900 text-slate-900 dark:text-slate-100">اردو (Urdu)</option>
                <option value="roman_ur" className="dark:bg-slate-900 text-slate-900 dark:text-slate-100">Roman Urdu</option>
              </select>
            </div>
          </div>

          {/* Dark / Light Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition border border-slate-200 dark:border-slate-700"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={17} className="text-amber-400" />
            ) : (
              <Moon size={17} className="text-slate-700" />
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
