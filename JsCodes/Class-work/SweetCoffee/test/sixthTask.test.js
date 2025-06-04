const findNestedKey = require("../sixthTask.js");

test ("test if function can find key in deep nested object", ()=> {
    const object = {
        a: 1,
        b: { c: 2, d: {e: 3}}
    };
    const expected = {e: 3};
    const result = findNestedKey(object, 'd')
    expect(result).toStrictEqual(expected)
})