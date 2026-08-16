import React from 'react';
import { ArrowRight, Download, BookOpen } from 'lucide-react';
import heroImg from '../assets/images/madhuban_students_learning_1786641159990.jpg';

interface HeroProps {
  onDownloadClick: () => void;
  onExploreSteps: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadClick }) => {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-orange-50/40 via-white to-white overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/50 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Main Headline matching Image 1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
              Craft your{' '}
              <span className="text-[#EA580C] font-black">
                personalized learning journey
              </span>{' '}
              here.
            </h1>

            {/* Subtitle Body matching Image 1 */}
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
              Welcome to the official digital portal for{' '}
              <strong className="text-[#9F1239] font-bold">Madhubun Educational Books</strong>. Download the{' '}
              <strong className="text-[#EA580C] font-bold">Classmap</strong> app to unlock practice tests, identify learning gaps, and receive adaptive worksheets designed to help students score higher.
            </p>

            {/* Primary Action Button matching Image 1 */}
            <div className="pt-2 space-y-4">
              <a
                href="https://classmap-student.web.app/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#EA580C] hover:bg-[#C2410C] text-white font-extrabold text-lg px-8 py-4.5 rounded-2xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all flex items-center gap-3 cursor-pointer group inline-flex"
              >
                <Download className="w-5 h-5 text-white" />
                <span>Download the App Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-1" />
              </a>

              {/* Google Play Store Badge matching Image 1 */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://classmap-student.web.app/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-950 hover:bg-slate-900 text-white px-4 py-2 rounded-xl flex items-center gap-2.5 shadow-sm transition cursor-pointer inline-flex"
                >
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.34 0 .65.12.9.32l11.6 8.7c.6.45.6 1.35 0 1.8L5.4 21.68c-.25.2-.56.32-.9.32-.83 0-1.5-.67-1.5-1.5z" fill="#00E676" />
                    <path d="M15.4 12L5.4 4.5l8.1 8.1 1.9-.6z" fill="#FFC107" />
                    <path d="M5.4 19.5L15.4 12l-1.9-.6-8.1 8.1z" fill="#FF3D00" />
                    <path d="M17 10.8l3.1 2.3c.6.45.6 1.35 0 1.8L17 17.2l-1.6-1.6 1.6-4.8z" fill="#42A5F5" />
                  </svg>
                  <div className="text-left leading-none">
                    <span className="block text-[8px] uppercase tracking-wider text-slate-400 font-semibold">AVAILABLE ON</span>
                    <span className="text-xs font-extrabold text-white">Google Play Store</span>
                  </div>
                </a>
                <span className="text-xs font-medium text-slate-500">
                  • Exclusive for Android Users
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Graphic Card matching Image 1 */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Card Frame */}
              <div className="bg-gradient-to-b from-orange-200/60 to-orange-100/40 p-2.5 rounded-3xl border border-orange-200/80 shadow-xl">
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 group">
                  
                  {/* Classroom Illustration Image */}
                  <img
                    src={heroImg}
                    alt="Madhubun Educational Books Digital Learning"
                    className="w-full h-[340px] sm:h-[380px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  />

                  {/* Bottom White Banner Bar matching Image 1 */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-slate-100 shadow-lg flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#EA580C] flex items-center justify-center shrink-0">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <span className="block text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                          MADHUBUN BOOKS
                        </span>
                        <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">
                          Classmap Digital Companion
                        </h4>
                      </div>
                    </div>

                    <a
                      href="https://classmap-student.web.app/dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold px-4 py-2 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer shrink-0 inline-flex items-center"
                    >
                      Get App
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
