
import React from 'react';
import { NEWS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const News: React.FC = () => {
  return (
    <section id="news" className="py-24 relative bg-emerald-50/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl md:text-5xl text-slate-800 mb-6">Latest <span className="text-emerald-600">Dispatches</span></h2>
            <p className="text-slate-600 font-medium">
              Stay informed with the latest breakthroughs, community stories, and updates from the ROHIS SMANC digital frontier.
            </p>
          </div>
          <button className="px-8 py-3 glass border-emerald-200 text-emerald-700 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-all">
            View Archive
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS.map((item) => (
            <div key={item.id} className="glass p-8 rounded-[2rem] border-emerald-100 hover:border-emerald-500/30 transition-all duration-500 group flex flex-col h-full shadow-sm hover:shadow-xl hover:shadow-emerald-900/5">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 border border-emerald-50 shadow-sm group-hover:scale-110 transition-transform">
                <div className="text-emerald-600">
                  {item.icon}
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700/60">{item.category}</span>
                <span className="mx-2 text-slate-300">•</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{item.date}</span>
              </div>

              <h3 className="text-xl font-serif text-slate-800 mb-4 leading-tight group-hover:text-emerald-700 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                {item.excerpt}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-emerald-50">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Read More</span>
                <div className="w-8 h-8 rounded-full glass border-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
