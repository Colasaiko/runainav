const fs = require('fs');
const files = [
  { path: 'src/app/guides/[slug]/page.tsx', fallback: '/guides' },
  { path: 'src/app/guides/cursor-build-blog/page.tsx', fallback: '/guides' },
  { path: 'src/app/guides/ai-network/page.tsx', fallback: '/guides' },
  { path: 'src/app/vpn/weifeng/page.tsx', fallback: '/vpn' }
];

files.forEach(({ path, fallback }) => {
  let content = fs.readFileSync(path, 'utf8');
  if (!content.includes('FloatingBackButton')) {
    content = content.replace(
      /import ArticleStickyBar from '@\/components\/navigation\/ArticleStickyBar';/,
      `import ArticleStickyBar from '@/components/navigation/ArticleStickyBar';\nimport FloatingBackButton from '@/components/navigation/FloatingBackButton';`
    );
    // Find <ArticleStickyBar ... /> and append <FloatingBackButton ... /> after it
    content = content.replace(
      /(<ArticleStickyBar[^>]*\/>)/,
      `$1\n      <FloatingBackButton fallbackHref="${fallback}" />`
    );
    fs.writeFileSync(path, content);
    console.log(`Updated ${path}`);
  }
});
