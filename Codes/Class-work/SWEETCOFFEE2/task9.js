const filterCost = (orders)=> {
    for (let order of orders) {
        let total = 0;
        for (let item of order.items) {
        total +=item.price * item.quantity;
        }
        if (total > 100) return `Order ID: ${order.id} Total is: ${total}`;
    } return 0;
}
const  orders = [
    {id: 1, items: [{price: 25, quantiy: 2}, {price: 15, quantity: 3}] },
    {id: 2, items: [{price: 100, quantity: 1}, {price: 25, quantity: 2}] },
    {id: 3, items: [{price: 30, quantity: 1}]}
]
module.exports = {orders, filterCost};