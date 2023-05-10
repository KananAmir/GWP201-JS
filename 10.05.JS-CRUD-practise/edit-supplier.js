let form = document.querySelector("form");

let allInputs = document.querySelectorAll(".form-control");

// let id = localStorage.getItem("supplierId");

// axios(`https://northwind.vercel.app/api/suppliers/${id}`).then((res) => {
//   allInputs[0].value = res.data.companyName;
//   allInputs[1].value = res.data.address.street;
//   allInputs[2].value = res.data.address.country;
// });

let id = new URLSearchParams(window.location.search).get("id");

console.log(id);

axios(`https://northwind.vercel.app/api/suppliers/${id}`).then((res) => {
  allInputs[0].value = res.data.companyName;
  allInputs[1].value = res.data.address.street;
  allInputs[2].value = res.data.address.country;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let editedSupplier = {
      companyName: allInputs[0].value,
      address: {
        ...res.data.address,
        street: allInputs[1].value,
        country: allInputs[2].value,
      },
    };

    axios.patch(
      `https://northwind.vercel.app/api/suppliers/${id}`,
      editedSupplier
    );

    window.location = "suppliers.html";
  });
});
