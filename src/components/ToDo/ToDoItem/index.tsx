import React from 'react';
import './style.css';

interface ToDoItemProps{
    title: string;
    time?: number;
}
const ToDoItem: React.FC<ToDoItemProps> = (props) => {
    return (
        <li>{props.title}</li>
    );
}
export default ToDoItem;