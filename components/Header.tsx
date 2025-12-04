import React from 'react';
import { Twitter, Send, Activity } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full flex justify-between items-start md:items-center">
        {/* Logo / Brand Mark (Top Left) */}
        <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity cursor-default">
            <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                <span className="font-serif text-gold text-lg font-bold">W</span>
            </div>
            <span className="font-serif tracking-[0.2em] text-xs text-slate-400 hidden md:block">
                EST. 2025
            </span>
        </div>

        {/* Sensor Array (Top Right) */}
        <div className="flex items-center gap-4 md:gap-6">
            <SocialIcon 
                href="https://twitter.com" 
                icon={<Twitter size={18} />} 
            />
            <SocialIcon 
                href="https://telegram.org" 
                icon={<Send size={18} />} 
            />
            <div className="group relative flex flex-col items-center gap-1 cursor-pointer">
                <div className="relative w-10 h-10 md:w-12 md:h-12 border border-teal-900/50 bg-black/40 rounded-full flex items-center justify-center hover:border-turquoise/50 transition-colors duration-300">
                     <img 
                        src="https://i.postimg.cc/j56WKrBk/ADS-2025-12-03T201034-818.png" 
                        alt="Pump.fun" 
                        className="w-6 h-6 md:w-7 md:h-7 opacity-70 group-hover:opacity-100 transition-opacity"
                     />
                     <div className="absolute top-0 right-0 w-2 h-2 bg-turquoise rounded-full animate-pulse shadow-[0_0_8px_#2dd4bf]"></div>
                </div>
                <span className="text-[0.5rem] tracking-widest text-teal-800 uppercase font-sans">PUMP.FUN</span>
            </div>
        </div>
    </header>
  );
};

interface SocialIconProps {
    href: string;
    icon: React.ReactNode;
    label?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-1">
        <div className="w-10 h-10 md:w-12 md:h-12 border border-slate-800 bg-black/40 rounded-full flex items-center justify-center text-slate-500 group-hover:text-turquoise group-hover:border-turquoise/30 transition-all duration-300 backdrop-blur-sm">
            {icon}
        </div>
        {label && (
            <span className="text-[0.5rem] tracking-widest text-slate-700 group-hover:text-turquoise/70 uppercase font-sans transition-colors">
                {label}
            </span>
        )}
    </a>
);