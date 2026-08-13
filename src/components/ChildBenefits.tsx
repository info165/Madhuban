import React from 'react';
import { Compass, FileText, Target, Cpu, CheckCircle2, Sparkles } from 'lucide-react';

export const ChildBenefits: React.FC = () => {
  const benefits = [
    {
      id: 'personalized',
      icon: Compass,
      pill: 'TAILORED FOR EVERY STUDENT',
      title: 'Personalized Learning Journey',
      description: 'Every child learns at their own pace. The app crafts a custom study path matching their specific textbook chapter and grade level.',
      iconBg: 'bg-orange-100 text-orange-600',
    },
    {
      id: 'topic-wise',
      icon: FileText,
      pill: 'CONCEPT MASTERY',
      title: 'Topic-Wise Practice Tests',
      description: 'Comprehensive practice tests for every subject and sub-topic to solidify concepts, improve speed, and boost exam confidence.',
      iconBg: 'bg-rose-100 text-rose-600',
    },
    {
      id: 'diagnostic',
      icon: Target,
      pill: 'DIAGNOSTIC FEEDBACK',
      title: 'Identify & Fix Learning Gaps',
      description: 'Instant analysis reveals exact problem areas and weak concepts so students can focus where it matters most and score better.',
      iconBg: 'bg-amber-100 text-amber-600',
    },
    {
      id: 'adaptive',
      icon: Cpu,
      pill: 'SMART ENGINE',
      title: 'Adaptive Question Generation',
      description: 'The intelligent system continuously generates customized questions tailored to the child’s skill level to ensure continuous progress.',
      iconBg: 'bg-emerald-100 text-emerald-600',
    }
  ];

  return (
    <section className="py-20 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header matching Image 2 */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 border border-orange-200/80 text-orange-900 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>EMPOWERING EVERY STUDENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            How Classmap Transforms Your Child's Learning
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Designed to turn textbook study into an engaging, gap-free learning journey that builds real understanding and higher test scores.
          </p>
        </div>

        {/* 4 Cards Grid matching Image 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Top Circle Icon */}
                  <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Pill Tag */}
                  <div className="inline-block bg-slate-100 px-3 py-1 rounded-full text-[10px] font-extrabold text-slate-600 tracking-wider uppercase">
                    {item.pill}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-slate-950 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Guarantee Line */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-extrabold text-emerald-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Guaranteed Score Improvement</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
