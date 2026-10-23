import React from 'react';
import { CEFRLevel } from '../types';

interface LevelBadgeProps {
  level: CEFRLevel;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LevelBadge: React.FC<LevelBadgeProps> = ({ level, className = '', size = 'md' }) => {
  const colorMap: Record<CEFRLevel, string> = {
    A1: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700',
    A2: 'bg-blue-100 text-blue-800 dark:bg-blue-950/70 dark:text-blue-300 border-blue-300 dark:border-blue-700',
    B1: 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border-amber-300 dark:border-amber-700',
    B2: 'bg-purple-100 text-purple-800 dark:bg-purple-950/70 dark:text-purple-300 border-purple-300 dark:border-purple-700'
  };

  const sizeMap = {
    sm: 'text-xs px-2 py-0.5 font-semibold',
    md: 'text-xs px-2.5 py-1 font-bold',
    lg: 'text-sm px-3.5 py-1.5 font-extrabold'
  };

  return (
    <span className={`inline-flex items-center rounded-full border shadow-xs tracking-wider uppercase ${colorMap[level]} ${sizeMap[size]} ${className}`}>
      {level}
    </span>
  );
};
