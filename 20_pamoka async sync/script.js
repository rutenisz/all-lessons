// Teorija

// let mylesiu = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(), 1000);
//   //   if (Petras.tampa.geras) {
//   //     resolve();
//   //   } else {
//   //     reject();
//   //   }
// });

// let fetch = new Promise((resolve, reject) => {
//   console.log("Eik i url");
//   console.log("Siusk ta jsona");
//   if (File.ok) {
//     resolve(File);
//   } else {
//     reject(error);
//   }
// });

// 1 pratimas

// let greeting = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(), 5000);
// });

// greeting.then(() => alert("Veikia!"));

// console.log(
//   "Šitas kodas pasileis pirmas, nors ir yra paskutinis. Tai būtent mūsų asinchroniškumas"
// );

// 2 pratimas, 3 pratimas

let greeting = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 5) + 1;
  setTimeout(() => {
    if (random === 1) {
      reject();
    } else {
      resolve();
    }
  }, 5000);
});

greeting.then(() => alert("this is a message")).then(() => alert("Veikia!")).catch(() => alert("Neveikia"));

console.log(
  "Šitas kodas pasileis pirmas, nors ir yra paskutinis. Tai būtent mūsų asinchroniškumas"
);
