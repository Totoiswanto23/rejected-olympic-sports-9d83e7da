// Rejected Olympic Sports — make.fun bounty
// u-motasimfuad-rejected-olympic-sports-9d83e7da
// One funny single-line sport the Olympics rejected.
// The program writes that single line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Men's 100m Password Reset: athletes sprint to a laptop, answer their own security questions, and the first to remember their childhood pet wins gold.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${[...ENTRY].length} chars to /output/entry.txt`);
