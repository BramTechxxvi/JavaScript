const Animal =  {
    name: "",
    age: "",
    species: "",
    color: "",
    sound: function () {
        console.log(`${this.name} makes a sound`)
    }
}
let cat = Object.create(Animal);
cat.name = "Cat"
cat.age = 25
cat.species = "Cat fam"
cat.color = "Black"
cat.move = "walks"
console.log(cat)
cat.sound()

function Person (name, age) {
    this.name = name;
    this.age = age;

    this.getProfile = function () {
        return `${this.name} and ${this.age}`
    }
}
const personOne = new Person("Olamide", 30);
console.log(personOne.getProfile()+ "\n\n\n")


console.log(personOne)