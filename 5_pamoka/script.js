// funkcijos

// 1 pratimas

// function myFunction() {
//   alert("Ruta");
// }

// myFunction();

// 2 pratimas

function secondFunction() {
  console.log(Math.floor(Math.random() * (6 - 1) + 1));
}

secondFunction();

// 3 pratimas

function thirdFunction(name, surname) {
  console.log(name.length + surname.length);
}

const name_1 = "Vardenis";
const surname_1 = "Pavardenis";

thirdFunction(name_1, surname_1);

// 4 pratimas

function fourthFunction(index) {
  const array = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "R",
    "S",
    "Q",
    "W",
  ];
  return array[index];
}

console.log(fourthFunction(0));

// 5 pratimas

function fifthFunction(n1, n2, operator) {
  switch (operator) {
    case "sum":
      return n1 + n2;
    case "sub":
      return n1 - n2;
    case "div":
      return n1 / n2;
    case "multi":
      return n1 * n2;
  }
}

console.log(fifthFunction(5, 1, "div"));

// 6 pratimas

function sixthFunction() {
  return Math.floor(Math.random() * 10 + 1);
}

function squareNum(number) {
  return Math.pow(number, 2);
}

console.log(squareNum(sixthFunction()));

// eventai

// 1 pratimas html

// 2 pratimas

// naujas budas kaip rasoma funkcija
const sayMyName = () => {
  alert("Ruta :)");
};

document.querySelector("button").addEventListener("click", sayMyName);
// senas budas kaip rasoma funkcija
// function sayMyName() {
//   alert("Ruta :)");
// }

// 3 pratimas

document.querySelector(".info").addEventListener("click", () => {
  document.querySelector("p").innerText = "I am 23 years old, from Lithuania";
});

// 4 pratimas

let addNumber = 0;

document.querySelector(".number").addEventListener("click", () => {
  addNumber++;
  document.querySelector("h1").innerText = addNumber;
});

// 5 pratimas

document.querySelector(".text").addEventListener("copy", () => {
  event.preventDefault();
  alert("Don't copy!");
});

// 6 pratimas

const randomNumber = () => {
  return Math.floor(Math.random() * 100 + 1);
};

document.querySelector(".random_number").addEventListener("click", () => {
  document.querySelector(".bigger_random_number").innerHTML = randomNumber();
});

// 7 pratimas

document.querySelector(".older_btn").addEventListener("click", () => {
  document.querySelector(".older_text").innerText = "Alus";
});

const youngerText = () => {
  alert("nepilnametis - nieko neturim");
};

document.querySelector(".younger_btn").addEventListener("click", youngerText);

// 8 pratimas

const randomBetweenOneAndThree = () => {
  return Math.floor(Math.random() * 3 + 1);
};
const random_Number = randomBetweenOneAndThree();
console.log(random_Number);

document
  .querySelector(".first_btn")
  .addEventListener("click", () =>
    random_Number === 1 ? alert("Yay") : alert("Nay")
  );

document
  .querySelector(".second_btn")
  .addEventListener("click", () =>
    random_Number === 2 ? alert("Yay") : alert("Nay")
  );

document
  .querySelector(".third_btn")
  .addEventListener("click", () =>
    random_Number === 3 ? alert("Yay") : alert("Nay")
  );

// 9 pratimas

document.querySelector(".dont_press").addEventListener("click", () => {
  document.querySelector(".dont_press").innerText = "Neklausote manęs";
});

// 10 pratimas

document.querySelector(".isMoved").addEventListener("mousemove", () => {
    document.querySelector(".isMoved").innerText = "Neklausote manęs"
})