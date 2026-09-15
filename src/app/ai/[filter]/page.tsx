import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, ArrowRight, Home, ExternalLink } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { aiTools } from '@/data/aiTools';
import { aiCategorySeo } from '@/data/aiCategorySeo';

export function generateStaticParams() {
  return Object.keys(aiCategorySeo).map((filter) => ({
    filter,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ filter: string }> }) { const { filter } = await params;
  const seo = aiCategorySeo[filter];
  if (!seo) {
    return {};
  }
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `https://runainav.com/ai/${filter}`,
    },
  };
}

export default async function AICategoryPage({ params }: { params: Promise<{ filter: string }> }) { const { filter } = await params;
  const seo = aiCategorySeo[filter];
  if (!seo) {
    notFound();
  }

  // Filter tools
  let filteredTools = [];
  if (filter === 'china' || filter === 'global') {
    filteredTools = aiTools.filter(t => t.region === filter);
  } else {
    filteredTools = aiTools.filter(t => t.categories.includes(filter));
  }

  // Related categories
  const allFilters = Object.keys(aiCategorySeo);
  const relatedFilters = allFilters.filter(f => f !== filter && f !== 'china' && f !== 'global').slice(0, 4);

  // Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "RunAI", "item": "https://runainav.com" },
      { "@type": "ListItem", "position": 2, "name": "AI工具大全", "item": "https://runainav.com/ai" },
      { "@type": "ListItem", "position": 3, "name": seo.h1, "item": `https://runainav.com/ai/${filter}` }
    ]
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": seo.title,
    "description": seo.description,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": filteredTools.map((tool, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": tool.name,
        "url": `https://runainav.com/guides/${tool.slug}`
      }))
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": seo.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": seo.faqs.map((faq: { q: string; a: string }) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="flex-grow pb-20 pt-8">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Breadcrumb */}
          <nav className="flex mb-8 text-sm text-gray-500 items-center">
            <Link href="/" className="hover:text-brand-600 transition-colors flex items-center">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/ai" className="hover:text-brand-600 transition-colors">
              AI 工具大全
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">{seo.h1.split('：')[0]}</span>
          </nav>

          {/* Hero Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{seo.h1}</h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl">{seo.intro}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-brand-50/50 rounded-2xl p-6 border border-brand-100/50">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-3 text-sm">30s</span>
                  30秒速读
                </h3>
                <ul className="space-y-3">
                  {seo.quickRead.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <span className="text-brand-500 mr-2 mt-0.5">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center mr-3 text-sm">?</span>
                  如何选择
                </h3>
                <ul className="space-y-3">
                  {seo.howToChoose.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <span className="text-gray-400 mr-2 mt-0.5">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">推荐工具列表 ({filteredTools.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => (
                <div key={tool.slug} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-200 transition-all flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center flex-shrink-0 text-brand-600 font-bold text-xl shadow-sm border border-brand-100/50">
                      {tool.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{tool.name}</h3>
                      <p className="text-sm text-gray-500">{tool.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-6 flex-grow line-clamp-2 leading-relaxed">
                    {tool.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tool.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-gray-50 text-gray-500 rounded-lg text-xs font-medium border border-gray-100">
                        {tag}
                      </span>
                    ))}
                    <span className="px-2.5 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-medium border border-blue-100">
                      {tool.freePlan}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <Link 
                      href={`/guides/${tool.slug}`}
                      className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center"
                    >
                      查看详情 <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    {tool.officialUrl && (
                      <a 
                        href={tool.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
                      >
                        访问官网 <ExternalLink className="w-3.5 h-3.5 ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Suitable For & FAQs */}
          
          {/* Dynamic Content for China */}
          {filter === 'china' && (
            <div className="mb-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">国内AI有哪些？分类大全</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-brand-600 mb-4 border-b border-gray-100 pb-2">💬 国内AI聊天工具</h3>
                  <div className="flex flex-col gap-3">
                    {aiTools.filter(t => t.region === 'china' && t.categories.includes('chat')).slice(0, 5).map(t => (
                      <Link key={t.slug} href={`/guides/${t.slug}`} className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <span className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center font-bold text-gray-700 text-xs">{t.name.charAt(0)}</span>
                        <div>
                          <p className="font-bold text-gray-900 text-sm m-0">{t.name}</p>
                          <p className="text-xs text-gray-500 m-0 truncate w-48">{t.shortDescription}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-600 mb-4 border-b border-gray-100 pb-2">💼 国内AI办公工具</h3>
                  <div className="flex flex-col gap-3">
                    {aiTools.filter(t => t.region === 'china' && t.categories.includes('productivity')).slice(0, 5).map(t => (
                      <Link key={t.slug} href={`/guides/${t.slug}`} className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <span className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center font-bold text-gray-700 text-xs">{t.name.charAt(0)}</span>
                        <div>
                          <p className="font-bold text-gray-900 text-sm m-0">{t.name}</p>
                          <p className="text-xs text-gray-500 m-0 truncate w-48">{t.shortDescription}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-600 mb-4 border-b border-gray-100 pb-2">🎨 国内AI绘图工具</h3>
                  <div className="flex flex-col gap-3">
                    {aiTools.filter(t => t.region === 'china' && t.categories.includes('image')).slice(0, 5).map(t => (
                      <Link key={t.slug} href={`/guides/${t.slug}`} className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <span className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center font-bold text-gray-700 text-xs">{t.name.charAt(0)}</span>
                        <div>
                          <p className="font-bold text-gray-900 text-sm m-0">{t.name}</p>
                          <p className="text-xs text-gray-500 m-0 truncate w-48">{t.shortDescription}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-600 mb-4 border-b border-gray-100 pb-2">🎬 国内AI视频工具</h3>
                  <div className="flex flex-col gap-3">
                    {aiTools.filter(t => t.region === 'china' && t.categories.includes('video')).slice(0, 5).map(t => (
                      <Link key={t.slug} href={`/guides/${t.slug}`} className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <span className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center font-bold text-gray-700 text-xs">{t.name.charAt(0)}</span>
                        <div>
                          <p className="font-bold text-gray-900 text-sm m-0">{t.name}</p>
                          <p className="text-xs text-gray-500 m-0 truncate w-48">{t.shortDescription}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">

            <div className="md:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">适合哪些用户？</h3>
                <ul className="space-y-4">
                  {seo.whoIsItFor.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 mr-2 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">常见问题 FAQ</h2>
                <div className="space-y-6">
                  {seo.faqs.map((faq, idx) => (
                    <div key={idx} className="pb-6 border-b border-gray-50 last:border-0 last:pb-0">
                      <h4 className="text-base font-bold text-gray-900 mb-2">{faq.q}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation & Related */}
          <div className="border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-3 text-center md:text-left">相关分类探索</h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {relatedFilters.map(f => (
                  <Link key={f} href={`/ai/${f}`} className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-600 hover:border-brand-500 hover:text-brand-600 transition-colors">
                    {aiCategorySeo[f].h1.split('：')[0]}
                  </Link>
                ))}
                <Link href="/ai/china" className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-600 hover:border-brand-500 hover:text-brand-600 transition-colors">
                  国内 AI
                </Link>
                <Link href="/ai/global" className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-600 hover:border-brand-500 hover:text-brand-600 transition-colors">
                  海外 AI
                </Link>
              </div>
            </div>
            
            <Link href="/ai" className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors flex-shrink-0">
              回到全部 AI 工具大全
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
