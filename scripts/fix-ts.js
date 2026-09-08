const fs = require('fs');

const dirs = [
  'chatgpt-jichang',
  'jichang-recommendation-2026',
  'stable-jichang',
  'cheap-jichang',
  'value-jichang',
  'clash-jichang',
  'clash-verge-jichang',
  'shadowrocket-jichang',
  'v2rayn-jichang',
  'no-expiry-jichang'
];

dirs.forEach(d => {
  const p = 'src/app/guides/' + d + '/page.tsx';
  let c = fs.readFileSync(p, 'utf8');
  
  c = c.replace(/title: '/g, "navLabel: '");
  c = c.replace(/title=".*?" toc=\{tableOfContents\}/g, 'sections={tableOfContents}');
  c = c.replace(/fallbackPath/g, 'fallbackHref');
  
  // also fix constructMetadata where I used title (wait, I shouldn't replace the title property in constructMetadata object)
  c = c.replace(/navLabel: '(.*?)',\n  description:/, "title: '$1',\n  description:");

  fs.writeFileSync(p, c);
});
console.log('Fixed TS issues');
