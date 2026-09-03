import { Suspense } from 'react';
import AIList from './AIList';

export const metadata = {
  title: 'AI 工具大全 | 发现适合你的 AI 工具 | RunAI',
  description: '浏览 RunAI 为您精选的全球热门 AI 工具，涵盖聊天、搜索、编程、绘图、视频等领域的顶级产品，并提供详细的使用指南与国内网络环境评估。',
};

export default function AIPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI 工具大全</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            发现适合你的 AI 工具，了解这些前沿工具能帮你做什么，以及如何在国内网络环境下顺利使用。
          </p>
        </div>
        <Suspense fallback={<div className="text-center py-20">加载中...</div>}>
          <AIList />
        </Suspense>
      </div>
    </div>
  );
}
