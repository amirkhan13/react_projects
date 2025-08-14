import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [todos , setTodos] = useState([]);
  const [inputValue , setInputValue] = useState('');
  const [editIndex ,setEditIndex]= useState(null);  




  const handleInput=(e)=>{
    const value = e.target.value;
    setInputValue(value)

    
  }

  const addTodo=()=>{
    if(inputValue.trim()!==""){

      setTodos(prevTodos => [...prevTodos, inputValue])  
      
      
      setInputValue("")
    }
  }

  const deleteTodo=(index)=>{
    setTodos((prevTodos)=>prevTodos.filter((_,i)=>i!==index))
   
  }

  const editTodo=()=>{
      if(inputValue.trim() ==="" ||editIndex ===null) return;

      const updatedTodos =[...todos];
      updatedTodos[editIndex] = inputValue;
      setTodos(updatedTodos);
      setInputValue("")
      setEditIndex(null)
  }


  return (
    <div>
    <h1>TODO LIST</h1>
      <div className="todo">
        <input type="text" placeholder='add todo...' onChange={handleInput} value={inputValue} />
           {editIndex === null ? (
          <button className="add" onClick={addTodo}>Add</button>
        ) : (
          <button className="add" onClick={editTodo}>Save</button>
        )}
        <div className="list-items">
        <ul>
         {
          todos.map((todo , index)=>(
             <li key={index}>
              {todo}
            <div>

            <button className='edit' onClick={()=>{
              setInputValue(todos[index]);
              setEditIndex(index)
            }}>Edit</button>
          <button className='delete' onClick={()=>deleteTodo(index)}>Delete</button>
            </div>
          </li>
          ))
         }
          
        </ul>
          
      </div>
      </div>
      
    </div>
  )
}

export default App
