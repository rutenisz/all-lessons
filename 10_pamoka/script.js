// 1 pratimas objektas car

const car = {
  doors: 4,
  color: "Ochra",
  brand: "Subaru",
};

console.log(car);
console.log(car.doors);

// 2 pratimas

// const formInput = (event) => {
//   event.preventDefault();
//   const nameInput = document.querySelector("input[name=name]").value;
//   const surnameInput = document.querySelector("input[name=surname]").value;

//   const person = {
//     Name: nameInput,
//     Surname: surnameInput
//   };
//   console.log(person);
// };

// document.querySelector("form").addEventListener("submit", formInput);

// 3 pratimas

const formInput = (event) => {
  event.preventDefault();
  const nameInput = document.querySelector("input[name=name]").value;
  const ageInput = document.querySelector("input[name=age]").value;
  const isLegalAge = ageInput >= 18; 
  const person = {
    Name: nameInput,
    isLegalAge: isLegalAge,
  };
  console.log(person);
};

document.querySelector("form").addEventListener("submit", formInput);
