const fs = require('fs');
const path = 'src/app/guides/[slug]/page.tsx';
let c = fs.readFileSync(path, 'utf8');

if (!c.includes('import CopyButton')) {
  c = c.replace(
    "import JsonLd from '@/components/seo/JsonLd';",
    "import JsonLd from '@/components/seo/JsonLd';\nimport CopyButton from '@/components/ui/CopyButton';"
  );
}

c = c.replace(
  "import { ExternalLink, CheckCircle2, ShieldAlert, Zap, List, ThumbsUp, ThumbsDown, Lightbulb } from 'lucide-react';",
  "import { ExternalLink, CheckCircle2, ShieldAlert, Zap, List, ThumbsUp, ThumbsDown, Lightbulb, AlertCircle } from 'lucide-react';"
);

// We need to branch inside AIToolPage
const standardReturnIndex = c.indexOf('return (\n    <div className="bg-gray-50 min-h-screen pb-20">');
if (standardReturnIndex === -1) {
  console.log("Could not find standard return");
  process.exit(1);
}

const beforeReturn = c.substring(0, standardReturnIndex);
const standardReturnAndAfter = c.substring(standardReturnIndex);

const domesticLayoutCode = `
  if (tool.domesticLayout) {
    return (
      <div className="bg-gray-50 min-h-screen pb-20 text-gray-900">
        <ArticleStickyBar sections={[
          { id: 'intro', navLabel: '简介' },
          { id: 'how-to', navLabel: '国内怎么用' },
          { id: 'troubleshoot', navLabel: '打不开怎么办' },
          { id: 'features', navLabel: '功能' },
          { id: 'prompts', navLabel: '快速上手' },
          { id: 'pricing', navLabel: '方案' },
          { id: 'faq', navLabel: 'FAQ' }
        ]} />
        <FloatingBackButton fallbackHref="/guides" />
        <JsonLd data={jsonLd} />
        <JsonLd data={breadcrumbJsonLd} />
        {faqJsonLd && <JsonLd data={faqJsonLd} />}
        
        <section className="bg-white border-b border-gray-200 pt-12 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <nav className="flex text-sm text-gray-500 mb-8 font-medium">
              <Link href="/" className="hover:text-brand-600 transition-colors">首页</Link>
              <span className="mx-2">/</span>
              <Link href="/guides" className="hover:text-brand-600 transition-colors">AI指南</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{tool.name}</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              {tool.seoH1 || tool.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              {tool.shortDescription}
            </p>
            {tool.domesticIntro && (
              <div className="bg-blue-50 text-blue-800 p-5 rounded-2xl border border-blue-100 text-base leading-relaxed mb-8">
                {tool.domesticIntro}
              </div>
            )}
            
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 mt-0 mb-4">
                <Zap className="w-5 h-5 text-brand-500" /> 30秒速读
              </h3>
              <ul className="space-y-3 m-0 pl-0 list-none text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="shrink-0 text-brand-500 mt-0.5">●</span>
                  <span><strong>官方入口：</strong><a href={tool.officialUrl} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">{tool.officialUrl.replace('https://', '')}</a></span>
                </li>
                {tool.gettingStarted.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 text-brand-500 mt-0.5">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-4xl py-12">
          <div className="prose prose-gray max-w-none">
            
            <h2 id="intro" className="text-2xl font-bold text-gray-900 scroll-mt-24 mb-6">{tool.name} 是什么？适合用来做什么？</h2>
            <p className="text-gray-700">{tool.description}</p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-10 flex flex-wrap gap-2">
              {tool.useCases.map((uc, idx) => (
                <span key={idx} className="bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg text-sm">{uc}</span>
              ))}
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-lg m-0 mb-1 text-gray-900">{tool.name} 官方入口</h3>
                <p className="text-sm text-gray-500 m-0">请认准官方域名：{tool.officialUrl.replace('https://', '')}</p>
              </div>
              <a href={tool.officialUrl} target="_blank" rel="noopener noreferrer" className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2.5 px-6 rounded-xl transition-colors shrink-0 flex items-center gap-2 no-underline">
                前往 {tool.name} 官方 <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <hr className="my-12 border-gray-100" />

            <h2 id="how-to" className="text-2xl font-bold text-gray-900 scroll-mt-24 mb-6">{tool.name} 国内怎么用？</h2>
            <p className="text-gray-700">{tool.overview}</p>
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl mb-8">
              <h4 className="font-bold text-gray-900 m-0 mb-4">开始前请确认：</h4>
              <ul className="space-y-3 m-0 pl-0 list-none text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> OpenAI/官方当前服务支持范围（如当前所在地是否开放服务）</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> 账号是否可以正常登录</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> 当前网络环境是否能够稳定访问服务</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> 产品功能是否在账号当前方案中开放</li>
              </ul>
            </div>
            
            <div className="bg-brand-50 border border-brand-100 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-bold text-brand-900 m-0 mb-1 flex items-center gap-2"><AlertCircle className="w-5 h-5 text-brand-600"/> 网络环境不稳定？</h4>
                <p className="text-sm text-brand-800 m-0">如果工具本身正常，但网络连接长期不稳定，可以查看 RunAI 整理的网络方案与排查记录。</p>
              </div>
              <div className="flex gap-3 shrink-0 flex-col sm:flex-row">
                <Link href="/vpn" className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold py-2.5 px-5 rounded-xl transition-colors text-center no-underline">
                  查看网络方案
                </Link>
                <Link href="/guides/ai-network" className="bg-white border border-brand-200 hover:border-brand-300 text-brand-700 text-sm font-bold py-2.5 px-5 rounded-xl transition-colors text-center no-underline">
                  网络排查指南
                </Link>
              </div>
            </div>

            <hr className="my-12 border-gray-100" />

            <h2 id="troubleshoot" className="text-2xl font-bold text-gray-900 scroll-mt-24 mb-8">{tool.name} 打不开怎么办？</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {tool.domesticSymptoms?.map((sym, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
                  <div className="font-bold text-red-600 mb-3 flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5" /> 症状：{sym.title}
                  </div>
                  <div className="text-sm text-gray-600 font-medium mb-2">优先排查：</div>
                  <ul className="text-sm text-gray-700 m-0 pl-0 list-none space-y-1">
                    {sym.checks.map((chk, i) => (
                      <li key={i} className="flex gap-2"><span className="text-gray-400">-</span> {chk}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 text-white p-6 rounded-2xl mb-12 overflow-hidden">
              <h4 className="text-gray-300 mt-0 mb-4 text-sm font-medium">通用问题排查顺序</h4>
              <div className="flex flex-wrap gap-2 text-xs font-mono items-center">
                <span className="bg-gray-800 px-3 py-1 rounded">01 查看官方状态</span> <span className="text-gray-600">➔</span>
                <span className="bg-gray-800 px-3 py-1 rounded">02 确认普通网络正常</span> <span className="text-gray-600">➔</span>
                <span className="bg-gray-800 px-3 py-1 rounded">03 刷新/无痕窗口</span> <span className="text-gray-600">➔</span>
                <span className="bg-gray-800 px-3 py-1 rounded">04 检查账号登录</span> <span className="text-gray-600">➔</span>
                <span className="bg-gray-800 px-3 py-1 rounded">05 检查地区限制</span> <span className="text-gray-600">➔</span>
                <span className="bg-gray-800 px-3 py-1 rounded">06 检查网络环境</span> <span className="text-gray-600">➔</span>
                <span className="bg-gray-800 px-3 py-1 rounded">07 换设备测试</span>
              </div>
            </div>

            <p className="text-sm text-gray-700">{tool.networkAndRegion}</p>

            <hr className="my-12 border-gray-100" />

            <h2 id="features" className="text-2xl font-bold text-gray-900 scroll-mt-24 mb-6">{tool.name} 国内可以用哪些功能？</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {tool.domesticFunctions?.map((fn, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
                  <h4 className="font-bold text-gray-900 m-0 mb-2">{fn.name}</h4>
                  <p className="text-sm text-gray-600 m-0 mb-3">{fn.desc}</p>
                  <div className="text-xs bg-gray-50 text-gray-500 px-3 py-2 rounded-lg border border-gray-100">
                    注：{fn.limitations}
                  </div>
                </div>
              ))}
            </div>

            <hr className="my-12 border-gray-100" />

            <h2 id="prompts" className="text-2xl font-bold text-gray-900 scroll-mt-24 mb-6">第一次使用 {tool.name}，可以先做什么？</h2>
            <div className="space-y-8 mb-12">
              {tool.domesticPrompts?.map((prompt, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                  <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-gray-50">
                    <h4 className="font-bold text-gray-900 m-0">Prompt {idx + 1}：{prompt.title}</h4>
                    <CopyButton text={prompt.text} />
                  </div>
                  <div className="p-5 text-sm text-gray-800 font-mono whitespace-pre-wrap">{prompt.desc}</div>
                </div>
              ))}
            </div>

            <hr className="my-12 border-gray-100" />

            <h2 id="pricing" className="text-2xl font-bold text-gray-900 scroll-mt-24 mb-6">{tool.name} 免费版够用吗？</h2>
            <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-2xl shadow-sm mb-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h4 className="font-bold text-green-700 m-0 mb-2 flex items-center gap-2">免费方案</h4>
                  <p className="text-sm text-gray-700 m-0">{tool.freePlan}</p>
                </div>
                <div className="w-px bg-gray-200 hidden md:block"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-brand-700 m-0 mb-2 flex items-center gap-2">付费方案</h4>
                  <p className="text-sm text-gray-700 m-0">{tool.pricingType}</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100 text-xs text-gray-500">
                *实际价格与功能开放情况以官方页面当前显示为准。
              </div>
            </div>

            <hr className="my-12 border-gray-100" />

            <h2 id="faq" className="text-2xl font-bold text-gray-900 scroll-mt-24 mb-8">常见问题 FAQ</h2>
            <div className="space-y-6 mb-16">
              {tool.faq.map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mt-0 mb-2">{item.q}</h3>
                  <p className="text-gray-600 text-sm m-0 leading-relaxed whitespace-pre-wrap">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 px-6 py-4 rounded-xl text-sm text-gray-500 mb-12 border border-gray-200">
              <strong className="block text-gray-700 mb-2">资料核对：{tool.lastUpdated}</strong>
              <ul className="m-0 pl-4 space-y-1">
                <li><a href={tool.officialUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 underline text-gray-500">官方网站</a></li>
              </ul>
            </div>

            {/* Bottom CTA */}
            <div className="bg-brand-50 border border-brand-100 p-6 md:p-8 rounded-2xl text-center mb-8">
              <h3 className="font-bold text-brand-900 mt-0 mb-3 text-xl">准备好开始使用海外 AI 工具了吗？</h3>
              <p className="text-sm text-brand-800 mb-6 max-w-xl mx-auto m-0">
                如果 ChatGPT、Claude、Gemini 等工具在当前网络环境下经常出现加载失败或连接不稳定，可以进一步查看 RunAI 的网络方案和测试记录。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/vpn" className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-8 rounded-xl transition-colors no-underline shadow-sm">
                  查看网络方案 ↗
                </Link>
                <Link href="/guides/ai-network" className="bg-white hover:bg-gray-50 border border-brand-200 text-brand-700 font-bold py-3 px-8 rounded-xl transition-colors no-underline">
                  阅读 AI 网络排查指南
                </Link>
              </div>
            </div>

          </div>
          
          {/* Related Tools */}
          {relatedTools.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">你可能还喜欢</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {tool.slug === 'midjourney' && (
                  <Link 
                    href="/guides/midjourney-realistic-portrait"
                    className="bg-brand-50 p-6 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md hover:border-brand-300 transition-all group flex flex-col h-full no-underline"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-600 font-bold shadow-sm">
                        ✨
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors m-0">Midjourney 人像提示词教程</h3>
                    </div>
                    <p className="text-sm text-gray-700 flex-grow line-clamp-2 m-0">真实感人像怎么画？系统拆解光线、镜头与构图写法，附带大量模板。</p>
                  </Link>
                )}
                
                {tool.slug === 'perplexity' && (
                  <Link 
                    href="/guides/perplexity-search-guide"
                    className="bg-brand-50 p-6 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md hover:border-brand-300 transition-all group flex flex-col h-full no-underline"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-600 font-bold shadow-sm">
                        🔍
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors m-0">Perplexity 搜索与引用核对教程</h3>
                    </div>
                    <p className="text-sm text-gray-700 flex-grow line-clamp-2 m-0">怎么查资料？怎么看引用是否可靠？系统掌握 AI 时代的信息核查方法。</p>
                  </Link>
                )}
                
                {tool.slug === 'gamma' && (
                  <Link 
                    href="/guides/gamma-ppt-tutorial"
                    className="bg-brand-50 p-6 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md hover:border-brand-300 transition-all group flex flex-col h-full no-underline"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-600 font-bold shadow-sm">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors m-0">Gamma 做 PPT 教程</h3>
                    </div>
                    <p className="text-sm text-gray-700 flex-grow line-clamp-2 m-0">不会设计？不知道大纲怎么写？从明确主题到排版优化与最终导出，带你完成第一份 AI 演示文稿。</p>
                  </Link>
                )}
                
                {tool.slug === 'suno' && (
                  <Link 
                    href="/guides/suno-chinese-song-tutorial"
                    className="bg-brand-50 p-6 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md hover:border-brand-300 transition-all group flex flex-col h-full no-underline"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-600 font-bold shadow-sm">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors m-0">Suno 中文歌曲生成教程</h3>
                    </div>
                    <p className="text-sm text-gray-700 flex-grow line-clamp-2 m-0">不知道怎么填歌词和音乐风格？从构思、结构、风格描述到后续修改，带你完成一首好听的原创 AI 歌曲。</p>
                  </Link>
                )}
                {['chatgpt', 'claude', 'gemini'].includes(tool.slug) && (
                  <Link 
                    href="/guides/chatgpt-vs-claude-vs-gemini"
                    className="bg-brand-50 p-6 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md hover:border-brand-300 transition-all group flex flex-col h-full no-underline"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-600 font-bold shadow-sm">
                        VS
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors m-0">ChatGPT、Claude、Gemini 对比</h3>
                    </div>
                    <p className="text-sm text-gray-700 flex-grow line-clamp-2 m-0">不知道选哪个？从聊天、写作、编程到文件处理，看看这三款主流 AI 的最强长板与实际差异。</p>
                  </Link>
                )}
                {relatedTools.map(t => (
                  <Link 
                    key={t.slug}
                    href={\`/guides/\${t.slug}\`}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-200 transition-all group flex flex-col h-full no-underline"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center text-brand-600 font-bold">
                        {t.name.charAt(0)}
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors m-0">{t.name}</h3>
                    </div>
                    <p className="text-sm text-gray-500 flex-grow line-clamp-2 m-0">{t.shortDescription}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
`

c = beforeReturn + domesticLayoutCode + '\n\n  // Standard Layout Fallback\n' + standardReturnAndAfter;

fs.writeFileSync(path, c);
console.log('Successfully injected domestic layout branching!');
