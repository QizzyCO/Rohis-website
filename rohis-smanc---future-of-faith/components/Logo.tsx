
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'emerald';
}

const Logo: React.FC<LogoProps> = ({ className = 'w-10 h-10', variant = 'emerald' }) => {
  const getColor = () => {
    switch (variant) {
      case 'light': return 'white';
      case 'dark': return '#1e293b';
      case 'emerald': return '#059669';
      default: return 'currentColor';
    }
  };

  const color = getColor();

  return (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
        {/* Main Background Circle */}
        <circle cx="50" cy="50" r="48" fill={variant === 'emerald' ? 'transparent' : 'transparent'} stroke={color} strokeWidth="1" />
        
        {/* Crescent Moon */}
        <path 
          d="M 45,15 A 35,35 0 1,0 45,85 A 28,28 0 1,1 45,15" 
          fill={color} 
        />
        
        {/* Star */}
        <path 
          d="M 52,25 L 54,32 L 61,32 L 56,36 L 58,43 L 52,39 L 46,43 L 48,36 L 43,32 L 50,32 Z" 
          fill={color} 
        />

        {/* Mosque Dome */}
        <path 
          d="M 35,75 L 65,75 L 65,70 C 65,55 35,55 35,70 Z" 
          fill={color} 
        />
        
        {/* Minaret */}
        <rect x="68" y="45" width="8" height="30" fill={color} rx="1" />
        <path d="M 68,45 L 76,45 L 72,35 Z" fill={color} />
        <circle cx="72" cy="33" r="1.5" fill={color} />

        {/* Interior Text Path (Hidden reference for circular text) */}
        <defs>
          <path id="circlePath" d="M 22,50 A 28,28 0 1,1 22,51" />
        </defs>

        {/* Tagline around crescent */}
        <text className="text-[5px] font-bold uppercase tracking-widest" fill={color} opacity="0.6">
          <textPath href="#circlePath" startOffset="50%">
            investasi akhirat, dunia mengikuti
          </textPath>
        </text>

        {/* Central Logo Text */}
        <text x="50" y="65" textAnchor="middle" fill={variant === 'light' ? '#064e3b' : 'white'} className="text-[5px] font-bold">
          ROHIS
        </text>
        <text x="50" y="71" textAnchor="middle" fill={variant === 'light' ? '#064e3b' : 'white'} className="text-[4px] font-bold">
          SMAN COLOMADU
        </text>
      </svg>
    </div>
  );
};

export default Logo;
