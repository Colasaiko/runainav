const fs = require('fs');
const file = 'src/app/vpn/weifeng/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /"logo":\s*\{\s*"@type":\s*"ImageObject",\s*"url":\s*"https:\/\/runainav\.com\/logo\.png"\s*\}/;

content = content.replace(regex, '');
// Since it was the last item, we need to clean up the trailing comma in "name": "RunAI", if it exists.
content = content.replace(/"name":\s*"RunAI",\s*\n\s*\}/, '"name": "RunAI"\n    }');

fs.writeFileSync(file, content);
console.log('Removed logo from Schema!');
