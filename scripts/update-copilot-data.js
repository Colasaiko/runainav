const fs = require('fs');
const path = 'src/data/aiTools.ts';
let c = fs.readFileSync(path, 'utf8');

const matchStart = c.match(/\{\s*['"]?slug['"]?:\s*['"]github-copilot['"]/);
const matchNext = c.match(/\{\s*['"]?slug['"]?:\s*['"]midjourney['"]/);

if (!matchStart || !matchNext) {
  console.log('Targets not found');
  process.exit(1);
}

const copilotObj = `  {
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
`;

c = c.substring(0, matchStart.index) + copilotObj + c.substring(matchNext.index);
fs.writeFileSync(path, c);
console.log('Updated github-copilot in aiTools.ts');
