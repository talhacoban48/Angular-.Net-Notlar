import { Vehicle } from "./11.Vehicles";
import { point } from "./11.point";

export class Taxi3 implements Vehicle {

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