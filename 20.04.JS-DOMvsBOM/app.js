// DOM - document object model
// BOM - browser object model

// console.log(this);

// let obj = {
//   firstName: "Lorem",
//   lastName: "Ipsum",
//   // getFullName(){},
//   getFullName: function () {
//     return this.firstName; // lorem
//   },
// };

// console.log(obj.getFullName());

console.log(document);

// setTimeout vs setInterval

let time = 0;

// let myTimeOut = setTimeout(() => {
//   console.log("hello gwp201");
// }, time);

// // clearInterval(myTimeOut);

// let interval = setInterval(() => {
//   console.log("gwp201");
// }, 1000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 5000);

// let count = 0;
// let countInterval;
// countInterval = setInterval(() => {
//   console.log(++count);

//   if (count == 100) {
//     clearInterval(countInterval);
//   }
// }, 100);

let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let result = document.querySelector("#result");

console.log(startBtn);
// console.log(stopBtn);
// console.log(result);

let count = 0;
let interval;

startBtn.addEventListener("click", function () {
  clearInterval(interval);

  //   console.log(this);
  this.setAttribute("disabled", "true");
  stopBtn.removeAttribute("disabled");
  interval = setInterval(() => {
    count++;
    result.innerText = count;
  }, 1000);
  //   result.innerText = ++count;
});

stopBtn.addEventListener("click", function () {
  //   console.log("stop btn clicked");
//   result.innerText = --count;

  clearInterval(interval);

  startBtn.removeAttribute("disabled");
  this.setAttribute("disabled", "true");
});

resetBtn.addEventListener("click", function () {
  count = 0;
  result.innerText = 0;
  clearInterval(interval);
  //   console.log(this);

  startBtn.removeAttribute("disabled");
  stopBtn.removeAttribute("disabled");
});
