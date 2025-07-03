const API_URL = 'http://localhost:8080/tasks';
const messageDiv = document.getElementById('message');
const taskList = document.getElementById('taskList');
const taskIdInput = document.getElementById('taskId');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');

// Fetch all tasks
function fetchTasks() {
    fetch(API_URL)
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch tasks');
            return response.json();
        })
        .then(tasks => {
            taskList.innerHTML = '';
            tasks.forEach(task => {
                const li = document.createElement('li');
                li.innerHTML = `${task.title} - ${task.description} (${task.status}) 
                    <div>
                        <button class="edit" onclick="setTaskId('${task.id}')">Edit</button>
                        <button onclick="deleteTask('${task.id}')">Delete</button>
                    </div>`;
                taskList.appendChild(li);
            });
        })
        .catch(error => {
            messageDiv.textContent = 'Error: ' + error.message;
        });
}

// Create a task
function createTask() {
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    if (!title) {
        messageDiv.textContent = 'Title is required';
        return;
    }

    fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description })
    })
        .then(response => {
            if (!response.ok) throw new Error('Failed to create task');
            return response.json();
        })
        .then(data => {
            messageDiv.textContent = data.message;
            titleInput.value = '';
            descriptionInput.value = '';
            fetchTasks();
        })
        .catch(error => {
            messageDiv.textContent = 'Error: ' + error.message;
        });
}

// Update a task
function updateTask() {
    const id = taskIdInput.value.trim();
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    if (!id || !title) {
        messageDiv.textContent = 'Task ID and title are required';
        return;
    }

    fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description })
    })
        .then(response => {
            if (!response.ok) throw new Error('Failed to update task');
            return response.json();
        })
        .then(data => {
            messageDiv.textContent = data.message;
            taskIdInput.value = '';
            titleInput.value = '';
            descriptionInput.value = '';
            fetchTasks();
        })
        .catch(error => {
            messageDiv.textContent = 'Error: ' + error.message;
        });
}

// Delete a task
function deleteTask(id) {
    fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (!response.ok) throw new Error('Failed to delete task');
            return response.json();
        })
        .then(data => {
            messageDiv.textContent = data.message;
            fetchTasks();
        })
        .catch(error => {
            messageDiv.textContent = 'Error: ' + error.message;
        });
}

// Fetch task by ID
function fetchTaskById() {
    const id = taskIdInput.value.trim();
    if (!id) {
        messageDiv.textContent = 'Task ID is required';
        return;
    }

    fetch(`${API_URL}/${id}`)
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch task');
            return response.json();
        })
        .then(data => {
            titleInput.value = data.task.title;
            descriptionInput.value = data.task.description;
            messageDiv.textContent = 'Task fetched successfully';
        })
        .catch(error => {
            messageDiv.textContent = 'Error: ' + error.message;
        });
}

// Set task ID for editing
function setTaskId(id) {
    taskIdInput.value = id;
    fetchTaskById();
}

// Load tasks on page load
document.addEventListener('DOMContentLoaded', fetchTasks);