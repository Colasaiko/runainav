import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Home, CheckCircle2, ExternalLink } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { aiComparisons } from '@/data/aiComparisons';
import { aiTools } from '@/data/aiTools';

export function generateStaticParams() {
  return aiComparisons.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comparison = aiComparisons.find((c) => c.slug === slug);
  if (!comparison) return {};
  return {
    title: comparison.title,
    description: comparison.description,
    alternates: {
      canonical: `https://runainav.com/compare/${slug}`,
    },
  };
}

export default async function CompareDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comparison = aiComparisons.find((c) => c.slug === slug);
  if (!comparison) {
    notFound();
  }

  const toolA = aiTools.find(t => t.slug === comparison.toolA);
  const toolB = aiTools.find(t => t.slug === comparison.toolB);

  if (!toolA || !toolB) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "RunAI", "item": "https://runainav.com" },
      { "@type": "ListItem", "position": 2, "name": "AI 工具对比", "item": "https://runainav.com/compare" },
      { "@type": "ListItem", "position": 3, "name": comparison.title, "item": `https://runainav.com/compare/${slug}` }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": comparison.title,
    "description": comparison.description,
    "datePublished": comparison.publishedAt,
    "dateModified": comparison.updatedAt,
    "author": {
      "@type": "Organization",
      "name": "RunAI"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": comparison.faq.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="flex-grow pb-20 pt-8">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <nav className="flex mb-8 text-sm text-gray-500 items-center">
            <Link href="/" className="hover:text-brand-600 transition-colors flex items-center">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/compare" className="hover:text-brand-600 transition-colors">
              AI 工具对比
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium truncate">{toolA.name} vs {toolB.name}</span>
          </nav>

          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-6 mb-6">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center text-brand-600 font-bold text-3xl shadow-sm border border-brand-100/50 mb-3">
                  {toolA.name.charAt(0)}
                </div>
                <span className="font-bold text-gray-900">{toolA.name}</span>
              </div>
              <div className="text-2xl font-black text-gray-300 italic px-4">VS</div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 font-bold text-3xl shadow-sm border border-blue-100/50 mb-3">
                  {toolB.name.charAt(0)}
                </div>
                <span className="font-bold text-gray-900">{toolB.name}</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{comparison.title}</h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">{comparison.intro}</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-3 text-sm">30s</span>
              30 秒速读
            </h2>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <p className="text-gray-700 leading-relaxed text-lg font-medium">{comparison.quickVerdict}</p>
              <p className="text-gray-500 mt-4 text-sm">💡 没有绝对更好，关键看你的具体使用场景。</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="py-5 px-6 font-semibold text-gray-500 w-1/4">对比维度</th>
                  <th className="py-5 px-6 font-bold text-gray-900 w-3/8 text-lg">{toolA.name}</th>
                  <th className="py-5 px-6 font-bold text-gray-900 w-3/8 text-lg">{toolB.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-50">
                  <td className="py-5 px-6 font-medium text-gray-700">基础定位</td>
                  <td className="py-5 px-6 text-gray-600">{toolA.shortDescription}</td>
                  <td className="py-5 px-6 text-gray-600">{toolB.shortDescription}</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-5 px-6 font-medium text-gray-700">免费方案</td>
                  <td className="py-5 px-6 text-gray-600">{toolA.freePlan}</td>
                  <td className="py-5 px-6 text-gray-600">{toolB.freePlan}</td>
                </tr>
                {comparison.dimensions.map((dim, idx) => (
                  <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                    <td className="py-5 px-6 font-medium text-gray-700">{dim.label}</td>
                    <td className="py-5 px-6 text-gray-600">{dim.toolA}</td>
                    <td className="py-5 px-6 text-gray-600">{dim.toolB}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-brand-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                谁更适合选择 {toolA.name}？
              </h3>
              <ul className="space-y-4">
                {comparison.bestForA.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a 
                  href={toolA.officialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-brand-50 text-brand-700 rounded-xl font-medium hover:bg-brand-100 transition-colors flex items-center justify-center"
                >
                  前往 {toolA.name} 官网 <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                谁更适合选择 {toolB.name}？
              </h3>
              <ul className="space-y-4">
                {comparison.bestForB.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a 
                  href={toolB.officialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-blue-50 text-blue-700 rounded-xl font-medium hover:bg-blue-100 transition-colors flex items-center justify-center"
                >
                  前往 {toolB.name} 官网 <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 shadow-lg mb-16 text-white">
            <h2 className="text-2xl font-bold mb-6">你应该怎么选？</h2>
            <div className="space-y-6">
              {comparison.howToChoose.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-brand-400 mr-4 flex-shrink-0 mt-2.5"></div>
                  <p className="text-gray-300 leading-relaxed text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">常见问题 FAQ</h2>
            <div className="space-y-8">
              {comparison.faq.map((f, idx) => (
                <div key={idx} className="border-b border-gray-50 pb-8 last:border-0 last:pb-0">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{f.q}</h4>
                  <p className="text-gray-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-3 text-center md:text-left">深入了解</h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <Link href={`/guides/${toolA.slug}`} className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-600 hover:border-brand-500 hover:text-brand-600 transition-colors">
                  查看 {toolA.name} 详细评测
                </Link>
                <Link href={`/guides/${toolB.slug}`} className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-600 hover:border-brand-500 hover:text-brand-600 transition-colors">
                  查看 {toolB.name} 详细评测
                </Link>
                {toolA.categories[0] && (
                  <Link href={`/ai/${toolA.categories[0]}`} className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-600 hover:border-brand-500 hover:text-brand-600 transition-colors">
                    探索更多同类工具
                  </Link>
                )}
              </div>
            </div>
            
            <Link href="/compare" className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors flex-shrink-0">
              返回对比中心
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
