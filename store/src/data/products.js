export const STORE_CONFIG = {
  storeName: "EVERNERD // AI DROP STORE",
  version: "v1.0.4",
  author: "Nguyễn Đức Đạt (Evernerd)",
  discordUrl: "https://discord.gg/DqPe8dnAMP",
  zaloUrl: "https://zalo.me/0968940842",
  messengerUrl: "https://m.me/evernerd29",
  contactPhone: "0968.940.842",
};

export const PRODUCT_CATEGORIES = [
  { id: "all", name: "TẤT CẢ DROPS", icon: "Boxes" },
  { id: "chatgpt", name: "CHATGPT ECOSYSTEM", icon: "Bot" },
  { id: "claude", name: "CLAUDE ECOSYSTEM", icon: "Sparkles" },
  { id: "combo", name: "COMBO TIẾT KIỆM", icon: "Zap" },
];

export const PRODUCTS = [
  {
    id: "chatgpt-plus-personal",
    category: "chatgpt",
    title: "ChatGPT Plus (Chính Chủ)",
    tagline: "Kích hoạt trực tiếp trên email cá nhân của bạn",
    badge: "HOT DROP",
    badgeType: "hot", // hot, best, dev
    priceOriginal: "550.000đ",
    priceSale: "420.000đ",
    billingCycle: "/ tháng",
    features: [
      "Truy cập không giới hạn GPT-4o, Canvas & o1-preview",
      "Kích hoạt chính chủ 100% trên email cá nhân của bạn",
      "Tính năng Advanced Voice tương tác giọng nói siêu thực",
      "Sáng tạo hình ảnh đỉnh cao cùng DALL-E 3 & Custom GPTs",
      "Bảo hành 1-đổi-1 trọn gói 30 ngày sử dụng"
    ],
    discordQuery: "order_chatgpt_plus",
    zaloQuery: "Tôi muốn mua gói ChatGPT Plus Chính Chủ",
    stock: "IN_STOCK",
    deliveryTime: "5 - 15 phút"
  },
  {
    id: "chatgpt-team-slot",
    category: "chatgpt",
    title: "ChatGPT Team (Slot Riêng)",
    tagline: "Hạn mức tin nhắn cao gấp đôi, tiết kiệm 50%",
    badge: "TIẾT KIỆM",
    badgeType: "best",
    priceOriginal: "400.000đ",
    priceSale: "260.000đ",
    billingCycle: "/ tháng",
    features: [
      "Hạn mức gửi tin GPT-4o cao gấp 2 lần bản Plus",
      "Không gian làm việc bảo mật cao cấp (Workspace riêng)",
      "Không bị train dữ liệu theo chính sách Enterprise của OpenAI",
      "Hỗ trợ đầy đủ Code Interpreter, DALL-E 3 và Canvas",
      "Hỗ trợ kỹ thuật 24/7 và gia hạn hàng tháng liên tục"
    ],
    discordQuery: "order_chatgpt_team",
    zaloQuery: "Tôi muốn mua gói ChatGPT Team Slot Riêng",
    stock: "IN_STOCK",
    deliveryTime: "5 - 15 phút"
  },
  {
    id: "openai-api-credits",
    category: "chatgpt",
    title: "OpenAI API Key (Pre-funded)",
    tagline: "Cấp sẵn hạn mức số dư nạp trực tiếp cho Dev",
    badge: "DEV CHOICE",
    badgeType: "dev",
    priceOriginal: "350.000đ",
    priceSale: "250.000đ",
    billingCycle: "/ credit",
    features: [
      "Key API sạch, kích hoạt Tier 1/Tier 2 chính quy",
      "Tích hợp ngay vào Cursor, VS Code, Next.js, LangChain",
      "Rate limit cao, không lo gián đoạn luồng phát triển",
      "Tùy chọn nạp số dư linh hoạt theo nhu cầu dự án",
      "Hướng dẫn cấu hình bảo mật key tránh rò rỉ"
    ],
    discordQuery: "order_openai_api",
    zaloQuery: "Tôi muốn mua OpenAI API Key Pre-funded",
    stock: "IN_STOCK",
    deliveryTime: "10 - 20 phút"
  },
  {
    id: "claude-pro-personal",
    category: "claude",
    title: "Claude Pro (Chính Chủ)",
    tagline: "Đỉnh cao code & văn phong tự nhiên cùng Claude 3.5 Sonnet",
    badge: "BEST FOR CODING",
    badgeType: "hot",
    priceOriginal: "550.000đ",
    priceSale: "420.000đ",
    billingCycle: "/ tháng",
    features: [
      "Truy cập không giới hạn Claude 3.5 Sonnet & Claude 3.5 Haiku",
      "Mở khóa tính năng Artifacts tương tác giao diện trực quan",
      "Tạo Projects quản lý ngữ cảnh tài liệu chuyên sâu",
      "Kích hoạt chuẩn email cá nhân, giữ trọn vẹn dữ liệu chat",
      "Bảo hành 1-đổi-1 nhanh chóng trọn thời gian sử dụng"
    ],
    discordQuery: "order_claude_pro",
    zaloQuery: "Tôi muốn mua gói Claude Pro Chính Chủ",
    stock: "IN_STOCK",
    deliveryTime: "5 - 15 phút"
  },
  {
    id: "claude-team-slot",
    category: "claude",
    title: "Claude Team (Workspace)",
    tagline: "Gói mở rộng cho team & lập trình viên chuyên nghiệp",
    badge: "DEV CHOICE",
    badgeType: "dev",
    priceOriginal: "450.000đ",
    priceSale: "310.000đ",
    billingCycle: "/ tháng",
    features: [
      "Hạn mức sử dụng cao hơn Claude Pro thông thường",
      "Chia sẻ không gian làm việc Projects với bộ nhớ lớn",
      "Khả năng phân tích tài liệu và mã nguồn phức tạp",
      "Cam kết tài khoản sạch, ổn định không khóa bất thường",
      "Hỗ trợ kỹ thuật cấu hình trực tiếp từ lập trình viên"
    ],
    discordQuery: "order_claude_team",
    zaloQuery: "Tôi muốn mua gói Claude Team Workspace",
    stock: "IN_STOCK",
    deliveryTime: "5 - 15 phút"
  },
  {
    id: "combo-ai-titan",
    category: "combo",
    title: "Combo Song Kiếm Hợp Bích",
    tagline: "ChatGPT Plus + Claude Pro (Cặp đôi hoàn hảo)",
    badge: "SIÊU COMBO",
    badgeType: "best",
    priceOriginal: "1.100.000đ",
    priceSale: "790.000đ",
    billingCycle: "/ tháng",
    features: [
      "Bao gồm trọn bộ 1 tài khoản ChatGPT Plus & 1 Claude Pro",
      "Tối ưu toàn diện: Claude hỗ trợ code đỉnh cao + GPT-4o voice & ảnh",
      "Tiết kiệm ngay 310.000đ so với giá gốc mua lẻ",
      "Được tặng kèm bộ prompt lập trình & phân tích dữ liệu độc quyền",
      "Ưu tiên hỗ trợ kỹ thuật VIP 1-kèm-1 qua Discord & Zalo"
    ],
    discordQuery: "order_combo_titan",
    zaloQuery: "Tôi muốn mua Combo Song Kiếm Hợp Bích (ChatGPT + Claude)",
    stock: "IN_STOCK",
    deliveryTime: "5 - 15 phút"
  }
];

