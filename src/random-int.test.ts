import randomInt from './random-int';

describe('randomInt', () => {
  beforeAll(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
  });

  test('should return a random integer between 0 and the max', () => {
    const result = randomInt(10);
    expect(result).toBe(5);
  });

  test('should return a random integer between the min and the max', () => {
    const result = randomInt(6, 10);
    expect(result).toBe(8);
  });
});
