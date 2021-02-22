export default function randomInt(min: number, max?: number): number {
  const _min = max == null ? 0 : min;
  const _max = max == null ? min : max;
  return Math.floor(Math.random() * (_max - _min)) + _min;
}
