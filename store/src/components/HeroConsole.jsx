import React, { useState, useEffect } from 'react';
import { Terminal, ShieldCheck, Zap, Sparkles, Cpu, Clock, CheckCircle2 } from 'lucide-react';
import { playRetroSound } from '../utils/sound';
import { useLanguage } from '../context/LanguageContext';

export default function HeroConsole() {
  const { lang, t } = useLanguage();
  const [currentMsgIdx, setCurrentMsgIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeScreenMode, setActiveScreenMode] = useState("chatgpt"); // chatgpt, claude, combo

  const messages = t.hero.messages;

  useEffect(() => {
    const fullText = messages[currentMsgIdx % messages.length];
    let timer;

    if (!isDeleting && displayedText.length < fullText.length) {
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 45);
    } else if (!isDeleting && displayedText.length === fullText.length) {
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
      }, 20);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentMsgIdx((prev) => (prev + 1) % messages.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentMsgIdx, messages]);

  const handleConsoleModeChange = (mode) => {
    setActiveScreenMode(mode);
    playRetroSound('drop');
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

          {/* Action Buttons - Fixed High Contrast & Vivid Visibility */}
          <div className="pt-2 flex flex-wrap gap-4 justify-center lg:justify-start">
            
            {/* Primary Action Button: Luminous Cyber Gold with Crisp Bold Dark Text */}
            <a
              href="#drops"
              onClick={() => playRetroSound('select')}
              className="pixel-btn px-6 py-3.5 bg-[#fbbf24] hover:bg-[#f59e0b] text-[#120726] font-pixel text-lg sm:text-xl uppercase tracking-wider font-extrabold inline-flex items-center gap-2 border-2 border-[#fef08a] shadow-[0_4px_0_#92400e] transition-all"
            >
              <span>{t.hero.btnDrops}</span>
            </a>

            {/* Secondary Action Button: Deep Royal Purple with Glowing White/Gold Text */}
            <a
              href="#specs"
              onClick={() => playRetroSound('blip')}
              className="pixel-btn px-6 py-3.5 bg-[#201238] hover:bg-[#2e1850] border-2 border-retro-purple hover:border-purple-300 text-white hover:text-retro-gold font-pixel text-lg sm:text-xl uppercase tracking-wider font-bold inline-flex items-center gap-2 shadow-[0_4px_0_#581c87] transition-all"
            >
              <span>{t.hero.btnSpecs}</span>
            </a>

          </div>

        </div>

        {/* Right Column: 8-Bit Analogue Pocket Console Tribute */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[340px] bg-[#1a112c] border-4 border-[#3b245e] rounded-2xl p-5 shadow-2xl relative select-none">
            
            {/* Console Top Header & LED */}
            <div className="flex items-center justify-between pb-3 border-b border-purple-950 text-xs font-mono text-gray-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-retro-gold animate-pulse shadow-[0_0_8px_#fbbf24]"></span>
                <span className="font-pixel text-sm text-retro-gold">{t.hero.systemOn}</span>
              </div>
              <span className="tracking-widest font-pixel text-sm text-purple-300">ANALOGUE // RETRO</span>
            </div>

            {/* Handheld LCD Screen Frame */}
            <div className="my-4 bg-[#0a0614] border-2 border-retro-purple/60 rounded-lg p-4 relative overflow-hidden shadow-inner">
              <div className="absolute inset-0 scanlines opacity-40 pointer-events-none"></div>

              {/* Console Screen Top Bar */}
              <div className="flex items-center justify-between text-xs font-mono text-retro-muted border-b border-purple-950 pb-1.5 mb-3">
                <span className="text-purple-300">MODE: {activeScreenMode.toUpperCase()}</span>
                <span className="text-retro-gold">FPS: 60</span>
              </div>

              {/* Console Animated Content */}
              <div className="min-h-[140px] flex flex-col justify-between">
                <div>
                  <div className="text-retro-gold font-pixel text-sm mb-2 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>{t.hero.terminalTitle}</span>
                  </div>
                  <div className="text-sm sm:text-base text-white font-mono leading-relaxed bg-black/60 p-2.5 rounded border border-purple-900/60">
                    &gt; {displayedText}
                    <span className="inline-block w-2 h-4 bg-retro-gold ml-1 animate-pulse align-middle"></span>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between text-xs font-mono text-gray-400 border-t border-purple-950">
                  <span className="text-purple-300">{t.hero.statusReady}</span>
                  <span className="text-retro-gold flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-retro-gold" /> {t.hero.verified}
                  </span>
                </div>
              </div>
            </div>

            {/* D-Pad and Buttons Controls Area */}
            <div className="pt-2 flex items-center justify-between px-2">
              
              {/* D-Pad Simulation */}
              <div className="relative w-20 h-20">
                <div className="absolute top-7 left-0 w-20 h-6 bg-[#26173d] border border-purple-900 rounded-sm"></div>
                <div className="absolute top-0 left-7 w-6 h-20 bg-[#26173d] border border-purple-900 rounded-sm"></div>
                <div className="absolute top-7 left-7 w-6 h-6 bg-[#1b102e]"></div>
                
                <button
                  onClick={() => handleConsoleModeChange('chatgpt')}
                  title="ChatGPT Mode"
                  className="absolute top-0 left-7 w-6 h-6 hover:bg-retro-purple/40 rounded-t"
                ></button>
                <button
                  onClick={() => handleConsoleModeChange('claude')}
                  title="Claude Mode"
                  className="absolute bottom-0 left-7 w-6 h-6 hover:bg-retro-gold/40 rounded-b"
                ></button>
                <button
                  onClick={() => handleConsoleModeChange('combo')}
                  title="Combo Mode"
                  className="absolute top-7 left-0 w-6 h-6 hover:bg-purple-500/40 rounded-l"
                ></button>
                <button
                  onClick={() => handleConsoleModeChange('chatgpt')}
                  title="Default Mode"
                  className="absolute top-7 right-0 w-6 h-6 hover:bg-amber-500/40 rounded-r"
                ></button>
              </div>

              {/* Speaker Grille lines */}
              <div className="flex flex-col gap-1 opacity-40">
                <div className="w-8 h-1 bg-purple-400 rounded"></div>
                <div className="w-8 h-1 bg-purple-400 rounded"></div>
                <div className="w-8 h-1 bg-purple-400 rounded"></div>
              </div>

              {/* Action Buttons A / B */}
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => handleConsoleModeChange('chatgpt')}
                    className="w-8 h-8 rounded-full bg-retro-purple active:translate-y-0.5 border-2 border-purple-300 shadow-[0_3px_0_#4c1d95] text-white font-pixel text-xs flex items-center justify-center font-bold"
                  >
                    B
                  </button>
                  <span className="text-[10px] font-mono text-purple-300 mt-1">GPT</span>
                </div>
                <div className="flex flex-col items-center -mt-2">
                  <button
                    onClick={() => handleConsoleModeChange('claude')}
                    className="w-8 h-8 rounded-full bg-retro-gold active:translate-y-0.5 border-2 border-amber-200 shadow-[0_3px_0_#78350f] text-black font-pixel text-xs flex items-center justify-center font-bold"
                  >
                    A
                  </button>
                  <span className="text-[10px] font-mono text-retro-gold mt-1">CLAUDE</span>
                </div>
              </div>

            </div>

            {/* Bottom Brand Stamp */}
            <div className="text-center pt-4 text-xs font-pixel text-purple-400 tracking-wider">
              {t.hero.consoleFooter}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
