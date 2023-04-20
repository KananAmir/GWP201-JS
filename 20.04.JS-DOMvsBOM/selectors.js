let text = document.querySelector(".text"); // only one element that finds first
// let allParags = document.querySelectorAll(".text");
let allParags = document.querySelectorAll(".container .text"); // node list
let allParagsByClass = document.getElementsByClassName("text"); // html collection
let elementById = document.getElementById("first-text");

let getByTagName = document.getElementsByTagName("p"); // html collection
let getByName = document.getElementsByName("firstName"); // nodelist

let selectedText = document.querySelector(".selected-text");

// console.log(allParags);
// console.log(allParagsByClass);
// console.log(getByTagName);
// console.log(getByName);

// innerText, textContent, innerHtml

console.log(selectedText.innerText);
console.log(selectedText.textContent);
console.log(selectedText.innerHTML);



document.querySelector('.container').innerHTML=`<span>Salam</span>`