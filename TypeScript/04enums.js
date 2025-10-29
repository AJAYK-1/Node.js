var Complete;
(function (Complete) {
    Complete["success"] = "SUCCESS";
    Complete["Error"] = "ERROR";
})(Complete || (Complete = {}));
var isComplete = Complete.success;
console.log(isComplete);
var Directions;
(function (Directions) {
    Directions[Directions["up"] = 0] = "up";
    Directions[Directions["down"] = 1] = "down";
    Directions[Directions["left"] = 2] = "left";
    Directions[Directions["right"] = 3] = "right";
})(Directions || (Directions = {}));
var dir = Directions.down;
console.log(dir);
