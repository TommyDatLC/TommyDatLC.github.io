export const STORE_CONFIG = {
  storeName: "EVERNERD // AI DROP STORE",
  version: "v1.2.0",
  author: "Nguyễn Đức Đạt (Evernerd)",
  discordUrl: "https://discord.gg/DqPe8dnAMP",
  zaloUrl: "https://zalo.me/0968940842",
  messengerUrl: "https://m.me/evernerd29",
  contactPhone: "0968.940.842",
};

export const PRODUCT_CATEGORIES = [
  { id: "all", nameVi: "TẤT CẢ DROPS", nameEn: "ALL DROPS", icon: "Boxes" },
  { id: "chatgpt", nameVi: "CHATGPT ECOSYSTEM", nameEn: "CHATGPT ECOSYSTEM", icon: "Bot" },
  { id: "claude", nameVi: "CLAUDE ECOSYSTEM", nameEn: "CLAUDE ECOSYSTEM", icon: "Sparkles" },
  { id: "combo", nameVi: "COMBO TIẾT KIỆM", nameEn: "VALUE COMBOS", icon: "Zap" },
];

export const PRODUCTS = [
  {
    id: "chatgpt-plus-personal",
    category: "chatgpt",
    title: {
      vi: "ChatGPT Plus (Chính Chủ)",
      en: "ChatGPT Plus (Personal Email)"
    },
    tagline: {
      vi: "Kích hoạt trực tiếp trên email cá nhân của bạn",
      en: "Direct activation on your private personal email"
    },
    badge: {
      vi: "HOT DROP",
      en: "HOT DROP"
    },
    badgeType: "hot",
    priceOriginal: "550.000đ",
    priceSale: "420.000đ",
    priceSaleUsd: "$17",
    billingCycle: {
      vi: "/ tháng",
      en: "/ month"
    },
    features: {
      vi: [
        "Truy cập không giới hạn GPT-4o, Canvas & o1-preview",
        "Kích hoạt chính chủ 100% trên email cá nhân của bạn",
        "Tính năng Advanced Voice tương tác giọng nói siêu thực",
        "Sáng tạo hình ảnh đỉnh cao cùng DALL-E 3 & Custom GPTs",
        "Bảo hành 1-đổi-1 trọn gói 30 ngày sử dụng"
      ],
      en: [
        "Unlimited access to GPT-4o, Canvas & OpenAI o1-preview",
        "100% official activation on your personal email",
        "Ultra-realistic Advanced Voice Mode interactions",
        "High-definition image generation via DALL-E 3 & Custom GPTs",
        "Full 1-to-1 replacement warranty for 30 days"
      ]
    },
    discordQuery: "order_chatgpt_plus",
    zaloQuery: {
      vi: "Tôi muốn mua gói ChatGPT Plus Chính Chủ",
      en: "I would like to order ChatGPT Plus Personal Plan"
    },
    stock: "IN_STOCK",
    deliveryTime: {
      vi: "5 - 15 phút",
      en: "5 - 15 mins"
    }
  },
  {
    id: "chatgpt-team-slot",
    category: "chatgpt",
    title: {
      vi: "ChatGPT Team (Slot Riêng)",
      en: "ChatGPT Team (Dedicated Slot)"
    },
    tagline: {
      vi: "Hạn mức tin nhắn cao gấp đôi, tiết kiệm 50%",
      en: "2X message caps, dedicated workspace, save 50%"
    },
    badge: {
      vi: "TIẾT KIỆM",
      en: "BEST VALUE"
    },
    badgeType: "best",
    priceOriginal: "400.000đ",
    priceSale: "260.000đ",
    priceSaleUsd: "$11",
    billingCycle: {
      vi: "/ tháng",
      en: "/ month"
    },
    features: {
      vi: [
        "Hạn mức gửi tin GPT-4o cao gấp 2 lần bản Plus",
        "Không gian làm việc bảo mật cao cấp (Workspace riêng)",
        "Không bị train dữ liệu theo chính sách Enterprise của OpenAI",
        "Hỗ trợ đầy đủ Code Interpreter, DALL-E 3 và Canvas",
        "Hỗ trợ kỹ thuật 24/7 và gia hạn hàng tháng liên tục"
      ],
      en: [
        "2X higher message cap for GPT-4o compared to standard Plus",
        "Dedicated secure enterprise workspace",
        "Zero model training on your data by OpenAI policy",
        "Full access to Code Interpreter, DALL-E 3, and Canvas",
        "24/7 technical assistance and seamless renewal"
      ]
    },
    discordQuery: "order_chatgpt_team",
    zaloQuery: {
      vi: "Tôi muốn mua gói ChatGPT Team Slot Riêng",
      en: "I would like to order ChatGPT Team Dedicated Slot"
    },
    stock: "IN_STOCK",
    deliveryTime: {
      vi: "5 - 15 phút",
      en: "5 - 15 mins"
    }
  },
  {
    id: "openai-api-credits",
    category: "chatgpt",
    title: {
      vi: "OpenAI API Key (Pre-funded)",
      en: "OpenAI API Key (Pre-funded)"
    },
    tagline: {
      vi: "Cấp sẵn hạn mức số dư nạp trực tiếp cho Dev",
      en: "Pre-loaded usage credit for developers and bots"
    },
    badge: {
      vi: "DEV CHOICE",
      en: "DEV CHOICE"
    },
    badgeType: "dev",
    priceOriginal: "350.000đ",
    priceSale: "250.000đ",
    priceSaleUsd: "$10",
    billingCycle: {
      vi: "/ credit",
      en: "/ credit"
    },
    features: {
      vi: [
        "Key API sạch, kích hoạt Tier 1/Tier 2 chính quy",
        "Tích hợp ngay vào Cursor, VS Code, Next.js, LangChain",
        "Rate limit cao, không lo gián đoạn luồng phát triển",
        "Tùy chọn nạp số dư linh hoạt theo nhu cầu dự án",
        "Hướng dẫn cấu hình bảo mật key tránh rò rỉ"
      ],
      en: [
        "Clean authentic API keys provisioned with Tier 1/2 rates",
        "Instant plug & play with Cursor, VS Code, Next.js & LangChain",
        "High RPM rate limits preventing pipeline throttles",
        "Flexible credit top-ups matching project workload",
        "Best practice security advisory for key safety"
      ]
    },
    discordQuery: "order_openai_api",
    zaloQuery: {
      vi: "Tôi muốn mua OpenAI API Key Pre-funded",
      en: "I would like to order OpenAI API Pre-funded Key"
    },
    stock: "IN_STOCK",
    deliveryTime: {
      vi: "10 - 20 phút",
      en: "10 - 20 mins"
    }
  },
  {
    id: "claude-pro-personal",
    category: "claude",
    title: {
      vi: "Claude Pro (Chính Chủ)",
      en: "Claude Pro (Personal Email)"
    },
    tagline: {
      vi: "Đỉnh cao code & văn phong cùng Claude 3.5 Sonnet",
      en: "Ultimate code synthesis & logic with Claude 3.5 Sonnet"
    },
    badge: {
      vi: "BEST FOR DEV",
      en: "BEST FOR DEV"
    },
    badgeType: "hot",
    priceOriginal: "550.000đ",
    priceSale: "420.000đ",
    priceSaleUsd: "$17",
    billingCycle: {
      vi: "/ tháng",
      en: "/ month"
    },
    features: {
      vi: [
        "Truy cập không giới hạn Claude 3.5 Sonnet & Claude 3.5 Haiku",
        "Mở khóa tính năng Artifacts tương tác giao diện trực quan",
        "Tạo Projects quản lý ngữ cảnh tài liệu chuyên sâu",
        "Kích hoạt chuẩn email cá nhân, giữ trọn vẹn dữ liệu chat",
        "Bảo hành 1-đổi-1 nhanh chóng trọn thời gian sử dụng"
      ],
      en: [
        "Unlimited access to Claude 3.5 Sonnet & Claude 3.5 Haiku",
        "Interactive UI preview with Claude Artifacts",
        "Custom Projects for massive code repository context",
        "Activated cleanly on your private email address",
        "Fast 1-to-1 replacement warranty for full billing cycle"
      ]
    },
    discordQuery: "order_claude_pro",
    zaloQuery: {
      vi: "Tôi muốn mua gói Claude Pro Chính Chủ",
      en: "I would like to order Claude Pro Personal Plan"
    },
    stock: "IN_STOCK",
    deliveryTime: {
      vi: "5 - 15 phút",
      en: "5 - 15 mins"
    }
  },
  {
    id: "claude-team-slot",
    category: "claude",
    title: {
      vi: "Claude Team (Workspace)",
      en: "Claude Team (Workspace Slot)"
    },
    tagline: {
      vi: "Gói mở rộng cho team & lập trình viên chuyên nghiệp",
      en: "Expanded limits for teams & professional developers"
    },
    badge: {
      vi: "DEV CHOICE",
      en: "DEV CHOICE"
    },
    badgeType: "dev",
    priceOriginal: "450.000đ",
    priceSale: "310.000đ",
    priceSaleUsd: "$13",
    billingCycle: {
      vi: "/ tháng",
      en: "/ month"
    },
    features: {
      vi: [
        "Hạn mức sử dụng cao hơn Claude Pro thông thường",
        "Chia sẻ không gian làm việc Projects với bộ nhớ lớn",
        "Khả năng phân tích tài liệu và mã nguồn phức tạp",
        "Cam kết tài khoản sạch, ổn định không khóa bất thường",
        "Hỗ trợ kỹ thuật cấu hình trực tiếp từ lập trình viên"
      ],
      en: [
        "Significantly higher message quotas than standard Pro",
        "Shared Team Projects workspace with deep memory buffer",
        "Superior long-context codebase understanding",
        "Zero bans, enterprise-grade account stability",
        "Direct software engineer setup assistance"
      ]
    },
    discordQuery: "order_claude_team",
    zaloQuery: {
      vi: "Tôi muốn mua gói Claude Team Workspace",
      en: "I would like to order Claude Team Workspace Slot"
    },
    stock: "IN_STOCK",
    deliveryTime: {
      vi: "5 - 15 phút",
      en: "5 - 15 mins"
    }
  },
  {
    id: "combo-ai-titan",
    category: "combo",
    title: {
      vi: "Combo Song Kiếm Hợp Bích",
      en: "The AI Titan Combo (GPT + Claude)"
    },
    tagline: {
      vi: "ChatGPT Plus + Claude Pro (Cặp đôi hoàn hảo)",
      en: "ChatGPT Plus & Claude Pro bundle (Ultimate Productivity)"
    },
    badge: {
      vi: "SIÊU COMBO",
      en: "SUPER BUNDLE"
    },
    badgeType: "best",
    priceOriginal: "1.100.000đ",
    priceSale: "790.000đ",
    priceSaleUsd: "$32",
    billingCycle: {
      vi: "/ tháng",
      en: "/ month"
    },
    features: {
      vi: [
        "Bao gồm trọn bộ 1 tài khoản ChatGPT Plus & 1 Claude Pro",
        "Tối ưu toàn diện: Claude hỗ trợ code đỉnh cao + GPT-4o voice & ảnh",
        "Tiết kiệm ngay 310.000đ so với giá gốc mua lẻ",
        "Được tặng kèm bộ prompt lập trình & phân tích dữ liệu độc quyền",
        "Ưu tiên hỗ trợ kỹ thuật VIP 1-kèm-1 qua Discord & Zalo"
      ],
      en: [
        "Includes 1 full ChatGPT Plus & 1 Claude Pro account",
        "Complete coverage: Claude for deep coding + GPT-4o voice & vision",
        "Save 310.000 VND ($12+) compared to purchasing separately",
        "Complimentary VIP coding & data analyst prompt library",
        "Priority 1-on-1 VIP engineer support via Discord & chat"
      ]
    },
    discordQuery: "order_combo_titan",
    zaloQuery: {
      vi: "Tôi muốn mua Combo Song Kiếm Hợp Bích (ChatGPT + Claude)",
      en: "I would like to order The AI Titan Combo (ChatGPT + Claude)"
    },
    stock: "IN_STOCK",
    deliveryTime: {
      vi: "5 - 15 phút",
      en: "5 - 15 mins"
    }
  }
];
