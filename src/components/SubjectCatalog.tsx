import React, { useState } from 'react';
import { SUBJECT_SERIES } from '../data/mockData';
import { BookOpen, Sparkles, CheckCircle2, ChevronRight, Layers, ArrowRight } from 'lucide-react';
import { SubjectSeries } from '../types';

interface SubjectCatalogProps {
  onRequestDemo: () => void;
}

export const SubjectCatalog: React.FC<SubjectCatalogProps> = ({ onRequestDemo }) => {
  const [selectedSeries, setSelectedSeries] = useState<SubjectSeries>(SUBJECT_SERIES[0]);

  return (
    <section id="series" className="py-20 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Integrated Book Series</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Flagship Madhuban Textbooks Enriched with Classmap AI
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Explore Madhuban’s market-leading publication series, now seamlessly bundled with Classmap digital diagnostic engines and interactive practice apps.
          </p>
        </div>

        {/* Series Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SUBJECT_SERIES.map((item) => {
            const isSelected = selectedSeries.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedSeries(item)}
                className={`bg-slate-900 border rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'border-amber-500/80 shadow-xl shadow-amber-500/10 ring-1 ring-amber-500/50'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-4">
                  {/* Tag & Grade */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-300 font-semibold border border-slate-700">
                      {item.tag}
                    </span>
                    <span className="text-slate-400 font-medium">{item.grades}</span>
                  </div>

                  {/* Name & Subject */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-indigo-400 font-medium mt-0.5">{item.subject}</p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-1.5 pt-2">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-400">
                        <Sparkles className="w-3 h-3 text-indigo-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs mt-6">
                  <span className="text-slate-400 font-medium">CBSE / ICSE Aligned</span>
                  <span className="text-amber-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View Chapters</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Chapter Preview Modal / Box for Selected Series */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Sample Integrated Chapter Scope • {selectedSeries.name}</span>
            </div>
            <h3 className="text-xl font-bold text-white">{selectedSeries.subject} ({selectedSeries.grades})</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1">
              {selectedSeries.sampleChapters.map((ch, idx) => (
                <span key={idx} className="bg-slate-950 border border-slate-800 text-slate-300 text-xs px-3 py-1 rounded-lg">
                  {ch}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={onRequestDemo}
            className="shrink-0 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs transition flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Request Sample Books & Access</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
