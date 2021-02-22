import yargs from 'yargs/yargs';
import drawLogo from './draw-logo';
import svgToPng from './svg-to-png';

const { argv } = yargs(process.argv.slice(2)).options({
  _: { type: 'string' },
  size: { type: 'number', default: 128 },
  count: { type: 'number', default: 100 },
});

async function main(): Promise<void> {
  const outputPath = (argv._[0] || 'output/logo.png').replace(/\.png$/, '');
  const size = argv.size;
  await Promise.all(
    new Array(argv.count).fill(null).map(async (_, i) => {
      const svg = drawLogo({ size });
      await svgToPng(svg, outputPath + '_' + i + '.png', size);
    }),
  );
}

main().catch(console.error);
