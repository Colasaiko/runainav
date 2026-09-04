'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { aiTools } from '@/data/aiTools';
import { guideArticles, GuideArticle, GuideType } from '@/data/guideArticles';
import GuideCard from '@/components/guides/GuideCard';

// 1. Combine guides data
const toolGuides: GuideArticle[] = aiTools.map(tool => ({
  slug: tool.slug,
  title: `${tool.name} 使用指南`,
  description: tool.description,
  type: 'tool' as GuideType,
  category: tool.categories.includes('chat') ? 'AI聊天' : 
            tool.categories.includes('coding') ? 'AI编程' :
            tool.categories.includes('image') ? 'AI绘图' :
            tool.categories.includes('video') ? 'AI视频' :
            tool.categories.includes('productivity') ? 'AI办公' : 'AI工具',
  tags: [tool.name],
  publishedAt: tool.lastUpdated,
  updatedAt: tool.lastUpdated
}));

const allGuides: GuideArticle[] = [...guideArticles, ...toolGuides].sort((a, b) => {
  if (a.publishedAt === b.publishedAt) return a.title.localeCompare(b.title);
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
});

const latestGuides = allGuides.slice(0, 6);

type FilterType = 'all' | 'tool' | 'tutorial' | 'troubleshooting';

export default function GuidesList() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGuides = allGuides.filter(guide => {
    // 1. Filter by type
    if (activeFilter !== 'all' && guide.type !== activeFilter) {
      return false;
    }
    // 2. Filter by search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = guide.title.toLowerCase().includes(q);
      const matchDesc = guide.description.toLowerCase().includes(q);
      const matchCategory = guide.category.toLowerCase().includes(q);
      const matchTags = guide.tags.some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchDesc && !matchCategory && !matchTags) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="space-y-16">
      
      {/* Latest Guides Section (Only show if no search/filter is active) */}
      {activeFilter === 'all' && searchQuery.trim() === '' && (
        <section>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xl">🔥</span>
            <h2 className="text-2xl font-bold text-gray-900">最新指南</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestGuides.map(guide => (
              <GuideCard 
                key={guide.slug}
                title={guide.title}
                description={guide.description}
                href={`/guides/${guide.slug}`}
                type={guide.type}
                category={guide.category}
                date={guide.publishedAt}
              />
            ))}
          </div>
        </section>
      )}

      {/* All Guides Section */}
      <section>
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">全部指南</h2>
            <p className="text-gray-500 text-sm">浏览 RunAI 当前已经发布的 AI 使用指南与实战教程。</p>
          </div>
          
          <div className="flex-shrink-0 w-full md:w-72">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="搜索指南，例如：ChatGPT、Cursor、网络问题" 
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex overflow-x-auto pb-4 mb-4 gap-3 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          <button 
            onClick={() => setActiveFilter('all')}
            className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm ${activeFilter === 'all' ? 'bg-gray-900 text-white' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'}`}
          >
            全部
          </button>
          <button 
            onClick={() => setActiveFilter('tool')}
            className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm ${activeFilter === 'tool' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border border-gray-200 text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}
          >
            AI工具指南
          </button>
          <button 
            onClick={() => setActiveFilter('tutorial')}
            className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm ${activeFilter === 'tutorial' ? 'bg-green-600 text-white border-green-600' : 'bg-white border border-gray-200 text-gray-700 hover:bg-green-50 hover:text-green-600'}`}
          >
            实战教程
          </button>
          <button 
            onClick={() => setActiveFilter('troubleshooting')}
            className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm ${activeFilter === 'troubleshooting' ? 'bg-orange-600 text-white border-orange-600' : 'bg-white border border-gray-200 text-gray-700 hover:bg-orange-50 hover:text-orange-600'}`}
          >
            问题指南
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.length > 0 ? (
            filteredGuides.map(guide => (
              <GuideCard 
                key={guide.slug}
                title={guide.title}
                description={guide.description}
                href={`/guides/${guide.slug}`}
                type={guide.type}
                category={guide.category}
                date={guide.publishedAt}
              />
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-white rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-gray-500 mb-2">未找到匹配的指南</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
                className="text-brand-600 hover:underline text-sm font-medium"
              >
                清除搜索条件
              </button>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
