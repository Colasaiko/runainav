const fs = require('fs');
const path = 'src/app/guides/perplexity-search-guide/page.tsx';
let c = fs.readFileSync(path, 'utf8');

const oldGrid = `<div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
                <div className="text-red-600 font-bold mb-2 flex items-center gap-2"><X className="w-4 h-4"/> 错误示范</div>
                <code className="text-sm bg-white p-2 rounded block mb-2 text-red-900 border border-red-100">iPhone AI</code>
                <p className="text-sm text-red-800 m-0">毫无边界，AI 会随便抓取几篇最近的科技新闻给你一锅炖。</p>
              </div>
              <div className="bg-green-50 border border-green-200 p-5 rounded-xl">
                <div className="text-green-600 font-bold mb-2 flex items-center gap-2"><Check className="w-4 h-4"/> 正确示范</div>
                <code className="text-sm bg-white p-2 rounded block mb-2 text-green-900 border border-green-100">请整理 Apple 当前公开的生成式 AI 功能，优先引用 Apple 官方来源，并区分已经上线和仍未正式推出的功能。</code>
                <p className="text-sm text-green-800 m-0">增加了官方来源要求，并规定了输出的维度。</p>
              </div>
            </div>`;

const newGrid = `<div className="grid md:grid-cols-1 gap-6 mb-8">
              <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
                <div className="text-red-600 font-bold mb-2 flex items-center gap-2"><X className="w-4 h-4"/> 错误示范（不要只搜关键词）</div>
                <code className="text-sm bg-white p-2 rounded block mb-2 text-red-900 border border-red-100">英伟达 AI</code>
                <p className="text-sm text-red-800 m-0">毫无边界，AI 会随便抓取几篇最近的科技新闻给你一锅炖。</p>
              </div>
              <div className="bg-green-50 border border-green-200 p-5 rounded-xl">
                <div className="text-green-600 font-bold mb-2 flex items-center gap-2 flex-wrap justify-between">
                  <div className="flex items-center gap-2"><Check className="w-4 h-4"/> 更好的中文 Prompt</div>
                  <CopyButton text="请整理英伟达最近公开的 AI 相关产品与重要更新。 要求： 1. 优先使用英伟达官方来源 2. 标明每条信息的发布日期 3. 区分已经正式发布和仅宣布计划的内容 4. 如果只能找到媒体报道，请明确标记 5. 最后列出最值得我打开核对的原始页面" />
                </div>
                <code className="text-sm bg-white p-3 rounded block mb-2 text-green-900 border border-green-100 font-mono whitespace-pre-wrap">请整理英伟达最近公开的 AI 相关产品与重要更新。
要求：
1. 优先使用英伟达官方来源
2. 标明每条信息的发布日期
3. 区分已经正式发布和仅宣布计划的内容
4. 如果只能找到媒体报道，请明确标记
5. 最后列出最值得我打开核对的原始页面</code>
                <p className="text-sm text-green-800 m-0 font-bold mt-3">重点不是问题越长越好，而是把：时间、来源、范围、输出格式讲清楚。</p>
              </div>
            </div>`;

c = c.replace(oldGrid, newGrid);

// Update iPhone AI to 英伟达 AI in the text before it
c = c.replace(/<code>iPhone AI<\/code>/, '<code>英伟达 AI</code>');

fs.writeFileSync(path, c);
