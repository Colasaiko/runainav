const fs = require('fs');

let c = fs.readFileSync('src/app/vpn/weifeng/page.tsx', 'utf8');

if (!c.includes('ZoomableImage')) {
  c = c.replace(/import Image from 'next\/image';/, "import Image from 'next/image';\nimport ZoomableImage from '@/components/ui/ZoomableImage';");
}

// Replace node status image
const nodeFigure = /<figure className="mb-6 rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">[\s\S]*?<Image src="\/images\/weifeng\/weifeng-node-status\.png" alt="([^"]+)" width=\{800\} height=\{450\} className="w-full h-auto" \/>[\s\S]*?<figcaption className="p-3 text-center text-xs text-gray-500 border-t border-gray-100 bg-gray-50">([\s\S]*?)<\/figcaption>[\s\S]*?<\/figure>/;
c = c.replace(nodeFigure, (match, alt, caption) => {
  return `<ZoomableImage 
                  src="/images/weifeng/weifeng-node-status.png" 
                  alt="${alt}" 
                  width={800} 
                  height={450} 
                  caption="${caption.trim().replace(/\n\s*/g, ' ')}" 
                />`;
});

// Replace speed test image
const speedFigure = /<figure className="mb-6 rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">[\s\S]*?<Image src="\/images\/weifeng\/weifeng-speed-test-2026-08\.png" alt="([^"]+)" width=\{800\} height=\{450\} className="w-full h-auto" \/>[\s\S]*?<figcaption className="p-3 text-center text-xs text-gray-500 border-t border-gray-100 bg-gray-50">([\s\S]*?)<\/figcaption>[\s\S]*?<\/figure>/;
c = c.replace(speedFigure, (match, alt, caption) => {
  return `<ZoomableImage 
                  src="/images/weifeng/weifeng-speed-test-2026-08.png" 
                  alt="${alt}" 
                  width={800} 
                  height={450} 
                  caption="${caption.trim().replace(/\n\s*/g, ' ')}" 
                />`;
});

// Replace privacy test image
const privacyFigure = /<figure className="mb-6 rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">[\s\S]*?<Image src="\/images\/weifeng\/weifeng-privacy-test-2026-08\.png" alt="([^"]+)" width=\{800\} height=\{450\} className="w-full h-auto" \/>[\s\S]*?<figcaption className="p-3 text-center text-xs text-gray-500 border-t border-gray-100 bg-gray-50">([\s\S]*?)<\/figcaption>[\s\S]*?<\/figure>/;
c = c.replace(privacyFigure, (match, alt, caption) => {
  return `<ZoomableImage 
                  src="/images/weifeng/weifeng-privacy-test-2026-08.png" 
                  alt="${alt}" 
                  width={800} 
                  height={450} 
                  caption="${caption.trim().replace(/\n\s*/g, ' ')}" 
                />`;
});

fs.writeFileSync('src/app/vpn/weifeng/page.tsx', c);
console.log('Fixed weifeng images');
