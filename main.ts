import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const bio = "I only date people whose pets approve of me first — your goldfish already ghosted me, and your cat rated me two stars before I even said hi.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), bio, "utf8");
