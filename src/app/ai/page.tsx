import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AIList from './AIList';
import { aiComparisons } from '@/data/aiComparisons';

import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: 'AI工具大全与实测 | 国内外高效生产力工具 - RunAI',
  description: '不知道哪个AI工具最适合工作需求？RunAI收录国内外热门的聊天、编程、绘图等AI神器，提供详尽对比与无障碍使用评测。立即点击探索最新AI工具大全与使用方案！',
  canonical: '/ai',
});

export default function AIPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI 工具大全</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            收录全球热门 AI 工具，包括国内与海外的聊天、搜索、编程、绘图、视频、办公和音乐工具，可按地区、分类与使用需求快速筛选。
          </p>
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-medium text-gray-500">按分类浏览</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/ai/chat" className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-brand-500 hover:text-brand-600 transition-colors">AI聊天</Link>
              <Link href="/ai/search" className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-brand-500 hover:text-brand-600 transition-colors">AI搜索</Link>
              <Link href="/ai/coding" className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-brand-500 hover:text-brand-600 transition-colors">AI编程</Link>
              <Link href="/ai/image" className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-brand-500 hover:text-brand-600 transition-colors">AI绘画</Link>
              <Link href="/ai/video" className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-brand-500 hover:text-brand-600 transition-colors">AI视频</Link>
              <Link href="/ai/productivity" className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-brand-500 hover:text-brand-600 transition-colors">AI办公</Link>
              <Link href="/ai/music" className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-brand-500 hover:text-brand-600 transition-colors">AI音乐</Link>
              <Link href="/ai/audio" className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-brand-500 hover:text-brand-600 transition-colors">AI音频</Link>
              <div className="w-px h-6 bg-gray-300 hidden md:block self-center mx-1"></div>
              <Link href="/ai/china" className="px-4 py-2 bg-blue-50 rounded-full border border-blue-100 text-sm font-medium text-blue-700 hover:bg-blue-100 transition-colors">国内 AI</Link>
              <Link href="/ai/global" className="px-4 py-2 bg-blue-50 rounded-full border border-blue-100 text-sm font-medium text-blue-700 hover:bg-blue-100 transition-colors">海外 AI</Link>
            </div>
          </div>
        </div>
        
        <div className="mb-10 mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">热门 AI 对比</h2>
              <Link href="/compare" className="text-sm text-brand-600 hover:text-brand-700 font-medium flex items-center">查看更多对比</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {aiComparisons.slice(0, 4).map(comp => (
                <Link
                  key={comp.slug}
                  href={`/compare/${comp.slug}`}
                  className="bg-brand-50 p-5 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md hover:border-brand-300 transition-all group flex flex-col h-full"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-brand-600 font-bold">⚔️</span>
                    <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-1">{comp.title.split('？')[0] + '？'}</h3>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{comp.quickVerdict}</p>
                </Link>
              ))}
            </div>
          </div>
        <AIList />

      </div>
      </main>
      <Footer />
    </div>
  );
}
