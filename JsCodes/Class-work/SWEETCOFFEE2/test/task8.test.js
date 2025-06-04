const {shoppingList, getHealthyItems} = require("../task8.js");

test ("test if function can get healthy items name", ()=> {
    const list = []
    const result = getHealthyItems(shoppingList);
    const expected = list.push(result)
    expect(result).toEqual(expected)
})