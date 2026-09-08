const fs = require('fs');
const path = 'src/data/aiTools.ts';
let c = fs.readFileSync(path, 'utf8');

const canvaData = `  {
    slug: 'canva-ai',
    seoTitle: 'Canva AI国内怎么用？设计与常见问题',
    seoDescription: '国内使用Canva AI时，如果遇到官网打不开、登录异常或AI功能不可用，可从账号、浏览器、方案与网络环境排查，并了解图片、文案、设计与PPT等常见用法。',
    seoKeywords: 'Canva AI国内怎么用,Canva AI,PPT制作,图片生成,Magic Studio',
    name: 'Canva AI',
    company: 'Canva',
    officialUrl: 'https://www.canva.com',
    category: 'productivity',
    categories: ['productivity', 'ai-art'],
    shortDescription: 'Canva AI (Magic Studio) 将多种强大的生成式 AI 功能深度集成于 Canva 现有的设计工作流中。本页重点整理国内用户使用 Canva 时的登录排查、AI PPT 生成、图像创作及中文设计常见问题。',
    description: 'Canva 不再只是一个拖拽式设计工具，其内置的 Magic Studio 包含了一整套 AI 能力。无论你是要生成演示文稿 (PPT)、根据文字生成图片与视频，还是让 AI 帮你写文案，Canva AI 都能无缝融入你的设计过程。',
    tags: ['AI设计', 'PPT生成', '图像生成', '排版'],
    featured: false,
    freePlan: '提供免费使用，部分基础 AI 体验包含在内，但高级模型与更多的生成次数需要 Canva Pro。',
    pricingType: 'Free / Pro / Teams',
    chineseSupport: '完全支持中文指令、中文排版与中文文案生成。',
    accountRequired: '需要注册账号（支持多种登录方式）。',
    platforms: ['网页端', 'iOS', 'Android', 'Mac/Windows 客户端'],
    bestFor: ['社交媒体运营', '市场营销', '教育工作者', '非专业设计师'],
    lastUpdated: '2026-09-08',
    overview: '国内用户使用 Canva AI 时，可直接通过浏览器或客户端登录账号。Canva 的 AI 功能大多打包在 Magic Studio 中，你可以在制作 PPT、海报或视频时随时唤起它。如果遇到官网加载失败、功能不可见或导出异常等问题，应分别检查当前网络、账号所属团队的方案权限及积分额度。',
    features: [
      'Magic Design：根据你的文字需求自动生成演示文稿、海报或社交媒体图片',
      'AI Image & Video Generation：内置文本生成图像与视频能力，无需切换工具',
      'Magic Write：自动帮你撰写、扩写或修改文案语调',
      'Magic Edit / Magic Eraser：智能选中画面物体并替换，或一键擦除瑕疵'
    ],
    useCases: [
      '用几句话描述一个商业策划，让 AI 自动生成一套包含图片和排版的 PPT',
      '为下周的社交媒体活动快速批量生成配图和宣传文案',
      '消除照片背景中多余的路人，并把人物手中的杯子替换成一束花',
      '将一篇长篇产品文档让 Magic Write 浓缩为适合手机阅读的短句'
    ],
    gettingStarted: [
      '访问 Canva 官网并登录账号。',
      '点击新建设计或进入 Magic Studio 面板，选择你需要的功能（如 Magic Design）。',
      '在输入框中用中文描述你的需求，等待 AI 生成后，再使用常规的拖拽工具进行微调。'
    ],
    networkAndRegion: '虽然 Canva 在国内有一定的访问通道，但使用包含最新海外大模型的 AI 功能时，常需依赖稳定的国际网络环境。如果出现 AI 菜单消失或生成一直加载，请检查网络代理。',
    advantages: [
      'AI 与传统设计工具完美融合，修改门槛极低',
      '在一个平台上解决图片、文案、排版、视频四大需求',
      '对中文的支持和中文字体库非常完善',
      '跨平台同步极快，提供优秀的移动端体验'
    ],
    limitations: [
      'AI 生成的独立画质和细节，相比专用的 Midjourney 等可能仍有差距',
      '部分企业/团队账号可能被管理员关闭了 AI 功能权限',
      '高质量的设计模板与无限制的 AI 消耗需要订阅 Canva Pro'
    ],
    faq: [
      {
        q: 'Canva AI 国内可以用吗？',
        a: '可以。但请注意 Canva 分为国际版和国内版，部分最新的 AI 模型或功能可能只在国际版或特定网络环境下完全可用。'
      },
      {
        q: 'Canva AI 国内怎么用？',
        a: '注册并登录 Canva 后，在新建设计的左侧工具栏或顶部 Magic Studio 入口即可唤起各项 AI 功能，输入中文指令即可生成内容。'
      },
      {
        q: 'Canva AI 官网打不开怎么办？',
        a: '通常是因为 DNS 污染或网络线路问题。请检查你的网络代理是否稳定，或尝试切换不同的网络节点。'
      },
      {
        q: '为什么我的账号看不到 AI 功能？',
        a: '可能的原因有三个：1) 你的账号处于被管理员限制的团队中；2) 当前网络无法连接到 AI 服务器；3) 免费额度已经耗尽。'
      },
      {
        q: 'Canva AI 怎么做 PPT？',
        a: '创建一个演示文稿，点击 Magic Design（魔法设计），输入你的主题（如“2026年Q3营销复盘”），AI 会自动生成带背景、图表和文案的多页幻灯片。'
      },
      {
        q: 'Canva AI 生成图片怎么用？',
        a: '在设计界面左侧找到应用 (Apps)，选择文本生成图像 (Text to Image) 或其他接入的模型，输入中文提示词，选择风格后即可生成。'
      },
      {
        q: 'Canva 和 Gamma 哪个做 PPT 更好？',
        a: 'Canva 更偏向完整的图形设计平台，适合需要精细排版和丰富元素库的用户；Gamma (<a href="/guides/gamma" class="text-brand-600 hover:underline">查看 Gamma 指南</a>) 则专注 AI-first 的网页与演示生成，工作流更纯粹、速度更快。'
      },
      {
        q: 'Canva AI 免费版够用吗？',
        a: '免费版提供一定数量的基础 AI 体验，非常适合偶尔使用。但如果是每天都要做设计的运营人员，推荐使用 Pro 版以解锁全部高级模型和生成次数。'
      }
    ],
    alternatives: ['gamma', 'midjourney', 'adobe-firefly'],
    domesticLayout: true,
    seoH1: 'Canva AI 国内怎么用？设计、PPT 与常见问题',
    domesticIntro: '国内用户使用 Canva AI 时，可直接通过浏览器或客户端登录账号。Canva 的 AI 功能大多打包在 Magic Studio 中，你可以在制作 PPT、海报或视频时随时唤起它。如果遇到官网加载失败、功能不可见或导出异常等问题，应分别检查当前网络、账号所属团队的方案权限及积分额度。',
    domesticSymptoms: [
      {
        title: '官网打不开 / 加载极慢',
        checks: ['检查当前网络是否支持访问海外资源', '清除浏览器 Cookie 与缓存', '测试更换浏览器']
      },
      {
        title: '登录失败',
        checks: ['第三方授权登录 (如 Google) 的网络连接是否顺畅', '账号是否存在安全风险被锁', '当前设备是否被企业防火墙限制']
      },
      {
        title: 'AI 功能 (Magic Studio) 突然消失',
        checks: ['如果是团队版，检查管理员是否关闭了 AI 权限', '免费版的 AI 体验次数可能已用完', '网络连接问题导致 UI 渲染降级']
      },
      {
        title: '生成一直加载中',
        checks: ['检查代理节点稳定性', '当前模型并发量大', '尝试刷新页面重新唤起生成']
      },
      {
        title: '导出异常',
        checks: ['设计中是否包含了 Pro 专属元素但未付费', '网络掉线导致文件未能完整打包', '尝试使用不同的格式 (PDF/JPG) 导出']
      }
    ],
    domesticFunctions: [
      {
        name: 'AI 生成 PPT / 演示文稿',
        desc: '只需输入一个标题或大纲，直接生成包含多页内容、配图和布局的完整幻灯片。',
        limitations: '结构较为通用，复杂的商业逻辑和数据图表仍需要人工排版微调。'
      },
      {
        name: 'AI 图像生成',
        desc: '在设计海报时，不用到处找素材，直接通过文字生成所需风格的配图。',
        limitations: '部分高质量模型消耗大，生成极度复杂的场景细节不如专业绘图工具。'
      },
      {
        name: 'Magic Write (魔法撰写)',
        desc: '帮你将大白话改写得更专业、或将一篇文章缩写为适合 Instagram 的图文文案。',
        limitations: '对字数的严格把控有时不够精确，需手动删减。'
      },
      {
        name: '智能图像处理',
        desc: '提供背景移除、魔法擦除和魔法替换功能。',
        limitations: '背景颜色过于复杂时，边缘抠图可能不够干净。'
      }
    ],
    domesticPrompts: [
      {
        title: '生成 PPT 大纲',
        desc: '用于快速搭建汇报框架。',
        text: '请帮我生成一份名为“2026年秋季新品咖啡上市营销方案”的演示文稿。包含市场分析、产品亮点、推广渠道和预算预估，风格要现代、年轻，使用暖色调。'
      },
      {
        title: '生成社交配图',
        desc: '为自媒体快速找素材。',
        text: '生成一张图片：一个极简的办公桌上放着一杯冰美式和一本打开的笔记本，阳光从百叶窗透进来，风格要清晰明亮，适合用作小红书封面。'
      },
      {
        title: '产品宣传文案改写',
        desc: '利用 Magic Write 提升文案专业度。',
        text: '请将这句话改写得更有吸引力，适合放在海报的副标题：“我们的新耳机电池很大，戴着也舒服，还可以降噪。”'
      },
      {
        title: '魔法替换指令',
        desc: '使用 Magic Edit 时的精准描述。',
        text: '将人物手里拿着的咖啡杯，替换成一束盛开的向日葵，光线要自然融合。'
      }
    ]
  }`;

