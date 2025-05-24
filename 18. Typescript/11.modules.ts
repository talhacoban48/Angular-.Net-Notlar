
import { Taxi3 } from "./11.Taxi";






let taxi_3 = new Taxi3({x:1, y:2}, "yellow");
taxi_3.travelTo();
console.log(taxi_3.location);
taxi_3.location = {x:5, y:4}
console.log(taxi_3.location);

//    tsc 10.properties.ts
//    node 10.properties.js
