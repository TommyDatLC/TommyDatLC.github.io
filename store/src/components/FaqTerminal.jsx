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
        <div className="text-xs font-mono text-retro-gold mb-1 flex items-center gap-1.5 font-semibold">
          <span className="w-2 h-2 rounded-full bg-retro-gold"></span>
          <span>SYSTEM_FAQ // TERMINAL ACCORDION</span>
        </div>
        <h2 className="font-pixel text-xl sm:text-2xl text-white tracking-wide">
          CÂU HỎI THƯỜNG GẶP (FAQ)
        </h2>
      </div>

      {/* Terminal Window Box in Purple & Gold */}
      <div className="bg-[#0e081a] border-2 border-retro-border rounded-lg overflow-hidden shadow-2xl">
        
        {/* Terminal Title Bar */}
        <div className="bg-[#180f2b] px-4 py-2.5 border-b border-purple-950 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-pink-500/80 inline-block"></span>
            <span className="text-xs font-mono text-purple-300 ml-2">bash - evernerd@ai-store: ~/faq.sh</span>
          </div>
          <div className="text-[10px] font-pixel text-retro-gold">
            PURPLE_GOLD [ACTIVE]
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-6 space-y-3 font-mono">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-purple-950 bg-black/50 rounded transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-3.5 text-left flex items-start gap-3 hover:bg-purple-900/20 transition-colors"
                >
                  <span className="text-retro-gold flex-shrink-0 mt-0.5">
                    {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </span>
                  <div className="flex-1">
                    <span className="text-[11px] text-retro-purple mr-2 font-bold">
                      [CMD_{String(idx + 1).padStart(2, '0')}]
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {faq.q}
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 pl-10 sm:pl-11 border-t border-purple-950/80 text-xs sm:text-sm text-gray-300 font-sans leading-relaxed bg-[#140b24]">
                    <div className="font-mono text-[11px] text-retro-gold mb-1 font-semibold">
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
