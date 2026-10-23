import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  FileEdit, 
  Mic, 
  Volume2, 
  Clock, 
  CheckCircle2, 
  HelpCircle, 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles,
  Eye,
  EyeOff
} from 'lucide-react';
import { 
  readingExercisesData, 
  writingExercisesData, 
  speakingExercisesData 
} from '../data/skillsPracticeData';
import { LevelBadge } from '../components/LevelBadge';
import { AudioPlayerButton } from '../components/AudioPlayerButton';
import { useProgress } from '../context/ProgressContext';

interface SkillsPracticeViewProps {
  initialTab?: 'reading' | 'writing' | 'speaking' | 'listening';
}

export const SkillsPracticeView: React.FC<SkillsPracticeViewProps> = ({
  initialTab = 'reading'
}) => {
  const { languageMode } = useProgress();
  const [activeTab, setActiveTab] = useState<'reading' | 'writing' | 'speaking' | 'listening'>(initialTab);

  // Reading state
  const [selectedReadingIndex, setSelectedReadingIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [readingAnswers, setReadingAnswers] = useState<Record<string, number>>({});
  const [readingSubmitted, setReadingSubmitted] = useState<Record<string, boolean>>({});

  // Writing state
  const [selectedWritingIndex, setSelectedWritingIndex] = useState(0);
  const [userText, setUserText] = useState('');
  const [showModelAnswer, setShowModelAnswer] = useState(false);
  const [completedChecklist, setCompletedChecklist] = useState<Record<number, boolean>>({});

  // Speaking state
  const [selectedSpeakingIndex, setSelectedSpeakingIndex] = useState(0);
  const [timerSecondsLeft, setTimerSecondsLeft] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const activeReading = readingExercisesData[selectedReadingIndex] || readingExercisesData[0];
  const activeWriting = writingExercisesData[selectedWritingIndex] || writingExercisesData[0];
  const activeSpeaking = speakingExercisesData[selectedSpeakingIndex] || speakingExercisesData[0];

  // Timer effect for speaking roleplay
  useEffect(() => {
    let interval: any;
    if (isTimerRunning && timerSecondsLeft > 0) {
      interval = setInterval(() => {
        setTimerSecondsLeft(prev => prev - 1);
      }, 1000);
    } else if (timerSecondsLeft === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSecondsLeft]);

  // Count words in writing area
  const wordCount = userText.trim() ? userText.trim().split(/\s+/).length : 0;

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-200">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 text-xs font-bold mb-2">
          <Sparkles size={14} />
          <span>4 CEFR Language Skills • چاروں بنیادی مہارتیں</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Reading, Writing, Speaking & Listening
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          Structured exam practice designed around the four core Goethe-Zertifikat components.
        </p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <button
          onClick={() => setActiveTab('reading')}
          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
            activeTab === 'reading'
              ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-extrabold text-blue-600 dark:text-blue-400'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <BookOpen size={15} />
          <span>Reading (Lesen)</span>
        </button>

        <button
          onClick={() => setActiveTab('writing')}
          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
            activeTab === 'writing'
              ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-extrabold text-rose-600 dark:text-rose-400'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <FileEdit size={15} />
          <span>Writing (Schreiben)</span>
        </button>

        <button
          onClick={() => setActiveTab('speaking')}
          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
            activeTab === 'speaking'
              ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-extrabold text-purple-600 dark:text-purple-400'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <Mic size={15} />
          <span>Speaking (Sprechen)</span>
        </button>

        <button
          onClick={() => setActiveTab('listening')}
          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
            activeTab === 'listening'
              ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-extrabold text-amber-600 dark:text-amber-400'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <Volume2 size={15} />
          <span>Listening (Hören)</span>
        </button>
      </div>

      {/* READING PRACTICE TAB */}
      {activeTab === 'reading' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <LevelBadge level={activeReading.level} size="md" />
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  {activeReading.title}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowTranslation(prev => !prev)}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 flex items-center gap-1.5"
                >
                  {showTranslation ? <EyeOff size={14} /> : <Eye size={14} />}
                  <span>{showTranslation ? 'Hide Translation' : 'Show Translation'}</span>
                </button>
                <AudioPlayerButton text={activeReading.germanText} label="Listen to Passage" iconSize={15} />
              </div>
            </div>

            {/* German Reading Passage */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3 leading-relaxed">
              <div className="text-base sm:text-lg text-slate-900 dark:text-slate-100 font-medium">
                {activeReading.germanText}
              </div>

              {/* Optional Translation Accordion */}
              {showTranslation && (
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700 space-y-2 text-xs animate-in fade-in duration-200">
                  <div className="text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-800 dark:text-slate-200">English: </strong>
                    {activeReading.englishTranslation}
                  </div>
                  <div className="font-urdu text-emerald-800 dark:text-emerald-300 text-sm leading-loose pt-1" dir="rtl">
                    <strong className="font-sans text-xs">Urdu: </strong>
                    {activeReading.urduTranslation}
                  </div>
                </div>
              )}
            </div>

            {/* Vocabulary Glossary */}
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Key Vocabulary Glossary in this Passage:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {activeReading.vocabularyGlossary.map((g, gIdx) => (
                  <div key={gIdx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs">
                    <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                      <span>{g.word}</span>
                      <AudioPlayerButton text={g.word} iconSize={11} />
                    </div>
                    <div className="text-slate-500 text-[11px]">{g.meaningEn}</div>
                    <div className="font-urdu text-emerald-700 dark:text-emerald-400 text-xs mt-0.5" dir="rtl">
                      {g.meaningUr}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reading Comprehension Questions */}
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <HelpCircle size={16} className="text-blue-500" />
                <span>Comprehension Questions</span>
              </h3>

              <div className="space-y-4">
                {activeReading.questions.map((q) => {
                  const selected = readingAnswers[q.id];
                  const submitted = readingSubmitted[q.id];
                  const isCorrect = selected === q.correctIndex;

                  return (
                    <div key={q.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-3">
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {q.questionEn}
                      </div>
                      <div className="font-urdu text-emerald-800 dark:text-emerald-300 text-xs" dir="rtl">
                        {q.questionUrdu}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {q.options.map((opt, oIdx) => (
                          <button
                            key={oIdx}
                            type="button"
                            onClick={() => !submitted && setReadingAnswers(prev => ({ ...prev, [q.id]: oIdx }))}
                            className={`p-2.5 rounded-xl text-xs font-semibold text-left transition border ${
                              selected === oIdx
                                ? 'bg-blue-600 text-white border-blue-700'
                                : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-blue-400'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>

                      {!submitted ? (
                        <button
                          type="button"
                          disabled={selected === undefined}
                          onClick={() => setReadingSubmitted(prev => ({ ...prev, [q.id]: true }))}
                          className="px-4 py-1.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-40 transition"
                        >
                          Check Answer
                        </button>
                      ) : (
                        <div className={`p-3 rounded-xl text-xs space-y-1 ${
                          isCorrect ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/70 dark:text-emerald-200' : 'bg-rose-100 text-rose-900 dark:bg-rose-950/70 dark:text-rose-200'
                        }`}>
                          <div className="font-bold">{isCorrect ? '✅ Correct!' : '❌ Incorrect.'}</div>
                          <p>{q.explanationEn}</p>
                          <p className="font-urdu text-xs pt-0.5" dir="rtl">{q.explanationUr}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* WRITING PRACTICE TAB */}
      {activeTab === 'writing' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <LevelBadge level={activeWriting.level} size="md" />
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  {activeWriting.title}
                </h2>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 font-bold uppercase text-slate-600 dark:text-slate-300">
                {activeWriting.format}
              </span>
            </div>

            {/* Prompt */}
            <div className="p-4 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 space-y-1.5 text-xs">
              <div className="font-bold text-rose-900 dark:text-rose-200">
                Writing Task Prompt:
              </div>
              <p className="text-rose-800 dark:text-rose-300 font-medium">
                {activeWriting.promptEn}
              </p>
              <p className="font-urdu text-emerald-900 dark:text-emerald-300 text-sm leading-loose pt-1" dir="rtl">
                {activeWriting.promptUr}
              </p>
            </div>

            {/* 3 Required Content Points Checklist */}
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Required Content Points (All must be included in your text):
              </div>
              <div className="space-y-1.5">
                {activeWriting.requiredPoints.map((pt, pIdx) => (
                  <label key={pIdx} className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={!!completedChecklist[pIdx]}
                      onChange={() => setCompletedChecklist(prev => ({ ...prev, [pIdx]: !prev[pIdx] }))}
                      className="rounded text-rose-600 focus:ring-rose-500 w-4 h-4"
                    />
                    <span>{pt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Writing Textarea */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-500 uppercase tracking-wider">Your German Text:</span>
                <span className={`font-mono font-bold ${
                  wordCount >= activeWriting.wordCountTarget.min && wordCount <= activeWriting.wordCountTarget.max
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-amber-600 dark:text-amber-400'
                }`}>
                  {wordCount} words (Target: {activeWriting.wordCountTarget.min}-{activeWriting.wordCountTarget.max})
                </span>
              </div>

              <textarea
                value={userText}
                onChange={e => setUserText(e.target.value)}
                placeholder="Write your email here in German..."
                rows={6}
                className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 font-sans"
              />
            </div>

            {/* Useful Phrase Helpers */}
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Helpful Expressions & Sign-off Phrases:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeWriting.usefulPhrases.map((ph, phIdx) => (
                  <div key={phIdx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">{ph.german}</div>
                      <div className="text-[11px] text-slate-400">{ph.meaningEn}</div>
                    </div>
                    <AudioPlayerButton text={ph.german} iconSize={12} />
                  </div>
                ))}
              </div>
            </div>

            {/* Model Answer Toggle */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <button
                type="button"
                onClick={() => setShowModelAnswer(prev => !prev)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition"
              >
                {showModelAnswer ? 'Hide Official Model Answer' : 'View Official Model Answer'}
              </button>

              {showModelAnswer && (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 space-y-2 text-xs animate-in fade-in duration-200">
                  <div className="font-bold text-emerald-900 dark:text-emerald-200 flex items-center justify-between">
                    <span>Model Answer (Full Score):</span>
                    <AudioPlayerButton text={activeWriting.modelAnswer} label="Listen to Model" iconSize={13} />
                  </div>
                  <div className="whitespace-pre-line font-medium text-slate-800 dark:text-slate-200 bg-white/70 dark:bg-slate-900/70 p-3 rounded-xl border border-slate-200/50">
                    {activeWriting.modelAnswer}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* SPEAKING PRACTICE TAB */}
      {activeTab === 'speaking' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <LevelBadge level={activeSpeaking.level} size="md" />
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  {activeSpeaking.title}
                </h2>
              </div>
              
              {/* Countdown Timer */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-purple-800 dark:text-purple-300 text-xs font-mono font-bold">
                  <Clock size={14} />
                  <span>{timerSecondsLeft}s Left</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsTimerRunning(prev => !prev)}
                  className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition"
                >
                  {isTimerRunning ? 'Pause Timer' : 'Start 60s Timer'}
                </button>
              </div>
            </div>

            {/* Situation Scenario */}
            <div className="p-4 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/60 space-y-1.5 text-xs">
              <div className="font-bold text-purple-900 dark:text-purple-200">
                Exam Situation & Scenario:
              </div>
              <p className="text-purple-800 dark:text-purple-300 font-medium">
                {activeSpeaking.situationEn}
              </p>
              <p className="font-urdu text-emerald-900 dark:text-emerald-300 text-sm leading-loose pt-1" dir="rtl">
                {activeSpeaking.situationUr}
              </p>
            </div>

            {/* Instructions */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
              <div className="font-bold text-slate-900 dark:text-white">Roleplay Prompt:</div>
              <p className="text-slate-600 dark:text-slate-400">{activeSpeaking.roleplayPrompt}</p>
            </div>

            {/* Model Audio Speech Button */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Listen to Native Model Answer:
                </span>
                <AudioPlayerButton text={activeSpeaking.modelAudioText} label="Play Model Audio" iconSize={16} />
              </div>
              <div className="text-xs font-medium text-slate-800 dark:text-slate-200 italic p-3 rounded-xl bg-slate-50 dark:bg-slate-900">
                &ldquo;{activeSpeaking.modelAudioText}&rdquo;
              </div>
            </div>

            {/* Key Phrases for Speaking */}
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Key Phrases to Use:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeSpeaking.keyPhrases.map((kp, kpIdx) => (
                  <div key={kpIdx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">{kp.german}</div>
                      <div className="text-slate-400 text-[11px]">{kp.meaningEn}</div>
                    </div>
                    <AudioPlayerButton text={kp.german} iconSize={12} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* LISTENING PRACTICE TAB */}
      {activeTab === 'listening' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 text-center py-10">
            <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-2">
              <Volume2 size={32} />
            </div>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              German Audio Listening Comprehension (Hörverstehen)
            </h2>

            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
              Every lesson, vocabulary entry, and dialogue in Deutsch Master Academy is equipped with real-time German audio playback using the browser&apos;s Web Speech API.
            </p>

            <div className="max-w-md mx-auto p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-left space-y-3">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Sample Goethe Audio Simulation:
              </div>
              <div className="text-xs font-medium text-slate-800 dark:text-slate-200 italic">
                &ldquo;Achtung an Gleis 4: Der ICE nach Frankfurt fährt in wenigen Minuten ein. Bitte treten Sie von der Bahnsteigkante zurück.&rdquo;
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-slate-400">Train station announcement</span>
                <AudioPlayerButton text="Achtung an Gleis 4: Der ICE nach Frankfurt fährt in wenigen Minuten ein. Bitte treten Sie von der Bahnsteigkante zurück." label="Play Announcement" iconSize={14} />
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
