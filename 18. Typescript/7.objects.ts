
interface point {x:number, y:number};

interface Vehicle {
    currentlocation: point; 
    travelTo(point: point): void;
}

class Taxi implements Vehicle {
    // Taksiye özel özellikler
    currentlocation: point; 
    travelTo(point: point): void {
        console.log(`taksi x: ${point.x} y: ${point.y} konumuna gidiyor`);
    }
}

class Bus implements Vehicle {
    // otobüse özel özellikler
    currentlocation: point; 
    travelTo(point: point): void {
        console.log(`otobüs x: ${point.x} y: ${point.y} konumuna gidiyor`);
    }
}


let taxi_1: Taxi = new Taxi();
taxi_1.travelTo({x:1, y:2});
taxi_1.currentlocation = {x:1, y:2};
console.log(taxi_1.currentlocation.x)
console.log(taxi_1.currentlocation.y)


let taxi_2 = new Taxi();
taxi_2.travelTo({x:55555, y:2100000});
taxi_2.currentlocation = {x:55555, y:2100000};
console.log(taxi_2.currentlocation.x, taxi_2.currentlocation.y)


let bus = new Bus();
bus.travelTo({x:99999, y:1256156});
bus.currentlocation = {x:99999, y:1256156};
console.log(bus.currentlocation.x, bus.currentlocation.y)

//    tsc 7.objects.ts
//    node 7.object.js
