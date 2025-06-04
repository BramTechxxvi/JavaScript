const student = {
    name: "Ololade Asake",
    age: 22,
    courses: ["Math", "Physics", "Computer Science"],
    address: {city: "New York", zip: 10001}
};
student.age = 23;
student.gpa = 3.5
getDetails = (student)=> {
    return `${student.name} is ${student.age} years old and has a GPA of ${student.gpa}`
};
console.log(getDetails(student))
module.exports = getDetails;