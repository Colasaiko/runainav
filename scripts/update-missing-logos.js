const fs = require('fs');

const fileMapping = {
  lingmao: '灵猫.png',
  shanyue: '闪跃.png'
};

let content = fs.readFileSync('src/data/vpnBrands.ts', 'utf8');

// Add logo to each missing brand object
for (const [id, filename] of Object.entries(fileMapping)) {
  const regex = new RegExp(`(id:\\s*"${id}",\\s*slug:\\s*"[^"]+",)`);
  if (content.match(regex)) {
    // Make sure we don't duplicate logo property if it somehow already exists
    if (!content.includes(`logo: "/images/vpn/${filename}"`)) {
      content = content.replace(regex, `$1\n    logo: "/images/vpn/${filename}",`);
    }
  }
}

fs.writeFileSync('src/data/vpnBrands.ts', content);
console.log('Updated vpnBrands.ts with missing logos!');
