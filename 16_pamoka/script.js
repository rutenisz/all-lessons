// const numbers = [-1, 60, 15, 5000, -189, 3, 789, 45];

// const initialReduceValue = { min: undefined, max: undefined };

// function callbackFunction(previousValues, currentArrayElement) {
//   if (
//     previousValues.Values.max === undefined ||
//     currentArrayElement > previousValues.max
//   ) {
//     previousValues.max = currentArrayElement;
//   }
//   return previousValues;
// }

// const finalResult = numbers.reduce(callbackFunction, initialReduceValue);

// console.log(finalResult);

const arr = [1, 60, -100, 2000, 5, 10150, -666, 5555];
const initialReduceValue = { min: undefined, max: undefined };
function callbackFn(previousValues, currentArrayElement) {
  if (
    previousValues.max === undefined ||
    currentArrayElement > previousValues.max
  ) {
    previousValues.max = currentArrayElement;
  }
  return previousValues;
}
const finalResult = arr.reduce(callbackFn, initialReduceValue);
console.log(finalResult);

const persons = [
  { name: "John", lastname: "Doe", id: 1001, birthday: new Date("1990-01-15") },
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

const newArrray = persons
  .filter(
    (value) => value.name.charAt(0) === "J" || value.lastname.charAt(0) === "J"
  )
  .map((v) => {
    return { name: v.name, lastname: v.lastname };
  });

// console.log(newArrray);

// const newArrray1 = morePersons
//   .filter(
//     (value) => value.name.charAt(0) === "J" && value.lastname.charAt(0) === "J"
//   )
//   .map((v) => {
//     return { name: v.name, lastname: v.lastname };
//   });

// const finalResult = newArrray.concat(newArrray1);
// console.log(finalResult);

// {"J":[{"name":"John","lastname":"Doe","id":1001,"birthday":"1990-01-15T00:00:00.000Z"},{"name":"Jane","lastname":"Smith","id":1002,"birthday":"1985-06-30T00:00:00.000Z"},{"name":"Alice","lastname":"Johnson","id":1003,"birthday":"1992-11-21T00:00:00.000Z"}],"D":[{"name":"John","lastname":"Doe","id":1001,"birthday":"1990-01-15T00:00:00.000Z"},{"name":"Charlie","lastname":"Davis","id":1005,"birthday":"2000-08-24T00:00:00.000Z"}],"S":[{"name":"Jane","lastname":"Smith","id":1002,"birthday":"1985-06-30T00:00:00.000Z"},{"name":"Sophia","lastname":"Gonzalez","id":1008,"birthday":"1999-12-06T00:00:00.000Z"}],"A":[{"name":"Alice","lastname":"Johnson","id":1003,"birthday":"1992-11-21T00:00:00.000Z"}],"B":[{"name":"Bob","lastname":"Brown","id":1004,"birthday":"1978-03-12T00:00:00.000Z"}],"C":[{"name":"Charlie","lastname":"Davis","id":1005,"birthday":"2000-08-24T00:00:00.000Z"}],"E":[{"name":"Emily","lastname":"Taylor","id":1006,"birthday":"1987-04-10T00:00:00.000Z"}],"T":[{"name":"Emily","lastname":"Taylor","id":1006,"birthday":"1987-04-10T00:00:00.000Z"}],"O":[{"name":"Oliver","lastname":"Lee","id":1007,"birthday":"1994-09-17T00:00:00.000Z"}],"L":[{"name":"Oliver","lastname":"Lee","id":1007,"birthday":"1994-09-17T00:00:00.000Z"},{"name":"Lucas","lastname":"Lopez","id":1009,"birthday":"1976-05-22T00:00:00.000Z"}],"G":[{"name":"Sophia","lastname":"Gonzalez","id":1008,"birthday":"1999-12-06T00:00:00.000Z"}],"Z":[{"name":"Zoe","lastname":"Morris","id":1010,"birthday":"2001-07-14T00:00:00.000Z"}],"M":[{"name":"Zoe","lastname":"Morris","id":1010,"birthday":"2001-07-14T00:00:00.000Z"}]}

// const resultShirtSize_1 = data
//   .filter((value) => value.shirt_size === "S" || value.shirt_size === "XS")
//   .map((val) => {
//     return {
//       id: val.id,
//       first_name: val.first_name,
//       shirt_size: val.shirt_size,
//     };
//   }) // paduodu key
//   .sort((a, b) => a.first_name.localeCompare(b.first_name));

// console.log(resultShirtSize_1);

// susikurti html h1 ir inputa su forma kur parasysi ta 
// susikurti diva arba html arba js
// padaryti add event listener
// create to do element
// appendinti teviniam elementui

