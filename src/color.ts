import randomInt from './random-int';

export default class Color {
  red: number;
  green: number;
  blue: number;

  static random(): Color {
    return new Color(randomInt(255), randomInt(255), randomInt(255));
  }

  constructor(red: number, green: number, blue: number) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  get hex(): string {
    return `#${[this.red, this.green, this.blue].map(toHexWithPad).join('')}`;
  }
}

function toHexWithPad(n: number): string {
  return n.toString(16).padStart(2, '0');
}
