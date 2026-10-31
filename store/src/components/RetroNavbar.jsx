import React, { useState } from 'react';
import { Volume2, VolumeX, ArrowLeft, Terminal, Globe } from 'lucide-react';
import { retroAudio, playRetroSound } from '../utils/sound';
import { useLanguage } from '../context/LanguageContext';

export default function RetroNavbar() {
  const [sfxOn, setSfxOn] = useState(true);
  const { lang, toggleLang, t } = useLanguage();

  const handleAudioToggle = () => {
    const newState = retroAudio.toggle();
    setSfxOn(newState);
    if (newState) {
      retroAudio.playBlip();
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-retro-bg/95 backdrop-blur-md border-b-2 border-retro-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Version */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-retro-card border-2 border-retro-gold flex items-center justify-center text-retro-gold shadow-pixel">
            <Terminal className="w-5 h-5 text-retro-gold" />
          </div>
          <div>
            <div className="font-pixel text-lg sm:text-xl tracking-wider text-white flex items-center gap-2">
              <span className="text-white">{t.nav.brand}</span>
              <span className="text-retro-purple font-bold">//</span>
              <span className="text-retro-gold font-bold">{t.nav.sub}</span>
            </div>
            <div className="text-xs font-pixel text-retro-muted flex items-center gap-1.5 tracking-wide">
              <span className="inline-block w-2 h-2 rounded-full bg-retro-gold animate-pulse shadow-[0_0_8px_#fbbf24]"></span>
              <span className="text-retro-gold font-semibold">{t.nav.stock}</span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          
          {/* Language Switcher Pill (VI / EN) */}
          <button
            onClick={toggleLang}
            onMouseEnter={() => playRetroSound('blip')}
            title="Chuyển đổi ngôn ngữ / Switch Language"
            className="pixel-btn px-2.5 sm:px-3 py-1.5 bg-[#22143b] border-2 border-retro-gold hover:border-amber-300 text-xs sm:text-sm font-pixel text-retro-gold hover:text-white flex items-center gap-1.5 transition-colors font-bold tracking-wider"
          >
            <Globe className="w-3.5 h-3.5 text-retro-gold" />
            <span>{lang === 'vi' ? '🇻🇳 VI' : '🇺🇸 EN'}</span>
          </button>

          {/* SFX Toggle */}
          <button
            onClick={handleAudioToggle}
            onMouseEnter={() => playRetroSound('blip')}
            title="Bật/Tắt âm thanh 8-bit"
            className="pixel-btn px-2.5 sm:px-3 py-1.5 bg-retro-card border-2 border-retro-border hover:border-retro-gold text-xs sm:text-sm font-pixel text-gray-200 hover:text-retro-gold flex items-center gap-1.5 transition-colors tracking-wide"
          >
            {sfxOn ? <Volume2 className="w-3.5 h-3.5 text-retro-gold" /> : <VolumeX className="w-3.5 h-3.5 text-gray-500" />}
            <span className="hidden sm:inline">{sfxOn ? t.nav.sfxOn : t.nav.sfxOff}</span>
          </button>

          {/* Back to Portfolio Link */}
          <a
            href="../index.html"
            onMouseEnter={() => playRetroSound('blip')}
            className="pixel-btn px-3 py-1.5 bg-retro-card border-2 border-retro-border hover:border-retro-purple text-xs sm:text-sm font-pixel text-gray-200 hover:text-white flex items-center gap-1.5 transition-colors tracking-wide"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-retro-purple" />
            <span className="hidden sm:inline">{t.nav.portfolio}</span>
          </a>

        </div>

      </div>
    </header>
  );
}
