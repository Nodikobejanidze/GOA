let tasks = [];

export function addTask(text) {
    tasks.push({ text, completed: false });
    saveTasks();
}

export function toggleTask(index) {
    if (tasks[index]) {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
    }
}

export function removeTask(index) {
    if (tasks[index]) {
        tasks.splice(index, 1);
        saveTasks();
    }
}

export function getTasks() {
    return tasks;
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
}

loadTasks();