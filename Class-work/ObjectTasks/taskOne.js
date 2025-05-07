const prompt = require("prompt-sync")();
const student = {
    name: "Ololade Asake",
    age: 22,
    courses: ["Math", "Physics", "Computer Science"],
    address: {city: "New York", zip: 10001}
    }
const getStudentName = (student)=> {
    return `Student name:${student.name}`;
}; const pickCourse = prompt("Enter student course(0,1,2): ");
const getStudentCourse = (student, course)=> {
    return `${student.courses[course]}`;
}
console.log(getStudentName(student))
console.log(getStudentCourse(student, pickCourse))




module.exports = {getStudentName, getStudentCourse};