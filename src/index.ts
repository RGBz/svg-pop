import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import yargs from 'yargs/yargs';
import Color from './color';
import identifyPalette from './identify-palette';
import swapPalette from './swap-palette';
import resizeSvg from './resize-svg';
import Palette from './palette';

const { argv } = yargs(process.argv.slice(2)).options({
  _: { type: 'string' },
  size: { type: 'number', default: 128 },
  count: { type: 'number', default: 100 },
  opacity: { type: 'number', default: 1.0 },
});

async function main(): Promise<void> {
  const outputPath = argv._[1];
  const outputExtension = path.extname(outputPath);
  const outputBasename = outputPath.substring(0, outputPath.length - outputExtension.length);
  const inputPath = argv._[0];
  const size = argv.size;
  const svg = await fs.readFile(inputPath, 'utf-8');
  const resizedSvg = resizeSvg(svg, size, size);
  const colors = identifyPalette(svg);
  await Promise.all(
    new Array(argv.count).fill(null).map(async (_, i) => {
      const palette = Palette.random(colors.length);
      const colorMap = colors.reduce((map: { [color: string]: Color }, color, i) => {
        map[color] = palette.colors[i];
        return map;
      }, {});
      const outputPathFinal = outputBasename + '_' + i + outputExtension;
      const colorSwappedSvg = swapPalette(resizedSvg, colorMap);
      const image = sharp(Buffer.from(colorSwappedSvg, 'utf8'));
      if (size) {
        image.resize(size);
      }
      await image.toFile(outputPathFinal);
    }),
  );
}

main().catch(console.error);
