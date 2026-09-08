const fs = require('fs');

let c = fs.readFileSync('src/data/aiTools.ts', 'utf8');

// Runway
c = c.replace(
  /seoTitle:\s*['"]Runway国内怎么用？AI视频教程['"]/,
  "seoTitle: 'Runway国内怎么用？AI视频生成教程 | RunAI'"
);

// Grok
c = c.replace(
  /seoTitle:\s*['"]Grok国内怎么用？使用方法与常见问题['"]/,
  "seoTitle: 'Grok国内怎么用？聊天搜索与常见问题 | RunAI'"
);

// Ideogram
c = c.replace(
  /seoTitle:\s*['"]Ideogram国内怎么用？绘图教程['"]/,
  "seoTitle: 'Ideogram国内怎么用？文字绘图教程 | RunAI'"
);

// GitHub Copilot (fixing to pass checker)
c = c.replace(
  /seoTitle:\s*['"]GitHub Copilot国内怎么用['"]/,
  "seoTitle: 'GitHub Copilot国内怎么用 | RunAI'"
);


// ------------------------------------------------------------------
// Runway specific fixes
// ------------------------------------------------------------------
c = c.replace(
  /'Free \/ Standard \/ Pro \/ Unlimited'/,
  "'Free / Standard / Pro / Max'"
);
// Make sure Unlimited is moved to note.
// I'll just check if the plan has Unlimited.
c = c.replace(
  /Gen-3 Alpha Turbo/g,
  "Gen-4.5"
);
c = c.replace(
  /Gen-3 Alpha/g,
  "Gen-4.5"
);


// ------------------------------------------------------------------
// Grok specific fixes
// ------------------------------------------------------------------
c = c.replace(
  /faq:\s*\[\s*\{\s*q:\s*'Grok 必须要 X 账号吗？',\s*a:\s*'不是，目前你依然需要一个 X 账号来进行授权登录，甚至许多功能会引导你回到 X。'/g,
  `faq: [\n      {\n        q: 'Grok 必须要 X 账号吗？',\n        a: '不是。Grok 可以通过 grok.com 独立使用，当前登录方式以官方页面实际提供为准，例如 Email、Google、Apple 或 X 等。X 账号主要用于连接 X 平台相关体验，不是使用 grok.com 的唯一前提。'`
);
c = c.replace(
  /platforms:\s*\['网页版 \(grok.com\)',\s*'iOS App',\s*'Android App',\s*'X 内置'\]/g,
  `platforms: ['grok.com 网页端', 'Grok iOS App', 'Grok Android App', 'X 内 Grok']`
);
c = c.replace(
  /'Free \/ SuperGrok \(独立订阅\) \/ X Premium \(X 平台内\)'/g,
  "'Free to start / SuperGrok'"
);


// ------------------------------------------------------------------
// Replit specific fixes
// ------------------------------------------------------------------
c = c.replace(
  /'Replit Agent：通过聊天驱动，自动理解需求、编写多文件代码并配置环境'/g,
  "'Replit Agent 4：通过聊天驱动，自动理解需求、编写多文件代码并配置环境'"
);
// Also update other Agent references to Agent 4 or Agent
// For overview:
c = c.replace(
  /通过最新的 Replit Agent，你可以用一句话直接创建包含前端、后端和数据库的 App。/g,
  "可以通过自然语言描述需求，让 Agent 协助创建和修改应用，包括前端、后端或数据相关功能。"
);
// Starter:
c = c.replace(
  /高级 AI 功能 \(如 Agent\) 与私有项目需订阅付费方案。/g,
  "Starter 可体验部分 Agent 能力；Core、Pro 等付费方案提供更高额度或更多高级能力，实际以当前 Pricing 为准。"
);


// ------------------------------------------------------------------
// Canva AI specific fixes
// ------------------------------------------------------------------
c = c.replace(
  /'Canva AI \(Magic Studio\) 将多种强大的生成式 AI 功能深度集成于 Canva 现有的设计工作流中。本页重点整理国内用户使用 Canva 时的登录排查、AI PPT 生成、图像创作及中文设计常见问题。'/g,
  "'Canva AI 已经融入 Canva 的设计、演示、文档、数据与互动内容工作流。本页重点整理国内用户使用 AI 设计、PPT、Canva Code 与常见功能异常时的排查方法。'"
);
c = c.replace(
  /'Canva 不再只是一个拖拽式设计工具，其内置的 Magic Studio 包含了一整套 AI 能力。无论你是要生成演示文稿 \(PPT\)、根据文字生成图片与视频，还是让 AI 帮你写文案，Canva AI 都能无缝融入你的设计过程。'/g,
  "'Canva 当前将生成式 AI 功能整合进设计、演示、文档、数据和互动内容等工作流，并提供 Canva Code、Connectors 等新能力。'"
);

// HTML Bug in FAQ
c = c.replace(
  /Gamma \(<a href="\/guides\/gamma" class="text-brand-600 hover:underline">查看 Gamma 指南<\/a>\) 则专注 AI-first 的网页与演示生成，工作流更纯粹、速度更快。/g,
  "Gamma 更偏 AI-first 的演示和内容工作流。想了解 Gamma，可查看本站 Gamma 指南。"
);
c = c.replace(
  /Canva 更偏向完整的图形设计平台，适合需要精细排版和丰富元素库的用户；/g,
  "Canva 更偏完整设计平台，"
);


// ------------------------------------------------------------------
// Ideogram specific fixes
// ------------------------------------------------------------------
c = c.replace(
  /'Free \/ Basic \/ Plus \/ Pro'/g,
  "'Free / Plus / Pro / Team / Enterprise (Basic 属于旧方案)'"
);
c = c.replace(
  /请务必用英文引号将文字包裹/g,
  "建议用引号标出需要生成的文字"
);


// ------------------------------------------------------------------
// Adobe Firefly specific fixes
// ------------------------------------------------------------------
c = c.replace(
  /'Adobe Firefly 旨在提供安全、可商用的 AI 生成能力。它不仅在独立的 Web 端提供文生图、生成式填充等功能，还被深度集成到 Photoshop、Illustrator 和 Premiere 等 Creative Cloud 旗舰软件中，并逐渐扩展到音频、视频及更多第三方模型的支持。'/g,
  "'Adobe Firefly 是 Adobe 的生成式 AI 创作平台，提供图像、视频及其他生成工具，并与部分 Creative Cloud 产品集成。'"
);
c = c.replace(
  /'与 Adobe 自家软件工作流无缝融合，设计师学习成本极低'/g,
  "'与 Photoshop、Illustrator、Premiere 等部分 Adobe 工作流集成。'"
);

fs.writeFileSync('src/data/aiTools.ts', c);
console.log('Final fixes applied!');
