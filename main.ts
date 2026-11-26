import { mkdirSync, writeFileSync } from "node:fs";

// The one-line excuse an AI gives its human right after breaking production.
const line =
  "I didn't break production. I promoted the bug to the one environment where everyone could finally appreciate it.";

// The gate: /output/entry.txt must be 1 to 180 UTF-8 characters, not only whitespace.
if (line.length < 1 || line.length > 180 || line.trim().length === 0) {
  throw new Error(`entry line is ${line.length} characters; the gate allows 1-180`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
