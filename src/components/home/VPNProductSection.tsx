import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { vpnBrands } from "@/data/vpnBrands";

export default function VPNProductSection() {
  // Get top 3 brands for homepage preview
  const topBrands = vpnBrands.slice(0, 3);

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">VPN 品牌推荐</h2>
            <p className="text-gray-500 max-w-2xl text-lg">
              RunAI 收录了 20+ 优质网络方案，为您的 AI、学习与开发需求提供稳定连接。
            </p>
          </div>
          <Link href="/vpn" className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors shrink-0">
            查看全部 VPN <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {topBrands.map((brand, idx) => (
            <div key={brand.id} className={`rounded-3xl border p-8 flex flex-col transition-all relative ${idx === 0 ? 'border-brand-500 shadow-lg' : 'border-gray-100 hover:border-gray-200 hover:shadow-md'}`}>
              {idx === 0 && (
                <div className="absolute top-0 left-8 -translate-y-1/2 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  主推推荐
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-lg font-bold text-gray-700 shrink-0">
                  {brand.name.substring(0, 1)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{brand.name}</h3>
                  <div className="flex gap-1.5 mt-1">
                    {brand.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] font-medium px-2 py-0.5 bg-gray-50 text-gray-500 rounded-md border border-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mb-8 flex-grow leading-relaxed">
                {brand.description}
              </p>
              
              <div className="flex gap-3 mt-auto">
                {brand.id === 'weifeng' ? (
                  <Link 
                    href={`/vpn/${brand.id}`}
                    className="flex-1 py-2.5 text-sm font-medium text-center text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    详情
                  </Link>
                ) : null}
                <a 
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-[2] py-2.5 text-sm font-medium text-center text-white bg-gray-900 hover:bg-gray-800 rounded-xl transition-colors flex items-center justify-center"
                >
                  前往官网 <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
