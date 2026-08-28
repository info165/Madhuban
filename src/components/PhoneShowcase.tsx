import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  ArrowRight, Bell, ChevronRight, Wifi, Signal, BatteryFull,
  Home, BookOpen, BarChart3, User, FlaskConical, Check, Target,
  Sparkles, FileText,
} from 'lucide-react';

/* Each screen is one beat of the real product story: see your gaps → practice →
   the gap gets identified → a worksheet is generated for it. */
const SCREEN_COUNT = 4;
const DWELL_MS = 3400;

const EASE = [0.16, 1, 0.3, 1] as const;

const screenTransition = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.45, ease: EASE },
};

/* ------------------------------- Screen 1 -------------------------------- */
const HomeScreen: React.FC<{ animate: boolean }> = ({ animate }) => (
  <div className="space-y-3">
    <div className="flex items-start justify-between gap-2">
      <div>
        <span className="block text-[14px] font-bold text-slate-900">Hi</span>
        <span className="block text-[10px] text-slate-500 mt-0.5">Let's continue learning.</span>
      </div>
      <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shrink-0">
        <Bell className="w-3.5 h-3.5" />
      </div>
    </div>

    <div className="flex items-center justify-between gap-2 rounded-2xl bg-gradient-to-r from-maroon-700 to-maroon-600 text-white px-3.5 py-2.5 shadow-lg shadow-maroon-900/25">
      <span className="text-[11.5px] font-bold">Start Self Learning</span>
      <ArrowRight className="w-3.5 h-3.5" />
    </div>

    <div className="bg-white rounded-2xl p-3 space-y-2.5 border border-slate-200/70 shadow-sm">
      <span className="text-[8.5px] font-bold text-slate-500 uppercase tracking-[0.12em]">
        Your learning gap analysis
      </span>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-[10.5px]">
          <span className="font-semibold text-slate-800">Mathematics</span>
          <span className="flex items-center gap-1.5">
            <span className="px-1.5 py-px rounded-full bg-orange-100 text-orange-700 font-bold text-[7.5px] uppercase tracking-wide">Needs work</span>
            <span className="font-bold text-orange-600 tabular-nums">58%</span>
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-orange-400 to-orange-600"
            initial={animate ? { width: 0 } : false}
            animate={{ width: '58%' }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-[10.5px]">
          <span className="font-semibold text-slate-800">Science</span>
          <span className="flex items-center gap-1.5">
            <span className="px-1.5 py-px rounded-full bg-emerald-100 text-emerald-700 font-bold text-[7.5px] uppercase tracking-wide">On track</span>
            <span className="font-bold text-emerald-600 tabular-nums">84%</span>
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
            initial={animate ? { width: 0 } : false}
            animate={{ width: '84%' }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.28 }}
          />
        </div>
      </div>
    </div>

    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-[8.5px] font-bold text-slate-500 uppercase tracking-[0.12em]">Recommended for you</span>
        <span className="text-[8.5px] font-bold text-orange-600">View all</span>
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white border border-slate-200/70 shadow-sm">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-6 h-6 rounded-lg bg-maroon-50 text-maroon-700 flex items-center justify-center text-[9px] font-extrabold shrink-0">x²</span>
            <div className="min-w-0">
              <span className="block text-[10.5px] font-bold text-slate-900 truncate">Algebra</span>
              <span className="block text-[8.5px] text-slate-500">Mathematics</span>
            </div>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white border border-slate-200/70 shadow-sm">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <FlaskConical className="w-3 h-3" />
            </span>
            <div className="min-w-0">
              <span className="block text-[10.5px] font-bold text-slate-900 truncate">Light Reflection</span>
              <span className="block text-[8.5px] text-slate-500">Science</span>
            </div>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
        </div>
      </div>
    </div>
  </div>
);

/* ------------------------------- Screen 2 -------------------------------- */
const OPTIONS = ['12/25', '15/25', '18/25', '20/25'];
const CORRECT = 1;

