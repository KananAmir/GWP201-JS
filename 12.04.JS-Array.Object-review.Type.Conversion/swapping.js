let firstNum = 5;
let secondNum = 17;

let temp;

// first method
// temp = firstNum; // 5
// firstNum = secondNum; // 17
// secondNum = temp; // 5

//second method
// temp = firstNum + secondNum;
// firstNum = temp - firstNum;
// secondNum = temp - secondNum;

//third method

// [a, b] = [secondNum, firstNum]; // destructing
[firstNum, secondNum] = [secondNum, firstNum]; // destructing

console.log("first", firstNum);
console.log("second", secondNum);
