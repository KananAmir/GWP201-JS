// arrayın içindəki müsbət ədədləri tapın

let arr = [2, 4, -3, 43, 41, -3];

function findPositives(arr) {
  return arr.filter((el, index) => el > 0);
}

console.log(findPositives(arr));

// üçbucağın tərəfləri verilib, düzbucaqlı üçbucaq olub olmamasını tapın

function isRectangle(a, b, c) {
  if (
    a ** 2 + b ** 2 == c ** 2 ||
    a ** 2 + c ** 2 == b ** 2 ||
    b ** 2 + c ** 2 == a ** 2
  ) {
    return "YES";
  } else {
    return "NO";
  }
}
// console.log(isRectangle(3, 4, 5)); //yes
// console.log(isRectangle(3, 6, 5)); //no
// console.log(isRectangle(4, 5, 3)); //yes

// n factorial hesablayan function yazın
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// console.log(factorial(4));
// console.log(factorial(2));
// console.log(factorial(7));

// arrayin elementləri arasında uzunluğu ən çox olan elementi tapan funksiya yazın
const countries = [
  "Finland",
  "Denmark",
  "Sweden",
  "Azerbaijan",
  "Norway",
  "Iceland",
];

function findMaxLenth(arr) {
  let lengthsArr = countries.map((el) => el.length);
  let maxLength = Math.max(...lengthsArr); //10
  return arr.find((el) => el.length === maxLength);
}
console.log(findMaxLenth(countries));

// arrayın içindəki bütün hərfləri böyük olan elementin indexini tapın
const webTechs = ["html", "CSS", "js", "REACT", "Redux", "Node", "MongDB"];

console.log(webTechs.find((el) => el === el.toLocaleUpperCase()));
console.log(webTechs.findIndex((el) => el === el.toLocaleUpperCase()));

let arr2 = [
  {
    name: "test",
    key: 9,
  },
  {
    name: "task",
    key: 4,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 2,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "Trust",
    key: 8,
  },
  {
    name: "test",
    key: 12,
  },
  {
    name: "last",
    key: 6,
  },
  {
    name: "tanqo",
    key: 1,
  },
  {
    name: "elephant",
    key: 13,
  },
  {
    name: "Love",
    key: 11,
  },
  {
    name: "small",
    key: 7,
  },
  {
    name: "Little",
    key: 10,
  },
];
// arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin

// console.log(arr2.filter((item) => item.name[0].toLocaleLowerCase() == "t"));

console.log(
  arr2.filter((item) => item.name.toLocaleLowerCase().startsWith("t"))
);

// arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin

// console.log(
//   arr2.filter(
//     (item) =>
//       item.name[0] == "t" &&
//       item.name[item.name.length - 1].toLocaleLowerCase() == "t"
//   ).length
// );

console.log(
  arr2.filter(
    (item) =>
      item.name.toLocaleLowerCase().startsWith("t") &&
      item.name.toLocaleLowerCase().endsWith("t")
  )
);

// arr2 de "name"-i en uzun olan obyektin key-i ni tapin

let lengthsArr = arr2.map((el) => el.name.length);
let maxLength = Math.max(...lengthsArr);
console.log(arr2.find((el) => el.name.length === maxLength));

// key'leri 10'dan boyuk ve 'l' herfi ile bashlayan obyektleri tapin
function findElem(array) {
  return array.filter(
    (item) => item.key > 10 && item.name.toLocaleLowerCase().startsWith("l")
  );
}
console.log(findElem(arr2));
// arr2 de en boyuk "key"-i olan obyektin "name"-i ni tapin
function findMaxKey(array) {
  let keys = array.map((item) => item.key);
  let max = Math.max(...keys);
  return array.find((item) => item.key == max).name;
}
console.log(findMaxKey(arr2));

// arr2 de terkibinde 1 den cox 't' herfi olan obyekt(ler)in key(ler)ini tapin.
