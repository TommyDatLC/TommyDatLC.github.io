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
          bg: '#0c0714',
          card: '#160e24',
          cardHover: '#1f1433',
          border: '#352352',
          purple: '#a855f7',
          purpleGlow: '#c084fc',
          gold: '#fbbf24',
          goldGlow: '#f59e0b',
          mint: '#a855f7',
          mintGlow: '#c084fc',
          amber: '#fbbf24',
          amberGlow: '#f59e0b',
          text: '#ffffff',
          muted: '#a497be',
          subtle: '#634f82'
        }
      },
      fontFamily: {
        pixel: ['"VT323"', 'monospace'],
        mono: ['"Courier New"', 'Courier', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'pixel': '0 0 0 2px #352352, 0 4px 0 0 #000000',
        'pixel-hover': '0 0 0 2px #a855f7, 0 6px 0 0 #a855f740',
        'pixel-gold': '0 0 0 2px #fbbf24, 0 6px 0 0 #fbbf2440',
        'pixel-btn': 'inset -2px -2px 0px 0px rgba(0,0,0,0.6), inset 2px 2px 0px 0px rgba(255,255,255,0.2)',
        'pixel-btn-active': 'inset 2px 2px 0px 0px rgba(0,0,0,0.6)',
      }
    },
  },
  plugins: [],
};
