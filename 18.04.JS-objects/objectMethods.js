let userObject = {
  username: "lorem ipsum",
  age: 55,
  skills: ["HTML", "CSS", "JS"],
  isMarried: false,
  email: "lorem@gmail.com",
  obj: {
    test: "test",
  },
};

let testObj = {
  a: "a",
  age: 66,
};
// assign

let newUserObject = Object.assign({}, userObject);
// let newUserObject = Object.assign(testObj, userObject);

userObject.isMarried = true;
userObject.skills.push("React");
userObject.obj.test = "lorem";
// console.log("userObject", userObject);
// console.log("newUserObject", newUserObject);

// keys

console.log(Object.keys(userObject));

// values

console.log(Object.values(userObject));

// entries

console.log(Object.entries(userObject));

console.log(userObject.hasOwnProperty("age")); //true
console.log(userObject.hasOwnProperty("firstName")); //false
