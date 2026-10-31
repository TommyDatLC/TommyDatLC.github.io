export const STORE_CONFIG = {
  storeName: "EVERNERD // AI DROP STORE",
  version: "v1.3.0",
  author: "Nguyễn Đức Đạt (Evernerd)",
  discordUrl: "https://discord.gg/DqPe8dnAMP",
  zaloUrl: "https://zalo.me/0968940842",
  messengerUrl: "https://m.me/evernerd29",
  contactPhone: "0968.940.842",
};

export const PRODUCT_CATEGORIES = [
  { id: "all", nameVi: "TẤT CẢ DROPS", nameEn: "ALL DROPS", icon: "Boxes" },
  { id: "chatgpt", nameVi: "CHATGPT (o1 / o3 / GPT-4o)", nameEn: "CHATGPT (o1 / o3 / GPT-4o)", icon: "Bot" },
  { id: "claude", nameVi: "CLAUDE (3.7 SONNET)", nameEn: "CLAUDE (3.7 SONNET)", icon: "Sparkles" },
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
      vi: "Mô hình tư duy OpenAI o1, o3-mini & GPT-4o Canvas chính chủ",
      en: "OpenAI o1, o3-mini deep reasoning & GPT-4o on personal email"
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
        "Mô hình tư duy chuyên sâu OpenAI o1 & o3-mini giải toán, lập trình đỉnh cao",
        "Truy cập không giới hạn GPT-4o, giao diện soạn thảo Canvas & SearchGPT",
        "Tính năng Advanced Voice đàm thoại giọng nói siêu thực đa ngữ",
        "Kích hoạt chính chủ 100% trên email cá nhân, giữ trọn lịch sử chat",
        "Bảo hành 1-đổi-1 trọn gói 30 ngày sử dụng"
      ],
      en: [
        "Deep reasoning with OpenAI o1 & o3-mini for complex coding and logic",
        "Full access to GPT-4o multimodal, interactive Canvas & SearchGPT",
        "Ultra-realistic natural speech via Advanced Voice Mode",
        "100% official activation on your personal email, zero chat loss",
        "Full 1-to-1 replacement warranty for 30 days"
      ]
    },
    discordQuery: "order_chatgpt_plus",
    zaloQuery: {
      vi: "Tôi muốn mua gói ChatGPT Plus Chính Chủ (o1 & GPT-4o)",
      en: "I would like to order ChatGPT Plus Personal Plan (o1 & GPT-4o)"
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
      vi: "Hạn mức o1 & GPT-4o cao gấp 2 lần, bảo mật Enterprise",
      en: "2X higher message caps for o1 & GPT-4o, enterprise security"
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
        "Hạn mức gửi tin o1 & GPT-4o cao gấp 2 lần so với bản Plus thông thường",
        "Không gian làm việc bảo mật cao cấp (Workspace riêng biệt)",
        "Chính sách Enterprise: OpenAI cam kết không train dữ liệu trên đoạn chat",
        "Hỗ trợ đầy đủ Code Interpreter, Advanced Data Analysis và Canvas",
        "Hỗ trợ kỹ thuật 24/7 và gia hạn hàng tháng liên tục ổn định"
      ],
      en: [
        "2X higher message limits for o1 and GPT-4o compared to standard Plus",
        "Dedicated private enterprise workspace",
        "Zero model training on your data backed by OpenAI enterprise policy",
        "Full suite: Code Interpreter, Advanced Data Analysis, and Canvas",
        "24/7 priority support and seamless continuous renewal"
      ]
    },
    discordQuery: "order_chatgpt_team",
    zaloQuery: {
      vi: "Tôi muốn mua gói ChatGPT Team Slot Riêng (Hạn mức 2X)",
      en: "I would like to order ChatGPT Team Dedicated Slot (2X Limits)"
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
      vi: "Cấp sẵn hạn mức gọi API o1, o3-mini & GPT-4o cho Dev",
      en: "Pre-loaded API credits for o1, o3-mini & GPT-4o integrations"
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
        "Cấp quyền gọi API o1, o3-mini, GPT-4o và text-embedding mới nhất",
        "Key API sạch, kích hoạt Tier 1/Tier 2 chính quy không lo checkpoint",
        "Tích hợp mượt mà vào Cursor, VS Code, Next.js, LangChain, n8n",
        "Rate limit cao, không lo nghẽn request trong quy trình production",
        "Hướng dẫn cấu hình bảo mật key tránh rò rỉ token"
      ],
      en: [
        "Instant API access to o1, o3-mini, GPT-4o and latest embedding models",
        "Clean authentic API keys provisioned with Tier 1/2 rates",
        "Seamless integration with Cursor, VS Code, Next.js, LangChain & n8n",
        "High RPM rate limits preventing production pipeline throttles",
        "Security advisory and environment variable best practices"
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
      vi: "Mô hình tư duy lai Claude 3.7 Sonnet (Extended Thinking)",
      en: "Hybrid reasoning with Claude 3.7 Sonnet & Extended Thinking"
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
        "Trải nghiệm Claude 3.7 Sonnet với chế độ Extended Thinking (suy nghĩ chuyên sâu)",
        "Đỉnh cao lập trình, kiến trúc hệ thống và debug codebase phức tạp",
        "Tính năng Claude Artifacts tương tác và render trực tiếp UI/UX, code, sơ đồ",
        "Tạo Projects quản lý ngữ cảnh tài liệu khổng lồ (200K token context)",
        "Kích hoạt chuẩn email cá nhân, bảo hành 1-đổi-1 trọn 30 ngày"
      ],
      en: [
        "Access to Claude 3.7 Sonnet featuring adjustable Extended Thinking mode",
        "Benchmark-topping software engineering, architecture, and deep debugging",
        "Interactive visual canvas via Claude Artifacts for live UI & diagram previews",
        "Custom Projects for massive code repository understanding (200K tokens)",
        "Activated directly on your private personal email with 1-to-1 warranty"
      ]
    },
    discordQuery: "order_claude_pro",
    zaloQuery: {
      vi: "Tôi muốn mua gói Claude Pro Chính Chủ (Claude 3.7 Sonnet)",
      en: "I would like to order Claude Pro Personal Plan (Claude 3.7 Sonnet)"
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
      vi: "Hạn mức Claude 3.7 Sonnet mở rộng cho Dev & Team chuyên nghiệp",
      en: "Expanded Claude 3.7 Sonnet limits for devs & engineering teams"
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
        "Hạn mức gửi tin Claude 3.7 Sonnet cao hơn đáng kể so với bản Pro cá nhân",
        "Sử dụng chế độ Extended Thinking mà không lo nhanh hết quota tin nhắn",
        "Chia sẻ không gian Team Projects với kho tài liệu và prompt chung của nhóm",
        "Cam kết tài khoản sạch chuẩn Enterprise, ổn định không khóa bất thường",
        "Hỗ trợ kỹ thuật cấu hình trực tiếp từ kỹ sư phần mềm (Evernerd)"
      ],
      en: [
        "Significantly higher message quotas for Claude 3.7 Sonnet than Pro",
        "Heavy use of Extended Thinking without rapid quota exhaustion",
        "Shared Team Projects for collective codebases, docs, and prompts",
        "Enterprise-grade stability, zero sudden bans or security blocks",
        "Direct technical guidance from software engineer (Evernerd)"
      ]
    },
    discordQuery: "order_claude_team",
    zaloQuery: {
      vi: "Tôi muốn mua gói Claude Team Workspace (Claude 3.7)",
      en: "I would like to order Claude Team Workspace Slot (Claude 3.7)"
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
      vi: "ChatGPT Plus (o1/o3) + Claude Pro (3.7 Sonnet) - Cặp đôi tối thượng",
      en: "ChatGPT Plus (o1/o3) & Claude Pro (3.7 Sonnet) - Ultimate Power"
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
        "Bao gồm trọn bộ 1 tài khoản ChatGPT Plus & 1 tài khoản Claude Pro chính chủ",
        "Song kiếm hợp bích: Claude 3.7 Sonnet (Extended Thinking) + OpenAI o1 & GPT-4o Voice",
        "Tiết kiệm ngay 310.000đ so với giá mua lẻ từng gói",
        "Tặng kèm bộ prompt lập trình full-stack, Cursor rules và system prompts độc quyền",
        "Ưu tiên hỗ trợ kỹ thuật VIP 1-kèm-1 trực tiếp qua Discord & Zalo"
      ],
      en: [
        "Includes 1 full ChatGPT Plus & 1 Claude Pro personal account",
        "Dual supremacy: Claude 3.7 Sonnet Extended Thinking + OpenAI o1 & GPT-4o Voice",
        "Save 310.000 VND ($12+) compared to purchasing separately",
        "Complimentary full-stack dev prompts, Cursor rules & system prompt packs",
        "Priority 1-on-1 VIP engineer support via Discord & private chat"
      ]
    },
    discordQuery: "order_combo_titan",
    zaloQuery: {
      vi: "Tôi muốn mua Combo Song Kiếm Hợp Bích (ChatGPT Plus + Claude Pro)",
      en: "I would like to order The AI Titan Combo (ChatGPT Plus + Claude Pro)"
    },
    stock: "IN_STOCK",
    deliveryTime: {
      vi: "5 - 15 phút",
      en: "5 - 15 mins"
    }
  }
];
