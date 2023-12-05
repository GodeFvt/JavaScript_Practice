//const TodoList = require("./lib/todoManagement");
// const {
//   showTodoItem,
//   showNumberOfDone,
//   showNumberOfNotDone,
// } = require("./UI/todoListUI");
import { showTodoItem, showNumberOfDone, showNumberOfNotDone } from './UI/todoListUI.js'
import { todoManagement } from './lib/todoManagement.js'
showTodoItem(todoManagement().addTodo("adawd"), "adawd");
showNumberOfDone(todoManagement().getNumberOfDone());
showNumberOfNotDone(todoManagement().getNumberOfNotDone());

