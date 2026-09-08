const fs = require('fs');

const runwayData = `  {
    slug: 'runway',
    seoTitle: 'Runway国内怎么用？AI视频教程',
    seoDescription: '国内使用Runway时，如果遇到官网打不开、登录异常或视频生成失败，可从账号、浏览器、方案权限与网络环境排查，并了解文生视频、图生视频与常见创作方法。',
    seoKeywords: 'Runway国内怎么用,Runway教程,AI视频生成,图生视频,文生视频',
    name: 'Runway',
    company: 'Runway AI, Inc.',
    officialUrl: 'https://runwayml.com',
    category: 'video',
    categories: ['video', 'ai-art'],
    shortDescription: 'Runway 是一款专业的 AI 视频生成与编辑平台，支持文生视频、图生视频及复杂的视频编辑工作流。本页重点整理国内用户使用 Runway 时的登录、视频生成排查及常用的中文创作提示词。',
    description: 'Runway 是领先的 AI 视频创作平台。最新的视频模型支持高度逼真的 Text to Video (文生视频) 和 Image to Video (图生视频)，并提供多种高级视频编辑工具，适合视频创作者、电影制作人及设计师使用。',
    tags: ['AI视频', '文生视频', '图生视频', '视频编辑'],
    featured: true,
    freePlan: '提供免费试用额度，支持体验基础视频生成功能。',
    pricingType: 'Free / Standard / Pro / Unlimited',
    chineseSupport: '提示词主要推荐使用英文以获得最佳效果，但系统也可理解简单的中文。',
    accountRequired: '需要注册账号登录。',
    platforms: ['网页端', 'iOS App'],
    bestFor: ['视频创作者', '电影制作人', '设计师', '营销人员'],
    lastUpdated: '2026-09-08',
    overview: '国内用户使用 Runway 时，可以直接从官方网站进入视频创作界面。当前推荐使用最新的视频模型进行文生视频 (Text to Video) 或图生视频 (Image to Video)。如果遇到官网打不开、登录失败或视频生成一直加载等问题，应分别检查账号、当前方案的生成权限及网络环境。',
    features: [
      'Text to Video (文生视频)：通过文字描述生成高度逼真的视频',
      'Image to Video (图生视频)：将静态图片转化为动态视频',
      'Advanced Camera Controls：精细控制镜头运动与画面动态',
      'Video Editor：提供背景移除、视频修补等一站式视频编辑能力',
      'Workflows：将多个 AI 生成步骤连接成自动化视频创作流'
    ],
    useCases: [
      '为短片或广告生成高质量的空镜头素材',
      '将静态的艺术设定图、插画转换为动态视频',
      '快速移除视频背景或进行画面内容替换',
      '结合 Midjourney 生成的图像制作完整的 AI 视频概念片'
    ],
    gettingStarted: [
      '打开 runwayml.com 并使用邮箱或 Google 账号登录。',
      '在 Dashboard 中选择 Text to Video 或 Image to Video 开始创作。',
      '如果是图生视频，上传图片后在 Prompt 框中描述希望发生的运动。'
    ],
    networkAndRegion: '视频生成需要稳定的连接传输大量数据，如果出现进度条卡死或网站完全无法加载，请检查当前网络代理及浏览器设置。',
    advantages: [
      '视频生成质量极高，动作自然，物理合理性强',
      '提供文生视频、图生视频等多种创作入口',
      '不仅有生成，还有专业的后期编辑工具',
      'Workflows 提升复杂创作的自动化效率'
    ],
    limitations: [
      '复杂提示词建议使用英文，中文理解仍可能存在偏差',
      '视频生成和编辑操作非常消耗 Credits',
      '高级控制功能和无限制生成需要较高级别的订阅方案',
      '网络连接不稳定时视频加载与预览较慢'
    ],
    faq: [
      {
        q: 'Runway 国内可以用吗？',
        a: '可以。只要网络能够稳定连接 Runway 的服务器，国内用户通过正规账号即可使用。'
      },
      {
        q: 'Runway 国内怎么用？',
        a: '在浏览器中打开 runwayml.com，注册账号后，在主界面选择文生视频或图生视频功能，即可开始生成。'
      },
      {
        q: 'Runway 官网打不开怎么办？',
        a: '如果网页完全打不开，通常是网络解析或连接问题。请检查 DNS 设置，并确保你的网络环境可以正常访问海外服务。'
      },
      {
        q: 'Runway 登录失败怎么办？',
        a: '请检查浏览器是否拦截了登录弹窗，或尝试清除 Cookie。如果使用 Google 等第三方登录，确认相关环境畅通。'
      },
      {
        q: 'Runway 视频生成一直加载？',
        a: '这可能是因为服务器拥挤或网络连接中断。如果在生成中途卡住很久，建议刷新页面或检查当前账号是否还有足够的 Credits。'
      },
      {
        q: 'Runway 图片上传后视频无法开始生成？',
        a: '图生视频时，确保上传的图片符合尺寸和格式要求。如果图片包含违规或敏感内容，系统也可能拒绝生成。'
      },
      {
        q: 'Runway 怎么让视频动起来？',
        a: '使用 Image to Video 功能时，不仅要上传图片，还要在提示词中描述“发生的运动”，如“镜头缓慢推进”、“人物轻微转头”，而不是只描述画面内容。'
      },
      {
        q: 'Runway 免费版够用吗？',
        a: '免费版提供基础试用额度，适合新手体验。如果你需要频繁生成高清长视频，建议升级到 Standard 或更高版本。'
      }
    ],
    alternatives: ['luma-dream-machine', 'pika', 'kling'],
    domesticLayout: true,
    seoH1: 'Runway 国内怎么用？AI 视频生成与常见问题',
    domesticIntro: '国内用户使用 Runway 时，可以直接从官方网站进入创作界面。当前推荐使用最新模型进行 Text to Video (文生视频) 或 Image to Video (图生视频)。如果遇到官网打不开、登录失败或视频生成一直加载等问题，应分别检查账号、当前方案的生成权限及网络环境。',
    domesticSymptoms: [
      {
        title: '官网完全打不开',
        checks: ['Runway 官方服务器状态', '浏览器缓存与 DNS 设置', '基础网络连接是否正常', '当前网络代理策略']
      },
      {
        title: '登录失败或报错',
        checks: ['是否使用了错误的授权账号', '浏览器隐私设置 / 广告拦截器', 'Google 账号登录的环境是否畅通']
      },
      {
        title: '生成视频一直加载 / 转圈',
        checks: ['检查账号当前可用 Credits', '当前模型是否正处于高峰期排队', '网络上传/下载稳定性']
      },
      {
        title: '图片上传成功，但无法生成',
        checks: ['图片格式和大小是否合规', '是否触发了敏感内容过滤机制', '当前选择的模型版本是否有特殊要求']
      },
      {
        title: '生成视频动作失控',
        checks: ['这不是网络问题，属于 AI 模型理解偏差', '提示词描述过于复杂矛盾', '尝试使用更具体的运动指令重试']
      }
    ],
    domesticFunctions: [
      {
        name: 'Text to Video (文生视频)',
        desc: '仅通过文字描述来生成视频。适合从零开始构建画面和运镜。',
        limitations: '需要精准的提示词来描述主体、环境、光影和摄像机运动。'
      },
      {
        name: 'Image to Video (图生视频)',
        desc: '上传一张静态图片，用提示词描述你希望它发生的运动变化。',
        limitations: '建议重点描述“运动”，避免重复描述图片中已有的静态元素。'
      },
      {
        name: 'Advanced Camera Controls',
        desc: '精细控制镜头推拉摇移（Pan/Zoom/Tilt 等）。',
        limitations: '高级功能可能受当前账号计划限制。'
      },
      {
        name: 'Video Editor & Workflows',
        desc: '提供背景移除、修补等视频编辑工具，以及连接多步骤的自动化工作流。',
        limitations: '处理过程消耗相应的生成额度。'
      }
    ],
    domesticPrompts: [
      {
        title: '文生视频：城市夜景 (镜头推进)',
        desc: '适合生成具有电影感的空镜头。',
        text: '夜晚的城市街道刚下过雨，路面反射霓虹灯，一辆出租车缓慢驶过镜头，电影感，自然镜头运动'
      },
      {
        title: '图生视频：人像微动 (上传图片后使用)',
        desc: '不要重新描述整张图，应说明希望发生什么运动。',
        text: '镜头缓慢向前推进，人物轻轻转头看向窗外，窗帘随着微风摆动，整体动作自然克制'
      },
      {
        title: '文生视频：产品展示 (微距镜头)',
        desc: '强调质感和光影的变化。',
        text: '微距镜头，一杯热咖啡放在木质桌面上，热气缓缓上升，早晨温暖的阳光从侧面照入，光影柔和变化'
      },
      {
        title: '文生视频：自然风景 (航拍视角)',
        desc: '大场景，慢动作。',
        text: '航拍视角，秋天的森林色彩斑斓，一条河流穿过其中，镜头缓慢向前上方平移，阳光穿透树叶，电影级画质'
      }
    ]
  },
`;

const path = 'src/data/aiTools.ts';
let c = fs.readFileSync(path, 'utf8');

// Replace Runway
const runwayRegex = /\{\s*['"]?slug['"]?:\s*['"]runway['"][\s\S]*?(?=\{\s*['"]?slug['"]?:\s*['"]canva-ai['"])/;
if (c.match(runwayRegex)) {
  c = c.replace(runwayRegex, runwayData);
  fs.writeFileSync(path, c);
  console.log('Runway updated in aiTools.ts');
} else {
  console.log('Could not find runway block');
}
