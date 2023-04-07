// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let index = 0;

// for (; index < 10; index++) {
//   console.log(index);
// }

// for (let i = 1; i < 10; i = i + 2) {
//   console.log(i);
// }

// for (let i = 0; i <= 30; i++) {
//   if (i % 2 == 0) {
//     if (i != 0) {
//       console.log(`${i} is even number`);
//     } else {
//       console.log(`${i} is not odd or even`);
//     }
//   } else {
//     console.log(`${i} is odd number`);
//   }
// }

// let counter = 0;
// for (;;) {
//   console.log(counter++);
// }

// break vs continue

// let counter = -1;
// for (;;) {
//   console.log(++counter);
//   if (counter == 100) {
//     break;
//   }
// }

// for (i = 1; i < 1000; i++) {
//   console.log(i);
//   if (i >= 500) break;
// }

// for (i = 1; i < 20; i++) {
//   if (i == 7) continue;
//   console.log(i);
// }

// //only odd number
// for (i = 1; i < 20; i++) {
//   if (i % 2 == 0) continue;
//   console.log(i);
// }

// // ends with 3
// for (i = 1; i < 200; i++) {
//   if (i % 10 == 3) {
//     console.log(i);
//   }
// }

// let city = "Ganja";

// let number = 16;
// while (number < 50) {
//   console.log(number);
//   number++;
// }

// let number = 1;
// while (true) {
//     console.log(number++);
//     // ++number;
//     if (number == 61) break;
// }

let a = 0;
let number2 = 1;
while (number2 < 50) {
  number2++;

  //   console.log(a++);
  if (number2 == 25 || number2 == 26) {
    continue;
  }
  console.log(number2);
}

// do while

let count = 17;
do {
  console.log(count, "hello");
  count++;
} while (count <= 15);

// while (count >= 15) {
//   console.log(count, "hello");
//   count++;
// }
