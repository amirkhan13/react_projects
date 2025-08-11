import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  function incrementCount(){
   if(count <10){
    setCount(count+1)
   }
  }
  function decrementCount(){

    if(count > 0){
      setCount(count -1)
    }

   

  }

  

  return (
    
    <>
      <h1>{count}</h1>
    {count ===10 &&
  
      <p>Max Count limit reached</p> 
      
    }
      
   
    <button onClick={incrementCount} disabled ={count ===10}>Increment</button>
    <button onClick={decrementCount} disabled={count ===0}>Decrement</button>
    
    </>
  )
}

export default App
