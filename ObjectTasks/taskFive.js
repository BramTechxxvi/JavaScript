const fullName = (person)=> {
	return `First Name:${person.firstName} Last Name:${person.lastName} Age:${person.age}`
};

const person = {
firstName: "Adedeji",
lastName: "Ibrahim",
age: 25
};

console.log(fullName(person));