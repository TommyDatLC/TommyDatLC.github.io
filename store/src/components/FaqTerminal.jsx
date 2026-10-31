import React, { useState } from 'react';
import { Terminal, ChevronRight, ChevronDown } from 'lucide-react';
import { playRetroSound } from '../utils/sound';
import { useLanguage } from '../context/LanguageContext';

export default function FaqTerminal() {
  const [openIdx, setOpenIdx] = useState(0);
  const { t } = useLanguage();

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
    playRetroSound('select');
  };

  return (
    <section id="faq" className="py-12 border-b-2 border-retro-border scroll-mt-20">
      
      {/* Header */}
      <div className="mb-8">
        <div className="text-sm font-pixel text-retro-gold mb-1 flex items-center gap-1.5 tracking-wider font-semibold">
          <span className="w-2 h-2 rounded-full bg-retro-gold"></span>
          <span>{t.faq.status}</span>
        </div>
        <h2 className="font-pixel text-3xl sm:text-4xl text-white tracking-wide">
          {t.faq.title}
        </h2>
      </div>

      {/* Terminal Window Box in Purple & Gold */}
      <div className="bg-[#0e081a] border-2 border-retro-border rounded-lg overflow-hidden shadow-2xl">
        
        {/* Terminal Title Bar */}
        <div className="bg-[#180f2b] px-4 py-2.5 border-b-2 border-purple-950 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-500 inline-block shadow-[0_0_6px_#a855f7]"></span>
            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block shadow-[0_0_6px_#fbbf24]"></span>
            <span className="w-3 h-3 rounded-full bg-pink-500 inline-block"></span>
            <span className="text-xs font-mono text-purple-200 ml-2">bash - evernerd@ai-store: ~/faq.sh</span>
          </div>
          <div className="text-sm font-pixel text-retro-gold tracking-wide">
            {t.faq.badge}
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-6 space-y-3 font-mono">
          {t.faq.items.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border-2 border-purple-950 bg-black/60 rounded transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left flex items-start gap-3 hover:bg-purple-900/25 transition-colors"
                >
                  <span className="text-retro-gold flex-shrink-0 mt-0.5">
                    {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </span>
                  <div className="flex-1">
                    <span className="text-sm font-pixel text-retro-purple mr-2 font-bold tracking-wider">
                      [CMD_{String(idx + 1).padStart(2, '0')}]
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {faq.q}
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-2 pl-10 sm:pl-11 border-t-2 border-purple-950/80 text-xs sm:text-sm text-gray-200 font-sans leading-relaxed bg-[#140b24]">
                    <div className="font-mono text-xs text-retro-gold mb-1.5 font-bold">
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
