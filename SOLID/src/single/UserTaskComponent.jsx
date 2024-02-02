import { useEffect, useState } from 'react';
import { UserComponent } from './UserComponent';
import { TasksComponent } from './TaskComponent';

export const UserTasksContainer = () => {
    const [user, setUser] = useState(null);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setUser({ id: 1, username: 'usuarioEjemplo' });
        setTasks(['Tarea 1', 'Tarea 2', 'Tarea 3']);
    }, []);

    return (
        <div>
            <UserComponent user={user} />
            <TasksComponent tasks={tasks} />
        </div>
    );
};

////This is a bad example about single responsability
export const UserTaskComponent = () => {
    const [user, setUser] = useState(null);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Simulamos la carga de datos del usuario y sus tareas
        setUser({ id: 1, username: 'usuarioEjemplo' });
        setTasks(['Tarea 1', 'Tarea 2', 'Tarea 3']);
    }, []);

    return (
        <div>
            <h2>Bienvenido, {user ? user.username : 'Cargando...'}</h2>
            <h3>Tus tareas:</h3>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
};
