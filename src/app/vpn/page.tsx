import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VPNList from "@/components/vpn/VPNList";
import { vpnBrands } from "@/data/vpnBrands";
import Link from "next/link";
import { ShieldCheck, Network, Lock, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "VPN 品牌推荐与选择指南 - RunAI",
  description: "浏览 RunAI 收录的 VPN 品牌，根据 AI、学习、开发、影音与日常网络需求选择适合自己的网络方案。",
  alternates: {
    canonical: "https://runainav.com/vpn",
  },
  openGraph: {
    title: "VPN 品牌推荐与选择指南 - RunAI",
    description: "浏览 RunAI 收录的 VPN 品牌，根据 AI、学习、开发、影音与日常网络需求选择适合自己的网络方案。",
    url: "https://runainav.com/vpn/",
    type: "website",
  }
};

export default function VPNPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Content-focused Hero */}
        <section className="pt-20 pb-12 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              VPN 品牌与网络方案
            </h1>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
              浏览 RunAI 收录的 VPN 品牌，根据 AI、学习、开发、影音和日常网络需求选择适合自己的网络方案。
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-600 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-500 mr-2"></span>
              收录了 {vpnBrands.length} 个 VPN 品牌
            </div>
          </div>
        </section>

        {/* Dynamic List Component (Client) */}
        <VPNList />

        {/* How to choose section */}
        <section className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">不知道怎么选？</h2>
              <p className="text-gray-500">根据你的实际需求，直接选择对应的网络环境方案。</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI 使用</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  适合 ChatGPT、Claude、Gemini 等 AI 服务的网络使用场景，需要较高的 IP 质量和稳定性。
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center mb-6">
                  <Network className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">视频影音</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  适合在线视频和内容平台，需要大流量和高并发带宽。
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">学习与开发</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  适合 GitHub、技术文档、在线课程等场景，需要持续低延迟。
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">日常网络</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  适合日常浏览与公共网络安全，价格敏感，需求轻量。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Buying Guide Editorial */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl prose prose-gray prose-brand">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">如何选择 VPN？</h2>
            <div className="text-gray-600 leading-relaxed space-y-6">
              <p>在挑选 VPN 时，最重要的是明确您的**核心需求**，而不是盲目追求昂贵或参数最高的套餐。以下是几个关键参考指标：</p>
              <ul className="space-y-3">
                <li><strong>使用场景：</strong>如果您主要为了使用 ChatGPT 或 Claude，那么**解锁能力（原生 IP）**比带宽大小更重要。如果是看 Netflix，那么**流量和带宽**是第一要素。</li>
                <li><strong>流量消耗：</strong>轻度查资料 50GB 往往足够，深度刷视频可能需要 300GB 甚至更多。建议先购买小流量套餐试水。</li>
                <li><strong>套餐周期：</strong>除非您对某个品牌极度信任，否则建议首次购买以**月付**或**季付**为主，避免跑路风险，确认速度满意后再考虑年付优惠。</li>
                <li><strong>设备数量：</strong>如果您有手机、电脑、平板甚至软路由同时在线需求，请务必注意套餐的**同时在线设备数**限制。</li>
                <li><strong>售后支持：</strong>购买前建议看看是否有活跃的电报群或客服工单系统。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-xs text-gray-400 leading-relaxed">
              不同网络服务的可用性可能因地区、运营商、服务商政策及用户网络环境而不同。请遵守所在地法律法规及第三方服务条款。本站收录的 VPN 品牌信息仅供参考。
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
