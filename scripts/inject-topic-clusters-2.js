const fs = require('fs');
const path = require('path');

const chatgptGuides = [
  'chatgpt-what-can-it-do',
  'chatgpt-browser-guide',
  'chatgpt-pdf-guide',
  'chatgpt-compare-files',
  'chatgpt-images-2-5-guide',
  'ai-outage-or-network',
  'chatgpt-jichang'
];

const clusterHTML = `
      {/* 🚀 ChatGPT Topic Cluster 自动聚合区域 */}
      <section className="mt-16 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl p-8 border border-blue-100 dark:border-blue-800/30">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
          <span>📖</span> ChatGPT 深度精选系列
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/guides/chatgpt-what-can-it-do" className="flex items-start gap-3 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors group">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg group-hover:scale-110 transition-transform">✨</div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">ChatGPT 能做什么？</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">零基础看懂的 7 大日常高频场景</div>
            </div>
          </Link>
          <Link href="/guides/chatgpt-pdf-guide" className="flex items-start gap-3 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors group">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg group-hover:scale-110 transition-transform">📄</div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">长文档与 PDF 分析</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">如何让 AI 帮你读财报与论文</div>
            </div>
          </Link>
          <Link href="/tests/chatgpt" className="flex items-start gap-3 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors group">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg group-hover:scale-110 transition-transform">✅</div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">ChatGPT 深度实测报告</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">代码、推理、视觉能力的极限在哪？</div>
            </div>
          </Link>
          <Link href="/guides/chatgpt-jichang" className="flex items-start gap-3 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors group">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg group-hover:scale-110 transition-transform">🌐</div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">网络连通性解决方案</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">解决 Access Denied 与报错问题</div>
            </div>
          </Link>
        </div>
      </section>
`;

chatgptGuides.forEach(slug => {
  const filePath = path.join('src/app/guides', slug, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Ensure Link is imported if not present
    if (!content.includes('import Link from \'next/link\';') && !content.includes('import Link from "next/link";')) {
      content = content.replace('import', "import Link from 'next/link';\nimport");
    }

    if (!content.includes('ChatGPT 深度精选系列') && content.includes('</article>')) {
      content = content.replace('</article>', clusterHTML + '\n    </article>');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Injected Topic Cluster into ' + slug);
    }
  }
});
