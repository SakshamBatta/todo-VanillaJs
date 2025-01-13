let todos = [];

// Function to add a new todo
function addTodo() {
  const input = document.querySelector("#todo-input");
  const value = input.value.trim();

  // Validate input
  if (!value) {
    alert("Please enter a valid todo!");
    return;
  }

  todos.push({
    title: value,
    completed: false, // Track completed status
  });

  input.value = ""; // Clear input field
  render();
}

// Function to create a single todo element
function createTodo(todo, index) {
  const newDiv = document.createElement("div");
  newDiv.className = "todo-item";

  const newTitle = document.createElement("h2");
  newTitle.innerHTML = todo.title;
  newTitle.className = todo.completed ? "completed" : "";
  newTitle.onclick = () => toggleComplete(index); // Mark todo as completed on click

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.onclick = () => deleteTodo(index); // Delete todo on click

  newDiv.appendChild(newTitle);
  newDiv.appendChild(deleteBtn);

  return newDiv;
}

// Function to render all todos
function render() {
  const todoContainer = document.querySelector("#todos");
  todoContainer.innerHTML = ""; // Clear previous todos

  todos.forEach((todo, index) => {
    const todoElement = createTodo(todo, index);
    todoContainer.appendChild(todoElement);
  });
}

// Function to delete a todo
function deleteTodo(index) {
  todos.splice(index, 1);
  render();
}

// Function to toggle completion status
function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  render();
}
