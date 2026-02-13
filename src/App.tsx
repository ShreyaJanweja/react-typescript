import React from 'react';
import ToDo from './components/ToDo';

const myToDoItems = [
    {
        id:1,
        title: "I need to study React",
    },
    {
        id:2,
        title: "I need to study TypeScript",
    },
]
const App: React.FC = () => {
    return(
        <div>
            <ToDo items={myToDoItems}/>
            <ToDo items={myToDoItems}/>
            <ToDo items={myToDoItems}/>
        </div>
    );
}

export default App;