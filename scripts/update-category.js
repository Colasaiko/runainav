const fs = require('fs');

let c = fs.readFileSync('src/app/ai/[filter]/page.tsx', 'utf8');

const banner = `
          {filter === 'chat' && (
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8 flex items-center justify-between">
              <div>
                <strong className="text-blue-900 block mb-1">📖 热门 AI 聊天教程</strong>
                <p className="text-blue-700 text-sm m-0">不知道怎么提问？来看看 ChatGPT 的日常使用场景整理。</p>
              </div>
              <Link href="/guides/chatgpt-what-can-it-do" className="shrink-0 bg-white text-blue-600 px-4 py-2 rounded-xl text-sm font-bold border border-blue-200 hover:bg-blue-50 transition-colors">
                阅读教程
              </Link>
            </div>
          )}
          {filter === 'music' && (
            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 mb-8 flex items-center justify-between">
              <div>
                <strong className="text-purple-900 block mb-1">🎵 热门 AI 音乐教程</strong>
                <p className="text-purple-700 text-sm m-0">生成后歌词不对？来看看 Suno 的后期修改指南。</p>
              </div>
              <Link href="/guides/suno-edit-lyrics" className="shrink-0 bg-white text-purple-600 px-4 py-2 rounded-xl text-sm font-bold border border-purple-200 hover:bg-purple-50 transition-colors">
                阅读教程
              </Link>
            </div>
          )}
          {filter === 'image' && (
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-8 flex items-center justify-between">
              <div>
                <strong className="text-emerald-900 block mb-1">📸 热门 AI 绘图教程</strong>
                <p className="text-emerald-700 text-sm m-0">人物太假？来看看 Midjourney 真实感人像镜头与光线写法。</p>
              </div>
              <Link href="/guides/midjourney-realistic-portrait" className="shrink-0 bg-white text-emerald-600 px-4 py-2 rounded-xl text-sm font-bold border border-emerald-200 hover:bg-emerald-50 transition-colors">
                阅读教程
              </Link>
            </div>
          )}
`;

const splitStr = '<div className="grid md:grid-cols-3 gap-8 mb-16">';
if (c.includes(splitStr) && !c.includes('热门 AI 聊天教程')) {
  c = c.replace(splitStr, banner + '\n          ' + splitStr);
  fs.writeFileSync('src/app/ai/[filter]/page.tsx', c);
  console.log("Updated category page");
} else {
  console.log("Category page already updated");
}
