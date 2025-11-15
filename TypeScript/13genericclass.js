// Generic class 'User'
var User = /** @class */ (function () {
    function User(value) {
        this.value = value;
    }
    User.prototype.show = function (msg) {
        console.log("".concat(msg, ", ").concat(this.value));
    };
    return User;
}());
var user1 = new User('Ajay');
console.log(user1.value);
user1.show('Hello');
