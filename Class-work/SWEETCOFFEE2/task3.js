const getSquareOfNumbers = (scores)=> {
    newArray = []
    scores.map((score)=> {
        newArray.push(score * score)
    }); return newArray;
}
module.exports = getSquareOfNumbers;