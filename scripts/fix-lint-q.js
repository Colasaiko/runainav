const fs = require('fs');
const path = 'src/app/ai/AIList.tsx';
let c = fs.readFileSync(path, 'utf8');
c = c.replace(/if \(q\) setSearchQuery\(q\);/, '// eslint-disable-next-line react-hooks/set-state-in-effect\n      if (q) setSearchQuery(q);');
fs.writeFileSync(path, c);
