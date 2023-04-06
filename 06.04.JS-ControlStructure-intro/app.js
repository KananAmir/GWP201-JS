let count = 0;

count++;

// console.log(count++);
// console.log(count);

// console.log(++count);
// console.log(--count);

// Locigal operators

let bool = 5 < 7;

// console.log(bool);

// console.log(5 > 2 && 2 < 8);

// console.log(5 < 2 || 2 > 8);

console.log(95 && 5 > 2 && 2 < 8);

console.log(false || (2 > 8 && 17) || 16);

// FALSY VALUES

0, -0, "", "", ``, null, undefined, NaN, false;

95 > 16 && console.log("Hello GWP101");

let num1 = 5;
let num2 = 28;
let sum = num1 + num2;

95 > 16 && console.log("SUM: ", sum);

95 > 16 && console.log(`${num1} + ${num2} = ${num1 + num2}`);

//NULLISH
null ?? console.log("NULLISH"); // only null or undefined

// TEMPLATE LITHERALS

let firstName = "Kanan";
let lastName = "Amirov";

console.log("Hello " + firstName + " " + lastName);

console.log(`Hello ${firstName} ${lastName}`);
