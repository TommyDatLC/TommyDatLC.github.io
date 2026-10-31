import React from 'react';
import { Check, Sparkles, MessageSquare, Send, ExternalLink } from 'lucide-react';
import { STORE_CONFIG } from '../data/products';
import { playRetroSound } from '../utils/sound';

export default function ProductCard({ product }) {
  const isChatGPT = product.category === 'chatgpt';
  const isClaude = product.category === 'claude';
  const isCombo = product.category === 'combo';

  // Badge styling based on type
  const getBadgeClass = () => {
    if (product.badgeType === 'hot') {
      return 'bg-retro-mint/20 text-retro-mint border-retro-mint/50';
    }
    if (product.badgeType === 'best') {
      return 'bg-purple-500/20 text-purple-300 border-purple-500/50';
    }
    return 'bg-retro-amber/20 text-retro-amber border-retro-amber/50';
  };

  // Card border highlight
  const getCardBorder = () => {
    if (isCombo) {
      return 'border-purple-500/60 shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:border-purple-400';
    }
    if (isChatGPT) {
      return 'border-retro-border hover:border-retro-mint shadow-pixel hover:shadow-pixel-hover';
    }
    return 'border-retro-border hover:border-retro-amber shadow-pixel hover:shadow-[0_0_0_2px_#e06c4b]';
  };

  return (
    <div
      onMouseEnter={() => playRetroSound('blip')}
      className={`bg-retro-card rounded-lg border-2 p-6 flex flex-col justify-between transition-all duration-150 relative ${getCardBorder()}`}
    >
      {/* Top Meta: Badge & Stock */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className={`px-2.5 py-0.5 border text-[10px] font-pixel rounded tracking-wider ${getBadgeClass()}`}>
            {product.badge}
          </span>
          <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{product.deliveryTime}</span>
          </span>
        </div>

        {/* Product Title & Tagline */}
        <h3 className="font-pixel text-lg sm:text-xl text-white tracking-wide mb-1">
          {product.title}
        </h3>
        <p className="text-xs text-retro-muted font-sans mb-4 min-h-[32px]">
          {product.tagline}
        </p>

        {/* Pricing Box */}
        <div className="p-3 bg-black/40 border border-gray-800 rounded mb-5 flex items-baseline gap-2 font-mono">
          <span className="text-2xl font-bold text-white tracking-tight">
            {product.priceSale}
          </span>
          <span className="text-xs text-gray-500 line-through">
            {product.priceOriginal}
          </span>
          <span className="text-xs text-retro-muted ml-auto">
            {product.billingCycle}
          </span>
        </div>

        {/* Features List */}
        <ul className="space-y-2.5 mb-6 text-xs text-gray-300 font-sans">
          {product.features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-retro-mint mt-0.5 flex-shrink-0">
                <Check className="w-3.5 h-3.5" />
              </span>
              <span className="leading-relaxed">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Dual CTA Section */}
      <div className="pt-4 border-t border-gray-800 space-y-2.5">
        
        {/* Primary CTA: Discord Ticket */}
        <a
          href={STORE_CONFIG.discordUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playRetroSound('select')}
          className="pixel-btn w-full py-2.5 px-4 bg-retro-mint hover:bg-emerald-400 text-black font-pixel text-xs tracking-wide flex items-center justify-center gap-2 font-bold uppercase rounded-sm"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Order qua Discord</span>
          <ExternalLink className="w-3 h-3 opacity-70" />
        </a>

        {/* Secondary CTA: Zalo / Direct Message */}
        <a
          href={`${STORE_CONFIG.zaloUrl}?text=${encodeURIComponent(product.zaloQuery)}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playRetroSound('blip')}
          className="pixel-btn w-full py-2.5 px-4 bg-[#1f2537] hover:bg-[#283047] text-gray-200 hover:text-white border border-gray-700 hover:border-gray-500 font-pixel text-xs tracking-wide flex items-center justify-center gap-2 rounded-sm transition-colors"
        >
          <Send className="w-3.5 h-3.5 text-blue-400" />
          <span>Chat Zalo / Messenger</span>
        </a>

      </div>
    </div>
  );
}
