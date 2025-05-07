const convertToFahrenheit = require("./TaskTwo.js");
test("convert celcius to fahrenheit", ()=> {
	let temp = 10;
	let result = convertToFahrenheit(temp);
	expect(result).toBe(50);
});
test("convert celcius to fahrenheit", ()=> {
	let temp = 15;
	let result = convertToFahrenheit(temp);
	expect(result).not.toBe(46);
});
test("convert celcius to fahrenheit", ()=> {
	let temp = - 45;
	let result = convertToFahrenheit(temp);
	expect(result).not.toBe(-105);
});
test("convert celcius to fahrenheit", ()=> {
	let temp = 24;
	let result = convertToFahrenheit(temp);
	expect(result).not.toBe(1000);
});
test("convert celcius to fahrenheit", ()=> {
	let temp = 12;
	let result = convertToFahrenheit(temp);
	expect(result).not.toBe(" ");
});