// DOM elements
let addBtn  = document.getElementById("add-button")
console.log(addBtn)

let todoInput  = document.getElementById("todo-input")
console.log(todoInput)

let todoList  = document.getElementById("todo-list")
console.log(todoList)


//Array for todo list
let todos = [];

//Functions

addBtn.addEventListener("click", addTodos);

function addTodos(){
    
    const newTodo = todoInput.value;
    if (newTodo) {
        todos.push(newTodo);
        todoInput.value = " ";
    }

};

console.log(todos)

function deletTodos () {
    
};

function renderList () {

};