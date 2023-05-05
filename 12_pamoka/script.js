// boolean metodo uzduotis

// let legalAge = false;

// console.log(legalAge);
// console.log(legalAge.toString());

// // number pratimai

// // 1 pratimas

// const milkPrice = 0.99;
// if (Number.isInteger(milkPrice)) {
//   alert("Tau nereikės centų");
// } else {
//   alert("Tau reikės centų");
// }

// // 2 pratimas

// const milkPrice_1 = 3.0;
// if (Number.isInteger(milkPrice_1)) {
//   alert("Tau nereikės centų");
// } else {
//   alert("Tau reikės centų");
// }

// alert(milkPrice_1.toFixed(2));

// 3 pratimas

// const myFunction = (event) => {
//   event.preventDefault();
//   const gasPrice = Number(document.querySelector("input[name='price']").value);
//   const resultGasPrice = gasPrice;

//   const quantityNumber = Number(
//     document.querySelector("input[name=quantity").value);
//   const resultQuantityNumber = quantityNumber;

//   const result = resultGasPrice * resultQuantityNumber;
//   const finalResult = Number(result.toFixed(2));
//   document.querySelector("h1").textContent = finalResult;
// };

// document.querySelector("form").addEventListener("submit", myFunction);

// String metodai

// 1 pratimas

// const myFunction = (event) => {
//   event.preventDefault();
//   const inputName = document.querySelector("input[name='name_input']").value;
//   const resultName = inputName;
//   console.log(resultName);

//   const inputNumber = Number(
//     document.querySelector("input[name='number_input']").value
//   );
//   const resultNumber = inputNumber;

//   if (Number.isInteger(inputNumber)) {
//     document.querySelector("h1").textContent = resultName.repeat(resultNumber);
//   } else {
//     alert("Prašau įvesti sveiką skaičių");
//   }
// };

// document.querySelector("form").addEventListener("submit", myFunction);

// 2 pratimas

// const myFunction = (event) => {
//   event.preventDefault();
//   const inputName = document.querySelector("input[name='name_input']").value;
//   const resultName = inputName;
//   const finalName = resultName.trim();
//   const nameLength = finalName.length;
//   alert(nameLength);
// };

// document.querySelector("form").addEventListener("submit", myFunction);

// 3 pratimas ir 4 pratimas

const myFunction = (event) => {
  event.preventDefault();
  const inputFullName = document.querySelector("input[name='full_name']").value;
  const nameSurname = inputFullName.split(" ");
  const name = nameSurname[0];
  const surname = nameSurname.slice(1).join(" "); // slice paima nuo 1 indexo kas yra likę, o join padaro vieną stringą

  document.querySelector("#name").textContent = name;
  document.querySelector("#surname").textContent = surname;
};

document.querySelector("form").addEventListener("submit", myFunction);
