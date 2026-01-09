
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Intro: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-scroll indicator or skip logic could go here if it were a splash screen,
  // but for now we'll make it a full-height starting section.

  return (
    <section className="relative h-screen w-full bg-[#fdfcf8] overflow-hidden flex flex-col items-center justify-center">
      {/* Atmosphere / Horizon */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-[40%] left-1/2 -translate-x-1/2 w-[150%] h-[60%] bg-gradient-to-t from-emerald-100/50 via-transparent to-transparent blur-3xl rounded-[100%]"></div>
      </div>

      {/* Shadow Ground */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-slate-900/5 z-10 overflow-hidden">
        {/* Ground grid for perspective */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '100px 100px',
            transform: 'perspective(500px) rotateX(60deg) translateY(-100px)',
            transformOrigin: 'top'
          }}
        ></div>
        {/* The Actual Shadow Ground color */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-200/50 to-emerald-50/80 backdrop-blur-[2px]"></div>
      </div>

      {/* Shadow Man Animation */}
      <div className="absolute bottom-[40%] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <div className="relative">
          {/* Silhouette SVG with Walking Animation */}
          <svg 
            width="80" 
            height="140" 
            viewBox="0 0 100 150" 
            className="animate-pulse opacity-90 drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"
          >
            <circle cx="50" cy="25" r="15" fill="#1e293b" />
            <path 
              d="M50 40 L50 90 L30 140 M50 90 L70 140 M50 50 L20 80 M50 50 L80 80" 
              stroke="#1e293b" 
              strokeWidth="15" 
              strokeLinecap="round" 
              className="animate-walk"
            />
          </svg>
          
          {/* Reflection / Ground Shadow */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900/20 blur-md rounded-full scale-x-150 animate-shadow-breath"></div>
        </div>
      </div>

      {/* Text Overlay */}
      <div className="relative z-30 text-center px-6">
        <h2 className="font-futuristic text-xl md:text-3xl text-slate-800 tracking-[0.4em] uppercase mb-4 opacity-0 animate-fade-in-up">
          A Journey of Faith
        </h2>
        <p className="text-emerald-700/60 font-serif italic text-lg tracking-widest opacity-0 animate-fade-in-up delay-700">
          "Step into the Light of Guidance"
        </p>
      </div>

      {/* Interaction Prompt */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-slate-400 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to Begin</span>
        <ChevronDown className="w-5 h-5" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes walk {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.98) translateY(2px); }
        }
        @keyframes shadow-breath {
          0%, 100% { opacity: 0.2; transform: translateX(-50%) scaleX(1.5); }
          50% { opacity: 0.4; transform: translateX(-50%) scaleX(1.7); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.5s forwards ease-out;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .delay-700 { animation-delay: 0.7s; }
      `}} />
    </section>
  );
};

export default Intro;
