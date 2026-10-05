// DOM elements
let addBtn  = document.getElementById("add-button")

let todoInput  = document.getElementById("todo-input")

let todoList  = document.getElementById("todo-list")



//Array for the todo list
let todos = [];

//Var for Add todo
let id = 0;

//Functions
function createTodoElement(todo) {
    // TODO: Implement this function

    // 1. Create a new <li> element
    // 2. Add the 'todo-item' class to the <li>
    const li = document.createElement("li");
    li.className = "todo-item";

    // 3. Create a <span> for the todo text
    // 4. Set the span's text content to todo.text
    const span = document.createElement("span");
    span.textContent = todo.text;
    span.className = "todo-text";

    // 5. Create a delete button
    const deletBtn = document.createElement("button");
    deletBtn.className = "delete-button";
    deletBtn.textContent = "Delet todo";

    // 6. Add a click event listener to the delete button that calls deleteTodo(todo.id)
    deletBtn.addEventListener ("click", () =>{
        deleteTodo(todo.id)
    });

    // 7. Append the span and delete button to the <li>
    li.appendChild(span);
    li.appendChild(deletBtn);

    // 8. Return the <li> element
    return li;
}

// Render todos
function renderTodos() {
    // TODO: Implement this function
    // 1. Clear the existing list
    todoList.innerHTML ="";

    // 2. Loop through the todos array
    todos.forEach((todo, index) => {

    // 3. For each todo, call createTodoElement(todo) and append the result to the todo list
    const todoElement = createTodoElement(todo)
        todoList.appendChild(todoElement);
    });
};

// Add todo

function addTodo() {

    // TODO: Implement this function
    // 1. Get the text from the input field
    const newTodo = todoInput.value.trim();
  

    // 2. If the text is not empty:
    // a. Create a new todo object with a unique id and the input text
    if (newTodo !== "") {
        const todo = {
            id: id,
            text: newTodo 
        };

        // b. Add the new todo object to the todos array
        id++;
        todos.push(todo);

        // c. Clear the input field
        todoInput.value = "";

        // d. Call renderTodos() to update the display
        renderTodos();
    };
};

// Delete todo
function deleteTodo(id) {
    // TODO: Implement this function
    // 1. Remove the todo with the given id from the todos array
    todos = todos.filter((todo) => todo.id !== id);
    // 2. Call renderTodos() to update the display
    renderTodos();
};

// TODO: Add a click event listener to the add button that calls addTodo
addBtn.addEventListener("click", addTodo);

// TODO: Add a keypress event listener to the input field 
// that calls addTodo when the Enter key is pressed
todoInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter"){
        addTodo();
    }
});

// Initial render
renderTodos();

console.log(todos)