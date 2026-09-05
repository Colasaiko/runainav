import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleStickyBar from '@/components/navigation/ArticleStickyBar';
import FloatingBackButton from '@/components/navigation/FloatingBackButton';
import CopyButton from '@/components/ui/CopyButton';
import TutorialImage from '@/components/ui/TutorialImage';
import { constructMetadata } from "@/lib/seo";
import { Info, Check, X, Camera, Sun, Focus, UserRound, Sparkles, SlidersHorizontal, Image as ImageIcon, CheckSquare, Settings2, ZoomIn, LayoutTemplate } from "lucide-react";
import Link from 'next/link';
import Script from 'next/script';

export const metadata = constructMetadata({
  title: 'Midjourney人像提示词：构图光线教程 | RunAI',
  description: '从人物主体、构图、光线、镜头、景深到皮肤质感，系统拆解Midjourney真实感人像提示词写法，并提供可直接参考的Prompt模板与常见失败排查方法。',
  canonical: '/guides/midjourney-realistic-portrait',
  type: 'article',
  publishedTime: '2026-09-05',
  modifiedTime: '2026-09-05',
});

const SECTIONS = [

  { id: 'formula', navLabel: 'Prompt公式' },
  { id: 'subject', navLabel: '人物主体' },
  { id: 'lighting', navLabel: '光线' },
  { id: 'composition', navLabel: '构图' },
  { id: 'lens', navLabel: '镜头' },
  { id: 'parameters', navLabel: '参数' },
  { id: 'templates', navLabel: 'Prompt模板' },
  { id: 'troubleshooting', navLabel: '失败排查' },
  { id: 'faq', navLabel: 'FAQ' },

];

