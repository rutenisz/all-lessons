// Masyvų rikiavimas (sort())

// 1 pratimas

const friendsNames = ["Ona", "Petras", "Balys"];
console.log(friendsNames.sort());

// 2 pratimas

const friendsNames_1 = ["Ona", "Petras", "Balys"];
friendsNames_1.sort();
friendsNames_1.reverse();
console.log(friendsNames_1);

// 3 pratimas

const numbers = [5, 10, 20, 11, 12, 1, 0, 14, 25];
console.log(numbers.sort((a, b) => a - b));

// 4 pratimas

const numbers_1 = [10, 5, 20, 4];
numbers_1.sort((a, b) => b - a);
console.log(numbers_1[0]);

// Masyvų suplokštinimas - mažinimas (reduce())
// Galime naudoti grąžinti maksinmalų, mažiausią skaičių, kai reikia skaičiuoti banko palūkanas, indėlius;


// 1 pratimas

const myFavouriteNumbers = [7, 27, 15, 17, 32];
console.log(myFavouriteNumbers.reduce((a, v) => a + v ));

// 2 pratimas

const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];
console.log(cars.reduce((a, v) => v.length === 3 ? a + 1 : a, 0));

// 3 pratimas

const aLotOfNumbers = [5, 13, 43, 67, 32, 12, 3, 36, 78];
console.log(aLotOfNumbers.reduce((a, v) => a > v ? a : v));
