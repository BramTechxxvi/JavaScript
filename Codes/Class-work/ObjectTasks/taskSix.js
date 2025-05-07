let threshold = 700;
const products = [
    {id: 1, name: "Laptop", price: 1200},
    {id: 2, name: "Phone", price: 800},
    {id: 3, name: "Tablet", price: 500},
    {id: 4, name: "Desktop", price: 700}
];
const findExpensiveProducts = (products, threshold)=> {
    let result = []
    for (let elements in products) {
        if (products[elements].price > threshold) {
            result = [`${products[elements].id}   ${products[elements].name}  ${products[elements].price}`]
            console.log(result)
        }} 

}
findExpensiveProducts(products, threshold)
module.exports = findExpensiveProducts;