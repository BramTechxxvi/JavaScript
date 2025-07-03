const getLowestCommonFactor = require("../LowestCommonFactor");

test ("get lowest common factors", ()=> {
    const array = [6,9,7];
    const expected = getLowestCommonFactor(array);
    const result = [2,3,3,7];
    
    expect(result).toEqual(expected);
})