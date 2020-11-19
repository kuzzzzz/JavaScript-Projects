const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => {
    addTodo(todo);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");

    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todoText;

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");

      updateLS();
    });

    todoEl.addEventListener("contextmenu", (e) => {
      // the contexmenu enables the right mouse click event
      e.preventDefault();

      todoEl.remove();
      updateLS();
    });

   

    todosUL.appendChild(todoEl);

    input.value = "";

    updateLS();
  }
}

function updateLS() {
  const todosEL = document.querySelectorAll("li");
  const todos = [];

  // todosEL returns a NodeList and you can only use a foreach to loop over it

  todosEL.forEach((v) => {
    // create an object from each individual item in the nodelist
    todos.push({
      text: v.innerText,
      completed: v.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
  
}
