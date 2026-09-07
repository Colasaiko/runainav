const fs = require('fs');
const path = 'src/app/guides/[slug]/page.tsx';
let c = fs.readFileSync(path, 'utf8');

// Insert Midjourney-specific block BEFORE the Cursor-specific block
const target = `            {/* Cursor-specific:`;

const mjSections = `            {/* Midjourney-specific: Web vs Discord, old user warning, pricing, portrait link */}
            {tool.slug === 'midjourney' && (
              <>
                {/* Web vs Discord compare */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">网页版 vs Discord，应该选哪个？</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="text-left p-3 rounded-tl-lg font-bold text-gray-700">项目</th>
                          <th className="text-center p-3 font-bold text-gray-700">网页版（Web）</th>
                          <th className="text-center p-3 rounded-tr-lg font-bold text-gray-700">Discord</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['新手操作', '更直观', '需要熟悉 Discord'],
                          ['图片生成（Create）', '✅', '✅'],
                          ['Editor', '✅', '❌'],
                          ['Personalization 管理', '✅', '有限制'],
                          ['Moodboards 管理', '✅', '有限制'],
                          ['Conversational Mode', '✅', '❌'],
                          ['Option Sets 创建', '❌', '✅'],
                        ].map(([label, web, discord], i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="p-3 font-medium text-gray-700 border-t border-gray-100">{label}</td>
                            <td className="p-3 text-center text-gray-600 border-t border-gray-100">{web}</td>
                            <td className="p-3 text-center text-gray-600 border-t border-gray-100">{discord}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">* 以上内容以 2026-09-07 官方 Web vs Discord 文档为准，具体功能以官方当前支持为准。建议新手优先尝试网页版。</p>
                </div>

                {/* Old user warning */}
                <div className="bg-blue-50 border border-blue-200 p-5 rounded-2xl mb-8 flex gap-3">
                  <span className="text-blue-500 text-xl shrink-0">ℹ️</span>
                  <div>
                    <div className="font-bold text-blue-900 mb-1">老用户注意</div>
                    <p className="text-sm text-blue-800 m-0 leading-relaxed">
                      如果过去通过 Discord 使用过 Midjourney 并存在旧创作记录，建议优先使用原来的 Discord 账号登录，避免误建新的独立账号或重复购买订阅。
                    </p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Midjourney 套餐一览</h3>
                  <p className="text-sm text-gray-500 mb-4">资料核对：2026-09-07。价格以美元结算，年付约有 20% 折扣（通常一次性支付全年费用）。税费以官方结账页面实际显示为准。</p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { name: 'Basic', price: '$10/月', highlight: '先体验', desc: '适合偶尔使用，先了解 Midjourney 的生成效果' },
                      { name: 'Standard', price: '$30/月', highlight: '日常创作', desc: '适合生成量较大的用户，含 Relax Mode' },
                      { name: 'Pro', price: '$60/月', highlight: 'Stealth Mode', desc: '更高资源，含 Stealth Mode，作品不出现在公共画廊' },
                      { name: 'Mega', price: '$120/月', highlight: '高频使用', desc: '最高使用量，适合大规模创作需求' }
                    ].map((plan, i) => (
                      <div key={i} className="bg-white border border-gray-200 p-4 rounded-2xl shadow-sm">
                        <div className="font-bold text-gray-900 mb-1">{plan.name}</div>
                        <div className="text-brand-600 font-bold text-lg mb-1">{plan.price}</div>
                        <div className="text-xs bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full inline-block mb-2">{plan.highlight}</div>
                        <div className="text-xs text-gray-500 leading-relaxed">{plan.desc}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl mt-4 text-sm text-amber-800">
                    <strong>付款方式：</strong>通过 Stripe 处理，具体可用方式（Visa、Mastercard、Apple Pay、Alipay 等）以结账页面实际显示为准。当前不支持 PayPal。年付方案通常一次性扣除全年费用，请注意不是每月分别扣款。
                  </div>
                </div>

                {/* Portrait tutorial link */}
                <div className="bg-brand-50 border border-brand-100 p-6 rounded-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-brand-900 m-0 mb-1">想进一步学习中文人像 Prompt？</h4>
                    <p className="text-sm text-brand-800 m-0">查看本站的实战教程，学习如何写出真正有效的真实感人像提示词。</p>
                  </div>
                  <Link href="/guides/midjourney-realistic-portrait" className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2.5 px-6 rounded-xl transition-colors shrink-0 no-underline">
                    人像 Prompt 教程 →
                  </Link>
                </div>

                {/* Community note */}
                <div className="bg-gray-50 border border-gray-200 p-5 rounded-2xl mb-12 text-sm text-gray-600">
                  <strong className="text-gray-800">关于社区和隐私：</strong>Midjourney 默认是开放社区环境（open-by-default），生成的图片可能在画廊中对其他用户可见。如果非常在意创作隐私，需要订阅 Pro 或 Mega 方案并开启 Stealth Mode。生成内容需符合 Midjourney Community Guidelines，不得包含暴力、歧视或违规内容。
                </div>
              </>
            )}

            `;

if (c.includes(target)) {
  c = c.replace(target, mjSections + target);
  fs.writeFileSync(path, c);
  console.log('Successfully added Midjourney-specific sections!');
} else {
  console.log('Target not found!');
  process.exit(1);
}
