import React, { useState } from 'react';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data/products';
import ProductCard from './ProductCard';
import { playRetroSound } from '../utils/sound';
import { Boxes, Bot, Sparkles, Zap } from 'lucide-react';

const CATEGORY_ICONS = {
  all: Boxes,
  chatgpt: Bot,
  claude: Sparkles,
  combo: Zap,
};

export default function ProductDrops() {
  const [activeCategory, setActiveCategory] = useState('all');

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
          <div className="text-xs font-mono text-retro-gold mb-1 flex items-center gap-1.5 font-semibold">
            <span className="w-2 h-2 rounded-full bg-retro-gold animate-pulse"></span>
            <span>AVAILABLE INVENTORY // PURPLE &amp; GOLD DROPS</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl text-white tracking-wide">
            CÁC GÓI TÀI KHOẢN ĐANG MỞ BÁN
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 p-1 bg-black/60 border border-purple-900/60 rounded-lg">
          {PRODUCT_CATEGORIES.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.id] || Boxes;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleTabChange(cat.id)}
                className={`pixel-btn px-3 py-1.5 rounded text-xs font-pixel flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-retro-gold text-black font-bold'
                    : 'bg-transparent text-purple-200/80 hover:text-white hover:bg-purple-900/30'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
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
      <div className="mt-8 p-4 bg-retro-card/60 border border-purple-900/60 rounded text-center text-xs text-purple-200/80 font-mono">
        💡 Bạn muốn đặt tài khoản doanh nghiệp số lượng lớn hoặc có thắc mắc riêng? Hãy liên hệ trực tiếp qua Discord hoặc Zalo để được hỗ trợ tốt nhất.
      </div>

    </section>
  );
}
