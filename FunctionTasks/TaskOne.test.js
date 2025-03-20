const calculateArea = require("./TaskOne.js");
test("area of a rectangle", ()=> {
	let height = 10;
	let width = 5;
	let result = calculateArea(height, width);
	expect(result).toBe(50);
});
test("area of a tringle", ()=> {
	let height = 12;
	let width = 3;
	let result = calculateArea(height, width);
	expect(result).not.toBe(22);
});
test("area of a triangle", ()=> {
	let height = 12;
	let width = 3;
	let result = calculateArea(height, width);
	expect(result).not.toBe(100.9);
});
test("area of a triangle", ()=> {
	let height = 15;
	let width = 6;
	let result = calculateArea(height, width);
	expect(result).not.toBe(-45);
});
test("area of a triangle", ()=> {
	let height = 15;
	let width = 6;
	let result = calculateArea(height, width);
	expect(result).not.toBe(" ");
});