export default function MidjourneyPortraitGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Midjourney 真实感人像提示词怎么写？",
    "description": metadata.description,
    "image": "https://runainav.com/images/og/default.webp",
    "author": {
      "@type": "Organization",
      "name": "RunAI"
    },
    "publisher": {
      "@type": "Organization",
      "name": "RunAI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://runainav.com/logo.png"
      }
    },
    "datePublished": "2026-09-05T00:00:00+08:00",
    "dateModified": "2026-09-05T00:00:00+08:00"
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Midjourney 人像 Prompt 越长越好吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "不是。过长的 Prompt 往往包含很多重复、冲突或无意义的形容词。保持清晰、具体，每次只调整一两个变量，才更容易掌握什么词真正影响了画面结果。"
        }
      },
      {
        "@type": "Question",
        "name": "真实感人像应该先写什么？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "建议先确定核心要素：人物是谁、在哪里、什么光线、什么构图。把主体和环境交代清楚后，再加入摄影镜头、景深、质感等辅助描述。"
        }
      },
      {
        "@type": "Question",
        "name": "85mm 一定比 50mm 更适合人像吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "不一定。85mm 常用于表达经典的人像特写观感，背景虚化明显；而 35mm 或 50mm 更适合表达人物与环境的互动关系（如街头人像、咖啡馆生活照）。"
        }
      },
      {
        "@type": "Question",
        "name": "怎么让背景虚化？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "可以在 Prompt 中加入 shallow depth of field（浅景深）、blurred background（模糊背景）或 background bokeh，同时配合 close-up portrait 等特写构图词汇。"
        }
      },
      {
        "@type": "Question",
        "name": "为什么人物皮肤看起来很假？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI 生成人像容易出现过度平滑的“塑料感”。可以通过增加 natural skin texture、realistic photography 等描述，并适当降低 --stylize 参数，或避免叠加过多“beautiful、perfect”等美化词。"
        }
      },
      {
        "@type": "Question",
        "name": "--stylize 越高越真实吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "不是。高 --stylize 会让 Midjourney 发挥更多艺术风格，可能导致画面偏向插画或过度美化的 CG 感。如果追求真实纪实感，有时较低的 --stylize（如 50-100）反而更好。"
        }
      },
      {
        "@type": "Question",
        "name": "--chaos 是提高画质吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "完全不是。--chaos 控制的是生成网格中四张图片之间的初始差异。数值越高，四张图片的构图、风格变化越大，与画质或真实度无关。"
        }
      },
      {
        "@type": "Question",
        "name": "人像一般使用什么比例？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "通常使用竖屏比例，如 --ar 2:3（经典摄影比例）、--ar 3:4 或 --ar 9:16（适合手机全屏）。也可以使用 --ar 16:9 生成电影感横屏人像。"
        }
      },
      {
        "@type": "Question",
        "name": "可以上传参考人物图片吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "可以。目前可以使用 Image Prompts 垫图，或使用 V8.x 的 Edit Model 功能进行图片参考。上传个人照片时请注意隐私与平台政策。"
        }
      },
      {
        "@type": "Question",
        "name": "中文 Prompt 可以用吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "可以用，Midjourney 支持多语言理解。但因为许多摄影、打光与艺术专业术语在英文资料库中训练得更充分，使用对应英文（如 shallow depth of field）通常能获得更精准的控制。"
        }
      }
    ]
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://runainav.com/" },
      { "@type": "ListItem", "position": 2, "name": "AI指南", "item": "https://runainav.com/guides" },
      { "@type": "ListItem", "position": 3, "name": "Midjourney 人像提示词教程", "item": "https://runainav.com/guides/midjourney-realistic-portrait" }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Script id="json-ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="json-ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Script id="json-ld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      
      <Header />
      <ArticleStickyBar sections={SECTIONS} />
      
      <main className="flex-grow pt-8 pb-20">
        <article className="container mx-auto px-4 max-w-5xl">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-gray-500 mb-8 font-medium">
            <Link href="/" className="hover:text-gray-900 transition-colors">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/guides" className="hover:text-gray-900 transition-colors">AI指南</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Midjourney 人像提示词教程</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Midjourney 真实感人像提示词怎么写？
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              从人物主体、构图和光线开始，再加入镜头、景深与质感，一步步把模糊想法整理成更清楚的人像 Prompt。
            </p>
            <div className="flex items-start gap-2 bg-blue-50 text-blue-700 px-4 py-3 rounded-xl text-sm border border-blue-100/50">
              <Info className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold block mb-0.5">资料核对：2026-09-05</span>
                Midjourney 的模型和参数会持续更新（截至 2026-09-05 当前默认版本为 V8.2）。本文以当前官方文档为基础整理，涉及版本相关功能时，请以官方最新说明为准。
              </div>
            </div>
          </header>

          <div className="prose prose-gray max-w-none">
            {/* 30 秒速读 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm mb-16">
              <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 mt-0 mb-6">
                <Sparkles className="w-5 h-5 text-brand-500" /> 30 秒速读
              </h3>
              <ul className="space-y-4 mb-0 list-none pl-0">
                <li className="flex gap-3 text-gray-700">
                  <span className="shrink-0 text-brand-500 mt-0.5">•</span>
                  <span><strong>不要一开始就写几十个形容词：</strong>先确定“人物是谁”、“在哪里”、“什么光线”、“什么构图”。</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="shrink-0 text-brand-500 mt-0.5">•</span>
                  <span><strong>逐步增加细节：</strong>需要更像摄影作品时，再往后增加镜头、景深、皮肤质感、色彩等描述。</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="shrink-0 text-brand-500 mt-0.5">•</span>
                  <span><strong>参数永远放最后：</strong>比如 <code>--ar 2:3</code> 等控制指令，必须写在 Prompt 的最末尾。</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="shrink-0 text-brand-500 mt-0.5">•</span>
                  <span><strong>Prompt 越长不一定越好：</strong>每次只调整一两个变量，更容易知道到底是什么词真正影响了画面结果。</span>
                </li>
              </ul>
            </div>

            {/* 核心 Prompt 公式 */}
            <h2 id="formula" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <LayoutTemplate className="w-6 h-6 text-brand-500" /> 一条人像 Prompt 可以怎么拆？
            </h2>
            <p>
              写人像提示词就像在脑海中布置一个摄影棚。比起堆砌各种“beautiful, masterpiece”，按照明确的逻辑顺序书写，能让 AI 更准确地理解你的意图。
            </p>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm overflow-x-auto mb-12">
              <div className="flex gap-4 min-w-max pb-4">
                {[
                  { title: "主体", desc: "是谁 / 穿着", color: "bg-blue-50 text-blue-700 border-blue-200" },
                  { title: "环境", desc: "在哪里 / 场景", color: "bg-teal-50 text-teal-700 border-teal-200" },
                  { title: "光线", desc: "光影氛围", color: "bg-amber-50 text-amber-700 border-amber-200" },
                  { title: "镜头", desc: "焦段视角", color: "bg-purple-50 text-purple-700 border-purple-200" },
                  { title: "构图", desc: "远近与角度", color: "bg-pink-50 text-pink-700 border-pink-200" },
                  { title: "景深", desc: "背景虚化", color: "bg-rose-50 text-rose-700 border-rose-200" },
                  { title: "质感", desc: "皮肤与材质", color: "bg-orange-50 text-orange-700 border-orange-200" },
                  { title: "风格", desc: "色彩与情绪", color: "bg-indigo-50 text-indigo-700 border-indigo-200" },
                  { title: "参数", desc: "--ar 等指令", color: "bg-gray-100 text-gray-700 border-gray-300" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className={`flex flex-col items-center justify-center w-28 h-24 rounded-xl border ${item.color} shadow-sm`}>
                      <span className="font-bold mb-1">{item.title}</span>
                      <span className="text-xs opacity-80">{item.desc}</span>
                    </div>
                    {idx < 8 && <div className="text-gray-300 font-bold">+</div>}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mb-8">
              <h4 className="font-bold text-gray-900 mt-0 mb-4">第一个完整例子：</h4>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-xl font-mono text-sm mb-4 break-words">
                portrait of a young man standing beside a cafe window, soft morning light, natural skin texture, 85mm portrait photography, shallow depth of field, eye-level composition, realistic photography --ar 2:3
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-700">
                <div><span className="font-semibold text-brand-600">主体：</span>portrait of a young man</div>
                <div><span className="font-semibold text-brand-600">环境：</span>standing beside a cafe window</div>
                <div><span className="font-semibold text-brand-600">光线：</span>soft morning light</div>
                <div><span className="font-semibold text-brand-600">质感：</span>natural skin texture</div>
                <div><span className="font-semibold text-brand-600">镜头：</span>85mm portrait photography</div>
                <div><span className="font-semibold text-brand-600">景深：</span>shallow depth of field</div>
                <div><span className="font-semibold text-brand-600">构图：</span>eye-level composition</div>
                <div><span className="font-semibold text-brand-600">参数：</span>--ar 2:3</div>
              </div>
            </div>

            {/* 最常见错误 */}
            <h3 className="text-xl font-bold mt-12 mb-6">官方 Prompt 原则与常见错误</h3>
            <p>
              根据 Midjourney 官方文档的 Prompt Basics，描述应该<strong>清楚、具体，写出你真实想看到的东西</strong>。很多新手喜欢无限叠加形容词，这反而会让画面失控。
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="border-t-4 border-red-500 bg-white p-6 rounded-b-2xl shadow-sm">
                <div className="flex items-center gap-2 text-red-600 font-bold mb-4">
                  <X className="w-5 h-5" /> 错误示范：太模糊
                </div>
                <div className="bg-gray-50 p-3 rounded-lg font-mono text-sm text-gray-800 mb-4">
                  a beautiful girl, masterpiece, best quality, 8k, ultra detailed, hyper realistic
                </div>
                <p className="text-sm text-gray-600 m-0">
                  <strong>问题：</strong>虽然堆满了“画质词”，但没有说明环境、没有设定光线、没有说明构图和摄影方向，最终只能由 AI 随机猜测。
                </p>
              </div>
              <div className="border-t-4 border-green-500 bg-white p-6 rounded-b-2xl shadow-sm">
                <div className="flex items-center gap-2 text-green-600 font-bold mb-4">
                  <Check className="w-5 h-5" /> 正确示范：更明确
                </div>
                <div className="bg-gray-50 p-3 rounded-lg font-mono text-sm text-gray-800 mb-4">
                  close-up portrait of a woman in a quiet bookstore, soft window light, natural expression, realistic skin texture, shallow depth of field --ar 2:3
                </div>
                <p className="text-sm text-gray-600 m-0">
                  <strong>说明：</strong>每一个新增的描述（书店、窗边光、景深）都有明确的视觉用途，而不是盲目堆砌形容词。
                </p>
              </div>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* 人物主体应该描述什么？ */}
            <h2 id="subject" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <UserRound className="w-6 h-6 text-brand-500" /> 人物主体应该描述什么？
            </h2>
            <p>
              主体描述告诉 Midjourney 画面里的人是谁。尽量提供核心特征，但不要一次性加入几十项设定。如果某些特征（如国籍、种族）与画面无关，可以不写。
            </p>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div>
                <div className="text-sm text-gray-500 mb-1">人物 / 年龄</div>
                <div className="font-medium text-gray-900">a young man</div>
                <div className="font-medium text-gray-900">an elderly woman</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">服装</div>
                <div className="font-medium text-gray-900">dark casual jacket</div>
                <div className="font-medium text-gray-900">white linen shirt</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">表情</div>
                <div className="font-medium text-gray-900">calm expression</div>
                <div className="font-medium text-gray-900">gentle smile</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">动作</div>
                <div className="font-medium text-gray-900">looking slightly away</div>
                <div className="font-medium text-gray-900">reading a book</div>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-12 mb-4">怎么减少“塑料脸”的感觉？</h3>
            <p>
              Midjourney 默认倾向于生成唯美、平滑的人脸（通常被称为“AI塑料感”）。虽然没有任何一个词能“保证” 100% 消除 AI 特征，但你可以通过以下描述引导它往更自然的方向生成：
            </p>
            <ul className="mb-12">
              <li><code>natural skin texture</code> (自然皮肤质感)</li>
              <li><code>subtle skin details</code> (微妙的皮肤细节)</li>
              <li><code>soft facial shadows</code> (柔和的面部阴影)</li>
              <li><code>realistic portrait photography</code> (真实人像摄影)</li>
              <li><code>minimal retouching</code> (极少修图)</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl mb-12 text-amber-900">
              <strong className="block mb-2">避坑提示：不要使用长串的负面形容词</strong>
              <p className="text-sm m-0">
                不要在正文里写“ugly skin, bad face, deformed face”这类词试图反向避开。官方 Prompt Basics 建议：<strong>描述你想要什么</strong>，而不是你不要什么。需要排除特定内容时，请在最后使用 <code>--no</code> 参数。
              </p>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* 光线 */}
            <h2 id="lighting" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <Sun className="w-6 h-6 text-brand-500" /> 光线为什么比堆形容词更重要？
            </h2>
            <p>
              摄影是光影的艺术。改变光线描述，通常能瞬间改变整张图的氛围。不同光线产生不同效果，没有绝对的“最好看”。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { title: "Soft window light", desc: "柔和窗边光", effect: "适合室内咖啡馆、居家，面部过渡自然柔和。" },
                { title: "Golden hour", desc: "黄金时刻（日落/日出）", effect: "适合户外，提供温暖、金色的逆光或侧光氛围。" },
                { title: "Overcast daylight", desc: "阴天自然光", effect: "没有强烈的刺眼阴影，适合表现平静、写实感。" },
                { title: "Studio softbox", desc: "影棚柔光箱", effect: "适合商业质感、证件照或干净纯粹的肖像照。" },
                { title: "Backlighting", desc: "逆光", effect: "强调人物发丝边缘的光晕，产生梦幻或情绪感。" },
                { title: "Neon lighting", desc: "霓虹灯光", effect: "适合赛博朋克、夜间街头，提供强烈的冷暖色彩对比。" }
              ].map((light, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="font-mono text-sm font-bold text-brand-600 mb-1">{light.title}</div>
                  <div className="font-medium text-gray-900 mb-2">{light.desc}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{light.effect}</div>
                </div>
              ))}
            </div>

            <hr className="my-16 border-gray-100" />

            {/* 构图 */}
            <h2 id="composition" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <LayoutTemplate className="w-6 h-6 text-brand-500" /> 构图怎么写？
            </h2>
            <p>
              构图词汇决定了人物在画面中的大小、远近以及拍摄角度。
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { title: "Close-up", type: "特写", desc: "主拍脸部" },
                { title: "Headshot", type: "大头照", desc: "头部至肩膀" },
                { title: "Half-body", type: "半身照", desc: "腰部以上" },
                { title: "Full-body", type: "全身照", desc: "包含脚部" },
                { title: "Eye-level", type: "平视", desc: "与眼睛齐平" },
                { title: "Low-angle", type: "仰拍", desc: "从下往上拍" },
                { title: "High-angle", type: "俯拍", desc: "从上往下拍" },
                { title: "Off-center", type: "偏离中心", desc: "三分法留白" }
              ].map((comp, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-4 rounded-xl text-center shadow-sm">
                  <div className="font-mono text-sm font-bold text-gray-900 mb-1">{comp.title}</div>
                  <div className="text-sm text-gray-500">{comp.type}</div>
                  <div className="text-xs text-gray-400 mt-1">{comp.desc}</div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-12">
              <h4 className="font-bold text-gray-900 mt-0 mb-6 text-center">构图范围示意（CSS 模拟）</h4>
              <div className="flex flex-wrap justify-center gap-8">
                {/* Close-up */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-32 bg-white border-2 border-gray-300 rounded-lg relative overflow-hidden mb-2 shadow-sm">
                    <div className="w-16 h-16 bg-brand-200 rounded-full absolute -bottom-4 left-1/2 -translate-x-1/2"></div>
                  </div>
                  <span className="text-xs font-medium text-gray-600">Close-up</span>
                </div>
                {/* Half-body */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-32 bg-white border-2 border-gray-300 rounded-lg relative overflow-hidden mb-2 shadow-sm">
                    <div className="w-10 h-10 bg-brand-200 rounded-full absolute top-6 left-1/2 -translate-x-1/2"></div>
                    <div className="w-20 h-20 bg-brand-100 rounded-t-3xl absolute -bottom-6 left-1/2 -translate-x-1/2"></div>
                  </div>
                  <span className="text-xs font-medium text-gray-600">Half-body</span>
                </div>
                {/* Full-body */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-32 bg-white border-2 border-gray-300 rounded-lg relative overflow-hidden mb-2 shadow-sm">
                    <div className="w-6 h-6 bg-brand-200 rounded-full absolute top-4 left-1/2 -translate-x-1/2"></div>
                    <div className="w-12 h-16 bg-brand-100 rounded-t-xl absolute top-11 left-1/2 -translate-x-1/2"></div>
                  </div>
                  <span className="text-xs font-medium text-gray-600">Full-body</span>
                </div>
                {/* Off-center */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-24 bg-white border-2 border-gray-300 rounded-lg relative overflow-hidden mb-2 shadow-sm">
                    <div className="absolute left-1/3 top-0 bottom-0 border-l border-dashed border-gray-300"></div>
                    <div className="absolute right-1/3 top-0 bottom-0 border-l border-dashed border-gray-300"></div>
                    <div className="w-8 h-8 bg-brand-200 rounded-full absolute top-4 right-1/4"></div>
                    <div className="w-16 h-16 bg-brand-100 rounded-t-xl absolute top-12 right-6"></div>
                  </div>
                  <span className="text-xs font-medium text-gray-600">Off-center</span>
                </div>
              </div>
              <p className="text-xs text-center text-gray-400 mt-6 mb-0">注：这仅代表画面裁剪范围，具体生成结果受总体 Prompt 影响。</p>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* 镜头与景深 */}
            <h2 id="lens" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <Camera className="w-6 h-6 text-brand-500" /> 镜头词与景深怎么理解？
            </h2>
            <p>
              在 Prompt 中加入 <code>35mm</code>, <code>50mm</code>, <code>85mm</code> 等词，属于<strong>摄影视觉语言</strong>。请注意，Midjourney 并没有真正运行真实的物理相机模拟，这些词的作用是“帮助描述希望得到的人像摄影观感”。
            </p>
            <ul className="mb-8">
              <li><strong>35mm：</strong>视野稍宽，更容易表达人物 + 环境的摄影感（街头、室内生活）。</li>
              <li><strong>50mm：</strong>接近人眼视角，较自然的普通人像方向。</li>
              <li><strong>85mm：</strong>常用于描述更典型的人像摄影观感，往往能带来较好的背景分离感。</li>
            </ul>

            <h3 className="text-xl font-bold mt-12 mb-4">景深（背景虚化）</h3>
            <p>如果想突出人物，让背景变得模糊，可以尝试明确说明景深：</p>
            <ul className="mb-12">
              <li><code>shallow depth of field</code> (浅景深 / 虚化背景)</li>
              <li><code>background bokeh</code> (背景光斑虚化)</li>
              <li><code>deep depth of field / sharp background</code> (深景深 / 背景清晰可见)</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl mb-12 text-blue-900">
              <strong className="block mb-2">背景与色彩提示</strong>
              <ul className="m-0 text-sm space-y-2">
                <li><strong>背景具体化：</strong>不要只写 <code>beautiful background</code>，写 <code>quiet cafe interior</code>、<code>rainy city street</code> 或 <code>minimalist studio</code> 更有用。</li>
                <li><strong>色彩情绪：</strong>可以适当加入 <code>warm tones</code> (暖色调)、<code>cool tones</code> (冷色调)、<code>muted colors</code> (低饱和色彩) 或 <code>monochrome</code> (黑白) 来引导画面情绪。</li>
              </ul>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* 参数 */}
            <h2 id="parameters" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <Settings2 className="w-6 h-6 text-brand-500" /> 真正需要先认识哪些参数？
            </h2>
            <p>
              参数（Parameters）用于控制图像生成的技术设定。请记住：<strong>参数必须放在 Prompt 的最后</strong>，并且 <code>--</code> 前必须有空格。
            </p>

            <div className="overflow-x-auto mb-12">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-gray-200 text-gray-900">
                    <th className="py-4 px-4 font-bold">参数</th>
                    <th className="py-4 px-4 font-bold">说明</th>
                    <th className="py-4 px-4 font-bold">示例用法</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-mono font-semibold">--ar</td>
                    <td className="py-4 px-4">控制宽高比例。人像常使用 2:3（竖屏摄影）、9:16（手机全屏）或 1:1（方形）。比例不等于最终像素大小。</td>
                    <td className="py-4 px-4 bg-gray-50 font-mono text-xs">--ar 2:3</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-mono font-semibold">--stylize (或 --s)</td>
                    <td className="py-4 px-4">控制艺术化程度（范围 0-1000，默认 100）。低值更贴近 Prompt 写实，高值给 Midjourney 更多艺术发挥空间，但不代表“越高越好看”。</td>
                    <td className="py-4 px-4 bg-gray-50 font-mono text-xs">--s 50</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-mono font-semibold">--chaos (或 --c)</td>
                    <td className="py-4 px-4">控制四张初始图片的差异度（范围 0-100，默认 0）。数值越高，网格中同一组结果之间的构图/风格变化越大，与“画质”无关。</td>
                    <td className="py-4 px-4 bg-gray-50 font-mono text-xs">--c 10</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-mono font-semibold">--no</td>
                    <td className="py-4 px-4">用于负面提示，告诉 AI 你希望减少出现的元素。不要在普通文字里写 no XXX。</td>
                    <td className="py-4 px-4 bg-gray-50 font-mono text-xs">--no sunglasses</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold mt-12 mb-4">如果想参考一张人物照片怎么办？</h3>
            <p>
              除了文字 Prompt，Midjourney 目前也支持图片参考工作流：
            </p>
            <ul className="mb-6">
              <li><strong>Image Prompts：</strong>垫图，让 AI 参考图片的整体构图和色调。</li>
              <li><strong>Style References (--sref)：</strong>提取参考图的美术风格。</li>
              <li><strong>Edit Model (V8.x 工作流)：</strong>用于局部重绘和更精细的人物一致性编辑（注：已取代早期 V6 的 <code>--cref</code> 等参数）。</li>
            </ul>
            <p className="text-sm text-gray-500 mb-12">
              本篇教程主要聚焦于 Text Prompt 书写。关于参考图与高级编辑工作流的完整指南，可查阅：
              <Link href="/guides/midjourney" className="text-brand-600 hover:underline ml-1">Midjourney 基础指南</Link>。
              <br/><em>注意：上传自己、家人或客户真实人物照片时，请考虑隐私授权与平台政策，不要上传不应公开的敏感照片。</em>
            </p>

            <hr className="my-16 border-gray-100" />

            {/* Prompt模板 */}
            <h2 id="templates" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <ZoomIn className="w-6 h-6 text-brand-500" /> 8 个实战 Prompt 模板
            </h2>
            <p className="mb-8">
              学习优化的最好方法是从简单到完整逐步叠加控制词。下面是 8 个针对不同光线与场景设计的原创 Prompt 模板。
            </p>

            <div className="bg-gray-50 p-6 rounded-2xl mb-12 border border-gray-200">
              <h4 className="font-bold text-gray-900 mt-0 mb-4">从简单到完整（进化演示）</h4>
              <ul className="space-y-4 mb-0 list-none pl-0">
                <li className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Level 1</span>
                  <code className="text-sm bg-white p-2 border border-gray-200 rounded">portrait of a man</code>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Level 2</span>
                  <code className="text-sm bg-white p-2 border border-gray-200 rounded">portrait of a man in a dark jacket, standing in a cafe</code>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Level 3</span>
                  <code className="text-sm bg-white p-2 border border-gray-200 rounded">portrait of a man in a dark jacket, standing beside a cafe window, soft morning light, calm expression</code>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-brand-500 uppercase tracking-wider">Level 4</span>
                  <code className="text-sm bg-brand-50 border border-brand-200 text-brand-800 p-3 rounded">portrait of a man in a dark jacket, standing beside a cafe window, soft morning light, calm expression, natural skin texture, 85mm portrait photography, shallow depth of field --ar 2:3</code>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-12 mb-16">
              {[
                {
                  image: "/images/midjourney/midjourney-portrait-window.jpg",
                  title: "1. Soft Window Portrait (自然窗边光)",
                  prompt: "close-up portrait of a young woman standing by a large window, soft diffused daylight, white linen shirt, gentle expression, natural skin texture, bright and airy room background, 50mm lens, shallow depth of field, realistic photography --ar 2:3",
                  breakdown: { 
                    "主体": "young woman, white linen shirt", 
                    "环境": "bright and airy room, by a large window", 
                    "光线": "soft diffused daylight", 
                    "摄影": "50mm lens, close-up, shallow depth of field" 
                  }
                },
                {
                  image: "/images/midjourney/midjourney-portrait-city.jpg",
                  title: "2. City Cinematic Portrait (街头电影感)",
                  prompt: "half-body portrait of a man in a trench coat walking down a rainy city street at dusk, cinematic blue hour lighting with warm street lamp reflections, moody atmosphere, wet pavement background, 35mm lens, sharp subject, realistic editorial style --ar 16:9 --stylize 150",
                  breakdown: { 
                    "主体": "man in a trench coat, half-body", 
                    "环境": "rainy city street at dusk", 
                    "光线": "cinematic blue hour lighting, warm reflections", 
                    "摄影": "35mm lens, sharp subject, editorial style" 
                  }
                },
                {
                  image: "/images/midjourney/midjourney-portrait-professional.jpg",
                  title: "3. Professional Profile (专业工作照)",
                  prompt: "headshot portrait of a confident female executive in a modern office, wearing a dark blazer, warm indoor lighting with a subtle rim light, clean corporate background, professional portrait photography, 85mm, sharp focus, natural skin texture --ar 3:4",
                  breakdown: { 
                    "主体": "confident female executive, dark blazer, headshot", 
                    "环境": "modern office, clean corporate background", 
                    "光线": "warm indoor lighting, subtle rim light", 
                    "摄影": "85mm, professional portrait, sharp focus" 
                  }
                },
                {
                  image: "/images/midjourney/midjourney-portrait-bw.jpg",
                  title: "4. Black and White Portrait (黑白人像)",
                  prompt: "dramatic black and white portrait of an elderly man with deep wrinkles, dark textured background, high contrast studio lighting, intense side light, sharp facial details, monochrome photography, Leica, shallow depth of field --ar 2:3",
                  breakdown: { 
                    "主体": "elderly man with deep wrinkles", 
                    "环境": "dark textured background", 
                    "光线": "high contrast studio lighting, intense side light", 
                    "风格": "black and white, monochrome, high contrast" 
                  }
                },
                {
                  image: "/images/midjourney/midjourney-portrait-golden-hour.jpg",
                  title: "5. Golden Hour Outdoor (黄金时刻户外)",
                  prompt: "full-body portrait of a smiling woman in a summer dress standing in a tall grass field, beautiful golden hour backlighting, warm glowing sun behind her, lens flare, dreamy and joyful mood, 85mm portrait, shallow depth of field --ar 2:3",
                  breakdown: { 
                    "主体": "woman in summer dress, smiling, full-body", 
                    "环境": "tall grass field", 
                    "光线": "golden hour backlighting, glowing sun, lens flare", 
                    "情绪": "dreamy and joyful mood" 
                  }
                },
                {
                  image: "/images/midjourney/midjourney-portrait-cafe.jpg",
                  title: "6. Lifestyle Cafe (咖啡馆生活感)",
                  prompt: "candid lifestyle portrait of a young man drinking coffee at a rustic cafe table, reading a book, natural daylight coming from the side, cozy warm tones, wooden interior background, 35mm photography, relaxed mood, realistic lighting --ar 16:9",
                  breakdown: { 
                    "主体": "young man drinking coffee, reading a book", 
                    "环境": "rustic cafe table, wooden interior", 
                    "光线": "natural daylight from the side", 
                    "风格": "candid lifestyle, cozy warm tones, relaxed mood" 
                  }
                },
                {
                  image: "/images/midjourney/midjourney-portrait-studio.jpg",
                  title: "7. Minimalist Studio (极简影棚照)",
                  prompt: "fashion portrait of an elegant woman looking directly at the camera, wearing a minimalist black silk dress, pure beige studio background, softbox lighting, flat soft shadows, editorial fashion photography, flawless but natural skin, 85mm --ar 4:5",
                  breakdown: { 
                    "主体": "elegant woman, minimalist black silk dress", 
                    "环境": "pure beige studio background", 
                    "光线": "softbox lighting, flat soft shadows", 
                    "风格": "editorial fashion photography, minimalist" 
                  }
                },
                {
                  image: "/images/midjourney/midjourney-portrait-neon.jpg",
                  title: "8. Neon Night Portrait (夜景霓虹)",
                  prompt: "close-up portrait of a young person in a cyberpunk style jacket, standing in a dark alley illuminated by bright pink and cyan neon signs, dramatic color contrast, cinematic night photography, glowing reflections on face, shallow depth of field --ar 2:3 --stylize 200",
                  breakdown: { 
                    "主体": "young person in cyberpunk jacket, close-up", 
                    "环境": "dark alley, illuminated by neon signs", 
                    "光线": "pink and cyan neon, glowing reflections", 
                    "风格": "cinematic night photography, dramatic contrast" 
                  }
                } ].map((tpl, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                  <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                    <h4 className="font-bold text-gray-900 m-0">{tpl.title}</h4>
                    <CopyButton text={tpl.prompt} />
                  </div>
                  <div className="p-6">
                    <p className="font-mono text-sm text-gray-800 bg-gray-50 p-4 rounded-xl mb-6">
                      {tpl.prompt}
                    </p>
                    {tpl.image && <TutorialImage src={tpl.image} alt={tpl.title} />}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600 bg-gray-50/50 p-4 rounded-xl mt-6">
                      {Object.entries(tpl.breakdown).map(([k, v]) => (
                        <div key={k}>
                          <span className="font-semibold text-gray-900">{k}：</span>{v}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <hr className="my-16 border-gray-100" />

            {/* 失败排查 */}
            <h2 id="troubleshooting" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <CheckSquare className="w-6 h-6 text-brand-500" /> 为什么生成出来还是不像你想的？
            </h2>
            <p className="mb-8">
              遇到了问题？对照下面的 Troubleshooting 卡片，找出可能的原因。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { issue: "人物太像 AI 塑料脸", fix: "尝试减少过度风格词（masterpiece, perfect 等），增加 natural skin texture, realistic photography，并降低过强的 Stylize 值。" },
                { issue: "背景太乱，抢了人物风头", fix: "更明确主体，简化环境描述。加入 shallow depth of field 或 sharp subject 等词，减少无关的背景细节词汇。" },
                { issue: "人物离镜头太远，脸看不清", fix: "没有交代构图导致。请加入 close-up portrait, headshot 或 half-body portrait 来明确规定拍摄距离。" },
                { issue: "每次 Roll 出来的结果差异太大", fix: "Prompt 本身存在随机性。可以通过降低 --chaos，并减少互相冲突的描述，逐步修改而不是一次全改。" },
                { issue: "Prompt 很长但结果不听话", fix: "长度不是质量。很多词可能相互覆盖。删掉重复、冲突和无意义的形容词，保留核心结构。" },
                { issue: "人物风格太艺术，不够真实", fix: "可能是 --stylize 值过高（默认是 100）。尝试添加 --s 50，并加入 natural lighting, editorial portrait 等写实词汇。" }
              ].map((card, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:border-gray-300 transition-colors">
                  <div className="font-bold text-red-600 mb-2 flex items-center gap-2 text-sm">
                    <X className="w-4 h-4" /> 现象：{card.issue}
                  </div>
                  <div className="text-sm text-gray-700 flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <span><strong>尝试方向：</strong>{card.fix}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-rose-50 border border-rose-200 p-6 rounded-2xl mb-12">
              <strong className="block mb-2 text-rose-900">典型冲突案例：光线打架</strong>
              <code className="text-sm bg-white px-2 py-1 rounded text-rose-800 border border-rose-200 mb-3 block">
                soft natural daylight, dramatic neon lighting, bright sunny afternoon, dark moody night
              </code>
              <p className="text-sm text-rose-800 m-0">
                这段 Prompt 中，既有自然日光、又有夜间霓虹、还有晴朗下午和阴暗夜晚。四种光线和时间互相打架，AI 只能随机抛弃掉几项。<strong>不要以为词越多越强，光线和时间必须统一。</strong>
              </p>
            </div>

            <div className="bg-white border-2 border-brand-100 rounded-2xl p-6 md:p-8 shadow-sm mb-12">
              <h3 className="font-bold text-gray-900 mt-0 mb-6">✅ 发送前 Checklist (删词练习)</h3>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex gap-2 items-start"><input type="checkbox" className="mt-1" /> 主体清楚吗？（是谁、穿着）</li>
                <li className="flex gap-2 items-start"><input type="checkbox" className="mt-1" /> 环境具体吗？（不要只写 beautiful background）</li>
                <li className="flex gap-2 items-start"><input type="checkbox" className="mt-1" /> 光线只有一个主要方向吗？（避免白天黑夜冲突）</li>
                <li className="flex gap-2 items-start"><input type="checkbox" className="mt-1" /> 构图写了吗？（特写还是全身）</li>
                <li className="flex gap-2 items-start"><input type="checkbox" className="mt-1" /> 是否堆了太多风格？（删掉 masterpiece 等凑数词）</li>
                <li className="flex gap-2 items-start"><input type="checkbox" className="mt-1" /> 参数是否放在最后？（如 --ar 2:3）</li>
              </ul>
              
              <div className="bg-gray-50 p-4 rounded-xl text-sm border border-gray-200">
                <strong className="block text-gray-900 mb-2">💡 删词练习</strong>
                <div className="line-through text-gray-400 mb-2">
                  a beautiful gorgeous girl, amazing masterpiece, best quality, 8k, ultra HD, unreal engine 5, octane render, soft light, natural light, dark room, beautiful background, close up
                </div>
                <div className="text-brand-700 font-medium">
                  → 精简为：close-up portrait of a woman in a dark room, soft natural light --ar 2:3
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl mb-12">
              <h4 className="font-bold text-gray-900 mt-0 mb-3">语言说明：中文还是英文？</h4>
              <p className="text-sm text-gray-700 m-0">
                Midjourney 可以理解不同语言。但许多摄影、构图与艺术专业术语，在英文资料库中训练得更充分。建议：你可以先用中文表达整体概念，再逐步学习和替换常见的英文摄影术语（如 <code>shallow depth of field</code>），以获得更精准的控制力。
              </p>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* FAQ */}
            <h2 id="faq" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <Info className="w-6 h-6 text-brand-500" /> 常见问题 FAQ
            </h2>
            <div className="space-y-6 mb-16">
              {faqJsonLd.mainEntity.map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mt-0 mb-2">{faq.name}</h3>
                  <p className="text-gray-600 text-sm m-0 leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>

            {/* References */}
            <div className="bg-gray-50 px-6 py-4 rounded-xl text-sm text-gray-500">
              <strong className="block text-gray-700 mb-2">资料来源</strong>
              <ul className="m-0 pl-4 space-y-1">
                <li><a href="https://docs.midjourney.com/docs/prompts" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 underline">Midjourney Docs - Prompt Basics</a></li>
                <li><a href="https://docs.midjourney.com/docs/parameter-list" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 underline">Midjourney Docs - Parameter List</a></li>
                <li><a href="https://docs.midjourney.com/docs/aspect-ratios" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 underline">Midjourney Docs - Aspect Ratios (--ar)</a></li>
                <li><a href="https://docs.midjourney.com/docs/stylize" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 underline">Midjourney Docs - Stylize (--s)</a></li>
                <li><a href="https://docs.midjourney.com/docs/chaos" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 underline">Midjourney Docs - Chaos (--c)</a></li>
              </ul>
            </div>
          </div>
        </article>
      </main>

      <FloatingBackButton fallbackHref="/guides" />
      <Footer />
    </div>
  );
}
