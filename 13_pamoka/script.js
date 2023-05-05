// pavercia pirma raide didziaja

// const myFunction = (greeting) => {
//   const changeFirstLetter = greeting.at(0).toUpperCase();
//   const removeFirstLetter = greeting.substring(1);
//   //   console.log(greeting);
//   const finalGreeting = changeFirstLetter + removeFirstLetter.toLowerCase();
//   return finalGreeting;
// };

// console.log(myFunction("lABAS"));

//   const finalGreeting = newGreeting;
// const greeting = "labas";
// console.log(greeting.at(0).toUpperCase());

// su ciklu pagalba parasyt funkcija su p

// parasyti funkcija kuri priema per parametrus masyva ir grazina nauja masyva su naujais objektais, objektai turi turetu seno objekto name ir gimimo metus

const persons = [
  {
    name: "John",
    lastname: "Doe",
    id: 1001,
    birthday: new Date("1990-01-15"),
  },
  {
    name: "Jane",
    lastname: "Smith",
    id: 1002,
    birthday: new Date("1985-06-30"),
  },
  {
    name: "Alice",
    lastname: "Johnson",
    id: 1003,
    birthday: new Date("1992-11-21"),
  },
  {
    name: "Bob",
    lastname: "Brown",
    id: 1004,
    birthday: new Date("1978-03-12"),
  },
  {
    name: "Charlie",
    lastname: "Davis",
    id: 1005,
    birthday: new Date("2000-08-24"),
  },
];

const morePersons = [
  {
    name: "Emily",
    lastname: "Taylor",
    id: 1006,
    birthday: new Date("1987-04-10"),
  },
  {
    name: "Oliver",
    lastname: "Lee",
    id: 1007,
    birthday: new Date("1994-09-17"),
  },
  {
    name: "Sophia",
    lastname: "Gonzalez",
    id: 1008,
    birthday: new Date("1999-12-06"),
  },
  {
    name: "Lucas",
    lastname: "Lopez",
    id: 1009,
    birthday: new Date("1976-05-22"),
  },
  {
    name: "Zoe",
    lastname: "Morris",
    id: 1010,
    birthday: new Date("2001-07-14"),
  },
];

const myFunction = (array) => {
  const newInfo = [];
  for (let i = 0; i < array.length; i++) {
    const newObj = {
      name: array[i].name, // key = value
      year: array[i].birthday.getFullYear(),
    };
    newInfo.push(newObj);
  }
  return newInfo;
};

const newArray = myFunction(persons);

console.log(newArray);



// pakeisti kad neliktu ciklo, naudoti masyvo metoda

// Callbackas yra funkcija, kuria mes paduodame kaip parametra i kita funkcija

// Callback 1 pratimas

// const alertName = (name) => {
//   alert(name);
// };

// const consoleName = (name) => {
//   console.log(name);
// };

// const coreFunction = (vardas, callback) => {
//   const changeFirstLetter = vardas.at(0).toUpperCase();
//   const fromFirstLetter = vardas.substring(1);
//   const finalName = changeFirstLetter + fromFirstLetter.toLowerCase();
//   callback(finalName);
// };

// coreFunction("jONAS", alertName);

// Array metodai

// forEach naudojame tada, kai norime kažkokią funkciją paleisti ir pasitikrinti kažkokį rezultatą (prasukti loop'ą per visą array);
// map'ą naudojame, tada, kai norime pereiti per array ir jį pakoreguoti, t.y. kiekvieną reikšmę pakoreguoti
// filter prafiltruoja array pagal kažkokį kriterijų (mažina array elemetų skaičių pagal kriterijų)
// find pagal kriterijų suranda pirmą reikšmę
// some patikrina, ar bent vienas iš array atitinka tą kriterijų
// every patikrina, ar visi atitinka kažkokį kriterijų

// 1 pratimas

// const cars = ["BMW", "VW", "Audi"];

// cars.forEach((value) => console.log(value)); // paduoda funkciją, kuri priima value kaip parametrą;

// 2 pratimas

const cars = ["BMW", "VW", "Audi"];

cars.forEach((v, i) => console.log(i + ": " + v));

// 3 pratimas

const friendsNames = ["peTras", "Jonas", "aNTanaS"];
const modifiedNames = friendsNames.map(
  (value) => value.at(0).toUpperCase() + value.slice(1).toLowerCase()
);
console.log(modifiedNames);

// 4 pratimas

const friendAges = [3, 5, 13, 18, 25, 50, 65, 77];
// const checkAge = (age) => {
//   return age >= 18;
// };
const legalAge = friendAges.filter((age) => {
  return age >= 18;
});
console.log(legalAge);

// 5 pratimas

// const cities = ["Kaunas", "Vilnius", "Klaipėda", "Šiauliai"];
// const citiesStartWithK = cities.find((reiksme) => reiksme.at(0) === "K");
// console.log(citiesStartWithK);

// 6 pratimas

// const cities = ["Kaunas", "Vilnius", "Klaipėda", "Šiauliai"];
// const citiesStartWithLowerCase = cities.some(
//   (reiksme) => reiksme.at(0) === reiksme.at(0).toLowerCase()
// );
// console.log(citiesStartWithLowerCase);

// 7 pratimas

const cities = ["Kaunas", "Vilnius", "Klaipėda", "Šiauliai"];
const citiesStartWithUpperCase = cities.every(
  (raide) => raide.at(0) === raide.at(0).toUpperCase()
);
console.log(citiesStartWithUpperCase);
