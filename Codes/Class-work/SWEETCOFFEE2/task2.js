const increaseScores = (scores)=> {
    newArray = []
    scores.map((score)=> {
        newArray.push(score + 5)
    }); return newArray
}
module.exports = increaseScores;