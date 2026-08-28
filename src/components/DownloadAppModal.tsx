import React from 'react';
import { X, Globe, ArrowRight } from 'lucide-react';
import { MadhubunLogo } from './BrandLogos';

interface DownloadAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const APP_URL = 'https://classmap-student.web.app/dashboard';

export const DownloadAppModal: React.FC<DownloadAppModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-maroon-100 relative space-y-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-3">
          <div className="flex items-center justify-center">
            <MadhubunLogo size="lg" />
          </div>

          <h3 className="font-display text-2xl font-semibold text-slate-900">
            Continue to ClassMap
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm">
            Access your Madhubun textbook's interactive chapters, diagnostic tests, and adaptive worksheets on your device.
          </p>
        </div>

        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-maroon-50 hover:bg-maroon-100 text-maroon-900 border border-maroon-200 font-bold p-4 rounded-2xl transition-all flex items-center justify-between cursor-pointer group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-maroon-200/70 text-maroon-700 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] text-maroon-700 uppercase font-bold tracking-wider">Browser Access</span>
              <span className="text-sm font-bold text-maroon-900">Continue on Web Portal</span>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-maroon-600 group-hover:translate-x-1 transition-transform" />
        </a>

      </div>
    </div>
  );
};
