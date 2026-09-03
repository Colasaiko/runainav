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

export const metadata = {
  title: '2026最新AI工具大全与深度测评 | 网络连通指南 - RunAI',
  description: '找不到好用的AI工具或因网络限制无从下手？RunAI快航为您精选ChatGPT等顶尖AI产品，提供国内稳定的网络配置与实战教程。点击开启全球AI无障碍之旅！',
  keywords: 'AI导航网站,ChatGPT教程,Claude使用指南,网络环境配置',
  alternates: {
    canonical: 'https://runainav.com/',
  },
  openGraph: {
    title: '2026最新AI工具大全与深度测评 | 网络连通指南 - RunAI',
    description: '找不到好用的AI工具或因网络限制无从下手？RunAI快航为您精选ChatGPT等顶尖AI产品，提供国内稳定的网络配置与实战教程。点击开启全球AI无障碍之旅！',
    url: 'https://runainav.com/',
    type: 'website',
    siteName: 'RunAI',
  }
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-sans)]">
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
