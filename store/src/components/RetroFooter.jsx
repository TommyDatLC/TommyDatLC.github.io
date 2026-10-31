import React from 'react';
import { STORE_CONFIG } from '../data/products';
import { playRetroSound } from '../utils/sound';
import { MessageSquare, Send, Youtube, Instagram, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function RetroFooter() {
  const { t } = useLanguage();

  const socials = [
    { name: 'Discord Community', url: STORE_CONFIG.discordUrl, icon: MessageSquare },
    { name: 'Zalo Support', url: STORE_CONFIG.zaloUrl, icon: Send },
    { name: 'YouTube Channel', url: 'https://www.youtube.com/@Evernerd29', icon: Youtube },
    { name: 'Instagram', url: 'https://www.instagram.com/evernerden/reels/', icon: Instagram },
    { name: 'Email Liên Hệ', url: 'mailto:furama0068@gmail.com', icon: Mail }
  ];

  return (
    <footer className="mt-16 border-t-2 border-retro-border bg-[#08040f] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand */}
          <div className="text-center md:text-left">
            <div className="font-pixel text-base sm:text-lg text-white tracking-wider flex items-center justify-center md:justify-start gap-2">
              <span className="text-white">EVERNERD //</span>
              <span className="text-retro-gold font-bold">AI DROP STORE</span>
              <span className="text-xs text-retro-gold bg-retro-gold/10 border border-retro-gold/30 px-2 py-0.5 rounded font-mono">
                {STORE_CONFIG.version}
              </span>
            </div>
            <p className="text-xs text-retro-muted mt-1 font-mono">
              {t.footer.sub} {STORE_CONFIG.author}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-2">
            {socials.map((s, idx) => {
              const Icon = s.icon;
              return (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => playRetroSound('blip')}
                  className="pixel-btn px-3.5 py-2 bg-retro-card border-2 border-retro-border hover:border-retro-gold text-xs font-pixel text-gray-200 hover:text-white flex items-center gap-1.5 transition-colors tracking-wide"
                >
                  <Icon className="w-4 h-4 text-retro-gold" />
                  <span className="text-xs font-sans">{s.name}</span>
                </a>
              );
            })}
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="mt-8 pt-6 border-t border-purple-950/60 text-center text-xs text-gray-400 font-sans leading-relaxed">
          {t.footer.disclaimer}
        </div>
      </div>
    </footer>
  );
}
