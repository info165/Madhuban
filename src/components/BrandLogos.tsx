import React from 'react';
import madhubunLogoSrc from '../assets/brand/madhubun-logo.png';

// Each size scales itself up slightly at the sm breakpoint, so a single element
// covers mobile → desktop without ever needing to be hidden/swapped.
const MADHUBUN_SIZE = {
  sm: 'h-7 sm:h-8',
  md: 'h-9 sm:h-11',
  lg: 'h-12 sm:h-14',
  xl: 'h-14 sm:h-[4.25rem]',
} as const;

/** Official Madhubun Educational Books logo (square icon + wordmark, maroon). */
export const MadhubunLogo: React.FC<{ className?: string; size?: keyof typeof MADHUBUN_SIZE }> = ({
  className = '',
  size = 'md',
}) => (
  <img
    src={madhubunLogoSrc}
    alt="Madhubun Educational Books"
    className={`w-auto object-contain shrink-0 ${MADHUBUN_SIZE[size]} ${className}`}
  />
);
