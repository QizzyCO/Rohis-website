
import React from 'react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 relative overflow-hidden bg-emerald-50/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 glass rounded-full text-emerald-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 border-emerald-100">
            Our Sanctuary
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-slate-800 mb-6">Find <span className="text-emerald-600">Us</span></h2>
          <p className="max-w-2xl mx-auto text-slate-600 font-medium">
            Visit our physical hub at SMAN Colomadu. Our doors are always open for spiritual growth and community dialogue.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Info Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass p-8 rounded-[2.5rem] border-emerald-100 h-full flex flex-col justify-center shadow-lg shadow-emerald-900/5">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <MapPin className="text-emerald-700 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-bold uppercase text-xs tracking-widest mb-1">Address</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Jl. Adi Sucipto No.KM. 11, Paulan, Kec. Colomadu, Kabupaten Karanganyar, Jawa Tengah 57176</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <Phone className="text-emerald-700 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-bold uppercase text-xs tracking-widest mb-1">Contact Person</h4>
                    <p className="text-slate-600 text-sm">+6285953937227</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <Mail className="text-emerald-700 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-bold uppercase text-xs tracking-widest mb-1">Email</h4>
                    <p className="text-slate-600 text-sm">contact@rohissmanc.org</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => window.open('https://maps.app.goo.gl/vX6vX6vX6vX6vX6vX', '_blank')}
                className="mt-12 w-full py-4 bg-emerald-600 text-white rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-900/20 active:scale-95"
              >
                <Navigation className="w-4 h-4" /> Open in Maps
              </button>
            </div>
          </div>

          {/* Map Frame */}
          <div className="lg:col-span-2 relative group">
            <div className="absolute inset-0 bg-emerald-200/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative glass p-3 rounded-[3rem] border-emerald-100 shadow-2xl overflow-hidden h-[450px] lg:h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.292794714684!2d110.78798907489248!3d-7.543013674463725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1405514fdc3d%3A0x6b077b773fc0d05a!2sSMAN%20Colomadu!5e0!3m2!1sid!2sid!4v1767694000685!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
