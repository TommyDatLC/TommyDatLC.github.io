import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import RetroNavbar from './components/RetroNavbar';
import HeroConsole from './components/HeroConsole';
import ProductDrops from './components/ProductDrops';
import WarrantySpecs from './components/WarrantySpecs';
import FaqTerminal from './components/FaqTerminal';
import RetroFooter from './components/RetroFooter';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-retro-bg text-retro-text dot-matrix font-sans relative overflow-x-hidden">
        <div className="fixed inset-0 scanlines z-50 pointer-events-none opacity-30"></div>
        <RetroNavbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <HeroConsole />
          <ProductDrops />
          <WarrantySpecs />
          <FaqTerminal />
        </main>
        <RetroFooter />
      </div>
    </LanguageProvider>
  );
}
