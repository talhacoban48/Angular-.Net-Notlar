let travelTo = (point) => {}
travelTo({x: 1,y: 2})


let travelTo2 = (point: {x:number, y:number}) => {}
travelTo2({x: 1,y: 2})




let getDistance = (pointA: {x:number, y:number}, pointB: {x:number, y:number}) => {}

interface point {x:number, y:number};
let getDistance2 = (pointA: point, pointB: point) => {}
interface passenger {name:string, phone:number};

interface Vehicle {
    currentlocation: point; 
    travelTo2(point: point): void;
    getDistance2(PointA: point, PointB: point): number;
    addPassangers(Passanger: passenger): void;
    removePassenger(Passanger: passenger): void;
}