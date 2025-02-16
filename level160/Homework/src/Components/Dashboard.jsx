const Dashboard = ({ tasks }) => {
    const completed = tasks.filter(task => task.completed).length;
    const total = tasks.length;

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Completed: {completed} / {total}</p>
        </div>
    );
};

export default Dashboard;