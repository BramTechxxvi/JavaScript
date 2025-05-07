const isEven = require("./TaskThree.js");
test("check if number is an even number", ()=> {
	let number = 10;
	let result = isEven(number);
	expect(result).toBeTruthy();
});
test("check if number is an even number", ()=> {
	let number = 7;
	let result = isEven(number);
	expect(result).toBeFalsy();
});
test("check if number is an even number", ()=> {
	let number = 11.8;
	let result = isEven(number);
	expect(result).toBeFalsy();
});
test("check if number is an even number", ()=> {
	let number = 0;
	let result = isEven(number);
	expect(result).toBeTruthy();
});
test("check if number is an even number", ()=> {
	let number = - 12.7;
	let result = isEven(number);
	expect(result).toBeFalsy();
});


