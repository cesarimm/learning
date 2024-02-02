import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { UserTaskComponent, UserTasksContainer } from './single/UserTaskComponent.jsx';
import { Form } from './Liskov/Form.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App /> */}
        {/* Single example */}
        {/* <UserTaskComponent />
        <UserTasksContainer /> */}

        {/* Liskov */}
        <Form />
    </React.StrictMode>
);
