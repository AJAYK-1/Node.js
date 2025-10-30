// normal function...
function Area(length, width) {
    return length * width;
}
console.log(Area(2, 3));
// Functions with default parameters...
function Volume(length, width, height) {
    if (height === void 0) { height = 4; }
    return length * width * height;
}
console.log(Volume(2, 3));
// inifinite parameters...
function Addall() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var num = nums_1[_a];
        sum = sum + num;
    }
    return sum;
}
console.log(Addall(1, 2, 3, 4, 5, 6));
// Arrow function...
var Arrow = function (name) { return "Hi, ".concat(name); };
console.log(Arrow('ajay'));
// Void...
function greet(name) {
    console.log('Hello, ', name);
}
greet('John');
