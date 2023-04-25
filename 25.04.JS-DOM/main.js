// let text = document.querySelector('.text')
// let text = document.querySelector('#text')
// let text = document.getElementsByClassName('text')
// let text = document.getElementById('lorem')
// let text = document.getElementsByName('lorem')
// let text = document.getElementsByTagName('p')
//

let text = document.querySelectorAll(".text");
let ipsum = document.querySelector(".ipsum");
let btn = document.querySelector(".btn");

console.log(ipsum.innerText);

btn.addEventListener("click", function () {
  // console.log(this);
  ipsum.style.color = "red";
  ipsum.style.fontSize = "36px";
  ipsum.style.backgroundColor = "green";
});

btn.addEventListener("click", function () {
  // console.log(this);
  setTimeout(() => {
    ipsum.style.color = "green";
    ipsum.style.fontSize = "36px";
    ipsum.style.backgroundColor = "yellow";
  }, 2000);
});

// btn.onclick = function () {
//   ipsum.style.color = "red";
//   ipsum.style.fontSize = "36px";
//   ipsum.style.backgroundColor = "green";
// };

// btn.onclick = function () {
//   ipsum.style.color = "green";
//   ipsum.style.fontSize = "36px";
//   ipsum.style.backgroundColor = "yellow";
// };

// let btn = {
//     onclick: function(){

//     }
// }

btn.name = "lorem";

// btn.addEventListener("click", ()=>{
//     console.log(this);
// })

// classList (add,remove,toggle, contains) vs className

let addClass = document.querySelector(".add");
let removeClass = document.querySelector(".remove");
let box = document.querySelector(".box");
let customToggle = document.querySelector(".custom-toggle");
let toggle = document.querySelector(".toggle");

addClass.onclick = function () {
  box.classList.add("bg-red", "size");
  //   box.className = "bg-red";
};
removeClass.onclick = function () {
  box.classList.remove("size", "bg-red");
};

//custom toggle
customToggle.onclick = function () {
  box.classList.contains("bg-red")
    ? box.classList.remove("bg-red", "size")
    : box.classList.add("bg-red", "size");
};

toggle.onclick = function () {
  box.classList.toggle("bg-red");
  box.classList.toggle("size");
};
