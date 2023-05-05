// matematikos operatoriai

// console.log(2 === 2);
// console.log(2 == "2");
// console.log(2 !== 2);
// console.log(5 < 5);
// console.log(5 >= 4);
// console.log(true !== false);
// console.log(9 - 5 === 4);
// console.log(5 * 5 !== "25");
// console.log(true && true);
// console.log(2 === 5 && true);
// console.log(6 * 6 === 36 && 15 - 9 == "6");
// console.log(false || false);
// console.log(10 === 10 || 5 == 2);
// console.log(2 * 2 / 2 == "1" || 5 * 5 === 25);
// console.log(14 * 2 !== "28" || "Jonas" == "Jonas");
// console.log(10 && 15 > 10);
// console.log("Petras" && 0);
// console.log(("Petras" || "Jonas") && (22 * 5 || 15 - 1 === 13));
// console.log("jonas" === "Jonas");
// console.log("Petras" + 5 === "Petras" + "5");
// console.log("Jonas" + 5 + 5 === "Jonas10");
// console.log(5 + 10 + "Antanas" === "15Antanas");
// console.log(2 + 1 + "Jonas" + 3 + 2 === "3Jonas5");
// console.log(10 % 1 === 1);
// console.log(5 * "5" === 25);
// console.log(25 !== 25);

// if - else if - else pratimai

// 1 pratimas

const legalAge = 20;
const clientAge = 25;

if (legalAge >= clientAge) {
    alert("Yes");
} else {
    alert("No");
}

// 2 pratimas

const name = "Ruta";
const longName = 6;

if (name.length >= 6) {
    alert("Long name")
}

// 3 pratimas 

const age = 23;

if (age > 100 || age < 0) {
    alert("Invalid age")
} else if (age >= 1 && age <=18) {
    alert("Child")
} else {
    alert("Adult");
}

// 4 pratimas 

const car = "BMW";
const groupVW = ["VW", "Audi", "Bentley", "Bugatti", "Lamborghini", "Porsche"];
const groupBMW = ["BMW", "Mini", "Rolls-Royce"]

if (car === groupVW[0] || car === groupVW[1] || car === groupVW[2] || car === groupVW[3] || car === groupVW[4] || car === groupVW[5]) {
    alert("VW Group");
} else if (car === groupBMW[0] || car === groupBMW[1] || car === groupBMW[2]) {
    alert("BMW Group");
} else {
    alert("Nei vienam");
}