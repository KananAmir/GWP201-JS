let obj = {
  userName: "Lorem Ipsum",
  email: "lorem@gmail.com",
  age: 77,
  skills: ["HTML", "CSS"],
  address: {
    city: "Ganja",
    street: "M.A.Sabir",
  },
};

console.log(obj.address.street);

let {
  email,
  skills: [html, css],
  skills,
  address: { city, street },
} = obj;

console.log(email);
console.log(skills);

console.log(street);
console.log(city);

console.log(html);
console.log(css);
