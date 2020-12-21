import React,{useState} from "react";
import './App.css';
import Propsvalue from "./counter-props";
function App() {
 
  let[count,setCount]=useState(0);
  let [isMorning,setMorning]=useState(true);

  return (
<div className={`App ${isMorning ? 'morning' : ''}`}>
  <h1>Good:{isMorning ? 'Morning' : 'Night'}</h1>
<Propsvalue counter={count}/>
<button onClick={()=>setCount(count + 1)}>increment counter</button>
<button onClick={()=>setMorning(!isMorning)} >day&night</button>
</div>
  )
}
   
export default App;
