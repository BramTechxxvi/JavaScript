const person = {
	name: "Ibrahim, Adedeji, Adebimpe",
	age: 12
	};
person.gender = "queergender";
person.age = 128;
delete person.age
console.log(person);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

const{name} = person;
console.log(name);

const data = {
	username: "Bram",
	password: "greek",
	email: "bram@semi.com"
	};
const{password} = data;
console.log(password);

const prompt = require('prompt-sync')();

const age = prompt('Entr age: ');
console.log(age)

