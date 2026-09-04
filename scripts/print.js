const fs = require('fs');
const c = fs.readFileSync('src/app/ai/AIList.tsx', 'utf8');
const i = c.indexOf('id="all-tools"');
if (i !== -1) {
  console.log(c.substring(i - 200, i + 800));
}
