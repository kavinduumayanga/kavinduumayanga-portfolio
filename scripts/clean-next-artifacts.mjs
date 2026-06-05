import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const mode = process.argv[2] ?? 'all';
const repoRoot = path.dirname(fileURLToPath(new URL('../package.json', import.meta.url)));

const targetsByMode = {
  all: ['.next', '.next-dev', '.next-prod'],
  dev: ['.next-dev'],
  prod: ['.next-prod'],
};

const targets = targetsByMode[mode];

if (!targets) {
  console.error(`Unsupported clean mode: ${mode}`);
  process.exit(1);
}

for (const target of targets) {
  fs.rmSync(path.join(repoRoot, target), { recursive: true, force: true });
}
