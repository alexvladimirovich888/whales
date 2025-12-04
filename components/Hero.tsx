import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto text-center md:pt-10">
      <div className="mb-6 md:mb-8 overflow-hidden">
        <p className="font-serif italic text-lg md:text-2xl text-slate-500 tracking-wider animate-float opacity-80">
          "Their Prosperity is a Global Imperative."
        </p>
      </div>

      <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl leading-tight tracking-wide text-slate-300 uppercase drop-shadow-2xl">
        The Emergency <br className="md:hidden" />
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold via-[#eec563] to-amber-700 font-black relative inline-block mx-2 md:mx-4">
            FUND
            {/* Glow effect under the word FUND */}
            <span className="absolute -inset-1 bg-gold/10 blur-xl rounded-full -z-10"></span>
        </span> 
        for <br className="hidden md:block" /> Liquidity Pool Whales
      </h1>
      
      {/* Decorative Line */}
      <div className="w-24 md:w-48 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent mt-8 mx-auto"></div>
    </div>
  );
};