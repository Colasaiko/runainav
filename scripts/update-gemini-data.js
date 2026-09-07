const fs = require('fs');
const path = 'src/data/aiTools.ts';
let c = fs.readFileSync(path, 'utf8');

// Find Gemini block boundaries
let matchStart = c.match(/\{\s*[\"']?slug[\"']?:\s*[\"']gemini[\"']/);
// Find the next tool slug after gemini
let matchNext = c.match(/\{\s*[\"']?slug[\"']?:\s*[\"']cursor[\"']/);

if (!matchStart || !matchNext) {
  console.log('matchStart:', matchStart?.index, 'matchNext:', matchNext?.index);
  process.exit(1);
}

const newGemini = `  {
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
  },`;

c = c.substring(0, matchStart.index) + newGemini + '\n' + c.substring(matchNext.index);
fs.writeFileSync(path, c);
console.log('Successfully updated Gemini data!');
