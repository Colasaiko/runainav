import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function FeaturedGuides() {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI 使用指南</h2>
            <p className="text-gray-500 max-w-2xl">
              从入门到精通，手把手教你如何高效使用主流 AI 工具。
            </p>
          </div>
          <Link href="/guides" className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-brand-600 transition-colors">
            查看所有指南 &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Large Card */}
          <div className="lg:col-span-7">
            <Link href="/guides/chatgpt" className="group block h-full">
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 h-full hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-100 relative w-full flex items-center justify-center">
                  <div className="text-gray-400 group-hover:scale-105 transition-transform duration-500">
                    {/* Placeholder for actual image */}
                    <BookOpen className="w-16 h-16 opacity-20" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-brand-600 text-sm font-semibold mb-3">新手必读</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-600 transition-colors">
                    ChatGPT 完整新手指南：从注册到写出第一个好 Prompt
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    如果你从未接触过 AI，这篇指南将带你零基础了解 ChatGPT，教你如何与 AI 对话，并展示 10 个能立刻提升你工作效率的真实案例。
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Side Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {[
              { title: "Claude 怎么用？长文本与代码处理利器", tag: "Claude", slug: "claude" },
              { title: "Gemini 怎么用？整合 Google 生态的玩法", tag: "Gemini", slug: "gemini" },
              { title: "AI 编程入门：如何用 Cursor 快速写出网页", tag: "AI 编程", slug: "cursor" },
              { title: "AI 绘图入门：Midjourney 基础参数与提示词解析", tag: "AI 绘图", slug: "midjourney" }
            ].map((guide, idx) => (
              <Link key={idx} href={`/guides/${guide.slug}`} className="group block bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
                <div className="text-xs font-medium text-gray-500 mb-2">{guide.tag}</div>
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                  {guide.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
