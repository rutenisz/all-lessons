// 1 pratimas vardas
// document.querySelector("h3").addEventListener("click", (event) => {
//   document.querySelector("h3").style.fontSize = "2em";
//   document.querySelector("h3").style.position = "center";
//   document.querySelector("h3").style.color = "red";
// });

// 2 pratimas mygtukas

const button = document.querySelector("button");
button.style.cssText = "position:absolute; top:0; left:0;";

let firstPosition = true;
const changePosition = () => {
  event.target.style.cssText = firstPosition
    ? "position:absolute; bottom:0; right:0;"
    : "position:absolute; top:0; left:0;";
  firstPosition = !firstPosition;
};

button.addEventListener("click", changePosition);
// const info = {
//   firstName: "Vardenis",
//   lastName: "Pavardenis",
// };

// function personalInfo() {
//   const keys = Object.keys(info);

//   for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];
//     console.log(info[key]);
//   }
// }

// console.log(personalInfo(info));

// function mapObjectKeys(oldObj, newObjKeys) {
//   const newObj = {};
//   Object.keys(oldObj).forEach((key) => {
//     newObj[oldObj[key]] = newObjKeys[key];
//   });
//   return newObj;
// }

// const oldObj = { a: 'foo', b: 'bar', c: 'baz' };
// const newObjKeys = ['x', 'y', 'z'];
// const newObj = mapObjectKeys(oldObj, newObjKeys);
// console.log(newObj); // { foo: 'x', bar: 'y', baz: 'z' }
