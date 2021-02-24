import identifyPalette from './identify-palette';

describe('identify palette', () => {
  test.each([
    ['hex colors', 'cow is a #0022fe bird #ddeeff11 right?', ['#0022fe', '#ddeeff11']],
    ['rgb colors', 'today is a rgb(1,2,256) kind of rgb(1,2,256) day', ['rgb(1,2,256)']],
    ['rgba colors', 'today is a rgba(1,2,256,0.5) kind of rgba(1,2,256,0.5) day', ['rgba(1,2,256,0.5)']],
  ])('should find %s colors', (_, input, expected) => {
    const result = Array.from(identifyPalette(input)).sort();
    expect(result).toStrictEqual(expected);
  });
});
