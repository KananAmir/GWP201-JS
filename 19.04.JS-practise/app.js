//reverse string

function reverseString(str) {
  return str.split("").reverse("").join("");
}

console.log(reverseString("hello")); // olleh
console.log(reverseString("gdu")); // udg

function reverseString2(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
}

//polidrom

function isPolidrom(str) {
  if (str === str.split("").reverse().join("")) {
    return `Yes, ${str} is polidrom`;
  } else {
    return `No, ${str} is not polidrom`;
  }
}
function isPolidrom2(str) {
  return str === str.split("").reverse().join("")
    ? `Yes, ${str} is polidrom`
    : `No, ${str} is not polidrom`;
}

// console.log(isPolidrom("hello")); // No, hello is not polidrom
// console.log(isPolidrom("refer")); // Yes, refer is polidrom

console.log(isPolidrom2("hello")); // No, hello is not polidrom
console.log(isPolidrom2("refer")); // Yes, refer is polidrom

//remove dublicated

let arr = [1, 2, 2, 2, 4, 3, 3, 2, 4, 7, 5, 7, 6];

// function removeDublicates(array){
//     return array.filter((element,index)=>array.indexOf(element)===index)

// }
// function removeDublicates2(array) {
//   let result = [];
//   for (let item of array) {
//     if (!result.includes(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// }
function removeDublicates2(array) {
  let result = [];
  array.forEach((element) => !result.includes(element) && result.push(element));
  return result;
}
function removeDublicates3(array) {
  return [...new Set(array)];
}

// let mySet = new Set(arr);
// console.log([...mySet]);

// console.log(removeDublicates2(arr));
console.log(removeDublicates3(arr));

// console.log(removeDublicates2(arr)); // [1,2,3,4,5,6,7]

//generate otp

function generateOtp() {
  let otp = "";
  for (let i = 0; i < 4; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
  p;
}
function generateOtp2() {
  let digits = "0123456789";
  let otp = "";
  for (let i = 0; i < 4; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
}

console.log(generateOtp2()); //4523
console.log(generateOtp2()); //9845
console.log(generateOtp2()); //1532

//find all truth values

let myArr = [1, 4, true, false, 0, 5, "hello", NaN, undefined];

console.log(myArr.filter(Boolean)); // all truth
console.log(myArr.filter((element) => !Boolean(element))); //all falsy
