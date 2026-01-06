
import React, { useState, useMemo } from 'react';
import { Calendar as CalendarIcon, MapPin, Clock, Filter, ArrowRight } from 'lucide-react';
import { EVENTS } from '../constants';

const EventsCalendar: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const types = ['All', 'Community', 'Spiritual', 'Education'];

  const filteredEvents = useMemo(() => {
    return filter === 'All' ? EVENTS : EVENTS.filter(e => e.type === filter);
  }, [filter]);

  return (
    <section id="events" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl md:text-5xl text-slate-100 mb-6">Global <span className="text-emerald-400">Assembly</span></h2>
            <p className="text-slate-400">Connect with the Ummah across physical and digital boundaries.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 glass p-1 rounded-2xl">
            {types.map(t => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${filter === t ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-900/40' : 'text-slate-500 hover:text-slate-300'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, idx) => (
            <div 
              key={event.id} 
              className="group glass rounded-[2.5rem] overflow-hidden flex flex-col h-full border-white/5 hover:border-emerald-500/20 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold text-emerald-400 uppercase tracking-widest border border-white/10">
                    {event.type}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif text-slate-100 mb-6 group-hover:text-emerald-400 transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-slate-400 text-sm">
                    <CalendarIcon className="w-4 h-4 text-emerald-500" />
                    {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 text-sm">
                    <Clock className="w-4 h-4 text-emerald-500" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 text-sm">
                    <MapPin className="w-4 h-4 text-emerald-500" />
                    {event.location}
                  </div>
                </div>

                <button className="mt-auto flex items-center justify-between w-full py-4 px-6 glass rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all group/btn">
                  Secure Spot <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;
