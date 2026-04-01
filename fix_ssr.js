const fs = require('fs');

const files = [
  "01-obstacle-parting.tsx",
  "02-line-by-line-cascade.tsx",
  "03-fluid-container-morph.tsx",
  "04-word-gravity.tsx",
  "05-live-typewriter.tsx",
  "06-dragon-follower.tsx",
  "07-paragraph-breath.tsx",
  "08-highlight-beam.tsx",
  "09-scroll-reveal.tsx",
  "10-magnetic-word-pull.tsx"
];

for(let f of files) {
  let p = `./components/ui/pretext/${f}`;
  let code = fs.readFileSync(p, 'utf8');

  // Fix prepareWithSegments
  code = code.replace(
    /const prepared = useMemo\(\(\) => prepareWithSegments\(([^)]+)\), \[(.*?)\]\);/,
    `const prepared = useMemo(() => {\n    if (typeof window === "undefined") return null;\n    return prepareWithSegments($1);\n  }, [$2]);`
  );

  // Fix prepare
  code = code.replace(
    /const prepared = useMemo\(\(\) => prepare\(([^)]+)\), \[(.*?)\]\);/,
    `const prepared = useMemo(() => {\n    if (typeof window === "undefined") return null;\n    return prepare($1);\n  }, [$2]);`
  );

  // Fix layout usage safeguards:
  // Component 01
  code = code.replace(
    /if \(containerWidth === 0\) return { layoutLines, totalHeight: 0 };/,
    `if (!prepared || containerWidth === 0) return { layoutLines, totalHeight: 0 };`
  );
  
  // Components 02, 06, 08, 09, 10
  code = code.replace(
    /if \(!width\) return { lines: \[\], height: 0 };/g,
    `if (!prepared || !width) return { lines: [], height: 0 };`
  );

  // Component 03
  code = code.replace(
    /if \(containerWidth === 0\) return { lines: \[\], height: 0 };/,
    `if (!prepared || containerWidth === 0) return { lines: [], height: 0 };` // wait, 03 uses containerWidth inside layout??
  );
  
  // Component 04
  code = code.replace(
    /if \(!width\) return \[\];/,
    `if (!prepared || !width) return [];`
  );

  // Component 05
  code = code.replace(
    /if \(!width\) return { height: lineHeight, lineCount: 1 };/,
    `if (!prepared || !width) return { height: lineHeight, lineCount: 1 };`
  );

  // Component 07
  code = code.replace(
    /if \(currentWidth === 0\) return { lines: \[\], height: 0 };/,
    `if (!prepared || currentWidth === 0) return { lines: [], height: 0 };`
  );

  fs.writeFileSync(p, code);
}

// Write the codes.json again
const codes = {};
for (const f of files) {
  codes[f.replace(".tsx", "")] = fs.readFileSync(`./components/ui/pretext/${f}`, "utf8");
}
fs.writeFileSync(`./components/ui/pretext/codes.json`, JSON.stringify(codes, null, 2));

console.log("Fixes rendered and codes updated!");
