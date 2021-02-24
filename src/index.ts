import fs from 'fs/promises';
import yargs from 'yargs/yargs';
import Color from './color';
import identifyPalette from './identify-palette';
import swapPalette from './swap-palette';
import svgToPng from './svg-to-png';
import resizeSvg from './resize-svg';

const { argv } = yargs(process.argv.slice(2)).options({
  _: { type: 'string' },
  size: { type: 'number', default: 128 },
  count: { type: 'number', default: 100 },
  opacity: { type: 'number', default: 1.0 },
});

async function main(): Promise<void> {
  const inputPath = argv._[0];
  const outputPath = argv._[1].replace(/\.svg$/, '');
  const size = argv.size;
  const svg = await fs.readFile(inputPath, 'utf-8');
  const resizedSvg = resizeSvg(svg, size, size);
  const colors = identifyPalette(svg);
  await Promise.all(
    new Array(argv.count).fill(null).map(async (_, i) => {
      const colorMap = colors.reduce((map: { [color: string]: Color }, color) => {
        map[color] = Color.random(argv.opacity);
        return map;
      }, {});
      const outputPathFinal = outputPath + '_' + i + '.svg';
      const colorSwappedSvg = swapPalette(resizedSvg, colorMap);
      await fs.writeFile(outputPathFinal, colorSwappedSvg);
    }),
  );
}

main().catch(console.error);
