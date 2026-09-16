import Link from 'next/link';
import { aiTools } from '@/data/aiTools';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AIList from './AIList';
import { aiComparisons } from '@/data/aiComparisons';
import { constructMetadata } from "@/lib/seo";
import JsonLd from '@/components/seo/JsonLd';

export const metadata = constructMetadata({
  title: 'AI工具大全与AI工具箱｜国内外热门AI推荐｜RunAI',
  description: 'RunAI收录国内外热门AI工具，涵盖聊天、搜索、编程、绘图、视频、办公与音乐，可按地区和用途筛选，并提供工具详情、对比和使用指南，帮助快速找到合适的AI工具。',
  canonical: '/ai',
});

export default function AIPage() {
  const faqData = [
    {
      q: "AI工具有哪些？",
      a: "常见的AI工具涵盖了工作与生活的多个方面，包括用于对话的 ChatGPT、Claude、DeepSeek，用于搜索的 Gemini、perplexity，用于代码生成的 Cursor，以及用于图像创作的 Midjourney 和视频工具等。"
    },
    {
      q: "AI工具箱是什么？",
      a: "AI工具箱是一个集合了多种AI能力和平台的导航系统。在 RunAI 的AI工具箱中，你可以按分类和地区快速筛选，找到从文本创作、搜索、编程到音视频生成最适合你的效率工具。"
    },
    {
      q: "国内AI有哪些？",
      a: "目前热门的国内AI工具包括 DeepSeek、豆包（Doubao）、Kimi、通义千问、腾讯元宝等。它们在中文理解、网络直连和本地化办公场景中具有显著优势。"
    },
    {
      q: "国外AI有哪些？",
      a: "全球范围内具有代表性的国外AI工具包括 OpenAI 的 ChatGPT、Anthropic 的 Claude、Google 的 Gemini，以及垂直领域的 Midjourney、Cursor 等。"
    },
    {
      q: "免费AI工具怎么选？",
      a: "市面上有许多强大的免费AI工具，比如 DeepSeek 和豆包通常提供完全免费的使用额度，ChatGPT 和 Claude 也提供基础的免费对话功能。你可以根据自身的核心需求（如写作、编程或画图）进行测试与选择。"
    },
    {
      q: "AI工具哪个最好用？",
      a: "没有绝对好用的单一工具，只有最适合你使用场景的工具。如果需要编写代码，Cursor 表现出色；如果需要处理超长中文文档，Kimi 是个好选择；如果是日常知识问答，ChatGPT、Claude 和 DeepSeek 都能提供顶尖体验。"
    }
  ];


  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "首页",
        "item": "https://runainav.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "AI 工具大全",
        "item": "https://runainav.com/ai"
      }
    ]
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "AI工具大全与AI工具箱",
    "url": "https://runainav.com/ai",
    "description": "RunAI收录国内外热门AI工具，涵盖聊天、搜索、编程、绘图、视频、办公与音乐。"
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": aiTools.map((tool, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": tool.name,
      "url": `https://runainav.com/guides/${tool.slug}`
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, collectionSchema, itemListSchema, faqSchema]) }} />
      <JsonLd data={faqSchema} />
      <main className="flex-grow py-12">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Breadcrumb */}
        <nav className="flex text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-brand-600">首页</Link> <span className="mx-2">/</span>
          <span className="text-gray-900">AI 工具大全</span>
        </nav>

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI工具箱：国内外热门AI工具大全</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            RunAI AI工具箱收录国内外常用AI工具，用户可以按照聊天、搜索、编程、绘图、视频、办公、音乐以及地区快速筛选，探索最佳的AI工具推荐。
          </p>
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-medium text-gray-500">按分类浏览</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/ai/chat" className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-brand-500 hover:text-brand-600 transition-colors">AI聊天</Link>
              <Link href="/ai/search" className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-brand-500 hover:text-brand-600 transition-colors">AI搜索</Link>
              <Link href="/ai/coding" className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-brand-500 hover:text-brand-600 transition-colors">AI编程</Link>
              <Link href="/ai/image" className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-brand-500 hover:text-brand-600 transition-colors">AI绘画</Link>
              <Link href="/ai/video" className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-brand-500 hover:text-brand-600 transition-colors">AI视频</Link>
              <Link href="/ai/productivity" className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-brand-500 hover:text-brand-600 transition-colors">AI办公</Link>
              <Link href="/ai/music" className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-brand-500 hover:text-brand-600 transition-colors">AI音乐</Link>
              <Link href="/ai/audio" className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-brand-500 hover:text-brand-600 transition-colors">AI音频</Link>
              <div className="w-px h-6 bg-gray-300 hidden md:block self-center mx-1"></div>
              <Link href="/ai/china" className="px-4 py-2 bg-blue-50 rounded-full border border-blue-100 text-sm font-medium text-blue-700 hover:bg-blue-100 transition-colors">国内AI工具</Link>
              <Link href="/ai/global" className="px-4 py-2 bg-blue-50 rounded-full border border-blue-100 text-sm font-medium text-blue-700 hover:bg-blue-100 transition-colors">国外AI工具</Link>
            </div>
          </div>
        </div>
        
        <div className="mb-10 mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">热门 AI 对比</h2>
              <Link href="/compare" className="text-sm text-brand-600 hover:text-brand-700 font-medium flex items-center">查看更多对比</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {aiComparisons.slice(0, 4).map(comp => (
                <Link
                  key={comp.slug}
                  href={`/compare/${comp.slug}`}
                  className="bg-brand-50 p-5 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md hover:border-brand-300 transition-all group flex flex-col h-full"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-brand-600 font-bold">⚔️</span>
                    <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-1">{comp.title.split('？')[0] + '？'}</h3>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{comp.quickVerdict}</p>
                </Link>
              ))}
            </div>
          </div>
        <AIList />

        {/* SEO Text Sections */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="prose max-w-none prose-brand">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">AI工具箱里有哪些类型？</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-lg mb-2"><Link href="/ai/chat" className="text-brand-600 hover:underline">AI聊天</Link></h3>
                <p className="text-sm text-gray-600 m-0">进行自然语言对话、文本创作与问答的通用大模型。</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-lg mb-2"><Link href="/ai/search" className="text-brand-600 hover:underline">AI搜索</Link></h3>
                <p className="text-sm text-gray-600 m-0">联网获取实时信息并自动总结摘要的智能搜索引擎。</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-lg mb-2"><Link href="/ai/coding" className="text-brand-600 hover:underline">AI编程</Link></h3>
                <p className="text-sm text-gray-600 m-0">辅助代码编写、代码解释、Debug以及项目重构的开发工具。</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-lg mb-2"><Link href="/ai/image" className="text-brand-600 hover:underline">AI绘画</Link></h3>
                <p className="text-sm text-gray-600 m-0">通过提示词自动生成图像、海报和插画的设计工具。</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-lg mb-2"><Link href="/ai/video" className="text-brand-600 hover:underline">AI视频</Link></h3>
                <p className="text-sm text-gray-600 m-0">文生视频、图生视频以及智能视频剪辑与后期处理应用。</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-lg mb-2"><Link href="/ai/productivity" className="text-brand-600 hover:underline">AI办公</Link></h3>
                <p className="text-sm text-gray-600 m-0">涵盖文档处理、会议纪要生成、PPT制作与表格分析的提效神器。</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-lg mb-2"><Link href="/ai/music" className="text-brand-600 hover:underline">AI音乐</Link></h3>
                <p className="text-sm text-gray-600 m-0">通过文字描述快速创作旋律、歌曲和配乐的音频生成平台。</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-lg mb-2"><Link href="/ai/audio" className="text-brand-600 hover:underline">AI音频</Link></h3>
                <p className="text-sm text-gray-600 m-0">声音克隆、语音转写、播客生成等语音交互与处理软件。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">国内AI和国外AI怎么选？</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed mb-10">
              <p>在选择 AI 工具时，很多用户会纠结应该使用 <Link href="/ai/china" className="text-brand-600 font-medium hover:underline">国内AI工具</Link> 还是 <Link href="/ai/global" className="text-brand-600 font-medium hover:underline">国外AI工具</Link>。这实际上并没有绝对的答案，实际选择取决于你的具体用途、账号获取难度、所在地区、所需功能、价格以及使用平台。</p>
              <p><strong>国内 AI 工具</strong>通常更方便处理中文指令、集成在本地服务（如微信、飞书、企业微信）以及拥有更加顺畅的国内账号体系。在网络直连体验上具有明显优势，例如处理带有强烈中国文化背景的长篇小说、国内公文或财报时，往往表现得更加贴合语境。</p>
              <p><strong>国外 / 全球 AI 工具</strong>则在不同产品上可能拥有不同规模的基础模型、庞大的插件生态和专精领域的专业能力。比如在高级编程辅助、顶尖质量的图像生成、复杂数理逻辑推理等前沿技术方面，依然保持着强劲的领先和生态扩展能力。</p>
            </div>
            
            <hr className="my-10 border-gray-200" />

            <h2 className="text-2xl font-bold text-gray-900 mb-8">AI工具大全 FAQ</h2>
            <div className="space-y-6">
              {faqData.map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-2xl">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">{item.q}</h3>
                  <p className="text-gray-700 m-0 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      </main>
      <Footer />
    </div>
  );
}
