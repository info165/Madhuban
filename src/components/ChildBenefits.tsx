import React from 'react';
import { Compass, FileText, Target, Cpu, Sparkles } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from './Reveal';

const BENEFITS = [
  {
    id: 'personalized',
    num: '01',
    icon: Compass,
    pill: 'TAILORED FOR EVERY STUDENT',
    pillClass: 'bg-maroon-50 text-maroon-800 border-maroon-200/70',
    title: 'Personalised Learning Journey',
    description: 'Every child learns at their own pace. The app crafts a custom study path matching their specific textbook chapter and grade level.',
    iconGradient: 'from-maroon-600 to-maroon-800',
    glow: 'bg-maroon-400/25',
    cardBg: 'bg-[radial-gradient(140%_120%_at_100%_-10%,var(--color-maroon-50)_0%,#ffffff_55%)]',
  },
  {
    id: 'topic-wise',
    num: '02',
    icon: FileText,
    pill: 'CONCEPT MASTERY',
    pillClass: 'bg-orange-50 text-orange-800 border-orange-200/70',
    title: 'Topic-Wise Practice Tests',
    description: 'Comprehensive practice tests for every subject and sub-topic to solidify concepts, improve speed, and boost exam confidence.',
    iconGradient: 'from-orange-500 to-orange-700',
    glow: 'bg-orange-400/25',
    cardBg: 'bg-[radial-gradient(140%_120%_at_100%_-10%,var(--color-orange-50)_0%,#ffffff_55%)]',
  },
  {
    id: 'diagnostic',
    num: '03',
    icon: Target,
    pill: 'DIAGNOSTIC FEEDBACK',
    pillClass: 'bg-amber-50 text-amber-800 border-amber-200/70',
    title: 'Identify & Fix Learning Gaps',
    description: 'Instant analysis reveals exact problem areas and weak concepts so students can focus where it matters most and score better.',
    iconGradient: 'from-amber-500 to-orange-600',
    glow: 'bg-amber-400/25',
    cardBg: 'bg-[radial-gradient(140%_120%_at_100%_-10%,var(--color-amber-50)_0%,#ffffff_55%)]',
  },
  {
    id: 'adaptive',
    num: '04',
    icon: Cpu,
    pill: 'SMART ENGINE',
    pillClass: 'bg-maroon-50 text-maroon-800 border-maroon-200/70',
    title: 'Adaptive Question Generation',
    description: 'The intelligent system continuously generates customised questions tailored to the child’s skill level to ensure continuous progress.',
    iconGradient: 'from-maroon-700 via-maroon-600 to-orange-600',
    glow: 'bg-orange-400/25',
    cardBg: 'bg-[radial-gradient(140%_120%_at_100%_-10%,var(--color-orange-50)_0%,var(--color-maroon-50)_35%,#ffffff_65%)]',
  },
];

export const ChildBenefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 sm:py-24 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <Reveal className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-800 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Empowering Every Student</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight text-balance">
            Transform Your Learning
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Designed to turn textbook study into an engaging, gap-free learning journey that builds real understanding and higher test scores.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((item) => {
            const Icon = item.icon;
            return (
              <RevealItem key={item.id}>
                <div className={`group relative h-full ${item.cardBg} rounded-3xl p-7 border border-slate-200/70 shadow-sm hover:shadow-2xl hover:shadow-maroon-900/10 hover:-translate-y-1.5 hover:border-transparent transition-all duration-300 flex flex-col overflow-hidden`}>

                  {/* Faint paper-grain texture for tactile depth */}
                  <div className="absolute inset-0 bg-grain opacity-40 mix-blend-multiply pointer-events-none" />

                  {/* Decorative giant numeral */}
                  <span className="font-display absolute -top-3 right-4 text-[5.5rem] font-bold leading-none text-slate-50 group-hover:text-maroon-50 transition-colors duration-300 select-none pointer-events-none">
                    {item.num}
                  </span>

                  {/* Soft color glow that blooms on hover */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${item.glow} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  <div className="relative space-y-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.iconGradient} shadow-lg shadow-maroon-900/20 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase border ${item.pillClass}`}>
                      {item.pill}
                    </div>

                    <h3 className="font-display text-xl font-semibold text-slate-950 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

      </div>
    </section>
  );
};
