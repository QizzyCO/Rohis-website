
import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import About from './components/About';
import Wisdom from './components/Wisdom';
import Features from './components/Features';
import Timeline from './components/Timeline';
import News from './components/News';
import Testimonials from './components/Testimonials';
import SocialFeed from './components/SocialFeed';
import EventsCalendar from './components/EventsCalendar';
import ArtGallery from './components/ArtGallery';
import Assistant from './components/Assistant';
import Location from './components/Location';
import Footer from './components/Footer';
import OrnamentStrip from './components/OrnamentStrip';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      <Navbar />
      
      {/* Fixed Side Decorations */}
      <OrnamentStrip 
        patternId={1} 
        orientation="vertical" 
        className="fixed left-0 top-0 bottom-0 w-8 md:w-12 z-40 text-emerald-900/40 hidden xl:block border-r border-emerald-100/50" 
      />
      <OrnamentStrip 
        patternId={1} 
        orientation="vertical" 
        className="fixed right-0 top-0 bottom-0 w-8 md:w-12 z-40 text-emerald-900/40 hidden xl:block border-l border-emerald-100/50" 
      />

      <main className="xl:px-12">
        {/* Hero Section */}
        <Hero />
        
        <div className="relative">
          {/* Subtle connecting lines or shapes for aesthetic flow */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-emerald-900/10 to-transparent -translate-x-1/2 pointer-events-none"></div>
          
          <Suspense fallback={<div className="h-96 flex items-center justify-center text-emerald-500">Loading Vision...</div>}>
            <MissionVision />
          </Suspense>

          <OrnamentStrip patternId={2} className="h-24 w-full text-emerald-800 my-12 opacity-30" />

          <Suspense fallback={<div className="h-96 flex items-center justify-center text-emerald-500">Loading About...</div>}>
            <About />
          </Suspense>

          <Suspense fallback={<div className="h-96 flex items-center justify-center text-emerald-500">Loading Wisdom...</div>}>
            <Wisdom />
          </Suspense>

          <OrnamentStrip patternId={1} className="h-16 w-full text-emerald-800 opacity-20" />

          <Suspense fallback={<div className="h-96 flex items-center justify-center text-emerald-500">Loading News...</div>}>
            <News />
          </Suspense>

          <Suspense fallback={<div className="h-96 flex items-center justify-center text-emerald-500">Loading Ecosystem...</div>}>
            <Features />
          </Suspense>

          <Suspense fallback={<div className="h-96 flex items-center justify-center text-emerald-500">Loading Voices...</div>}>
            <Testimonials />
          </Suspense>

          <Suspense fallback={<div className="h-96 flex items-center justify-center text-emerald-500">Loading Timeline...</div>}>
            <Timeline />
          </Suspense>

          <OrnamentStrip patternId={2} className="h-20 w-full text-emerald-800 mt-24 opacity-20" />

          <Suspense fallback={<div className="h-96 flex items-center justify-center text-emerald-500">Loading Social...</div>}>
            <SocialFeed />
          </Suspense>

          <Suspense fallback={<div className="h-96 flex items-center justify-center text-emerald-500">Loading Location...</div>}>
            <Location />
          </Suspense>

          <Suspense fallback={<div className="h-96 flex items-center justify-center text-emerald-500">Loading Events...</div>}>
            <EventsCalendar />
          </Suspense>

          <Suspense fallback={<div className="h-96 flex items-center justify-center text-blue-500">Loading Gallery...</div>}>
            <ArtGallery />
          </Suspense>

          <Suspense fallback={<div className="h-96 flex items-center justify-center text-blue-500">Loading Assistant...</div>}>
            <Assistant />
          </Suspense>
        </div>
      </main>

      <Footer />

      {/* Futuristic Background Grain */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
    </div>
  );
};

export default App;
