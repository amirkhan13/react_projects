import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'

function App() {
  const [count ,setCounts]= useState([0,0,0]);
  
  const updateCounter=(index , change)=>{
    const newCounts = [...count];
    newCounts[index] += change
    setCounts(newCounts)
  }
 
  const total = count.reduce((a,b)=>a+b ,0);  
  return (
    <>
    <h1>Lifted Coutner App</h1>
   <Counter
    value ={count[0]}
    onIncrement ={()=>updateCounter(0,1)}
    onDecrement ={()=>updateCounter(0,-1)}
   />
   <Counter
    value ={count[1]}
    onIncrement ={()=>updateCounter(1,1)}
    onDecrement ={()=>updateCounter(1,-1)}
   />
   <Counter
    value ={count[2]}
    onIncrement ={()=>updateCounter(2,1)}
    onDecrement ={()=>updateCounter(2,-1)}
   />

   <h2>Total:{total}</h2>
    </>
  )
}

export default App
