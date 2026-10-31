/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        retro: {
          bg: '#0a0c12',
          card: '#131722',
          cardHover: '#181d2b',
          border: '#2a3143',
          mint: '#10a37f',
          mintGlow: '#2ed573',
          amber: '#e06c4b',
          amberGlow: '#f59e0b',
          text: '#ffffff',
          muted: '#8f9ba8',
          subtle: '#4b5563'
        }
      },
      fontFamily: {
        pixel: ['"Silkscreen"', 'monospace'],
        mono: ['"Courier New"', 'Courier', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'pixel': '0 0 0 2px #2a3143, 0 4px 0 0 #000000',
        'pixel-hover': '0 0 0 2px #10a37f, 0 6px 0 0 #10a37f40',
        'pixel-btn': 'inset -2px -2px 0px 0px rgba(0,0,0,0.6), inset 2px 2px 0px 0px rgba(255,255,255,0.2)',
        'pixel-btn-active': 'inset 2px 2px 0px 0px rgba(0,0,0,0.6)',
      }
    },
  },
  plugins: [],
};
