"use strict";
class Order {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    getTotalPrice() {
        return this.products.reduce((sum, p) => sum + p.price, 0);
    }
}
const order = new Order();
order.addProduct({ name: "Laptop", price: 1000 });
console.log("Total Price:", order.getTotalPrice());
