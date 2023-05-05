// 1 pratimas l raidė

// const lGeneration = (event) => {
//   event.preventDefault();
//   const numberInput = document.querySelector("input[name=size]").value;
//   const l = document.querySelector("div");
//   l.innerHTML = "";
//   for (i = 0; i < numberInput; i++) {
//     const breaker = document.createElement("br");

//     if (numberInput - 1 === i) { // ziuri ar paskutine eilute
//       for (x = 0; x < numberInput; x++) {
//         l.append("L"); // paskutine eiilute - atspausdina tiek l raidziu, kiek nurodyta inpute
//       }
//     } else {
//       l.append("L"); // jei ne, tada spausdina viena raide l
//     }

//     l.append(breaker);
//   }
// };

// document.querySelector("form").addEventListener("submit", lGeneration);

// 2 pratimas c raide

// const cGeneration = (event) => {
//   event.preventDefault();
//   const numberInput = document.querySelector("input[name=size]").value;
//   const c = document.querySelector("div");
//   c.innerHTML = "";
//   for (i = 0; i < numberInput; i++) {
//     const breaker = document.createElement("br");
//     if (numberInput - 1 === i) {
//       // ziuri ar paskutine eilute
//       for (x = 0; x < numberInput; x++) {
//         c.append("C"); // paskutine eiilute - atspausdina tiek c raidziu, kiek nurodyta inpute
//       }
//     } else {
//       c.append("C"); // jei ne, tada spausdina viena raide l
//     }

//     c.append(breaker);
//   }
// };

// document.querySelector("form").addEventListener("submit", cGeneration);

// 3 pratimas vardas (be mygtuko)

// const nameGeneration = () => {
//     const nameInput = document.querySelector("input[name=name]").value;

// }

// 4 pratimas (kuris skaičius arčiau 100)

// 5 pratimas (atspėk skaičių)

const randomNumber = (event) => {
  event.preventDefault();
  const numberInput = document.querySelector("input[name=number]").value;
  const generateNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  console.log(generateNumber);

  if (numberInput < 1 || numberInput > 5) {
    alert("Įveskite skaičių nuo vieno iki penkių!");
  }

  if (numberInput === generateNumber) {
    alert("Atspėjai :)");
  } else {
    alert("Bandyk dar kartą");
  }
};

document.querySelector("form").addEventListener("submit", randomNumber);

// 6 (pakoreguotas 5 pratimas)
