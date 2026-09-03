const fs = require('fs');

let pageContent = fs.readFileSync('src/app/guides/page.tsx', 'utf8');
pageContent = pageContent.replace(/AIList/g, 'GuidesList');
pageContent = pageContent.replace(/\/ai/g, '/guides');
pageContent = pageContent.replace(/AI工具大全与测?/g, 'AI使用指南与教?');
pageContent = pageContent.replace(/AI 工具大全/g, 'AI 使用指南');
pageContent = pageContent.replace(/发现适合你的 AI 工具，了解这些前沿工具能帮你做什么，以及如何在国内网络环境下顺利使用?/g, '从入门到实际使用，了解常用 AI 的功能、账号要求、网络环境和常见问题。');
fs.writeFileSync('src/app/guides/page.tsx', pageContent);

let listContent = fs.readFileSync('src/app/guides/GuidesList.tsx', 'utf8');
// Replace AIList => GuidesList
listContent = listContent.replace(/AIList/g, 'GuidesList');
// Replace links /guides/${slug} (which was replaced) back if needed, wait, it was originally copied from aiList.
listContent = listContent.replace(/window\.history\.pushState\(null, '', cat\.id === 'all' \? '\/ai' : `\/ai\?category=\$\{cat\.id\}`\);/g, 
  "window.history.pushState(null, '', cat.id === 'all' ? '/guides' : `/guides?category=${cat.id}`);");

// The AI list card in GuidesList needs to emphasize reading the guide.
const newCardHTML = `              <Link 
                key={tool.slug} 
                href={\`/guides/\${tool.slug}\`}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-200 transition-all group flex flex-col h-full block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center flex-shrink-0 text-brand-600 font-bold text-xl shadow-sm border border-brand-100/50">
                    {tool.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-1">{tool.name} 使用指南</h2>
                    <p className="text-sm text-gray-500">{tool.category}</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-6 flex-grow line-clamp-2 leading-relaxed">
                  了解 {tool.name} 可以做什么、如何开始使用，以及账号与网络环境方面需要注意的问题。
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {tool.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-gray-50 text-gray-500 rounded text-xs border border-gray-100">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    最后更新: {tool.lastUpdated}
                  </span>
                  <span className="flex items-center text-sm font-medium text-brand-600">
                    阅读指南 <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>`;

const oldCardRegex = /<div\s+key=\{tool\.slug\}([\s\S]*?)<\/div>\s*<\/div>/;
listContent = listContent.replace(oldCardRegex, newCardHTML);

// Remove headers from GuidesList that mention "AI 工具"
listContent = listContent.replace(/<LayoutGrid className="w-6 h-6 text-brand-500" \/> 全部 AI 工具/g, '<LayoutGrid className="w-6 h-6 text-brand-500" /> 全部 AI 指南');
listContent = listContent.replace(/目前收录 \{aiTools\.length\} 款常用 AI 工具/g, '目前收录 {aiTools.length} 篇详细的 AI 使用指南');
listContent = listContent.replace(/没有找到相关的 AI 工具/g, '没有找到相关的 AI 指南');

fs.writeFileSync('src/app/guides/GuidesList.tsx', listContent);
console.log('Updated Guides files');
