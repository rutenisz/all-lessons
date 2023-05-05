// teorija

// document.cookie = "name=Ruta"; // sukuriam coookie
// console.log(document.cookie);
// localStorage.setItem("name", "Ruta"); //sukuriame local storage itema
// console.log(localStorage.getItem("name")); // paconsologinam itema is local storage
// local storage issisaugos info, iki kol vartotojas ja istrins

// 1 pavyzdys
// document.querySelector("h1").textContent = localStorage.getItem("name");
// document.forms[0].addEventListener("submit", (e) => {
//   const name = e.target.elements.name.value;

//   const array = [];
//   array.push(name);
//   localStorage.setItem("name", array);
// });

// // 2 pavyzdys
// const cars = ["BMW", "Audi"];
// console.log(JSON.parse(JSON.stringify(cars))); // JSON.stringify() pakeicia i stringa
// JSON.parse() atkonvertuoja atgal i objekta
// tokiu budu galime saugoti kompleksinius duomenis local storage

// 1 pratimas

// const nameForm = document.querySelector("form");
// const nameInput = document.getElementById("name_input");
// const greetingContainer = document.getElementById("output");
// const formContainer = document.getElementById("form-container");

// // check if the name is already stored in a cookie

// const name = getCookie("name");
// if (name) {
//   // if it is, display a greeting and a button to delete the cookie
//   greetingContainer.innerHTML = `Hello, ${name}`;
//   const deleteButton = document.createElement("button");
//   deleteButton.textContent = "Delete Cookie";
//   deleteButton.addEventListener("click", () => {
//     document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path =/;";
//     greetingContainer.innerHTML = "";
//     showForm();
//   });
//   greetingContainer.appendChild(deleteButton);
// } else {
//   // if it's not, show the form and handle submission
//   showForm();
// }

// function showForm() {
//   formContainer.style.display = "block";
//   nameForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const newName = nameInput.value;
//     // save the name in a cookie that expires in 30 days
//     document.cookie = `name=${newName} ; expires=${new Date(
//       Date.now() + 30 * 24 * 60 * 60 * 1000
//     ).toUTCString()}; path=/`; // 30 days in miliseconds
//     // display a greeting and a button to delete the cookie
//     greetingContainer.innerHTML = `Hello, ${newName}`;
//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete Cookie";
//     deleteButton.addEventListener("click", () => {
//       document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//       greetingContainer.innerHTML = "";
//       showForm();
//     });
//     greetingContainer.appendChild(deleteButton);
//     // hide the form
//     formContainer.style.display = "none";
//   });
// }

// function getCookie(name) {
//   const cookies = document.cookie.split("; ");
//   for (const cookie of cookies) {
//     const [cookieName, cookieValue] = cookie.split("=");
//     if (cookieName === name) {
//       return decodeURIComponent(cookieValue);
//     }
//   }
//   return null;
// }

// 2 pratimas

const profileInfo = {
  firstName: "Rustin",
  lastName: "Cohle",
  picture: "https://upload.wikimedia.org/wikipedia/en/8/8a/Rustin_Cohle.jpg",
  description:
    "Rustin Cohle is a fictional character from the best series of all time - True Detective",
};
localStorage.setItem("profile", JSON.stringify(profileInfo));

const renderProfileCard = (profile) => {
  const img = document.createElement("img");
  img.width = "200";
  img.src = profile.picture;
  img.alt = `${profile.firstName} ${profileInfo.lastName} profile picture`;

  const name = document.createElement("h4");
  name.innerText = `${profile.firstName} ${profile.lastName}`;

  const description = document.createElement("h5");
  description.innerText = profile.description;

  const card = document.createElement("div");
  card.append(img, name, description);
  document.body.append(card);
};

const profileInfoFromLocalStorage = JSON.parse(localStorage.getItem("profile"));
renderProfileCard(profileInfoFromLocalStorage);

// 3 pratimas

const LOCAL_STORAGE_ITEM_KEY = "users";

const renderUsersTable = () => {
  const users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM_KEY));
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  users &&
    users.forEach((user) => {
      const name = document.createElement("td");
      name.innerText = user.name;

      const surname = document.createElement("td");
      surname.innerText = user.surname;

      const tr = document.createElement("tr");
      tr.append(name, surname);
      tbody.append(tr);
    });
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const fullName = event.target.querySelector('input[name="name"]').value;
  const [name, surname] = fullName.split(" ");

  const usersInlocalStorage = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_ITEM_KEY)
  );
  if (usersInlocalStorage && usersInlocalStorage.length) {
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_KEY,
      JSON.stringify([...usersInlocalStorage, { name, surname }])
    );
  } else {
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_KEY,
      JSON.stringify([{ name, surname }])
    );
  }
  renderUsersTable();
});

renderUsersTable();
