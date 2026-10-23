import React, { useState } from 'react';
import { 
  BookOpen, 
  RotateCw, 
  Volume2, 
  Star, 
  Check, 
  X, 
  Search, 
  Shuffle, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Filter
} from 'lucide-react';
import { vocabularyData } from '../data/vocabularyData';
import { useProgress } from '../context/ProgressContext';
import { AudioPlayerButton } from '../components/AudioPlayerButton';
import { LevelBadge } from '../components/LevelBadge';
import { CEFRLevel, VocabularyItem } from '../types';

export const VocabularyFlashcardsView: React.FC = () => {
  const { 
    progress, 
    updateVocabSrs, 
    toggleFavoriteVocab, 
    languageMode 
  } = useProgress();

  const [activeMode, setActiveMode] = useState<'flashcard' | 'quiz' | 'typing'>('flashcard');
  const [selectedLevel, setSelectedLevel] = useState<string>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Flashcard state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Typing practice state
  const [typedInput, setTypedInput] = useState('');
  const [typingSubmitted, setTypingSubmitted] = useState(false);

  // Extract all unique categories
  const categories = Array.from(new Set(vocabularyData.map(v => v.category)));

  // Filter vocabulary
  const filteredVocab = vocabularyData.filter(v => {
    const matchLevel = selectedLevel === 'ALL' || v.level === selectedLevel;
    const matchCat = selectedCategory === 'ALL' || v.category === selectedCategory;
    const isFav = progress.vocabularyStats[v.id]?.isFavorite;
    const matchFav = !onlyFavorites || isFav;
    const cleanQ = searchQuery.toLowerCase().trim();
    const matchSearch = !cleanQ ||
      v.german.toLowerCase().includes(cleanQ) ||
      v.english.toLowerCase().includes(cleanQ) ||
      v.urdu.includes(cleanQ) ||
      v.romanUrdu.toLowerCase().includes(cleanQ);
    return matchLevel && matchCat && matchFav && matchSearch;
  });

  const currentItem: VocabularyItem = filteredVocab[currentIndex % filteredVocab.length] || filteredVocab[0] || vocabularyData[0];
  const isFavorite = progress.vocabularyStats[currentItem.id]?.isFavorite;
  const srsLevel = progress.vocabularyStats[currentItem.id]?.srsLevel || 0;

  const handleNext = () => {
    setIsFlipped(false);
    setTypingSubmitted(false);
    setTypedInput('');
    setCurrentIndex(prev => (prev + 1) % filteredVocab.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTypingSubmitted(false);
    setTypedInput('');
    setCurrentIndex(prev => (prev - 1 + filteredVocab.length) % filteredVocab.length);
  };

  const handleSrsGrade = (grade: number) => {
    updateVocabSrs(currentItem.id, grade);
    handleNext();
  };

  const handleCheckTyping = () => {
    setTypingSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-200">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-2">
          <BookOpen size={14} />
          <span>Spaced Repetition System (SRS) • ذخیرہ الفاظ</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          German Vocabulary & Flashcards
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          Learn nouns with their grammatical genders (der, die, das), plurals, English, Urdu, and Roman Urdu translations with authentic German audio pronunciation.
        </p>
      </div>

      {/* Mode Selector Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveMode('flashcard')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeMode === 'flashcard'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-extrabold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Flashcard Flip Mode
          </button>
          <button
            onClick={() => setActiveMode('typing')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeMode === 'typing'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-extrabold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Spelling & Typing Practice
          </button>
        </div>

        <button
          onClick={() => setOnlyFavorites(prev => !prev)}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
            onlyFavorites
              ? 'bg-amber-500 text-slate-950 shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-amber-500'
          }`}
        >
          <Star size={14} className={onlyFavorites ? 'fill-slate-950' : ''} />
          <span>Starred Only</span>
        </button>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Level Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {['ALL', 'A1', 'A2', 'B1', 'B2'].map(lvl => (
            <button
              key={lvl}
              onClick={() => {
                setSelectedLevel(lvl);
                setCurrentIndex(0);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex-shrink-0 ${
                selectedLevel === lvl
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
              }`}
            >
              {lvl === 'ALL' ? 'All Levels' : lvl}
            </button>
          ))}
        </div>

        {/* Category Dropdown */}
        <select
          value={selectedCategory}
          onChange={e => {
            setSelectedCategory(e.target.value);
            setCurrentIndex(0);
          }}
          className="px-3 py-1.5 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none"
        >
          <option value="ALL">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        {/* Search */}
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => {
              setSearchQuery(e.target.value);
              setCurrentIndex(0);
            }}
            placeholder="Search words (English, German, اردو)..."
            className="w-full pl-9 pr-4 py-1.5 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {filteredVocab.length === 0 ? (
        <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-400 text-sm">
          No vocabulary matches the selected filters.
        </div>
      ) : activeMode === 'flashcard' ? (
        
        /* FLASHCARD FLIP MODE */
        <div className="space-y-6">
          
          {/* Main Flashcard */}
          <div
            onClick={() => setIsFlipped(prev => !prev)}
            className="cursor-pointer min-h-[340px] p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-500 transition-all shadow-md relative flex flex-col justify-between select-none"
          >
            {/* Top Info Bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <LevelBadge level={currentItem.level} size="sm" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {currentItem.category}
                </span>
                {srsLevel > 0 && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 font-bold">
                    Mastery Level {srsLevel}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavoriteVocab(currentItem.id);
                  }}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-amber-500"
                  title="Bookmark word"
                >
                  <Star size={18} className={isFavorite ? 'text-amber-500 fill-amber-500' : ''} />
                </button>
                <span className="text-xs font-bold text-slate-400">
                  {currentIndex + 1} / {filteredVocab.length}
                </span>
              </div>
            </div>

            {/* Center Content (Front or Back) */}
            <div className="text-center py-6 space-y-4">
              {!isFlipped ? (
                /* FRONT: German Word + Article */
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-3">
                    {currentItem.article && (
                      <span className={`text-2xl sm:text-3xl font-extrabold uppercase ${
                        currentItem.article === 'der' ? 'text-blue-600 dark:text-blue-400' :
                        currentItem.article === 'die' ? 'text-rose-600 dark:text-rose-400' :
                        'text-emerald-600 dark:text-emerald-400'
                      }`}>
                        {currentItem.article}
                      </span>
                    )}
                    <span className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                      {currentItem.german}
                    </span>
                  </div>

                  {currentItem.plural && (
                    <div className="text-sm font-semibold text-amber-600 dark:text-amber-400">
                      Plural: {currentItem.plural}
                    </div>
                  )}

                  <div className="text-xs text-slate-400 font-mono">
                    Pronunciation: {currentItem.pronunciationGuide}
                  </div>

                  <div className="pt-2">
                    <AudioPlayerButton text={currentItem.german} label="Listen to German" iconSize={16} />
                  </div>
                </div>
              ) : (
                /* BACK: English & Urdu Translation + Example */
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {currentItem.english}
                  </div>

                  <div className="font-urdu text-emerald-700 dark:text-emerald-400 text-2xl sm:text-3xl" dir="rtl">
                    {currentItem.urdu}
                  </div>

                  <div className="italic text-xs text-emerald-800 dark:text-emerald-300">
                    Roman Urdu: {currentItem.romanUrdu}
                  </div>

                  {/* Example Sentence */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs max-w-lg mx-auto text-left space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 dark:text-slate-100 italic">
                        &ldquo;{currentItem.exampleSentence}&rdquo;
                      </span>
                      <AudioPlayerButton text={currentItem.exampleSentence} iconSize={13} />
                    </div>
                    <div className="text-slate-500 dark:text-slate-400">
                      {currentItem.exampleTranslationEn}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Flip Indicator */}
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
              <RotateCw size={14} />
              <span>Click anywhere on card to flip</span>
            </div>
          </div>

          {/* SRS Performance Grading Buttons (Spaced Repetition) */}
          {isFlipped ? (
            <div className="space-y-2 text-center animate-in fade-in duration-200">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                How well did you remember this word? (Adjusts SRS schedule)
              </div>
              <div className="grid grid-cols-4 gap-2">
                <button
                  type="button"
                  onClick={() => handleSrsGrade(1)}
                  className="p-3 rounded-2xl bg-rose-100 hover:bg-rose-200 dark:bg-rose-950/70 text-rose-800 dark:text-rose-200 font-bold text-xs transition"
                >
                  <div>Forgot (1)</div>
                  <div className="text-[10px] text-rose-600 dark:text-rose-400">Repeat Today</div>
                </button>
                <button
                  type="button"
                  onClick={() => handleSrsGrade(2)}
                  className="p-3 rounded-2xl bg-amber-100 hover:bg-amber-200 dark:bg-amber-950/70 text-amber-800 dark:text-amber-200 font-bold text-xs transition"
                >
                  <div>Hard (2)</div>
                  <div className="text-[10px] text-amber-600 dark:text-amber-400">1 Day</div>
                </button>
                <button
                  type="button"
                  onClick={() => handleSrsGrade(3)}
                  className="p-3 rounded-2xl bg-blue-100 hover:bg-blue-200 dark:bg-blue-950/70 text-blue-800 dark:text-blue-200 font-bold text-xs transition"
                >
                  <div>Good (3)</div>
                  <div className="text-[10px] text-blue-600 dark:text-blue-400">3 Days</div>
                </button>
                <button
                  type="button"
                  onClick={() => handleSrsGrade(5)}
                  className="p-3 rounded-2xl bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-200 font-bold text-xs transition"
                >
                  <div>Easy (4)</div>
                  <div className="text-[10px] text-emerald-600 dark:text-emerald-400">7 Days</div>
                </button>
              </div>
            </div>
          ) : (
            /* Navigation Arrow Buttons */
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handlePrev}
                className="px-5 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition"
              >
                Previous Card
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold transition shadow-sm"
              >
                Next Card
              </button>
            </div>
          )}

        </div>
      ) : (
        
        /* TYPING & SPELLING PRACTICE MODE */
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <LevelBadge level={currentItem.level} size="sm" />
            <span className="text-xs font-bold text-slate-400">
              Word {currentIndex + 1} of {filteredVocab.length}
            </span>
          </div>

          <div className="text-center space-y-2 py-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Type the German word for:
            </div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">
              {currentItem.english}
            </div>
            <div className="font-urdu text-emerald-700 dark:text-emerald-400 text-xl" dir="rtl">
              {currentItem.urdu}
            </div>
          </div>

          {/* Typing Form */}
          <div className="max-w-md mx-auto space-y-3">
            <input
              type="text"
              value={typedInput}
              disabled={typingSubmitted}
              onChange={e => setTypedInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && !typingSubmitted && typedInput.trim()) {
                  handleCheckTyping();
                }
              }}
              placeholder="e.g. Wasser or der Tisch..."
              className="w-full text-center px-4 py-3 rounded-2xl text-lg font-bold bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:outline-none focus:border-amber-500 text-slate-900 dark:text-white"
            />

            {/* German Character Quick Buttons (ä, ö, ü, ß) */}
            <div className="flex items-center justify-center gap-2 pt-1">
              {['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'].map(ch => (
                <button
                  key={ch}
                  type="button"
                  onClick={() => setTypedInput(prev => prev + ch)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition"
                >
                  {ch}
                </button>
              ))}
            </div>

            {!typingSubmitted ? (
              <button
                type="button"
                disabled={!typedInput.trim()}
                onClick={handleCheckTyping}
                className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 font-extrabold text-sm transition shadow-sm"
              >
                Check Spelling
              </button>
            ) : (
              <div className="space-y-4 pt-2 animate-in fade-in duration-200">
                {typedInput.toLowerCase().trim() === currentItem.german.toLowerCase().trim() ||
                 typedInput.toLowerCase().trim() === `${currentItem.article || ''} ${currentItem.german}`.toLowerCase().trim() ? (
                  <div className="p-4 rounded-2xl bg-emerald-100 text-emerald-900 dark:bg-emerald-950/70 dark:text-emerald-200 font-bold text-center text-sm">
                    ✅ Perfekt! Exactly right!
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-rose-100 text-rose-900 dark:bg-rose-950/70 dark:text-rose-200 text-center text-xs space-y-1">
                    <div className="font-bold">❌ Not quite right!</div>
                    <div>Correct spelling: <span className="font-bold text-sm text-slate-900 dark:text-white">{currentItem.article ? `${currentItem.article} ` : ''}{currentItem.german}</span></div>
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-extrabold text-sm transition shadow-sm"
                >
                  Next Word
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
