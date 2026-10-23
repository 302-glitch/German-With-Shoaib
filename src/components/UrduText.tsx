import React from 'react';
import { useProgress } from '../context/ProgressContext';

interface UrduTextProps {
  en?: string;
  ur?: string;
  romanUr?: string;
  className?: string;
  showAll?: boolean; // display english with urdu subtitle
}

export const UrduText: React.FC<UrduTextProps> = ({
  en = '',
  ur = '',
  romanUr = '',
  className = '',
  showAll = false
}) => {
  const { languageMode } = useProgress();

  if (showAll) {
    return (
      <div className={`space-y-1 ${className}`}>
        {en && <p className="text-slate-800 dark:text-slate-200">{en}</p>}
        {languageMode === 'ur' && ur && (
          <p className="font-urdu text-right text-emerald-800 dark:text-emerald-300 text-sm leading-relaxed" dir="rtl">
            {ur}
          </p>
        )}
        {languageMode === 'roman_ur' && romanUr && (
          <p className="italic text-emerald-700 dark:text-emerald-400 text-xs">
            {romanUr}
          </p>
        )}
      </div>
    );
  }

  if (languageMode === 'ur' && ur) {
    return (
      <span className={`font-urdu text-right inline-block text-emerald-800 dark:text-emerald-300 ${className}`} dir="rtl">
        {ur}
      </span>
    );
  }

  if (languageMode === 'roman_ur' && romanUr) {
    return (
      <span className={`italic text-emerald-700 dark:text-emerald-400 ${className}`}>
        {romanUr}
      </span>
    );
  }

  return <span className={className}>{en || ur || romanUr}</span>;
};
