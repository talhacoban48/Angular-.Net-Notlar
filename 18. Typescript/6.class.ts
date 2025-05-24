
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
