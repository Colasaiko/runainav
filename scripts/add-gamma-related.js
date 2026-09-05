const fs = require('fs');
const path = 'src/app/guides/[slug]/page.tsx';
let c = fs.readFileSync(path, 'utf8');

const gammaBlock = `
              {tool.slug === 'gamma' && (
                <Link 
                  href="/guides/gamma-ppt-tutorial"
                  className="bg-brand-50 p-6 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md hover:border-brand-300 transition-all group flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-600 font-bold shadow-sm">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">Gamma 做 PPT 教程</h3>
                  </div>
                  <p className="text-sm text-gray-700 flex-grow line-clamp-2">不会设计？不知道大纲怎么写？从明确主题到排版优化与最终导出，带你完成第一份 AI 演示文稿。</p>
                </Link>
              )}
`;

// Insert the gamma block right before or after the perplexity block
c = c.replace(/{\['chatgpt', 'claude', 'gemini'\]\.includes\(tool\.slug\) && \(/, gammaBlock + `              {['chatgpt', 'claude', 'gemini'].includes(tool.slug) && (`);

fs.writeFileSync(path, c);
