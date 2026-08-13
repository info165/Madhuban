import React from 'react';
import { BookOpen, Sparkles, Brain, Cpu, BarChart3, CheckCircle2, Target, Award, Clock } from 'lucide-react';

export const PartnershipPillars: React.FC = () => {
  const pillars = [
    {
      icon: BookOpen,
      iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      title: 'Trusted Madhuban Pedagogy',
      subtitle: '50+ Years of K-12 Publishing Excellence',
      description: 'Madhuban Educational Books provides battle-tested, NCF-compliant textbook content across English, Hindi, Mathematics, Science, and Social Sciences built by leading Indian educators.',
      highlights: ['CBSE & ICSE textbook alignment', 'Rich conceptual explanations', 'Culturally relevant context']
    },
    {
      icon: Sparkles,
      iconBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      title: 'Classmap Personalised Engine',
      subtitle: 'Adaptive AI Tailored to Every Learner',
      description: 'Classmap’s algorithmic learning engine continuously assesses each student’s performance, identifying exact micro-gaps and serving custom practice modules in real time.',
      highlights: ['Real-time step-error analysis', 'Adaptive difficulty scaling', 'Gamified concept mastery']
    },
    {
      icon: Clock,
      iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      title: '6+ Hours Saved Weekly for Teachers',
      subtitle: 'Automated Marking & Remedial Worksheets',
      description: 'Teachers spend less time on repetitive grading and manual worksheet creation. Classmap automatically generates differentiated assignments with detailed diagnostic insights.',
      highlights: ['1-click remedial generator', 'Auto-graded homework & tests', 'Bloom\'s taxonomy reporting']
    },
    {
      icon: Target,
      iconBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      title: 'NEP 2020 & NCF 2023 Alignment',
      subtitle: 'Competency-Based Education Ready',
      description: 'Built from the ground up to support competency-based learning framework. Tracks student growth across foundational, preparatory, middle, and secondary stages.',
      highlights: ['Holistic progress report cards', 'Critical thinking focus', 'Multilingual support']
    }
  ];

  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>The Power of Collaboration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Why Madhuban + Classmap is the Ultimate Choice for Indian Schools
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Combining gold-standard physical textbooks with intelligent adaptive software creates a seamless blended learning experience for students, teachers, and school leadership.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${pillar.iconBg}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-1">
                      {pillar.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="pt-6 border-t border-slate-800/80 space-y-2 mt-6">
                  {pillar.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Banner inside Pillars */}
        <div className="mt-16 bg-gradient-to-r from-amber-900/40 via-slate-900 to-indigo-950/40 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Blended Learning Experience</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Physical Books + Digital Adaptive Engine</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Students keep their favorite Madhuban physical textbooks on their desk while scanning QR codes or opening Classmap on tablets for instant diagnostic practice & video explanations.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <div className="text-center px-4 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl">
              <span className="block text-amber-400 font-bold text-lg">100%</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">CBSE / ICSE Aligned</span>
            </div>
            <div className="text-center px-4 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl">
              <span className="block text-indigo-400 font-bold text-lg">AI</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">Classmap Driven</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
