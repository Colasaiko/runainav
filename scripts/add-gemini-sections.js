const fs = require('fs');
const path = 'src/app/guides/[slug]/page.tsx';
let c = fs.readFileSync(path, 'utf8');

// After the functions grid and before the hr, add a Gemini-specific block for Google ecosystem + Deep Research + Perplexity link
const target = `            </div>

            <hr className="my-12 border-gray-100" />

        `;

const replacement = `            </div>

            {/* Gemini-specific: Google ecosystem section */}
            {tool.slug === 'gemini' && (
              <>
                <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl mb-12">
                  <h3 className="font-bold text-blue-900 m-0 mb-3 text-lg">Gemini 和 Google 服务怎么配合？</h3>
                  <p className="text-sm text-blue-800 m-0 mb-4 leading-relaxed">
                    Gemini 与 Google 服务存在官方整合，包括 Gmail、Google Drive 和 Google Workspace。个人账号与 Workspace 账号（企业 / 学校）的可用功能可能不同，Workspace 账号还可能受管理员政策控制。
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    {[
                      { name: 'Gmail', desc: '直接在 Gmail 中调用 Gemini 辅助撰写、回复邮件' },
                      { name: 'Google Drive', desc: '分析 Drive 中的文件，辅助整理内容' },
                      { name: 'Google Workspace', desc: '在 Docs、Sheets、Slides 中使用 Gemini 辅助' }
                    ].map((item, i) => (
                      <div key={i} className="bg-white p-4 rounded-xl border border-blue-100">
                        <div className="font-bold text-blue-800 mb-1">{item.name}</div>
                        <div className="text-blue-700 text-xs leading-relaxed">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-blue-600 mt-4 m-0">* 具体整合功能以当前账号类型和官方当前支持政策为准。</p>
                </div>

                <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl mb-12">
                  <h3 className="font-bold text-amber-900 m-0 mb-2 text-lg">关于 Deep Research 结果</h3>
                  <p className="text-sm text-amber-800 m-0 mb-3 leading-relaxed">
                    Deep Research 会自动进行多步骤资料收集并生成综合报告，但 AI 研究结果仍需要人工核对重要事实与来源。如果需要学习如何系统核查 AI 给出的来源，可以参考：
                  </p>
                  <a href="/guides/perplexity-search-guide" className="inline-flex items-center gap-2 text-amber-700 font-medium text-sm hover:text-amber-800 underline">
                    Perplexity 搜索与引用核对教程 →
                  </a>
                </div>
              </>
            )}

            <hr className="my-12 border-gray-100" />

        `;

if (c.includes(target)) {
  c = c.replace(target, replacement);
  fs.writeFileSync(path, c);
  console.log('Successfully added Gemini-specific Google ecosystem section!');
} else {
  console.log('Target not found! Here is nearby context:');
  const idx = c.indexOf('domesticFunctions?.map');
  console.log(c.substring(idx + 300, idx + 700));
}
