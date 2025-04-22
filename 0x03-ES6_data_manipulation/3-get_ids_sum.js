/** Function that returns the sum of all the students ids */
export default function getStudentIdsSum(students) {
  return Array.isArray(students) ? students.reduce((sum, item) => sum + item.id, 0) : 0;
}
