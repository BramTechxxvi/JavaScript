//function declaration
function getEvenNumbers(numbers) {
for (let number of numbers) {
	if (number % 2 === 0) {
console.log(number);
	} else {
console.log("Not the right data type");
}}}
let array = [2, 3, 4, 5, 6, 7, 8, 9, 10];
getEvenNumbers(array);
console.log("");

//function expression
const findEvenNumbers = function(figure) {
for (let number = 1; number <= figure; number++ ) {
	if (number % 2 === 0) {
console.log(number);
}}}
let array1 = 10;
findEvenNumbers(array1);
console.log("");

//nested function- declaration
function outerFunction(figure1) {
let atNumber = 10;
	function innerFunction(figure2) {
		return figure1 * figure2;
	} return innerFunction(atNumber);
}
let exNumber = 5;
console.log(outerFunction(exNumber))
console.log("");

//nested function- expression
const firstFunction = function(figure1) {
let number1 = 10;
	const secondFunction = function(figure2) {
		return figure1 / figure2;
	}
	return secondFunction(number1);
}
let number2 = 205;
console.log(firstFunction(number2));
console.log("");

//arrow function
const getMultiply = (firstNumber, secondNumber)=> {
	return firstNumber / secondNumber;
}
let temp1 = 20; temp2 = 3;
console.log(getMultiply(temp1, temp2));

// function as a returned object
function createCalculator(figure1, figure2) {
	return {
	add: function() {
		return figure1 + figure2
		},
	subtract: function() {
		return figure1 - figure2
		},
	multiply: function() {
		return figure1 * figure2
		},
	divide: function() {
		return figure1 / figure2
	}}}
let numberOne = 10; numberTwo = 5;
let result = createCalculator(numberOne, numberTwo)
console.log(result.divide())



