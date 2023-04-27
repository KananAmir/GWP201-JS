let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let userForm = document.querySelector("#user-form");

// username.addEventListener("keyup", function () {
//   console.log(username.value);
// });

// username.addEventListener("input", function (event) {
//   //   console.log(username.value);
//   console.log(event.target.value);
// });

username.addEventListener("change", function (event) {
  console.log(event.target.value);
});

userForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let userObj = {
    email: email.value,
    password: password.value,
  };

  //   userObj.email = email.value;
  //   userObj.password = password.value;

  email.value === "" || password.value === ""
    ? alert("fileds can not be empty")
    : console.log(userObj);
});

let focusInput = document.querySelector("#focus");
let h3Elem = document.querySelector("h3");

focusInput.addEventListener("focus", function () {
  console.log("focus event worked");
  h3Elem.style.display = "none";
  this.style.backgroundColor = "green";
});

focusInput.addEventListener("blur", function () {
  console.log("blur event worked");
  h3Elem.style.display = "block";
  this.style.backgroundColor = "transparent";
});
