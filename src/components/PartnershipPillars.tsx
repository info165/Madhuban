import React from 'react';
import { Award } from 'lucide-react';
import { Reveal } from './Reveal';

export const PartnershipPillars: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-slate-950 bg-mesh-dark border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>The Power of Collaboration</span>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="bg-gradient-to-r from-maroon-900/70 via-slate-900 to-orange-950/50 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">Blended Learning Experience</span>
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-white">Physical Books + Digital Adaptive Engine</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Students keep their favourite Madhubun physical textbooks on their desk while scanning QR codes for instant diagnostic practice on ClassMap.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <div className="text-center px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl">
              <span className="block text-amber-300 font-bold text-lg">100%</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">CBSE / ICSE Aligned</span>
            </div>
            <div className="text-center px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl">
              <span className="block text-orange-300 font-bold text-lg">AI</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">ClassMap Driven</span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
