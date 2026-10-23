import React, { useState } from 'react';
import { 
  Search, 
  Layers, 
  CheckCircle2, 
  XCircle, 
  BookOpen, 
  ArrowRight, 
  Sparkles, 
  AlertTriangle,
  HelpCircle,
  RotateCcw
} from 'lucide-react';
import { grammarTopicsData } from '../data/grammarData';
import { LevelBadge } from '../components/LevelBadge';
import { AudioPlayerButton } from '../components/AudioPlayerButton';
import { useProgress } from '../context/ProgressContext';
import { CEFRLevel, GrammarTopic } from '../types';

export const GrammarLibraryView: React.FC = () => {
  const { languageMode } = useProgress();
  const [selectedTopicId, setSelectedTopicId] = useState<string>(grammarTopicsData[0].id);
  const [selectedLevel, setSelectedLevel] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Practice question state for active topic
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<string, boolean>>({});

  const filteredTopics = grammarTopicsData.filter(topic => {
    const matchesLevel = selectedLevel === 'ALL' || topic.level === selectedLevel;
    const cleanQ = searchQuery.toLowerCase().trim();
    const matchesQuery = !cleanQ || 
      topic.title.toLowerCase().includes(cleanQ) ||
      topic.category.toLowerCase().includes(cleanQ) ||
      topic.beginnerExplanationEn.toLowerCase().includes(cleanQ) ||
      topic.beginnerExplanationUr.includes(cleanQ) ||
      (topic.beginnerExplanationRomanUrdu || topic.beginnerExplanationRomanUr || '').toLowerCase().includes(cleanQ);
    return matchesLevel && matchesQuery;
  });

  const activeTopic = grammarTopicsData.find(t => t.id === selectedTopicId) || grammarTopicsData[0];

  const handleSelectAnswer = (qId: string, answer: string) => {
    setSelectedAnswers(prev => ({ ...prev, [qId]: answer }));
  };

  const handleCheckAnswer = (qId: string) => {
    setSubmittedQuestions(prev => ({ ...prev, [qId]: true }));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 text-xs font-bold mb-2">
          <Layers size={14} />
          <span>Searchable German Grammar Library • مکمل گرامر ریفرنس</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          German Grammar Reference (A1 to B2)
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl">
          Understand rules with beginner-friendly explanations in English, Urdu, and Roman Urdu. Learn formulas, study common pitfalls, and test yourself.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Level Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {['ALL', 'A1', 'A2', 'B1', 'B2'].map(lvl => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex-shrink-0 ${
                selectedLevel === lvl
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
              }`}
            >
              {lvl === 'ALL' ? 'All Levels' : lvl}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search grammar topics (e.g., der die das, Perfekt, Akkusativ, Dativ)..."
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Main Grid: Sidebar List + Active Topic Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Topics List */}
        <div className="lg:col-span-4 space-y-2 max-h-[750px] overflow-y-auto pr-1">
          {filteredTopics.length === 0 ? (
            <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-400 text-xs">
              No grammar topics match your filter.
            </div>
          ) : (
            filteredTopics.map(topic => {
              const isSelected = topic.id === activeTopic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`w-full text-left p-3.5 rounded-2xl transition-all border ${
                    isSelected
                      ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-400 dark:border-blue-700 shadow-xs'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <LevelBadge level={topic.level} size="sm" />
                    <span className="text-[10px] font-semibold text-slate-400">
                      {topic.category}
                    </span>
                  </div>
                  <div className={`text-xs font-bold ${
                    isSelected ? 'text-blue-700 dark:text-blue-300' : 'text-slate-900 dark:text-white'
                  }`}>
                    {topic.title}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {topic.beginnerExplanationEn}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Right Active Topic Viewer */}
        <div className="lg:col-span-8 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            
            {/* Topic Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <LevelBadge level={activeTopic.level} size="md" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {activeTopic.category}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {activeTopic.title}
              </h2>
            </div>

            {/* Beginner Explanation */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Beginner-Friendly Summary • آسان تعارف
              </div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {activeTopic.beginnerExplanationEn}
              </p>
              
              {languageMode === 'ur' && (
                <p className="font-urdu text-emerald-800 dark:text-emerald-300 text-base leading-loose pt-1" dir="rtl">
                  {activeTopic.beginnerExplanationUr}
                </p>
              )}

              {languageMode === 'roman_ur' && (
                <p className="text-xs italic text-emerald-700 dark:text-emerald-400 pt-1">
                  {activeTopic.beginnerExplanationRomanUrdu}
                </p>
              )}
            </div>

            {/* Sentence Formula Banner if present */}
            {activeTopic.sentenceFormula && (
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 space-y-1">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                  <Sparkles size={13} />
                  <span>Grammar Formula & Sentence Bracket</span>
                </div>
                <div className="font-mono text-xs sm:text-sm font-bold text-amber-950 dark:text-amber-100">
                  {activeTopic.sentenceFormula}
                </div>
              </div>
            )}

            {/* Detailed Explanation */}
            <div className="space-y-2 text-sm leading-relaxed">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                In-Depth Explanation
              </h3>
              <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line">
                {activeTopic.detailedExplanationEn}
              </p>
              
              {languageMode === 'ur' && activeTopic.detailedExplanationUr && (
                <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 font-urdu text-emerald-900 dark:text-emerald-200 text-sm leading-loose mt-2" dir="rtl">
                  {activeTopic.detailedExplanationUr}
                </div>
              )}

              {languageMode === 'roman_ur' && activeTopic.detailedExplanationRomanUrdu && (
                <div className="p-3 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs italic mt-2">
                  {activeTopic.detailedExplanationRomanUrdu}
                </div>
              )}
            </div>

            {/* Tables if present */}
            {activeTopic.tables && activeTopic.tables.map((t, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {t.title}
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 uppercase font-bold text-[10px]">
                      <tr>
                        {t.headers.map((h, hIdx) => (
                          <th key={hIdx} className="p-3">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                      {t.rows.map((row, rIdx) => (
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
              </div>
            ))}

            {/* Examples with Audio */}
            {activeTopic.examples && activeTopic.examples.length > 0 && (
              <div className="space-y-2.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Real Examples • عملی مثالیں
                </h3>
                <div className="space-y-2">
                  {activeTopic.examples.map((ex, exIdx) => (
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

            {/* Common Mistakes */}
            {activeTopic.commonMistakes && activeTopic.commonMistakes.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle size={15} />
                  <span>Common Beginner Mistakes to Avoid • عام غلطیاں</span>
                </h3>
                <div className="space-y-2.5">
                  {activeTopic.commonMistakes.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-4 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 space-y-1.5 text-xs"
                    >
                      <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300 font-bold line-through">
                        <XCircle size={14} className="flex-shrink-0" />
                        <span>{m.incorrect}</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-bold">
                        <CheckCircle2 size={14} className="flex-shrink-0" />
                        <span>{m.correct}</span>
                      </div>
                      <div className="text-slate-600 dark:text-slate-400 pt-1">
                        {m.whyEn}
                      </div>
                      {languageMode === 'ur' && (
                        <div className="font-urdu text-emerald-800 dark:text-emerald-300 text-sm" dir="rtl">
                          {m.whyUr}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Practice Questions */}
            {activeTopic.practiceQuestions && activeTopic.practiceQuestions.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <HelpCircle size={18} className="text-blue-500" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Quick Practice: Test this Grammar Rule
                  </h3>
                </div>

                <div className="space-y-4">
                  {activeTopic.practiceQuestions.map((q) => {
                    const selected = selectedAnswers[q.id];
                    const submitted = submittedQuestions[q.id];
                    const isCorrect = selected === q.correctAnswer;

                    return (
                      <div
                        key={q.id}
                        className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-3"
                      >
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          {q.question}
                        </div>
                        {q.questionUrdu && (
                          <div className="font-urdu text-emerald-800 dark:text-emerald-300 text-sm" dir="rtl">
                            {q.questionUrdu}
                          </div>
                        )}

                        {q.options && (
                          <div className="grid grid-cols-2 gap-2 pt-1">
                            {q.options.map((opt) => (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => !submitted && handleSelectAnswer(q.id, opt)}
                                className={`p-2.5 rounded-xl text-xs font-semibold text-left transition border ${
                                  selected === opt
                                    ? 'bg-blue-600 text-white border-blue-700 shadow-xs'
                                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-blue-400'
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        )}

                        {!submitted ? (
                          <button
                            type="button"
                            disabled={!selected}
                            onClick={() => handleCheckAnswer(q.id)}
                            className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 transition"
                          >
                            Check Answer
                          </button>
                        ) : (
                          <div className={`p-3.5 rounded-xl text-xs space-y-1 ${
                            isCorrect
                              ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/70 dark:text-emerald-200 border border-emerald-300'
                              : 'bg-rose-100 text-rose-900 dark:bg-rose-950/70 dark:text-rose-200 border border-rose-300'
                          }`}>
                            <div className="font-bold">
                              {isCorrect ? '✅ Richtig! Correct!' : '❌ Falsch! Incorrect.'}
                            </div>
                            <p>{q.explanationEn}</p>
                            <p className="font-urdu pt-1" dir="rtl">{q.explanationUr}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
