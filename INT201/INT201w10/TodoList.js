class Todo {
  constructor(description) {
    let count = 0;
    this.id = count++;
    this.description = description;
  }
  getTodo() {
    return { id: this.id, description: this.description };
  }
  setDescription(newDescription) {
    this.description = newDescription;
  }
}

function TodoManagement() {
  const toDos = [];
  function addTodo(desc) {
    toDos.push(new Todo(desc));
  }
  function findTodo(searchId) {
    return toDos.find((element) => element.id === searchId);
  }
  function findIndexTodo(searchId) {
    return toDos.findIndex((element) => element.id === searchId);
  }
  function removeTodo(removeId) {
    const index = findIndexTodo(removeId);
    if (index > -1) {
      toDos.splice(index, 1);
    }
    return toDos;
  }
  function getToDos(){
    return toDos
  }
}
