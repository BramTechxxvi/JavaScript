const getDetails = require("../taskTwo");
test("display student details", ()=> {
    const obj = {name: "Ola", age: 20, subject: ["math", "english"]}
    let result = getDetails(obj)
    expect(result).toBeTruthy();
})