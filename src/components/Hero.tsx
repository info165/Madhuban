import React from 'react';
import { ArrowRight, Play, Target, TrendingUp, BookOpenCheck, Trophy } from 'lucide-react';
import { Reveal } from './Reveal';
import { PhoneShowcase } from './PhoneShowcase';
import studentBoy from '../assets/images/student-boy.webp';

interface HeroProps {
  onDownloadClick: () => void;
  onExploreSteps: () => void;
}

const FEATURES = [
  {
    icon: Target,
    tile: 'from-maroon-50 to-maroon-100 text-maroon-600 ring-maroon-200/60 shadow-maroon-600/10',
    hover: 'group-hover:from-maroon-50/80 group-hover:to-transparent',
    title: 'Personalized\nGap Analysis',
    description: 'Know exactly what you need to improve.',
  },
  {
    icon: TrendingUp,
    tile: 'from-emerald-50 to-emerald-100 text-emerald-600 ring-emerald-200/60 shadow-emerald-600/10',
    hover: 'group-hover:from-emerald-50/80 group-hover:to-transparent',
    title: 'Smart\nRecommendations',
    description: 'Get topics curated just for you.',
  },
  {
    icon: BookOpenCheck,
    tile: 'from-indigo-50 to-indigo-100 text-indigo-500 ring-indigo-200/60 shadow-indigo-500/10',
    hover: 'group-hover:from-indigo-50/80 group-hover:to-transparent',
    title: 'Track Your\nProgress',
    description: 'See your growth every step of the way.',
  },
  {
    icon: Trophy,
    tile: 'from-amber-50 to-amber-100 text-amber-500 ring-amber-200/60 shadow-amber-500/10',
    hover: 'group-hover:from-amber-50/80 group-hover:to-transparent',
    title: 'Achieve\nBetter',
    description: 'Learn smarter and score higher.',
  },
];
/* --------------------------- Floating stat cards --------------------------- */
const GapCard: React.FC = () => (
  <div className="flex items-start gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-[0_22px_45px_-14px_rgba(15,10,20,0.28)] ring-1 ring-slate-900/[0.06] w-[11.5rem]">
    <span className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 ring-1 ring-orange-100">
      <Target className="w-5 h-5" />
    </span>
    <div className="leading-snug">
      <span className="block text-[12px] font-extrabold text-slate-900">Gap detected</span>
      <span className="block text-[11px] text-slate-500">Fractions &amp; Decimals</span>
    </div>
  </div>
);

const ProgressCard: React.FC = () => (
  <div className="flex items-start gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-[0_22px_45px_-14px_rgba(15,10,20,0.28)] ring-1 ring-slate-900/[0.06] w-[11.5rem]">
    <span className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 ring-1 ring-emerald-100">
      <TrendingUp className="w-5 h-5" />
    </span>
    <div className="leading-snug">
      <span className="block text-[12px] font-extrabold text-slate-900">+18% this week</span>
      <span className="block text-[11px] text-slate-500">Keep going!</span>
    </div>
  </div>
);

