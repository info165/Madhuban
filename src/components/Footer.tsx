import React from 'react';
import { MadhubanLogo, ClassMapLogo } from './BrandLogos';
import { ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Logos & Branding */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800 text-center md:text-left">
          
          {/* Madhuban Owner Branding */}
          <div className="space-y-2">
            <div className="bg-white p-2 rounded-xl inline-block shadow-md">
              <MadhubanLogo size="md" />
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Madhuban Educational Books is a leading school textbook publisher in India, empowering millions of students with quality curriculum materials.
            </p>
          </div>

          {/* Technical Support Partner Badge */}
          <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 flex flex-col items-center md:items-end gap-1.5">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
              Technical Support Partner
            </span>
            <div className="bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-700">
              <ClassMapLogo size="md" />
            </div>
            <span className="text-[10px] text-slate-400">
              Personalised & Adaptive Learning Engine
            </span>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Madhuban Educational Books. All rights reserved.</p>
          
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Privacy Policy: All student data is handled securely for educational purposes.'); }} className="hover:text-white transition">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert('Terms of Use: App store companion for Madhuban textbooks.'); }} className="hover:text-white transition">Terms of Service</a>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-400">
              Made for Students with <Heart className="w-3 h-3 text-rose-500 fill-current" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
