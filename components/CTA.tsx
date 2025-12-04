import React from 'react';

export const CTA: React.FC = () => {
  return (
    <div className="w-full flex items-end justify-center pb-6">
        {/* Contract Address / Footer info */}
        <div className="text-center opacity-40 hover:opacity-100 transition-opacity flex flex-col items-center gap-2">
            <div className="w-12 h-[1px] bg-slate-700 mb-2"></div>
            <p className="font-sans text-[10px] text-slate-500 tracking-wider">
                OFFICIAL CA: <span className="font-mono text-slate-300">8x...dead</span>
            </p>
            <p className="font-serif text-[9px] text-slate-600">
                © 2024 The Whales Benevolent Association.
            </p>
        </div>
    </div>
  );
};