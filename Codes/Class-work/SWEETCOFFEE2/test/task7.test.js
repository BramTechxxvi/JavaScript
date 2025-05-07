const getStudentGrades = require("../task7.js");

test ("test if function can convert scores to grade", ()=> {
    const scores = [95, 78, 85, 60, 45, 92];
    const result = ['A', 'C', 'B', 'D', 'F', 'A']
    const expected = getStudentGrades(scores);
    expect(result).toEqual(expected)
})