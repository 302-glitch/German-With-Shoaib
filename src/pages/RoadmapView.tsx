import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Award, 
  ArrowRight, 
  BookOpen, 
  MessageSquare, 
  Layers, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { LevelBadge } from '../components/LevelBadge';
import { CEFRLevel } from '../types';

interface RoadmapViewProps {
  onNavigateCourse: (courseTab: string) => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({ onNavigateCourse }) => {
  const roadmapStages = [
    {
      level: 'A1' as CEFRLevel,
      title: 'A1: Absolute Beginner to Basic Communicator',
      titleUrdu: 'ابتدائی سطح: بنیادی گفتگو اور تعارف',
      timeline: '6 to 8 Weeks (60-80 Study Hours)',
      examName: 'Goethe-Zertifikat A1: Start Deutsch 1',
      examPassScore: '60% (36 / 60 Points)',
      competenciesEn: [
        'Understand and speak familiar everyday phrases and simple statements.',
        'Introduce yourself and others (Pakistan origin, living city, languages).',
        'Ask and answer personal questions (where you live, people you know, things you have).',
        'Fill out standard registration forms and write short 30-word messages/emails.'
      ],
      grammarMilestones: [
        'Alphabet & German pronunciation rules',
        'Gender & Articles: der, die, das, ein, eine, kein',
        'Present tense verb conjugation & irregulars (sein, haben)',
        'Verb Position 2 rule in statements & questions',
        'Nominative vs. Accusative direct object'
      ],
      color: 'emerald'
    },
    {
      level: 'A2' as CEFRLevel,
      title: 'A2: Elementary German & Everyday Independence',
      titleUrdu: 'دوسری سطح: روزمرہ معاملات اور ماضی کے واقعات',
      timeline: '8 to 10 Weeks (100-120 Study Hours)',
      examName: 'Goethe-Zertifikat A2',
      examPassScore: '60% (60 / 100 Points)',
      competenciesEn: [
        'Understand sentences and frequently used expressions related to immediate areas of priority (e.g. personal info, shopping, local geography, employment).',
        'Communicate in simple and routine tasks requiring direct exchange of information.',
        'Describe in simple terms aspects of your background, immediate environment, and matters in areas of immediate need.',
        'Narrate past events using the Perfekt tense.'
      ],
      grammarMilestones: [
        'Perfekt past tense with haben and sein',
        'Two-way prepositions (Wechselpräpositionen): Wohin vs. Wo',
        'The Dative case for indirect objects and prepositions',
        'Subordinate clauses with verb-kickers (weil, dass, wenn)',
        'Reflexive verbs & comparative/superlative adjectives'
      ],
      color: 'blue'
    },
    {
      level: 'B1' as CEFRLevel,
      title: 'B1: Independent Speaker & Goethe Gateway',
      titleUrdu: 'تیسری سطح: آزادانہ گفتگو اور روزگار/ویزے کی بنیادی اہلیت',
      timeline: '12 to 14 Weeks (150-180 Study Hours)',
      examName: 'Goethe-Zertifikat B1 (Modular)',
      examPassScore: '60% per module (Reading, Listening, Writing, Speaking)',
      competenciesEn: [
        'Understand main points of clear standard input on familiar matters encountered in work, school, and leisure.',
        'Deal with most situations likely to arise whilst travelling in German-speaking countries.',
        'Produce simple connected text on topics that are familiar or of personal interest.',
        'Describe experiences and events, dreams, hopes, and ambitions, and briefly give reasons and explanations for opinions and plans.'
      ],
      grammarMilestones: [
        'Relative clauses with cases (der, die, das)',
        'Polite subjunctive: Konjunktiv II (hätte, wäre, würde, könnte)',
        'Infinitive clauses with "um... zu + Infinitiv" (expressing purpose)',
        'Connectors: obwohl, trotzdem, damit, während, nachdem',
        'Introduction to the Passive Voice'
      ],
      color: 'amber'
    },
    {
      level: 'B2' as CEFRLevel,
      title: 'B2: Advanced User & University/Work Fluency',
      titleUrdu: 'چوتھی سطح: اعلیٰ دفتری اور جامعہ کی سطح پر جرمن روانی',
      timeline: '14 to 16 Weeks (180-220 Study Hours)',
      examName: 'Goethe-Zertifikat B2 (Modular)',
      examPassScore: '60% per module',
      competenciesEn: [
        'Understand the main ideas of complex text on both concrete and abstract topics, including technical discussions in your field of specialization.',
        'Interact with a degree of fluency and spontaneity that makes regular interaction with native speakers quite possible without strain for either party.',
        'Produce clear, detailed text on a wide range of subjects and explain a viewpoint on a topical issue giving advantages and disadvantages of various options.'
      ],
      grammarMilestones: [
        'Full Passive Voice (Vorgangspassiv & Zustandspassiv)',
        'Passive alternatives (lässt sich, ist zu + Infinitiv, -bar)',
        'Nominal style (Nominalstil) with Genitive prepositions',
        'Complex sentence connectors and nuanced argumentation',
        'Formal presentations, debates, and academic essay writing'
      ],
      color: 'purple'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-bold mb-2">
          <Sparkles size={14} />
          <span>CEFR Official Framework • یورپی مشترکہ معیارِ زبان</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Learning Roadmap: From Zero to B2
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl">
          Follow this systematic, step-by-step pathway. Each level builds directly on previous foundations, ensuring you never feel lost.
        </p>
      </div>

      {/* Roadmap Timeline Cards */}
      <div className="space-y-6">
        {roadmapStages.map((stage, idx) => (
          <div
            key={stage.level}
            className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm relative overflow-hidden"
          >
            {/* Top Bar Accent */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 ${
              stage.color === 'emerald' ? 'bg-emerald-500' :
              stage.color === 'blue' ? 'bg-blue-500' :
              stage.color === 'amber' ? 'bg-amber-500' :
              'bg-purple-500'
            }`} />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <LevelBadge level={stage.level} size="lg" />
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {stage.title}
                  </h2>
                  <div className="font-urdu text-emerald-700 dark:text-emerald-400 text-sm mt-0.5" dir="rtl">
                    {stage.titleUrdu}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                  <Clock size={13} />
                  <span>{stage.timeline}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-bold">
                  <Award size={13} />
                  <span>{stage.examName}</span>
                </span>
              </div>
            </div>

            {/* Content Columns: Competencies & Grammar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
                  <MessageSquare size={14} className="text-amber-500" />
                  <span>Practical Communication Skills</span>
                </h3>
                <ul className="space-y-2">
                  {stage.competenciesEn.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
                  <Layers size={14} className="text-blue-500" />
                  <span>Key Grammar Foundations</span>
                </h3>
                <ul className="space-y-2">
                  {stage.grammarMilestones.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Action Button */}
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => onNavigateCourse(`course-${stage.level}`)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white transition shadow-sm ${
                  stage.color === 'emerald' ? 'bg-emerald-600 hover:bg-emerald-700' :
                  stage.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                  stage.color === 'amber' ? 'bg-amber-600 hover:bg-amber-700' :
                  'bg-purple-600 hover:bg-purple-700'
                }`}
              >
                <span>Open {stage.level} Course</span>
                <ChevronRight size={14} />
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
