
import React from 'react';

interface OrnamentStripProps {
  className?: string;
  orientation?: 'vertical' | 'horizontal';
  patternId?: number;
}

const OrnamentStrip: React.FC<OrnamentStripProps> = ({ className = '', orientation = 'horizontal', patternId = 1 }) => {
  // Pattern 1: Geometric Interlacing (Inspired by the left-most pattern)
  const Pattern1 = () => (
    <pattern id="islamicPattern1" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <path 
        d="M20 0L40 20L20 40L0 20L20 0ZM20 5.66L5.66 20L20 34.34L34.34 20L20 5.66Z" 
        fill="currentColor" 
        fillOpacity="0.15"
      />
      <rect x="18" y="0" width="4" height="40" fill="currentColor" fillOpacity="0.1" />
      <rect x="0" y="18" width="40" height="4" fill="currentColor" fillOpacity="0.1" />
    </pattern>
  );

  // Pattern 2: Star Knot (Inspired by the right-most pattern)
  const Pattern2 = () => (
    <pattern id="islamicPattern2" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
      <path 
        d="M30 0 L38 22 L60 30 L38 38 L30 60 L22 38 L0 30 L22 22 Z" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeOpacity="0.2"
      />
      <path 
        d="M30 10 L34 26 L50 30 L34 34 L30 50 L26 34 L10 30 L26 26 Z" 
        fill="currentColor" 
        fillOpacity="0.1"
      />
    </pattern>
  );

  const isVertical = orientation === 'vertical';

  return (
    <div className={`pointer-events-none overflow-hidden ${className}`}>
      <svg width="100%" height="100%" className="w-full h-full">
        <defs>
          <Pattern1 />
          <Pattern2 />
        </defs>
        <rect 
          width="100%" 
          height="100%" 
          fill={`url(#islamicPattern${patternId})`} 
        />
      </svg>
    </div>
  );
};

export default OrnamentStrip;
