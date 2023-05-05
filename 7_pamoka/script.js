// 1 pratimas (Įmonės bonus apskaičiavimas)

// const bonusCalculation = (event) => {
//   event.preventDefault();
//   const bonusInput = document.querySelector("input[name=years]").value;
//   if (bonusInput >= 10 && bonusInput < 20) {
//     document.querySelector("h1").textContent = "Jūsų bonusas yra: 100 eurų";
//   } else if (bonusInput >= 20) {
//     document.querySelector("h1").textContent = "Jūsų bonusas yra: 200 eurų";
//   } else {
//     document.querySelector("h1").textContent = "Jūsų bonusas yra: 50 eurų";
//   }
// };

// document.querySelector("form").addEventListener("submit", bonusCalculation);

// 2 pratimas (Leap year)

// const yearCalculation = (event) => {
//     event.preventDefault();
//     const yearInput = Number(document.querySelector("input[name=year]").value);

//     if (yearInput % 4 === 0 ) {
//         document.querySelector("h1").textContent = "366 days";
//     } else if (yearInput % 100 === 0 && yearInput % 400 === 0) {
//         document.querySelector("h1").textContent = "366 days";
//     } else {
//         document.querySelector("h1").textContent = "365 days";
//     }
// }

// document.querySelector("form").addEventListener("submit", yearCalculation);

//  3 pratimas (Iš celsijaus į farenheitą)

// const temperatureCalculation = (event) => {
//   event.preventDefault();

//   const celsiusInput = document.querySelector("input[name=celsius]").value;

//   document.querySelector("h1").textContent =
//     (celsiusInput * (9 / 5) + 32).toFixed(1) + "°F";
// };

// document.querySelector("form").addEventListener("submit", temperatureCalculation);

// 4 pratimas (Subscribe su emailu)

// const emailSubscribtion = (event) => {
//   event.preventDefault();

//   const emailInput = document.querySelector("input[name=email]").value;

//   if ((document.getElementById("accept").checked)) {
//     document.querySelector("h1").textContent =
//       emailInput + " sėkmingai užregistruotas";
//   } else {
//     document.querySelector("h1").textContent = "Registracija nesėkminga";
//   }
// };

// document.querySelector("form").addEventListener("submit", emailSubscribtion);

// 5 pratimas

// const nameGenerator = (event) => {
//   event.preventDefault();
//   const nameInput = document.querySelector("input[name=name]").value;
//   const numberInput = document.querySelector("input[name=number]").value;

//   const ulList = document.querySelector("ul");
//   ulList.innerHTML = "";
//   for (let i = 0; i < numberInput; i++) {
//     const liItem = document.createElement("li");
//     liItem.innerText = nameInput;
//     ulList.append(liItem);
//   }
// };

// document.querySelector("form").addEventListener("submit", nameGenerator);

// 6 pratimas trikampis

const triangleGeneration = (event) => {
  event.preventDefault();
  const numberInput = document.querySelector("input[name=rectangle]").value;
  const triangle = document.querySelector("div");
  triangle.innerHTML = "";
  for (let i = 0; i < numberInput; i++) {
    const breaker = document.createElement("br");
    for (x = 0; x < i; x++) {
      triangle.append("*");
    }
    triangle.append(breaker);
  }
};

document.querySelector("form").addEventListener("submit", triangleGeneration);
