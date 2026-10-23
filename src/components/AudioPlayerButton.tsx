import React, { useState } from 'react';
import { Volume2, VolumeX, Loader2 } from 'lucide-react';
import { speechService } from '../utils/speech';

interface AudioPlayerButtonProps {
  text: string;
  rate?: number;
  label?: string;
  className?: string;
  iconSize?: number;
}

export const AudioPlayerButton: React.FC<AudioPlayerButtonProps> = ({
  text,
  rate = 0.9,
  label,
  className = '',
  iconSize = 16
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!speechService.hasSupport()) {
      setHasError(true);
      return;
    }

    if (isPlaying) {
      speechService.stop();
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    setHasError(false);

    const success = speechService.speak(text, rate, () => {
      setIsPlaying(false);
    });

    if (!success) {
      setIsPlaying(false);
      setHasError(true);
    }
  };

  return (
    <button
      type="button"
      onClick={handlePlay}
      title={hasError ? "Audio speech is not supported in this browser" : `Listen to "${text}"`}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-150 ${
        isPlaying
          ? 'bg-amber-500 text-white shadow-sm ring-2 ring-amber-300 dark:ring-amber-700 animate-pulse'
          : hasError
          ? 'bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400 cursor-not-allowed'
          : 'bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 dark:bg-slate-800 dark:hover:bg-amber-950/60 dark:text-slate-300 dark:hover:text-amber-200'
      } ${className}`}
    >
      {isPlaying ? (
        <Volume2 size={iconSize} className="animate-bounce" />
      ) : hasError ? (
        <VolumeX size={iconSize} />
      ) : (
        <Volume2 size={iconSize} />
      )}
      {label && <span>{label}</span>}
    </button>
  );
};
