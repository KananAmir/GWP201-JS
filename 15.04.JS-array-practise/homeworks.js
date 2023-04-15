let arr = [
  4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2,
  5, 6, 3, 7, 3, 7,
];

// 1)Yuxaridaki arraydaki butun reqemlerin cemini tapin (Foreach methodu istifadə edərək)
function sumArrayOfElements(array) {
  let sum = 0;
  array.forEach((el, i, arr) => (sum += el));
  return sum;
}

console.log("SUM:", sumArrayOfElements(arr));

// 2)Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

function findCountDigitOfArray(array, number) {
  let count = 0;
  array.forEach((el, i) => {
    //   el === 5 ? count++ : null;
    el === number && count++;
  });
  return `${number} repeated ${count} times`;
}

console.log(findCountDigitOfArray(arr, 5));
console.log(findCountDigitOfArray(arr, 3));
console.log(findCountDigitOfArray(arr, 7));

// 3)Arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin
function findMaxDigitCount(arr) {
  let maxNum = Math.max(...arr);
  let count = 0;
  arr.forEach((el) => el == maxNum && count++);
  return `Max is ${maxNum} and repeated ${count} times`;
}

console.log(findMaxDigitCount(arr));

// 4)Arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin

// console.log(arr.indexOf(arr.filter((el) => el % 3 == 2)[0]));
console.log(arr.find((el) => el % 3 == 2));
console.log(arr.findIndex((el) => el % 3 == 2));
