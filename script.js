let todos = [];

function addTodo() {
  const value = document.querySelector("input").value;
  todos.push({
    title: value,
  });

  render();
}

function createTodo(todo) {
  const newDiv = document.createElement("div");
  const newTitle = document.createElement("h2");
  newTitle.innerHTML = todo.title;
  const newBtn = document.createElement("button");
  newBtn.innerHTML = "Delete";
  newDiv.appendChild(newTitle);
  newDiv.appendChild(newBtn);

  return newDiv;
}

function render() {
  document.querySelector("#todos").innerHTML = "";
  for (let i = 0; i <= todos.length - 1; i++) {
    let element = createTodo(todos[i]);
    document.querySelector("#todos").appendChild(element);
  }
}
