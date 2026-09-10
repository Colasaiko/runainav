import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { guideArticles } from "@/data/guideArticles";

export default function LatestArticles() {
  const latestArticles = [...guideArticles]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 6);

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-12">最新内容</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {latestArticles.map((article) => {
            const isNetwork = article.type === 'network' || article.type === 'troubleshooting';
            return (
              <Link key={article.slug} href={`/guides/${article.slug}`} className="group block">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-sm ${isNetwork ? 'bg-gray-100 text-gray-600' : 'bg-brand-50 text-brand-600'}`}>
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center">
                    <CalendarDays className="w-3 h-3 mr-1" /> {article.publishedAt}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </Link>
            );
          })}
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
