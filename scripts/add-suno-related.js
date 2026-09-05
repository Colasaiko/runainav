const fs = require('fs');
const path = 'src/app/guides/[slug]/page.tsx';
let c = fs.readFileSync(path, 'utf8');

const sunoBlock = `
              {tool.slug === 'suno' && (
                <Link 
                  href="/guides/suno-chinese-song-tutorial"
                  className="bg-brand-50 p-6 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md hover:border-brand-300 transition-all group flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-600 font-bold shadow-sm">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">Suno 中文歌曲生成教程</h3>
                  </div>
                  <p className="text-sm text-gray-700 flex-grow line-clamp-2">不知道怎么填歌词和音乐风格？从构思、结构、风格描述到后续修改，带你完成一首好听的原创 AI 歌曲。</p>
                </Link>
              )}
`;

c = c.replace(/{\['chatgpt', 'claude', 'gemini'\]\.includes\(tool\.slug\) && \(/, sunoBlock + `              {['chatgpt', 'claude', 'gemini'].includes(tool.slug) && (`);

fs.writeFileSync(path, c);
