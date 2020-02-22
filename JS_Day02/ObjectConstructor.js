var car1 = {
    brand : "Mercedes",
    mileage : 123450,
    year : 2020
};
var car2 = {
    brand : "Toyota",
    mileage : 150000,
    year : 2020
};
function car(brand, mileage, year){
    this.brand = brand;
    this.mileage = mileage;
    this.year = year;
};
var car3 = new car("Dodge", 130000, 2020);
console.log(car3);
