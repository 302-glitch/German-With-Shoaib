import React, { createContext, useContext, useState, useEffect } from 'react';
import { CEFRLevel, LanguageMode, UserProgressState } from '../types';

interface ProgressContextType {
  progress: UserProgressState;
  currentLevel: CEFRLevel;
  languageMode: LanguageMode;
  theme: 'light' | 'dark';
  setCurrentLevel: (level: CEFRLevel) => void;
  setLanguageMode: (mode: LanguageMode) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
  markLessonComplete: (lessonId: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  recordQuizScore: (quizId: string, score: number, total: number) => void;
  updateVocabSrs: (vocabId: string, grade: number) => void; // 1 (fail) to 5 (perfect)
  toggleFavoriteVocab: (vocabId: string) => void;
  toggleBookmark: (lessonId: string) => void;
  isBookmarked: (lessonId: string) => boolean;
  saveLessonNote: (lessonId: string, note: string) => void;
  getLessonNote: (lessonId: string) => string;
  updateStudyPlan: (plan: UserProgressState['studyPlan']) => void;
  resetAllProgress: () => void;
  exportProgressJSON: () => string;
  importProgressJSON: (data: string) => boolean;
}

const STORAGE_KEY = 'deutsch_master_academy_v1_progress';

const initialProgress: UserProgressState = {
  currentLevel: 'A1',
  languageMode: 'en',
  theme: 'light',
  completedLessonIds: [],
  completedQuizScores: {},
  vocabularyStats: {},
  streakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  dailyGoalMinutes: 20,
  todayMinutesStudied: 5,
  bookmarkedLessonIds: [],
  notes: {},
  studyPlan: {
    targetLevel: 'B1',
    dailyMinutes: 30,
    targetExamDate: '2026-12-31',
    studyDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  }
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgressState>(() => {
    if (typeof window === 'undefined') return initialProgress;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Calculate streak maintenance
        const today = new Date().toISOString().split('T')[0];
        const lastActive = parsed.lastActiveDate || today;
        let streak = parsed.streakDays || 1;

        const diffDays = Math.floor((new Date(today).getTime() - new Date(lastActive).getTime()) / (1000 * 3600 * 24));
        if (diffDays === 1) {
          // Continuous day!
          streak += 1;
        } else if (diffDays > 1) {
          // Missed days
          streak = 1;
        }

        return {
          ...parsed,
          streakDays: streak,
          lastActiveDate: today,
          todayMinutesStudied: diffDays === 0 ? (parsed.todayMinutesStudied || 0) : 5
        };
      }
    } catch (e) {
      console.error('Failed to parse saved progress:', e);
    }
    return initialProgress;
  });

  // Persist to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save progress to localStorage:', e);
    }
  }, [progress]);

  // Handle dark mode class on root document
  useEffect(() => {
    if (progress.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [progress.theme]);

  const setCurrentLevel = (level: CEFRLevel) => {
    setProgress(prev => ({ ...prev, currentLevel: level }));
  };

  const setLanguageMode = (mode: LanguageMode) => {
    setProgress(prev => ({ ...prev, languageMode: mode }));
  };

  const setTheme = (theme: 'light' | 'dark') => {
    setProgress(prev => ({ ...prev, theme }));
  };

  const toggleTheme = () => {
    setProgress(prev => ({ ...prev, theme: prev.theme === 'dark' ? 'light' : 'dark' }));
  };

  const markLessonComplete = (lessonId: string) => {
    setProgress(prev => {
      if (prev.completedLessonIds.includes(lessonId)) return prev;
      return {
        ...prev,
        completedLessonIds: [...prev.completedLessonIds, lessonId],
        todayMinutesStudied: prev.todayMinutesStudied + 10
      };
    });
  };

  const isLessonCompleted = (lessonId: string) => {
    return progress.completedLessonIds.includes(lessonId);
  };

  const recordQuizScore = (quizId: string, score: number, total: number) => {
    setProgress(prev => ({
      ...prev,
      completedQuizScores: {
        ...prev.completedQuizScores,
        [quizId]: {
          score,
          total,
          date: new Date().toISOString()
        }
      },
      todayMinutesStudied: prev.todayMinutesStudied + 5
    }));
  };

  // SuperMemo SM-2 SRS Algorithm for flashcard mastery
  const updateVocabSrs = (vocabId: string, grade: number) => {
    setProgress(prev => {
      const current = prev.vocabularyStats[vocabId] || { srsLevel: 0, nextReview: new Date().toISOString() };
      let newLevel = current.srsLevel;
      let intervalDays = 1;

      if (grade >= 3) {
        // Successful recall
        newLevel += 1;
        if (newLevel === 1) intervalDays = 1;
        else if (newLevel === 2) intervalDays = 3;
        else if (newLevel === 3) intervalDays = 7;
        else if (newLevel === 4) intervalDays = 14;
        else intervalDays = 30;
      } else {
        // Failed recall - reset to 1
        newLevel = 1;
        intervalDays = 1;
      }

      const nextDate = new Date();
      nextDate.setDate(nextDate.getDate() + intervalDays);

      return {
        ...prev,
        vocabularyStats: {
          ...prev.vocabularyStats,
          [vocabId]: {
            ...current,
            srsLevel: newLevel,
            nextReview: nextDate.toISOString().split('T')[0]
          }
        }
      };
    });
  };

  const toggleFavoriteVocab = (vocabId: string) => {
    setProgress(prev => {
      const current = prev.vocabularyStats[vocabId] || { srsLevel: 0, nextReview: new Date().toISOString() };
      return {
        ...prev,
        vocabularyStats: {
          ...prev.vocabularyStats,
          [vocabId]: {
            ...current,
            isFavorite: !current.isFavorite
          }
        }
      };
    });
  };

  const toggleBookmark = (lessonId: string) => {
    setProgress(prev => {
      const exists = prev.bookmarkedLessonIds.includes(lessonId);
      return {
        ...prev,
        bookmarkedLessonIds: exists
          ? prev.bookmarkedLessonIds.filter(id => id !== lessonId)
          : [...prev.bookmarkedLessonIds, lessonId]
      };
    });
  };

  const isBookmarked = (lessonId: string) => {
    return progress.bookmarkedLessonIds.includes(lessonId);
  };

  const saveLessonNote = (lessonId: string, note: string) => {
    setProgress(prev => ({
      ...prev,
      notes: {
        ...prev.notes,
        [lessonId]: note
      }
    }));
  };

  const getLessonNote = (lessonId: string) => {
    return progress.notes[lessonId] || '';
  };

  const updateStudyPlan = (plan: UserProgressState['studyPlan']) => {
    setProgress(prev => ({ ...prev, studyPlan: plan }));
  };

  const resetAllProgress = () => {
    localStorage.removeItem(STORAGE_KEY);
    setProgress({
      ...initialProgress,
      theme: progress.theme,
      languageMode: progress.languageMode
    });
  };

  const exportProgressJSON = () => {
    return JSON.stringify(progress, null, 2);
  };

  const importProgressJSON = (data: string): boolean => {
    try {
      const parsed = JSON.parse(data);
      if (parsed && typeof parsed === 'object') {
        setProgress(parsed);
        return true;
      }
    } catch (e) {
      console.error('Failed to import JSON progress:', e);
    }
    return false;
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        currentLevel: progress.currentLevel,
        languageMode: progress.languageMode,
        theme: progress.theme,
        setCurrentLevel,
        setLanguageMode,
        setTheme,
        toggleTheme,
        markLessonComplete,
        isLessonCompleted,
        recordQuizScore,
        updateVocabSrs,
        toggleFavoriteVocab,
        toggleBookmark,
        isBookmarked,
        saveLessonNote,
        getLessonNote,
        updateStudyPlan,
        resetAllProgress,
        exportProgressJSON,
        importProgressJSON
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
