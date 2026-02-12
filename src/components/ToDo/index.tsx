import React from 'react';
import ToDoItem  from './ToDoItem';
import './style.css';
const ToDo: React.FC = ()=>{
    return (
        <div className='todo-container'>
            <ol>
                <ToDoItem />
                <ToDoItem />
                <ToDoItem />
                <ToDoItem />
                <ToDoItem />
            </ol>
        </div>
    );
};

export default ToDo;