const inventory = {apple: 10, banana: 5, orange: 8, mango: 12};
const getDetails = (obj)=> {
    let counter = 0;
    for (let element in obj){
        console.log(`${element}: ${obj[element]}`);
        counter+=obj[element];
    } console.log(counter)
}
getDetails(inventory)