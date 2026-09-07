const fs = require('fs');
const path = 'src/data/aiTools.ts';
let c = fs.readFileSync(path, 'utf8');

const perplexityObj = `  {
    slug: 'perplexity',
    seoTitle: 'Perplexity国内怎么用？搜索教程',
    seoDescription: '国内使用Perplexity时，如果遇到官网打不开、登录失败或搜索异常，可从账号、浏览器与网络环境排查，并了解搜索、引用、Research与文件分析等功能。',
    seoKeywords: 'Perplexity国内怎么用,Perplexity教程,AI搜索,中文使用',
    name: 'Perplexity',
    company: 'Perplexity AI',
    officialUrl: 'https://www.perplexity.ai',
    category: 'search',
    categories: ['search', 'research'],
    shortDescription: 'Perplexity 是以 AI 搜索和来源整理为核心的工具，可以用于查询最新资料、打开引用、研究主题和分析文件。本页重点整理国内用户开始使用 Perplexity 时需要了解的官方入口、搜索方式、账号与网络环境问题。',
    description: 'Perplexity 是一款主打 AI 搜索的工具，不同于传统聊天机器人，它的回答通常附带可点击的来源引用（Citations），非常适合查资料、确认最新信息和进行深度 Research。',
    tags: ['AI搜索', 'Research', '来源引用', '资料整理'],
    featured: true,
    freePlan: '提供基础 Search 功能，无需登录亦可体验部分基础查询，但推荐登录使用',
    pricingType: 'Free / Perplexity Pro（$20/月，年付有折扣）',
    chineseSupport: '支持中文搜索与中文回答',
    accountRequired: '基础搜索可免登录体验，但完整功能、文件上传及 Pro Search 需登录',
    platforms: ['网页端', 'iOS', 'Android', 'macOS', 'Windows'],
    bestFor: ['研究人员', '学生', '内容创作者', '需要快速核实资料的用户'],
    lastUpdated: '2026-09-07',
    overview: '国内用户使用 Perplexity 时，可以先从官方网站开始搜索，并根据当前账号使用 Search、Pro Search、Research 等可用模式。Perplexity 与普通聊天工具最大的不同之一，是回答通常会同时提供来源，因此适合查资料和追踪原始信息。如果官网打不开、登录失败或搜索一直加载，需要分别检查官方状态、浏览器、账号和当前网络环境。',
    features: [
      '回答自动附带来源引用（Citations），方便查证事实',
      'Search、Pro Search、Research 等多种搜索模式',
      '支持上传并分析文档（PDF、文本等）',
      'Spaces / Projects 支持团队协作和特定主题整理',
      '最新信息查询能力强，不易产生陈旧幻觉'
    ],
    useCases: [
      '查询最近发生的科技新闻或事件',
      '深度 Research 一个陌生主题',
      '核对网络上的某个说法是否准确',
      '上传 PDF 论文并进行关键信息提取',
      '比较多款产品的优缺点并获取官方来源'
    ],
    gettingStarted: [
      '打开 www.perplexity.ai，建议注册并登录账号以保存记录。',
      '在搜索框输入中文问题，可以要求提供具体的时间范围或来源偏好。',
      '查看回答，并务必点击引用（Citations）打开原文核对重要信息。'
    ],
    networkAndRegion: 'Perplexity 官方本身可用性通常较好，但如果遇到官网无法打开或搜索长期加载，请先检查本地网络和 DNS。部分引用的外部网站可能在当前网络下无法访问，这不属于 Perplexity 故障。',
    advantages: [
      '搜索结果附带来源引用',
      '适合最新资料查询',
      '支持连续追问',
      '支持 Research 类深入工作流',
      '可处理文件，适合资料整理和研究起点'
    ],
    limitations: [
      'AI 对来源的概括仍可能有误',
      '引用不一定直接支持答案，需人工核对',
      '高级功能受方案和额度影响',
      '外部来源本身可能错误或过时',
      '功能名称和模型会持续更新'
    ],
    faq: [
      {
        q: 'Perplexity 国内可以用吗？',
        a: 'Perplexity 本身没有严格的地区封锁，但能否正常使用取决于你是否能稳定访问其官网，以及你的网络环境是否支持连接其云端服务。'
      },
      {
        q: 'Perplexity 国内怎么用？',
        a: '直接访问 www.perplexity.ai，无需复杂设置即可开始基础搜索。遇到复杂问题时，可以选择开启 Pro Search 或使用 Research 等高级模式（取决于账号权限）。'
      },
      {
        q: 'Perplexity 官网打不开怎么办？',
        a: '先确认 Perplexity 官方服务状态，然后检查基础网络和 DNS，尝试无痕窗口。如果其他海外网站正常但 Perplexity 无法打开，可能是当前网络节点或规则限制。'
      },
      {
        q: 'Perplexity 登录失败怎么办？',
        a: '检查当前登录方式（如 Google/Apple 授权）是否被浏览器拦截，清除 Cookie 后重试，并确认网络连接稳定。通常并非账号被封禁。'
      },
      {
        q: 'Perplexity 搜索一直加载怎么办？',
        a: '可能是当前搜索模式（如 Pro Search）请求时间较长，或者是网络连接不稳定。尝试切换回普通 Search，或者换一个简单问题测试。'
      },
      {
        q: 'Perplexity 支持中文吗？',
        a: '完全支持。你可以使用中文提问，它也能用中文回答并提供中文或外文的参考资料来源。'
      },
      {
        q: 'Perplexity Search 和 Pro Search 有什么区别？',
        a: '普通 Search 适合快速查询简单事实；Pro Search 会进行多步骤推理、搜索更多来源，适合复杂问题。具体名称和能力随产品更新可能变化。'
      },
      {
        q: 'Perplexity Research 是什么？',
        a: 'Research 是比普通搜索更深入的模式（如果当前账号提供），它会系统地整理大量资料，生成更全面、更有深度的报告，适合复杂主题的研究。'
      },
      {
        q: 'Perplexity 的引用可靠吗？',
        a: '引用（Citations）只是表示 AI 参考了这些网页，不代表网页本身绝对权威，也不代表 AI 的总结完全无误。重要信息务必点击原文亲自核对。'
      },
      {
        q: 'Perplexity 可以上传 PDF 吗？',
        a: '可以。支持上传 PDF 等常见文档格式进行分析，但具体文件大小和数量限制可能随账号方案和产品更新调整，以当前界面为准。'
      },
      {
        q: 'Perplexity 免费版够用吗？',
        a: '免费方案适合基础搜索、简单查询和体验引用工作流。如果你需要频繁使用 Pro Search、分析大量文件或使用高级模型，建议升级 Pro 方案。'
      },
      {
        q: 'Perplexity 和普通搜索引擎有什么区别？',
        a: '普通搜索引擎返回一堆网页链接需要你逐个点开；Perplexity 会直接阅读这些网页并给你一个总结好、带引用的直接答案。'
      },
      {
        q: 'Perplexity 和 ChatGPT 有什么区别？',
        a: 'ChatGPT 更偏向于创意写作、代码编写和自由对话；Perplexity 更专注于网络搜索和事实核查，答案通常附带可靠的外部引用。'
      }
    ],
    alternatives: ['chatgpt', 'claude'],
    domesticLayout: true,
    seoH1: 'Perplexity 国内怎么用？搜索、引用与常见问题',
    domesticIntro: '国内用户使用 Perplexity 时，可以先从官方网站开始搜索，并根据当前账号使用 Search、Pro Search、Research 等可用模式。Perplexity 与普通聊天工具最大的不同之一，是回答通常会同时提供来源，因此适合查资料和追踪原始信息。如果官网打不开、登录失败或搜索一直加载，需要分别检查官方状态、浏览器、账号和当前网络环境。',
    domesticSymptoms: [
      {
        title: '官网完全打不开',
        checks: ['Perplexity 官方状态', '基础网络与 DNS', '浏览器缓存与扩展', '当前网络连接']
      },
      {
        title: '官网可以打开，但登录失败',
        checks: ['当前账号状态', '登录方式与第三方授权', 'Cookie 异常', '浏览器拦截弹窗', '官方服务状态']
      },
      {
        title: '可以登录，但搜索一直加载',
        checks: ['官方服务状态', '当前搜索模式', '浏览器缓存', '扩展程序干扰', '当前网络稳定性']
      },
      {
        title: 'Pro Search / Research 不可用',
        checks: ['当前账号方案', '当日使用额度是否耗尽', '功能在当前地区或平台的开放情况', '产品功能更新状态']
      },
      {
        title: '有回答，但 Sources 打不开',
        checks: ['并非 Perplexity 故障', '引用来源网站本身无法加载', '当前网络环境限制访问该来源', '该外部链接已失效']
      },
      {
        title: '搜索结果一直显示旧资料',
        checks: ['明确时间范围要求', '要求标明日发布日期', '重新确认来源发布时间', '尝试使用 Research 等更深入模式']
      }
    ],
    domesticFunctions: [
      {
        name: '基础 Search',
        desc: '快速查询日常问题和简单事实，响应速度快。',
        limitations: '免费与付费方案均可使用'
      },
      {
        name: 'Pro Search / Research',
        desc: '进行多步骤推理、搜索更多来源或深度研究复杂主题。',
        limitations: '实际使用额度以当前账号和官方方案页面为准'
      },
      {
        name: 'Sources 与 Citations',
        desc: '回答附带可点击的来源引用，方便追踪和核对原始信息。',
        limitations: '引用不一定绝对支持答案，需人工核对'
      },
      {
        name: '文件分析 (File Upload)',
        desc: '支持上传 PDF、文本等文件进行内容提取与分析。',
        limitations: '文件格式、数量与大小限制以当前界面为准'
      },
      {
        name: 'Spaces / Projects',
        desc: '将相关的搜索和文件整理在同一个空间中，支持特定主题的聚焦研究。',
        limitations: '功能名称随产品迭代可能有调整'
      }
    ],
    domesticPrompts: [
      {
        title: '查最新资料',
        desc: '请帮我查这个主题最近 30 天的最新进展。 要求： - 标明发布日期 - 优先官方和第一手来源 - 区分已经发生和计划发生 - 不确定的地方明确说明 主题： 【填写主题】',
        text: '请帮我查这个主题最近 30 天的最新进展。 要求： - 标明发布日期 - 优先官方和第一手来源 - 区分已经发生和计划发生 - 不确定的地方明确说明 主题： 【填写主题】'
      },
      {
        title: '产品功能核实',
        desc: '请帮我确认这个产品目前是否支持下面的功能。 要求： - 优先使用产品官方文档 - 标明资料发布日期 - 如果只有第三方来源，请明确告诉我 - 不要用旧版本资料代替当前功能 产品： 【填写产品】 功能： 【填写功能】',
        text: '请帮我确认这个产品目前是否支持下面的功能。 要求： - 优先使用产品官方文档 - 标明资料发布日期 - 如果只有第三方来源，请明确告诉我 - 不要用旧版本资料代替当前功能 产品： 【填写产品】 功能： 【填写功能】'
      },
      {
        title: '比较两个工具',
        desc: '请比较工具 A 和工具 B。 不要直接告诉我谁最好。 请按照： - 核心功能 - 免费功能 - 使用限制 - 平台支持 - 适合人群 分别整理。 优先使用双方官方资料。',
        text: '请比较工具 A 和工具 B。 不要直接告诉我谁最好。 请按照： - 核心功能 - 免费功能 - 使用限制 - 平台支持 - 适合人群 分别整理。 优先使用双方官方资料。'
      },
      {
        title: '核对一个说法',
        desc: '请帮我核对下面这个说法是否有可靠来源支持。 要求： 1. 找到最原始来源 2. 标明发布时间 3. 告诉我原文是否真的支持这个结论 4. 如果存在不同说法，请一起列出来 说法： 【填写内容】',
        text: '请帮我核对下面这个说法是否有可靠来源支持。 要求： 1. 找到最原始来源 2. 标明发布时间 3. 告诉我原文是否真的支持这个结论 4. 如果存在不同说法，请一起列出来 说法： 【填写内容】'
      },
      {
        title: '学习主题',
        desc: '我刚开始学习这个主题。 请帮我： 1. 用简单中文解释 2. 列出 5 个最重要概念 3. 给我可靠的入门资料来源 4. 告诉我应该按什么顺序学习 主题： 【填写主题】',
        text: '我刚开始学习这个主题。 请帮我： 1. 用简单中文解释 2. 列出 5 个最重要概念 3. 给我可靠的入门资料来源 4. 告诉我应该按什么顺序学习 主题： 【填写主题】'
      }
    ]
  },
`;

const matchCursor = c.match(/\{\s*slug:\s*['"]cursor['"]/);
if (!matchCursor) {
  console.log('Cursor not found!');
  process.exit(1);
}

c = c.substring(0, matchCursor.index) + perplexityObj + c.substring(matchCursor.index);
fs.writeFileSync(path, c);
console.log('Successfully inserted Perplexity data before Cursor!');
