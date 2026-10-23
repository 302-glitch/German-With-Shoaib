import React, { useState, useEffect } from 'react';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Award, 
  RotateCcw, 
  ArrowRight, 
  Sparkles,
  Play
} from 'lucide-react';
import { quizzesData } from '../data/quizzesData';
import { useProgress } from '../context/ProgressContext';
import { LevelBadge } from '../components/LevelBadge';
import { CEFRLevel } from '../types';

export const QuizzesView: React.FC = () => {
  const { recordQuizScore, progress, languageMode } = useProgress();

  const quizKeys = Object.keys(quizzesData);
  const [selectedQuizKey, setSelectedQuizKey] = useState<string>(quizKeys[0]);

  // Quiz execution state
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 min

  const currentQuiz = quizzesData[selectedQuizKey];
  const questions = currentQuiz.questions;
  const activeQ = questions[currentQuestionIndex];

  // Timer
  useEffect(() => {
    let timer: any;
    if (isStarted && !isSubmitted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isStarted && !isSubmitted) {
      handleSubmit();
    }
    return () => clearInterval(timer);
  }, [isStarted, isSubmitted, timeLeft]);

  const handleStart = () => {
    setIsStarted(true);
    setIsSubmitted(false);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setTimeLeft(currentQuiz.timeLimitMinutes * 60);
  };

  const handleSelectAnswer = (qId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [qId]: answer }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    // Calculate score
    let score = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });
    recordQuizScore(selectedQuizKey, score, questions.length);
  };

  const handleResetQuiz = () => {
    setIsStarted(false);
    setIsSubmitted(false);
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  // Calculate score if submitted
  const correctCount = questions.filter(q => answers[q.id] === q.correctAnswer).length;
  const scorePct = Math.round((correctCount / questions.length) * 100);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-200">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 text-xs font-bold mb-2">
          <HelpCircle size={14} />
          <span>Interactive Quiz & Mock Exam Engine • امتحانات اور کوئزز</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Quizzes & Timed Mock Exams
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          Evaluate your real progress across A1, A2, B1, and B2. Instant results, detailed answer explanations, and saved scores.
        </p>
      </div>

      {/* Quiz Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {quizKeys.map((key) => {
          const q = quizzesData[key];
          const isSelected = selectedQuizKey === key;
          const prevScore = progress.completedQuizScores[key];

          return (
            <div
              key={key}
              onClick={() => {
                if (!isStarted || isSubmitted) {
                  setSelectedQuizKey(key);
                  handleResetQuiz();
                }
              }}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-purple-50 dark:bg-purple-950/40 border-purple-400 dark:border-purple-700 shadow-sm'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <LevelBadge level={q.level as CEFRLevel} size="sm" />
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Clock size={12} />
                  <span>{q.timeLimitMinutes} min</span>
                </span>
              </div>
              <div className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                {q.title}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                {q.description}
              </div>

              {prevScore && (
                <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Previous Score:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    {prevScore.score} / {prevScore.total} ({Math.round((prevScore.score / prevScore.total) * 100)}%)
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Main Quiz Area */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        
        {!isStarted ? (
          /* START SCREEN */
          <div className="text-center py-10 space-y-4 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mx-auto">
              <Award size={32} />
            </div>

            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              {currentQuiz.title}
            </h2>

            <p className="text-xs text-slate-600 dark:text-slate-400">
              {currentQuiz.description}
            </p>

            <div className="flex items-center justify-center gap-4 text-xs font-semibold text-slate-500 pt-2">
              <span>{questions.length} Questions</span>
              <span>•</span>
              <span>Time Limit: {currentQuiz.timeLimitMinutes} minutes</span>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleStart}
                className="px-8 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-sm transition shadow-md shadow-purple-600/20 active:scale-95 flex items-center gap-2 mx-auto"
              >
                <Play size={16} className="fill-white" />
                <span>Begin Test Now</span>
              </button>
            </div>
          </div>
        ) : !isSubmitted ? (
          /* IN-PROGRESS QUESTION VIEW */
          <div className="space-y-6">
            
            {/* Top Bar with Timer & Question Progress */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Question {currentQuestionIndex + 1} of {questions.length}
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-mono font-bold text-xs">
                <Clock size={14} />
                <span>{formatTime(timeLeft)}</span>
              </div>
            </div>

            {/* Active Question Prompt */}
            <div className="space-y-2 py-2">
              <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {activeQ.promptEn}
              </div>

              {activeQ.promptUr && (
                <div className="font-urdu text-emerald-800 dark:text-emerald-300 text-sm" dir="rtl">
                  {activeQ.promptUr}
                </div>
              )}
            </div>

            {/* Options */}
            {activeQ.options && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeQ.options.map((opt) => {
                  const isSelected = answers[activeQ.id] === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleSelectAnswer(activeQ.id, opt)}
                      className={`p-4 rounded-2xl text-xs font-bold text-left transition border ${
                        isSelected
                          ? 'bg-purple-600 text-white border-purple-700 shadow-xs'
                          : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-purple-400'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Navigation & Submit Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                disabled={currentQuestionIndex === 0}
                onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 disabled:opacity-30"
              >
                Previous
              </button>

              {currentQuestionIndex < questions.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                  className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition"
                >
                  Next Question
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold transition shadow-md"
                >
                  Submit & Finish Exam
                </button>
              )}
            </div>

          </div>
        ) : (
          /* RESULTS & DETAILED EXPLANATION SCREEN */
          <div className="space-y-8 animate-in fade-in duration-200">
            
            {/* Score Banner */}
            <div className={`p-6 sm:p-8 rounded-3xl text-center space-y-2 border ${
              scorePct >= 60
                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700 text-emerald-950 dark:text-emerald-100'
                : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-700 text-rose-950 dark:text-rose-100'
            }`}>
              <div className="text-3xl sm:text-4xl font-black">
                {scorePct}% Score ({correctCount} / {questions.length} Correct)
              </div>
              <div className="text-sm font-semibold">
                {scorePct >= 60 ? '🎉 Bestanden! You passed the exam!' : '⚠️ Nicht bestanden. Practice more and try again!'}
              </div>
            </div>

            {/* Detailed Question Review */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Detailed Answer Review & Explanations:
              </h3>

              <div className="space-y-3">
                {questions.map((q, idx) => {
                  const userAns = answers[q.id];
                  const isUserCorrect = userAns === q.correctAnswer;

                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-2xl border text-xs space-y-2 ${
                        isUserCorrect
                          ? 'bg-emerald-50/50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800'
                          : 'bg-rose-50/50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 dark:text-white">
                          Q{idx + 1}: {q.promptEn}
                        </span>
                        {isUserCorrect ? (
                          <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                        ) : (
                          <XCircle size={16} className="text-rose-600 flex-shrink-0" />
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4 text-[11px] pt-1">
                        <div>
                          Your answer: <span className="font-bold">{userAns || 'Not answered'}</span>
                        </div>
                        <div>
                          Correct answer: <span className="font-bold text-emerald-700 dark:text-emerald-300">{q.correctAnswer}</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/50 space-y-1">
                        <p>{q.explanationEn}</p>
                        {q.explanationUr && (
                          <p className="font-urdu text-emerald-800 dark:text-emerald-300 pt-0.5" dir="rtl">{q.explanationUr}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={handleResetQuiz}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition shadow-sm"
              >
                <RotateCcw size={14} />
                <span>Retry Exam</span>
              </button>
            </div>

          </div>
        )}

      </div>

    </div>
  );
};
