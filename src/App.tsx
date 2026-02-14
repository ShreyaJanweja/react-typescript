// import React from 'react';
// import ToDo from './components/ToDo';
// import Counter from './components/Counter';

// const myToDoItems = [
//     {
//         id:1,
//         title: "I need to study React",
//     },
//     {
//         id:2,
//         title: "I need to study TypeScript",
//     },
// ]
// const App: React.FC = () => {
//     return(
//         <div>
//             <ToDo items={myToDoItems}/>
//             <ToDo items={myToDoItems}/>
//             <ToDo items={myToDoItems}/>
//             <Counter/>
//         </div>
//     );
// }
// export default App;





//API Calling in react and typescript
import React ,{useEffect , useState}from 'react';

interface TodoItem{
    completed: boolean
    id: number
    title: string
    userId: number
}

function App(){
    const [todos, setTodos] = useState<TodoItem[]>([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response)=> response)
        .then((e)=>e.json())
        .then((e)=>setTodos(e as TodoItem[]));
    }, []);
    return <div className='App'>
        {
            todos.map((todo) => (
                <li>{todo.title}</li>
            ))
        }
    </div>
}
export default App;


//first method tha ye fetch API calling
//second method hai using Axios library
//in terminal write - npm i axios (to install axios library)
//learn axios when neede 