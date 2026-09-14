const fs = require('fs');

const conciseTools = [
  // --- DOMESTIC ---
  ['wenxin', 'china', '文小言 (文心一言)', '百度', 'https://yiyan.baidu.com', 'chat', ['chat', 'productivity'], '百度推出的领先AI大模型助手', '文小言（全文心一言）是百度基于文心大模型推出的全能AI助手，在中文理解和本土化知识问答上表现出色。', ['国内AI', '中文大模型', '百度'], false, '有', '免费/会员', '原生支持', '需要', ['网页', 'App'], ['学生', '普通用户', '职场人士']],
  ['xinghuo', 'china', '讯飞星火', '科大讯飞', 'https://xinghuo.xfyun.cn', 'chat', ['chat', 'productivity'], '科大讯飞推出的认知大模型', '讯飞星火大模型具备跨领域知识和语言理解能力，特别在语音交互、数学和逻辑推理上有深厚积累。', ['语音识别', '逻辑推理', '国内AI'], false, '有', '免费使用', '原生支持', '需要', ['网页', 'App', 'PC'], ['学生', '教师', '白领']],
  ['tiangong', 'china', '天工 AI', '昆仑万维', 'https://www.tiangong.cn', 'search', ['search', 'chat', 'productivity'], '国内领先的AI搜索与对话助手', '天工大模型是国内首个双千亿级大模型，在AI搜索、深度总结和音乐生成领域有独特优势。', ['AI搜索', '国内AI', '音乐生成'], false, '有', '免费使用', '原生支持', '需要', ['网页', 'App'], ['研究员', '学生', '创作者']],
  ['metaso', 'china', '秘塔 AI 搜索', '秘塔科技', 'https://metaso.cn', 'search', ['search', 'productivity'], '干净无广告的纯粹AI搜索引擎', '秘塔AI搜索主打无广告、直接给出高质量结构化答案，是查找研报、文献和专业知识的利器。', ['AI搜索', '研报', '学术'], false, '有', '免费使用', '原生支持', '需要', ['网页', '小程序'], ['学者', '研究员', '分析师']],
  ['quark', 'china', '夸克 AI', '阿里夸克', 'https://quark.cn', 'search', ['search', 'productivity'], '集合在夸克浏览器中的全能AI助手', '依托夸克浏览器的强大生态，提供极速搜索、扫描、文档总结与创作等一站式AI服务。', ['浏览器AI', '效率工具', '国内AI'], false, '有', '免费/订阅', '原生支持', '需要', ['网页', 'App'], ['学生', '白领']],
  ['coze', 'china', '扣子 Coze', '字节跳动', 'https://www.coze.cn', 'coding', ['coding', 'productivity', 'chat'], '零代码创建自定义AI智能体的平台', '无论你是否有编程基础，都可以在扣子上快速搭建基于大模型的各种Bot智能体并发布到社交平台。', ['智能体', 'Bot开发', '无代码'], true, '有', '免费/付费', '原生支持', '需要', ['网页'], ['开发者', '自媒体', '发烧友']],
  ['jimeng', 'china', '即梦 AI', '字节跳动', 'https://jimeng.jianying.com', 'image', ['image', 'video'], '字节跳动推出的一站式AI视觉创作平台', '即梦AI提供高品质的AI图片与视频生成服务，与剪映生态深度结合，极大降低了视觉创作门槛。', ['AI绘画', 'AI视频', '国内AI'], true, '有', '免费积分/订阅', '原生支持', '需要', ['网页', 'App'], ['设计师', '视频创作者', '普通用户']],
  ['kling', 'china', '可灵 AI', '快手', 'https://klingai.kuaishou.com', 'video', ['video', 'image'], '快手出品的全球领先AI视频生成大模型', '可灵大模型在生成超长、高动态、高清晰度视频方面达到了国际领先水平。', ['AI视频', '视频生成', '国内AI'], true, '有', '免费积分/订阅', '原生支持', '需要', ['网页'], ['导演', '特效师', '自媒体']],
  ['hailuo', 'china', '海螺 AI', 'MiniMax', 'https://hailuoai.com', 'video', ['video', 'chat', 'music'], '功能全面的对话与视频音乐生成助手', 'MiniMax推出的海螺AI不仅能进行极具个性的语音对话，其视频生成模块在画质与动态上也非常惊艳。', ['语音对话', '视频生成', '国内AI'], false, '有', '免费使用', '原生支持', '需要', ['网页', 'App'], ['创作者', '视频剪辑', '大众用户']],
  ['vidu', 'china', 'Vidu', '生数科技', 'https://www.vidu.studio', 'video', ['video'], '一键生成高一致性视频的AI工具', 'Vidu是一款国产强大的视频生成模型，支持长视频生成，具备多镜头一致性和复杂的物理规律理解。', ['AI视频', '长视频', '国内AI'], false, '有', '免费/订阅', '原生支持', '需要', ['网页'], ['影视从业者', '设计师']],
  ['wanxiang', 'china', '通义万相', '阿里巴巴', 'https://tongyi.aliyun.com/wanxiang', 'image', ['image'], '阿里推出的高质量AI绘画大模型', '通义万相提供强大的文生图、图生图以及图像风格化编辑功能，特别适合电商与创意设计场景。', ['AI绘画', '电商制图', '国内AI'], false, '有', '免费使用', '原生支持', '需要', ['网页'], ['电商美工', '设计师']],
  ['liblib', 'china', 'LiblibAI', 'Liblib', 'https://www.liblib.art', 'image', ['image'], '国内知名的AI绘画模型分享与在线运行社区', 'Liblib是国内最大的Stable Diffusion模型分享社区之一，支持在线免费生图，无需高配电脑。', ['模型分享', 'SD', 'AI绘画社区'], false, '有', '免费算力', '原生支持', '需要', ['网页'], ['AI绘画爱好者', '设计师']],
  ['trae', 'china', 'Trae', '字节跳动', 'https://www.trae.ai', 'coding', ['coding'], '字节跳动推出的自适应AI IDE工具', 'Trae是一款由AI驱动的集成开发环境，深度理解代码逻辑，能自动完成复杂的重构与编写任务。', ['AI编程', 'IDE', '国内AI'], false, '有', '免费', '原生支持', '需要', ['Windows', 'macOS'], ['程序员', '开发者']],
  ['codegeex', 'china', 'CodeGeeX', '智谱AI', 'https://codegeex.cn', 'coding', ['coding'], '免费开源的AI编程助手', '支持数十种编程语言，提供代码补全、注释生成、代码翻译等功能，完全免费的插件体验。', ['代码补全', '开源', '国内AI'], false, '有', '完全免费', '原生支持', '推荐', ['VS Code', 'JetBrains'], ['程序员', '学生']],
  ['comate', 'china', '百度 Comate', '百度', 'https://comate.baidu.com', 'coding', ['coding'], '百度推出的企业级智能代码助手', '基于文心大模型，能够理解复杂的企业级项目代码，提供极具针对性的代码生成与修复方案。', ['企业级', 'AI编程', '国内AI'], false, '有', '免费/企业版', '原生支持', '需要', ['IDE插件'], ['企业开发者', '程序员']],
  ['manus', 'china', 'Manus', 'MetaApp', 'https://manus.im', 'productivity', ['productivity', 'coding'], '全能的AI Agent操作系统助手', 'Manus可以接管你的鼠标和键盘，帮你自动预订机票、写代码、发邮件等，实现全自动操作。', ['智能体', '自动操作', 'RPA'], true, '无', '排队内测中', '原生支持', '需要', ['网页', 'PC'], ['极客', '重度AI用户']],
  ['tingwu', 'china', '通义听悟', '阿里巴巴', 'https://tingwu.aliyun.com', 'productivity', ['productivity', 'audio'], '高效的AI语音转文字与会议总结工具', '通义听悟支持实时语音转写、录音翻译与会议纪要自动生成，是职场人士的办公利器。', ['语音转写', '会议总结', '办公'], false, '有', '免费使用', '原生支持', '需要', ['网页', 'App', '插件'], ['职场人士', '记者', '学生']],

  // --- GLOBAL ---
  ['mistral', 'global', 'Mistral Le Chat', 'Mistral AI', 'https://chat.mistral.ai', 'chat', ['chat', 'coding'], '欧洲领先的开源模型提供商的对话助手', 'Mistral凭借极其高效的小尺寸模型在开源社区广受赞誉，其Le Chat提供了清爽无广告的高质量对话体验。', ['开源大模型', '欧洲AI'], false, '有', '免费使用', '支持', '需要', ['网页'], ['开发者', '极客']],
  ['copilot', 'global', 'Microsoft Copilot', 'Microsoft', 'https://copilot.microsoft.com', 'chat', ['chat', 'productivity', 'search'], '微软推出的全能AI助手（原Bing Chat）', 'Copilot无缝集成了GPT-4的强大能力与必应搜索，提供免费的网络搜索、文档总结与图像生成服务。', ['微软生态', 'GPT-4', 'AI搜索'], true, '有', '免费/Pro版', '支持', '推荐', ['网页', 'Windows', 'App'], ['办公人员', '普通用户']],
  ['poe', 'global', 'Poe', 'Quora', 'https://poe.com', 'chat', ['chat'], '集成全球顶级大模型的AI聚合平台', 'Poe允许用户在一个平台上无缝切换使用GPT-4、Claude 3、Gemini等世界顶级模型，并能创建自己的Bot。', ['聚合模型', '多模型', 'Bot'], false, '有', '免费/订阅', '支持', '需要', ['网页', 'App', 'Mac'], ['极客', 'AI发烧友']],
  ['character-ai', 'global', 'Character.AI', 'Character Technologies', 'https://character.ai', 'chat', ['chat'], '全球最大的AI角色扮演与聊天社区', 'Character.AI允许你与历史名人、动漫角色或自创AI进行极具情感和个性的沉浸式对话。', ['角色扮演', '虚拟陪伴', '娱乐'], false, '有', '免费/订阅', '部分支持', '需要', ['网页', 'App'], ['二次元', '年轻人']],
  ['pi', 'global', 'Pi', 'Inflection AI', 'https://pi.ai', 'chat', ['chat'], '主打高情商与情感陪伴的AI助手', 'Pi被设计为一个富有同理心、友善且极其自然的聊天伙伴，其语音交互体验如同真实的知心朋友。', ['情感陪伴', '语音对话', '高情商'], false, '有', '免费使用', '支持', '需要', ['网页', 'App'], ['大众用户', '心理咨询']],
  ['meta-ai', 'global', 'Meta AI', 'Meta', 'https://meta.ai', 'chat', ['chat', 'image'], 'Meta推出的开源Llama驱动的AI助手', 'Meta AI无缝集成于WhatsApp、Instagram等社交平台，也可在网页端使用，提供顶级的开源对话与图像生成。', ['Llama', 'Meta', '社交AI'], false, '有', '免费使用', '部分支持', '需要', ['网页', 'App'], ['海外用户', '开发者']],
  ['you-com', 'global', 'You.com', 'SuSea Inc.', 'https://you.com', 'search', ['search', 'chat'], '高度可定制的AI搜索引擎', 'You.com不仅提供实时联网搜索，还集成了众多顶级大模型的Research模式，深入解答复杂问题。', ['AI搜索', '研究工具'], false, '有', '免费/订阅', '支持', '需要', ['网页', 'App'], ['研究人员', '学生']],
  ['phind', 'global', 'Phind', 'Phind', 'https://www.phind.com', 'coding', ['coding', 'search'], '专为开发者设计的AI搜索引擎', 'Phind能够深入阅读官方技术文档与GitHub，为程序员提供带有长代码片段和详尽解释的搜索结果。', ['代码搜索', '程序员工具'], false, '有', '免费/Pro版', '支持', '推荐', ['网页', 'IDE插件'], ['程序员', '开发者']],
  ['genspark', 'global', 'Genspark', 'Genspark', 'https://www.genspark.ai', 'search', ['search'], '通过生成Sparkpages聚合信息的AI搜索', 'Genspark不会单纯提供链接，而是为每一次复杂搜索动态生成一个聚合了全网深度信息的百科式页面。', ['AI搜索', '百科生成'], false, '有', '免费使用', '支持', '需要', ['网页'], ['研究人员', '学生']],
  ['consensus', 'global', 'Consensus', 'Consensus', 'https://consensus.app', 'search', ['search', 'productivity'], '基于真实学术论文的AI搜索引擎', 'Consensus只在经过同行评审的科学文献中进行搜索，为你的每一个问题提供严谨的学术引用支持。', ['学术搜索', '文献检索', '论文'], false, '有', '免费/高级版', '支持', '需要', ['网页'], ['学者', '医生', '科研人员']],
  ['elicit', 'global', 'Elicit', 'Ought', 'https://elicit.com', 'search', ['search', 'productivity'], '利用AI分析科研文献的研究助手', 'Elicit可以自动化科研流程，帮你快速筛选数百万篇论文，提取关键数据并总结研究发现。', ['学术研究', '文献分析'], false, '有', '免费/订阅', '支持', '需要', ['网页'], ['科研人员', '博士生']],
  ['scispace', 'global', 'SciSpace', 'SciSpace', 'https://scispace.com', 'productivity', ['productivity', 'search'], '你的科研文献阅读与解析AI副驾', 'SciSpace可以帮你快速阅读PDF格式的学术论文，解释数学公式，并跨文献提取数据。', ['文献阅读', 'PDF解析', '科研'], false, '有', '免费/订阅', '支持', '需要', ['网页'], ['研究生', '科研人员']],
  ['lovable', 'global', 'Lovable', 'Lovable', 'https://lovable.dev', 'coding', ['coding'], '直接生成全栈Web应用的AI工具', 'Lovable极大地扩展了代码生成的能力，不仅是UI组件，更能一键生成并部署带有后端的全栈应用。', ['全栈开发', '代码生成', '无代码'], false, '有', '免费试用/付费', '支持', '需要', ['网页'], ['独立开发者', '设计师']],
  ['windsurf', 'global', 'Windsurf', 'Codeium', 'https://codeium.com/windsurf', 'coding', ['coding'], 'Codeium推出的全新AI驱动IDE', '与Cursor竞争的强力IDE，主打深度的上下文感知与更快速的预测性代码补全，极大提升编码心流。', ['AI IDE', '代码补全', '编程'], false, '有', '免费/订阅', '支持', '需要', ['Windows', 'macOS'], ['程序员', '开发者']],
  ['devin', 'global', 'Devin', 'Cognition', 'https://devin.ai', 'coding', ['coding'], '全球首个自主AI软件工程师', 'Devin可以独立规划复杂项目、阅读文档、编写代码、修复Bug甚至完成整个项目的部署。', ['自主Agent', 'AI工程师', '全自动'], false, '无', '企业付费/内测', '支持', '需要', ['网页'], ['企业', '高级开发者']],
  ['claude-code', 'global', 'Claude Code', 'Anthropic', 'https://anthropic.com', 'coding', ['coding'], 'Anthropic官方推出的CLI编程助手', '运行在你的终端中，深度理解你的本地代码库并执行复杂的大规模代码重构任务。', ['CLI工具', '终端AI', '重构'], false, '无', 'API计费', '支持', '需要', ['CLI'], ['资深程序员', 'DevOps']],
  ['tabnine', 'global', 'Tabnine', 'Tabnine', 'https://www.tabnine.com', 'coding', ['coding'], '注重企业隐私与安全的AI代码补全', 'Tabnine强调代码隐私，模型可完全私有化部署，提供精准的内联代码预测补全功能。', ['代码补全', '企业安全', '隐私'], false, '有', '免费/Pro版', '支持', '需要', ['IDE插件'], ['企业开发者', '注重隐私者']],
  ['sourcegraph-cody', 'global', 'Cody', 'Sourcegraph', 'https://sourcegraph.com/cody', 'coding', ['coding'], '极懂大型企业代码库的AI助手', '依托Sourcegraph强大的代码图谱，Cody能够跨越无数仓库找到上下文，为极复杂的系统解答疑问。', ['企业级', '代码搜索', '大型项目'], false, '有', '免费/订阅', '支持', '需要', ['IDE插件'], ['企业开发者', '资深研发']],
  ['recraft', 'global', 'Recraft', 'Recraft', 'https://www.recraft.ai', 'image', ['image'], '专为专业设计师打造的AI矢量图与插画工具', 'Recraft不仅能生成极其统一风格的插画、图标，更支持无限精度的SVG矢量图导出与精准调色板控制。', ['矢量图', 'UI设计', '插画'], false, '有', '免费/订阅', '支持', '需要', ['网页'], ['UI设计师', '插画师', '前端']],
  ['flux', 'global', 'FLUX', 'Black Forest Labs', 'https://blackforestlabs.ai', 'image', ['image'], '开源图片生成的新王者，支持真实文字渲染', 'FLUX模型在细节逼真度、复杂提示词遵循以及直接生成正确的英文字体方面，甚至超越了Midjourney V6。', ['开源模型', '文字生成', '超写实'], false, '有', '免费/开源部署', '支持', '无需', ['网页', '本地部署'], ['AI绘画师', '开发者']],
  ['stable-diffusion', 'global', 'Stable Diffusion', 'Stability AI', 'https://stability.ai', 'image', ['image'], '改变世界的开源AI图像生成大模型', '完全开源的图像生成基座模型，拥有极其庞大的插件生态（如ControlNet），可实现对图像的像素级精准控制。', ['开源', 'SD', '精准控制'], false, '有', '免费开源', '需第三方支持', '无需', ['本地部署', 'API'], ['发烧友', '专业设计师']],
  ['playground', 'global', 'Playground', 'Playground AI', 'https://playground.com', 'image', ['image'], '提供免费额度与高度可控画布的AI绘画平台', 'Playground不仅提供了友好的提示词界面，其自带的图像编辑画布功能可以让你像使用Photoshop一样修饰AI图片。', ['在线绘画', '图像编辑'], false, '有', '免费/订阅', '支持', '需要', ['网页'], ['普通用户', '设计师']],
  ['krea', 'global', 'Krea', 'Krea AI', 'https://www.krea.ai', 'image', ['image', 'video'], '实时反馈的AI图像与视频渲染工具', 'Krea的独特之处在于实时生成功能：你在画板上随手涂鸦，旁边立即生成逼真的高质量图像。', ['实时渲染', '涂鸦生图', '视觉特效'], false, '有', '免费/订阅', '支持', '需要', ['网页', 'Mac'], ['概念设计师', '创意人员']],
  ['sora', 'global', 'Sora', 'OpenAI', 'https://openai.com/sora', 'video', ['video'], 'OpenAI推出的革命性世界模拟视频模型', 'Sora能够根据文本指令生成长达60秒的高分辨率视频，且高度遵循物理规律与复杂场景设定。', ['视频生成', '世界模型', '物理规律'], false, '无', '内测/企业级', '支持', '需要', ['网页'], ['影视公司', '广告导演']],
  ['google-veo', 'global', 'Google Veo', 'Google', 'https://deepmind.google/technologies/veo', 'video', ['video'], '谷歌推出的1080p高质量视频生成大模型', 'Veo深入理解电影级语言，能够精确控制光影与运镜，生成极具电影质感和高一致性的视频。', ['谷歌AI', '电影质感', '视频生成'], false, '无', '内测中', '支持', '需要', ['网页 (Labs)'], ['创作者', '导演']],
  ['synthesia', 'global', 'Synthesia', 'Synthesia', 'https://www.synthesia.io', 'video', ['video', 'productivity'], '全球领先的AI数字人播报视频生成平台', '只需输入文本，即可让逼真的AI数字人以120多种语言为你播报企业培训、营销或教学视频。', ['数字人', '口播视频', '企业培训'], false, '无', '付费订阅', '支持', '需要', ['网页'], ['企业HR', '营销人员', '自媒体']],
  ['heygen', 'global', 'HeyGen', 'HeyGen', 'https://www.heygen.com', 'video', ['video', 'productivity'], '极简高效的AI视频与视频翻译克隆工具', 'HeyGen不仅提供高度逼真的数字人生成，其爆火的“视频翻译”功能可以连带嘴型完美翻译你的外语视频。', ['视频翻译', '声音克隆', '数字人'], false, '有', '免费试用/订阅', '支持', '需要', ['网页'], ['跨国出海', '自媒体', '企业']],
  ['udio', 'global', 'Udio', 'Udio', 'https://www.udio.com', 'music', ['music', 'audio'], '拥有极佳音质与情感表达的AI音乐生成器', 'Udio在人声表现力、乐器分离度以及整体歌曲结构控制上极具优势，能够生成极其抓耳的热门单曲。', ['AI歌曲', '音乐生成', '高音质'], true, '有', '免费/订阅', '支持', '需要', ['网页'], ['音乐爱好者', '创作者']],
  ['elevenlabs', 'global', 'ElevenLabs', 'ElevenLabs', 'https://elevenlabs.io', 'music', ['audio', 'productivity'], '全球最逼真的AI语音合成与克隆平台', 'ElevenLabs的语音合成彻底消除了机器感，声音充满情感与呼吸细节，是制作有声书和播客的首选。', ['语音合成', '声音克隆', 'TTS'], false, '有', '免费/订阅', '支持', '需要', ['网页', 'API'], ['视频剪辑', '播客', '有声书']],
  ['murf', 'global', 'Murf AI', 'Murf', 'https://murf.ai', 'music', ['audio', 'productivity'], '专业的录音棚级AI画外音生成工具', '专为企业和创作者打造，提供大量专业播音员级别的语音，非常适合产品演示与营销视频配音。', ['专业配音', '画外音', '企业演示'], false, '有', '免费试用/订阅', '支持', '需要', ['网页'], ['营销人员', '教育工作者']],
  ['speechify', 'global', 'Speechify', 'Speechify', 'https://speechify.com', 'productivity', ['audio', 'productivity'], '全球最受欢迎的AI文本朗读助手', 'Speechify可以将任何网页、PDF、文档转化为自然流畅的语音，甚至邀请了Snoop Dogg等明星作为配音。', ['文本转语音', '阅读障碍辅助'], false, '有', '免费/高级版', '支持', '需要', ['网页', 'App', '插件'], ['学生', '阅读障碍者', '通勤族']],
  ['notion-ai', 'global', 'Notion AI', 'Notion', 'https://www.notion.so', 'productivity', ['productivity'], '无缝融入笔记生态的最佳AI协作伙伴', 'Notion AI不仅能帮你写文章、做总结，还能作为整个工作空间的全局搜索与知识库解答大脑。', ['笔记AI', '知识库', '知识管理'], true, '有', '按月附加订阅', '支持', '需要', ['网页', 'App', 'PC'], ['学生', '产品经理', '知识工作者']],
  ['notebooklm', 'global', 'NotebookLM', 'Google', 'https://notebooklm.google.com', 'productivity', ['productivity', 'audio'], '谷歌推出的个性化AI学习与笔记播客工具', '你可以导入自己的文档和笔记，它不仅能精准回答你的提问，还能自动将材料转换成生动有趣的“双人播客”。', ['播客生成', '个人知识库', '学习'], true, '有', '免费使用', '支持', '需要', ['网页'], ['学生', '科研人员', '研究者']],
  ['grammarly', 'global', 'Grammarly', 'Grammarly', 'https://www.grammarly.com', 'productivity', ['productivity'], '最受信任的AI英语写作与语法纠错助手', '无论你是在写邮件还是写论文，Grammarly都能实时纠正语法错误、优化语气并提升英语写作的专业度。', ['英语写作', '语法纠错', '润色'], false, '有', '免费/高级版', '不支持', '需要', ['网页', '插件', 'App'], ['留学生', '外贸人员', '跨国办公']],
  ['quillbot', 'global', 'QuillBot', 'Course Hero', 'https://quillbot.com', 'productivity', ['productivity'], '顶级的AI文本重写与润色降重工具', 'QuillBot擅长对已有段落进行同义词替换、句式重组，极大提高英语论文的润色效率，并规避抄袭风险。', ['文本重写', '润色降重', '学术写作'], false, '有', '免费/高级版', '不支持', '推荐', ['网页', '插件'], ['留学生', '研究员', '文案']],
  ['otter', 'global', 'Otter.ai', 'Otter', 'https://otter.ai', 'productivity', ['productivity', 'audio'], '极具人气的实时在线会议AI记录员', 'Otter可以加入你的Zoom、Teams或Google Meet，实时转写会议内容，识别发言人，并生成摘要。', ['会议记录', '实时转写', '办公'], false, '有', '免费/订阅', '不支持', '需要', ['网页', 'App'], ['外企员工', '项目经理']],
  ['descript', 'global', 'Descript', 'Descript', 'https://www.descript.com', 'video', ['video', 'audio', 'productivity'], '像编辑文档一样编辑音视频的AI革命工具', 'Descript会自动生成视频的文字转写。你只需删除文字，视频中对应的片段就会被无缝剪掉，彻底颠覆了剪辑流程。', ['基于文本剪辑', '播客剪辑', '去口癖'], false, '有', '免费/订阅', '不支持', '需要', ['Windows', 'macOS'], ['播客创作者', '视频自媒体']]
];

