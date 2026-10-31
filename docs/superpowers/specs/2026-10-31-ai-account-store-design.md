# Design Document: AI Account Store (WorkOS Launch Week Aesthetic)

- **Date:** 2026-10-31
- **Author:** Nguyễn Đức Đạt (@Evernerd / @TommyDatLC) & Antigravity
- **Target Repository:** `F:\Code\IntroduceMySelf`
- **Sub-directory / Route:** `/store` (Deployable on GitHub Pages: `tommydatlc.github.io/IntroduceMySelf/store/`)
- **Status:** Approved (Ready for Implementation Planning)

---

## 1. Executive Summary & Background

### 1.1 Mục tiêu dự án
Xây dựng một Landing Page chuyên biệt nhằm giới thiệu và bán các gói tài khoản trí tuệ nhân tạo cao cấp (**ChatGPT** & **Claude**) với phong cách thị giác độc đáo, lấy cảm hứng từ trang **[WorkOS - Launch Week Website của Oğuz Yağız Kara](https://dribbble.com/shots/23825792-WorkOS-Launch-Week-Website)** (máy game retro 8-bit Analogue Pocket, bảng lưới các ngày Launch Week / Product Drops, badge pixel phát sáng, viền scanlines CRT, font monospace & pixel retro kết hợp nền dark mode tương phản cao).

### 1.2 Yêu cầu then chốt
- **Không quảng cáo:** Trang bán hàng giữ nguyên tắc sạch sẽ 100%, không chèn script pop-up hay banner quảng cáo Monetag để tối ưu độ uy tín và tỷ lệ chuyển đổi (CR).
- **Kêu gọi hành động (Dual CTA):** Mỗi thẻ sản phẩm tích hợp trực tiếp 2 nút bấm 1-click dẫn tới:
  1. Discord Server (`https://discord.gg/DqPe8dnAMP`) để tạo ticket nhận tài khoản.
  2. Zalo / Facebook Messenger cá nhân để chuyển khoản và giao dịch ngay.
- **Công nghệ triển khai:** React + Tailwind CSS, đóng gói tĩnh độc lập trong thư mục `F:\Code\IntroduceMySelf\store\` để dễ dàng deploy đồng bộ lên GitHub Pages hiện tại.

---

## 2. Kiến trúc hệ thống & Cấu trúc thư mục

### 2.1 Cấu trúc thư mục tại `F:\Code\IntroduceMySelf\store\`

```text
F:\Code\IntroduceMySelf\
├── store/                          # Toàn bộ mã nguồn trang bán tài khoản
│   ├── index.html                  # HTML template chứa font Google & meta tags SEO
│   ├── package.json                # Dependencies: react, react-dom, tailwindcss, lucide-react, vite
│   ├── vite.config.js              # Config base path: '/IntroduceMySelf/store/'
│   ├── tailwind.config.js          # Cấu hình màu retro, fonts, scanlines, drop-shadow pixel
│   ├── postcss.config.js
│   └── src/
│       ├── main.jsx                # Entrypoint khởi tạo React
│       ├── App.jsx                 # Layout mẹ, state âm thanh và smooth scroll
│       ├── index.css               # Hiệu ứng scanlines, CRT filter, pixel borders, font imports
│       ├── data/
│       │   └── products.js         # File dữ liệu duy nhất chứa toàn bộ thông tin sản phẩm & giá
│       ├── utils/
│       │   └── sound.js            # Web Audio API Synthesizer (tạo tiếng 8-bit blip không cần file mp3)
│       └── components/
│           ├── RetroNavbar.jsx     # Header: Logo pixel, status live, âm thanh toggle, nút về Portfolio
│           ├── HeroConsole.jsx     # Chiếc máy chơi game cầm tay retro 8-bit với màn hình LED tương tác
│           ├── ProductDrops.jsx    # Lưới danh mục các gói tài khoản (ChatGPT, Claude, Combo)
│           ├── ProductCard.jsx     # Thẻ băng game AI: Badge pixel, giá tiền, tính năng, Dual CTA
│           ├── WarrantySpecs.jsx   # Bảng thông số bảo hành 1-đổi-1 & cam kết bảo mật
│           ├── FaqTerminal.jsx     # Cửa sổ dòng lệnh Terminal giải đáp câu hỏi thường gặp
│           └── RetroFooter.jsx     # Chân trang & liên kết mạng xã hội chính chủ
├── index.html                      # Trang portfolio cá nhân hiện tại
└── ...
```

### 2.2 Quy trình Build & Deploy
- Trong quá trình phát triển: Chạy dev server bằng `npm run dev` tại cổng cục bộ.
- Khi triển khai: Chạy `npm run build` để xuất file bundle tĩnh trực tiếp vào thư mục công khai của repo, commit và push lên nhánh `main` của `https://github.com/TommyDatLC/IntroduceMySelf.git` để GitHub Pages tự động cập nhật.

---

## 3. Hệ thống thiết kế thị giác (Visual & Theming Specification)

### 3.1 Bảng màu (Color Palette)
- **Background chính:** `#0a0c12` (Cosmic Black / Đen than vũ trụ) với họa tiết chấm ma trận pixel.
- **Card Background:** `#131722` (Dark Slate) kết hợp viền đôi (Double Pixel Border).
- **Hệ ChatGPT (Mint Neon):**
  - Màu nhấn chính: `#10a37f` (OpenAI Green)
  - Glow accent: `#2ed573`
- **Hệ Claude (Retro Terracotta / Amber):**
  - Màu nhấn chính: `#e06c4b` (Anthropic Orange)
  - Glow accent: `#f59e0b`
- **Hệ Combo Đột phá (Holographic Rainbow Gradient):**
  - Viền chuyển màu động giữa `#10a37f` $\rightarrow$ `#6366f1` $\rightarrow$ `#ec4899` $\rightarrow$ `#f59e0b`.
- **Màu chữ & Ký hiệu:**
  - Chữ nổi bật: `#ffffff`
  - Chữ mô tả: `#94a3b8` (Phosphor gray)
  - Status active: `#22c55e` (Terminal green)

### 3.2 Phông chữ (Typography)
- **Font Pixel / Retro:** `Silkscreen` hoặc `Press Start 2P` cho Logo, Tiêu đề Drop, Huy hiệu và Giá tiền.
- **Font Đọc / UI (Readability):** `Bahnschrift` (kèm fallback `Inter`, `system-ui`) cho danh sách tính năng, mô tả và nội dung câu hỏi FAQ.

### 3.3 Hiệu ứng Retro (Retro Micro-Interactions)
- **Pixel Box-Shadow & Bevel:** Các nút bấm và thẻ sử dụng bóng đổ cứng không làm mờ (`box-shadow: 4px 4px 0px #000`), khi nhấn lún xuống `2px 2px 0px #000` tạo cảm giác xúc giác cơ học.
- **CRT Scanlines:** Lớp phủ kẻ ngang mờ (`linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)`) tạo cảm giác màn hình máy tính thập niên 90.
- **Web Audio 8-bit Synthesizer:** Tích hợp `AudioContext` phát tiếng blip nhẹ 440Hz $\rightarrow$ 880Hz (thời lượng 80ms) khi hover/click, có công tắc Mute/Unmute lưu vào `localStorage`.

---

## 4. Chi tiết các khối giao diện (Component Specifications)

### 4.1 RetroNavbar
- **Vị trí:** Cố định trên đỉnh màn hình (Sticky/Fixed) với nền đen mờ `backdrop-blur-md`.
- **Thành phần:**
  - Logo bên trái: `EVERNERD // AI_STORE [v1.0]` kèm icon pixel chip AI.
  - Đèn báo trung tâm: Chấm xanh lá nhấp nháy `[● ALL DROPS ONLINE]`.
  - Bên phải:
    - Nút bật tắt âm thanh: `[🔊 SFX: ON]` / `[🔇 SFX: OFF]`.
    - Nút điều hướng: `[← PORTFOLIO]` trỏ về trang chủ cá nhân.

### 4.2 HeroConsole (Cỗ máy chơi game AI)
- **Mô phỏng:** Thiết kế khung máy chơi game cổ điển Analogue Pocket bằng CSS thuần và SVG sắc nét.
- **Màn hình máy game (Screen Area):**
  - Màn hình xanh huỳnh quang hiển thị text gõ tự động:
    `INSERT COIN > SELECT AI SYSTEM: [CHATGPT_PLUS] OR [CLAUDE_PRO]`
  - Hai biểu tượng pixel đại diện cho ChatGPT và Claude đối đầu / tương tác.
- **Thanh Trust Badges bên dưới:**
  - `[🛡️ BẢO HÀNH 1-ĐỔI-1]` • `[⚡ BÀN GIAO 5-15 PHÚT]` • `[🔒 EMAIL CHÍNH CHỦ]`

### 4.3 ProductDrops & ProductCard (Lưới sản phẩm)
Hiển thị danh mục sản phẩm theo 3 nhóm chính:

1. **Hệ ChatGPT (Xanh Mint):**
   - **ChatGPT Plus (Chính chủ):** Nâng cấp trên email riêng, GPT-4o, Advanced Voice, Canvas, DALL-E 3.
   - **ChatGPT Team (Slot tiết kiệm):** Giới hạn tin nhắn gấp 2 lần, tiết kiệm chi phí.
   - **OpenAI API Key/Account:** Tài khoản nạp sẵn hạn mức cho developer.
2. **Hệ Claude (Cam Amber):**
   - **Claude Pro (Chính chủ):** Claude 3.5 Sonnet / Opus, Artifacts, Projects, tải tệp tài liệu lớn.
   - **Claude Code / Dev Specialist:** Dành cho lập trình viên cần làm việc với terminal & repository lớn.
3. **Thẻ đặc biệt — The Ultimate Combo (Holographic Drop):**
   - **Combo AI Titan (ChatGPT Plus + Claude Pro):** Cặp bài trùng AI mạnh nhất hiện nay với giá ưu đãi cực tốt.
4. **Cấu trúc mỗi ProductCard:**
   - Badge pixel trên góc (`[HOT DROP]`, `[DEV CHOICE]`, `[BEST VALUE]`).
   - Tên gói sản phẩm (Font retro đậm).
   - Giá tiền nổi bật (Giá khuyến mãi VND + Giá gốc gạch ngang).
   - 4-5 gạch đầu dòng tính năng chi tiết có icon pixel tick xanh.
   - **Cụm 2 nút bấm CTA:**
     - Nút 1 (Discord): Icon Discord + Chữ `Order via Discord` $\rightarrow$ Mở `https://discord.gg/DqPe8dnAMP`.
     - Nút 2 (Zalo/Messenger): Icon Chat + Chữ `Chat Zalo / Messenger` $\rightarrow$ Mở link Zalo/Messenger cá nhân.

### 4.4 WarrantySpecs (Bảng cam kết kỹ thuật)
- Thiết kế như bảng tra cứu phần cứng (Tech Spec Sheet) với 4 ô vuông ma trận:
  1. `SLA Bàn Giao`: Cam kết gửi tài khoản trong 5 - 15 phút sau khi xác nhận.
  2. `Chính Sách Lỗi`: 1-đổi-1 ngay lập tức nếu phát sinh lỗi trong suốt chu kỳ đăng ký.
  3. `Quyền Riêng Tư`: Tài khoản độc lập, không dùng chung mật khẩu hay lịch sử chat với người lạ.
  4. `Kỹ Sư Trực Tiếp`: Hỗ trợ cấu hình Claude Code, API và giải đáp kỹ thuật trực tiếp bởi coder.

### 4.5 FaqTerminal (Cửa sổ hỏi đáp MS-DOS / Linux)
- Thiết kế khung cửa sổ dòng lệnh với thanh tiêu đề retro `terminal@evernerd:~/faq$`.
- Gồm các câu hỏi phổ biến:
  - *"Tài khoản được kích hoạt trên email của tôi hay cấp tài khoản mới?"*
  - *"Phương thức thanh toán hỗ trợ những gì?"* (VietQR, MoMo, Chuyển khoản ngân hàng).
  - *"Claude Code là gì và tài khoản này có chạy được CLI không?"*
  - *"Quy trình bảo hành khi tài khoản gặp sự cố diễn ra như thế nào?"*
- Bấm vào câu hỏi sẽ mở rộng câu trả lời với hiệu ứng con trỏ nhấp nháy `_`.

### 4.6 RetroFooter
- Bản quyền `© 2026 EVERNERD. All Rights Reserved. Built with Retro Passion.`
- Hệ thống social link đồng bộ: Discord, Zalo, YouTube (`@Evernerd29`), TikTok (`@evernerd` / `@dong_code`), Instagram (`@evernerden`), Email (`furama0068@gmail.com`).

---

## 5. Mô hình dữ liệu (`src/data/products.js`)

```javascript
export const STORE_CONFIG = {
  discordUrl: 'https://discord.gg/DqPe8dnAMP',
  zaloUrl: 'https://zalo.me/0987654321', // Cập nhật số Zalo thực tế
  facebookUrl: 'https://www.facebook.com/profile.php?id=61586359562366',
  email: 'furama0068@gmail.com'
};

export const PRODUCTS = [
  {
    id: 'chatgpt-plus',
    category: 'chatgpt',
    name: 'ChatGPT Plus',
    tagline: 'Kích hoạt chính chủ trên email của bạn',
    badge: 'HOT DROP',
    price: '499.000₫',
    originalPrice: '620.000₫',
    period: '/tháng',
    features: [
      'Mô hình GPT-4o, GPT-4o mini không giới hạn',
      'Advanced Voice Mode (Nói chuyện giọng nói tự nhiên)',
      'Canvas tương tác code & viết văn chuyên sâu',
      'DALL-E 3 tạo ảnh & phân tích file tài liệu',
      'Bảo hành 1-đổi-1 trọn chu kỳ'
    ],
    themeColor: '#10a37f'
  },
  {
    id: 'claude-pro',
    category: 'claude',
    name: 'Claude Pro',
    tagline: 'Trí tuệ vượt bậc từ Anthropic',
    badge: 'DEV CHOICE',
    price: '499.000₫',
    originalPrice: '620.000₫',
    period: '/tháng',
    features: [
      'Mô hình Claude 3.5 Sonnet & Claude 3 Opus',
      'Tính năng Artifacts xem trước UI/Code trực tiếp',
      'Claude Projects quản lý kho tài liệu riêng',
      'Giới hạn tin nhắn cao gấp 5 lần bản Free',
      'Bảo hành 1-đổi-1 trọn chu kỳ'
    ],
    themeColor: '#e06c4b'
  },
  {
    id: 'combo-titan',
    category: 'combo',
    name: 'Combo AI Titan (ChatGPT + Claude)',
    tagline: 'Bộ đôi mô hình AI mạnh nhất hành tinh',
    badge: 'ULTIMATE DROP',
    price: '950.000₫',
    originalPrice: '1.240.000₫',
    period: '/tháng',
    features: [
      'Trọn bộ tài khoản ChatGPT Plus & Claude Pro',
      'Được kích hoạt độc lập trên email của bạn',
      'Tiết kiệm tối đa chi phí đăng ký riêng lẻ',
      'Hỗ trợ kỹ thuật ưu tiên 24/7 qua Discord',
      'Bảo hành 1-đổi-1 toàn thời gian'
    ],
    themeColor: 'holographic'
  }
  // Các gói bổ sung: ChatGPT Team, Claude Code Access, OpenAI API...
];
```

---

## 6. Tiêu chí kiểm thử & Nghiệm thu (Verification Checklist)

1. **Hiển thị giao diện:**
   - Máy game retro 8-bit ở Hero hiển thị chuẩn xác, không bị biến dạng trên cả desktop lẫn mobile.
   - Thẻ sản phẩm hiển thị đủ badge, giá, tính năng, và 2 nút CTA rõ ràng.
2. **Tương tác & Âm thanh:**
   - Nút bật/tắt âm thanh hoạt động chuẩn; khi bật, rê chuột hoặc bấm nút phát tiếng blip 8-bit êm tai.
   - Trạng thái âm thanh được nhớ sau khi F5 (nhờ `localStorage`).
3. **Liên kết điều hướng (CTAs):**
   - Nút Discord dẫn đúng `https://discord.gg/DqPe8dnAMP` trong tab mới.
   - Nút Zalo / Messenger mở đúng ứng dụng liên hệ.
   - Nút `[← PORTFOLIO]` đưa người dùng quay lại trang chủ thành công.
4. **Không có mã quảng cáo Monetag:** Kiểm tra mã nguồn trang `store/` không chứa bất kỳ đoạn mã script ads hoặc popup nào.
5. **Khả năng Deploy:** Dự án build thành công bằng `npm run build` không phát sinh lỗi bundle.
