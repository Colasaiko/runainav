const fs = require('fs');

const files = [
  'src/app/guides/chatgpt-what-can-it-do/page.tsx', 
  'src/app/guides/chatgpt-browser-guide/page.tsx', 
  'src/app/guides/suno-edit-lyrics/page.tsx'
];

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/<ArticleStickyBar title="[^"]+"/, '<ArticleStickyBar');
  fs.writeFileSync(f, c);
});
