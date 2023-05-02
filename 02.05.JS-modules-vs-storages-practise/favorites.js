let favorits = JSON.parse(localStorage.getItem("favoritedBooks")) || [];
let row = document.querySelector(".row");

favorits.forEach((item) => {
  row.innerHTML += `
      <div class="col-3 my-4">
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
    </div>
      `;
});

let allRemoveBtns = document.querySelectorAll(".btn-danger");

allRemoveBtns.forEach((item) => {
  item.addEventListener("click", function () {
    console.log("salam");
    // console.log(this.id);
    favorits = JSON.parse(localStorage.getItem("favoritedBooks"));

    let index = favorits.findIndex((e) => e.id == item.id);
    console.log(index);
    favorits.splice(index, 1);

    console.log(favorits);
    // let updatedFavBooks = favorits.filter(
    //   (el) => el.id != item.getAttribute("id")
    // );

    // localStorage.setItem("favoritedBooks", JSON.stringify(updatedFavBooks));
    localStorage.setItem("favoritedBooks", JSON.stringify(favorits));

    row.innerHTML = "";

    favorits.forEach((item) => {
      row.innerHTML += `
            <div class="col-3 my-4">
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
          </div>
            `;
    });
  });
});
// console.log(allRemoveBtns);
