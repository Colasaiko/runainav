const fs = require('fs');
const path = 'src/app/guides/[slug]/page.tsx';
let c = fs.readFileSync(path, 'utf8');

// After the functions grid closing (before the existing HR), insert Cursor-specific sections
const target = `            {/* Gemini-specific: Google ecosystem section */}`;

const cursorSections = `            {/* Cursor-specific: Download cards, Agent workflow, Model/Regions, Privacy, Blog link */}
            {tool.slug === 'cursor' && (
              <>
                {/* Download Install Cards */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Cursor 安装包下载</h3>
                  <p className="text-sm text-gray-500 mb-4">建议从官方 <a href="https://cursor.com/download" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">cursor.com/download</a> 下载，不建议使用第三方下载站或非官方来源。</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { os: 'Windows', icon: '🪟', formats: '.exe 安装包', note: '当前版本以官方下载页为准' },
                      { os: 'macOS', icon: '🍎', formats: 'Apple Silicon / Intel 均支持', note: '具体格式以官方下载页为准' },
                      { os: 'Linux', icon: '🐧', formats: '.deb / .rpm / AppImage', note: '具体格式以官方下载页为准' }
                    ].map((item, i) => (
                      <div key={i} className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm text-center">
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <div className="font-bold text-gray-900 mb-1">{item.os}</div>
                        <div className="text-sm text-gray-600 mb-3">{item.formats}</div>
                        <div className="text-xs text-gray-400">{item.note}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-center">
                    <a href="https://cursor.com/download" target="_blank" rel="noopener noreferrer" className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2.5 px-8 rounded-xl transition-colors inline-flex items-center gap-2 no-underline">
                      前往 Cursor 官方下载 ↗
                    </a>
                  </div>
                </div>

                {/* Agent Workflow Stepper */}
                <div className="bg-gray-900 text-white p-6 rounded-2xl mb-8">
                  <h3 className="text-white mt-0 mb-5 text-lg font-bold">第一次使用 Agent 的推荐流程</h3>
                  <div className="space-y-3 text-sm">
                    {[
                      ['打开项目', '用 Open Folder 打开本地项目目录'],
                      ['让 Agent 先读项目', 'Ctrl/Cmd+I 打开 Agent，先让它分析目录结构，不要马上叫它修改'],
                      ['制定计划', '描述需求，请 Agent 给出涉及文件和修改方案'],
                      ['确认后开始', '核对计划没问题，再让 Agent 开始修改'],
                      ['检查 Diff', '逐文件查看改动，确认没有超出范围的修改'],
                      ['构建验证', '运行 lint / test / build 确认没有引入错误']
                    ].map(([step, desc], i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <span className="bg-brand-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                        <div>
                          <span className="font-bold text-white">{step}</span>
                          <span className="text-gray-400 ml-2">{desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Model / Regions note */}
                <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl mb-8">
                  <h3 className="font-bold text-amber-900 m-0 mb-3 text-lg">为什么有些模型不能选？</h3>
                  <p className="text-sm text-amber-800 m-0 mb-3 leading-relaxed">
                    Cursor 提供来自多个模型提供商的模型。不同提供商可能有各自的地区政策，因此某些模型在特定地区可能不会显示或不可使用。这通常来自模型提供商的限制，而不一定是 Cursor 本身的故障。
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {['使用仍然可用的模型', '切换到 Auto 模式', 'BYOK（需提供商支持当前地区）'].map((opt, i) => (
                      <span key={i} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-lg">{opt}</span>
                    ))}
                  </div>
                </div>

                {/* Privacy Mode note */}
                <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl mb-12">
                  <h3 className="font-bold text-blue-900 m-0 mb-3 text-lg">Cursor Privacy Mode 是什么？</h3>
                  <p className="text-sm text-blue-800 m-0 mb-2 leading-relaxed">
                    Privacy Mode 开启后，Cursor 承诺你的代码不会用于 Cursor 或模型提供商的模型训练。但 AI 功能本身仍需要将代码上下文发送到云端处理，Privacy Mode 控制的是是否用于训练，而非代码是否发送。
                  </p>
                  <p className="text-sm text-blue-800 m-0 leading-relaxed">
                    使用 BYOK 时，数据处理将跟随对应模型提供商的政策，不自动等同于 Cursor 内置模型的 Privacy Mode 承诺。
                  </p>
                </div>

                {/* Cursor Blog Tutorial link */}
                <div className="bg-brand-50 border border-brand-100 p-6 rounded-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-brand-900 m-0 mb-1">想实际用 Cursor 做一个网站？</h4>
                    <p className="text-sm text-brand-800 m-0">查看本站的实战教程，从零到部署完成一个可上线的个人博客。</p>
                  </div>
                  <Link href="/guides/cursor-build-blog" className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2.5 px-6 rounded-xl transition-colors shrink-0 no-underline">
                    Cursor 实战教程 →
                  </Link>
                </div>
              </>
            )}

            `;

if (c.includes(target)) {
  c = c.replace(target, cursorSections + target);
  fs.writeFileSync(path, c);
  console.log('Successfully added Cursor-specific sections!');
} else {
  // insert before Gemini block differently
  const altTarget = `            {/* Gemini-specific`;
  if (c.includes(altTarget)) {
    c = c.replace(altTarget, cursorSections + altTarget);
    fs.writeFileSync(path, c);
    console.log('Successfully added Cursor-specific sections (alt match)!');
  } else {
    console.log('Could not find insertion point!');
    process.exit(1);
  }
}
