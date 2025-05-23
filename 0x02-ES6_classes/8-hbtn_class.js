export default class ALXClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    } else if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
