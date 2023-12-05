//const Todo = require("./todo");
import { Todo } from "./todo.js";

function todoManagement() {
  let todos = [];
  function addTodo(desc) {
    const toDo = new Todo(undefined, desc);
    todos.push(toDo);
    return toDo.id;
  }
  function findTodo(searchId) {
    return todos.find((e) => e.id === searchId);
  }
  function findIndexTodo(searchId) {
    return todos.findIndex((e) => e.id === searchId);
  }
  function removeTodo(removeId) {
    const toDoInDex = findIndexTodo(removeId);
    if (toDoInDex > -1) {
      todos.splice(toDoInDex, 1);
    }
  }
  function getTodos() {
    return todos;
  }
  function getNumberOfDone() {
    return todos.filter((e) => e.getTodo().done === true).length;
  }
  function getNumberOfNotDone() {
    return todos.filter((e) => e.getTodo().done === false).length;
  }
  function clearTodo() {
    todos = [];
  }
  function setItemToDone(doneId) {
    findTodo(doneId).setDone(true);
  }
  return {
    addTodo,
    findTodo,
    findIndexTodo,
    removeTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone,
    clearTodo,
    setItemToDone,
  };
}

//module.exports = TodoList();
export { todoManagement };
