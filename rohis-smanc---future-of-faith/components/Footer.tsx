
import React from 'react';
import { Twitter, Instagram, Github, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-emerald-100 bg-emerald-50/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Logo className="w-12 h-12" variant="emerald" />
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-widest text-slate-800 leading-none">ROHIS</span>
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.3em] mt-1">SMAN COLOMADU</span>
              </div>
            </div>
            <p className="max-w-md text-slate-600 leading-relaxed mb-8 font-medium">
              Membentuk masa depan kehidupan spiritual melalui inovasi, pendidikan, dan kebijaksanaan kolektif di SMAN Colomadu. 
              Bergabunglah bersama kami saat kita menjelajahi persimpangan teknologi dan iman.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-emerald-700 hover:text-emerald-500 hover:bg-white hover:border-emerald-200 transition-all shadow-sm">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-800 font-bold uppercase tracking-widest text-xs mb-8">Navigasi</h4>
            <ul className="space-y-4">
              {[
                { label: 'Visi', id: 'vision' },
                { label: 'Tentang', id: 'about' },
                { label: 'Berita', id: 'news' },
                { label: 'Sosial', id: 'social' },
                { label: 'Garis Waktu', id: 'timeline' }
              ].map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-slate-500 hover:text-emerald-600 transition-colors font-bold text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-800 font-bold uppercase tracking-widest text-xs mb-8">Buletin</h4>
            <p className="text-slate-500 text-sm mb-6 font-medium">Dapatkan wawasan tentang masa depan Ummah kita.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Anda" 
                className="w-full bg-white border border-emerald-100 rounded-xl py-3 px-4 text-slate-800 focus:outline-none focus:border-emerald-600 transition-colors shadow-sm"
              />
              <button className="mt-2 w-full py-3 bg-emerald-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-900/10">
                Berlangganan
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-emerald-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-[10px] uppercase tracking-widest font-bold">
          <p>© 2024 ROHIS SMAN Colomadu. Seluruh hak cipta dilindungi.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-emerald-600">Kebijakan Privasi</a>
            <a href="#" className="hover:text-emerald-600">Ketentuan Layanan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
