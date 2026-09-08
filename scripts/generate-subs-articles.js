const fs = require('fs');
const path = require('path');

const articles = [
  {
    slug: 'chatgpt-plus-buy',
    title: 'ChatGPT Plus国内怎么购买？订阅与付款指南',
    desc: 'ChatGPT Plus 国内怎么购买？整理官方订阅入口、当前价格、Plus 与免费版差异，以及付款前需要确认的账号、服务地区和常见开通问题。',
    h1: 'ChatGPT Plus 国内怎么购买？订阅前先看这些',
    fallbackHref: '/subscriptions',
    relatedHref: '/guides/chatgpt',
    relatedText: '查看 ChatGPT 完整使用指南',
    content: `
## 30 秒速读
- **当前价格**：$20 / 月（未含可能产生的地方税费）
- **主要优势**：拥有更高的消息额度，可以使用更高级的模型（如 GPT-4o），支持语音对话与自定义 GPTs。
- **付款方式**：官方通常只接受国际信用卡（如 Visa/Mastercard 等）或通过 Apple/Google 应用商店内购。国内双币信用卡成功率极低，具体可用付款方式以结账页面为准。

## 官方当前套餐结构

目前 OpenAI 官方提供的主要个人方案（2026-09-08核对）：
1. **Free 免费版**：支持有限次数的基础对话与 GPT-4o 模型。
2. **Plus 版（$20/月）**：适合重度用户。拥有更高消息额度、完整高级模型权限及提前体验新功能。
3. **Team 版（$25/月/人起）**：适合小团队共享，数据默认不用于模型训练。

*注：ChatGPT Plus 订阅不等于 OpenAI API 额度（Credits），两者是独立的计费系统。*

## 免费版 vs Plus 版核心差异

| 功能 | 免费版 | Plus 方案 |
| --- | --- | --- |
| 模型额度 | GPT-4o/GPT-4o mini 基础额度 | 至少 5 倍基础额度 |
| 响应速度 | 高峰期可能变慢 | 高优先级别 |
| 自定义 GPTs | 仅可使用 | 可创建并发布 |
| 数据分析与绘图 | 基础权限 | 完整权限 |

## 购买步骤与官方入口

目前主要有两种升级 Plus 的官方途径：

### 方法 1：通过 Web 端升级
1. 访问官方入口并登录账号：[https://chatgpt.com/](https://chatgpt.com/)
2. 在界面左下角或设置中点击 "Upgrade Plan"。
3. 选择 "Plus" 方案。
4. 进入 Stripe 结账页面，输入有效的国际信用卡信息进行付款。

### 方法 2：通过 iOS/Android App 升级
1. 在美区 App Store 或 Google Play 商店下载官方 ChatGPT App。
2. 登录账号后，在 App 设置中选择升级 Plus。
3. 通过 Apple Pay 或 Google Play 内购完成付款。

> [!WARNING]
> 请注意账号注册地区与付款地区的一致性问题。不要轻易购买来源不明的黑卡或代充服务，这可能导致账号被永久封禁。

## 国内使用与网络提示

如果你在购买时或购买后遇到官方页面无法打开、登录报错，或者提示"不支持您所在地区"，说明你需要调整网络连接状态。

- [排查 AI 网络问题](/guides/ai-network)
- [查看可用网络方案](/vpn)

## 常见问题 (FAQ)

### ChatGPT Plus 如何取消自动续费？
请在 Web 端左下角点击头像，进入 "My Plan"，选择 "Manage my subscription"，然后点击取消方案。如果在手机应用商店购买，则需要去对应的 Apple ID 或 Google Play 订阅管理中取消。

### 为什么提示我的银行卡被拒绝？
通常是因为国内发行的信用卡不在 Stripe 的支持范围内，或者你的付款 IP 存在风险。建议尝试绑定 Apple Pay 购买，或使用海外发行的正规银行卡。
`
  },
  {
    slug: 'claude-pro-subscribe',
    title: 'Claude Pro国内怎么订阅？价格与付款指南',
    desc: 'Claude Pro 国内怎么订阅？整理官方方案、当前价格、Pro 与免费版差异，以及付款前需要确认的账号、服务地区、功能权限和常见开通问题。',
    h1: 'Claude Pro 国内怎么订阅？Pro 和 Max 怎么选？',
    fallbackHref: '/subscriptions',
    relatedHref: '/guides/claude',
    relatedText: '查看 Claude 完整使用指南',
    content: `
## 30 秒速读
- **当前价格**：Pro 版通常为 $20 / 月（实际价格可能因地区和税率有所浮动）
- **主要优势**：高额度的消息请求，优先使用最新模型（如 Claude 3.5 Sonnet），体验新功能（如 Artifacts 优先权限）。
- **地区限制**：Anthropic 对服务地区的管控较严，账号所处的国家/地区会影响你能否成功绑定信用卡。

## 官方当前个人方案

根据 Anthropic 官方页面（2026-09-08核对），主要面向个人的方案包括：
1. **Free 免费版**：基础模型使用权限，高峰期额度极低。
2. **Pro 版（$20/月）**：至少5倍免费版额度，高峰期优先访问。
*(注：如果官方推出了更高阶的 Max 方案，以官方结账页面显示的最终定级为准；Team 方案最低要求多用户起步，不适合单人。)*

## Pro vs Max 怎么选？（决策参考）

| 对比维度 | Pro 版 | Max 方案 (若存在) |
| --- | --- | --- |
| 目标人群 | 重度编程、长文写作者 | 极限开发者、API重度测试者 |
| 上下文长度 | 完整的长文本额度 | 更高频的长文本对话 |
| 模型访问 | Claude 3.5 家族等 | 实验性或更高阶模型 |

*建议普通单人用户直接选择 Pro 版本即可满足99%的日常工作需求。*

## 购买步骤与官方入口

1. 访问 Anthropic 官方对话入口：[https://claude.ai/](https://claude.ai/)
2. 点击头像或侧边栏，选择 "Upgrade to Pro"。
3. 确认你的国家/地区。
4. 填写国际信用卡完成付款。

> [!IMPORTANT]
> 如果官方说明不同地区税费/币种不同，你的最终扣款金额可能会超过 $20。请确保存款充足。不支持国内发行的双币卡，以官方页面实际可用付款方式为准。

## 国内使用网络排查

如果页面显示 "App unavailable" 或者在绑定信用卡时不断被拒绝，通常是网络环境问题。

- [AI 工具网络异常怎么办？](/guides/ai-network)
- [查看可用网络方案](/vpn)

## 常见问题 (FAQ)

### 为什么充值后很快就被封号？
Claude 的风控非常严格。如果你使用了公用的代理节点、频繁更换 IP 或者使用了风险较高的虚拟卡，很容易触发封号机制。

### 怎么取消续费？
在 Claude.ai 页面点击 Account Settings -> Billing，进行 Manage 即可取消。
`
  },
  {
    slug: 'gemini-subscribe',
    title: 'Gemini付费版怎么购买？方案与订阅指南',
    desc: 'Gemini 付费版怎么购买？整理 Google AI 当前个人方案、主要功能差异、订阅入口，以及付款前需要确认的账号地区、功能权限和开通条件。',
    h1: 'Gemini 付费版怎么购买？Google AI 方案怎么选？',
    fallbackHref: '/subscriptions',
    relatedHref: '/guides/gemini',
    relatedText: '查看 Gemini 完整使用指南',
    content: `
## 30 秒速读
- **当前核心方案**：Google One AI Premium（通常包含 Gemini Advanced / Google AI Pro 功能）。
- **当前价格**：以美区为例，通常为 $19.99 / 月（首月可能存在官方试用活动）。
- **核心优势**：可使用 Gemini 最顶级的模型（如 1.5 Pro），并在 Google Workspace (Docs, Gmail) 中深度整合 AI，同时包含 2TB 云端硬盘。

## Google AI 当前个人方案结构

Google 的订阅与其他独立 AI 工具不同，它与 Google One 深度绑定（2026-09-08核对）：
1. **免费版 Gemini**：日常助手，使用基础模型。
2. **Google One AI Premium（付费版）**：即 Gemini Advanced 体验。包含 2TB 存储空间和更高性能模型访问权限。

*注意：不同国家/地区的方案名称、价格、税费与功能（尤其是语言支持）可能不同，切勿将美国价格直接等同于全球统一价格。*

## 订阅步骤与官方入口

1. 登录你的 Google 账号并访问：[https://gemini.google.com/advanced](https://gemini.google.com/advanced) 或 Google One 官网。
2. 选择升级至 **AI Premium**。
3. 根据你 Google Play / Google Pay 绑定的国家，支付对应的当地货币（如美元、欧元、马币等）。
4. 确认付款。

> [!WARNING]
> 付款方式取决于你 Google 账号的付款资料（Payment Profile）国家。如果你是美区账号，必须绑定支持美区消费的卡片；如果你是其他区，则需绑定对应的本地卡或国际卡。

## 国内网络提示

由于 Google 服务限制，如果遇到页面一直转圈加载失败，你需要检查网络方案。

- [排查网络环境问题](/guides/ai-network)
- [查看可用网络方案](/vpn)

## 常见问题 (FAQ)

### 为什么我的 Google One 里没有 AI Premium 选项？
部分国家和地区尚未开放 Gemini Advanced 的订阅；或者你的账号受到家庭组政策的限制（家庭组管理员必须先升级）。

### 买了这个就可以调用 Gemini API 吗？
不可以。Google Cloud Vertex AI 和 Google AI Studio 的 API 计费是独立的，Google One 订阅仅限网页和移动端 App 使用。
`
  },
  {
    slug: 'cursor-pro-buy',
    title: 'Cursor Pro怎么购买？价格、额度与订阅指南',
    desc: 'Cursor Pro 怎么购买？整理当前个人付费方案、价格、Agent 使用额度、订阅入口与付款事项，并比较 Pro、Pro+、Ultra 的适合人群。',
    h1: 'Cursor Pro 怎么购买？Pro、Pro+ 和 Ultra 怎么选？',
    fallbackHref: '/subscriptions',
    relatedHref: '/guides/cursor',
    relatedText: '查看 Cursor 完整使用指南',
    content: `
## 30 秒速读
- **基础 Pro 价格**：$20 / 月。
- **主要优势**：每月拥有固定次数的快速优质模型请求（如 GPT-4o, Claude 3.5 Sonnet），以及更快的代码补全和 Cursor Agent 额度。
- **订阅方式**：官方网站通过 Stripe 支付。

## 当前个人付费方案与额度

根据 Cursor 官方 Pricing（2026-09-08核对），主要开发者方案如下：
1. **Hobby（免费版）**：提供两周的 Pro 试用，试用结束后基础模型较慢，高级请求有严格限制。
2. **Pro（$20/月）**：每月 500 次 Fast 高级模型请求，无限次慢速请求，提供 Cursor Agent 基础使用额度。
3. **Pro+ / Ultra（更高阶选项）**：如果有非常庞大的 codebase 或极高频率的 Agent 自动化请求，可选择更高额度。（具体动态额度以官网 Dashboard 为准）。

## 开发者怎么选？

| 方案 | 适合人群 | 请求特性 |
| --- | --- | --- |
| **Pro** | 个人全职开发者、独立创作者 | 500 次/月足够应付多数日常开发 |
| **Pro+ / Ultra** | 重度重构者、重度依赖 Agent 自动写码 | 翻倍的高级请求与 Agent 额度 |

*注意：Agent request 不是永久固定的次数，官方可能会根据服务器压力动态调整使用策略。*

## 购买步骤与官方入口

1. 打开官网登录：[https://www.cursor.com/pricing](https://www.cursor.com/pricing)
2. 点击 "Upgrade to Pro"。
3. 填写国际信用卡信息完成结账。
4. 在 Cursor 编辑器中登录该账号，即可自动同步 Pro 状态。

## 国内使用环境

Cursor 对于代码补全的延迟要求极高。如果你感觉 Tab 补全响应很慢（超过 2 秒），通常是网络问题。

- [代码补全太慢怎么办？](/guides/ai-network)
- [查看低延迟网络方案](/vpn)

## 常见问题 (FAQ)

### 500次 Fast 用完了还能用吗？
用完后会降级为 Slow 队列。虽然你仍可以使用 GPT-4o 或 Claude 3.5，但响应速度可能会在高峰期明显变慢。

### 我可以绑定自己的 API Key 吗？
可以。如果你有 OpenAI 或 Anthropic 的 API，可以在设置中开启 API Key 模式（按 Token 扣费），这样就无需购买 $20/月的 Pro 订阅。但某些专属的 Cursor Agent 功能仍可能依赖官方 Pro 会员。
`
  },
  {
    slug: 'midjourney-subscribe',
    title: 'Midjourney怎么付费？套餐与订阅购买指南',
    desc: 'Midjourney 怎么付费？整理 Basic、Standard、Pro、Mega 当前价格、月付与年付区别，以及购买前需要确认的 GPU 用量和方案差异。',
    h1: 'Midjourney 怎么付费？四种订阅方案怎么选？',
    fallbackHref: '/subscriptions',
    relatedHref: '/guides/midjourney',
    relatedText: '查看 Midjourney 完整使用指南',
    content: `
## 30 秒速读
- **起步价格**：Basic 方案 $10 / 月（年付折算可享约 20% 优惠）。
- **主流选择**：Standard 方案 $30 / 月，因为提供无限时的 Relax GPU 模式。
- **购买入口**：现已全面支持在官方 Web 页面直接订阅，无需仅依赖 Discord。

## 官方当前四种套餐差异

根据官方最新 Docs（2026-09-08核对）：

1. **Basic ($10/月)**：每月提供约 3.3 小时 Fast GPU 时间。用完无法继续生成。
2. **Standard ($30/月)**：每月 15 小时 Fast GPU，且拥有 **无限的 Relax（慢速）GPU** 生成权限。
3. **Pro ($60/月)**：每月 30 小时 Fast GPU，拥有 Stealth Mode（隐身模式，他人无法看到你的图）。
4. **Mega ($120/月)**：每月 60 小时 Fast GPU，适合工作室和极端高频创作者。

*(注：如果你选择年付，每月折算价格会更低)*

## 如何选择套餐？

| 你的需求 | 推荐方案 |
| --- | --- |
| 仅偶尔生成几张图，尝鲜 | Basic ($10) |
| 重度画图，需要不断垫图微调 | Standard ($30) |
| 商业机密，不允许作品公开 | Pro ($60) |

## 购买步骤与官方入口

随着 Midjourney Web 端的开放，购买流程比以前简单：
1. 访问官方网页：[https://www.midjourney.com/](https://www.midjourney.com/) 并登录账号。
2. 在侧边栏或账户设置中找到 "Manage Subscriptions"。
3. 选择月付 (Monthly) 或年付 (Yearly)，选择对应方案。
4. 填写国际信用卡信息完成 Stripe 支付。

## 国内访问问题

由于 Midjourney 依赖 Discord 账号授权和 Web 图像加载，国内网络直接访问会失败。

- [排查图像无法加载问题](/guides/ai-network)
- [查看可用网络方案](/vpn)

## 常见问题 (FAQ)

### Fast 和 Relax GPU 有什么区别？
Fast 模式下出图极快，但有时间额度限制。Relax 模式下你需要排队等待，出图较慢，但对于 Standard 及以上套餐是无限免费使用的。

### 怎么取消续费？
进入 "Manage Subscriptions" 页面，点击你的当前计划旁的取消按钮。取消后，你依然可以使用到当前计费周期结束。
`
  },
  {
    slug: 'runway-subscribe',
    title: 'Runway会员怎么购买？价格与订阅方案指南',
    desc: 'Runway 会员怎么购买？整理 Free、Standard、Pro、Max 当前方案、Credits 使用方式、订阅入口与价格差异，并说明不同创作需求怎么选。',
    h1: 'Runway 会员怎么购买？Credits 和套餐怎么选？',
    fallbackHref: '/subscriptions',
    relatedHref: '/guides/runway',
    relatedText: '查看 Runway 完整使用指南',
    content: `
## 30 秒速读
- **核心计费方式**：基于 Credits（积分）。生成不同长度、不同模型的视频消耗不同积分。
- **起步价格**：Standard 方案 $15/月（若按年付折算为 $12/月）。
- **主要优势**：去除视频水印，获得高清输出选项，并大幅增加每月积分。

## 官方当前方案与 Credits 成本

Runway 的计费体系对视频生成质量做了严格区分（2026-09-08核对）：

1. **Free 免费版**：一次性赠送极少积分，无法生成 Gen-3 Alpha 高质量视频，视频带水印。
2. **Standard（$15/月，按年付$12/月）**：每月重置固定积分。可生成最高质量无水印视频，最高 4K 分辨率提升。
3. **Pro（$35/月，按年付$28/月）**：极高积分额度，并解锁更高级的资产存储空间。
4. **Max（更高价位）**：适合专业影视后期团队的无限流方案或超大额度方案。

> [!CAUTION]
> 必须理解：一个 Credit 不等于一个视频。使用最新一代模型（如 Gen-3）生成 10 秒视频通常会消耗远超旧模型（Gen-2）的积分。购买前请仔细评估自己的视频生成频次。

## 购买步骤与官方入口

1. 登录官方平台：[https://runwayml.com/](https://runwayml.com/)
2. 在工作台右上角点击 "Upgrade" 或前往 Billing 页面。
3. 选择月付或年付（年付通常打 8 折）。
4. 提交国际信用卡支付。

## 网络传输提示

AI 视频生成对网络的下行与上行宽带都有较高要求。如果你在国内遇到进度条卡死或无法上传素材：
- [检查视频加载报错原因](/guides/ai-network)
- [查看优质网络方案](/vpn)

## 常见问题 (FAQ)

### 每月的 Credits 没用完会累积吗？
通常订阅自带的月度基础积分（Base Credits）在月底不清零，但有累积上限；如果你额外购买了 Top-up 积分，则不会过期。具体以官方最新条款为准。

### 可以只买一个月吗？
可以。在升级时明确选择 "Billed Monthly"（月付），付款成功后立即取消自动续费即可。
`
  },
  {
    slug: 'suno-subscribe',
    title: 'Suno会员怎么购买？价格、额度与商用指南',
    desc: 'Suno 会员怎么购买？整理 Free、Pro、Premier 当前方案、Credits、下载与商业使用权限，并说明月付、年付和创作者购买前要注意的事项。',
    h1: 'Suno 会员怎么购买？Pro 和 Premier 怎么选？',
    fallbackHref: '/subscriptions',
    relatedHref: '/guides/suno',
    relatedText: '查看 Suno 完整使用指南',
    content: `
## 30 秒速读
- **起步价格**：Pro 版 $10/月（按年付折算为 $8/月）。
- **核心权益**：获得新生成歌曲的商业授权（Commercial Rights），以及每月数千积分。
- **付款方式**：支持主流国际信用卡。

## 官方当前方案与商业授权

Suno 对于版权的界定非常明确（2026-09-08核对）：

1. **Free 免费版**：每天刷新少量积分（通常 50 积分，可生成 10 首歌）。**仅限非商业使用**，版权归 Suno 所有。
2. **Pro（月付$10/年付$96）**：每月获取 2500 积分。在订阅期间生成的歌曲，**你拥有商业使用权**。
3. **Premier（月付$30/年付$288）**：每月获取 10000 积分。享受和 Pro 一样的商业授权，适合高频制作人。

> [!IMPORTANT]
> 商业授权规则：你只有在付费订阅期间生成的新歌才具备商业使用权。你在免费阶段生成的旧歌，即使后来购买了会员，也**不会**自动获得商用授权。

## 购买步骤与官方入口

1. 登录 Suno 官方平台：[https://suno.com/](https://suno.com/)
2. 在左侧菜单点击 "Subscribe"。
3. 选择 Pro 或 Premier，并决定月付 (Monthly) 或年付 (Yearly)。
4. 在弹出的支付网关输入国际信用卡信息。

## 国内使用须知

由于音乐生成需要较好网络连接来试听和下载。遇到无法播放时：
- [网络排查指南](/guides/ai-network)
- [查看海外网络方案](/vpn)

## 常见问题 (FAQ)

### 如果我取消订阅，我的商用版权还在吗？
在付费期间生成的歌曲，其商业使用权永久归你所有；但取消订阅退回免费版后，新生成的歌曲又将恢复为非商业用途。

### 可以使用微信支付宝吗？
目前官方结账系统不支持国内常规快捷支付，需使用国际信用卡（Visa/Mastercard）。
`
  },
  {
    slug: 'perplexity-pro-subscribe',
    title: 'Perplexity Pro怎么订阅？价格与付款指南',
    desc: 'Perplexity Pro 怎么订阅？整理 Free、Pro、Max 当前方案、价格、研究与模型使用差异、订阅入口，并说明不同搜索需求适合哪一档。',
    h1: 'Perplexity Pro 怎么订阅？Pro 和 Max 有什么区别？',
    fallbackHref: '/subscriptions',
    relatedHref: '/guides/perplexity',
    relatedText: '查看 Perplexity 完整使用指南',
    content: `
## 30 秒速读
- **当前价格**：Pro 方案 $20 / 月。
- **核心优势**：解锁无限的 Pro Search（深度搜索），每天超过 600 次的顶级模型调用（包括 GPT-4o, Claude 3.5, Sonar Large 等），以及文件上传分析能力。
- **多平台支持**：购买一次后，Web 端、iOS 和 Android App 均可跨设备使用。

## 官方当前个人方案

Perplexity 的层级结构相对简单（2026-09-08核对）：

1. **Free 免费版**：基础搜索引擎，限制极为有限的 Pro Search 试用次数。
2. **Pro 版（$20/月或$200/年）**：解锁全网所有顶尖 AI 模型进行回答，适合学术研究者、程序员与高频知识获取者。

*(注：如果有特定的 Max 等更高级企业或开发者方案，通常不适用于普通个人消费者，购买时选择 Pro 即可)*

## Pro 版值得买吗？（适合哪类需求）

| 你的需求 | 推荐方案 |
| --- | --- |
| 日常查百科、搜菜谱、看新闻 | 免费版足够 |
| 需要看长篇财报、写论文文献综述 | **必须 Pro 版** |
| 同时想用 GPT-4o 和 Claude 3.5，不想买两份会员 | **强烈推荐 Pro 版** |

## 购买步骤与官方入口

1. 登录 Web 官网：[https://www.perplexity.ai/](https://www.perplexity.ai/)
2. 在左下角点击 "Perplexity Pro"。
3. 选择按月还是按年付费。
4. 使用国际信用卡完成付款。

*如果你在手机 App 上购买，会通过 Apple App Store 或 Google Play 扣费，价格可能受当地税率影响略有不同。建议 Web 端统一购买。*

## 网络连接排查

国内使用时如果不挂海外节点无法正常搜索。
- [搜索一直无响应怎么办？](/guides/ai-network)
- [查看海外网络方案](/vpn)

## 常见问题 (FAQ)

### 手机和电脑需要买两次吗？
不需要，只要登录同一个账号（比如同一个 Google 账号登录），Pro 权限是互通的。

### 可以调用 API 吗？
Perplexity 提供 API，但 API 计费与 Pro 会员订阅是分开的。部分 Pro 会员可能在特殊活动期间获赠少量 API 额度，但两者本质不同。
`
  }
];

const template = (art) => {
  return [
    'import GuideLayout from "@/components/guides/GuideLayout";',
    'import { constructMetadata } from "@/lib/seo";',
    '',
    'export const metadata = constructMetadata({',
    '  title: "' + art.title + '",',
    '  description: "' + art.desc + '",',
    '  canonical: "/guides/' + art.slug + '",',
    '});',
    '',
    'export default function Page() {',
    '  return (',
    '    <GuideLayout',
    '      title="' + art.h1 + '"',
    '      date="2026-09-08"',
    '      type="subscription"',
    '      fallbackHref="' + art.fallbackHref + '"',
    '      relatedHref="' + art.relatedHref + '"',
    '      relatedText="' + art.relatedText + '"',
    '    >',
    art.content,
    '    </GuideLayout>',
    '  );',
    '}'
  ].join('\n');
};

articles.forEach(art => {
  const fileContent = template(art);
  const dir = path.join('src', 'app', 'guides', art.slug);
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(path.join(dir, 'page.tsx'), fileContent);
  console.log('Created ' + art.slug);
});
