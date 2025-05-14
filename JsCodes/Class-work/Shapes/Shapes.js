class Shapes {
    #name
    #width;

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

}
module.exports = Shapes;