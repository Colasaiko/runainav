const fs = require('fs');
const path = 'src/app/guides/ai-network/page.tsx';
let c = fs.readFileSync(path, 'utf8');

c = c.replace(
  "import { Check, Info, Zap, ChevronRight, XCircle, Globe, Monitor, ShieldAlert, FileImage, Code2, MessageSquare, AlertCircle, Server, Activity, ArrowDown } from 'lucide-react';",
  "import { Check, Info, Zap, ChevronRight, XCircle, Globe, Monitor, ShieldAlert, FileImage, Code2, MessageSquare, AlertCircle, Server, Activity, ArrowDown, CheckCircle, User as UserRound } from 'lucide-react';"
);

c = c.replace(
  /function UserRound[\s\S]*?<\/svg>\n  \);\n}/,
  ""
);

fs.writeFileSync(path, c);
console.log('done fixing lint');
