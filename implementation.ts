import { Car } from './interface';
import { CarInternal } from './interface';
import { carDetail } from "./function";
import { carInetrnalDetail } from "./function1";

// defining all the details of myCar
let myCar: Car = { model: "Wagon R", engine: "K10B", horsepower: 1000 }
carDetail(myCar);
// defining all details of carInterna1D
let carInternalD : CarInternal = { seats : 2 ,gear : "automatic"}
carInetrnalDetail(carInternalD);
