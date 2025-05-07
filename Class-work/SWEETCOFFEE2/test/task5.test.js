const findClasses = require("../task5.js");

test ("test if function can filter class periods", ()=>{
    const timings = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
    const result = ["1:00 PM", "3:00 PM", "5:00 PM"];
    const expected = findClasses(timings);
    expect(result).toEqual(expected);
})