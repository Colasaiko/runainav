const fs = require('fs');
const path = 'src/app/guides/midjourney-realistic-portrait/page.tsx';
let c = fs.readFileSync(path, 'utf8');

// 1. Level 1-4
c = c.replace(/portrait of a man in a dark jacket, standing beside a cafe window, soft morning light, calm expression, natural skin texture, 85mm portrait photography, shallow depth of field --ar 2:3/g, "一位穿深色夹克的男子站在咖啡馆窗边，柔和晨间自然光，平静自然的表情，真实皮肤质感，85mm人像摄影观感，浅景深 --ar 2:3");
c = c.replace(/portrait of a man in a dark jacket, standing beside a cafe window, soft morning light, calm expression/g, "一位穿深色夹克的男子站在咖啡馆窗边，柔和晨光，平静自然的表情");
c = c.replace(/portrait of a man in a dark jacket, standing inside a cafe/g, "一位穿深色夹克的男子，站在咖啡馆里");

// 2. Add Vocabulary Table before `<div className="grid grid-cols-1 gap-12 mb-16">`
const vocabTable = `
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-12">
              <h3 className="font-bold text-gray-900 mt-0 mb-4">常用人像 Prompt 中英文对照</h3>
              <p className="text-sm text-gray-600 mb-4">
                你可以全中文编写 Prompt，但在微调光线、构图和景深时，使用英文术语能获得更精确的控制。
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 text-gray-500">
                      <th className="py-3 px-4 font-medium">中文概念</th>
                      <th className="py-3 px-4 font-medium">常见英文表达</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-700">
                    <tr><td className="py-2 px-4">柔和窗边光</td><td className="py-2 px-4 font-mono text-xs">soft window light</td></tr>
                    <tr><td className="py-2 px-4">黄金时刻</td><td className="py-2 px-4 font-mono text-xs">golden hour</td></tr>
                    <tr><td className="py-2 px-4">浅景深</td><td className="py-2 px-4 font-mono text-xs">shallow depth of field</td></tr>
                    <tr><td className="py-2 px-4">背景虚化</td><td className="py-2 px-4 font-mono text-xs">background bokeh</td></tr>
                    <tr><td className="py-2 px-4">平视</td><td className="py-2 px-4 font-mono text-xs">eye-level</td></tr>
                    <tr><td className="py-2 px-4">半身人像</td><td className="py-2 px-4 font-mono text-xs">half-body portrait</td></tr>
                    <tr><td className="py-2 px-4">全身人像</td><td className="py-2 px-4 font-mono text-xs">full-body portrait</td></tr>
                    <tr><td className="py-2 px-4">自然皮肤质感</td><td className="py-2 px-4 font-mono text-xs">natural skin texture</td></tr>
                    <tr><td className="py-2 px-4">写实摄影</td><td className="py-2 px-4 font-mono text-xs">realistic photography</td></tr>
                    <tr><td className="py-2 px-4">暖色调</td><td className="py-2 px-4 font-mono text-xs">warm tones</td></tr>
                    <tr><td className="py-2 px-4">冷色调</td><td className="py-2 px-4 font-mono text-xs">cool tones</td></tr>
                    <tr><td className="py-2 px-4">黑白</td><td className="py-2 px-4 font-mono text-xs">monochrome</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-12 mb-16">`;

c = c.replace(/<div className="grid grid-cols-1 gap-12 mb-16">/, vocabTable);


// 3. 8 Templates Array Replacement
// We'll replace the entire string block from `{[ { image: "/images/midjourney/midjourney-portrait-window.jpg"` 
// to `} ].map((tpl, idx) => (`

