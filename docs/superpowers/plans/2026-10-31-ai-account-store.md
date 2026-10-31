# AI Account Store (WorkOS Launch Week Aesthetic) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-converting, 8-bit retro pixel-art Landing Page for selling ChatGPT & Claude accounts based on the WorkOS Launch Week design aesthetic by Oğuz Yağız Kara, integrated seamlessly into `IntroduceMySelf/store/` with dual 1-click CTAs (Discord & Zalo) and zero ads.

**Architecture:** A lightweight React 18 single-page application bundled with Vite and styled with Tailwind CSS, utilizing Web Audio API for custom synthesized 8-bit sound effects without external audio files. The built assets are served statically under `/store/` on GitHub Pages (`tommydatlc.github.io/IntroduceMySelf/store/`).

**Tech Stack:** React 18, Vite 6, Tailwind CSS 3, Lucide React, Web Audio API, HTML5 Canvas/SVG, Google Fonts (Silkscreen, Inter).

## Global Constraints

- **Strict Ad-Free Policy:** The `/store` directory must NEVER include Monetag ad scripts, popups, or external trackers.
- **Base Path Compliance:** All internal asset paths and Vite configuration must use `base: './'` or `base: '/IntroduceMySelf/store/'` so assets resolve cleanly on GitHub Pages.
- **Dual CTA Standard:** Every product card must provide two distinct 3D bevel buttons: Primary CTA for Discord (`https://discord.gg/DqPe8dnAMP`) and Secondary CTA for Zalo / Direct Chat.
- **Clean Fallbacks:** Web Audio synthesizer must silently no-op if user agent blocks audio autoplay.
- **Windows Shell Command:** Always use `npm.cmd` instead of `npm` to avoid PowerShell script execution restriction.

---

### Task 1: Project Scaffolding & Tailwind Retro Configuration

**Files:**
- Create: `F:\Code\IntroduceMySelf\store\package.json`
- Create: `F:\Code\IntroduceMySelf\store\vite.config.js`
- Create: `F:\Code\IntroduceMySelf\store\tailwind.config.js`
- Create: `F:\Code\IntroduceMySelf\store\postcss.config.js`
- Create: `F:\Code\IntroduceMySelf\store\index.html`
- Create: `F:\Code\IntroduceMySelf\store\src\index.css`
- Create: `F:\Code\IntroduceMySelf\store\src\main.jsx`
- Create: `F:\Code\IntroduceMySelf\store\src\App.jsx`

**Interfaces:**
- Produces: Working React + Vite development and build pipeline in `F:\Code\IntroduceMySelf\store\`.

- [ ] **Step 1: Create package.json and project configuration files**

Write `F:\Code\IntroduceMySelf\store\package.json`:
```json
{
  "name": "evernerd-ai-store",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "lucide-react": "^0.460.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "^2.5.4"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "vite": "^6.0.1"
  }
}
```

Write `F:\Code\IntroduceMySelf\store\vite.config.js`:
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
```

Write `F:\Code\IntroduceMySelf\store\postcss.config.js`:
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Write `F:\Code\IntroduceMySelf\store\tailwind.config.js`:
```javascript
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
          muted: '#94a3b8',
          terminal: '#22c55e'
        }
      },
      fontFamily: {
        pixel: ['"Silkscreen"', '"Press Start 2P"', 'monospace'],
        sans: ['"Bahnschrift"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"Consolas"', '"Courier New"', 'monospace']
      },
      boxShadow: {
        'pixel-sm': '2px 2px 0px #000000',
        'pixel': '4px 4px 0px #000000',
        'pixel-lg': '6px 6px 0px #000000',
        'glow-mint': '0 0 15px rgba(16, 163, 127, 0.4)',
        'glow-amber': '0 0 15px rgba(224, 108, 75, 0.4)',
        'glow-combo': '0 0 20px rgba(99, 102, 241, 0.4)',
      }
    },
  },
  plugins: [],
};
```

Write `F:\Code\IntroduceMySelf\store\index.html`:
```html
<!DOCTYPE html>
<html lang="vi" class="dark">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2310a37f'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>EVERNERD // AI DROP STORE — Tài khoản ChatGPT & Claude Chính Chủ</title>
    <meta name="description" content="Website bán tài khoản ChatGPT Plus và Claude Pro chính chủ kích hoạt tức thì. Bảo hành 1-đổi-1 toàn thời gian. Phong cách WorkOS Launch Week 8-bit retro." />
    <!-- Google Fonts: Silkscreen for 8-bit headers & Inter for crisp readability -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Silkscreen:wght@400;700&display=swap" rel="stylesheet">
  </head>
  <body class="bg-retro-bg text-retro-text antialiased selection:bg-retro-mint selection:text-black">
    <div id="root"></div>
    <script type="module" src="./src/main.jsx"></script>
  </body>
</html>
```

Write `F:\Code\IntroduceMySelf\store\src\index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Scanline and CRT filter */
.scanlines {
  background: linear-gradient(
    rgba(18, 16, 16, 0) 50%, 
    rgba(0, 0, 0, 0.3) 50%
  );
  background-size: 100% 4px;
  pointer-events: none;
}

/* Pixel dot matrix pattern */
.dot-matrix {
  background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Pixel border utilities */
.pixel-border {
  border: 2px solid #2a3143;
  box-shadow: 4px 4px 0px #000000;
}

.pixel-border:hover {
  border-color: #3b455d;
}

/* 3D Bevel button active press */
.pixel-btn {
  box-shadow: 3px 3px 0px #000000;
  transition: all 0.1s ease-in-out;
}

.pixel-btn:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0px #000000;
}
```

