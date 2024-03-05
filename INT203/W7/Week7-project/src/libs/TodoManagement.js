class todoManagement {
  constructor(previousTodo = []) {
    this.todos = previousTodo
  }
  addTodo(id, category, desc) {
    console.log(id, category, desc)
    return this.todos.push({
      id: id ?? this.todos[this.todos.length - 1].id + 1,
      category: category,
      description: desc
    })
  }
  updateTodo(id, category, description) {
    if (id === undefined) this.addTodo(undefined, category, description)
    else {
      this.todos = this.todos.map((todo) => {
        return todo.id === id
          ? { ...todo, category: category, description: description }
          : todo
      })
    }
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
export { todoManagement }
// const td = new todoManagement([
//   { id: 1, category: 'work', description: 'reading' }
// ])
// td.addTodo(2, 'work', 'do budgetting report')
// console.log(td.getTodos())
// td.updateTodo(2, 'home', 'sleeping')
// console.log(td.getTodos())
// console.log(td.findTodo(1))
// console.log(td.findIndexTodo(2))
// console.log(td.getTodos())
// console.log(td.removeTodo(2))
// console.log(td.getTodos())
