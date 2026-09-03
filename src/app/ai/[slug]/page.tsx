import { notFound } from 'next/navigation';
import Link from 'next/link';
import { aiTools } from '@/data/aiTools';
import { ExternalLink, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Metadata } from 'next';

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
    title: `${tool.name} 是什么？功能、用途与国内使用指南 | RunAI`,
    description: tool.shortDescription,
    alternates: {
      canonical: `https://runainav.com/ai/${slug}`,
    },
    openGraph: {
      title: `${tool.name} 是什么？功能、用途与国内使用指南`,
      description: tool.shortDescription,
      url: `https://runainav.com/ai/${slug}`,
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
    "url": `https://runainav.com/ai/${slug}`,
    "publisher": {
      "@type": "Organization",
      "name": tool.company
    }
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

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 pt-16 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-brand-600 transition-colors">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/ai" className="hover:text-brand-600 transition-colors">AI 工具</Link>
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
                  <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-sm font-medium">
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
                  前往官网 <ExternalLink className="w-4 h-4 ml-2" />
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
            {/* 什么是 */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{tool.name} 是什么？</h2>
              <div className="prose prose-brand max-w-none text-gray-600 leading-relaxed">
                <p>{tool.description}</p>
                <p className="mt-4">{tool.overview}</p>
              </div>
            </section>

            {/* 功能特色 */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
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
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
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
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
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
            <section className="bg-amber-50/50 p-8 rounded-2xl border border-amber-100">
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
                  href="/coming-soon" 
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm"
                >
                  阅读 AI 网络连通指南
                </Link>
              </div>
            </section>
            
            {/* FAQ */}
            {tool.faq.length > 0 && (
              <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
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
          <div className="space-y-6">
            {/* 基本信息 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
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
          </div>
        </div>
        
        {/* 相关推荐 */}
        {relatedTools.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">你可能还喜欢</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTools.map(t => (
                <Link 
                  key={t.slug}
                  href={`/ai/${t.slug}`}
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
