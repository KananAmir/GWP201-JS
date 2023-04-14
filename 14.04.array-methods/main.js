const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "orange", "lemon", "orange"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
// const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

//pop, push, shift, unshift, at

// console.log(numbers.at(5));
// console.log(numbers.at(-3));

// numbers.pop()
// console.log(numbers.pop()); //100

// console.log(numbers.shift()); //0

// console.log("PUSH", numbers.push(222)); // length of array
// console.log("UNSHIFT", numbers.unshift(111)); // length of array

// console.log(numbers);

//property
// console.log(numbers.length);

//concat

let nums1 = [1, 2, 3];
let nums2 = [4, 5, 6];
let nums3 = [7, 8, 9];

// let combinedNums = nums1.concat(nums2, nums3);
// nums2.push("a");

let combinedNums2 = [...nums1, ...nums2, ...nums3];

nums2.push("a");
// console.log(combinedNums);
// console.log(combinedNums2);

//indexOf vs lastIndexOf

console.log(fruits.indexOf("orange"));
console.log(fruits.lastIndexOf("orange"));
// fruits.lastIndexOf;

//slice

// console.log(countries.slice());
// console.log(countries.slice(0));
// console.log(countries.slice(2));
// console.log(countries.slice(2, 5));
console.log(countries.slice(-2));

//splice
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies

// webTechs.splice(1, 2);
// webTechs.splice(1, 2, "C#", "Nazim");
webTechs.splice(3, 0, "C#");
console.log(webTechs);

//reverse

let scores = [33, 70, 38, 94, 59];

scores.reverse();

// for (let i = scores.length - 1; i >= 0; i--) {
//   console.log(scores[i]);
// }
console.log(scores);

//join

let studens = ["Mazahir", "Nabir", "Zarifa"];

// console.log(typeof studens.join());
// console.log(studens.toString());

console.log(studens.join("="));
console.log(studens.join("-"));
console.log(studens.join(" "));
console.log(studens.join(""));
