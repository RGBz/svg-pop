import fs from 'fs/promises';
import drawLogo from './draw-logo';

async function main(): Promise<void> {
  const path = process.argv[2] || 'logo.svg';
  const logo = drawLogo();
  await fs.writeFile(path, logo);
}

main().catch(console.error);
