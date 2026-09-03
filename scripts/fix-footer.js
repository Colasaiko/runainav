const fs = require('fs');
let c = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');

c = c.replace(/"\/ai\/chatgpt"/g, '"/guides/chatgpt"');
c = c.replace(/"\/ai\/claude"/g, '"/guides/claude"');
c = c.replace(/"\/ai\/gemini"/g, '"/guides/gemini"');
c = c.replace(/<Link href="\/coming-soon" className="hover:text-gray-900">AI教程<\/Link>/g, '<Link href="/guides" className="hover:text-gray-900">AI教程</Link>');

fs.writeFileSync('src/components/layout/Footer.tsx', c);
console.log('Fixed Footer');
