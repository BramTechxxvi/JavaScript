const getSquareOfNumbers = require("../task3.js")

test ("test if function can get square of numbers", ()=> {
    const arr = [2,4,6,8,10];
    const result = [4,16, 36, 64, 100];
    const expected = getSquareOfNumbers(arr);
    expect(result).toEqual(expected);
})