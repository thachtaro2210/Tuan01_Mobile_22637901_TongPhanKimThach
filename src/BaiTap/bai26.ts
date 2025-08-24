type Product = {
  name: string;
  price: number;
};


class Order {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  getTotalPrice(): number {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }
}

const order = new Order();
order.addProduct({ name: "Laptop", price: 1000 });
console.log("Total Price:", order.getTotalPrice());