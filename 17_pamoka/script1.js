// 1 pratimas

// function Person(name, surname) {
//   this.name = name;
//   this.surname = surname;
//   this.showOnScreen = function () {
//     document.querySelector("#name").innerHTML = this.name;
//     document.querySelector("#surname").innerHTML = this.surname;
//   };
//   this.capitalize = function () {
//     const fullName = document
//       .querySelector("input[name=fullname]")
//       .value.trim();
//     if (fullName === "") {
//       alert("Enter full name:");
//     }
//     const divide = fullName.split(" ");
//     this.name =
//       divide[0].charAt(0).toUpperCase() + divide[0].slice(1).toLowerCase();
//     this.surname =
//       divide[1].charAt(0).toUpperCase() + divide[1].slice(1).toLowerCase();
//   };
// }

// document.querySelector("form").addEventListener("submit", function (event) {
//   event.preventDefault();
//   const person = new Person(name, surname);
//   person.capitalize();
//   person.showOnScreen();
// });

// 2 pratimas

// 3 pratimas masyvai

function filterDuplicates(arr) {
  const uniqueSet = new Set(arr); // create a Set with the unique values from the array
  return Array.from(uniqueSet); // convert the Set back to an array and return it
}
const arr = [1, 3, 3, 5, 5, 5];
const filteredArr = filterDuplicates(arr);
console.log(filteredArr);

//cao.lt
const removeDuplicates = arr => [...new Set(arr)];
console.log(removeDuplicates([1, 3, 3, 5, 5, 5]));
