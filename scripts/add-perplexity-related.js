const fs = require('fs');
const path = 'src/app/guides/[slug]/page.tsx';
let c = fs.readFileSync(path, 'utf8');

const perplexityBlock = `
              {tool.slug === 'perplexity' && (
                <Link 
                  href="/guides/perplexity-search-guide"
                  className="bg-brand-50 p-6 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md hover:border-brand-300 transition-all group flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-600 font-bold shadow-sm">
                      🔍
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">Perplexity 搜索与引用核对教程</h3>
                  </div>
                  <p className="text-sm text-gray-700 flex-grow line-clamp-2">怎么查资料？怎么看引用是否可靠？系统掌握 AI 时代的信息核查方法。</p>
                </Link>
              )}
`;

// Insert the perplexity block right after the midjourney block or chatgpt block.
c = c.replace(/{\['chatgpt', 'claude', 'gemini'\]\.includes\(tool\.slug\) && \(/, perplexityBlock + `              {['chatgpt', 'claude', 'gemini'].includes(tool.slug) && (`);

fs.writeFileSync(path, c);
