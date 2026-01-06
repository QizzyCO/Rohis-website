
import React from 'react';
import { Shield, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Shield className="w-6 h-6 text-emerald-600" />,
      title: "Integritas",
      description: "Menjunjung tinggi standar moral tertinggi dalam setiap interaksi digital maupun fisik."
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-700" />,
      title: "Ukhuwah",
      description: "Memperkuat tali persaudaraan di antara seluruh siswa SMAN Colomadu."
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-800" />,
      title: "Visioner",
      description: "Mempersiapkan pemuda kita menghadapi tantangan hari esok dengan hikmah abadi."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[150px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-1 glass rounded-full text-emerald-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border-emerald-100">
              Identitas Kami
            </div>
            <h2 className="font-futuristic text-3xl md:text-5xl text-slate-800 mb-8 uppercase leading-tight">
              ROHIS SMAN COLOMADU: <span className="text-emerald-600 italic">Garda Terdepan Spiritual</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
              Didirikan di dalam koridor SMAN Colomadu, organisasi kami lebih dari sekadar klub—ini adalah sebuah gerakan. 
              Kami adalah kumpulan pemikir, orang beriman, dan kreator yang berdedikasi untuk memelihara pertumbuhan spiritual dan intelektual siswa.
            </p>
            <p className="text-slate-500 mb-12 italic">
              Di era yang didominasi oleh perubahan teknologi yang cepat, ROHIS SMAN Colomadu berfungsi sebagai mercusuar digital, 
              membimbing siswa menuju kehidupan yang seimbang di mana iman bertindak sebagai sistem operasi utama.
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
                alt="Spritualitas dan Teknologi" 
                className="w-full rounded-[3rem] grayscale-50 group-hover:grayscale-0 transition-all duration-700 aspect-square object-cover"
              />
              <div className="absolute bottom-12 right-12 glass px-6 py-4 rounded-2xl animate-float border-emerald-100 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full animate-pulse"></div>
                  <span className="text-emerald-900 font-futuristic text-xs tracking-widest">BERDIRI 1998</span>
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
