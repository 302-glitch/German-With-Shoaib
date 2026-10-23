import React, { useState } from 'react';
import { 
  Sparkles, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Volume2, 
  ArrowRight, 
  HelpCircle,
  Shuffle,
  Lightbulb
} from 'lucide-react';
import { sentenceBuilderChallenges } from '../data/sentenceBuilderData';
import { AudioPlayerButton } from '../components/AudioPlayerButton';
import { LevelBadge } from '../components/LevelBadge';
import { useProgress } from '../context/ProgressContext';
import { CEFRLevel, SentenceBuilderChallenge } from '../types';

export const SentenceBuilderView: React.FC = () => {
  const { languageMode } = useProgress();
  const [selectedLevel, setSelectedLevel] = useState<string>('ALL');
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);

  // User-selected words in constructed order
  const [constructedWords, setConstructedWords] = useState<string[]>([]);
  // Available words remaining in the word bank
  const [availableWords, setAvailableWords] = useState<string[]>(() => {
    return [...sentenceBuilderChallenges[0].availableWords];
  });

  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // Filter challenges by level
  const filteredChallenges = sentenceBuilderChallenges.filter(c => 
    selectedLevel === 'ALL' || c.level === selectedLevel
  );

  const currentChallenge: SentenceBuilderChallenge = 
    filteredChallenges[currentChallengeIndex % filteredChallenges.length] || sentenceBuilderChallenges[0];

  const handleLevelChange = (lvl: string) => {
    setSelectedLevel(lvl);
    setCurrentChallengeIndex(0);
    const newFiltered = sentenceBuilderChallenges.filter(c => lvl === 'ALL' || c.level === lvl);
    const firstCh = newFiltered[0] || sentenceBuilderChallenges[0];
    setConstructedWords([]);
    setAvailableWords([...firstCh.availableWords]);
    setSubmitted(false);
    setShowHint(false);
  };

  const handleAddWord = (word: string, index: number) => {
    if (submitted) return;
    setConstructedWords(prev => [...prev, word]);
    setAvailableWords(prev => prev.filter((_, i) => i !== index));
  };

  const handleRemoveWord = (word: string, index: number) => {
    if (submitted) return;
    setConstructedWords(prev => prev.filter((_, i) => i !== index));
    setAvailableWords(prev => [...prev, word]);
  };

  const handleReset = () => {
    setConstructedWords([]);
    setAvailableWords([...currentChallenge.availableWords]);
    setSubmitted(false);
    setIsCorrect(false);
    setShowHint(false);
  };

  const handleCheck = () => {
    const constructedSentence = constructedWords.join(' ').trim();
    // Normalize punctuation & whitespace
    const cleanUser = constructedSentence.replace(/[.?!,]/g, '').toLowerCase().trim();
    
    const matched = currentChallenge.acceptedSentences.some(accepted => {
      const cleanAccepted = accepted.replace(/[.?!,]/g, '').toLowerCase().trim();
      return cleanUser === cleanAccepted;
    });

    setIsCorrect(matched);
    setSubmitted(true);
  };

  const handleNextChallenge = () => {
    const nextIdx = (currentChallengeIndex + 1) % filteredChallenges.length;
    setCurrentChallengeIndex(nextIdx);
    const nextCh = filteredChallenges[nextIdx];
    setConstructedWords([]);
    setAvailableWords([...nextCh.availableWords]);
    setSubmitted(false);
    setIsCorrect(false);
    setShowHint(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-200">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-bold mb-2">
          <Sparkles size={14} />
          <span>Interactive Grammar Lab • جملہ سازی کی لیبارٹری</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          German Sentence Builder Lab
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          Master the sacred Verb Position 2 rule, questions, negation, and subordinate clauses by dragging and clicking words into their grammatically correct positions.
        </p>
      </div>

      {/* Level Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {['ALL', 'A1', 'A2', 'B1', 'B2'].map(lvl => (
          <button
            key={lvl}
            onClick={() => handleLevelChange(lvl)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex-shrink-0 ${
              selectedLevel === lvl
                ? 'bg-amber-500 text-slate-950 shadow-xs'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
            }`}
          >
            {lvl === 'ALL' ? 'All Challenges' : `${lvl} Challenges`}
          </button>
        ))}
      </div>

      {/* Challenge Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        
        {/* Top Info Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <LevelBadge level={currentChallenge.level} size="md" />
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {currentChallenge.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowHint(prev => !prev)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold flex items-center gap-1.5 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/40 transition"
            >
              <Lightbulb size={14} />
              <span>{showHint ? 'Hide Rule Hint' : 'Rule Hint'}</span>
            </button>

            <button
              onClick={handleReset}
              className="p-1.5 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="Reset words"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>

        {/* Rule Hint Banner */}
        {showHint && (
          <div className="p-3.5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 space-y-1">
            <div className="font-bold flex items-center gap-1.5">
              <Lightbulb size={14} />
              <span>Grammar Golden Rule</span>
            </div>
            <p>{currentChallenge.ruleHint}</p>
          </div>
        )}

        {/* Target Sentence Display */}
        <div className="space-y-1.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Target Meaning to Construct in German:
          </div>
          <div className="text-lg font-bold text-slate-900 dark:text-white">
            {currentChallenge.targetEnglish}
          </div>
          
          <div className="font-urdu text-emerald-800 dark:text-emerald-300 text-base" dir="rtl">
            {currentChallenge.targetUrdu}
          </div>

          <div className="italic text-xs text-emerald-700 dark:text-emerald-400">
            {currentChallenge.targetRomanUrdu}
          </div>
        </div>

        {/* Constructed Sentence Construction Area (Drop zone) */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
            <span>Your German Sentence Construction Area:</span>
            {constructedWords.length > 0 && (
              <span className="text-[11px] text-slate-400 font-normal">Click a word to return it below</span>
            )}
          </div>

          <div className="min-h-[72px] p-4 rounded-2xl border-2 border-dashed border-amber-300 dark:border-amber-700/80 bg-amber-50/20 dark:bg-amber-950/10 flex flex-wrap items-center gap-2">
            {constructedWords.length === 0 ? (
              <span className="text-xs text-slate-400 italic">
                Click words from the bank below in the correct German order...
              </span>
            ) : (
              constructedWords.map((word, wIdx) => (
                <button
                  key={wIdx}
                  type="button"
                  onClick={() => handleRemoveWord(word, wIdx)}
                  className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-600 text-slate-900 dark:text-white font-bold text-sm shadow-sm hover:bg-rose-50 dark:hover:bg-rose-950/40 hover:border-rose-400 transition transform active:scale-95"
                >
                  {word}
                </button>
              ))
            )}
          </div>
        </div>

        {/* Available Word Bank */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Available Word Bank:
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex flex-wrap gap-2 min-h-[64px]">
            {availableWords.length === 0 ? (
              <span className="text-xs text-slate-400 italic">
                All words have been placed into your sentence! Click &ldquo;Check Sentence&rdquo; below.
              </span>
            ) : (
              availableWords.map((word, aIdx) => (
                <button
                  key={aIdx}
                  type="button"
                  onClick={() => handleAddWord(word, aIdx)}
                  className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-bold text-sm shadow-2xs hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 transition active:scale-95"
                >
                  {word}
                </button>
              ))
            )}
          </div>
        </div>

        {/* Action Buttons: Check & Next */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50"
          >
            Clear / Reset
          </button>

          {!submitted ? (
            <button
              type="button"
              disabled={constructedWords.length === 0}
              onClick={handleCheck}
              className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 font-extrabold text-xs transition shadow-sm active:scale-95"
            >
              Check Sentence
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNextChallenge}
              className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-extrabold text-xs transition shadow-sm flex items-center gap-2"
            >
              <span>Next Challenge</span>
              <ArrowRight size={14} />
            </button>
          )}
        </div>

        {/* Feedback Section */}
        {submitted && (
          <div className={`p-5 rounded-2xl text-xs space-y-3 animate-in fade-in duration-200 border ${
            isCorrect
              ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-700 text-emerald-950 dark:text-emerald-100'
              : 'bg-rose-50 dark:bg-rose-950/50 border-rose-300 dark:border-rose-700 text-rose-950 dark:text-rose-100'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-sm">
                {isCorrect ? (
                  <>
                    <CheckCircle2 size={18} className="text-emerald-600 dark:text-emerald-400" />
                    <span>Hervorragend! Perfectly Constructed Sentence!</span>
                  </>
                ) : (
                  <>
                    <XCircle size={18} className="text-rose-600 dark:text-rose-400" />
                    <span>Word Order Mistake! Check the German rule below:</span>
                  </>
                )}
              </div>

              {isCorrect && (
                <AudioPlayerButton text={constructedWords.join(' ')} iconSize={16} />
              )}
            </div>

            {/* Model answer */}
            <div className="p-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800 space-y-1">
              <div className="font-bold text-[11px] text-slate-500 uppercase">
                Accepted German Standard:
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {currentChallenge.acceptedSentences[0]}.
              </div>
            </div>

            {/* Explanations in English and Urdu */}
            <div className="space-y-1.5 leading-relaxed">
              <p className="font-medium">{currentChallenge.explanationEn}</p>
              
              {languageMode === 'ur' && (
                <p className="font-urdu text-emerald-800 dark:text-emerald-300 text-sm leading-loose pt-1" dir="rtl">
                  {currentChallenge.explanationUr}
                </p>
              )}

              {languageMode === 'roman_ur' && (
                <p className="italic text-emerald-700 dark:text-emerald-400 text-xs">
                  {currentChallenge.explanationRomanUrdu}
                </p>
              )}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
