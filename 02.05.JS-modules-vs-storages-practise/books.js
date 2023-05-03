// import { books as kitab } from "./data.js";
import sum, { books, BASE_URL } from "./data.js";
// import sum from "./data.js";
// console.log(books);

// console.log(sum(2, 5));
// console.log(BASE_URL);

let row = document.querySelector(".row");
let allBooks = JSON.parse(localStorage.getItem("favoritedBooks")) || [];

books.forEach((item) => {
  row.innerHTML += `
    <div class="col-3 my-4">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">
         Publisher: ${item.publisher}
        </p>
         <i><p>Year: ${item.year}</p></i>
        <button class="btn btn-primary" id=${item.id}>Add to Favs</button>
      </div>
    </div>
  </div>
    `;
});

let allAddBtns = document.querySelectorAll(".btn-primary");

allAddBtns.forEach((elem) => {
  elem.addEventListener("click", function () {
    let selectedObj = allBooks.find((item) => item.id == elem.id);
    // console.log(this.id);
    // console.log(elem.id);
    // console.log(elem.getAttribute("id"));

    allBooks.includes(selectedObj);
    if (!allBooks.includes(selectedObj)) {
      let favoritedBook = books.find((obj) => obj.id === +elem.id);

      allBooks.push(favoritedBook);

      localStorage.setItem("favoritedBooks", JSON.stringify(allBooks));
    } else {
      alert("You have already added this book!!");
    }
  });
});

// console.log(allAddBtns);
