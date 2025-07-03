function getLowestCommonFactor(array) {
    const newArray = [];
    for (let number of array) {
        let factor = 2;
      //  for (let counter = 2; counter <= num; counter++)git
        while(factor <= number) {
            if (number % factor === 0) {
                newArray.push(factor); break;
            } factor++;
        }
    } return newArray;
}

const getComLowest = (array)=> {
    const newArray = [];
    l
    for (let count = 0; count < array.length; count++) {
        if (array[count] % count == 0) {
            array[count] = array[count] / 
        }
    }
}

const arrayInpt1 = [2,3,5];  
const arrayInput2 = [6,9,7]; // outpur [2,3,3,7]
console.log(getLowestCommonFactor(arrayInpt1))
console.log(getLowestCommonFactor(arrayInput2))
module.exports = getLowestCommonFactor;