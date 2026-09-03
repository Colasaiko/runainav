const fs = require('fs');
const path = require('path');

const renames = [];
for (let i = 1; i <= 6; i++) renames.push([`weifeng/weifeng-windows-guide-0${i}.png`, `tutorials/tutorial-windows-0${i}.png`]);
for (let i = 1; i <= 4; i++) renames.push([`weifeng/weifeng-mac-guide-0${i}.png`, `tutorials/tutorial-mac-0${i}.png`]);
for (let i = 1; i <= 4; i++) renames.push([`weifeng/weifeng-android-guide-0${i}.png`, `tutorials/tutorial-android-0${i}.png`]);
for (let i = 1; i <= 5; i++) renames.push([`weifeng/weifeng-ios-guide-0${i}.png`, `tutorials/tutorial-ios-0${i}.png`]);

let success = true;
renames.forEach(([src, dst]) => {
  try {
    fs.renameSync(path.join('public/images', src), path.join('public/images', dst));
    console.log(`Renamed: ${src} -> ${dst}`);
  } catch (e) {
    console.error(`Error renaming ${src}:`, e.message);
    success = false;
  }
});

if(success) console.log('All renamed successfully.');
