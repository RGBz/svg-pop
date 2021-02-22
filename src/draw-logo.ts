import Color from './color';
import xml from './xml';

const { svg, g, rect, path } = xml;

interface Input {
  eyeColor?: Color;
  toothColor1?: Color;
  toothColor2?: Color;
  toothColor3?: Color;
  backgroundColor?: Color;
  cornerRadius?: number;
  size?: number;
}

export default function drawLogo({
  eyeColor = Color.random(),
  toothColor1 = Color.random(),
  toothColor2 = Color.random(),
  toothColor3 = Color.random(),
  backgroundColor = Color.random(),
  cornerRadius = 6,
  size = 128,
}: Input = {}): string {
  const result = svg(
    {
      width: size + 'px',
      height: size + 'px',
      viewBox: '0 0 128 128',
      version: '1.1',
      xmlns: 'http://www.w3.org/2000/svg',
      ['xmlns:xlink']: 'http://www.w3.org/1999/xlink',
    },
    g(
      {
        stroke: 'none',
        ['stroke-width']: 1,
        fill: 'none',
        ['fill-rule']: 'evenodd',
      },
      rect({ fill: backgroundColor.hex, x: 0, y: 0, width: 128, height: 128, rx: cornerRadius }),
      rect({ fill: toothColor1.hex, x: 26, y: 84, width: 16, height: 16, rx: 3 }),
      rect({ fill: toothColor2.hex, x: 46, y: 84, width: 16, height: 16, rx: 3 }),
      rect({ fill: toothColor3.hex, x: 66, y: 84, width: 16, height: 16, rx: 3 }),
      rect({ fill: toothColor1.hex, x: 86, y: 84, width: 16, height: 16, rx: 3 }),
      rect({ fill: toothColor2.hex, x: 26, y: 64, width: 16, height: 16, rx: 3 }),
      rect({ fill: toothColor3.hex, x: 46, y: 64, width: 16, height: 16, rx: 3 }),
      rect({ fill: toothColor1.hex, x: 66, y: 64, width: 16, height: 16, rx: 3 }),
      rect({ fill: toothColor2.hex, x: 86, y: 64, width: 16, height: 16, rx: 3 }),
      path({
        d: [
          'M63.9142454,22',
          'C79.7144557,22',
          '92.6617866,34.2146286',
          '93.8286209,49.7162684',
          'C93.5065439,51.0276867',
          '92.3239426,52',
          '90.9142454,52',
          'L66.037,52',
          'L73.1763908,39.6366505',
          'C73.5867571,38.9258751',
          '73.381692,38.0286624',
          '72.7265325,37.5620595',
          'L72.5984559,37.4797683',
          'C71.843257,37.043754',
          '70.877588,37.3025043',
          '70.4415737,38.0577032',
          'L70.4415737,38.0577032',
          'L62.5468369,51.7317885',
          'C62.4964703,51.8190259',
          '62.4553747,51.9090717',
          '62.4232442,52.0007852',
          'L36.9142454,52',
          'C35.5038266,52',
          '34.3207362,51.026691',
          '34,49.7150987',
          'C35.167817,34.2135787',
          '48.1147141,22',
          '63.9142454,22',
          'Z',
        ].join(' '),
        fill: eyeColor.hex,
      }),
    ),
  );
  return `<?xml version="1.0" encoding="UTF-8"?>${result}`;
}
