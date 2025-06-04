const calculateExpenses = require("../task6.js");

test ("test if function can calculate expenses", ()=> {
    const obj = {"food": 6000, "pasting": 20_000, "transport": 2500}
    const result = 28_500;
    const expected = calculateExpenses(obj);
    expect(result).toBe(expected);
})