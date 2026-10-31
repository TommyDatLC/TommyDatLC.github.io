import React, { useState } from 'react';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data/products';
import ProductCard from './ProductCard';
import { playRetroSound } from '../utils/sound';
import { Boxes, Bot, Sparkles, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CATEGORY_ICONS = {
  all: Boxes,
  chatgpt: Bot,
  claude: Sparkles,
  combo: Zap,
};

export default function ProductDrops() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { lang, t } = useLanguage();

  const handleTabChange = (catId) => {
    setActiveCategory(catId);
    playRetroSound('select');
  };

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="drops" className="py-12 border-b-2 border-retro-border scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="text-sm font-pixel text-retro-gold mb-1 flex items-center gap-1.5 tracking-wider font-semibold">
            <span className="w-2 h-2 rounded-full bg-retro-gold animate-pulse"></span>
            <span>{t.drops.status}</span>
          </div>
          <h2 className="font-pixel text-3xl sm:text-4xl text-white tracking-wide">
            {t.drops.title}
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 p-1.5 bg-black/60 border-2 border-purple-900/60 rounded-lg">
          {PRODUCT_CATEGORIES.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.id] || Boxes;
            const isActive = activeCategory === cat.id;
            const catName = lang === 'vi' ? cat.nameVi : cat.nameEn;
            return (
              <button
                key={cat.id}
                onClick={() => handleTabChange(cat.id)}
                className={`pixel-btn px-3.5 py-2 rounded text-base font-pixel flex items-center gap-1.5 transition-all tracking-wider ${
                  isActive
                    ? 'bg-[#fbbf24] text-[#120726] font-extrabold border-2 border-[#fef08a] shadow-[0_3px_0_#92400e]'
                    : 'bg-[#22143b] text-purple-200 border border-purple-900/80 hover:text-white hover:border-purple-400'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{catName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Note under grid */}
      <div className="mt-8 p-4 bg-retro-card/70 border-2 border-purple-900/60 rounded text-center text-xs sm:text-sm text-purple-200 font-sans">
        {t.drops.note}
      </div>

    </section>
  );
}
