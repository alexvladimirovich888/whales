import React from 'react';

export const ProtocolBlock: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-end w-full relative">
      
      {/* Text Content */}
      <div className="flex flex-col md:items-end w-full max-w-sm text-center md:text-right backdrop-blur-sm bg-black/20 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none border border-slate-800/50 md:border-none">
        <h2 className="font-serif text-turquoise/80 text-sm md:text-base tracking-[0.25em] mb-4 uppercase border-b border-turquoise/20 pb-2 inline-block">
            The Acquisition Protocol
        </h2>
        <p className="font-sans text-slate-400 font-light text-xs leading-relaxed mb-4">
            Acquisition of <span className="text-slate-200 font-medium">$SAVETHEWHALES</span> tokens grants the public a moral obligation and a symbolic stake in stability.
        </p>
        <div className="flex flex-col gap-1 text-[10px] uppercase tracking-widest text-gold mb-4 font-serif">
            <span>Tokenomics: 0% Tax</span>
            <span>100% Liquidity</span>
        </div>
        <p className="font-serif italic text-slate-500 text-[10px] border-t border-slate-800 pt-2 w-full">
            "The ultimate gesture of loyalty to the rich."
        </p>
      </div>

    </div>
  );
};