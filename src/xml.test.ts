import xml from './xml';

describe('xml', () => {
  test('should generate XML with the made up tag names', () => {
    const { envelope, message } = xml;
    const result = envelope({ id: 'test' }, message('hello!'));
    expect(result).toBe('<envelope id="test"><message>hello!</message></envelope>');
  });
});
