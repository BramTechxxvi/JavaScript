 function sumArray (array)  {
    let total = 0;
    for (let element of array) total+=element;
    return total;
 }
 module.exports = sumArray;