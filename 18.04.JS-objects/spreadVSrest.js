const numbers = [10, 3.14, -9.81, 37, -98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

//spread

let fruitsAndVegetables = [...fruits, ...vegetables];

console.log(fruitsAndVegetables);

//unlimited argument function

// function testFunc(...args) {
//   console.log(args);
// }

//rest
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 4, 4, 5));

// let [html, css, js, ...rest] = webTechs;
let [html, css, js, ...qalanlar] = webTechs;

console.log(html, css, js);
console.log(qalanlar);

function funcRest(a, b, c, ...args) {
  console.log(a, b, c);
  console.log("ARGS", args);
}

funcRest(1, 2, 3, 4, 5, 6, 7, 8);
