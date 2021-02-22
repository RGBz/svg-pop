type Args = (attributes?: Record<string, string>, ...children: string[]) => string;

type XML = Record<string, Args>;

const xml = new Proxy<XML>(
  {},
  {
    get(_, tagName: string): Args {
      return (attributes?: Record<string, string> | string, ...children: string[]): string => {
        const hasAttributes = typeof attributes !== 'string';
        const _attributes = hasAttributes ? attributes : {};
        const _children = hasAttributes ? children : [attributes, ...children];
        const includeSlash = _children.length === 0 && !['link', 'meta'].includes(tagName);
        const openingTag =
          `<${tagName}` +
          Object.entries(_attributes || {})
            .map(([k, v]) => (v === '' ? ` ${k}` : ` ${k}="${v}"`))
            .join('') +
          (includeSlash ? ' />' : '>');
        const body = _children.join('');
        const closingTag = _children.length > 0 ? `</${tagName}>` : '';
        return openingTag + body + closingTag;
      };
    },
  },
);

export default xml;
