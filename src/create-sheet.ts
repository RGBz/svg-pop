import drawLogo from './draw-logo';
import xml from './xml';

const { html, head, style, body } = xml;

export default function createSheet(count = 100, margin = 0): string {
  const logos = new Array(count).fill(null).map(() => drawLogo());
  return (
    `<!DOCTYPE html>` +
    html(
      head(
        style(
          `body { background: #333; justify-content: center; display: flex; flex-wrap: wrap; text-align: center; margin: 0; padding: 0 } svg { display: block; margin: ${margin}px; }`,
        ),
      ),
      body(...logos),
    )
  );
}
