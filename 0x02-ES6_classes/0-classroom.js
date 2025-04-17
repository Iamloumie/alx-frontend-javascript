/**
 * Represents a class constructor for creating a classroom
 * with maximum number of students
 * If the number of students is not a positive number
 * or not a whole number, throw a TypeError
 * If the number of students is not a number, throw a TypeError
 * If the number of students is a negative number, throw a TypeError
 * If the number of students is a decimal number, throw a TypeError
 * If the number of students is a string, throw a TypeError
 */
export default class Classroom {
  constructor(maxStudentsSize) {
    if (typeof maxStudentsSize !== 'number' || maxStudentsSize <= 0) {
      throw new TypeError('maxStudentsSize must be a positive number');
    }
    if (!Number.isInteger(maxStudentsSize)) {
      throw new TypeError('maxStudentsSize must be a whole number');
    }
    this._maxStudentsSize = maxStudentsSize;
  }
}
