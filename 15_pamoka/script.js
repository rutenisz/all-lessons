// Praktika su funkcijomis ir metodais

// 1 pratimas

const minutesToSeconds = (a) => {
  const result = a * 60;
  console.log(result + " seconds");
};

minutesToSeconds(3);

// 2 pratimas

// const daysLived = (event) => {
//   event.preventDefault();
//   const ageInput = Number(document.querySelector("input[name=age").value);
//   const ageResult = ageInput * 365;

//   document.querySelector("h1").textContent = "You lived " + ageResult + " days";
// };

// document.querySelector("form").addEventListener("submit", daysLived);

// 3 pratimas

const squaredNumber = (a) => a ** 2;
console.log(squaredNumber(4));

// 4 pratimas

const area = (x, y) => (x * y) / 2;
console.log(area(10, 10));

// 5 pratimas

const lastLetter = (word) => word.slice(-1);
console.log(lastLetter("Ona"));

// 6 pratimas

const reverse = (word) => word.split("").reverse().join("").toLowerCase();
console.log(reverse("LABAS"));

// 7 pratimas

const lowestNumber = () => {
  const numbers = [-2, -15, -24, -100, -3, -9];
  numbers.sort((a, b) => b - a);
  return numbers[0];
};

console.log(lowestNumber());

// 8 pratimas

const randomArray = (x) => {
  let arr = [];
  for (let i = 0; i < x; i++) {
    arr.push(Math.floor(Math.random() * 10) + 1);
  }
  return arr;
};

console.log(randomArray(5));

// 9 pratimas

const isBiggerNumber = (x, y) => x + y > 100;
console.log(isBiggerNumber(10, 20));

// 10 pratimas

const myArray = () => {
  const info = [
    { name: "Alfredas", age: 25 },
    { name: "Jonas", age: 25 },
    { name: "Kasparas", age: 20 },
  ];

  info.sort((a, b) => {
    if (a.age === b.age) {
      return a.name.localeCompare(b.name);
    } else {
      return a.age - b.age;
    }
  });

  return info;
};

console.log(myArray());

// 11 pratimas

const holidayDates = [
  "2023-01-01",
  "2023-02-16",
  "2023-03-11",
  "2023-06-24",
  "2023-07-06",
  "2023-12-25",
];
const ifDateIsHoliday = (inputDate) => {
  const date = new Date(inputDate);
  return holidayDates.some(
    (holiday) => new Date(holiday).getDate === date.getDate()
  );
};

console.log(ifDateIsHoliday("2023-01-20"));

// 12 pratimas

