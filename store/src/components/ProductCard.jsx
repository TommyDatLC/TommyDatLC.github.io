import React from 'react';
import { Check, MessageSquare, Send, ExternalLink } from 'lucide-react';
import { STORE_CONFIG } from '../data/products';
import { playRetroSound } from '../utils/sound';
import { useLanguage } from '../context/LanguageContext';

export default function ProductCard({ product }) {
  const { lang, t } = useLanguage();
  const isChatGPT = product.category === 'chatgpt';
  const isClaude = product.category === 'claude';
  const isCombo = product.category === 'combo';

  const title = product.title[lang] || product.title.vi;
  const tagline = product.tagline[lang] || product.tagline.vi;
  const badge = product.badge[lang] || product.badge.vi;
  const deliveryTime = product.deliveryTime[lang] || product.deliveryTime.vi;
  const features = product.features[lang] || product.features.vi;
  const billingCycle = product.billingCycle[lang] || product.billingCycle.vi;
  const zaloMsg = typeof product.zaloQuery === 'object' ? (product.zaloQuery[lang] || product.zaloQuery.vi) : product.zaloQuery;

  // Badge styling: Purple & Gold
  const getBadgeClass = () => {
    if (product.badgeType === 'hot' || isChatGPT) {
      return 'bg-purple-900/40 text-purple-300 border-purple-500/60';
    }
    if (product.badgeType === 'best' || isCombo) {
      return 'bg-amber-500/20 text-retro-gold border-retro-gold/60 font-bold';
    }
    return 'bg-amber-400/20 text-amber-300 border-amber-400/50';
  };

  // Card border highlight: Purple & Gold
  const getCardBorder = () => {
    if (isCombo) {
      return 'border-retro-gold/80 shadow-[0_0_22px_rgba(251,191,36,0.22)] hover:border-amber-300';
    }
    if (isChatGPT) {
      return 'border-retro-border hover:border-retro-purple shadow-pixel hover:shadow-pixel-hover';
    }
    return 'border-retro-border hover:border-retro-gold shadow-pixel hover:shadow-pixel-gold';
  };

  return (
    <div
      onMouseEnter={() => playRetroSound('blip')}
      className={`bg-retro-card rounded-lg border-2 p-6 flex flex-col justify-between transition-all duration-150 relative ${getCardBorder()}`}
    >
      {/* Top Meta: Badge & Stock */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className={`px-2.5 py-0.5 border text-xs font-pixel rounded tracking-wider ${getBadgeClass()}`}>
            {badge}
          </span>
          <span className="text-xs font-pixel text-retro-gold flex items-center gap-1.5 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-retro-gold animate-pulse shadow-[0_0_6px_#fbbf24]"></span>
            <span>{deliveryTime}</span>
          </span>
        </div>

        {/* Product Title & Tagline */}
        <h3 className="font-pixel text-2xl sm:text-3xl text-white tracking-wide mb-1 leading-snug">
          {title}
        </h3>
        <p className="text-xs text-retro-muted font-sans mb-4 min-h-[32px] leading-relaxed">
          {tagline}
        </p>

        {/* Pricing Box in Purple & Gold */}
        <div className="p-3 bg-black/50 border border-purple-950 rounded mb-5 flex items-baseline gap-2 font-mono">
          <span className="text-2xl sm:text-3xl font-bold text-retro-gold tracking-tight">
            {product.priceSale}
          </span>
          <span className="text-xs text-gray-500 line-through">
            {product.priceOriginal}
          </span>
          <span className="text-xs text-retro-muted ml-auto font-sans">
            {billingCycle}
          </span>
        </div>

        {/* Features List */}
        <ul className="space-y-2.5 mb-6 text-xs text-gray-200 font-sans">
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-retro-gold mt-0.5 flex-shrink-0">
                <Check className="w-3.5 h-3.5 text-retro-gold" />
              </span>
              <span className="leading-relaxed">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Dual CTA Section in Purple & Gold (Vivid Contrast) */}
      <div className="pt-4 border-t border-purple-950 space-y-2.5">
        
        {/* Primary CTA: Discord Ticket (Luminous Cyber Gold) */}
        <a
          href={STORE_CONFIG.discordUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playRetroSound('select')}
          className="pixel-btn w-full py-3 px-4 bg-[#fbbf24] hover:bg-[#f59e0b] text-[#120726] font-pixel text-lg tracking-wider flex items-center justify-center gap-2 font-black uppercase rounded-sm border-2 border-[#fef08a] shadow-[0_4px_0_#92400e] transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-[#120726]" />
          <span>{t.drops.orderDiscord}</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-70 text-[#120726]" />
        </a>

        {/* Secondary CTA: Zalo / Direct Message (Deep Royal Purple) */}
        <a
          href={`${STORE_CONFIG.zaloUrl}?text=${encodeURIComponent(zaloMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playRetroSound('blip')}
          className="pixel-btn w-full py-3 px-4 bg-[#231538] hover:bg-[#2f1c4c] text-purple-200 hover:text-white border-2 border-purple-800/80 hover:border-purple-400 font-pixel text-lg tracking-wider flex items-center justify-center gap-2 rounded-sm shadow-[0_4px_0_#4c1d95] transition-colors"
        >
          <Send className="w-4 h-4 text-retro-gold" />
          <span>{t.drops.chatZalo}</span>
        </a>

      </div>
    </div>
  );
}
