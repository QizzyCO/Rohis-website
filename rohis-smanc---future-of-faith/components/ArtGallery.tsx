
import React from 'react';
import { GALLERY } from '../constants';
import { Maximize2 } from 'lucide-react';

const ArtGallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-emerald-900/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 glass rounded-full text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-4 border-blue-100">
            Transendensi Estetika
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-slate-800 mb-6">Geometri <span className="text-blue-600">Suci</span></h2>
          <p className="max-w-2xl mx-auto text-slate-600 font-medium">
            Menjelajahi bahasa visual ilahi melalui interpretasi digital resolusi tinggi dari 
            kaligrafi Kufi klasik dan pola geometris yang memukau.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GALLERY.map((art) => (
            <div 
              key={art.id} 
              className="holographic-card group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-lg"
            >
              <img 
                src={art.image} 
                alt={art.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{art.type}</span>
                <h3 className="text-2xl font-serif text-white mb-6">{art.title}</h3>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center border-white/20">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-white">Lihat Detail</span>
                </div>
              </div>

              {/* Decorative Geometric Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-[url('https://www.transparenttextures.com/patterns/az-subtle.png')]"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 glass text-slate-600 hover:text-emerald-700 hover:bg-white rounded-2xl font-bold uppercase tracking-widest transition-all">
            Masuk ke Galeri Virtual
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArtGallery;
