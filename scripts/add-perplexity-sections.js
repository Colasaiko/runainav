const fs = require('fs');
const path = 'src/app/guides/[slug]/page.tsx';
let c = fs.readFileSync(path, 'utf8');

const target = `            {/* Midjourney-specific:`;

const perplexitySections = `            {/* Perplexity-specific: Search tips, Citation card, internal link */}
            {tool.slug === 'perplexity' && (
              <>
                {/* Search Tips */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Perplexity 搜索怎么提问？</h3>
                  <p className="text-sm text-gray-600 mb-4">好的问题通常应该包含：主题、时间范围、来源要求和输出格式。避免过于宽泛的单词。</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 border border-red-100 p-5 rounded-2xl">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-red-500 font-bold">❌ 太宽泛</span>
                      </div>
                      <code className="text-sm text-red-800 bg-red-100/50 px-2 py-1 rounded">英伟达</code>
                      <p className="text-xs text-red-700 mt-3 leading-relaxed">这样搜索只会得到英伟达的公司百科或股价，无法帮你整理最新动态。</p>
                    </div>
                    <div className="bg-green-50 border border-green-100 p-5 rounded-2xl">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-green-600 font-bold">✅ 具体且有要求</span>
                      </div>
                      <code className="text-sm text-green-800 bg-green-100/50 px-2 py-1 rounded block leading-relaxed">请整理英伟达最近 30 天公开的重要 AI 动态。要求：1. 优先使用英伟达官方来源 2. 标明发布日期 3. 区分正式发布和计划 4. 最后列出最值得打开核对的原始页面</code>
                      <p className="text-xs text-green-700 mt-3 leading-relaxed">包含了时间、来源偏好和格式要求，AI 返回的引用会更有价值。</p>
                    </div>
                  </div>
                </div>

                {/* Deep Tutorial Link */}
                <div className="bg-brand-50 border border-brand-100 p-6 rounded-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-brand-900 m-0 mb-1">想系统学习怎么核对 AI 搜索来源？</h4>
                    <p className="text-sm text-brand-800 m-0">阅读包含来源检查、Citation 核对、Research 和文件查询的完整方法。</p>
                  </div>
                  <Link href="/guides/perplexity-search-guide" className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2.5 px-6 rounded-xl transition-colors shrink-0 no-underline">
                    Perplexity 搜索与引用核对教程 →
                  </Link>
                </div>

                {/* Search modes compare */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Search、Pro Search 和 Research 有什么区别？</h3>
                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
                      <h4 className="font-bold text-gray-900 m-0">Search（基础搜索）</h4>
                      <p className="text-sm text-gray-600 m-0 mt-1">适合查询简单事实、快速获取日常问题的直接答案。响应速度最快。</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
                      <h4 className="font-bold text-gray-900 m-0">Pro Search</h4>
                      <p className="text-sm text-gray-600 m-0 mt-1">适合更复杂的问题，AI 会进行多步骤推理并搜索更多相关来源。</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm border-l-4 border-l-brand-500">
                      <h4 className="font-bold text-gray-900 m-0">Research</h4>
                      <p className="text-sm text-gray-600 m-0 mt-1">针对复杂主题的深入搜索，系统地整理大量资料并生成有深度的综合报告。注意：搜索更多来源不等于保证绝对正确，重要事实仍需核对。</p>
                    </div>
                  </div>
                </div>

                {/* Citations Card */}
                <div className="bg-gray-900 p-6 rounded-2xl mb-12">
                  <h3 className="text-white m-0 mb-2 text-lg font-bold">Perplexity 的引用（Citations）怎么看？</h3>
                  <p className="text-gray-400 text-sm m-0 mb-5">有引用 ≠ 已经验证。Citation 只是提供来源，用户仍应该打开原文核查。</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-800 p-4 rounded-xl">
                      <div className="text-brand-400 font-bold mb-2">01. 看是谁发布的</div>
                      <p className="text-gray-300 text-sm leading-relaxed m-0">是产品官网、主流媒体，还是个人论坛？来源的权威性决定了答案的可靠度。</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-xl">
                      <div className="text-brand-400 font-bold mb-2">02. 检查发布日期</div>
                      <p className="text-gray-300 text-sm leading-relaxed m-0">在 AI、价格、产品功能和新闻等时效性强的领域，旧日期的资料可能已经失效。</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-xl">
                      <div className="text-brand-400 font-bold mb-2">03. 打开原文核实</div>
                      <p className="text-gray-300 text-sm leading-relaxed m-0">不要只看 Perplexity 的摘要总结，重要结论一定要亲自点击进入原文确认。</p>
                    </div>
                  </div>
                </div>
              </>
            )}

`;

if (c.includes(target)) {
  c = c.replace(target, perplexitySections + target);
  fs.writeFileSync(path, c);
  console.log('Successfully added Perplexity-specific sections!');
} else {
  console.log('Target not found!');
  process.exit(1);
}
