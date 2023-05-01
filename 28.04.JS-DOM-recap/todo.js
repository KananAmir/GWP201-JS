// let input = document.querySelector("input");
// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");

// btn.addEventListener("click", function () {
//   if (input.value) {
//     let liElement = document.createElement("li");
//     liElement.innerText = input.value;

//     ul.append(liElement);

//     input.value = "";
//   } else {
//     alert("can not be empty");
//   }
// });

let todoInput = document.querySelector("#todo-input");
let addTodo = document.querySelector(".btn-primary");
let listGroup = document.querySelector(".list-group");

addTodo.disabled = true;

// addTodo.setAttribute("disabled", null);
// addTodo.removeAttribute("disabled");

todoInput.addEventListener("input", function (event) {
  if (event.target.value) {
    addTodo.disabled = false;
  } else {
    addTodo.disabled = true;
  }
});

function createList() {
  listGroup.innerHTML += `
    <li
    class="list-group-item list-group-item-danger rounded d-flex justify-content-between align-items-center my-3"
  >
    <span>${todoInput.value}</span>
    <div>
      <button type="button" class="btn btn-success">EDIT</button>
      <button type="button" class="btn btn-danger">DELETE</button>
    </div>
  </li>
    `;

  let allDeleteBtns = document.querySelectorAll(".btn-danger");
  let editDeleteBtns = document.querySelectorAll(".btn-success");

  //   console.log(allDeleteBtns);

  allDeleteBtns.forEach((item) => {
    item.addEventListener("click", function () {
      //   console.log(this);
      //   this.parentElement.remove();
      //   this.parentElement.parentElement.remove();
      //   console.log(this.closest("li"));
      this.closest("li").remove();
    });
  });

  editDeleteBtns.forEach((item) => {
    item.addEventListener("click", function () {
      console.log(this.closest("li"));

      //   todoInput.value = this.closest("li").children[0].innerText;
      todoInput.value = this.closest("li").firstElementChild.innerText;
      this.closest("li").remove();
      addTodo.innerHTML="EDIT"
    });
  });

  todoInput.value = "";
  addTodo.disabled = true;
}
addTodo.addEventListener("click", createList);
addTodo.addEventListener("click", function(){
  addTodo.innerHTML="ADD"
});


window.addEventListener("keyup", function (event) {
  //   console.log(event.code);

  if (event.code === "Enter") {
    todoInput.value && createList();
    // addTodo.disabled = true;
  }
});
