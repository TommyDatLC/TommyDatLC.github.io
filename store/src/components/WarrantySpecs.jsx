import React from 'react';
import { ShieldCheck, Cpu, Clock, Lock } from 'lucide-react';
import { playRetroSound } from '../utils/sound';
import { useLanguage } from '../context/LanguageContext';

const SPEC_ICONS = [ShieldCheck, Clock, Lock, Cpu];

export default function WarrantySpecs() {
  const { t } = useLanguage();

  return (
    <section id="specs" className="py-12 border-b-2 border-retro-border scroll-mt-20">
      
      {/* Header */}
      <div className="mb-8">
        <div className="text-sm font-pixel text-retro-gold mb-1 flex items-center gap-1.5 tracking-wider font-semibold">
          <span className="w-2 h-2 rounded-full bg-retro-gold"></span>
          <span>{t.specs.status}</span>
        </div>
        <h2 className="font-pixel text-3xl sm:text-4xl text-white tracking-wide">
          {t.specs.title}
        </h2>
      </div>

      {/* Specs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {t.specs.items.map((item, idx) => {
          const Icon = SPEC_ICONS[idx] || ShieldCheck;
          return (
            <div
              key={idx}
              onMouseEnter={() => playRetroSound('blip')}
              className="bg-retro-card/85 border-2 border-retro-border hover:border-retro-gold p-5 rounded-lg shadow-pixel transition-colors flex items-start gap-4"
            >
              <div className="p-3 bg-black/60 border-2 border-purple-900/60 rounded text-retro-gold flex-shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <div className="font-pixel text-xl sm:text-2xl text-retro-gold tracking-wide mb-1.5">
                  <span className="text-retro-purple">[{String(idx + 1).padStart(2, '0')}]</span> // {item.spec}
                </div>
                <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
