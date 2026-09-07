const fs = require('fs');
const path = 'src/data/aiTools.ts';

let c = fs.readFileSync(path, 'utf8');

const newClaude = `  {
    slug: 'claude',
    seoTitle: 'Claude国内怎么用？使用教程与常见问题',
    seoDescription: '国内使用Claude时，如果遇到官网打不开、登录失败、页面加载异常或部分功能不可用，可从服务地区、账号状态、浏览器与网络环境逐项排查，并了解常见使用方法。',
    seoKeywords: 'Claude国内怎么用,Claude教程,Artifacts,AI工具',
    name: 'Claude',
    company: 'Anthropic',
    officialUrl: 'https://claude.ai',
    category: 'chat',
    categories: ['chat', 'writing', 'coding'],
    shortDescription: 'Anthropic 推出的 AI 助手，可用于写作、长文整理、编程、文件分析与交互内容制作。本页重点整理国内用户开始使用 Claude 时需要了解的官方入口、服务地区、账号与网络环境问题。',
    description: 'Claude 是由 Anthropic 开发的 AI 助手。它能够处理文本对话、长文档分析以及代码编写。其内置的 Artifacts 功能还可以实时预览生成的代码、文档或网页元素。',
    tags: ['AI对话', '长文分析', 'AI编程', 'Artifacts'],
    featured: true,
    freePlan: '提供基础模型对话和文件处理，额度视官方策略变动',
    pricingType: '免费 / 订阅制（Pro版）',
    chineseSupport: '完全支持',
    accountRequired: '必须（需确认当前所处网络与服务支持地区）',
    platforms: ['网页端', 'iOS', 'Android', 'macOS', 'Windows'],
    bestFor: ['文字工作者', '程序员', '科研人员', '学生'],
    lastUpdated: '2026-09-07',
    overview: 'Claude 适合处理较长文档和多段资料，但实际上下文与文件限制会根据模型、方案和产品设置变化。国内用户开始使用时，建议优先确认 Anthropic 官方的服务支持地区限制。',
    features: [
      '支持长文本与多份文件合并分析',
      'Artifacts 功能支持实时生成并预览交互界面',
      'Projects 允许自定义上下文知识库（视方案支持）',
      '优秀的编程辅助与代码重构能力'
    ],
    useCases: [
      '根据用户提供的语气和结构要求辅助修改原创内容',
      '提炼长篇论文或财报的关键数据',
      '快速生成前端代码并实时预览',
      '协助整理复杂的逻辑与数据报表'
    ],
    gettingStarted: [
      '访问 claude.ai，确认当前网络环境属于 Anthropic 支持的服务地区。',
      '按照官方流程完成账号注册。',
      '在对话框输入需求，如果涉及复杂代码或排版，可以触发 Artifacts 效果。'
    ],
    networkAndRegion: '实际可用性可能受到服务支持地区、账号状态、产品政策及网络环境影响。如果访问速度较慢、无法加载或登录异常，请先检查当前所在地是否在 Anthropic 服务范围内，以及网络连接情况。',
    advantages: [
      '长文档与文件整理工作流较完整',
      'Artifacts 适合交互内容与代码预览',
      '中文写作与内容修改可作为辅助工具',
      '支持多种日常与开发任务'
    ],
    limitations: [
      '功能和额度会根据免费或付费方案变化',
      '服务支持地区有限制',
      'AI 回答仍可能存在事实错误',
      '生成内容需要人工检查'
    ],
    faq: [
      {
        q: 'Claude 国内可以用吗？',
        a: 'Anthropic 对 Claude 的服务地区有明确限制。国内用户在使用前，必须确认所处网络环境能否正常连接海外服务，并符合官方当前支持的国家/地区列表。'
      },
      {
        q: 'Claude 国内怎么用？',
        a: '首先需要确认你处于受支持的网络环境和地区。建议先访问官网查看服务可用性，并在遇到网络受限时，参考本页的常见问题排查流程或相关网络指南。'
      },
      {
        q: 'Claude 官网打不开怎么办？',
        a: '如果官网无法打开，请优先排查基础网络连接、DNS 设置。如果已经使用网络优化工具，请确认该线路是否处于 Claude 支持的地区，并查看 Anthropic 官方是否有宕机通告。'
      },
      {
        q: 'Claude 登录失败怎么办？',
        a: '如果页面能正常加载但无法登录，可能是浏览器缓存、Cookie 异常或是网络环境未被认可。建议尝试开启无痕模式，并检查服务地区。'
      },
      {
        q: 'Claude 登录失败就是被封号吗？',
        a: '不一定。登录异常还可能来自官方服务状态、浏览器、账号登录方式、服务支持地区或网络连接等。如果账号本身出现明确提示，应按照 Anthropic 官方页面处理。'
      },
      {
        q: 'Claude 国内网络环境要注意什么？',
        a: '使用海外网络方案时，请确保连接稳定且线路属于 Anthropic 允许提供服务的地区。如果遇到频繁的连接重置或 403 错误，通常与当前网络出口环境相关。'
      },
      {
        q: 'Claude 免费版够用吗？',
        a: '免费版支持基础体验、写作、问答和文件处理等实际功能。但使用额度和高级功能（如 Projects）通常保留给 Pro 及以上付费方案。具体视当天官方政策而定。'
      },
      {
        q: 'Claude 支持中文吗？',
        a: '支持。Claude 可以很好地理解中文指令，并生成流畅的中文文本，也能处理上传的中文 PDF 或文档。'
      },
      {
        q: 'Claude 可以上传 PDF 吗？',
        a: '可以。Claude 能够在对话中读取并分析 PDF、Word、TXT、CSV 等多种格式的文件。'
      },
      {
        q: 'Claude Artifacts 是什么？',
        a: '这是 Claude 的一项特色功能，可在对话框旁侧开辟独立窗口，实时生成和预览代码、交互式图表、网页元素或复杂文档。具体入口和支持情况以当前界面版本为准。'
      },
      {
        q: 'Claude 和 ChatGPT 有什么区别？',
        a: '两者都是顶尖的 AI 助手。Claude 在长文本处理、Artifacts 交互预览方面有特色；ChatGPT 则在语音交互、网络搜索以及生态丰富度上较具优势。详情可查看本站的三巨头对比文章。'
      }
    ],
    alternatives: ['chatgpt', 'gemini'],
    domesticLayout: true,
    seoH1: 'Claude 国内怎么用？使用方法与常见问题',
    domesticIntro: '国内用户使用 Claude 时，首先需要确认 Anthropic 当前支持的服务地区、账号状态以及实际网络环境。如果官网打不开、登录失败或页面长时间加载，不一定代表 Claude 本身故障，也可能与浏览器、账号、服务地区或当前网络连接有关。',
    domesticSymptoms: [
      {
        title: '官网完全打不开',
        checks: ['Anthropic 官方服务状态', '基础网络与 DNS', '服务支持地区']
      },
      {
        title: '页面能开但一直加载',
        checks: ['官方状态', '浏览器缓存', '扩展程序', '网络稳定性']
      },
      {
        title: '可以打开，但登录失败',
        checks: ['账号状态', 'Cookie', '登录方式', '服务地区']
      },
      {
        title: '登录成功，但功能和别人不一样',
        checks: ['免费 / 付费方案', '产品更新', '功能开放范围', '账号当前可用功能']
      }
    ],
    domesticFunctions: [
      {
        name: '文字聊天与内容生成',
        desc: '可用于长内容整理、写作辅助、邮件编写和日常问答。',
        limitations: '受方案额度限制'
      },
      {
        name: '文件上传与分析',
        desc: '上传 PDF 或其他文档，提取核心观点或对比数据。',
        limitations: '文件大小和数量受官方方案限制'
      },
      {
        name: 'Artifacts 实时预览',
        desc: '生成或预览代码、文档、交互内容和图表。',
        limitations: '如果当前账号支持，可在相关对话中使用，具体界面以当前版本为准'
      },
      {
        name: 'Projects 知识库',
        desc: '为特定项目上传背景文件，设定自定义指令。',
        limitations: '通常属于付费方案高级功能'
      },
      {
        name: '代码辅助与重构',
        desc: '编写、解释代码，查找 Bug 和重构现有逻辑。',
        limitations: '支持多语言，结合 Artifacts 效果更好'
      }
    ],
    domesticPrompts: [
      {
        title: '整理长文',
        desc: '请阅读下面这份内容。 先不要马上总结全文。 请先告诉我： 1. 文章主要讨论什么 2. 有哪些核心观点 3. 哪些内容存在重复 4. 哪些地方需要我进一步确认 然后再给我一份简洁摘要。 内容： 【粘贴文章】',
        text: '请阅读下面这份内容。 先不要马上总结全文。 请先告诉我： 1. 文章主要讨论什么 2. 有哪些核心观点 3. 哪些内容存在重复 4. 哪些地方需要我进一步确认 然后再给我一份简洁摘要。 内容： 【粘贴文章】'
      },
      {
        title: '修改文章',
        desc: '请帮我修改下面这段文字。 要求： - 保留原意 - 语言自然 - 删除重复表达 - 不要写得太像广告 - 不要添加原文没有的事实 原文： 【粘贴内容】',
        text: '请帮我修改下面这段文字。 要求： - 保留原意 - 语言自然 - 删除重复表达 - 不要写得太像广告 - 不要添加原文没有的事实 原文： 【粘贴内容】'
      },
      {
        title: '检查代码',
        desc: '请检查下面这段代码。 先不要重写。 请告诉我： 1. 代码现在在做什么 2. 可能存在的问题 3. 哪些地方最值得先修改 4. 有没有更小的修复方案 代码： 【粘贴代码】',
        text: '请检查下面这段代码。 先不要重写。 请告诉我： 1. 代码现在在做什么 2. 可能存在的问题 3. 哪些地方最值得先修改 4. 有没有更小的修复方案 代码： 【粘贴代码】'
      },
      {
        title: '比较两份资料',
        desc: '请比较下面两份资料。 按以下维度整理： - 核心结论 - 相同点 - 不同点 - 数据或日期冲突 - 哪些结论缺少明确依据 不要自行判断哪一份一定正确。 资料 A： 【内容】 资料 B： 【内容】',
        text: '请比较下面两份资料。 按以下维度整理： - 核心结论 - 相同点 - 不同点 - 数据或日期冲突 - 哪些结论缺少明确依据 不要自行判断哪一份一定正确。 资料 A： 【内容】 资料 B： 【内容】'
      },
      {
        title: '制作 Artifact',
        desc: '请根据下面的需求先给我一个实现计划。 我要制作： 一个简单的项目进度展示页面。 需要： - 三个项目状态 - 当前进度 - 下一步行动 - 简洁布局 - 手机端可以正常查看 先告诉我页面结构，再开始生成。',
        text: '请根据下面的需求先给我一个实现计划。 我要制作： 一个简单的项目进度展示页面。 需要： - 三个项目状态 - 当前进度 - 下一步行动 - 简洁布局 - 手机端可以正常查看 先告诉我页面结构，再开始生成。'
      }
    ]
  },`;

const claudeStart = c.indexOf('{\n    "slug": "claude"');
let actualClaudeStart = claudeStart;
if (claudeStart === -1) {
  actualClaudeStart = c.indexOf('{\n    slug: "claude"');
  if (actualClaudeStart === -1) {
    actualClaudeStart = c.indexOf('{    \\n"slug": "claude"');
  }
}

// Fallback regex approach if indexOf fails
let matchStart = c.match(/\{\s*[\"']?slug[\"']?:\s*[\"']claude[\"']/);
let matchNext = c.match(/\{\s*[\"']?slug[\"']?:\s*[\"']gemini[\"']/); // Claude is before Gemini

if (matchStart && matchNext) {
  c = c.substring(0, matchStart.index) + newClaude + '\n' + c.substring(matchNext.index);
  fs.writeFileSync(path, c);
  console.log('Successfully updated Claude data!');
} else {
  console.log('Failed to find exact Claude block boundaries.');
  console.log('matchStart:', matchStart?.index);
  console.log('matchNext:', matchNext?.index);
}
