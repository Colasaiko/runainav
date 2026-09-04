const fs = require('fs');
const path = 'src/components/home/VPNUseCases.tsx';
let c = fs.readFileSync(path, 'utf8');
c = c.replace(/技术教程与学习资源、技术教程、/, "技术教程与学习资源、");
fs.writeFileSync(path, c);
