const fs = require('fs');

const files = [
  'src/app/guides/chatgpt-what-can-it-do/page.tsx', 
  'src/app/guides/chatgpt-browser-guide/page.tsx', 
  'src/app/guides/suno-edit-lyrics/page.tsx'
];

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  if (!c.includes('breadcrumbJsonLd')) {
    const titleMatch = c.match(/title:\s*'([^']+)'/);
    const title = titleMatch ? titleMatch[1] : '';
    const breadcrumbLd = `const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://runainav.com/" },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://runainav.com/guides" },
      { "@type": "ListItem", "position": 3, "name": "${title.split('？')[0]}", "item": "https://runainav.com/${f.replace('src/app/', '').replace('/page.tsx', '')}" }
    ]
  };`;
    c = c.replace('  return (', `  ${breadcrumbLd}\n\n  return (`);
    c = c.replace('<Header />', '<Script id="breadcrumb-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />\n      <Header />');
    fs.writeFileSync(f, c);
  }
});
console.log("Added Breadcrumbs");
