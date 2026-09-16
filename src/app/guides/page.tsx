import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GuidesList from './GuidesList';
import { aiTools } from '@/data/aiTools';
import { guideArticles } from '@/data/guideArticles';
import Link from 'next/link';

import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: '海外热门AI使用指南与常见问题解答 | RunAI',
  description: 'RunAI精选全球顶尖AI工具的使用方法与功能介绍。无论你是新手还是进阶用户，都能在此了解详细的账号要求、网络环境配置及常见问题，助你快速掌握AI高效工作法。',
  canonical: '/guides',
});

export default function GuidesPage() {

  const breadcrumbSchema = {
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
        "name": "AI 使用指南",
        "item": "https://runainav.com/guides"
      }
    ]
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "海外热门AI使用指南与常见问题解答",
    "url": "https://runainav.com/guides",
    "description": "RunAI精选全球顶尖AI工具的使用方法与功能介绍。"
  };

  const allGuides = [
    ...aiTools.map(t => ({ name: t.name + " 使用指南", url: `https://runainav.com/guides/${t.slug}` })),
    ...guideArticles.map(g => ({ name: g.title, url: `https://runainav.com/guides/${g.slug}` }))
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": allGuides.map((guide, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": guide.name,
      "url": guide.url
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, collectionSchema, itemListSchema]) }} />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Breadcrumb */}
          <nav className="flex text-sm text-gray-500 mb-8 justify-center">
            <Link href="/" className="hover:text-brand-600">首页</Link> <span className="mx-2">/</span>
            <span className="text-gray-900">AI 使用指南</span>
          </nav>

          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI 使用指南</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              从入门、实战到问题排查，找到适合你的 AI 使用内容。
            </p>
          </div>
          
          <GuidesList />
          
        </div>
      </main>
      <Footer />
    </div>
  );
}
