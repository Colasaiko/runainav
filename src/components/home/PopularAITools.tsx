import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aiTools } from "@/data/aiTools";

export default function PopularAITools() {
  const featuredChina = aiTools.filter(t => t.featured && t.region === 'china').slice(0, 4);
  const featuredGlobal = aiTools.filter(t => t.featured && t.region === 'global').slice(0, 4);
  const displayTools = [...featuredChina, ...featuredGlobal];

  const getBrandColor = (slug: string, index: number) => {
    const colors = [
      'bg-blue-100 text-blue-700',
      'bg-green-100 text-green-700',
      'bg-purple-100 text-purple-700',
      'bg-orange-100 text-orange-700',
      'bg-teal-100 text-teal-700',
      'bg-indigo-100 text-indigo-700',
      'bg-pink-100 text-pink-700',
      'bg-rose-100 text-rose-700'
    ];
    return colors[index % colors.length];
  };

  const formatCategory = (cat: string) => {
    const map: Record<string, string> = {
      chat: 'AI 聊天',
      search: 'AI 搜索',
      coding: 'AI 编程',
      image: 'AI 绘画',
      video: 'AI 视频',
      music: 'AI 音乐',
      productivity: 'AI 办公'
    };
    return map[cat] || cat;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">热门 AI 工具</h2>
            <p className="text-gray-500 max-w-2xl">
              精选全球最受欢迎的第三方 AI 服务，探索它们的强大功能。
              <span className="block text-sm mt-1 text-gray-400">注：本站提供客观指南，非这些产品的官方运营商。</span>
            </p>
          </div>
          <Link href="/ai" className="inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors">
            查看所有工具 <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayTools.map((tool, index) => (
            <div key={tool.slug} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${getBrandColor(tool.slug, index)}`}>
                  {tool.name.charAt(0)}
                </div>
                <span className="text-xs font-medium px-2.5 py-1 bg-gray-50 text-gray-500 rounded-full">
                  {formatCategory(tool.category)}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.name}</h3>
              <p className="text-sm text-gray-500 mb-6 flex-grow">{tool.shortDescription}</p>
              
              <Link 
                href={`/guides/${tool.slug}`} 
                className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-brand-600 transition-colors mt-auto"
              >
                了解更多 <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
