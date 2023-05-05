// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

import { BASE_URL } from "./api.js";

// get all
function getAllSuppliers() {
  fetch(`${BASE_URL}suppliers`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

// getAllSuppliers();

//get by ID
function getSuppliersById(id) {
  fetch(`${BASE_URL}suppliers/${id}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

getSuppliersById(7);
// getSuppliersById(4);

//delete by ID

function deleteSupplierById(id) {
  fetch(`${BASE_URL}suppliers/${id}`, {
    method: "DELETE",
  });
}

deleteSupplierById(31);
deleteSupplierById(32);

function addNewSupplier(obj) {
  fetch(`${BASE_URL}suppliers/`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });
}

// addNewSupplier({
//   companyName: "Code Academy Company",
//   contactName: "Javascript",
// });

function updateSupplierById(id, obj) {
  fetch(`${BASE_URL}suppliers/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });
}

function updateSupplierSpecificFieldsById(id, obj) {
  fetch(`https://northwind.vercel.app/api/customers/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });
}

updateSupplierSpecificFieldsById("AROUT", {
  companyName: "Code Academy",
  contactName: "code.edu.az",
});

updateSupplierById(12, {
  companyName: "gwp201",
  address: {
    street: "Bayraq Meydani",
    city: "Ganja",
    region: "Qarb",
  },
});
// let obj = {
//   companyName: "gwp201",
//   address: {
//     street: "Bayraq Meydani",
//     city: "Ganja",
//     region: "Qarb",
//   },
// };
