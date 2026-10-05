// DOM elements
let addBtn  = document.getElementById("add-button")
console.log(addBtn)

let todoInput  = document.getElementById("todo-input")
console.log(todoInput)

let todoList  = document.getElementById("todo-list")
console.log(todoList)


//Array for the todo list
let todos = [];

//Functions
addBtn.addEventListener("click", addTodos);

function addTodos(){
    
    const newTodo = todoInput.value;
    if (newTodo) === "" {
        todos.push(newTodo);
        todoInput.value = "";
        renderList();
    }

};


function createTodoElement(todo) {
    // TODO: Implement this function
    // 1. Create a new <li> element
    const li = document.createElement("li");
    // 2. Add the 'todo-item' class to the <li>
     li.className = "todo-item";
    // 3. Create a <span> for the todo text
    const span =document.createElement("span");
    // 4. Set the span's text content to todo.text
     span.className = "todo-text";
    // 5. Create a delete button
    const deletBtn = document.createElement("button");
    // 6. Add a click event listener to the delete button that calls deleteTodo(todo.id)
    deletBtn.addEventListener ("click", () =>{
        todos.splice(index, 1);
        renderList();
    });

    // 7. Append the span and delete button to the <li>
    li.appendChild(span);
    li.appendChild(deletBtn);
    // 8. Return the <li> element
    return todoList.appendChild(li);
}

// Render todos
function renderTodos() {
    // TODO: Implement this function
    // 1. Clear the existing list
    // 2. Loop through the todos array
    // 3. For each todo, call createTodoElement(todo) and append the result to the todo list
}

// Add todo
function addTodo() {
    
    // TODO: Implement this function
    // 1. Get the text from the input field
    const newTodo = todoInput.value.trim();
    let id = 0;

    // 2. If the text is not empty:
    // a. Create a new todo object with a unique id and the input text
    if (newTodo !== "") {
        const todo = {
            id: id,
            text: newTodo 
        }

        // b. Add the new todo object to the todos array
        id++;
        todos.push(newTodo);

        // c. Clear the input field
        todoInput.value = "";

        // d. Call renderTodos() to update the display
        renderTodos()
    };
}


/* 
Add the li to the ul in html
creats a new btn to delete todos
Use splice where first parameter (index) defines the position 
where new elements should be added (spliced in).The second parameter 
(1) defines how many elements should be removed (w3schools).
*/
function renderList() {
    todoList.innerHTML ="";
    todos.forEach((todo, index) => {
        const li =document.createElement("li");
        const span =document.createElement("span");
        li.className = "todo-item";
        span.className = "todo-text";
        span.textContent = todo;
       

        const deletBtn = document.createElement("button");
        deletBtn.className = "delete-button";
        deletBtn.textContent = "Delet todo";

        deletBtn.addEventListener ("click", () =>{
            todos.splice(index, 1);
            renderList();
        });

        li.appendChild(span);
        li.appendChild(deletBtn);

        todoList.appendChild(li);

    });
    
};

