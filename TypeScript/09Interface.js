var Ajay = {
    name: 'Ajay',
    age: 23,
    greet: function (message) {
        console.log("Hi, ".concat(this.name, " and ").concat(message));
    }
};
console.log(Ajay);
Ajay.greet('this is TS.');
