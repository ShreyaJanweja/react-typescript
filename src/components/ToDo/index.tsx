import React from 'react';
import ToDoItem  from './ToDoItem';
import './style.css';

interface ToDoitems{
    id:number;
    title:string;
}
interface ToDoProps{
    items: ToDoitems[];
}
const ToDo: React.FC<ToDoProps> = (props)=>{
    return (
        <div className='todo-container' onClick={(e)=>alert("Clicked")}>
            <ol>
                {
                    props.items.map(item => <ToDoItem key={item.id} title={item.title}/>)
                }
            </ol>
        </div>
    );
};

export default ToDo;