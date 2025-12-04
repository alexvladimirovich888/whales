import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MissionBlock } from './components/MissionBlock';
import { ProtocolBlock } from './components/ProtocolBlock';
import { VisualCenter } from './components/VisualCenter';
import { CTA } from './components/CTA';

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`relative min-h-screen w-full bg-anthracite overflow-hidden selection:bg-gold selection:text-anthracite transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep ocean gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#051120] to-black opacity-90"></div>
        
        {/* Water caustic simulation */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)]"></div>
      </div>

      {/* Main Grid Layout */}
      <div className="relative z-10 w-full h-full md:h-screen p-4 md:p-8 grid grid-cols-1 md:grid-cols-12 md:grid-rows-[auto_1fr_1fr_auto] gap-6 md:gap-4 box-border">
        
        {/* Header (Absolute or Row 1) */}
        <div className="col-span-1 md:col-span-12 row-start-1 md:row-auto">
           <Header />
        </div>

        {/* Visual Center (Background Layer within Grid) */}
        {/* This sits physically behind content in z-index but is placed here for structure. 
            We use absolute positioning inside the component to center it. */}
        <VisualCenter />

        {/* Block I: Hero Title */}
        <div className="col-span-1 md:col-span-12 md:row-start-2 flex flex-col justify-center items-center text-center z-20 mt-12 md:mt-0">
          <Hero />
        </div>

        {/* Block III: Mission (Left) */}
        <div className="col-span-1 md:col-span-4 md:row-start-3 flex items-center md:items-start z-20">
          <MissionBlock />
        </div>

        {/* Block IV: Protocol (Right) */}
        <div className="col-span-1 md:col-span-4 md:col-start-9 md:row-start-3 flex items-center md:items-end md:justify-end z-20">
          <ProtocolBlock />
        </div>

        {/* Block V: CTA (Bottom Left) */}
        <div className="col-span-1 md:col-span-12 md:row-start-4 flex items-end pb-4 md:pb-0 z-30">
          <CTA />
        </div>
        
      </div>
    </div>
  );
}