const fs = require('fs');
const path = 'src/data/aiTools.ts';
let c = fs.readFileSync(path, 'utf8');

const matchStart = c.match(/\{\s*['"]?slug['"]?:\s*['"]suno['"]/);
const matchNext = c.match(/\{\s*['"]?slug['"]?:\s*['"]replit['"]/);

if (!matchStart || !matchNext) {
  console.log('Targets not found');
  process.exit(1);
}

const sunoObj = `  {
    slug: 'suno',
    seoTitle: 'Suno国内怎么用？中文歌曲生成与常见问题',
    seoDescription: '国内使用Suno时，如果遇到官网打不开、登录异常或歌曲生成失败，可从账号、浏览器与网络环境排查，并了解中文歌词、Custom模式、歌曲修改、下载与商用权限。',
    seoKeywords: 'Suno国内怎么用,Suno中文歌曲,Suno打不开,AI音乐生成',
    name: 'Suno',
    company: 'Suno, Inc.',
    officialUrl: 'https://suno.com',
    category: 'audio',
    categories: ['audio', 'music'],
    shortDescription: 'Suno 是用于生成歌曲与音乐的 AI 工具，可以从一句描述开始，也可以自己填写歌词、风格和歌曲结构。本页重点整理国内用户使用 Suno 时的登录、中文歌曲生成、下载、商用权限与常见连接问题。',
    description: 'Suno 是一款功能强大的 AI 音乐生成工具。你可以使用 Simple Mode 一句话生成歌曲，或者在 Custom Mode 自己填写中文歌词、设定音乐风格和歌曲结构。目前支持 Web 网页端以及部分移动端应用。',
    tags: ['AI音乐', '歌曲生成', '中文歌词', '自定义创作'],
    featured: true,
    freePlan: '提供免费计划（附赠每日一定数量的生成 Credits），但免费方案的商用权限、下载规则与付费方案不同。',
    pricingType: 'Free / Pro / Premier',
    chineseSupport: '完全支持中文歌词填写和中文歌曲生成。',
    accountRequired: '必须登录账号（通常通过 Google, Apple, Microsoft, Discord 等 SSO 登录）。',
    platforms: ['网页端', 'iOS', 'Android (Limited Release)'],
    bestFor: ['音乐爱好者', '内容创作者', '视频剪辑师', '希望自己写词生成歌曲的用户'],
    lastUpdated: '2026-09-07',
    overview: '国内用户使用 Suno 时，可以直接从官方网站进入 Create 页面，通过 Simple Mode 从一句描述开始，也可以使用 Custom Mode 自己填写歌词、音乐风格和歌曲结构。Suno 的主要创作功能需要连接在线服务，因此官网打不开、登录失败、歌曲一直生成或下载失败应该分开排查，不要把所有问题都归结为同一个原因。',
    features: [
      'Simple Mode：一句话快速生成歌曲（词曲全包）',
      'Custom Mode：高度控制歌词、Style（流派/情绪）和 Advanced Options',
      '中文支持：直接填写中文歌词即可唱出，无需翻译',
      'Extend & Remaster：可以延长已有歌曲，或尝试重新处理',
      '下载功能：支持下载歌曲（2026-09-03 启用新的下载额度规则）'
    ],
    useCases: [
      '为短视频或 Vlog 生成背景音乐',
      '将自己写的诗歌或文字变成一首完整的中文歌',
      '生成纯音乐（Instrumental）用于播客或游戏',
      '送给朋友或家人的特定主题专属歌曲',
      '探索不同音乐风格（如将古风与电子结合）'
    ],
    gettingStarted: [
      '打开 suno.com/create 并登录（请务必记住使用的 SSO 方式，以免下次找不到历史歌曲）。',
      '选择 Simple Mode 或 Custom Mode。',
      '输入你的中文歌词或描述，调整风格后点击 Create，等待片刻即可试听。'
    ],
    networkAndRegion: '由于需要连接海外服务器生成音频，如果官网完全打不开或 Create 进度卡住，请检查 DNS、浏览器缓存以及网络环境。登录失败通常和授权被拦截或 Cookie 有关。',
    advantages: [
      '可以从文字描述生成完整歌曲',
      '支持自己输入歌词（Custom Mode 提供更多控制）',
      '支持进一步修改和扩展歌曲（Extend/Reuse）',
      '支持 Web 与移动端工作流',
      '适合快速尝试音乐创意'
    ],
    limitations: [
      'AI 生成结果有随机性，同一组提示词每次生成的旋律也不同',
      '中文发音偶尔可能不自然，需要人工检查',
      '生成 Credits 与 下载 Credits 分开计算',
      '免费方案生成的歌曲通常不能直接商用',
      '商业使用权利不等同于自动获得版权保护'
    ],
    faq: [
      {
        q: 'Suno 国内可以用吗？',
        a: 'Suno 没有严格封锁地区，只要你的网络连接能够稳定访问 suno.com 及其后端音频生成服务即可使用。'
      },
      {
        q: 'Suno 国内怎么用？',
        a: '打开 suno.com，使用 Google 等 SSO 登录后进入 Create 页面，选择 Simple 或 Custom 模式输入中文指令，即可开始生成歌曲。'
      },
      {
        q: 'Suno 官网打不开怎么办？',
        a: '先确认 Suno 官方服务状态，然后检查你的基础网络连接、DNS。如果依然无法打开，通常是当前网络节点无法连接其海外服务器。'
      },
      {
        q: 'Suno 登录失败怎么办？',
        a: 'Suno 主要依靠 Google、Discord 等 SSO 登录。如果登录失败，请检查浏览器是否拦截了第三方弹窗，或者当前网络是否支持该 SSO 供应商。务必使用自己最常用的账号，避免遗失历史记录。'
      },
      {
        q: 'Suno 支持中文歌曲吗？',
        a: '完全支持。不需要把指令翻译成英文，你可以在 Custom 模式中直接输入中文歌词，Suno 能直接用中文唱出来。'
      },
      {
        q: 'Suno Simple 和 Custom 有什么区别？',
        a: 'Simple Mode 适合新手，只需一句描述即可让 AI 全自动写词谱曲。Custom Mode 允许你自己输入确切的歌词、定义歌曲结构和精确的音乐风格（Style）。'
      },
      {
        q: 'Suno 为什么一直生成不出来？',
        a: '如果进度条一直转圈，可能是官方服务拥挤、你当天的 Credits 已经用完、或者你的网络连接断开了。刷新页面或换个网络试试。'
      },
      {
        q: 'Suno 歌曲怎么下载？',
        a: '生成完成后，点击歌曲旁边的菜单（...）选择 Download。注意：根据 2026-09-03 的新规，Suno 区分了生成 Credits 和下载额度。'
      },
      {
        q: 'Suno 免费版可以下载吗？',
        a: '免费版（Free）的下载权限取决于你的账号创建时间和当前的试用资格政策，有些新用户可能面临严格限制，具体以当前官方显示为准。'
      },
      {
        q: 'Suno 免费版可以商用吗？',
        a: '根据官方最新 Terms，Free 方案生成的歌曲主要用于个人非商业用途。不能将其用于盈利视频、商业项目或各大音乐平台发行。'
      },
      {
        q: 'Suno 付费歌曲一定有版权吗？',
        a: '商业使用权（Commercial Use Rights）不等于版权保护（Copyright Protection）。付费方案允许你商用，但该 AI 歌曲能否登记版权取决于你所在国家/地区的法律要求。'
      },
      {
        q: '自己写的歌词属于谁？',
        a: '如果你在 Custom Mode 输入的是自己原创的歌词，你始终拥有这部分歌词的版权，不因使用 Suno 发生改变。'
      },
      {
        q: 'Suno 可以在手机使用吗？',
        a: '可以，Suno 官方推出了 iOS 和 Android 应用（可能在部分地区标记为 Limited Release）。下载时请认准开发者为 Suno, Inc.。'
      },
      {
        q: 'Suno Pro 和 Premier 有什么区别？',
        a: '两者都支持商业使用权，主要区别在于每月获得的生成 Credits、歌曲下载额度（如 20 vs 60首）以及并发生成数量。'
      }
    ],
    alternatives: ['udio', 'suno'],
    domesticLayout: true,
    seoH1: 'Suno 国内怎么用？中文歌曲生成与常见问题',
    domesticIntro: '国内用户使用 Suno 时，可以直接从官方网站进入 Create 页面，通过 Simple Mode 从一句描述开始，也可以使用 Custom Mode 自己填写歌词、音乐风格和歌曲结构。Suno 的主要创作功能需要连接在线服务，因此官网打不开、登录失败、歌曲一直生成或下载失败应该分开排查，不要把所有问题都归结为同一个原因。',
    domesticSymptoms: [
      {
        title: 'suno.com 完全打不开',
        checks: ['Suno 官方服务器状态', '浏览器与 DNS', '基础网络', '当前网络连接是否正常']
      },
      {
        title: '网站能打开，但登录失败',
        checks: ['是否使用原来的登录方式', 'SSO 提供商 (Google/Discord) 账号状态', 'Cookie 异常', '浏览器拦截弹窗', '官方服务状态']
      },
      {
        title: '手机号收不到验证码',
        checks: ['检查地区代码', '检查号码正确性', '重新尝试', '如持续失败请改用 SSO 登录或参考官方 Support']
      },
      {
        title: '点击 Create 后一直生成',
        checks: ['Suno 官方服务状态', '当前剩余 Credits', '当前模型与功能可用性', 'Prompt 异常', '网络连接稳定性']
      },
      {
        title: '生成了，但歌曲和想要的不一样',
        checks: ['这不是网络问题', '尝试调整歌词格式', '减少 Style 中的冲突标签', '明确歌曲结构 (Verse/Chorus)', '一次只修改一个变量重试']
      },
      {
        title: '生成成功，但不能下载',
        checks: ['检查当前方案', '生成 Credits 不等于下载额度', '2026-09 最新下载额度规则', '歌曲是否符合下载资格']
      }
    ],
    domesticFunctions: [
      {
        name: 'Simple Mode',
        desc: '一句话自动生成歌词和音乐。适合没有特定歌词、只有一个创意想法的新手。',
        limitations: '无法精确控制每一段的歌词内容和结构。'
      },
      {
        name: 'Custom Mode',
        desc: '允许自己输入或粘贴完整歌词，定义详细的音乐风格 (Style) 和标题。',
        limitations: '需要了解基本的歌曲结构 (主歌/副歌) 和音乐术语才能发挥最好效果。'
      },
      {
        name: 'Instrumental',
        desc: '在 Custom 模式中开启，只生成纯音乐，不包含任何 AI 人声。',
        limitations: '如果输入了歌词，开启此选项后歌词将被忽略。'
      },
      {
        name: 'Extend',
        desc: '歌曲结尾太突然或想延长歌曲时，基于原歌曲某一时间点继续往后生成新段落。',
        limitations: '消耗额外的 Credits。'
      },
      {
        name: 'Reuse Prompt / Remaster',
        desc: '重复利用已有提示词，或者基于旧歌曲做新的音频处理与重制。',
        limitations: '不同功能消耗的额度以界面提示为准。'
      }
    ],
    domesticPrompts: [
      {
        title: 'Simple Mode 提示词',
        desc: '适合只有一个想法的新手，AI 会包办词曲。',
        text: '一首关于下班以后独自在城市散步的中文流行歌曲，情绪从疲惫慢慢变得放松，温暖的钢琴、柔和鼓点，中速节奏，适合夜晚听。'
      },
      {
        title: '先让 AI 写结构 (ChatGPT / Claude 辅助)',
        desc: '做自定义歌词前，先确定好情绪和结构。',
        text: '我想做一首中文歌曲。 主题： 一天工作结束后，一个人在夜晚城市散步，慢慢从疲惫变得放松。 情绪： 前半段略疲惫，副歌开始变得轻松温暖。 音乐方向： 现代中文流行，中速节奏，钢琴、柔和鼓点和少量电子氛围。 请先帮我设计歌曲结构。 暂时不要写完整歌词。'
      },
      {
        title: '根据结构写中文歌词 (辅助)',
        desc: '在刚才结构的基础上创作。',
        text: '根据刚才的歌曲结构，帮我写一版中文歌词草稿。 要求： - 使用自然中文 - 每句不要太长 - 主歌负责讲故事 - 副歌表达核心情绪 - 副歌需要一个容易记住的核心句 - 不模仿任何真实歌手 - 不引用任何现有歌曲歌词'
      },
      {
        title: '整理 Suno Style (风格描述)',
        desc: '将想法转化为 Suno 容易理解的 Style 标签。',
        text: '根据下面的歌曲主题，帮我整理一段适合填写到 Suno Styles 的描述。 主题： 下班后的城市散步。 希望： - 中文流行 - 中速 - 温暖但不过度悲伤 - 钢琴为主 - 柔和鼓点 - 少量电子氛围 - 自然男声 - 不模仿任何真实歌手 只输出音乐风格描述，不要写歌词。'
      },
      {
        title: '整理 Exclude (排除不需要的元素)',
        desc: '防止出现不符合情绪的曲风。',
        text: '这首歌希望保持轻松、温暖。 我不希望出现： - 重金属感 - 激烈电吉他 - 很重的鼓点 - 说唱段落 请只帮我整理成简短的 Exclude 内容。 不要重新修改整首歌的风格。'
      },
      {
        title: '修改副歌 (Reuse 辅助)',
        desc: '歌曲方向对，但副歌不够好时。',
        text: '这首歌整体方向已经正确。 现在只修改副歌。 要求： - 主歌完全不动 - 副歌更短 - 保留原来的核心意思 - 更容易记住和重复 - 不添加新的故事 - 不模仿现有歌曲'
      }
    ]
  },
`;

c = c.substring(0, matchStart.index) + sunoObj + c.substring(matchNext.index);
fs.writeFileSync(path, c);
console.log('Updated Suno data in aiTools.ts');
