import { CheckCircle2 } from "lucide-react";

const useCases = [
  {
    title: "写文章",
    tools: "ChatGPT / Claude",
    desc: "生成博客、长文、润色语气，突破写作瓶颈。"
  },
  {
    title: "做设计",
    tools: "Midjourney / Canva AI",
    desc: "无需专业绘画技巧，通过文字描述生成高质量图像和配图。"
  },
  {
    title: "做视频",
    tools: "Runway / Kling",
    desc: "将文本或图片转化为动态视频，辅助视频创作与剪辑。"
  },
  {
    title: "写代码",
    tools: "Cursor / Claude / ChatGPT",
    desc: "自动补全代码、解释复杂逻辑、快速排查 Bug，提升开发效率。"
  },
  {
    title: "学英语",
    tools: "ChatGPT / Gemini",
    desc: "作为 24 小时随身外教，陪练口语、修改作文、解答语法疑问。"
  },
  {
    title: "查资料",
    tools: "Perplexity / Gemini",
    desc: "替代传统搜索，直接获取总结好的带来源引用的答案，节省时间。"
  },
  {
    title: "做生意",
    tools: "文案 / 数据 / 客服",
    desc: "撰写营销文案、分析基础数据、甚至接入客服系统自动回复。"
  },
  {
    title: "提高工作效率",
    tools: "总结 / 邮件 / 文档",
    desc: "一键总结长会话记录、快速回复正式邮件、自动化繁琐流程。"
  }
];

export default function AIUseCases() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI 到底能帮你做什么？</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            不要被复杂的技术名词困扰，AI 的价值在于解决普通人的实际需求。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {useCases.map((useCase, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-brand-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{useCase.title}</h3>
                  <p className="text-xs font-medium text-brand-600 mt-1">{useCase.tools}</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed pl-9">
                {useCase.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
