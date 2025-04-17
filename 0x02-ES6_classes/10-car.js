export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') {
      throw new TypeError('brand must be a string');
    }
    if (typeof motor !== 'string') {
      throw new TypeError('motor must be a string');
    }
    if (typeof color !== 'string') {
      throw new TypeError('color must be a string');
    }

    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Using Symbol to create unique identifier for the cloneCar method
  [Symbol('cloneCar')]() {
    return new this.constructor(this._brand, this._motor, this._color);
  }

  // Public method that uses the Symbol method
  cloneCar() {
    return this[Object.getOwnPropertySymbols(this.constructor.prototype)[0]]();
  }
}
