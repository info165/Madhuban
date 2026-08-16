import React from 'react';
import { LogIn, Layers, BarChart3, RefreshCw, Trophy, ArrowRight, Check } from 'lucide-react';

interface LearningStepsProps {
  onDownloadClick?: () => void;
}

export const LearningSteps: React.FC<LearningStepsProps> = ({ onDownloadClick }) => {
  const steps = [
    {
      num: 'STEP 1',
      icon: LogIn,
      iconBg: 'bg-orange-100 text-orange-600',
      title: 'Child Logs Into App',
      highlightTitle: false,
      description: 'Quick login with mobile number to open their personalized learning workspace.',
      bullet1: 'Instant mobile sign-in',
      bullet2: 'Class & Board profile set',
    },
    {
      num: 'STEP 2',
      icon: Layers,
      iconBg: 'bg-rose-100 text-rose-600',
      title: 'Select Subject, Topic & Sub-Topic',
      highlightTitle: true,
      description: 'Select the exact subject, chapter topic, and sub-topic they want to practice.',
      bullet1: 'Madhubun syllabus mapping',
      bullet2: 'Chapter & Sub-topic granularity',
    },
    {
      num: 'STEP 3',
      icon: BarChart3,
      iconBg: 'bg-amber-100 text-amber-600',
      title: 'Take Test & See Problem Areas',
      highlightTitle: false,
      description: 'Test gives instant evaluation and pinpoints exact concept weaknesses.',
      bullet1: 'Instant score breakdown',
      bullet2: 'Pinpointed learning gaps',
    },
    {
      num: 'STEP 4',
      icon: RefreshCw,
      iconBg: 'bg-emerald-100 text-emerald-600',
      title: 'Adaptive Worksheet & Retest',
      highlightTitle: false,
      description: 'System generates targeted practice worksheets to resolve gaps and retest.',
      bullet1: 'Level-adjusted questions',
      bullet2: 'Targeted gap elimination',
    }
  ];

  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header matching Image 3 */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 border border-orange-200/80 text-orange-900 text-xs font-bold tracking-wider uppercase">
            <RefreshCw className="w-3.5 h-3.5 text-orange-600" />
            <span>CONTINUOUS LEARNING LOOP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            How The Adaptive Learning System Works
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            A simple 4-step loop that turns weak topics into strengths through intelligent diagnostic tests and targeted practice worksheets.
          </p>
        </div>

        {/* 4 Step Cards Grid with Connecting Arrows matching Image 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative group">
                <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full space-y-5">
                  
                  {/* Top Bar: Pill + Circle Icon */}
                  <div className="flex items-center justify-between">
                    <span className="bg-slate-100 text-slate-700 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                      {step.num}
                    </span>
                    <div className={`w-10 h-10 rounded-2xl ${step.iconBg} flex items-center justify-center shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className={`text-lg font-extrabold leading-snug ${step.highlightTitle ? 'text-orange-600' : 'text-slate-950'}`}>
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Checkmark Bullets */}
                  <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-700 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{step.bullet1}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{step.bullet2}</span>
                    </div>
                  </div>

                </div>

                {/* Connecting Circle Arrow for desktop view between steps */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-orange-500 text-white items-center justify-center shadow-md">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Continuous Improvement Banner matching Image 4 */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 via-orange-600 to-rose-600 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            
            <div className="space-y-3 max-w-3xl">
              {/* Glass Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-extrabold uppercase tracking-wider">
                <Trophy className="w-3.5 h-3.5 text-amber-300" />
                <span>THE CONTINUOUS IMPROVEMENT CYCLE</span>
              </div>

              {/* Banner Headline */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                Learn → Test → Identify Gaps → Adaptive Retest → Score Higher!
              </h3>

              {/* Subtitle */}
              <p className="text-orange-100 text-sm sm:text-base font-normal leading-relaxed">
                This cycle repeats until every sub-topic is 100% mastered, ensuring students walk into school exams with total confidence.
              </p>
            </div>

            {/* Banner CTA Button */}
            <a
              href="https://classmap-student.web.app/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-orange-50 text-[#EA580C] font-extrabold text-sm sm:text-base px-7 py-4 rounded-full shadow-lg transition-all cursor-pointer shrink-0 flex items-center gap-2 group inline-flex"
            >
              <span>Start Learning Journey Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};
