const fs = require('fs');
let content = fs.readFileSync('scripts/check-seo-lengths.js', 'utf8');

content = content.replace(
  /if \(type === 'network'\) {/,
  "if (type === 'network' || type === 'subscription') {"
);

content = content.replace(
  /extractAndCheck\('\/vpn', 'src\/app\/vpn\/page.tsx', 20, 30, 70, 80\);/,
  "extractAndCheck('/vpn', 'src/app/vpn/page.tsx', 20, 30, 70, 80);\nextractAndCheck('/subscriptions', 'src/app/subscriptions/page.tsx', 20, 30, 70, 80);"
);

fs.writeFileSync('scripts/check-seo-lengths.js', content);
console.log('Updated SEO check script');
