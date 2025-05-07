const getTestScores = require("../task1.js")

test ("test if function can get scores above 70", ()=> {
    const arr = [90, 40, 50, 80, 120, -12, 45, 55, 62, 82]
    const result = [90, 80, 120, 82]
    const expected = getTestScores(arr)
    expect(result).toEqual(expected)

})