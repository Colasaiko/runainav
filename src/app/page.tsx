import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import AICategoryGrid from "@/components/home/AICategoryGrid";
import PopularAITools from "@/components/home/PopularAITools";
import AIUseCases from "@/components/home/AIUseCases";
import FeaturedGuides from "@/components/home/FeaturedGuides";
import GlobalInternetSection from "@/components/home/GlobalInternetSection";
import VPNExplainer from "@/components/home/VPNExplainer";
import VPNUseCases from "@/components/home/VPNUseCases";
import VPNProductSection from "@/components/home/VPNProductSection";
import NetworkGuides from "@/components/home/NetworkGuides";
import LatestArticles from "@/components/home/LatestArticles";
import Footer from "@/components/layout/Footer";
import JsonLd, { generateWebSiteSchema, generateOrganizationSchema } from "@/components/seo/JsonLd";

import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: '海外AI工具大全与2026机场推荐｜RunAI',
  description: 'RunAI 整理海外 AI 工具和国内使用指南，并提供 2026 机场推荐、稳定网络方案、客户端订阅与实测参考，帮助国内用户更清楚地选择 AI 工具和网络服务。',
  canonical: '/',
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-sans)]">
      <JsonLd data={[generateWebSiteSchema(), generateOrganizationSchema("")]} />
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <AICategoryGrid />
        <PopularAITools />
        <AIUseCases />
        <FeaturedGuides />
        
        {/* Soft transition to Network / VPN section */}
        <GlobalInternetSection />
        <VPNExplainer />
        <VPNUseCases />
        <VPNProductSection />
        
        <NetworkGuides />
        <LatestArticles />
      </main>

      <Footer />
    </div>
  );
}
