var cars = {
    BMW: {
    Make: "BMW",
    Model: "X5",
    Year: 2020,
    Price: 50000
    },
    Mercedes: {
    Make: "Mercedes",
    Model: "E200",
    Year: 2019,
    Price: 40000
    },
    Nissan: {
        Make: "Nissan",
        Model: "Sentra",
        Year: 2016,
        Price: 9000
        }
};
console.log(cars);
/*
{
  BMW: { Make: 'BMW', Model: 'X5', Year: 2020, Price: 50000 },
  Mercedes: { Make: 'Mercedes', Model: 'E200', Year: 2019, Price: 40000 },
  Nissan: { Make: 'Nissan', Model: 'Sentra', Year: 2016, Price: 9000 }
}
*/ 
console.log(cars.BMW); //==> { Make: 'BMW', Model: 'X5', Year: 2020, Price: 50000 }
console.log(cars.BMW.Model); //==> X5
console.log(cars["BMW"]); //==> { Make: 'BMW', Model: 'X5', Year: 2020, Price: 50000 }
console.log(cars["BMW"]["Model"]); //==> X5

for(each in cars){
    console.log(cars[each]);
}
/*
{ Make: 'BMW', Model: 'X5', Year: 2020, Price: 50000 }
{ Make: 'Mercedes', Model: 'E200', Year: 2019, Price: 40000 }
{ Make: 'Nissan', Model: 'Sentra', Year: 2016, Price: 9000 }
*/

console.log(cars.Nissan.Year); //==>2016
console.log(cars["Nissan"]["Year"]); //==>2016

//ncopy objects
var oldCras = JSON.parse(JSON.stringify(cars)); //==> copies cars to oldCars
console.log(oldCras);