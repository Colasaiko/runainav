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
    slug: 'chatgpt-pdf-guide',
    title: 'ChatGPT怎么分析PDF？长文档总结与提问教程',
    description: '需要让 ChatGPT 阅读 PDF 或长文档？本指南整理上传、提问、摘要、表格提取与引用核对方法，并说明文件过大、识别不完整和上下文丢失时应该怎么处理。',
    type: 'tutorial',
    category: 'AI聊天',
    tags: ["ChatGPT","PDF","文件处理","总结"],
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09'
  },
  {
    slug: 'chatgpt-compare-files',
    title: 'ChatGPT怎么比较两个文件？差异提取实战指南',
    description: '同时拿到两份合同、报告或代码文件，怎么让 ChatGPT 快速找出差异？本文整理文件上传、比较指令、差异表格与人工复核方法，适合文档、表格和文本版本对比。',
    type: 'tutorial',
    category: 'AI办公',
    tags: ["ChatGPT","文件对比","文档处理","差异"],
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09'
  },
  {
    slug: 'claude-project-docs',
    title: 'Claude怎么整理项目资料？长文档归纳工作流',
    description: '项目资料太多不知道从哪里开始？本文整理用 Claude 归纳文档、建立项目背景、提取待办与持续追问的方法，并说明资料更新、引用核对和敏感信息处理时要注意什么。',
    type: 'tutorial',
    category: 'AI办公',
    tags: ["Claude","项目管理","长文档","工作流"],
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09'
  },
  {
    slug: 'gemini-file-drive-guide',
    title: 'Gemini怎么上传文件？Drive与PDF分析指南',
    description: '想让 Gemini 读取本地文件或 Google Drive 资料？本指南整理文件上传、PDF 总结、重点提取与追问方法，并说明权限、格式和读取失败时排查方向。',
    type: 'tutorial',
    category: 'AI办公',
    tags: ["Gemini","上传文件","Google Drive","PDF"],
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09'
  },
  {
    slug: 'ai-excel-data',
    title: 'AI怎么处理Excel数据？公式、分析与表格整理教程',
    description: '不会复杂 Excel 公式也能让 AI 帮忙处理数据。本指南整理公式生成、数据清洗、分类统计与趋势分析方法，并说明哪些计算必须回到原表核对，避免相信错误结果。',
    type: 'tutorial',
    category: 'AI办公',
    tags: ["Excel","数据分析","表格整理","AI"],
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09'
  },
  {
    slug: 'ai-meeting-notes',
    title: 'AI怎么整理会议记录？纪要与行动项生成指南',
    description: '会议结束后还要花时间写纪要？本文整理用 AI 处理转录文本、提取决策、负责人、截止日期和行动项的方法，并给出适合周会、项目会与客户会议的纪要工作流。',
    type: 'tutorial',
    category: 'AI办公',
    tags: ["会议记录","纪要","AI办公","转录"],
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09'
  },
  {
    slug: 'ai-interview-prep',
    title: 'AI怎么准备求职面试？模拟问答与复盘方法',
    description: '准备面试时不知道该练什么？本文教你用 AI 根据职位描述和简历生成模拟问题、优化回答、进行追问与复盘，并说明如何避免让 AI 编造经历或替你夸大个人能力。',
    type: 'tutorial',
    category: 'AI办公',
    tags: ["求职","面试","AI模拟","简历"],
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09'
  },
  {
    slug: 'ai-research-paper',
    title: 'AI怎么帮助阅读论文？摘要、方法与引用核对指南',
    description: '面对几十页论文不知道怎么读？本指南整理用 AI 提取研究问题、方法、结果、限制与关键引用的流程，并说明如何回到原论文核对数据、图表和引用，减少错误理解。',
    type: 'tutorial',
    category: 'AI学习',
    tags: ["阅读论文","文献阅读","学术","AI学习"],
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09'
  },
  {
    slug: 'ai-office-workflow',
    title: 'AI办公工作流怎么搭？从邮件到报告的实战指南',
    description: '想把 AI 真正放进日常办公，而不是只用来聊天？本文用邮件、会议、资料整理、报告和待办串成一个简单工作流，并说明不同任务应该由人确认哪些关键结果。',
    type: 'tutorial',
    category: 'AI办公',
    tags: ["工作流","AI办公","效率","日常任务"],
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09'
  },
  {
    slug: 'ai-build-website-no-code',
    title: '不会代码怎么用AI做网站？从需求到上线教程',
    description: '不会代码也想用 AI 做一个网站？本指南从需求、页面结构、文案、生成代码、本地预览到部署上线逐步说明，并提醒你检查响应式、链接、SEO、版权与构建错误。',
    type: 'tutorial',
    category: 'AI编程',
    tags: ["做网站","AI编程","建站","零基础"],
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09'
  },
  {
    slug: 'ai-outage-or-network',
    title: 'AI工具报错是宕机还是网络问题？判断方法指南',
    description: 'AI 页面突然报错时，问题可能来自官方服务，也可能来自浏览器、账号或网络连接。本文整理状态页、其他设备、不同网站和本地网络的判断顺序，帮助你先定位再处理。',
    type: 'troubleshooting',
    category: '网络环境',
    tags: ["网络问题","宕机","排障","AI工具"],
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09'
  },
  {
    slug: 'ai-response-slow',
    title: 'AI响应慢是模型慢还是网络延迟？区别与排查方法',
    description: 'AI 回答很慢不一定是网络延迟，也可能是模型负载、复杂任务或服务端拥堵。本文比较网页加载、首字响应、持续生成和网络 Ping 的差异，并给出逐步排查方法。',
    type: 'troubleshooting',
    category: '网络环境',
    tags: ["网络延迟","模型响应","排障","速度"],
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09'
  },
  {
    slug: 'ai-packet-loss',
    title: '网络丢包为什么会让AI回复卡住？原因与测试方法',
    description: '网络丢包会让 AI 对话出现转圈、断流、图片失败或文件上传中断。本文解释丢包与延迟的区别，并整理简单测试方法、观察指标和排查顺序，帮助判断问题出在哪里。',
    type: 'troubleshooting',
    category: '网络环境',
    tags: ["丢包","断流","排障","网络稳定"],
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09'
  },
  {
    slug: 'client-connected-site-unreachable',
    title: '客户端已连接但AI网站打不开？常见原因与排查',
    description: '客户端显示已经连接，但 ChatGPT、Claude 等网站仍打不开？本文整理订阅、规则、DNS、浏览器、服务状态和账号权限等常见原因，并给出清晰的排查顺序。',
    type: 'troubleshooting',
    category: '客户端教程',
    tags: ["无法访问","客户端","打不开","排障"],
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09'
  },
  {
    slug: 'ai-evening-slow',
    title: '为什么晚上AI特别卡？晚高峰与网络波动怎么判断',
    description: '为什么白天使用 AI 很顺，晚上却容易转圈或断流？本文从晚高峰拥堵、线路波动、节点负载和服务端状态解释差异，并教你通过不同时段对比判断真正原因。',
    type: 'troubleshooting',
    category: '网络环境',
    tags: ["晚高峰","网络波动","排障","晚上卡"],
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09'
  },
  {
    slug: 'cursor-copilot-timeout',
    title: 'Cursor和Copilot网络超时？编辑器与终端排查指南',
    description: 'Cursor 或 GitHub Copilot 在编辑器里一直超时，但浏览器访问正常？本文整理编辑器、终端、系统网络与项目依赖的排查思路，帮助开发者定位问题。',
    type: 'troubleshooting',
    category: 'AI编程',
    tags: ["网络超时","Cursor","Copilot","终端排障"],
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09'
  },
  {
    slug: 'after-buying-airport',
    title: '买完机场后怎么用？订阅链接与客户端导入指南',
    description: '购买网络服务后拿到订阅链接，却不知道下一步怎么做？本指南解释订阅、客户端、节点和配置文件的关系，并按常见设备说明基本导入流程、更新方法与注意事项。',
    type: 'network',
    category: '客户端教程',
    tags: ["新手教程","订阅链接","导入","机场"],
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09'
  },
  {
    slug: 'clash-verge-import-subscription',
    title: 'Clash Verge订阅怎么导入？Windows入门教程',
    description: '第一次使用 Clash Verge 不知道订阅放哪里？本文整理 Windows 基本流程，包括导入订阅、更新配置、选择节点和规则模式，并说明失败排查与官方来源。',
    type: 'network',
    category: '客户端教程',
    tags: ["Clash Verge","订阅导入","Windows","教程"],
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09'
  },
  {
    slug: 'node-speed-test-guide',
    title: '节点速度怎么测才准？延迟、丢包与下载速度指南',
    description: '节点延迟很低不代表实际速度一定快。本文整理 URL Test、延迟、抖动、丢包、下载速度和晚高峰测试的区别，并给出轻度到重度的测试流程，帮助更全面判断节点质量。',
    type: 'network',
    category: '网络指南',
    tags: ["节点测速","丢包","下载速度","测试"],
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09'
  },
  {
    slug: 'iplc-iepl-transit-direct',
    title: 'IPLC、IEPL、中转和直连有什么区别？线路选择指南',
    description: 'IPLC、IEPL、中转和直连经常出现在机场宣传里，但它们并不是简单的高低等级。本文整理常见线路概念、成本、延迟和稳定性差异，并说明选购时该看哪些实际指标。',
    type: 'network',
    category: '网络指南',
    tags: ["IPLC","IEPL","中转","直连"],
    publishedAt: '2026-09-09',
    updatedAt: '2026-09-09'
  },
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
