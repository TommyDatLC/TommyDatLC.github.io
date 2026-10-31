import React from 'react';
import { STORE_CONFIG } from '../data/products';
import { playRetroSound } from '../utils/sound';
import { MessageSquare, Send, Youtube, Instagram, Mail } from 'lucide-react';

export default function RetroFooter() {
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
            <div className="font-pixel text-sm text-white tracking-wider flex items-center justify-center md:justify-start gap-2">
              <span className="text-white">EVERNERD //</span>
              <span className="text-retro-gold font-bold">AI DROP STORE</span>
              <span className="text-[10px] text-retro-gold bg-retro-gold/10 border border-retro-gold/30 px-1.5 py-0.5 rounded">
                {STORE_CONFIG.version}
              </span>
            </div>
            <p className="text-xs text-retro-muted mt-1 font-mono">
              Crafted in Retro Purple &amp; Gold by {STORE_CONFIG.author}
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
                  className="pixel-btn px-3 py-1.5 bg-retro-card border border-retro-border hover:border-retro-gold text-xs text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-retro-gold" />
                  <span className="text-[11px] font-sans">{s.name}</span>
                </a>
              );
            })}
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="mt-8 pt-6 border-t border-purple-950/60 text-center text-[11px] text-gray-500 font-mono">
          © 2026 EVERNERD. All rights reserved. Không liên kết chính thức với OpenAI hay Anthropic — Chúng tôi cung cấp dịch vụ đăng ký tài khoản &amp; hỗ trợ kỹ thuật độc lập.
        </div>
      </div>
    </footer>
  );
}
