export type FAQItem = {
  q: string;
  a: string;
};

export type PromptItem = {
  title: string;
  desc: string;
  text: string;
};

export type SymptomItem = {
  title: string;
  checks: string[];
};

export type FunctionCard = {
  name: string;
  desc: string;
  limitations: string;
};

export type AITool = {
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
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
  domesticLayout?: boolean;
  seoH1?: string;
  domesticIntro?: string;
  domesticSymptoms?: SymptomItem[];
  domesticFunctions?: FunctionCard[];
  domesticPrompts?: PromptItem[];
};

export const aiTools: AITool[] = [
    {
    slug: 'chatgpt',
    seoTitle: 'ChatGPT国内怎么用？使用教程与常见问题',
    seoDescription: '国内使用ChatGPT时，如果遇到官网打不开、登录失败、页面加载缓慢或部分功能不可用，可从服务地区、账号状态、浏览器与网络环境逐项排查，并了解常见使用方法。',
    seoKeywords: 'ChatGPT,国内怎么用,网络环境,使用教程',
    name: 'ChatGPT',
    company: 'OpenAI',
    officialUrl: 'https://chatgpt.com',
    category: 'chat',
    categories: ['chat', 'productivity', 'coding'],
    shortDescription: 'OpenAI 推出的 AI 助手，可用于聊天、写作、编程、资料分析等任务。本页重点整理国内用户开始使用 ChatGPT 时需要了解的入口、服务地区、账号与网络环境问题。',
    description: 'ChatGPT 是由 OpenAI 开发的人工智能对话模型。它能进行流畅的自然语言交流，具备逻辑推理、代码编写和多语言翻译等能力。',
    tags: ['AI聊天', 'AI写作', 'AI编程', '数据分析'],
    featured: true,
    freePlan: '提供基础功能，按官方当前策略自动分配可用模型',
    pricingType: '免费 / 订阅制（Plus版）',
    chineseSupport: '支持',
    accountRequired: '推荐登录（免费基础对话可能免登录，视官方政策而定）',
    platforms: ['网页端', 'iOS', 'Android', 'macOS', 'Windows'],
    bestFor: ['学生', '职场人', '开发者', '创作者'],
    lastUpdated: '2026-09-07',
    overview: 'ChatGPT 支持多轮对话与文本处理，并根据账号方案提供文件分析、图片理解和搜索等功能。国内用户开始使用时，建议优先关注 OpenAI 官方当前支持的服务地区和自身网络连接稳定性。',
    features: [
      '支持多轮对话与长文本处理',
      '支持上传文档进行数据分析（视方案支持）',
      '具备图片理解与生成能力（视方案支持）',
      '提供网页搜索和语音对话功能',
      '跨网页与官方客户端同步记录'
    ],
    useCases: [
      '撰写和润色文章、邮件、报告',
      '将长篇文档或会议记录总结为摘要',
      '编写、调试和重构各类主流编程语言代码',
      '练习外语对话和进行多语种翻译',
      '解答工作或学习中的概念问题'
    ],
    gettingStarted: [
      '访问官方网站 chatgpt.com，确认当前网络环境和所在地区受支持。',
      '使用邮箱或第三方账号（如 Google/Apple）完成注册。',
      '在下方对话框输入需求，明确指定背景和期望的输出格式。'
    ],
    networkAndRegion: '实际可用性可能受到服务支持地区、账号状态、产品政策及网络环境影响。如果访问速度较慢、无法加载或登录失败，可以先检查 OpenAI 官方状态、浏览器缓存、网络连接与 DNS，以及当前所在地是否在服务范围内。',
    advantages: [
      '对话逻辑与常识推理能力稳定',
      '跨平台支持完善，官方 App 体验良好',
      '功能更新较快，涵盖文本、语音和视觉'
    ],
    limitations: [
      '实际可用性可能受所在地区网络连接影响',
      '免费用户可能在高峰期遇到排队或降级',
      '生成内容偶尔会存在事实性错误（幻觉）'
    ],
    faq: [
      {
        q: 'ChatGPT 国内可以直接用吗？',
        a: 'ChatGPT 的官方服务范围不包含所有地区。国内用户在使用前，需要确认所处网络环境能否正常连接海外服务，并符合 OpenAI 当前的用户地区规定。'
      },
      {
        q: 'ChatGPT 官网打不开怎么办？',
        a: '官网打不开通常与基础网络环境有关。请先检查当前网络连接是否正常、DNS 解析是否正确；如果已使用网络优化工具，请尝试切换线路并检查 OpenAI 官方是否有宕机公告。'
      },
      {
        q: 'ChatGPT 登录失败怎么办？',
        a: '如果可以打开首页但无法登录，可能是浏览器缓存问题、第三方登录授权失败或账号状态异常。建议尝试开启浏览器的无痕窗口（隐私模式）再次登录。'
      },
      {
        q: 'ChatGPT 一直加载怎么办？',
        a: '页面长时间加载（转圈）一般是网络连接不稳定或受到干扰。可以尝试刷新页面、清理 Cookie，或排查当前使用的网络环境稳定性。'
      },
      {
        q: 'ChatGPT 国内网络环境需要注意什么？',
        a: '国内网络直连通常会遇到困难。使用海外网络方案时，请确保连接稳定且线路属于 OpenAI 允许提供服务的地区，否则可能触发访问限制（如 Access Denied）。'
      },
      {
        q: 'ChatGPT 免费版够用吗？',
        a: '对于普通的文字润色、日常问答和简单代码辅助，免费版已经足够。若需要无限制地使用高级模型、上传大量文件进行数据分析，则需考虑付费方案。'
      },
      {
        q: 'ChatGPT 支持中文吗？',
        a: '完全支持。你可以直接用中文提问，它也能生成流畅地道的中文回答。对于特定领域词汇，中英混用效果也很好。'
      },
      {
        q: 'ChatGPT 可以上传 PDF 和文件吗？',
        a: '当前绝大多数账号（包括部分免费方案）均支持上传 PDF、文档和图片。具体功能是否开放以账号当前实际界面显示为准。'
      },
      {
        q: '手机和电脑都可以使用 ChatGPT 吗？',
        a: '可以。OpenAI 提供了网页端，以及 iOS、Android、macOS 和 Windows 客户端。账号记录在各个平台间自动同步。'
      }
    ],
    alternatives: ['claude', 'gemini'],
    domesticLayout: true,
    seoH1: 'ChatGPT 国内怎么用？使用方法与常见问题',
    domesticIntro: '国内用户使用 ChatGPT 时，通常首先需要确认 OpenAI 当前服务支持范围、账号状态以及实际网络环境。如果官网打不开、登录失败或页面长时间加载，不一定是 ChatGPT 本身故障，也可能与浏览器、DNS、账号地区或当前连接有关。',
    domesticSymptoms: [
      {
        title: '官网完全打不开',
        checks: ['OpenAI 官方服务状态', '当前基础网络与 DNS', '服务支持地区限制']
      },
      {
        title: '页面打开但一直加载',
        checks: ['浏览器缓存问题', '浏览器插件干扰', '网络连接稳定性']
      },
      {
        title: '可以打开，但登录失败',
        checks: ['账号状态异常', '浏览器 Cookie', '第三方登录授权失败', '服务地区限制']
      },
      {
        title: '登录成功，但部分功能没有',
        checks: ['当前账号免费/付费方案', '账号功能灰度测试范围', '产品官方地区支持政策']
      }
    ],
    domesticFunctions: [
      {
        name: '文本对话与创作',
        desc: '撰写邮件、写报告、总结文章和多语种翻译。',
        limitations: '免费与付费方案均支持'
      },
      {
        name: '代码辅助',
        desc: '编写、解释和重构主流编程语言代码，排查报错。',
        limitations: '免费与付费方案均支持'
      },
      {
        name: '文件与数据分析',
        desc: '上传 PDF、Excel、Word 进行分析和数据处理。',
        limitations: '受账号方案与官方政策限制'
      },
      {
        name: '图片理解与生成',
        desc: '上传图片进行识别解释，或根据文字生成新图片。',
        limitations: '图片生成通常需要高级方案'
      },
      {
        name: '语音与搜索',
        desc: '支持通过官方 App 语音对话，以及实时联网搜索信息。',
        limitations: '部分高级语音和搜索功能优先向付费用户开放'
      }
    ],
    domesticPrompts: [
      {
        title: '写工作信息',
        desc: '请帮我把下面这段工作信息整理得更清楚。 要求： - 保留原意 - 语气自然 - 不要太正式 - 控制在 150 字以内 原文： 【在这里粘贴内容】',
        text: '请帮我把下面这段工作信息整理得更清楚。 要求： - 保留原意 - 语气自然 - 不要太正式 - 控制在 150 字以内 原文： 【在这里粘贴内容】'
      },
      {
        title: '总结文章',
        desc: '请阅读下面的内容。 先给我： 1. 3 个核心重点 2. 一段 100 字以内总结 3. 我最需要注意的地方 如果原文没有明确说明的内容，不要自己补。',
        text: '请阅读下面的内容。 先给我： 1. 3 个核心重点 2. 一段 100 字以内总结 3. 我最需要注意的地方 如果原文没有明确说明的内容，不要自己补。'
      },
      {
        title: '学习概念',
        desc: '请用新手能听懂的方式解释这个概念。 先用简单例子说明， 再告诉我它在实际生活或工作中有什么用途。 概念： 【填写主题】',
        text: '请用新手能听懂的方式解释这个概念。 先用简单例子说明， 再告诉我它在实际生活或工作中有什么用途。 概念： 【填写主题】'
      },
      {
        title: '排查代码报错',
        desc: '请先解释这个报错是什么意思。 不要马上重写整个项目。 请告诉我： 1. 最可能的原因 2. 需要检查哪些文件 3. 最小修改方案 报错： 【粘贴错误】',
        text: '请先解释这个报错是什么意思。 不要马上重写整个项目。 请告诉我： 1. 最可能的原因 2. 需要检查哪些文件 3. 最小修改方案 报错： 【粘贴错误】'
      },
      {
        title: '资料核对',
        desc: '请回答这个问题。 如果涉及最新信息： - 优先使用最新可靠来源 - 标出信息日期 - 不确定的地方明确告诉我 问题： 【填写问题】',
        text: '请回答这个问题。 如果涉及最新信息： - 优先使用最新可靠来源 - 标出信息日期 - 不确定的地方明确告诉我 问题： 【填写问题】'
      }
    ]
  },
  {
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
  },
  {
    slug: 'gemini',
    seoTitle: 'Gemini国内怎么用？使用教程与常见问题',
    seoDescription: '国内使用Gemini时，如果遇到官网打不开、登录失败或部分功能不可用，可从服务地区、Google账号、浏览器与网络环境逐项排查，并了解常见功能与使用方法。',
    seoKeywords: 'Gemini国内怎么用,Gemini教程,Deep Research,Gems',
    name: 'Gemini',
    company: 'Google',
    officialUrl: 'https://gemini.google.com',
    category: 'chat',
    categories: ['chat', 'writing', 'research'],
    shortDescription: 'Google 推出的 AI 助手，可用于聊天、资料整理、文件分析、研究和 Google 服务相关工作流。本页重点整理国内用户开始使用 Gemini 时需要了解的官方入口、Google 账号、服务地区和网络环境问题。',
    description: 'Gemini 是由 Google 推出的 AI 助手，支持多模态输入（文本、图片、视频、音频、文档），并与 Gmail、Drive、Workspace 等 Google 服务存在官方整合。它还提供 Deep Research（深度研究）和 Gems（自定义助手配置）等特色功能。',
    tags: ['AI对话', 'Deep Research', 'Gems', 'Google生态'],
    featured: true,
    freePlan: '提供基础聊天、文件上传与 Gemini Web 访问，额度和功能视官方策略而定',
    pricingType: '免费 / Google AI Pro / Google AI Ultra（订阅制）',
    chineseSupport: '支持（包括简体中文、繁体中文、香港中文）',
    accountRequired: '需要 Google 账号（并确认服务地区和账号状态正常）',
    platforms: ['网页端（gemini.google.com）', 'Android', 'iOS'],
    bestFor: ['研究人员', '学生', 'Google Workspace 用户', '内容创作者'],
    lastUpdated: '2026-09-07',
    overview: 'Gemini 网页版与移动 App 的支持范围可能不同，因此"网页能打开"和"手机应用能下载"不是同一个问题。国内用户开始使用时，建议先确认 Google Gemini 当前支持的服务地区，并检查 Google 账号的可用状态。',
    features: [
      '支持多模态输入：文本、图片、视频、音频、文档',
      'Deep Research 功能支持多步骤深度资料研究',
      'Gems 允许创建自定义 AI 助手配置与知识库',
      '与 Gmail、Drive 等 Google 服务存在官方整合',
      '支持代码文件与 GitHub Repository 导入（视方案）'
    ],
    useCases: [
      '整理和分析上传的文档、表格或图片',
      '使用 Deep Research 对主题进行深度研究',
      '配合 Gmail / Drive 整理工作流',
      '创建 Gem 实现特定任务的自定义助手',
      '分析图片、视频截图和代码文件'
    ],
    gettingStarted: [
      '访问 gemini.google.com，确认 Google 账号可以正常使用 Gemini 服务。',
      '确认当前所在地区和网络环境是否支持 Gemini Web 访问。',
      '移动端需要分别确认 Android / iOS App 在当前地区的可用情况。'
    ],
    networkAndRegion: '实际可用性可能受服务地区、Google 账号类型（个人 / Workspace）、产品政策及网络环境影响。Workspace 组织账号还可能受管理员设置控制。如果访问异常，请先排查账号状态和基础网络连通性。',
    advantages: [
      'Google 服务整合（Gmail、Drive、Workspace）',
      '支持多种文件类型上传与分析',
      'Deep Research 提供深度多步骤资料研究',
      'Gems 支持自定义 AI 助手配置',
      '官方支持中文（简体、繁体、香港中文）'
    ],
    limitations: [
      '不同地区和平台（Web / Mobile App）可用范围不同',
      '功能受账号类型与方案影响',
      'Workspace 账号可能受管理员控制',
      'AI 回答仍需核对事实，Deep Research 结果亦需验证',
      '功能和限制会随着产品更新调整'
    ],
    faq: [
      {
        q: 'Gemini 国内可以用吗？',
        a: 'Gemini 官方支持 230+ 个国家和地区（Web 版）。但实际能否正常访问，还取决于当前网络环境和 Google 账号状态。移动 App 的地区支持范围与 Web 版不完全相同。'
      },
      {
        q: 'Gemini 国内怎么用？',
        a: '首先需要确认所在地区和网络环境能够正常访问 Google 服务，并登录有效的 Google 账号。Web 版可通过 gemini.google.com 访问；移动端需分别确认 Android / iOS App 在当前地区的可用情况。'
      },
      {
        q: 'Gemini 官网打不开怎么办？',
        a: '请先检查基础网络连接和 DNS。如果 Google 其他服务（如 Search）也无法访问，通常是网络环境问题。可以参考本站的网络排查指南进一步诊断。'
      },
      {
        q: 'Gemini 登录失败怎么办？',
        a: '如果页面可以打开但登录失败，可能是浏览器 Cookie 异常、Google 账号二步验证或当前网络环境被识别为异常导致。建议尝试无痕模式，并确认 Google 账号本身状态正常。'
      },
      {
        q: 'Gemini 网页能用但 App 下载不到怎么办？',
        a: 'Web 版和移动 App 的地区支持范围并不完全相同。App 的可用性还会受到 Google Play / App Store 的账号地区设置影响，需要分别确认，不能用 Web 可用来判断 App 一定能下载。'
      },
      {
        q: 'Gemini 一直加载怎么办？',
        a: '可以先尝试清理浏览器缓存、关闭扩展程序后重试，或在无痕窗口测试。如果问题持续，请排查网络连接稳定性，并查看 Google 官方状态页面。'
      },
      {
        q: 'Gemini 支持中文吗？',
        a: '支持。Gemini Web 官方支持简体中文、繁体中文和香港中文，可以用中文输入指令，也能生成流畅的中文内容。'
      },
      {
        q: 'Gemini 可以上传 PDF 吗？',
        a: '可以。Gemini 支持上传多种格式的文件，包括文档、PDF、表格、图片等。具体文件大小和数量限制以当前账号显示为准。'
      },
      {
        q: 'Gemini 可以分析视频吗？',
        a: '可以上传视频文件进行分析（视方案支持）。请注意视频时长和大小限制以官方当前政策为准，通常高级方案拥有更高额度。'
      },
      {
        q: 'Gemini Deep Research 是什么？',
        a: 'Deep Research 是 Gemini 的深度研究功能，可以对一个主题进行多步骤、多来源的自动研究，并生成综合报告。该功能仍需用户核对来源准确性。'
      },
      {
        q: 'Gemini Gems 是什么？',
        a: 'Gems 是 Gemini 的自定义助手配置功能，你可以设置名称、Instructions 和 Knowledge 文件，创建一个专注于特定任务的 AI 助手，并在 Web 和移动端复用。'
      },
      {
        q: 'Gemini 免费版够用吗？',
        a: '免费版支持基础聊天、文件上传和常用功能，适合日常使用。Deep Research 的更高频次使用、Gems 的更多配置空间以及 Google One 相关权益通常属于付费方案。'
      },
      {
        q: 'Gemini 和 ChatGPT 有什么区别？',
        a: 'Gemini 与 Google 服务（Gmail、Drive、Workspace）的整合更为深入，Deep Research 和多模态文件处理也有特色。ChatGPT 在语音交互和 GPTs 生态方面较为成熟。详情可查看本站的三巨头对比文章。'
      }
    ],
    alternatives: ['chatgpt', 'claude'],
    domesticLayout: true,
    seoH1: 'Gemini 国内怎么用？使用方法与常见问题',
    domesticIntro: '国内用户使用 Gemini 时，首先需要确认 Google 当前提供 Gemini 的服务地区、Google 账号状态以及实际网络环境。Gemini 网页版与移动 App 的支持范围也可能不同，因此"网页能打开"和"手机应用能下载"不是同一个问题。',
    domesticSymptoms: [
      {
        title: 'Gemini 官网完全打不开',
        checks: ['Google / Gemini 官方服务状态', '基础网络连接与 DNS', '服务地区是否支持']
      },
      {
        title: '网页能打开，但 Google 账号登录失败',
        checks: ['Google 账号状态', '浏览器 Cookie', '登录方式', '网络环境是否被识别为异常']
      },
      {
        title: '可以登录，但 Gemini 页面一直加载',
        checks: ['浏览器缓存', '扩展程序干扰', '当前网络稳定性', '官方服务状态']
      },
      {
        title: '网页版能用，但手机 App 找不到',
        checks: ['Web 与 Mobile App 地区支持不同', 'Google Play / App Store 账号地区', '设备型号与系统版本', '移动端 Gemini App 当前可用地区']
      },
      {
        title: '登录成功，但某些功能没有',
        checks: ['当前账号方案（免费 / Pro / Ultra）', '功能逐步发布范围', 'Workspace 管理员设置', '产品地区支持政策']
      }
    ],
    domesticFunctions: [
      {
        name: '聊天与内容生成',
        desc: '可用于写作、翻译、总结、问答和日常内容辅助。',
        limitations: '免费与付费方案均支持'
      },
      {
        name: '文件上传与分析',
        desc: '支持上传文档、PDF、表格、图片、视频、音频和代码文件进行分析。',
        limitations: '文件大小与数量限制以当前账号显示为准'
      },
      {
        name: 'Deep Research',
        desc: '对特定主题进行多步骤、多来源的深度研究，生成综合报告。结果需人工核对。',
        limitations: '更高使用频次通常属于付费方案'
      },
      {
        name: 'Gems 自定义助手',
        desc: '创建专属 AI 助手配置，设置 Instructions 和 Knowledge，在 Web 和移动端复用。',
        limitations: '可创建数量及高级功能视方案而定'
      },
      {
        name: 'Google 服务整合',
        desc: '与 Gmail、Google Drive、Workspace 等 Google 服务存在官方连接，支持跨服务工作流。',
        limitations: '需要对应权限，Workspace 账号还可能受管理员控制'
      }
    ],
    domesticPrompts: [
      {
        title: '整理文件思路',
        desc: '请帮我整理下面这份资料。 先告诉我： 1. 主要主题 2. 5 个核心重点 3. 哪些地方需要进一步确认 4. 哪些数据或日期最重要 不要补充原文没有的信息。 资料： 【粘贴内容】',
        text: '请帮我整理下面这份资料。 先告诉我： 1. 主要主题 2. 5 个核心重点 3. 哪些地方需要进一步确认 4. 哪些数据或日期最重要 不要补充原文没有的信息。 资料： 【粘贴内容】'
      },
      {
        title: '比较两份资料',
        desc: '请比较下面两份资料。 按以下格式整理： - 相同点 - 不同点 - 时间差异 - 数据冲突 - 哪些结论需要进一步核对 不要直接判断哪一份一定正确。 资料 A： 【内容】 资料 B： 【内容】',
        text: '请比较下面两份资料。 按以下格式整理： - 相同点 - 不同点 - 时间差异 - 数据冲突 - 哪些结论需要进一步核对 不要直接判断哪一份一定正确。 资料 A： 【内容】 资料 B： 【内容】'
      },
      {
        title: '学习新概念',
        desc: '请用新手能理解的方式教我这个主题。 先讲最基本概念， 再给一个实际例子， 最后给我 3 个小问题检查我是否理解。 主题： 【填写内容】',
        text: '请用新手能理解的方式教我这个主题。 先讲最基本概念， 再给一个实际例子， 最后给我 3 个小问题检查我是否理解。 主题： 【填写内容】'
      },
      {
        title: '文件分析',
        desc: '请先检查我上传的文件。 不要马上总结全部内容。 先告诉我： 1. 文件是什么类型 2. 主要结构 3. 最重要的章节 4. 和我的问题最相关的是哪里 我的问题： 【填写问题】',
        text: '请先检查我上传的文件。 不要马上总结全部内容。 先告诉我： 1. 文件是什么类型 2. 主要结构 3. 最重要的章节 4. 和我的问题最相关的是哪里 我的问题： 【填写问题】'
      },
      {
        title: 'Deep Research',
        desc: '请对这个主题做深入研究。 要求： - 优先使用最新可靠来源 - 标出主要来源日期 - 区分官方资料和第三方资料 - 如果来源之间存在冲突，请分别列出 - 最后告诉我哪些结论仍然需要人工核对 主题： 【填写主题】',
        text: '请对这个主题做深入研究。 要求： - 优先使用最新可靠来源 - 标出主要来源日期 - 区分官方资料和第三方资料 - 如果来源之间存在冲突，请分别列出 - 最后告诉我哪些结论仍然需要人工核对 主题： 【填写主题】'
      }
    ]
  },
    {
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
  {
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
{
    slug: 'cursor',
    seoTitle: 'Cursor国内怎么用？安装、使用与常见问题',
    seoDescription: '国内使用Cursor时，如果遇到下载失败、账号登录异常或Agent无响应，可从官方状态、账号、客户端与网络环境逐项排查，并了解安装、Agent和常见使用方法。',
    seoKeywords: 'Cursor国内怎么用,Cursor下载,Cursor Agent,AI编程',
    name: 'Cursor',
    company: 'Anysphere',
    officialUrl: 'https://cursor.com',
    category: 'coding',
    categories: ['coding', 'productivity'],
    shortDescription: 'Cursor 是面向开发者的 AI 编程工具，可帮助理解代码库、修改文件、运行命令和完成开发任务。本页重点整理国内用户下载安装、登录、使用 Agent 以及遇到网络或模型问题时的排查方法。',
    description: 'Cursor 是面向开发者的 AI 编程工具（Coding Agent）。它可以搜索和理解代码库上下文、编辑多个文件、运行终端命令、查看 diff，并支持 Agent 工作流。编辑体验与 VS Code 生态较接近，并支持迁移部分现有设置与扩展。',
    tags: ['AI编程', 'Agent', '代码补全', 'Coding'],
    featured: true,
    freePlan: 'Hobby 免费方案，包含限额 Agent 使用和基础代码补全，具体额度以官方 Pricing 当前显示为准',
    pricingType: 'Hobby（免费）/ Pro（$20/月）/ Pro+（$60/月）/ Ultra（$200/月）',
    chineseSupport: '界面和对话均可使用中文',
    accountRequired: '需要 Cursor 账号（可用 GitHub、Google 或邮箱登录）',
    platforms: ['Windows', 'macOS', 'Linux'],
    bestFor: ['前端开发者', '后端开发者', '全栈工程师', '学习编程的新手'],
    lastUpdated: '2026-09-07',
    overview: 'Cursor 的 AI 功能需要连接云端服务，而且不同模型提供商可能存在地区可用性差异，所以"Cursor 能打开"和"某个模型可以正常使用"并不是同一件事。建议安装后先用简单项目测试 Agent 是否可以正常响应。',
    features: [
      '搜索和理解代码库上下文，辅助规划和实现功能',
      '支持多文件编辑与 Diff 预览',
      '可运行终端命令，完成完整开发任务',
      '支持来自多个提供商的模型，以及 Auto 和 BYOK',
      '支持 Privacy Mode，承诺代码不用于训练'
    ],
    useCases: [
      '理解陌生代码库的目录结构和技术栈',
      '制定修改计划后逐步实现新功能',
      '定位和修复代码 Bug',
      '修改后检查是否破坏现有功能',
      '从零搭建简单网站或项目脚手架'
    ],
    gettingStarted: [
      '从 cursor.com/download 下载并安装当前稳定版桌面客户端。',
      '启动后登录 Cursor 账号（可用 GitHub / Google / 邮箱）。',
      '打开本地项目文件夹，先让 Agent 阅读项目结构，再提出第一个任务。'
    ],
    networkAndRegion: '实际可用性可能受到 Cursor 官方服务状态、账号状态、客户端版本以及模型提供商地区政策影响。某些模型在特定地区可能不显示或不可使用，这通常来自模型提供商的地区限制，而不一定是 Cursor 本身故障。',
    advantages: [
      '可搜索和理解代码库上下文',
      '支持多文件编辑与完整 Agent 工作流',
      '支持来自多个提供商的模型',
      '支持 BYOK（Bring Your Own API Key）',
      '支持 Privacy Mode'
    ],
    limitations: [
      '不同模型在不同地区的可用性有差异',
      '功能和额度会根据方案和官方策略调整',
      'Agent 结果仍需人工审查，不能盲目接受所有修改',
      '具体 VS Code 扩展兼容性以实际扩展为准'
    ],
    faq: [
      {
        q: 'Cursor 国内可以用吗？',
        a: 'Cursor 桌面客户端本身可以在国内下载和安装。使用 AI 功能时，需要能连接 Cursor 云端服务，同时部分模型还可能受模型提供商的地区政策影响。'
      },
      {
        q: 'Cursor 国内怎么用？',
        a: '从 cursor.com/download 下载安装客户端，登录 Cursor 账号，打开本地项目，再通过 Agent（Ctrl+I / Cmd+I）开始使用。建议先用简单任务测试 Agent 是否正常响应。'
      },
      {
        q: 'Cursor 从哪里下载？',
        a: '建议从官方网站 cursor.com/download 下载当前稳定版。不建议从第三方软件站、网盘或非官方来源下载，也不要使用所谓"破解版"。'
      },
      {
        q: 'Cursor 安装后为什么登录不了？',
        a: '可能是浏览器 Cookie、账号状态或当前网络环境问题。建议尝试：检查账号是否注册成功、清理浏览器缓存后重新授权、确认网络连接正常。'
      },
      {
        q: 'Cursor Agent 一直加载怎么办？',
        a: '需要逐步排查：先检查 Cursor 官方状态；再确认账号是否还有可用额度；检查当前选择的模型是否在当前地区可用；最后再排查网络连接稳定性。'
      },
      {
        q: 'Cursor Agent 没有反应怎么办？',
        a: '先区分是 Tab 补全也不工作，还是只有 Agent 不响应。如果 Tab 正常但 Agent 不响应，可能是模型选择、账号额度或网络连接问题。建议换一个可用的模型或切换到 Auto 模式测试。'
      },
      {
        q: 'Cursor 为什么有些模型不能选？',
        a: 'Cursor 提供来自多个模型提供商的模型。不同提供商可能有各自的地区政策，因此某些模型在特定地区可能不会显示或不可使用。建议使用仍然可用的模型或选择 Auto 模式。'
      },
      {
        q: 'Cursor 支持 Windows 吗？',
        a: '支持。Cursor 官方提供 Windows、macOS 和 Linux 版本的桌面客户端，均可从 cursor.com/download 下载。'
      },
      {
        q: 'Cursor 支持 macOS 和 Linux 吗？',
        a: '支持。macOS 同时提供 Apple Silicon 和 Intel 版本；Linux 提供 .deb、.rpm 和 AppImage 等格式。具体以官方当前提供的版本为准。'
      },
      {
        q: 'Cursor 可以使用中文吗？',
        a: '可以。你可以用中文向 Cursor Agent 提问和下达指令，它也能以中文回复。界面语言根据系统设置显示。'
      },
      {
        q: 'Cursor 免费版够用吗？',
        a: 'Hobby 免费方案包含有限的 Agent 使用次数和基础代码补全，适合轻度体验。如果需要更高频次的 Agent 使用和高级模型访问，可以考虑 Pro 或更高方案。具体额度以官方当前 Pricing 为准。'
      },
      {
        q: 'Cursor 可以使用自己的 API Key 吗？',
        a: '支持 BYOK（Bring Your Own API Key）。可以使用 OpenAI、Anthropic、Google、Azure OpenAI 等提供商的 API Key。注意：使用 BYOK 时，数据处理将跟随对应模型提供商的政策，并不自动等同于 Cursor 内置模型的 Privacy Mode 承诺。'
      },
      {
        q: 'Cursor Privacy Mode 是什么？',
        a: 'Privacy Mode 开启后，Cursor 承诺你的代码不会用于 Cursor 或模型提供商的模型训练。但 AI 功能本身仍需要将代码上下文发送到云端进行处理，Privacy Mode 控制的是是否用于训练，而非代码是否发送。'
      },
      {
        q: 'Cursor 和 VS Code 有什么关系？',
        a: 'Cursor 的编辑体验与 VS Code 生态较为接近，并支持迁移部分现有设置和扩展。但具体兼容性以实际扩展为准，不保证所有 VS Code 扩展均完全兼容。'
      }
    ],
    alternatives: ['github-copilot', 'windsurf'],
    domesticLayout: true,
    seoH1: 'Cursor 国内怎么用？安装、Agent 与常见问题',
    domesticIntro: '国内用户使用 Cursor 时，可以先从官方网站下载安装客户端，再登录 Cursor 账号并打开本地项目。由于 Cursor 的 AI 功能需要连接云端服务，而且不同模型提供商还可能存在地区可用性差异，所以"Cursor 能打开"和"某个模型可以正常使用"并不是同一件事。',
    domesticSymptoms: [
      {
        title: 'Cursor 官网或下载页打不开',
        checks: ['Cursor 官方服务状态', '基础网络与 DNS', '浏览器缓存', '当前网络连接']
      },
      {
        title: '安装好了，但登录不了',
        checks: ['Cursor 账号是否注册成功', '浏览器登录流程', 'Cookie 是否异常', '客户端版本是否最新', '网络环境']
      },
      {
        title: 'Cursor 能打开，但 Agent 一直加载',
        checks: ['Cursor 官方状态', '当前客户端版本', '账号是否还有可用额度', '当前模型是否在地区可用', '网络连接稳定性', '是否只在某一个项目出现']
      },
      {
        title: '某个模型不见了 / 不可选',
        checks: ['模型提供商地区可用性政策', '当前账号方案', '切换到 Auto 模式', 'BYOK 对应提供商是否支持当前地区', '查看官方 Regions 文档']
      },
      {
        title: 'Tab 补全正常，但 Agent 不响应',
        checks: ['当前 Agent 模型选择', '账号 Agent 使用量', '官方 Agent 状态', '换一个可用模型测试']
      },
      {
        title: 'Agent 能回复，但修改文件失败',
        checks: ['项目目录权限', '文件是否只读', 'Workspace Trust 设置', 'Agent 当前模式', '终端权限', '项目本身的构建错误']
      }
    ],
    domesticFunctions: [
      {
        name: 'Agent 工作流',
        desc: '可理解代码库、规划功能、编辑文件、运行命令和检查结果，完成端到端开发任务。',
        limitations: '不同方案提供不同 Agent 额度，以官方当前显示为准'
      },
      {
        name: 'Tab 代码补全',
        desc: '在编写代码时实时给出补全建议，支持多行补全。',
        limitations: '免费与付费方案均支持，具体模型有差异'
      },
      {
        name: '多文件编辑与 Diff',
        desc: 'Agent 修改完成后可以预览所有文件变动，逐项确认或撤销。',
        limitations: '建议每次修改后仔细检查 Diff 再接受'
      },
      {
        name: '模型选择与 Auto',
        desc: '支持来自多个提供商的模型，Auto 模式自动选择可用模型。具体可用列表以当前 Model Picker 为准。',
        limitations: '部分模型受地区可用性限制'
      },
      {
        name: 'BYOK（自备 API Key）',
        desc: '可使用 OpenAI、Anthropic、Google 等提供商的 API Key 调用对应模型。',
        limitations: '数据处理跟随对应提供商政策，与 Privacy Mode 机制不同'
      }
    ],
    domesticPrompts: [
      {
        title: '理解项目结构',
        desc: '请先阅读这个项目。 现在不要修改任何文件。 请告诉我： 1. 这个项目使用什么技术栈 2. 主要目录分别负责什么 3. 应用从哪里启动 4. 数据主要放在哪里 5. 如果我要修改首页，最可能涉及哪些文件 先分析，不要写代码。',
        text: '请先阅读这个项目。 现在不要修改任何文件。 请告诉我： 1. 这个项目使用什么技术栈 2. 主要目录分别负责什么 3. 应用从哪里启动 4. 数据主要放在哪里 5. 如果我要修改首页，最可能涉及哪些文件 先分析，不要写代码。'
      },
      {
        title: '先制定计划',
        desc: '我要增加一个新功能。 需求： 【填写你的需求】 现在先不要修改代码。 请先： 1. 找出可能涉及的文件 2. 说明现有实现方式 3. 给出最小修改方案 4. 告诉我有哪些风险 5. 列出修改顺序 等我确认后再开始实现。',
        text: '我要增加一个新功能。 需求： 【填写你的需求】 现在先不要修改代码。 请先： 1. 找出可能涉及的文件 2. 说明现有实现方式 3. 给出最小修改方案 4. 告诉我有哪些风险 5. 列出修改顺序 等我确认后再开始实现。'
      },
      {
        title: '修 Bug',
        desc: '项目现在出现这个问题： 【描述问题】 请先不要重构整个项目。 先帮我： 1. 找出最可能原因 2. 检查相关文件 3. 给出最小修复方案 4. 告诉我修改后应该怎么验证 错误信息： 【粘贴报错】',
        text: '项目现在出现这个问题： 【描述问题】 请先不要重构整个项目。 先帮我： 1. 找出最可能原因 2. 检查相关文件 3. 给出最小修复方案 4. 告诉我修改后应该怎么验证 错误信息： 【粘贴报错】'
      },
      {
        title: '限制修改范围',
        desc: '请只修改与这个问题直接相关的文件。 要求： - 不重新设计页面 - 不修改无关组件 - 不升级依赖 - 不改变现有 API - 不删除现有功能 - 完成后列出所有修改文件和原因 需求： 【填写需求】',
        text: '请只修改与这个问题直接相关的文件。 要求： - 不重新设计页面 - 不修改无关组件 - 不升级依赖 - 不改变现有 API - 不删除现有功能 - 完成后列出所有修改文件和原因 需求： 【填写需求】'
      },
      {
        title: '修改后自检',
        desc: '请检查你刚刚完成的修改。 不要继续增加新功能。 请确认： 1. 是否有 TypeScript 错误 2. 是否有未使用变量 3. 是否破坏现有路由 4. 是否有移动端问题 5. 是否需要运行 lint、test 或 build 6. 有没有修改到需求之外的文件 最后给我一份检查清单。',
        text: '请检查你刚刚完成的修改。 不要继续增加新功能。 请确认： 1. 是否有 TypeScript 错误 2. 是否有未使用变量 3. 是否破坏现有路由 4. 是否有移动端问题 5. 是否需要运行 lint、test 或 build 6. 有没有修改到需求之外的文件 最后给我一份检查清单。'
      },
      {
        title: '零基础搭建网站',
        desc: '我不会编程。 我要制作一个简单的网站。 在开始写代码前，请先： 1. 用简单中文解释技术方案 2. 告诉我需要哪些页面 3. 设计项目结构 4. 列出实施顺序 5. 等我确认以后再创建文件 不要一次生成整个复杂项目。',
        text: '我不会编程。 我要制作一个简单的网站。 在开始写代码前，请先： 1. 用简单中文解释技术方案 2. 告诉我需要哪些页面 3. 设计项目结构 4. 列出实施顺序 5. 等我确认以后再创建文件 不要一次生成整个复杂项目。'
      }
    ]
  },
  {
    slug: 'github-copilot',
    seoTitle: 'GitHub Copilot国内怎么用',
    seoDescription: '国内使用GitHub Copilot时，如果遇到登录、代码补全或Agent异常，可从GitHub账号、IDE扩展、方案权限与网络环境排查，并了解基础使用方法。',
    seoKeywords: 'GitHub Copilot国内怎么用,Copilot安装,VS Code使用,Copilot没反应,Copilot Agent',
    name: 'GitHub Copilot',
    company: 'GitHub',
    officialUrl: 'https://github.com/features/copilot',
    category: 'code',
    categories: ['code', 'productivity'],
    shortDescription: 'GitHub Copilot 是 GitHub 提供的 AI 编程助手，可在编辑器、GitHub 网站和命令行等环境辅助编写、理解与修改代码。本页重点整理国内用户安装、登录、代码补全、Agent 使用与常见连接问题。',
    description: 'GitHub Copilot 是一款深度整合到开发者工作流中的 AI 编程助手。从最初的代码补全，到现在已经扩展出 Chat、Agent Mode、Cloud Agent、Pull Request 辅助和 CLI 功能，支持 VS Code、JetBrains、Visual Studio 等多种主流 IDE。',
    tags: ['AI编程', '代码补全', 'IDE扩展', '代码重构'],
    featured: true,
    freePlan: '提供 Copilot Free（适合新手体验）以及面向学生的 Copilot Student 方案。',
    pricingType: 'Free / Pro / Pro+ / Max',
    chineseSupport: '完全支持中文注释、中文对话以及中文代码解释。',
    accountRequired: '需要 GitHub 账号，部分功能可能受组织策略（Organization Policies）限制。',
    platforms: ['VS Code', 'Visual Studio', 'JetBrains', 'Xcode', 'Neovim', 'Web (GitHub.com)'],
    bestFor: ['软件工程师', '前端开发者', '后端开发者', '数据科学家', '学生'],
    lastUpdated: '2026-09-07',
    overview: '国内用户使用 GitHub Copilot 时，首先需要准备能够正常登录的 GitHub 账号，并在支持的编辑器或 GitHub 环境中启用 Copilot。现在 Copilot 已经不只有代码补全，还包括 Chat、Agent 和代码审查等工作流。如果出现登录失败、补全没有反应或 Agent 长时间加载，应分别检查 GitHub 账号、IDE 扩展、当前方案权限和网络环境。',
    features: [
      '代码补全 (Code Completion) 与 Next Edit Suggestions',
      'Copilot Chat：在 IDE 中进行代码解释、生成测试与 Bug 修复',
      'Agent Mode：IDE 内自动读取上下文、修改文件与执行命令（部分 IDE 支持）',
      'Copilot Cloud Agent：在 GitHub.com 云端研究仓库并创建 Pull Request',
      'Copilot App 与 CLI：支持移动端探索与命令行辅助开发'
    ],
    useCases: [
      '根据注释或函数名自动补全后续代码逻辑',
      '在 VS Code 中选中一段陌生代码让 Copilot 用中文解释',
      '使用 Agent 自动分析错误日志并跨文件修改代码',
      '在提交代码时使用 Copilot 辅助 Code Review 和生成 PR 描述',
      '利用 Copilot CLI 在终端快速生成复杂的 Git 或 Shell 命令'
    ],
    gettingStarted: [
      '准备一个 GitHub 账号，确认当前是否开通了 Copilot 方案（Free/Pro等）。',
      '在 VS Code（或其他支持的 IDE）的扩展商店中搜索并安装 GitHub Copilot 扩展。',
      '在 IDE 中登录你的 GitHub 账号，打开代码文件即可体验自动补全与 Chat。'
    ],
    networkAndRegion: '访问 GitHub Copilot 需要稳定的网络连接。如果 github.com 能打开但代码补全没反应，可能是 API 域名连接不稳定。遇到问题时，请先排查扩展版本、网络代理以及 GitHub Copilot 服务状态。',
    advantages: [
      '与 GitHub 工作流（PR、Issues）深度整合',
      '支持几乎所有主流 IDE，跨平台体验一致性强',
      '已演进出 Agent 类工作流，不只是单行补全',
      '可辅助 Code Review，提升团队代码质量',
      '个人与企业均有匹配的方案（包含 Free/Student）'
    ],
    limitations: [
      '不同 IDE 的高级功能支持程度不同（如 Agent Mode）',
      '企业账号可能受管理员策略控制，部分模型或功能不可用',
      'AI 生成和修改的代码仍可能存在错误，必须人工 Review',
      '功能、AI Credits 与支持的模型库持续变化',
      '网络连接异常时补全体验会大幅下降'
    ],
    faq: [
      {
        q: 'GitHub Copilot 国内可以用吗？',
        a: 'GitHub Copilot 主要受官方 Trade Controls（贸易管控）政策及你的网络环境影响。只要你的网络能稳定连接其后端服务且账号合规，在国内是可以正常使用的。'
      },
      {
        q: 'GitHub Copilot 国内怎么用？',
        a: '你需要一个 GitHub 账号并激活对应的 Copilot 方案，然后在支持的 IDE（如 VS Code）中安装扩展、完成登录授权，即可在编写代码时获得 AI 辅助。'
      },
      {
        q: 'GitHub Copilot 怎么安装？',
        a: '以 VS Code 为例：在扩展商店搜索 "GitHub Copilot"，点击安装，右下角会提示登录 GitHub 账号，授权完成后即可启用。（注：当前版本已将核心与 Chat 整合）。'
      },
      {
        q: 'GitHub Copilot VS Code 怎么用？',
        a: '打开代码文件，输入代码或注释，Copilot 会显示灰色代码提示，按 Tab 键即可接受。你也可以打开左侧的 Chat 面板，用中文与它讨论代码。'
      },
      {
        q: 'GitHub Copilot 为什么没有代码提示？',
        a: '如果完全没有提示，请检查 GitHub 是否已登录、右下角 Copilot 图标是否正常、网络是否连接。如果是偶尔没有，可能是当前上下文 AI 认为不需要补全。'
      },
      {
        q: 'GitHub Copilot Chat 一直加载怎么办？',
        a: '首先检查 GitHub 服务状态，然后确认你的网络连接是否稳定。有时 IDE 扩展版本过旧也会导致此问题，建议更新扩展并重启编辑器。'
      },
      {
        q: 'GitHub Copilot Agent Mode 为什么没有？',
        a: 'Agent Mode 功能可能需要较新的 IDE 版本、特定的 Copilot Plan，或者如果使用的是公司账号，可能被管理员的 Organization Policies 禁用了。'
      },
      {
        q: 'GitHub Copilot 公司账号为什么功能不同？',
        a: '企业或组织的管理员可以在设置中限制 Copilot 的功能（如禁用公共代码匹配、限制使用的模型或关闭 Agent），所以公司账号和个人账号看到的功能可能会有差异。'
      },
      {
        q: 'GitHub Copilot 免费版够用吗？',
        a: 'Copilot Free 适合新手体验基础的 AI 编程辅助；如果你的开发频率较高、需要更多 AI Credits 或高级模型访问权，可以考虑 Pro、Pro+ 甚至 Max 方案。'
      },
      {
        q: 'GitHub Copilot 有免费版吗？',
        a: '有的。GitHub 目前提供 Copilot Free 计划。此外，通过 GitHub Education 认证的学生（Student）或特定的开源项目维护者，也可以免费获得 Copilot 权益。'
      },
      {
        q: 'GitHub Copilot 支持 JetBrains 吗？',
        a: '支持。GitHub Copilot 提供官方的 JetBrains 插件，兼容 IntelliJ IDEA、PyCharm、WebStorm 等主流 IDE，支持代码补全和 Chat 等核心功能。'
      },
      {
        q: 'GitHub Copilot 支持 Xcode 吗？',
        a: '支持。GitHub Copilot 已经为 Xcode 提供了扩展，允许 Apple 生态开发者在编写 Swift / Objective-C 时获得代码建议。'
      },
      {
        q: 'GitHub Copilot 可以选择模型吗？',
        a: '可以。Copilot 现已支持多种模型（如 OpenAI、Anthropic、Google 的模型等）。但具体可选的模型取决于你的 Copilot Plan、IDE 客户端以及组织管理员的策略。'
      },
      {
        q: 'GitHub Copilot 和 Cursor 有什么区别？',
        a: 'Copilot 作为插件能很好地融入你现有的 IDE（VS Code、JetBrains 等）及 GitHub 工作流；而 Cursor 是一款 AI-first 的独立编辑器，其 Agent 工作流与代码库理解在编辑器层面集成得更深。'
      },
      {
        q: 'GitHub Copilot 可以自动修改整个项目吗？',
        a: '通过 IDE Agent Mode 或云端的 Copilot Cloud Agent，它可以跨文件分析并生成修改计划，甚至创建 Pull Request，但所有的修改都必须经过你的人工 Code Review 才能合并。'
      }
    ],
    alternatives: ['cursor', 'codeium', 'tabnine'],
    domesticLayout: true,
    seoH1: 'GitHub Copilot 国内怎么用？安装、Agent 与常见问题',
    domesticIntro: '国内用户使用 GitHub Copilot 时，首先需要准备能够正常登录的 GitHub 账号，并在支持的编辑器或 GitHub 环境中启用 Copilot。现在 Copilot 已经不只有代码补全，还包括 Chat、Agent 和代码审查等工作流。如果出现登录失败、补全没有反应或 Agent 长时间加载，应分别检查 GitHub 账号、IDE 扩展、当前方案权限和网络环境。',
    domesticSymptoms: [
      {
        title: '完全没有代码建议 (没反应)',
        checks: ['GitHub 是否成功登录', '右下角 Copilot 状态图标是否异常', '当前账号 Copilot 权限是否到期', '当前文件类型是否受支持', '网络连接是否稳定']
      },
      {
        title: '偶尔有补全，偶尔没有',
        checks: ['这不是故障，是 AI 判断当前上下文无需补全', '尝试写明注释或函数结构', '提供更多上下文后重试']
      },
      {
        title: 'Copilot Chat 一直加载',
        checks: ['GitHub 官方服务状态 (Status)', '网络代理与连通性', 'IDE 与 Copilot 扩展是否需要更新', '选择的模型当前是否可用']
      },
      {
        title: 'Agent Mode 没有出现',
        checks: ['当前 IDE 是否支持该功能 (查看 Feature Matrix)', '当前 Copilot 方案是否有权限', '若是公司账号，是否被 Organization Policy 禁用', '功能 Rollout 进度']
      },
      {
        title: '公司账号部分功能不可用',
        checks: ['这通常是正常的 Organization Policies 控制', '管理员可能禁用了特定模型或第三方 Agent', '如需使用请联系管理员评估开启']
      },
      {
        title: 'github.com 能开，但 Copilot 报错',
        checks: ['网页访问与 AI API 请求的网络通道不同', '检查 IDE 内的网络/代理设置', '排查安全软件拦截']
      }
    ],
    domesticFunctions: [
      {
        name: '代码补全 (Code Completion)',
        desc: '在输入代码或注释时，自动提供单行或多行的灰色代码补全建议。',
        limitations: '高度依赖当前文件的上下文，无法脱离上下文凭空生成完美代码。'
      },
      {
        name: 'Copilot Chat',
        desc: '在 IDE 内的对话框，可以用中文要求解释代码、生成单元测试或排查 Bug。',
        limitations: '需要明确指出问题所在，回答质量取决于你提供的 prompt。'
      },
      {
        name: 'IDE Agent Mode',
        desc: '在编辑器内自动读取多文件上下文，规划并执行代码修改。',
        limitations: '支持程度因 IDE 而异，高级模型消耗更多 AI Credits。'
      },
      {
        name: 'Copilot Cloud Agent',
        desc: '在 GitHub 云端运行，可分析仓库、制定计划并直接创建 Pull Request。',
        limitations: '必须由人工进行严格的 Code Review 后才能 Merge。'
      },
      {
        name: 'Code Review & Pull Requests',
        desc: '辅助审查他人的 PR 变更，自动总结修改内容或发现潜在问题。',
        limitations: 'AI Review 不能替代人类对业务逻辑与安全性的最终审查。'
      }
    ],
    domesticPrompts: [
      {
        title: '理解陌生代码',
        desc: '接手新项目或查看复杂文件时使用。',
        text: '请先解释当前这个文件在项目里负责什么。 现在不要修改代码。 告诉我： 1. 主要功能 2. 依赖哪些文件 3. 哪些函数最重要 4. 如果我要修改这个功能，应该先看哪里'
      },
      {
        title: '排查 Bug',
        desc: '遇到报错，不知道从哪入手时。',
        text: '项目现在出现这个错误： 【粘贴报错】 请先不要重写整个功能。 请帮我： 1. 解释错误是什么意思 2. 找出最可能相关的文件 3. 给出最小修复方案 4. 告诉我修改后怎么验证'
      },
      {
        title: '增加新功能 (先做计划)',
        desc: '避免 AI 一上来就乱改。',
        text: '我要增加下面这个功能： 【填写需求】 现在先不要修改代码。 请先： 1. 找相关文件 2. 说明现有逻辑 3. 给出实施计划 4. 告诉我可能影响哪些地方 5. 等我确认后再修改'
      },
      {
        title: '限制修改范围',
        desc: '在执行修改时，明确规则防止破坏现有系统。',
        text: '请只修改和这个需求直接相关的文件。 要求： - 不升级依赖 - 不重新设计 UI - 不改变现有 API - 不删除其他功能 - 不修改无关文件 - 完成后列出所有改动和原因 需求： 【填写需求】'
      },
      {
        title: '修改后检查',
        desc: '完成代码修改后，让 Copilot 做快速自检。',
        text: '请检查刚刚完成的代码修改。 现在不要添加新功能。 请确认： 1. 是否有语法或类型错误 2. 是否有未使用代码 3. 是否破坏现有功能 4. 是否应该增加测试 5. 是否需要运行 lint 或 build 6. 是否修改到需求之外的文件'
      }
    ]
  },
{
    slug: 'midjourney',
    seoTitle: 'Midjourney国内怎么用？创作教程',
    seoDescription: '国内使用Midjourney时，如果遇到官网打不开、登录异常或无法生成图片，可从账号、订阅、浏览器与网络环境逐项排查，并了解网页版创作、提示词与常见问题。',
    seoKeywords: 'Midjourney国内怎么用,Midjourney教程,中文提示词,AI绘图',
    name: 'Midjourney',
    company: 'Midjourney',
    officialUrl: 'https://midjourney.com',
    category: 'image',
    categories: ['image', 'creative'],
    shortDescription: 'Midjourney 是 AI 图片与视频创作工具，目前可以直接在官方网站进行生成，也可以连接 Discord 使用。本页重点整理国内用户注册、订阅、网页创作、中文提示词以及常见访问问题。',
    description: 'Midjourney 是一款 AI 图片生成工具，现在可以直接在 midjourney.com 网页端进行创作，不再要求必须通过 Discord。用户通过 Google 或 Discord 账号登录后，订阅方案即可在 Create 页面输入 Prompt 生成图片。',
    tags: ['AI绘图', 'AI图片', '中文提示词', '图片生成'],
    featured: true,
    freePlan: '当前官网（midjourney.com）和 Discord 均无常规免费试用。niji·journey App 存在有限试用，具体以官方当前政策为准',
    pricingType: 'Basic $10/月 / Standard $30/月 / Pro $60/月 / Mega $120/月（年付约 8 折）',
    chineseSupport: '界面支持多语言，可直接使用中文描述生成图片',
    accountRequired: '需要 Midjourney 账号（通过 Google 或 Discord 登录）及有效订阅',
    platforms: ['网页端（midjourney.com）', 'Discord'],
    bestFor: ['设计师', '创作者', '营销人员', '摄影爱好者'],
    lastUpdated: '2026-09-07',
    overview: 'Midjourney 现在支持直接在官网 Create 页面输入 Prompt 生成图片，Discord 不再是唯一方式。新用户通过 Google 或 Discord 登录后需要先订阅方案才能开始生成。',
    features: [
      '网页端直接生成图片，不再要求必须使用 Discord',
      '支持中文描述，也可以使用英文和摄影术语',
      'Editor 功能允许对生成结果进行进一步修改',
      'Personalization 和 Style Reference 用于控制视觉风格',
      'Conversational Mode 支持自然语言对话调整 Prompt',
      'Stealth Mode（Pro/Mega）可以让作品不出现在公共画廊'
    ],
    useCases: [
      '产品摄影和商业图片生成',
      '风景、人物和概念艺术创作',
      '网站插图和社交媒体配图',
      '为设计稿和展示文稿生成参考图',
      '探索不同摄影风格和视觉构图'
    ],
    gettingStarted: [
      '访问 midjourney.com，使用 Google 或 Discord 账号登录。',
      '选择适合自己使用频率的订阅方案。',
      '进入 Create 页面，在 Imagine Bar 输入中文或英文描述，按 Enter 开始生成。'
    ],
    networkAndRegion: '实际可用性可能受到官方服务状态、账号和订阅状态、浏览器以及网络环境影响。官网打不开、登录失败和无法生成是三种不同的问题，应该分别排查。',
    advantages: [
      '网页端可以直接创作，操作直观',
      '支持中文描述，新手可以直接开始',
      'Editor 提供进一步修改能力',
      'Web 与 Discord 两种创作方式',
      'Personalization 和 Style Reference 用于风格控制'
    ],
    limitations: [
      '主要创作服务需要订阅，当前无常规免费试用',
      '默认社区环境具有公开属性（Stealth Mode 仅限 Pro/Mega）',
      'AI 生成结果存在随机性，需多次尝试',
      '生成内容需符合 Midjourney Community Guidelines',
      '功能和模型会持续更新'
    ],
    faq: [
      {
        q: 'Midjourney 国内可以用吗？',
        a: 'Midjourney 本身没有明确的地区封锁列表，但实际使用涉及多个前提：能访问 midjourney.com、Google 或 Discord 登录可用、可以完成订阅支付以及网络连接稳定。这几项需要分别确认。'
      },
      {
        q: 'Midjourney 国内怎么用？',
        a: '访问 midjourney.com，用 Google 或 Discord 账号登录，选择订阅方案后进入 Create 页面，在 Imagine Bar 输入中文或英文描述，按 Enter 生成图片。不需要在 Discord 服务器内操作。'
      },
      {
        q: 'Midjourney 一定要 Discord 吗？',
        a: '不是。现在可以直接在 midjourney.com 网站生成图片。Discord 仍然支持，适合习惯 Discord 工作流的用户，但不再是唯一方式。'
      },
      {
        q: 'Midjourney 可以直接在网页生成图片吗？',
        a: '可以。登录 midjourney.com 后进入 Create 页面，在 Imagine Bar 输入描述即可生成，无需打开 Discord。'
      },
      {
        q: 'Midjourney 怎么注册？',
        a: 'Midjourney 目前没有独立的用户名+密码注册体系。需要通过 Continue with Google 或 Continue with Discord 授权登录。如果过去通过 Discord 使用过 Midjourney，应优先使用原来的 Discord 登录，避免误建新账号。'
      },
      {
        q: 'Midjourney 可以用 Google 登录吗？',
        a: '可以。当前官方支持 Continue with Google 和 Continue with Discord 两种登录方式。'
      },
      {
        q: 'Midjourney 官网打不开怎么办？',
        a: '请先检查 Midjourney 官方服务状态，然后排查基础网络连接和 DNS，再尝试用无痕窗口访问。如果浏览器可以打开其他国际网站但 Midjourney 仍无法访问，可能与当前网络连接有关。'
      },
      {
        q: 'Midjourney 登录失败怎么办？',
        a: '分别检查 Google 或 Discord 账号当前状态是否正常、浏览器是否阻止了第三方弹窗、是否需要清理 Cookie。不要在登录失败时就断定账号被封。'
      },
      {
        q: 'Midjourney 为什么不能生成图片？',
        a: '最常见的原因是没有有效的订阅，或当前方案的 GPU 时间已用尽。也可能是 Prompt 触发了内容政策限制，或者官方服务当前存在问题。需要逐项排查，而不是直接归因于网络问题。'
      },
      {
        q: 'Midjourney 支持中文 Prompt 吗？',
        a: '支持。可以用中文直接描述想要的画面，Midjourney 能理解中文描述并生成图片。不过部分摄影术语（如 --ar 参数）仍使用官方英文格式。'
      },
      {
        q: 'Midjourney 有免费版吗？',
        a: '当前 midjourney.com 网站和 Discord 均无常规免费试用。niji·journey App 存在有限试用，具体以官方当前政策为准。开始生成前请确认已订阅。'
      },
      {
        q: 'Midjourney 怎么付费？',
        a: 'Midjourney 通过 Stripe 处理付款。可用的付款方式以结账页面实际显示为准，可能包括 Visa、Mastercard、Apple Pay 等。年付方案约有 20% 折扣，但通常需要一次性支付全年费用。'
      },
      {
        q: 'Midjourney 支持支付宝吗？',
        a: 'Midjourney 官方将 Alipay 列为部分地区可能支持的付款方式之一，但最终以你在 Stripe Checkout 页面实际看到的选项为准，不能保证所有地区均可使用。'
      },
      {
        q: 'Midjourney 哪个套餐适合新手？',
        a: '对于第一次使用的人，建议先根据自己的生成频率选择，不需要一开始购买最高方案。Basic 适合先体验；Standard 适合生成量较大、需要 Relax Mode 的用户；Pro 增加 Stealth Mode 和更高资源；Mega 适合更高使用量需求。'
      }
    ],
    alternatives: ['ideogram', 'suno'],
    domesticLayout: true,
    seoH1: 'Midjourney 国内怎么用？注册、创作与常见问题',
    domesticIntro: '国内用户开始使用 Midjourney 时，可以先访问官方网站，通过 Google 或 Discord 登录账号，再根据需要订阅方案。现在生成图片已经不要求必须在 Discord 内完成，midjourney.com 的 Create 页面可以直接输入 Prompt 并查看生成结果。如果官网、登录或生成过程出现异常，应分别检查账号、订阅、浏览器与当前网络连接。',
    domesticSymptoms: [
      {
        title: 'midjourney.com 完全打不开',
        checks: ['Midjourney 官方服务状态', '浏览器与 DNS', '基础网络连接', '当前网络连接稳定性']
      },
      {
        title: '网站能打开，但 Google / Discord 登录失败',
        checks: ['Google / Discord 账号当前状态', '浏览器 Cookie', '第三方弹窗是否被阻止', '登录授权是否成功', '当前网络连接']
      },
      {
        title: '登录成功，但无法生成图片',
        checks: ['是否拥有有效订阅', '当前方案 GPU 时间是否用尽', 'Prompt 是否触发内容政策', 'Midjourney 官方服务状态']
      },
      {
        title: 'Create 页面一直加载',
        checks: ['Midjourney 官方服务状态', '浏览器缓存', '扩展程序干扰', '网络连接稳定性', '换浏览器测试']
      },
      {
        title: 'Discord 可以用，但网站异常',
        checks: ['网站与 Discord 是两个独立界面', '分别确认网站服务状态', '账号是否在 Web 端正常连接']
      },
      {
        title: '网站能用，但 Discord 不工作',
        checks: ['Discord 账号是否已正确连接当前 Midjourney 账号', '不要重复购买新的订阅', '检查 Discord 服务状态']
      }
    ],
    domesticFunctions: [
      {
        name: '网页端图片生成（Create）',
        desc: '登录后在 Create 页面的 Imagine Bar 输入中文或英文描述，直接生成图片。',
        limitations: '需要有效订阅'
      },
      {
        name: 'Editor 编辑',
        desc: '对生成的图片进行进一步修改，包括裁剪、调整区域、Remix 等。',
        limitations: '目前仅网页版提供'
      },
      {
        name: 'Personalization 与 Style Reference',
        desc: '通过个人偏好或参考图控制生成图片的视觉风格。',
        limitations: '需要在网页版管理'
      },
      {
        name: 'Conversational Mode',
        desc: '用自然语言与 AI 对话，帮助逐步描述和调整 Prompt，支持非英语语言。',
        limitations: '目前仅网页版提供'
      },
      {
        name: 'Stealth Mode',
        desc: '让生成的图片不出现在 Midjourney 公共画廊，保护创作隐私。',
        limitations: '仅 Pro 和 Mega 方案提供'
      }
    ],
    domesticPrompts: [
      {
        title: '产品摄影',
        desc: '一杯冰咖啡放在木质桌面上，窗边柔和自然光，浅景深，干净商业摄影风格，背景简洁 --ar 4:5',
        text: '一杯冰咖啡放在木质桌面上，窗边柔和自然光，浅景深，干净商业摄影风格，背景简洁 --ar 4:5'
      },
      {
        title: '风景',
        desc: '清晨的山谷，被薄雾覆盖，阳光从云层之间照下来，自然真实的风景摄影，层次清楚 --ar 16:9',
        text: '清晨的山谷，被薄雾覆盖，阳光从云层之间照下来，自然真实的风景摄影，层次清楚 --ar 16:9'
      },
      {
        title: '人物',
        desc: '一位年轻男子站在咖啡馆窗边，柔和晨光，自然表情，真实皮肤质感，浅景深，人像摄影风格 --ar 2:3',
        text: '一位年轻男子站在咖啡馆窗边，柔和晨光，自然表情，真实皮肤质感，浅景深，人像摄影风格 --ar 2:3'
      },
      {
        title: '网站插图',
        desc: '现代 AI 工具网站的抽象背景插图，简洁几何元素，柔和光影，大面积留白，适合作为网页 Hero 背景 --ar 16:9',
        text: '现代 AI 工具网站的抽象背景插图，简洁几何元素，柔和光影，大面积留白，适合作为网页 Hero 背景 --ar 16:9'
      },
      {
        title: '食物',
        desc: '一碗热气腾腾的牛肉面，俯拍构图，自然餐厅灯光，真实食物摄影，汤面细节清楚 --ar 4:3',
        text: '一碗热气腾腾的牛肉面，俯拍构图，自然餐厅灯光，真实食物摄影，汤面细节清楚 --ar 4:3'
      }
    ]
  },
{
    "slug": "ideogram",
    "seoTitle": "Ideogram测评：海报与文字排版 - RunAI",
    "seoDescription": "还在为AI绘画无法准确生成文字而苦恼？RunAI带您探索Ideogram在文字排版与海报设计上的核心优势，完美解决字体融合难题。立即点击阅读设计排版实战指南！",
    "seoKeywords": "Ideogram教程,AI文字生成,海报设计排版,AI绘画",
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
    slug: 'runway',
    seoTitle: 'Runway国内怎么用？AI视频教程',
    seoDescription: '国内使用Runway时，如果遇到官网打不开、登录异常或视频生成失败，可从账号、浏览器、方案权限与网络环境排查，并了解文生视频、图生视频与常见创作方法。',
    seoKeywords: 'Runway国内怎么用,Runway教程,AI视频生成,图生视频,文生视频',
    name: 'Runway',
    company: 'Runway AI, Inc.',
    officialUrl: 'https://runwayml.com',
    category: 'video',
    categories: ['video', 'ai-art'],
    shortDescription: 'Runway 是一款专业的 AI 视频生成与编辑平台，支持文生视频、图生视频及复杂的视频编辑工作流。本页重点整理国内用户使用 Runway 时的登录、视频生成排查及常用的中文创作提示词。',
    description: 'Runway 是领先的 AI 视频创作平台。最新的视频模型支持高度逼真的 Text to Video (文生视频) 和 Image to Video (图生视频)，并提供多种高级视频编辑工具，适合视频创作者、电影制作人及设计师使用。',
    tags: ['AI视频', '文生视频', '图生视频', '视频编辑'],
    featured: true,
    freePlan: '提供免费试用额度，支持体验基础视频生成功能。',
    pricingType: 'Free / Standard / Pro / Unlimited',
    chineseSupport: '提示词主要推荐使用英文以获得最佳效果，但系统也可理解简单的中文。',
    accountRequired: '需要注册账号登录。',
    platforms: ['网页端', 'iOS App'],
    bestFor: ['视频创作者', '电影制作人', '设计师', '营销人员'],
    lastUpdated: '2026-09-08',
    overview: '国内用户使用 Runway 时，可以直接从官方网站进入视频创作界面。当前推荐使用最新的视频模型进行文生视频 (Text to Video) 或图生视频 (Image to Video)。如果遇到官网打不开、登录失败或视频生成一直加载等问题，应分别检查账号、当前方案的生成权限及网络环境。',
    features: [
      'Text to Video (文生视频)：通过文字描述生成高度逼真的视频',
      'Image to Video (图生视频)：将静态图片转化为动态视频',
      'Advanced Camera Controls：精细控制镜头运动与画面动态',
      'Video Editor：提供背景移除、视频修补等一站式视频编辑能力',
      'Workflows：将多个 AI 生成步骤连接成自动化视频创作流'
    ],
    useCases: [
      '为短片或广告生成高质量的空镜头素材',
      '将静态的艺术设定图、插画转换为动态视频',
      '快速移除视频背景或进行画面内容替换',
      '结合 Midjourney 生成的图像制作完整的 AI 视频概念片'
    ],
    gettingStarted: [
      '打开 runwayml.com 并使用邮箱或 Google 账号登录。',
      '在 Dashboard 中选择 Text to Video 或 Image to Video 开始创作。',
      '如果是图生视频，上传图片后在 Prompt 框中描述希望发生的运动。'
    ],
    networkAndRegion: '视频生成需要稳定的连接传输大量数据，如果出现进度条卡死或网站完全无法加载，请检查当前网络代理及浏览器设置。',
    advantages: [
      '视频生成质量极高，动作自然，物理合理性强',
      '提供文生视频、图生视频等多种创作入口',
      '不仅有生成，还有专业的后期编辑工具',
      'Workflows 提升复杂创作的自动化效率'
    ],
    limitations: [
      '复杂提示词建议使用英文，中文理解仍可能存在偏差',
      '视频生成和编辑操作非常消耗 Credits',
      '高级控制功能和无限制生成需要较高级别的订阅方案',
      '网络连接不稳定时视频加载与预览较慢'
    ],
    faq: [
      {
        q: 'Runway 国内可以用吗？',
        a: '可以。只要网络能够稳定连接 Runway 的服务器，国内用户通过正规账号即可使用。'
      },
      {
        q: 'Runway 国内怎么用？',
        a: '在浏览器中打开 runwayml.com，注册账号后，在主界面选择文生视频或图生视频功能，即可开始生成。'
      },
      {
        q: 'Runway 官网打不开怎么办？',
        a: '如果网页完全打不开，通常是网络解析或连接问题。请检查 DNS 设置，并确保你的网络环境可以正常访问海外服务。'
      },
      {
        q: 'Runway 登录失败怎么办？',
        a: '请检查浏览器是否拦截了登录弹窗，或尝试清除 Cookie。如果使用 Google 等第三方登录，确认相关环境畅通。'
      },
      {
        q: 'Runway 视频生成一直加载？',
        a: '这可能是因为服务器拥挤或网络连接中断。如果在生成中途卡住很久，建议刷新页面或检查当前账号是否还有足够的 Credits。'
      },
      {
        q: 'Runway 图片上传后视频无法开始生成？',
        a: '图生视频时，确保上传的图片符合尺寸和格式要求。如果图片包含违规或敏感内容，系统也可能拒绝生成。'
      },
      {
        q: 'Runway 怎么让视频动起来？',
        a: '使用 Image to Video 功能时，不仅要上传图片，还要在提示词中描述“发生的运动”，如“镜头缓慢推进”、“人物轻微转头”，而不是只描述画面内容。'
      },
      {
        q: 'Runway 免费版够用吗？',
        a: '免费版提供基础试用额度，适合新手体验。如果你需要频繁生成高清长视频，建议升级到 Standard 或更高版本。'
      }
    ],
    alternatives: ['luma-dream-machine', 'pika', 'kling'],
    domesticLayout: true,
    seoH1: 'Runway 国内怎么用？AI 视频生成与常见问题',
    domesticIntro: '国内用户使用 Runway 时，可以直接从官方网站进入创作界面。当前推荐使用最新模型进行 Text to Video (文生视频) 或 Image to Video (图生视频)。如果遇到官网打不开、登录失败或视频生成一直加载等问题，应分别检查账号、当前方案的生成权限及网络环境。',
    domesticSymptoms: [
      {
        title: '官网完全打不开',
        checks: ['Runway 官方服务器状态', '浏览器缓存与 DNS 设置', '基础网络连接是否正常', '当前网络代理策略']
      },
      {
        title: '登录失败或报错',
        checks: ['是否使用了错误的授权账号', '浏览器隐私设置 / 广告拦截器', 'Google 账号登录的环境是否畅通']
      },
      {
        title: '生成视频一直加载 / 转圈',
        checks: ['检查账号当前可用 Credits', '当前模型是否正处于高峰期排队', '网络上传/下载稳定性']
      },
      {
        title: '图片上传成功，但无法生成',
        checks: ['图片格式和大小是否合规', '是否触发了敏感内容过滤机制', '当前选择的模型版本是否有特殊要求']
      },
      {
        title: '生成视频动作失控',
        checks: ['这不是网络问题，属于 AI 模型理解偏差', '提示词描述过于复杂矛盾', '尝试使用更具体的运动指令重试']
      }
    ],
    domesticFunctions: [
      {
        name: 'Text to Video (文生视频)',
        desc: '仅通过文字描述来生成视频。适合从零开始构建画面和运镜。',
        limitations: '需要精准的提示词来描述主体、环境、光影和摄像机运动。'
      },
      {
        name: 'Image to Video (图生视频)',
        desc: '上传一张静态图片，用提示词描述你希望它发生的运动变化。',
        limitations: '建议重点描述“运动”，避免重复描述图片中已有的静态元素。'
      },
      {
        name: 'Advanced Camera Controls',
        desc: '精细控制镜头推拉摇移（Pan/Zoom/Tilt 等）。',
        limitations: '高级功能可能受当前账号计划限制。'
      },
      {
        name: 'Video Editor & Workflows',
        desc: '提供背景移除、修补等视频编辑工具，以及连接多步骤的自动化工作流。',
        limitations: '处理过程消耗相应的生成额度。'
      }
    ],
    domesticPrompts: [
      {
        title: '文生视频：城市夜景 (镜头推进)',
        desc: '适合生成具有电影感的空镜头。',
        text: '夜晚的城市街道刚下过雨，路面反射霓虹灯，一辆出租车缓慢驶过镜头，电影感，自然镜头运动'
      },
      {
        title: '图生视频：人像微动 (上传图片后使用)',
        desc: '不要重新描述整张图，应说明希望发生什么运动。',
        text: '镜头缓慢向前推进，人物轻轻转头看向窗外，窗帘随着微风摆动，整体动作自然克制'
      },
      {
        title: '文生视频：产品展示 (微距镜头)',
        desc: '强调质感和光影的变化。',
        text: '微距镜头，一杯热咖啡放在木质桌面上，热气缓缓上升，早晨温暖的阳光从侧面照入，光影柔和变化'
      },
      {
        title: '文生视频：自然风景 (航拍视角)',
        desc: '大场景，慢动作。',
        text: '航拍视角，秋天的森林色彩斑斓，一条河流穿过其中，镜头缓慢向前上方平移，阳光穿透树叶，电影级画质'
      }
    ]
  },
{
    "slug": "canva-ai",
    "seoTitle": "Canva AI测评：一键在线设计排版 - RunAI",
    "seoDescription": "想要零基础快速搞定专业设计？RunAI深入解析Canva AI魔法工作室的核心功能，让一键生成演示文稿与社交媒体图片变得无比简单。点击获取零门槛在线设计指南！",
    "seoKeywords": "CanvaAI教程,魔法工作室,在线平面设计,一键生成演示",
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
    slug: 'gamma',
    seoTitle: 'Gamma国内怎么用？PPT生成与常见问题',
    seoDescription: '国内使用Gamma时，如果遇到官网打不开、登录异常或PPT生成失败，可从账号、浏览器与网络环境排查，并了解AI生成、大纲修改、Agent编辑与PPT导出方法。',
    seoKeywords: 'Gamma国内怎么用,Gamma教程,AI做PPT,Gamma中文',
    name: 'Gamma',
    company: 'Gamma',
    officialUrl: 'https://gamma.app',
    category: 'productivity',
    categories: ['productivity', 'design'],
    shortDescription: 'Gamma 是一款以 AI 辅助创建演示文稿、文档和网页的工具，可以从主题生成内容，也可以导入已有资料重新整理。本页重点介绍国内用户使用 Gamma 制作 PPT、登录、生成、修改与导出的常见方法。',
    description: 'Gamma 是一款基于 AI 的演示文稿（PPT）、文档和网页生成工具。用户可以输入一个主题让 AI 起草大纲并生成精美的幻灯片，也可以将现有的文本、Word、PowerPoint 导入并由 AI 重新排版。',
    tags: ['AI PPT', '演示文稿', '排版设计'],
    featured: true,
    freePlan: '提供免费版本（注册赠送初始 AI Credits），支持基础生成、PDF/PPTX 等格式导出。',
    pricingType: 'Free / Plus / Pro（支持月付/年付）',
    chineseSupport: '完全支持中文输入与中文内容生成。',
    accountRequired: '需要注册账号（支持 Google / 邮箱登录）。',
    platforms: ['网页端', 'iOS', 'Android'],
    bestFor: ['职场白领', '学生', '教师', '营销人员', '需要快速制作演示文稿的用户'],
    lastUpdated: '2026-09-07',
    overview: '国内用户使用 Gamma 时，可以直接从官方网站开始创建演示文稿，通过 Generate、Paste 或 Import 选择不同的内容来源。如果只有一个主题，可以先让 AI 生成大纲；如果已经有文章、PPT 或文档，则更适合导入后重新整理。如果官网打不开、登录异常或生成过程长期无响应，则需要分别检查官方状态、浏览器、账号与网络连接。',
    features: [
      'Generate：通过输入一句主题，AI 自动生成大纲和幻灯片内容',
      'Paste / Import：导入已有文本、Word 或 PowerPoint，交由 AI 重新设计布局',
      'Create with Agent：通过自然语言对话与 AI 协作起草、调整大纲和内容',
      '一键切换全局 Theme（主题），自动适配全篇排版与配色',
      '支持导出为 PDF、PPTX、PNG 等格式，或通过链接在线分享'
    ],
    useCases: [
      '快速制作工作汇报或商业计划书',
      '将长篇 Word 文档转化为易于演讲的幻灯片',
      '创建包含交互元素的网页或作品集',
      '利用 AI 重新设计旧版本的 PowerPoint 幻灯片',
      '与团队成员实时协作编辑演示文稿'
    ],
    gettingStarted: [
      '访问 gamma.app 并注册登录（推荐使用 Google 账号或常用邮箱）。',
      '点击新建，根据你的资料准备情况选择 Generate、Paste 或 Import。',
      '如果是 Generate，先让 AI 生成大纲，确认无误后再生成完整幻灯片。'
    ],
    networkAndRegion: 'Gamma 官方服务正常情况下国内可以直接访问。但如果遇到页面无法加载或 AI 生成一直转圈，建议先排查本地 DNS、浏览器扩展，并确认网络连接是否稳定。',
    advantages: [
      'Generate / Paste / Import 多种创建方式',
      'AI 可辅助大纲与页面整理',
      '可导入已有资料并继续人工编辑',
      '支持多种导出格式（包括 PPTX 和 PDF）',
      'Agent 提供进一步编辑和细调的工作流'
    ],
    limitations: [
      'AI 生成内容仍需要人工核对，尤其是数据和事实',
      'Import 不保证100%保留原 PPT 的设计与排版',
      '导出到 PPTX 后可能存在细微的字体或排版差异',
      '高级 AI 功能（如长文本处理）与额度受方案影响',
      'AI Credits、模型与功能会随产品更新持续调整'
    ],
    faq: [
      {
        q: 'Gamma 国内可以用吗？',
        a: 'Gamma 并没有严格的地区封锁。能否正常使用主要取决于你的网络是否能稳定访问其服务器。如果遇到问题，需要排查网络连接。'
      },
      {
        q: 'Gamma 国内怎么用？',
        a: '在浏览器中打开 gamma.app，注册账号后即可新建项目，选择 Generate（生成）、Paste（粘贴）或 Import（导入）来创建你的演示文稿。'
      },
      {
        q: 'Gamma 官网打不开怎么办？',
        a: '请先确认 Gamma 官方服务状态，然后检查网络连接、DNS，或者尝试使用无痕模式。如果一直无法加载，可能是当前网络环境限制。'
      },
      {
        q: 'Gamma 登录失败怎么办？',
        a: '如果使用 Google 授权登录，请确保网络环境支持 Google 服务；如果是邮箱登录，检查验证邮件是否被拦截或 Cookie 是否异常。通常不是账号被封禁。'
      },
      {
        q: 'Gamma 可以做 PPT 吗？',
        a: '可以。Gamma 是目前最主流的 AI 制作演示文稿的工具之一。你可以输入主题让它生成，或者导入现有文档让它排版。'
      },
      {
        q: 'Gamma 怎么用 AI 生成 PPT？',
        a: '新建时选择 Generate，输入你的主题，AI 会先生成一个大纲。你可以在此修改大纲，确认后 AI 就会自动为你生成完整的多页幻灯片。'
      },
      {
        q: 'Gamma 支持中文吗？',
        a: '支持。你可以用中文输入要求，Gamma 会生成中文内容，并且它的界面排版也能较好地适配中文字体。'
      },
      {
        q: 'Gamma 可以导入 PowerPoint 吗？',
        a: '可以。选择 Import，上传你的 PPTX 文件。Gamma 会提取其中的内容并用其自身的布局引擎重新排版，但注意它不会 100% 保持你原来的设计。'
      },
      {
        q: '导入 PPT 后原排版会保留吗？',
        a: '不会完全保留。Gamma 的 Import 主要是“导入内容并重新排版”，它会套用 Gamma 自己的布局和主题系统。如果需要原样不动，不建议导入 Gamma。'
      },
      {
        q: 'Gamma 可以导出 PPTX 吗？',
        a: '可以。目前官方支持将生成的演示文稿导出为 PPTX 格式，方便你继续在 PowerPoint 中修改。'
      },
      {
        q: 'Gamma 可以导出 Google Slides 吗？',
        a: 'Gamma 支持导出选项中包括 Google Slides（具体流程以当前界面为准，通常可能通过 PPTX 转换或直接集成）。'
      },
      {
        q: 'Gamma 免费版够用吗？',
        a: '注册赠送的 AI Credits 足以完成几次完整的演示文稿生成和导出。但如果你需要频繁生成、修改，或者需要移除 Gamma 的水印品牌，建议升级 Plus 或 Pro 方案。'
      },
      {
        q: 'Gamma Agent 是什么？',
        a: 'Gamma Agent 是高级的 AI 助手协作模式，允许你通过持续对话、上传多份参考资料，来与 AI 一起打磨大纲和生成内容，也可用于单页的精确修改。'
      },
      {
        q: 'Gamma 生成 PPT 一直失败怎么办？',
        a: '如果一直转圈，可能是当前账号的 AI credits 耗尽、Prompt 输入过长超出限制，或者是当前网络连接到 Gamma 服务器不稳定。'
      }
    ],
    alternatives: ['tome', 'presentations-ai'],
    domesticLayout: true,
    seoH1: 'Gamma 国内怎么用？AI 做 PPT 与常见问题',
    domesticIntro: '国内用户使用 Gamma 时，可以直接从官方网站开始创建演示文稿，通过 Generate、Paste 或 Import 选择不同的内容来源。如果只有一个主题，可以先让 AI 生成大纲；如果已经有文章、PPT 或文档，则更适合导入后重新整理。如果官网打不开、登录异常或生成过程长期无响应，则需要分别检查官方状态、浏览器、账号与网络连接。',
    domesticSymptoms: [
      {
        title: 'gamma.app 完全打不开',
        checks: ['Gamma 官方状态', '浏览器', 'DNS 设置', '基础网络', '当前网络连接是否正常']
      },
      {
        title: '网站能打开，但登录失败',
        checks: ['当前账号状态', '登录授权方式 (如 Google)', '浏览器 Cookie', '浏览器扩展拦截', '官方服务状态']
      },
      {
        title: '点击生成后一直转圈',
        checks: ['Gamma 官方状态', '当前账号 AI Credits/方案', 'Prompt 长度是否超限', '浏览器缓存', '网络稳定性']
      },
      {
        title: 'Import 失败',
        checks: ['文件格式是否支持', '文件大小是否超限', '尝试将其转换为 PPTX/DOCX', '尝试改用 Paste 直接粘贴文字']
      },
      {
        title: '可以生成，但 Agent 不能用',
        checks: ['当前账号方案是否支持', 'Workspace 权限', '该功能是否仍为受限开放', '产品更新说明']
      },
      {
        title: 'PPTX 导出后排版变了',
        checks: ['字体、布局渲染方式差异', '这不是 Bug，需在 PowerPoint 中手动微调', '请务必在正式使用前重新检查']
      }
    ],
    domesticFunctions: [
      {
        name: 'Generate (生成)',
        desc: '只有主题时使用。输入想法，AI 自动起草大纲并生成多页内容。',
        limitations: '内容完全由 AI 创作，需人工核对事实。'
      },
      {
        name: 'Paste (粘贴)',
        desc: '已有文本资料时使用。粘贴笔记、大纲或文章，让 Gamma 进行整理和视觉排版。',
        limitations: '适合已有较完整文字逻辑的场景。'
      },
      {
        name: 'Import (导入)',
        desc: '导入已有的 Word、PowerPoint 或网页。Gamma 会提取内容并重新排版。',
        limitations: '更接近“重新排版”而不是原样复制，原版式可能会变。'
      },
      {
        name: 'Create with Agent',
        desc: '进阶协作模式。提供多份资料，通过聊天与 Agent 持续讨论和修改大纲及内容。',
        limitations: '不同方案可用性和额度不同，以官方为准。'
      },
      {
        name: '导出 (Export)',
        desc: '支持导出为 PPTX、PDF、PNG 或 Google Slides。',
        limitations: '免费版导出可能有 Gamma 品牌标识。'
      }
    ],
    domesticPrompts: [
      {
        title: '从主题开始 (生成大纲)',
        desc: '我要制作一份关于“咖啡店新品推广计划”的演示文稿。 使用场景： 内部营销讨论。 目标读者： 门店负责人和员工。 页数： 控制在 8 页以内。 要求： - 风格简洁 - 每页只表达一个核心重点 - 不要虚构销售数据 - 先给我大纲 - 暂时不要生成完整页面',
        text: '我要制作一份关于“咖啡店新品推广计划”的演示文稿。 使用场景： 内部营销讨论。 目标读者： 门店负责人和员工。 页数： 控制在 8 页以内。 要求： - 风格简洁 - 每页只表达一个核心重点 - 不要虚构销售数据 - 先给我大纲 - 暂时不要生成完整页面'
      },
      {
        title: '调整大纲',
        desc: '这个大纲方向基本正确。 请继续调整： - 删除重复页面 - 每页只保留一个核心主题 - 总页数控制在 8 页以内 - 第 5 页重点突出产品卖点 - 最后一页给出明确下一步 现在只修改大纲，不要增加新的事实。',
        text: '这个大纲方向基本正确。 请继续调整： - 删除重复页面 - 每页只保留一个核心主题 - 总页数控制在 8 页以内 - 第 5 页重点突出产品卖点 - 最后一页给出明确下一步 现在只修改大纲，不要增加新的事实。'
      },
      {
        title: '正式生成 PPT',
        desc: '请根据下面的大纲制作演示文稿。 要求： - 每页只表达一个核心观点 - 正文控制在 3～5 个重点 - 不要使用大段文字 - 不要虚构销售数字 - 缺少数据的位置请标记“待补充真实数据” - 视觉保持简洁现代 大纲： 【粘贴大纲】',
        text: '请根据下面的大纲制作演示文稿。 要求： - 每页只表达一个核心观点 - 正文控制在 3～5 个重点 - 不要使用大段文字 - 不要虚构销售数字 - 缺少数据的位置请标记“待补充真实数据” - 视觉保持简洁现代 大纲： 【粘贴大纲】'
      },
      {
        title: '优化字数 (减少文字)',
        desc: '请只优化当前演示文稿的文字密度。 要求： - 不改变整体结构 - 每页保留一个核心结论 - 长段落改成 3～5 个重点 - 删除重复句子 - 不增加新的事实 - 不修改已经确认的数据',
        text: '请只优化当前演示文稿的文字密度。 要求： - 不改变整体结构 - 每页保留一个核心结论 - 长段落改成 3～5 个重点 - 删除重复句子 - 不增加新的事实 - 不修改已经确认的数据'
      },
      {
        title: 'Agent 单页修改',
        desc: '只修改当前这一页。 要求： - 保留原来的核心结论 - 将文字减少约三分之一 - 调整成更容易扫读的结构 - 不修改其他页面 - 不加入新的事实或数据',
        text: '只修改当前这一页。 要求： - 保留原来的核心结论 - 将文字减少约三分之一 - 调整成更容易扫读的结构 - 不修改其他页面 - 不加入新的事实或数据'
      },
      {
        title: '导出前检查',
        desc: '请对当前演示文稿做一次最终检查。 现在不要重新设计。 请检查： 1. 每页是否只有一个核心重点 2. 是否存在重复内容 3. 是否有过长段落 4. 是否出现未经提供的数据 5. 页面标题是否清楚 6. 图片是否和相关 7. 是否存在空白占位 8. 最后一页是否有明确下一步 先列出问题，不要直接修改。',
        text: '请对当前演示文稿做一次最终检查。 现在不要重新设计。 请检查： 1. 每页是否只有一个核心重点 2. 是否存在重复内容 3. 是否有过长段落 4. 是否出现未经提供的数据 5. 页面标题是否清楚 6. 图片是否和相关 7. 是否存在空白占位 8. 最后一页是否有明确下一步 先列出问题，不要直接修改。'
      }
    ]
  },
  {
    slug: 'suno',
    seoTitle: 'Suno国内怎么用？中文歌曲生成与常见问题',
    seoDescription: '国内使用Suno时，如果遇到官网打不开、登录异常或歌曲生成失败，可从账号、浏览器与网络环境排查，并了解中文歌词、Custom模式、歌曲修改、下载与商用权限。',
    seoKeywords: 'Suno国内怎么用,Suno中文歌曲,Suno打不开,AI音乐生成',
    name: 'Suno',
    company: 'Suno, Inc.',
    officialUrl: 'https://suno.com',
    category: 'audio',
    categories: ['audio', 'music'],
    shortDescription: 'Suno 是用于生成歌曲与音乐的 AI 工具，可以从一句描述开始，也可以自己填写歌词、风格和歌曲结构。本页重点整理国内用户使用 Suno 时的登录、中文歌曲生成、下载、商用权限与常见连接问题。',
    description: 'Suno 是一款功能强大的 AI 音乐生成工具。你可以使用 Simple Mode 一句话生成歌曲，或者在 Custom Mode 自己填写中文歌词、设定音乐风格和歌曲结构。目前支持 Web 网页端以及部分移动端应用。',
    tags: ['AI音乐', '歌曲生成', '中文歌词', '自定义创作'],
    featured: true,
    freePlan: '提供免费计划（附赠每日一定数量的生成 Credits），但免费方案的商用权限、下载规则与付费方案不同。',
    pricingType: 'Free / Pro / Premier',
    chineseSupport: '完全支持中文歌词填写和中文歌曲生成。',
    accountRequired: '必须登录账号（通常通过 Google, Apple, Microsoft, Discord 等 SSO 登录）。',
    platforms: ['网页端', 'iOS', 'Android (Limited Release)'],
    bestFor: ['音乐爱好者', '内容创作者', '视频剪辑师', '希望自己写词生成歌曲的用户'],
    lastUpdated: '2026-09-07',
    overview: '国内用户使用 Suno 时，可以直接从官方网站进入 Create 页面，通过 Simple Mode 从一句描述开始，也可以使用 Custom Mode 自己填写歌词、音乐风格和歌曲结构。Suno 的主要创作功能需要连接在线服务，因此官网打不开、登录失败、歌曲一直生成或下载失败应该分开排查，不要把所有问题都归结为同一个原因。',
    features: [
      'Simple Mode：一句话快速生成歌曲（词曲全包）',
      'Custom Mode：高度控制歌词、Style（流派/情绪）和 Advanced Options',
      '中文支持：直接填写中文歌词即可唱出，无需翻译',
      'Extend & Remaster：可以延长已有歌曲，或尝试重新处理',
      '下载功能：支持下载歌曲（2026-09-03 启用新的下载额度规则）'
    ],
    useCases: [
      '为短视频或 Vlog 生成背景音乐',
      '将自己写的诗歌或文字变成一首完整的中文歌',
      '生成纯音乐（Instrumental）用于播客或游戏',
      '送给朋友或家人的特定主题专属歌曲',
      '探索不同音乐风格（如将古风与电子结合）'
    ],
    gettingStarted: [
      '打开 suno.com/create 并登录（请务必记住使用的 SSO 方式，以免下次找不到历史歌曲）。',
      '选择 Simple Mode 或 Custom Mode。',
      '输入你的中文歌词或描述，调整风格后点击 Create，等待片刻即可试听。'
    ],
    networkAndRegion: '由于需要连接海外服务器生成音频，如果官网完全打不开或 Create 进度卡住，请检查 DNS、浏览器缓存以及网络环境。登录失败通常和授权被拦截或 Cookie 有关。',
    advantages: [
      '可以从文字描述生成完整歌曲',
      '支持自己输入歌词（Custom Mode 提供更多控制）',
      '支持进一步修改和扩展歌曲（Extend/Reuse）',
      '支持 Web 与移动端工作流',
      '适合快速尝试音乐创意'
    ],
    limitations: [
      'AI 生成结果有随机性，同一组提示词每次生成的旋律也不同',
      '中文发音偶尔可能不自然，需要人工检查',
      '生成 Credits 与 下载 Credits 分开计算',
      '免费方案生成的歌曲通常不能直接商用',
      '商业使用权利不等同于自动获得版权保护'
    ],
    faq: [
      {
        q: 'Suno 国内可以用吗？',
        a: 'Suno 没有严格封锁地区，只要你的网络连接能够稳定访问 suno.com 及其后端音频生成服务即可使用。'
      },
      {
        q: 'Suno 国内怎么用？',
        a: '打开 suno.com，使用 Google 等 SSO 登录后进入 Create 页面，选择 Simple 或 Custom 模式输入中文指令，即可开始生成歌曲。'
      },
      {
        q: 'Suno 官网打不开怎么办？',
        a: '先确认 Suno 官方服务状态，然后检查你的基础网络连接、DNS。如果依然无法打开，通常是当前网络节点无法连接其海外服务器。'
      },
      {
        q: 'Suno 登录失败怎么办？',
        a: 'Suno 主要依靠 Google、Discord 等 SSO 登录。如果登录失败，请检查浏览器是否拦截了第三方弹窗，或者当前网络是否支持该 SSO 供应商。务必使用自己最常用的账号，避免遗失历史记录。'
      },
      {
        q: 'Suno 支持中文歌曲吗？',
        a: '完全支持。不需要把指令翻译成英文，你可以在 Custom 模式中直接输入中文歌词，Suno 能直接用中文唱出来。'
      },
      {
        q: 'Suno Simple 和 Custom 有什么区别？',
        a: 'Simple Mode 适合新手，只需一句描述即可让 AI 全自动写词谱曲。Custom Mode 允许你自己输入确切的歌词、定义歌曲结构和精确的音乐风格（Style）。'
      },
      {
        q: 'Suno 为什么一直生成不出来？',
        a: '如果进度条一直转圈，可能是官方服务拥挤、你当天的 Credits 已经用完、或者你的网络连接断开了。刷新页面或换个网络试试。'
      },
      {
        q: 'Suno 歌曲怎么下载？',
        a: '生成完成后，点击歌曲旁边的菜单（...）选择 Download。注意：根据 2026-09-03 的新规，Suno 区分了生成 Credits 和下载额度。'
      },
      {
        q: 'Suno 免费版可以下载吗？',
        a: '免费版（Free）的下载权限取决于你的账号创建时间和当前的试用资格政策，有些新用户可能面临严格限制，具体以当前官方显示为准。'
      },
      {
        q: 'Suno 免费版可以商用吗？',
        a: '根据官方最新 Terms，Free 方案生成的歌曲主要用于个人非商业用途。不能将其用于盈利视频、商业项目或各大音乐平台发行。'
      },
      {
        q: 'Suno 付费歌曲一定有版权吗？',
        a: '商业使用权（Commercial Use Rights）不等于版权保护（Copyright Protection）。付费方案允许你商用，但该 AI 歌曲能否登记版权取决于你所在国家/地区的法律要求。'
      },
      {
        q: '自己写的歌词属于谁？',
        a: '如果你在 Custom Mode 输入的是自己原创的歌词，你始终拥有这部分歌词的版权，不因使用 Suno 发生改变。'
      },
      {
        q: 'Suno 可以在手机使用吗？',
        a: '可以，Suno 官方推出了 iOS 和 Android 应用（可能在部分地区标记为 Limited Release）。下载时请认准开发者为 Suno, Inc.。'
      },
      {
        q: 'Suno Pro 和 Premier 有什么区别？',
        a: '两者都支持商业使用权，主要区别在于每月获得的生成 Credits、歌曲下载额度（如 20 vs 60首）以及并发生成数量。'
      }
    ],
    alternatives: ['udio', 'suno'],
    domesticLayout: true,
    seoH1: 'Suno 国内怎么用？中文歌曲生成与常见问题',
    domesticIntro: '国内用户使用 Suno 时，可以直接从官方网站进入 Create 页面，通过 Simple Mode 从一句描述开始，也可以使用 Custom Mode 自己填写歌词、音乐风格和歌曲结构。Suno 的主要创作功能需要连接在线服务，因此官网打不开、登录失败、歌曲一直生成或下载失败应该分开排查，不要把所有问题都归结为同一个原因。',
    domesticSymptoms: [
      {
        title: 'suno.com 完全打不开',
        checks: ['Suno 官方服务器状态', '浏览器与 DNS', '基础网络', '当前网络连接是否正常']
      },
      {
        title: '网站能打开，但登录失败',
        checks: ['是否使用原来的登录方式', 'SSO 提供商 (Google/Discord) 账号状态', 'Cookie 异常', '浏览器拦截弹窗', '官方服务状态']
      },
      {
        title: '手机号收不到验证码',
        checks: ['检查地区代码', '检查号码正确性', '重新尝试', '如持续失败请改用 SSO 登录或参考官方 Support']
      },
      {
        title: '点击 Create 后一直生成',
        checks: ['Suno 官方服务状态', '当前剩余 Credits', '当前模型与功能可用性', 'Prompt 异常', '网络连接稳定性']
      },
      {
        title: '生成了，但歌曲和想要的不一样',
        checks: ['这不是网络问题', '尝试调整歌词格式', '减少 Style 中的冲突标签', '明确歌曲结构 (Verse/Chorus)', '一次只修改一个变量重试']
      },
      {
        title: '生成成功，但不能下载',
        checks: ['检查当前方案', '生成 Credits 不等于下载额度', '2026-09 最新下载额度规则', '歌曲是否符合下载资格']
      }
    ],
    domesticFunctions: [
      {
        name: 'Simple Mode',
        desc: '一句话自动生成歌词和音乐。适合没有特定歌词、只有一个创意想法的新手。',
        limitations: '无法精确控制每一段的歌词内容和结构。'
      },
      {
        name: 'Custom Mode',
        desc: '允许自己输入或粘贴完整歌词，定义详细的音乐风格 (Style) 和标题。',
        limitations: '需要了解基本的歌曲结构 (主歌/副歌) 和音乐术语才能发挥最好效果。'
      },
      {
        name: 'Instrumental',
        desc: '在 Custom 模式中开启，只生成纯音乐，不包含任何 AI 人声。',
        limitations: '如果输入了歌词，开启此选项后歌词将被忽略。'
      },
      {
        name: 'Extend',
        desc: '歌曲结尾太突然或想延长歌曲时，基于原歌曲某一时间点继续往后生成新段落。',
        limitations: '消耗额外的 Credits。'
      },
      {
        name: 'Reuse Prompt / Remaster',
        desc: '重复利用已有提示词，或者基于旧歌曲做新的音频处理与重制。',
        limitations: '不同功能消耗的额度以界面提示为准。'
      }
    ],
    domesticPrompts: [
      {
        title: 'Simple Mode 提示词',
        desc: '适合只有一个想法的新手，AI 会包办词曲。',
        text: '一首关于下班以后独自在城市散步的中文流行歌曲，情绪从疲惫慢慢变得放松，温暖的钢琴、柔和鼓点，中速节奏，适合夜晚听。'
      },
      {
        title: '先让 AI 写结构 (ChatGPT / Claude 辅助)',
        desc: '做自定义歌词前，先确定好情绪和结构。',
        text: '我想做一首中文歌曲。 主题： 一天工作结束后，一个人在夜晚城市散步，慢慢从疲惫变得放松。 情绪： 前半段略疲惫，副歌开始变得轻松温暖。 音乐方向： 现代中文流行，中速节奏，钢琴、柔和鼓点和少量电子氛围。 请先帮我设计歌曲结构。 暂时不要写完整歌词。'
      },
      {
        title: '根据结构写中文歌词 (辅助)',
        desc: '在刚才结构的基础上创作。',
        text: '根据刚才的歌曲结构，帮我写一版中文歌词草稿。 要求： - 使用自然中文 - 每句不要太长 - 主歌负责讲故事 - 副歌表达核心情绪 - 副歌需要一个容易记住的核心句 - 不模仿任何真实歌手 - 不引用任何现有歌曲歌词'
      },
      {
        title: '整理 Suno Style (风格描述)',
        desc: '将想法转化为 Suno 容易理解的 Style 标签。',
        text: '根据下面的歌曲主题，帮我整理一段适合填写到 Suno Styles 的描述。 主题： 下班后的城市散步。 希望： - 中文流行 - 中速 - 温暖但不过度悲伤 - 钢琴为主 - 柔和鼓点 - 少量电子氛围 - 自然男声 - 不模仿任何真实歌手 只输出音乐风格描述，不要写歌词。'
      },
      {
        title: '整理 Exclude (排除不需要的元素)',
        desc: '防止出现不符合情绪的曲风。',
        text: '这首歌希望保持轻松、温暖。 我不希望出现： - 重金属感 - 激烈电吉他 - 很重的鼓点 - 说唱段落 请只帮我整理成简短的 Exclude 内容。 不要重新修改整首歌的风格。'
      },
      {
        title: '修改副歌 (Reuse 辅助)',
        desc: '歌曲方向对，但副歌不够好时。',
        text: '这首歌整体方向已经正确。 现在只修改副歌。 要求： - 主歌完全不动 - 副歌更短 - 保留原来的核心意思 - 更容易记住和重复 - 不添加新的故事 - 不模仿现有歌曲'
      }
    ]
  },
{
    "slug": "replit",
    "seoTitle": "Replit测评：云端IDE与协作开发 - RunAI",
    "seoDescription": "想要在浏览器里直接编写和部署代码？RunAI带您体验Replit的云端IDE与AI代码补全能力，让协作开发变得触手可及。点击阅读云端开发环境配置与连通状态指南！",
    "seoKeywords": "Replit教程,云端IDE,协作开发平台,AI代码助手",
    "name": "Replit",
    "company": "Replit",
    "officialUrl": "https://replit.com",
    "category": "coding",
    "categories": [
      "coding"
    ],
    "shortDescription": "全能型云端协作开发平台，内置强大的 AI 辅助与自动化部署能力。",
    "description": "Replit 彻底打破了传统本地开发环境的限制，在浏览器中提供了一个集成的开发、协作和托管平台。结合其原生 AI 助手 Replit AI，它能让从写代码、调试到项目上线的过程缩短至几分钟。",
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
      "全栈开发者",
      "编程初学者",
      "独立黑客 (Indie Hackers)",
      "远程技术团队"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "不同于仅提供代码补全的本地编辑器，Replit 提供了开箱即用的云端算力和环境容器。用户无需配置复杂的本地开发环境（如 Node.js、Python 等），即可一键启动项目。最近推出的 Replit Agent 甚至能够根据自然语言需求，自动搭建完整的前后端项目架构并完成部署。",
    "features": [
      "云端容器开发：无需本地配置环境，支持所有主流语言。",
      "实时多人协作：类似 Google Docs 的多人在线代码编辑体验。",
      "Replit Agent：通过对话自动构建全栈应用并执行测试。",
      "一键托管与部署：开发完成后立即生成可访问的公网链接。"
    ],
    "useCases": [
      "开发者快速验证创意和搭建项目原型",
      "团队进行远程结对编程和代码审查",
      "初学者免环境配置快速学习编程",
      "直接部署静态网站或轻量级全栈应用"
    ],
    "gettingStarted": [
      "访问 Replit 官网，创建一个新的 Repl（项目容器），选择所需语言或框架。",
      "在编辑器右侧唤出 Replit AI，描述你想构建的功能，让它生成初始代码。",
      "点击顶部 Run 按钮实时预览，完成后点击 Deploy 一键发布。"
    ],
    "networkAndRegion": "该服务主要面向全球用户部署，国内用户在直接访问时可能会遇到加载缓慢、资源无法下载或注册受限等问题。建议保持良好的国际网络连通性。该服务的实际可用性可能受到网络环境或官方政策调整影响。",
    "advantages": [
      "消除了极高的环境配置门槛",
      "从开发到上线的全链路闭环",
      "极致的实时协作体验"
    ],
    "limitations": [
      "复杂重型项目可能受限于云端容器的性能",
      "高级 AI Agent 功能需订阅付费版",
      "网络环境极度依赖稳定性"
    ],
    "faq": [
      {
        "q": "Replit Agent 和 Cursor 有什么区别？",
        "a": "Cursor 偏向本地开发，需要您自己管理环境；Replit Agent 运行在云端，不仅能写代码，还能自动在云容器中安装依赖、运行服务器并处理报错。"
      },
      {
        "q": "免费版可以用来托管网站吗？",
        "a": "免费版可以运行项目，但一旦关闭浏览器页面，进程就会休眠。要保持应用 24 小时在线，需要购买 Always On 或相应的部署额度。"
      },
      {
        "q": "支持导入我在 GitHub 上的现有代码吗？",
        "a": "完全支持。您可以直接通过 GitHub URL 导入项目，Replit 会自动识别语言并尝试配置运行环境。"
      },
      {
        "q": "多人协作会产生代码冲突吗？",
        "a": "它的协作模式是实时的，您可以清楚地看到其他协作者的光标位置和输入内容，就像在线文档一样，极大地减少了传统的 Git 冲突。"
      }
    ],
    "alternatives": []
  },
  {
    "slug": "v0",
    "seoTitle": "v0进阶教程：前端代码一键自动生成 - RunAI",
    "seoDescription": "不知道如何把设计图快速变成前端代码？RunAI为您解析v0强大的UI生成能力，通过自然语言一键导出React与Tailwind组件。点击阅读前端开发自动化指南！",
    "seoKeywords": "v0教程,UI代码生成,前端开发自动化,React组件",
    "name": "v0",
    "company": "Vercel",
    "officialUrl": "https://v0.dev",
    "category": "coding",
    "categories": [
      "coding"
    ],
    "shortDescription": "Vercel 推出的生成式 UI 工具，用自然语言一键生成生产级 React/Tailwind 前端代码。",
    "description": "v0 是由 Vercel (Next.js 背后的公司) 开发的前端 AI 革命性产品。它专为构建 Web 界面而生，能够将简单的文本描述直接转化为美观、现代且基于 Shadcn UI 与 Tailwind CSS 的高品质 React 组件。",
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
      "前端开发者",
      "产品经理",
      "全栈工程师"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "对于前端开发者和设计师来说，v0 是一个极致的效率放大器。它不是生成无法维护的“面条代码”，而是生成结构清晰、直接可复制到真实项目中的组件代码。最新版的 v0 甚至支持复杂的交互逻辑、状态管理以及多页面的快速搭建。",
    "features": [
      "自然语言到 UI：精准理解设计需求并输出响应式界面。",
      "Shadcn UI 原生集成：生成的组件极具现代感且符合无障碍标准。",
      "迭代式修改：在生成的界面上圈选特定区域进行局部重新生成。",
      "一键导入项目：提供终端指令，直接将代码添加到 Next.js 项目中。"
    ],
    "useCases": [
      "独立开发者快速搭建产品后台管理系统 (Dashboard)",
      "产品经理无需设计师直接验证高保真交互原型",
      "前端工程师自动生成繁琐的表单与基础 UI 组件",
      "企业快速建立符合现代审美的前端资产库"
    ],
    "gettingStarted": [
      "进入 v0.dev，在对话框中描述你需要的前端界面（例如：'一个包含左侧导航和右侧数据统计图表的电商后台仪表盘'）。",
      "预览生成的界面，可选中不满意的部分单独输入指令进行微调。",
      "点击代码按钮，复制代码或使用 `npx v0 add` 指令直接拉取到本地项目中。"
    ],
    "networkAndRegion": "该服务主要面向全球用户部署，国内用户在直接访问时可能会遇到加载缓慢、资源无法下载或注册受限等问题。建议保持良好的国际网络连通性。该服务的实际可用性可能受到网络环境或官方政策调整影响。",
    "advantages": [
      "生成的代码质量极高，可直接用于生产环境",
      "生态契合度完美（Next.js / Tailwind / React）",
      "视觉审美在线，开箱即用"
    ],
    "limitations": [
      "强绑定 React 生态，对 Vue/Angular 开发者帮助有限",
      "生成极其复杂的业务逻辑时仍需人工介入调整",
      "免费计划生成次数有限，且代码默认公开"
    ],
    "faq": [
      {
        "q": "v0 生成的代码我可以商用吗？",
        "a": "可以。您拥有使用其生成的代码的完整权利，可以直接用于商业项目中。"
      },
      {
        "q": "它只能生成静态的 UI 吗？",
        "a": "不仅仅是静态 UI。它能生成包含基础交互状态（如点击切换、表单校验逻辑）的完整 React 组件。"
      },
      {
        "q": "我可以用它生成 Vue 或者普通 HTML/CSS 代码吗？",
        "a": "v0 主要针对 React (Next.js) + Tailwind 生态优化。虽然可以尝试让它输出普通 HTML，但这并非它的最强项，代码质量无法保证最佳。"
      },
      {
        "q": "生成的代码如果不符合我的设计系统怎么办？",
        "a": "它默认使用中性的现代风格。如果需要匹配您的品牌，您可以在项目本地自行调整 Tailwind 配置，或者在 prompt 中提供您的设计规范。"
      }
    ],
    "alternatives": []
  },
  {
    "slug": "bolt",
    "seoTitle": "Bolt深度测评：全栈Web应用构建方案 - RunAI",
    "seoDescription": "想要体验直接在浏览器中构建全栈应用？RunAI剖析Bolt的前后端一体化开发体验，让AI助您实时预览与无缝部署项目。点击获取深度全栈开发与国内网络连通指南！",
    "seoKeywords": "Bolt教程,全栈应用生成,Web开发助手,实时预览部署",
    "name": "Bolt",
    "company": "StackBlitz",
    "officialUrl": "https://bolt.new",
    "category": "coding",
    "categories": [
      "coding"
    ],
    "shortDescription": "StackBlitz 推出的浏览器端全栈应用生成器，实现极速构思、编码与部署。",
    "description": "Bolt.new 是一个开创性的 AI 全栈 Web 开发平台。基于 WebContainers 技术，它能够在浏览器内部运行完整的 Node.js 环境。只需输入一句话，Bolt 就能直接在浏览器中为您编写代码、安装依赖、启动本地服务器并提供实时预览。",
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
      "全栈开发者",
      "独立创业者",
      "黑客松参赛者"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "这是将 AI Agent 与云原生开发环境深度融合的代表作。不同于 v0 侧重于 UI 组件，Bolt 能处理后端的 API 逻辑、数据库连接（如 Supabase）以及路由配置。对于个人开发者，这意味着从一个灵感冒出到拥有一个可访问的真实 Web 应用，中间只隔着几句自然语言对话。",
    "features": [
      "全栈代码生成：不仅写前端，同时搞定 Node.js 后端逻辑与路由。",
      "WebContainer 驱动：真正的毫秒级启动环境，无需任何云服务器预热。",
      "AI 自动纠错：遇到编译或依赖报错，AI 会自动分析控制台日志并修复。",
      "无缝连接 Netlify：一键将应用部署上线，获得公开访问地址。"
    ],
    "useCases": [
      "极速构建包含用户认证与数据库交互的 MVP 验证产品",
      "参加黑客松 (Hackathon) 时在数小时内完成作品开发",
      "非技术创始人独立搭建基础业务工具",
      "快速测试不同的技术栈组合"
    ],
    "gettingStarted": [
      "打开 bolt.new，输入您的完整项目需求（例如：'使用 Remix 和 Tailwind 搭建一个支持用户发帖的社交平台'）。",
      "观察右侧终端，AI 将自动安装所有 npm 依赖并启动项目进程。",
      "在对话框中不断追加新需求来迭代项目，满意后点击右上角 Deploy 一键部署。"
    ],
    "networkAndRegion": "该服务主要面向全球用户部署，国内用户在直接访问时可能会遇到加载缓慢、资源无法下载或注册受限等问题。建议保持良好的国际网络连通性。该服务的实际可用性可能受到网络环境或官方政策调整影响。",
    "advantages": [
      "端到端的全栈开发体验，超越纯前端 UI 生成",
      "运行速度极快，浏览器即完整的操作系统",
      "自动处理报错的能力极大减轻了心智负担"
    ],
    "limitations": [
      "极度消耗 Token，处理中大型项目容易触碰上下文上限",
      "目前环境偏向 Node.js 生态，对其他语言栈支持一般",
      "过于依赖 AI 时容易产生难以调试的面条架构"
    ],
    "faq": [
      {
        "q": "Bolt 和 v0 有什么本质区别？",
        "a": "v0 是专精于生成 React UI 组件的'设计师'，而 Bolt 是能够搭建包含前端、后端和数据库的完整运行项目的'全栈工程师'。"
      },
      {
        "q": "关闭浏览器后，我的项目还在吗？",
        "a": "您的代码会被保存。您也可以随时连接 GitHub 将代码仓库同步下来，确保数据绝对安全。"
      },
      {
        "q": "它能连接真实的数据库吗？",
        "a": "可以。您可以让它集成 Supabase 或 Firebase 等 BaaS 平台，构建具有持久化数据存储的真实应用。"
      },
      {
        "q": "如果 AI 遇到了它解决不了的代码报错怎么办？",
        "a": "Bolt 提供了一个完全开放的 IDE 界面。您可以直接打开左侧的文件树，手动修改代码或修正配置文件，AI 会基于您修改后的结果继续工作。"
      }
    ],
    "alternatives": []
  },
  {
    "slug": "leonardo-ai",
    "seoTitle": "Leonardo AI教程：免费绘画模型 - RunAI",
    "seoDescription": "寻找功能全面且免费额度高的AI绘画工具？RunAI详细介绍Leonardo AI在游戏资产与艺术创作中的强大模型微调与生成能力。点击获取专属模型训练与设计指南！",
    "seoKeywords": "LeonardoAI,游戏资产生成,模型微调,免费AI绘画",
    "name": "Leonardo AI",
    "company": "Leonardo",
    "officialUrl": "https://leonardo.ai",
    "category": "image",
    "categories": [
      "image"
    ],
    "shortDescription": "专为游戏资产开发与创意视觉设计优化的全能 AI 图像平台。",
    "description": "Leonardo AI 是一款拥有极高自由度和控制力的图像生成平台。凭借其卓越的微调模型、丰富的图像控制工具以及友好的免费积分策略，它成为了众多设计师和游戏开发者替代 Midjourney 的首选。",
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
      "游戏美术开发者",
      "插画设计师",
      "电商视觉设计"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "与大多数“黑盒式”的 AI 绘画工具不同，Leonardo AI 提供了前所未有的可控性。平台不仅内置了数十种针对特定艺术风格（如像素画、3D 渲染、奇幻插画）训练的微调模型，还允许用户上传自己的数据集训练专属模型。其独特的 Canvas 画布编辑器更是让局部重绘和无缝拼接变得异常简单。",
    "features": [
      "海量微调模型库：提供动漫、写实、产品设计等海量预制风格模型。",
      "自有模型训练：仅需上传十几张图片即可训练专属的风格或角色模型。",
      "AI Canvas 画布：强大的专业级编辑面板，支持精准的局部修复与扩展。",
      "实时生成 (Realtime Gen)：一边手绘草图，AI 一边实时渲染出精美画作。"
    ],
    "useCases": [
      "游戏开发者批量生成角色原画、道具资产与无缝纹理贴图",
      "插画师训练特定画风的模型以保持绘本风格一致性",
      "电商卖家快速替换产品背景并生成场景渲染图",
      "通过草图实时生成概念艺术设计"
    ],
    "gettingStarted": [
      "访问 Leonardo.ai 注册账号，进入直观的 Web 工作台。",
      "在左侧选择 'Image Generation'，从模型列表中挑选一个适合的风格模型。",
      "输入 Prompt，调整尺寸和生成张数，点击生成。如需局部修改，可将图片导入 Canvas 进行精修。"
    ],
    "networkAndRegion": "该服务主要面向全球用户部署，国内用户在直接访问时可能会遇到加载缓慢、资源无法下载或注册受限等问题。建议保持良好的国际网络连通性。该服务的实际可用性可能受到网络环境或官方政策调整影响。",
    "advantages": [
      "每日提供充沛的免费代币，足够轻度使用",
      "无与伦比的风格控制力和专有模型生态",
      "自带网页 UI，无需依赖 Discord"
    ],
    "limitations": [
      "在某些写实光影的细节处理上，上限略逊于 Midjourney",
      "功能过于庞杂，新手的学习曲线较陡",
      "生成的图像在极高分辨率下的细腻度有待提升"
    ],
    "faq": [
      {
        "q": "Leonardo 的免费代币规则是怎样的？",
        "a": "免费账户每日会重置 150 个代币，大约可以生成数十张普通分辨率的图片，对个人爱好者非常友好。"
      },
      {
        "q": "如何训练自己的专属模型？",
        "a": "在 'Training & Datasets' 选项中，上传 15-30 张您想要的风格或物体的图片，设置名称后提交训练，约半小时即可使用。"
      },
      {
        "q": "它生成的游戏素材可以直接用到商用游戏中吗？",
        "a": "可以。官方明确声明，即便是使用免费账户生成的资产，用户也拥有对其的商业使用权。"
      },
      {
        "q": "Realtime Canvas 是什么？",
        "a": "这是一个实时手绘转图像工具。当您在画布上简单勾勒线条或色块时，AI 能够以极低的延迟同步输出精美的成图，极大地启发设计灵感。"
      }
    ],
    "alternatives": []
  },
  {
    "slug": "adobe-firefly",
    "seoTitle": "Firefly指南：商用版权无忧设计 - RunAI",
    "seoDescription": "担心AI绘画作品存在版权争议？RunAI带您体验Adobe Firefly主打商用安全的生成式填充功能，完美融入PS生态。点击探索无忧商用设计指南！",
    "seoKeywords": "Firefly教程,AdobeAI,商用版权安全,生成式填充",
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
    "seoTitle": "Pika教程：3D动漫风格与视频运镜 - RunAI",
    "seoDescription": "不知道如何让静态图片瞬间动起来？RunAI为您演示Pika在3D动画与动漫风格视频生成上的独特优势，精准控制视频局部动态。立即点击获取动漫创作与视频运镜指南！",
    "seoKeywords": "Pika使用,AI视频动画,图片转视频,局部动态控制",
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
    "seoTitle": "Luma测评：超写实物理视频运镜 - RunAI",
    "seoDescription": "想体验生成超写实电影级画面的快感？RunAI深度评测Luma Dream Machine在物理规律与镜头运动上的优化。点击阅读深度超写实视频创作指南！",
    "seoKeywords": "Luma教程,写实视频生成,AI视频运镜,高质量物理规律",
    "name": "Luma Dream Machine",
    "company": "Luma AI",
    "officialUrl": "https://lumalabs.ai/dream-machine",
    "category": "video",
    "categories": [
      "video"
    ],
    "shortDescription": "优化物理规律与运镜限制的新一代超写实 AI 视频生成大模型。",
    "description": "Luma Dream Machine 标志着高质量 AI 视频生成的又一次飞跃。它专注于解决 AI 视频中常见的“物体变形”和“物理违和感”难题，能够利用文字或图片生成极具电影感的高清、连贯短视频。",
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
      "影视创作者",
      "广告导演",
      "视觉特效师"
    ],
    "lastUpdated": "2026-09-03",
    "overview": "由深耕 3D 技术的 Luma AI 团队打造，Dream Machine 对现实世界的物理空间、光影反射和相机的空间运动有着极深的理解。无论是快速移动的车辆、复杂的人物肢体动作，还是大范围的场景航拍运镜，它都能保持惊人的时空一致性。",
    "features": [
      "卓越的空间一致性：物体在大幅度运动和镜头切换中不易崩坏变形。",
      "真实的物理模拟：准确渲染水流、烟雾、反光以及重力效果。",
      "高级运镜控制：支持通过提示词精准控制推拉摇移等摄影机动作。",
      "图尾接帧能力：不仅可以提供首帧，还可以指定视频的最后一帧进行中间生成。"
    ],
    "useCases": [
      "影视从业者制作高逼真度的场景概念预演 (Pre-viz)",
      "广告团队利用静物图片生成充满动感的产品宣传片",
      "生成自然流畅的 B-roll 空镜头素材",
      "制作科幻或奇幻题材的电影级特效片段"
    ],
    "gettingStarted": [
      "访问 Luma Dream Machine 官网并使用 Google 账号登录。",
      "在文本框中输入包含主体、动作和摄影机视角的详细提示词，或上传一张作为参考的首帧图片。",
      "点击生成，等待约 1-2 分钟即可预览并下载高清 MP4 格式视频。"
    ],
    "networkAndRegion": "该服务主要面向全球用户部署，国内用户在直接访问时可能会遇到加载缓慢、资源无法下载或注册受限等问题。建议保持良好的国际网络连通性。该服务的实际可用性可能受到网络环境或官方政策调整影响。",
    "advantages": [
      "对物理现实规律的还原度在业内处于顶尖水平",
      "生成速度极快（通常两分钟内即可完成高画质渲染）",
      "免费开放试用门槛低"
    ],
    "limitations": [
      "文字包含在视频中时通常是一团乱码",
      "偶尔在生成极复杂的多人交互动作时仍会出现逻辑错误",
      "单次生成的长度目前受到严格限制（5秒）"
    ],
    "faq": [
      {
        "q": "Luma 和 Runway Gen-3 相比哪个更好？",
        "a": "两者处于同一梯队，但各有侧重。Luma 在物理连贯性和大动态运镜上极具优势，而 Gen-3 在整体画面的艺术质感和某些细微表情控制上表现卓越。"
      },
      {
        "q": "如何指定视频的结尾？",
        "a": "您可以同时上传两张图片（一张勾选 First frame，一张勾选 Last frame），Luma 会自动在两张图之间生成丝滑过渡的动作视频。"
      },
      {
        "q": "生成的视频怎么消除水印？",
        "a": "免费层级生成的视频带有 Luma 水印，您需要升级到 Standard 或更高阶的付费订阅计划才能下载无水印版本用于商业项目。"
      },
      {
        "q": "提示词应该怎么写？",
        "a": "建议采用类似导演视角的写法，明确：主体特征 + 具体动作环境 + 相机机位（如：A cinematic drone shot panning over...）。"
      }
    ],
    "alternatives": []
  }
];