Write `F:\Code\IntroduceMySelf\store\src\main.jsx`:
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Write `F:\Code\IntroduceMySelf\store\src\App.jsx`:
```jsx
import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-retro-bg text-retro-text dot-matrix font-sans relative">
      <div className="fixed inset-0 scanlines z-50 pointer-events-none opacity-40"></div>
      <div className="relative z-10 p-8 text-center">
        <h1 className="font-pixel text-retro-mint text-3xl">EVERNERD // AI STORE</h1>
        <p className="text-retro-muted mt-2">Scaffolding check complete.</p>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Install dependencies**

Run:
```powershell
cd "F:\Code\IntroduceMySelf\store"
npm.cmd install
```
Expected: `added ... packages in ...s`

- [ ] **Step 3: Verify build passes**

Run:
```powershell
cd "F:\Code\IntroduceMySelf\store"
npm.cmd run build
```
Expected: `dist/index.html` and assets generated cleanly with exit code 0.

- [ ] **Step 4: Commit Task 1**

```powershell
git -C "F:\Code\IntroduceMySelf" add store/
git -C "F:\Code\IntroduceMySelf" commit -m "feat(store): scaffold React + Tailwind + Vite setup for AI store"
```

---

### Task 2: Data Model & Web Audio 8-bit Synthesizer

**Files:**
- Create: `F:\Code\IntroduceMySelf\store\src\data\products.js`
- Create: `F:\Code\IntroduceMySelf\store\src\utils\sound.js`
- Create: `F:\Code\IntroduceMySelf\store\src\data\__tests__\products.test.js`

**Interfaces:**
- Produces: `STORE_CONFIG` and `PRODUCTS` exported from `src/data/products.js`
- Produces: `playBeep(type)` and `soundState` functions from `src/utils/sound.js`

- [ ] **Step 1: Write products.js configuration file**

Write `F:\Code\IntroduceMySelf\store\src\data\products.js`:
```javascript
export const STORE_CONFIG = {
  storeTitle: 'EVERNERD // AI DROP STORE',
  version: 'v1.0.0-PROD',
  discordUrl: 'https://discord.gg/DqPe8dnAMP',
  zaloUrl: 'https://zalo.me/0987654321', // Liên hệ Zalo chính chủ
  portfolioUrl: '../index.html',
  author: 'Nguyễn Đức Đạt (@Evernerd)',
  supportHours: '24/7 Priority Support'
};

export const PRODUCTS = [
  // --- CHATGPT ECOSYSTEM ---
  {
    id: 'chatgpt-plus',
    category: 'chatgpt',
    categoryLabel: 'OpenAI Ecosystem',
    name: 'ChatGPT Plus',
    tagline: 'Kích hoạt trực tiếp trên email riêng của bạn',
    badge: 'HOT DROP',
    price: '499.000₫',
    originalPrice: '620.000₫',
    period: '/tháng',
    popular: true,
    themeColor: '#10a37f',
    features: [
      'Truy cập đầy đủ GPT-4o, GPT-4o mini không giới hạn',
      'Advanced Voice Mode (Nói chuyện giọng nói trực tiếp độ trễ cực thấp)',
      'Canvas: Chế độ làm việc chuyên sâu với code và văn bản',
      'DALL-E 3 tạo hình ảnh chất lượng cao & phân tích tài liệu',
      'Tạo & tùy biến Custom GPTs theo nhu cầu công việc',
      'Bảo hành 1-đổi-1 toàn thời gian sử dụng'
    ]
  },
  {
    id: 'chatgpt-team',
    category: 'chatgpt',
    categoryLabel: 'OpenAI Ecosystem',
    name: 'ChatGPT Team (Slot tiết kiệm)',
    tagline: 'Hạn mức cao gấp 2 lần, tối ưu chi phí 50%',
    badge: 'VALUE DROP',
    price: '290.000₫',
    originalPrice: '450.000₫',
    period: '/tháng',
    popular: false,
    themeColor: '#10a37f',
    features: [
      'Gấp đôi giới hạn tin nhắn so với gói Plus thông thường',
      'Workspace làm việc chung hoặc slot riêng tư tùy chọn',
      'Không dùng dữ liệu của bạn để huấn luyện mô hình AI',
      'Tốc độ phản hồi ưu tiên vào giờ cao điểm',
      'Bảo hành 1-đổi-1 toàn thời gian sử dụng'
    ]
  },
  {
    id: 'openai-api',
    category: 'chatgpt',
    categoryLabel: 'Developer Tools',
    name: 'OpenAI API Credits',
    tagline: 'Tài khoản API nạp sẵn hạn mức cho lập trình viên',
    badge: 'DEV PACK',
    price: 'Từ 250.000₫',
    originalPrice: '350.000₫',
    period: '/gói',
    popular: false,
    themeColor: '#10a37f',
    features: [
      'Tài khoản API cấp sẵn credit (5$ - 50$ - 100$)',
      'Hỗ trợ Tier 1 / Tier 2 rate limit cao, không bị 429',
      'Cung cấp API Key riêng, tích hợp ngay vào Cursor / Python / n8n',
      'Kèm hướng dẫn kết nối và quản lý token chi tiết',
      'Bảo hành số dư credit đến khi sử dụng hết'
    ]
  },

  // --- CLAUDE ECOSYSTEM ---
  {
    id: 'claude-pro',
    category: 'claude',
    categoryLabel: 'Anthropic Ecosystem',
    name: 'Claude Pro',
    tagline: 'Khả năng lập trình & tư duy xuất sắc nhất thế giới',
    badge: 'DEV CHOICE',
    price: '499.000₫',
    originalPrice: '620.000₫',
    period: '/tháng',
    popular: true,
    themeColor: '#e06c4b',
    features: [
      'Mô hình Claude 3.5 Sonnet & Claude 3 Opus siêu thông minh',
      'Tính năng Artifacts xem trước và chỉnh sửa code/UI thời gian thực',
      'Claude Projects: Tải lên tài liệu và phân tích kho dữ liệu riêng',
      'Hạn mức tin nhắn cao gấp 5 lần so với tài khoản Free',
      'Đọc hiểu tài liệu, đồ thị, văn bản dài lên đến 200k tokens',
      'Bảo hành 1-đổi-1 trọn chu kỳ'
    ]
  },
  {
    id: 'claude-code',
    category: 'claude',
    categoryLabel: 'Anthropic Ecosystem',
    name: 'Claude Code Access',
    tagline: 'Dành riêng cho kỹ sư phần mềm & lập trình viên CLI',
    badge: 'NEW TOOL',
    price: '550.000₫',
    originalPrice: '750.000₫',
    period: '/tháng',
    popular: false,
    themeColor: '#e06c4b',
    features: [
      'Hỗ trợ đầy đủ Claude Code CLI trực tiếp trong terminal',
      'Đọc, sửa đổi và tạo Git commit trên toàn bộ codebase lớn',
      'Tương thích mượt mà với VS Code, Cursor, JetBrains',
      'Tối ưu hóa tốc độ suy luận với Claude 3.5 Sonnet mới nhất',
      'Hỗ trợ setup ban đầu bởi lập trình viên'
    ]
  },

  // --- ULTIMATE COMBO ---
  {
    id: 'combo-titan',
    category: 'combo',
    categoryLabel: 'Ultimate Dual Power',
    name: 'Combo AI Titan (ChatGPT + Claude)',
    tagline: 'Sở hữu song song 2 trí tuệ nhân tạo mạnh nhất thế giới',
    badge: 'ULTIMATE DROP',
    price: '950.000₫',
    originalPrice: '1.240.000₫',
    period: '/tháng',
    popular: true,
    themeColor: 'holographic',
    features: [
      'Trọn bộ 01 tài khoản ChatGPT Plus & 01 tài khoản Claude Pro',
      'Kích hoạt độc lập trên email cá nhân của bạn',
      'Vừa viết văn, dịch thuật, tạo ảnh với GPT-4o vừa code siêu đỉnh với Claude 3.5',
      'Tiết kiệm gần 300.000₫ so với đăng ký riêng lẻ',
      'Kênh hỗ trợ VIP 1-kèm-1 giải đáp mọi thắc mắc kỹ thuật',
      'Bảo hành 1-đổi-1 toàn thời gian'
    ]
  }
];

