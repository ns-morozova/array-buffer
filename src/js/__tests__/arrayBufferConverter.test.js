import ArrayBufferConverter from "../arrayBufferConverter";

const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

function getBuffer() {
  return (input => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

test('Преобразование формата', () => {
  const conv = new ArrayBufferConverter();
  conv.load(getBuffer());

  expect(conv.toString()).toBe(data);
});
