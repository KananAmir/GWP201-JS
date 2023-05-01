// localStorage, sessionStorage, cookies;

//LOCALSTORAGE

// localStorage.setItem("class", "GWP201");
// // localStorage.setItem("number", 44);
// localStorage.setItem("bool", false);

// console.log(localStorage.getItem("class"));
// console.log(typeof localStorage.getItem("number"));
// console.log(localStorage.getItem("bool"));

// setTimeout(() => {
//     //   localStorage.removeItem("number");
//     localStorage.clear();
// }, 3000);

let users = ["Ahad", "Zarifa", "Vilayat", "Nabir"];

let userObj = {
  username: "lorem ipsum",
  email: "lorem@gmail.com",
  city: "Ganja",
};

// localStorage.setItem("users", users);

// localStorage.setItem("userObject", userObj);

// console.log(localStorage.getItem("users"));
// console.log(localStorage.getItem("userObject"));

localStorage.setItem("users", JSON.stringify(users));

localStorage.setItem("userObject", JSON.stringify(userObj));

console.log(JSON.parse(localStorage.getItem("users")));
console.log(JSON.parse(localStorage.getItem("userObject")));

// let num = 5;

// localStorage.setItem("num", num);

// console.log(typeof JSON.parse(localStorage.getItem("num")));

//SESSIONSTOARGES

// let userName = prompt("Enter ur name here..", "Nurlana");

// sessionStorage.setItem("username", userName);

// let info = document.querySelector(".info");

// info.innerText = `Wellcome ${sessionStorage.getItem("username")}`;

//COOKIES

document.cookie = "className=GWP201; expires=Mon, 01 May 2023 11:44:15 GMT";
document.cookie = "test=TEST";
console.log(document.cookie);
