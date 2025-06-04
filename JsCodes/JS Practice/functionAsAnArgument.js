let firstNumber = 10;
let secondNumber = 78;
 calculate = (firstValue, secondValue, callBackFunction)=> {
    return callBackFunction(firstValue, secondValue);
}
function addTwoNumbers(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
function subtractTwoNumbers(numberOne, numberTwo) {
     return numberOne - numberTwo;
}
function divideTwoNumbers(numberOne, numberTwo) {
     return numberOne / numberTwo;
}
function multiplyTwoNumbers(numberOne, numberTwo) {
     return numberOne * numberTwo;
}
let figure1 = 5
let figure2 = 5
function squareOfTwoNumbers(numberOne, numberTwo) {
     return Math.pow(numberOne, numberTwo);
}
getEvenNumbers = (array)=> { 
    let arrayOfEvenElements = [];
    for (let element of array) {
        if (element % 2 === 0) {
	   arrayOfEvenElements.push(element);
}
} 
return arrayOfEvenElements;
}
console.log(calculate(firstNumber,secondNumber, addTwoNumbers))
console.log(calculate(firstNumber,secondNumber, subtractTwoNumbers()))
module.exports = {calculate, addTwoNumbers, subtractTwoNumbers, divideTwoNumbers,}