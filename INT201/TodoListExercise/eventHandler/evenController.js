import {
  showTodoItem,
  showNumberOfDone,
  showNumberOfNotDone,
  removeTodoItem,
} from "../UI/todoListUI.js";
import { todoManagement } from "../lib/todoManagement.js";

let todoManagements = todoManagement();

function addTodoHandler() {
  const inputToDo = document
    .getElementById("addTodo")
    .querySelector("input").value;
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

export { addTodoHandler};
