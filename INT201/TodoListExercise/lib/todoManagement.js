//const Todo = require("./todo");
import { Todo } from './todo.js'
function todoManagement() {
  let todos = [];
  function addTodo(desc) {
    let toDo = new Todo(undefined, desc);
    todos.push(toDo);
    return toDo.id;
  }
  function findTodo(searchId) {
    return todos.filter((e) => e.getTodo().id === searchId).getTodo();
  }
  function findIndexTodo(searchId) {
    return todos.findIndex((e) => e.getTodo().id === searchId).getTodo();
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
  return {
    addTodo,
    findTodo,
    findIndexTodo,
    removeTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone,
    clearTodo,
  };
}

//module.exports = TodoList();
export { todoManagement }