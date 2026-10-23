import React, { useState } from 'react';
import { 
  CalendarCheck, 
  Clock, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Save, 
  RotateCcw,
  BookOpen,
  Layers,
  Mic,
  FileEdit
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { LevelBadge } from '../components/LevelBadge';
import { CEFRLevel } from '../types';

export const StudyPlannerView: React.FC = () => {
  const { progress, updateStudyPlan } = useProgress();

  const savedPlan = progress.studyPlan || {
    targetLevel: 'B1' as CEFRLevel,
    dailyMinutes: 30,
    targetExamDate: '2026-12-31',
    studyDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  };

  const [targetLevel, setTargetLevel] = useState<CEFRLevel>(savedPlan.targetLevel);
  const [dailyMinutes, setDailyMinutes] = useState<number>(savedPlan.dailyMinutes);
  const [targetExamDate, setTargetExamDate] = useState<string>(savedPlan.targetExamDate);
  const [selectedDays, setSelectedDays] = useState<string[]>(savedPlan.studyDays);
  const [savedNotification, setSavedNotification] = useState(false);

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const toggleDay = (day: string) => {
    setSelectedDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const handleSave = () => {
    updateStudyPlan({
      targetLevel,
      dailyMinutes,
      targetExamDate,
      studyDays: selectedDays
    });
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 2500);
  };

  // Schedule recommendation based on daily study time
  const weeklySchedule = [
    { day: 'Monday', focus: 'Grammar Foundation & Sentence Order', task: 'Complete 1 new grammar topic & practice Verb Position 2' },
    { day: 'Tuesday', focus: 'Vocabulary & Flashcards', task: 'Review 20 flashcards using SRS flip mode and audio pronunciation' },
    { day: 'Wednesday', focus: 'Reading Comprehension', task: 'Read 1 level-appropriate passage & complete comprehension questions' },
    { day: 'Thursday', focus: 'Listening & Pronunciation', task: 'Listen to German dialogues and practice repeating sentences out loud' },
    { day: 'Friday', focus: 'Guided Writing & Forms', task: 'Write an email draft using the guided writing templates' },
    { day: 'Saturday', focus: 'Speaking Roleplay & Timer', task: 'Practice 60-second self-introduction and bakery/doctor roleplay' },
    { day: 'Sunday', focus: 'Weekly Revision & Chapter Quiz', task: 'Review marked difficult cards and take 1 timed mock quiz' }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-200">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 text-xs font-bold mb-2">
          <CalendarCheck size={14} />
          <span>Personalized Study Plan • ذاتی تدریسی منصوبہ</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Smart German Study Planner
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          Customize your study routine, track daily goals, and get a realistic milestone roadmap toward your Goethe-Zertifikat exam.
        </p>
      </div>

      {/* Plan Configuration Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <h2 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
          Configure Your Learning Parameters
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Target Level */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Target CEFR Level
            </label>
            <div className="grid grid-cols-4 gap-1.5 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl">
              {(['A1', 'A2', 'B1', 'B2'] as CEFRLevel[]).map(lvl => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setTargetLevel(lvl)}
                  className={`py-2 text-xs font-bold rounded-xl transition ${
                    targetLevel === lvl
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-extrabold text-blue-600'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Daily Study Time */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Daily Study Commitment
            </label>
            <select
              value={dailyMinutes}
              onChange={e => setDailyMinutes(Number(e.target.value))}
              className="w-full px-3.5 py-2.5 rounded-2xl text-xs font-bold bg-slate-100 dark:bg-slate-800 border-none text-slate-900 dark:text-white focus:outline-none"
            >
              <option value={15}>15 Minutes / Day (Casual Pace)</option>
              <option value={30}>30 Minutes / Day (Recommended)</option>
              <option value={45}>45 Minutes / Day (Fast Track)</option>
              <option value={60}>60 Minutes / Day (Intensive Preparation)</option>
              <option value={90}>90 Minutes / Day (Immersion / Visa Rush)</option>
            </select>
          </div>

          {/* Target Exam Date */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Target Exam Date
            </label>
            <input
              type="date"
              value={targetExamDate}
              onChange={e => setTargetExamDate(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-2xl text-xs font-bold bg-slate-100 dark:bg-slate-800 border-none text-slate-900 dark:text-white focus:outline-none"
            />
          </div>

        </div>

        {/* Study Days Selection */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Active Study Days of the Week:
          </label>
          <div className="flex flex-wrap gap-2">
            {daysOfWeek.map(day => {
              const isSelected = selectedDays.includes(day);
              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => toggleDay(day)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Save button */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
          {savedNotification ? (
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 size={16} />
              <span>Study Plan Saved to Local Storage!</span>
            </span>
          ) : <div />}

          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-sm"
          >
            <Save size={15} />
            <span>Save & Apply Plan</span>
          </button>
        </div>

      </div>

      {/* Generated Timetable Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h2 className="text-base font-bold text-slate-900 dark:text-white">
          Your Customized Weekly German Study Schedule ({dailyMinutes} min/day)
        </h2>

        <div className="space-y-2.5">
          {weeklySchedule.map((item, idx) => {
            const isDayActive = selectedDays.includes(item.day);
            return (
              <div
                key={idx}
                className={`p-3.5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  isDayActive
                    ? 'bg-slate-50 dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-700'
                    : 'bg-slate-100/40 dark:bg-slate-800/20 border-transparent opacity-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-24 text-xs font-bold ${isDayActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`}>
                    {item.day}
                  </span>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      {item.focus}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      {item.task}
                    </div>
                  </div>
                </div>

                <span className="text-[11px] text-slate-400 font-mono">
                  {isDayActive ? `${dailyMinutes} min` : 'Rest Day'}
                </span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
