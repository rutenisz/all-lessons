// while ir do while

// pavyzdžiai

// let i = 0;

// while(i < 5) {
//     alert(i);
//     i++
// }

// let i = 0;

// do {
//   alert(i);
//   i++;
// } while (i < 5);
// do while vieną kartą visada pasileidžia

// 1 pratimas 

// let i = 0;

// while(i < 3) {
//     console.log("Ruta");
//     i++;
// }

// 2 pratimas

let combo = "";
let times = 0;

do {
    console.log(combo += "Ruta");
    times++;
} while (times < 5);

// math object

// 1 pratimas

console.log(Math.cos(0));

// 2 pratimas

console.log(Math.floor(Math.random() * (6 - 1) + 1));

// 3 pratimas 

console.log(Math.floor(Math.random() * (13 - 5) + 5));

// 4 pratimas

// const randomNumber = Math.floor(Math.random() * (6 - 1) + 1);

// randomNumber === 1 ? alert("You won") : alert("Try next time");

// DOM manipuliacija

// pavyzdžiai

// console.log(document.getElementById("text"));
// document.getElementById("text").textContent = "Hi";
// //pasiselectinti
// document.getElementsByClassName("text")[3].textContent = "bye";

// 1 pratimas

const myName = "Ruta";
const h2 = document.createElement("h2");
h2.textContent = myName;
document.body.prepend(h2);

// 2 pratimas 
const myName1 = "Robertas"
document.getElementById("name").textContent = myName1;

// 3 pratimas

document.querySelector("li:last-child").textContent = "Sūris";

// kompleksiniai DOM selektoriai

// 1 pratimas

document.querySelector(".bluetext span").textContent = "blue";

// 2 pratimas

const listElement = document.querySelector('ol'); 
const firstItem = listElement.children[0];
const secondItem = listElement.children[1];
listElement.insertBefore(secondItem, firstItem);