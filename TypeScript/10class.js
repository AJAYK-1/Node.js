// Class...
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        // constructor parameter type annotations
        this.id = id;
        this.name = name;
        this.price = price;
    }
    // Method type annotaitons
    Product.prototype.getProductInfo = function () {
        return "ID: ".concat(this.id, " \nName: ").concat(this.name, " \nPrice: \u20B9").concat(this.price);
    };
    return Product;
}());
// Create an instance of the product class
var product1 = new Product(1, 'Pen', 5.0);
console.log(product1.getProductInfo());