// Reconstruct aiTools.ts
const aiToolsPath = 'src/data/aiTools.ts';
let aiToolsContent = fs.readFileSync(aiToolsPath, 'utf8');

function generateToolString(t) {
  const slug = t[0];
  const region = t[1];
  const name = t[2];
  const company = t[3];
  const officialUrl = t[4];
  const category = t[5];
  const categories = t[6];
  const shortDescription = t[7];
  const description = t[8];
  const tags = t[9];
  const featured = t[10];
  const freePlan = t[11];
  const pricingType = t[12];
  const chineseSupport = t[13];
  const accountRequired = t[14];
  const platforms = t[15];
  const bestFor = t[16];
  
  let seoTitle = "";
  let seoDescription = "";
  
  if (category === 'chat') {
    seoTitle = name + '是什么？功能、使用方法与适合人群';
    seoDescription = name + '是由' + company + '推出的一款强大的AI对话助手。本文详细介绍了' + name + '的核心功能、注册使用方法以及其在聊天、文本创作方面的优势。';
  } else if (category === 'search') {
    seoTitle = name + '怎么用？AI搜索、资料整理与使用指南';
    seoDescription = name + '是由' + company + '推出的一款AI搜索与文献整理工具。本文整理了' + name + '在研究、查资料方面的核心优势、使用技巧与官方访问入口。';
  } else if (category === 'coding') {
    seoTitle = name + '是什么？AI编程功能、使用方式与指南';
    seoDescription = name + '是' + company + '推出的一款提升开发效率的AI编程助手。本文详细讲解了' + name + '的代码补全、重构功能、集成方法与适合的开发者人群。';
  } else if (category === 'image') {
    seoTitle = name + '怎么用？AI绘图功能与生成图片指南';
    seoDescription = name + '是' + company + '推出的一款高人气的AI图像生成工具。本文带你了解' + name + '的文生图核心功能、提示词技巧以及设计师如何高效利用它。';
  } else if (category === 'video') {
    seoTitle = name + '怎么用？AI视频生成与主要功能体验指南';
    seoDescription = name + '是' + company + '推出的一款AI视频制作与渲染工具。本文详细介绍了' + name + '的视频生成能力、操作界面、价格方案以及适合的创作场景。';
  } else if (category === 'music' || categories.includes('audio')) {
    seoTitle = name + '怎么用？AI音乐与声音生成全方位指南';
    seoDescription = name + '是' + company + '推出的一款顶尖AI音频创作工具。本文解析了' + name + '在音乐制作、语音合成方面的特色功能、订阅费用与上手教程。';
  } else {
    seoTitle = name + '是什么？功能、核心优势与适合人群';
    seoDescription = name + '是' + company + '推出的一款高效的AI生产力工具。本文带你深入了解' + name + '的特色功能、实际使用场景以及如何用它大幅提升工作效率。';
  }
  
  let str = "  {\n";
  str += "    region: '" + region + "',\n";
  str += "    seoTitle: '" + seoTitle + "',\n";
  str += "    seoDescription: '" + seoDescription + "',\n";
  str += "    seoKeywords: '" + name + "," + company + ",AI工具,AI教程',\n";
  str += "    slug: '" + slug + "',\n";
  str += "    name: '" + name + "',\n";
  str += "    company: '" + company + "',\n";
  str += "    officialUrl: '" + officialUrl + "',\n";
  str += "    category: '" + category + "',\n";
  str += "    categories: " + JSON.stringify(categories) + ",\n";
  str += "    shortDescription: '" + shortDescription + "',\n";
  str += "    description: '" + description + "',\n";
  str += "    tags: " + JSON.stringify(tags) + ",\n";
  str += "    featured: " + featured + ",\n";
  str += "    freePlan: '" + freePlan + "',\n";
  str += "    pricingType: '" + pricingType + "',\n";
  str += "    chineseSupport: '" + chineseSupport + "',\n";
  str += "    accountRequired: '" + accountRequired + "',\n";
  str += "    platforms: " + JSON.stringify(platforms) + ",\n";
  str += "    bestFor: " + JSON.stringify(bestFor) + ",\n";
  str += "    lastUpdated: '2026-09-14',\n";
  str += "    overview: '" + name + "在" + (category === 'chat' ? '对话与创作' : category === 'coding' ? '代码辅助开发' : category === 'image' ? '视觉设计与图片生成' : '垂直领域任务') + "上有着极大的优势，是当前" + (region === 'china' ? '国内市场' : '全球范围') + "非常受关注的工具之一。',\n";
  str += "    features: ['核心功能体验优秀', '交互界面设计友好', '响应速度快速稳定'],\n";
  str += "    useCases: ['日常效率提升', '专业领域深度创作', '复杂问题灵感启发'],\n";
  str += "    gettingStarted: ['访问官方网站并注册账号', '了解基础界面并开启首次使用', '参考进阶提示词或教程提高效率'],\n";
  str += "    networkAndRegion: '" + (region === 'china' ? '国内可用' : '可能需要特殊的网络环境，建议结合官方支持地区使用。') + "',\n";
  str += "    advantages: ['技术实力雄厚', '产品持续迭代快速', '满足垂直场景痛点'],\n";
  str += "    limitations: ['部分高级功能需付费', '对新手存在一定的学习成本'],\n";
  str += "    faq: [\n";
  str += "      { q: '" + name + "完全免费吗？', a: '目前官方" + pricingType + "。基础功能通常可以免费体验，深度使用建议参考官方最新的收费方案。' },\n";
  str += "      { q: '" + name + "需要下载客户端吗？', a: '支持" + platforms.join('和') + "，具体以官网提供的最新下载链接为准。' }\n";
  str += "    ],\n";
  str += "    alternatives: []\n";
  str += "  },";
  
  return str;
}

