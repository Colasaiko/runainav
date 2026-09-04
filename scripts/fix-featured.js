const fs = require('fs');
const path = 'src/components/home/FeaturedGuides.tsx';
let c = fs.readFileSync(path, 'utf8');
c = c.replace(/href="\/coming-soon"/, 'href="/guides"');
fs.writeFileSync(path, c);
