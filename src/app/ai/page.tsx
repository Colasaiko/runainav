import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Suspense } from 'react';
import AIList from './AIList';

import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: 'AI工具大全与测评 | 高效生产力神器 - RunAI',
  description: '不知道哪个AI工具最适合工作需求？RunAI收录全球热门的聊天、编程、绘图等AI神器，提供详尽对比与国内无障碍使用评测。立即点击探索最新AI工具大全与使用方案！',
  canonical: '/ai',
});

export default function AIPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI 工具大全</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            发现适合你的 AI 工具，了解这些前沿工具能帮你做什么，以及如何在国内网络环境下顺利使用。
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500">
            <span>AI工具大全</span>
            <span>AI聊天神器</span>
            <span>AI编程软件</span>
            <span>AI绘画生成</span>
          </div>
        </div>
        <Suspense fallback={<div className="text-center py-20">加载中...</div>}>
          <AIList />
        </Suspense>
      </div>
      </main>
      <Footer />
    </div>
  );
}
