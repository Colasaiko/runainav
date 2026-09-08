const fs = require('fs');

const fileMapping = {
  weifeng: '微风.png',
  dageyun: '大哥云.png',
  feimao: '飞猫.png',
  shanshui: '山水云.jpg',
  firefly: 'Firefly.png',
  wuyou: '无忧.png',
  kuajie: '跨界.png',
  sogo: 'sogo.png',
  muguang: '暮光加速.jpg',
  xingdaomeng: '星梦岛.png',
  weitu: '唯兔云.png',
  guangsu: '光速云.png',
  u1s1: 'U1S1.jpg',
  jilian: '极连云.png',
  guangnian: '光年梯.jpg',
  yifan: '一翻云.png',
  ermao: '二猫云.png',
  edge: '边缘节点.png',
  kexin: '可信云.png',
  sujie: '速界机场.png',
  kuaili: '快狸.png',
  flyv: '飞V.png',
  tiziyun: '梯子云.png',
  wavenet: 'wavenet.jpg',
  lingdong: '灵动云.png',
  bitznet: 'bitznet.png'
};

let content = fs.readFileSync('src/data/vpnBrands.ts', 'utf8');

// 1. Add logo?: string; to VPNBrand interface
if (!content.includes('logo?: string;')) {
  content = content.replace(/id: string;/, 'id: string;\n  logo?: string;');
}

// 2. Add logo to each brand object
for (const [id, filename] of Object.entries(fileMapping)) {
  const regex = new RegExp(`(id:\\s*"${id}",\\s*slug:\\s*"[^"]+",)`);
  if (content.match(regex)) {
    content = content.replace(regex, `$1\n    logo: "/images/vpn/${filename}",`);
  }
}

fs.writeFileSync('src/data/vpnBrands.ts', content);
console.log('Updated vpnBrands.ts with logos!');
