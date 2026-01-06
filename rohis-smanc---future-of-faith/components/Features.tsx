
import React, { useState, useEffect, useRef } from 'react';
import { FEATURES } from '../constants';

const CountUp: React.FC<{ target: number; suffix?: string; decimals?: number; duration?: number }> = ({ 
  target, 
  suffix = '', 
  decimals = 0, 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(progress * target);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <div ref={countRef}>
      {count.toFixed(decimals)}
      {suffix}
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="community" className="py-24 bg-emerald-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-slate-800 mb-6">Our <span className="text-emerald-600">Ecosystem</span></h2>
          <p className="max-w-2xl mx-auto text-slate-600 font-medium">
            We are building a robust suite of tools to empower the modern Muslim lifestyle, 
            blending connectivity with contemplation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-[2rem] glass p-10 h-full shadow-sm hover:shadow-2xl hover:shadow-emerald-900/10 transition-all border-emerald-50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/5 rounded-full blur-3xl group-hover:bg-emerald-600/10 transition-colors"></div>
              
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 border border-emerald-100 group-hover:scale-110 group-hover:border-emerald-400 transition-all duration-500 shadow-sm">
                {item.icon}
              </div>

              <h3 className="text-2xl font-serif text-slate-800 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8 font-medium">{item.description}</p>
              
              <a href="#" className="inline-flex items-center text-emerald-600 text-sm font-bold uppercase tracking-widest hover:gap-2 transition-all">
                Learn More <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Global Stats/Counter Section */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Communities', value: 450, suffix: '+' },
            { label: 'Scholar Network', value: 1.2, suffix: 'k', decimals: 1 },
            { label: 'Global Members', value: 2.5, suffix: 'M', decimals: 1 },
            { label: 'Years of Vision', value: 25, suffix: '' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-serif text-emerald-600 mb-2">
                <CountUp 
                  target={stat.value} 
                  suffix={stat.suffix} 
                  decimals={stat.decimals || 0} 
                />
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
