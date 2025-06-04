const prompt = require("prompt-sync")();
const student = {
    name: "Ololade Asake",
    age: 22,
    courses: ["Math", "Physics", "Computer Science"],
    address: {city: "New York", zip: 10001}
    }
const getStudentName = (student)=> {
    return `${student.name}`;
};
let pickCourse = 0
do {
    pickCourse = prompt("Enter student course(0,1,2): ");
    if (pickCourse < 0 || pickCourse > 2) console.log("Invalid input")
} while (pickCourse < 0 || pickCourse > 2)
const getStudentCourse = (student, course)=> {
    return `${student.courses[course]}`;
};
const getStudentZipCode = (student)=> {
        return `${student.address.zip}`;
}
console.log(getStudentName(student))
console.log(getStudentCourse(student, pickCourse))
console.log(getStudentZipCode(student))


module.exports = {getStudentName, getStudentCourse, getStudentZipCode};