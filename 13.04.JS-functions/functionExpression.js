//Decleration
// function sayHi() {
//   console.log("Hello");
// }

//function expression
let sayHi = function () {
  console.log("Hello");
};

sayHi();

let testFunc = sayHi;

testFunc();

// calculateSumOfNumbers(); // error

var calculateSumOfNumbers = function (a = 0, b = 0) {
  console.log("RESULT", a + b);
};

calculateSumOfNumbers(5, 6);
