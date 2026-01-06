
import React from 'react';
import { SOCIAL_CHANNELS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const SocialFeed: React.FC = () => {
  return (
    <section id="social" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="font-serif text-4xl md:text-5xl text-slate-800 mb-6">Digital <span className="text-emerald-600">Resonance</span></h2>
            <p className="text-slate-600 font-medium text-lg leading-relaxed">
              Connect with our decentralized ecosystem across the digital landscape. 
              Be part of the global conversation on faith and innovation.
            </p>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-4 w-full">
            {SOCIAL_CHANNELS.map((channel) => (
              <a 
                key={channel.name} 
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass p-6 rounded-3xl border-emerald-50 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group ${channel.color}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                    {channel.icon}
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <h4 className="text-slate-800 font-bold text-sm mb-1">{channel.name}</h4>
                  <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">{channel.handle}</p>
                  <p className="mt-3 text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em]">{channel.stats}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Feature Banner */}
        <div className="relative glass rounded-[3rem] p-12 md:p-20 overflow-hidden border-emerald-100 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-3xl md:text-4xl text-slate-800 mb-4">Join our <span className="italic text-emerald-700">Inner Circle</span></h3>
              <p className="text-slate-600 font-medium">Get exclusive access to virtual gatherings and early insights.</p>
            </div>
            <button className="px-10 py-5 bg-emerald-800 text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-900/20 active:scale-95">
              Connect via Discord
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
