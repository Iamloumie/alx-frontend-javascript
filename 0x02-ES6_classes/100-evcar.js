import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Override the Symbol method to return a Car instance instead of EVCar
  [Symbol('cloneCar')]() {
    return new Car(this._brand, this._motor, this._color);
  }
}
