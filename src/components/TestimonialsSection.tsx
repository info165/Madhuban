import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Quote, ChevronLeft, ChevronRight, Star, Building2, MapPin, Award } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>School Endorsements</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Trusted by School Principals & Educators Across India
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hear from academic leaders who have implemented Madhuban textbooks powered by Classmap adaptive learning.
          </p>
        </div>

        {/* Testimonial Showcase Card */}
        <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative">
          <Quote className="w-12 h-12 text-amber-500/20 absolute top-6 right-8 pointer-events-none" />

          <div className="space-y-6 relative z-10">
            {/* Rating Stars */}
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote Text */}
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed italic">
              "{currentTestimonial.quote}"
            </p>

            {/* Author Profile */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-500/40"
                />
                <div>
                  <h4 className="text-base font-bold text-white">{currentTestimonial.author}</h4>
                  <p className="text-xs text-amber-400 font-medium">{currentTestimonial.role}</p>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-slate-500" />
                      {currentTestimonial.school}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {currentTestimonial.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Slider Navigation Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 transition cursor-pointer"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-500 font-mono">
                  {currentIndex + 1} / {TESTIMONIALS.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 transition cursor-pointer"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Impact Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
            <span className="block text-3xl sm:text-4xl font-extrabold text-amber-400">5,000+</span>
            <span className="text-xs text-slate-400 mt-1 block">Schools Onboarded</span>
          </div>
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
            <span className="block text-3xl sm:text-4xl font-extrabold text-indigo-400">2.5M+</span>
            <span className="text-xs text-slate-400 mt-1 block">Active Students</span>
          </div>
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
            <span className="block text-3xl sm:text-4xl font-extrabold text-emerald-400">35%</span>
            <span className="text-xs text-slate-400 mt-1 block">Higher Exam Score Gain</span>
          </div>
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
            <span className="block text-3xl sm:text-4xl font-extrabold text-purple-400">6 Hrs/Wk</span>
            <span className="text-xs text-slate-400 mt-1 block">Saved per Teacher</span>
          </div>
        </div>

      </div>
    </section>
  );
};
