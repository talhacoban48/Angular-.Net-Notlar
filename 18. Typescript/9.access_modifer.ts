interface point {x:number, y:number};

interface Vehicle {
    travelTo(point: point): void;
}



class Taxi implements Vehicle {

    constructor(private location?: point, private color?:string) {}

    travelTo(): void {
        console.log(`taksi x: ${this.location.x} y: ${this.location.y} konumuna gidiyor`);
    }
}


let taxi_1: Taxi = new Taxi({x:1, y:2}, "yellow");
taxi_1.travelTo();



//    tsc 9.access_modifer.ts
//    node 8.constructors.js
