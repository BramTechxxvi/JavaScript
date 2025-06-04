const {calculate, addTwoNumbers, subtractTwoNumbers, divideTwoNumbers, multiplyTwoNumbers, squareOfTwoNumbers, getEvenNumbers = require("./functionAsAnArgument.js");
test("add two numbers", ()=> {
    let firstNumber = 5;
    let secondNumber = 72;
    let result = addTwoNumbers(firstNumber, secondNumber);
    expect(result).toBe(77)
});
test("subtract two numbers", ()=> {
    let firstNumber = 5;
    let secondNumber = 72;
    let result = subtractTwoNumbers(firstNumber, secondNumber);
    let answer = -67
    expect(result).toBe(answer)
});
test("multiply two numbers", ()=> {
    let firstNumber = 5;
    let secondNumber = 5;
    let result = multiplyTwoNumbers(firstNumber, secondNumber);
    expect(result).toBe(25);
});
test("divide two numbers", ()=> {
    let firstNumber = 100
    let secondNumber = 5
    let result = divideTwoNumbers(firstNumber, secondNumber);
    expect(result).toBe(20);
})
test("square of two numbers", ()=> {
    let firstNumber = 5;
    let secondNumber = 5;
    let result = squareOfTwoNumbers(firstNumber, secondNumber);
    let answer = 3125;
    expect(result).toBe(answer);
});
test("return even numbers", ()=> {
    let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = getEvenNumbers(arrayOfNumbers);
    let answer = [2, 4, 6, 8];
    expect(result).toEqual(answer);
});