class Todo {
  static runningId = 1;
  constructor(id, description, done = false) {
    this.id = id === undefined ? Todo.runningId++ : id;
    this.description = description;
    this.done = done;
  }
  getTodo() {
    return { id: this.id, description: this.description, done: this.done };
  }
  setDescription(newDescription) {
    this.description = newDescription;
  }
  setDone(done) {
    this.done = done;
  }
}
export { Todo }
//module.exports = Todo;
