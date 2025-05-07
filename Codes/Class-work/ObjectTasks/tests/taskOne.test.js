const {getStudentName, getStudentCourse, getStudentZipCode} = require("../taskOne.js")
test("Get student name from object", ()=>{
    const obj = {name: "Ade", age: 10, location: "abuja"};
    let result = getStudentName(obj);
    expect(result).toBe("Ade");
    expect(result).not.toBe("Bisi");
});
test("Get student course",()=> {
    const obj = {name: "Ade", age: 22, courses: ["Biology", "Chemistry", "English"]};
    let firstResult = getStudentCourse(obj, 0);
    expect(firstResult).toBe("Biology");
    let secondResult = getStudentCourse(obj, 1);
    expect(secondResult).toBe("Chemistry");
    let thirdResult = getStudentCourse(obj, 2);
    expect(thirdResult).toBe("English");
});
test("get zip code", ()=> {
    const obj = {name: "Ade", age: 22, courses: ["Biology", "Chemistry", "English"], zip: {city: "Lagos", zip: 10011}};
    let result = getStudentZipCode(obj);
    expect(result).toBe(10011);
});