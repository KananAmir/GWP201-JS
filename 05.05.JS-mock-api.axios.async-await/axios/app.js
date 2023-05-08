// axios
//   .get("https://northwind.vercel.app/api/suppliers")
//   .then((res) => {
//     res.data.forEach((element) => {
//       console.log(element);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function getAllData() {
  axios("https://northwind.vercel.app/api/suppliers")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function deleteDataById(id) {
  axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`);
}

function addData(obj) {
  axios.post(`https://northwind.vercel.app/api/suppliers/`, obj);
}
function updateData(id, obj) {
  axios.patch(`https://northwind.vercel.app/api/suppliers/${id}`, obj);
}

// addData({
//   name: "GWP201",
// });

// updateData(4, {
//   companyName: "Nazim",
//   contact: "201",
// });

// AXIOS INSTANCE

const axisosInstance = axios.create({
  baseURL: "https://northwind.vercel.app/api/",
  timeout: 400,
  headers: { "Content-Type": "application/json" },
});

async function getAllCustomers() {
  try {
    let response = await axisosInstance("customers");

    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
}

getAllCustomers();
