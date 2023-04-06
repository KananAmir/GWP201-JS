// let number = 4;

// if (number >= 6) {
//   console.log("number is equal or greater than 6");
// } else {
//   console.log("number is less than 6");
// }

let num = 10;

if (num > 0) {
  console.log(`${num} is positive number`);
} else if (num < 0) {
  console.log(`${num} is negative number`);
} else {
  console.log(`${num} is zero`);
}

let userName = "Lorem Ipsum";
let userAge = 15;
let city = "London";

// if (userAge >= 16 && city == "Ganja") {
//   console.log(`Wellcome ${userName}, city: ${city}`);
// } else {
//   console.log(`age is not relevant & city is not Ganja`);
// }

if (userAge >= 16) {
  if (city == "Ganja") {
    console.log(`Wellcome ${userName}, city: ${city}`);
  } else {
    console.log(`city is not okay, but age is okay`);
  }
} else {
  console.log("age is not okay");
}

let weekDay = 30;
let
switch (weekDay) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
  case 15:
  case 20:
    console.log("Today is Monday");
    break;
  case 2:
  case 30:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;

  default:
    console.log("There is no such week day");

    break;
}

