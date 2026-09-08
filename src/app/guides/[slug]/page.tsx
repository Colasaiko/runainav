import ArticleStickyBar from '@/components/navigation/ArticleStickyBar';
import FloatingBackButton from '@/components/navigation/FloatingBackButton';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { aiTools } from '@/data/aiTools';
import { ExternalLink, CheckCircle2, ShieldAlert, Zap, List, ThumbsUp, ThumbsDown, Lightbulb, AlertCircle, Search, HelpCircle } from 'lucide-react';
import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import CopyButton from '@/components/ui/CopyButton';

export async function generateStaticParams() {
  return aiTools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = aiTools.find((t) => t.slug === slug);
  if (!tool) return {};
  
  return {
    title: tool.seoTitle,
    description: tool.seoDescription || tool.shortDescription,
    keywords: tool.seoKeywords,
    alternates: {
      canonical: `https://runainav.com/guides/${slug}`,
    },
    openGraph: {
      title: tool.seoTitle,
      description: tool.seoDescription || tool.shortDescription,
      url: `https://runainav.com/guides/${slug}`,
      siteName: 'RunAI',
      type: 'article',
    }
  };
}

export default async function AIToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = aiTools.find((t) => t.slug === slug);

  if (!tool) {
    notFound();
  }

  const relatedTools = aiTools
    .filter(t => t.slug !== tool.slug && (tool.alternatives.includes(t.slug) || t.category === tool.category))
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.name,
    "operatingSystem": tool.platforms.join(', '),
    "applicationCategory": tool.category,
    "offers": {
      "@type": "Offer",
      "price": tool.pricingType.includes('免费') ? "0" : undefined,
      "priceCurrency": "USD"
    },
    "description": tool.shortDescription,
    "url": `https://runainav.com/guides/${slug}`,
    "publisher": {
      "@type": "Organization",
      "name": tool.company
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "首页",
        "item": "https://runainav.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "AI指南",
        "item": "https://runainav.com/guides"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": tool.name,
        "item": `https://runainav.com/guides/${slug}`
      }
    ]
  };

  const faqJsonLd = tool.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": tool.faq.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  } : null;

  
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

            {/* Perplexity-specific: Search tips, Citation card, internal link */}
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

            {/* Midjourney-specific: Web vs Discord, old user warning, pricing, portrait link */}
            {tool.slug === 'midjourney' && (
              <>
                {/* Web vs Discord compare */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">网页版 vs Discord，应该选哪个？</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="text-left p-3 rounded-tl-lg font-bold text-gray-700">项目</th>
                          <th className="text-center p-3 font-bold text-gray-700">网页版（Web）</th>
                          <th className="text-center p-3 rounded-tr-lg font-bold text-gray-700">Discord</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['新手操作', '更直观', '需要熟悉 Discord'],
                          ['图片生成（Create）', '✅', '✅'],
                          ['Editor', '✅', '❌'],
                          ['Personalization 管理', '✅', '有限制'],
                          ['Moodboards 管理', '✅', '有限制'],
                          ['Conversational Mode', '✅', '❌'],
                          ['Option Sets 创建', '❌', '✅'],
                        ].map(([label, web, discord], i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="p-3 font-medium text-gray-700 border-t border-gray-100">{label}</td>
                            <td className="p-3 text-center text-gray-600 border-t border-gray-100">{web}</td>
                            <td className="p-3 text-center text-gray-600 border-t border-gray-100">{discord}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">* 以上内容以 2026-09-07 官方 Web vs Discord 文档为准，具体功能以官方当前支持为准。建议新手优先尝试网页版。</p>
                </div>

                {/* Old user warning */}
                <div className="bg-blue-50 border border-blue-200 p-5 rounded-2xl mb-8 flex gap-3">
                  <span className="text-blue-500 text-xl shrink-0">ℹ️</span>
                  <div>
                    <div className="font-bold text-blue-900 mb-1">老用户注意</div>
                    <p className="text-sm text-blue-800 m-0 leading-relaxed">
                      如果过去通过 Discord 使用过 Midjourney 并存在旧创作记录，建议优先使用原来的 Discord 账号登录，避免误建新的独立账号或重复购买订阅。
                    </p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Midjourney 套餐一览</h3>
                  <p className="text-sm text-gray-500 mb-4">资料核对：2026-09-07。价格以美元结算，年付约有 20% 折扣（通常一次性支付全年费用）。税费以官方结账页面实际显示为准。</p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { name: 'Basic', price: '$10/月', highlight: '先体验', desc: '适合偶尔使用，先了解 Midjourney 的生成效果' },
                      { name: 'Standard', price: '$30/月', highlight: '日常创作', desc: '适合生成量较大的用户，含 Relax Mode' },
                      { name: 'Pro', price: '$60/月', highlight: 'Stealth Mode', desc: '更高资源，含 Stealth Mode，作品不出现在公共画廊' },
                      { name: 'Mega', price: '$120/月', highlight: '高频使用', desc: '最高使用量，适合大规模创作需求' }
                    ].map((plan, i) => (
                      <div key={i} className="bg-white border border-gray-200 p-4 rounded-2xl shadow-sm">
                        <div className="font-bold text-gray-900 mb-1">{plan.name}</div>
                        <div className="text-brand-600 font-bold text-lg mb-1">{plan.price}</div>
                        <div className="text-xs bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full inline-block mb-2">{plan.highlight}</div>
                        <div className="text-xs text-gray-500 leading-relaxed">{plan.desc}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl mt-4 text-sm text-amber-800">
                    <strong>付款方式：</strong>通过 Stripe 处理，具体可用方式（Visa、Mastercard、Apple Pay、Alipay 等）以结账页面实际显示为准。当前不支持 PayPal。年付方案通常一次性扣除全年费用，请注意不是每月分别扣款。
                  </div>
                </div>

                {/* Portrait tutorial link */}
                <div className="bg-brand-50 border border-brand-100 p-6 rounded-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-brand-900 m-0 mb-1">想进一步学习中文人像 Prompt？</h4>
                    <p className="text-sm text-brand-800 m-0">查看本站的实战教程，学习如何写出真正有效的真实感人像提示词。</p>
                  </div>
                  <Link href="/guides/midjourney-realistic-portrait" className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2.5 px-6 rounded-xl transition-colors shrink-0 no-underline">
                    人像 Prompt 教程 →
                  </Link>
                </div>

                {/* Community note */}
                <div className="bg-gray-50 border border-gray-200 p-5 rounded-2xl mb-12 text-sm text-gray-600">
                  <strong className="text-gray-800">关于社区和隐私：</strong>Midjourney 默认是开放社区环境（open-by-default），生成的图片可能在画廊中对其他用户可见。如果非常在意创作隐私，需要订阅 Pro 或 Mega 方案并开启 Stealth Mode。生成内容需符合 Midjourney Community Guidelines，不得包含暴力、歧视或违规内容。
                </div>
              </>
            )}

                        {/* Gamma-specific: Warning, Before/After, Export Cards, Checklist, Internal Link */}
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

            {/* Suno-specific: Login Warning, Simple vs Custom, Song Structure, Style Formula, Rights Warning, Downloads, Internal Link */}
            {tool.slug === 'suno' && (
              <>
                {/* Login Warning */}
                <div className="bg-blue-50 border border-blue-200 p-5 rounded-2xl mb-12 flex gap-3">
                  <span className="text-blue-500 text-xl shrink-0">ℹ️</span>
                  <div>
                    <div className="font-bold text-blue-900 mb-1">用原来的登录方式回来</div>
                    <p className="text-sm text-blue-800 m-0 leading-relaxed">
                      如果之前用 Google 创建账号，以后尽量继续使用同一个 Google 登录。不要随便换另一个 SSO (如 Discord)，否则你的账号可能看起来像“以前的歌曲全部不见了”。
                    </p>
                  </div>
                </div>

                {/* Simple vs Custom */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Simple Mode 还是 Custom Mode？</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="text-left p-3 rounded-tl-lg font-bold text-gray-700">功能</th>
                          <th className="text-center p-3 font-bold text-gray-700">Simple Mode</th>
                          <th className="text-center p-3 rounded-tr-lg font-bold text-gray-700">Custom Mode</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['适合新手', '✅', '✅'],
                          ['自己填完整歌词', '较少控制', '✅'],
                          ['控制 Style (风格)', '简单描述', '更明确'],
                          ['纯音乐 (Instrumental)', '❌', '✅'],
                          ['高级选项 (Advanced)', '较少', '✅'],
                        ].map(([label, simple, custom], i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="p-3 font-medium text-gray-700 border-t border-gray-100">{label}</td>
                            <td className="p-3 text-center text-gray-600 border-t border-gray-100">{simple}</td>
                            <td className="p-3 text-center text-gray-600 border-t border-gray-100">{custom}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Song Structure Diagram */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">歌曲结构标签怎么填？</h3>
                  <p className="text-sm text-gray-600 mb-4">这是一种最常见的流行歌曲结构，不是唯一正确结构。自己写中文词时，可以在段落前加上中括号标签来引导 AI。</p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {['[Intro]', '[Verse]', '[Pre-Chorus]', '[Chorus]', '[Verse]', '[Chorus]', '[Bridge]', '[Chorus]', '[Outro]'].map((tag, i) => (
                      <div key={i} className="flex items-center">
                        <div className="bg-white border border-gray-300 px-3 py-1.5 rounded-lg text-gray-700 font-mono shadow-sm">
                          {tag}
                          <div className="text-[10px] text-gray-400 text-center mt-0.5">
                            {tag === '[Intro]' ? '前奏' : tag === '[Verse]' ? '主歌' : tag === '[Pre-Chorus]' ? '预副歌' : tag === '[Chorus]' ? '副歌' : tag === '[Bridge]' ? '桥段' : tag === '[Outro]' ? '尾奏' : ''}
                          </div>
                        </div>
                        {i < 8 && <span className="mx-2 text-gray-400">→</span>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Style Formula */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Style (音乐风格) 应该怎么写？</h3>
                  <div className="bg-brand-50 border-l-4 border-l-brand-500 p-5 rounded-r-xl mb-4 text-brand-900">
                    <strong>风格公式 = </strong>音乐类型 + 速度 + 情绪 + 主要乐器 + 人声方向 + 制作感觉
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <div className="bg-white border border-gray-200 p-3 rounded-lg"><strong className="block text-gray-900 mb-1">类型</strong>中文流行 Mandopop<br/>电子流行 Synth-pop</div>
                    <div className="bg-white border border-gray-200 p-3 rounded-lg"><strong className="block text-gray-900 mb-1">速度</strong>中速 Mid-tempo<br/>慢节奏 Slow tempo</div>
                    <div className="bg-white border border-gray-200 p-3 rounded-lg"><strong className="block text-gray-900 mb-1">乐器</strong>钢琴 Piano<br/>原声吉他 Acoustic</div>
                    <div className="bg-white border border-gray-200 p-3 rounded-lg"><strong className="block text-gray-900 mb-1">情绪</strong>温暖 Warm<br/>梦幻 Dreamy</div>
                  </div>
                </div>

                {/* Download Rules (2026-09) */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">歌曲生成与下载规则 (2026-09 更新)</h3>
                  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="bg-gray-50 p-4 border-b border-gray-200">
                      <p className="text-sm text-gray-600 m-0">
                        <strong>注意：</strong>歌曲生成 Credits ≠ 歌曲 Download Credits。Suno 在 2026-09-03 启用了新的下载额度体系，旧教程中“无限下载”的说法已经过时。
                      </p>
                    </div>
                    <div className="p-4 grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <strong className="text-gray-900 block mb-1">Free 方案</strong>
                        <p className="text-gray-600">取决于账号创建时间和试用资格。新用户通常面临较严格的下载限制。</p>
                      </div>
                      <div>
                        <strong className="text-gray-900 block mb-1">Pro 方案</strong>
                        <p className="text-gray-600">每月提供 20 个歌曲下载额度，生成次数按原模型逻辑消耗 Credits。</p>
                      </div>
                      <div>
                        <strong className="text-gray-900 block mb-1">Premier 方案</strong>
                        <p className="text-gray-600">每月提供 60 个歌曲下载额度，享受更多的并发生成优势。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Commercial Use Rights Warning */}
                <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl mb-12 flex gap-3">
                  <span className="text-amber-500 text-xl shrink-0">⚠️</span>
                  <div>
                    <div className="font-bold text-amber-900 mb-1">商业使用权 ≠ 自动获得版权保护</div>
                    <p className="text-sm text-amber-800 m-0 leading-relaxed">
                      Suno 官方明确区分了 Commercial Use Rights（商业使用权）和 Copyright Protection（版权保护）。付费方案（Pro/Premier）允许你商用（发行、盈利等），但 AI 生成的歌曲能否登记版权，取决于你所在国家/地区的法律以及人类创作参与度。如果歌词是你自己原创的，你始终拥有歌词的版权。免费时期生成的歌曲，之后订阅付费通常也不能自动追溯商业许可。
                    </p>
                  </div>
                </div>

                {/* Deep Tutorial Link */}
                <div className="bg-brand-50 border border-brand-100 p-6 rounded-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-brand-900 m-0 mb-1">想真正做一首中文歌？</h4>
                    <p className="text-sm text-brand-800 m-0">阅读实战教程：从歌词结构、风格写法到 Exclude 与 Reuse 实操。</p>
                  </div>
                  <Link href="/guides/suno-chinese-song-tutorial" className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2.5 px-6 rounded-xl transition-colors shrink-0 no-underline">
                    Suno 中文歌曲教程 →
                  </Link>
                </div>
              </>
            )}

            {/* GitHub Copilot-specific: IDE Matrix, Agent Flow, Copilot vs Cursor, Plans, Security Warning */}
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
                        作为插件，可以融入现有 VS Code、JetBrains 等开发工作流。在代码审查、Pull Request 以及企业级组织管理（Organization Policies）上有不可替代的优势。
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

            {/* Cursor-specific: Download cards, Agent workflow, Model/Regions, Privacy, Blog link */}
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
                  <Link href="/guides/perplexity-search-guide" className="inline-flex items-center gap-2 text-amber-700 font-medium text-sm hover:text-amber-800 underline">
                    Perplexity 搜索与引用核对教程 →
                  </Link>
                </div>
              </>
            )}

            <hr className="my-12 border-gray-100" />

            <h2 id="how-to" className="text-2xl font-bold text-gray-900 scroll-mt-24 mb-6">{tool.name} 国内怎么用？</h2>
            <p className="text-gray-700">{tool.overview}</p>
            {tool.domesticWorkflow && tool.domesticWorkflow?.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">基础工作流</h3>
                <div className="bg-white border border-gray-200 rounded-xl p-5 overflow-x-auto shadow-sm">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700 min-w-max">
                    {tool.domesticWorkflow?.map((step, idx) => (
                      <span key={idx} className="flex items-center gap-2">
                        <span className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">{step}</span>
                        {idx < (tool.domesticWorkflow?.length || 0) - 1 && <span className="text-gray-400">→</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl mb-8">
              <h4 className="font-bold text-gray-900 m-0 mb-4">开始前请确认：</h4>
              <ul className="space-y-3 m-0 pl-0 list-none text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> {tool.company || "官方"} 当前服务状态、账号权限与相关服务政策</li>
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
                    href={`/guides/${t.slug}`}
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


  // Standard Layout Fallback
return (
    <div className="bg-gray-50 min-h-screen pb-20">

      <ArticleStickyBar sections={[
         { id: 'what-is', navLabel: '简介' },
         { id: 'features', navLabel: '特色' },
         { id: 'usecases', navLabel: '使用场景' },
         { id: 'pricing', navLabel: '价格' },
         { id: 'how-to-use', navLabel: '网络要求' },
         { id: 'faq', navLabel: 'FAQ' }
      ]} />
      <FloatingBackButton fallbackHref="/guides" />
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}
      
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 pt-16 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-brand-600 transition-colors">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/guides" className="hover:text-brand-600 transition-colors">AI指南</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{tool.name}</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center flex-shrink-0 text-brand-600 font-bold text-4xl shadow-sm border border-brand-100/50">
              {tool.name.charAt(0)}
            </div>
            
            <div className="flex-grow">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{tool.name}</h1>
              <p className="text-xl text-gray-600 mb-6">{tool.shortDescription}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {tool.tags.map((tag, idx) => (
                  <span key={`tag-${idx}`} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href={tool.officialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-brand-600 text-white rounded-xl hover:bg-brand-700 transition-colors font-medium shadow-sm"
                >
                  前往官方 ↗
                </a>
                <Link 
                  href="/vpn"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                >
                  查看网络方案
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-4xl mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column: Main Info */}
          <div className="md:col-span-2 space-y-10">
            {/* 30秒速读 */}
            <section id="quick-read" className="bg-gradient-to-br from-brand-50 to-white p-8 rounded-2xl border border-brand-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-100 rounded-full blur-3xl opacity-50 -mr-10 -mt-10 pointer-events-none"></div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 relative z-10">
                <Zap className="w-5 h-5 text-brand-500" />
                30秒速读
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                {tool.overview}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {/* 优势 */}
                <div className="bg-white/80 backdrop-blur p-5 rounded-xl border border-green-100">
                  <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                    <ThumbsUp className="w-4 h-4 mr-2 text-green-500" /> 核心优势
                  </h3>
                  <ul className="space-y-2">
                    {tool.advantages.map((adv, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start leading-relaxed">
                        <span className="text-green-500 mr-2 font-bold">•</span>{adv}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* 局限 */}
                <div className="bg-white/80 backdrop-blur p-5 rounded-xl border border-amber-100">
                  <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                    <ThumbsDown className="w-4 h-4 mr-2 text-amber-500" /> 局限性
                  </h3>
                  <ul className="space-y-2">
                    {tool.limitations.map((lim, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start leading-relaxed">
                        <span className="text-amber-500 mr-2 font-bold">•</span>{lim}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 快速跳转菜单 */}
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hidden sm:block">
              <h2 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                <List className="w-5 h-5 text-gray-400" />
                快速跳转菜单
              </h2>
              <div className="flex flex-wrap gap-2.5">
                <a href="#what-is" className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm hover:bg-brand-50 hover:text-brand-600 transition-colors">详细介绍</a>
                <a href="#features" className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm hover:bg-brand-50 hover:text-brand-600 transition-colors">核心特色</a>
                <a href="#usecases" className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm hover:bg-brand-50 hover:text-brand-600 transition-colors">使用场景</a>
                <a href="#getting-started" className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm hover:bg-brand-50 hover:text-brand-600 transition-colors">新手入门</a>
                <a href="#network" className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm hover:bg-brand-50 hover:text-brand-600 transition-colors">网络环境</a>
                {tool.faq.length > 0 && (
                  <a href="#faq" className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm hover:bg-brand-50 hover:text-brand-600 transition-colors">常见问题</a>
                )}
              </div>
            </section>

            {/* 什么是 */}
            <section id="what-is" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{tool.name} 是什么？</h2>
              <div className="prose prose-brand max-w-none text-gray-600 leading-relaxed">
                <p>{tool.description}</p>
              </div>
            </section>

            {/* 功能特色 */}
            <section id="features" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">核心特色</h2>
              <ul className="space-y-4">
                {tool.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            {/* 使用场景 */}
            <section id="usecases" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">它可以帮你做什么？</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tool.useCases.map((useCase, idx) => (
                  <li key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-sm text-gray-700">
                    {useCase}
                  </li>
                ))}
              </ul>
            </section>
            
            {/* 新手入门 */}
            <section id="getting-started" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">如何开始使用？</h2>
              <div className="space-y-6">
                {tool.gettingStarted.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 font-bold flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* 国内使用与网络环境 */}
            <section id="network" className="bg-amber-50/50 p-8 rounded-2xl border border-amber-100 scroll-mt-32">
              <div className="flex items-center gap-2 mb-4">
                <ShieldAlert className="w-6 h-6 text-amber-500" />
                <h2 className="text-xl font-bold text-gray-900">国内使用与网络环境</h2>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {tool.networkAndRegion}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/vpn" 
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors font-medium text-sm"
                >
                  查看 RunAI 网络方案
                </Link>
                <Link 
                  href="/guides/ai-network" 
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm"
                >
                  阅读 AI 网络连通指南
                </Link>
              </div>
            </section>
            
            {/* FAQ */}
            {tool.faq.length > 0 && (
              <section id="faq" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 scroll-mt-32">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">常见问题 (FAQ)</h2>
                <div className="space-y-6">
                  {tool.faq.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="font-bold text-gray-900 mb-2 flex items-start">
                        <span className="text-brand-500 mr-2">Q:</span> {item.q}
                      </h3>
                      <p className="text-gray-600 pl-6 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
          
          {/* Right Column: Sidebar */}
          <div>
            <div className="sticky top-24 space-y-6">
              {/* 基本信息 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">基本信息</h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-gray-500 block mb-1">开发公司</span>
                  <span className="font-medium text-gray-900">{tool.company}</span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">免费版本</span>
                  <span className="font-medium text-gray-900">{tool.freePlan}</span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">价格方案</span>
                  <span className="font-medium text-gray-900">{tool.pricingType}</span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">中文支持</span>
                  <span className="font-medium text-gray-900">{tool.chineseSupport}</span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">账号要求</span>
                  <span className="font-medium text-gray-900">{tool.accountRequired}</span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">支持平台</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {tool.platforms.map((p, i) => (
                      <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">{p}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">最适合</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {tool.bestFor.map((p, i) => (
                      <span key={i} className="px-2 py-0.5 bg-brand-50 text-brand-600 rounded text-xs">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-gray-400 text-center">
                最后更新：{tool.lastUpdated}
              </div>
            </div>
              
              {/* 温馨小提示 */}
              <div className="bg-amber-50 p-6 rounded-2xl shadow-sm border border-amber-100">
                <h3 className="text-base font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-500" />
                  温馨小提示
                </h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  使用海外 AI 产品时，请遵守当地法律法规。对于需要海外网络环境的工具，建议提前准备稳定的专线方案以获得最佳体验。
                </p>
                <div className="mt-4">
                  <Link 
                    href="/vpn" 
                    className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center transition-colors"
                  >
                    查看网络连通方案 <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 相关推荐 */}
        {relatedTools.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">你可能还喜欢</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
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
              
              {tool.slug === 'perplexity' && (
                <Link 
                  href="/guides/perplexity-search-guide"
                  className="bg-brand-50 p-6 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md hover:border-brand-300 transition-all group flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-600 font-bold shadow-sm">
                      🔍
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">Perplexity 搜索与引用核对教程</h3>
                  </div>
                  <p className="text-sm text-gray-700 flex-grow line-clamp-2">怎么查资料？怎么看引用是否可靠？系统掌握 AI 时代的信息核查方法。</p>
                </Link>
              )}
              
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
              )}
              {relatedTools.map(t => (
                <Link 
                  key={t.slug}
                  href={`/guides/${t.slug}`}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-200 transition-all group flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center text-brand-600 font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">{t.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500 flex-grow line-clamp-2">{t.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
}
