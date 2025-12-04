import React from 'react';

export const MissionBlock: React.FC = () => {
  return (
    <div className="relative border-l-2 border-slate-800 pl-6 md:pl-8 py-2 md:max-w-md backdrop-blur-sm bg-black/20 md:bg-transparent">
      <h2 className="font-serif text-gold-dim text-sm md:text-base tracking-[0.25em] mb-4 uppercase">
        Mandate and Solicitude
      </h2>
      <p className="font-sans text-slate-400 font-light leading-relaxed text-xs md:text-sm text-justify">
        <span className="text-slate-200 font-medium">This FUND</span> is the ultimate insurance policy against impermanent loss and psychological distress among top-tier liquidity providers. 
      </p>
      <div className="h-4"></div>
      <p className="font-sans text-slate-400 font-light leading-relaxed text-xs md:text-sm text-justify">
        We recognize the profound tragedy of a large portfolio facing temporary illiquidity. Our purpose is not profitability, but the protection of market structure itself by ensuring the comfort of our financial titans.
      </p>
    </div>
  );
};