const QuestionScreen: React.FC<{ animate: boolean }> = ({ animate }) => {
  const [picked, setPicked] = useState<number | null>(null);

  // Simulates a student tapping an answer a beat after the screen appears.
  useEffect(() => {
    if (!animate) { setPicked(CORRECT); return; }
    setPicked(null);
    const t = setTimeout(() => setPicked(CORRECT), 1500);
    return () => clearTimeout(t);
  }, [animate]);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.12em]">Mathematics · Fractions</span>
        <span className="flex items-center gap-1">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={`h-1 rounded-full transition-all ${i === 1 ? 'w-4 bg-maroon-600' : 'w-1 bg-slate-200'}`} />
          ))}
        </span>
      </div>

      <div className="rounded-2xl bg-white border border-slate-200/70 shadow-sm p-3.5 space-y-1">
        <span className="text-[8.5px] font-bold text-orange-600 uppercase tracking-[0.12em]">Question 2 of 4</span>
        <p className="text-[12px] font-bold text-slate-900 leading-snug">
          Which fraction is equivalent to 3/5 with a denominator of 25?
        </p>
      </div>

      <div className="space-y-1.5">
        {OPTIONS.map((opt, i) => {
          const isPicked = picked === i;
          return (
            <motion.div
              key={opt}
              animate={isPicked ? { scale: [1, 0.97, 1] } : { scale: 1 }}
              transition={{ duration: 0.28, ease: EASE }}
              className={`flex items-center justify-between gap-2 p-2.5 rounded-xl border text-[11px] font-semibold transition-colors duration-300 ${
                isPicked
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-800'
                  : 'bg-white border-slate-200/70 text-slate-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className={`w-5 h-5 rounded-full grid place-items-center text-[9px] font-bold transition-colors duration-300 ${
                  isPicked ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {isPicked ? <Check className="w-3 h-3" /> : String.fromCharCode(65 + i)}
                </span>
                {opt}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

/* ------------------------------- Screen 3 -------------------------------- */
const ResultScreen: React.FC<{ animate: boolean }> = ({ animate }) => (
  <div className="space-y-3">
    <motion.div
      initial={animate ? { scale: 0.86, opacity: 0 } : false}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.45, ease: EASE }}
      className="rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-200/70 p-4 text-center space-y-2 shadow-sm"
    >
      <span className="mx-auto w-11 h-11 rounded-full bg-orange-100 text-orange-600 grid place-items-center ring-4 ring-orange-50">
        <Target className="w-5 h-5" />
      </span>
      <div>
        <span className="block text-[12.5px] font-extrabold text-slate-900">Learning gap found</span>
        <span className="block text-[10px] text-slate-500 mt-0.5">Equivalent Fractions</span>
      </div>
    </motion.div>

    <div className="rounded-2xl bg-white border border-slate-200/70 shadow-sm p-3 space-y-2">
      <span className="text-[8.5px] font-bold text-slate-500 uppercase tracking-[0.12em]">What went wrong</span>
      <p className="text-[10.5px] text-slate-600 leading-relaxed">
        You're multiplying the numerator but not the denominator. Both must scale by the same factor.
      </p>
      <div className="rounded-lg bg-slate-50 border border-slate-100 px-2.5 py-2 text-[10.5px] font-semibold text-slate-800">
        (3 × 5) / (5 × 5) = <span className="text-emerald-600 font-bold">15/25</span>
      </div>
    </div>

    <div className="flex items-center gap-2 rounded-xl bg-maroon-50 border border-maroon-100 px-3 py-2.5">
      <Sparkles className="w-3.5 h-3.5 text-maroon-600 shrink-0" />
      <span className="text-[10px] font-semibold text-maroon-800">Building your worksheet…</span>
    </div>
  </div>
);

/* ------------------------------- Screen 4 -------------------------------- */
const WORKSHEET = [
  'Scale both parts of a fraction',
  'Find the missing numerator',
  'Match equivalent pairs',
];

const WorksheetScreen: React.FC<{ animate: boolean }> = ({ animate }) => (
  <div className="space-y-3">
    <div className="rounded-2xl bg-gradient-to-br from-maroon-700 to-maroon-600 text-white p-4 space-y-1 shadow-lg shadow-maroon-900/25">
      <span className="flex items-center gap-1.5 text-[8.5px] font-bold uppercase tracking-[0.12em] text-orange-200">
        <FileText className="w-3 h-3" /> Worksheet ready
      </span>
      <span className="block text-[13px] font-extrabold leading-snug">Equivalent Fractions</span>
      <span className="block text-[10px] text-maroon-100/90">3 practice sets · made for you</span>
    </div>

    <div className="space-y-1.5">
      {WORKSHEET.map((item, i) => (
        <motion.div
          key={item}
          initial={animate ? { opacity: 0, x: -10 } : false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, ease: EASE, delay: 0.12 + i * 0.1 }}
          className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white border border-slate-200/70 shadow-sm"
        >
          <span className="flex items-center gap-2 min-w-0">
            <span className="w-5 h-5 rounded-md bg-orange-50 text-orange-600 grid place-items-center text-[9px] font-extrabold shrink-0">
              {i + 1}
            </span>
            <span className="text-[10.5px] font-semibold text-slate-800 truncate">{item}</span>
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
        </motion.div>
      ))}
    </div>

    <div className="flex items-center justify-between gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3.5 py-2.5 shadow-lg shadow-orange-900/20">
      <span className="text-[11.5px] font-bold">Start practice</span>
      <ArrowRight className="w-3.5 h-3.5" />
    </div>
  </div>
);

/* ------------------------------ The device ------------------------------- */
export const PhoneShowcase: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const [screen, setScreen] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const t = setInterval(() => setScreen((s) => (s + 1) % SCREEN_COUNT), DWELL_MS);
    return () => clearInterval(t);
  }, [reduceMotion]);

  const animate = !reduceMotion;
  const SCREENS = [HomeScreen, QuestionScreen, ResultScreen, WorksheetScreen];
  const Active = SCREENS[screen];

  return (
    <div className="relative w-[15.5rem] sm:w-[16.5rem] h-[30rem] sm:h-[31.5rem] rounded-[2.9rem] bg-gradient-to-br from-slate-300 via-slate-500 to-slate-800 p-[2px] shadow-[0_45px_90px_-30px_rgba(15,10,20,0.55)]">

      <span className="absolute -left-[3px] top-[6rem] w-[3px] h-7 rounded-l bg-gradient-to-b from-slate-400 to-slate-600" />
      <span className="absolute -left-[3px] top-[8.5rem] w-[3px] h-11 rounded-l bg-gradient-to-b from-slate-400 to-slate-600" />
      <span className="absolute -left-[3px] top-[11.7rem] w-[3px] h-11 rounded-l bg-gradient-to-b from-slate-400 to-slate-600" />
      <span className="absolute -right-[3px] top-[9.5rem] w-[3px] h-[4.5rem] rounded-r bg-gradient-to-b from-slate-400 to-slate-600" />

      <div className="h-full rounded-[2.8rem] bg-slate-950 p-[6px]">
        <div className="relative h-full rounded-[2.45rem] bg-gradient-to-b from-white to-slate-50 overflow-hidden flex flex-col">

          <div className="absolute inset-0 z-30 pointer-events-none bg-[linear-gradient(115deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.1)_16%,transparent_36%)] mix-blend-overlay" />

          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[5.25rem] h-[1.5rem] bg-slate-950 rounded-full z-20 flex items-center justify-end pr-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-700 ring-1 ring-slate-600/50" />
          </div>

          {/* Status bar — chrome stays put while the content changes underneath */}
          <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px] font-semibold text-slate-900 shrink-0">
            <span className="tabular-nums">9:41</span>
            <span className="flex items-center gap-1">
              <Signal className="w-2.5 h-2.5" />
              <Wifi className="w-2.5 h-2.5" />
              <BatteryFull className="w-3 h-3" />
            </span>
          </div>

          {/* Cycling app body */}
          <div className="flex-1 px-3.5 pt-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div key={screen} {...screenTransition}>
                <Active animate={animate} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="shrink-0 border-t border-slate-200/70 bg-white/90 px-5 pt-2 pb-1">
            <div className="flex items-center justify-between">
              <span className={`flex flex-col items-center gap-1 transition-colors duration-300 ${screen === 0 ? 'text-maroon-700' : 'text-slate-300'}`}>
                <Home className="w-[17px] h-[17px]" />
                <span className={`w-1 h-1 rounded-full transition-colors duration-300 ${screen === 0 ? 'bg-maroon-700' : 'bg-transparent'}`} />
              </span>
              <span className={`flex flex-col items-center gap-1 transition-colors duration-300 ${screen === 1 || screen === 3 ? 'text-maroon-700' : 'text-slate-300'}`}>
                <BookOpen className="w-[17px] h-[17px]" />
                <span className={`w-1 h-1 rounded-full transition-colors duration-300 ${screen === 1 || screen === 3 ? 'bg-maroon-700' : 'bg-transparent'}`} />
              </span>
              <span className={`flex flex-col items-center gap-1 transition-colors duration-300 ${screen === 2 ? 'text-maroon-700' : 'text-slate-300'}`}>
                <BarChart3 className="w-[17px] h-[17px]" />
                <span className={`w-1 h-1 rounded-full transition-colors duration-300 ${screen === 2 ? 'bg-maroon-700' : 'bg-transparent'}`} />
              </span>
              <span className="flex flex-col items-center gap-1 text-slate-300">
                <User className="w-[17px] h-[17px]" />
                <span className="w-1 h-1 rounded-full bg-transparent" />
              </span>
            </div>
          </div>

          <div className="shrink-0 flex justify-center pb-2 pt-1 bg-white/90">
            <span className="w-24 h-[4px] rounded-full bg-slate-900/80" />
          </div>

        </div>
      </div>
    </div>
  );
};
