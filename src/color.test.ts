import Color from './color';

describe('Color', () => {
  describe('random', () => {
    beforeAll(() => {
      jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
    });
    test('should return a random color', () => {
      const result = Color.random();
      expect(result.red).toBe(127);
      expect(result.green).toBe(127);
      expect(result.blue).toBe(127);
      expect(result.alpha).toBe(1);
    });
  });

  describe('hex', () => {
    test.each([
      ['black', '#000000', [0, 0, 0]],
      ['white', '#ffffff', [255, 255, 255]],
      ['translucent orange', '#ff7f007f', [255, 127, 0, 0.5]],
    ])('should render %s as %s2', (_, expected, rgba) => {
      const result = new Color(...(rgba as [number, number, number, number])).hex;
      expect(result).toBe(expected);
    });
  });
});
