
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="community-voices" className="py-24 relative overflow-hidden bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 glass rounded-full text-emerald-700 text-xs font-bold uppercase tracking-[0.3em] mb-4 border-emerald-100">
            Echoes of the Ummah
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-slate-800 mb-6">Voices of <span className="text-emerald-600">Impact</span></h2>
          <p className="max-w-2xl mx-auto text-slate-600 font-medium">
            Hear from the individuals who are shaping the future of our digital spiritual frontier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div 
              key={item.id} 
              className="glass p-10 rounded-[2.5rem] border-emerald-100 hover:border-emerald-400 transition-all duration-500 group flex flex-col shadow-lg shadow-emerald-900/5 relative"
            >
              <div className="absolute top-8 right-8 text-emerald-100 group-hover:text-emerald-200 transition-colors">
                <Quote className="w-12 h-12 rotate-180" />
              </div>
              
              <div className="flex-1">
                <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium italic relative z-10">
                  "{item.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-emerald-50">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-emerald-100 shadow-sm transition-transform group-hover:scale-105">
                  <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-slate-800 font-bold uppercase tracking-widest text-sm">{item.name}</h4>
                  <p className="text-emerald-600 text-[10px] font-bold uppercase tracking-[0.2em]">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
