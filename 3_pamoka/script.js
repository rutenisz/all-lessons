// switch pratimai

// 1 pratimas

const car = "Subaru";

switch (car) {
  case "VW":
  case "Audi":
  case "Bentley":
  case "Bugatti":
  case "Lamborghini":
  case "Porsche":
    console.log("VW Group");
    break;
  case "BMW":
  case "Mini":
  case "Rolls-Royce":
    console.log("BMW Group");
    break;
  default:
    console.log("Niekam nepriklauso");
}

// 2 pratimas

const userInput = "Obuolys";

switch (userInput) {
  case "Kriaušė":
  case "Braške":
  case "Vynuogės":
  case "Bananai":
  case "Obuolys":
    console.log("Vaisius");
    break;
  case "Kopūstas":
  case "Kale":
  case "Agurkas":
  case "Pomidoras":
  case "Paprika":
    console.log("Daržovė");
    break;
  default:
    console.log("Nei vaisius, nei daržovė");
}

// 3 pratimas

const weekDay = 1;

switch (weekDay) {
  case 0:
    console.log("Pirmadienis");
    break;
  case 1:
    console.log("Antradienis");
    break;
  case 2:
    console.log("Trečiadienis");
    break;
  case 3:
    console.log("Ketvirtadienis");
    break;
  case 4:
    console.log("Penktadienis");
    break;
  case 5:
    console.log("Šeštadienis");
    break;
  case 6:
    console.log("Sekmadienis");
    break;
}

// ternary sąlygų pratimai

// pavyzdys

const year = 2020;

year === 2021 ? alert("this year") : alert("previous year");

const currentYear = year === 2021 ? "this year" : "last year";

console.log(currentYear);

// 1 pratimas

const myName = "Ruta";

console.log(myName.length <= 5 ? "Short Name" : "Long Name");

// 2 pratimas

const clientAge = 17;
const legalAge = 18;

clientAge <= legalAge ? console.log("Can't drive") : console.log("Can drive");

// 3 pratimas

const clientAge1 = 16;
const legalAge2 = 18;
clientAge < 0 || clientAge > 120
  ? console.log("Invalid age")
  : clientAge >= legalAge
  ? console.log("Can drive")
  : console.log("Can't drive");

// 4 pratimas

const phone = "iPhone";
const isPhoneUser = phone === "iPhone";

// ciklo pratimai 

// 1 pratimas

for (let i = 0; i < 10, i++;) {
    console.log("Ruta");
}

// 2 pratimas 

const name1 = "Ruta";
const count = 10;

for (let i = 0; i < count; i++) {
    console.log(name1);
}

// 3 pratimas

const name2 = "Ruta";
const count1 = 10;

for (let i = 0; i < count1; i++) {
    console.log(`${i}. ${name2}`);
}

// 4 pratimas

let i = 10;
while(i > 0) {
  console.log(i);
  i--;
}
