const fs = require('fs');
const path = 'src/app/guides/midjourney-realistic-portrait/page.tsx';
let c = fs.readFileSync(path, 'utf8');

const replacements = [
  // 1. FAQ update
  [/中文 Prompt 可以用吗.*?通常能获得更精准的控制。/g, "中文用户可以直接从中文描述开始。如果希望进一步学习摄影和视觉术语，也可以逐渐熟悉一些常见英文表达。"],

  // 2. Language section update
  [/Midjourney 可以理解不同语言。但许多摄影.*?更精准的控制力。/g, "不用因为不会英文就不敢使用 Midjourney。你可以先用中文描述人物、环境、光线、构图和风格。当以后希望更精确学习摄影术语时，再认识常见英文表达即可。"],

  // 3. Bad vs Good examples
  [/a beautiful gorgeous girl, amazing masterpiece, best quality, 8k, ultra HD, unreal engine 5, octane render, soft light, natural light, dark room, beautiful background, close up/g, "一个漂亮女生，超级漂亮，顶级画质，超高清，非常真实，非常精致"],
  [/close-up portrait of a woman in a dark room, soft natural light --ar 2:3/g, "一位年轻女性的近距离人像，坐在安静的书店里，柔和的窗边自然光，自然表情，真实皮肤质感，浅景深，写实人像摄影 --ar 2:3"],
  [/全部都是模糊的形容词，不知道是谁、在哪里、什么光线/g, "全部都是模糊的形容词，没有告诉 AI：在哪里、什么光线、什么构图、什么摄影方向。"],

  // 4. Level 1-4
  [/"portrait of a man"/g, '"一位男子的人像"'],
  [/"portrait of a man in a dark casual jacket, standing inside a cafe"/g, '"一位穿深色夹克的男子，站在咖啡馆里"'],
  [/"portrait of a man in a dark casual jacket, standing by a cafe window, soft morning light, calm natural expression"/g, '"一位穿深色夹克的男子站在咖啡馆窗边，柔和晨光，平静自然的表情"'],
  [/"portrait of a man in a dark casual jacket, standing by a cafe window, soft morning light, calm natural expression, realistic skin texture, 85mm portrait photography, shallow depth of field --ar 2:3"/g, '"一位穿深色夹克的男子站在咖啡馆窗边，柔和晨间自然光，平静自然的表情，真实皮肤质感，85mm人像摄影观感，浅景深 --ar 2:3"'],

  // 5. Subject Table
  [/>a young man</g, '>年轻男子 (young man)<'],
  [/>an elderly woman</g, '>年长女性 (elderly woman)<'],
  [/>dark casual jacket</g, '>深色休闲夹克 (dark casual jacket)<'],
  [/>white linen shirt</g, '>白色亚麻衬衫 (white linen shirt)<'],
  [/>calm expression</g, '>平静的表情 (calm expression)<'],
  [/>gentle smile</g, '>轻微微笑 (gentle smile)<'],
  [/>looking slightly away</g, '>视线稍微看向镜头外 (looking slightly away)<'],
  [/>reading a book</g, '>正在阅读一本书 (reading a book)<'],

  // 6. Light Cards
  [/title: "Soft window light"/g, 'title: "柔和窗边光 (soft window light)"'],
  [/title: "Golden hour"/g, 'title: "黄金时刻 (golden hour)"'],
  [/title: "Overcast daylight"/g, 'title: "阴天自然光 (overcast daylight)"'],
  [/title: "Studio softbox"/g, 'title: "影棚柔光 (studio softbox)"'],
  [/title: "Backlighting"/g, 'title: "逆光 (backlighting)"'],
  [/title: "Neon lighting"/g, 'title: "霓虹灯光 (neon lighting)"'],

  // 7. Composition Cards
  [/title: "Close-up"/g, 'title: "特写 (close-up)"'],
  [/title: "Headshot"/g, 'title: "头肩人像 (headshot)"'],
  [/title: "Half-body"/g, 'title: "半身 (half-body)"'],
  [/title: "Full-body"/g, 'title: "全身 (full-body)"'],
  [/title: "Eye-level"/g, 'title: "平视 (eye-level)"'],
  [/title: "Low-angle"/g, 'title: "仰拍 (low-angle)"'],
  [/title: "High-angle"/g, 'title: "俯拍 (high-angle)"'],
  [/title: "Off-center"/g, 'title: "偏中心构图 (off-center composition)"'],

  // 8. Depth of Field
  [/title: "Shallow depth of field"/g, 'title: "浅景深 (shallow depth of field)"'],
  [/title: "Background bokeh"/g, 'title: "背景虚化 \/ 光斑 (background bokeh)"'],
  [/title: "Deep depth of field"/g, 'title: "深景深 (deep depth of field)"'],
  [/title: "Sharp background"/g, 'title: "背景清晰 (sharp background)"'],

  // 9. First Complete Example
  [/portrait of a young man standing beside a cafe window, soft morning light, natural skin texture, 85mm portrait photography, shallow depth of field, eye-level composition, realistic photography --ar 2:3/g, "一位年轻男子站在咖啡馆窗边，柔和的晨间自然光，自然真实的皮肤质感，85mm人像摄影观感，浅景深，平视构图，写实摄影风格 --ar 2:3"],
  [/>portrait of a young man</g, '>一位年轻男子<'],
  [/>standing beside a cafe window</g, '>站在咖啡馆窗边<'],
  [/>soft morning light</g, '>柔和的晨间自然光<'],
  [/>natural skin texture</g, '>自然真实的皮肤质感<'],
  [/>85mm portrait photography</g, '>85mm人像摄影观感<'],
  [/>shallow depth of field</g, '>浅景深<'],
  [/>eye-level composition</g, '>平视构图<'],
  [/>realistic photography</g, '>写实摄影风格<'],

  // 10. Background & Color List Items
  [/quiet cafe interior/g, "安静的咖啡馆内部 (quiet cafe interior)"],
  [/rainy city street/g, "雨天城市街道 (rainy city street)"],
  [/minimalist studio/g, "极简摄影棚 (minimalist studio)"],
  [/warm tones/g, "暖色调 (warm tones)"],
  [/cool tones/g, "冷色调 (cool tones)"],
  [/muted colors/g, "低饱和色彩 (muted colors)"],
  [/monochrome/g, "黑白 (monochrome)"],
];

for (let [pattern, replacement] of replacements) {
  c = c.replace(pattern, replacement);
}

fs.writeFileSync(path, c);
