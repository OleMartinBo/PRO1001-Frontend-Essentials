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
    if (newTodo) {
        todos.push(newTodo);
        todoInput.value = "";
        renderList();
    }

};
//add test
console.log(todos);


function deletTodos() {
   
};

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

