import Link from "next/link";
import { ArrowRight } from "lucide-react";

const guides = [
  {
    title: "2026机场推荐：稳定、价格与线路怎么选",
    tag: "综合推荐",
    href: "/guides/jichang-recommendation-2026",
  },
  {
    title: "稳定机场推荐：晚高峰怎么判断",
    tag: "稳定性",
    href: "/guides/stable-jichang",
  },
  {
    title: "便宜机场推荐：低预算怎么选",
    tag: "低预算",
    href: "/guides/cheap-jichang",
  },
  {
    title: "高性价比机场推荐：价格与线路怎么比",
    tag: "性价比",
    href: "/guides/value-jichang",
  },
  {
    title: "ChatGPT机场推荐：AI网络怎么选",
    tag: "AI专用",
    href: "/guides/chatgpt-jichang",
  },
  {
    title: "不限时机场推荐：按量计费怎么选",
    tag: "按量计费",
    href: "/guides/no-expiry-jichang",
  },
];

export default function NetworkGuides() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">2026 机场推荐与网络方案</h2>
            <p className="text-gray-500 max-w-xl">从稳定性、价格、线路、客户端和 AI 使用场景出发，找到更适合自己的网络方案。</p>
          </div>
          <Link href="/guides" className="inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors shrink-0">
            查看更多网络指南 <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {guides.map((guide, idx) => (
            <Link 
              key={idx} 
              href={guide.href}
              className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-brand-200 hover:shadow-sm transition-all group flex flex-col gap-3"
            >
              <span className="inline-block self-start text-[11px] font-semibold px-2.5 py-0.5 bg-brand-50 text-brand-600 rounded-full border border-brand-100">
                {guide.tag}
              </span>
              <h3 className="text-gray-900 font-medium group-hover:text-brand-600 transition-colors leading-snug">
                {guide.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
