const fs = require('fs');
const path = 'src/app/guides/[slug]/page.tsx';
let c = fs.readFileSync(path, 'utf8');

const midjourneyBlock = `
              {tool.slug === 'midjourney' && (
                <Link 
                  href="/guides/midjourney-realistic-portrait"
                  className="bg-brand-50 p-6 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md hover:border-brand-300 transition-all group flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-600 font-bold shadow-sm">
                      ✨
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">Midjourney 人像提示词教程</h3>
                  </div>
                  <p className="text-sm text-gray-700 flex-grow line-clamp-2">真实感人像怎么画？系统拆解光线、镜头与构图写法，附带大量模板。</p>
                </Link>
              )}
`;

c = c.replace(/{\['chatgpt', 'claude', 'gemini'\]\.includes\(tool\.slug\) && \(/, midjourneyBlock + `              {['chatgpt', 'claude', 'gemini'].includes(tool.slug) && (`);

fs.writeFileSync(path, c);
