const fs = require('fs');
const path = 'src/app/guides/[slug]/page.tsx';
let c = fs.readFileSync(path, 'utf8');

const target = `            {/* Cursor-specific:`; // Or right before Cursor-specific.

const copilotSections = `            {/* GitHub Copilot-specific: IDE Matrix, Agent Flow, Copilot vs Cursor, Plans, Security Warning */}
            {tool.slug === 'github-copilot' && (
              <>
                {/* IDE Matrix */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Copilot 支持哪些编辑器？</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="text-left p-3 rounded-tl-lg font-bold text-gray-700">编辑器</th>
                          <th className="text-center p-3 font-bold text-gray-700">功能定位</th>
                          <th className="text-center p-3 rounded-tr-lg font-bold text-gray-700">说明</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['VS Code', '功能最全', '支持代码补全、Chat 与深入的 Agent Mode，首选推荐'],
                          ['Visual Studio', '全面支持', '非常适合 .NET / C# 开发者，深度集成'],
                          ['JetBrains', '官方插件', '支持 IntelliJ IDEA、PyCharm、WebStorm 等，具备核心能力'],
                          ['Xcode', 'Apple 生态', '支持 Swift / Objective-C 补全，辅助 iOS/macOS 开发'],
                          ['Eclipse', '部分支持', '已提供部分核心功能支持'],
                          ['Neovim', '轻量补全', '主要以代码补全等极客功能为主']
                        ].map(([ide, status, desc], i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="p-3 font-bold text-gray-900 border-t border-gray-100">{ide}</td>
                            <td className="p-3 text-center text-gray-600 border-t border-gray-100">{status}</td>
                            <td className="p-3 text-left text-gray-600 border-t border-gray-100">{desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">注：不同 IDE 对 Agent 等高级功能的支持程度不同，GitHub 会持续调整，具体以官方 Feature Matrix 为准。</p>
                </div>

                {/* Cloud Agent Flow */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">什么是 Copilot Cloud Agent？</h3>
                  <p className="text-sm text-gray-600 mb-4">不同于在 IDE 内工作的 Agent，Copilot Cloud Agent 可以直接在 GitHub 网站上独立运行，完成跨文件的复杂修改。</p>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4">
                    <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-gray-700">
                      <span className="bg-white px-3 py-1.5 rounded border border-gray-200">输入需求 (Issue)</span> <span className="text-gray-400">→</span>
                      <span className="bg-white px-3 py-1.5 rounded border border-gray-200">Agent 研究代码库</span> <span className="text-gray-400">→</span>
                      <span className="bg-white px-3 py-1.5 rounded border border-gray-200">制定修改计划</span> <span className="text-gray-400">→</span>
                      <span className="bg-white px-3 py-1.5 rounded border border-gray-200">创建新 Branch</span> <span className="text-gray-400">→</span>
                      <span className="bg-white px-3 py-1.5 rounded border border-gray-200">修改代码</span> <span className="text-gray-400">→</span>
                      <span className="bg-white px-3 py-1.5 rounded border border-brand-300 text-brand-700">生成 Pull Request</span> <span className="text-gray-400">→</span>
                      <span className="bg-white px-3 py-1.5 rounded border border-amber-300 text-amber-700 font-bold">人工 Code Review</span>
                    </div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex gap-3 text-sm">
                    <span className="text-amber-500 text-lg shrink-0">⚠️</span>
                    <div className="text-amber-900">
                      <strong>AI 不能直接合代码：</strong>无论是 IDE Agent 还是 Cloud Agent，Copilot 生成的 Pull Request 或代码修改都必须经过你的人工检查、测试确认后，才能合并入主分支。
                    </div>
                  </div>
                </div>

                {/* Copilot vs Cursor */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Copilot 和 Cursor 怎么选？</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
                      <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        GitHub Copilot
                      </h4>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        作为插件，可以完美融入你现有的 VS Code 或 JetBrains 环境。在代码审查、Pull Request 以及企业级组织管理（Organization Policies）上有不可替代的优势。
                      </p>
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">适合谁：</div>
                      <ul className="text-sm text-gray-700 mt-2 space-y-1">
                        <li>• 希望继续使用原生 IDE 习惯的开发者</li>
                        <li>• 高度依赖 GitHub 生态的团队</li>
                      </ul>
                    </div>
                    <div className="bg-brand-50 border border-brand-200 p-6 rounded-2xl shadow-sm">
                      <h4 className="font-bold text-brand-900 text-lg mb-2">Cursor</h4>
                      <p className="text-sm text-brand-800 mb-4 leading-relaxed">
                        作为独立的 AI-first 编辑器，其核心 Agent 工作流、全局代码库理解与多文件修改体验在底层集成得更深、更流畅。
                      </p>
                      <div className="text-xs font-medium text-brand-600 uppercase tracking-wider">适合谁：</div>
                      <ul className="text-sm text-brand-900 mt-2 space-y-1 mb-4">
                        <li>• 愿意为了更强的 AI 体验更换编辑器的用户</li>
                        <li>• 经常需要大范围跨文件重构的开发者</li>
                      </ul>
                      <Link href="/guides/cursor" className="text-sm text-brand-600 hover:underline font-medium block mb-1">了解 Cursor 国内怎么用 →</Link>
                      <Link href="/guides/cursor-build-blog" className="text-sm text-brand-600 hover:underline font-medium">查看 Cursor 开发实战教程 →</Link>
                    </div>
                  </div>
                </div>

                {/* Plans & AI Credits */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Copilot 方案与 AI Credits</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded-xl">
                      <div className="font-bold text-gray-900">Copilot Free</div>
                      <div className="text-xs text-gray-500 mb-2">/ Student</div>
                      <p className="text-xs text-gray-600 leading-relaxed m-0">适合新手和学生。基础模型访问权，每月有额度上限，可胜任日常简单补全。</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-xl">
                      <div className="font-bold text-gray-900">Copilot Pro</div>
                      <div className="text-xs text-gray-500 mb-2">$10 / 月</div>
                      <p className="text-xs text-gray-600 leading-relaxed m-0">适合普通个人开发者。更充裕的使用额度和模型访问，性价比高。</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-xl">
                      <div className="font-bold text-gray-900">Copilot Pro+</div>
                      <div className="text-xs text-gray-500 mb-2">$39 / 月</div>
                      <p className="text-xs text-gray-600 leading-relaxed m-0">更高的 GitHub AI Credits，允许访问进阶模型和更复杂的 Agent 请求。</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-xl">
                      <div className="font-bold text-gray-900">Copilot Max</div>
                      <div className="text-xs text-gray-500 mb-2">$100 / 月</div>
                      <p className="text-xs text-gray-600 leading-relaxed m-0">面向超高使用量的个人开发者。享有最高优先级的模型算力与额度分配。</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">注：GitHub 目前使用 AI Credits 来衡量部分高级 AI 操作的消耗。模型列表和方案内容变动较快，请以官方最新页为准 (核对日期: 2026-09)。</p>
                </div>
              </>
            )}

`;

if (c.includes(target)) {
  c = c.replace(target, copilotSections + target);
  fs.writeFileSync(path, c);
  console.log('Successfully added GitHub Copilot sections!');
} else {
  console.log('Target not found!');
  process.exit(1);
}
