// formos

// izanginis pratimas

// const myFunction = (event) => {
//   event.preventDefault();
//   const result = document.querySelector("input[name=Ruta").value;
//   document.querySelector("h1").textContent = result;
// };

// document.querySelector("form").addEventListener("submit", myFunction);

// 1 pratimas

// const myFunction = (event) => {
//   event.preventDefault();
//   const result = document.querySelector("input[name=name_input").value;
//   const name = result
//   alert(name);
// };

// document.querySelector("form").addEventListener("submit", myFunction);

// 2 pratimas

// const myFunction = (event) => {
//   event.preventDefault();
//   const result = document.querySelector("input[name=age").value;
//   const showAge = result;
//   document.querySelector("h1").textContent = showAge;
// };

// document.querySelector("form").addEventListener("submit", myFunction);

// 3 pratimas

// const myFunction = (event) => {
//   event.preventDefault();
//   const yourName = document.querySelector("input[name=name_input").value;
//   const name_result = yourName;

//   const yourAge = document.querySelector("input[name=age").value;
//   const age_result = yourAge;

//   if (age_result >= 18) {
//     document.querySelector("h1").textContent = "Vairuoti gali:" + name_result;
//   } else {
//     document.querySelector("h1").textContent = "Vairuoti negali:" + name_result;
//   }
// };

// document.querySelector("form").addEventListener("submit", myFunction);

// sunkesni pratimai

// 1 pratimas

// const standardPrice = 6;
// const halfPrice = 3;
// const oneThirdPrice = 4;

// const myFunction = (event) => {
//   event.preventDefault();
//   const yourAge = document.querySelector("input[name=age").value;
//   const ageResult = yourAge;

//   if (ageResult <= 16) {
//     document.querySelector("h1").textContent =
//       "Tavo bilieto kaina yra:" + halfPrice;
//   } else if (ageResult >= 60) {
//     document.querySelector("h1").textContent =
//       "Tavo bilieto kaina yra:" + oneThirdPrice;
//   } else {
//     document.querySelector("h1").textContent =
//       "Tavo bilieto kaina yra:" + standardPrice;
//   }
// };

// document.querySelector("form").addEventListener("submit", myFunction);

// 2 pratimas

const myFunction = (event) => {
  event.preventDefault();
  const yourAge = Number(document.querySelector("input[name=age").value);
  const ageResult = yourAge;

  const criminalityIsPressed = document.querySelector("input[type='radio']");
  const criminality = criminalityIsPressed.checked;

  if (ageResult >= 18 && ageResult <= 30 && !criminality) {
    document.querySelector("h1").textContent = "Tau reikės eiti į kariuomenę";
  } else if (ageResult >= 18 && ageResult <= 30 && criminality === "yes") {
    document.querySelector("h1").textContent = "Tau nereikės eiti į kariuomenę";
  } else {
    document.querySelector("h1").textContent = "Tau nereikės eiti į kariuomenę";
  }
};

document.querySelector("form").addEventListener("submit", myFunction);
