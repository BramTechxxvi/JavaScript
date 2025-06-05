function getLowestCommonFactor(array) {
    const newArray = [];
    for (let number of array) {
        let factor = 2;
      //  for (let counter = 2; counter <= num; counter++)
        while(factor <= number) {
            if (number % factor === 0) {
                newArray.push(factor); break;
            } factor++;
        }
    } return newArray;
}

const arrayInpt1 = [2,3,5];  
const arrayInput2 = [6,9,7];
console.log(getLowestCommonFactor(arrayInpt1))
console.log(getLowestCommonFactor(arrayInput2))