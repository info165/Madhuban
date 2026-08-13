import React from 'react';
import { MadhubanLogo } from './BrandLogos';
import { Smartphone, Sparkles } from 'lucide-react';

interface NavbarProps {
  onDownloadClick: () => void;
  onExploreSteps: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDownloadClick, onExploreSteps }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-2xs transition-all">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3.5 flex items-center justify-between">
        
        {/* Left: Madhuban Logo */}
        <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <MadhubanLogo size="md" />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={onExploreSteps}
            className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-orange-600 px-3 py-2 transition cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span>How It Works</span>
          </button>

          <button
            onClick={onDownloadClick}
            className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Smartphone className="w-4 h-4" />
            <span>Download App</span>
          </button>
        </div>

      </div>
    </header>
  );
};
