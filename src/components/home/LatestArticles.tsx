import Link from "next/link";
import { CalendarDays } from "lucide-react";

const articles = [
  { tag: "AI音乐", title: "Suno中文歌曲生成教程：歌词与风格怎么写", date: "2026-09-05", isNetwork: false, href: "/guides/suno-chinese-song-tutorial" },
  { tag: "AI办公", title: "Gamma做PPT教程：从生成到导出", date: "2026-09-05", isNetwork: false, href: "/guides/gamma-ppt-tutorial" },
  { tag: "AI搜索", title: "Perplexity搜索与引用核对教程", date: "2026-09-05", isNetwork: false, href: "/guides/perplexity-search-guide" },
  { tag: "AI绘图", title: "Midjourney人像提示词：构图光线教程", date: "2026-09-05", isNetwork: false, href: "/guides/midjourney-realistic-portrait" },
  { tag: "AI对比", title: "ChatGPT、Claude、Gemini怎么选？", date: "2026-09-04", isNetwork: false, href: "/guides/chatgpt-vs-claude-vs-gemini" },
  { tag: "实战教程", title: "如何用 Cursor 搭建个人博客？", date: "2026-09-04", isNetwork: false, href: "/guides/cursor-build-blog" },
];

export default function LatestArticles() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-12">最新内容</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {articles.map((article, idx) => (
            <Link key={idx} href={article.href} className="group block">
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-sm ${article.isNetwork ? 'bg-gray-100 text-gray-600' : 'bg-brand-50 text-brand-600'}`}>
                  {article.tag}
                </span>
                <span className="text-xs text-gray-400 flex items-center">
                  <CalendarDays className="w-3 h-3 mr-1" /> {article.date}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-2">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/guides" className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
            阅读更多文章
          </Link>
        </div>
      </div>
    </section>
  );
}
