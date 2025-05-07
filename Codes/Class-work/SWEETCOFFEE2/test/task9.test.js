const {orders, filterCost} = require("../task9.js");

test ("test if function can filter cost over 100", ()=> {
    const result = filterCost(orders)
    expect(result).toContain("Order ID: 2 Total is: 150");
})