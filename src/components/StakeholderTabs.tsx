import React, { useState } from 'react';
import { STAKEHOLDER_BENEFITS } from '../data/mockData';
import { Sparkles, Users, Building2, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface StakeholderTabsProps {
  onRequestDemo: () => void;
}

export const StakeholderTabs: React.FC<StakeholderTabsProps> = ({ onRequestDemo }) => {
  const [activeTab, setActiveTab] = useState<'students' | 'teachers' | 'schools'>('students');

  const activeData = STAKEHOLDER_BENEFITS.find((item) => item.id === activeTab) || STAKEHOLDER_BENEFITS[0];

  return (
    <section id="stakeholders" className="py-20 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <Users className="w-3.5 h-3.5" />
            <span>Multi-Stakeholder Benefits</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Designed for Students, Empowered Teachers & Visionary School Leaders
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Click through the tabs below to discover how Madhuban x Classmap transforms learning outcomes at every level of school ecosystem.
          </p>
        </div>

        {/* Tab Selector Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-950 border border-slate-800 rounded-2xl gap-2">
            {STAKEHOLDER_BENEFITS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'students' | 'teachers' | 'schools')}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  {tab.id === 'students' && <Sparkles className="w-4 h-4" />}
                  {tab.id === 'teachers' && <Users className="w-4 h-4" />}
                  {tab.id === 'schools' && <Building2 className="w-4 h-4" />}
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Body */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {activeData.title}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {activeData.subtitle}
                </h3>
              </div>

              {/* Points */}
              <div className="space-y-4 pt-2">
                {activeData.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                    <div className="p-1.5 bg-amber-500/20 text-amber-400 rounded-lg shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{pt.title}</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">{pt.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onRequestDemo}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs transition flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Get Started for {activeData.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Metric Callout Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-indigo-950/80 border border-slate-800 rounded-2xl p-8 text-center space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-2xl rounded-full pointer-events-none" />

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Proven Academic Impact</span>
                <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-indigo-300">
                  {activeData.stat.value}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-xs mx-auto">
                  {activeData.stat.label}
                </p>
              </div>

              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-left space-y-2 text-xs">
                <div className="flex items-center gap-2 text-amber-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Curriculum Certification</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Fully verified against latest CBSE / ICSE guidelines & NCERT syllabus frameworks.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
