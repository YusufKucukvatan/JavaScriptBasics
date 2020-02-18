

function car(Make, Model, Year, Price){
    this.Make = Make;
    this.Model;
    this.Year = Year;
    this.Price = Price;
}
var car1 = new car("Ford", "Focus", 2011, 8000);
console.log(car1); //==> car { Make: 'Ford', Year: 2011, Price: 8000 }
console.log(car1.Year); //==> 2011