const ideogramData = `  {
    slug: 'ideogram',
    seoTitle: 'Ideogram国内怎么用？绘图教程',
    seoDescription: '国内使用Ideogram时，如果遇到官网打不开、登录异常或图片生成失败，可从账号、浏览器、方案权限与网络环境排查，并了解文字排版、图片生成与常见提示词方法。',
    seoKeywords: 'Ideogram国内怎么用,Ideogram教程,文字生成图片,AI海报,AI绘图',
    name: 'Ideogram',
    company: 'Ideogram',
    officialUrl: 'https://ideogram.ai',
    category: 'image',
    categories: ['image', 'productivity'],
    shortDescription: 'Ideogram 是极具特色的 AI 图像生成工具。其产品重点之一是在图像中准确生成排版文字与设计创作。本页重点整理国内用户使用时的登录排查、带文字图片生成教程及中文提示词。',
    description: 'Ideogram 是一款支持高级排版能力的 AI 图像生成模型。它能够极大地减少过去 AI 生成图片中字母乱码的问题，非常适合用来制作包含标题的海报、Logo 字标、T恤图案及产品宣传图。',
    tags: ['文字生成', 'AI海报', 'Logo设计', '图像生成'],
    featured: true,
    freePlan: '提供免费使用额度，可体验基础图像生成，每日生成次数有一定限制。',
    pricingType: 'Free / Basic / Plus / Pro',
    chineseSupport: '目前文字生成推荐使用英文以确保精准渲染，但其能够理解中文的主题描述。',
    accountRequired: '需要使用 Google 或 Apple 账号登录。',
    platforms: ['网页端', 'iOS App'],
    bestFor: ['平面设计师', '社交媒体运营', '电商卖家', '自媒体创作者'],
    lastUpdated: '2026-09-08',
    overview: '国内用户使用 Ideogram 时，可以直接在浏览器中访问其官网并登录。目前它提供了 Generate、Canvas 和 Remix 等多种创作模式。如果遇到官网打不开、登录报错或生成过程长期等待，应分别检查当前网络、账号可用额度及官方服务状态。',
    features: [
      'Text Rendering：在图片中精准生成指定的文字与排版设计',
      'Ideogram Canvas：无限大的创意画板，支持更自由的拼接和设计组合',
      'Remix：基于现有图片重新调整结构和文字内容',
      'Magic Fill：在画板上进行局部重绘与扩展'
    ],
    useCases: [
      '为一家新开的咖啡馆生成一张中间写着英文 "Autumn Coffee" 的秋季主题海报',
      '生成一件包含特定 Slogan 的潮牌 T 恤设计图稿',
      '设计包含产品名称的复古风格徽章或 Logo 字标',
      '通过 Remix 将一张白天的街景照片修改为夜晚，并更换招牌上的文字'
    ],
    gettingStarted: [
      '访问 ideogram.ai，使用 Google 或 Apple 账号授权登录。',
      '在顶部输入框中输入提示词，若要生成文字，请务必用英文引号将文字包裹（如 "Hello"）。',
      '选择图片的宽高比，点击 Generate，等待几秒钟即可查看四张结果。'
    ],
    networkAndRegion: '访问 Ideogram 及其图片资源加载需要稳定的海外网络连接。如果网页出现样式错乱或图片一直转圈加载不出，请检查代理节点是否对静态资源域名进行了拦截或延迟过高。',
    advantages: [
      '在图像内渲染文字的准确度和排版审美行业领先',
      '提供 Canvas 画板模式，极大提升了后期组合与排版的自由度',
      '界面直观易用，对新手非常友好',
      '免费版每日重置一定额度，适合轻量使用'
    ],
    limitations: [
      '对中文文字的直接生成和排版支持不如英文稳定，仍有乱码概率',
      '过度复杂的长句子文字生成依然可能出现拼写错误',
      '高质量模型与高分辨率导出需要订阅 Plus 或 Pro 方案',
      '网络要求较高，加载大量历史图片时容易卡顿'
    ],
    faq: [
      {
        q: 'Ideogram 国内可以用吗？',
        a: '可以。只要网络能够稳定连接海外服务器，国内用户通过 Google 等账号正常登录后即可使用。'
      },
      {
        q: 'Ideogram 国内怎么用？',
        a: '打开官网，登录后在文本框中输入描述。如果你希望图片里出现特定文字，请用引号括起来，并在提示词中说明这是标题或标志。'
      },
      {
        q: 'Ideogram 官网打不开怎么办？',
        a: '这通常是网络阻断或 DNS 问题，请检查你的网络代理设置，并确保能正常访问海外服务。'
      },
      {
        q: 'Ideogram 登录失败怎么办？',
        a: '因为其主要使用 Google/Apple 授权，所以如果授权弹窗打不开，请检查浏览器是否拦截弹窗，以及登录环境的网络连通性。'
      },
      {
        q: '为什么我生成的图片文字拼错了？',
        a: 'AI 图像生成仍具有概率性。哪怕是 Ideogram，遇到较长句子时也会有拼写错误。建议保持文字简短，或多生成几次，正式商用前必须人工核对。'
      },
      {
        q: 'Ideogram 可以生成中文文字吗？',
        a: '目前的 AI 模型在生成汉字这种复杂图形结构时，经常会出现乱码或缺笔少划的情况。建议核心排版使用英文设计。'
      },
      {
        q: 'Ideogram 和 Midjourney 怎么选？',
        a: '如果你需要经常在图片里生成特定的排版文字（如海报、Logo、标语），Ideogram 会顺手很多；如果需要极端的艺术质感或复杂的人像控制，可以参考 Midjourney (<a href="/guides/midjourney" class="text-brand-600 hover:underline">查看 Midjourney 指南</a>)。'
      },
      {
        q: 'Ideogram 免费版够用吗？',
        a: '免费版每天会提供少量基础生成积分，适合轻度用户。如果需要高频商用创作或使用最新的高级功能，则需考虑付费方案。'
      }
    ],
    alternatives: ['midjourney', 'adobe-firefly', 'dall-e-3'],
    domesticLayout: true,
    seoH1: 'Ideogram 国内怎么用？AI 绘图与文字生成教程',
    domesticIntro: '国内用户使用 Ideogram 时，可以直接在浏览器中访问其官网并登录。目前它提供了 Generate、Canvas 和 Remix 等多种创作模式。如果遇到官网打不开、登录报错或生成过程长期等待，应分别检查当前网络、账号可用额度及官方服务状态。',
    domesticSymptoms: [
      {
        title: '官网打不开 / 界面错乱',
        checks: ['Ideogram 官方服务状态', '检查网络连通性', '部分静态图片 CDN 域名是否被代理拦截', '尝试清除浏览器缓存']
      },
      {
        title: '登录异常 / 无法授权',
        checks: ['Google 账号的授权连通性', '浏览器扩展程序 (广告拦截) 是否阻止了弹窗']
      },
      {
        title: '图片生成失败 / 一直等待',
        checks: ['当前账户的每日免费额度或付费积分是否耗尽', '网络中断导致未收到完成回调', '刷新页面查看是否已生成在历史记录中']
      },
      {
        title: '生成的文字拼错或漏字母',
        checks: ['这是 AI 模型的概率限制，不是网络故障', '尝试检查拼写，简化文字内容并重试']
      },
      {
        title: '中文文字变乱码',
        checks: ['当前模型对复杂汉字结构的渲染尚未完全成熟', '建议将其改为英文排版，或者在后期软件中手工加上中文字体']
      }
    ],
    domesticFunctions: [
      {
        name: '文字渲染 (Typography)',
        desc: '在图片中直接生成带有正确拼写和艺术设计的英文单词或句子。',
        limitations: '长句子或罕见词汇仍然有拼错的可能，中文字体支持不稳定。'
      },
      {
        name: 'Ideogram Canvas',
        desc: '一个无限大的数字画布，可对图片进行无缝扩展、抠图和重新排版组合。',
        limitations: '大范围渲染和复杂编辑操作可能消耗更多的积分。'
      },
      {
        name: 'Remix',
        desc: '上传现有图片或使用社区图片，在保留原图结构的基础上修改文字和内容。',
        limitations: '无法 100% 保持完全一样的画面细节，会产生轻微重绘。'
      },
      {
        name: 'Magic Fill',
        desc: '圈出图片中的一部分进行局部修改或重新生成。',
        limitations: '选区边界偶尔可能会出现边缘过渡不自然的情况。'
      }
    ],
    domesticPrompts: [
      {
        title: '生成包含标题的海报',
        desc: '注意：让 AI 明确知道哪些是文字，哪些是背景。',
        text: '为一家咖啡馆制作方形宣传海报，画面中央用显眼的复古粗体字显示英文标题 "Autumn Coffee"，标题清楚醒目，暖棕色背景，咖啡与落叶元素，简洁商业海报设计'
      },
      {
        title: '生成 Logo / 字标概念',
        desc: '简单直接的排版需求。',
        text: '一个极简风格的现代科技公司 Logo，主体是由字母 "N" 和 "X" 组成的几何图形，下方包含排版文字 "NEXUS TECH"，黑白配色，矢量风格，高质量'
      },
      {
        title: '社交媒体封面',
        desc: '文字与场景融合的设计。',
        text: '一张适合作为 YouTube 封面的背景图，赛博朋克风格的霓虹都市夜景，在画面偏左的位置有一个巨大的霓虹灯牌，上面清晰地写着 "VLOG 01"，颜色鲜艳，电影感光影'
      },
      {
        title: '产品宣传图',
        desc: '突出特定文字的产品展示。',
        text: '一瓶高端香水放在大理石桌面上，水波纹倒影，背景是纯色柔和的米白色，在香水的玻璃瓶身上刻着金色的文字 "ELEGANCE"，质感高级，微距摄影'
      }
    ]
  }`;

