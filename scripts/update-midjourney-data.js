const fs = require('fs');
const path = 'src/data/aiTools.ts';
let c = fs.readFileSync(path, 'utf8');

// Midjourney uses JSON-format "slug": "midjourney"
// Next slug after it is "ideogram"
const matchStart = c.match(/\{\s*"slug":\s*"midjourney"/);
const matchNext = c.match(/\{\s*"slug":\s*"ideogram"/);

if (!matchStart || !matchNext) {
  console.log('matchStart:', matchStart?.index, 'matchNext:', matchNext?.index);
  process.exit(1);
}

const newMidjourney = `  {
    slug: 'midjourney',
    seoTitle: 'Midjourney国内怎么用？创作教程',
    seoDescription: '国内使用Midjourney时，如果遇到官网打不开、登录异常或无法生成图片，可从账号、订阅、浏览器与网络环境逐项排查，并了解网页版创作、提示词与常见问题。',
    seoKeywords: 'Midjourney国内怎么用,Midjourney教程,中文提示词,AI绘图',
    name: 'Midjourney',
    company: 'Midjourney',
    officialUrl: 'https://midjourney.com',
    category: 'image',
    categories: ['image', 'creative'],
    shortDescription: 'Midjourney 是 AI 图片与视频创作工具，目前可以直接在官方网站进行生成，也可以连接 Discord 使用。本页重点整理国内用户注册、订阅、网页创作、中文提示词以及常见访问问题。',
    description: 'Midjourney 是一款 AI 图片生成工具，现在可以直接在 midjourney.com 网页端进行创作，不再要求必须通过 Discord。用户通过 Google 或 Discord 账号登录后，订阅方案即可在 Create 页面输入 Prompt 生成图片。',
    tags: ['AI绘图', 'AI图片', '中文提示词', '图片生成'],
    featured: true,
    freePlan: '当前官网（midjourney.com）和 Discord 均无常规免费试用。niji·journey App 存在有限试用，具体以官方当前政策为准',
    pricingType: 'Basic $10/月 / Standard $30/月 / Pro $60/月 / Mega $120/月（年付约 8 折）',
    chineseSupport: '界面支持多语言，可直接使用中文描述生成图片',
    accountRequired: '需要 Midjourney 账号（通过 Google 或 Discord 登录）及有效订阅',
    platforms: ['网页端（midjourney.com）', 'Discord'],
    bestFor: ['设计师', '创作者', '营销人员', '摄影爱好者'],
    lastUpdated: '2026-09-07',
    overview: 'Midjourney 现在支持直接在官网 Create 页面输入 Prompt 生成图片，Discord 不再是唯一方式。新用户通过 Google 或 Discord 登录后需要先订阅方案才能开始生成。',
    features: [
      '网页端直接生成图片，不再要求必须使用 Discord',
      '支持中文描述，也可以使用英文和摄影术语',
      'Editor 功能允许对生成结果进行进一步修改',
      'Personalization 和 Style Reference 用于控制视觉风格',
      'Conversational Mode 支持自然语言对话调整 Prompt',
      'Stealth Mode（Pro/Mega）可以让作品不出现在公共画廊'
    ],
    useCases: [
      '产品摄影和商业图片生成',
      '风景、人物和概念艺术创作',
      '网站插图和社交媒体配图',
      '为设计稿和展示文稿生成参考图',
      '探索不同摄影风格和视觉构图'
    ],
    gettingStarted: [
      '访问 midjourney.com，使用 Google 或 Discord 账号登录。',
      '选择适合自己使用频率的订阅方案。',
      '进入 Create 页面，在 Imagine Bar 输入中文或英文描述，按 Enter 开始生成。'
    ],
    networkAndRegion: '实际可用性可能受到官方服务状态、账号和订阅状态、浏览器以及网络环境影响。官网打不开、登录失败和无法生成是三种不同的问题，应该分别排查。',
    advantages: [
      '网页端可以直接创作，操作直观',
      '支持中文描述，新手可以直接开始',
      'Editor 提供进一步修改能力',
      'Web 与 Discord 两种创作方式',
      'Personalization 和 Style Reference 用于风格控制'
    ],
    limitations: [
      '主要创作服务需要订阅，当前无常规免费试用',
      '默认社区环境具有公开属性（Stealth Mode 仅限 Pro/Mega）',
      'AI 生成结果存在随机性，需多次尝试',
      '生成内容需符合 Midjourney Community Guidelines',
      '功能和模型会持续更新'
    ],
    faq: [
      {
        q: 'Midjourney 国内可以用吗？',
        a: 'Midjourney 本身没有明确的地区封锁列表，但实际使用涉及多个前提：能访问 midjourney.com、Google 或 Discord 登录可用、可以完成订阅支付以及网络连接稳定。这几项需要分别确认。'
      },
      {
        q: 'Midjourney 国内怎么用？',
        a: '访问 midjourney.com，用 Google 或 Discord 账号登录，选择订阅方案后进入 Create 页面，在 Imagine Bar 输入中文或英文描述，按 Enter 生成图片。不需要在 Discord 服务器内操作。'
      },
      {
        q: 'Midjourney 一定要 Discord 吗？',
        a: '不是。现在可以直接在 midjourney.com 网站生成图片。Discord 仍然支持，适合习惯 Discord 工作流的用户，但不再是唯一方式。'
      },
      {
        q: 'Midjourney 可以直接在网页生成图片吗？',
        a: '可以。登录 midjourney.com 后进入 Create 页面，在 Imagine Bar 输入描述即可生成，无需打开 Discord。'
      },
      {
        q: 'Midjourney 怎么注册？',
        a: 'Midjourney 目前没有独立的用户名+密码注册体系。需要通过 Continue with Google 或 Continue with Discord 授权登录。如果过去通过 Discord 使用过 Midjourney，应优先使用原来的 Discord 登录，避免误建新账号。'
      },
      {
        q: 'Midjourney 可以用 Google 登录吗？',
        a: '可以。当前官方支持 Continue with Google 和 Continue with Discord 两种登录方式。'
      },
      {
        q: 'Midjourney 官网打不开怎么办？',
        a: '请先检查 Midjourney 官方服务状态，然后排查基础网络连接和 DNS，再尝试用无痕窗口访问。如果浏览器可以打开其他国际网站但 Midjourney 仍无法访问，可能与当前网络连接有关。'
      },
      {
        q: 'Midjourney 登录失败怎么办？',
        a: '分别检查 Google 或 Discord 账号当前状态是否正常、浏览器是否阻止了第三方弹窗、是否需要清理 Cookie。不要在登录失败时就断定账号被封。'
      },
      {
        q: 'Midjourney 为什么不能生成图片？',
        a: '最常见的原因是没有有效的订阅，或当前方案的 GPU 时间已用尽。也可能是 Prompt 触发了内容政策限制，或者官方服务当前存在问题。需要逐项排查，而不是直接归因于网络问题。'
      },
      {
        q: 'Midjourney 支持中文 Prompt 吗？',
        a: '支持。可以用中文直接描述想要的画面，Midjourney 能理解中文描述并生成图片。不过部分摄影术语（如 --ar 参数）仍使用官方英文格式。'
      },
      {
        q: 'Midjourney 有免费版吗？',
        a: '当前 midjourney.com 网站和 Discord 均无常规免费试用。niji·journey App 存在有限试用，具体以官方当前政策为准。开始生成前请确认已订阅。'
      },
      {
        q: 'Midjourney 怎么付费？',
        a: 'Midjourney 通过 Stripe 处理付款。可用的付款方式以结账页面实际显示为准，可能包括 Visa、Mastercard、Apple Pay 等。年付方案约有 20% 折扣，但通常需要一次性支付全年费用。'
      },
      {
        q: 'Midjourney 支持支付宝吗？',
        a: 'Midjourney 官方将 Alipay 列为部分地区可能支持的付款方式之一，但最终以你在 Stripe Checkout 页面实际看到的选项为准，不能保证所有地区均可使用。'
      },
      {
        q: 'Midjourney 哪个套餐适合新手？',
        a: '对于第一次使用的人，建议先根据自己的生成频率选择，不需要一开始购买最高方案。Basic 适合先体验；Standard 适合生成量较大、需要 Relax Mode 的用户；Pro 增加 Stealth Mode 和更高资源；Mega 适合更高使用量需求。'
      }
    ],
    alternatives: ['ideogram', 'suno'],
    domesticLayout: true,
    seoH1: 'Midjourney 国内怎么用？注册、创作与常见问题',
    domesticIntro: '国内用户开始使用 Midjourney 时，可以先访问官方网站，通过 Google 或 Discord 登录账号，再根据需要订阅方案。现在生成图片已经不要求必须在 Discord 内完成，midjourney.com 的 Create 页面可以直接输入 Prompt 并查看生成结果。如果官网、登录或生成过程出现异常，应分别检查账号、订阅、浏览器与当前网络连接。',
    domesticSymptoms: [
      {
        title: 'midjourney.com 完全打不开',
        checks: ['Midjourney 官方服务状态', '浏览器与 DNS', '基础网络连接', '当前网络连接稳定性']
      },
      {
        title: '网站能打开，但 Google / Discord 登录失败',
        checks: ['Google / Discord 账号当前状态', '浏览器 Cookie', '第三方弹窗是否被阻止', '登录授权是否成功', '当前网络连接']
      },
      {
        title: '登录成功，但无法生成图片',
        checks: ['是否拥有有效订阅', '当前方案 GPU 时间是否用尽', 'Prompt 是否触发内容政策', 'Midjourney 官方服务状态']
      },
      {
        title: 'Create 页面一直加载',
        checks: ['Midjourney 官方服务状态', '浏览器缓存', '扩展程序干扰', '网络连接稳定性', '换浏览器测试']
      },
      {
        title: 'Discord 可以用，但网站异常',
        checks: ['网站与 Discord 是两个独立界面', '分别确认网站服务状态', '账号是否在 Web 端正常连接']
      },
      {
        title: '网站能用，但 Discord 不工作',
        checks: ['Discord 账号是否已正确连接当前 Midjourney 账号', '不要重复购买新的订阅', '检查 Discord 服务状态']
      }
    ],
    domesticFunctions: [
      {
        name: '网页端图片生成（Create）',
        desc: '登录后在 Create 页面的 Imagine Bar 输入中文或英文描述，直接生成图片。',
        limitations: '需要有效订阅'
      },
      {
        name: 'Editor 编辑',
        desc: '对生成的图片进行进一步修改，包括裁剪、调整区域、Remix 等。',
        limitations: '目前仅网页版提供'
      },
      {
        name: 'Personalization 与 Style Reference',
        desc: '通过个人偏好或参考图控制生成图片的视觉风格。',
        limitations: '需要在网页版管理'
      },
      {
        name: 'Conversational Mode',
        desc: '用自然语言与 AI 对话，帮助逐步描述和调整 Prompt，支持非英语语言。',
        limitations: '目前仅网页版提供'
      },
      {
        name: 'Stealth Mode',
        desc: '让生成的图片不出现在 Midjourney 公共画廊，保护创作隐私。',
        limitations: '仅 Pro 和 Mega 方案提供'
      }
    ],
    domesticPrompts: [
      {
        title: '产品摄影',
        desc: '一杯冰咖啡放在木质桌面上，窗边柔和自然光，浅景深，干净商业摄影风格，背景简洁 --ar 4:5',
        text: '一杯冰咖啡放在木质桌面上，窗边柔和自然光，浅景深，干净商业摄影风格，背景简洁 --ar 4:5'
      },
      {
        title: '风景',
        desc: '清晨的山谷，被薄雾覆盖，阳光从云层之间照下来，自然真实的风景摄影，层次清楚 --ar 16:9',
        text: '清晨的山谷，被薄雾覆盖，阳光从云层之间照下来，自然真实的风景摄影，层次清楚 --ar 16:9'
      },
      {
        title: '人物',
        desc: '一位年轻男子站在咖啡馆窗边，柔和晨光，自然表情，真实皮肤质感，浅景深，人像摄影风格 --ar 2:3',
        text: '一位年轻男子站在咖啡馆窗边，柔和晨光，自然表情，真实皮肤质感，浅景深，人像摄影风格 --ar 2:3'
      },
      {
        title: '网站插图',
        desc: '现代 AI 工具网站的抽象背景插图，简洁几何元素，柔和光影，大面积留白，适合作为网页 Hero 背景 --ar 16:9',
        text: '现代 AI 工具网站的抽象背景插图，简洁几何元素，柔和光影，大面积留白，适合作为网页 Hero 背景 --ar 16:9'
      },
      {
        title: '食物',
        desc: '一碗热气腾腾的牛肉面，俯拍构图，自然餐厅灯光，真实食物摄影，汤面细节清楚 --ar 4:3',
        text: '一碗热气腾腾的牛肉面，俯拍构图，自然餐厅灯光，真实食物摄影，汤面细节清楚 --ar 4:3'
      }
    ]
  },`;

c = c.substring(0, matchStart.index) + newMidjourney + '\n' + c.substring(matchNext.index);
fs.writeFileSync(path, c);
console.log('Successfully updated Midjourney data!');
