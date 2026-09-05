export type GuideType = 'tool' | 'tutorial' | 'troubleshooting';

export interface GuideArticle {
  slug: string;
  title: string;
  description: string;
  type: GuideType;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
}

export const guideArticles: GuideArticle[] = [
  {
    slug: 'perplexity-search-guide',
    title: 'Perplexity搜索与引用核对教程',
    description: '从提问、搜索、引用核对到文件上传与深入研究，本文用实际流程教你使用Perplexity查资料，并说明如何判断来源是否可靠、什么时候需要继续查证。',
    type: 'tutorial',
    category: 'AI搜索',
    tags: ['Perplexity', 'AI搜索', '资料查询', '引用', 'Research'],
    publishedAt: '2026-09-05',
    updatedAt: '2026-09-05'
  },
  {
    slug: 'midjourney-realistic-portrait',
    title: 'Midjourney人像提示词：构图光线教程',
    description: '从人物主体、构图、光线、镜头、景深到皮肤质感，系统拆解Midjourney真实感人像提示词写法，并提供可直接参考的Prompt模板与常见失败排查方法。',
    type: 'tutorial',
    category: 'AI绘图',
    tags: ['Midjourney', 'AI绘图', '提示词', '人像', 'Prompt'],
    publishedAt: '2026-09-05',
    updatedAt: '2026-09-05'
  },
  {
    slug: 'chatgpt-vs-claude-vs-gemini',
    title: 'ChatGPT、Claude、Gemini怎么选？',
    description: '对比ChatGPT、Claude与Gemini在聊天、写作、编程、文件处理、搜索和中文体验等方面的差异，并结合免费功能与使用环境，帮助你按需求选择AI工具。',
    type: 'tool',
    category: 'AI聊天',
    tags: ['ChatGPT', 'Claude', 'Gemini', '工具对比', 'AI选择'],
    publishedAt: '2026-09-04',
    updatedAt: '2026-09-04'
  },
  {
    slug: 'vpn-slow-speed',
    title: '为什么连接VPN后网速会变慢？',
    description: '连接VPN后出现网速下降、延迟升高或视频卡顿，通常与节点距离、线路拥堵、加密开销、本地网络和运营商路由有关。本文用简单方法教你判断原因并逐步排查。',
    type: 'troubleshooting',
    category: '网络环境',
    tags: ['VPN', '网速测试', '延迟'],
    publishedAt: '2026-09-04',
    updatedAt: '2026-09-04'
  },
  {
    slug: 'cursor-build-blog',
    title: 'Cursor搭建个人博客教程',
    description: '从安装Cursor、创建项目、编写提示词到本地预览、上传GitHub与部署网站，本文用新手能看懂的方式演示AI辅助搭建个人博客，并整理常见报错与排查方法。',
    type: 'tutorial',
    category: 'AI编程',
    tags: ['Cursor', '网站制作', 'GitHub'],
    publishedAt: '2026-09-04',
    updatedAt: '2026-09-04'
  },
  {
    slug: 'ai-network',
    title: 'AI工具打不开怎么办？',
    description: '排查网络环境与常见问题，解决 ChatGPT、Claude、Gemini、Cursor 等海外 AI 工具加载缓慢或登录失败的情况。',
    type: 'troubleshooting',
    category: '网络环境',
    tags: ['网络', '常见问题'],
    publishedAt: '2026-09-03',
    updatedAt: '2026-09-04'
  }
];
