export const TasksComponent = ({ tasks }) => {
    return (
        <div>
            <h3>Tus tareas:</h3>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
};
