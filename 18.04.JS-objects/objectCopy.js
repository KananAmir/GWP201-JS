let userObject = {
  username: "lorem ipsum",
  age: 55,
  skills: ["HTML", "CSS", "JS"],
  isMarried: false,
  email: "lorem@gmail.com",
};

//spread
let newObj = { ...userObject };
// let newObj = {
//   ...userObject,
//   isMarried: true,
//   email: "test@gmail.com",
//   a: "a",
// };

// console.log(newObj);

//structuredClone

let newObjDeepCopy = structuredClone(userObject);

userObject.skills.push("React");
// console.log(userObject);
// console.log(newObjDeepCopy);

// json stringify vs json parse

console.log(JSON.stringify(userObject));

let newObjClone = JSON.parse(JSON.stringify(userObject));

console.log(newObjClone);