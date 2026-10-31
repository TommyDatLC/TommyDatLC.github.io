import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-retro-bg text-retro-text dot-matrix font-sans relative overflow-x-hidden p-8 flex flex-col items-center justify-center">
      <div className="fixed inset-0 scanlines z-50 pointer-events-none opacity-30"></div>
      <div className="border-2 border-retro-border bg-retro-card p-8 rounded shadow-pixel max-w-lg w-full text-center">
        <h1 className="font-pixel text-2xl text-retro-mint mb-2">EVERNERD // AI STORE</h1>
        <p className="text-retro-muted text-sm font-mono mb-4">WorkOS Retro Console Launch Week Aesthetic</p>
        <button className="pixel-btn px-4 py-2 bg-retro-mint text-black font-pixel text-xs uppercase">
          System Ready
        </button>
      </div>
    </div>
  );
}
