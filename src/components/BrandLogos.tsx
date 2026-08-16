import React from 'react';

export const MadhubunLogo: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' }> = ({
  className = '',
  size = 'md'
}) => {
  const dimensions = {
    sm: { container: 'h-8', logoSize: 32, textClass: 'text-[11px]', subTextClass: 'text-[7px]' },
    md: { container: 'h-11', logoSize: 44, textClass: 'text-sm', subTextClass: 'text-[9px]' },
    lg: { container: 'h-14', logoSize: 56, textClass: 'text-lg', subTextClass: 'text-[11px]' }
  }[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Madhubun Icon Box */}
      <div className="relative bg-[#881337] p-2 rounded-lg shadow-xs shrink-0 flex items-center justify-center">
        <svg width={dimensions.logoSize * 0.75} height={dimensions.logoSize * 0.75} viewBox="0 0 100 100" fill="none">
          {/* Top circle dot */}
          <circle cx="50" cy="14" r="8" fill="white" />
          {/* Center stem */}
          <path d="M47 28 C47 28 53 28 53 28 L53 85 C53 85 47 85 47 85 Z" fill="white" />
          {/* Left fan leaves */}
          <path d="M44 32 L20 38 L30 46 L44 42 Z" fill="white" />
          <path d="M44 45 L15 54 L26 62 L44 56 Z" fill="white" />
          <path d="M44 59 L12 70 L24 78 L44 70 Z" fill="white" />
          {/* Right fan leaves */}
          <path d="M56 32 L80 38 L70 46 L56 42 Z" fill="white" />
          <path d="M56 45 L85 54 L74 62 L56 56 Z" fill="white" />
          <path d="M56 59 L88 70 L76 78 L56 70 Z" fill="white" />
        </svg>
      </div>

      {/* Madhubun Text */}
      <div className="flex flex-col justify-center">
        <div className={`font-serif font-black tracking-wider text-[#9F1239] uppercase leading-none ${dimensions.textClass}`}>
          MADHUBUN<span className="text-[0.6em] align-top font-sans font-normal ml-0.5">®</span>
        </div>
        <div className={`font-sans font-medium tracking-[0.18em] text-[#881337] uppercase leading-tight mt-0.5 ${dimensions.subTextClass}`}>
          EDUCATIONAL BOOKS
        </div>
      </div>
    </div>
  );
};

// Backwards compatibility alias
export const MadhubanLogo = MadhubunLogo;

export const ClassMapLogo: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' }> = ({
  className = '',
  size = 'md'
}) => {
  const iconSizes = { sm: 20, md: 28, lg: 36 }[size];
  const textClasses = { sm: 'text-sm', md: 'text-lg', lg: 'text-2xl' }[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Orange Chart & Line Icon */}
      <svg width={iconSizes} height={iconSizes} viewBox="0 0 100 80" fill="none">
        {/* Trend line with dots */}
        <path d="M15 50 L40 25 L60 40 L85 15" stroke="#F97316" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="15" cy="50" r="7" fill="#F97316" />
        <circle cx="40" cy="25" r="7" fill="#F97316" />
        <circle cx="60" cy="40" r="7" fill="#F97316" />
        <circle cx="85" cy="15" r="7" fill="#F97316" />
        {/* Bar chart pillars */}
        <rect x="10" y="58" width="12" height="20" rx="2" fill="#F97316" />
        <rect x="35" y="45" width="12" height="33" rx="2" fill="#F97316" />
        <rect x="60" y="52" width="12" height="26" rx="2" fill="#F97316" />
        <rect x="85" y="28" width="12" height="50" rx="2" fill="#F97316" />
      </svg>
      {/* ClassMap Text */}
      <span className={`font-extrabold tracking-tight text-[#F97316] ${textClasses}`}>
        ClassMap
      </span>
    </div>
  );
};
