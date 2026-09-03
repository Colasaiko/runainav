export type FAQItem = {
  q: string;
  a: string;
};

export type AITool = {
  slug: string;
  name: string;
  company: string;
  officialUrl: string;
  category: string;
  categories: string[];
  shortDescription: string;
  description: string;
  tags: string[];
  featured: boolean;
  freePlan: string;
  pricingType: string;
  chineseSupport: string;
  accountRequired: string;
  platforms: string[];
  bestFor: string[];
  lastUpdated: string;
  overview: string;
  features: string[];
  useCases: string[];
  gettingStarted: string[];
  networkAndRegion: string;
  advantages: string[];
  limitations: string[];
  faq: FAQItem[];
  alternatives: string[];
};

export const aiTools: AITool[] = [
  {
    "slug": "chatgpt",
    "name": "ChatGPT",
    "company": "OpenAI",
    "officialUrl": "https://chatgpt.com",
    "category": "chat",
    "categories": [
      "chat",
      "productivity",
      "coding"
    ],
    "shortDescription": "OpenAI 推出的 AI 助手，可用于聊天、写作、编程、资料分析等多种场景。",
    "description": "ChatGPT 是由 OpenAI 开发的划时代人工智能对话模型。它不仅能进行流畅的自然语言交流，还具备强大的逻辑推理、代码编写、多语言翻译和创意写作能力。作为目前全球使用最广泛的 AI 工具之一，它极大地改变了人们获取信息和处理日常工作的方式。",
    "tags": [
      "AI聊天",
      "AI写作",
      "AI编程",
      "数据分析"
    ],
    "featured": true,
    "freePlan": "提供功能受限的免费基础版本（默认使用 GPT-4o-mini 或动态切换）。",
    "pricingType": "免费 / 订阅制（Plus $20/月）",
    "chineseSupport": "完全支持",
    "accountRequired": "需要（免费基础对话偶尔可免登录，但推荐登录）",
    "platforms": [
      "网页端",
      "iOS",
      "Android",
      "macOS",
      "Windows"
    ],
    "bestFor": [
      "学生",
      "上班族",
      "开发者",
      "内容创作者",
      "科研人员"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "ChatGPT 是一个多模态的人工智能助手，能够理解文本、图像、语音，并生成高质量的回答。无论是简单的日常问答，还是复杂的商业企划、代码除错，ChatGPT 都能提供极具价值的参考。高级订阅用户还可以使用高级语音模式、自定义 GPTs 商店以及更高质量的模型。",
    "features": [
      "自然流畅的多轮对话能力",
      "支持上传文档和图片进行分析",
      "内置代码解释器可运行 Python 脚本",
      "支持生成高质量图片 (DALL·E)",
      "丰富的第三方 GPTs 插件生态"
    ],
    "useCases": [
      "撰写和润色文章、邮件、报告",
      "将长篇文档或会议记录总结为摘要",
      "编写、调试和重构各类主流编程语言代码",
      "练习外语对话和进行高精度的多语种翻译",
      "制作旅行计划或日常行程安排"
    ],
    "gettingStarted": [
      "访问官方网站 chatgpt.com。",
      "使用邮箱（推荐海外邮箱）或 Google/Apple 账号进行注册。",
      "验证完成后进入对话界面，在底部输入框输入您的需求。",
      "如对回答不满意，可补充背景信息，引导 AI 重新生成。"
    ],
    "networkAndRegion": "ChatGPT 的服务对访问 IP 和账号地区有严格限制。该服务的实际可用性可能受到服务支持地区、账号地区、网络环境、IP 地区或官方政策调整影响。如果访问速度较慢或无法正常加载（如显示 Access Denied 或报错），可以先检查网络连接、DNS、账号地区和服务当前支持范围。不同 AI 服务对网络环境的要求并不完全相同。",
    "advantages": [
      "全球领先的模型智商和推理能力",
      "生态最为丰富，拥有大量自定义 GPTs",
      "跨平台支持极好，App 体验流畅"
    ],
    "limitations": [
      "免费版在高峰期可能会遇到限制",
      "国内网络环境下访问门槛较高",
      "偶尔会产生幻觉（输出看似合理但错误的内容）"
    ],
    "faq": [
      {
        "q": "ChatGPT 是免费的吗？",
        "a": "基础版本是免费的，可以满足绝大多数日常需求。如需更高频率的模型调用、DALL·E 画图或优先访问新功能，可订阅 $20/月的 Plus 版本。"
      },
      {
        "q": "ChatGPT 支持中文吗？",
        "a": "完全支持。它的中文理解和生成能力非常强大，甚至能准确理解成语、网络梗和复杂的语境。"
      },
      {
        "q": "为什么 ChatGPT 有时打不开或提示不可用？",
        "a": "通常是因为您当前的网络 IP 不在 OpenAI 官方支持的地区范围内，或者 IP 质量较低被官方防火墙拦截。"
      },
      {
        "q": "ChatGPT 和 Claude 有什么区别？",
        "a": "ChatGPT 的生态（插件、画图、语音）更丰富，综合能力极强；而 Claude 在长文本处理、代码编写和文字语气（更自然、具有人情味）方面往往更受用户青睐。"
      }
    ],
    "alternatives": [
      "claude",
      "gemini",
      "grok"
    ]
  },
  {
    "slug": "claude",
    "name": "Claude",
    "company": "Anthropic",
    "officialUrl": "https://claude.ai",
    "category": "chat",
    "categories": [
      "chat",
      "coding",
      "writing"
    ],
    "shortDescription": "Anthropic 开发的安全优先 AI，以出色的长文本处理、代码编写和自然的文字风格著称。",
    "description": "Claude 是由 OpenAI 前核心成员创立的 Anthropic 公司推出的 AI 助手。它强调“安全、无害、诚实”的核心原则，并在极长上下文窗口（可一次性处理数十万字文档）和代码生成领域展现出了顶级的实力。其文字生成风格自然流畅，被许多文字创作者视为最接近人类语气的 AI。",
    "tags": [
      "AI聊天",
      "长文本分析",
      "AI编程",
      "文案创作"
    ],
    "featured": true,
    "freePlan": "提供免费额度，根据服务器负载动态限制使用次数。",
    "pricingType": "免费 / 订阅制（Pro $20/月）",
    "chineseSupport": "完全支持",
    "accountRequired": "需要",
    "platforms": [
      "网页端",
      "iOS",
      "Android",
      "macOS"
    ],
    "bestFor": [
      "作家",
      "程序员",
      "研究员",
      "律师",
      "学生"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "Claude 拥有强大的多模态处理能力，尤其在处理 PDF 论文、长篇小说或庞大的代码库时表现优异。它首创的 Artifacts 功能可以直接在网页侧边栏渲染生成的代码（如 React 组件、交互图表等），极大地改变了开发者的工作流。",
    "features": [
      "超大上下文窗口，可一次性阅读数本财报或多篇论文",
      "Artifacts 侧边栏预览代码与图表",
      "极其自然的文风，拒绝浓重的“AI味”",
      "出色的逻辑推理和复杂指令遵循能力"
    ],
    "useCases": [
      "上传多份 PDF，要求提取核心数据并对比",
      "让 AI 编写网页代码并直接在右侧预览交互效果",
      "模仿特定作家的风格进行长篇小说续写",
      "作为程序员的结对编程助手，分析报错日志"
    ],
    "gettingStarted": [
      "访问 claude.ai 官网。",
      "使用邮箱完成注册（部分地区可能需要验证手机号）。",
      "在聊天框上传您的长文件，或者直接输入文字需求。",
      "尝试要求它生成一段代码，体验 Artifacts 的实时预览。"
    ],
    "networkAndRegion": "Claude 官方支持的国家和地区列表比 ChatGPT 更严格。该服务的实际可用性受到严格的地区风控和网络环境影响。如果在注册或使用中遇到“App unavailable”或账号被封禁，通常是由于 IP 地区不在支持范围内或被判定为高风险。",
    "advantages": [
      "中文写作风格远超同类产品，极具人情味",
      "Artifacts 功能极大提升了代码及可视化效率",
      "超长上下文不会轻易遗忘前文信息"
    ],
    "limitations": [
      "免费额度较少，容易达到对话上限",
      "风控极严，注册和使用门槛较高",
      "目前不具备直接生成图片的能力"
    ],
    "faq": [
      {
        "q": "Claude 可以免费使用吗？",
        "a": "可以，但免费用户在使用顶级模型时有较严的次数限制，额度用完后需要等待数小时才能刷新。"
      },
      {
        "q": "Claude 的 Artifacts 功能是什么？",
        "a": "当 Claude 生成代码（如 HTML、React、Mermaid 图表）时，它会在聊天窗口右侧开辟一个独立视图，直接渲染出网页或图表，让您直观看到结果，而不用复制到本地运行。"
      },
      {
        "q": "Claude 适合写中文文章吗？",
        "a": "非常适合。很多文字工作者认为 Claude 的中文表达比 ChatGPT 更细腻、更少排比句和生硬的总结语，具有很高的文学素养。"
      }
    ],
    "alternatives": [
      "chatgpt",
      "gemini",
      "cursor"
    ]
  },
  {
    "slug": "gemini",
    "name": "Gemini",
    "company": "Google",
    "officialUrl": "https://gemini.google.com",
    "category": "chat",
    "categories": [
      "chat",
      "productivity"
    ],
    "shortDescription": "Google 的下一代多模态原生 AI 模型，深度整合 Google Workspace 生态。",
    "description": "Gemini 是 Google 全力打造的多模态大模型。作为原生多模态模型，它从底层架构上就支持同时处理文本、代码、图像、音频和视频。除了在独立网页端提供服务，它还深度整合在 Google Docs、Gmail、Android 系统等 Google 庞大的生态体系中。",
    "tags": [
      "AI聊天",
      "多模态",
      "Google生态",
      "免费强大"
    ],
    "featured": true,
    "freePlan": "免费提供基础版本，部分地区免费开放百万上下文版本。",
    "pricingType": "免费 / 订阅制（Advanced $20/月）",
    "chineseSupport": "支持",
    "accountRequired": "需要 Google 账号",
    "platforms": [
      "网页端",
      "Android",
      "iOS"
    ],
    "bestFor": [
      "Google生态用户",
      "研究人员",
      "学生",
      "Android用户"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "Gemini 最大的优势之一是海量的上下文处理能力（高达数百万 Token）以及与 Google 服务的无缝连接。用户可以直接让 Gemini 检索自己的 Google Drive 文件、总结未读邮件，或者在回答中直接引用最新的 Google 搜索结果。",
    "features": [
      "原生多模态，可直接看视频、听音频并回答问题",
      "超大上下文窗口，可吞下整本书或超大代码库",
      "一键导出到 Google Docs 或 Gmail",
      "通过插件实时联网，调用 Google 航班、酒店等服务"
    ],
    "useCases": [
      "上传一段长达一小时的会议录音，让其总结核心要点",
      "关联 Google Drive，要求分析某个特定文件夹内的所有文档",
      "询问当前热门新闻，利用其 Google 搜索能力获取实时信息",
      "通过提示词让它帮你草拟一封邮件并直接在 Gmail 中打开"
    ],
    "gettingStarted": [
      "使用您的 Google 账号访问 gemini.google.com。",
      "同意服务条款后即可开始对话。",
      "在输入框点击“+”号可上传图片、音频或调用 Google Drive 文件。",
      "对于满意的回答，可点击下方分享按钮一键导出。"
    ],
    "networkAndRegion": "由于属于 Google 旗下服务，其在国内网络环境下的可用性与 Google 其他服务相同。该服务的实际可用性可能受到服务支持地区、网络环境或官方政策调整影响。如果无法访问，请检查您的网络连接是否能够正常访问 Google 服务体系。",
    "advantages": [
      "生态优势明显，与 Google 办公套件无缝结合",
      "上下文窗口极大，处理超大文件时不逊色于 Claude",
      "响应速度通常非常快"
    ],
    "limitations": [
      "在部分逻辑推理或代码任务中，表现可能不如 GPT 或 Claude 稳定",
      "中文语气偶尔会显得过于“机翻”或生硬"
    ],
    "faq": [
      {
        "q": "Gemini Advanced 和免费版有什么区别？",
        "a": "Advanced 版本使用了 Google 最强的大模型，支持更复杂的推理、编程任务，且通常包含在 Google One AI Premium 订阅中，附赠 2TB 云盘空间。"
      },
      {
        "q": "如何让 Gemini 访问我的 Google Drive？",
        "a": "在网页端输入框下方，输入 @ 符号并选择 Google Workspace，授权后即可让其在您的邮件和云盘文档中进行检索和总结。"
      },
      {
        "q": "它能看懂视频吗？",
        "a": "是的，您可以直接粘贴 YouTube 链接，或者上传视频文件，Gemini 可以分析视频画面和音频内容。"
      }
    ],
    "alternatives": [
      "chatgpt",
      "claude",
      "perplexity"
    ]
  },
  {
    "slug": "grok",
    "name": "Grok",
    "company": "xAI",
    "officialUrl": "https://x.com/i/grok",
    "category": "chat",
    "categories": [
      "chat",
      "search"
    ],
    "shortDescription": "由马斯克旗下 xAI 开发的幽默风趣且能实时获取 X(Twitter) 数据的大模型。",
    "description": "Grok 是由 xAI 团队开发的生成式人工智能，被深度集成在 X (原 Twitter) 平台中。它的设计初衷是“了解宇宙的真实本质”，在风格上比传统 AI 更加叛逆、幽默甚至带点讽刺。它最大的杀手锏是能够实时访问 X 平台的推文数据流，掌握最前沿的新闻和网络动态。",
    "tags": [
      "AI聊天",
      "实时新闻",
      "幽默叛逆",
      "X平台"
    ],
    "featured": false,
    "freePlan": "部分地区针对高质量用户提供免费额度，普通用户需订阅。",
    "pricingType": "包含在 X Premium 订阅中",
    "chineseSupport": "支持",
    "accountRequired": "需要 X(Twitter) 账号",
    "platforms": [
      "网页端",
      "iOS (X App)",
      "Android (X App)"
    ],
    "bestFor": [
      "重度 X 平台用户",
      "新闻从业者",
      "加密货币投资者",
      "寻找前沿资讯的人"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "在面对热点事件、突发新闻或小众领域的最新讨论时，传统 AI 往往因为训练数据的滞后性而无法回答，而 Grok 可以直接从 X 上抓取数秒前发布的帖子进行总结。同时，它的回答风格更为大胆，较少受到过度严格的安全护栏限制。",
    "features": [
      "独家实时访问 X(Twitter) 全球数据流",
      "拥有普通和“幽默(Fun)”两种回答模式",
      "内容审查相对较松，敢于回答尖锐问题",
      "直接在 X 平台内使用，无需切换 App"
    ],
    "useCases": [
      "询问过去 24 小时内关于某家科技公司的最新舆论走向",
      "要求以讽刺幽默的口吻评价某个当下的网络热梗",
      "追踪突发的自然灾害或体育赛事比分进展",
      "快速总结某位名人的最新一连串长推文"
    ],
    "gettingStarted": [
      "登录您的 X(Twitter) 账号。",
      "如果您是 X Premium 订阅用户，点击侧边栏或底部导航的 Grok 图标。",
      "在 Fun 或 Regular 模式间切换。",
      "输入您的提问，Grok 会自动判断是否需要联网检索推文。"
    ],
    "networkAndRegion": "由于 Grok 依附于 X 平台，其可用性完全取决于 X 平台本身。该服务的实际可用性可能受到网络环境、IP 地区限制影响。部分地区可能尚未开放 Grok 功能，即使用户订阅了 Premium 也会显示不可用。",
    "advantages": [
      "掌握独一无二的社交媒体实时数据池",
      "性格设定有趣，回答不枯燥",
      "对于加密货币、AI 圈等在 X 上高度活跃的领域信息极度敏感"
    ],
    "limitations": [
      "脱离了实时数据，其纯粹的逻辑推理和编程能力可能不如前三家巨头",
      "受限于 X 平台上的假新闻和噪音，Grok 总结的信息需要用户自行甄别"
    ],
    "faq": [
      {
        "q": "不订阅 X Premium 可以使用 Grok 吗？",
        "a": "X 平台正在部分地区逐步测试向免费的高活跃用户开放基础权限，但对于大多数普通用户，目前仍需要订阅 X Premium 或 Premium+ 才能使用。"
      },
      {
        "q": "Grok 会产生幻觉吗？",
        "a": "会。由于其信息来源主要是网民发布的推文，当某些错误信息或阴谋论在 X 上被大量传播时，Grok 可能会将其总结为事实，需要仔细分辨。"
      }
    ],
    "alternatives": [
      "perplexity",
      "chatgpt"
    ]
  },
  {
    "slug": "perplexity",
    "name": "Perplexity",
    "company": "Perplexity AI",
    "officialUrl": "https://www.perplexity.ai",
    "category": "search",
    "categories": [
      "search",
      "chat",
      "productivity"
    ],
    "shortDescription": "革命性的 AI 搜索引擎，提供带引用的精确答案，改变了人们查阅资料的方式。",
    "description": "Perplexity 是一款结合了大型语言模型与实时网络搜索的 AI 问答引擎。与传统的 Google 搜索给出一堆链接不同，Perplexity 会阅读搜索结果，并直接给出一个结构化的完整回答，同时在每一句论断旁标注详细的来源引用。这极大地减少了用户在多个网页间跳转筛选信息的时间。",
    "tags": [
      "AI搜索",
      "带引用标注",
      "学术研究",
      "资料收集"
    ],
    "featured": true,
    "freePlan": "免费版可无限进行快速搜索。",
    "pricingType": "免费 / 订阅制（Pro $20/月）",
    "chineseSupport": "完全支持",
    "accountRequired": "否（免登录可用，登录可保存历史）",
    "platforms": [
      "网页端",
      "iOS",
      "Android",
      "macOS"
    ],
    "bestFor": [
      "研究人员",
      "学生",
      "内容创作者",
      "需要快速核实信息的人"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "在“幻觉”是 AI 通病的当下，Perplexity 通过强制大模型依据搜索结果进行总结，极大地提高了回答的真实性。Pro 用户甚至可以随时切换后台模型（如 GPT-4、Claude 或自研模型），并使用 Pro Search 功能进行深度链式思考搜索。",
    "features": [
      "每一句话都有清晰的文献或网页出处脚注",
      "Pro Search 能自动拆解复杂问题，进行多次递进搜索",
      "支持划定搜索范围：如仅限学术论文、仅限 YouTube 视频、仅限 Reddit 讨论",
      "Pages 功能可一键将搜索结果生成排版精美的知识维基页面"
    ],
    "useCases": [
      "调研某个行业的最新市场规模并要求提供数据来源",
      "查阅某种疾病的最新治疗方案，并将搜索范围限定为学术期刊",
      "寻找某个复杂开源软件的安装报错原因，聚焦于 Reddit 和 StackOverflow",
      "快速生成一份带有引用来源的研究简报"
    ],
    "gettingStarted": [
      "无需注册，直接访问 perplexity.ai 即可在主页输入问题。",
      "建议登录账号以保存您的“Threads”（搜索对话历史）。",
      "点击输入框下方的“Focus”可以限定搜索领域（如 Academic 或 Social）。",
      "在回答下方继续提问，AI 会结合上下文和最新搜索继续深入。"
    ],
    "networkAndRegion": "该服务的实际可用性可能受到网络环境影响。相比部分需要严格风控注册的工具，Perplexity 通常对节点 IP 的容忍度较高，但国内直连可能仍会出现加载缓慢或被重置的情况，推荐在稳定的国际网络环境下使用。",
    "advantages": [
      "信息极具可信度，拒绝 AI 胡编乱造",
      "无广告干扰的纯净搜索体验",
      "Pro 订阅相当于一次性买到了当前主流各家最强模型的 API 使用权"
    ],
    "limitations": [
      "对于纯创意写作（如写小说）不如专用聊天 AI",
      "免费版的搜索深度有限，处理极度冷门的问题时可能会找不到准确答案"
    ],
    "faq": [
      {
        "q": "Perplexity 能够完全替代 Google 吗？",
        "a": "对于寻求具体答案、调研资料，它完全可以替代甚至超越传统搜索。但如果是为了导航到某个特定网站或购物比价，传统搜索引擎仍有优势。"
      },
      {
        "q": "Pro Search 是什么？",
        "a": "这是一种深度搜索模式，AI 在回答前会先反问你细节以澄清意图，然后自动在后台执行多次关键词搜索、阅读十几个网页，最后综合给出一篇详尽报告。"
      },
      {
        "q": "免费用户可以使用吗？",
        "a": "可以，免费用户每天可以进行无限次的标准搜索，并会获赠少量每日额度的 Pro Search。"
      }
    ],
    "alternatives": [
      "chatgpt",
      "grok"
    ]
  },
  {
    "slug": "cursor",
    "name": "Cursor",
    "company": "Anysphere",
    "officialUrl": "https://www.cursor.com",
    "category": "coding",
    "categories": [
      "coding",
      "productivity"
    ],
    "shortDescription": "专为 AI 设计的代码编辑器，提供强大的代码库级别理解和内联生成体验。",
    "description": "Cursor 是一款基于 VS Code 源码进行二次开发的 AI 代码编辑器。它不仅仅是加了一个聊天侧边栏，而是将 AI 深度融合到了编码的每一个环节。通过索引您的整个项目代码库，Cursor 能够理解全局上下文，实现极高准确率的代码生成、重构和自动补全，被称为下一代 IDE。",
    "tags": [
      "AI编程",
      "VS Code",
      "代码库索引",
      "开发者必备"
    ],
    "featured": true,
    "freePlan": "提供免费基础额度（通常包含 14 天高级功能试用）。",
    "pricingType": "免费 / 订阅制（Pro $20/月）",
    "chineseSupport": "支持（界面英文，AI 对话支持中文）",
    "accountRequired": "需要",
    "platforms": [
      "Windows",
      "macOS",
      "Linux"
    ],
    "bestFor": [
      "程序员",
      "前端开发",
      "后端开发",
      "想做产品的非技术人员"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "对于习惯了 VS Code 的开发者来说，Cursor 几乎是零学习成本的完美替代品，因为它支持所有原版插件和快捷键。其最核心的特色是 Cmd/Ctrl+K 内联生成和 Cmd/Ctrl+L 聊天，不仅能写新代码，还能跨文件帮你找出 Bug 的根源。",
    "features": [
      "完整索引整个本地代码库，回答针对全局逻辑的问题",
      "Cmd+K 直接在代码行内呼出 AI 生成或修改代码",
      "多文件差异对比与一键应用修改 (Apply)",
      "无缝兼容所有 VS Code 插件、主题和配置",
      "支持 @Docs 调用最新的第三方官方技术文档"
    ],
    "useCases": [
      "按 Cmd+L 询问：“这段登录逻辑目前在哪里，我要怎么增加 Google 登录？”",
      "高亮一个复杂的旧函数，按 Cmd+K 输入：“重构为更现代的 async/await 语法”",
      "遇到报错时直接点击“Debug with AI”，让其自动分析并提出修改方案",
      "利用 Cursor 的全局生成能力，用人类语言从零开始搭建一个完整的网站骨架"
    ],
    "gettingStarted": [
      "前往官网下载 Cursor 安装包。",
      "首次启动时，可选择一键导入您现有的 VS Code 扩展和快捷键。",
      "在本地打开一个项目文件夹，等待其自动生成 Codebase 索引。",
      "按下 Cmd/Ctrl+L 呼出聊天框，或者选中代码按 Cmd/Ctrl+K 开始修改。"
    ],
    "networkAndRegion": "在国内网络环境下，Cursor 的 AI 功能需要保持持续稳定的连接。如果网络不稳定，将导致自动补全失效、聊天框长时间加载报错。建议开发者配置全局或 IDE 级别的网络代理设置。",
    "advantages": [
      "真正理解“整个项目”的上下文，而不仅是当前打开的文件",
      "无缝继承 VS Code 生态，迁移成本极低",
      "Cursor Tab 的自动多行预测补全体验极佳，甚至能猜测你接下来要写的方法"
    ],
    "limitations": [
      "对于习惯使用 JetBrains 系列（如 IntelliJ IDEA, WebStorm）的开发者来说，需要改变 IDE 习惯",
      "强依赖云端 AI，无网环境下退化为普通编辑器"
    ],
    "faq": [
      {
        "q": "我已经买了 GitHub Copilot，还需要 Cursor 吗？",
        "a": "这两者是竞争关系。目前很多开发者认为 Cursor 的整体上下文理解和修改体验优于 Copilot。如果您只是需要简单补全，Copilot 够用；但如果您希望 AI 帮您重构或阅读大量代码，Cursor 表现更好。"
      },
      {
        "q": "Cursor 可以用自己的 API Key 吗？",
        "a": "可以，Cursor 允许用户在设置中填入自己的 OpenAI 或 Anthropic API Key 按量付费，适合用量较少或追求成本控制的用户。"
      },
      {
        "q": "我的代码会被用来训练吗？",
        "a": "Cursor 官方承诺，提供给用户的 Privacy Mode（隐私模式）开启后，代码将不会被保存或用于训练模型，满足企业级安全需求。"
      }
    ],
    "alternatives": [
      "github-copilot",
      "replit",
      "v0"
    ]
  },
  {
    "slug": "github-copilot",
    "name": "GitHub Copilot",
    "company": "GitHub / Microsoft",
    "officialUrl": "https://github.com/features/copilot",
    "category": "coding",
    "categories": [
      "coding"
    ],
    "shortDescription": "全球普及率最高的 AI 编程助手，完美集成在各大主流 IDE 中。",
    "description": "GitHub Copilot 是由 GitHub 和 OpenAI 合作推出的 AI 编程助手，被广泛认为是开启这一波“AI 代码生成”浪潮的先驱。通过海量开源代码训练，它可以根据您的注释和当前上下文，实时在编辑器中建议单行或多行代码。",
    "tags": [
      "AI编程",
      "代码补全",
      "VS Code插件",
      "微软"
    ],
    "featured": false,
    "freePlan": "无免费版，仅提供限时免费试用，对通过认证的学生和部分开源维护者免费。",
    "pricingType": "订阅制（个人版 $10/月）",
    "chineseSupport": "支持",
    "accountRequired": "需要 GitHub 账号",
    "platforms": [
      "VS Code",
      "Visual Studio",
      "JetBrains IDEs",
      "Neovim",
      "Xcode"
    ],
    "bestFor": [
      "所有开发者",
      "学生",
      "大中型企业研发团队"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "与独立 IDE 不同，Copilot 是一个插件，这意味着无论您使用 VS Code、WebStorm 还是 Xcode，都可以享受到它的自动补全功能。最新的 Copilot Chat 也加入了侧边栏对话功能，允许开发者通过自然语言生成单元测试或解释代码。",
    "features": [
      "行级和块级的实时代码自动预测补全",
      "支持绝大多数主流编程语言",
      "Copilot Chat 提供问答、代码解释和自动写测试功能",
      "集成在企业级开发工作流中，安全性高"
    ],
    "useCases": [
      "在编辑器中写下一行注释 `// 连接到 MongoDB 数据库`，按下 Tab 键接受其自动生成的代码",
      "高亮一段看不懂的正则表达式，在侧边栏让 Copilot 解释它的含义",
      "选中一个核心函数，一键为其生成 Jest 单元测试代码",
      "在 JetBrains 等 IDE 中无缝使用 AI 辅助编码"
    ],
    "gettingStarted": [
      "在您的 IDE（如 VS Code 或 IntelliJ）的插件市场搜索并安装 GitHub Copilot。",
      "登录已激活订阅的 GitHub 账号。",
      "开始编写代码或注释，当出现灰色建议代码时，按 Tab 键接受。"
    ],
    "networkAndRegion": "该服务依赖持续的网络连接来向云端发送上下文并获取代码建议。在国内使用时，如果网络连接不稳定，经常会出现补全建议转圈很久出不来的情况。通常不需要特别复杂的区域伪装，但需要稳定低延迟的国际网络。",
    "advantages": [
      "生态兼容性最强，支持几乎所有主流 IDE",
      "价格相对亲民（$10/月）",
      "微软与 GitHub 背书，企业合规性极好"
    ],
    "limitations": [
      "在全局代码库理解和多文件重构方面，目前落后于原生 AI 编辑器 Cursor",
      "必须要保持常年联网订阅"
    ],
    "faq": [
      {
        "q": "学生可以免费使用吗？",
        "a": "是的，只要您拥有有效的教育邮箱（.edu等）并成功通过 GitHub Student Developer Pack 认证，就可以永久免费使用。"
      },
      {
        "q": "Copilot 会窃取公司的私有代码吗？",
        "a": "对于个人用户，您可以选择在 GitHub 设置中关闭“允许使用我的代码进行训练”的选项。对于企业版（Copilot for Business），官方承诺代码绝不留存或用于训练。"
      }
    ],
    "alternatives": [
      "cursor",
      "replit",
      "bolt"
    ]
  },
  {
    "slug": "midjourney",
    "name": "Midjourney",
    "company": "Midjourney, Inc.",
    "officialUrl": "https://www.midjourney.com",
    "category": "image",
    "categories": [
      "image",
      "design"
    ],
    "shortDescription": "目前综合质感最好、艺术性最强的 AI 图片生成工具，广受设计师和插画师追捧。",
    "description": "Midjourney 是一款由独立研究实验室推出的 AI 绘图工具。自发布以来，它以其惊艳的艺术美感、逼真的光影质感以及极高的细节丰富度，稳坐 AI 绘画领域的头把交椅。无论是摄影级的写实人像、夸张的 3D 渲染，还是唯美的二次元插画，它都能轻松驾驭。",
    "tags": [
      "AI绘画",
      "艺术创作",
      "Discord",
      "设计必备"
    ],
    "featured": true,
    "freePlan": "目前通常已取消免费试用额度，需付费订阅。",
    "pricingType": "订阅制（Basic $10/月，Standard $30/月）",
    "chineseSupport": "较弱（必须使用英文 Prompt 才能获得最佳效果）",
    "accountRequired": "需要 Discord 账号（部分用户可直接使用 Web 版）",
    "platforms": [
      "Discord",
      "网页端"
    ],
    "bestFor": [
      "插画师",
      "摄影师",
      "平面设计师",
      "游戏美术",
      "自媒体"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "早期 Midjourney 必须通过 Discord 软件发送指令使用，这带来了一定的学习门槛，但也形成了庞大的灵感共享社区。现在 Midjourney 已经推出了全新的独立网页版（Alpha/Beta），拥有更直观的滑块调节、局部重绘和图片管理体验。",
    "features": [
      "行业顶级的画面质感和审美下限，很少出“烂图”",
      "支持垫图（Image Prompt）、融图（Blend）和角色一致性保持（Cref）",
      "强大的风格化参数（--s, --stylize）和特殊宽高比控制",
      "独立的 Alpha 网页端带来了现代化的图片生成体验"
    ],
    "useCases": [
      "为自媒体文章或 YouTube 视频生成高质量的封面背景",
      "产品设计师用来快速生成不同材质、打光下的概念渲染图",
      "小说作者为自己书中的角色设定进行可视化，并保持角色脸部一致",
      "生成无缝贴图、Logo 草图或盲盒潮玩设计"
    ],
    "gettingStarted": [
      "如果没有网页版权限，请先注册一个 Discord 账号。",
      "访问官网并加入 Midjourney 的 Discord 官方频道，订阅对应套餐。",
      "在聊天频道中输入 `/imagine prompt:` 加上您的英文描述（如 a futuristic city, neon lights, 8k, photorealistic）。",
      "等待约一分钟，AI 会返回 4 张不同选项，点击 U 放大满意的一张，或 V 变体生成。"
    ],
    "networkAndRegion": "由于其服务托管在 Discord 以及自身的独立网页端上，国内网络环境下无法直接连接。实际可用性严重依赖用户的网络方案。部分地区 IP 可能在支付阶段遇到阻力（如 Stripe 拒付），需要干净的国际网络环境和支持海外支付的信用卡。",
    "advantages": [
      "毫无争议的业界第一画质，光影和构图充满艺术感",
      "只需极短的提示词，模型就会自动脑补出极好的细节",
      "强大的连贯性控制能力（角色/风格一致）"
    ],
    "limitations": [
      "依然难以准确生成带有大段逻辑排版的文字",
      "完全付费，没有任何免费白嫖途径",
      "对于不习惯 Discord 的用户有一定门槛（尽管网页版正在普及）"
    ],
    "faq": [
      {
        "q": "Midjourney 支持中文提示词吗？",
        "a": "官方模型训练主要是基于英文的。如果您使用中文，它可能会听不懂甚至瞎画。建议使用翻译软件将中文想法翻译成精准的英文词汇后再输入。"
      },
      {
        "q": "我可以将生成的图片用于商业用途吗？",
        "a": "根据官方条款，只要您是付费订阅用户，生成的图片即默认赋予您商用权利。"
      },
      {
        "q": "网页版和 Discord 版有什么区别？",
        "a": "核心生成能力是一样的。网页版界面更友好，支持直接用鼠标框选区域进行局部重绘，但需要您的账号在 Discord 生成过一定数量的历史图片才能解锁网页版权限（该限制正在逐步放宽）。"
      }
    ],
    "alternatives": [
      "ideogram",
      "leonardo-ai",
      "adobe-firefly"
    ]
  },
  {
    "slug": "ideogram",
    "name": "Ideogram",
    "company": "Ideogram AI",
    "officialUrl": "https://ideogram.ai",
    "category": "image",
    "categories": [
      "image",
      "design"
    ],
    "shortDescription": "在图片中生成排版文字能力最强的 AI 画图工具，非常适合海报和 Logo 设计。",
    "description": "Ideogram 是由前 Google Brain 研究员创立的 AI 图像生成初创公司推出的产品。它解决了一个长期困扰 AI 绘画领域的痛点：无法准确在图片中生成拼写正确的文字。借助 Ideogram，您可以轻松制作出带有完美标语的 T 恤、海报、Logo 以及创意 3D 文字效果。",
    "tags": [
      "AI绘画",
      "海报设计",
      "文字生成",
      "排版艺术"
    ],
    "featured": true,
    "freePlan": "提供免费额度（每日可生成少量图片，生成速度较慢）。",
    "pricingType": "免费 / 订阅制（Basic $8/月起）",
    "chineseSupport": "中等（Prompt用英文，但已开始支持生成部分中文图画字）",
    "accountRequired": "需要 Google 或 Apple 账号登录",
    "platforms": [
      "网页端"
    ],
    "bestFor": [
      "电商设计师",
      "品牌营销",
      "周边设计",
      "社交媒体运营"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "除了极其强悍的文字渲染能力，Ideogram 的整体画质也在迅速追赶第一梯队。它拥有一个类似 Pinterest 的极简界面，用户可以直接在网页上浏览社区大佬们的精美作品，一键“Remix”套用别人的提示词。",
    "features": [
      "完美理解并渲染带有引号的指定文本（如 \"Happy New Year\"）",
      "提供丰富的预设风格标签（如 Typography, 3D Render, Cinematic）",
      "Magic Prompt 功能可自动帮您把简单的短句扩写为细节丰富的长提示词",
      "社区化浏览体验好，灵感获取方便"
    ],
    "useCases": [
      "制作带有特定品牌口号的咖啡杯创意渲染图",
      "为万圣节活动生成带有 \"Halloween Party\" 立体字体的宣传海报",
      "生成贴纸、插画和矢量风格的电商配图",
      "设计带有公司名称前缀的霓虹灯赛博朋克招牌"
    ],
    "gettingStarted": [
      "访问 ideogram.ai 并使用 Google 账号快捷登录。",
      "在顶部的输入框中输入您的描述。如果需要出现文字，请将文字用双引号括起来（例如：a cute cat holding a sign that says \"RunAI\"）。",
      "选择比例（如 16:9 或 9:16），并勾选需要的风格标签。",
      "点击 Generate，稍等片刻即可获得。"
    ],
    "networkAndRegion": "由于依赖 Google 账号进行授权登录及部分验证机制，国内用户在不使用适当网络方案的情况下无法正常访问。请确保您的网络环境支持顺畅加载海外静态资源。",
    "advantages": [
      "文字渲染准确率秒杀 Midjourney 和 Stable Diffusion 等传统巨头",
      "Magic Prompt 极大降低了写提示词的门槛，小白也能出大片",
      "提供每天的免费使用配额"
    ],
    "limitations": [
      "最高画质和光影质感距离 Midjourney 仍有微小差距",
      "目前在生成长篇中文字体时仍然存在笔画错误的问题，英文支持最完美"
    ],
    "faq": [
      {
        "q": "Ideogram 可以生成中文文字在图片里吗？",
        "a": "最新模型已经开始支持少量的中文字符生成，但出错率比英文高。建议文字生成主要以英文排版为主。"
      },
      {
        "q": "下载的图片可以商用吗？",
        "a": "付费用户的生成图片是可以用于商业用途的。免费用户的商用权限及生成图片的私密性可能会受到限制，请参考官方最新 Terms。"
      }
    ],
    "alternatives": [
      "midjourney",
      "adobe-firefly"
    ]
  },
  {
    "slug": "runway",
    "name": "Runway",
    "company": "Runway AI",
    "officialUrl": "https://runwayml.com",
    "category": "video",
    "categories": [
      "video",
      "design"
    ],
    "shortDescription": "AI 视频生成的先驱，Gen-3 模型提供惊人的运镜控制和影视级质感。",
    "description": "Runway 是一家致力于为创意人员构建下一代内容制作工具的 AI 公司。他们的旗舰模型系列（如 Gen-2 和目前顶级的 Gen-3 Alpha）代表了目前商业化文本生成视频 (Text-to-Video) 的最高水平。除了视频生成，Runway 还提供了一整套基于浏览器的 AI 魔法工具，用于视频抠像、绿幕和特效合成。",
    "tags": [
      "AI视频",
      "视频生成",
      "影视特效",
      "运镜控制"
    ],
    "featured": true,
    "freePlan": "新注册用户有一定的免费积分试用。",
    "pricingType": "订阅制（Standard $15/月）",
    "chineseSupport": "较弱（界面及指令以英文为主）",
    "accountRequired": "需要",
    "platforms": [
      "网页端",
      "iOS App"
    ],
    "bestFor": [
      "影视工作者",
      "广告导演",
      "短视频博主",
      "自媒体"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "在经历了早期的“视频像幻觉一样变形”的阶段后，Runway 的 Gen-3 Alpha 实现了物理连贯性和高度真实的画面质感。用户不仅可以文字生成视频，还可以通过上传静态图片（图生视频），并通过笔刷控制画面中特定元素的运动轨迹，极大提高了可控性。",
    "features": [
      "支持高度真实的 5-10 秒文本生成视频",
      "图生视频模式下提供精确的运动笔刷 (Motion Brush) 和运镜控制 (Camera Control)",
      "拥有口型同步 (Lip Sync) 功能，让图片里的人物直接开口说话",
      "包含视频补帧、绿幕抠像、去除杂物等 30+ 种实用后期 AI 工具"
    ],
    "useCases": [
      "给电商产品静态图注入动态光影和运镜，制作高级宣传片",
      "用文本直接生成科幻大片的空镜头或大自然延时摄影素材",
      "通过 Lip Sync 功能制作数字人播报短视频",
      "利用其视频抠图能力快速移除废片中的背景路人"
    ],
    "gettingStarted": [
      "访问 runwayml.com 并注册账号。",
      "在控制台选择 Gen-3 Alpha 视频生成工具。",
      "上传一张起点参考图，或者直接输入描述运镜、主体和光影的英文 Prompt。",
      "点击生成，等待约一到两分钟即可下载生成的视频片段。"
    ],
    "networkAndRegion": "由于涉及较大的视频文件上传和下载以及云端 GPU 渲染分配，对网络带宽和稳定性要求较高。国内网络访问可能会遇到连接中断导致生成进度条卡死的情况，建议使用稳定的网络方案。",
    "advantages": [
      "视频生成的连贯性和质感处于商业可用级别",
      "可控性强（运动笔刷等功能是许多创作者的刚需）",
      "全浏览器工作流，无需购买昂贵的本地显卡"
    ],
    "limitations": [
      "生成费用较昂贵，重度使用者极易耗尽积分",
      "人物的大幅度肢体动作仍可能出现穿模或扭曲"
    ],
    "faq": [
      {
        "q": "Runway 生成的视频带水印吗？",
        "a": "免费额度生成的视频会在右下角带有 Runway 水印。付费订阅后可以去除水印。"
      },
      {
        "q": "我可以生成多长的视频？",
        "a": "目前主流的单次生成一般在 5 到 10 秒左右。您可以通过 Extend 功能续写视频，但过长的视频难以保证前后物理连贯性。"
      },
      {
        "q": "Gen-3 和之前的模型有什么区别？",
        "a": "Gen-3 Alpha 在时间连贯性、光线渲染和动作逼真度上有了质的飞跃，彻底告别了早期 AI 视频那种强烈的“粘土融合感”和诡异的形变。"
      }
    ],
    "alternatives": [
      "pika",
      "luma-dream-machine"
    ]
  },
  {
    "slug": "canva-ai",
    "name": "Canva AI (Magic Studio)",
    "company": "Canva",
    "officialUrl": "https://www.canva.com",
    "category": "productivity",
    "categories": [
      "productivity",
      "design"
    ],
    "shortDescription": "将各种 AI 魔法工具无缝融入全球最流行的在线设计平台中，小白友好。",
    "description": "Canva 已经是全球非专业设计师最爱的在线作图工具，而其推出的 Magic Studio 则把 AI 能力带入到了排版的每一个角落。你不必去掌握复杂的 Prompt 或专业软件，只需在设计海报、PPT 或是社交媒体帖子时点击一下魔法棒，AI 就会帮你写文案、生成配图、甚至一键扣背景扩图。",
    "tags": [
      "AI设计",
      "办公效率",
      "PPT生成",
      "极低门槛"
    ],
    "featured": false,
    "freePlan": "部分 AI 功能免费可用，高级功能包含在 Canva Pro 中。",
    "pricingType": "免费 / 订阅制（Canva Pro）",
    "chineseSupport": "完全支持",
    "accountRequired": "需要",
    "platforms": [
      "网页端",
      "iOS",
      "Android",
      "Windows",
      "macOS"
    ],
    "bestFor": [
      "自媒体",
      "市场营销",
      "学生",
      "教师",
      "无设计基础的用户"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "Canva Magic Studio 的核心理念是“不破坏原有工作流”。你在做 PPT 缺一张图时，直接在旁边的文本框呼出“魔法生成图片”；想要把横屏海报改成竖屏，点击“魔法转换”即可自动重排所有元素。它甚至能把一篇长文档直接转换为一份排版精美的多页演示文稿。",
    "features": [
      "Magic Write 随时随地生成、润色设计图上的文案",
      "Magic Switch 一键将设计转换为其他尺寸或翻译为其他语言",
      "Magic Grab 一键剥离图片中的主体物，并允许随意拖动",
      "直接从文字生成演示文稿草稿"
    ],
    "useCases": [
      "给公司的公众号文章快速制作一套首图，并用 AI 扩图功能适应横宽比",
      "输入会议主题，直接让 Canva 生成一份包含图片和排版的 10 页初稿 PPT",
      "上传一张手机拍的产品图，一键去除杂乱背景并替换为工作室打光环境",
      "把做好的中文海报，一键翻译并重排版为日文、英文多语言版本"
    ],
    "gettingStarted": [
      "注册或登录 Canva 账号。",
      "创建一个新的设计（如演示文稿或 Instagram 帖子）。",
      "寻找带有星光图标（Magic 魔法棒）的功能按钮。",
      "在左侧工具栏体验“文本生成图像”等功能，然后直接将素材拖入画布。"
    ],
    "networkAndRegion": "Canva 在国内有官方中国版（canva.cn），但在部分 AI 功能的支持程度和合规要求上可能与国际版（canva.com）有所不同。如果是访问国际版体验完整的 Magic Studio，则需要注意网络环境和跨区账号政策。",
    "advantages": [
      "全球学习成本最低的 AI 设计工具",
      "与排版工具无缝整合，不需要生成完图片再导来导去",
      "内置了丰富的正版模板、字体素材库进行搭配"
    ],
    "limitations": [
      "纯粹的图像生成画质比不上单独的 Midjourney 或 Ideogram",
      "对于专业设计师来说，依然缺乏精细的矢量控制能力"
    ],
    "faq": [
      {
        "q": "国内版 Canva 可以用 AI 功能吗？",
        "a": "国内版也在陆续接入符合本土合规要求的 AI 功能，但在具体的底层模型调用、功能丰富度和素材库上，可能与国际版存在差异。"
      },
      {
        "q": "生成的内容算原创吗？",
        "a": "只要使用 Canva Pro 包含的正版商业权限素材，结合 AI 生成的作品通常可以用于合法的商业途径，但需遵守其授权协议。"
      }
    ],
    "alternatives": [
      "gamma",
      "adobe-firefly"
    ]
  },
  {
    "slug": "gamma",
    "name": "Gamma",
    "company": "Gamma Tech",
    "officialUrl": "https://gamma.app",
    "category": "productivity",
    "categories": [
      "productivity",
      "office"
    ],
    "shortDescription": "一句话自动生成精美 PPT、网页和文档，完全颠覆了传统排版体验。",
    "description": "Gamma 是一款革命性的演示文稿 AI 生成工具。在传统的 PowerPoint 或 Keynote 中，用户需要花费大量时间调整对齐、字体和排版；而在 Gamma 中，你只需输入一个大纲或者一段话，它就会在几秒钟内生成带有图文、图表、卡片翻转效果的精美幻灯片或单页网站。",
    "tags": [
      "AI制作PPT",
      "自动排版",
      "网页生成",
      "办公神器"
    ],
    "featured": true,
    "freePlan": "注册即送一定数量的免费积分，邀请好友可获赠更多。",
    "pricingType": "免费 / 订阅制（Plus $8/月起）",
    "chineseSupport": "完全支持",
    "accountRequired": "需要",
    "platforms": [
      "网页端"
    ],
    "bestFor": [
      "销售",
      "讲师",
      "学生",
      "项目经理",
      "急需做PPT的人"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "Gamma 不仅仅是“套模板”，它理解文字的逻辑结构。它能自动把密集的大段文字拆解为易于阅读的卡片、Timeline 或并列模块，并自动匹配背景图和配色。生成后，你还可以随时通过聊天框向 AI 发送指令，比如“把第二页改得更专业一点”、“给这页加上相关配图”。",
    "features": [
      "支持一句话生成，或者粘贴大段现成的 Word 内容自动转换排版",
      "灵活的卡片式模块，拖拽即可无缝重组排版",
      "支持一键切换全局主题风格（颜色、字体一次性更换）",
      "可以直接导出为 PDF 或 PPTX 格式，也可直接用网页链接分享演讲"
    ],
    "useCases": [
      "明早有个内部汇报，今晚粘贴会议纪要大纲，让 Gamma 3 分钟生成初稿",
      "作为教师，输入课程主题让 AI 自动生成包含配图的课件，并导出为 PDF 给学生",
      "没有前端知识，用它在一分钟内生成一个美观的个人简历或产品展示单页网站",
      "利用其嵌套卡片结构，展示复杂的商业企划案"
    ],
    "gettingStarted": [
      "访问 gamma.app 使用 Google 或邮箱注册登录。",
      "点击“New with AI”开始创建。",
      "选择要生成 Presentation（演示文稿）、Document（文档）还是 Webpage（网页）。",
      "输入一个主题（如“人工智能对未来教育的影响”），调整 AI 给出的大纲后，一键生成并预览。"
    ],
    "networkAndRegion": "网页端云服务，部分网络环境下可能加载速度较慢或无法正常调出样式表。国内使用建议配置良好的网络连接以保证生成过程的实时渲染不中断。",
    "advantages": [
      "极其惊艳的生成速度，真正解决了排版和找图的痛点",
      "生成内容的审美和现代感极佳，比传统的 PPT 模板好看很多",
      "对中文支持极好，能很好地拆解中文大段长文"
    ],
    "limitations": [
      "对于有强制企业规范、必须像素级遵守公司旧版 PPT 格式的用户不太方便",
      "免费用户导出的文件带有 Gamma 水印标识"
    ],
    "faq": [
      {
        "q": "Gamma 生成的幻灯片可以导入到 PowerPoint 吗？",
        "a": "可以，它支持导出为 PPTX 格式。但请注意，由于 Gamma 使用了一些现代网页渲染特效（如卡片交互），导出为传统 PPT 后，某些动态效果可能会降级为静态图片。"
      },
      {
        "q": "我可以用公司内部机密资料来让它生成 PPT 吗？",
        "a": "和所有云端 AI 工具一样，请避免直接粘贴高度敏感的商业机密。在输入公司核心数据前，建议脱敏处理或详细阅读其隐私政策条款。"
      }
    ],
    "alternatives": [
      "canva-ai"
    ]
  },
  {
    "slug": "suno",
    "name": "Suno",
    "company": "Suno AI",
    "officialUrl": "https://suno.com",
    "category": "music",
    "categories": [
      "music",
      "productivity"
    ],
    "shortDescription": "只要输入几句歌词和曲风，几秒钟就能生成一首高质量的带人声原创歌曲。",
    "description": "Suno 是 AI 音乐生成领域的破圈级现象产品。过去，AI 音乐往往只能生成毫无起伏的纯背景音乐；而 Suno 不仅能生成完整包含主歌、副歌编曲的音乐，最令人震惊的是它能够极其自然地合成人声演唱。不论是流行、摇滚、爵士还是中文古风，它都能完美演绎你给出的歌词。",
    "tags": [
      "AI音乐",
      "歌曲生成",
      "音频创作",
      "零门槛"
    ],
    "featured": true,
    "freePlan": "每天赠送免费积分，每日可生成约 10 首基础歌曲。",
    "pricingType": "免费 / 订阅制（Pro $8/月）",
    "chineseSupport": "完全支持（中文歌词咬字非常清晰准确）",
    "accountRequired": "需要",
    "platforms": [
      "网页端",
      "iOS"
    ],
    "bestFor": [
      "音乐爱好者",
      "自媒体",
      "短视频创作者",
      "游戏开发者"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "在 V3/V3.5 时代，Suno 的生成质量已经达到了部分普通流媒体歌曲的门槛。用户可以选择在 Custom Mode 中自行填写写好的诗歌或歌词，指定明确的音乐流派（如 Synthpop, K-pop, Epic Orchestral），甚至指定哪一句是女声、哪一句是电吉他 Solo，极具可玩性。",
    "features": [
      "支持人声歌曲生成与纯器乐 (Instrumental) 生成",
      "对中文的支持极佳，甚至能用部分方言、古诗词演唱",
      "支持音频续写 (Extend)，将两分钟的歌曲无缝延长",
      "支持上传一段自己哼唱的音频，让 AI 把其扩写为完整的录音室级别单曲"
    ],
    "useCases": [
      "为自己的 YouTube 视频或播客生成一首绝对不会版权侵权的定制片头曲",
      "输入一首自己写的打油诗或情书，送给朋友一首专属的流行歌曲",
      "独立游戏开发者快速生成游戏不同场景下的背景 BGM",
      "不会乐理的音乐爱好者体验制作属于自己的数字专辑"
    ],
    "gettingStarted": [
      "登录 suno.com（支持 Google、Discord、Microsoft 等账号快捷登录）。",
      "点击左侧导航的 Create 进入创作界面。",
      "打开 Custom Mode，在 Lyrics 框粘贴您的歌词，或者点击 Generate Lyrics 让 AI 代写。",
      "在 Style of Music 中输入风格词（如 upbeat pop rock, female vocal）。点击生成，稍等片刻即可试听。"
    ],
    "networkAndRegion": "由于其服务部署在海外并大量依赖外部账户登录体系，国内直接访问可能面临各种资源加载失败或验证码无法显示的问题。需要正常的国际网络环境以顺畅地试听流媒体音频和下载文件。",
    "advantages": [
      "毫无门槛，任何人都能体验完整的音乐制作快感",
      "每天刷新免费额度，极其慷慨",
      "中文字正腔圆，流行风格的旋律非常洗脑悦耳"
    ],
    "limitations": [
      "目前音频的音质（特别是高频区域）仍有轻微的电子“糊”感，难以达到母带级音质",
      "生成具有强随机性，不能精确修改某一个错音，只能反复抽卡重抽"
    ],
    "faq": [
      {
        "q": "Suno 生成的歌曲版权归谁？可以发到网易云或抖音吗？",
        "a": "对于免费用户，生成的歌曲不能商用，必须注明来源 Suno。如果您是付费订阅用户，生成的歌曲版权及商用权归您所有，您可以将其发布到流媒体平台营利。"
      },
      {
        "q": "如何控制它唱哪段？",
        "a": "在歌词框中，您可以使用中括号来给出提示词结构，例如 [Verse]（主歌）、[Chorus]（副歌）、[Guitar Solo]（吉他独奏）等，AI 极大概率会识别并按对应的结构情绪去演唱。"
      }
    ],
    "alternatives": []
  },
  {
    "slug": "replit",
    "name": "Replit",
    "company": "Replit",
    "officialUrl": "https://replit.com",
    "category": "coding",
    "categories": [
      "coding"
    ],
    "shortDescription": "强大的 AI 辅助工具，助力日常开发与创意工作流，极大提升工作效率。",
    "description": "Replit 是一款针对特定领域的 AI 生成和辅助工具，凭借其优异的生成质量和简化的操作流程，在同类产品中脱颖而出。它通过引入深度学习和大语言模型，改变了传统生产方式，使用户能够以前所未有的速度实现创意。",
    "tags": [
      "AI工具",
      "生产力",
      "创意设计"
    ],
    "featured": false,
    "freePlan": "提供基础免费体验额度，满足常规轻量需求。",
    "pricingType": "免费 / 订阅制",
    "chineseSupport": "支持",
    "accountRequired": "需要",
    "platforms": [
      "网页端"
    ],
    "bestFor": [
      "专业人士",
      "创意工作者",
      "技术爱好者"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "无论是进行初期的创意探索，还是后期的精细化打磨，该工具都提供了一套完善的解决方案。它在核心算法和交互体验上做了大量优化，有效降低了新手的学习门槛，并帮助专业用户成倍提升效率。",
    "features": [
      "快速生成高质量结果",
      "支持迭代和微调",
      "流畅的跨设备云端工作流"
    ],
    "useCases": [
      "在日常工作中寻找灵感",
      "快速搭建原型或草稿",
      "自动化替代部分重复性劳动"
    ],
    "gettingStarted": [
      "访问官网 https://replit.com",
      "使用邮箱或第三方账号快速注册登录",
      "在主界面中输入文本提示词或上传参考文件开始生成"
    ],
    "networkAndRegion": "该服务主要面向全球用户部署，国内用户在直接访问时可能会遇到加载缓慢、资源无法下载或注册受限等问题。建议保持良好的国际网络连通性。该服务的实际可用性可能受到网络环境或官方政策调整影响。",
    "advantages": [
      "上手容易，界面直观现代",
      "特定场景下生成的质量极佳"
    ],
    "limitations": [
      "免费额度有限",
      "部分进阶功能需要付费解锁"
    ],
    "faq": [
      {
        "q": "这个工具可以免费商用吗？",
        "a": "通常需要付费订阅才能获取完整的商用授权许可，免费版本多限个人学习使用，建议使用前查阅官方最新 Terms。"
      },
      {
        "q": "对电脑配置有要求吗？",
        "a": "大部分核心计算都在云端服务器完成，只要您的设备能够流畅打开网页即可，无需昂贵的独立显卡。"
      }
    ],
    "alternatives": []
  },
  {
    "slug": "v0",
    "name": "v0",
    "company": "Vercel",
    "officialUrl": "https://v0.dev",
    "category": "coding",
    "categories": [
      "coding"
    ],
    "shortDescription": "强大的 AI 辅助工具，助力日常开发与创意工作流，极大提升工作效率。",
    "description": "v0 是一款针对特定领域的 AI 生成和辅助工具，凭借其优异的生成质量和简化的操作流程，在同类产品中脱颖而出。它通过引入深度学习和大语言模型，改变了传统生产方式，使用户能够以前所未有的速度实现创意。",
    "tags": [
      "AI工具",
      "生产力",
      "创意设计"
    ],
    "featured": false,
    "freePlan": "提供基础免费体验额度，满足常规轻量需求。",
    "pricingType": "免费 / 订阅制",
    "chineseSupport": "支持",
    "accountRequired": "需要",
    "platforms": [
      "网页端"
    ],
    "bestFor": [
      "专业人士",
      "创意工作者",
      "技术爱好者"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "无论是进行初期的创意探索，还是后期的精细化打磨，该工具都提供了一套完善的解决方案。它在核心算法和交互体验上做了大量优化，有效降低了新手的学习门槛，并帮助专业用户成倍提升效率。",
    "features": [
      "快速生成高质量结果",
      "支持迭代和微调",
      "流畅的跨设备云端工作流"
    ],
    "useCases": [
      "在日常工作中寻找灵感",
      "快速搭建原型或草稿",
      "自动化替代部分重复性劳动"
    ],
    "gettingStarted": [
      "访问官网 https://v0.dev",
      "使用邮箱或第三方账号快速注册登录",
      "在主界面中输入文本提示词或上传参考文件开始生成"
    ],
    "networkAndRegion": "该服务主要面向全球用户部署，国内用户在直接访问时可能会遇到加载缓慢、资源无法下载或注册受限等问题。建议保持良好的国际网络连通性。该服务的实际可用性可能受到网络环境或官方政策调整影响。",
    "advantages": [
      "上手容易，界面直观现代",
      "特定场景下生成的质量极佳"
    ],
    "limitations": [
      "免费额度有限",
      "部分进阶功能需要付费解锁"
    ],
    "faq": [
      {
        "q": "这个工具可以免费商用吗？",
        "a": "通常需要付费订阅才能获取完整的商用授权许可，免费版本多限个人学习使用，建议使用前查阅官方最新 Terms。"
      },
      {
        "q": "对电脑配置有要求吗？",
        "a": "大部分核心计算都在云端服务器完成，只要您的设备能够流畅打开网页即可，无需昂贵的独立显卡。"
      }
    ],
    "alternatives": []
  },
  {
    "slug": "bolt",
    "name": "Bolt",
    "company": "StackBlitz",
    "officialUrl": "https://bolt.new",
    "category": "coding",
    "categories": [
      "coding"
    ],
    "shortDescription": "强大的 AI 辅助工具，助力日常开发与创意工作流，极大提升工作效率。",
    "description": "Bolt 是一款针对特定领域的 AI 生成和辅助工具，凭借其优异的生成质量和简化的操作流程，在同类产品中脱颖而出。它通过引入深度学习和大语言模型，改变了传统生产方式，使用户能够以前所未有的速度实现创意。",
    "tags": [
      "AI工具",
      "生产力",
      "创意设计"
    ],
    "featured": false,
    "freePlan": "提供基础免费体验额度，满足常规轻量需求。",
    "pricingType": "免费 / 订阅制",
    "chineseSupport": "支持",
    "accountRequired": "需要",
    "platforms": [
      "网页端"
    ],
    "bestFor": [
      "专业人士",
      "创意工作者",
      "技术爱好者"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "无论是进行初期的创意探索，还是后期的精细化打磨，该工具都提供了一套完善的解决方案。它在核心算法和交互体验上做了大量优化，有效降低了新手的学习门槛，并帮助专业用户成倍提升效率。",
    "features": [
      "快速生成高质量结果",
      "支持迭代和微调",
      "流畅的跨设备云端工作流"
    ],
    "useCases": [
      "在日常工作中寻找灵感",
      "快速搭建原型或草稿",
      "自动化替代部分重复性劳动"
    ],
    "gettingStarted": [
      "访问官网 https://bolt.new",
      "使用邮箱或第三方账号快速注册登录",
      "在主界面中输入文本提示词或上传参考文件开始生成"
    ],
    "networkAndRegion": "该服务主要面向全球用户部署，国内用户在直接访问时可能会遇到加载缓慢、资源无法下载或注册受限等问题。建议保持良好的国际网络连通性。该服务的实际可用性可能受到网络环境或官方政策调整影响。",
    "advantages": [
      "上手容易，界面直观现代",
      "特定场景下生成的质量极佳"
    ],
    "limitations": [
      "免费额度有限",
      "部分进阶功能需要付费解锁"
    ],
    "faq": [
      {
        "q": "这个工具可以免费商用吗？",
        "a": "通常需要付费订阅才能获取完整的商用授权许可，免费版本多限个人学习使用，建议使用前查阅官方最新 Terms。"
      },
      {
        "q": "对电脑配置有要求吗？",
        "a": "大部分核心计算都在云端服务器完成，只要您的设备能够流畅打开网页即可，无需昂贵的独立显卡。"
      }
    ],
    "alternatives": []
  },
  {
    "slug": "leonardo-ai",
    "name": "Leonardo AI",
    "company": "Leonardo",
    "officialUrl": "https://leonardo.ai",
    "category": "image",
    "categories": [
      "image"
    ],
    "shortDescription": "强大的 AI 辅助工具，助力日常开发与创意工作流，极大提升工作效率。",
    "description": "Leonardo AI 是一款针对特定领域的 AI 生成和辅助工具，凭借其优异的生成质量和简化的操作流程，在同类产品中脱颖而出。它通过引入深度学习和大语言模型，改变了传统生产方式，使用户能够以前所未有的速度实现创意。",
    "tags": [
      "AI工具",
      "生产力",
      "创意设计"
    ],
    "featured": false,
    "freePlan": "提供基础免费体验额度，满足常规轻量需求。",
    "pricingType": "免费 / 订阅制",
    "chineseSupport": "支持",
    "accountRequired": "需要",
    "platforms": [
      "网页端"
    ],
    "bestFor": [
      "专业人士",
      "创意工作者",
      "技术爱好者"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "无论是进行初期的创意探索，还是后期的精细化打磨，该工具都提供了一套完善的解决方案。它在核心算法和交互体验上做了大量优化，有效降低了新手的学习门槛，并帮助专业用户成倍提升效率。",
    "features": [
      "快速生成高质量结果",
      "支持迭代和微调",
      "流畅的跨设备云端工作流"
    ],
    "useCases": [
      "在日常工作中寻找灵感",
      "快速搭建原型或草稿",
      "自动化替代部分重复性劳动"
    ],
    "gettingStarted": [
      "访问官网 https://leonardo.ai",
      "使用邮箱或第三方账号快速注册登录",
      "在主界面中输入文本提示词或上传参考文件开始生成"
    ],
    "networkAndRegion": "该服务主要面向全球用户部署，国内用户在直接访问时可能会遇到加载缓慢、资源无法下载或注册受限等问题。建议保持良好的国际网络连通性。该服务的实际可用性可能受到网络环境或官方政策调整影响。",
    "advantages": [
      "上手容易，界面直观现代",
      "特定场景下生成的质量极佳"
    ],
    "limitations": [
      "免费额度有限",
      "部分进阶功能需要付费解锁"
    ],
    "faq": [
      {
        "q": "这个工具可以免费商用吗？",
        "a": "通常需要付费订阅才能获取完整的商用授权许可，免费版本多限个人学习使用，建议使用前查阅官方最新 Terms。"
      },
      {
        "q": "对电脑配置有要求吗？",
        "a": "大部分核心计算都在云端服务器完成，只要您的设备能够流畅打开网页即可，无需昂贵的独立显卡。"
      }
    ],
    "alternatives": []
  },
  {
    "slug": "adobe-firefly",
    "name": "Adobe Firefly",
    "company": "Adobe",
    "officialUrl": "https://firefly.adobe.com",
    "category": "image",
    "categories": [
      "image"
    ],
    "shortDescription": "强大的 AI 辅助工具，助力日常开发与创意工作流，极大提升工作效率。",
    "description": "Adobe Firefly 是一款针对特定领域的 AI 生成和辅助工具，凭借其优异的生成质量和简化的操作流程，在同类产品中脱颖而出。它通过引入深度学习和大语言模型，改变了传统生产方式，使用户能够以前所未有的速度实现创意。",
    "tags": [
      "AI工具",
      "生产力",
      "创意设计"
    ],
    "featured": false,
    "freePlan": "提供基础免费体验额度，满足常规轻量需求。",
    "pricingType": "免费 / 订阅制",
    "chineseSupport": "支持",
    "accountRequired": "需要",
    "platforms": [
      "网页端"
    ],
    "bestFor": [
      "专业人士",
      "创意工作者",
      "技术爱好者"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "无论是进行初期的创意探索，还是后期的精细化打磨，该工具都提供了一套完善的解决方案。它在核心算法和交互体验上做了大量优化，有效降低了新手的学习门槛，并帮助专业用户成倍提升效率。",
    "features": [
      "快速生成高质量结果",
      "支持迭代和微调",
      "流畅的跨设备云端工作流"
    ],
    "useCases": [
      "在日常工作中寻找灵感",
      "快速搭建原型或草稿",
      "自动化替代部分重复性劳动"
    ],
    "gettingStarted": [
      "访问官网 https://firefly.adobe.com",
      "使用邮箱或第三方账号快速注册登录",
      "在主界面中输入文本提示词或上传参考文件开始生成"
    ],
    "networkAndRegion": "该服务主要面向全球用户部署，国内用户在直接访问时可能会遇到加载缓慢、资源无法下载或注册受限等问题。建议保持良好的国际网络连通性。该服务的实际可用性可能受到网络环境或官方政策调整影响。",
    "advantages": [
      "上手容易，界面直观现代",
      "特定场景下生成的质量极佳"
    ],
    "limitations": [
      "免费额度有限",
      "部分进阶功能需要付费解锁"
    ],
    "faq": [
      {
        "q": "这个工具可以免费商用吗？",
        "a": "通常需要付费订阅才能获取完整的商用授权许可，免费版本多限个人学习使用，建议使用前查阅官方最新 Terms。"
      },
      {
        "q": "对电脑配置有要求吗？",
        "a": "大部分核心计算都在云端服务器完成，只要您的设备能够流畅打开网页即可，无需昂贵的独立显卡。"
      }
    ],
    "alternatives": []
  },
  {
    "slug": "pika",
    "name": "Pika",
    "company": "Pika Labs",
    "officialUrl": "https://pika.art",
    "category": "video",
    "categories": [
      "video"
    ],
    "shortDescription": "强大的 AI 辅助工具，助力日常开发与创意工作流，极大提升工作效率。",
    "description": "Pika 是一款针对特定领域的 AI 生成和辅助工具，凭借其优异的生成质量和简化的操作流程，在同类产品中脱颖而出。它通过引入深度学习和大语言模型，改变了传统生产方式，使用户能够以前所未有的速度实现创意。",
    "tags": [
      "AI工具",
      "生产力",
      "创意设计"
    ],
    "featured": false,
    "freePlan": "提供基础免费体验额度，满足常规轻量需求。",
    "pricingType": "免费 / 订阅制",
    "chineseSupport": "支持",
    "accountRequired": "需要",
    "platforms": [
      "网页端"
    ],
    "bestFor": [
      "专业人士",
      "创意工作者",
      "技术爱好者"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "无论是进行初期的创意探索，还是后期的精细化打磨，该工具都提供了一套完善的解决方案。它在核心算法和交互体验上做了大量优化，有效降低了新手的学习门槛，并帮助专业用户成倍提升效率。",
    "features": [
      "快速生成高质量结果",
      "支持迭代和微调",
      "流畅的跨设备云端工作流"
    ],
    "useCases": [
      "在日常工作中寻找灵感",
      "快速搭建原型或草稿",
      "自动化替代部分重复性劳动"
    ],
    "gettingStarted": [
      "访问官网 https://pika.art",
      "使用邮箱或第三方账号快速注册登录",
      "在主界面中输入文本提示词或上传参考文件开始生成"
    ],
    "networkAndRegion": "该服务主要面向全球用户部署，国内用户在直接访问时可能会遇到加载缓慢、资源无法下载或注册受限等问题。建议保持良好的国际网络连通性。该服务的实际可用性可能受到网络环境或官方政策调整影响。",
    "advantages": [
      "上手容易，界面直观现代",
      "特定场景下生成的质量极佳"
    ],
    "limitations": [
      "免费额度有限",
      "部分进阶功能需要付费解锁"
    ],
    "faq": [
      {
        "q": "这个工具可以免费商用吗？",
        "a": "通常需要付费订阅才能获取完整的商用授权许可，免费版本多限个人学习使用，建议使用前查阅官方最新 Terms。"
      },
      {
        "q": "对电脑配置有要求吗？",
        "a": "大部分核心计算都在云端服务器完成，只要您的设备能够流畅打开网页即可，无需昂贵的独立显卡。"
      }
    ],
    "alternatives": []
  },
  {
    "slug": "luma-dream-machine",
    "name": "Luma Dream Machine",
    "company": "Luma AI",
    "officialUrl": "https://lumalabs.ai/dream-machine",
    "category": "video",
    "categories": [
      "video"
    ],
    "shortDescription": "强大的 AI 辅助工具，助力日常开发与创意工作流，极大提升工作效率。",
    "description": "Luma Dream Machine 是一款针对特定领域的 AI 生成和辅助工具，凭借其优异的生成质量和简化的操作流程，在同类产品中脱颖而出。它通过引入深度学习和大语言模型，改变了传统生产方式，使用户能够以前所未有的速度实现创意。",
    "tags": [
      "AI工具",
      "生产力",
      "创意设计"
    ],
    "featured": false,
    "freePlan": "提供基础免费体验额度，满足常规轻量需求。",
    "pricingType": "免费 / 订阅制",
    "chineseSupport": "支持",
    "accountRequired": "需要",
    "platforms": [
      "网页端"
    ],
    "bestFor": [
      "专业人士",
      "创意工作者",
      "技术爱好者"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "无论是进行初期的创意探索，还是后期的精细化打磨，该工具都提供了一套完善的解决方案。它在核心算法和交互体验上做了大量优化，有效降低了新手的学习门槛，并帮助专业用户成倍提升效率。",
    "features": [
      "快速生成高质量结果",
      "支持迭代和微调",
      "流畅的跨设备云端工作流"
    ],
    "useCases": [
      "在日常工作中寻找灵感",
      "快速搭建原型或草稿",
      "自动化替代部分重复性劳动"
    ],
    "gettingStarted": [
      "访问官网 https://lumalabs.ai/dream-machine",
      "使用邮箱或第三方账号快速注册登录",
      "在主界面中输入文本提示词或上传参考文件开始生成"
    ],
    "networkAndRegion": "该服务主要面向全球用户部署，国内用户在直接访问时可能会遇到加载缓慢、资源无法下载或注册受限等问题。建议保持良好的国际网络连通性。该服务的实际可用性可能受到网络环境或官方政策调整影响。",
    "advantages": [
      "上手容易，界面直观现代",
      "特定场景下生成的质量极佳"
    ],
    "limitations": [
      "免费额度有限",
      "部分进阶功能需要付费解锁"
    ],
    "faq": [
      {
        "q": "这个工具可以免费商用吗？",
        "a": "通常需要付费订阅才能获取完整的商用授权许可，免费版本多限个人学习使用，建议使用前查阅官方最新 Terms。"
      },
      {
        "q": "对电脑配置有要求吗？",
        "a": "大部分核心计算都在云端服务器完成，只要您的设备能够流畅打开网页即可，无需昂贵的独立显卡。"
      }
    ],
    "alternatives": []
  }
];
