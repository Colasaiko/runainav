const fs = require('fs');
let c = fs.readFileSync('src/components/home/PopularAITools.tsx', 'utf8');
c = c.replace(/import \{ AITool \} from '@\/types\/ai';\n/, '');
fs.writeFileSync('src/components/home/PopularAITools.tsx', c);
