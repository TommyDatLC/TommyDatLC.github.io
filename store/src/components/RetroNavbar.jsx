import React, { useState } from 'react';
import { Volume2, VolumeX, ArrowLeft, Terminal } from 'lucide-react';
import { STORE_CONFIG } from '../data/products';
import { retroAudio, playRetroSound } from '../utils/sound';

export default function RetroNavbar() {
  const [sfxOn, setSfxOn] = useState(true);

  const handleAudioToggle = () => {
    const newState = retroAudio.toggle();
    setSfxOn(newState);
    if (newState) {
      retroAudio.playBlip();
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-retro-bg/90 backdrop-blur-md border-b-2 border-retro-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Version */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-retro-card border border-retro-border flex items-center justify-center text-retro-mint shadow-pixel">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <div className="font-pixel text-sm sm:text-base tracking-wider text-white flex items-center gap-2">
              <span>EVERNERD</span>
              <span className="text-retro-mint">//</span>
              <span className="text-retro-mint">AI_STORE</span>
            </div>
            <div className="text-[10px] font-mono text-retro-muted flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>LIVE DROPS IN STOCK</span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* SFX Toggle */}
          <button
            onClick={handleAudioToggle}
            onMouseEnter={() => playRetroSound('blip')}
            title="Bật/Tắt âm thanh 8-bit"
            className="pixel-btn px-2.5 sm:px-3 py-1.5 bg-retro-card border border-retro-border hover:border-retro-mint text-xs font-pixel text-gray-300 hover:text-retro-mint flex items-center gap-1.5 transition-colors"
          >
            {sfxOn ? <Volume2 className="w-3.5 h-3.5 text-retro-mint" /> : <VolumeX className="w-3.5 h-3.5 text-gray-500" />}
            <span className="hidden sm:inline">{sfxOn ? 'SFX: ON' : 'SFX: OFF'}</span>
          </button>

          {/* Back to Portfolio Link */}
          <a
            href="../index.html"
            onMouseEnter={() => playRetroSound('blip')}
            className="pixel-btn px-3 py-1.5 bg-retro-card border border-retro-border hover:border-retro-mint text-xs font-pixel text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">PORTFOLIO</span>
          </a>
        </div>

      </div>
    </header>
  );
}
