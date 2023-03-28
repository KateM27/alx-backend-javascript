export default function getStudentsByLocation(students, city) {
    const studentsLocation = students.filter(student => student.location === city);
	return studentsLocation;
}

// const students = getListStudents();
// console.log(getStudentsByLocation(students, 'San Francisco'));