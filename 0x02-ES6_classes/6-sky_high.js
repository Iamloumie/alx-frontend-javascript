import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof floors !== 'number' || floors <= 0) {
      throw new Error('Invalid number of floors');
    }
    if (typeof sqft !== 'number' || sqft <= 0) {
      throw new Error('Invalid square footage, sqft must be a number');
    }

    super(sqft);

    this._sqft = sqft;
    this.floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error('Invalid square footage, sqft must be a number');
    }
    this._sqft = value;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error('Invalid number of floors');
    }
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors.`;
  }
}
