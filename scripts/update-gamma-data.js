const fs = require('fs');
const path = 'src/data/aiTools.ts';
let c = fs.readFileSync(path, 'utf8');

const matchStart = c.match(/\{\s*['"]?slug['"]?:\s*['"]gamma['"]/);
const matchNext = c.match(/\{\s*['"]?slug['"]?:\s*['"]suno['"]/);

if (!matchStart || !matchNext) {
  console.log('Targets not found');
  process.exit(1);
}

const gammaObj = `  {
    slug: 'gamma',
    seoTitle: 'Gamma国内怎么用？PPT生成与常见问题',
    seoDescription: '国内使用Gamma时，如果遇到官网打不开、登录异常或PPT生成失败，可从账号、浏览器与网络环境排查，并了解AI生成、大纲修改、Agent编辑与PPT导出方法。',
    seoKeywords: 'Gamma国内怎么用,Gamma教程,AI做PPT,Gamma中文',
    name: 'Gamma',
    company: 'Gamma',
    officialUrl: 'https://gamma.app',
    category: 'productivity',
    categories: ['productivity', 'design'],
    shortDescription: 'Gamma 是一款以 AI 辅助创建演示文稿、文档和网页的工具，可以从主题生成内容，也可以导入已有资料重新整理。本页重点介绍国内用户使用 Gamma 制作 PPT、登录、生成、修改与导出的常见方法。',
    description: 'Gamma 是一款基于 AI 的演示文稿（PPT）、文档和网页生成工具。用户可以输入一个主题让 AI 起草大纲并生成精美的幻灯片，也可以将现有的文本、Word、PowerPoint 导入并由 AI 重新排版。',
    tags: ['AI PPT', '演示文稿', '排版设计'],
    featured: true,
    freePlan: '提供免费版本（注册赠送初始 AI Credits），支持基础生成、PDF/PPTX 等格式导出。',
    pricingType: 'Free / Plus / Pro（支持月付/年付）',
    chineseSupport: '完全支持中文输入与中文内容生成。',
    accountRequired: '需要注册账号（支持 Google / 邮箱登录）。',
    platforms: ['网页端', 'iOS', 'Android'],
    bestFor: ['职场白领', '学生', '教师', '营销人员', '需要快速制作演示文稿的用户'],
    lastUpdated: '2026-09-07',
    overview: '国内用户使用 Gamma 时，可以直接从官方网站开始创建演示文稿，通过 Generate、Paste 或 Import 选择不同的内容来源。如果只有一个主题，可以先让 AI 生成大纲；如果已经有文章、PPT 或文档，则更适合导入后重新整理。如果官网打不开、登录异常或生成过程长期无响应，则需要分别检查官方状态、浏览器、账号与网络连接。',
    features: [
      'Generate：通过输入一句主题，AI 自动生成大纲和幻灯片内容',
      'Paste / Import：导入已有文本、Word 或 PowerPoint，交由 AI 重新设计布局',
      'Create with Agent：通过自然语言对话与 AI 协作起草、调整大纲和内容',
      '一键切换全局 Theme（主题），自动适配全篇排版与配色',
      '支持导出为 PDF、PPTX、PNG 等格式，或通过链接在线分享'
    ],
    useCases: [
      '快速制作工作汇报或商业计划书',
      '将长篇 Word 文档转化为易于演讲的幻灯片',
      '创建包含交互元素的网页或作品集',
      '利用 AI 重新设计旧版本的 PowerPoint 幻灯片',
      '与团队成员实时协作编辑演示文稿'
    ],
    gettingStarted: [
      '访问 gamma.app 并注册登录（推荐使用 Google 账号或常用邮箱）。',
      '点击新建，根据你的资料准备情况选择 Generate、Paste 或 Import。',
      '如果是 Generate，先让 AI 生成大纲，确认无误后再生成完整幻灯片。'
    ],
    networkAndRegion: 'Gamma 官方服务正常情况下国内可以直接访问。但如果遇到页面无法加载或 AI 生成一直转圈，建议先排查本地 DNS、浏览器扩展，并确认网络连接是否稳定。',
    advantages: [
      'Generate / Paste / Import 多种创建方式',
      'AI 可辅助大纲与页面整理',
      '可导入已有资料并继续人工编辑',
      '支持多种导出格式（包括 PPTX 和 PDF）',
      'Agent 提供进一步编辑和细调的工作流'
    ],
    limitations: [
      'AI 生成内容仍需要人工核对，尤其是数据和事实',
      'Import 不保证100%保留原 PPT 的设计与排版',
      '导出到 PPTX 后可能存在细微的字体或排版差异',
      '高级 AI 功能（如长文本处理）与额度受方案影响',
      'AI Credits、模型与功能会随产品更新持续调整'
    ],
    faq: [
      {
        q: 'Gamma 国内可以用吗？',
        a: 'Gamma 并没有严格的地区封锁。能否正常使用主要取决于你的网络是否能稳定访问其服务器。如果遇到问题，需要排查网络连接。'
      },
      {
        q: 'Gamma 国内怎么用？',
        a: '在浏览器中打开 gamma.app，注册账号后即可新建项目，选择 Generate（生成）、Paste（粘贴）或 Import（导入）来创建你的演示文稿。'
      },
      {
        q: 'Gamma 官网打不开怎么办？',
        a: '请先确认 Gamma 官方服务状态，然后检查网络连接、DNS，或者尝试使用无痕模式。如果一直无法加载，可能是当前网络环境限制。'
      },
      {
        q: 'Gamma 登录失败怎么办？',
        a: '如果使用 Google 授权登录，请确保网络环境支持 Google 服务；如果是邮箱登录，检查验证邮件是否被拦截或 Cookie 是否异常。通常不是账号被封禁。'
      },
      {
        q: 'Gamma 可以做 PPT 吗？',
        a: '可以。Gamma 是目前最主流的 AI 制作演示文稿的工具之一。你可以输入主题让它生成，或者导入现有文档让它排版。'
      },
      {
        q: 'Gamma 怎么用 AI 生成 PPT？',
        a: '新建时选择 Generate，输入你的主题，AI 会先生成一个大纲。你可以在此修改大纲，确认后 AI 就会自动为你生成完整的多页幻灯片。'
      },
      {
        q: 'Gamma 支持中文吗？',
        a: '支持。你可以用中文输入要求，Gamma 会生成中文内容，并且它的界面排版也能较好地适配中文字体。'
      },
      {
        q: 'Gamma 可以导入 PowerPoint 吗？',
        a: '可以。选择 Import，上传你的 PPTX 文件。Gamma 会提取其中的内容并用其自身的布局引擎重新排版，但注意它不会 100% 保持你原来的设计。'
      },
      {
        q: '导入 PPT 后原排版会保留吗？',
        a: '不会完全保留。Gamma 的 Import 主要是“导入内容并重新排版”，它会套用 Gamma 自己的布局和主题系统。如果需要原样不动，不建议导入 Gamma。'
      },
      {
        q: 'Gamma 可以导出 PPTX 吗？',
        a: '可以。目前官方支持将生成的演示文稿导出为 PPTX 格式，方便你继续在 PowerPoint 中修改。'
      },
      {
        q: 'Gamma 可以导出 Google Slides 吗？',
        a: 'Gamma 支持导出选项中包括 Google Slides（具体流程以当前界面为准，通常可能通过 PPTX 转换或直接集成）。'
      },
      {
        q: 'Gamma 免费版够用吗？',
        a: '注册赠送的 AI Credits 足以完成几次完整的演示文稿生成和导出。但如果你需要频繁生成、修改，或者需要移除 Gamma 的水印品牌，建议升级 Plus 或 Pro 方案。'
      },
      {
        q: 'Gamma Agent 是什么？',
        a: 'Gamma Agent 是高级的 AI 助手协作模式，允许你通过持续对话、上传多份参考资料，来与 AI 一起打磨大纲和生成内容，也可用于单页的精确修改。'
      },
      {
        q: 'Gamma 生成 PPT 一直失败怎么办？',
        a: '如果一直转圈，可能是当前账号的 AI credits 耗尽、Prompt 输入过长超出限制，或者是当前网络连接到 Gamma 服务器不稳定。'
      }
    ],
    alternatives: ['tome', 'presentations-ai'],
    domesticLayout: true,
    seoH1: 'Gamma 国内怎么用？AI 做 PPT 与常见问题',
    domesticIntro: '国内用户使用 Gamma 时，可以直接从官方网站开始创建演示文稿，通过 Generate、Paste 或 Import 选择不同的内容来源。如果只有一个主题，可以先让 AI 生成大纲；如果已经有文章、PPT 或文档，则更适合导入后重新整理。如果官网打不开、登录异常或生成过程长期无响应，则需要分别检查官方状态、浏览器、账号与网络连接。',
    domesticSymptoms: [
      {
        title: 'gamma.app 完全打不开',
        checks: ['Gamma 官方状态', '浏览器', 'DNS 设置', '基础网络', '当前网络连接是否正常']
      },
      {
        title: '网站能打开，但登录失败',
        checks: ['当前账号状态', '登录授权方式 (如 Google)', '浏览器 Cookie', '浏览器扩展拦截', '官方服务状态']
      },
      {
        title: '点击生成后一直转圈',
        checks: ['Gamma 官方状态', '当前账号 AI Credits/方案', 'Prompt 长度是否超限', '浏览器缓存', '网络稳定性']
      },
      {
        title: 'Import 失败',
        checks: ['文件格式是否支持', '文件大小是否超限', '尝试将其转换为 PPTX/DOCX', '尝试改用 Paste 直接粘贴文字']
      },
      {
        title: '可以生成，但 Agent 不能用',
        checks: ['当前账号方案是否支持', 'Workspace 权限', '该功能是否仍为受限开放', '产品更新说明']
      },
      {
        title: 'PPTX 导出后排版变了',
        checks: ['字体、布局渲染方式差异', '这不是 Bug，需在 PowerPoint 中手动微调', '请务必在正式使用前重新检查']
      }
    ],
    domesticFunctions: [
      {
        name: 'Generate (生成)',
        desc: '只有主题时使用。输入想法，AI 自动起草大纲并生成多页内容。',
        limitations: '内容完全由 AI 创作，需人工核对事实。'
      },
      {
        name: 'Paste (粘贴)',
        desc: '已有文本资料时使用。粘贴笔记、大纲或文章，让 Gamma 进行整理和视觉排版。',
        limitations: '适合已有较完整文字逻辑的场景。'
      },
      {
        name: 'Import (导入)',
        desc: '导入已有的 Word、PowerPoint 或网页。Gamma 会提取内容并重新排版。',
        limitations: '更接近“重新排版”而不是原样复制，原版式可能会变。'
      },
      {
        name: 'Create with Agent',
        desc: '进阶协作模式。提供多份资料，通过聊天与 Agent 持续讨论和修改大纲及内容。',
        limitations: '不同方案可用性和额度不同，以官方为准。'
      },
      {
        name: '导出 (Export)',
        desc: '支持导出为 PPTX、PDF、PNG 或 Google Slides。',
        limitations: '免费版导出可能有 Gamma 品牌标识。'
      }
    ],
    domesticPrompts: [
      {
        title: '从主题开始 (生成大纲)',
        desc: '我要制作一份关于“咖啡店新品推广计划”的演示文稿。 使用场景： 内部营销讨论。 目标读者： 门店负责人和员工。 页数： 控制在 8 页以内。 要求： - 风格简洁 - 每页只表达一个核心重点 - 不要虚构销售数据 - 先给我大纲 - 暂时不要生成完整页面',
        text: '我要制作一份关于“咖啡店新品推广计划”的演示文稿。 使用场景： 内部营销讨论。 目标读者： 门店负责人和员工。 页数： 控制在 8 页以内。 要求： - 风格简洁 - 每页只表达一个核心重点 - 不要虚构销售数据 - 先给我大纲 - 暂时不要生成完整页面'
      },
      {
        title: '调整大纲',
        desc: '这个大纲方向基本正确。 请继续调整： - 删除重复页面 - 每页只保留一个核心主题 - 总页数控制在 8 页以内 - 第 5 页重点突出产品卖点 - 最后一页给出明确下一步 现在只修改大纲，不要增加新的事实。',
        text: '这个大纲方向基本正确。 请继续调整： - 删除重复页面 - 每页只保留一个核心主题 - 总页数控制在 8 页以内 - 第 5 页重点突出产品卖点 - 最后一页给出明确下一步 现在只修改大纲，不要增加新的事实。'
      },
      {
        title: '正式生成 PPT',
        desc: '请根据下面的大纲制作演示文稿。 要求： - 每页只表达一个核心观点 - 正文控制在 3～5 个重点 - 不要使用大段文字 - 不要虚构销售数字 - 缺少数据的位置请标记“待补充真实数据” - 视觉保持简洁现代 大纲： 【粘贴大纲】',
        text: '请根据下面的大纲制作演示文稿。 要求： - 每页只表达一个核心观点 - 正文控制在 3～5 个重点 - 不要使用大段文字 - 不要虚构销售数字 - 缺少数据的位置请标记“待补充真实数据” - 视觉保持简洁现代 大纲： 【粘贴大纲】'
      },
      {
        title: '优化字数 (减少文字)',
        desc: '请只优化当前演示文稿的文字密度。 要求： - 不改变整体结构 - 每页保留一个核心结论 - 长段落改成 3～5 个重点 - 删除重复句子 - 不增加新的事实 - 不修改已经确认的数据',
        text: '请只优化当前演示文稿的文字密度。 要求： - 不改变整体结构 - 每页保留一个核心结论 - 长段落改成 3～5 个重点 - 删除重复句子 - 不增加新的事实 - 不修改已经确认的数据'
      },
      {
        title: 'Agent 单页修改',
        desc: '只修改当前这一页。 要求： - 保留原来的核心结论 - 将文字减少约三分之一 - 调整成更容易扫读的结构 - 不修改其他页面 - 不加入新的事实或数据',
        text: '只修改当前这一页。 要求： - 保留原来的核心结论 - 将文字减少约三分之一 - 调整成更容易扫读的结构 - 不修改其他页面 - 不加入新的事实或数据'
      },
      {
        title: '导出前检查',
        desc: '请对当前演示文稿做一次最终检查。 现在不要重新设计。 请检查： 1. 每页是否只有一个核心重点 2. 是否存在重复内容 3. 是否有过长段落 4. 是否出现未经提供的数据 5. 页面标题是否清楚 6. 图片是否和相关 7. 是否存在空白占位 8. 最后一页是否有明确下一步 先列出问题，不要直接修改。',
        text: '请对当前演示文稿做一次最终检查。 现在不要重新设计。 请检查： 1. 每页是否只有一个核心重点 2. 是否存在重复内容 3. 是否有过长段落 4. 是否出现未经提供的数据 5. 页面标题是否清楚 6. 图片是否和相关 7. 是否存在空白占位 8. 最后一页是否有明确下一步 先列出问题，不要直接修改。'
      }
    ]
  },
`;

c = c.substring(0, matchStart.index) + gammaObj + c.substring(matchNext.index);
fs.writeFileSync(path, c);
console.log('Updated Gamma in aiTools.ts');
