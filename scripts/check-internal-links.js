const fs = require('fs');
const path = require('path');

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (!filePath.includes('node_modules') && !filePath.includes('.git') && !filePath.includes('.next')) {
        getAllFiles(filePath, fileList);
      }
    } else {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

const allFiles = getAllFiles(path.join(process.cwd(), 'src'));
let comingSoonCount = 0;

allFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const count = (content.match(/\/coming-soon/g) || []).length;
  if (count > 0 && !file.includes('coming-soon\\page.tsx') && !file.includes('coming-soon/page.tsx')) {
    console.log(`Found /coming-soon in ${file}: ${count} times`);
    comingSoonCount += count;
  }
});

console.log(`Total /coming-soon references (excluding the route itself): ${comingSoonCount}`);
