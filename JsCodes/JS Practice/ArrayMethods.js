const addTwoToEachElement = function (numbers) {
	const newArray = [];
	numbers.forEach((number) =>{
	let result = number + 2;
	newArray.push(result);
})
	return newArray;
}
const getEvenNumbers = (numbers)=>{
	const newArray = [];
	numbers.forEach((number) =>{
	if(number % 2 === 0) newArray.push(number)
})
	return newArray;
}

const addTwoToOddElement = function(numbers) {
	numbers.forEach((number, index, array)=>{
	if (number % 2 !== 0) numbers[index] += 2;
})
	return numbers
}

const getOddNumbers = (numbers)=>{
	const newArray = [];
	numbers.filter((number)=>{
	if (number % 2 !== 0) newArray.push(number);
})
	return newArray
}
module.exports = {addTwoToEachElement, getEvenNumbers, addTwoToOddElement, getOddNumbers};