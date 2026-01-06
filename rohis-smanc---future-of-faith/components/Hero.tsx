
import React from 'react';
import { ChevronDown } from 'lucide-react';
import OrnamentStrip from './OrnamentStrip';

const Hero: React.FC = () => {
  return (
    <section id="vision" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-[120px] animate-pulse delay-700"></div>
        {/* Subtle decorative ornament at top corners */}
        <div className="absolute top-10 left-10 w-24 h-24 opacity-10 rotate-45 border-2 border-emerald-900"></div>
        <div className="absolute top-10 right-10 w-24 h-24 opacity-10 -rotate-45 border-2 border-emerald-900"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex-1 flex flex-col justify-center">
        <h1 className="font-futuristic text-4xl md:text-6xl lg:text-7xl mb-10 tracking-tighter leading-none uppercase">
          <span className="block text-slate-800 mb-2">ISLAM COME</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-900 italic text-glow-strong">
            FOR HELP YOUR LIFE.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-600 text-lg md:text-xl leading-relaxed mb-12 font-medium">
          Bridging timeless spiritual values with the cutting edge of tomorrow. 
          Step into a global community where tradition meets technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold uppercase tracking-widest overflow-hidden transition-all hover:bg-emerald-700 shadow-xl shadow-emerald-900/10">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform"></div>
          </button>
          <button className="px-8 py-4 glass text-emerald-800 rounded-xl font-bold uppercase tracking-widest hover:bg-white/90 transition-all border-emerald-100">
            Explore Vision
          </button>
        </div>
      </div>

      <div className="relative w-full h-12 mt-auto">
        <OrnamentStrip patternId={1} className="h-full w-full text-emerald-900 opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce glass w-10 h-10 rounded-full flex items-center justify-center border-emerald-100 shadow-sm cursor-pointer">
          <ChevronDown className="text-emerald-600 w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
