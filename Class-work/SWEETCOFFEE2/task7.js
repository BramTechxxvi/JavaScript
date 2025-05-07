const  getStudentGrades= (scores)=> {
    const newArray = [];
    scores.map((score)=> {
    let temp = (convertToGrade(score)) 
    newArray.push(temp);
    }); return newArray;
}

const convertToGrade = (score)=> {
    if (score > 89 && score <= 100) score = 'A'
    if (score > 79 && score <= 89) score = 'B'
    if (score > 69 && score <= 79) score = 'C'
    if (score >= 60 && score <= 69) score = 'D'
    if (score < 60) score = 'F'
    return score;
}
module.exports = getStudentGrades;