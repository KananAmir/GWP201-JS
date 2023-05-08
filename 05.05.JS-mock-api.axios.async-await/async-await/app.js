// function getAllData() {
//   fetch("https://northwind.vercel.app/api/customers")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// function getDataById(id) {
//   fetch(`https://northwind.vercel.app/api/customers/${id}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// getAllData();
// getDataById("AROUT");

async function getAllCustomers() {
  try {
    let response = await fetch("https://northwind.vercel.app/api/customers");
    let data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

let getCustomerById = async (id) => {
  try {
    let response = await fetch(
      `https://northwind.vercel.app/api/customers/${id}`
    );

    let data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

let deleteCustomerById = async (id) => {
  try {
    await fetch(`https://northwind.vercel.app/api/customers/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

deleteCustomerById("BOLId");

getAllCustomers();

getCustomerById("BERGS");
