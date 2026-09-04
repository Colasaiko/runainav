import Link from "next/link";
import { ArrowRight } from "lucide-react";

const guides = [
  { title: "AI 工具打不开怎么办？", href: "/guides/ai-network" },
  { title: "为什么连接 VPN 后网速会变慢？", href: "/guides/vpn-slow-speed" },
  { title: "微风网络怎么样？套餐、节点与 AI 使用体验", href: "/vpn/weifeng" }
];

export default function NetworkGuides() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">网络与 VPN 指南</h2>
            <p className="text-gray-500">深入了解网络环境对使用全球服务的影响。</p>
          </div>
          <Link href="/guides" className="inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors">
            查看更多 <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {guides.map((guide, idx) => (
            <Link 
              key={idx} 
              href={guide.href}
              className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group"
            >
              <h3 className="text-gray-900 font-medium group-hover:text-brand-600 transition-colors">
                {guide.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
