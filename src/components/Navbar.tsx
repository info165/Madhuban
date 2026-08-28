import React, { useState, useEffect } from 'react';
import { MadhubunLogo } from './BrandLogos';
import { Smartphone, Menu, X } from 'lucide-react';

interface NavbarProps {
  onDownloadClick: () => void;
}

const NAV_LINKS = [
  { label: 'Benefits', id: 'benefits' },
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'FAQ', id: 'faq' },
];

export const Navbar: React.FC<NavbarProps> = ({ onDownloadClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 pt-4 sm:pt-6 px-3 sm:px-6">
      {/* One composed bar, centered on the page with visible margin on every side — not pinned corner-to-corner */}
      <div
        className={`mx-auto max-w-4xl flex items-center justify-between gap-2 sm:gap-4 rounded-[1.75rem] sm:rounded-full pl-2.5 sm:pl-3 pr-2 sm:pr-2.5 py-1.5 sm:py-2 backdrop-blur-xl transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? 'bg-white/95 shadow-lg shadow-slate-900/10 border border-slate-200/70'
            : 'bg-white/90 shadow-2xl shadow-black/25 border border-white/80'
        }`}
      >
        {/* Logo lockup */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-1 items-center gap-2 sm:gap-2.5 cursor-pointer min-w-0"
          aria-label="Back to top"
        >
          <MadhubunLogo size="md" className="sm:hidden" />
          <MadhubunLogo size="xl" className="hidden sm:block" />
        </button>

        {/* Section nav. Sits just left of the bar's true midpoint: the CTA is far wider
            than the solo logo, so dead-centre leaves a bigger gap on the left. */}
        <nav className="hidden lg:flex shrink-0 items-center gap-1 rounded-full bg-slate-50/80 ring-1 ring-slate-200/70 p-1 lg:-translate-x-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="px-4 py-1.5 text-[13px] font-semibold rounded-full text-slate-600 hover:text-maroon-700 hover:bg-white hover:shadow-sm transition-all cursor-pointer whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right: CTA + mobile toggle */}
        <div className="flex flex-1 justify-end items-center gap-1.5 sm:gap-2">
          <button
            onClick={onDownloadClick}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/30 transition-all cursor-pointer"
          >
            <Smartphone className="w-4 h-4" />
            <span className="hidden xs:inline">Get the App</span>
            <span className="xs:hidden">App</span>
          </button>

          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel — its own centered card, dropped just below the bar */}
      {isMenuOpen && (
        <nav className="lg:hidden mx-auto max-w-4xl mt-2">
          <div className="flex flex-col gap-1 bg-white rounded-2xl border border-slate-100 shadow-lg p-2 animate-fadeIn">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-maroon-700 hover:bg-maroon-50/80 rounded-lg transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
