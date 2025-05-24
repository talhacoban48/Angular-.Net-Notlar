interface point {x:number, y:number};

interface Vehicle {
    travelTo(point: point): void;
}



class Taxi2 implements Vehicle {

    constructor(private _location: point, private _color?:string) {}

    travelTo(): void {
        console.log(`taksi x: ${this._location.x} y: ${this._location.y} konumuna gidiyor`);
    }

    get location() {
        return this._location;
    }

    set location(value: point) {
        if (value.x < 0 || value.y < 0) {
            throw new Error("koordinat negatif olamaz")
        }
        this._location = value;
    }
}


let taxi_2 = new Taxi2({x:1, y:2}, "yellow");
taxi_2.travelTo();
console.log(taxi_2.location);
taxi_2.location = {x:5, y:4}
console.log(taxi_2.location);


//    tsc 10.properties.ts
//    node 10.properties.js
