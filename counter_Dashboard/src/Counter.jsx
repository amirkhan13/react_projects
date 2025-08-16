import React, { useState } from 'react'
import './Counter.css'
function Counter({value , onIncrement ,onDecrement}) {
   
  return (
    <div className='counter-box'>

        <div className='counter-container'>

       
       <div>
         <button onClick={onIncrement} >Increment</button>
         <span>{value}</span> 
        <button onClick={onDecrement} >Decrement</button> 
       </div>
        </div>
      
    </div>
  )
}

export default Counter
