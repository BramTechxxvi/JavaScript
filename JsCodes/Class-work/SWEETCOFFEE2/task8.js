const getHealthyItems = (list)=> {
    const healthyItems = [];
    list.filter(item=> {
        if (item.isHealthy == true) healthyItems.push(item);
    }); 
    return healthyItems.forEach(item => {
        console.log(item.name)})
}

const shoppingList = [
    {name: "Apple", category: "Fruits", isHealthy: true},
    {name: "Potato Chips", category: "Sweets", isHealthy: false},
    {name: "Carrots", category: "Vegetables", isHealthy: true},
    {name: "Chocolate Bars", category: "Sweets", isHealthy: false},
    {name: "Greek Yogurt", category: "Diary", isHealthy: true},
    {name: "Soda", category: "Beverages", isHealthy: false},
]
module.exports = { shoppingList, getHealthyItems};