export const FAQ_ITEMS = [
  {
    q: 'Tài khoản được nâng cấp trên email của tôi hay cấp tài khoản mới?',
    a: 'Đối với cả ChatGPT Plus và Claude Pro, chúng tôi ưu tiên nâng cấp trực tiếp trên chính email cá nhân của bạn để giữ nguyên toàn bộ lịch sử chat và dữ liệu quan trọng. Ngoài ra nếu bạn cần tài khoản cấp sẵn (tài khoản trắng mới 100%), chúng tôi vẫn hỗ trợ bàn giao kèm đầy đủ mật khẩu và email khôi phục.'
  },
  {
    q: 'Chính sách bảo hành 1-đổi-1 hoạt động như thế nào?',
    a: 'Tất cả các gói đều được bảo hành trọn vẹn trong suốt chu kỳ đăng ký (ví dụ 30 ngày cho gói tháng). Nếu tài khoản phát sinh bất kỳ sự cố nào như mất gói Plus/Pro hay bị lỗi hệ thống từ nhà cung cấp, bạn chỉ cần nhắn vào Discord hoặc Zalo, chúng tôi sẽ kiểm tra và đổi ngay tài khoản mới hoặc gia hạn lại trong vòng 5-15 phút.'
  },
  {
    q: 'Tôi có thể thanh toán qua những hình thức nào?',
    a: 'Chúng tôi hỗ trợ chuyển khoản ngân hàng qua VietQR (tất cả các ngân hàng tại Việt Nam) và ví điện tử MoMo. Sau khi chọn gói, bạn sẽ được kết nối trực tiếp với chúng tôi để xác nhận đơn và thanh toán nhanh chóng.'
  },
  {
    q: 'Claude Code là gì và tài khoản này có chạy được CLI trên máy tính không?',
    a: 'Claude Code là công cụ lập trình dòng lệnh (CLI agent) mới nhất của Anthropic, cho phép AI tự động đọc cấu trúc thư mục, chỉnh sửa code và chạy test ngay trên máy tính của bạn. Tài khoản Claude Pro/Team được cấp quyền sử dụng tính năng này.'
  }
];
```

- [ ] **Step 2: Write Web Audio API Synthesizer (sound.js)**

Write `F:\Code\IntroduceMySelf\store\src\utils\sound.js`:
```javascript
// Lightweight 8-bit Web Audio API Synthesizer (Zero external dependencies)
let audioCtx = null;
const STORAGE_KEY = 'evernerd_store_sfx_enabled';

export function isAudioEnabled() {
  if (typeof window === 'undefined') return false;
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === null ? true : stored === 'true';
}

export function setAudioEnabled(enabled) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, enabled ? 'true' : 'false');
}

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Play a synthesized 8-bit retro sound
 * @param {'blip' | 'select' | 'coin' | 'warp'} type
 */
export function playRetroSound(type = 'blip') {
  if (!isAudioEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'square'; // Classic 8-bit square wave

    if (type === 'blip') {
      // Short high pitch hover blip
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.05);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'select') {
      // Confirmation tone
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.setValueAtTime(880, now + 0.06); // A5
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    } else if (type === 'coin') {
      // Mario style dual-tone coin sound
      osc.frequency.setValueAtTime(987.77, now); // B5
      osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    }
  } catch (err) {
    // Silently handle any browser autoplay restrictions
  }
}
```

- [ ] **Step 3: Verify products configuration with a test script**

Create a quick scratch check:
```powershell
python -c "
with open(r'F:\Code\IntroduceMySelf\store\src\data\products.js', encoding='utf-8') as f:
    text = f.read()
assert 'chatgpt-plus' in text
assert 'claude-pro' in text
assert 'combo-titan' in text
print('products.js validated successfully!')
"
```
Expected: `products.js validated successfully!`

- [ ] **Step 4: Commit Task 2**

```powershell
git -C "F:\Code\IntroduceMySelf" add store/src/data/ store/src/utils/
git -C "F:\Code\IntroduceMySelf" commit -m "feat(store): add product catalog data and 8-bit web audio synthesizer"
```

---

### Task 3: Retro Navbar & Visual CRT Scanlines

**Files:**
- Create: `F:\Code\IntroduceMySelf\store\src\components\RetroNavbar.jsx`
- Modify: `F:\Code\IntroduceMySelf\store\src\App.jsx`

**Interfaces:**
- Consumes: `STORE_CONFIG` from `src/data/products.js`, `playRetroSound`, `isAudioEnabled`, `setAudioEnabled` from `src/utils/sound.js`
- Produces: Persistent navigation bar at top with audio toggle and brand link.

- [ ] **Step 1: Write RetroNavbar component**

Write `F:\Code\IntroduceMySelf\store\src\components\RetroNavbar.jsx`:
```jsx
import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ArrowLeft, Terminal, Sparkles } from 'lucide-react';
import { STORE_CONFIG } from '../data/products';
import { playRetroSound, isAudioEnabled, setAudioEnabled } from '../utils/sound';

