// Private...
var Sample = /** @class */ (function () {
    function Sample(name) {
        this.name = name;
        this._price = 10;
    }
    Sample.prototype.getPrice = function () {
        return "Product: ".concat(this.name, " \nPrice: ").concat(this._price);
    };
    return Sample;
}());
var sample = new Sample('Pencil');
console.log(sample.getPrice());
