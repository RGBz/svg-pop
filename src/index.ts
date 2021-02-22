import fs from 'fs/promises';
import createSheet from './create-sheet';

async function main(): Promise<void> {
  const path = process.argv[2] || 'logos.html';
  const sheet = createSheet(153, 10);
  await fs.writeFile(path, sheet);
}

main().catch(console.error);