export const WARRANTY_SPECS = [
  {
    spec: "BẢO HÀNH 1-ĐỔI-1",
    detail: "Cam kết 100% thời gian sử dụng. Nếu tài khoản gặp lỗi trong thời gian gói, đổi tài khoản tương đương hoặc hoàn tiền ngay trong 30 phút."
  },
  {
    spec: "TỐC ĐỘ BÀN GIAO",
    detail: "Từ 5 - 15 phút sau khi xác nhận thanh toán. Hỗ trợ kích hoạt trực tiếp từ 08:00 đến 24:00 hàng ngày (kể cả cuối tuần & lễ tết)."
  },
  {
    spec: "BẢO MẬT & RIÊNG TƯ",
    detail: "Tài khoản kích hoạt trên email riêng của bạn. Chúng tôi cam kết tuyệt đối không lưu trữ, can thiệp hay đọc trộm lịch sử hội thoại của khách hàng."
  },
  {
    spec: "HỖ TRỢ KỸ THUẬT LẬP TRÌNH",
    detail: "Hỗ trợ bởi Evernerd (kỹ sư phần mềm). Giải đáp cách dùng Cursor, Claude Code, OpenAI API, thiết lập biến môi trường và Custom Instructions."
  }
];

export const FAQS = [
  {
    q: "Tài khoản kích hoạt trên email cá nhân hay được cấp email mới?",
    a: "Chúng tôi hỗ trợ cả 2 hình thức: Kích hoạt trực tiếp trên email bạn đang sử dụng (giữ nguyên toàn bộ lịch sử chat cũ), hoặc cấp sẵn tài khoản mới đã đăng ký chính chủ nếu bạn muốn dùng riêng biệt."
  },
  {
    q: "Sau khi chuyển khoản bao lâu thì tôi nhận được tài khoản?",
    a: "Thông thường quy trình kích hoạt diễn ra trong 5 - 15 phút sau khi bạn nhắn tin qua Discord hoặc Zalo/Messenger. Đội ngũ trực chiến liên tục cả ngày."
  },
  {
    q: "Nếu tài khoản gặp sự cố thì chính sách bảo hành ra sao?",
    a: "Chúng tôi cam kết bảo hành 1-đổi-1 trọn thời hạn gói dịch vụ. Nếu có lỗi từ hệ thống OpenAI/Anthropic không thể khôi phục, bạn sẽ được đổi tài khoản mới ngay lập tức hoặc hoàn tiền tương ứng số ngày chưa sử dụng."
  },
  {
    q: "Tôi nên chọn ChatGPT Plus hay Claude Pro cho công việc lập trình?",
    a: "Nếu bạn tập trung cao độ vào viết code, debug và phân tích codebase lớn, Claude 3.5 Sonnet là số 1 hiện nay. Nếu bạn cần đa nhiệm (giọng nói, phân tích hình ảnh, tạo ảnh DALL-E, Canvas), ChatGPT Plus rất toàn diện. Với các bạn muốn làm việc tối ưu nhất, gói Combo Song Kiếm Hợp Bích là sự lựa chọn hoàn hảo."
  },
  {
    q: "Quy trình đặt hàng 1-click hoạt động thế nào?",
    a: "Chỉ cần nhấn nút 'Order qua Discord' để vào máy chủ hỗ trợ và tạo ticket, hoặc nhấn nút 'Chat Zalo / Messenger' để nhắn tin trực tiếp với chúng tôi. Bạn sẽ được tư vấn và nhận mã QR chuyển khoản chính xác."
  }
];
