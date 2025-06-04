const filterUnrepeatedWords = function (words) {
    const newArray = [];
    for (word in words){
        if (word !== word) newArray.push(words)
    } return newArray;
}
let words = "Eric is a boy, Lola is a girl"
console.log(filterUnrepeatedWords(words));