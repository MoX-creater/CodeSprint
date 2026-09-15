const fs = require("fs");
const path = require("path");
const { out, resolveAll, serialize } = require("./generate-challenges.cjs");

// Loading these triggers all their add() calls, populating `out`.
require("./specs-basics-1.cjs");
require("./specs-basics-2.cjs");
require("./specs-basics-3.cjs");
require("./specs-basics-4.cjs");
require("./specs-intermediate-1.cjs");
require("./specs-intermediate-2.cjs");
require("./specs-intermediate-3.cjs");
require("./specs-dom.cjs");
require("./specs-dom-2.cjs");
require("./specs-dom-3.cjs");
require("./specs-practice.cjs");
require("./specs-practice-2.cjs");
require("./specs-wave3-misc.cjs");

async function main() {
  await resolveAll(out);

  // ---- sanity checks ----
  const existingSrc = fs.readFileSync(path.join(__dirname, "../src/data/challenges.js"), "utf8");
  const existingIds = new Set([...existingSrc.matchAll(/id: "([a-z0-9-]+)"/g)].map((m) => m[1]));

  const newIds = new Set();
  let totalNew = 0;
  const report = [];
  for (const key of Object.keys(out)) {
    for (const ch of out[key]) {
      totalNew++;
      if (existingIds.has(ch.id)) throw new Error(`ID COLLISION with existing challenge: "${ch.id}" (in ${key})`);
      if (newIds.has(ch.id)) throw new Error(`DUPLICATE new ID: "${ch.id}" (in ${key})`);
      newIds.add(ch.id);
      if (!ch.tests || ch.tests.length === 0) throw new Error(`Challenge "${ch.id}" has zero tests`);
      report.push(`${key} :: ${ch.id} [${ch.difficulty}]`);
    }
  }

  console.log(`Generated ${totalNew} new challenges across ${Object.keys(out).length} subcategories.`);
  console.log(report.join("\n"));

  // ---- serialize ----
  const keys = Object.keys(out);
  const body = keys
    .map((key) => {
      const arr = out[key];
      const items = arr.map((ch) => "    " + serialize(ch, 2).replace(/\n/g, "\n    "));
      return `  ${JSON.stringify(key)}: [\n${items.join(",\n")}\n  ]`;
    })
    .join(",\n");

  const fileContents = `// AUTO-GENERATED extra challenges, merged onto the base set in challenges.js.
// Regenerate with: node scripts/build.cjs (requires devDependency "jsdom").
// Every test case here was computed by actually running a reference
// solution (see scripts/specs-*.cjs), not hand-calculated, so the expected
// values are guaranteed correct for the reference implementation.

export const moreChallenges = {
${body}
};
`;

  const outPath = path.join(__dirname, "../src/data/moreChallenges.js");
  fs.writeFileSync(outPath, fileContents, "utf8");
  console.log(`\nWrote ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
