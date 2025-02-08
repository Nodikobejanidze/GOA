const TaskItem = ({ task, toggleTask, deleteTask }) => {
    return (
        <li>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
            <span style={{ textDecoration: task.completed ? "line-through" : "none"}}>
                {task.title}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete❌</button>
        </li>

        
    );
};

export default TaskItem;