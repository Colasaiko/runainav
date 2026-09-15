const fs = require('fs');
let c = fs.readFileSync('src/data/aiTools.ts', 'utf8');
c = c.replace(/officialUrl: string;\\n  logo\?: string;\\n  logoSource\?: string;/g, 'officialUrl: string;\n  logo?: string;\n  logoSource?: string;');
fs.writeFileSync('src/data/aiTools.ts', c);
