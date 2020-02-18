
var car = {
    Make: "BMW",
    Model: "X5",
    Year: 2020,
    Price: 50000
};
console.log(car);

var brandOfCar = car.Make;
console.log(brandOfCar); // ==> BMW
console.log(car["Make"]); // ==> BMW
console.log(car.Model); //==> X5
console.log(car["Model"]); //==> X5

for (each in car){
    console.log(each+" : "+car[each]);
}
/*it give console output as below:
Make : BMW
Model : X5
Year : 2020
Price : 50000
*/
