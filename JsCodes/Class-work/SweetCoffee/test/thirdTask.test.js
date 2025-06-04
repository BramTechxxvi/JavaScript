const changeCordinates = require("../thirdTask.js");

test ("test if function can change coordinates", ()=> {
    const game = {x: 64, y: 20};
    const expected = {x: 20, y: 64};
    const result = changeCordinates(game);
    expect(result).toStrictEqual(expected)
})