// 1 pratimas

// Fetch data from API
fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => {
    const user = data.results[0];

    // Display user data on webpage
    const usersDiv = document.getElementById("users");
    usersDiv.innerHTML = `
                    <img src=${user.picture.large}>
					<h2>${user.name.first} ${user.name.last}</h2>
					<p>Age: ${user.dob.age}</p>
					<p>Email: ${user.email}</p>
					<p>Address: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}</p>
				`;
  })
  .catch((error) => console.error(error));
