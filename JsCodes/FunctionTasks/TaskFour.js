isLeapYear = (number)=> {
	if ((number % 4 === 0 && number % 100 !== 0) || (number % 400 === 0)){
		return true;
	} return false;
}
let year = 1900s;
console.log(isLeapYear(year));
