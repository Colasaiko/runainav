const fs = require('fs');
const path = require('path');

const clusters = [
  {
    title: '🧠 Claude 进阶与实战系列',
    color: 'purple',
    icon: '🧠',
    slugs: ['claude-pro-subscribe', 'claude-project-docs', 'chatgpt-vs-claude-vs-gemini'],
    links: [
      { href: '/guides/claude-pro-subscribe', title: 'Claude Pro 升级指南', desc: '畅享 Claude 3.5 Sonnet' },
      { href: '/guides/claude-project-docs', title: 'Project 知识库实战', desc: '打造你的专属 AI 团队' },
      { href: '/guides/chatgpt-vs-claude-vs-gemini', title: '御三家对比评测', desc: '到底应该选哪个大模型？' }
    ]
  },
  {
    title: '🌌 Gemini 生态深度探索',
    color: 'indigo',
    icon: '🌌',
    slugs: ['gemini-subscribe', 'gemini-file-drive-guide', 'gpt-6-astra-guide'],
    links: [
      { href: '/guides/gemini-subscribe', title: 'Gemini Advanced 订阅指南', desc: '解锁 Google One AI 体验' },
      { href: '/guides/gemini-file-drive-guide', title: '联动 Google Drive', desc: '让 AI 帮你管理云盘文件' },
      { href: '/guides/gpt-6-astra-guide', title: 'Project Astra 前瞻', desc: '下一代视觉实时推理模型' }
    ]
  },
  {
    title: '💻 AI 编程与 Cursor 系列',
    color: 'teal',
    icon: '💻',
    slugs: ['cursor-build-blog', 'cursor-copilot-timeout', 'cursor-pro-buy', 'openai-codex'],
    links: [
      { href: '/guides/cursor-build-blog', title: 'Cursor 从零建站实战', desc: '小白也能一键生成个人博客' },
      { href: '/guides/cursor-copilot-timeout', title: '代码补全超时排查', desc: '解决 Cursor 连通性问题' },
      { href: '/guides/cursor-pro-buy', title: 'Pro 额度与购买建议', desc: '无限次极致代码生成体验' }
    ]
  },
  {
    title: '🎨 AI 视觉与图像生成',
    color: 'pink',
    icon: '🎨',
    slugs: ['midjourney-realistic-portrait', 'midjourney-subscribe', 'runway-subscribe'],
    links: [
      { href: '/guides/midjourney-realistic-portrait', title: '真实摄影级人像', desc: '解锁 Midjourney 终极相机参数' },
      { href: '/guides/midjourney-subscribe', title: 'Midjourney 订阅防坑', desc: '新手安全充值与使用避坑指南' },
      { href: '/guides/runway-subscribe', title: 'Runway 视频生成详解', desc: 'Gen-3 Alpha 的震撼表现' }
    ]
  },
  {
    title: '⚡ AI 效率提升精选',
    color: 'yellow',
    icon: '⚡',
    slugs: ['ai-excel-data', 'ai-meeting-notes', 'ai-interview-prep', 'ai-office-workflow', 'gamma-ppt-tutorial'],
    links: [
      { href: '/guides/ai-excel-data', title: 'AI 搞定 Excel 与数据', desc: '无需公式，自动化数据分析' },
      { href: '/guides/ai-office-workflow', title: '打造 AI 办公流', desc: '全方位重塑你的日常工作习惯' },
      { href: '/guides/gamma-ppt-tutorial', title: '一键生成绝美 PPT', desc: '告别排版，Gamma 新手教程' }
    ]
  },
  {
    title: '🌐 AI 网络与连通性排查',
    color: 'red',
    icon: '🌐',
    slugs: ['ai-network', 'ai-outage-or-network', 'ai-packet-loss', 'client-connected-site-unreachable'],
    links: [
      { href: '/guides/ai-network', title: '全局网络问题自检清单', desc: '为什么你的 AI 工具总是连不上？' },
      { href: '/guides/ai-outage-or-network', title: '宕机还是本地问题？', desc: '快速定位官方维护还是环境异常' },
      { href: '/guides/client-connected-site-unreachable', title: '常见 Access Denied', desc: '彻底解决被 Cloudflare 拦截' }
    ]
  }
];

function generateClusterHTML(cluster) {
  const linksHTML = cluster.links.map(link => `
          <Link href="` + link.href + `" className="flex items-start gap-3 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors group">
            <div className="p-2 bg-` + cluster.color + `-100 dark:bg-` + cluster.color + `-900/50 rounded-lg group-hover:scale-110 transition-transform">` + cluster.icon + `</div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">` + link.title + `</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">` + link.desc + `</div>
            </div>
          </Link>
  `).join('');

  return `
      {/* 🚀 Topic Cluster 自动聚合区域 */}
      <section className="mt-16 bg-` + cluster.color + `-50/50 dark:bg-` + cluster.color + `-900/10 rounded-2xl p-8 border border-` + cluster.color + `-100 dark:border-` + cluster.color + `-800/30">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
          <span>` + cluster.icon + `</span> ` + cluster.title + `
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ` + linksHTML + `
        </div>
      </section>
`;
}

clusters.forEach(cluster => {
  const html = generateClusterHTML(cluster);
  
  cluster.slugs.forEach(slug => {
    const filePath = path.join('src/app/guides', slug, 'page.tsx');
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Ensure Link is imported if not present
      if (!content.includes("import Link from 'next/link'") && !content.includes('import Link from "next/link"')) {
        content = content.replace('import', "import Link from 'next/link';\nimport");
      }

      if (!content.includes('🚀 Topic Cluster') && content.includes('</article>')) {
        content = content.replace('</article>', html + '\\n    </article>');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log("Injected " + cluster.title + " into " + slug);
      }
    }
  });
});
