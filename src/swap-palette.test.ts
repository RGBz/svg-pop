import Color from './color';
import swapPalette from './swap-palette';

describe('swap palette', () => {
  test('should swap the colors', () => {
    const input = 'this #eeffee old #eeffee33 bird rgb(1,2,3) is rgb(1,2,3) dumb';
    const expected = 'this #ff0000 old #00ff00 bird #0000ff is #0000ff dumb';
    const RED = new Color(255, 0, 0);
    const GREEN = new Color(0, 255, 0);
    const BLUE = new Color(0, 0, 255);
    const mapping = {
      ['#eeffee']: RED,
      ['#eeffee33']: GREEN,
      ['rgb(1,2,3)']: BLUE,
    };
    const result = swapPalette(input, mapping);
    expect(result).toEqual(expected);
  });
});
