const fs = require('fs');
const path = 'src/app/guides/midjourney-realistic-portrait/page.tsx';
let c = fs.readFileSync(path, 'utf8');

// Fix SECTIONS
c = c.replace(
  /const SECTIONS = \[([^\]]+)\];/m,
  (match, p1) => {
    return `const SECTIONS = [\n${p1.replace(/title:/g, 'navLabel:')}\n];`;
  }
);

// Fix fallbackUrl
c = c.replace(/fallbackUrl="\/guides"/g, 'fallbackHref="/guides"');

// Fix type error for templates
c = c.replace(/\]\.map\(\(tpl, idx\)/g, ' as any].map((tpl, idx)');

fs.writeFileSync(path, c);
