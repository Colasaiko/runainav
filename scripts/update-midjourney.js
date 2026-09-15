const fs = require('fs');

let c = fs.readFileSync('src/app/guides/midjourney-realistic-portrait/page.tsx', 'utf8');

const newContent = `
            <hr className="my-16 border-gray-100" />

            <h2 id="new-h2-1" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              Midjourney真实人物提示词怎么写？
            </h2>
            <p className="mb-8 text-gray-700">要让 Midjourney 生成极具真实感的真人，你需要抛弃一切绘画、插画相关的词汇（如 masterpiece, illustration, octane render 等），彻底转向<strong>摄影语言</strong>。你需要像一位真正的摄影师在片场布置机位和灯光一样，给 AI 下达明确的“拍摄指令”。</p>

            <h2 id="new-h2-2" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              相机与镜头参数怎么写？
            </h2>
            <p className="mb-4 text-gray-700">加入具体的相机和镜头型号，能够迅速让画面具备该器材独特的景深与畸变特征。请注意，说明它们属于 Prompt 描述参考，不代表“使用某参数一定会产生某结果”，但能显著提升照片的质感：</p>
            <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
              <li><strong>35mm lens：</strong> 经典人文视角，适合带环境的半身像或街拍，畸变小且交代背景。</li>
              <li><strong>50mm lens：</strong> 标准镜头，最接近人眼视觉，适合特写和半身人像。</li>
              <li><strong>85mm lens：</strong> 经典人像镜头，能产生强烈的背景虚化（浅景深 blur background），突出面部细节。</li>
              <li><strong>相机品牌（如 Shot on Kodak Portra 400, Leica M11）：</strong> 会附带该品牌或胶片的色彩科学与颗粒质感。</li>
            </ul>

            <h2 id="new-h2-3" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              自然光人物 Prompt 怎么写？
            </h2>
            <p className="mb-4 text-gray-700">拒绝影棚里生硬的闪光灯，使用自然光词汇能大幅降低 AI 塑料感：</p>
            <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
              <li><strong>natural light (自然光)：</strong> 最基础且最有效的写实光线词。</li>
              <li><strong>soft daylight (柔和日光)：</strong> 阴天或背阴处的漫反射光，人物脸部阴影柔和，没有死黑。</li>
              <li><strong>window light (窗边光)：</strong> 典型的室内人像布光，自带侧向渐变阴影，极具情绪感。</li>
              <li><strong>golden hour (黄金时刻)：</strong> 日出或日落前后的阳光，带有温暖的橙黄色调和较长的逆光轮廓线。</li>
            </ul>

            <h2 id="new-h2-4" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              真实皮肤质感怎么写？
            </h2>
            <p className="mb-6 text-gray-700">绝对不要鼓励塑料皮肤或过度锐化！真实的皮肤是不完美的，包含毛孔、微小瑕疵和自然的光泽。在主体描述后加上这些词：</p>
            <div className="bg-gray-50 p-4 rounded-xl text-sm border border-gray-200 mb-8">
              <code className="text-brand-600 block mb-2">natural skin texture, skin pores, subtle imperfections, light freckles, unretouched, candid</code>
              <span className="text-gray-600">通过强制加入“自然皮肤纹理”、“毛孔”、“细微瑕疵”、“未经修图”等词，压制 Midjourney 默认的“磨皮滤镜”。</span>
            </div>

            <h2 id="new-h2-5" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              真实人物 Prompt 模板
            </h2>
            <p className="mb-6 text-gray-700">以下是 6 个可以直接复制使用的真实人物模板：</p>
            <div className="space-y-4 mb-8">
              <div className="bg-white border border-gray-200 p-4 rounded-xl">
                <strong className="block text-gray-900 mb-1">1. 室内自然光：</strong>
                <code className="text-sm text-gray-600">A portrait of a 25-year-old Asian woman reading a book in a cozy cafe, window light, natural skin texture, soft daylight, shot on 50mm lens, candid photography, unretouched --ar 3:4 --style raw</code>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-xl">
                <strong className="block text-gray-900 mb-1">2. 户外街拍：</strong>
                <code className="text-sm text-gray-600">Street style photography of a young man walking in Tokyo at golden hour, wearing casual streetwear, cinematic lighting, shallow depth of field, shot on 35mm lens, realistic film grain --ar 16:9 --style raw</code>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-xl">
                <strong className="block text-gray-900 mb-1">3. 职业头像：</strong>
                <code className="text-sm text-gray-600">Professional corporate headshot of a 40-year-old confident woman in a modern office, wearing a dark blue blazer, natural soft studio lighting, blurred office background, shot on 85mm lens --ar 1:1 --v 6.0</code>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-xl">
                <strong className="block text-gray-900 mb-1">4. 生活照片：</strong>
                <code className="text-sm text-gray-600">Polaroid photo of a happy couple laughing on the beach, casual clothing, messy hair, sunny day, candid, amateur photography, natural imperfections --ar 3:4</code>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-xl">
                <strong className="block text-gray-900 mb-1">5. 电影感：</strong>
                <code className="text-sm text-gray-600">Cinematic still of a tired detective standing in rain, moody blue tones, neon lights reflecting on wet pavement, cinematic lighting, anamorphic lens, 8k resolution --ar 21:9 --style raw</code>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-xl">
                <strong className="block text-gray-900 mb-1">6. 手机纪实感：</strong>
                <code className="text-sm text-gray-600">Selfie taken on iPhone 14 front camera, teenage girl in a messy bedroom, warm room lighting, slightly blurry, unretouched, raw photo --ar 9:16</code>
              </div>
            </div>

            <h2 id="new-h2-6" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              为什么AI人物看起来很假？
            </h2>
            <p className="mb-4 text-gray-700">很多人的 Prompt 生成出来依然像个塑料假娃娃，通常是因为：</p>
            <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
              <li><strong>过度美化：</strong> 塞满了 beautiful, gorgeous, flawless 等词汇，迫使 AI 输出失真的网红脸。</li>
              <li><strong>光线描述冲突：</strong> 既写了 cinematic lighting 又写了 natural light，让 AI 不知所措。</li>
              <li><strong>镜头词互相冲突：</strong> 一会儿 wide angle（广角），一会儿 close-up portrait（特写），自相矛盾。</li>
              <li><strong>Prompt太长：</strong> 词汇堆砌导致主次不分，系统为了兼顾所有词，反而丢失了基础的真实质感。</li>
              <li><strong>皮肤描述过度：</strong> 忘了加入 unretouched 或 skin pores 等约束词。</li>
              <li><strong>构图不自然：</strong> 没有给出人物的具体动作或环境，导致人物像一根木头一样杵在正中央。</li>
            </ul>

            <h2 id="new-h2-7" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              真实人物提示词快速公式
            </h2>
            <p className="mb-6 text-gray-700">不用死记硬背，每次写 Prompt 前套用这个公式，即可稳定产出高质感图片：</p>
            <div className="bg-brand-50 p-6 rounded-2xl border border-brand-200 mb-12">
              <strong className="text-brand-900 text-lg block mb-4">主体 + 环境 + 光线 + 镜头 + 构图 + 皮肤质感 + 摄影风格 + 参数</strong>
              <p className="text-sm text-brand-800 m-0 leading-relaxed">
                例如：<br/>
                <strong>主体：</strong> A 30-year-old barista making coffee<br/>
                <strong>环境：</strong> in a cozy vintage cafe<br/>
                <strong>光线：</strong> window light, soft daylight<br/>
                <strong>镜头：</strong> shot on 50mm lens<br/>
                <strong>构图：</strong> half-body portrait<br/>
                <strong>皮肤质感：</strong> natural skin texture, unretouched<br/>
                <strong>摄影风格：</strong> candid photography<br/>
                <strong>参数：</strong> --ar 3:4 --style raw --v 6.0
              </p>
            </div>

`;

const splitStr = '<div className="bg-white border-2 border-brand-100 rounded-2xl p-6 md:p-8 shadow-sm mb-12">';
if (c.includes(splitStr) && !c.includes('Midjourney真实人物提示词怎么写')) {
  c = c.replace(splitStr, newContent + '\n              ' + splitStr);
  fs.writeFileSync('src/app/guides/midjourney-realistic-portrait/page.tsx', c);
  console.log("Updated midjourney page");
} else {
  console.log("Could not find splitStr in midjourney page or already updated");
}
