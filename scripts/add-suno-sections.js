const fs = require('fs');
const path = 'src/app/guides/[slug]/page.tsx';
let c = fs.readFileSync(path, 'utf8');

const target = `            {/* Cursor-specific:`; // Insert before Cursor-specific or right after Gamma

const sunoSections = `            {/* Suno-specific: Login Warning, Simple vs Custom, Song Structure, Style Formula, Rights Warning, Downloads, Internal Link */}
            {tool.slug === 'suno' && (
              <>
                {/* Login Warning */}
                <div className="bg-blue-50 border border-blue-200 p-5 rounded-2xl mb-12 flex gap-3">
                  <span className="text-blue-500 text-xl shrink-0">ℹ️</span>
                  <div>
                    <div className="font-bold text-blue-900 mb-1">用原来的登录方式回来</div>
                    <p className="text-sm text-blue-800 m-0 leading-relaxed">
                      如果之前用 Google 创建账号，以后尽量继续使用同一个 Google 登录。不要随便换另一个 SSO (如 Discord)，否则你的账号可能看起来像“以前的歌曲全部不见了”。
                    </p>
                  </div>
                </div>

                {/* Simple vs Custom */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Simple Mode 还是 Custom Mode？</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="text-left p-3 rounded-tl-lg font-bold text-gray-700">功能</th>
                          <th className="text-center p-3 font-bold text-gray-700">Simple Mode</th>
                          <th className="text-center p-3 rounded-tr-lg font-bold text-gray-700">Custom Mode</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['适合新手', '✅', '✅'],
                          ['自己填完整歌词', '较少控制', '✅'],
                          ['控制 Style (风格)', '简单描述', '更明确'],
                          ['纯音乐 (Instrumental)', '❌', '✅'],
                          ['高级选项 (Advanced)', '较少', '✅'],
                        ].map(([label, simple, custom], i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="p-3 font-medium text-gray-700 border-t border-gray-100">{label}</td>
                            <td className="p-3 text-center text-gray-600 border-t border-gray-100">{simple}</td>
                            <td className="p-3 text-center text-gray-600 border-t border-gray-100">{custom}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Song Structure Diagram */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">歌曲结构标签怎么填？</h3>
                  <p className="text-sm text-gray-600 mb-4">这是一种最常见的流行歌曲结构，不是唯一正确结构。自己写中文词时，可以在段落前加上中括号标签来引导 AI。</p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {['[Intro]', '[Verse]', '[Pre-Chorus]', '[Chorus]', '[Verse]', '[Chorus]', '[Bridge]', '[Chorus]', '[Outro]'].map((tag, i) => (
                      <div key={i} className="flex items-center">
                        <div className="bg-white border border-gray-300 px-3 py-1.5 rounded-lg text-gray-700 font-mono shadow-sm">
                          {tag}
                          <div className="text-[10px] text-gray-400 text-center mt-0.5">
                            {tag === '[Intro]' ? '前奏' : tag === '[Verse]' ? '主歌' : tag === '[Pre-Chorus]' ? '预副歌' : tag === '[Chorus]' ? '副歌' : tag === '[Bridge]' ? '桥段' : tag === '[Outro]' ? '尾奏' : ''}
                          </div>
                        </div>
                        {i < 8 && <span className="mx-2 text-gray-400">→</span>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Style Formula */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Style (音乐风格) 应该怎么写？</h3>
                  <div className="bg-brand-50 border-l-4 border-l-brand-500 p-5 rounded-r-xl mb-4 text-brand-900">
                    <strong>风格公式 = </strong>音乐类型 + 速度 + 情绪 + 主要乐器 + 人声方向 + 制作感觉
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <div className="bg-white border border-gray-200 p-3 rounded-lg"><strong className="block text-gray-900 mb-1">类型</strong>中文流行 Mandopop<br/>电子流行 Synth-pop</div>
                    <div className="bg-white border border-gray-200 p-3 rounded-lg"><strong className="block text-gray-900 mb-1">速度</strong>中速 Mid-tempo<br/>慢节奏 Slow tempo</div>
                    <div className="bg-white border border-gray-200 p-3 rounded-lg"><strong className="block text-gray-900 mb-1">乐器</strong>钢琴 Piano<br/>原声吉他 Acoustic</div>
                    <div className="bg-white border border-gray-200 p-3 rounded-lg"><strong className="block text-gray-900 mb-1">情绪</strong>温暖 Warm<br/>梦幻 Dreamy</div>
                  </div>
                </div>

                {/* Download Rules (2026-09) */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">歌曲生成与下载规则 (2026-09 更新)</h3>
                  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="bg-gray-50 p-4 border-b border-gray-200">
                      <p className="text-sm text-gray-600 m-0">
                        <strong>注意：</strong>歌曲生成 Credits ≠ 歌曲 Download Credits。Suno 在 2026-09-03 启用了新的下载额度体系，旧教程中“无限下载”的说法已经过时。
                      </p>
                    </div>
                    <div className="p-4 grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <strong className="text-gray-900 block mb-1">Free 方案</strong>
                        <p className="text-gray-600">取决于账号创建时间和试用资格。新用户通常面临较严格的下载限制。</p>
                      </div>
                      <div>
                        <strong className="text-gray-900 block mb-1">Pro 方案</strong>
                        <p className="text-gray-600">每月提供 20 个歌曲下载额度，生成次数按原模型逻辑消耗 Credits。</p>
                      </div>
                      <div>
                        <strong className="text-gray-900 block mb-1">Premier 方案</strong>
                        <p className="text-gray-600">每月提供 60 个歌曲下载额度，享受更多的并发生成优势。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Commercial Use Rights Warning */}
                <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl mb-12 flex gap-3">
                  <span className="text-amber-500 text-xl shrink-0">⚠️</span>
                  <div>
                    <div className="font-bold text-amber-900 mb-1">商业使用权 ≠ 自动获得版权保护</div>
                    <p className="text-sm text-amber-800 m-0 leading-relaxed">
                      Suno 官方明确区分了 Commercial Use Rights（商业使用权）和 Copyright Protection（版权保护）。付费方案（Pro/Premier）允许你商用（发行、盈利等），但 AI 生成的歌曲能否登记版权，取决于你所在国家/地区的法律以及人类创作参与度。如果歌词是你自己原创的，你始终拥有歌词的版权。免费时期生成的歌曲，之后订阅付费通常也不能自动追溯商业许可。
                    </p>
                  </div>
                </div>

                {/* Deep Tutorial Link */}
                <div className="bg-brand-50 border border-brand-100 p-6 rounded-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-brand-900 m-0 mb-1">想真正做一首中文歌？</h4>
                    <p className="text-sm text-brand-800 m-0">阅读实战教程：从歌词结构、风格写法到 Exclude 与 Reuse 实操。</p>
                  </div>
                  <Link href="/guides/suno-chinese-song-tutorial" className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2.5 px-6 rounded-xl transition-colors shrink-0 no-underline">
                    Suno 中文歌曲教程 →
                  </Link>
                </div>
              </>
            )}

`;

if (c.includes(target)) {
  c = c.replace(target, sunoSections + target);
  fs.writeFileSync(path, c);
  console.log('Successfully added Suno-specific sections!');
} else {
  console.log('Target not found!');
  process.exit(1);
}