export const Hero: React.FC<HeroProps> = ({ onDownloadClick, onExploreSteps }) => {
  return (
    <section className="relative isolate overflow-hidden bg-[#FDFBFA] pt-28 sm:pt-32">

      {/* Warm, low-saturation atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(100%_75%_at_70%_0%,rgba(251,146,60,0.16)_0%,transparent_58%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_100%_45%,rgba(163,44,76,0.13)_0%,transparent_60%)] pointer-events-none" />

      {/* Graph-paper lattice: a maths-notebook motif rather than generic decoration.
          Fine 28px ruling with a heavier line every 4th cell, masked to a soft radial
          falloff so it never competes with the copy or the cutout. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            'linear-gradient(to right, rgba(163,44,76,0.07) 1px, transparent 1px)',
            'linear-gradient(to bottom, rgba(163,44,76,0.07) 1px, transparent 1px)',
            'linear-gradient(to right, rgba(163,44,76,0.05) 1px, transparent 1px)',
            'linear-gradient(to bottom, rgba(163,44,76,0.05) 1px, transparent 1px)',
          ].join(','),
          backgroundSize: '112px 112px, 112px 112px, 28px 28px, 28px 28px',
          maskImage: 'radial-gradient(78% 62% at 46% 28%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(78% 62% at 46% 28%, black 30%, transparent 100%)',
        }}
      />

      {/* A single diagonal light sweep gives the flat field some direction */}
      <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(255,255,255,0.9)_0%,transparent_34%,transparent_66%,rgba(255,247,240,0.75)_100%)] pointer-events-none" />

      <div className="absolute inset-0 bg-grain opacity-50 mix-blend-multiply pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* ============ Stage: copy + student + phone ============ */}
        <div className="relative">

          {/* Decorative arcs behind the student */}
          <div className="hidden lg:block absolute right-[9%] top-4 w-[30rem] h-[30rem] rounded-full border border-orange-200/60 pointer-events-none" />
          <div className="hidden lg:block absolute right-[4%] top-24 w-[26rem] h-[26rem] rounded-full border border-maroon-200/50 pointer-events-none" />
          <div className="hidden lg:block absolute right-[14%] top-28 w-[22rem] h-[22rem] rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.16)_0%,transparent_65%)] blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">

            {/* ---------- Left: the message ---------- */}
            <div className="lg:col-span-5 relative z-20 space-y-7 lg:-mt-10">

              <Reveal delay={0.06} className="space-y-6">
                <h1 className="font-display text-[2.35rem] xs:text-[2.7rem] sm:text-[3.4rem] lg:text-[3.9rem] font-bold text-slate-950 tracking-[-0.025em] leading-[1.03]">
                  Find your
                  {/* pb/-mb pair keeps descenders (g, p) from being clipped by the gradient's paint box */}
                  <span className="block text-gradient-brand pb-[0.14em] -mb-[0.14em]">learning gaps</span>
                  <span className="block">right now.</span>
                </h1>

                <p className="text-slate-600 text-lg leading-relaxed max-w-md">
                  ClassMap shows you what you <strong className="text-slate-900 font-semibold">know</strong>,
                  what you <strong className="text-slate-900 font-semibold">miss</strong>, and exactly how to get{' '}
                  <strong className="text-slate-900 font-semibold">better</strong> — every day.
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="flex flex-wrap items-center gap-5">
                  <button
                    onClick={onDownloadClick}
                    className="bg-gradient-to-r from-maroon-700 via-maroon-600 to-orange-600 hover:brightness-110 text-white font-bold text-[15px] px-8 py-4 rounded-full shadow-[0_18px_38px_-12px_rgba(163,44,76,0.55)] hover:shadow-[0_22px_46px_-12px_rgba(163,44,76,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2.5 cursor-pointer group"
                  >
                    <span>Start self learning</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={onExploreSteps}
                    className="group flex items-center gap-3 rounded-full border border-slate-300 hover:border-maroon-400 bg-white/80 backdrop-blur hover:bg-white pl-1.5 pr-6 py-1.5 text-slate-800 hover:text-maroon-700 font-semibold text-[15px] shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    <span className="w-10 h-10 rounded-full bg-maroon-50 text-maroon-700 group-hover:bg-maroon-100 flex items-center justify-center shrink-0 transition-colors">
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </span>
                    See how it works
                  </button>
                </div>
              </Reveal>
            </div>

            {/* ---------- Right: student + phone ---------- */}
            <div className="lg:col-span-7 relative">

              {/* Desktop composition */}
              <div className="hidden lg:block relative h-[38rem]">

                {/* Student cutout */}
                <Reveal delay={0.16} y={26} className="absolute bottom-0 left-[6%] xl:left-[10%] z-10">
                  <img
                    src={studentBoy}
                    alt="Madhubun student with Mathematics and Physics textbooks"
                    className="h-[34rem] xl:h-[36rem] w-auto object-contain"
                  />
                </Reveal>

                {/* Phone, overlapping the student on the right */}
                <Reveal delay={0.22} y={30} className="absolute bottom-6 right-0 z-20">
                  <PhoneShowcase />
                </Reveal>

                {/* Floating cards */}
                <div className="absolute top-10 left-0 z-30 animate-float-slow">
                  <GapCard />
                </div>
                <div
                  className="absolute top-[17rem] -left-6 z-30 animate-float-slow"
                  style={{ animationDelay: '1.6s' }}
                >
                  <ProgressCard />
                </div>
              </div>

              {/* Mobile / tablet composition — phone only, cards stacked beneath */}
              <div className="lg:hidden flex flex-col items-center gap-8">
                <Reveal delay={0.16} y={26}>
                  <PhoneShowcase />
                </Reveal>
                <div className="flex flex-wrap justify-center gap-4">
                  <GapCard />
                  <ProgressCard />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ============ Feature strip ============ */}
        <Reveal delay={0.1} className="mt-14 lg:mt-2 mb-16 lg:mb-20">
          <div className="relative rounded-[1.75rem] bg-gradient-to-b from-white to-[#FDFAF8] border border-white ring-1 ring-slate-900/[0.06] shadow-[0_2px_4px_-2px_rgba(15,10,20,0.06),0_18px_36px_-14px_rgba(15,10,20,0.12),0_40px_70px_-30px_rgba(15,10,20,0.18)] px-3 sm:px-4 py-3 sm:py-4 overflow-hidden">

            {/* Hairline highlight along the top edge, like light catching a bevel */}
            <span className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {FEATURES.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={`group relative flex items-start gap-4 rounded-2xl px-5 py-5 transition-all duration-300 hover:-translate-y-0.5 ${
                      idx > 0 ? 'lg:before:absolute lg:before:left-0 lg:before:inset-y-5 lg:before:w-px lg:before:bg-gradient-to-b lg:before:from-transparent lg:before:via-slate-200 lg:before:to-transparent' : ''
                    }`}
                  >
                    {/* Per-card tint that blooms on hover */}
                    <span className={`absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${feature.hover}`} />

                    <span
                      className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ring-1 grid place-items-center shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-105 ${feature.tile}`}
                    >
                      <Icon className="w-[22px] h-[22px]" strokeWidth={1.75} />
                    </span>

                    <div className="relative space-y-1 pt-0.5">
                      <h3 className="font-display text-[15px] font-semibold text-slate-950 leading-snug whitespace-pre-line">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 text-[13px] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
