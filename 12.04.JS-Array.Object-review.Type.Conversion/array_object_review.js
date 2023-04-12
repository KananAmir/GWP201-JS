let numbers = [1, 33, 422, 5, 75];

let newArr = new Array(19);

// console.log(newArr);

// for (let i = 0; i < newArr.length; i++) {
//   console.log(newArr[i]);
// }

// numbers.length = 0;

// numbers.length = 6;

// console.log(numbers);

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum);

// console.log(Math.max(...numbers));
// let numbers = [1, 33, 422, 5, 75];

let max = numbers[0]; // 1

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("max", max);

let min = numbers[0]; // 1

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
// console.log("min", min);

// console.log("Az" > "Ahjbjhbjskbdasbkd");

// console.log(typeof numbers);

//object

const userObj = {
  username: "Lorem Ipsum",
  email: "lorem@gmail.com",
  skills: ["HTML", "CSS"],
  computer: {
    marka: "ASUS",
  },
};

console.log(userObj.username);
// console.log(userObj.[username]);

// const newUserObj = userObj;
// userObj.username = "Jhon";

// console.log(userObj);
// console.log(newUserObj);

// const newUserObj = userObj;

const newUserObj = { ...userObj };

userObj.username = "Jhon";

console.log(userObj);
console.log(newUserObj);


//deep copy
// let newUserObj = structuredClone(userObj);