const existingSlugsMatch = [...aiToolsContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)];
const existingSlugs = new Set(existingSlugsMatch.map(m => m[1]));

let newToolsString = "";
let addedCount = 0;
for (const t of conciseTools) {
  if (!existingSlugs.has(t[0])) {
    newToolsString += generateToolString(t);
    addedCount++;
  }
}

if (newToolsString) {
  aiToolsContent = aiToolsContent.replace(/\n\];\s*$/, ',\n' + newToolsString + '\n];\n');
}

const aliasMap = {
  "千问": "qianwen",
  "智谱GLM": "chatglm",
  "文心一言": "wenxin",
  "腾讯元宝": "yuanbao",
  "豆包": "doubao",
  "DeepSeek": "deepseek",
  "Kimi": "kimi",
  "kling": "kling",
  "codeium": "windsurf",
  "dall-e-3": "chatgpt"
};

for (const [chi, slug] of Object.entries(aliasMap)) {
  aiToolsContent = aiToolsContent.replaceAll('"' + chi + '"', '"' + slug + '"');
  aiToolsContent = aiToolsContent.replaceAll("'" + chi + "'", "'" + slug + "'");
}

fs.writeFileSync(aiToolsPath, aiToolsContent, 'utf8');
console.log('✅ Generated and injected ' + addedCount + ' tools into aiTools.ts');
