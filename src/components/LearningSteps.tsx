import React from 'react';
import { LogIn, Layers, BarChart3, RefreshCw, Trophy, ArrowRight, Check } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from './Reveal';

const STEPS = [
  {
    num: 1,
    icon: LogIn,
    iconGradient: 'from-maroon-600 to-maroon-800',
    titleColor: 'text-maroon-700',
    numColor: 'text-maroon-700',
    cardBg: 'bg-[radial-gradient(130%_110%_at_0%_0%,var(--color-maroon-50)_0%,#ffffff_50%)]',
    glow: 'bg-maroon-400/25',
    title: 'Child Logs Into App',
    description: 'Quick login with mobile number to open their personalised learning workspace.',
    bullet1: 'Instant mobile sign-in',
    bullet2: 'Class & Board profile set',
  },
  {
    num: 2,
    icon: Layers,
    iconGradient: 'from-orange-500 to-orange-700',
    titleColor: 'text-orange-600',
    numColor: 'text-orange-600',
    cardBg: 'bg-[radial-gradient(130%_110%_at_0%_0%,var(--color-orange-50)_0%,#ffffff_50%)]',
    glow: 'bg-orange-400/25',
    title: 'Select Subject, Topic & Sub-Topic',
    description: 'Select the exact subject, chapter topic, and sub-topic they want to practice.',
    bullet1: 'Madhubun syllabus mapping',
    bullet2: 'Chapter & sub-topic granularity',
  },
  {
    num: 3,
    icon: BarChart3,
    iconGradient: 'from-amber-500 to-orange-600',
    titleColor: 'text-amber-700',
    numColor: 'text-amber-700',
    cardBg: 'bg-[radial-gradient(130%_110%_at_0%_0%,var(--color-amber-50)_0%,#ffffff_50%)]',
    glow: 'bg-amber-400/25',
    title: 'Take Test & See Problem Areas',
    description: 'Test gives instant evaluation and pinpoints exact concept weaknesses.',
    bullet1: 'Instant score breakdown',
    bullet2: 'Pinpointed learning gaps',
  },
  {
    num: 4,
    icon: RefreshCw,
    iconGradient: 'from-maroon-700 via-maroon-600 to-orange-600',
    titleColor: 'text-maroon-700',
    numColor: 'text-maroon-700',
    cardBg: 'bg-[radial-gradient(130%_110%_at_0%_0%,var(--color-orange-50)_0%,var(--color-maroon-50)_35%,#ffffff_65%)]',
    glow: 'bg-orange-400/25',
    title: 'Adaptive Worksheet & Retest',
    description: 'System generates targeted practice worksheets to resolve gaps and retest.',
    bullet1: 'Level-adjusted questions',
    bullet2: 'Targeted gap elimination',
  },
];

export const LearningSteps: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <Reveal className="text-center max-w-3xl mx-auto space-y-4 -mt-8 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maroon-50 border border-maroon-200/80 text-maroon-800 text-xs font-bold tracking-wider uppercase">
            <RefreshCw className="w-3.5 h-3.5 text-maroon-700" />
            <span>Continuous Learning Loop</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight text-balance">
            How The Adaptive Learning System Works
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            A simple 4-step loop that turns weak topics into strengths through intelligent diagnostic tests and targeted practice worksheets.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">

          {/* Connecting flow-line behind the row, tying the four steps into one visible path */}
          <div className="hidden lg:block absolute inset-x-10 top-14 h-px bg-gradient-to-r from-maroon-200 via-orange-200 to-maroon-200 -z-10" />

          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <RevealItem key={step.num} className="relative group">
                <div className={`relative h-full ${step.cardBg} rounded-3xl p-6 border border-slate-200/70 shadow-sm hover:shadow-2xl hover:shadow-maroon-900/10 hover:-translate-y-1.5 hover:border-transparent transition-all duration-300 flex flex-col justify-between space-y-5 overflow-hidden`}>

                  {/* Faint paper-grain texture for tactile depth */}
                  <div className="absolute inset-0 bg-grain opacity-40 mix-blend-multiply pointer-events-none" />

                  {/* Soft color glow that blooms on hover */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${step.glow} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  <div className="relative flex items-start justify-between">
                    <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.iconGradient} shadow-lg shadow-maroon-900/20 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                      <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-white shadow-md flex items-center justify-center text-[11px] font-extrabold ${step.numColor}`}>
                        {step.num}
                      </span>
                    </div>
                    <span className="text-[10px] font-extrabold text-slate-400 tracking-wider uppercase pt-2">
                      Step {step.num} / 4
                    </span>
                  </div>

                  <div className="relative space-y-2">
                    <h3 className={`font-display text-lg font-semibold leading-snug ${step.titleColor}`}>
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="relative pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-700 font-medium">
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

                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3.5 top-14 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-gradient-to-br from-maroon-600 to-orange-600 text-white items-center justify-center shadow-md">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.15} className="mt-16 bg-gradient-to-r from-maroon-700 via-maroon-600 to-orange-600 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 text-center lg:text-left">

            <div className="space-y-3 max-w-3xl mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-extrabold uppercase tracking-wider">
                <Trophy className="w-3.5 h-3.5 text-amber-300" />
                <span>The Continuous Improvement Cycle</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-balance">
                Learn → Test → Identify Gaps → Adaptive Retest → Score Higher!
              </h3>

              <p className="text-maroon-50/90 text-sm sm:text-base font-normal leading-relaxed">
                Each round sharpens weaker areas, helping students turn difficult topics into familiar ground long before exam day.
              </p>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
};
