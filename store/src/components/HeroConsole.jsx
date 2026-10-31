import React, { useState, useEffect } from 'react';
import { ShieldCheck, Zap, Cpu, Clock, Sparkles, MessageCircleHeart } from 'lucide-react';
import { playRetroSound } from '../utils/sound';
import { useLanguage } from '../context/LanguageContext';

export default function HeroConsole() {
  const { lang, t } = useLanguage();
  const [currentMsgIdx, setCurrentMsgIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const characterQuotes = lang === 'vi' ? [
    "Chào bạn! Mình là E9, trợ lý của Evernerd ✨",
    "Cần ChatGPT Plus hay Claude Pro? Có hàng ngay nhé!",
    "Kích hoạt chính chủ email cá nhân, bảo hành 1-đổi-1!",
    "Bấm vào mình hoặc kéo xuống để xem chi tiết các gói nhé!"
  ] : [
    "Hey there! I'm E9, your Evernerd AI Store companion ✨",
    "Need official ChatGPT Plus or Claude Pro? Instant delivery!",
    "100% private email activation with full 1-to-1 warranty!",
    "Click me or scroll down to explore all account drops!"
  ];

  useEffect(() => {
    const fullText = characterQuotes[currentMsgIdx % characterQuotes.length];
    let timer;

    if (!isDeleting && displayedText.length < fullText.length) {
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 40);
    } else if (!isDeleting && displayedText.length === fullText.length) {
      timer = setTimeout(() => setIsDeleting(true), 3200);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
      }, 20);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentMsgIdx((prev) => (prev + 1) % characterQuotes.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentMsgIdx, characterQuotes]);

  const handleCharacterClick = () => {
    playRetroSound('select');
    setClickCount((prev) => prev + 1);
    setIsDeleting(false);
    setCurrentMsgIdx((prev) => (prev + 1) % characterQuotes.length);
    setDisplayedText("");
  };

  return (
    <section className="py-8 sm:py-12 border-b-2 border-retro-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Headline & Value Prop */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-retro-card border-2 border-retro-purple/50 rounded-full text-sm font-pixel text-retro-gold">
            <span className="w-2 h-2 rounded-full bg-retro-gold animate-ping inline-block"></span>
            <span className="tracking-wide">{t.hero.badge}</span>
          </div>

          <h1 className="font-pixel text-3xl sm:text-4xl md:text-5xl text-white tracking-wide leading-tight">
            {t.hero.title1} <br />
            <span className="bg-gradient-to-r from-purple-400 via-retro-gold to-amber-300 bg-clip-text text-transparent inline-block mt-2 font-bold">
              {t.hero.title2}
            </span>
          </h1>

          <p className="text-retro-muted text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
            {t.hero.desc}
          </p>

          {/* Quick specs grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 bg-retro-card/80 border-2 border-retro-border hover:border-retro-purple rounded shadow-pixel transition-colors">
              <ShieldCheck className="w-5 h-5 text-retro-purple mb-1" />
              <div className="font-pixel text-base text-white">{t.hero.spec1}</div>
              <div className="text-[11px] text-retro-muted font-sans">{t.hero.spec1_sub}</div>
            </div>
            <div className="p-3 bg-retro-card/80 border-2 border-retro-border hover:border-retro-gold rounded shadow-pixel transition-colors">
              <Clock className="w-5 h-5 text-retro-gold mb-1" />
              <div className="font-pixel text-base text-white">{t.hero.spec2}</div>
              <div className="text-[11px] text-retro-muted font-sans">{t.hero.spec2_sub}</div>
            </div>
            <div className="p-3 bg-retro-card/80 border-2 border-retro-border hover:border-retro-purple rounded shadow-pixel transition-colors">
              <Zap className="w-5 h-5 text-retro-purple mb-1" />
              <div className="font-pixel text-base text-white">{t.hero.spec3}</div>
              <div className="text-[11px] text-retro-muted font-sans">{t.hero.spec3_sub}</div>
            </div>
            <div className="p-3 bg-retro-card/80 border-2 border-retro-border hover:border-retro-gold rounded shadow-pixel transition-colors">
              <Cpu className="w-5 h-5 text-retro-gold mb-1" />
              <div className="font-pixel text-base text-white">{t.hero.spec4}</div>
              <div className="text-[11px] text-retro-muted font-sans">{t.hero.spec4_sub}</div>
            </div>
          </div>

          {/* Action Buttons - Vivid Contrast & High Legibility */}
          <div className="pt-2 flex flex-wrap gap-4 justify-center lg:justify-start">
            
            {/* Primary Action Button: Luminous Cyber Gold with Dark Purple Text */}
            <a
              href="#drops"
              onClick={() => playRetroSound('select')}
              className="pixel-btn px-6 py-3.5 bg-[#fbbf24] hover:bg-[#f59e0b] text-[#120726] font-pixel text-lg sm:text-xl uppercase tracking-wider font-extrabold inline-flex items-center gap-2 border-2 border-[#fef08a] shadow-[0_4px_0_#92400e] transition-all"
            >
              <span>{t.hero.btnDrops}</span>
            </a>

            {/* Secondary Action Button: Deep Royal Purple */}
            <a
              href="#specs"
              onClick={() => playRetroSound('blip')}
              className="pixel-btn px-6 py-3.5 bg-[#201238] hover:bg-[#2e1850] border-2 border-retro-purple hover:border-purple-300 text-white hover:text-retro-gold font-pixel text-lg sm:text-xl uppercase tracking-wider font-bold inline-flex items-center gap-2 shadow-[0_4px_0_#581c87] transition-all"
            >
              <span>{t.hero.btnSpecs}</span>
            </a>

          </div>

        </div>

        {/* Right Column: 8-Bit Animated Character Mascot (Replacing Console) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          
          {/* Retro Pixel Speech Bubble Above Character */}
          <div className="w-full max-w-sm mb-3 relative animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="bg-[#180e2b] border-2 border-retro-gold/80 p-3.5 rounded-lg shadow-[0_0_15px_rgba(251,191,36,0.18)] text-left relative">
              <div className="flex items-center justify-between text-xs font-pixel text-retro-gold mb-1 pb-1 border-b border-purple-950">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-retro-gold" />
                  <span>E9 // AI ASSISTANT</span>
                </span>
                <span className="text-[10px] text-purple-300 font-mono">CLICK TO CHAT</span>
              </div>
              <p className="font-mono text-xs text-white leading-relaxed min-h-[36px]">
                &gt; {displayedText}
                <span className="inline-block w-2 h-3.5 bg-retro-gold ml-1 animate-pulse align-middle"></span>
              </p>
              {/* Downward triangle arrow for speech bubble */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-retro-gold"></div>
            </div>
          </div>

          {/* 8-Bit Pixel Character Container */}
          <div 
            onClick={handleCharacterClick}
            title={lang === 'vi' ? 'Bấm vào E9 để tương tác!' : 'Click E9 to talk!'}
            className="group cursor-pointer relative flex flex-col items-center select-none transition-transform hover:scale-105 active:scale-95"
          >
            {/* Ambient Aura Glow behind character */}
            <div className="absolute inset-0 bg-gradient-to-t from-retro-purple/30 via-retro-gold/15 to-transparent blur-2xl rounded-full pointer-events-none"></div>

            {/* The 8-bit Animated Pixel Character */}
            <img
              src="./assets/mascot_e9.gif"
              alt="E9 - 8-Bit Retro Mascot"
              className="relative z-10 h-72 sm:h-80 md:h-96 object-contain filter drop-shadow-[0_12px_24px_rgba(168,85,247,0.4)]"
              style={{ imageRendering: 'pixelated' }}
            />

            {/* Glowing Retro Platform / Pedestal */}
            <div className="relative -mt-6 z-20 flex flex-col items-center">
              {/* Elliptical glow */}
              <div className="w-48 h-6 bg-gradient-to-r from-transparent via-retro-gold/50 to-transparent rounded-full blur-sm"></div>
              {/* Platform base */}
              <div className="px-4 py-1.5 bg-[#170e28] border-2 border-retro-gold/70 rounded-full shadow-pixel flex items-center gap-2 -mt-2">
                <span className="w-2 h-2 rounded-full bg-retro-gold animate-pulse"></span>
                <span className="font-pixel text-xs sm:text-sm text-retro-gold tracking-wider">
                  MASCOT // E9 [8-BIT]
                </span>
                <span className="text-[10px] text-purple-300 font-mono">
                  {clickCount > 0 ? `♥ ${clickCount}` : 'LVL.99'}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
