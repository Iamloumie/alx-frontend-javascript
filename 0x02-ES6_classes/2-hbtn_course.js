export default class ALXCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    if (
      !Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('students must be an array of strings');
    }
    if (students.length === 0) {
      throw new Error('students cannot be empty');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Gets the name of the course
  // Sets the name of the course
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = name;
  }

  // Gets the length of the course
  get length() {
    return this._length;
  }

  // Sets the length of the course
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    this._length = length;
  }

  // Gets the students in the course
  get students() {
    return this._students;
  }

  // Sets the students in the course
  set students(students) {
    if (
      !Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('students must be an array of strings');
    }
    if (students.length === 0) {
      throw new Error('students cannot be empty');
    }
    this._students = students;
  }
}
