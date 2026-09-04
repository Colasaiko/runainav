const fs = require('fs');

let c1 = fs.readFileSync('src/components/home/FeaturedGuides.tsx', 'utf8');
c1 = c1.replace(/\/coming-soon/g, '/guides');
fs.writeFileSync('src/components/home/FeaturedGuides.tsx', c1);

let c2 = fs.readFileSync('src/components/vpn/VPNList.tsx', 'utf8');
c2 = c2.replace(/\/coming-soon/g, '/vpn');
fs.writeFileSync('src/components/vpn/VPNList.tsx', c2);

