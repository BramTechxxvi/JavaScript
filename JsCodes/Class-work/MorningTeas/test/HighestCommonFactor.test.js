const getHighestDivisor = require("../HighestCommonFactor");

test ("test if function can find higest common factor", ()=> {
    const arr = [12, 30, 18, 24];
    const result = 6;
    const expected = getHighestDivisor(arr);
    expect(result).toBe(expected);
})