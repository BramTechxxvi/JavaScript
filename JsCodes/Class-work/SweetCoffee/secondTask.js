const getDetails = (person)=> {
    let newArray = [];
    person.forEach((element, index, array) => {
        newArray.push(`${person[index].name} ${person[index].age} ${person[index].sex}`)
    });
    return newArray
}
module.exports = getDetails;
