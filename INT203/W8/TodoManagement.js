class TodoManagement {
  constructor(previousTodo = []) {
    this.todos = previousTodo
  }
  addTodos(newTodos) {
    newTodos.forEach((newTodo) =>
      this.addTodo(newTodo.id, newTodo.category, newTodo.description)
    )
  }
  addTodo(id, category, desc) {
    this.todos.push({
      id: id,
      category: category,
      description: desc
    })
  }
  updateTodo(id, category, description) {
    this.todos = this.todos.map((todo) => {
      return todo.id === id
        ? { ...todo, category: category, description: description }
        : todo
    })
  }
  findTodo(searchId) {
    return this.todos.find((todo) => todo.id === searchId)
  }
  findIndexTodo(searchId) {
    return this.todos.findIndex((todo) => todo.id === searchId)
  }
  removeTodo(removeId) {
    this.todos.splice(
      this.todos.findIndex((todo) => todo.id === removeId),
      1
    )
  }
  getTodos() {
    return this.todos
  }
}
export { TodoManagement }
