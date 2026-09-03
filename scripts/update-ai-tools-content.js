const fs = require('fs');
let content = fs.readFileSync('src/data/aiTools.ts', 'utf-8');

// The goal is to replace specific fields for the 20 tools.
// We can extract each tool using regex and replace its content.
// A better way is to parse the TS file using regex and eval, but since it has type annotations, we'll just extract the JSON-like array part.

const startIdx = content.indexOf('export const aiTools: AITool[] = [');
if (startIdx === -1) throw new Error("Could not find aiTools array");

const jsonPart = content.substring(startIdx + 'export const aiTools: AITool[] = '.length);
// The jsonPart is a valid JS array string except for a possible semicolon at the end.
const arrayStr = jsonPart.replace(/;\s*$/, '');
const tools = eval(arrayStr);

// Now we have the tools array. We will meticulously update each tool.
const updates = {
  chatgpt: {
    faq: [
      { q: "ChatGPT 的免费版和 Plus 版有什么核心区别？", a: "Plus 版拥有更高的请求限额、优先访问最新的 GPT-4 级模型（如 GPT-4o），并支持高级数据分析、DALL·E 绘画和自定义 GPTs。" },
      { q: "支持上传 PDF 或 Excel 文件进行分析吗？", a: "支持。您可以通过附件功能上传文件，ChatGPT 会自动读取内容并进行总结、数据提取或生成可视化图表。" },
      { q: "可以自定义它的回答风格吗？", a: "可以。通过 'Custom Instructions'（自定义指令）功能，您可以设定其身份背景和回答格式，使其每次都符合您的特定需求。" },
      { q: "国内使用时经常出现网络错误怎么办？", a: "建议使用原生 IP 节点，并开启全局代理。此外，清理浏览器缓存或使用无痕模式也可以缓解部分网络拦截问题。" }
    ],
    gettingStarted: [
      "访问 chatgpt.com，使用邮箱或 Google/Microsoft 账号完成注册。",
      "在对话框输入您的需求，明确指定背景、目标和输出格式（即 Prompt 工程）。",
      "利用对话框左侧的别针图标管理历史会话，或在设置中配置自定义指令。"
    ]
  },
  claude: {
    faq: [
      { q: "Claude 3 比 ChatGPT 强在哪里？", a: "Claude 在长文本处理（支持高达 200K token）、代码逻辑推理以及行文风格的自然度上表现极佳，且能通过 Artifacts 实时预览生成的代码或组件。" },
      { q: "什么是 Artifacts 功能？", a: "这是 Claude 的独家功能。当生成代码、SVG 图形、流程图或网页组件时，它会在右侧独立窗口中直接渲染出可视化结果，极大地提升了开发体验。" },
      { q: "Claude 账号极易被封锁是真的吗？", a: "是的，Anthropic 的风控非常严格。强烈建议注册和使用时保持节点纯净，不频繁更换 IP，并且不使用批量注册的虚拟号码。" },
      { q: "支持读取哪些类型的文件？", a: "支持 PDF、TXT、CSV 以及大部分代码文件。它可以一次性阅读整本电子书并进行精准的信息抽取。" }
    ],
    gettingStarted: [
      "准备稳定的原生网络节点，访问 claude.ai 注册（可能需要海外手机号验证）。",
      "在左下角设置中开启 'Artifacts' 功能以获得最佳编程与设计体验。",
      "直接拖拽文档或代码库到聊天框，让其进行快速分析或重构。"
    ]
  },
  gemini: {
    faq: [
      { q: "Gemini 和 Google Workspace 是如何联动的？", a: "它原生集成在 Google Docs、Gmail、Drive 等工具中。您可以直接让 Gemini 读取您云盘中的文档并生成回复或报告。" },
      { q: "Gemini 1.5 Pro 的 100万上下文能做什么？", a: "您可以一次性上传 1 小时的视频、11 小时的音频或超过 30,000 行的代码库，它能够跨模态地在海量信息中精准定位答案。" },
      { q: "为什么国内无法正常访问 Gemini？", a: "Google 在大部分亚洲地区（包括中国大陆和香港）未开放访问，必须使用美国、欧洲或日本等支持地区的节点才能正常使用。" },
      { q: "Gemini Advanced 是什么？", a: "它是包含在 Google One AI Premium 计划中的付费服务，提供最顶级的模型访问权限以及更大的云盘存储空间。" }
    ]
  },
  cursor: {
    faq: [
      { q: "Cursor 和 VS Code 是什么关系？", a: "Cursor 是基于 VS Code 源码 (VSCodium) fork 开发的，这意味着您可以无缝导入所有 VS Code 的插件、主题和快捷键，学习成本几乎为零。" },
      { q: "它的 Composer (Ctrl+I) 功能怎么用？", a: "Composer 允许您跨越多个文件生成代码。您只需描述需求，Cursor 会分析整个项目的上下文，并在多个相关文件中自动应用修改和差异对比。" },
      { q: "可以使用自己的 API Key 吗？", a: "可以。在设置中您可以填入自己的 OpenAI 或 Anthropic API Key 来代替 Cursor 的内置额度，适合重度开发者。" },
      { q: "代码隐私如何保障？", a: "它提供 'Privacy Mode'（隐私模式），开启后 Cursor 承诺不会将您的代码存储在服务器上用于未来的模型训练。" }
    ],
    gettingStarted: [
      "下载并安装 Cursor，在初次启动时选择导入原有的 VS Code 配置和插件。",
      "使用 Cmd/Ctrl + K 快捷键在当前文件内直接呼出 AI 生成或编辑代码。",
      "使用 Cmd/Ctrl + L 打开侧边栏聊天，通过 '@' 符号引入特定文件或文档作为上下文。"
    ]
  },
  midjourney: {
    faq: [
      { q: "Midjourney 为什么只能在 Discord 里用？", a: "目前官方已推出独立的 Alpha 网页端（针对生成过一定数量图片的用户开放），但 Discord 依然是其最大的社区和核心交互平台。" },
      { q: "什么是 --ar 16:9 这种后缀指令？", a: "这是 Midjourney 的参数语法。--ar 用于控制图片宽高比，--v 用于切换模型版本，--niji 用于切换二次元风格模型。" },
      { q: "生成的图片版权归谁？", a: "只要您是付费订阅用户，生成的图片您拥有完整的商业使用权。免费试用（如有）生成的图片仅限于非商业用途。" },
      { q: "如何保持角色或风格的一致性？", a: "可以使用 --cref (角色参考) 和 --sref (风格参考) 参数，附上参考图的链接，它能在多张图片中维持特定人物的长相或画面画风。" }
    ]
  },
  suno: {
    faq: [
      { q: "Suno 可以生成带人声的歌曲吗？", a: "完全可以。Suno 最强大的地方就是能够生成极其逼真的高音质人声，涵盖流行、摇滚、说唱、古典等各类曲风。" },
      { q: "我可以自己写歌词让它唱吗？", a: "可以，您可以在 'Custom'（自定义）模式下输入自己写的歌词，甚至用标签 (如 [Chorus], [Verse]) 标记副歌和主歌部分。" },
      { q: "免费账户生成的音乐可以发布到网易云或抖音吗？", a: "免费计划生成的音乐仅限非商业使用。如果要发布到公开平台变现，必须升级为 Pro 或 Premier 订阅计划以获取商业授权。" },
      { q: "生成的歌曲太短怎么办？", a: "Suno 支持 'Extend'（延长）功能。您可以在已生成歌曲的结尾处继续生成，从而拼接成一首 3-5 分钟的完整曲目。" }
    ]
  },
  replit: {
    shortDescription: "全能型云端协作开发平台，内置强大的 AI 辅助与自动化部署能力。",
    description: "Replit 彻底打破了传统本地开发环境的限制，在浏览器中提供了一个集成的开发、协作和托管平台。结合其原生 AI 助手 Replit AI，它能让从写代码、调试到项目上线的过程缩短至几分钟。",
    overview: "不同于仅提供代码补全的本地编辑器，Replit 提供了开箱即用的云端算力和环境容器。用户无需配置复杂的本地开发环境（如 Node.js、Python 等），即可一键启动项目。最近推出的 Replit Agent 甚至能够根据自然语言需求，自动搭建完整的前后端项目架构并完成部署。",
    features: [
      "云端容器开发：无需本地配置环境，支持所有主流语言。",
      "实时多人协作：类似 Google Docs 的多人在线代码编辑体验。",
      "Replit Agent：通过对话自动构建全栈应用并执行测试。",
      "一键托管与部署：开发完成后立即生成可访问的公网链接。"
    ],
    useCases: [
      "开发者快速验证创意和搭建项目原型",
      "团队进行远程结对编程和代码审查",
      "初学者免环境配置快速学习编程",
      "直接部署静态网站或轻量级全栈应用"
    ],
    bestFor: ["全栈开发者", "编程初学者", "独立黑客 (Indie Hackers)", "远程技术团队"],
    advantages: [
      "消除了极高的环境配置门槛",
      "从开发到上线的全链路闭环",
      "极致的实时协作体验"
    ],
    limitations: [
      "复杂重型项目可能受限于云端容器的性能",
      "高级 AI Agent 功能需订阅付费版",
      "网络环境极度依赖稳定性"
    ],
    gettingStarted: [
      "访问 Replit 官网，创建一个新的 Repl（项目容器），选择所需语言或框架。",
      "在编辑器右侧唤出 Replit AI，描述你想构建的功能，让它生成初始代码。",
      "点击顶部 Run 按钮实时预览，完成后点击 Deploy 一键发布。"
    ],
    faq: [
      { q: "Replit Agent 和 Cursor 有什么区别？", a: "Cursor 偏向本地开发，需要您自己管理环境；Replit Agent 运行在云端，不仅能写代码，还能自动在云容器中安装依赖、运行服务器并处理报错。" },
      { q: "免费版可以用来托管网站吗？", a: "免费版可以运行项目，但一旦关闭浏览器页面，进程就会休眠。要保持应用 24 小时在线，需要购买 Always On 或相应的部署额度。" },
      { q: "支持导入我在 GitHub 上的现有代码吗？", a: "完全支持。您可以直接通过 GitHub URL 导入项目，Replit 会自动识别语言并尝试配置运行环境。" },
      { q: "多人协作会产生代码冲突吗？", a: "它的协作模式是实时的，您可以清楚地看到其他协作者的光标位置和输入内容，就像在线文档一样，极大地减少了传统的 Git 冲突。" }
    ]
  },
  v0: {
    shortDescription: "Vercel 推出的生成式 UI 工具，用自然语言一键生成生产级 React/Tailwind 前端代码。",
    description: "v0 是由 Vercel (Next.js 背后的公司) 开发的前端 AI 革命性产品。它专为构建 Web 界面而生，能够将简单的文本描述直接转化为美观、现代且基于 Shadcn UI 与 Tailwind CSS 的高品质 React 组件。",
    overview: "对于前端开发者和设计师来说，v0 是一个极致的效率放大器。它不是生成无法维护的“面条代码”，而是生成结构清晰、直接可复制到真实项目中的组件代码。最新版的 v0 甚至支持复杂的交互逻辑、状态管理以及多页面的快速搭建。",
    features: [
      "自然语言到 UI：精准理解设计需求并输出响应式界面。",
      "Shadcn UI 原生集成：生成的组件极具现代感且符合无障碍标准。",
      "迭代式修改：在生成的界面上圈选特定区域进行局部重新生成。",
      "一键导入项目：提供终端指令，直接将代码添加到 Next.js 项目中。"
    ],
    useCases: [
      "独立开发者快速搭建产品后台管理系统 (Dashboard)",
      "产品经理无需设计师直接验证高保真交互原型",
      "前端工程师自动生成繁琐的表单与基础 UI 组件",
      "企业快速建立符合现代审美的前端资产库"
    ],
    bestFor: ["前端开发者", "产品经理", "全栈工程师"],
    advantages: [
      "生成的代码质量极高，可直接用于生产环境",
      "生态契合度完美（Next.js / Tailwind / React）",
      "视觉审美在线，开箱即用"
    ],
    limitations: [
      "强绑定 React 生态，对 Vue/Angular 开发者帮助有限",
      "生成极其复杂的业务逻辑时仍需人工介入调整",
      "免费计划生成次数有限，且代码默认公开"
    ],
    gettingStarted: [
      "进入 v0.dev，在对话框中描述你需要的前端界面（例如：'一个包含左侧导航和右侧数据统计图表的电商后台仪表盘'）。",
      "预览生成的界面，可选中不满意的部分单独输入指令进行微调。",
      "点击代码按钮，复制代码或使用 `npx v0 add` 指令直接拉取到本地项目中。"
    ],
    faq: [
      { q: "v0 生成的代码我可以商用吗？", a: "可以。您拥有使用其生成的代码的完整权利，可以直接用于商业项目中。" },
      { q: "它只能生成静态的 UI 吗？", a: "不仅仅是静态 UI。它能生成包含基础交互状态（如点击切换、表单校验逻辑）的完整 React 组件。" },
      { q: "我可以用它生成 Vue 或者普通 HTML/CSS 代码吗？", a: "v0 主要针对 React (Next.js) + Tailwind 生态优化。虽然可以尝试让它输出普通 HTML，但这并非它的最强项，代码质量无法保证最佳。" },
      { q: "生成的代码如果不符合我的设计系统怎么办？", a: "它默认使用中性的现代风格。如果需要匹配您的品牌，您可以在项目本地自行调整 Tailwind 配置，或者在 prompt 中提供您的设计规范。" }
    ]
  },
  bolt: {
    shortDescription: "StackBlitz 推出的浏览器端全栈应用生成器，实现极速构思、编码与部署。",
    description: "Bolt.new 是一个开创性的 AI 全栈 Web 开发平台。基于 WebContainers 技术，它能够在浏览器内部运行完整的 Node.js 环境。只需输入一句话，Bolt 就能直接在浏览器中为您编写代码、安装依赖、启动本地服务器并提供实时预览。",
    overview: "这是将 AI Agent 与云原生开发环境深度融合的代表作。不同于 v0 侧重于 UI 组件，Bolt 能处理后端的 API 逻辑、数据库连接（如 Supabase）以及路由配置。对于个人开发者，这意味着从一个灵感冒出到拥有一个可访问的真实 Web 应用，中间只隔着几句自然语言对话。",
    features: [
      "全栈代码生成：不仅写前端，同时搞定 Node.js 后端逻辑与路由。",
      "WebContainer 驱动：真正的毫秒级启动环境，无需任何云服务器预热。",
      "AI 自动纠错：遇到编译或依赖报错，AI 会自动分析控制台日志并修复。",
      "无缝连接 Netlify：一键将应用部署上线，获得公开访问地址。"
    ],
    useCases: [
      "极速构建包含用户认证与数据库交互的 MVP 验证产品",
      "参加黑客松 (Hackathon) 时在数小时内完成作品开发",
      "非技术创始人独立搭建基础业务工具",
      "快速测试不同的技术栈组合"
    ],
    bestFor: ["全栈开发者", "独立创业者", "黑客松参赛者"],
    advantages: [
      "端到端的全栈开发体验，超越纯前端 UI 生成",
      "运行速度极快，浏览器即完整的操作系统",
      "自动处理报错的能力极大减轻了心智负担"
    ],
    limitations: [
      "极度消耗 Token，处理中大型项目容易触碰上下文上限",
      "目前环境偏向 Node.js 生态，对其他语言栈支持一般",
      "过于依赖 AI 时容易产生难以调试的面条架构"
    ],
    gettingStarted: [
      "打开 bolt.new，输入您的完整项目需求（例如：'使用 Remix 和 Tailwind 搭建一个支持用户发帖的社交平台'）。",
      "观察右侧终端，AI 将自动安装所有 npm 依赖并启动项目进程。",
      "在对话框中不断追加新需求来迭代项目，满意后点击右上角 Deploy 一键部署。"
    ],
    faq: [
      { q: "Bolt 和 v0 有什么本质区别？", a: "v0 是专精于生成 React UI 组件的'设计师'，而 Bolt 是能够搭建包含前端、后端和数据库的完整运行项目的'全栈工程师'。" },
      { q: "关闭浏览器后，我的项目还在吗？", a: "您的代码会被保存。您也可以随时连接 GitHub 将代码仓库同步下来，确保数据绝对安全。" },
      { q: "它能连接真实的数据库吗？", a: "可以。您可以让它集成 Supabase 或 Firebase 等 BaaS 平台，构建具有持久化数据存储的真实应用。" },
      { q: "如果 AI 遇到了它解决不了的代码报错怎么办？", a: "Bolt 提供了一个完全开放的 IDE 界面。您可以直接打开左侧的文件树，手动修改代码或修正配置文件，AI 会基于您修改后的结果继续工作。" }
    ]
  },
  "leonardo-ai": {
    shortDescription: "专为游戏资产开发与创意视觉设计优化的全能 AI 图像平台。",
    description: "Leonardo AI 是一款拥有极高自由度和控制力的图像生成平台。凭借其卓越的微调模型、丰富的图像控制工具以及友好的免费积分策略，它成为了众多设计师和游戏开发者替代 Midjourney 的首选。",
    overview: "与大多数“黑盒式”的 AI 绘画工具不同，Leonardo AI 提供了前所未有的可控性。平台不仅内置了数十种针对特定艺术风格（如像素画、3D 渲染、奇幻插画）训练的微调模型，还允许用户上传自己的数据集训练专属模型。其独特的 Canvas 画布编辑器更是让局部重绘和无缝拼接变得异常简单。",
    features: [
      "海量微调模型库：提供动漫、写实、产品设计等海量预制风格模型。",
      "自有模型训练：仅需上传十几张图片即可训练专属的风格或角色模型。",
      "AI Canvas 画布：强大的专业级编辑面板，支持精准的局部修复与扩展。",
      "实时生成 (Realtime Gen)：一边手绘草图，AI 一边实时渲染出精美画作。"
    ],
    useCases: [
      "游戏开发者批量生成角色原画、道具资产与无缝纹理贴图",
      "插画师训练特定画风的模型以保持绘本风格一致性",
      "电商卖家快速替换产品背景并生成场景渲染图",
      "通过草图实时生成概念艺术设计"
    ],
    bestFor: ["游戏美术开发者", "插画设计师", "电商视觉设计"],
    advantages: [
      "每日提供充沛的免费代币，足够轻度使用",
      "无与伦比的风格控制力和专有模型生态",
      "自带网页 UI，无需依赖 Discord"
    ],
    limitations: [
      "在某些写实光影的细节处理上，上限略逊于 Midjourney",
      "功能过于庞杂，新手的学习曲线较陡",
      "生成的图像在极高分辨率下的细腻度有待提升"
    ],
    gettingStarted: [
      "访问 Leonardo.ai 注册账号，进入直观的 Web 工作台。",
      "在左侧选择 'Image Generation'，从模型列表中挑选一个适合的风格模型。",
      "输入 Prompt，调整尺寸和生成张数，点击生成。如需局部修改，可将图片导入 Canvas 进行精修。"
    ],
    faq: [
      { q: "Leonardo 的免费代币规则是怎样的？", a: "免费账户每日会重置 150 个代币，大约可以生成数十张普通分辨率的图片，对个人爱好者非常友好。" },
      { q: "如何训练自己的专属模型？", a: "在 'Training & Datasets' 选项中，上传 15-30 张您想要的风格或物体的图片，设置名称后提交训练，约半小时即可使用。" },
      { q: "它生成的游戏素材可以直接用到商用游戏中吗？", a: "可以。官方明确声明，即便是使用免费账户生成的资产，用户也拥有对其的商业使用权。" },
      { q: "Realtime Canvas 是什么？", a: "这是一个实时手绘转图像工具。当您在画布上简单勾勒线条或色块时，AI 能够以极低的延迟同步输出精美的成图，极大地启发设计灵感。" }
    ]
  },
  "luma-dream-machine": {
    shortDescription: "突破物理规律与运镜限制的新一代超写实 AI 视频生成大模型。",
    description: "Luma Dream Machine 标志着高质量 AI 视频生成的又一次飞跃。它专注于解决 AI 视频中常见的“物体变形”和“物理违和感”难题，能够利用文字或图片生成极具电影感的高清、连贯短视频。",
    overview: "由深耕 3D 技术的 Luma AI 团队打造，Dream Machine 对现实世界的物理空间、光影反射和相机的空间运动有着极深的理解。无论是快速移动的车辆、复杂的人物肢体动作，还是大范围的场景航拍运镜，它都能保持惊人的时空一致性。",
    features: [
      "卓越的空间一致性：物体在大幅度运动和镜头切换中不易崩坏变形。",
      "真实的物理模拟：准确渲染水流、烟雾、反光以及重力效果。",
      "高级运镜控制：支持通过提示词精准控制推拉摇移等摄影机动作。",
      "图尾接帧能力：不仅可以提供首帧，还可以指定视频的最后一帧进行中间生成。"
    ],
    useCases: [
      "影视从业者制作高逼真度的场景概念预演 (Pre-viz)",
      "广告团队利用静物图片生成充满动感的产品宣传片",
      "生成自然流畅的 B-roll 空镜头素材",
      "制作科幻或奇幻题材的电影级特效片段"
    ],
    bestFor: ["影视创作者", "广告导演", "视觉特效师"],
    advantages: [
      "对物理现实规律的还原度在业内处于顶尖水平",
      "生成速度极快（通常两分钟内即可完成高画质渲染）",
      "免费开放试用门槛低"
    ],
    limitations: [
      "文字包含在视频中时通常是一团乱码",
      "偶尔在生成极复杂的多人交互动作时仍会出现逻辑错误",
      "单次生成的长度目前受到严格限制（5秒）"
    ],
    gettingStarted: [
      "访问 Luma Dream Machine 官网并使用 Google 账号登录。",
      "在文本框中输入包含主体、动作和摄影机视角的详细提示词，或上传一张作为参考的首帧图片。",
      "点击生成，等待约 1-2 分钟即可预览并下载高清 MP4 格式视频。"
    ],
    faq: [
      { q: "Luma 和 Runway Gen-3 相比哪个更好？", a: "两者处于同一梯队，但各有侧重。Luma 在物理连贯性和大动态运镜上极具优势，而 Gen-3 在整体画面的艺术质感和某些细微表情控制上表现卓越。" },
      { q: "如何指定视频的结尾？", a: "您可以同时上传两张图片（一张勾选 First frame，一张勾选 Last frame），Luma 会自动在两张图之间生成丝滑过渡的动作视频。" },
      { q: "生成的视频怎么消除水印？", a: "免费层级生成的视频带有 Luma 水印，您需要升级到 Standard 或更高阶的付费订阅计划才能下载无水印版本用于商业项目。" },
      { q: "提示词应该怎么写？", a: "建议采用类似导演视角的写法，明确：主体特征 + 具体动作环境 + 相机机位（如：A cinematic drone shot panning over...）。" }
    ]
  }
};

for (const [slug, updateData] of Object.entries(updates)) {
  const toolIndex = tools.findIndex(t => t.slug === slug);
  if (toolIndex !== -1) {
    tools[toolIndex] = { ...tools[toolIndex], ...updateData };
  }
}

// Write the reconstructed JSON back to the file format.
// We must carefully reconstruct it so that the file exports the array.
// To make it formatted nicely, we use JSON.stringify(tools, null, 2).

const newContent = `export type FAQItem = {
  q: string;
  a: string;
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
};

export const aiTools: AITool[] = ${JSON.stringify(tools, null, 2)};
`;

fs.writeFileSync('src/data/aiTools.ts', newContent, 'utf-8');
console.log('Successfully rewrote templated pages in aiTools.ts');
