// The Internet in One Word — make.fun bounty entry.
//
// The whole internet, in a single word: the endless feed you never reach
// the bottom of. This program writes that one word to /output/entry.txt
// and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "infinitescroll";
const OUTPUT_PATH = "/output/entry.txt";

// Self-check against the kit's gate before writing: UTF-8 text of
// 1 to 30 characters, not only white space, a single word with no
// spaces, newlines or extra text of any kind.
if (!/^[^\s]{1,30}$/.test(WORD)) {
  throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, WORD, "utf8");
console.log(`wrote ${WORD.length} characters to ${OUTPUT_PATH}`);
