const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintTodo(NewTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = NewTodo;
  toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const NewTodo = toDoInput.value;
  toDoInput.value = "";
  paintTodo(NewTodo);
}

toDoForm.addEventListener("submit", handleTodoSubmit);
