'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { aiTools } from '@/data/aiTools';
import { Search, ChevronRight } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', name: '全部' },
  { id: 'chat', name: 'AI 聊天' },
  { id: 'search', name: 'AI 搜索' },
  { id: 'coding', name: 'AI 编程' },
  { id: 'image', name: 'AI 绘画' },
  { id: 'video', name: 'AI 视频' },
  { id: 'productivity', name: 'AI 办公' },
  { id: 'music', name: 'AI 音乐' },
];

function AIListContent() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get('category');
      if (cat && CATEGORIES.some(c => c.id === cat)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setActiveCategory(cat);
      }
    }
  }, []);

  const filteredTools = aiTools.filter((tool) => {
    const matchesCategory = activeCategory === 'all' || tool.categories.includes(activeCategory);
    const matchesSearch = 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      tool.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                window.history.pushState(null, '', cat.id === 'all' ? '/ai' : `/ai?category=${cat.id}`);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-brand-600 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        
        <div className="relative md:w-72 flex-shrink-0">
          <input
            type="text"
            placeholder="搜索工具、用途..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none text-sm"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.length > 0 ? (
          filteredTools.map((tool) => (
            <Link 
              key={tool.slug} 
              href={`/ai/${tool.slug}`}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-200 transition-all group flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center flex-shrink-0 text-brand-600 font-bold text-xl">
                  {tool.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-1">{tool.name}</h2>
                  <p className="text-sm text-gray-500">{tool.company}</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-6 flex-grow line-clamp-2">
                {tool.shortDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {tool.tags.slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-gray-50 text-gray-500 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                  {tool.chineseSupport}
                </span>
                <span className="flex items-center text-sm font-medium text-brand-600">
                  了解详情 <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-gray-500">
            没有找到相关的 AI 工具，尝试换个关键词试试？
          </div>
        )}
      </div>
    </div>
  );
}

export default function AIList() {
  return <AIListContent />;
}
