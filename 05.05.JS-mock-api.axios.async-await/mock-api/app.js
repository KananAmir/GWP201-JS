function getAllStudents() {
  fetch("http://localhost:8080/students", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
function getStudentById(id) {
  fetch(`http://localhost:8080/students/${id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

getAllStudents();
getStudentById(1);
let deleteById = (id) => {
  fetch(`http://localhost:8080/students/${id}`, { method: "DELETE" });
};

// deleteById(3)

let addStudent = (obj) => {
  fetch(`http://localhost:8080/students/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
};


// addStudent({
//     "firstName": "Fatima",
//     "lastName": "Mammadova",
//     "score": 15,
//   })


// addStudent()