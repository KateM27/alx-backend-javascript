export default function getListStudentIds(students) {
  let studentIds = [];
  if (!(students instanceof Array)) {
    return studentIds;
  }
  studentIds = students.map((student) => student.id);
  return studentIds;
}

// console.log(getListStudentIds('hello'));
// console.log(getListStudentIds(getListStudents()));
