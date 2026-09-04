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
    updatedAt: '2026-09-03'
  }
];
