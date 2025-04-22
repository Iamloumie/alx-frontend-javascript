/** Function that returns an array of students for a specific city with their new grade */
export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by city
  const filteredStudents = students.filter((student) => student.location === city);

  // Map through the filtered students and assign new grades
  return filteredStudents.map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: newGrade ? newGrade.grade : 'N/A',
    };
  });
}
