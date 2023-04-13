// function sayHi() {
//   console.log("Hello GWP201");
// }

//Arrow function
// let sayHi = () => {
//   console.log("Hello GWP201");
// };

let sayHi = (name) => console.log("Hello", name);

sayHi("Jhon Doe");
// sum();
let sum = (a, b) => {
  let result = a + b;
  return result;
};

let test = sum(15, 7);

console.log(sum(4, 6));

console.log(test);

// let sum2 = (a, b) => a + b;

let sum2 = (a, b) => {
  return a + b;
};

console.log("SUM2", sum2(1, 2));

let studentsScores = [87, 88, 45, 67, 93, 68];

let sumOfScores = (arr) => {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(sumOfScores(studentsScores));

// function calculateAvarage(studentCount) {
//   let result = sumOfScores(studentsScores) / studentCount;

//   return Math.round(result);
// }

function calculateAvarage() {
  let result = sumOfScores(studentsScores) / studentsScores.length;

  return Math.round(result);
}

console.log(calculateAvarage());

//unlimited args

let findSumOfAll = (...args) => {
  let sum = args[0];
  for (let i = 1; i < args.length; i++) {
    sum += args[i];
  }
  console.log(sum);
};

findSumOfAll(1, 2, 34, 5, 54, 5, 356, 34, 34);
findSumOfAll(1, 2, 34, 5, 4);
findSumOfAll(1, 2, 34);
