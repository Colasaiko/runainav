import { Globe, Code2, Tv, Search, Book, Briefcase } from "lucide-react";

const scenes = [
  { icon: Globe, title: "AI", desc: "ChatGPT / Claude / Gemini" },
  { icon: Code2, title: "开发", desc: "GitHub / 开发文档 / 海外工具" },
  { icon: Tv, title: "视频", desc: "YouTube / 海外流媒体" },
  { icon: Search, title: "搜索", desc: "Google / 海外搜索引擎" },
  { icon: Book, title: "学习", desc: "全球课程 / 教程 / 原版文档" },
  { icon: Briefcase, title: "工作", desc: "海外 SaaS / 协作 / 生产力工具" },
];

export default function GlobalInternetSection() {
  return (
    <section className="py-24 bg-brand-950 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-900/50 blur-[100px] -z-10 rounded-full" />
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">不只是 AI</h2>
          <p className="text-brand-200 max-w-2xl mx-auto text-lg">
            一个好的网络环境，还能帮你无缝使用更多全球优质互联网服务。
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {scenes.map((scene, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
              <div className="mx-auto w-12 h-12 bg-brand-800 rounded-full flex items-center justify-center mb-4">
                <scene.icon className="w-5 h-5 text-brand-200" />
              </div>
              <h3 className="font-bold text-white mb-2">{scene.title}</h3>
              <p className="text-xs text-brand-300">{scene.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
