const fs = require('fs');
const path = 'src/data/aiTools.ts';
let c = fs.readFileSync(path, 'utf8');

// Find Cursor block boundaries
let matchStart = c.match(/\{\s*[\"']?slug[\"']?:\s*[\"']cursor[\"']/);
// Find the next tool slug after cursor
let matchNext = c.match(/\{\s*[\"']?slug[\"']?:\s*[\"']github-copilot[\"']/);

if (!matchStart || !matchNext) {
  console.log('matchStart:', matchStart?.index, 'matchNext:', matchNext?.index);
  // Try alternate
  const all = [...c.matchAll(/\{\s*[\"']?slug[\"']?:\s*[\"']([^'"]+)[\"']/g)];
  console.log('All slugs found:', all.map(m => m[1]));
  process.exit(1);
}

const newCursor = `  {
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
  },`;

c = c.substring(0, matchStart.index) + newCursor + '\n' + c.substring(matchNext.index);
fs.writeFileSync(path, c);
console.log('Successfully updated Cursor data!');
