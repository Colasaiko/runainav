import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleStickyBar from '@/components/navigation/ArticleStickyBar';
import FloatingBackButton from '@/components/navigation/FloatingBackButton';
import JsonLd from '@/components/seo/JsonLd';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Zap, Check, AlertTriangle, ArrowRight, HelpCircle, Image as ImageIcon, Paintbrush, Share2, MessageSquare, Code, Layers
} from 'lucide-react';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'ChatGPT图片2.5怎么用？生成、编辑与新功能指南',
  description: 'ChatGPT图片2.5带来更清晰细节、更精准编辑和更快生成，并新增Sketch、模板、图片评论和提示词分享。本文整理主要功能、使用方法与当前可用范围。',
  canonical: '/guides/chatgpt-images-2-5-guide',
});

export default function ChatGPTImages25GuidePage() {
  const sections = [
    { id: 'intro', navLabel: '什么是Images 2.5' },
    { id: 'features', navLabel: '主要变化' },
    { id: 'generate', navLabel: '生成图片' },
    { id: 'edit', navLabel: '编辑图片' },
    { id: 'sketch', navLabel: 'Sketch功能' },
    { id: 'api', navLabel: 'API与进阶' },
    { id: 'faq', navLabel: 'FAQ' },
    { id: 'references', navLabel: '官方资料' },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <JsonLd data={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ChatGPT图片2.5怎么用？生成、编辑与新功能指南',
          description: 'ChatGPT图片2.5带来更清晰细节、更精准编辑和更快生成，并新增Sketch、模板、图片评论和提示词分享。本文整理主要功能、使用方法与当前可用范围。',
          datePublished: '2026-09-14T08:00:00+08:00',
          dateModified: '2026-09-14T08:00:00+08:00',
          author: { '@type': 'Organization', name: 'RunAI' },
          publisher: { '@type': 'Organization', name: 'RunAI', logo: { '@type': 'ImageObject', url: 'https://runainav.com/images/logo.png' } },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: '首页', item: 'https://runainav.com/' },
            { '@type': 'ListItem', position: 2, name: '指南与教程', item: 'https://runainav.com/guides' },
            { '@type': 'ListItem', position: 3, name: 'ChatGPT图片2.5怎么用？生成、编辑与新功能指南', item: 'https://runainav.com/guides/chatgpt-images-2-5-guide' },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'ChatGPT Images 2.5是什么？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'ChatGPT Images 2.5 是 OpenAI 最新推出的图像生成与编辑系统，带来了更快的生成速度、更高的细节质量、更精准的多轮编辑，以及 Sketch、模板等全新功能。'
              }
            },
            {
              '@type': 'Question',
              name: 'Images 2.5需要付费吗？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '当前官方说明，ChatGPT Images 2.5 面向 ChatGPT（包括 Plus 等方案）、ChatGPT Work 和 Codex 用户提供。具体免费或付费可用额度请参考当前官方订阅政策。'
              }
            },
            {
              '@type': 'Question',
              name: '怎么用ChatGPT修改图片？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '生成图片后，点击图片进入详情视图，可以直接输入新的提示词进行全局修改，或者使用局部重绘（Inpainting）工具涂抹需要修改的区域，然后再输入替换内容的提示词。'
              }
            },
            {
              '@type': 'Question',
              name: 'Sketch在哪里？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sketch 是 Images 2.5 新增的功能，允许用户通过简单的草图引导 AI 生成图片，通常在 ChatGPT 的图像输入或编辑工具栏中可以找到该选项。'
              }
            },
            {
              '@type': 'Question',
              name: '模板有什么用？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '模板（Templates）允许用户保存特定的图像风格、尺寸比例或构图结构，方便在后续的图片生成中快速复用，非常适合海报设计或系列插图制作。'
              }
            },
            {
              '@type': 'Question',
              name: 'Images 2.5支持API吗？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '支持。API 中提供了 GPT-Image-2.5 Flare 和 GPT-Image-2.5 Sunburst 等版本供开发者调用。'
              }
            }
          ]
        }
      ]} />
      <Header />
      <ArticleStickyBar sections={sections} />
      <FloatingBackButton fallbackHref="/guides" />

      <main className="pb-20">
        <article className="container mx-auto px-4 max-w-4xl mt-8">
          
          <header className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">ChatGPT图片2.5怎么用？生成、编辑与新功能指南</h1>
            <p className="text-gray-600 text-lg">了解 OpenAI 最新图像生成模型的核心提升与实战提示词</p>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-500">
              <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> 2026-09-14</span>
              <span className="bg-gray-100 px-2 py-1 rounded-md text-gray-700">AI绘图</span>
            </div>
          </header>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">功能开放提示</h3>
              <p className="text-blue-800 text-sm m-0 leading-relaxed">
                ChatGPT Images 2.5 面向 ChatGPT、ChatGPT Work 和 Codex 用户提供，支持桌面、移动与网页平台。具体功能的上线时间可能因账号区域和订阅方案略有差异，请以当前界面显示为准。
              </p>
            </div>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            
            <section id="intro" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">ChatGPT Images 2.5 是什么？</h2>
              <p>
                根据 OpenAI 官方发布的《Introducing ChatGPT Images 2.5》，这是 ChatGPT 内置图像生成功能的重大升级。它不仅提升了底层的图像质量，还引入了一系列强大的交互与编辑工具，使得 AI 绘图从“盲盒生成”走向了“精确控制”。
              </p>
            </section>

            <section id="features" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">相比以前有什么变化？</h2>
              <p>本次升级在多个维度显著改善了用户体验：</p>
              <ul>
                <li><strong>生成速度更快：</strong> 官方数据显示，生成延迟相比 Images 2.0 最多降低了约 50%，出图响应更加迅速。</li>
                <li><strong>细节与文本更清晰：</strong> 图像中的微小细节、材质纹理，尤其是画面中包含文字时的拼写准确度都得到了提升。</li>
                <li><strong>多轮编辑一致性：</strong> 在对已生成的图片进行多轮对话修改时，AI 能够更好地保持参考图片的主体结构不变，仅修改你要求的特定部分。</li>
                <li><strong>全新互动功能：</strong> 增加了 Sketch（草图）、Templates（模板）、图片评论以及 Prompt 分享功能。</li>
              </ul>
            </section>

            <section id="generate" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">怎么生成与编辑第一张图片</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">生成示例：海报设计</h3>
              <p>你可以直接在对话框中描述想要的画面。Images 2.5 在处理构图和文字排版时更加智能。</p>
              <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-brand-500 mb-4">
                <p className="font-mono text-sm m-0">“制作一张 4:5 比例的社交媒体活动海报，背景为赛博朋克风格的霓虹都市。正中央用清晰大号的白色字体写上 &apos;RUNAI TECH&apos;，并保留底部用于填写活动时间与地点的空白区域。”</p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3" id="edit">精准编辑示例：产品图修改</h3>
              <p>当图片生成后，点击图片可以打开全屏视图。你可以直接输入修改指令，或者使用画笔涂抹想要修改的局部（Inpainting）。例如，在保持主体不变的情况下更改背景：</p>
              <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-brand-500 mb-4">
                <p className="font-mono text-sm m-0">“保持产品外形和 Logo 不变，将背景改成简洁的白色摄影棚，增加柔和自然阴影。”</p>
              </div>
              <p>或者仅修改局部：</p>
              <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-brand-500 mb-4">
                <p className="font-mono text-sm m-0">“只修改人物外套颜色为深蓝色，保持脸部、姿势、背景和构图不变。”</p>
              </div>
            </section>

            <section id="sketch" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Sketch 与 Templates 新功能</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4 not-prose">
                <div className="bg-white p-5 rounded-xl border border-gray-200">
                  <Paintbrush className="w-6 h-6 text-brand-500 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Sketch (草图引导)</h3>
                  <p className="text-sm text-gray-600">
                    如果你很难用语言描述想要的构图，可以直接画一个简单的草图。Images 2.5 会理解草图的轮廓和布局，并将其转化为精美的高清图像，极大地降低了空间构图描述的门槛。
                  </p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200">
                  <Layers className="w-6 h-6 text-brand-500 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Templates (模板)</h3>
                  <p className="text-sm text-gray-600">
                    当你调出一种非常喜欢的艺术风格或特定的海报排版后，可以将其保存为模板。下次只需应用该模板，AI 就会严格遵循同样的风格生成新内容。
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">图片评论与 Prompt 分享</h3>
              <p>
                在团队协作中，新加入的<strong>图片评论</strong>功能允许用户直接在生成的图片上进行批注，探讨修改方向。而 <strong>Prompt 分享</strong>功能则让你可以一键将精彩图像背后的提示词链接分享给社区或其他用户。
              </p>
            </section>

            <section id="api" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">API 与进阶开发</h2>
              <p>对于开发者，OpenAI 在 API 中同步更新了 Images 2.5 的能力。目前提供两个主要变体：</p>
              <ul>
                <li><strong>GPT-Image-2.5 Flare：</strong> 针对特定应用场景优化（具体以官方开发文档为准）。</li>
                <li><strong>GPT-Image-2.5 Sunburst：</strong> 另一款特性优化的模型版本。</li>
              </ul>
              <p>开发者可以利用 API 将这些强大的图像生成与精确编辑能力集成到自己的应用或自动化工作流中。</p>
            </section>

            <section id="faq" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">常见问题 (FAQ)</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-brand-500 shrink-0" />
                    ChatGPT Images 2.5是什么？
                  </h3>
                  <p className="text-gray-600 text-sm ml-7">ChatGPT Images 2.5 是 OpenAI 最新推出的图像生成与编辑系统，带来了更快的生成速度、更高的细节质量、更精准的多轮编辑，以及 Sketch、模板等全新功能。</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-brand-500 shrink-0" />
                    Images 2.5需要付费吗？
                  </h3>
                  <p className="text-gray-600 text-sm ml-7">当前官方说明，ChatGPT Images 2.5 面向 ChatGPT（包括 Plus 等方案）、ChatGPT Work 和 Codex 用户提供。具体免费或付费可用额度请参考当前官方订阅政策。</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-brand-500 shrink-0" />
                    怎么用ChatGPT修改图片？
                  </h3>
                  <p className="text-gray-600 text-sm ml-7">生成图片后，点击图片进入详情视图，可以直接输入新的提示词进行全局修改，或者使用局部重绘（Inpainting）工具涂抹需要修改的区域，然后再输入替换内容的提示词。</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-brand-500 shrink-0" />
                    Sketch在哪里？
                  </h3>
                  <p className="text-gray-600 text-sm ml-7">Sketch 是 Images 2.5 新增的功能，允许用户通过简单的草图引导 AI 生成图片，通常在 ChatGPT 的图像输入或编辑工具栏中可以找到该选项。</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-brand-500 shrink-0" />
                    模板有什么用？
                  </h3>
                  <p className="text-gray-600 text-sm ml-7">模板（Templates）允许用户保存特定的图像风格、尺寸比例或构图结构，方便在后续的图片生成中快速复用，非常适合海报设计或系列插图制作。</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-brand-500 shrink-0" />
                    Images 2.5支持API吗？
                  </h3>
                  <p className="text-gray-600 text-sm ml-7">支持。API 中提供了 GPT-Image-2.5 Flare 和 GPT-Image-2.5 Sunburst 等版本供开发者调用。</p>
                </div>
              </div>
            </section>

            <section id="references" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">官方资料与延伸阅读</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  OpenAI 官方公告：
                  <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline ml-1">
                    Introducing ChatGPT Images 2.5
                  </a>
                </li>
                <li>
                  延伸阅读：<Link href="/guides/midjourney-realistic-portrait" className="text-brand-600 hover:underline">Midjourney 写实人像生成指南</Link>
                </li>
              </ul>
            </section>

          </div>
        
      

    
      {/* 🚀 Topic Cluster 自动聚合区域 */}
      <section className="mt-16 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl p-8 border border-blue-100 dark:border-blue-800/30">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
          <span>✨</span> 🧠 ChatGPT 深度精选系列
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <Link href="/guides/chatgpt-what-can-it-do" className="flex items-start gap-3 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors group">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg group-hover:scale-110 transition-transform">✨</div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">ChatGPT 能做什么？</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">零基础看懂的 7 大日常高频场景</div>
            </div>
          </Link>
  
          <Link href="/guides/chatgpt-pdf-guide" className="flex items-start gap-3 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors group">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg group-hover:scale-110 transition-transform">✨</div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">长文档与 PDF 分析</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">如何让 AI 帮你读财报与论文</div>
            </div>
          </Link>
  
          <Link href="/guides/chatgpt-compare-files" className="flex items-start gap-3 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors group">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg group-hover:scale-110 transition-transform">✨</div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">多文件对比与分析</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">如何让 ChatGPT 帮你找合同差异</div>
            </div>
          </Link>
  
          <Link href="/guides/chatgpt-images-2-5-guide" className="flex items-start gap-3 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors group">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg group-hover:scale-110 transition-transform">✨</div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">图片理解与数据处理</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">从手写草稿到完整的代码实现</div>
            </div>
          </Link>
  
        </div>
      </section>
\n    </article>
      </main>

      <Footer />
    </div>
  );
}
