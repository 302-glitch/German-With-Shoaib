import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Layers, Type, ArrowRight, Volume2 } from 'lucide-react';
import { coursesData } from '../data/coursesData';
import { grammarTopicsData } from '../data/grammarData';
import { vocabularyData } from '../data/vocabularyData';
import { AudioPlayerButton } from './AudioPlayerButton';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLesson: (lessonId: string) => void;
  onSelectGrammar: (grammarId: string) => void;
  onSelectVocab: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectLesson,
  onSelectGrammar,
  onSelectVocab
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Global Ctrl+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Trigger open if caller supports it
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  // Filter lessons
  const matchedLessons = cleanQuery
    ? coursesData.flatMap(m => m.lessons).filter(l => 
        l.title.toLowerCase().includes(cleanQuery) ||
        l.titleUrdu.includes(cleanQuery) ||
        l.titleRomanUrdu.toLowerCase().includes(cleanQuery) ||
        l.description.toLowerCase().includes(cleanQuery)
      ).slice(0, 5)
    : [];

  // Filter grammar
  const matchedGrammar = cleanQuery
    ? grammarTopicsData.filter(g =>
        g.title.toLowerCase().includes(cleanQuery) ||
        g.beginnerExplanationEn.toLowerCase().includes(cleanQuery) ||
        g.beginnerExplanationUr.includes(cleanQuery) ||
        (g.beginnerExplanationRomanUrdu || g.beginnerExplanationRomanUr || '').toLowerCase().includes(cleanQuery)
      ).slice(0, 5)
    : [];

  // Filter vocabulary
  const matchedVocab = cleanQuery
    ? vocabularyData.filter(v =>
        v.german.toLowerCase().includes(cleanQuery) ||
        v.english.toLowerCase().includes(cleanQuery) ||
        v.urdu.includes(cleanQuery) ||
        v.romanUrdu.toLowerCase().includes(cleanQuery)
      ).slice(0, 6)
    : [];

  const totalResults = matchedLessons.length + matchedGrammar.length + matchedVocab.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 gap-3">
          <Search size={20} className="text-slate-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search lessons, grammar rules, vocabulary (English, German, اردو)..."
            className="flex-1 bg-transparent border-none text-slate-900 dark:text-slate-100 placeholder-slate-400 text-sm focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400"
            >
              <X size={16} />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
          >
            Esc
          </button>
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5">
          {!cleanQuery && (
            <div className="text-center py-10 text-slate-400 text-sm">
              <p>Type anything to search across the entire academy.</p>
              <p className="text-xs mt-1 text-slate-500">
                Examples: <span className="text-amber-500 font-mono">Perfekt</span>, <span className="text-amber-500 font-mono">der die das</span>, <span className="text-amber-500 font-mono">Akkusativ</span>, <span className="text-amber-500 font-mono">Brot</span>, <span className="text-emerald-500 font-urdu">پرفیکٹ ٹینس</span>
              </p>
            </div>
          )}

          {cleanQuery && totalResults === 0 && (
            <div className="text-center py-12 text-slate-400 text-sm">
              No results found for &ldquo;{query}&rdquo;. Try another term.
            </div>
          )}

          {/* Lessons matches */}
          {matchedLessons.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                <BookOpen size={14} className="text-amber-500" />
                <span>Lessons ({matchedLessons.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedLessons.map(lesson => (
                  <button
                    key={lesson.id}
                    onClick={() => {
                      onSelectLesson(lesson.id);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 border border-slate-100 dark:border-slate-800 transition flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] px-1.5 py-0.5 rounded font-bold bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300">
                          {lesson.level}
                        </span>
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400">
                          {lesson.title}
                        </span>
                      </div>
                      <div className="text-[11px] font-urdu text-emerald-700 dark:text-emerald-400 mt-0.5" dir="rtl">
                        {lesson.titleUrdu}
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Grammar matches */}
          {matchedGrammar.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                <Layers size={14} className="text-blue-500" />
                <span>Grammar Rules ({matchedGrammar.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedGrammar.map(g => (
                  <button
                    key={g.id}
                    onClick={() => {
                      onSelectGrammar(g.id);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 border border-slate-100 dark:border-slate-800 transition flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] px-1.5 py-0.5 rounded font-bold bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300">
                          {g.level}
                        </span>
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {g.title}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-md mt-0.5">
                        {g.beginnerExplanationEn}
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Vocabulary matches */}
          {matchedVocab.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                <Type size={14} className="text-emerald-500" />
                <span>Vocabulary Words ({matchedVocab.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedVocab.map(v => (
                  <div
                    key={v.id}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        {v.article && (
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            v.article === 'der' ? 'bg-blue-100 text-blue-800 dark:bg-blue-950/70 dark:text-blue-300' :
                            v.article === 'die' ? 'bg-rose-100 text-rose-800 dark:bg-rose-950/70 dark:text-rose-300' :
                            'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300'
                          }`}>
                            {v.article}
                          </span>
                        )}
                        <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                          {v.german}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {v.english} • <span className="font-urdu text-emerald-700 dark:text-emerald-400">{v.urdu}</span>
                      </div>
                    </div>
                    <AudioPlayerButton text={v.german} iconSize={14} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between text-[11px] text-slate-500">
          <span>Navigate with mouse or keyboard</span>
          <span>Deutsch Master Search Engine</span>
        </div>
      </div>
    </div>
  );
};
