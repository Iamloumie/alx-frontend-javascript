/** Function that returns a new ArrayBuffer with an Int8 value at a specific position */
export default function createInt8TypedArray(length, position, value) {
  if (length < 0 || position >= length || position < 0) {
    throw new Error('Position is outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);
  int8View[position] = value;
  return buffer;
}
