'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { aiTools } from '@/data/aiTools';
import { Search, ChevronRight, Zap, Target, Lightbulb, Star, LayoutGrid, ExternalLink } from 'lucide-react';

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

const SCENARIOS = [
  { icon: '💬', name: '聊天与问答', query: '聊天', tools: ['ChatGPT', 'Claude', 'Gemini', 'Grok'] },
  { icon: '🔍', name: '搜资料', query: '搜索', tools: ['Perplexity', 'Gemini', 'ChatGPT'] },
  { icon: '💻', name: '写代码', query: '代码', tools: ['Cursor', 'GitHub Copilot', 'Replit', 'v0', 'Bolt'] },
  { icon: '🎨', name: '生成图片', query: '绘图', tools: ['Midjourney', 'Ideogram', 'Leonardo AI', 'Adobe Firefly'] },
  { icon: '🎬', name: '制作视频', query: '视频', tools: ['Runway', 'Pika', 'Luma Dream Machine'] },
  { icon: '📊', name: '做 PPT / 办公', query: 'PPT', tools: ['Gamma', 'Canva AI', 'ChatGPT'] },
  { icon: '🎵', name: '制作音乐', query: '音乐', tools: ['Suno'] },
  { icon: '✍️', name: '写文章', query: '写作', tools: ['ChatGPT', 'Claude', 'Gemini'] },
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
    
    let search = searchQuery.toLowerCase();
    // Alias mapping for common user inputs
    if (search.includes('写代码')) search = '代码';
    if (search.includes('画图') || search.includes('生图')) search = '绘图';
    if (search.includes('做ppt')) search = 'ppt';
    if (search.includes('写文章')) search = '写作';

    const matchesSearch = 
      tool.name.toLowerCase().includes(search) || 
      tool.shortDescription.toLowerCase().includes(search) ||
      tool.description.toLowerCase().includes(search) ||
      tool.tags.some(tag => tag.toLowerCase().includes(search));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* 菜单游览 */}
      <section className="mb-10">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            🧭 菜单游览
          </h2>
          <p className="text-gray-500 mt-1 text-sm">快速跳到你想看的部分，找到适合自己的 AI 工具。</p>
        </div>
        <div className="flex overflow-x-auto pb-4 gap-3 scrollbar-hide sticky top-0 z-20 bg-gray-50/90 backdrop-blur pt-2">
          <a href="#quick-read" className="whitespace-nowrap px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-colors shadow-sm">30 秒速读</a>
          <a href="#scenarios" className="whitespace-nowrap px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-colors shadow-sm">按需求找 AI</a>
          <a href="#beginner-recommends" className="whitespace-nowrap px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-colors shadow-sm">新手推荐</a>
          <a href="#network-tips" className="whitespace-nowrap px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-colors shadow-sm">温馨小提示</a>
          <a href="#all-tools" className="whitespace-nowrap px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-colors shadow-sm">全部 AI 工具</a>
        </div>
      </section>

      {/* 30 秒速读 */}
      <section id="quick-read" className="mb-12 scroll-mt-24">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Zap className="w-6 h-6 text-amber-500" /> 30 秒速读
          </h2>
          <p className="text-gray-500 mt-1">第一次来？先从这里开始。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-gray-900 mb-3">第一次用 AI</h3>
            <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
              如果还不知道该选什么，可以先从 ChatGPT、Claude 或 Gemini 开始。这几款工具覆盖聊天、写作、学习、资料整理和日常工作等常见需求。
            </p>
            <a href="#beginner-recommends" className="inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
              看看新手推荐 <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-gray-900 mb-3">已经知道要做什么</h3>
            <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
              想写代码、做图片、生成视频、制作 PPT 或创作音乐，可以直接按照使用需求寻找对应工具。
            </p>
            <a href="#scenarios" className="inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
              按需求找 AI <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-gray-900 mb-3">已经有网络方案</h3>
            <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
              如果已经使用 RunAI 推荐的网络品牌，可以直接选择想使用的 AI，再查看对应工具的功能、账号要求和网络环境说明。
            </p>
            <a href="#all-tools" className="inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
              开始选 AI <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 你想用 AI 做什么？ */}
      <section id="scenarios" className="mb-12 scroll-mt-24">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Target className="w-6 h-6 text-brand-500" /> 你想用 AI 做什么？
          </h2>
          <p className="text-gray-500 mt-1">从需求出发，更快找到适合的工具。</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SCENARIOS.map((scenario, idx) => (
            <button 
              key={idx}
              onClick={() => {
                setSearchQuery(scenario.query);
                setActiveCategory('all');
                document.getElementById('all-tools')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-300 hover:shadow-md transition-all text-left flex flex-col group"
            >
              <div className="text-3xl mb-3">{scenario.icon}</div>
              <div className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">{scenario.name}</div>
              <div className="text-xs text-gray-500 mt-1.5 line-clamp-1">{scenario.tools.join(' · ')}</div>
            </button>
          ))}
        </div>
      </section>

      {/* 温馨小提示 */}
      <section id="network-tips" className="mb-12 scroll-mt-24">
        <div className="bg-blue-50/80 p-6 md:p-8 rounded-2xl border border-blue-100 flex gap-4 items-start">
          <Lightbulb className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-2">温馨小提示</h3>
            <p className="text-blue-800 text-sm leading-relaxed mb-4">
              不同 AI 服务的账号要求、支持地区和网络环境可能有所不同，实际使用情况也可能随着官方服务调整而变化。如果遇到无法加载、登录异常或功能不可用，可以先检查账号地区、网络连接以及服务当前支持范围。<br/><br/>
              RunAI 会尽量提供清楚的使用说明，但具体功能、价格和服务可用性请以 AI 官方信息为准。
            </p>
            <Link href="/vpn" className="inline-flex items-center px-4 py-2 bg-white text-blue-700 text-sm font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
              查看网络连通方案 <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 新手推荐 */}
      <section id="beginner-recommends" className="mb-12 scroll-mt-24">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Star className="w-6 h-6 text-amber-400 fill-amber-400" /> 新手推荐
          </h2>
          <p className="text-gray-500 mt-1">如果第一次接触海外 AI，可以先了解这些常用工具。</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {['chatgpt', 'claude', 'gemini', 'cursor', 'midjourney', 'gamma'].map(slug => {
             const t = aiTools.find(tool => tool.slug === slug);
             if(!t) return null;
             return (
               <Link key={slug} href={`/guides/${slug}`} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all flex flex-col items-center text-center group">
                 <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center text-brand-600 font-bold text-xl mb-3 shadow-sm border border-brand-100/50">
                   {t.name.charAt(0)}
                 </div>
                 <span className="text-sm font-bold text-gray-900 group-hover:text-brand-600 line-clamp-1">{t.name}</span>
               </Link>
             )
          })}
        </div>
      </section>

      {/* 全部 AI 工具 */}
      <section id="all-tools" className="scroll-mt-24">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <LayoutGrid className="w-6 h-6 text-brand-500" /> 全部 AI 工具
          </h2>
          <p className="text-gray-500 mt-1">目前收录 {aiTools.length} 款常用 AI 工具，可按分类或关键词快速查找。</p>
        </div>

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
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          
          <div className="relative md:w-80 flex-shrink-0">
            <input
              type="text"
              placeholder="搜索 AI、用途或关键词，例如：写代码、绘图、PPT"
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
                            <div
                key={tool.slug} 
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-200 transition-all group flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center flex-shrink-0 text-brand-600 font-bold text-xl shadow-sm border border-brand-100/50">
                    {tool.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 transition-colors line-clamp-1">{tool.name}</h2>
                    <p className="text-sm text-gray-500">{tool.company}</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-6 flex-grow line-clamp-2 leading-relaxed">
                  {tool.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {tool.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-gray-50 text-gray-500 rounded text-xs border border-gray-100">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center gap-3">
                  <a 
                    href={tool.officialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 text-center py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors text-sm font-medium inline-flex items-center justify-center"
                  >
                    前往官方 <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                  <Link 
                    href={`/guides/${tool.slug}`} 
                    className="flex-1 text-center py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium inline-flex items-center justify-center"
                  >
                    查看指南 <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-500 bg-white rounded-2xl border border-gray-100">
              没有找到相关的 AI 工具，尝试换个关键词试试？
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function AIList() {
  return <AIListContent />;
}
