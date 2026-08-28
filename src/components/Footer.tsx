import React from 'react';
import { MadhubunLogo } from './BrandLogos';
import classmapMark from '../assets/brand/classmap-mark.webp';
import { Heart, Mail, ArrowRight } from 'lucide-react';

interface FooterProps {
  onDownloadClick: () => void;
}

const FOOTER_LINKS = [
  { label: 'Benefits', id: 'benefits' },
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'FAQ', id: 'faq' },
];

export const Footer: React.FC<FooterProps> = ({ onDownloadClick }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="relative bg-slate-950 bg-mesh-dark overflow-hidden text-slate-300 pt-16 pb-8">
      <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Closing CTA band */}
        <div className="bg-gradient-to-r from-maroon-700 via-maroon-600 to-orange-600 rounded-3xl p-7 sm:p-9 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 blur-3xl rounded-full pointer-events-none" />
          <div className="relative space-y-1">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Understand. Improve. <span className="text-amber-200">Succeed.</span>
            </h3>
            <p className="text-maroon-50/90 text-sm">Keep learning. Keep growing.</p>
          </div>
          <div className="relative flex flex-col items-center md:items-end gap-2 shrink-0">
            <button
              onClick={onDownloadClick}
              className="bg-white hover:bg-orange-50 text-maroon-700 font-extrabold text-sm px-7 py-3.5 rounded-full shadow-lg transition-all cursor-pointer flex items-center gap-2 group"
            >
              <span>Get the App</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <span className="text-maroon-50/70 text-[11px] font-medium">Available on Google Play</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/10">

          {/* Branding */}
          <div className="md:col-span-5 space-y-4">
            <span className="inline-flex bg-white rounded-2xl px-4 py-3 shadow-sm">
              <MadhubunLogo size="md" />
            </span>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Madhubun Educational Books is a leading K-12 textbook publisher in India. ClassMap is its
              official adaptive-learning technology partner, powering the app behind every QR code in
              a Madhubun book.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3.5">
            <span className="text-[11px] uppercase tracking-wider text-orange-300/90 font-bold">Explore</span>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="group flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-orange-400 transition-colors shrink-0" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2 space-y-3.5">
            <span className="text-[11px] uppercase tracking-wider text-orange-300/90 font-bold">Reach Us</span>
            <a
              href="mailto:info@classmap.in"
              className="group flex items-center gap-2.5 text-xs text-slate-300 hover:text-white transition-colors w-fit"
            >
              <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500/10 group-hover:border-orange-400/30 transition-colors shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </span>
              info@classmap.in
            </a>
          </div>

          {/* Technical partner credit */}
          <div className="md:col-span-3 flex md:justify-end md:items-start">
            <div className="group flex flex-col gap-4">
              <span className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-orange-300/90 font-bold whitespace-nowrap">
                <span className="hidden md:block h-px w-[4.25rem] bg-gradient-to-r from-transparent to-slate-600" />
                Technical Partner
              </span>

              <div className="flex items-center gap-4">
                <span className="relative shrink-0 ml-5">
                  {/* Warm halo picked from the mark's own colour */}
                  <span className="absolute -inset-3.5 rounded-full bg-orange-500/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={classmapMark}
                    alt=""
                    aria-hidden="true"
                    className="relative w-16 h-16 object-contain transition-transform duration-500 group-hover:-translate-y-0.5"
                  />
                </span>

                <span className="font-display text-[1.75rem] font-semibold text-white tracking-tight">
                  ClassMap
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex justify-center text-xs text-slate-500">
          <span className="flex items-center gap-1">
            Made for students with <Heart className="w-3 h-3 text-maroon-400 fill-current" />
          </span>
        </div>

      </div>

    </footer>
  );
};
