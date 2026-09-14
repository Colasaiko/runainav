import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Swords } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { aiComparisons } from '@/data/aiComparisons';
import { aiTools } from '@/data/aiTools';
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: 'AI工具对比与评测：国内外AI大模型哪个好怎么选｜RunAI',
  description: '不知道AI工具怎么选？RunAI提供深度的AI工具对比评测，如DeepSeek vs ChatGPT、Kimi vs 豆包等，帮你找到最适合你的AI生产力工具。',
  canonical: '/compare',
});

export default function CompareIndexPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "RunAI", "item": "https://runainav.com" },
      { "@type": "ListItem", "position": 2, "name": "AI 工具对比", "item": "https://runainav.com/compare" }
    ]
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "AI工具对比",
    "description": "提供深度的AI工具对比评测，帮你找到最适合的工具。",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": aiComparisons.map((comp, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": comp.title,
        "url": `https://runainav.com/compare/${comp.slug}`
      }))
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      <main className="flex-grow pb-24">
        {/* Hero */}
        <section className="bg-white border-b border-gray-200 py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">AI 工具对比中心</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              还在纠结用哪个 AI 更好？基于真实使用场景的深度横向评测，帮你快速决策。
            </p>
          </div>
        </section>

        {/* Content */}
        <div className="container mx-auto px-4 max-w-6xl -mt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiComparisons.map((comp) => {
              const toolA = aiTools.find(t => t.slug === comp.toolA);
              const toolB = aiTools.find(t => t.slug === comp.toolB);
              
              if (!toolA || !toolB) return null;

              return (
                <Link key={comp.slug} href={`/compare/${comp.slug}`} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-brand-300 transition-all group flex flex-col h-full">
                  <div className="flex justify-center items-center gap-4 mb-6">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-700 font-bold text-xl shadow-sm border border-gray-100 mb-2">
                        {toolA.name.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-gray-700">{toolA.name}</span>
                    </div>
                    
                    <div className="text-gray-300 font-black italic">VS</div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-700 font-bold text-xl shadow-sm border border-gray-100 mb-2">
                        {toolB.name.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-gray-700">{toolB.name}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 text-center group-hover:text-brand-600 transition-colors">
                    {comp.title.split('？')[0] + '？'}
                  </h3>
                  
                  <div className="bg-gray-50 rounded-xl p-4 mb-6 flex-grow">
                    <p className="text-sm text-gray-600 leading-relaxed text-center">
                      <span className="font-semibold text-gray-800">核心决策：</span>{comp.quickVerdict.substring(0, 70)}...
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-center text-brand-600 text-sm font-medium">
                    查看完整对比评测 <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 bg-brand-50 rounded-3xl p-8 md:p-12 text-center border border-brand-100">
            <Swords className="w-12 h-12 text-brand-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">如何挑选适合你的 AI 工具？</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              目前市面上的 AI 工具底层能力同质化日益严重，真正的差异在于它们各自注重的「使用场景」和「交互体验」。没有绝对完美的工具，只有在你的具体工作流中最顺手的搭档。我们建议你根据核心需求，组合使用 2-3 个不同专长的 AI。
            </p>
            <Link href="/ai" className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 rounded-xl font-medium border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
              浏览全部 AI 工具大全
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