const newTemplates = `{[
                  {
                    image: "/images/midjourney/midjourney-portrait-window.jpg",
                    title: "1. 自然窗边光 (soft window light)",
                    prompt: "一位年轻女性的近距离人像，站在宽大的窗户旁，柔和漫射自然光，穿白色亚麻衬衫，神情自然轻松，真实皮肤质感，明亮通透的室内背景，50mm人像摄影观感，浅景深，写实摄影风格 --ar 2:3",
                    breakdown: { 
                      "主体": "年轻女性，穿白色亚麻衬衫", 
                      "环境": "明亮通透的室内背景，宽大窗户旁", 
                      "光线": "柔和漫射自然光", 
                      "构图": "近距离人像", 
                      "摄影方向": "50mm人像摄影观感，浅景深，写实摄影风格" 
                    }
                  },
                  {
                    image: "/images/midjourney/midjourney-portrait-city.jpg",
                    title: "2. 街头电影感 (city cinematic portrait)",
                    prompt: "一位穿风衣的男子半身人像，走在黄昏的雨天城市街道，蓝调时刻光线，暖色路灯倒映在湿润路面，情绪化电影氛围，35mm街头摄影观感，主体清晰，写实编辑摄影风格 --ar 16:9 --stylize 150",
                    breakdown: { 
                      "主体": "穿风衣的男子", 
                      "环境": "黄昏的雨天城市街道，湿润路面", 
                      "光线": "蓝调时刻光线，暖色路灯倒映", 
                      "构图": "半身人像", 
                      "摄影方向": "35mm街头摄影观感，主体清晰，情绪化电影氛围，写实编辑摄影风格" 
                    }
                  },
                  {
                    image: "/images/midjourney/midjourney-portrait-professional.jpg",
                    title: "3. 专业工作人像 (professional profile)",
                    prompt: "一位佩戴眼镜的专业女性头肩人像，干净的浅灰色背景，柔和的影棚光，自然自信的微笑表情，真实皮肤细节，85mm商业人像摄影，中等景深，高品质写实风格 --ar 3:4",
                    breakdown: { 
                      "主体": "佩戴眼镜的专业女性，自然自信微笑", 
                      "环境": "干净的浅灰色背景", 
                      "光线": "柔和的影棚光", 
                      "构图": "头肩人像", 
                      "摄影方向": "85mm商业人像摄影，中等景深，高品质写实风格" 
                    }
                  },
                  {
                    image: "/images/midjourney/midjourney-portrait-bw.jpg",
                    title: "4. 黑白人像 (black and white portrait)",
                    prompt: "一位年长男性的特写人像，黑白摄影，高对比度侧逆光，强调面部皮肤纹理与皱纹细节，深邃平静的表情，黑色纯色背景，写实纪实摄影风格 --ar 4:5 --stylize 80",
                    breakdown: { 
                      "主体": "年长男性，深邃平静的表情", 
                      "环境": "黑色纯色背景", 
                      "光线": "高对比度侧逆光", 
                      "构图": "特写人像", 
                      "摄影方向": "黑白摄影，强调面部皮肤纹理细节，写实纪实摄影风格" 
                    }
                  },
                  {
                    image: "/images/midjourney/midjourney-portrait-golden-hour.jpg",
                    title: "5. 黄金时刻户外 (golden hour outdoor)",
                    prompt: "一位年轻女性的全身人像，漫步在秋季草地中，黄金时刻的夕阳暖光，强烈的边缘光勾勒轮廓，柔和光斑的背景虚化，自然真实的肤色，85mm户外人像摄影 --ar 16:9",
                    breakdown: { 
                      "主体": "年轻女性，自然真实肤色", 
                      "环境": "秋季草地", 
                      "光线": "黄金时刻夕阳暖光，强烈边缘光", 
                      "构图": "全身人像", 
                      "摄影方向": "85mm户外人像摄影，背景虚化 (光斑)" 
                    }
                  },
                  {
                    image: "/images/midjourney/midjourney-portrait-cafe.jpg",
                    title: "6. 咖啡馆生活感 (lifestyle cafe)",
                    prompt: "一位男子坐在复古咖啡馆里喝咖啡，偏中心构图，温暖的室内环境光混合自然窗光，抓拍的生活方式摄影，生动自然的肢体动作，35mm环境人像，电影感调色 --ar 3:2",
                    breakdown: { 
                      "主体": "喝咖啡的男子，生动自然肢体动作", 
                      "环境": "复古咖啡馆内部", 
                      "光线": "温暖室内环境光混合自然窗光", 
                      "构图": "偏中心构图，半身环境人像", 
                      "摄影方向": "35mm环境人像，抓拍生活方式摄影，电影感调色" 
                    }
                  },
                  {
                    image: "/images/midjourney/midjourney-portrait-studio.jpg",
                    title: "7. 极简影棚照 (minimalist studio)",
                    prompt: "一位短发女性的时尚人像，纯白色极简影棚背景，均匀柔和的正面打光，高级质感服装，冷色调，锐利的眼神，85mm高清时尚摄影，深景深 --ar 2:3",
                    breakdown: { 
                      "主体": "短发女性，高级质感服装，锐利的眼神", 
                      "环境": "纯白色极简影棚背景", 
                      "光线": "均匀柔和的正面打光", 
                      "构图": "标准人像构图", 
                      "摄影方向": "85mm高清时尚摄影，深景深，冷色调" 
                    }
                  },
                  {
                    image: "/images/midjourney/midjourney-portrait-neon.jpg",
                    title: "8. 夜景霓虹 (neon night portrait)",
                    prompt: "一位戴帽子的年轻人在夜晚城市天台的特写人像，蓝紫色与暖橙色霓虹灯光交织，脸上有轻微的光线反射，强烈的色彩对比，赛博朋克电影感，浅景深，夜晚环境摄影 --ar 2:3 --stylize 200",
                    breakdown: { 
                      "主体": "戴帽子的年轻人", 
                      "环境": "夜晚城市天台", 
                      "光线": "蓝紫与暖橙霓虹灯光交织，脸上轻微光线反射", 
                      "构图": "特写人像", 
                      "摄影方向": "浅景深，夜晚环境摄影，赛博朋克电影感，强烈色彩对比" 
                    }
                  }
                ].map((tpl, idx) => (`;

const arrayRegex = /\{\[\s*\{\s*image: "\/images\/midjourney\/midjourney-portrait-window\.jpg"[\s\S]*?\}\s*\]\.map\(\(tpl,\s*idx\)\s*=>\s*\(/;

c = c.replace(arrayRegex, newTemplates);

// 4. Update the `--no` parameter description
const noRegex = /<td className="py-4 px-4 bg-gray-50 font-mono text-xs">--no sunglasses<\/td>/;
const newNo = `<td className="py-4 px-4 bg-gray-50 font-mono text-xs text-brand-700">
                        <div className="mb-1">一位男子的街头人像，夜晚城市背景，霓虹灯光，写实摄影 --ar 2:3 --no sunglasses</div>
                        <div className="text-gray-500">解释：sunglasses = 太阳镜。建议排除词继续使用明确的英文单词。</div>
                      </td>`;

c = c.replace(noRegex, newNo);

fs.writeFileSync(path, c);
