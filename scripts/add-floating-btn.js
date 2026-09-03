const fs = require('fs');
let c = fs.readFileSync('src/app/vpn/weifeng/page.tsx', 'utf8');

c = c.replace(
  "import { ExternalLink, Check, Info, AlertTriangle, Monitor, Smartphone, HelpCircle, Zap, ArrowRight } from 'lucide-react';",
  "import { ExternalLink, Check, Info, AlertTriangle, Monitor, Smartphone, HelpCircle, Zap, ArrowRight } from 'lucide-react';\nimport FloatingBuyButton from '@/components/vpn/FloatingBuyButton';"
);

c = c.replace(
  "<div className=\"min-h-screen bg-gray-50 flex flex-col\">\n      <Header />",
  "<div className=\"min-h-screen bg-gray-50 flex flex-col\">\n      <Header />\n      <FloatingBuyButton url={AFFILIATE_URL} brandName=\"微风网络\" />"
);

fs.writeFileSync('src/app/vpn/weifeng/page.tsx', c);
console.log('Added FloatingBuyButton');
