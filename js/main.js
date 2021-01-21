// Selectors
const toDoInput = document.querySelector(".todo-input");
const toDoBtn = document.querySelector(".todo-btn");
const toDoList = document.querySelector(".todo-list");

//Listeners
const userName = prompt("Username:"); // Get User Name
document.querySelector(".user-name").innerText = userName;
toDoBtn.addEventListener("click", addToDo);
toDoList.addEventListener("click", DeleteCheck);

//Functions
function addToDo(event) {
    //Prevent Form From Submitting
    event.preventDefault();
    // Create <div> **todo**
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");

    //Create <li> **todo-item**
    const newToDo = document.createElement("li");
    newToDo.innerText = toDoInput.value;
    newToDo.classList.add("todo-item");
    toDoDiv.appendChild(newToDo);
    
    //Checked Mark Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa fa-check"></i>';
    completedButton.classList.add("complete-btn");
    toDoDiv.appendChild(completedButton);
    
    //Checked Trash Button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    toDoDiv.appendChild(trashButton);

    // Append To **todo-list**
    toDoList.appendChild(toDoDiv);

    //Clear Todo Input Value
    toDoInput.value = '';
}

// When User Click On Trash Or Check Button
function DeleteCheck(e)
{
    const item = e.target;

    //Delete Todo
    if(item.classList[0] === "trash-btn")
    {
        const todo = item.parentElement;
        todo.remove()
    }
    
    //Completed Todo
    if(item.classList[0] === "complete-btn")
    {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}