export default class Airport {
  constructor(name, code) {
    if (!name || !code) {
      throw new Error('Name and code are required');
    }
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw new Error('Name and code must be strings');
    }

    this.name = name;
    this.code = code;
  }

  get Code() {
    return this.code;
  }

  set Code(newCode) {
    if (typeof newCode !== 'string') {
      throw new Error('Code must be a string');
    }
    this.code = newCode;
  }

  get Name() {
    return this.name;
  }

  set Name(newName) {
    if (typeof newName !== 'string') {
      throw new Error('Name must be a string');
    }
    this.name = newName;
  }

  toString() {
    return `[object ${this.code}]`;
  }
}
