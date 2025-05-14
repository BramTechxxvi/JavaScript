const Shapes = require("./Shapes");
class Rectangle extends Shapes {
    #length;
    #width;

    constructor(name, length,width) {
        super(name);
        this.#length = length;
        this.#width = width;
    }

    area() {
        return this.#width * this.#length;
    }

    isSquarish() {
        return this.#width === this.#length;
    }

    getName() {
        return super.getName();
    }

}
module.exports = Rectangle;