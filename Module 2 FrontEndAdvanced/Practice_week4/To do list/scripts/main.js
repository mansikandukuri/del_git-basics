"use strict";

let todoList = [];

const btnAdd = document.querySelector(".btn--add");
const txtLabel = document.querySelector(".todo-label");
const listContainer = document.querySelector(".list-container");

function registerListenerForCheckBox() {
  const checkBox = document.querySelector(".check-status");
  checkBox.addEventListener("change", function (event) {
    const closestLi = checkBox.closest("li");
    const selectedItemId = closestLi.getAttribute("id");
    const position = todoList.findIndex(function (todo) {
      return todo.id === selectedItemId;
    });
    if (event.target.checked) {
      todoList[position] = "done";
      closestLi.querySelector(".span-status").innerHTML = "done";
      closestLi.querySelector(".new-todo-label").style.textDecoration =
        "line-through";
    } else {
      todoList[position] = "pending";
      closestLi.querySelector(".span-status").innerHTML = "pending";
      closestLi.querySelector(".new-todo-label").style.textDecoration = "none";
    }
  });
}

// function registerListenerForDeleteButton() {
//   const btnDelete = document.querySelector(".btn--delete");
//   btnDelete.addEventListener("click", function (event) {
//     const closestLi = checkBox.closest("li");
//     const selectedItemId = closestLi.getAttribute("id");
//     const position = todoList.findIndex(function (todo) {
//       return todo.id === selectedItemId;
//     });
//     todo.label.innerHTML = " ";
//   });

//   // Find the element to delet from an Array
// }

function registerListenerForDeleteButton() {
  const btnDelete = document.querySelector(".btn--delete");
  // Find the element to delet from an Array
}

function createUI(todos) {
  listContainer.innerHTML = "";
  for (let todo of todos) {
    const liElement = document.createElement("li");
    liElement.innerHTML = `
            <input type="checkbox" class=check-status />
            <p class=new-todo-label>${todo.label} || <span class=span-status> ${todo.status} </span></p>
            <button class=btn--delete>DELETE</button>
        `;
    liElement.setAttribute("id", todo.id);
    listContainer.prepend(liElement);
    registerListenerForCheckBox();
    registerListenerForDeleteButton();
  }
}

btnAdd.addEventListener("click", function () {
  const newItem = {
    id: "10" + (todoList.length + 1),
    label: txtLabel.value,
    status: "pending",
  };
  todoList.push(newItem);
  txtLabel.value = "";
  createUI(todoList);
});
