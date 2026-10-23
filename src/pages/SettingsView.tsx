import React, { useState } from 'react';
import { 
  Settings, 
  Languages, 
  Moon, 
  Sun, 
  RotateCcw, 
  Download, 
  Upload, 
  CheckCircle2, 
  AlertTriangle,
  Database,
  ShieldCheck
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { LanguageMode } from '../types';

export const SettingsView: React.FC = () => {
  const { 
    languageMode, 
    setLanguageMode, 
    theme, 
    setTheme, 
    resetAllProgress, 
    exportProgressJSON, 
    importProgressJSON 
  } = useProgress();

  const [confirmResetOpen, setConfirmResetOpen] = useState(false);
  const [importJsonText, setImportJsonText] = useState('');
  const [importMessage, setImportMessage] = useState<{ text: string; isError: boolean } | null>(null);
  const [exportedCopied, setExportedCopied] = useState(false);

  const handleCopyExport = () => {
    const json = exportProgressJSON();
    navigator.clipboard.writeText(json);
    setExportedCopied(true);
    setTimeout(() => setExportedCopied(false), 2000);
  };

  const handleImport = () => {
    if (!importJsonText.trim()) return;
    const success = importProgressJSON(importJsonText.trim());
    if (success) {
      setImportMessage({ text: 'Progress restored successfully!', isError: false });
      setImportJsonText('');
    } else {
      setImportMessage({ text: 'Invalid JSON backup format. Please check and try again.', isError: true });
    }
    setTimeout(() => setImportMessage(null), 3500);
  };

  const handleConfirmReset = () => {
    resetAllProgress();
    setConfirmResetOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-200">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold mb-2">
          <Settings size={14} />
          <span>User Preferences & Data Storage • سیٹنگز</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Application Settings & Storage
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          Configure your explanation language, display theme, and manage offline data backup/export.
        </p>
      </div>

      {/* Preferences Section */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <h2 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
          Language & Appearance Preferences
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Explanation Language Mode */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Languages size={14} className="text-emerald-600" />
              <span>Explanation & Guidance Language</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setLanguageMode('en')}
                className={`py-3 px-2 rounded-2xl text-xs font-bold transition border ${
                  languageMode === 'en'
                    ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                English
              </button>

              <button
                type="button"
                onClick={() => setLanguageMode('ur')}
                className={`py-3 px-2 rounded-2xl text-sm font-urdu font-bold transition border ${
                  languageMode === 'ur'
                    ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                اردو (Urdu)
              </button>

              <button
                type="button"
                onClick={() => setLanguageMode('roman_ur')}
                className={`py-3 px-2 rounded-2xl text-xs font-bold transition border ${
                  languageMode === 'roman_ur'
                    ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                Roman Urdu
              </button>
            </div>
            <p className="text-[11px] text-slate-400">
              Switches grammar notes, lesson walkthroughs, and audio translations into your preferred language.
            </p>
          </div>

          {/* Theme Mode */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Sun size={14} className="text-amber-500" />
              <span>Display Theme</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`py-3 px-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 border transition ${
                  theme === 'light'
                    ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-xs font-extrabold'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}
              >
                <Sun size={15} />
                <span>Light Mode</span>
              </button>

              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`py-3 px-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 border transition ${
                  theme === 'dark'
                    ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-xs font-extrabold'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}
              >
                <Moon size={15} />
                <span>Dark Mode</span>
              </button>
            </div>
            <p className="text-[11px] text-slate-400">
              High-contrast mode for comfortable studying day or night.
            </p>
          </div>

        </div>
      </div>

      {/* Data Backup, Import & Export */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <Database size={18} className="text-blue-500" />
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            Data Backup, Export & Restore (Local Storage)
          </h2>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          All your learning progress, completed lessons, flashcard SRS intervals, study streaks, and quiz scores are stored safely in your browser&apos;s local storage. No external accounts or API keys required. You can export or import your data as JSON anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          
          {/* Export Box */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-2">
              <Download size={15} className="text-blue-500" />
              <span>Export Progress Backup</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Copy your entire learning state to clipboard to save on another computer or mobile device.
            </p>
            <button
              type="button"
              onClick={handleCopyExport}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-2xs"
            >
              {exportedCopied ? 'Copied to Clipboard! ✅' : 'Copy Backup JSON'}
            </button>
          </div>

          {/* Import Box */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-2">
              <Upload size={15} className="text-emerald-500" />
              <span>Restore Progress Backup</span>
            </div>
            <textarea
              value={importJsonText}
              onChange={e => setImportJsonText(e.target.value)}
              placeholder="Paste your backup JSON string here..."
              rows={2}
              className="w-full p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-mono focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            {importMessage && (
              <div className={`text-xs font-bold ${importMessage.isError ? 'text-rose-500' : 'text-emerald-600'}`}>
                {importMessage.text}
              </div>
            )}
            <button
              type="button"
              disabled={!importJsonText.trim()}
              onClick={handleImport}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white font-bold text-xs transition shadow-2xs"
            >
              Restore Progress
            </button>
          </div>

        </div>
      </div>

      {/* Danger Zone: Reset Progress */}
      <div className="p-6 rounded-3xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60 space-y-3">
        <div className="flex items-center gap-2 text-rose-800 dark:text-rose-300 font-bold text-sm">
          <AlertTriangle size={18} />
          <span>Danger Zone: Reset All Learning Progress</span>
        </div>
        <p className="text-xs text-rose-700/80 dark:text-rose-300/80">
          This will permanently wipe your completed lessons, quiz scores, bookmarked cards, and study streak from your local browser storage. This cannot be undone.
        </p>

        {!confirmResetOpen ? (
          <button
            type="button"
            onClick={() => setConfirmResetOpen(true)}
            className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition shadow-xs"
          >
            Reset All Learning Progress
          </button>
        ) : (
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-rose-300 dark:border-rose-800 space-y-3 animate-in fade-in duration-200">
            <div className="text-xs font-bold text-rose-600">
              Are you absolutely sure you want to reset all your German learning data?
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleConfirmReset}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold transition"
              >
                Yes, Permanently Reset Everything
              </button>
              <button
                type="button"
                onClick={() => setConfirmResetOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
