;
var Taxi2 = /** @class */ (function () {
    function Taxi2(_location, _color) {
        this._location = _location;
        this._color = _color;
    }
    Taxi2.prototype.travelTo = function () {
        console.log("taksi x: ".concat(this._location.x, " y: ").concat(this._location.y, " konumuna gidiyor"));
    };
    Object.defineProperty(Taxi2.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            if (value.x < 0 || value.y < 0) {
                throw new Error("koordinat negatif olamaz");
            }
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    return Taxi2;
}());
var taxi_2 = new Taxi2({ x: 1, y: 2 }, "yellow");
taxi_2.travelTo();
console.log(taxi_2.location);
taxi_2.location = { x: 5, y: 4 };
console.log(taxi_2.location);
//    tsc 10.properties.ts
//    node 10.properties.js
