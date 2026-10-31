import React, { useState } from 'react';
import { FAQS } from '../data/products';
import { Terminal, ChevronRight, ChevronDown } from 'lucide-react';
import { playRetroSound } from '../utils/sound';

export default function FaqTerminal() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
    playRetroSound('select');
  };

  return (
    <section id="faq" className="py-12 border-b-2 border-retro-border scroll-mt-20">
      
      {/* Header */}
      <div className="mb-8">
        <div className="text-xs font-mono text-retro-mint mb-1 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-retro-mint"></span>
          <span>SYSTEM_FAQ // TERMINAL ACCORDION</span>
        </div>
        <h2 className="font-pixel text-xl sm:text-2xl text-white tracking-wide">
          CÂU HỎI THƯỜNG GẶP (FAQ)
        </h2>
      </div>

      {/* Terminal Window Box */}
      <div className="bg-[#0b0e17] border-2 border-retro-border rounded-lg overflow-hidden shadow-2xl">
        
        {/* Terminal Title Bar */}
        <div className="bg-[#141824] px-4 py-2.5 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
            <span className="text-xs font-mono text-gray-400 ml-2">bash - evernerd@ai-store: ~/faq.sh</span>
          </div>
          <div className="text-[10px] font-pixel text-retro-mint">
            UTF-8 [READY]
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-6 space-y-3 font-mono">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-gray-850 bg-black/40 rounded transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-3.5 text-left flex items-start gap-3 hover:bg-white/5 transition-colors"
                >
                  <span className="text-retro-mint flex-shrink-0 mt-0.5">
                    {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </span>
                  <div className="flex-1">
                    <span className="text-[11px] text-retro-muted mr-2">
                      [CMD_{String(idx + 1).padStart(2, '0')}]
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {faq.q}
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 pl-10 sm:pl-11 border-t border-gray-900/60 text-xs sm:text-sm text-gray-300 font-sans leading-relaxed bg-[#0e121d]">
                    <div className="font-mono text-[11px] text-retro-mint mb-1">
                      &gt; RESPONSE_OUTPUT:
                    </div>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
