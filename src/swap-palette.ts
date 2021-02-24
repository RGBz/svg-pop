import Color from './color';

export default function swapPalette(str: string, paletteMap: { [color: string]: Color }): string {
  let result = str;
  const originalColorsLongestFirst = Object.keys(paletteMap).sort((a, b) => b.length - a.length);
  for (const originalColor of originalColorsLongestFirst) {
    result = replaceAll(result, originalColor, paletteMap[originalColor].hex);
  }
  return result;
}

function replaceAll(input: string, src: string, dst: string): string {
  const regex = new RegExp(src.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'), 'g');
  return input.replace(regex, dst);
}
