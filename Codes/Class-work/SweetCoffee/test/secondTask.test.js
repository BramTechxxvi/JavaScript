const getDetails = require("../secondTask.js");

test ("test if values of an object can be oassed into an array", ()=> {
    const game =[{name: "Bola", age: 20, sex: "F"}, {name: "Dele", age: 30, sex: "M"}];
    const expected = ["Bola 20 F", "Dele 30 M"];
    const result = getDetails(game);
    expect(result).toEqual(expected)
})

