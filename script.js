const toDoButton = document.querySelector('.todo-button');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

    toDoButton.addEventListener("click",addTodo);
    todoList.addEventListener("click",deleteTodo);
    filterOption.addEventListener("click", filterTodo);
//create <div>
    function addTodo (e){
        e.preventDefault();
//Create todo div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
//create <li>
        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
// create check Mark button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);

  //Create trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);
 //attach final Todo
        todoList.appendChild(todoDiv);

//clear Todo Input Value  
todoInput.value = "";  
} 
//Delete and Mark
function deleteTodo(e) {
        const item = e.target;
//delete todo
if (item.classList[0] === "trash-btn"){
const todo = item.parentElement;
//animation
todo.classList.add("fall");
todo.addEventListener('transitionend',function(){
        todo.remove();
});

}
//check mark
if(item.classList[0]=== "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
}}

function filterTodo (e) {
        const todos = todoList.childNodes;
        todos.forEach(function(todo) {
                switch(e.target.value) {
                        case "all":
                                todo.style.display = "flex";
                break;
                        case "completed":
                if(todo.classList.contains("completed")){
                        todo.style.display = "flex";
                } else { 
                        todo.style.display = "none";
                }
                break;
                case "uncompleted":
                if(!todo.classList.contains("completed")){
                        todo.style.display = "flex";
              } else{
                todo.style.display = "none";
              }                        
  }   
});

}
