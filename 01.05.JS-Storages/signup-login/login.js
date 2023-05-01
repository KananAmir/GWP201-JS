let form = document.querySelector("form");

let allInputs = document.querySelectorAll(".form-control");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let allUsers = JSON.parse(localStorage.getItem("usersData"));

  let userObj = allUsers.find(
    (item) =>
      item.email === allInputs[0].value && item.password === allInputs[1].value
  );

  if (userObj) {
    localStorage.setItem("userName", userObj.username);
    window.location.href = "http://127.0.0.1:5500/signup-login/home.html";
  } else {
    alert("wrong credientials");
  }
});
