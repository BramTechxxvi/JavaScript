const sumArray = require("../firstTask.js");

test ("test if fuction can sum elemets in an array", ()=> {
    const array = [14, 8, 73, 90, 42];
    const expected = 227;
    const result = sumArray(array);
    expect(result).toEqual(expected);
})