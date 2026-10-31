import React from 'react';
import RetroNavbar from './components/RetroNavbar';

export default function App() {
  return (
    <div className="min-h-screen bg-retro-bg text-retro-text dot-matrix font-sans relative overflow-x-hidden">
      <div className="fixed inset-0 scanlines z-50 pointer-events-none opacity-30"></div>
      <RetroNavbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="border-2 border-retro-border bg-retro-card p-8 rounded shadow-pixel max-w-lg mx-auto text-center mt-12">
          <h1 className="font-pixel text-xl text-retro-mint mb-2">SYSTEM ACTIVE</h1>
          <p className="text-retro-muted text-xs font-mono">Navbar mounted and functioning cleanly.</p>
        </div>
      </main>
    </div>
  );
}
