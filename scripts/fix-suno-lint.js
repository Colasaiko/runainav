const fs = require('fs');
const path = 'src/app/guides/suno-chinese-song-tutorial/page.tsx';
let c = fs.readFileSync(path, 'utf8');

c = c.replace(
  /import { Info, Check, X, CheckSquare, Sparkles, FileText, Music, Settings, Sliders, PlayCircle, Scale, MessageSquare, Mic2 } from "lucide-react";/,
  'import { Info, Check, X, CheckSquare, Sparkles, FileText, Music, Settings, Sliders, PlayCircle, Scale, MessageSquare, Mic2, ListChecks, LayoutTemplate } from "lucide-react";'
);

c = c.replace(
  /import TutorialImage from '@\/components\/ui\/TutorialImage';\n/,
  ''
);

fs.writeFileSync(path, c);
