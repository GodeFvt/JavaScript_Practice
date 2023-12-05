//const TodoList = require("./lib/todoManagement");
// const {
//   showTodoItem,
//   showNumberOfDone,
//   showNumberOfNotDone,
// } = require("./UI/todoListUI");
import {
  showTodoItem,
  showNumberOfDone,
  showNumberOfNotDone,
  removeTodoItem,
} from "./UI/todoListUI.js";
import { todoManagement } from "./lib/todoManagement.js";
import {addTodoHandler} from "./eventHandler/evenController.js"
let todoManagements = todoManagement();
const addBottom = document.getElementById("addBtn");
addBottom.addEventListener("click",addTodoHandler)


// showTodoItem(todoManagements.addTodo("aaaa"), "aaaa");
// showTodoItem(todoManagements.addTodo("bbbb"), "bbbb");
// showNumberOfDone(todoManagements.getNumberOfDone());
// showNumberOfNotDone(todoManagements.getNumberOfNotDone());
// removeTodoItem("1");
