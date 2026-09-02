import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tools = [
  { id: 'chatgpt', name: 'ChatGPT', category: 'AI 聊天', desc: 'OpenAI 推出的强大语言模型，适用于各种文本任务。', brandColor: 'bg-green-100 text-green-700' },
  { id: 'claude', name: 'Claude', category: 'AI 聊天 / 编程', desc: 'Anthropic 推出，长文本处理和代码能力出众。', brandColor: 'bg-orange-100 text-orange-700' },
  { id: 'gemini', name: 'Gemini', category: 'AI 聊天', desc: 'Google 的原生多模态大模型。', brandColor: 'bg-blue-100 text-blue-700' },
  { id: 'perplexity', name: 'Perplexity', category: 'AI 搜索', desc: '基于 AI 的搜索引擎，提供带引用的准确答案。', brandColor: 'bg-teal-100 text-teal-700' },
  { id: 'cursor', name: 'Cursor', category: 'AI 编程', desc: '内置 AI 的智能代码编辑器。', brandColor: 'bg-gray-200 text-gray-800' },
  { id: 'midjourney', name: 'Midjourney', category: 'AI 绘画', desc: '生成极高质量图像的 AI 绘图工具。', brandColor: 'bg-purple-100 text-purple-700' },
];

export default function PopularAITools() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">热门 AI 工具</h2>
            <p className="text-gray-500 max-w-2xl">
              精选全球最受欢迎的第三方 AI 服务，探索它们的强大功能。
              <span className="block text-sm mt-1 text-gray-400">注：本站提供客观指南，非这些产品的官方运营商。</span>
            </p>
          </div>
          <Link href="/ai-tools" className="inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors">
            查看所有工具 <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div key={tool.id} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${tool.brandColor}`}>
                  {tool.name.charAt(0)}
                </div>
                <span className="text-xs font-medium px-2.5 py-1 bg-gray-50 text-gray-500 rounded-full">
                  {tool.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.name}</h3>
              <p className="text-sm text-gray-500 mb-6 flex-grow">{tool.desc}</p>
              
              <Link 
                href={`/tools/${tool.id}`} 
                className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-brand-600 transition-colors mt-auto"
              >
                了解更多 <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
