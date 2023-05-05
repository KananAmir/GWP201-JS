//Promises

// pending, fullfilled, rejected states
// let promise = new Promise((resolve, reject) => {
//   let number = 19;

//   if (number > 18) {
//     resolve("SUCCESS");
//   } else {
//     reject("FAILED");
//   }
// });

// console.log(promise);

// then, catch, finally blocks

// promise
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))
//   .finally(() => {
//     console.log("finally block worked");
//   });

let promise = new Promise((resolve, reject) => {
  let number = 19;

  if (number > 18) {
    resolve("SUCCESS");
  } else {
    reject("FAILED");
  }
});

let promise2 = new Promise((resolve, reject) => {
  let students = ["Raul", "Nabir", "Nurlana", "Sabina"];

  if (students.length > 0) {
    resolve(students);
  } else {
    reject("FAILED");
  }
});

//promise chaning
// promise
//   .then((value) => value.toLocaleLowerCase() + " Salam") // success Salam
//   .then((data) => data.toLocaleUpperCase()) // SUCCESS SALAM
//   .then((res) => console.log(res));

promise2
  .then((value) => {
    value.push("Zarifa");

    return value;
  })
  .then((data) => console.log(data));
