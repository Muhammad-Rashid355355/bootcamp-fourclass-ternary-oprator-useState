import React,{useState} from "react";
import './App.css';
import {Propsvalue} from "./counter-props";
function App() {
  let [count,setcount]=useState(0);
  let [isMorning,setMorning]=useState(true);
  return (
    <div className={`App ${isMorning ? 'morning' : ''}`}>
      <h2>here yours day:{isMorning ? 'Morning' : 'Night'}</h2>
     <Propsvalue counter={count}/>
    <button onClick={()=>setcount(count + 1)}>increment value</button>
    <button onClick={()=>setMorning(!isMorning)}>update day</button>
    </div>
  );
}

export default App;
