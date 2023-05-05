let favorits = JSON.parse(localStorage.getItem("favoritedBooks")) || [];
let row = document.querySelector(".row");

function listFavBooks() {
  row.innerHTML = "";
  favorits.forEach((item) => {
    row.innerHTML += `
            <span class="col-3 my-4">
            <div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">
                 Publisher: ${item.publisher}
                </p>
                 <i><p>Year: ${item.year}</p></i>
                <button class="btn btn-danger" id=${item.id} onclick=removeBook(${item.id})>Remove from Favorites</button>
              </div>
            </div>
          </span>
            `;
  });
}

listFavBooks();

function removeBook(bookId) {
  favorits = favorits.filter((obj) => obj.id != bookId);
  localStorage.setItem("favoritedBooks", JSON.stringify(favorits));
  listFavBooks();
}