export default function RetroNavbar() {
  const [audioOn, setAudioOn] = useState(true);

  useEffect(() => {
    setAudioOn(isAudioEnabled());
  }, []);

  const toggleAudio = () => {
    const nextState = !audioOn;
    setAudioOn(nextState);
    setAudioEnabled(nextState);
    if (nextState) {
      playRetroSound('coin');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-retro-bg/90 backdrop-blur-md border-b-2 border-retro-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left: Brand & Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-retro-card border-2 border-retro-mint flex items-center justify-center shadow-pixel-sm">
            <Terminal className="w-5 h-5 text-retro-mint animate-pulse" />
          </div>
          <div>
            <a 
              href="#" 
              onClick={() => playRetroSound('blip')}
              className="font-pixel text-sm sm:text-base text-white tracking-wider hover:text-retro-mint transition-colors flex items-center gap-2"
            >
              <span>EVERNERD</span>
              <span className="text-retro-mint">//</span>
              <span className="text-xs bg-retro-mint/20 text-retro-mint px-1.5 py-0.5 border border-retro-mint/40 hidden sm:inline-block">AI_STORE</span>
            </a>
          </div>
        </div>

        {/* Center: Live Status Indicator (Hidden on small mobile) */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-retro-card border border-retro-border text-xs font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-retro-muted">SYSTEM:</span>
          <span className="text-retro-terminal font-semibold">ALL DROPS IN STOCK</span>
        </div>

        {/* Right: Sound toggle and Back to Portfolio */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleAudio}
            onMouseEnter={() => playRetroSound('blip')}
            className={`pixel-btn px-2.5 py-1.5 text-xs font-pixel border-2 flex items-center gap-1.5 ${
              audioOn 
                ? 'bg-retro-card border-retro-mint text-retro-mint hover:bg-retro-mint/10' 
                : 'bg-retro-card border-retro-border text-retro-muted hover:border-gray-500'
            }`}
            title="Bật/Tắt hiệu ứng âm thanh 8-bit"
          >
            {audioOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{audioOn ? 'SFX: ON' : 'SFX: OFF'}</span>
          </button>

          <a
            href={STORE_CONFIG.portfolioUrl}
            onMouseEnter={() => playRetroSound('blip')}
            className="pixel-btn px-3 py-1.5 text-xs font-pixel bg-retro-card border-2 border-retro-border hover:border-white text-white hover:text-retro-mint transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>PORTFOLIO</span>
          </a>
        </div>

      </div>
    </header>
  );
}
```

- [ ] **Step 2: Mount RetroNavbar into App.jsx**

Update `F:\Code\IntroduceMySelf\store\src\App.jsx`:
```jsx
import React from 'react';
import RetroNavbar from './components/RetroNavbar';

export default function App() {
  return (
    <div className="min-h-screen bg-retro-bg text-retro-text dot-matrix font-sans relative overflow-x-hidden">
      {/* Visual CRT Scanline Overlay */}
      <div className="fixed inset-0 scanlines z-50 pointer-events-none opacity-30"></div>
      
      {/* Sticky Header */}
      <RetroNavbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center py-12">
          <h1 className="font-pixel text-retro-mint text-2xl sm:text-4xl">WORKSTATION UPGRADE // AI DROP WEEK</h1>
        </div>
      </main>
    </div>
  );
}
```

- [ ] **Step 3: Run build to verify clean compilation**

Run:
```powershell
cd "F:\Code\IntroduceMySelf\store"
npm.cmd run build
```
Expected: Build passes with code 0.

- [ ] **Step 4: Commit Task 3**

```powershell
git -C "F:\Code\IntroduceMySelf" add store/src/components/RetroNavbar.jsx store/src/App.jsx
git -C "F:\Code\IntroduceMySelf" commit -m "feat(store): add retro navbar and scanline overlay"
```

---

### Task 4: Hero Section with Interactive 8-bit Handheld Console

**Files:**
- Create: `F:\Code\IntroduceMySelf\store\src\components\HeroConsole.jsx`
- Modify: `F:\Code\IntroduceMySelf\store\src\App.jsx`

**Interfaces:**
- Consumes: `playRetroSound` from `src/utils/sound.js`
- Produces: Centerpiece hero section with 8-bit handheld console, animated LED screen, interactive buttons, and trust badges.

- [ ] **Step 1: Write HeroConsole component**

Write `F:\Code\IntroduceMySelf\store\src\components\HeroConsole.jsx`:
```jsx
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Zap, Lock, Sparkles, ChevronDown } from 'lucide-react';
import { playRetroSound } from '../utils/sound';

export default function HeroConsole() {
  const [activeCartridge, setActiveCartridge] = useState('chatgpt'); // 'chatgpt' | 'claude' | 'combo'
  const [displayText, setDisplayText] = useState('');
  
  const messages = {
    chatgpt: 'INSERTED: [CHATGPT_PLUS] // GPT-4o // VOICE MODE // CANVAS',
    claude: 'INSERTED: [CLAUDE_PRO] // SONNET 3.5 // ARTIFACTS // CODE',
    combo: 'INSERTED: [COMBO_TITAN] // ALL ENGINES ONLINE // 100% POWER'
  };

  useEffect(() => {
    let i = 0;
    const fullText = messages[activeCartridge];
    setDisplayText('');
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 25);
    return () => clearInterval(timer);
  }, [activeCartridge]);

  const handleSwitchCartridge = (type) => {
    playRetroSound('select');
    setActiveCartridge(type);
  };

  const scrollToDrops = () => {
    playRetroSound('coin');
    const el = document.getElementById('product-drops');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-4 pb-14 text-center">
      {/* Top Banner Tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border-2 border-retro-border bg-retro-card shadow-pixel-sm">
        <Sparkles className="w-3.5 h-3.5 text-retro-amber animate-spin" />
        <span className="font-pixel text-[11px] sm:text-xs text-retro-amber tracking-wider">
          LIMITED DROP // SPECIAL LAUNCH PRICING
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="font-pixel text-2xl sm:text-4xl md:text-5xl text-white tracking-wide max-w-4xl mx-auto leading-relaxed">
        NÂNG CẤP TÀI KHOẢN <span className="text-retro-mint underline decoration-wavy decoration-retro-mint/40">CHATGPT</span> & <span className="text-retro-amber underline decoration-wavy decoration-retro-amber/40">CLAUDE</span>
      </h1>
      <p className="mt-4 text-retro-muted text-sm sm:text-base max-w-2xl mx-auto font-sans">
        Kích hoạt trực tiếp trên email chính chủ của bạn. Đảm bảo riêng tư tuyệt đối, bảo hành 1-đổi-1 toàn thời gian và hỗ trợ kỹ thuật trực tiếp.
      </p>

      {/* 8-bit Handheld Gaming Console (WorkOS Analogue Pocket tribute) */}
      <div className="mt-10 max-w-md mx-auto px-4">
        <div className="bg-[#181c28] border-4 border-[#2d3448] p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(255,255,255,0.1)] relative">
          
          {/* Top Speaker Grille & Status LED */}
          <div className="flex items-center justify-between pb-3 border-b border-[#2d3448]">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/40"></span>
            </div>
            <div className="font-pixel text-[9px] text-[#64748b] tracking-widest">
              EVERBOY POCKET // 2026
            </div>
          </div>

          {/* Console Screen (Backlit LCD Retro display) */}
          <div className="mt-3 bg-[#0d1117] border-2 border-[#1e293b] p-4 rounded-lg relative overflow-hidden shadow-inner">
            <div className="absolute inset-0 bg-retro-mint/5 pointer-events-none"></div>
            
            {/* Screen Header */}
            <div className="flex justify-between items-center text-[10px] font-mono text-retro-muted border-b border-gray-800 pb-1.5 mb-2">
              <span>STATUS: READY</span>
              <span className="text-retro-mint font-pixel uppercase">{activeCartridge}</span>
            </div>

            {/* Typewriter message box */}
            <div className="h-16 flex items-center justify-center font-mono text-xs sm:text-sm text-retro-terminal px-2">
              <span>{displayText}</span>
              <span className="animate-ping inline-block w-2 h-4 bg-retro-terminal ml-1"></span>
            </div>

            {/* Cartridge Selection Buttons (Mock Game Slot) */}
            <div className="mt-3 pt-2 border-t border-gray-800 flex gap-2 justify-center">
              <button
                onClick={() => handleSwitchCartridge('chatgpt')}
                className={`px-2.5 py-1 text-[10px] font-pixel border transition-all ${
                  activeCartridge === 'chatgpt'
                    ? 'bg-retro-mint text-black border-retro-mint shadow-pixel-sm font-bold'
                    : 'bg-[#161b26] text-retro-muted border-gray-700 hover:border-gray-500'
                }`}
              >
                GPT-4o
              </button>
              <button
                onClick={() => handleSwitchCartridge('claude')}
                className={`px-2.5 py-1 text-[10px] font-pixel border transition-all ${
                  activeCartridge === 'claude'
                    ? 'bg-retro-amber text-black border-retro-amber shadow-pixel-sm font-bold'
                    : 'bg-[#161b26] text-retro-muted border-gray-700 hover:border-gray-500'
                }`}
              >
                CLAUDE 3.5
              </button>
              <button
                onClick={() => handleSwitchCartridge('combo')}
                className={`px-2.5 py-1 text-[10px] font-pixel border transition-all ${
                  activeCartridge === 'combo'
                    ? 'bg-gradient-to-r from-retro-mint to-retro-amber text-black border-white shadow-pixel-sm font-bold'
                    : 'bg-[#161b26] text-retro-muted border-gray-700 hover:border-gray-500'
                }`}
              >
                COMBO
              </button>
            </div>
          </div>

          {/* Console Controls (D-pad & Action buttons) */}
          <div className="mt-5 flex justify-between items-center px-4">
            {/* D-Pad */}
            <div className="w-16 h-16 relative">
              <div className="absolute inset-x-5 inset-y-0 bg-[#252c3d] rounded-sm border border-[#3b455d]"></div>
              <div className="absolute inset-x-0 inset-y-5 bg-[#252c3d] rounded-sm border border-[#3b455d]"></div>
              <div className="absolute inset-5 bg-[#1a202c] rounded-full"></div>
            </div>

            {/* A/B Action Buttons */}
            <div className="flex gap-3">
              <button 
                onClick={scrollToDrops}
                className="w-10 h-10 rounded-full bg-[#e06c4b] border-2 border-black flex items-center justify-center font-pixel text-xs text-black shadow-pixel-sm active:translate-y-0.5 active:shadow-none"
                title="Bấm để xem danh mục gói"
              >
                B
              </button>
              <button 
                onClick={scrollToDrops}
                className="w-10 h-10 rounded-full bg-[#10a37f] border-2 border-black flex items-center justify-center font-pixel text-xs text-black shadow-pixel-sm active:translate-y-0.5 active:shadow-none"
                title="Bấm để xem danh mục gói"
              >
                A
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* CTA Scroll Down */}
      <div className="mt-8">
        <button
          onClick={scrollToDrops}
          className="pixel-btn px-6 py-3 font-pixel text-xs sm:text-sm bg-retro-mint text-black border-2 border-black hover:bg-emerald-400 inline-flex items-center gap-2"
        >
          <span>CHỌN GÓI TÀI KHOẢN NGAY</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>

      {/* 3 Core Trust Badges */}
      <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 px-4">
        <div className="p-4 bg-retro-card border-2 border-retro-border flex items-center gap-3 text-left">
          <ShieldCheck className="w-6 h-6 text-retro-mint flex-shrink-0" />
          <div>
            <div className="font-pixel text-xs text-white">BẢO HÀNH 1-ĐỔI-1</div>
            <div className="text-xs text-retro-muted mt-0.5">Cam kết đổi mới ngay nếu có lỗi</div>
          </div>
        </div>
        <div className="p-4 bg-retro-card border-2 border-retro-border flex items-center gap-3 text-left">
          <Zap className="w-6 h-6 text-retro-amber flex-shrink-0" />
          <div>
            <div className="font-pixel text-xs text-white">BÀN GIAO 5-15 PHÚT</div>
            <div className="text-xs text-retro-muted mt-0.5">Kích hoạt nhanh chóng ngay sau khi đặt</div>
          </div>
        </div>
        <div className="p-4 bg-retro-card border-2 border-retro-border flex items-center gap-3 text-left">
          <Lock className="w-6 h-6 text-indigo-400 flex-shrink-0" />
          <div>
            <div className="font-pixel text-xs text-white">EMAIL CHÍNH CHỦ</div>
            <div className="text-xs text-retro-muted mt-0.5">100% riêng tư, không chia sẻ lịch sử</div>
          </div>
        </div>
      </div>

    </section>
  );
}
```

- [ ] **Step 2: Add HeroConsole to App.jsx**

Update `F:\Code\IntroduceMySelf\store\src\App.jsx`:
```jsx
import React from 'react';
import RetroNavbar from './components/RetroNavbar';
import HeroConsole from './components/HeroConsole';

