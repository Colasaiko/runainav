const fs = require('fs');
let c = fs.readFileSync('scripts/check-seo-lengths.js', 'utf8');

const script = `
// Check aiComparisons.ts
const aiComparisonsContent = fs.readFileSync('src/data/aiComparisons.ts', 'utf-8');
const aiComparisonsJs = ts.transpile(aiComparisonsContent, { module: ts.ModuleKind.CommonJS });
const aiComparisonsExports = {};
const aiComparisonsModule = { exports: aiComparisonsExports };
new Function('exports', 'module', aiComparisonsJs)(aiComparisonsExports, aiComparisonsModule);
const aiComparisons = aiComparisonsExports.aiComparisons || aiComparisonsModule.exports.aiComparisons;
let compareFoundCount = 0;
let compareValidatedCount = 0;
if (aiComparisons) {
  aiComparisons.forEach(comp => {
    compareFoundCount++;
    checkLength('Comparison: ' + comp.slug, 'Title', comp.title, 20, 30);
    checkLength('Comparison: ' + comp.slug, 'Description', comp.description, 70, 80);
    compareValidatedCount++;
    
    // Check data integrity
    if (!aiTools.find(t => t.slug === comp.toolA)) {
      console.error(\`[ERROR] Comparison \${comp.slug} - toolA \${comp.toolA} not found in aiTools\`);
      hasError = true;
    }
    if (!aiTools.find(t => t.slug === comp.toolB)) {
      console.error(\`[ERROR] Comparison \${comp.slug} - toolB \${comp.toolB} not found in aiTools\`);
      hasError = true;
    }
    if (comp.toolA === comp.toolB) {
      console.error(\`[ERROR] Comparison \${comp.slug} - toolA and toolB cannot be the same\`);
      hasError = true;
    }
  });
}

console.log(\`Found \${compareFoundCount} AI comparison records.\`);
console.log(\`Validated \${compareValidatedCount} AI comparison metadata records.\`);

`;

c = c.replace(/\/\/ 3\. Check specific static pages/, script + '// 3. Check specific static pages');

c = c.replace(/extractAndCheck\('\/vpn', 'src\/app\/vpn\/page\.tsx', 20, 30, 70, 80\);/, "extractAndCheck('/vpn', 'src/app/vpn/page.tsx', 20, 30, 70, 80);\nextractAndCheck('/compare', 'src/app/compare/page.tsx', 20, 30, 70, 80);");

fs.writeFileSync('scripts/check-seo-lengths.js', c);
