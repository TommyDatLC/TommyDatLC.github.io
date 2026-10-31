import React, { useState, useEffect } from 'react';
import { Terminal, ShieldCheck, Zap, Sparkles, Cpu, Clock, CheckCircle2 } from 'lucide-react';
import { playRetroSound } from '../utils/sound';

const MESSAGES = [
  "BOOT SEQUENCE // 2026_AI_DROPS_READY",
  "OPENAI GPT-4o & o1-PREVIEW ONLINE",
  "ANTHROPIC CLAUDE 3.5 SONNET LOADED",
  "UPGRADE YOUR BRAIN & WORKFLOW NOW"
];

export default function HeroConsole() {
  const [currentMsgIdx, setCurrentMsgIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeScreenMode, setActiveScreenMode] = useState("chatgpt"); // chatgpt, claude, combo

  useEffect(() => {
    const fullText = MESSAGES[currentMsgIdx];
    let timer;

    if (!isDeleting && displayedText.length < fullText.length) {
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 50);
    } else if (!isDeleting && displayedText.length === fullText.length) {
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
      }, 25);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentMsgIdx((prev) => (prev + 1) % MESSAGES.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentMsgIdx]);

  const handleConsoleModeChange = (mode) => {
    setActiveScreenMode(mode);
    playRetroSound('drop');
  };

  return (
    <section className="py-8 sm:py-12 border-b-2 border-retro-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Headline & Value Prop */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-retro-card border border-retro-purple/40 rounded-full text-xs font-mono text-retro-gold">
            <span className="w-2 h-2 rounded-full bg-retro-gold animate-ping inline-block"></span>
            <span>LAUNCH WEEK DROP // PURPLE &amp; GOLD EDITION</span>
          </div>

          <h1 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-white tracking-wide leading-tight">
            NÂNG CẤP TRÍ TUỆ NHÂN TẠO <br />
            <span className="bg-gradient-to-r from-purple-400 via-retro-gold to-amber-300 bg-clip-text text-transparent inline-block mt-2 font-bold">
              CHUẨN CHÍNH CHỦ 100%
            </span>
          </h1>

          <p className="text-retro-muted text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
            Sở hữu tài khoản <strong>ChatGPT Plus</strong> &amp; <strong>Claude Pro</strong> cao cấp được kích hoạt trực tiếp trên chính email của bạn. Bảo mật tuyệt đối, bảo hành 1-đổi-1 trọn thời gian sử dụng.
          </p>

          {/* Quick specs grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 bg-retro-card/70 border border-retro-border hover:border-retro-purple/60 rounded shadow-pixel transition-colors">
              <ShieldCheck className="w-5 h-5 text-retro-purple mb-1" />
              <div className="text-xs font-bold text-white font-mono">100% Chính Chủ</div>
              <div className="text-[11px] text-retro-muted">Email cá nhân</div>
            </div>
            <div className="p-3 bg-retro-card/70 border border-retro-border hover:border-retro-gold/60 rounded shadow-pixel transition-colors">
              <Clock className="w-5 h-5 text-retro-gold mb-1" />
              <div className="text-xs font-bold text-white font-mono">5 - 15 Phút</div>
              <div className="text-[11px] text-retro-muted">Kích hoạt siêu tốc</div>
            </div>
            <div className="p-3 bg-retro-card/70 border border-retro-border hover:border-retro-purple/60 rounded shadow-pixel transition-colors">
              <Zap className="w-5 h-5 text-retro-purple mb-1" />
              <div className="text-xs font-bold text-white font-mono">1-Đổi-1</div>
              <div className="text-[11px] text-retro-muted">Bảo hành trọn gói</div>
            </div>
            <div className="p-3 bg-retro-card/70 border border-retro-border hover:border-retro-gold/60 rounded shadow-pixel transition-colors">
              <Cpu className="w-5 h-5 text-retro-gold mb-1" />
              <div className="text-xs font-bold text-white font-mono">Hỗ Trợ Dev</div>
              <div className="text-[11px] text-retro-muted">Cursor, API &amp; Code</div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#drops"
              onClick={() => playRetroSound('select')}
              className="pixel-btn px-6 py-3 bg-retro-gold hover:bg-amber-300 text-black font-pixel text-xs uppercase tracking-wider font-bold inline-flex items-center gap-2"
            >
              <span>Xem Các Gói Drop Ngay</span>
              <span>↓</span>
            </a>
            <a
              href="#specs"
              onClick={() => playRetroSound('blip')}
              className="pixel-btn px-5 py-3 bg-retro-card border border-retro-border hover:border-retro-purple text-gray-200 hover:text-retro-purple font-pixel text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              <span>Chính Sách &amp; Specs</span>
            </a>
          </div>

        </div>

        {/* Right Column: 8-Bit Analogue Pocket Console Tribute (Purple & Gold Edition) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[340px] bg-[#1a112c] border-4 border-[#3b245e] rounded-2xl p-5 shadow-2xl relative select-none">
            
            {/* Console Top Header & LED */}
            <div className="flex items-center justify-between pb-3 border-b border-purple-950 text-[10px] font-mono text-gray-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-retro-gold animate-pulse shadow-[0_0_8px_#fbbf24]"></span>
                <span className="font-pixel text-[9px] text-retro-gold">SYSTEM ON</span>
              </div>
              <span className="tracking-widest font-pixel text-[9px] text-purple-300">ANALOGUE // RETRO</span>
            </div>

            {/* Handheld LCD Screen Frame */}
            <div className="my-4 bg-[#0a0614] border-2 border-retro-purple/60 rounded-lg p-4 relative overflow-hidden shadow-inner">
              <div className="absolute inset-0 scanlines opacity-40 pointer-events-none"></div>

              {/* Console Screen Top Bar */}
              <div className="flex items-center justify-between text-[10px] font-mono text-retro-muted border-b border-purple-950 pb-1.5 mb-3">
                <span className="text-purple-300">MODE: {activeScreenMode.toUpperCase()}</span>
                <span className="text-retro-gold">FPS: 60</span>
              </div>

              {/* Console Animated Content */}
              <div className="min-h-[140px] flex flex-col justify-between">
                <div>
                  <div className="text-retro-gold font-pixel text-xs mb-2 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>TERMINAL_OUTPUT</span>
                  </div>
                  <div className="text-xs text-white font-mono leading-relaxed bg-black/60 p-2.5 rounded border border-purple-900/60">
                    &gt; {displayedText}
                    <span className="inline-block w-2 h-3.5 bg-retro-gold ml-1 animate-pulse align-middle"></span>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-gray-400 border-t border-purple-950">
                  <span className="text-purple-300">STATUS: READY</span>
                  <span className="text-retro-gold flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3 h-3 text-retro-gold" /> VERIFIED
                  </span>
                </div>
              </div>
            </div>

            {/* D-Pad and Buttons Controls Area */}
            <div className="pt-2 flex items-center justify-between px-2">
              
              {/* D-Pad Simulation */}
              <div className="relative w-20 h-20">
                {/* Horizontal */}
                <div className="absolute top-7 left-0 w-20 h-6 bg-[#26173d] border border-purple-900 rounded-sm"></div>
                {/* Vertical */}
                <div className="absolute top-0 left-7 w-6 h-20 bg-[#26173d] border border-purple-900 rounded-sm"></div>
                {/* Center cap */}
                <div className="absolute top-7 left-7 w-6 h-6 bg-[#1b102e]"></div>
                {/* D-pad clickers */}
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
                    className="w-8 h-8 rounded-full bg-retro-purple active:translate-y-0.5 border-2 border-purple-300 shadow-[0_3px_0_#4c1d95] text-white font-pixel text-[10px] flex items-center justify-center"
                  >
                    B
                  </button>
                  <span className="text-[9px] font-mono text-purple-300 mt-1">GPT</span>
                </div>
                <div className="flex flex-col items-center -mt-2">
                  <button
                    onClick={() => handleConsoleModeChange('claude')}
                    className="w-8 h-8 rounded-full bg-retro-gold active:translate-y-0.5 border-2 border-amber-200 shadow-[0_3px_0_#78350f] text-black font-pixel text-[10px] flex items-center justify-center font-bold"
                  >
                    A
                  </button>
                  <span className="text-[9px] font-mono text-retro-gold mt-1">CLAUDE</span>
                </div>
              </div>

            </div>

            {/* Bottom Brand Stamp */}
            <div className="text-center pt-4 text-[9px] font-pixel text-purple-400 tracking-wider">
              PURPLE &amp; GOLD SPECIAL DROP
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
