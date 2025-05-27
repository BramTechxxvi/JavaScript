let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const taskInput = document.getElementById("addTask");
    const text = taskInput.value.trim();
    if (text !== "") {
        tasks.push({text: text, completed: false});
        saveTask();
        displayTasks()
        taskInput.value = "";
    }
}

function displayTasks() {
    const taskList = document.getElementById("task-List");
    taskList.innerHTML = "";
    tasks.forEach((task, index)=> {
        const li = document.createElement("li");
        li.dataset.index = index;

        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.onchange = function () {
            tasks[index].completed = checkbox.checked;
            saveTask();
        };
        label.appendChild(checkbox);
        label.append(`${task.text}`);

        const delButton = document.createElement("button");
        delButton.textContent = "delete";
        delButton.onclick = function () {
            deleteTask(index);
        };

        li.appendChild(label);
        li.appendChild(delButton);
        taskList.appendChild(li);
    })
}

function deleteTask(index) {
    tasks.splice(index,1)
    saveTask();
    displayTasks()
}

function searchTasks() {
    const query = document.getElementById("searchTask").value.toLowerCase();
    const items = document.querySelectorAll("#task-List li");
    items.forEach(task => {
        const taskText = task.querySelector("label").textContent.toLowerCase();
        task.style.display = taskText.includes(query) ? '' : "none";
    })
}
displayTasks();