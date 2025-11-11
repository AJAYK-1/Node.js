// Class...
class Product {
    // Property type annotations
    id: number
    name: string
    price: number

    constructor(id: number, name: string, price: number) {
        // constructor parameter type annotations
        this.id = id
        this.name = name
        this.price = price
    }
    // Method type annotaitons
    getProductInfo(): string {
        return `ID: ${this.id} \nName: ${this.name} \nPrice: ₹${this.price}`
    }
}
// Create an instance of the product class
const product1 = new Product(1, 'Pen', 5.0)
console.log(product1.getProductInfo());
