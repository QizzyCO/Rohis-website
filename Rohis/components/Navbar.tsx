import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMobileMenuOpen(false);
    }
  };

  // Nav items mapped to their corresponding section IDs (Noor AI removed)
  const navItems = [
    { label: 'Visi', id: 'vision' },
    { label: 'Tentang', id: 'about' },
    { label: 'Berita', id: 'news' },
    { label: 'Lokasi', id: 'location' },
    { label: 'Sosial', id: 'social' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 border-b border-emerald-100' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Logo className="w-12 h-12 transition-transform group-hover:scale-110" variant="emerald" />
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl tracking-widest text-slate-800 text-glow leading-none">ROHIS</span>
            <span className="text-[8px] font-bold text-emerald-600 uppercase tracking-[0.3em] mt-1">SMAN COLOMADU</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => scrollToSection(item.id)} 
              className="text-slate-600 hover:text-emerald-600 transition-colors text-sm uppercase tracking-widest font-bold"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('social')}
            className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-lg shadow-emerald-900/10 active:scale-95"
          >
            Gabung
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300 shadow-2xl">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => scrollToSection(item.id)} 
              className="text-left text-xl font-serif text-slate-800 border-b border-emerald-50 pb-2 px-2 py-1 hover:text-emerald-600 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('social')}
            className="w-full py-4 bg-emerald-600 text-white rounded-xl text-sm font-bold uppercase tracking-widest active:scale-95 transition-transform"
          >
            Gabung Sekarang
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;