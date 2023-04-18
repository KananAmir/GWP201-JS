//  every, some, sort, reduce, fill, from, flat, flatMap

const numbers = [10, 3.14, -9.81, 37, -98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

//high order functions - map, forEach, find, reduce etc..

// every vs some

// console.log(numbers.every((el) => el > 0)); // false
// console.log(numbers.every((el) => el > -101)); // true

// console.log(numbers.some((el) => el > 100)); // false
// console.log(numbers.some((el) => el > -101)); // true

//sort
// console.log(fruits.sort());
// console.log(numbers.sort());

// console.log("a" > "A");
// console.log("a".localeCompare("b"));
// console.log("d".localeCompare("b"));

console.log(numbers.sort((a, b) => a - b)); //ascending
console.log(numbers.sort((a, b) => b - a)); //descending

const todos = [
  {
    id: 6,
    title: "delectus aut autem",
    completed: false,
  },
  {
    id: 4,
    title: "quis ut nam facilis et officia qui",
    completed: true,
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    id: 2,
    title: "et porro tempora",
    completed: true,
  },
  {
    id: 8,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    id: 1,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    id: 5,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
];

// console.log(todos);
// console.log(todos.sort((a, b) => a.id - b.id)); //ascending
// console.log(todos.sort((a, b) => b.id - a.id)); //descending
// console.log(todos);

// console.log(todos.sort((a, b) => a.title.length - b.title.length));

// console.log(todos.sort((a, b) => (a.title > b.title ? 1 : -1))); // a to z - ascending
// console.log(todos.sort((a, b) => (b.title > a.title ? 1 : -1))); // z to a - descending

// console.log(todos.sort((a, b) => a.title.localeCompare(b.title))); // a to z - ascending
// console.log(todos.sort((a, b) => a.title.localeCompare(b.title))); // z to a - ascending

//reduce

// let sum = parseInt(numbers.reduce((acc, curr, i, arr) => acc + curr, 0));
// let sum2 = numbers.reduce((acc, curr, i, arr) => acc + curr);

// numbers.reduce((acc, curr, i, arr) => console.log(curr), 0);
// numbers.reduce((acc, curr, i, arr) => console.log(curr));

// console.log(sum);
// console.log(sum2);

// const numArr = [1, 2, 3, 4, 5, 6, 7, 8];

// let newArr = new Array(10);
// console.log(newArr.fill("#"));

// console.log(newArr.fill("*", 5));

// // console.log(numArr.fill("*", 2));
// console.log(numArr.fill("*", 2, 5));

// let count = 0;

// console.log(Array(100).fill());

// console.log(Array.from("gwp101", (x) => x * 2));

// console.log(Array.from([1, 2, 3, 4], (x) => x * 2));

// let flatArr = [1, 2, 3, [4, 5, [5, 6], 6]];
let flatArr2 = [1, 2, 3, [4, 5, 6, [7, 8]], [10]];

// console.log(flatArr.flat());
// console.log(flatArr.flat(1));
// console.log(flatArr.flat(2));

console.log(flatArr2.flat(Infinity));

console.log(flatArr2);

console.log([1, 2, [3, 4, [5, 6]]].flatMap((x) => (x == 1 ? "a" : x)));
console.log([1, 2, [3, 4]].map((x) => (x == 1 ? "a" : x)));
