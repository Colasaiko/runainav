const fs = require('fs');

const grokData = `  {
    slug: 'grok',
    seoTitle: 'Grok国内怎么用？使用方法与常见问题',
    seoDescription: '国内使用Grok时，如果遇到官网打不开、登录异常或部分功能不可用，可从账号、浏览器、服务范围与网络环境排查，并了解聊天、搜索、图片与常见使用方法。',
    seoKeywords: 'Grok国内怎么用,Grok教程,xAI,X平台Grok,AI聊天',
    name: 'Grok',
    company: 'xAI',
    officialUrl: 'https://grok.com',
    category: 'chat',
    categories: ['chat', 'search'],
    shortDescription: 'Grok 是 xAI 研发的 AI 聊天与搜索助手，支持直接使用网页版或在 X 平台内访问。本页重点整理国内用户使用 Grok 时的登录、搜索资料、图片生成排查及常用的中文创作提示词。',
    description: 'Grok 是由 Elon Musk 的 xAI 团队开发的 AI 助手，以其独特的幽默感、实时获取 X (原 Twitter) 平台最新资讯的能力以及无限制的言论风格而闻名。目前提供网页版 (grok.com) 及集成在 X 平台内的使用入口，具备文本生成、实时搜索和图像生成等功能。',
    tags: ['AI聊天', '实时搜索', '图像生成', 'xAI'],
    featured: true,
    freePlan: '部分地区和平台可能提供受限的免费访问，完整高级功能及无限制使用通常需要 Premium 订阅。',
    pricingType: 'Free (Limited) / Premium',
    chineseSupport: '支持中文问答、中文内容总结与搜索。',
    accountRequired: '需要注册 X 账号或通过 grok.com 进行授权登录。',
    platforms: ['网页端 (grok.com)', 'X App (iOS/Android)', 'X 网页端'],
    bestFor: ['寻找最新资讯的用户', '研究人员', '创作者', '喜爱幽默风格对话的用户'],
    lastUpdated: '2026-09-08',
    overview: '国内用户使用 Grok 时，可以通过 X 平台内的入口访问，也可以直接前往独立的 grok.com 网页版。Grok 的主要优势在于实时结合 X 平台的信息流进行最新搜索和总结，同时也支持 AI 生成图片。如果遇到官网打不开、登录失败或某些功能（如图片生成）不可用，应分别检查当前账号订阅状态、官方功能 Rollout 进度及网络连接。',
    features: [
      'Fun Mode / Regular Mode：提供独特的幽默对话风格或常规助手风格',
      'Real-time Search (DeepSearch)：结合 X 平台的实时数据进行全网资料检索与总结',
      'Image Generation：直接在聊天界面生成图像',
      '独立网页版与 X 平台双入口：可以根据习惯选择 grok.com 或 X 内置入口'
    ],
    useCases: [
      '快速了解今天发生的突发新闻或热门话题',
      '总结冗长的文章、报告或多篇新闻报道',
      '比较多个不同的科技产品或服务差异',
      '使用幽默风格生成创意文案或社交媒体回复'
    ],
    gettingStarted: [
      '访问 grok.com 或打开你的 X (原 Twitter) 账号。',
      '如果你使用的是 X，请在侧边栏找到 Grok 入口；如果在独立网页，请直接登录。',
      '在聊天框中输入你的中文问题或要求，即可开始体验（可随时切换对话风格）。'
    ],
    networkAndRegion: '由于 xAI 及 X 平台的服务范围限制，国内直接访问通常无法打开。请确保你的网络环境可以正常访问海外服务，并建议在遇到加载失败时优先排查当前代理节点的连通性。',
    advantages: [
      '实时信息获取能力极强，直接连接 X 的数据源',
      '提供幽默、无滤镜的对话风格',
      '支持文本、搜索和图像生成的综合工作流',
      '官方已提供独立简洁的网页版 (grok.com)'
    ],
    limitations: [
      '部分高级功能（如无限制图片生成）需要 X Premium 订阅',
      '由于实时信息源自社交媒体，可能会引用到未经核实的信息',
      '不同账号或平台版本看到的功能可能不一致（受功能灰度测试影响）'
    ],
    faq: [
      {
        q: 'Grok 国内可以用吗？',
        a: '国内网络无法直接访问 Grok 或 X，只要你的网络环境支持连接其海外服务器，且账号状态正常即可使用。'
      },
      {
        q: 'Grok 国内怎么用？',
        a: '你可以通过 X (Twitter) 平台的侧边栏进入 Grok，或者直接访问独立的 grok.com。注册并登录账号后，在输入框输入中文即可开始对话。'
      },
      {
        q: 'Grok 官网是什么？',
        a: 'Grok 目前拥有独立的官网 grok.com。同时，X 平台的付费用户也可以在 X 内部直接使用。'
      },
      {
        q: 'Grok 一定要使用 X 吗？',
        a: '目前你依然需要一个 X 账号来进行授权登录，但使用体验上你可以选择独立的 grok.com 网页版，享受纯粹的 AI 对话环境。'
      },
      {
        q: 'Grok 支持中文吗？',
        a: '支持。Grok 能够理解中文提问，并可以用流畅的中文回答、总结资讯以及生成图片。'
      },
      {
        q: 'Grok 可以搜索最新资料吗？',
        a: '可以，这正是 Grok 的强项。它会实时检索 X 平台上的最新推文及全网内容，为你整理和解答最新发生的事件。'
      },
      {
        q: 'Grok 可以生成图片吗？',
        a: '可以，Grok 支持图像生成功能，只需在对话框中直接输入你想要生成的图片描述即可。'
      },
      {
        q: 'Grok 免费版够用吗？',
        a: '根据最新政策，部分地区提供受限的免费体验额度，适合轻度查询。若需进行大量搜索、高频对话或图片生成，建议订阅 Premium。'
      },
      {
        q: 'Grok 和 ChatGPT 有什么区别？',
        a: 'Grok 的实时数据源深度绑定 X 平台，获取突发新闻极快，且其 Fun 模式语言风格更加放飞；ChatGPT 在深度复杂推理、代码开发及结构化长文本方面表现更稳定。'
      }
    ],
    alternatives: ['chatgpt', 'claude', 'perplexity'],
    domesticLayout: true,
    seoH1: 'Grok 国内怎么用？聊天、搜索与常见问题',
    domesticIntro: '国内用户使用 Grok 时，可以通过 X 平台内的入口访问，也可以直接前往独立的 grok.com 网页版。Grok 的主要优势在于实时结合 X 平台的信息流进行最新搜索和总结，同时也支持 AI 生成图片。如果遇到官网打不开、登录失败或某些功能（如图片生成）不可用，应分别检查当前账号订阅状态、官方功能 Rollout 进度及网络连接。',
    domesticSymptoms: [
      {
        title: '官网完全打不开',
        checks: ['Grok / X 官方服务状态', '浏览器缓存与 DNS', '基础网络连接是否正常', '当前网络代理连通性']
      },
      {
        title: 'X 能登录但 Grok 不出现',
        checks: ['当前账号是否满足使用资格（如是否需要 Premium）', '查看官方功能灰度开放说明', '尝试访问独立域名 grok.com 确认']
      },
      {
        title: 'grok.com 登录失败',
        checks: ['授权回调失败，请检查浏览器拦截设置', '网络节点是否频繁变动', '清除 Cookie 后重试']
      },
      {
        title: '搜索功能不可用',
        checks: ['确认输入指令是否正确触发搜索', '当前模型状态', '账号额度限制']
      },
      {
        title: '图片功能没有',
        checks: ['图像生成可能属于 Premium 专属或灰度测试', '尝试换用简单的英文描述重试']
      },
      {
        title: '长时间加载无响应',
        checks: ['网络连接不稳定', '刷新页面', '如果仅 Grok 卡住而其他网站正常，可能是官方服务器拥挤']
      }
    ],
    domesticFunctions: [
      {
        name: '聊天问答 (Chat)',
        desc: '支持中英文对话、代码解释、文案撰写。具有独特的 Fun 模式，语气更加自由。',
        limitations: 'Fun 模式下可能会出现调侃或不够严肃的回答，正式场景请切换模式。'
      },
      {
        name: '实时搜索 (DeepSearch / Search)',
        desc: '结合 X 平台的实时数据流，快速获取刚刚发生的新闻和讨论。',
        limitations: '信息源自社交网络，部分信息未经事实核查，需自行判断。'
      },
      {
        name: '图片生成 (Image Generation)',
        desc: '直接在对话中描述画面，Grok 会为你生成图像。',
        limitations: '具体权限和生成数量可能受限于是否为 Premium 订阅账号。'
      },
      {
        name: '独立网页版 (grok.com)',
        desc: '提供纯粹的 AI 助手界面，避免被 X 的信息流干扰。',
        limitations: '仍需 X 账号体系进行授权登录。'
      }
    ],
    domesticPrompts: [
      {
        title: '总结最新资料',
        desc: '让 Grok 发挥其实时检索的优势。',
        text: '请帮我搜索并总结最近 24 小时内关于人工智能领域的最重要新闻，重点列出各家大厂的最新发布内容。'
      },
      {
        title: '搜索近期事件',
        desc: '了解网络热门话题的来龙去脉。',
        text: '这两天大家都在讨论“XXX事件”，请帮我梳理一下这起事件的起因、经过以及目前各方的主要观点。'
      },
      {
        title: '比较两项产品',
        desc: '客观对比参数与用户反馈。',
        text: '我正在考虑购买 iPhone 16 Pro 还是 Pixel 9 Pro。请结合最新的用户评价和媒体测评，帮我从拍照、续航、AI 功能三个方面详细对比。'
      },
      {
        title: '整理文章大纲',
        desc: '处理长文本内容。',
        text: '我需要写一篇关于“远程办公优缺点”的深度文章。请帮我列出一个结构清晰的大纲，包含引言、3个优点、3个挑战以及总结，并提供一些新颖的论点。'
      }
    ]
  },
`;

const path = 'src/data/aiTools.ts';
let c = fs.readFileSync(path, 'utf8');

// Insert after perplexity
const perplexityRegex = /\{\s*['"]?slug['"]?:\s*['"]perplexity['"][\s\S]*?(?=\{\s*['"]?slug['"]?:\s*['"]cursor['"])/;
if (c.match(perplexityRegex)) {
  c = c.replace(perplexityRegex, match => match + grokData);
  fs.writeFileSync(path, c);
  console.log('Grok added to aiTools.ts');
} else {
  console.log('Could not find perplexity block');
}
