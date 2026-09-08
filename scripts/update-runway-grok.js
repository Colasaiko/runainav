const fs = require('fs');

let c = fs.readFileSync('src/data/aiTools.ts', 'utf8');

// 1. Runway
c = c.replace(
  /'复杂提示词建议使用英文以获得最佳效果，但系统也可理解简单的中文。'/,
  "'可以从中文描述开始；如果涉及特定摄影、镜头或行业术语，也可以结合常见英文术语辅助表达。'"
);
c = c.replace(
  /'复杂提示词建议使用英文，中文理解仍可能存在偏差'/,
  "'可以从中文描述开始；如果涉及特定摄影、镜头或行业术语，也可以结合常见英文术语辅助表达。'"
);
c = c.replace(
  /'视频生成质量极高，动作自然，物理合理性强'/,
  "'支持文生视频与图生视频等工作流，生成结果仍会受到 Prompt、输入素材和模型随机性的影响。'"
);
c = c.replace(
  /视频生成需要稳定的连接传输大量数据，如果出现进度条卡死或网站完全无法加载，请检查当前网络代理及浏览器设置。/,
  "视频生成需要稳定的连接传输大量数据，如果出现进度条卡死或网站完全无法加载，请检查当前网络连接、浏览器与官方服务状态。"
);
c = c.replace(
  /'当前网络代理策略'/,
  "'官方服务状态与当前网络连接'"
);

// Add Gen-4.5, Agent, Apps, Workflows to description/features
c = c.replace(
  /'Runway 是领先的 AI 视频创作平台。最新的视频模型支持高度逼真的 Text to Video \(文生视频\) 和 Image to Video \(图生视频\)，并提供多种高级视频编辑工具，适合视频创作者、电影制作人及设计师使用。'/,
  "'截至 2026-09-08，Runway 当前视频生成工作流已进入 Gen-4.5 阶段。支持高度逼真的 Text to Video (文生视频) 和 Image to Video (图生视频)，并提供 Agent、Apps 以及 Workflows 等多种创作与视频编辑能力。'"
);

// We need to add Agent and Apps lightly to features
c = c.replace(
  /'Text to Video \(文生视频\)：通过文字描述生成高度逼真的视频'/,
  "'Text to Video (文生视频)：通过文字描述生成视频'\n    "
);
// Just inject Agent and Apps into domesticFunctions
c = c.replace(
  /\{[\s\n]*name:\s*'Advanced Camera Controls'[\s\S]*?\},/,
  `{
        name: 'Agent & Apps',
        desc: 'Agent 通过自然语言帮助选择工具或完成创作步骤；Apps 提供针对不同创作需求的预设 AI 工作流。',
        limitations: '部分高级应用可能需要特定订阅。'
      },`
);

c = c.replace(
  /\{[\s\n]*name:\s*'Video Editor & Workflows'[\s\S]*?\},/,
  `{
        name: 'Workflows',
        desc: '适合将多个生成、处理步骤连接起来，提升复杂创作的自动化效率。',
        limitations: '处理过程消耗相应的生成额度。'
      },`
);


// 2. Grok
c = c.replace(
  /'需要注册 X 账号或通过 grok.com 进行授权登录。'/,
  "'支持通过 grok.com 独立注册登录（如 Email）或使用 X 账号授权登录。'"
);
c = c.replace(
  /'Free \(Limited\) \/ Premium'/,
  "'Free / SuperGrok (独立订阅) / X Premium (X 平台内)'"
);
c = c.replace(
  /'提供独特的幽默对话风格或常规助手风格'/,
  "'提供幽默对话风格或常规助手风格'"
);
c = c.replace(
  /'由于 xAI 及 X 平台的服务范围限制，国内直接访问通常无法打开。请确保你的网络环境可以正常访问海外服务，并建议在遇到加载失败时优先排查当前代理节点的连通性。'/,
  "'国内用户实际使用时，需要同时考虑 Grok 当前服务范围、账号状态和网络连接情况。'"
);
c = c.replace(
  /'实时信息获取能力极强，直接连接 X 的数据源'/,
  "'支持搜索和整理当前信息，可结合公开网络内容及 X 平台信息进行回答'"
);
c = c.replace(
  /'提供幽默、无滤镜的对话风格'/,
  "'提供幽默的对话风格'"
);
c = c.replace(
  /'结合 X 平台的实时数据流，快速获取刚刚发生的新闻和讨论。'/,
  "'结合网络与 X 平台的实时数据流，快速获取新闻和讨论。来自社交平台的信息不一定已经核实，建议交叉验证。'"
);
c = c.replace(
  /'可以，这正是 Grok 的强项。它会实时检索 X 平台上的最新推文及全网内容，为你整理和解答最新发生的事件。'/,
  "'可以，它会实时检索 X 平台上的推文及全网内容，为你整理和解答最新发生的事件。请注意核对原始来源。'"
);
c = c.replace(
  /'当前网络代理连通性'/,
  "'当前网络连接'"
);
c = c.replace(
  /网页版 \(grok.com\)', 'X App \(iOS\/Android\)', 'X 网页端/,
  `网页版 (grok.com)', 'iOS App', 'Android App', 'X 内置`
);
c = c.replace(
  /以其独特的幽默感、实时获取 X \(原 Twitter\) 平台最新资讯的能力以及无限制的言论风格而闻名。/,
  `以其独特的幽默感、结合 X 平台的信息检索能力而闻名。`
);
c = c.replace(
  /，避免被 X 的信息流干扰。/,
  `。`
);

fs.writeFileSync('src/data/aiTools.ts', c);
console.log('Runway and Grok updated');