export default function App() {
  return (
    <div className="min-h-screen bg-retro-bg text-retro-text dot-matrix font-sans relative overflow-x-hidden">
      <div className="fixed inset-0 scanlines z-50 pointer-events-none opacity-30"></div>
      <RetroNavbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <HeroConsole />
      </main>
    </div>
  );
}
```

- [ ] **Step 3: Run build to verify clean compilation**

Run:
```powershell
cd "F:\Code\IntroduceMySelf\store"
npm.cmd run build
```
Expected: Exit code 0.

- [ ] **Step 4: Commit Task 4**

```powershell
git -C "F:\Code\IntroduceMySelf" add store/src/components/HeroConsole.jsx store/src/App.jsx
git -C "F:\Code\IntroduceMySelf" commit -m "feat(store): add 8-bit interactive handheld console hero component"
```

---

### Task 5: Product Drops Grid & Product Card with Dual CTAs

**Files:**
- Create: `F:\Code\IntroduceMySelf\store\src\components\ProductCard.jsx`
- Create: `F:\Code\IntroduceMySelf\store\src\components\ProductDrops.jsx`
- Modify: `F:\Code\IntroduceMySelf\store\src\App.jsx`

**Interfaces:**
- Consumes: `PRODUCTS`, `STORE_CONFIG` from `src/data/products.js`, `playRetroSound` from `src/utils/sound.js`
- Produces: Complete pricing and account drop showcase with Discord and Zalo 1-click CTA buttons.

- [ ] **Step 1: Write ProductCard component**

Write `F:\Code\IntroduceMySelf\store\src\components\ProductCard.jsx`:
```jsx
import React from 'react';
import { Check, MessageSquare, Send, Sparkles } from 'lucide-react';
import { STORE_CONFIG } from '../data/products';
import { playRetroSound } from '../utils/sound';

