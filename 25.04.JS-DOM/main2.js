let parag = document.createElement("p");
let container = document.querySelector(".container");
let selected = document.querySelector(".selected");
parag.innerText = "hello world";
parag.style.color = "teal";

let spanEl = document.createElement("span");
spanEl.innerText = "this is span element";

container.append(parag, spanEl);
// container.appendChild(" some texts"); //error
// container.appendChild(parag);
// container.appendChild(spanEl);
// container.prepend(parag);
// console.log(parag);

// console.log(document.querySelector("h1").innerHTML);
// console.log(document.querySelector("h1").innerText);

document.querySelector(
  "span"
).innerHTML = `<p>salam <strong>dunya</strong></p>`;
// document.querySelector("span").innerText = `<p>salam <strong>dunya</strong></p>`

// selected.after("hello");
// selected.before("hello");
// selected.before(parag);

let students = ["Nurlana", "Nabir", "Raul"];

let ulEl = document.querySelector(".students");
let createList = document.querySelector(".click");

createList.addEventListener("click", function () {
  students.forEach((item) => {
    let liElem = document.createElement("li");
    liElem.innerText = item;

    ulEl.append(liElem);
  });
});

// container.remove();

let allLiElements = document.querySelectorAll("li");

allLiElements.forEach((el) => {
  el.addEventListener("click", function () {
    this.remove();
  });
});

console.log(allLiElements[0].parentElement);

console.log(container.firstElementChild);
console.log(container.lastElementChild);

console.log(document.body); // body
console.log(document.head); // head
console.log(document.documentElement); // html
console.log(document); // document object

console.log(container.children);
