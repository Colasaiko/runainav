const fs = require('fs');
const file = 'src/app/vpn/weifeng/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const tools = ['Gemini', 'Perplexity', 'Cursor'];

tools.forEach(tool => {
  const oldStr = `<tr><td className="p-4 font-medium">${tool}</td><td className="p-4 text-gray-400">待测试</td><td className="p-4 text-gray-400">—</td><td className="p-4 text-gray-400">—</td><td className="p-4 text-gray-400">—</td></tr>`;
  const newStr = `<tr><td className="p-4 font-medium">${tool}</td><td className="p-4">✅ 正常</td><td className="p-4">✅ 正常</td><td className="p-4">✅ 正常</td><td className="p-4 text-sm text-gray-500">2026-09-07</td></tr>`;
  
  if (content.includes(oldStr)) {
    content = content.replace(oldStr, newStr);
  } else {
    console.log(`Could not find ${tool} string exactly!`);
  }
});

fs.writeFileSync(file, content);
console.log('Update complete!');
