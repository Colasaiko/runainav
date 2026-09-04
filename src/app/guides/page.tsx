import { Suspense } from 'react';
import GuidesList from './GuidesList';

import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: '海外热门AI使用指南与常见问题解答 | RunAI',
  description: 'RunAI精选全球顶尖AI工具的使用方法与功能介绍。无论你是新手还是进阶用户，都能在此了解详细的账号要求、网络环境配置及常见问题，助你快速掌握AI高效工作法。',
  canonical: '/guides/',
});

export default function AIPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI 使用指南</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            从入门到实际使用，了解常用 AI 的功能、账号要求、网络环境和常见问题。
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
