const fs = require('fs');
const path = 'src/app/guides/[slug]/page.tsx';
let c = fs.readFileSync(path, 'utf8');

const target = `            {/* Cursor-specific:`; // Insert before this

const gammaSections = `            {/* Gamma-specific: Warning, Before/After, Export Cards, Checklist, Internal Link */}
            {tool.slug === 'gamma' && (
              <>
                {/* Data Warning */}
                <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl mb-12 flex gap-3">
                  <span className="text-amber-500 text-xl shrink-0">⚠️</span>
                  <div>
                    <div className="font-bold text-amber-900 mb-1">没有数据，就不要让 AI 自己填</div>
                    <p className="text-sm text-amber-800 m-0 leading-relaxed">
                      例如“销售增长 52%”、“市场份额 35%”等。如果用户没提供，Gamma 不应该自己补。正确的做法是要求 AI 在缺少数据的位置标记“此处补充真实数据”。
                    </p>
                  </div>
                </div>

                {/* Before / After Text Density */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">生成的 PPT 字太多怎么办？</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl">
                      <div className="text-gray-500 font-bold mb-4 text-sm uppercase tracking-wider">Before (错误示范)</div>
                      <h4 className="font-bold text-gray-800 mb-3">市场趋势分析</h4>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-300 rounded w-full"></div>
                        <div className="h-2 bg-gray-300 rounded w-11/12"></div>
                        <div className="h-2 bg-gray-300 rounded w-full"></div>
                        <div className="h-2 bg-gray-300 rounded w-10/12"></div>
                        <div className="h-2 bg-gray-300 rounded w-full"></div>
                        <div className="h-2 bg-gray-300 rounded w-9/12"></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-4 leading-relaxed">一页塞满大段连续文字，观众根本无法阅读重点。</p>
                    </div>
                    <div className="bg-brand-50 border border-brand-200 p-6 rounded-2xl">
                      <div className="text-brand-600 font-bold mb-4 text-sm uppercase tracking-wider">After (正确示范)</div>
                      <h4 className="font-bold text-brand-900 mb-3">市场趋势分析</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-500 rounded-full shrink-0"></div><div className="h-2 bg-brand-200 rounded w-10/12"></div></li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-500 rounded-full shrink-0"></div><div className="h-2 bg-brand-200 rounded w-8/12"></div></li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-500 rounded-full shrink-0"></div><div className="h-2 bg-brand-200 rounded w-9/12"></div></li>
                      </ul>
                      <div className="mt-4 p-2 bg-white border border-brand-100 rounded text-xs text-brand-800 font-medium text-center">核心结论：市场需求正在快速向移动端转移</div>
                      <p className="text-xs text-brand-700 mt-4 leading-relaxed">标题 + 3 个重点 + 1 个结论，扫描式阅读效果最佳。</p>
                    </div>
                  </div>
                </div>

                {/* Deep Tutorial Link */}
                <div className="bg-brand-50 border border-brand-100 p-6 rounded-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-brand-900 m-0 mb-1">想完整做一份 PPT？</h4>
                    <p className="text-sm text-brand-800 m-0">阅读 3000 字实战内容：Gamma 做 PPT 教程，从生成到导出。</p>
                  </div>
                  <Link href="/guides/gamma-ppt-tutorial" className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2.5 px-6 rounded-xl transition-colors shrink-0 no-underline">
                    Gamma PPT 实战教程 →
                  </Link>
                </div>

                {/* Export Cards */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Gamma 怎么导出 PPT？</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
                      <div className="font-bold text-gray-900 mb-1">PowerPoint (PPTX)</div>
                      <p className="text-xs text-gray-600 m-0 leading-relaxed">适合导出后继续在 PowerPoint 中修改、微调排版和使用企业模板。</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
                      <div className="font-bold text-gray-900 mb-1">PDF</div>
                      <p className="text-xs text-gray-600 m-0 leading-relaxed">适合通过邮件发送、打印，以及需要绝对固定版式阅读的场景。</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
                      <div className="font-bold text-gray-900 mb-1">PNG</div>
                      <p className="text-xs text-gray-600 m-0 leading-relaxed">适合将单页或全部页面作为图片，插入到其他报告或社交媒体中使用。</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
                      <div className="font-bold text-gray-900 mb-1">Google Slides</div>
                      <p className="text-xs text-gray-600 m-0 leading-relaxed">支持直接导出到 Google Slides 或通过 PPTX 转换，方便在线团队协作。</p>
                    </div>
                  </div>
                </div>

                {/* Export Checklist */}
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl mb-12">
                  <h3 className="text-gray-900 text-lg font-bold mb-4">导出后仍要重新检查</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-4 text-sm text-gray-700">
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500" disabled checked /> 字体</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500" disabled checked /> 图片</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500" disabled checked /> 表格</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500" disabled checked /> 页面断行</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500" disabled checked /> 动画/嵌入内容</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500" disabled checked /> 链接</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500" disabled checked /> 品牌元素</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500" disabled checked /> 页码</label>
                  </div>
                  <p className="text-xs text-gray-500 mt-4 leading-relaxed">Gamma 和 PowerPoint 在渲染方式上存在差异，导出 PPTX 后原排版可能会有细微变化，正式使用前请务必仔细核对。</p>
                </div>
              </>
            )}

`;

if (c.includes(target)) {
  c = c.replace(target, gammaSections + target);
  fs.writeFileSync(path, c);
  console.log('Successfully added Gamma-specific sections!');
} else {
  console.log('Target not found!');
  process.exit(1);
}
