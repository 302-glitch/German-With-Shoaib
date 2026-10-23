import React from 'react';
import { 
  Award, 
  ExternalLink, 
  ShieldCheck, 
  BookOpen, 
  FileText, 
  HelpCircle, 
  Sparkles,
  MapPin,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { goetheResourcesData } from '../data/skillsPracticeData';
import { LevelBadge } from '../components/LevelBadge';

export const GoetheResourcesView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-200">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-red-800 dark:text-red-300 text-xs font-bold mb-2">
          <Award size={14} />
          <span>Official Goethe-Institut Resources • گوئٹے سرٹیفیکیٹ گائیڈ</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Goethe-Institut Exam Prep & Official Links
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          Direct verified links to free official model test papers, exam blueprints, and Goethe examination centers in Pakistan (Karachi & Islamabad).
        </p>
      </div>

      {/* Official Transparency & Copyright Disclaimer Card */}
      <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-xs space-y-2">
        <div className="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2">
          <ShieldCheck size={16} className="text-amber-600 flex-shrink-0" />
          <span>Transparency & Official Material Disclaimer</span>
        </div>
        <p className="text-amber-900/90 dark:text-amber-200/90 leading-relaxed">
          Deutsch Master Academy provides original pedagogical curriculum, exercises, and simulators designed to teach CEFR learning goals. Official Goethe-Zertifikat exam papers and free sample audio are hosted directly on the Goethe-Institut&apos;s verified official web servers and linked below for your convenience. We respect intellectual property and do not host or reproduce proprietary copyrighted textbooks (such as Menschen, Netzwerk, or Schritte).
        </p>
      </div>

      {/* Goethe Exam Centers in Pakistan */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base">
          <MapPin size={18} className="text-red-600" />
          <span>Goethe Examination Centers for Pakistani Students</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
            <div className="font-bold text-slate-900 dark:text-white text-sm">
              Goethe-Institut Pakistan (Karachi)
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              The official Goethe-Institut branch in Pakistan, conducting official A1, A2, B1, and B2 examinations recognized worldwide for visas and university admissions.
            </p>
            <div className="pt-1">
              <a
                href="https://www.goethe.de/ins/pk/en/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:underline"
              >
                <span>Visit Goethe-Institut Karachi Portal</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
            <div className="font-bold text-slate-900 dark:text-white text-sm">
              Annemarie-Schimmel-Haus (Lahore)
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              The German Cultural Center in Lahore affiliated with the Goethe-Institut, offering exam preparation and scheduled Goethe-Zertifikat test sessions.
            </p>
            <div className="pt-1">
              <a
                href="https://schimmel.com.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:underline"
              >
                <span>Visit Annemarie-Schimmel-Haus Portal</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Official Goethe Free Model Tests & Guidelines Library */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Verified Official Practice Materials & Exam Blueprints
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {goetheResourcesData.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4 hover:border-amber-400 transition"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <LevelBadge level={item.level} size="sm" />
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 uppercase">
                    {item.type}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.descriptionEn}
                </p>

                <p className="font-urdu text-emerald-800 dark:text-emerald-300 text-xs leading-loose pt-1" dir="rtl">
                  {item.descriptionUr}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400">{item.publisher}</span>
                <a
                  href={item.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-bold transition"
                >
                  <span>Open Official Site</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
