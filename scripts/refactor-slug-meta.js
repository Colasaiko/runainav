const fs = require('fs');

let c = fs.readFileSync('src/app/guides/[slug]/page.tsx', 'utf8');

const metadataBlockRegex = /export async function generateMetadata[^\{]+\{[\s\S]*?return \{[\s\S]*?^  \};\n\}/m;

const newMetadata = `import { constructMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = aiTools.find((t) => t.slug === slug);
  if (!tool) return {};
  
  return constructMetadata({
    title: tool.seoTitle,
    description: tool.seoDescription || tool.shortDescription,
    canonical: \`/guides/\${slug}/\`,
    type: 'article',
    modifiedTime: tool.lastUpdated,
  });
}`;

c = c.replace(metadataBlockRegex, newMetadata);

fs.writeFileSync('src/app/guides/[slug]/page.tsx', c);
console.log('Refactored guides/[slug] metadata');
