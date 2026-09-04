const fs = require('fs');
const path = 'src/app/guides/[slug]/page.tsx';
let c = fs.readFileSync(path, 'utf8');

const targetStr = `<div className="grid grid-cols-1 md:grid-cols-3 gap-6">`;
const replacementStr = `<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['chatgpt', 'claude', 'gemini'].includes(tool.slug) && (
                <Link 
                  href="/guides/chatgpt-vs-claude-vs-gemini"
                  className="bg-brand-50 p-6 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md hover:border-brand-300 transition-all group flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-600 font-bold shadow-sm">
                      VS
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">ChatGPT、Claude、Gemini 对比</h3>
                  </div>
                  <p className="text-sm text-gray-700 flex-grow line-clamp-2">不知道选哪个？从聊天、写作、编程到文件处理，看看这三款主流 AI 的最强长板与实际差异。</p>
                </Link>
              )}`;

c = c.replace(targetStr, replacementStr);
fs.writeFileSync(path, c);
console.log('done modifying slug page');
