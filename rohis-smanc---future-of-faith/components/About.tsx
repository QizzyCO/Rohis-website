
import React from 'react';
import { Shield, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Shield className="w-6 h-6 text-emerald-600" />,
      title: "Integrity",
      description: "Upholding the highest moral standards in every digital and physical interaction."
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-700" />,
      title: "Ukhuwah",
      description: "Strengthening the bonds of brotherhood among the students of SMAN Colomadu."
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-800" />,
      title: "Visionary",
      description: "Preparing our youth for the challenges of tomorrow with timeless wisdom."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[150px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-1 glass rounded-full text-emerald-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border-emerald-100">
              Our Identity
            </div>
            <h2 className="font-futuristic text-3xl md:text-5xl text-slate-800 mb-8 uppercase leading-tight">
              ROHIS SMAN COLOMADU: <span className="text-emerald-600 italic">The Spiritual Vanguard</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
              Founded within the halls of SMAN Colomadu, our organization is more than a club—it is a movement. 
              We are a collective of thinkers, believers, and creators dedicated to nurturing the 
              spiritual and intellectual growth of our student body.
            </p>
            <p className="text-slate-500 mb-12 italic">
              In an era dominated by rapid technological change, ROHIS SMAN Colomadu serves as a digital lighthouse, 
              guiding students toward a balanced life where faith acts as the ultimate operating system.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <div key={i} className="glass p-6 rounded-2xl border-emerald-100 hover:border-emerald-300 transition-all shadow-sm">
                  <div className="mb-4">{v.icon}</div>
                  <h4 className="text-slate-800 font-bold mb-2 uppercase text-xs tracking-widest">{v.title}</h4>
                  <p className="text-slate-600 text-xs leading-tight font-medium">{v.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group">
            <div className="absolute inset-0 bg-emerald-200/20 rounded-[3rem] blur-3xl group-hover:bg-emerald-300/30 transition-all duration-700"></div>
            <div className="relative glass p-4 rounded-[3.5rem] border-emerald-100 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=1000" 
                alt="Spirituality and Technology" 
                className="w-full rounded-[3rem] grayscale-50 group-hover:grayscale-0 transition-all duration-700 aspect-square object-cover"
              />
              <div className="absolute bottom-12 right-12 glass px-6 py-4 rounded-2xl animate-float border-emerald-100 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full animate-pulse"></div>
                  <span className="text-emerald-900 font-futuristic text-xs tracking-widest">EST. 1998</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
