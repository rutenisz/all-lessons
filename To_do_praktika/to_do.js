const todo = [];

const deleteTask = (todoTasks, value) => {
  const filteredList = todoTasks.filter((val) => {
    return value !== val;
  });
  addTasksToScreen(filteredList);
};

const addTasksToScreen = (todoTasks) => {
  document.getElementById("tasks").innerHTML = "";

  todoTasks.forEach((value) => {
    const textContent = document.createElement("div");
    textContent.innerHTML = value;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
   
    deleteButton.addEventListener("click", ()=>deleteTask(todoTasks, value ));
    const taskElement = document.createElement("li");
    taskElement.append(textContent);
    taskElement.append(deleteButton);
    document.getElementById("tasks").append(taskElement);
    taskElement.setAttribute("class", "todoTask");
  });
} 


const addTODO = () => {
  const todoValue = document.getElementById("todo_Input").value;
  todo.push(todoValue);
  console.log(todo);

  const todoName = todo_Input.value;

  if (todoName === "") {
    alert("Įveskite task'ą");
  }

  addTasksToScreen(todo);
};

document.getElementById("button").addEventListener("click", addTODO);

const deleteTODO = () => {};
