;
var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
        this.location = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi x: ".concat(point.x, " y: ").concat(point.y, " konumuna gidiyor"));
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 1, y: 2 }, "yellow");
taxi_1.travelTo({ x: 1, y: 2 });
//    tsc 8.constructors.ts
//    node 8.constructors.js
