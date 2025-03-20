const countVowels = require("./TaskFive.js");
test("numbers of vowesl in a word", ()=> {
	let word = "Chinedu";
	let result = countVowels(word);
	expect(result).toBe(3);
});
test("numbers of vowesl in a word", ()=> {
	let word = "semicolon";
	let result = countVowels(word);
	expect(result).toBe(4);
});
test("numbers of vowesl in a word", ()=> {
	let word = "Gym";
	let result = countVowels(word);
	expect(result).toBe(0);
});
test("numbers of vowesl in a word", ()=> {
	let word = "";
	let result = countVowels(word);
	expect(result).toBe(0);
});
test("numbers of vowesl in a word", ()=> {
	let word = "12345";
	let result = countVowels(word);
	expect(result).toBe(0);
});