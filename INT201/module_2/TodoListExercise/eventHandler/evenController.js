import {
  showTodoItem,
  showNumberOfDone,
  showNumberOfNotDone,
  removeTodoItem,
} from "../UI/todoListUI.js";
import { todoManagement } from "../lib/todoManagement.js";

let todoManagements = todoManagement();

function addTodoHandler() {
  const inputToDo = document.getElementById("addTodo").querySelector("input").value;
  if (inputToDo !== "") {
    const newToDo = todoManagements.addTodo(inputToDo);
    showTodoItem(newToDo, inputToDo);
    const todoItem = document.getElementById(`${newToDo}`);
    const buttonAll = Array.from(todoItem.querySelectorAll("button"));
    buttonAll[0].addEventListener("click", notDoneButtonHandler);
    buttonAll[1].addEventListener("click", removeButtonHandler);
    showNumberOfDone(todoManagements.getNumberOfDone());
    showNumberOfNotDone(todoManagements.getNumberOfNotDone());
  }
}
function notDoneButtonHandler(e) {
  const id = e.target.parentElement.getAttribute("id");
  const targetButton = e.target;
  console.log(Number(id));
  todoManagements.setItemToDone(Number(id));
  targetButton.style.color = "white";
  targetButton.style.backgroundColor = "green";
  targetButton.textContent = "done";
  showNumberOfDone(todoManagements.getNumberOfDone());
  showNumberOfNotDone(todoManagements.getNumberOfNotDone());
}
function removeButtonHandler(e) {
  const id = e.target.parentElement.getAttribute("id");
  //console.log(e.target);
  //console.log(e.target.parentElement);
  todoManagements.removeTodo(Number(id));
  removeTodoItem(id);
  showNumberOfDone(todoManagements.getNumberOfDone());
  showNumberOfNotDone(todoManagements.getNumberOfNotDone());
}

function loadHandler() {
  const storage = localStorage.getItem("todos");
  const yourTodos = JSON.parse(storage)
  console.log(yourTodos);
  const addBottom = document.getElementById("addBtn");
  addBottom.addEventListener("click", addTodoHandler);

  if (yourTodos?.length !== 0 && yourTodos !== null && yourTodos !== undefined) {
    todoManagements.loadTodos(yourTodos);
    console.log(todoManagements.getTodos());
    todoManagements.getTodos().forEach((e) => {
      showTodoItem(e.id, e.description);
      const todoItem = document.getElementById(`${e.id}`);
      const buttonAll = Array.from(todoItem.querySelectorAll("button"));
      if (e.done) {
        buttonAll[0].style.color = "white";
        buttonAll[0].style.backgroundColor = "green";
        buttonAll[0].textContent = "done";
      }
      buttonAll[0].addEventListener("click", notDoneButtonHandler);
      buttonAll[1].addEventListener("click", removeButtonHandler);
      showNumberOfDone(todoManagements.getNumberOfDone());
      showNumberOfNotDone(todoManagements.getNumberOfNotDone());
    });
  }
  
}



function beforeUnloadHandler(event) {
  event.preventDefault();
  localStorage.setItem("todos", JSON.stringify(todoManagements.getTodos()));
  todoManagements.clearTodo();
}

export { addTodoHandler, loadHandler, beforeUnloadHandler };
