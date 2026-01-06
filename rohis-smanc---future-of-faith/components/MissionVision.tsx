
import React, { useEffect, useRef } from 'react';

const MissionVision: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal inline-block px-4 py-1 glass rounded-full text-emerald-700 text-xs font-bold uppercase tracking-[0.3em] mb-8 border-emerald-100">
            Our Purpose
          </div>
          
          <h2 className="reveal font-serif text-4xl md:text-6xl text-slate-800 mb-12 leading-tight">
            Illuminating the path where <span className="text-emerald-600">tradition</span> meets <span className="text-emerald-800 italic">infinite possibility</span>.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="reveal glass p-10 rounded-[2.5rem] border-emerald-100 shadow-xl shadow-emerald-900/5">
              <h3 className="text-emerald-700 font-serif text-2xl mb-4">The Mission</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                To empower a tech-forward generation of Muslims with accessible, authentic knowledge, fostering a community that leads the global dialogue on ethics, science, and spirituality.
              </p>
            </div>
            <div className="reveal glass p-10 rounded-[2.5rem] border-emerald-100 shadow-xl shadow-emerald-900/5" style={{ transitionDelay: '0.2s' }}>
              <h3 className="text-emerald-800 font-serif text-2xl mb-4">The Vision</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                A world where spiritual excellence drives technological progress, creating a harmonious balance between the inner soul and the outer world in the digital age.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
