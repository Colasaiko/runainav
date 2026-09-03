const fs = require('fs');

function replaceFile(path, oldText, newText) {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(oldText, newText);
  fs.writeFileSync(path, content);
}

replaceFile('src/components/home/FeaturedGuides.tsx', /href="\/ai\/chatgpt"/g, 'href="/guides/chatgpt"');
replaceFile('src/components/home/FeaturedGuides.tsx', /href=\{\`\/ai\/\$\{guide\.slug\}\`\}/g, 'href={`/guides/${guide.slug}`}');

replaceFile('src/components/home/Hero.tsx', /href="\/ai\/chatgpt"/g, 'href="/guides/chatgpt"');
replaceFile('src/components/home/Hero.tsx', /href="\/ai\/midjourney"/g, 'href="/guides/midjourney"');
replaceFile('src/components/home/Hero.tsx', /href="\/ai\/claude"/g, 'href="/guides/claude"');

replaceFile('src/components/home/PopularAITools.tsx', /href=\{\`\/ai\/\$\{tool\.id\}\`\}/g, 'href={`/guides/${tool.id}`}');

console.log('Fixed home components');
