import sharp from 'sharp';

export default async function svgToPng(svg: string, outputPath: string, size?: number): Promise<void> {
  const image = sharp(Buffer.from(svg, 'utf8'));
  if (size) {
    image.resize(size);
  }
  await image.png().toFile(outputPath);
}
