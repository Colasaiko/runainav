import Link from "next/link";
import { Clock } from "lucide-react";

// 70% AI, 30% VPN/Network ratio
const articles = [
  { tag: "AI教程", title: "如何用 Cursor 快速搭建一个个人博客？", date: "2小时前", isNetwork: false },
  { tag: "AI资讯", title: "OpenAI 发布最新模型，能力全面提升", date: "5小时前", isNetwork: false },
  { tag: "网络指南", title: "为什么连接 VPN 后网速会变慢？", date: "昨天", isNetwork: true },
  { tag: "AI工具", title: "5 款提高开发者效率的隐藏 AI 神器", date: "昨天", isNetwork: false },
  { tag: "AI绘图", title: "Midjourney V6 真实感人像提示词全解析", date: "2天前", isNetwork: false },
  { tag: "VPN科普", title: "出差党必看：如何保护酒店 Wi-Fi 数据安全", date: "3天前", isNetwork: true },
];

export default function LatestArticles() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-12">最新内容</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {articles.map((article, idx) => (
            <Link key={idx} href="#" className="group flex gap-6 items-start">
              <div className="w-24 h-24 shrink-0 bg-gray-100 rounded-xl overflow-hidden relative">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-sm ${article.isNetwork ? 'bg-gray-100 text-gray-600' : 'bg-brand-50 text-brand-600'}`}>
                    {article.tag}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center">
                    <Clock className="w-3 h-3 mr-1" /> {article.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2 line-clamp-2">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/blog" className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
            阅读更多文章
          </Link>
        </div>
      </div>
    </section>
  );
}
