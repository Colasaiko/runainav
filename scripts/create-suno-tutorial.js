const fs = require('fs');
const path = 'src/app/guides/suno-chinese-song-tutorial/page.tsx';

const content = `import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleStickyBar from '@/components/navigation/ArticleStickyBar';
import FloatingBackButton from '@/components/navigation/FloatingBackButton';
import CopyButton from '@/components/ui/CopyButton';
import TutorialImage from '@/components/ui/TutorialImage';
import { constructMetadata } from "@/lib/seo";
import { Info, Check, X, CheckSquare, Sparkles, FileText, Music, Settings, Sliders, PlayCircle, Scale, MessageSquare, Mic2 } from "lucide-react";
import Link from 'next/link';
import Script from 'next/script';

export const metadata = constructMetadata({
  title: 'Suno中文歌曲生成教程：歌词与风格怎么写 | RunAI',
  description: '从中文歌词、歌曲结构、音乐风格到人声和排除项，本文用可复制示例教你使用Suno生成中文歌曲，并介绍Custom模式、修改方法与商用权限注意事项。',
  canonical: '/guides/suno-chinese-song-tutorial',
  type: 'article',
  publishedTime: '2026-09-05',
  modifiedTime: '2026-09-05',
});

const SECTIONS = [
  { id: 'direction', navLabel: '歌曲方向' },
  { id: 'structure', navLabel: '歌词结构' },
  { id: 'style', navLabel: '音乐风格' },
  { id: 'custom-mode', navLabel: 'Custom Mode' },
  { id: 'revise', navLabel: '修改歌曲' },
  { id: 'templates', navLabel: '歌曲模板' },
  { id: 'troubleshooting', navLabel: '常见问题' },
  { id: 'copyright', navLabel: '商业使用' },
  { id: 'faq', navLabel: 'FAQ' },
];

export default function SunoChineseSongTutorial() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Suno 怎么生成一首中文歌？",
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
        "name": "Suno 可以生成中文歌曲吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "完全可以。Suno 能够很好地理解中文歌词，并生成带有自然中文发音的歌曲。"
        }
      },
      {
        "@type": "Question",
        "name": "中文歌词需要翻成英文吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "不需要。直接在 Lyrics 框输入中文即可，强行翻译成英文反而会变成一首英文歌。"
        }
      },
      {
        "@type": "Question",
        "name": "Simple Mode 和 Custom Mode 有什么区别？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simple Mode 只需要你输入一句话描述，Suno 会自动帮你写词并生成；Custom Mode 允许你自己填入原创歌词，并单独控制音乐风格 (Style of Music) 和排除项 (Exclude)。"
        }
      },
      {
        "@type": "Question",
        "name": "自己的歌词可以直接放进去吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "可以。在 Custom Mode 中，直接将你写好的歌词粘贴进 Lyrics 框即可。"
        }
      },
      {
        "@type": "Question",
        "name": "为什么副歌不明显？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "可能是歌词结构没有打标签。在副歌前加上 [Chorus]，主歌前加上 [Verse]，可以帮助 AI 识别结构情绪变化。"
        }
      },
      {
        "@type": "Question",
        "name": "怎么修改已经生成的歌词？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "使用 Reuse Prompt 重新载入当前的歌词和风格，修改文本框里的歌词后再次生成。"
        }
      },
      {
        "@type": "Question",
        "name": "Style of Music 应该写中文还是英文？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "中文或英文都可以。很多常见的音乐术语英文识别度更高，但中文描述（如“中文流行”、“轻柔男声”）也完全可以使用。"
        }
      },
      {
        "@type": "Question",
        "name": "可以排除不想要的乐器吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "可以。在 Custom Mode 的 Advanced Options 里有一个 Exclude 框，可以在里面填入你不想要的元素，如“重金属吉他”。"
        }
      },
      {
        "@type": "Question",
        "name": "免费版生成的歌可以商用吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "不可以。Basic 免费方案生成的歌曲仅限个人、非商业用途。如需商业使用，必须在生成时拥有 Pro 或 Premier 订阅。"
        }
      },
      {
        "@type": "Question",
        "name": "付费后就一定拥有版权吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "付费订阅可获得商业使用权（Commercial Rights），但这不等于你在法律上自动拥有版权（Copyright）。AI 生成内容的版权资格取决于所在地区的法律及人类创作介入程度。"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Script id="json-ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="json-ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      
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
            <span className="text-gray-900">Suno 中文歌曲生成教程</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Suno 怎么生成一首中文歌？
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              从歌词、主歌副歌到音乐风格，用一个完整中文案例带你完成第一首 AI 歌曲。
            </p>
            <div className="flex items-start gap-2 bg-blue-50 text-blue-700 px-4 py-3 rounded-xl text-sm border border-blue-100/50">
              <Info className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold block mb-0.5">资料核对：2026-09-05</span>
                Suno 的模型、功能、方案和使用权限更新较快，本文以当前官方帮助资料为基础整理。（Suno 当前模型和可用功能会根据账号与产品更新变化。）
              </div>
            </div>
          </header>

          <div className="prose prose-gray max-w-none">
            
            {/* 贯穿全文的案例展示 */}
            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 mb-12 flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-brand-900 mt-0 mb-2">本次原创教学案例：《下班后的城市》</h3>
                <p className="text-sm text-brand-800 m-0 mb-4">
                  本文不泛泛而谈。我们将从零开始制作一首<strong>现代中文流行歌曲</strong>。主题设定为：一天工作结束后，一个人在夜晚城市散步，慢慢放松下来。
                </p>
                <div className="text-sm text-brand-700 bg-white p-3 rounded-xl border border-brand-100 inline-block">
                  <strong>⚠️ 提示：</strong>不要在 Prompt 中输入“像周杰伦”、“陈奕迅风格”或引用现有真实歌词，我们要使用通用的音乐描述来构建原创作品。
                </div>
              </div>
              <div className="w-full md:w-1/3 flex justify-center shrink-0">
                <Music className="w-24 h-24 text-brand-300" />
              </div>
            </div>

            {/* 30 秒速读 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm mb-16">
              <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 mt-0 mb-6">
                <Sparkles className="w-5 h-5 text-brand-500" /> 30 秒速读
              </h3>
              <ul className="space-y-4 mb-0 list-none pl-0">
                <li className="flex gap-3 text-gray-700">
                  <span className="shrink-0 text-brand-500 mt-0.5">●</span>
                  <span><strong>哪种模式：</strong>只有一句想法可以用 Simple Mode；想自己控制歌词和风格，使用 <strong>Custom Mode</strong> 更合适。</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="shrink-0 text-brand-500 mt-0.5">●</span>
                  <span><strong>歌词准备：</strong>中文歌词不需要先翻译成英文。先写清楚主歌/副歌结构，再生成通常更容易控制。</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="shrink-0 text-brand-500 mt-0.5">●</span>
                  <span><strong>音乐风格：</strong>不要只写“好听”，应包含类型、速度、情绪和乐器（如：中文流行，中速，钢琴）。</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="shrink-0 text-brand-500 mt-0.5">●</span>
                  <span><strong>修改原则：</strong>一次只调整歌词或风格其中一部分，不要全改，更容易比较结果。自己写的原创歌词仍属于自己。</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="shrink-0 text-brand-500 mt-0.5">●</span>
                  <span><strong>商业使用：</strong>如果准备商用，必须先确认歌曲是在什么方案下生成，并查看当前官方权利说明。</span>
                </li>
              </ul>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* Simple vs Custom */}
            <h2 id="direction" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <CheckSquare className="w-6 h-6 text-brand-500" /> 第一步：先确定歌曲方向与模式
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:border-brand-300 transition-colors">
                <h3 className="font-bold text-lg text-gray-900 mt-0 mb-2 flex items-center gap-2">
                  <PlayCircle className="w-5 h-5 text-blue-500" /> Simple Mode
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>适合：只有一个想法。</strong><br/>希望 Suno 帮忙写歌词并直接生成歌曲。
                </p>
                <div className="bg-gray-50 p-3 rounded border border-gray-100 text-xs text-gray-500 font-mono">
                  示例：一首关于下班后独自在城市散步、慢慢放松心情的中文流行歌曲，温暖轻松，适合夜晚听。
                </div>
              </div>
              <div className="bg-brand-50 border border-brand-200 p-6 rounded-2xl shadow-sm hover:border-brand-400 transition-colors">
                <h3 className="font-bold text-lg text-brand-900 mt-0 mb-2 flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-brand-500" /> Custom Mode
                </h3>
                <p className="text-sm text-brand-800 mb-4">
                  <strong>适合：想自己完全控制。</strong><br/>自己写歌词、控制 Style of Music、使用 Advanced Options 排除乐器。
                </p>
                <div className="bg-white p-3 rounded border border-brand-100 text-xs text-brand-600 font-bold">
                  本教程将主要使用 Custom Mode 演示。
                </div>
              </div>
            </div>

            <p>在开始写词前，请先在心里回答以下几个问题（或发给 AI 助手帮你梳理）：</p>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm mb-8">
              <ul className="grid sm:grid-cols-2 gap-3 m-0 text-sm text-gray-700 list-none pl-0">
                <li className="flex gap-2 items-start"><input type="checkbox" className="mt-1" checked readOnly /> 想表达什么主题？</li>
                <li className="flex gap-2 items-start"><input type="checkbox" className="mt-1" checked readOnly /> 情绪是开心、伤感还是放松？</li>
                <li className="flex gap-2 items-start"><input type="checkbox" className="mt-1" checked readOnly /> 男声、女声还是不指定？</li>
                <li className="flex gap-2 items-start"><input type="checkbox" className="mt-1" checked readOnly /> 慢歌还是中速？</li>
                <li className="flex gap-2 items-start"><input type="checkbox" className="mt-1" checked readOnly /> 流行、摇滚、民谣还是电子？</li>
                <li className="flex gap-2 items-start"><input type="checkbox" className="mt-1" checked readOnly /> 想突出哪些乐器？</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-12">
              <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-gray-50">
                <h4 className="font-bold text-gray-900 m-0">Prompt 1：找 AI 助手构思方向</h4>
                <CopyButton text="我想做一首中文歌曲。 主题： 下班以后一个人在城市里散步，从疲惫慢慢变得放松。 情绪： 前半段有一点疲惫，副歌开始变得轻松和温暖。 音乐方向： 现代中文流行，中速节奏，钢琴、柔和鼓点和轻微电子氛围。 请先帮我整理歌曲结构，不要直接写完整歌词。" />
              </div>
              <div className="p-6 text-sm text-gray-800 font-mono whitespace-pre-wrap">我想做一首中文歌曲。
主题： 下班以后一个人在城市里散步，从疲惫慢慢变得放松。
情绪： 前半段有一点疲惫，副歌开始变得轻松和温暖。
音乐方向： 现代中文流行，中速节奏，钢琴、柔和鼓点和轻微电子氛围。

请先帮我整理歌曲结构，不要直接写完整歌词。</div>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* 歌曲结构 */}
            <h2 id="structure" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <FileText className="w-6 h-6 text-brand-500" /> 第二步：一首歌通常可以怎么拆？
            </h2>
            <p>
              在填写歌词前，需要给段落打上标签。根据 Suno 官方音乐 Glossary（术语表），我们需要认识这几个核心标签：
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm">
                <div className="font-bold text-brand-600 mb-1">[Verse]</div>
                <div className="text-sm font-bold mb-1 text-gray-900">主歌</div>
                <p className="text-xs text-gray-500 m-0">负责讲故事，铺垫情绪。</p>
              </div>
              <div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm">
                <div className="font-bold text-brand-600 mb-1">[Chorus]</div>
                <div className="text-sm font-bold mb-1 text-gray-900">副歌</div>
                <p className="text-xs text-gray-500 m-0">全曲高潮，表达核心情绪，容易记住。</p>
              </div>
              <div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm">
                <div className="font-bold text-brand-600 mb-1">[Pre-Chorus]</div>
                <div className="text-sm font-bold mb-1 text-gray-900">预副歌</div>
                <p className="text-xs text-gray-500 m-0">主副歌之间的过渡桥梁。</p>
              </div>
              <div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm">
                <div className="font-bold text-brand-600 mb-1">[Bridge]</div>
                <div className="text-sm font-bold mb-1 text-gray-900">桥段</div>
                <p className="text-xs text-gray-500 m-0">打破重复，提供新的旋律或反思。</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-6">还可以使用 [Intro] 前奏、[Outro] 尾奏等。但这并不是唯一正确结构，你可以自由发挥。</p>

            {/* 结构图与提示 */}
            <div className="bg-gray-900 text-white rounded-2xl p-6 mb-8 overflow-hidden">
              <h4 className="mt-0 mb-4 text-gray-300 text-sm">常见中文流行歌结构示例（逻辑打样）</h4>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="bg-gray-800 px-3 py-1 rounded">[Intro]</span> ➔ 
                <span className="bg-brand-900 text-brand-100 px-3 py-1 rounded border border-brand-700">[Verse 1] 写下班、夜风</span> ➔ 
                <span className="bg-gray-800 px-3 py-1 rounded">[Pre-Chorus] 情绪转变</span> ➔ 
                <span className="bg-purple-900 text-purple-100 px-3 py-1 rounded border border-purple-700">[Chorus] 终于可以把今天放下</span> ➔ 
                <span className="bg-brand-900 text-brand-100 px-3 py-1 rounded border border-brand-700">[Verse 2] 城市街灯</span> ➔ 
                <span className="bg-purple-900 text-purple-100 px-3 py-1 rounded border border-purple-700">[Chorus]</span> ➔ 
                <span className="bg-gray-800 px-3 py-1 rounded">[Bridge] 反思</span> ➔ 
                <span className="bg-purple-900 text-purple-100 px-3 py-1 rounded border border-purple-700">[Final Chorus]</span> ➔ 
                <span className="bg-gray-800 px-3 py-1 rounded">[Outro]</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-8">
              <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-gray-50">
                <h4 className="font-bold text-gray-900 m-0">Prompt 2：让 AI 帮忙写歌词草稿</h4>
                <CopyButton text="根据刚才的歌曲结构，帮我写一版中文歌词草稿。 要求： - 不要使用复杂生僻词 - 每句不要太长 - 副歌要有容易记住的核心句 - 主歌负责讲故事 - 副歌负责表达主要情绪 - 不要模仿任何真实歌手或现有歌曲 - 不要引用现有歌词" />
              </div>
              <div className="p-4 text-sm text-gray-800 font-mono">根据刚才的歌曲结构，帮我写一版中文歌词草稿。要求：...（要求不生僻、每句不长、不引用现有歌词等）</div>
            </div>

            {/* 原创示例 */}
            <h3 className="font-bold text-lg mb-4 mt-12">原创歌词示例：《下班后的城市》</h3>
            <p className="text-sm text-gray-600 mb-4">注意：在 Custom Mode 中，不需要将中文翻译成英文，直接贴入带标签的中文即可。</p>
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl font-mono text-sm text-blue-900 mb-12 shadow-inner">
              <span className="text-blue-500 font-bold">[Verse 1]</span><br/>
              电梯门终于缓缓关上<br/>
              街灯把影子拉得很长<br/>
              耳机里没有谁的消息<br/>
              只剩晚风陪我晃一晃<br/><br/>
              <span className="text-blue-500 font-bold">[Chorus]</span><br/>
              把今天留在身后吧<br/>
              让夜色慢慢替我回答<br/>
              不用急着去哪里<br/>
              走一段路就回家
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl mb-12 shadow-sm text-yellow-900">
              <h4 className="font-bold mb-3 flex items-center gap-2 mt-0">
                <MessageSquare className="w-5 h-5" /> 常见问题：歌词太像作文怎么办？
              </h4>
              <p className="text-sm m-0 mb-4">AI 常常会写出每句十几字、没有重复句、信息量过大的“散文”，导致 Suno 唱出来像是在念经。</p>
              <div className="bg-white p-3 rounded-lg border border-yellow-200">
                <h5 className="font-bold text-sm mt-0 mb-2">Prompt 3：压缩歌词</h5>
                <CopyButton text="请优化下面的中文歌词。 目标： - 保留原来的故事和情绪 - 每句更短 - 减少解释性文字 - 副歌保留一个容易记住的核心句 - 不要加入新的故事 - 不要模仿任何现有歌曲 先告诉我准备删掉哪些重复内容，再给修改版。" />
              </div>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* 音乐风格 */}
            <h2 id="style" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <Music className="w-6 h-6 text-brand-500" /> 第三步：Style of Music 应该写什么？
            </h2>
            <p>不要在风格框里只写“好听”、“高级”或“有感觉”。最好建立一个多维度的描述公式。</p>

            <div className="bg-white border-2 border-brand-100 p-6 rounded-2xl shadow-sm text-center mb-8">
              <strong className="text-brand-600 block mb-3 text-lg">Style Formula</strong>
              <div className="flex flex-wrap justify-center gap-2 font-bold text-gray-800">
                <span className="bg-gray-100 px-3 py-2 rounded">类型</span> + 
                <span className="bg-gray-100 px-3 py-2 rounded">速度</span> + 
                <span className="bg-gray-100 px-3 py-2 rounded">情绪</span> + 
                <span className="bg-gray-100 px-3 py-2 rounded">乐器</span> + 
                <span className="bg-gray-100 px-3 py-2 rounded">人声</span> + 
                <span className="bg-gray-100 px-3 py-2 rounded">制作方向</span>
              </div>
            </div>

            <p className="mb-6">例如本案例的中文 Style 可以写：<br/><code className="bg-gray-100 px-2 py-1 rounded text-brand-700">现代中文流行，中速节奏，温暖放松的夜晚氛围，钢琴、柔和鼓点和轻微电子元素，自然男声，干净现代的制作</code></p>

            <h4 className="font-bold mt-8 mb-4">常用中英文音乐术语表</h4>
            <p className="text-sm text-gray-600 mb-4">很多音乐术语常见英文表达可以辅助学习，中文也可以直接描述需求，不需要强迫自己全用英文。</p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm text-left border-collapse">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="py-3 px-4 font-bold text-gray-700">类别</th>
                    <th className="py-3 px-4 font-bold text-gray-700">中文描述</th>
                    <th className="py-3 px-4 font-bold text-gray-700">常见英文 (辅助)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="py-2 px-4 text-gray-500">类型</td>
                    <td className="py-2 px-4 font-medium">中文流行 / 民谣 / 电子流行 / R&B</td>
                    <td className="py-2 px-4 font-mono text-gray-600">Mandopop / folk / synth-pop / R&B</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="py-2 px-4 text-gray-500">速度</td>
                    <td className="py-2 px-4 font-medium">中速 / 慢节奏</td>
                    <td className="py-2 px-4 font-mono text-gray-600">mid-tempo / slow tempo</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="py-2 px-4 text-gray-500">乐器</td>
                    <td className="py-2 px-4 font-medium">钢琴 / 原声吉他 / 柔和鼓点</td>
                    <td className="py-2 px-4 font-mono text-gray-600">piano / acoustic guitar / soft drums</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="py-2 px-4 text-gray-500">情绪</td>
                    <td className="py-2 px-4 font-medium">温暖 / 梦幻 / 情绪化</td>
                    <td className="py-2 px-4 font-mono text-gray-600">warm / dreamy / emotional</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-12">
              <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-gray-50">
                <h4 className="font-bold text-gray-900 m-0">Prompt 4：让 AI 生成 Style</h4>
                <CopyButton text="根据这首歌的主题，帮我整理一段适合放进 Suno “Style of Music”的描述。 主题： 下班后的城市散步。 要求： - 中文流行 - 中速 - 温暖但不要过度悲伤 - 钢琴为主 - 加入柔和鼓点 - 少量电子氛围 - 自然男声 - 不要模仿任何真实歌手 只输出风格描述，不要写歌词。" />
              </div>
              <div className="p-4 text-sm text-gray-800 font-mono">根据这首歌的主题，帮我整理一段适合放进 Suno “Style of Music”的描述...</div>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* Custom Mode 实际操作 */}
            <h2 id="custom-mode" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <Settings className="w-6 h-6 text-brand-500" /> 第四步：在 Custom Mode 中组装
            </h2>
            
            <div className="flex flex-wrap items-center gap-3 mb-8 text-sm font-bold">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full border border-gray-200">Lyrics (歌词)</span>
              <span className="text-gray-400">➔</span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full border border-gray-200">Style of Music (风格)</span>
              <span className="text-gray-400">➔</span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full border border-gray-200">Advanced Options</span>
              <span className="text-gray-400">➔</span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full border border-gray-200">Title (标题)</span>
              <span className="text-gray-400">➔</span>
              <span className="bg-brand-500 text-white px-4 py-2 rounded-full shadow-sm">Create (生成)</span>
            </div>
            <p className="text-xs text-gray-500 mb-8">（注：UI 顺序以当天官方资料与实际界面为准。）</p>

            <h3 className="font-bold text-lg mb-4 mt-8">使用 Exclude 排除不想要的元素</h3>
            <p>在 Advanced Options 中，可以使用 <strong>Exclude</strong> 功能（取代传统的 Negative Prompt）。例如本曲希望轻松温暖：</p>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-8">
              <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-gray-50">
                <h4 className="font-bold text-gray-900 m-0">Prompt 5：帮忙整理 Exclude</h4>
                <CopyButton text="这首歌希望保持轻松温暖。 请帮我列出适合放在 Exclude 里的元素。 当前不希望出现： - 重金属感 - 激烈电吉他 - 很重的鼓 - 说唱段落 只给我简短排除词，不要重新修改歌曲风格。" />
              </div>
              <div className="p-4 text-sm text-gray-800 font-mono">简短排除词示例：重金属吉他、激烈鼓点、说唱段落。</div>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl mb-12">
              <h4 className="font-bold text-gray-900 mt-0 mb-3 flex items-center gap-2"><Mic2 className="w-5 h-5"/> 关于人声 (Voices) 与进阶选项</h4>
              <p className="text-sm text-gray-700 mb-4">
                你可以输入“自然男声”、“轻声演唱”，但生成存在一定随机性。绝对不要要求“复制某明星声音”。
              </p>
              <ul className="text-sm text-gray-700 m-0 pl-4 space-y-2">
                <li><strong>Creative Sliders：</strong>（如 Weirdness 或 Style Influence）影响的是生成方向的多样性，不是单纯的“质量”滑块。</li>
                <li><strong>Voices / Personas：</strong>如果你的账号支持该功能，可以进一步保存和使用自己的声音或风格配置，具体请参考官方最新说明。</li>
              </ul>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* 判断与修改 */}
            <h2 id="revise" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <ListChecks className="w-6 h-6 text-brand-500" /> 第五步：听完以后怎么改？
            </h2>
            <p>不要只听“好不好听”。请对着这份清单进行客观判断：</p>

            <div className="bg-white border-2 border-brand-500 p-6 md:p-8 rounded-2xl shadow-lg mb-12">
              <h3 className="font-bold text-xl text-gray-900 mb-6 mt-0">✅ 生成后判断 Checklist</h3>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 font-medium">
                <label className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 text-brand-600 rounded" /> 中文发音是否自然？</label>
                <label className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 text-brand-600 rounded" /> 副歌是否容易辨认？</label>
                <label className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 text-brand-600 rounded" /> 歌词是否有漏唱、错位？</label>
                <label className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 text-brand-600 rounded" /> 曲风是否符合目标情绪？</label>
                <label className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 text-brand-600 rounded" /> 乐器是否太抢人声？</label>
                <label className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 text-brand-600 rounded" /> 主歌与副歌区别够不够？</label>
                <label className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 text-brand-600 rounded" /> 情绪变化是否合理？</label>
                <label className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 text-brand-600 rounded" /> 是否出现不想要的元素？</label>
              </div>
            </div>

            <h3 className="font-bold text-lg mb-4 mt-8">一首歌差一点点，怎么继续改？</h3>
            <div className="bg-rose-50 text-rose-800 p-4 rounded-xl mb-6 font-bold text-sm border border-rose-100">
              ⚠️ 核心原则：一次只改一个变量！不要同时大改歌词和曲风，否则你不知道是哪个修改产生了作用。
            </div>

            <p><strong>方法 1：Reuse Prompt（复用并修改）</strong><br/>
            使用官方的 Reuse Prompt 功能，将刚才的歌词和风格重新填入框中。例如第一轮我们只修改副歌歌词：</p>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-12">
              <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-gray-50">
                <h4 className="font-bold text-gray-900 m-0">Prompt 6：只修改副歌</h4>
                <CopyButton text="这首歌整体方向已经正确。 现在只调整副歌歌词。 要求： - 主歌完全不动 - 副歌缩短 - 保留“把今天留在身后”这个核心意思 - 更容易重复和记忆 - 不增加新的故事内容" />
              </div>
            </div>

            <p><strong>方法 2：Extend（扩展）</strong><br/>
            如果歌曲结尾太突然，或想要再加一段 Outro，可以使用 Extend 功能接续生成。</p>

            <p><strong>方法 3：Remaster 与 Studio</strong><br/>
            如果你非常满意当前的歌词和旋律，但希望对声音音质表现做变化，可以使用 Remaster（如果有该选项）。如果以后需要分轨 (Stem) 和进一步编辑，可以了解 Suno Studio 的进阶功能。</p>

            <hr className="my-16 border-gray-100" />

            {/* 歌曲模板 */}
            <h2 id="templates" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <LayoutTemplate className="w-6 h-6 text-brand-500" /> 附录：6 个原创中文歌曲方向模板
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "城市夜晚中文流行", style: "中文流行，中速，温暖夜晚氛围，钢琴，自然男声", desc: "适合表达下班、散步、放松的主题。结构：Verse - Chorus - Verse - Chorus - Outro。" },
                { title: "轻松民谣 (周末早晨)", style: "轻民谣，原声吉他，轻快节奏，清新女声，早晨阳光氛围", desc: "适合表达周末醒来、喝咖啡、去公园。结构：Intro - Verse - Chorus - Bridge - Chorus。" },
                { title: "温柔钢琴抒情 (离开熟悉城市)", style: "慢速抒情，情感饱满，钢琴主导，弦乐铺垫，情绪化男声", desc: "适合表达离别、回忆、成长。结构：Verse - Pre-Chorus - Chorus - Bridge - Final Chorus。" },
                { title: "轻快电子流行 (旅行出发)", style: "电子流行，轻快节奏，合成器，活力女声，充满希望", desc: "适合表达旅行、开车、探索。结构：Verse - Chorus - Verse - Chorus - 延长电子结尾。" },
                { title: "轻 R&B (深夜聊天)", style: "R&B，慢速 grooves，深沉贝斯，呢喃男声，私密氛围", desc: "适合表达深夜对白、内心思考。结构：Verse - Verse - Chorus - Verse - Outro。" },
                { title: "励志流行 (重新开始)", style: "中文流行，渐强节奏，鼓点清晰，坚定人声，充满力量", desc: "适合表达克服困难、迎接新生活。结构：Verse - Build-up - Chorus - Chorus。" }
              ].map((tpl, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
                  <h4 className="font-bold text-brand-700 mt-0 mb-2">{tpl.title}</h4>
                  <p className="text-xs text-gray-500 mb-2 font-mono">Style: {tpl.style}</p>
                  <p className="text-sm text-gray-700 m-0">{tpl.desc}</p>
                </div>
              ))}
            </div>

            <hr className="my-16 border-gray-100" />

            {/* Troubleshooting */}
            <h2 id="troubleshooting" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <CheckSquare className="w-6 h-6 text-brand-500" /> 常见排版与生成失败
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {[
                { issue: "歌词发音异常 / 咬字奇怪", fix: "缩短句子长度，减少难读词，尽量避免中英夹杂，重新生成新版本。" },
                { issue: "歌词太长像念经", fix: "精简字数。一首 3 分钟的歌不需要 500 字，适当增加空行和重复段落。" },
                { issue: "副歌不突出", fix: "确保打上了 [Chorus] 标签，并在 Style 中明确高潮部分的情绪（如 emotional）。" },
                { issue: "音乐风格冲突混乱", fix: "不要堆砌“温柔钢琴民谣，激烈金属摇滚，梦幻Lo-fi”这种互斥词，保留 1-2 个核心方向。" },
                { issue: "前后情绪不一致", fix: "检查结构标签是否有跳跃，确保 Pre-Chorus 提供了平滑的过渡。" },
                { issue: "乐器太多太吵", fix: "在 Exclude 框中填入不需要的重型乐器，在 Style 中强调“acoustic”或“stripped down”。" },
                { issue: "每次生成差异太大", fix: "AI 具有一定随机性。固定 Lyrics 和 Style，多跑几次找到满意的基础再做 Extend。" }
              ].map((card, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
                  <div className="font-bold text-red-600 mb-2 flex items-center gap-2 text-sm">
                    <X className="w-4 h-4" /> 问题：{card.issue}
                  </div>
                  <div className="text-sm text-gray-700 flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <span><strong>建议：</strong>{card.fix}</span>
                  </div>
                </div>
              ))}
            </div>

            <hr className="my-16 border-gray-100" />

            {/* 商业使用与版权 */}
            <h2 id="copyright" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <Scale className="w-6 h-6 text-brand-500" /> 原创歌词与商业使用权
            </h2>
            <div className="bg-yellow-50 border border-yellow-300 p-6 rounded-2xl mb-12">
              <strong className="text-yellow-900 block mb-2 text-lg">重要法律提示</strong>
              <p className="text-sm text-yellow-800 mb-4">
                根据 Suno 当前（2026-09-05）的官方说明：
              </p>
              <ul className="text-sm text-yellow-800 m-0 pl-4 space-y-2">
                <li><strong>原创歌词：</strong>用户输入的自己原创的歌词，权利始终保留在用户手中。严禁将他人未授权的歌词或现有歌曲拿来生成商用。</li>
                <li><strong>免费方案 (Basic)：</strong>生成的歌曲仅限个人、非商业用途。</li>
                <li><strong>付费方案 (Pro/Premier)：</strong>在有效订阅期间生成的歌曲，获得<strong>商业使用权 (Commercial Rights)</strong>（可用于 YouTube、商业发行等，需符合平台要求）。</li>
                <li><strong className="text-red-600">商业使用权 ≠ 自动获得版权 (Copyright)：</strong>官方明确说明，AI 生成内容的版权资格取决于所在地区的法律以及人类创作参与程度，Suno 无法提供拥有版权的法律保证。</li>
                <li><strong>追溯问题：</strong>在免费方案期间生成的歌曲，日后补交订阅费通常<strong>不能</strong>自动追溯获得商业权利。</li>
              </ul>
              <p className="text-xs text-yellow-700 mt-4 mb-0">（注：下载资格与次数可能随方案随时调整，以上条款最终解释以 Suno 官方当前页面及用户协议为准。）</p>
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
                <li><a href="https://suno.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 underline">Suno 官方网站</a></li>
                <li><a href="https://help.suno.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 underline">Suno Help Center (Custom Mode, Commercial Use, Copyright)</a></li>
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
`;

fs.writeFileSync(path, content);
