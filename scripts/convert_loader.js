import fs from 'fs';
import path from 'path';

const SRC_DIR = './src/components';

if (!fs.existsSync(SRC_DIR)) {
  fs.mkdirSync(SRC_DIR, { recursive: true });
}

const maps = [
  { url: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ6Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpZCiVodG1sXzhlM2ExZWE5YTE5MTQwNjE5ZDRiYjVlNGRmMjBkNTQyEgsSBxCJms7sqwYYAZIBIgoKcHJvamVjdF9pZBIUQhI4NjA5NTcwMTQwOTI1MTM0NTU&filename=&opi=89354086", file: "GlobalLoader.jsx", comp: "GlobalLoader" }
];

async function convert() {
  for (const item of maps) {
    try {
      console.log(`Downloading ${item.file}...`);
      const response = await fetch(item.url);
      const html = await response.text();
      
      const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      if (!bodyMatch) {
         console.error("Missing body tag in " + item.file);
         continue;
      }
      
      let jsx = bodyMatch[1];
      
      jsx = jsx.replace(/class=/g, "className=");
      jsx = jsx.replace(/for=/g, "htmlFor=");
      jsx = jsx.replace(/<!--[\s\S]*?-->/g, "");
      jsx = jsx.replace(/<input([^>]*?)(?<!\/)>/g, "<input$1 />");
      jsx = jsx.replace(/<img([^>]*?)(?<!\/)>/g, "<img$1 />");
      jsx = jsx.replace(/<hr([^>]*?)(?<!\/)>/g, "<hr$1 />");
      jsx = jsx.replace(/<br([^>]*?)(?<!\/)>/g, "<br$1 />");
      jsx = jsx.replace(/viewBox=/g, "viewBox=");
      jsx = jsx.replace(/stroke-width=/g, "strokeWidth=");
      jsx = jsx.replace(/fill-rule=/g, "fillRule=");
      jsx = jsx.replace(/clip-rule=/g, "clipRule=");
      jsx = jsx.replace(/stroke-linecap=/g, "strokeLinecap=");
      jsx = jsx.replace(/stroke-linejoin=/g, "strokeLinejoin=");
      jsx = jsx.replace(/style="background-image:\s*url\('([^']+)'\)"/g, "style={{ backgroundImage: `url('$1')` }}");
      jsx = jsx.replace(/style="([^"]+)"/g, "");

      const COMPONENT_TEMPLATE = `import React, { useState, useEffect } from 'react';\n\nexport const ${item.comp} = () => {\n  const [isLoading, setIsLoading] = useState(true);\n\n  useEffect(() => {\n    const handleLoad = () => setIsLoading(false);\n    \n    if (document.readyState === 'complete') {\n      const timer = setTimeout(() => setIsLoading(false), 800);\n      return () => clearTimeout(timer);\n    } else {\n      window.addEventListener('load', handleLoad);\n      return () => window.removeEventListener('load', handleLoad);\n    }\n  }, []);\n\n  if (!isLoading) return null;\n\n  return (\n    <div className="fixed inset-0 z-[9999] bg-white">\n      ${jsx}\n    </div>\n  );\n};\n`;

      fs.writeFileSync(path.join(SRC_DIR, item.file), COMPONENT_TEMPLATE.trim());
      console.log(`Successfully converted ${item.file}`);
    } catch(e) {
      console.error(e);
    }
  }
}

convert();
