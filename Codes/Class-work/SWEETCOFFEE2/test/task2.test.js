const increaseScores = require("../task2.js")

test ("test if function can add to scores in array", ()=> {
    const arr = [85, 92, 78, 88, 95];
    const result = [90, 97, 83, 93, 100];
    const expected = increaseScores(arr);
    expect(result).toEqual(expected)
})