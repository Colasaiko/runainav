const fs = require('fs');
const path = 'src/app/guides/midjourney-realistic-portrait/page.tsx';
let c = fs.readFileSync(path, 'utf8');

c = c.replace(/title: "1. Soft Window Portrait \\(自然窗边光\\)",\s*prompt: "close-up portrait/g, 'image: "/images/midjourney/midjourney-portrait-window.jpg",\n                  title: "1. Soft Window Portrait (自然窗边光)",\n                  prompt: "close-up portrait');

c = c.replace(/title: "2. City Cinematic Portrait \\(街头电影感\\)",\s*prompt: "half-body portrait/g, 'image: "/images/midjourney/midjourney-portrait-city.jpg",\n                  title: "2. City Cinematic Portrait (街头电影感)",\n                  prompt: "half-body portrait');

c = c.replace(/title: "3. Professional Profile \\(专业工作照\\)",\s*prompt: "headshot portrait/g, 'image: "/images/midjourney/midjourney-portrait-professional.jpg",\n                  title: "3. Professional Profile (专业工作照)",\n                  prompt: "headshot portrait');

c = c.replace(/title: "4. Black and White Portrait \\(黑白人像\\)",\s*prompt: "dramatic black/g, 'image: "/images/midjourney/midjourney-portrait-bw.jpg",\n                  title: "4. Black and White Portrait (黑白人像)",\n                  prompt: "dramatic black');

c = c.replace(/title: "5. Golden Hour Outdoor \\(黄金时刻户外\\)",\s*prompt: "full-body portrait/g, 'image: "/images/midjourney/midjourney-portrait-golden-hour.jpg",\n                  title: "5. Golden Hour Outdoor (黄金时刻户外)",\n                  prompt: "full-body portrait');

c = c.replace(/title: "6. Lifestyle Cafe \\(咖啡馆生活感\\)",\s*prompt: "candid lifestyle/g, 'image: "/images/midjourney/midjourney-portrait-cafe.jpg",\n                  title: "6. Lifestyle Cafe (咖啡馆生活感)",\n                  prompt: "candid lifestyle');

c = c.replace(/title: "7. Minimalist Studio \\(极简影棚照\\)",\s*prompt: "fashion portrait/g, 'image: "/images/midjourney/midjourney-portrait-studio.jpg",\n                  title: "7. Minimalist Studio (极简影棚照)",\n                  prompt: "fashion portrait');

c = c.replace(/title: "8. Neon Night Portrait \\(夜景霓虹\\)",\s*prompt: "close-up portrait/g, 'image: "/images/midjourney/midjourney-portrait-neon.jpg",\n                  title: "8. Neon Night Portrait (夜景霓虹)",\n                  prompt: "close-up portrait');


// Add TutorialImage into the render
c = c.replace(/<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600 bg-gray-50\/50 p-4 rounded-xl">/, `{tpl.image && <TutorialImage src={tpl.image} alt={tpl.title} />}\n                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600 bg-gray-50/50 p-4 rounded-xl mt-6">`);

fs.writeFileSync(path, c);
