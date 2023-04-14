const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "orange", "lemon", "orange"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
const countries = ["Finland", "albania", "Azerbaijan", "Norway", "Austria"]; // array of strings, countries

//forEach

webTechs.forEach((element, index, arr) => {
  // index===2 ? console.log(element) : null;
  // index===2 && console.log(element);
  //   console.log(`${index}. ${element}`);
  //   console.log(arr);
});

// for(let item of webTechs){
//     console.log(item);
// }

//map

// let newCountries = countries.map((el, i, arr) => `${i}. ${el}`);

let newCountries = countries.map((el, i, arr) => {
  return `${i}. ${el}`;
});
console.log(newCountries);

let selectedCountries = countries.map((elem, index, arr) => {
  return elem.slice(0, 3).toLocaleUpperCase();
});
console.log(selectedCountries);

// find, finIndex, filter

console.log(fruits.findIndex((elem) => elem[0] == "l"));

let tech = webTechs.find((elem, index) => elem == "Redux");

console.log(tech);

// filter

// let filtered = countries.filter((el, index) => el.length === 7);
let filtered = countries
  .filter((el, index) => el[0].toLocaleLowerCase() === "A".toLocaleLowerCase)
  .map((el) => el.slice(0, 3).toLocaleUpperCase());

console.log(filtered);
