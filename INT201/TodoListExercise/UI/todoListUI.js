function showTodoItem(newId, newDescription) {
  let listToDo = document.getElementById("listTodo");
  let newTodoDiv = document.createElement("div");
  newTodoDiv.className = "todoItem";
  newTodoDiv.setAttribute("id", newId);

  let newDes = document.createElement("p");
  newDes.textContent = newDescription;
  newTodoDiv.appendChild(newDes);

  let doneButton = document.createElement("button");
  doneButton.textContent = "Not Done";
  newTodoDiv.appendChild(doneButton);

  let removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  newTodoDiv.appendChild(removeButton);

  listToDo.appendChild(newTodoDiv);
}

function showNumberOfDone(numberOfDone) {}

function showNumberOfNotDone(numberOfNotDone) {}
export { showTodoItem, showNumberOfDone, showNumberOfNotDone }
//module.exports = { showTodoItem, showNumberOfDone, showNumberOfNotDone };
