// 1 pratimas

// fetch data from API
// fetch("https://magnetic-melon-yam.glitch.me")
//   .then((response) => response.json())
//   .then((data) => {
//     const tableHtml = `<table><thead><tr><th>ID</th><th>Name</th><th>City</th><th>Favorite Colour</th></tr></thead><tbody>${data
//       .map(
//         (record) =>
//           `<tr><td>${record.id}</td><td>${record.name}</td><td>${record.city}</td><td>${record.fav_color}</td></tr>`
//       )
//       .join("")}</tbody></table>`;

//     document.getElementById("users").innerHTML = tableHtml;
//   })
//   .catch((error) => console.error(error));

// The data.map() function is used to create a new array of table rows, where each row corresponds to a record in the data.
// The join() function is then used to concatenate all the rows into a single string.

// 2 pratimas padaryti taip, kad butu vardas ir pavarde

// fetch data from API
// fetch("https://magnetic-melon-yam.glitch.me")
//   .then((response) => response.json())
//   .then((data) => {
//     const tableHtml = `<table><thead><tr><th>ID</th><th>First Name</th><th>Last name</th><th>City</th><th>Favorite Colour</th></tr></thead><tbody>${data
//       .map((record) => {
//         const [firstName, lastName] = record.name.split(" ");
//         return `<tr><td>${record.id}</td><td>${firstName}</td><td>${lastName}</td><td>${record.city}</td><td>${record.fav_color}</td></tr>`;
//       })
//       .join("")}</tbody></table>`;

//     document.getElementById("users").innerHTML = tableHtml;
//   })
//   .catch((error) => console.error(error));

// The data.map() function is used to create a new array of table rows, where each row corresponds to a record in the data.
// The join() function is then used to concatenate all the rows into a single string.
// the record.name string into two parts (first name and last name) using the split() method. The first part of the split string is assigned to the firstName variable, and the second part is assigned to the lastName variable.
// 3 pratimas prideti nuotrauka tarp id ir name

fetch("https://magnetic-melon-yam.glitch.me")
  .then((response) => response.json())
  .then((data) => {
    const tableHtml = `<table><thead><tr><th>ID</th><th>Picture</th><th>First Name</th><th>Last name</th><th>City</th><th>Favorite Colour</th></tr></thead><tbody>${data
      .map((record) => {
        const [firstName, lastName] = record.name.split(" ");
        return `<tr><td>${record.id}</td><td><img src="${record.image}" alt="User Image"></td><td>${firstName}</td><td>${lastName}</td><td>${record.city}</td><td>${record.fav_color}</td></tr>`;
      })
      .join("")}</tbody></table>`;

    document.getElementById("users").innerHTML = tableHtml;
  })
  .catch((error) => console.error(error));

// 4 pratimas sukurti checkboxa kuri paspaudus rodytu tik VIP

fetch("https://magnetic-melon-yam.glitch.me")
  .then((response) => response.json())
  .then((data) => {
    const tableHtml = `<table><thead><tr><th>ID</th><th>Picture</th><th>First Name</th><th>Last name</th><th>City</th><th>Favorite Colour</th></tr></thead><tbody>${data
      .map((record) => {
        const [firstName, lastName] = record.name.split(" ");
        return `<tr><td>${record.id}</td><td><img src="${record.image}" alt="User Image"></td><td>${firstName}</td><td>${lastName}</td><td>${record.city}</td><td>${record.fav_color}</td></tr>`;
      })
      .join("")}</tbody></table>`;

    document.getElementById("users").innerHTML =  tableHtml;
  })

  const vipCheckbox = document.getElementById("vip-checkbox");
  vipCheckbox.addEventListener("change", () => {
    const tableBody = document.getElementById("user-table-body");
    const rows = tableBody.querySelector("tr");
    
  })
  .catch((error) => console.error(error));



const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.id = "vipCheckbox";

const label = document.createElement("label");
label.htmlFor = "vipCheckbox";
label.appendChild(document.createTextNode("Show only VIP"));

const checkboxContainer = document.getElementById("checkbox-container");
checkboxContainer.appendChild(checkbox);
checkboxContainer.appendChild(label);
