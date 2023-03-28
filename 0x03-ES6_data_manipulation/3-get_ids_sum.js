export default function getStudentIdsSum(students) {
  const sumIds = students.reduce((studentId, student) => studentId + student);
  return sumIds;
}

// const students = getListStudents();
// const value = getStudentIdsSum(students);

// console.log(value);
