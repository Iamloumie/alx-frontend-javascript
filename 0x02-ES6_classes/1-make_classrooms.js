import Classroom from './0-classroom';

/**
 * @returns {Array} an array of Classroom objects
 * with different maximum number of students
 */
export default function initializeRooms() {
  const classroomsSize = [19, 20, 24];
  return classroomsSize.map((students) => new Classroom(students));
}
