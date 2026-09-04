import Link from "next/link";
import HomeSearch from "./HomeSearch";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-gray-50 to-white -z-10" />
      
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
          探索全球 AI，<br className="md:hidden" />更简单地开始。
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          RunAI 帮你发现 AI 工具、学习使用方法，并解决实际使用过程中遇到的网络环境问题。
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link 
            href="/ai" 
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
        <HomeSearch />
        
        {/* Trending */}
        <div className="mt-6 flex flex-wrap justify-center items-center gap-3 text-sm">
          <span className="text-gray-500 font-medium">热门搜索：</span>
          <Link href="/guides/chatgpt" className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-brand-300 hover:text-brand-600 transition-colors shadow-sm">ChatGPT Plus</Link>
          <Link href="/guides/midjourney" className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-brand-300 hover:text-brand-600 transition-colors shadow-sm">Midjourney 教程</Link>
          <Link href="/guides/claude" className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-brand-300 hover:text-brand-600 transition-colors shadow-sm">Claude</Link>
          <Link href="/vpn" className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-brand-300 hover:text-brand-600 transition-colors shadow-sm">稳定 VPN 推荐</Link>
        </div>
      </div>
    </section>
  );
}
