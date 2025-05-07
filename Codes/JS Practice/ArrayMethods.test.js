const {addTwoToEachElement, getEvenNumbers, addTwoToOddElement, getOddNumbers} = require("./ArrayMethods");
test("add two numbers to element", ()=>{
	const array = [2, 4, 5, 6];
	const expected = [4, 6, 7, 8];
	const result = addTwoToEachElement(array);  
	expect(result).toEqual(expected);
})

test("even numbers", ()=>{
	const array = [34, 4, 17,6, 10, 7];
	const expected = [34, 4, 6, 10];
	const result = getEvenNumbers(array);
	expect(result).toEqual(expected);
})

test("add two to odd elements in an array", ()=>{
	const array = [10, 15, 7, 90, 23, 6];
	const expected =  [10, 17, 9, 90, 25, 6];
	const result = addTwoToOddElement(array);
	expect(result).toEqual(expected);
})

test("get odd elements", ()=>{
	const array = [10, 17, 9, 90, 25, 6];
	const expected = [17, 9, 25];
	const result = getOddNumbers(array);
	expect(result).toEqual(expected)
})