const adobeData = `  {
    slug: 'adobe-firefly',
    seoTitle: 'Adobe Firefly国内怎么用？教程',
    seoDescription: '国内使用Adobe Firefly时，如果遇到官网打不开、登录异常或生成失败，可从Adobe账号、浏览器、方案与网络环境排查，并了解图片生成、编辑等常见用法。',
    seoKeywords: 'Adobe Firefly国内怎么用,Firefly教程,AI绘图,Adobe图片生成,生成式填充',
    name: 'Adobe Firefly',
    company: 'Adobe',
    officialUrl: 'https://firefly.adobe.com',
    category: 'image',
    categories: ['image', 'video'],
    shortDescription: 'Adobe Firefly 是由 Adobe 推出的生成式 AI 创作套件，现已包含图像、视频和设计元素的生成。本页重点整理国内用户使用时的登录账号排查、基础用法及 Generative Credits 常见问题。',
    description: 'Adobe Firefly 旨在提供安全、可商用的 AI 生成能力。它不仅在独立的 Web 端提供文生图、生成式填充等功能，还被深度集成到 Photoshop、Illustrator 和 Premiere 等 Creative Cloud 旗舰软件中，并逐渐扩展到音频、视频及更多第三方模型的支持。',
    tags: ['AI绘图', '图像生成', '生成式填充', 'Creative Cloud'],
    featured: false,
    freePlan: '免费 Adobe 账号每月提供基础的 Generative Credits 额度。',
    pricingType: 'Free / Premium / CC',
    chineseSupport: 'Web 端支持输入中文提示词，系统能较好地理解中文意图。',
    accountRequired: '需要注册并登录 Adobe 账号。',
    platforms: ['Web 网页端', 'Creative Cloud 桌面软件集成'],
    bestFor: ['专业设计师', '摄影师', '商业插画师', '版权要求高的企业'],
    lastUpdated: '2026-09-08',
    overview: '国内用户使用 Adobe Firefly 时，可以通过网页端登录 Adobe 账号开始体验，或直接在支持的 Creative Cloud 软件中使用。除了经典的文生图（Text to Image）和生成式填充（Generative Fill），现在也包含针对视频和设计元素的扩展功能。如果遇到网站打不开、无法登录或功能提示权限不足，请重点检查 Adobe 账号所属区域、生成积分额度以及网络环境。',
    features: [
      'Text to Image：基础文生图，支持高度定制化的风格、光影和材质参数',
      'Generative Fill：广受好评的局部重绘、背景替换和画面扩展',
      'Text Effects：为文字或字母生成独特的 AI 纹理与特效',
      'Generate Video / Audio：逐步支持从文本生成动态视频、动画或音频素材',
      'Creative Cloud Integration：深度集成于 PS、AI 之中，随时可用'
    ],
    useCases: [
      '通过网页端快速生成多张符合特定品牌色彩的产品背景配图',
      '在现有照片中智能擦除多余杂物，或无缝扩展照片的边缘画布',
      '为宣传海报制作具有火焰、水滴或花朵纹理的艺术字体特效',
      '企业用户生成内部物料，避免由于训练数据问题带来的版权争议'
    ],
    gettingStarted: [
      '打开 firefly.adobe.com 并使用你的 Adobe 账号登录。',
      '选择你需要的功能板块（例如 Text to Image 或 Generative Fill）。',
      '输入中文或英文指令，利用右侧的参数面板调整风格，点击生成。'
    ],
    networkAndRegion: 'Adobe 账号的登录认证、区域验证以及 Firefly 庞大的图像数据下发，都需要非常畅通的网络连接。如果网页长时间卡在登录或白屏，请排查网络代理策略，并确认当前账号是否存在区域网络锁定。',
    advantages: [
      '官方声明训练数据基于正版图库与公有领域，设计商用安全性更高',
      '与 Adobe 自家软件工作流无缝融合，设计师学习成本极低',
      '网页端界面高度结构化，不必像 Midjourney 那样死记参数',
      '支持输入超过 100 种语言的提示词（包含中文）'
    ],
    limitations: [
      'AI 图像在真实人像结构、手指细节等极限逼真度上，相对顶级竞品可能还有进步空间',
      '消耗 Generative Credits 较快，免费版用完后需要等待或购买高级方案',
      '虽然宣称可商用，但涉及到第三方资产或复杂法律纠纷时，用户仍需根据 Adobe 最新条款自行审慎评估版权风险'
    ],
    faq: [
      {
        q: 'Adobe Firefly 国内可以用吗？',
        a: '由于 Adobe 账号的区域及服务政策，国内用户若直接裸连可能会遇到访问限制。在确保网络连通性和账号合规的情况下即可正常使用。'
      },
      {
        q: 'Adobe Firefly 国内怎么用？',
        a: '你可以访问其官方网页端进行轻量创作，或者在升级了最新版的 Photoshop 等 Creative Cloud 软件中直接使用生成式功能。'
      },
      {
        q: 'Adobe Firefly 官网打不开怎么办？',
        a: '最常见的问题是网络代理未能正确解析 Adobe 的登录及资源服务器。请检查你的网络环境，或尝试清理浏览器 Cookie 重试。'
      },
      {
        q: '登录 Adobe 账号后提示服务不可用？',
        a: '这通常与你账号注册的区域以及当前网络 IP 的归属地有关。请确保两者都处于 Firefly 支持的服务范围内。'
      },
      {
        q: 'Generative Credits 是什么？',
        a: 'Adobe 使用生成积分来衡量 AI 消耗量。每次生成图片、视频或进行复杂重绘都会扣减相应的点数。额度用完后生成速度可能会被限制。'
      },
      {
        q: 'Firefly 生成的图片绝对没有版权风险吗？',
        a: 'Adobe 官方声明其训练库安全，并提供相关的企业赔偿条款。但在法律实操中，没有绝对的“零风险”，企业用户商业使用前仍应详细阅读 Adobe 官方协议与当地法律。'
      },
      {
        q: 'Adobe Firefly 中文怎么用？',
        a: '网页端和大部分内置组件都已经支持直接输入中文提示词，系统会自动理解并生成。你无需在翻译软件中来回切换。'
      },
      {
        q: 'Firefly 免费版够用吗？',
        a: '对于每月只需处理几张图片的用户，免费账号的基础积分够用。如果经常使用 Generative Fill，则很快会耗尽，建议订阅 Creative Cloud 方案。'
      }
    ],
    alternatives: ['midjourney', 'ideogram', 'dall-e-3'],
    domesticLayout: true,
    seoH1: 'Adobe Firefly 国内怎么用？AI 创作与常见问题',
    domesticIntro: '国内用户使用 Adobe Firefly 时，可以通过网页端登录 Adobe 账号开始体验，或直接在支持的 Creative Cloud 软件中使用。除了经典的文生图（Text to Image）和生成式填充（Generative Fill），现在也包含针对视频和设计元素的扩展功能。如果遇到网站打不开、无法登录或功能提示权限不足，请重点检查 Adobe 账号所属区域、生成积分额度以及网络环境。',
    domesticSymptoms: [
      {
        title: '官网打不开 / 白屏',
        checks: ['Adobe 全球服务状态', '网络连接是否稳定', '是否被网络防火墙或代理规则阻挡', '浏览器插件冲突']
      },
      {
        title: 'Adobe 账号登录失败',
        checks: ['检查账号密码', '账号区域政策限制', '若提示“不在当前区域提供”，请检查网络环境与账号注册地']
      },
      {
        title: '功能显示不同或缺失',
        checks: ['确认当前所处的是正式版还是 Beta 测试版页面', '你的 Adobe 方案中是否包含此特定功能', '等待官方按地区灰度推送']
      },
      {
        title: '生成按钮不可用',
        checks: ['当月 Generative Credits (生成积分) 是否彻底耗尽', '输入的提示词是否触发了违禁词拦截系统']
      },
      {
        title: '下载 / 导出异常',
        checks: ['网络掉线', '图片数据过大导致传输超时', '更换浏览器重试']
      }
    ],
    domesticFunctions: [
      {
        name: 'Text to Image (文生图)',
        desc: '将文字描述转化为高质量图像，右侧面板可直接调整画幅、色彩、灯光等参数，无需背诵复杂后缀。',
        limitations: '写实人像和精细的三维结构表现有时相对较弱。'
      },
      {
        name: 'Generative Fill (生成式填充)',
        desc: '用画笔涂抹画面某一部分，输入指令让 AI 修改、删除对象或扩展照片边界。',
        limitations: '大面积的复杂场景重绘可能需要多次尝试和修改指令。'
      },
      {
        name: 'Text Effects (文字特效)',
        desc: '为短文本或字母添加独特的 AI 生成纹理（如毛线、面包、金属质感）。',
        limitations: '目前主要针对英文字母或短词效果最佳。'
      },
      {
        name: 'Generative Video & Boards',
        desc: '扩展中的多媒体创作功能，将 AI 延伸到视频生成和多资产概念板管理中。',
        limitations: '部分功能处于灰度测试或高阶订阅专享阶段。'
      }
    ],
    domesticPrompts: [
      {
        title: '生成产品背景图',
        desc: '利用 Firefly 干净的商业质感。',
        text: '一个高端极简的纯白色大理石展示台，适合放置护肤品，柔和的早晨阳光从左侧照入，背景有一点模糊的绿色植物阴影，照片级真实感'
      },
      {
        title: '网站 Hero 图',
        desc: '宽屏构图与留白。',
        text: '一张现代科技网站的横向背景图，深色简洁空间，柔和的蓝色渐变光线，抽象的光纤和数字元素，画面右侧留出干净的纯色区域用于排版文字，全景宽屏构图'
      },
      {
        title: '社交媒体插画',
        desc: '控制特定艺术风格。',
        text: '一幅扁平化风格的商业矢量插画，一位年轻人在使用笔记本电脑工作，周围有向上增长的数据图表和灯泡图标，明亮的橙色和蓝色配色，适合用作文章配图'
      },
      {
        title: '图片编辑 (配合填充使用)',
        desc: '在涂抹选区后使用的简单指令。',
        text: '将这个区域替换为一只正在熟睡的橘猫'
      }
    ]
  }`;

// Replace canva-ai
const canvaRegex = /\{\s*['"]?slug['"]?:\s*['"]canva-ai['"][\s\S]*?(?=\{\s*['"]?slug['"]?:\s*['"]gamma['"])/;
if (c.match(canvaRegex)) {
  c = c.replace(canvaRegex, canvaData + '\n');
} else {
  console.log('Canva not found');
}

// Replace ideogram
const ideoRegex = /\{\s*['"]?slug['"]?:\s*['"]ideogram['"][\s\S]*?(?=\{\s*['"]?slug['"]?:\s*['"]runway['"])/;
if (c.match(ideoRegex)) {
  c = c.replace(ideoRegex, ideogramData + '\n');
} else {
  console.log('Ideogram not found');
}

// Replace adobe-firefly
const adobeRegex = /\{\s*['"]?slug['"]?:\s*['"]adobe-firefly['"][\s\S]*?(?=\{\s*['"]?slug['"]?:\s*['"]pika['"])/;
if (c.match(adobeRegex)) {
  c = c.replace(adobeRegex, adobeData + '\n');
} else {
  console.log('Adobe not found');
}

fs.writeFileSync(path, c);
console.log('Updated Canva, Ideogram, Adobe Firefly in aiTools.ts');
