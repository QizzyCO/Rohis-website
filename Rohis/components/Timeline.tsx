
import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { EVENTS } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 glass rounded-full text-emerald-700 text-xs font-bold uppercase tracking-[0.3em] mb-4 border-emerald-100">
            Catatan Masa Depan
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-slate-800 mb-6">Garis Waktu <span className="text-emerald-600">Acara</span></h2>
          <p className="max-w-2xl mx-auto text-slate-600 font-medium">
            Tandai kalender digital Anda untuk pencapaian dan pertemuan besar kami yang akan datang.
          </p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-100 via-emerald-500 to-emerald-100 hidden md:block"></div>

          <div className="space-y-24">
            {EVENTS.map((event, idx) => (
              <div key={event.id} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full glass border-2 border-emerald-500 flex items-center justify-center z-10 bg-white hidden md:flex">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16'} reveal active`}>
                  <div className="glass p-8 rounded-[2rem] border-emerald-100 hover:border-emerald-400 transition-all duration-500 shadow-xl shadow-emerald-900/5 group">
                    <div className="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(event.date).toLocaleDateString('id-ID', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <h3 className="text-2xl font-serif text-slate-800 mb-4 group-hover:text-emerald-700 transition-colors">{event.title}</h3>
                    <div className="space-y-2 text-slate-500 text-sm font-medium">
                      <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-300" /> {event.time}</div>
                      <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-300" /> {event.location}</div>
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        {event.type}
                      </span>
                      <button className="text-emerald-600 text-xs font-bold uppercase tracking-widest hover:translate-x-2 transition-transform">
                        Detail →
                      </button>
                    </div>
                  </div>
                </div>

                {/* Date Label for Mobile/Opposite Side */}
                <div className={`hidden md:block w-[45%] text-slate-300 text-5xl font-serif opacity-20 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  {new Date(event.date).getFullYear()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
