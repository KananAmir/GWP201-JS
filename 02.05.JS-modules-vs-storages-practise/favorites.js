let favorits = JSON.parse(localStorage.getItem("favoritedBooks")) || [];
let row = document.querySelector(".row");

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
          <button class="btn btn-danger" id=${item.id}>Remove from Favorites</button>
        </div>
      </div>
    </span>
      `;
});

let allRemoveBtns = document.querySelectorAll(".btn-danger");

allRemoveBtns.forEach((item) => {
  item.addEventListener("click", function () {
    console.log("salam");
    favorits = JSON.parse(localStorage.getItem("favoritedBooks"));

    // let index = favorits.findIndex((e) => e.id == item.id);
    // console.log(index);
    // favorits.splice(index, 1);

    let updatedFavBooks = favorits.filter(
      (el) => el.id != item.getAttribute("id")
    );

    localStorage.setItem("favoritedBooks", JSON.stringify(updatedFavBooks));

    // this.parentElement.parentElement.parentElement.remove();
    this.closest("span").remove();
  });
});
// console.log(allRemoveBtns);
