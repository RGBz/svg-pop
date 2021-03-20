import randomInt from './random-int';

export default class Color {
  red: number;
  green: number;
  blue: number;
  alpha: number;

  static random(alpha = 1.0): Color {
    return new Color(randomInt(255), randomInt(255), randomInt(255), alpha);
  }

  static fromHSV(hue: number, saturation: number, value: number): Color {
    let red = 0,
      green = 0,
      blue = 0;
    const i = Math.floor(hue * 6);
    const f = hue * 6 - i;
    const p = value * (1 - saturation);
    const q = value * (1 - f * saturation);
    const t = value * (1 - (1 - f) * saturation);
    switch (i % 6) {
      case 0:
        (red = value), (green = t), (blue = p);
        break;
      case 1:
        (red = q), (green = value), (blue = p);
        break;
      case 2:
        (red = p), (green = value), (blue = t);
        break;
      case 3:
        (red = p), (green = q), (blue = value);
        break;
      case 4:
        (red = t), (green = p), (blue = value);
        break;
      case 5:
        (red = value), (green = p), (blue = q);
        break;
    }
    return new Color(Math.round(red * 255), Math.round(green * 255), Math.round(blue * 255));
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

  get hue(): number {
    return this.hsv[0];
  }

  get saturation(): number {
    return this.hsv[1];
  }

  get value(): number {
    return this.hsv[1];
  }

  get hsv(): [number, number, number] {
    let hue = 0;
    const max = Math.max(this.red, this.green, this.blue),
      min = Math.min(this.red, this.green, this.blue),
      d = max - min;
    const saturation = max === 0 ? 0 : d / max,
      value = max / 255;

    switch (max) {
      case min:
        hue = 0;
        break;
      case this.red:
        hue = this.green - this.blue + d * (this.green < this.blue ? 6 : 0);
        hue /= 6 * d;
        break;
      case this.green:
        hue = this.blue - this.red + d * 2;
        hue /= 6 * d;
        break;
      case this.blue:
        hue = this.red - this.green + d * 4;
        hue /= 6 * d;
        break;
    }

    return [hue, saturation, value];
  }
}

function toHexWithPad(n: number): string {
  return n.toString(16).padStart(2, '0');
}
