const getHighestDivisor = (arr)=> {
    let temp = 0;
    let smallestElement = getLowestNumber(arr);
    for (let count = smallestElement; smallestElement > 0; count--) {
        if (smallestElement % count === 0) temp = count;
    
    } return temp
}

getLowestNumber = (arr)=> {
    let lowest = 0;
    for (let element in arr) {
        lowest = arr[element]
    for (let element2 in arr){
        if (arr[element2] < lowest) lowest = arr[element2]
}} return lowest
}
const arr = [18, 30, 12, 24];
const arr2 = [10, 15, 25];
console.log(getHighestDivisor(arr))
console.log(getHighestDivisor(arr2))

module.exports = getHighestDivisor;