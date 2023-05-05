function Car(brand, model, engine, basePrice) {
  this.brand = brand;
  this.model = model;
  this.engine = engine;
  this.basePrice = basePrice;
  //   this.turnOn = function () {
  //     alert("vroom!");
  //   };
  this.getPrice = function () {
    if (this.engine === "Electric") {
      alert("Price is: " + (basePrice + 10000) + "eur");
    } else if (this.engine === "Diesel") {
      alert("Price is: " + (basePrice + 5000) + "eur");
    } else {
      alert("Price is: " + basePrice + "eur");
    }
  };
}

const car1 = new Car("Audi", "A6", "Electric", 2000);
const car2 = new Car("BMW", "X5", "Diesel", 15000);
const car3 = new Car("Toyota", "Corolla", "Petrol", 2000);
console.log(car1, car2);
// car1.turnOn();
// car2.turnOn();
// car3.turnOn();
car1.getPrice();
car2.getPrice();
car3.getPrice();
