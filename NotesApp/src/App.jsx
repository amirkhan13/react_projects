import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [notes , setNotes] = useState([])
  const [inputValue ,setInputValue] = useState('');

  const handleInput=(e)=>{
      const value = e.target.value;
      setInputValue(value)
  }

  const addnote =()=>{
    if(inputValue.trim() !==""){
      setNotes(prevNotes =>[...prevNotes , inputValue]);
      setInputValue("")
    }
  }

  const deletenote =(index)=>{
    setNotes(prevNotes=>prevNotes.filter((_,id)=>id!==index))
  }
 

  return (
   <>
   <div className="notes-container">
    <h1>Notes App</h1>
    <div className="notes-top">
      <textarea name="input-area" id="" placeholder='Add a note...' rows={10} cols={100}  
      onChange={handleInput}
      value={inputValue}
      >
      </textarea>
      <button className='add' onClick={addnote}>Add Note</button>
    </div>
    <hr />
      <h2>Your Notes</h2>
    
      <div className="notes-bottom">
    {
      notes.length ===0? <p>No notes yet....</p>:
        notes.map((note , index)=>(
          <div className="notes-box" key={index}>
        <p >{note}</p>
        <button onClick={()=>{deletenote(index)}}>delete</button>
      </div>
        ))
      }
    </div>
    
   </div>
   </>
  )
}

export default App
