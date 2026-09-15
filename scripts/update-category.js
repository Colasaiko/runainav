const fs = require('fs');
let c = fs.readFileSync('src/data/aiCategorySeo.ts', 'utf8');

c = c.replace(/china: \{[\s\S]*?\}\s*\]\n  \},/, `china: {
    filter: 'china',
    title: '国内AI工具推荐：国产AI工具箱与热门应用大全｜RunAI',
    description: 'RunAI整理国内热门AI工具与国产大模型，覆盖DeepSeek、豆包、Kimi、腾讯元宝和千问等聊天、搜索、办公、绘图与视频应用，帮助快速选择国内AI工具。',
    h1: '国内AI工具推荐：国产AI工具大全',
    intro: '2024年以来，国内的人工智能大模型迎来了爆发式增长。无论是处理长文档、本地化服务还是日常工作，国产AI工具箱都具备明显的优势。这里整理了主流的国内AI工具和国产AI应用，让你更方便地体验前沿技术。',
    quickRead: [
      '国产大模型：DeepSeek、Kimi、豆包等在中文语境和本地化上表现卓越。',
      '视频与图像：可灵AI、即梦AI等工具让你轻松实现创意。'
    ],
    howToChoose: [
      '本地化需求：如果你每天处理大量中文文档，国内AI具备明显优势。',
      '使用门槛：无需特殊网络环境，注册即用。'
    ],
    whoIsItFor: [
      '互联网及办公人群：提升日常工作效率。',
      '视频与设计创作者：使用国产AI工具快速生成素材。'
    ],
    faqs: [
      { q: '国内AI有哪些？', a: '目前非常热门的国内AI包括 DeepSeek、豆包（Doubao）、Kimi、腾讯元宝、通义千问等，它们在各类文本创作和数据处理中表现出色。' },
      { q: '国内AI工具哪个好用？', a: '取决于你的需求。如果需要超长文本处理，Kimi表现极佳；如果需要强大的推理和免费额度，DeepSeek是首选；豆包则在语音和生态互联上体验很好。' },
      { q: '国内有哪些免费的AI工具？', a: '当前国内AI厂商多数提供慷慨的免费版。例如 DeepSeek、豆包、Kimi 的基础服务均可免费使用，足以满足大部分人的日常需求。' },
      { q: '国产AI适合写作还是办公？', a: '两者都非常适合。国产AI在中文写作风格、公文排版以及接入飞书、钉钉等国内办公软件方面，通常比海外工具更加顺畅自然。' },
      { q: '国内AI和国外AI有什么区别？', a: '最大的区别在于网络环境和语境理解。国内AI可以直连且更懂中国国情与互联网梗，而国外AI在全球最新模型能力、编程辅助及英文文献上仍有一定优势。' }
    ]
  },`);

c = c.replace(/global: \{[\s\S]*?\s*\]\n  \}/, `global: {
    filter: 'global',
    title: '全球AI工具推荐：国外AI网站与海外AI工具大全｜RunAI',
    description: 'RunAI整理国外AI、海外AI与全球热门工具，覆盖ChatGPT、Claude、Gemini和Cursor等聊天、搜索、编程与绘图应用，并提供分类和使用指南。',
    h1: '国外AI工具推荐：海外与全球AI工具大全',
    intro: '本页面汇集了国外AI工具、海外AI平台与各大国外AI网站。如果你需要接触全球AI的顶尖生产力模型和最新技术，这里是寻找海外AI工具的绝佳起点。',
    quickRead: [
      '全能王者：ChatGPT、Claude 依然代表全球大模型最顶尖水平。',
      '设计与编程：Cursor 和 Midjourney 正在重塑全球创作者的工作流。'
    ],
    howToChoose: [
      '硬核技术需求：如果你从事软件开发或前沿科研，海外顶级模型是必选项。',
      '多模态体验：在原生多模态交互上，海外工具往往领先一步。'
    ],
    whoIsItFor: [
      '跨国外贸与科研人群：处理外语文件与本地化翻译。',
      '程序员与极客：需要前沿的AI编程工具与技术文档。'
    ],
    faqs: [
      { q: '国外AI有哪些？', a: '广为人知的国外AI包括 OpenAI 的 ChatGPT、Anthropic 的 Claude 以及 Google 的 Gemini。另外在垂直领域，还有 Cursor (编程) 和 Midjourney (图像) 等。' },
      { q: '国外AI网站有哪些？', a: '主流的国外AI网站如 chatgpt.com、claude.ai 和 perplexity.ai，都提供了网页端直接使用的入口。' },
      { q: '海外AI工具有哪些？', a: '除了大型对话模型外，海外AI工具还涵盖了诸如 Gamma（PPT生成）、Suno（音乐生成）等专业领域的应用。' },
      { q: '国外AI和国内AI有什么区别？', a: '国外AI在底层模型的参数量、英文资料库和前沿技术（如高级语音多模态）上通常保持领先；而国内AI在访问便利性和中文理解上更占优势。' },
      { q: '国外AI工具怎么选择？', a: '如果是综合任务，首选 ChatGPT；如果是长文案和代码，Claude 是绝佳选择；如果需要搜索并整合全球资讯，Perplexity 最好用。' },
      { q: 'ChatGPT、Claude和Gemini属于国外AI吗？', a: '是的，它们分别由美国的 OpenAI、Anthropic 和 Google 开发，是目前全球最具代表性的海外大模型。' }
    ]
  }`);

fs.writeFileSync('src/data/aiCategorySeo.ts', c);
