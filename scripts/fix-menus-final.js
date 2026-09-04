const fs = require('fs');

function fixAiList() {
  let c = fs.readFileSync('src/app/ai/AIList.tsx', 'utf8');
  const start = c.indexOf('{/* 菜单游览 */}');
  const end = c.indexOf('{/* 30 秒速读 */}');
  
  const newMenu = `{/* 菜单游览 */}
      <section className="mb-10">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            🧭 菜单游览
          </h2>
          <p className="text-gray-500 mt-1 text-sm">快速跳到你想看的部分，找到适合自己的 AI 工具。</p>
        </div>
        <div className="flex overflow-x-auto pb-4 gap-3 scrollbar-hide sticky top-0 z-20 bg-gray-50/90 backdrop-blur pt-2">
          <a href="#quick-read" className="whitespace-nowrap px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-colors shadow-sm">30 秒速读</a>
          <a href="#scenarios" className="whitespace-nowrap px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-colors shadow-sm">按需求找 AI</a>
          <a href="#beginner-recommends" className="whitespace-nowrap px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-colors shadow-sm">新手推荐</a>
          <a href="#network-tips" className="whitespace-nowrap px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-colors shadow-sm">温馨小提示</a>
          <a href="#all-tools" className="whitespace-nowrap px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-colors shadow-sm">全部 AI 工具</a>
        </div>
      </section>

      `;
  c = c.substring(0, start) + newMenu + c.substring(end);
  fs.writeFileSync('src/app/ai/AIList.tsx', c);
  console.log('Fixed AIList');
}

function fixGuidesList() {
  let c = fs.readFileSync('src/app/guides/GuidesList.tsx', 'utf8');
  const start = c.indexOf('{/* 菜单游览 */}');
  const end = c.indexOf('{/* 30 秒速读 */}');
  
  const newMenu = `{/* 菜单游览 */}
      <section className="mb-10">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            🧭 指南游览
          </h2>
          <p className="text-gray-500 mt-1 text-sm">快速找到你想学习的 AI 类型和使用指南。</p>
        </div>
        <div className="flex overflow-x-auto pb-4 gap-3 scrollbar-hide sticky top-0 z-20 bg-gray-50/90 backdrop-blur pt-2">
          <a href="#beginner-recommends" className="whitespace-nowrap px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-colors shadow-sm">新手入门</a>
          
          <button onClick={() => { setActiveCategory('chat'); document.getElementById('all-tools')?.scrollIntoView({ behavior: 'smooth' }); }} className="whitespace-nowrap px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-colors shadow-sm">AI 聊天</button>
          <button onClick={() => { setActiveCategory('coding'); document.getElementById('all-tools')?.scrollIntoView({ behavior: 'smooth' }); }} className="whitespace-nowrap px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-colors shadow-sm">AI 编程</button>
          <button onClick={() => { setActiveCategory('image'); document.getElementById('all-tools')?.scrollIntoView({ behavior: 'smooth' }); }} className="whitespace-nowrap px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-colors shadow-sm">AI 绘图</button>
          <button onClick={() => { setActiveCategory('video'); document.getElementById('all-tools')?.scrollIntoView({ behavior: 'smooth' }); }} className="whitespace-nowrap px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-colors shadow-sm">AI 视频</button>
          <button onClick={() => { setActiveCategory('productivity'); document.getElementById('all-tools')?.scrollIntoView({ behavior: 'smooth' }); }} className="whitespace-nowrap px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-colors shadow-sm">AI 办公</button>
          
          <a href="#all-tools" className="whitespace-nowrap px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-colors shadow-sm">全部指南</a>
        </div>
      </section>

      `;
  c = c.substring(0, start) + newMenu + c.substring(end);
  fs.writeFileSync('src/app/guides/GuidesList.tsx', c);
  console.log('Fixed GuidesList');
}

fixAiList();
fixGuidesList();

let gp = fs.readFileSync('src/app/guides/page.tsx', 'utf8');
gp = gp.replace(/AI使用指南与教\?\S* \| 高效生产力神\S* - RunAI/, '海外热门AI使用指南与常见问题解答 | RunAI');
gp = gp.replace(/不知道怎么用AI.*?无障碍之旅！/, 'RunAI精选全球顶尖AI工具的使用方法与功能介绍。无论你是新手还是进阶用户，都能在此了解详细的账号要求、网络环境配置及常见问题，助你快速掌握AI高效工作法。');
// fix double dot
gp = gp.replace(/和常见问题。。/g, '和常见问题。');
fs.writeFileSync('src/app/guides/page.tsx', gp);

