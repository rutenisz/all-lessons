// 1 pratimas (patikrinti, ar legalus amzius)

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge() {
    if (this.age >= 18) {
      console.log(this.name + " is old enough to drink");
    } else {
      console.log(this.name + " can't drink");
    }
  }
}

const person = new Person("Petras", 16);
person.compareAge();

// 2 pratimas (grąžintų tik skaičius)

const filterNumber = (arr) => {
  return arr.filter((elem) => typeof elem === "number");
};

const array = [1, 5, "a", "g", "z", 6];
const filteredArray = filterNumber(array);
console.log(filteredArray);

// 3 pratimas

const doubleLetters = (string) => {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (/[a-zA-Z]/.test(char)) {
      // /[a-zA-Z]/ paziuri ar yra raides, o test(char) yra metodas, kuris grazina booleana, siuo atveju tikrina raide, jei yra raide, returnins true, jei ne - false
      result += char + char;
    } else {
      result += char;
    }
  }
  return result;
};

const string = "Ruta 123 Davidaviciute";
console.log(doubleLetters(string));

// 4 pratimas
const validPostcode = (postcode) => {
  postcode = postcode.replace(/\s/g, " "); // Matches a string consisting of exactly 5 digits (i.e., numbers from 0 to 9).

  const postcodeRegex = /^\d{5}$|^\d{3}[a-zA-Z]{2}$/; // Matches a string consisting of 3 digits followed by 2 letters (either uppercase or lowercase).
  return postcodeRegex.test(postcode);
};

console.log(validPostcode("abc123")); // Output: false
console.log(validPostcode("12345")); // Output: true
console.log(validPostcode("123ab")); // Output: true

// 5 pratimas

const addSeven = (arr) => {
  // Iterate over the array and modify each element
  for (let i = 0; i < arr.length; i++) {
    // Check if the element ends with "7"
    if (!arr[i].endsWith("7")) {
      // If not, add "7" to the end
      arr[i] += "7";
    }
  }
  return arr;
};

console.log(addSeven(["G", "F", "C"])); // Output: ["G7", "F7", "C7"]
console.log(addSeven(["Dm", "G", "E", "A"])); // Output: ["Dm7", "G7", "E7", "A7"]
console.log(addSeven(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])); // Output: ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
console.log(addSeven([])); // Output: []
