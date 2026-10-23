import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { GlobalSearchModal } from './components/GlobalSearchModal';

// Pages
import { DashboardView } from './pages/DashboardView';
import { RoadmapView } from './pages/RoadmapView';
import { CourseView } from './pages/CourseView';
import { LessonViewer } from './pages/LessonViewer';
import { GrammarLibraryView } from './pages/GrammarLibraryView';
import { SentenceBuilderView } from './pages/SentenceBuilderView';
import { VocabularyFlashcardsView } from './pages/VocabularyFlashcardsView';
import { SkillsPracticeView } from './pages/SkillsPracticeView';
import { QuizzesView } from './pages/QuizzesView';
import { GoetheResourcesView } from './pages/GoetheResourcesView';
import { StudyPlannerView } from './pages/StudyPlannerView';
import { StatsView } from './pages/StatsView';
import { BookmarksView } from './pages/BookmarksView';
import { SettingsView } from './pages/SettingsView';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [activeLessonId, setActiveLessonId] = useState<string>('a1-l1');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Navigate to a specific lesson
  const handleOpenLesson = (lessonId: string) => {
    setActiveLessonId(lessonId);
    setActiveTab('lesson-viewer');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView onNavigate={setActiveTab} onOpenLesson={handleOpenLesson} />;
      case 'roadmap':
        return <RoadmapView onNavigateCourse={setActiveTab} />;
      case 'course-A1':
        return <CourseView level="A1" onSelectLesson={handleOpenLesson} />;
      case 'course-A2':
        return <CourseView level="A2" onSelectLesson={handleOpenLesson} />;
      case 'course-B1':
        return <CourseView level="B1" onSelectLesson={handleOpenLesson} />;
      case 'course-B2':
        return <CourseView level="B2" onSelectLesson={handleOpenLesson} />;
      case 'lesson-viewer':
        return (
          <LessonViewer
            lessonId={activeLessonId}
            onBack={() => setActiveTab('course-A1')}
            onNavigateLesson={handleOpenLesson}
          />
        );
      case 'grammar':
        return <GrammarLibraryView />;
      case 'sentence-builder':
        return <SentenceBuilderView />;
      case 'vocabulary':
        return <VocabularyFlashcardsView />;
      case 'reading':
        return <SkillsPracticeView initialTab="reading" />;
      case 'writing':
        return <SkillsPracticeView initialTab="writing" />;
      case 'speaking':
        return <SkillsPracticeView initialTab="speaking" />;
      case 'listening':
        return <SkillsPracticeView initialTab="listening" />;
      case 'quizzes':
        return <QuizzesView />;
      case 'goethe':
        return <GoetheResourcesView />;
      case 'study-planner':
        return <StudyPlannerView />;
      case 'stats':
        return <StatsView />;
      case 'bookmarks':
        return <BookmarksView onOpenLesson={handleOpenLesson} />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardView onNavigate={setActiveTab} onOpenLesson={handleOpenLesson} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans transition-colors duration-200">
      
      {/* Top Navigation */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleMobileSidebar={() => setIsMobileSidebarOpen(prev => !prev)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Body with Sidebar + Content */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Sidebar */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isMobileOpen={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Dynamic Content View Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto max-w-5xl">
          {renderActiveView()}
        </main>
      </div>

      {/* Global Search Dialog Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectLesson={handleOpenLesson}
        onSelectGrammar={(grammarId) => {
          setActiveTab('grammar');
        }}
        onSelectVocab={() => {
          setActiveTab('vocabulary');
        }}
      />

    </div>
  );
};
export default App;
