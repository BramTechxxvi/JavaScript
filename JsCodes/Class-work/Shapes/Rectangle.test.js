const Rectangle = require("./Rectangle")
const test = require("node:test");

test ("test if rectangle can get area", () => {
    const rectangle = new Rectangle("lola", 6, 3)
    expect(rectangle.area()).toBe(18);
})