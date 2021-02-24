const WIDTH_REGEX = /width=".*?"/;
const HEIGHT_REGEX = /height=".*?"/;

export default function resizeSvg(svg: string, width: number, height: number): string {
  return svg.replace(WIDTH_REGEX, `width="${width}px"`).replace(HEIGHT_REGEX, `height="${height}px"`);
}
