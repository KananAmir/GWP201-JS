let allCards = document.querySelector(".all-cards");

let editStatus = false;
let editId = null;
function listCards() {
  allCards.innerHTML = "";
  fetch("https://northwind.vercel.app/api/customers")
    .then((response) => response.json())
    .then((data) =>
      data.forEach((element) => {
        allCards.innerHTML += `
    <span class="col col-3 my-4">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${element.companyName}</h5>
        <p class="card-text">
         ${element.address?.street}, ${element.address?.city}
        </p>
        <button class="btn btn-success" onclick=editCard("${element.id}")>Edit</button>
        <button class="btn btn-danger" id="${element.id}" onclick=deleteCard("${element.id}")>Delete</button>
      </div>
    </div>
  </span>
    `;
      })
    )
    .catch((err) => console.log(err));
}

listCards();
// function deleteCard(id) {
//   fetch(`https://northwind.vercel.app/api/customers/${id}`, {
//     method: "DELETE",
//   });

//   document.querySelector(`#${id}`).closest("span").remove();
// }

function deleteCard(id) {
  fetch(`https://northwind.vercel.app/api/customers/${id}`, {
    method: "DELETE",
  }).then(() => {
    listCards();
  });
}

let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let obj = {
    companyName: inputs[0].value,
    address: { street: inputs[1].value, city: inputs[2].value },
  };

  if (!editStatus) {
    fetch(`https://northwind.vercel.app/api/customers`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then(() => {
      listCards();
    });
  } else {
    fetch(`https://northwind.vercel.app/api/customers/${editId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then(() => {
      listCards();
    });

    editStatus = false;
  }
});

function editCard(id) {
  editId = id;
  console.log(editId);
  editStatus = true;
  fetch(`https://northwind.vercel.app/api/customers/${id}`)
    .then((response) => response.json())
    .then((data) => {
      inputs[0].value = data.companyName;
      inputs[1].value = data.address.street;
      inputs[2].value = data.address.city;
    })
    .catch((err) => console.log(err));

  //   document.querySelector(`#${id}`).
}
