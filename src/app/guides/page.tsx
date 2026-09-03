import { Suspense } from 'react';
import GuidesList from './GuidesList';

import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: 'AI使用指南与教?评 | 高效生产力神器 - RunAI',
  description: '不知道怎么用AI？RunAI收录全球热门的聊天、编程、绘图等AI神器的使用说明，提供详尽教程与国内连通方案。立即阅读AI使用指南，开启高效生产力无障碍之旅！',
  canonical: '/guides/',
});

export default function AIPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI 使用指南</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            从入门到实际使用，了解常用 AI 的功能、账号要求、网络环境和常见问题。。
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500">
            <span>AI工具大全</span>
            <span>AI聊天神器</span>
            <span>AI编程软件</span>
            <span>AI绘画生成</span>
          </div>
        </div>
        <Suspense fallback={<div className="text-center py-20">加载中...</div>}>
          <GuidesList />
        </Suspense>
      </div>
    </div>
  );
}
