
import React from 'react';
import { PILLARS } from '../constants';

const Wisdom: React.FC = () => {
  return (
    <section id="wisdom" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl md:text-5xl text-slate-800 mb-6">Pillars of <span className="text-emerald-600">Excellence</span></h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Our foundation remains unshakable. We present the core tenets of our faith through a lens of modern clarity and accessibility.
            </p>
          </div>
          <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-transparent via-emerald-200 to-transparent mx-10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {PILLARS.map((pillar, idx) => (
            <div 
              key={pillar.name} 
              className="glass group p-8 rounded-3xl hover:border-emerald-400 transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-between min-h-[300px] shadow-sm hover:shadow-xl hover:shadow-emerald-900/5"
            >
              <div>
                <div className="text-4xl font-serif text-emerald-100 mb-4 group-hover:text-emerald-200 transition-colors">
                  0{idx + 1}
                </div>
                <h3 className="text-2xl font-serif text-slate-800 mb-2">{pillar.name}</h3>
                <p className="text-slate-500 text-sm font-medium group-hover:text-slate-600 transition-colors">{pillar.description}</p>
              </div>
              <div className="mt-8 text-right">
                <span className="font-serif text-3xl text-emerald-200 group-hover:text-emerald-600 transition-colors">
                  {pillar.arabic}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wisdom;
