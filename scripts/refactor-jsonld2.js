const fs = require('fs');

function replaceJsonLd(filePath) {
  let c = fs.readFileSync(filePath, 'utf8');
  if (c.includes('JsonLd')) return;

  if (filePath.includes('guides')) {
    c = c.replace("import { Metadata } from 'next';", "import { Metadata } from 'next';\nimport JsonLd from '@/components/seo/JsonLd';");
  } else {
    c = c.replace("import FloatingBuyButton from '@/components/vpn/FloatingBuyButton';", "import FloatingBuyButton from '@/components/vpn/FloatingBuyButton';\nimport JsonLd from '@/components/seo/JsonLd';");
  }

  // Find and replace the specific strings
  c = c.replace('<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />', '<JsonLd data={jsonLd} />');
  c = c.replace('<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />', '<JsonLd data={breadcrumbJsonLd} />');
  c = c.replace('{faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}', '{faqJsonLd && <JsonLd data={faqJsonLd} />}');
  c = c.replace('<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />', '<JsonLd data={faqJsonLd} />');
  
  fs.writeFileSync(filePath, c);
  console.log('Fixed ' + filePath);
}

replaceJsonLd('src/app/guides/[slug]/page.tsx');
replaceJsonLd('src/app/vpn/weifeng/page.tsx');
