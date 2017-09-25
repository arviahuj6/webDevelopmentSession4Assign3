import { Car } from './interface';
// printing the details of car.
export function carDetail(car: Car) {
  console.log(` The car details are : Model ${car.model},Engine ${car.engine} and the horespower is ${car.horsepower}`);

