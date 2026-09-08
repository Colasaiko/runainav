const fs = require('fs');
let c = fs.readFileSync('src/data/aiTools.ts', 'utf8');

// 3. Replit
c = c.replace(
  /'点击 "Create Repl"/,
  '\'点击 "Create App"'
);
c = c.replace(
  /'Free \/ Replit Core'/,
  "'Starter / Core / Pro / Enterprise'"
);
c = c.replace(
  /'零环境配置，打开浏览器即可开始写代码'/,
  "'云端提供开发环境，减少部分本地环境配置步骤。'"
);
c = c.replace(
  /'Replit Agent 将“写代码”升级为“做产品”，极大地降低了开发门槛'/,
  "'Agent 可以根据自然语言需求协助创建和修改应用。'"
);
c = c.replace(
  /'自带托管与部署，从写代码到上线无缝衔接'/,
  "'可以使用 Replit 的部署能力发布应用。'"
);
c = c.replace(
  /'网络代理是否拦截了动态生成的预览域名'/,
  "'网络是否拦截了动态生成的预览域名'"
);
c = c.replace(
  /如果项目一直处于 Booting 状态或预览打不开，请检查网络代理和 DNS 设置。/,
  "如果项目一直处于 Booting 状态或预览打不开，请检查当前网络连接、官方状态、项目依赖下载与 Preview 服务是否正常。"
);


// 4. Canva AI
c = c.replace(
  /Canva 的 AI 功能大多打包在 Magic Studio 中，你可以在制作 PPT、海报或视频时随时唤起它。/g,
  "Canva 的 AI 能力现在已经不仅是单个 Magic 功能，而是逐步融入设计、文档、演示、数据和互动内容工作流。"
);
c = c.replace(
  /'完全支持中文指令、中文排版与中文文案生成。'/,
  "'可以使用中文输入需求并生成中文内容；不同 AI 功能的效果仍可能有所差异。'"
);
c = c.replace(
  /'虽然 Canva 在国内有一定的访问通道，但使用包含最新海外大模型的 AI 功能时，常需依赖稳定的国际网络环境。如果出现 AI 菜单消失或生成一直加载，请检查网络代理。'/,
  "'如果页面或 AI 功能加载异常，可以检查 Canva 官方状态、账号权限、浏览器以及当前网络连接。'"
);
c = c.replace(
  /'通常是因为 DNS 污染或网络线路问题。请检查你的网络代理是否稳定，或尝试切换不同的网络节点。'/,
  "'通常是因为网络线路问题。如果页面或 AI 功能加载异常，可以检查 Canva 官方状态、账号权限、浏览器以及当前网络连接。'"
);
c = c.replace(
  /'检查代理节点稳定性'/,
  "'检查当前网络连接'"
);
c = c.replace(
  /'AI 与传统设计工具完美融合，修改门槛极低'/,
  "'AI 功能与 Canva 现有设计工作流集成。'"
);
c = c.replace(
  /\{[\s\n]*name:\s*'智能图像处理'[\s\S]*?\},/,
  `{
        name: '智能图像处理',
        desc: '提供背景移除、魔法擦除和魔法替换功能。',
        limitations: '背景颜色过于复杂时，边缘抠图可能不够干净。'
      },
      {
        name: 'Canva Code 2.0 & Connectors',
        desc: '用于生成可交互内容、简单功能或页面组件；Connectors 辅助集成外部工具和检索。',
        limitations: '功能可能受当前方案、账号或 rollout 影响。'
      },`
);


fs.writeFileSync('src/data/aiTools.ts', c);
console.log('Replit and Canva AI updated');
