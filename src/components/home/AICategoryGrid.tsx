import { MessageSquare, PenTool, Code, Image, Video, Search, FileText, BookOpen } from "lucide-react";
import Link from "next/link";

const categories = [
  { id: 'chat', name: 'AI 聊天', icon: MessageSquare, desc: 'ChatGPT · Claude · Gemini', href: '/ai?category=chat' },
  { id: 'writing', name: 'AI 写作', icon: PenTool, desc: '文章 · 翻译 · 总结', href: '/ai?category=productivity' },
  { id: 'coding', name: 'AI 编程', icon: Code, desc: 'Cursor · Claude Code · ChatGPT', href: '/ai?category=coding' },
  { id: 'image', name: 'AI 绘画', icon: Image, desc: 'Midjourney · 图片生成', href: '/ai?category=image' },
  { id: 'video', name: 'AI 视频', icon: Video, desc: '视频生成 · 剪辑', href: '/ai?category=video' },
  { id: 'search', name: 'AI 搜索', icon: Search, desc: 'Perplexity · AI Research', href: '/ai?category=search' },
  { id: 'office', name: 'AI 办公', icon: FileText, desc: 'PPT · 文件 · 总结', href: '/ai?category=productivity' },
  { id: 'learning', name: 'AI 学习', icon: BookOpen, desc: '语言 · 知识 · 学习助手', href: '/ai?category=chat' },
];

export default function AICategoryGrid() {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">你想用 AI 做什么？</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">选择你感兴趣的领域，探索最适合的 AI 工具。</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={category.href}
              className="group p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-sm transition-all text-center flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 text-brand-600 group-hover:scale-110 transition-transform">
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
              <p className="text-xs text-gray-500">{category.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
