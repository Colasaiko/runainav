const fs = require('fs');

const replitData = `  {
    slug: 'replit',
    seoTitle: 'Replit国内怎么用？AI编程与常见问题',
    seoDescription: '国内使用Replit时，如果遇到登录异常、Agent无响应或项目运行失败，可从账号、工作区、方案权限与网络环境排查，并了解AI编程、部署与常见使用方法。',
    seoKeywords: 'Replit国内怎么用,Replit Agent,AI编程,部署,工作区',
    name: 'Replit',
    company: 'Replit',
    officialUrl: 'https://replit.com',
    category: 'code',
    categories: ['code', 'productivity'],
    shortDescription: 'Replit 是一个强大的云端 AI 开发环境。本页重点整理国内用户使用 Replit 时的登录、项目创建、Replit Agent 使用及应用部署的常见问题。',
    description: 'Replit 是一个基于云端的集成开发环境 (IDE)，它不仅提供开箱即用的运行环境，最新引入的 Replit Agent 更能根据你的自然语言描述从零构建、修改和部署完整的应用程序，非常适合快速原型开发与云端协作。',
    tags: ['AI编程', '云端开发', 'Replit Agent', '应用部署'],
    featured: true,
    freePlan: '提供免费版本，支持基础的工作区编辑与公开项目的运行。高级 AI 功能 (如 Agent) 与私有项目需订阅付费方案。',
    pricingType: 'Free / Replit Core',
    chineseSupport: 'Agent 和聊天支持中文提示词输入与中文对话。',
    accountRequired: '需要注册账号（支持 Google/GitHub 或邮箱登录）。',
    platforms: ['网页端', 'iOS App', 'Android App'],
    bestFor: ['全栈开发者', '初学者', '产品经理', '需要快速验证想法的创作者'],
    lastUpdated: '2026-09-08',
    overview: '国内用户使用 Replit 时，可以直接在浏览器中打开 replit.com 进行全栈开发。通过最新的 Replit Agent，你可以用一句话直接创建包含前端、后端和数据库的 App。如果遇到登录失败、Agent 长时间无响应或项目无法部署运行等问题，应分别检查当前账号状态、Core 订阅权限及网络连接状况。',
    features: [
      'Replit Agent：通过聊天驱动，自动理解需求、编写多文件代码并配置环境',
      'Cloud Workspace：开箱即用的云端 IDE，免去本地环境配置烦恼',
      'Deployments：一键将你的应用部署到生产环境，获得独立访问链接',
      'Database & Secrets：内置轻量级数据库支持与安全的环境变量管理',
      'Import GitHub：轻松导入已有的 GitHub 仓库进行云端修改'
    ],
    useCases: [
      '不懂复杂环境配置的用户快速从零搭建并上线一个全栈 Web 应用',
      '通过手机 App 随时随地修改和运行代码',
      '与团队成员或面试官在同一个云端项目中实时协作编程',
      '利用 Agent 快速生成一个包含数据库读写的内部工具原型'
    ],
    gettingStarted: [
      '访问 replit.com，使用 GitHub 或 Google 账号快速登录。',
      '点击 "Create Repl" 或直接唤起 Replit Agent 输入你的开发需求。',
      '等待 Agent 规划并生成代码，在右侧的 Preview 窗口中实时预览效果。'
    ],
    networkAndRegion: 'Replit 的工作区运行在海外云服务器上，项目依赖的下载和预览窗口的加载需要稳定的网络连接。如果项目一直处于 Booting 状态或预览打不开，请检查网络代理和 DNS 设置。',
    advantages: [
      '零环境配置，打开浏览器即可开始写代码',
      'Replit Agent 将“写代码”升级为“做产品”，极大地降低了开发门槛',
      '自带托管与部署，从写代码到上线无缝衔接',
      '支持从 GitHub 导入项目，云端修改更轻量'
    ],
    limitations: [
      '重度依赖网络环境，断网或网络极差时几乎无法工作',
      '核心的 Replit Agent 等高级 AI 能力需要订阅 Replit Core',
      '对于极度复杂的企业级大型微服务架构，依然不如本地 IDE (如 Cursor) 灵活',
      '免费账号的资源受到严格限制，项目可能会被休眠'
    ],
    faq: [
      {
        q: 'Replit 国内可以用吗？',
        a: '可以。只要网络能够正常访问 replit.com 并稳定连接其云端工作区 WebSocket，国内用户即可正常使用。'
      },
      {
        q: 'Replit 国内怎么用？',
        a: '打开浏览器进入 Replit，登录后可以直接创建工作区，或者使用 Replit Agent 通过中文描述你的应用需求，它会自动帮你写代码并运行。'
      },
      {
        q: 'Replit 官网打不开怎么办？',
        a: '这通常是网络连接或 DNS 问题。请确保你的网络能够访问海外开发服务，并检查浏览器是否使用了不稳定的代理节点。'
      },
      {
        q: 'Replit Agent 怎么用？',
        a: '在支持 Agent 的界面中，用自然语言告诉它你想做什么应用（例如：“帮我做一个带登录功能的待办事项网站”），它会自动分析、编写代码并配置数据库，最后给出预览。'
      },
      {
        q: 'Replit 项目一直启动失败 / Booting？',
        a: '可能是当前分配的云端实例负载过高，或是你的网络无法连接到工作区容器。可以尝试刷新页面，或在 Shell 中手动检查错误信息。'
      },
      {
        q: 'Replit 部署失败怎么办？',
        a: '请检查你的代码是否有未捕捉的运行时报错，以及是否正确配置了 Secrets (环境变量)。如果是在部署阶段卡住，也可查看 Deployments 面板的日志。'
      },
      {
        q: 'Replit 和 Cursor 有什么区别？',
        a: 'Replit 侧重于“云端开箱即用 + Agent 自动构建 + 一键部署”，更适合快速做产品和云端协作；Cursor 则是一个本地 AI 编辑器，适合处理已有的复杂本地代码库。'
      },
      {
        q: 'Replit 免费版够用吗？',
        a: '免费版适合学习基础编程或运行简单的公开项目。但如果要使用强大的 Replit Agent、开发私有项目或获得更高的云端算力，需要订阅 Replit Core。'
      }
    ],
    alternatives: ['cursor', 'github-copilot', 'bolt'],
    domesticLayout: true,
    seoH1: 'Replit 国内怎么用？Agent、编程与常见问题',
    domesticIntro: '国内用户使用 Replit 时，可以直接在浏览器中打开 replit.com 进行全栈开发。通过最新的 Replit Agent，你可以用一句话直接创建包含前端、后端和数据库的 App。如果遇到登录失败、Agent 长时间无响应或项目无法部署运行等问题，应分别检查当前账号状态、Core 订阅权限及网络连接状况。',
    domesticWorkflow: ['脑海产生想法', '创建 Replit App', '向 Agent 描述需求', 'Agent 制定计划并执行', '查看 Preview 效果', '检查自动修改的内容', '让 Agent 修 Bug', 'Deploy 上线部署'],
    domesticSymptoms: [
      {
        title: '官网打不开 / 登录失败',
        checks: ['Replit 官方服务状态', '网络连通性与 DNS', '是否使用正确的第三方账号授权 (Google/GitHub)', '清除浏览器缓存重试']
      },
      {
        title: 'Agent 一直 thinking / 无响应',
        checks: ['检查网络是否断开', '当前是否订阅了包含 Agent 权限的 Core 方案', '刷新浏览器页面']
      },
      {
        title: 'Preview (预览窗口) 打不开',
        checks: ['代码本身是否有报错 (查看 Console 终端)', '是否配置了正确的运行命令与端口', '网络代理是否拦截了动态生成的预览域名']
      },
      {
        title: 'Deploy (部署) 失败',
        checks: ['检查 Deployments 日志', '是否遗漏了必要的环境变量 (Secrets)', '构建过程是否超时或资源不足']
      },
      {
        title: '外部 API 请求失败',
        checks: ['这往往是因为云端容器被外部 API 的防火墙拦截', '检查该 API 是否限制了特定 IP 访问']
      }
    ],
    domesticFunctions: [
      {
        name: 'Replit Agent',
        desc: '输入一句话需求，自动规划架构、编写前后端代码、安装依赖并配置数据库。',
        limitations: '需订阅 Replit Core，生成极其复杂的系统时可能仍需人工干预。'
      },
      {
        name: 'Cloud Workspace',
        desc: '提供完整的文件树、代码编辑器、终端和预览视图，免去本地 Node/Python 环境配置。',
        limitations: '必须保持网络连接才能编辑和运行代码。'
      },
      {
        name: 'Deployments',
        desc: '代码写完后，一键将其部署为公开访问的生产环境 Web 应用。',
        limitations: '不同级别的部署可能产生额外的托管费用，请关注官方定价策略。'
      },
      {
        name: 'Secrets Management',
        desc: '安全管理 API Key 和密码，避免将敏感信息硬编码到代码中。',
        limitations: '导入 GitHub 项目时，务必记得手动配置相应的 Secrets。'
      }
    ],
    domesticPrompts: [
      {
        title: '从零创建网站',
        desc: '提供完整需求，让 Agent 搭建骨架。',
        text: '帮我创建一个简单的记账 Web 应用。要求：使用 React 和 Tailwind CSS。包含一个输入框记录金额和用途，下方用列表展示历史记录，并用图表显示支出比例。请连同数据库一起配置好。'
      },
      {
        title: '先分析，不要改代码',
        desc: '避免 Agent 误删已有功能。',
        text: '我要在这个记账应用中加入“多账户切换”功能。请先阅读项目结构，不要修改任何代码。先给我一份实施计划，告诉我你需要改动哪些文件，等我确认。'
      },
      {
        title: '排查报错 (修 Bug)',
        desc: '项目跑不起来时的快速求助。',
        text: '我在运行应用时，控制台出现了以下错误：【粘贴报错信息】。请帮我分析原因，并给出修复这段代码的建议。'
      },
      {
        title: '修改 UI (不动后端)',
        desc: '精细调整界面而不破坏业务逻辑。',
        text: '请帮我优化当前页面的设计。要求：只修改 CSS 类名和布局，将列表项改成卡片样式，增加悬浮阴影效果。不要修改任何后端 API 请求或状态管理逻辑。'
      },
      {
        title: '部署前检查',
        desc: '上线前做最后的安全确认。',
        text: '我准备部署这个项目了。请帮我检查整个代码库，确认是否所有敏感信息（如 API Key）都使用了环境变量读取，并确保没有任何遗漏的安装包依赖。'
      }
    ]
  },
`;

const path = 'src/data/aiTools.ts';
let c = fs.readFileSync(path, 'utf8');

const replitRegex = /\{\s*['"]?slug['"]?:\s*['"]replit['"][\s\S]*?(?=\{\s*['"]?slug['"]?:\s*['"]v0['"])/;
if (c.match(replitRegex)) {
  c = c.replace(replitRegex, replitData);
  if (!c.includes('domesticWorkflow?: string[];')) {
    c = c.replace('export type AITool = {', 'export type AITool = {\n  domesticWorkflow?: string[];');
  }
  fs.writeFileSync(path, c);
  console.log('Replit updated in aiTools.ts');
} else {
  console.log('Could not find replit block');
}
