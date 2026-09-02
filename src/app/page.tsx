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
  title: 'RunAI AI快航 - AI工具、AI指南与全球网络使用指南',
  description: 'RunAI 分享 ChatGPT、Claude、Gemini、AI 编程、AI 绘图等工具与教程，并提供 VPN 与网络使用指南，帮助用户更轻松地探索和使用全球 AI 与互联网服务。',
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
