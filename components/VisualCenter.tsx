import React from 'react';
import { Anchor } from 'lucide-react';

export const VisualCenter: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden">
      {/* The Whale Silhouette (Background Ambience) */}
      <div className="absolute w-[150%] md:w-[80%] h-auto opacity-10 blur-[1px] animate-pulse-slow mix-blend-screen transform translate-y-10">
         <img 
            src="https://images.unsplash.com/photo-1568430462989-44163eb1752f?q=80&w=2946&auto=format&fit=crop" 
            alt="Whale Silhouette" 
            className="w-full h-full object-cover rounded-full mask-image-linear-gradient grayscale brightness-50 contrast-150"
            style={{ 
                maskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)'
            }}
         />
      </div>

      {/* Center Content Group: Seal + Button */}
      <div className="relative z-10 md:mt-24 flex flex-col items-center gap-10 animate-float">
         
         {/* The Official Seal */}
         <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-[3px] border-gold/40 bg-gradient-to-br from-slate-950 to-black flex items-center justify-center relative overflow-hidden shadow-[0_0_80px_rgba(212,175,55,0.15)]">
            
            {/* The "Mourning Whale" graphic approximation - Large Scale */}
            <svg viewBox="0 0 100 100" className="w-40 h-40 md:w-60 md:h-60 fill-slate-900 stroke-gold/90 stroke-[0.5] drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                {/* Stylized Whale Shape */}
                <path d="M10,50 Q25,20 50,50 T90,50 Q80,80 50,70 T10,50 Z" />
                {/* Eye */}
                <circle cx="35" cy="45" r="1.5" className="fill-gold" />
                {/* Detail Lines */}
                <path d="M45,55 Q55,60 65,55" className="fill-none stroke-gold/30 stroke-[0.5]" />
            </svg>
            
            {/* Inner Ring */}
            <div className="absolute inset-4 rounded-full border border-gold/10"></div>
            
            {/* Circular Text */}
            <div className="absolute inset-0 w-full h-full animate-[spin_30s_linear_infinite] opacity-50">
               <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path id="curve-large" d="M 50, 50 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" fill="transparent"/>
                  <text className="text-[6px] fill-gold font-serif uppercase tracking-[0.2em] font-bold">
                     <textPath href="#curve-large">
                        The Emergency Fund for Liquidity Pool Whales • MCMXXIV •
                     </textPath>
                  </text>
               </svg>
            </div>

            {/* Shimmer overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] animate-shimmer pointer-events-none"></div>
         </div>
         
         {/* Glow behind the seal */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-3xl -z-10 rounded-full"></div>

         {/* CTA Button (Moved here) */}
         <div className="pointer-events-auto">
            <button className="relative group overflow-hidden bg-black/60 backdrop-blur-md border border-turquoise/30 px-12 py-5 transition-all duration-500 hover:border-turquoise hover:bg-turquoise/10 shadow-[0_0_30px_rgba(45,212,191,0.1)] hover:shadow-[0_0_50px_rgba(45,212,191,0.3)]">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-turquoise/0 via-turquoise/10 to-turquoise/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="flex items-center gap-4 relative z-10">
                    <Anchor className="text-turquoise w-6 h-6 rotate-45" />
                    <div className="flex flex-col items-start text-left">
                        <span className="font-serif text-turquoise text-xl tracking-widest uppercase">
                            Invest in Stability
                        </span>
                        <span className="font-sans text-[10px] text-slate-400 uppercase tracking-[0.2em] group-hover:text-slate-200 transition-colors">
                            (Acquire $SAVETHEWHALES)
                        </span>
                    </div>
                </div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-turquoise opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-turquoise opacity-50"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-turquoise opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-turquoise opacity-50"></div>
            </button>
         </div>

      </div>
    </div>
  );
};