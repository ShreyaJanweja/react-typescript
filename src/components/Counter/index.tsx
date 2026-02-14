import React, { useState , useEffect } from 'react';
import './style.css';

const Counter: React.FC = (props) =>{
    const [counter,setCounter] = useState(0);
    useEffect(()=>{
        console.log('Counter element');
    },[])

    useEffect(()=>{
        console.log("user updated count");
    },[counter])

    const IncrementCounter = () =>{
        setCounter(counter+1);
         
    }
    const DecrementCounter = () => {
        if(counter===0) return;
        setCounter(counter-1);
    }
    return (
        <div className='counter-container'>
            <h1>{counter}</h1>
                <button onClick={IncrementCounter} style={{background:'lightgreen'}}>INC</button>
                <button onClick={DecrementCounter} style={{background: 'tomato'}}>DEC</button>
        </div>
    );
};
export default Counter;


//hooks theory
//hooks are function that adds interactivity in the component and dynamic .
//by using hooks we can show the values on screen without refreshing the page and we can also use the same code in multiple places without writing it again and again.
//useState is a hook that allows us to add state to our functional components. It returns an array with two elements: the current state value and a function to update that value. We can use this function to update the state and re-render the component with the new value. 
// all teh hooks start with 'use' and they are used to manage state and side effects in functional components.

//hooks functions starting with 'use' can only be called at the top level of your component on your own hooks.
// ek component ke multiple hooks ho skte hai but
//nested hooks nhi ho skte hai . inside any loop ya function hum new hook ni bna skte
//typescript mei hum hooks ke type ko define kr skte hai. for example, useState hook ke liye hum uske type ko define kr skte hai taki hume pata chale ki hum kis type ka data store kr rhe hai. isse hume better code readability aur maintainability milti hai.