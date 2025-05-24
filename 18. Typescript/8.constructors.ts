interface point {x:number, y:number};

interface Vehicle {
    currentlocation: point; 
    travelTo(point: point): void;
}

class Taxi implements Vehicle {

    color:string;
    currentlocation:point;
    
    constructor(location?: point, color?:string) {
        this.currentlocation = location;
        this.color = color;
    }
    // Taksiye özel özellikler
    currentlocation: point; 
    travelTo(point: point): void {
        console.log(`taksi x: ${point.x} y: ${point.y} konumuna gidiyor`);
    }
}



let taxi_1: Taxi = new Taxi({x:1, y:2}, "yellow");
console.log(taxi_1.currentlocation.x)
console.log(taxi_1.currentlocation.y)
console.log(taxi_1.color)


let taxi_2: Taxi = new Taxi({x:1, y:2});
console.log(taxi_2.currentlocation.x)
console.log(taxi_2.currentlocation.y)

let taxi_3: Taxi = new Taxi();
console.log(taxi_3.currentlocation.x)
console.log(taxi_3.currentlocation.y)

//    tsc 8.constructors.ts
//    node 8.constructors.js
