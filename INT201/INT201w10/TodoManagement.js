
const Todo = require('./TodoList')
function TodoManagement() {
    const todos = [];
    let countId = 0;
    function addTodo(desc) {
      todos.push(new Todo(++countId,desc));
      return todos.length
    }
    function findTodo(searchId) {
      return todos.find((element) => element.id === searchId);
    }
    function findIndexTodo(searchId) {
      return todos.findIndex((element) => element.id === searchId);
    }
    function removeTodo(removeId) {
      const index = findIndexTodo(removeId);
      if (index > -1) {
        todos.splice(index, 1);
      }
      return todos;
    }
    function getToDos(){
      return todos
    }
    return {addTodo , findTodo , findIndexTodo , removeTodo , getToDos}
  }
  
  const {addTodo , findTodo  , findIndexTodo , removeTodo , getToDos} = TodoManagement()
  addTodo('doSleep')
  addTodo('doHomework')
  addTodo('doWarmup')
  addTodo('doTest')
  addTodo('blablabla')
  
  console.log(getToDos())
  
  console.log(findTodo(1))
  console.log('-------------------------')
  console.log(findIndexTodo(4))
  console.log('-------------------------')
  removeTodo(3)
  console.log(getToDos())