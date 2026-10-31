import React from 'react';
import { WARRANTY_SPECS } from '../data/products';
import { ShieldCheck, Cpu, Clock, Lock } from 'lucide-react';
import { playRetroSound } from '../utils/sound';

const SPEC_ICONS = [ShieldCheck, Clock, Lock, Cpu];

export default function WarrantySpecs() {
  return (
    <section id="specs" className="py-12 border-b-2 border-retro-border scroll-mt-20">
      
      {/* Header */}
      <div className="mb-8">
        <div className="text-xs font-mono text-retro-gold mb-1 flex items-center gap-1.5 font-semibold">
          <span className="w-2 h-2 rounded-full bg-retro-gold"></span>
          <span>SYSTEM_SPECIFICATION // HARDWARE &amp; WARRANTY MATRIX</span>
        </div>
        <h2 className="font-pixel text-xl sm:text-2xl text-white tracking-wide">
          THÔNG SỐ KỸ THUẬT &amp; CAM KẾT BẢO HÀNH
        </h2>
      </div>

      {/* Specs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {WARRANTY_SPECS.map((item, idx) => {
          const Icon = SPEC_ICONS[idx] || ShieldCheck;
          return (
            <div
              key={idx}
              onMouseEnter={() => playRetroSound('blip')}
              className="bg-retro-card/80 border-2 border-retro-border hover:border-retro-gold p-5 rounded-lg shadow-pixel transition-colors flex items-start gap-4"
            >
              <div className="p-2.5 bg-black/60 border border-purple-900/60 rounded text-retro-gold flex-shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-pixel text-xs text-retro-gold tracking-wider mb-1.5">
                  <span className="text-retro-purple">[{String(idx + 1).padStart(2, '0')}]</span> // {item.spec}
                </div>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
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
