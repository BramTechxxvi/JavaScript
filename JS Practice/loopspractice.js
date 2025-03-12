const prompt = require("prompt-sync")();

const number = prompt('Enter number: ');
for (let count = 1; count <= number; count++) {
console.log(count);
};
console.log("")

let array = [2, 3, 4, 5, 6];
for (let element in array) {
console.log(array[element]);
};
console.log("")

let obj = {
name: "Adedeji",
age: 12,
email: "123@fake.com"
};
for (let count = 1; count <=3; count++) {
for (let key in obj) {
console.log(key);
console.log(obj[key]);
console.log("");
};
};
console.log("");

let number2 = 5;
while (number2 <= 6) {
console.log("I AM");
number2++;
};