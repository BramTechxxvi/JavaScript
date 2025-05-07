const getTestScores = (scores)=> {
    newArray = []
    scores.filter((score)=> {
        if (score >= 70) newArray.push(score);
    }); return newArray
}
module.exports = getTestScores;