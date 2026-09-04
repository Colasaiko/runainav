import { Sparkles, Code2, GraduationCap, Globe2, PlaySquare, Wifi } from "lucide-react";

const useCases = [
  {
    icon: Sparkles,
    title: "AI 工具",
    desc: "帮助用户在支持的地区和符合服务条款的情况下使用 ChatGPT、Claude、Gemini 等全球 AI 服务。"
  },
  {
    icon: Code2,
    title: "AI 编程",
    desc: "顺畅连接 Cursor、GitHub Copilot 以及海外技术社区与开发文档。"
  },
  {
    icon: GraduationCap,
    title: "AI 学习",
    desc: "访问海外公开课程、技术教程与学习资源、技术教程、教育资源与全球化学习平台。"
  },
  {
    icon: Globe2,
    title: "全球搜索",
    desc: "快速访问 Google、Perplexity 等全球互联网信息来源与搜索服务。"
  },
  {
    icon: PlaySquare,
    title: "视频与内容",
    desc: "稳定访问部分海外高清视频、设计素材库和流媒体内容服务。"
  },
  {
    icon: Wifi,
    title: "公共 Wi-Fi 安全",
    desc: "在咖啡馆、酒店、机场等公共 Wi-Fi 场景下建立加密连接，保护隐私。"
  }
];

export default function VPNUseCases() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">一个 VPN，可以用在哪里？</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            不仅适用于 AI 工具，更是为你打开通向全球互联网资源的数字大门。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
              <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 text-gray-700">
                <useCase.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{useCase.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
