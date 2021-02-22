import randomInt from './random-int';

export default class Color {
  red: number;
  green: number;
  blue: number;
  alpha: number;

  static random(alpha = 1.0): Color {
    return new Color(randomInt(255), randomInt(255), randomInt(255), alpha);
  }

  constructor(red: number, green: number, blue: number, alpha = 1.0) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
  }

  get hex(): string {
    const alpha = this.alpha === 1 ? '' : toHexWithPad(Math.floor(255 * this.alpha));
    return `#${[this.red, this.green, this.blue].map(toHexWithPad).join('')}${alpha}`;
  }
}

function toHexWithPad(n: number): string {
  return n.toString(16).padStart(2, '0');
}
