//object litheral

let user = {
  username: "lorem ipsum",
  age: 55,
  skills: ["HTML", "CSS", "JS"],
  isMarried: false,
  email: "lorem@gmail.com",
  //   canSmile: function () {
  //     console.log("I can smile");
  //   },
  canSmile() {
    // console.log("I can smile");
    console.log(this);
    //   },
    //   canSmile: () => {
    //     console.log(this); // doesnt work properly
  },
  getUserInfo() {
    return `${this.username}, age is ${this.age}`;
  },
};

// console.log(user.email);
// console.log(user["email"]);

// user.city = "Ganja";
user["city adress"] = "Ganja";

// console.log(user);

// console.log(user["city adress"]);

//array destructing
const numbers = [10, 3.14, -9.81, 37, -98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

let [h, c, , r] = webTechs;

// console.log(h, c, r);

//object destructing

// let username = user.username;
// let email = user.email;
// let skills = user.skills;

// console.log(username);
// console.log(email);
// console.log(skills);

// let { email, username, age, skills } = user;
let { email, username: istifadeci, age, skills: bacariqlar } = user;

// console.log(istifadeci);
// console.log(email);
// console.log(bacariqlar);
// console.log(age);

// for in loop

for (let item in user) {
  //   console.log(item);
  //   console.log(user[item]);
  //   console.log(`${item}: ${user[item]}`);
}

//

user.canSmile();
console.log(user.getUserInfo());



