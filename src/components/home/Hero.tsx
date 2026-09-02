import { Search } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-gray-50 to-white -z-10" />
      
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
          探索全球 AI，<br className="md:hidden" />更简单地开始
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          RunAI 帮你发现 AI 工具、学习使用方法，并解决实际使用过程中遇到的网络环境问题。
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link 
            href="#categories" 
            className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all active:scale-95"
          >
            探索 AI
          </Link>
          <Link 
            href="/vpn" 
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-gray-900 border border-gray-200 rounded-full font-medium hover:border-gray-300 hover:bg-gray-50 transition-all active:scale-95"
          >
            查看 VPN
          </Link>
        </div>

        {/* Global Search */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-2 flex items-center transition-shadow focus-within:shadow-md focus-within:border-gray-200">
          <Search className="w-5 h-5 text-gray-400 ml-3" />
          <input 
            type="text" 
            placeholder="搜索 AI 工具、教程或使用问题..." 
            className="w-full px-4 py-3 outline-none text-gray-700 bg-transparent"
          />
          <button className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors hidden sm:block">
            搜索
          </button>
        </div>
        
        {/* Trending */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500">
          <span className="mr-2">热门搜索：</span>
          {['ChatGPT', 'Claude', 'Gemini', 'AI编程', 'AI绘图', 'AI视频'].map((tag) => (
            <Link 
              key={tag} 
              href={`/search?q=${tag}`}
              className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full hover:bg-gray-100 hover:text-gray-900 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
