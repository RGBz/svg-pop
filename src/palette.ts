import Color from './color';

export default class Palette {
  colors: Color[];

  static random(count: number): Palette {
    const increment = 1 / count;

    const colors = [Color.fromHSV(Math.random(), Math.random(), Math.random())];
    while (colors.length < count) {
      const lastColor = colors[colors.length - 1];
      const lastHue = lastColor.hue;
      let nextHue = lastHue + increment;
      if (nextHue > 1) {
        nextHue -= 1;
      }
      // colors.push(Color.fromHSV(nextHue, 1, Math.random() / 5 + 0.5));
      colors.push(Color.random());
    }
    return new Palette(colors);
  }

  constructor(colors: Color[]) {
    this.colors = colors;
  }
}
