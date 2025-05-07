const {getStudentName, getStudentCourse} = require("../objectTask.js")
test("Get student name from object", ()=>{
    const obj = {name: "Ade", age: 10, location: "abuja"}
        let result = getStudentName(obj)
        expect(result).toBe("Ade")
});
test("get student name", ()=> {
    const obj = {name: "Ade", age: 10, location: "abuja"}
    let result = getStudentName(obj)
    expect(result).not.toBe("Bisi")
})
test("Get student course",()=> {
    const obj = {name: "Ade", age: 22, courses: ["Biology", "Chemistry", "English"]}
    let result = getStudentCourse(obj, )
    expect(result).toBe("Chemistry")
});