countVowels = (userInput)=> {
	let result = 0;
	let vowels = "aeiou"
	for (let count = 0; count < userInput.length; count++) {
		if (vowels.includes(userInput[count].toLowerCase())) {
		result++;
	}
}
 return result;
}
let myStr = "Adedeji";
console.log(countVowels(myStr))
module.exports = countVowels;