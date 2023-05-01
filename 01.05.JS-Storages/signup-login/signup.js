let form = document.querySelector("form");

let allInputs = document.querySelectorAll(".form-control");

// console.log(allInputs[0]);

// let userData = JSON.parse(localStorage.getItem("usersData")) || [];

let userData = JSON.parse(localStorage.getItem("usersData")) ?? [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let userObj = {
    username: allInputs[0].value,
    email: allInputs[1].value,
    password: allInputs[2].value,
  };

  userData.push(userObj);

  localStorage.setItem("usersData", JSON.stringify(userData));

  window.location.href = "http://127.0.0.1:5500/signup-login/login.html";
  //   console.log(userData);
});
