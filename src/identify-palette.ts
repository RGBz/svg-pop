const COLOR_REGEX = /(#[0-9a-fA-F]{6,8})|(rgb\([0-9]{1,3},\w*[0-9]{1,3},\w*[0-9]{1,3}\))|(rgba\([0-9]{1,3},\w*[0-9]{1,3},\w*[0-9]{1,3},\w*((1\.0)|0(\.[0-9]+)?)\))/g;

export default function identifyPalette(str: string): string[] {
  const output = str.match(COLOR_REGEX)?.reduce((set, token) => set.add(token), new Set<string>());
  return Array.from(output || []).sort();
}
