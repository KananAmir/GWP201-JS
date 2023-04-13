// function decleration, function expression, arrow function

//parameter vs argument

//function decleration
//without parameters

function sayHi() {
  console.log("Hello GWP201");
}

//with parameters

function greetings(username) {
  // username -> paramter
  console.log(`Wellcome ${username}`);
}

// sayHi();
greetings(); // Wellcome undefined

greetings("Lorem Ipsum"); // Lorem Ipsum -> argument

// function sumOfDigits(num1, num2) {
//   let result = +num1 + +num2;
//   console.log("RESULT: ", result);
// }

// sumOfDigits(); // undefined + undefined = NaN

// sumOfDigits(7, "8");

function sumOfDigits(num1, num2) {
  let result = num1 + num2;
  return result;
  //   console.log("asdasd");
}

let testVariable = sumOfDigits(15, 4);

console.log(testVariable);

console.log(sumOfDigits(3, 4));

getFullName(); // Welcome lorem ipsum

function getFullName(firstName = "lorem", lastName = "ipsum") {
  console.log(`Wellcome ${firstName} ${lastName}`);
}

getFullName(); // Welcome lorem ipsum
getFullName("Nurlana", "Huseynova"); // Wellcome Nurlana Huseynova
