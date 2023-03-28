export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const newStudent = student;
    newStudent.grade = 'N/A';
    for (const grade of newGrades) {
      if (newStudent.id === grade.studentId) {
        newStudent.grade = grade.grade;
      }
    }
    return newStudent;
  });
}