export default function ProductCard({ product }) {
  const isCombo = product.category === 'combo';
  const isChatGPT = product.category === 'chatgpt';
  const isClaude = product.category === 'claude';

  const getDiscordLink = () => {
    return `${STORE_CONFIG.discordUrl}`;
  };

  const getZaloLink = () => {
    return `${STORE_CONFIG.zaloUrl}`;
  };

  return (
    <div 
      onMouseEnter={() => playRetroSound('blip')}
      className={`relative flex flex-col justify-between p-6 bg-retro-card border-2 transition-all duration-150 ${
        isCombo 
          ? 'border-indigo-500 shadow-glow-combo hover:border-indigo-400' 
          : isChatGPT 
            ? 'border-retro-border hover:border-retro-mint shadow-pixel' 
            : 'border-retro-border hover:border-retro-amber shadow-pixel'
      }`}
    >
      {/* Top Badge */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <span className="text-[10px] font-mono uppercase tracking-wider text-retro-muted">
          {product.categoryLabel}
        </span>
        <span 
          className={`px-2 py-0.5 text-[10px] font-pixel border ${
            isCombo 
              ? 'bg-gradient-to-r from-retro-mint to-retro-amber text-black border-white font-bold' 
              : isChatGPT 
                ? 'bg-retro-mint/20 text-retro-mint border-retro-mint/40' 
                : 'bg-retro-amber/20 text-retro-amber border-retro-amber/40'
          }`}
        >
          {product.badge}
        </span>
      </div>

      {/* Header Info */}
      <div>
        <h3 className="font-pixel text-lg sm:text-xl text-white tracking-wide">
          {product.name}
        </h3>
        <p className="mt-1 text-xs text-retro-muted min-h-[32px]">
          {product.tagline}
        </p>

        {/* Pricing Area */}
        <div className="mt-4 pt-4 border-t border-retro-border flex items-baseline gap-2">
          <span className="font-pixel text-2xl sm:text-3xl font-bold text-white">
            {product.price}
          </span>
          <span className="text-xs font-mono text-retro-muted">
            {product.period}
          </span>
          {product.originalPrice && (
            <span className="text-xs font-mono line-through text-gray-500 ml-auto">
              {product.originalPrice}
            </span>
          )}
        </div>

        {/* Features Checklist */}
        <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-gray-300">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className={`p-0.5 border mt-0.5 ${
                isChatGPT ? 'border-retro-mint text-retro-mint' : isClaude ? 'border-retro-amber text-retro-amber' : 'border-indigo-400 text-indigo-400'
              }`}>
                <Check className="w-3 h-3" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Dual CTA Buttons */}
      <div className="mt-8 pt-6 border-t border-retro-border space-y-2.5">
        {/* Primary CTA: Discord */}
        <a
          href={getDiscordLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playRetroSound('coin')}
          className={`pixel-btn w-full py-2.5 px-4 font-pixel text-xs text-center border-2 border-black flex items-center justify-center gap-2 ${
            isCombo 
              ? 'bg-gradient-to-r from-retro-mint to-retro-amber text-black hover:opacity-95 font-bold' 
              : isChatGPT 
                ? 'bg-retro-mint text-black hover:bg-emerald-400 font-bold' 
                : 'bg-retro-amber text-black hover:bg-amber-400 font-bold'
          }`}
        >
          <Send className="w-3.5 h-3.5" />
          <span>ORDER VIA DISCORD</span>
        </a>

        {/* Secondary CTA: Zalo / Direct Chat */}
        <a
          href={getZaloLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playRetroSound('select')}
          className="pixel-btn w-full py-2 px-4 font-pixel text-xs text-center bg-[#1c2233] text-white border-2 border-retro-border hover:border-white hover:text-retro-mint flex items-center justify-center gap-2"
        >
          <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
          <span>CHAT ZALO / MESSENGER</span>
        </a>
      </div>

    </div>
  );
}
```

- [ ] **Step 2: Write ProductDrops component**

Write `F:\Code\IntroduceMySelf\store\src\components\ProductDrops.jsx`:
```jsx
import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import { playRetroSound } from '../utils/sound';

export default function ProductDrops() {
  const [filter, setFilter] = useState('all'); // 'all' | 'chatgpt' | 'claude'

  const handleFilter = (cat) => {
    playRetroSound('blip');
    setFilter(cat);
  };

  const filteredProducts = PRODUCTS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'chatgpt') return p.category === 'chatgpt' || p.category === 'combo';
    if (filter === 'claude') return p.category === 'claude' || p.category === 'combo';
    return true;
  });

  return (
    <section id="product-drops" className="py-12 border-t-2 border-retro-border">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="font-pixel text-xs text-retro-mint uppercase tracking-wider">
            // CATALOG DROPS 2026
          </div>
          <h2 className="font-pixel text-2xl sm:text-3xl text-white mt-1">
            DANH MỤC CÁC GÓI TÀI KHOẢN
          </h2>
          <p className="text-retro-muted text-xs sm:text-sm mt-1">
            Chọn gói AI phù hợp cho nhu cầu học tập, làm việc, nghiên cứu và lập trình.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex gap-2">
          <button
            onClick={() => handleFilter('all')}
            className={`pixel-btn px-3 py-1.5 text-xs font-pixel border-2 ${
              filter === 'all'
                ? 'bg-white text-black border-black font-bold'
                : 'bg-retro-card text-retro-muted border-retro-border hover:border-gray-500'
            }`}
          >
            TẤT CẢ
          </button>
          <button
            onClick={() => handleFilter('chatgpt')}
            className={`pixel-btn px-3 py-1.5 text-xs font-pixel border-2 ${
              filter === 'chatgpt'
                ? 'bg-retro-mint text-black border-black font-bold'
                : 'bg-retro-card text-retro-muted border-retro-border hover:border-retro-mint'
            }`}
          >
            CHATGPT
          </button>
          <button
            onClick={() => handleFilter('claude')}
            className={`pixel-btn px-3 py-1.5 text-xs font-pixel border-2 ${
              filter === 'claude'
                ? 'bg-retro-amber text-black border-black font-bold'
                : 'bg-retro-card text-retro-muted border-retro-border hover:border-retro-amber'
            }`}
          >
            CLAUDE
          </button>
        </div>
      </div>

      {/* Grid of Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </section>
  );
}
```

- [ ] **Step 3: Update App.jsx to include ProductDrops**

Update `F:\Code\IntroduceMySelf\store\src\App.jsx`:
```jsx
import React from 'react';
import RetroNavbar from './components/RetroNavbar';
import HeroConsole from './components/HeroConsole';
import ProductDrops from './components/ProductDrops';

export default function App() {
  return (
    <div className="min-h-screen bg-retro-bg text-retro-text dot-matrix font-sans relative overflow-x-hidden">
      <div className="fixed inset-0 scanlines z-50 pointer-events-none opacity-30"></div>
      <RetroNavbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <HeroConsole />
        <ProductDrops />
      </main>
    </div>
  );
}
```

- [ ] **Step 4: Run build to verify clean compilation**

Run:
```powershell
cd "F:\Code\IntroduceMySelf\store"
npm.cmd run build
```
Expected: Exit code 0.

- [ ] **Step 5: Commit Task 5**

```powershell
git -C "F:\Code\IntroduceMySelf" add store/src/components/ProductCard.jsx store/src/components/ProductDrops.jsx store/src/App.jsx
git -C "F:\Code\IntroduceMySelf" commit -m "feat(store): add product drops grid and dual CTA product cards"
```

---

### Task 6: Warranty Specs Matrix & FAQ Terminal

**Files:**
- Create: `F:\Code\IntroduceMySelf\store\src\components\WarrantySpecs.jsx`
- Create: `F:\Code\IntroduceMySelf\store\src\components\FaqTerminal.jsx`
- Modify: `F:\Code\IntroduceMySelf\store\src\App.jsx`

**Interfaces:**
- Consumes: `FAQ_ITEMS` from `src/data/products.js`, `playRetroSound` from `src/utils/sound.js`
- Produces: Warranty specification matrix and interactive DOS/Linux accordion FAQ terminal.

- [ ] **Step 1: Write WarrantySpecs component**

Write `F:\Code\IntroduceMySelf\store\src\components\WarrantySpecs.jsx`:
```jsx
import React from 'react';
import { Shield, Clock, Lock, Cpu } from 'lucide-react';
import { playRetroSound } from '../utils/sound';

export default function WarrantySpecs() {
  const specs = [
    {
      code: 'SPEC_01',
      title: 'BẢO HÀNH 1-ĐỔI-1',
      desc: 'Cam kết đổi tài khoản mới ngay lập tức hoặc hỗ trợ khắc phục sự cố trong suốt chu kỳ đăng ký.',
      icon: Shield,
      color: 'text-retro-mint'
    },
    {
      code: 'SPEC_02',
      title: 'KÍCH HOẠT SIÊU TỐC',
      desc: 'Bàn giao tài khoản trong vòng 5 - 15 phút sau khi xác nhận thanh toán. Có thể dùng ngay.',
      icon: Clock,
      color: 'text-retro-amber'
    },
    {
      code: 'SPEC_03',
      title: 'BẢO MẬT TUYỆT ĐỐI',
      desc: 'Tài khoản độc lập, nâng cấp trực tiếp trên email của bạn. Không ai có thể xem lịch sử chat.',
      icon: Lock,
      color: 'text-indigo-400'
    },
    {
      code: 'SPEC_04',
      title: 'SUPPORT BỞI DEVELOPER',
      desc: 'Hỗ trợ kỹ thuật thực chiến: cấu hình API token, Claude Code CLI và các extension lập trình.',
      icon: Cpu,
      color: 'text-emerald-400'
    }
  ];

  return (
    <section className="py-12 border-t-2 border-retro-border">
      <div className="mb-6">
        <span className="font-pixel text-xs text-retro-amber uppercase tracking-wider">
          // HARDWARE & SERVICE SPECIFICATIONS
        </span>
        <h2 className="font-pixel text-2xl sm:text-3xl text-white mt-1">
          TIÊU CHUẨN DỊCH VỤ & CAM KẾT
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {specs.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              onMouseEnter={() => playRetroSound('blip')}
              className="p-5 bg-retro-card border-2 border-retro-border hover:border-gray-400 transition-colors shadow-pixel-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-retro-muted mb-3 pb-2 border-b border-gray-800">
                  <span>{item.code}</span>
                  <Icon className={`w-4 h-4 ${item.color}`} />
                </div>
                <h3 className="font-pixel text-xs text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-retro-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 pt-2 text-[10px] font-mono text-retro-terminal flex items-center gap-1">
                <span>[VERIFIED_PROD]</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Write FaqTerminal component**

Write `F:\Code\IntroduceMySelf\store\src\components\FaqTerminal.jsx`:
```jsx
import React, { useState } from 'react';
import { Terminal, ChevronRight, ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/products';
import { playRetroSound } from '../utils/sound';

export default function FaqTerminal() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    playRetroSound('blip');
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-12 border-t-2 border-retro-border">
      <div className="mb-6">
        <span className="font-pixel text-xs text-retro-mint uppercase tracking-wider">
          // KNOWLEDGE BASE // FAQ
        </span>
        <h2 className="font-pixel text-2xl sm:text-3xl text-white mt-1">
          CÂU HỎI THƯỜNG GẶP
        </h2>
      </div>

      {/* Terminal Window Box */}
      <div className="bg-[#0b0f19] border-2 border-retro-border shadow-pixel">
        {/* Terminal Header */}
        <div className="bg-[#161c2a] px-4 py-2.5 border-b border-retro-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            <span className="ml-2 font-mono text-xs text-retro-muted">evernerd@store:~/faq$ ./read_instructions.sh</span>
          </div>
          <span className="font-pixel text-[10px] text-retro-muted">BASH_V5</span>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-6 space-y-3 font-mono">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="border border-[#1e2738] bg-[#0e1320] transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-3.5 flex items-center justify-between gap-3 text-sm text-white hover:text-retro-mint transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-retro-mint text-xs font-pixel">[{idx + 1}]</span>
                    <span className="font-sans font-medium">{item.q}</span>
                  </div>
                  {isOpen ? (
                    <ChevronDown className="w-4 h-4 text-retro-mint flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-retro-muted flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 border-t border-[#182133] text-xs sm:text-sm text-retro-muted font-sans leading-relaxed">
                    <div className="flex items-start gap-2">
                      <span className="text-retro-terminal font-mono font-bold">&gt;</span>
                      <p className="text-gray-300">{item.a}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Update App.jsx with WarrantySpecs and FaqTerminal**

Update `F:\Code\IntroduceMySelf\store\src\App.jsx`:
```jsx
import React from 'react';
import RetroNavbar from './components/RetroNavbar';
import HeroConsole from './components/HeroConsole';
import ProductDrops from './components/ProductDrops';
import WarrantySpecs from './components/WarrantySpecs';
import FaqTerminal from './components/FaqTerminal';

export default function App() {
  return (
    <div className="min-h-screen bg-retro-bg text-retro-text dot-matrix font-sans relative overflow-x-hidden">
      <div className="fixed inset-0 scanlines z-50 pointer-events-none opacity-30"></div>
      <RetroNavbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <HeroConsole />
        <ProductDrops />
        <WarrantySpecs />
        <FaqTerminal />
      </main>
    </div>
  );
}
```

- [ ] **Step 4: Run build to verify clean compilation**

Run:
```powershell
cd "F:\Code\IntroduceMySelf\store"
npm.cmd run build
```
Expected: Exit code 0.

- [ ] **Step 5: Commit Task 6**

```powershell
git -C "F:\Code\IntroduceMySelf" add store/src/components/WarrantySpecs.jsx store/src/components/FaqTerminal.jsx store/src/App.jsx
git -C "F:\Code\IntroduceMySelf" commit -m "feat(store): add warranty specs matrix and interactive FAQ terminal"
```

---

### Task 7: Retro Footer & Main Portfolio Integration

**Files:**
- Create: `F:\Code\IntroduceMySelf\store\src\components\RetroFooter.jsx`
- Modify: `F:\Code\IntroduceMySelf\store\src\App.jsx`
- Modify: `F:\Code\IntroduceMySelf\index.html` (Add navigation link to `/store/`)

**Interfaces:**
- Consumes: `STORE_CONFIG` from `src/data/products.js`, `playRetroSound` from `src/utils/sound.js`
- Produces: Complete production build in `store/dist` and entry link from main portfolio page.

- [ ] **Step 1: Write RetroFooter component**

Write `F:\Code\IntroduceMySelf\store\src\components\RetroFooter.jsx`:
```jsx
import React from 'react';
import { Send, MessageSquare, Youtube, Instagram, Mail, Heart } from 'lucide-react';
import { STORE_CONFIG } from '../data/products';
import { playRetroSound } from '../utils/sound';

export default function RetroFooter() {
  const socials = [
    { name: 'Discord Server', url: STORE_CONFIG.discordUrl, icon: Send },
    { name: 'Zalo / Chat', url: STORE_CONFIG.zaloUrl, icon: MessageSquare },
    { name: 'YouTube Channel', url: 'https://www.youtube.com/@Evernerd29', icon: Youtube },
    { name: 'Instagram', url: 'https://www.instagram.com/evernerden/reels/', icon: Instagram },
    { name: 'Email Liên Hệ', url: 'mailto:furama0068@gmail.com', icon: Mail }
  ];

  return (
    <footer className="mt-16 border-t-2 border-retro-border bg-[#07090e] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand */}
          <div className="text-center md:text-left">
            <div className="font-pixel text-sm text-white tracking-wider flex items-center justify-center md:justify-start gap-2">
              <span>EVERNERD // AI DROP STORE</span>
              <span className="text-[10px] text-retro-mint bg-retro-mint/10 border border-retro-mint/30 px-1.5 py-0.5">
                {STORE_CONFIG.version}
              </span>
            </div>
            <p className="text-xs text-retro-muted mt-1 font-mono">
              Crafted with 8-bit retro passion by {STORE_CONFIG.author}
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
                  className="pixel-btn px-3 py-1.5 bg-retro-card border border-retro-border hover:border-retro-mint text-xs text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-retro-mint" />
                  <span className="text-[11px] font-sans">{s.name}</span>
                </a>
              );
            })}
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="mt-8 pt-6 border-t border-gray-900 text-center text-[11px] text-gray-600 font-mono">
          © 2026 EVERNERD. All rights reserved. Không liên kết chính thức với OpenAI hay Anthropic — Chúng tôi cung cấp dịch vụ đăng ký tài khoản & hỗ trợ kỹ thuật độc lập.
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Update App.jsx to include RetroFooter**

Update `F:\Code\IntroduceMySelf\store\src\App.jsx`:
```jsx
import React from 'react';
import RetroNavbar from './components/RetroNavbar';
import HeroConsole from './components/HeroConsole';
import ProductDrops from './components/ProductDrops';
import WarrantySpecs from './components/WarrantySpecs';
import FaqTerminal from './components/FaqTerminal';
import RetroFooter from './components/RetroFooter';

export default function App() {
  return (
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
  );
}
```

- [ ] **Step 3: Add link to AI Store on main portfolio page (`F:\Code\IntroduceMySelf\index.html`)**

In `F:\Code\IntroduceMySelf\index.html`, add a glowing button in the header or hero:
```html
<a href="./store/dist/index.html" class="lang-btn" style="background: rgba(16, 163, 127, 0.2); border-color: #10a37f; color: #10a37f; font-weight: bold; text-decoration: none;">
  ⚡ AI Store (ChatGPT & Claude)
</a>
```

- [ ] **Step 4: Build production bundle**

Run:
```powershell
cd "F:\Code\IntroduceMySelf\store"
npm.cmd run build
```
Expected: `dist/index.html` and assets bundled successfully with exit code 0.

- [ ] **Step 5: Verify build works in preview or browser**

Run:
```powershell
python -c "
import os
dist_index = r'F:\Code\IntroduceMySelf\store\dist\index.html'
assert os.path.exists(dist_index), 'dist/index.html must exist'
print('Build verified! dist/index.html is ready for deployment.')
"
```
Expected: `Build verified! dist/index.html is ready for deployment.`

- [ ] **Step 6: Commit and push Task 7**

```powershell
git -C "F:\Code\IntroduceMySelf" add store/ index.html
git -C "F:\Code\IntroduceMySelf" commit -m "feat(store): finalize retro footer and connect AI store to main portfolio"
```
