const mathOperations = require("../tenthTask.js");
describe("test if object function can perform few math operations", ()=> {

test ("test if function can add", ()=> {
    let num1 = 7;
    let num2 = 12
    let expected = 19;
    let result = mathOperations(num1, num2);
    expect(result.add()).toEqual(expected)  
})
test ("test if function can subtract", ()=> {
    let num1 = 7;
    let num2 = 12
    let expected = -5;
    let result = mathOperations(num1, num2);
    expect(result.subtract()).toEqual(expected)  
})
test ("test if function can divide", ()=> {
    let num1 = 10;
    let num2 = 2
    let expected = 5;
    let result = mathOperations(num1, num2);
    expect(result.divide()).toEqual(expected)  
})
test ("test if function can multiply", ()=> {
    let num1 = 7;
    let num2 = 12
    let expected = 84;
    let result = mathOperations(num1, num2);
    expect(result.multiply()).toEqual(expected)  
})
})