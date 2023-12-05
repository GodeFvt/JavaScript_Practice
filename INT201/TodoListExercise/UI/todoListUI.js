
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

function showNumberOfDone(numberOfDone) {
  let doneButton = document.getElementById("done");
  doneButton.textContent = "Number of Done: "+ numberOfDone;
}

function showNumberOfNotDone(numberOfNotDone) {
  let notDoneButton = document.getElementById("notDone");
  notDoneButton.textContent = "Number of Not Done: "+ numberOfNotDone;
}

function removeTodoItem(removeId) {
  let listToDo = document.getElementById("listTodo");
  let removeTodo = document.getElementById(removeId);
  listToDo.removeChild(removeTodo);
 
}
export { showTodoItem, showNumberOfDone, showNumberOfNotDone,removeTodoItem };

