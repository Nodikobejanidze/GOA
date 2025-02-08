import useTasks from "./Components/useTasks";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Dashboard from "./components/Dashboard";
import ThemeToggle from "./components/ThemeToggle";




const App = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();

  return (
    <div className="app">
      <ThemeToggle />
      <Dashboard tasks={tasks} />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      
    </div>
  );
};

export default App;
