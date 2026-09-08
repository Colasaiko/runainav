export type GuideType = 'tool' | 'tutorial' | 'troubleshooting' | 'network' | 'subscription';

export interface GuideArticle {
  slug: string;
  title: string;
  description: string;
  type: GuideType;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
}

export const guideArticles: GuideArticle[] = [
  {
    slug: 'chatgpt-plus-buy',
    title: 'ChatGPT Plus国内怎么购买？订阅与付款指南',
    description: 'ChatGPT Plus 国内怎么购买？整理官方订阅入口、当前价格、Plus 与免费版差异，以及付款前需要确认的账号、服务地区和常见开通问题。',
    type: 'subscription',
    category: 'AI订阅',
    tags: ['ChatGPT', 'AI订阅', 'OpenAI'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08',
  },
  {
    slug: 'claude-pro-subscribe',
    title: 'Claude Pro国内怎么订阅？价格与付款指南',
    description: 'Claude Pro 国内怎么订阅？整理官方方案、当前价格、Pro 与免费版差异，以及付款前需要确认的账号、服务地区、功能权限和常见开通问题。',
    type: 'subscription',
    category: 'AI订阅',
    tags: ['Claude', 'AI订阅', 'Anthropic'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08',
  },
  {
    slug: 'gemini-subscribe',
    title: 'Gemini付费版怎么购买？方案与订阅指南',
    description: 'Gemini 付费版怎么购买？整理 Google AI 当前个人方案、主要功能差异、订阅入口，以及付款前需要确认的账号地区、功能权限和开通条件。',
    type: 'subscription',
    category: 'AI订阅',
    tags: ['Gemini', 'AI订阅', 'Google'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08',
  },
  {
    slug: 'cursor-pro-buy',
    title: 'Cursor Pro怎么购买？价格、额度与订阅指南',
    description: 'Cursor Pro 怎么购买？整理当前个人付费方案、价格、Agent 使用额度、订阅入口与付款事项，并比较 Pro、Pro+、Ultra 的适合人群。',
    type: 'subscription',
    category: 'AI订阅',
    tags: ['Cursor', 'AI编程', 'AI订阅'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08',
  },
  {
    slug: 'midjourney-subscribe',
    title: 'Midjourney怎么付费？套餐与订阅购买指南',
    description: 'Midjourney 怎么付费？整理 Basic、Standard、Pro、Mega 当前价格、月付与年付区别，以及购买前需要确认的 GPU 用量和方案差异。',
    type: 'subscription',
    category: 'AI订阅',
    tags: ['Midjourney', 'AI画图', 'AI订阅'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08',
  },
  {
    slug: 'runway-subscribe',
    title: 'Runway会员怎么购买？价格与订阅方案指南',
    description: 'Runway 会员怎么购买？整理 Free、Standard、Pro、Max 当前方案、Credits 使用方式、订阅入口与价格差异，并说明不同创作需求怎么选。',
    type: 'subscription',
    category: 'AI订阅',
    tags: ['Runway', 'AI视频', 'AI订阅'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08',
  },
  {
    slug: 'suno-subscribe',
    title: 'Suno会员怎么购买？价格、额度与商用指南',
    description: 'Suno 会员怎么购买？整理 Free、Pro、Premier 当前方案、Credits、下载与商业使用权限，并说明月付、年付和创作者购买前要注意的事项。',
    type: 'subscription',
    category: 'AI订阅',
    tags: ['Suno', 'AI音乐', 'AI订阅'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08',
  },
  {
    slug: 'perplexity-pro-subscribe',
    title: 'Perplexity Pro怎么订阅？价格与付款指南',
    description: 'Perplexity Pro 怎么订阅？整理 Free、Pro、Max 当前方案、价格、研究与模型使用差异、订阅入口，并说明不同搜索需求适合哪一档。',
    type: 'subscription',
    category: 'AI订阅',
    tags: ['Perplexity', 'AI搜索', 'AI订阅'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08',
  },

  {
    slug: 'chatgpt-jichang',
    title: 'ChatGPT机场推荐：2026年AI网络方案怎么选',
    description: '国内使用 ChatGPT 等海外 AI 工具时机场怎么选？本文从线路稳定性、节点地区、晚高峰、设备兼容和使用成本出发，整理选择 AI 网络方案时值得关注的因素。',
    type: 'network',
    category: '网络指南',
    tags: ['ChatGPT', 'AI工具', '网络环境'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08'
  },
  {
    slug: 'jichang-recommendation-2026',
    title: '2026机场推荐：稳定便宜与专线怎么选 | RunAI',
    description: '2026 年怎么选择稳定、便宜又适合长期使用的机场？本文从价格、流量、线路类型、晚高峰、设备兼容和节点数量出发，整理挑选机场时最值得比较的关键因素。',
    type: 'network',
    category: '网络指南',
    tags: ['机场推荐', '专线', '指南'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08'
  },
  {
    slug: 'stable-jichang',
    title: '稳定机场推荐：晚高峰与线路怎么判断 | RunAI',
    description: '稳定机场应该怎么看？本文从晚高峰表现、线路类型、节点可用率、丢包、延迟、带宽波动和客户端兼容等角度，整理选择稳定机场时真正值得关注的指标，避免只看宣传参数。',
    type: 'network',
    category: '网络指南',
    tags: ['稳定', '晚高峰', '延迟'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08'
  },
  {
    slug: 'cheap-jichang',
    title: '便宜机场推荐：低预算怎么选更合适 | RunAI',
    description: '预算不高也想找能长期使用的机场？本文从月费、流量、线路、节点数量、设备限制、付款周期和实际使用需求出发，整理低预算用户选择便宜机场时应该优先比较的项目。',
    type: 'network',
    category: '网络指南',
    tags: ['便宜', '低价', '预算'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08'
  },
  {
    slug: 'value-jichang',
    title: '高性价比机场推荐：价格流量线路怎么比 | RunAI',
    description: '高性价比机场不等于价格最低。本文从套餐价格、每月流量、线路质量、晚高峰表现、节点数量、设备限制和使用场景出发，整理判断机场性价比时更实用的比较方法。',
    type: 'network',
    category: '网络指南',
    tags: ['高性价比', '流量', '价格'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08'
  },
  {
    slug: 'clash-jichang',
    title: 'Clash机场推荐：2026年订阅怎么选 | RunAI',
    description: 'Clash 用户怎么选择机场订阅？本文从订阅兼容、线路稳定性、节点地区、流量套餐和更新方式出发，整理 2026 年选择 Clash 机场时值得关注的因素。',
    type: 'network',
    category: '网络指南',
    tags: ['Clash', '订阅', '客户端'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08'
  },
  {
    slug: 'clash-verge-jichang',
    title: 'Clash Verge机场推荐：Windows订阅怎么选',
    description: 'Windows 使用 Clash Verge 时怎么选机场？本文从订阅格式、节点稳定性、线路类型和流量套餐出发，整理这类客户端用户挑选机场时值得关注的关键因素。',
    type: 'network',
    category: '网络指南',
    tags: ['Clash Verge', 'Windows', '订阅'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08'
  },
  {
    slug: 'shadowrocket-jichang',
    title: 'Shadowrocket机场推荐：小火箭订阅怎么选',
    description: 'Shadowrocket 用户怎么选机场？本文从订阅兼容、节点地区、线路稳定性和套餐流量出发，整理 iPhone 小火箭用户挑选机场时值得关注的关键因素。',
    type: 'network',
    category: '网络指南',
    tags: ['Shadowrocket', '小火箭', 'iOS'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08'
  },
  {
    slug: 'v2rayn-jichang',
    title: 'v2rayN机场推荐：Windows用户怎么选',
    description: 'Windows 使用 v2rayN 时怎么选机场？本文从订阅兼容、节点稳定性、线路类型和流量套餐出发，整理 v2rayN 用户挑选机场时值得关注的关键因素。',
    type: 'network',
    category: '网络指南',
    tags: ['v2rayN', 'Windows', '网络'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08'
  },
  {
    slug: 'no-expiry-jichang',
    title: '不限时机场推荐：按量计费与套餐怎么选 | RunAI',
    description: '不限时机场适合什么人？本文比较不限时流量包、按量计费与月付套餐的区别，并从有效期、流量消耗、线路稳定性、设备数量和长期成本出发，帮助低频用户判断哪种套餐更合适。',
    type: 'network',
    category: '网络指南',
    tags: ['不限时', '按量计费', '流量包'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08'
  },
  {
    slug: 'suno-chinese-song-tutorial',
    title: 'Suno中文歌曲生成教程：歌词与风格怎么写',
    description: '从中文歌词、歌曲结构、音乐风格到人声和排除项，本文用可复制示例教你使用Suno生成中文歌曲，并介绍Custom模式、修改方法与商用权限注意事项。',
    type: 'tutorial',
    category: 'AI音乐',
    tags: ['Suno', 'AI音乐', '中文歌曲', '歌词', '音乐生成'],
    publishedAt: '2026-09-05',
    updatedAt: '2026-09-05'
  },
  {
    slug: 'gamma-ppt-tutorial',
    title: 'Gamma做PPT教程：从生成到导出',
    description: '从确定主题、起草大纲到排版优化与最终导出，本文用一个完整案例带你使用Gamma制作演示文稿，并教你如何避免AI常见排版错误，做出一份真正能用的PPT。',
    type: 'tutorial',
    category: 'AI办公',
    tags: ['Gamma', 'AI办公', 'PPT', '演示文稿', 'AI生成'],
    publishedAt: '2026-09-05',
    updatedAt: '2026-09-05'
  },
  {
    slug: 'perplexity-search-guide',
    title: 'Perplexity搜索与引用核对教程',
    description: '从提问、搜索、引用核对到文件上传与深入研究，本文用实际流程教你使用Perplexity查资料，并说明如何判断来源是否可靠、什么时候需要继续查证。',
    type: 'tutorial',
    category: 'AI搜索',
    tags: ['Perplexity', 'AI搜索', '资料查询', '引用', 'Research'],
    publishedAt: '2026-09-05',
    updatedAt: '2026-09-05'
  },
  {
    slug: 'midjourney-realistic-portrait',
    title: 'Midjourney人像提示词：构图光线教程',
    description: '从人物主体、构图、光线、镜头、景深到皮肤质感，系统拆解Midjourney真实感人像提示词写法，并提供可直接参考的Prompt模板与常见失败排查方法。',
    type: 'tutorial',
    category: 'AI绘图',
    tags: ['Midjourney', 'AI绘图', '提示词', '人像', 'Prompt'],
    publishedAt: '2026-09-05',
    updatedAt: '2026-09-05'
  },
  {
    slug: 'chatgpt-vs-claude-vs-gemini',
    title: 'ChatGPT、Claude、Gemini怎么选？',
    description: '对比ChatGPT、Claude与Gemini在聊天、写作、编程、文件处理、搜索和中文体验等方面的差异，并结合免费功能与使用环境，帮助你按需求选择AI工具。',
    type: 'tool',
    category: 'AI聊天',
    tags: ['ChatGPT', 'Claude', 'Gemini', '工具对比', 'AI选择'],
    publishedAt: '2026-09-04',
    updatedAt: '2026-09-04'
  },
  {
    slug: 'vpn-slow-speed',
    title: '为什么连接VPN后网速会变慢？',
    description: '连接VPN后出现网速下降、延迟升高或视频卡顿，通常与节点距离、线路拥堵、加密开销、本地网络和运营商路由有关。本文用简单方法教你判断原因并逐步排查。',
    type: 'troubleshooting',
    category: '网络环境',
    tags: ['VPN', '网速测试', '延迟'],
    publishedAt: '2026-09-04',
    updatedAt: '2026-09-04'
  },
  {
    slug: 'cursor-build-blog',
    title: 'Cursor搭建个人博客教程',
    description: '从安装Cursor、创建项目、编写提示词到本地预览、上传GitHub与部署网站，本文用新手能看懂的方式演示AI辅助搭建个人博客，并整理常见报错与排查方法。',
    type: 'tutorial',
    category: 'AI编程',
    tags: ['Cursor', '网站制作', 'GitHub'],
    publishedAt: '2026-09-04',
    updatedAt: '2026-09-04'
  },
  {
    slug: 'ai-network',
    title: 'AI工具打不开怎么办？',
    description: '排查网络环境与常见问题，解决 ChatGPT、Claude、Gemini、Cursor 等海外 AI 工具加载缓慢或登录失败的情况。',
    type: 'troubleshooting',
    category: '网络环境',
    tags: ['网络', '常见问题'],
    publishedAt: '2026-09-03',
    updatedAt: '2026-09-04'
  }
];
