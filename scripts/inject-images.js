const fs = require('fs');
const path = 'src/app/guides/midjourney-realistic-portrait/page.tsx';
let c = fs.readFileSync(path, 'utf8');

c = c.replace(/title: "1\. Soft Window Portrait \(自然窗边光\)",/g, 'image: "/images/midjourney/midjourney-portrait-window.jpg",\n                  title: "1. Soft Window Portrait (自然窗边光)",');
c = c.replace(/title: "2\. City Cinematic Portrait \(街头电影感\)",/g, 'image: "/images/midjourney/midjourney-portrait-city.jpg",\n                  title: "2. City Cinematic Portrait (街头电影感)",');
c = c.replace(/title: "3\. Professional Profile \(专业工作照\)",/g, 'image: "/images/midjourney/midjourney-portrait-professional.jpg",\n                  title: "3. Professional Profile (专业工作照)",');
c = c.replace(/title: "4\. Black and White Portrait \(黑白人像\)",/g, 'image: "/images/midjourney/midjourney-portrait-bw.jpg",\n                  title: "4. Black and White Portrait (黑白人像)",');
c = c.replace(/title: "5\. Golden Hour Outdoor \(黄金时刻户外\)",/g, 'image: "/images/midjourney/midjourney-portrait-golden-hour.jpg",\n                  title: "5. Golden Hour Outdoor (黄金时刻户外)",');
c = c.replace(/title: "6\. Lifestyle Cafe \(咖啡馆生活感\)",/g, 'image: "/images/midjourney/midjourney-portrait-cafe.jpg",\n                  title: "6. Lifestyle Cafe (咖啡馆生活感)",');
c = c.replace(/title: "7\. Minimalist Studio \(极简影棚照\)",/g, 'image: "/images/midjourney/midjourney-portrait-studio.jpg",\n                  title: "7. Minimalist Studio (极简影棚照)",');
c = c.replace(/title: "8\. Neon Night Portrait \(夜景霓虹\)",/g, 'image: "/images/midjourney/midjourney-portrait-neon.jpg",\n                  title: "8. Neon Night Portrait (夜景霓虹)",');

// Remove the `] as any[]).map` cast completely
c = c.replace(/} \] as any\[\]\)\.map/g, '} ].map');

fs.writeFileSync(path, c);
