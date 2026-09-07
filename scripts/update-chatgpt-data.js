const fs = require('fs');

const path = 'src/data/aiTools.ts';
let c = fs.readFileSync(path, 'utf8');

const newTypes = `export type FAQItem = {
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
};`;

// Find type definitions block and replace it
const startIdx = c.indexOf('export type FAQItem');
const endIdx = c.indexOf('export const aiTools');
c = c.substring(0, startIdx) + newTypes + '\n\n' + c.substring(endIdx);

const newChatGPT = `  {
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
  },`;

// Replace ChatGPT block
const gptStart = c.indexOf('{\n    "slug": "chatgpt"');
if (gptStart === -1) {
  const altGptStart = c.indexOf('{\n    slug: "chatgpt"');
  if (altGptStart !== -1) {
      console.log('Found alternative start');
  }
}
const claudeStart = c.indexOf('{\n    "slug": "claude"');

// Actually I can just match from { slug: "chatgpt" to { slug: "claude" 
// Wait, the data is JSON-like. I will find the bounds more reliably.
const matchStart = c.match(/{\s*"slug":\s*"chatgpt"/);
const matchNext = c.match(/{\s*"slug":\s*"claude"/);

if (matchStart && matchNext) {
  c = c.substring(0, matchStart.index) + newChatGPT + '\n' + c.substring(matchNext.index);
}

fs.writeFileSync(path, c);
console.log('Done!');
