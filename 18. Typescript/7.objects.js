;
var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi x: ".concat(point.x, " y: ").concat(point.y, " konumuna gidiyor"));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("otob\u00FCs x: ".concat(point.x, " y: ").concat(point.y, " konumuna gidiyor"));
    };
    return Bus;
}());
var taxi_1 = new Taxi();
taxi_1.travelTo({ x: 1, y: 2 });
taxi_1.currentlocation = { x: 1, y: 2 };
console.log(taxi_1.currentlocation.x);
console.log(taxi_1.currentlocation.y);
var taxi_2 = new Taxi();
taxi_2.travelTo({ x: 55555, y: 2100000 });
taxi_2.currentlocation = { x: 55555, y: 2100000 };
console.log(taxi_2.currentlocation.x, taxi_2.currentlocation.y);
var bus = new Bus();
bus.travelTo({ x: 99999, y: 1256156 });
bus.currentlocation = { x: 99999, y: 1256156 };
console.log(bus.currentlocation.x, bus.currentlocation.y);
//    tsc 7.objects.ts
//    node 7.object.js
